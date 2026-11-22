/* RDM V8.0.0: Real-time Firestore sync + Scorecards, Stats, Achievements, Availability, Playing XI */
const XCOL = {
  stats: 'PlayerStats',
  achievements: 'Achievements',
  availability: 'Availability',
  lineups: 'PlayingXI'
};
let XD = { stats: [], achievements: [], availability: [], lineups: [] };
let galleryFilter = 'ALL';
let xRealtimeActive = false;

function rdmWhen(ms) {
  if (!ms) return '';
  const d = new Date(ms);
  return '🕒 ' + d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ' • ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

const xdoc = d => ({ ...d.data(), _docId: d.id });
const xStrip = obj => typeof window.rdmStripDocMeta === 'function' ? window.rdmStripDocMeta(obj) : (() => { const c = { ...(obj || {}) }; delete c._docId; delete c._profileUid; return c; })();
const xReportErr = (err, label) => typeof window.rdmReportWriteError === 'function' ? window.rdmReportWriteError(err, label) : console.warn(label, err);
const xCanEditPlayer = id => rdmAdmin() || (window.__rdmUrlKeyRole === 'player' && session?.mode === 'player' && session.playerId === id && (typeof window.rdmIsPlayerUnlocked !== 'function' || window.rdmIsPlayerUnlocked(id)));

function xHydrateLocal() {
  const ov = window.rdmGetOverrides?.();
  if (ov?.xd) {
    ['stats', 'achievements', 'availability', 'lineups'].forEach(k => {
      if (Array.isArray(ov.xd[k])) XD[k] = ov.xd[k];
    });
  }
}

function xClearOverride(key) {
  window.rdmSetOverrides?.(o => {
    if (o.xd && key in o.xd) delete o.xd[key];
  });
}

function xSaveOverride(key, arr) {
  window.rdmSetOverrides?.(o => {
    o.xd = o.xd || {};
    o.xd[key] = arr;
  });
}
window.xSaveOverride = xSaveOverride;

async function xload() {
  if (typeof rdmDB === 'undefined') return;
  try {
    const [s, a, v, l] = await Promise.all([
      rdmDB.collection(XCOL.stats).get(),
      rdmDB.collection(XCOL.achievements).get(),
      rdmDB.collection(XCOL.availability).get(),
      rdmDB.collection(XCOL.lineups).get()
    ]);
    XD.stats = s.docs.map(xdoc);
    XD.achievements = a.docs.map(xdoc).sort((x, y) => (y.createdMs || 0) - (x.createdMs || 0));
    XD.availability = v.docs.map(xdoc);
    XD.lineups = l.docs.map(xdoc).sort((x, y) => (y.createdMs || 0) - (x.createdMs || 0));
    ['stats', 'achievements', 'availability', 'lineups'].forEach(xClearOverride);
  } catch (e) {
    console.warn('Local fallback for enhancements', e?.code || e);
    xHydrateLocal();
  }
  xrender();
}

function xStartRealtimeSync() {
  if (xRealtimeActive || typeof rdmDB === 'undefined') return;
  xRealtimeActive = true;

  const watch = (col, key, sorter) => {
    try {
      rdmDB.collection(col).onSnapshot(snap => {
        const docs = snap.docs.map(xdoc);
        XD[key] = sorter ? docs.sort(sorter) : docs;
        xClearOverride(key);
        xrender();
        window.v6render?.();
        if (session?.mode === 'player') window.renderProfile?.();
        window.refreshAdminSectionManager?.();
      }, err => console.warn('Realtime watch error:', col, err?.code || err));
    } catch (e) {
      console.warn('Realtime init skipped:', col, e);
    }
  };

  watch(XCOL.stats, 'stats');
  watch(XCOL.achievements, 'achievements', (a, b) => (b.createdMs || 0) - (a.createdMs || 0));
  watch(XCOL.availability, 'availability');
  watch(XCOL.lineups, 'lineups', (a, b) => (b.createdMs || 0) - (a.createdMs || 0));
}

const xv = id => (document.getElementById(id)?.value || '').trim();
const xp = (label, def = '') => null;
const xnum = v => Number(v || 0) || 0;

function xrender() {
  renderHomeExtras();
  renderStats();
  renderAchievements();
  renderAvailability();
  renderLineups();
  window.renderGalleryAlbums?.();
  renderPinnedNews();
  if (typeof renderSquadFullProfiles === 'function') renderSquadFullProfiles();
}

function renderHomeExtras() {
  if (typeof window.rdmRenderHomeMatchHub === 'function') {
    window.rdmRenderHomeMatchHub();
    return;
  }
  let box = document.getElementById('homeMatchHub');
  if (!box) {
    box = document.createElement('div');
    box.id = 'homeMatchHub';
    box.className = 'homeMatchHub';
    document.querySelector('#home .metrics')?.insertAdjacentElement('beforebegin', box);
  }
  const upcoming = (D.matches || []).find(m => !/won|lost|draw|result|completed|finished/i.test((m.note || '') + ' ' + (m.status || '')));
  const recent = (D.matches || []).find(m => /won|lost|draw|result|completed|finished/i.test((m.note || '') + ' ' + (m.status || '')));
  box.innerHTML = `<div class="miniMatch miniMatchNext">
    <span>Next Match</span>
    ${upcoming ? `<b id="homeNextMatch">RDM vs ${mini(upcoming.opponent)}</b><small>${mini([upcoming.date, upcoming.venue].filter(Boolean).join(' • '))}</small>` : '<b id="homeNextMatch">No upcoming match</b>'}
    <div class="countdownTimer" id="homeCountdown" hidden>
      <div class="cdUnit"><strong id="cdDays">00</strong><span>Days</span></div>
      <span class="cdSep" aria-hidden="true">:</span>
      <div class="cdUnit"><strong id="cdHours">00</strong><span>Hours</span></div>
      <span class="cdSep" aria-hidden="true">:</span>
      <div class="cdUnit"><strong id="cdMinutes">00</strong><span>Minutes</span></div>
    </div>
  </div>
  <div class="miniMatch miniMatchRecent">
    <span>Recent Result</span>
    ${recent ? `<b>RDM vs ${mini(recent.opponent)}</b><small>${mini(recent.note || recent.status || '')}</small>` : '<b class="mutedTitle">No result added yet</b><small>Latest scorecard updates will appear here</small>'}
  </div>`;
}

function renderStats() {
  const el = document.getElementById('statsList');
  if (!el) return;
  el.innerHTML = D.players.map(p => {
    const s = XD.stats.find(z => z.playerId === p.id) || {};
    return `<article class="statCard">
      <img src="${esc(p.image || 'assets/rdm-logo.png?v=7400')}" onerror="this.onerror=null;this.src='assets/rdm-logo.png?v=7400'">
      <h3>${mini(p.name)}</h3>
      <div class="statNums">
        <b>${xnum(s.matches)}<small>Matches</small></b>
        <b>${xnum(s.runs)}<small>Runs</small></b>
        <b>${xnum(s.wickets)}<small>Wickets</small></b>
        <b>${xnum(s.highScore)}<small>High Score</small></b>
        <b>${xnum(s.fours)}<small>4s</small></b>
        <b>${xnum(s.sixes)}<small>6s</small></b>
        <b>${xnum(s.fifties)}<small>50s</small></b>
        <b>${xnum(s.hundreds)}<small>100s</small></b>
      </div>
      <p>Strike Rate: ${xnum(s.strikeRate)} · Economy: ${xnum(s.economy)}</p>
      <p>Best Bowling: ${esc(s.bestBowling || '—')}</p>
      ${rdmAdmin() ? `<button class="tinyBtn" onclick="editStats('${p.id}')">Edit Stats</button>` : ''}
    </article>`;
  }).join('');
}

async function editStats(id) {
  if (!rdmAdmin()) return;
  const s = XD.stats.find(z => z.playerId === id) || {};
  const ask = (n, v) => xp(n, v ?? 0);
  const matches = ask('Matches', s.matches);
  if (matches === null) return;
  const payload = {
    playerId: id,
    matches: xnum(matches),
    runs: xnum(ask('Runs', s.runs)),
    wickets: xnum(ask('Wickets', s.wickets)),
    highScore: xnum(ask('Highest Score', s.highScore)),
    bestBowling: ask('Best Bowling', s.bestBowling || '') || '',
    fours: xnum(ask('Fours', s.fours)),
    sixes: xnum(ask('Sixes', s.sixes)),
    fifties: xnum(ask('50s', s.fifties)),
    hundreds: xnum(ask('100s', s.hundreds)),
    runOuts: xnum(ask('Run Outs', s.runOuts)),
    strikeRate: xnum(ask('Strike Rate', s.strikeRate)),
    economy: xnum(ask('Economy', s.economy))
  };
  const data = { ...payload, _docId: id };
  const idx = XD.stats.findIndex(z => z.playerId === id);
  if (idx >= 0) XD.stats[idx] = data;
  else XD.stats.push(data);
  try {
    await rdmDB.collection(XCOL.stats).doc(id).set({ ...xStrip(payload), updatedAt: rdmStamp() }, { merge: true });
  } catch (err) {
    xSaveOverride('stats', XD.stats);
    xReportErr(err, 'Stats sync');
  }
  xrender();
}

function renderAchievements() {
  const el = document.getElementById('achievementList');
  if (!el) return;
  el.innerHTML = XD.achievements.length
    ? XD.achievements.map(a => `<article class="card">
        <h3>🏆 ${mini(a.title)}</h3>
        <p>${mini(a.playerName || 'TEAM')} · ${mini(a.detail || '')}</p>
        ${rdmAdmin() ? `<button class="tinyBtn deleteBtn" onclick="xdelete('${XCOL.achievements}','${a._docId}')">Delete</button>` : ''}
      </article>`).join('')
    : '<div class="empty">No achievements added yet</div>';
}

async function addAchievement() {
  if (!rdmAdmin()) return;
  const title = xp('Achievement / Award');
  if (!title) return;
  const playerName = xp('Player Name (or TEAM)', 'TEAM');
  const detail = xp('Details', '');
  const payload = { title, playerName, detail, createdMs: Date.now() };
  const rec = { ...payload, _docId: 'loc_' + Date.now() };
  try {
    const ref = await rdmDB.collection(XCOL.achievements).add({ ...xStrip(payload), updatedAt: rdmStamp() });
    rec._docId = ref.id;
  } catch (err) {
    xReportErr(err, 'Achievement sync');
  }
  XD.achievements.unshift(rec);
  xrender();
}

function renderAvailability() {
  const sum = document.getElementById('availabilitySummary');
  if (sum) {
    let avCount = 0, unCount = 0, penCount = 0;
    D.players.forEach(p => {
      const a = XD.availability.find(z => z.playerId === p.id);
      const st = (a?.status || 'NOT SET').toUpperCase();
      if (st === 'AVAILABLE') avCount++;
      else if (st === 'UNAVAILABLE') unCount++;
      else penCount++;
    });
    sum.innerHTML = `<div class="availSummaryStat is-available"><strong>${avCount}</strong><span>Available</span></div>
      <div class="availSummaryStat is-unavailable"><strong>${unCount}</strong><span>Unavailable</span></div>
      <div class="availSummaryStat"><strong>${penCount}</strong><span>Pending</span></div>`;
  }
  const el = document.getElementById('availabilityList');
  if (!el) return;
  el.innerHTML = D.players.map(p => {
    const a = XD.availability.find(z => z.playerId === p.id);
    const st = (a?.status || 'NOT SET').toUpperCase();
    const label = st === 'AVAILABLE' ? 'Available' : st === 'UNAVAILABLE' ? 'Unavailable' : 'Not Set';
    const cls = st === 'AVAILABLE' ? 'available' : st === 'UNAVAILABLE' ? 'unavailable' : '';
    const canEdit = xCanEditPlayer(p.id);
    return `<div class="availabilityRow">
      <div class="availabilityPlayerInfo">
        <span>${mini(p.name)}</span>
        <small>${esc(p.id)} · ${mini(p.role)}</small>
      </div>
      <b class="${cls}">${label}</b>
      ${canEdit ? `<button class="tinyBtn" onclick="setAvailability('${p.id}')">Change</button>` : ''}
    </div>`;
  }).join('');
}

async function setAvailability(id) {
  if (!xCanEditPlayer(id)) return;
  const status = (xp('Type AVAILABLE or UNAVAILABLE', 'AVAILABLE') || '').toUpperCase();
  if (!['AVAILABLE', 'UNAVAILABLE'].includes(status)) return toast('Use AVAILABLE / UNAVAILABLE');
  const payload = { playerId: id, status };
  const rec = { ...payload, _docId: id };
  const idx = XD.availability.findIndex(z => z.playerId === id);
  if (idx >= 0) XD.availability[idx] = rec;
  else XD.availability.push(rec);
  try {
    await rdmDB.collection(XCOL.availability).doc(id).set({ ...xStrip(payload), updatedAt: rdmStamp() }, { merge: true });
  } catch (err) {
    xSaveOverride('availability', XD.availability);
    xReportErr(err, 'Availability sync');
  }
  xrender();
}

function renderLineups() {
  const el = document.getElementById('lineupList');
  if (!el) return;
  el.innerHTML = XD.lineups.length
    ? XD.lineups.map(l => `<article class="card lineupCard">
        <div class="lineupCardHead">
          <div>
            <span class="proStatus">MATCHDAY XI</span>
            <h3>${mini(l.title || 'PLAYING XI')}</h3>
            ${l.match ? `<p>${mini(l.match)}</p>` : ''}
          </div>
          ${l.createdMs ? `<span class="contentTime">${rdmWhen(l.createdMs)}</span>` : ''}
        </div>
        <div class="xiGrid">${(l.players || []).map((id, i) => {
          const p = D.players.find(x => x.id === id);
          const meta = [p?.role ? mini(p.role) : '', p?.jersey ? '#' + p.jersey : ''].filter(Boolean).join(' · ');
          return `<span><em class="xiOrder">${String(i + 1).padStart(2, '0')}</em><div><b>${mini(p?.name || id)}</b>${meta ? `<small>${meta}</small>` : ''}</div></span>`;
        }).join('')}</div>
        ${(l.subs || []).length ? `<div class="xiSubsRow"><strong>Substitutes:</strong> ${(l.subs || []).map(id => mini(D.players.find(x => x.id === id)?.name || id)).join(' · ')}</div>` : ''}
        ${rdmAdmin() ? `<div class="v62Actions"><button class="tinyBtn rdmEditBtn" onclick="rdmSwapLineupPlayer('${l._docId}')">Swap XI / Sub</button><button class="tinyBtn deleteBtn" onclick="xdelete('${XCOL.lineups}','${l._docId}')">Delete</button></div>` : ''}
      </article>`).join('')
    : '<div class="empty">No Playing XI published yet</div>';
}

async function addLineup() {
  if (!rdmAdmin()) return;
  const title = xp('Title', 'PLAYING XI');
  if (!title) return;
  const match = xp('Match / Opponent', '');
  const ids = xp('Enter 11 Player IDs separated by comma', 'RDM001,RDM002,RDM003,RDM004,RDM005,RDM006,RDM007,RDM008,RDM009,RDM010,RDM011');
  if (!ids) return;
  const players = ids.split(',').map(x => x.trim().toUpperCase()).filter(Boolean).slice(0, 11);
  const subs = (xp('Substitute Player IDs separated by comma', 'RDM012,RDM013,RDM014,RDM015') || '').split(',').map(x => x.trim().toUpperCase()).filter(Boolean);
  const payload = { title, match, players, subs, createdMs: Date.now() };
  const rec = { ...payload, _docId: 'loc_' + Date.now() };
  try {
    const ref = await rdmDB.collection(XCOL.lineups).add({ ...xStrip(payload), updatedAt: rdmStamp() });
    rec._docId = ref.id;
  } catch (err) {
    xReportErr(err, 'Playing XI sync');
  }
  XD.lineups.unshift(rec);
  xrender();
}

function renderPinnedNews() {
  const n = document.getElementById('newsList');
  if (!n) return;
  const sorted = [...D.news].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || (b.createdMs || 0) - (a.createdMs || 0));
  n.innerHTML = sorted.length
    ? sorted.map(x => `<article class="card ${x.pinned ? 'pinnedNews' : ''}">
        ${x.pinned ? '<span class="pinTag">📌 Pinned Announcement</span>' : ''}
        <div class="contentTime topTime">${rdmWhen(x.createdMs)}</div>
        <h3>${mini(x.title)}</h3>
        <p class="preserveLines">${mini(x.text)}</p>
        ${rdmAdmin() ? `<div class="contentActions">
          <button type="button" class="tinyBtn" onclick="editNews('${x._docId}')">Edit</button>
          <button type="button" class="tinyBtn" onclick="togglePin('${x._docId}',${!x.pinned})">${x.pinned ? 'Unpin' : 'Pin to Home'}</button>
          <button type="button" class="tinyBtn deleteBtn" onclick="xdelete('News','${x._docId}')">Delete</button>
        </div>` : ''}
      </article>`).join('')
    : '<div class="empty">No announcements yet</div>';
}

async function editNews(id) {
  if (!rdmAdmin()) return;
  const x = (D.news || []).find(n => n._docId === id) || {};
  if (typeof window.rdmUnifiedModal !== 'function') return toast('Form loading');
  window.rdmUnifiedModal('Edit News', [
    { name: 'title', label: 'Title', value: x.title || '', required: true },
    { name: 'text', label: 'News / Announcement', type: 'textarea', value: x.text || '', rows: 6, required: true }
  ], async d => {
    x.title = String(d.title || '').trim();
    x.text = String(d.text || '').trim();
    try {
      await rdmDB.collection('News').doc(id).set({ title: x.title, text: x.text, updatedAt: rdmStamp() }, { merge: true });
    } catch (err) {
      window.rdmSaveCollectionOverride?.('news', D.news);
      xReportErr(err, 'News sync');
    }
    rdmRefresh();
    setTimeout(xrender, 80);
    window.refreshAdminSectionManager?.();
    toast('News updated & synced');
  });
}

async function togglePin(id, pinned) {
  if (!rdmAdmin()) return;
  const x = (D.news || []).find(n => n._docId === id);
  if (x) x.pinned = pinned;
  try {
    await rdmDB.collection('News').doc(id).set({ pinned, updatedAt: rdmStamp() }, { merge: true });
  } catch (err) {
    window.rdmSaveCollectionOverride?.('news', D.news);
    xReportErr(err, 'Pin sync');
  }
  rdmRefresh();
  setTimeout(xrender, 100);
  window.refreshAdminSectionManager?.();
  toast(pinned ? 'News pinned' : 'News unpinned');
}

async function xdelete(col, id) {
  if (!rdmAdmin()) return;
  const run = async () => {
    if (id && !String(id).startsWith('loc_')) {
      try {
        await rdmDB.collection(col).doc(id).delete();
      } catch (err) {
        xReportErr(err, 'Delete ' + col);
      }
    }
    if (col === 'Gallery') {
      D.gallery = D.gallery.filter(x => x._docId !== id);
      rdmRefresh();
    } else if (col === 'News') {
      D.news = D.news.filter(x => x._docId !== id);
      rdmRefresh();
    } else if (col === 'Matches') {
      D.matches = D.matches.filter(x => x._docId !== id);
      rdmRefresh();
    } else {
      const map = { Achievements: 'achievements', PlayingXI: 'lineups', PlayerStats: 'stats', Availability: 'availability' };
      const k = map[col];
      if (k) XD[k] = XD[k].filter(x => x._docId !== id);
      xrender();
    }
    window.refreshAdminSectionManager?.();
    toast('Deleted');
  };
  if (typeof window.rdmConfirmModal === 'function') {
    return window.rdmConfirmModal('Delete Item', 'This action cannot be undone.', run);
  }
  return run();
}

window.editNews = editNews;
window.togglePin = togglePin;
window.xdelete = xdelete;
window.xload = xload;
window.sharePlayerProfile = async id => {
  if (typeof window.openPlayerShareModal === 'function') return window.openPlayerShareModal(id);
  const p = D.players.find(x => x.id === id);
  const url = location.origin + location.pathname + '#player=' + encodeURIComponent(id);
  const data = { title: p?.name || 'RDM Player', text: `${p?.name || id} · Rehan Dominators Mahuawan`, url };
  try {
    if (navigator.share) await navigator.share(data);
    else { await navigator.clipboard.writeText(url); toast('Profile link copied'); }
  } catch (e) {}
};

const oldOpen = window.openPlayerProfile;
window.openPlayerProfile = function (id) {
  oldOpen(id);
  setTimeout(() => {
    const c = document.querySelector('#publicProfileModal .publicProfileCard');
    if (c && !c.querySelector('.shareProfileBtn')) {
      c.insertAdjacentHTML('beforeend', `<div class="publicProfileFooterActions"><button type="button" class="shareProfileBtn" data-share-player="${esc(id)}">Share Player Profile</button></div>`);
    }
  }, 50);
};

window.addScorecard = async function () {
  if (!rdmAdmin()) return;
  const opponent = xp('Opponent');
  if (!opponent) return;
  const date = xp('Date', '');
  const venue = xp('Venue', '');
  const ourScore = xp('RDM Score (example 145/6)', '');
  const oppScore = xp('Opponent Score', '');
  const result = xp('Result', '');
  const potm = xp('Player of the Match', '');
  try {
    await rdmDB.collection('Matches').add({ opponent, date, venue, note: result, status: 'RESULT', ourScore, oppScore, potm, createdMs: Date.now(), updatedAt: rdmStamp() });
  } catch (err) {
    xReportErr(err, 'Add Scorecard');
  }
  await rdmLoadAll();
};

function enhanceMatchCards() {
  const el = document.getElementById('matchList');
  if (!el) return;
  el.innerHTML = D.matches.length
    ? D.matches.map(m => `<article class="card scoreCard">
        <h3>RDM vs ${mini(m.opponent)}</h3>
        <p>${mini(m.date || '')} · ${mini(m.venue || '')}</p>
        ${m.ourScore || m.oppScore ? `<div class="scoreLine"><b>RDM ${esc(m.ourScore || '—')}</b><b>${mini(m.opponent)} ${esc(m.oppScore || '—')}</b></div>` : ''}
        <p class="preserveLines">${mini(m.note || '')}</p>
        ${m.potm ? `<p>🏅 Player of the Match · ${mini(m.potm)}</p>` : ''}
        ${rdmAdmin() ? `<button class="tinyBtn deleteBtn" onclick="xdelete('Matches','${m._docId}')">Delete</button>` : ''}
      </article>`).join('')
    : '<div class="empty">No match added yet</div>';
}

const baseRender = window.render;
window.render = function () {
  baseRender();
  enhanceMatchCards();
  setTimeout(xrender, 0);
};

document.addEventListener('click', e => {
  if (e.target?.id === 'addScorecard') addScorecard();
  if (e.target?.id === 'addAchievement') addAchievement();
  if (e.target?.id === 'addLineup') addLineup();
});

setTimeout(() => {
  xload();
  xStartRealtimeSync();
  const hash = location.hash.match(/player=([^&]+)/);
  if (hash) setTimeout(() => openPlayerProfile(decodeURIComponent(hash[1])), 500);
}, 600);
