/* RDM V8.0.0 Full Cricket Portal + Real-Time Sync + Redesigned Admin Command Workspace */
const V6COL = { records: 'TeamRecords', tournaments: 'Tournaments', opponents: 'Opponents' };
let V6 = { records: [], tournaments: [], opponents: [] };
let v6Season = 'ALL';
let v6RecordType = 'PLAYER';
let v6RealtimeActive = false;

const v6doc = d => ({ ...d.data(), _docId: d.id });
const v6Strip = obj => typeof window.rdmStripDocMeta === 'function' ? window.rdmStripDocMeta(obj) : (() => { const c = { ...(obj || {}) }; delete c._docId; delete c._profileUid; return c; })();
const v6Err = (err, label) => typeof window.rdmReportWriteError === 'function' ? window.rdmReportWriteError(err, label) : console.warn(label, err);

function v6HasPending(key) {
  const ov = window.rdmGetOverrides?.();
  return !!(ov?.v6Pending?.[key] && Array.isArray(ov?.v6?.[key]));
}

function v6HydrateLocal() {
  const ov = window.rdmGetOverrides?.();
  if (ov?.v6) {
    ['records', 'tournaments', 'opponents'].forEach(k => {
      if (Array.isArray(ov.v6[k])) V6[k] = ov.v6[k];
    });
  }
}

function v6ClearOverride(key, force = false) {
  window.rdmSetOverrides?.(o => {
    if (!force && o.v6Pending?.[key]) return;
    if (o.v6 && key in o.v6) delete o.v6[key];
    if (o.v6Pending && key in o.v6Pending) delete o.v6Pending[key];
  });
}

function v6SaveOverride(key, arr, pending = true) {
  window.rdmSetOverrides?.(o => {
    o.v6 = o.v6 || {};
    o.v6[key] = arr;
    o.v6Pending = o.v6Pending || {};
    o.v6Pending[key] = pending;
  });
}
window.v6SaveOverride = v6SaveOverride;
window.v6ClearOverride = v6ClearOverride;

async function v6load() {
  if (typeof rdmDB === 'undefined') return;
  try {
    const [r, t, o] = await Promise.all(Object.values(V6COL).map(c => rdmDB.collection(c).get()));
    const ov = window.rdmGetOverrides?.();
    if (v6HasPending('records')) V6.records = ov.v6.records;
    else { V6.records = r.docs.map(v6doc); v6ClearOverride('records'); }

    if (v6HasPending('tournaments')) V6.tournaments = ov.v6.tournaments;
    else { V6.tournaments = t.docs.map(v6doc); v6ClearOverride('tournaments'); }

    if (v6HasPending('opponents')) V6.opponents = ov.v6.opponents;
    else { V6.opponents = o.docs.map(v6doc); v6ClearOverride('opponents'); }
  } catch (e) {
    console.warn('Local fallback for v6', e?.code || e);
    v6HydrateLocal();
  }
  v6render();
}

function v6StartRealtimeSync() {
  if (v6RealtimeActive || typeof rdmDB === 'undefined') return;
  v6RealtimeActive = true;
  const watch = (col, key) => {
    try {
      rdmDB.collection(col).onSnapshot(snap => {
        if (v6HasPending(key)) {
          v6HydrateLocal();
          v6render();
          return;
        }
        V6[key] = snap.docs.map(v6doc);
        v6ClearOverride(key);
        v6render();
        window.rdmHardRenderTournaments?.();
        window.refreshAdminSectionManager?.();
      }, err => console.warn('V6 realtime watch error:', col, err?.code || err));
    } catch (e) {
      console.warn('V6 realtime init skipped:', col, e);
    }
  };
  watch(V6COL.records, 'records');
  watch(V6COL.tournaments, 'tournaments');
  watch(V6COL.opponents, 'opponents');
}

function v6render() {
  v6Home();
  v6Records();
  v6Tournaments();
  v6Search();
  setTimeout(v6EnhanceMatches, 30);
}

function rdmParseClockParts(str) {
  const m = String(str || '').match(/(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?/i);
  if (!m) return null;
  let hh = Number(m[1]);
  const mm = Number(m[2]);
  const ss = Number(m[3] || 0);
  const mer = (m[4] || '').toUpperCase();
  if (mer === 'PM' && hh < 12) hh += 12;
  if (mer === 'AM' && hh === 12) hh = 0;
  return { hh, mm, ss };
}

function rdmParseMatchDateTime(m) {
  if (!m) return null;
  const rawField = m.scheduledAt ?? m.startTime ?? m.dateTime ?? m.date ?? m.matchDate;
  if (rawField && typeof rawField === 'object') {
    if (typeof rawField.toDate === 'function') {
      const d = rawField.toDate();
      return isNaN(d?.getTime?.()) ? null : d;
    }
    if (typeof rawField.seconds === 'number') {
      const d = new Date(rawField.seconds * 1000);
      return isNaN(d.getTime()) ? null : d;
    }
  }
  const rawDate = String(rawField || '').trim();
  if (!rawDate) return null;
  const rawTime = String(m.time ?? m.matchTime ?? '').trim();
  const timeFromTimeField = rdmParseClockParts(rawTime);
  const timeFromDateField = rdmParseClockParts(rawDate);
  const clock = timeFromTimeField || timeFromDateField || { hh: 9, mm: 0, ss: 0 };

  const isoDate = rawDate.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:$|[^\d])/);
  if (isoDate) {
    if (/[T]\d{2}:\d{2}/.test(rawDate) && /(?:Z|[+-]\d{2}:?\d{2})$/i.test(rawDate) && !timeFromTimeField) {
      const exactIso = new Date(rawDate);
      if (!isNaN(exactIso.getTime())) return exactIso;
    }
    return new Date(Number(isoDate[1]), Number(isoDate[2]) - 1, Number(isoDate[3]), clock.hh, clock.mm, clock.ss, 0);
  }

  const dmy = rawDate.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if (dmy) {
    return new Date(Number(dmy[3]), Number(dmy[2]) - 1, Number(dmy[1]), clock.hh, clock.mm, clock.ss, 0);
  }

  const combined = rawTime && !/\d{1,2}:\d{2}/.test(rawDate) ? `${rawDate} ${rawTime}` : rawDate;
  const parsed = new Date(combined);
  if (!isNaN(parsed.getTime())) {
    if (timeFromTimeField && !/\d{1,2}:\d{2}/.test(rawDate)) {
      parsed.setHours(timeFromTimeField.hh, timeFromTimeField.mm, timeFromTimeField.ss, 0);
    } else if (!timeFromTimeField && !timeFromDateField) {
      parsed.setHours(9, 0, 0, 0);
    }
    return parsed;
  }
  return null;
}
function rdmPad2(n) { return String(Math.max(0, Math.floor(n))).padStart(2, '0'); }

window.rdmTickHomeCountdown = function () {
  const cd = document.getElementById('homeCountdown');
  const note = document.getElementById('homeCountdownNote');
  if (!cd) return;
  const isLive = cd.dataset.isLive === '1';
  if (isLive) {
    cd.hidden = true;
    if (note) { note.hidden = false; note.textContent = 'LIVE NOW'; }
    return;
  }
  const ts = Number(cd.dataset.targetMs || '0');
  if (!ts) {
    cd.hidden = true;
    if (note) {
      note.hidden = cd.dataset.hasUpcoming !== '1';
      if (cd.dataset.hasUpcoming === '1') note.textContent = 'Schedule Date & Time TBA';
    }
    return;
  }
  const left = ts - Date.now();
  if (left <= 0) {
    cd.hidden = true;
    if (note) { note.hidden = false; note.textContent = 'Match Day / Starting Soon'; }
    return;
  }
  const totalSec = Math.floor(left / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  const dEl = document.getElementById('cdDays');
  const hEl = document.getElementById('cdHours');
  const mEl = document.getElementById('cdMinutes');
  const sEl = document.getElementById('cdSeconds');
  if (dEl) dEl.textContent = rdmPad2(days);
  if (hEl) hEl.textContent = rdmPad2(hours);
  if (mEl) mEl.textContent = rdmPad2(minutes);
  if (sEl) sEl.textContent = rdmPad2(seconds);
  cd.hidden = false;
  if (note) note.hidden = true;
};

function rdmClassifyMatchStatus(m) {
  if (!m) return 'UPCOMING';
  const explicit = String(m.matchStatus || m.status || '').trim().toUpperCase();
  if (/\bLIVE\b/.test(explicit)) return 'LIVE';
  if (/^(UPCOMING|SCHEDULED|FIXTURE|NEXT)$/.test(explicit)) return 'UPCOMING';
  if (/^(COMPLETED|RESULT|FINISHED|WON|LOST|DRAW|TIE|NO RESULT)$/.test(explicit)) return 'COMPLETED';
  if (/CANCEL/.test(explicit)) return 'CANCELLED';
  const blob = [explicit, m.result, m.note].filter(Boolean).join(' ').toUpperCase();
  if (/COMPLETED|RESULT|FINISHED|WON|LOST|DRAW|TIE|NO RESULT/.test(blob)) return 'COMPLETED';
  if (/CANCEL/.test(blob)) return 'CANCELLED';
  return 'UPCOMING';
}

function rdmPickNextUpcomingMatch(matches) {
  const upcomingPool = (matches || []).filter(x => rdmClassifyMatchStatus(x) === 'UPCOMING');
  if (!upcomingPool.length) return null;
  const now = Date.now();
  const withDates = upcomingPool.map(m => ({ m, ts: rdmParseMatchDateTime(m)?.getTime() ?? null }));
  const futureDated = withDates.filter(x => x.ts && x.ts > now).sort((a, b) => a.ts - b.ts);
  if (futureDated.length) return futureDated[0].m;
  const anyDated = withDates.filter(x => x.ts).sort((a, b) => b.ts - a.ts);
  if (anyDated.length) return anyDated[0].m;
  return upcomingPool[0];
}

window.rdmRenderHomeMatchHub = function () {
  const hub = document.getElementById('homeMatchHub');
  if (!hub) return;
  const matches = Array.isArray(window.D?.matches) ? D.matches : [];
  const liveMatch = matches.find(x => rdmClassifyMatchStatus(x) === 'LIVE');
  const upcoming = liveMatch || rdmPickNextUpcomingMatch(matches);
  const recent = matches.find(x => rdmClassifyMatchStatus(x) === 'COMPLETED');
  const isLive = !!liveMatch;
  const target = isLive ? null : rdmParseMatchDateTime(upcoming);
  const targetMs = target ? target.getTime() : 0;
  const sig = JSON.stringify([
    isLive ? 'LIVE' : 'NEXT',
    upcoming?.opponent || '', upcoming?.date || '', upcoming?.time || '', upcoming?.venueName || upcoming?.venue || '', upcoming?.ourScore || '', upcoming?.oppScore || '', targetMs,
    recent?.opponent || '', recent?.ourScore || '', recent?.oppScore || '', recent?.result || recent?.note || recent?.status || ''
  ]);
  if (hub.dataset.hubSig !== sig) {
    hub.dataset.hubSig = sig;
    const upVenue = upcoming?.venueName || upcoming?.venue || '';
    const upMeta = [upcoming?.date, upcoming?.time, upVenue].filter(Boolean).map(mini).join(' · ');
    const upScore = isLive && (upcoming?.ourScore || upcoming?.oppScore) ? `RDM ${esc(upcoming.ourScore || '—')} vs ${esc(upcoming.oppScore || '—')}` : '';
    const recentScore = recent && (recent.ourScore || recent.oppScore) ? `RDM ${esc(recent.ourScore || '—')} · ${mini(recent.opponent || 'Opp')} ${esc(recent.oppScore || '—')}` : '';
    const recentText = recent ? [recentScore, mini(recent.result || recent.note || recent.status || '')].filter(Boolean).join(' — ') : 'Latest scorecard updates will appear here';
    hub.innerHTML = `<div class="miniMatch miniMatchNext">
      <span>${isLive ? 'Live Fixture' : 'Next Match'}</span>
      <b id="homeNextMatch">${upcoming ? 'RDM vs ' + mini(upcoming.opponent || 'Opponent') : 'No upcoming match'}</b>
      ${upcoming ? (upScore ? `<small>${upScore}${upMeta ? ' · ' + upMeta : ''}</small>` : (upMeta ? `<small>${upMeta}</small>` : '<small>Date &amp; venue to be confirmed</small>')) : '<small>Check Match Centre for upcoming schedule</small>'}
      <div class="countdownTimer" id="homeCountdown" data-target-ms="${targetMs || ''}" data-has-upcoming="${upcoming && !isLive ? '1' : '0'}" data-is-live="${isLive ? '1' : '0'}" hidden>
        <div class="cdUnit"><strong id="cdDays">00</strong><span>Days</span></div>
        <span class="cdSep" aria-hidden="true">:</span>
        <div class="cdUnit"><strong id="cdHours">00</strong><span>Hours</span></div>
        <span class="cdSep" aria-hidden="true">:</span>
        <div class="cdUnit"><strong id="cdMinutes">00</strong><span>Minutes</span></div>
        <span class="cdSep" aria-hidden="true">:</span>
        <div class="cdUnit"><strong id="cdSeconds">00</strong><span>Seconds</span></div>
      </div>
      <span class="countdown" id="homeCountdownNote" hidden></span>
      <button type="button" class="miniMatchLink" data-go="matches">Open Match Centre ›</button>
    </div>
    <div class="miniMatch miniMatchRecent">
      <span>Latest Result</span>
      <b class="${recent ? '' : 'mutedTitle'}">${recent ? 'RDM vs ' + mini(recent.opponent || 'Opponent') : 'No result added yet'}</b>
      <small>${recentText}</small>
      <button type="button" class="miniMatchLink" data-go="matches">View Scorecards ›</button>
    </div>`;
  }
  window.rdmTickHomeCountdown();
  const pin = (D.news || []).find(x => x.pinned);
  let b = document.getElementById('noticeBanner');
  if (pin) {
    if (!b) { b = document.createElement('div'); b.id = 'noticeBanner'; b.className = 'noticeBanner'; hub.before(b); }
    const pinSig = JSON.stringify([pin.title || '', pin.text || '']);
    if (b.dataset.pinSig !== pinSig) {
      b.dataset.pinSig = pinSig;
      b.innerHTML = `<div class="noticeBannerMain"><span class="pinTag">Pinned Club Notice</span><b>${mini(pin.title || 'Team Update')}</b><div class="preserveLines">${mini(pin.text || '')}</div></div><button type="button" class="tinyBtn" data-go="news">Open News ›</button>`;
    }
  } else if (b) {
    b.remove();
  }
};
function v6Home() { window.rdmRenderHomeMatchHub(); }
function statFor(p) { return XD.stats.find(s => s.playerId === p.id) || {}; }

function v6Search() {
  const box = document.getElementById('players');
  if (!box) return;
  let inp = document.getElementById('playerSearch');
  if (!inp) {
    inp = document.createElement('input');
    inp.id = 'playerSearch';
    inp.className = 'searchPlayer';
    inp.placeholder = 'Search by player name, role, or ID...';
    box.before(inp);
  }
  const clearBtn = document.getElementById('squadSearchClear');
  const roleBox = document.getElementById('squadRoleFilters');
  const statusEl = document.getElementById('squadFilterStatus');
  const emptyEl = document.getElementById('squadEmpty');
  const resetBtn = document.getElementById('squadResetFilters');
  if (window.__rdmSquadFilterBound) {
    window.applySquadFilter?.();
    return;
  }
  window.__rdmSquadFilterBound = true;
  let activeRole = 'ALL';
  const norm = v => String(v || '').toLowerCase().replace(/[-_•·]+/g, ' ').replace(/\s+/g, ' ').trim();
  function applySquadFilter() {
    const cards = [...box.querySelectorAll('.player')];
    const rawQuery = inp.value.trim();
    const tokens = norm(rawQuery).split(' ').filter(Boolean);
    const roleNeedle = norm(activeRole);
    let shown = 0;
    cards.forEach((el, i) => {
      const p = (typeof D !== 'undefined' && Array.isArray(D.players)) ? D.players[i] : null;
      const code = (typeof playerCode === 'function' && p?.id) ? playerCode(p.id) : '';
      const roleBlob = norm([p?.role, el.querySelector('b')?.textContent, el.querySelector('.leadershipBadge')?.textContent].filter(Boolean).join(' '));
      const fullBlob = norm([p?.name, p?.role, p?.detail, p?.nick, p?.id, p?.jersey, code, el.querySelector('h3')?.textContent, el.querySelector('b')?.textContent].filter(Boolean).join(' '));
      const matchesRole = activeRole === 'ALL' || roleBlob.includes(roleNeedle);
      const matchesQuery = !tokens.length || tokens.every(t => fullBlob.includes(t));
      const visible = matchesRole && matchesQuery;
      el.hidden = !visible;
      el.style.display = visible ? '' : 'none';
      if (visible) shown++;
    });
    if (clearBtn) clearBtn.hidden = !rawQuery;
    if (roleBox) {
      roleBox.querySelectorAll('[data-role]').forEach(btn => {
        const on = btn.dataset.role === activeRole;
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', String(on));
      });
    }
    if (statusEl) {
      const total = cards.length;
      if (!total) statusEl.textContent = '';
      else if (!rawQuery && activeRole === 'ALL') statusEl.textContent = `Showing all ${total} players`;
      else statusEl.textContent = `Showing ${shown} of ${total} players`;
    }
    if (emptyEl) emptyEl.hidden = !(cards.length > 0 && shown === 0);
  }
  window.applySquadFilter = applySquadFilter;
  inp.addEventListener('input', applySquadFilter);
  inp.addEventListener('keydown', e => {
    if (e.key === 'Escape' && inp.value) {
      inp.value = '';
      applySquadFilter();
    }
  });
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      inp.value = '';
      applySquadFilter();
      inp.focus();
    });
  }
  if (roleBox) {
    roleBox.addEventListener('click', e => {
      const btn = e.target.closest('[data-role]');
      if (!btn) return;
      activeRole = btn.dataset.role || 'ALL';
      applySquadFilter();
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      inp.value = '';
      activeRole = 'ALL';
      applySquadFilter();
      inp.focus();
    });
  }
  new MutationObserver(() => applySquadFilter()).observe(box, { childList: true });
  applySquadFilter();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', v6Search, { once: true });
else v6Search();

let v6MatchFilter = 'ALL';
window.v6SetMatchStatusFilter = function (st) {
  v6MatchFilter = st || 'ALL';
  window.rdmEnhanceMatchCentre();
};

window.rdmEnhanceMatchCentre = function () {
  const list = document.getElementById('matchList');
  if (!list || typeof D === 'undefined') return;
  const matches = Array.isArray(D.matches) ? D.matches : [];
  const counts = { ALL: matches.length, UPCOMING: 0, LIVE: 0, COMPLETED: 0 };
  let wins = 0;
  matches.forEach(m => {
    const st = rdmClassifyMatchStatus(m);
    if (st === 'LIVE') counts.LIVE++;
    else if (st === 'COMPLETED') counts.COMPLETED++;
    else counts.UPCOMING++;
    if (/\bRDM WON\b|\bWON\b/i.test([m.result, m.note].filter(Boolean).join(' '))) wins++;
  });
  const sumEl = document.getElementById('matchSummary');
  if (sumEl) {
    if (matches.length) {
      const winRate = counts.COMPLETED > 0 ? Math.round((wins / counts.COMPLETED) * 100) + '%' : '—';
      sumEl.innerHTML = `<div class="matchSummaryItem"><strong>${matches.length}</strong><span>Total Fixtures</span></div><div class="matchSummaryItem"><strong>${wins}</strong><span>RDM Wins</span></div><div class="matchSummaryItem"><strong>${counts.UPCOMING}</strong><span>Upcoming</span></div><div class="matchSummaryItem"><strong>${winRate}</strong><span>Win Rate</span></div>`;
    } else {
      sumEl.innerHTML = '';
    }
  }
  const fBar = document.getElementById('matchStatusFilters');
  if (fBar) {
    if (matches.length) {
      const tabs = [['ALL', 'All', counts.ALL], ['UPCOMING', 'Upcoming', counts.UPCOMING], ['LIVE', 'Live', counts.LIVE], ['COMPLETED', 'Completed', counts.COMPLETED]];
      fBar.innerHTML = tabs.map(([k, lbl, cnt]) => `<button type="button" class="matchFilterBtn ${v6MatchFilter === k ? 'on' : ''}" data-match-filter="${k}" role="tab" aria-selected="${v6MatchFilter === k}">${lbl} (${cnt})</button>`).join('');
    } else {
      fBar.innerHTML = '';
    }
  }
  const cards = [...list.querySelectorAll('.proDataCard, .scoreCard')];
  let shown = 0;
  cards.forEach((el, i) => {
    const m = matches[i];
    if (!m) return;
    const st = rdmClassifyMatchStatus(m);
    const badge = el.querySelector('.proStatus');
    if (badge) badge.setAttribute('data-status', st);
    el.dataset.matchStatus = st;
    const matchVisible = v6MatchFilter === 'ALL' || (v6MatchFilter === 'UPCOMING' && st === 'UPCOMING') || (v6MatchFilter === 'LIVE' && st === 'LIVE') || (v6MatchFilter === 'COMPLETED' && st === 'COMPLETED');
    el.hidden = !matchVisible;
    el.style.display = matchVisible ? '' : 'none';
    if (matchVisible) shown++;

    const sig = JSON.stringify([m.tossWinner || '', m.tossDecision || '', m.potm || '', m.batting || '', m.bowling || '', m.partnerships || '', m.fow || '', m.venueName || m.venue || '']);
    if (el.dataset.rdmMatchSig === sig) return;
    el.dataset.rdmMatchSig = sig;
    el.querySelector('.matchDetails')?.remove();
    el.querySelector('.matchScorecardAccordion')?.remove();
    el.querySelector('.matchVenueMapRow')?.remove();

    const blocks = [];
    if (m.tossWinner && m.tossWinner !== 'NOT DECIDED' && !el.classList.contains('proDataCard')) blocks.push(`<div class="matchScorecardBlock"><b>Toss</b>${mini(m.tossWinner)}${m.tossDecision ? ' · ' + mini(m.tossDecision) : ''}</div>`);
    if (m.potm && !el.classList.contains('proDataCard')) blocks.push(`<div class="matchScorecardBlock"><b>Player of the Match</b>${mini(m.potm)}</div>`);
    if (m.batting) blocks.push(`<div class="matchScorecardBlock preserveLines"><b>Batting Scorecard</b>${mini(m.batting)}</div>`);
    if (m.bowling) blocks.push(`<div class="matchScorecardBlock preserveLines"><b>Bowling Scorecard</b>${mini(m.bowling)}</div>`);
    if (m.partnerships) blocks.push(`<div class="matchScorecardBlock preserveLines"><b>Partnerships</b>${mini(m.partnerships)}</div>`);
    if (m.fow) blocks.push(`<div class="matchScorecardBlock preserveLines"><b>Fall of Wickets</b>${mini(m.fow)}</div>`);

    const actionsEl = el.querySelector('.proCardActions');
    if (blocks.length) {
      const html = `<details class="matchScorecardAccordion"><summary>Full Scorecard &amp; Match Details</summary><div class="matchScorecardBody">${blocks.join('')}</div></details>`;
      if (actionsEl) actionsEl.insertAdjacentHTML('beforebegin', html);
      else el.insertAdjacentHTML('beforeend', html);
    }
    const venueText = m.venueName || m.venue || '';
    if (venueText && !el.querySelector('.proMapCardBlock')) {
      const mapRow = `<div class="matchVenueMapRow"><a class="tinyBtn mapBtn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueText)}">View Venue on Map ↗</a></div>`;
      if (actionsEl) actionsEl.insertAdjacentHTML('beforebegin', mapRow);
      else el.insertAdjacentHTML('beforeend', mapRow);
    }
  });
  const emptyEl = document.getElementById('matchFilterEmpty');
  if (emptyEl) emptyEl.hidden = !(matches.length > 0 && shown === 0);
};
function v6EnhanceMatches() { window.rdmEnhanceMatchCentre(); }

async function v6EditMatch(id) {
  if (!rdmAdmin()) return;
  const m = D.matches.find(x => x._docId === id);
  if (!m) return;
  const tossWinner = xp('Toss winner', m.tossWinner || '');
  const tossDecision = xp('Toss decision: Bat / Bowl', m.tossDecision || '');
  const batting = xp('Batting scorecard: Name Runs(Balls), 4s, 6s — one player per line', m.batting || '');
  const bowling = xp('Bowling: Name Overs-Runs-Wickets — one bowler per line', m.bowling || '');
  const partnerships = xp('Partnerships', m.partnerships || '');
  const fow = xp('Fall of wickets', m.fow || '');
  const potm = xp('Player of the Match', m.potm || '');
  try {
    const clean = v6Strip({ tossWinner, tossDecision, batting, bowling, partnerships, fow, potm, updatedAt: rdmStamp() });
    if (id && !String(id).startsWith('loc_')) {
      await rdmDB.collection('Matches').doc(id).set(clean, { merge: true });
    } else {
      const ref = await rdmDB.collection('Matches').add({ ...clean, opponent: m.opponent || 'Opponent', createdMs: m.createdMs || Date.now() });
      m._docId = ref.id;
    }
  } catch (err) {
    v6Err(err, 'Match details sync');
  }
  await rdmLoadAll();
  setTimeout(v6render, 100);
}

function v6Poster(id) {
  const m = D.matches.find(x => x._docId === id);
  if (!m) return;
  document.getElementById('v6PosterModal')?.remove();
  const box = document.createElement('div');
  box.id = 'v6PosterModal';
  box.className = 'modal show rdmUnifiedModal';
  box.innerHTML = `<div class="dialog rdmUnifiedDialog matchPosterDialog"><button class="close" type="button" aria-label="Close">×</button><div class="matchPosterCard"><span class="sectionKicker">Rehan Dominators Mahuawan</span><h2>RDM vs ${esc(m.opponent || 'Opponent')}</h2><p class="posterMeta">${esc(m.date || '')} · ${esc(m.venue || '')}</p>${m.ourScore || m.oppScore ? `<div class="posterScore">${esc(m.ourScore || '—')}${m.oppScore ? ' — ' + esc(m.oppScore) : ''}</div>` : ''}<p>${esc(m.note || 'Upcoming Match')}</p><small>ONE TEAM • ONE DREAM • ONE DOMINATION</small></div></div>`;
  document.body.appendChild(box);
  box.querySelector('.close').onclick = () => box.remove();
  box.addEventListener('click', e => { if (e.target === box) box.remove(); });
}

async function v6AddOpponent(id) {
  if (!rdmAdmin()) return;
  const x = V6.opponents.find(z => z._docId === id) || {};
  const name = xp('Opponent team name', x.name || '');
  if (!name) return;
  const played = xnum(xp('Matches played', x.played || 0));
  const won = xnum(xp('RDM wins', x.won || 0));
  const lost = xnum(xp('RDM losses', x.lost || 0));
  const d = { name, played, won, lost, updatedAt: rdmStamp(), createdMs: x.createdMs || Date.now() };
  try {
    (id && !String(id).startsWith('loc_'))
      ? await rdmDB.collection(V6COL.opponents).doc(id).set(v6Strip(d), { merge: true })
      : await rdmDB.collection(V6COL.opponents).add(v6Strip(d));
  } catch (err) {
    v6Err(err, 'Opponent sync');
  }
  await v6load();
}

async function v6Delete(c, id) {
  if (!rdmAdmin()) return;
  const run = async () => {
    if (id && !String(id).startsWith('loc_')) {
      try {
        await rdmDB.collection(c).doc(id).delete();
      } catch (err) {
        v6Err(err, 'Delete ' + c);
      }
    }
    const map = { TeamRecords: 'records', Tournaments: 'tournaments', Opponents: 'opponents' };
    const k = map[c];
    if (k) {
      V6[k] = V6[k].filter(x => x._docId !== id);
    }
    v6render();
    window.rdmHardRenderTournaments?.();
    window.refreshAdminSectionManager?.();
    toast('Deleted');
  };
  if (typeof window.rdmConfirmModal === 'function') return window.rdmConfirmModal('Delete Item', 'This action cannot be undone.', run);
  return run();
}

window.v6AddOpponent = v6AddOpponent;
window.v6Delete = v6Delete;
window.v6EditMatch = v6EditMatch;
window.v6Poster = v6Poster;
window.v6load = v6load;
window.v6render = v6render;

document.addEventListener('click', e => {
  if (e.target?.id === 'addRecord') window.v6AddRecord?.();
  if (e.target?.id === 'addTournament') window.v6AddTournament?.();
  if (e.target?.id === 'addOpponent') v6AddOpponent();
  const mf = e.target.closest?.('[data-match-filter]');
  if (mf) { window.v6SetMatchStatusFilter(mf.dataset.matchFilter); return; }
  if (e.target?.id === 'matchResetFilterBtn') { window.v6SetMatchStatusFilter('ALL'); return; }
});

const bt = document.getElementById('backToTop');
window.addEventListener('scroll', () => bt?.classList.toggle('show', scrollY > 500));
bt?.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

setTimeout(() => {
  v6load();
  v6StartRealtimeSync();
  window.rdmRenderHomeMatchHub?.();
  const ml = document.getElementById('matchList');
  if (ml && !window.__rdmMatchListObs) {
    window.__rdmMatchListObs = true;
    new MutationObserver(() => queueMicrotask(() => window.rdmEnhanceMatchCentre())).observe(ml, { childList: true });
  }
  window.rdmEnhanceMatchCentre();
}, 400);

if (!window.__rdmCountdownTimerStarted) {
  window.__rdmCountdownTimerStarted = true;
  setInterval(() => window.rdmTickHomeCountdown?.(), 1000);
}

function v6Decorate() {
  document.querySelectorAll('#players .player').forEach((el, i) => {
    const p = D.players[i];
    if (!p) return;
    const n = (p.name || '').toUpperCase();
    if ((n === 'REHAN AKHTAR' || n === 'SAIF ALI') && !el.querySelector('.captainBadge') && !el.querySelector('.leadershipBadge')) {
      const h = el.querySelector('h3') || el.querySelector('b');
      h?.insertAdjacentHTML('beforeend', ` <span class="captainBadge">${n === 'REHAN AKHTAR' ? 'Captain' : 'Vice-Captain'}</span>`);
    }
  });
  window.rdmEnhanceMatchCentre();
}
setInterval(v6Decorate, 1400);

/* Admin Section Manager Modal */
let _rdmCurrentAdminManager = null;
function admEsc(v) {
  return String(v ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function buildAdminManagerHtml(type) {
  const listWrap = (rows, empty) => `<div class="adminManagerList">${rows.length ? rows.join('') : `<div class="empty">${empty}</div>`}</div>`;
  if (type === 'matches') {
    const arr = (typeof D !== 'undefined' && Array.isArray(D.matches)) ? D.matches : [];
    return {
      title: 'Manage Matches & Scorecards',
      sub: 'Add, edit scorecards, match posters, toss, FOW, or delete fixtures',
      top: `<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="rdmProAddMatch()">+ Upcoming Match</button><button type="button" class="secondary" onclick="addScorecard()">+ Scorecard / Result</button></div>`,
      body: listWrap(arr.map((m, i) => `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>RDM vs ${mini(m.opponent || 'Opponent')}</strong><small>${admEsc([m.matchStatus || m.status || 'MATCH', m.date, m.venueName || m.venue].filter(Boolean).join(' · '))}${m.ourScore || m.oppScore ? ` · ${admEsc(m.ourScore || '—')} vs ${admEsc(m.oppScore || '—')}` : ''}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="rdmProAddMatch('${admEsc(m._docId)}')">Edit</button><button type="button" class="tinyBtn" onclick="addScorecard('${admEsc(m._docId)}')">Scorecard</button><button type="button" class="tinyBtn" onclick="v6EditMatch('${admEsc(m._docId)}')">Batting/Bowling</button><button type="button" class="tinyBtn" onclick="v6Poster('${admEsc(m._docId)}')">Poster</button><button type="button" class="tinyBtn deleteBtn" onclick="removeItem('matches',${i})">Delete</button></div></div>`), 'No matches added yet')
    };
  }
  if (type === 'news') {
    const arr = (typeof D !== 'undefined' && Array.isArray(D.news)) ? [...D.news].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || (b.createdMs || 0) - (a.createdMs || 0)) : [];
    return {
      title: 'Manage News & Announcements',
      sub: 'Create, edit, pin to Home notice banner, or remove announcements',
      top: `<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="openEdit('news')">+ Add News</button></div>`,
      body: listWrap(arr.map(n => `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${n.pinned ? '[Pinned] ' : ''}${mini(n.title || 'Announcement')}</strong><small>${admEsc(String(n.text || '').slice(0, 110))}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="editNews('${admEsc(n._docId)}')">Edit</button><button type="button" class="tinyBtn" onclick="togglePin('${admEsc(n._docId)}',${!n.pinned})">${n.pinned ? 'Unpin' : 'Pin to Home'}</button><button type="button" class="tinyBtn deleteBtn" onclick="xdelete('News','${admEsc(n._docId)}')">Delete</button></div></div>`), 'No news added yet')
    };
  }
  if (type === 'updates') {
    const arr = (typeof RDM_UPDATES !== 'undefined' && Array.isArray(RDM_UPDATES)) ? RDM_UPDATES : [];
    return {
      title: 'Manage Official Updates',
      sub: 'Publish dispatches, pin important notices to Home, edit or remove',
      top: `<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="addUpdate()">+ Add Update</button></div>`,
      body: listWrap(arr.map(u => `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${u.pinned ? '[Pinned] ' : ''}${mini(u.title || 'Update')}</strong><small>${admEsc([u.category || 'WEBSITE', u.date].filter(Boolean).join(' · '))}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="editUpdate('${admEsc(u._docId)}')">Edit</button><button type="button" class="tinyBtn" onclick="pinUpdate('${admEsc(u._docId)}',${!u.pinned})">${u.pinned ? 'Unpin' : 'Pin to Home'}</button><button type="button" class="tinyBtn deleteBtn" onclick="deleteUpdate('${admEsc(u._docId)}')">Delete</button></div></div>`), 'No updates yet')
    };
  }
  if (type === 'stats') {
    const players = (typeof D !== 'undefined' && Array.isArray(D.players)) ? D.players : [];
    const stats = (typeof XD !== 'undefined' && Array.isArray(XD.stats)) ? XD.stats : [];
    return {
      title: 'Player Stats & Ranking',
      sub: 'Update individual career stats for every squad member',
      top: '',
      body: listWrap(players.map(p => {
        const s = stats.find(z => z.playerId === p.id) || {};
        return `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(p.name)}</strong><small>${admEsc(p.id)} · Matches: ${Number(s.matches || 0)} · Runs: ${Number(s.runs || 0)} · Wickets: ${Number(s.wickets || 0)}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="editStats('${admEsc(p.id)}')">Edit Stats</button></div></div>`;
      }), 'No players found')
    };
  }
  if (type === 'achievements') {
    const arr = (typeof XD !== 'undefined' && Array.isArray(XD.achievements)) ? XD.achievements : [];
    return {
      title: 'Manage Awards & Achievements',
      sub: 'Add POTM awards, tournament trophies, and player milestones',
      top: `<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="addAchievement()">+ Add Achievement</button></div>`,
      body: listWrap(arr.map(a => `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(a.title || 'Award')}</strong><small>${admEsc([a.playerName || 'TEAM', a.detail].filter(Boolean).join(' · '))}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="v6EditAchievement('${admEsc(a._docId)}')">Edit</button><button type="button" class="tinyBtn deleteBtn" onclick="xdelete('Achievements','${admEsc(a._docId)}')">Delete</button></div></div>`), 'No achievements yet')
    };
  }
  if (type === 'records') {
    const arr = (typeof V6 !== 'undefined' && Array.isArray(V6.records)) ? V6.records : [];
    return {
      title: 'Manage Club Records',
      sub: 'Curate Player, Team, and Partnership records',
      top: `<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="v63AddPlayerRecord()">+ Player Record</button><button type="button" class="secondary" onclick="v63AddTeamRecord()">+ Team Record</button><button type="button" class="secondary" onclick="v63AddPartnershipRecord()">+ Partnership</button></div>`,
      body: listWrap(arr.map(r => {
        const fn = v63Type(r) === 'PARTNERSHIP' ? 'v63AddPartnershipRecord' : (v63Type(r) === 'PLAYER' ? 'v63AddPlayerRecord' : 'v63AddTeamRecord');
        return `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(r.title || 'Record')}</strong><small>${admEsc([v63Type(r), r.value, r.player, r.season].filter(Boolean).join(' · '))}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="${fn}('${admEsc(r._docId)}')">Edit</button><button type="button" class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.records}','${admEsc(r._docId)}')">Delete</button></div></div>`;
      }), 'No manual records yet')
    };
  }
  if (type === 'tournaments') {
    const arr = (typeof V6 !== 'undefined' && Array.isArray(V6.tournaments)) ? V6.tournaments : [];
    return {
      title: 'Manage Tournaments & Fixtures',
      sub: 'Add, update standings, dates, venue maps, or delete tournaments',
      top: `<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="v6AddTournament()">+ Add Tournament</button></div>`,
      body: listWrap(arr.map(t => `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(t.name || 'Tournament')}</strong><small>${admEsc([t.season, t.status, t.position].filter(Boolean).join(' · '))}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="v6AddTournament('${admEsc(t._docId)}')">Edit</button><button type="button" class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.tournaments}','${admEsc(t._docId)}')">Delete</button></div></div>`), 'No tournaments yet')
    };
  }
  if (type === 'opponents') {
    const arr = (typeof V6 !== 'undefined' && Array.isArray(V6.opponents)) ? V6.opponents : [];
    return {
      title: 'Manage Opponents & Head-to-Head',
      sub: 'Track played, won, and lost records against regional rivals',
      top: `<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="v6AddOpponent()">+ Add Opponent</button></div>`,
      body: listWrap(arr.map(o => `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(o.name || 'Opponent')}</strong><small>${o.played || 0} Played · ${o.won || 0} Won · ${o.lost || 0} Lost</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="v6AddOpponent('${admEsc(o._docId)}')">Edit</button><button type="button" class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.opponents}','${admEsc(o._docId)}')">Delete</button></div></div>`), 'No opponents yet')
    };
  }
  if (type === 'lineup') {
    const arr = (typeof XD !== 'undefined' && Array.isArray(XD.lineups)) ? XD.lineups : [];
    return {
      title: 'Manage Playing XI & Substitutes',
      sub: 'Publish starting 11, swap players with substitutes, or remove lineups',
      top: `<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="addLineup()">+ Publish Playing XI</button></div>`,
      body: listWrap(arr.map(l => `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(l.title || 'PLAYING XI')}</strong><small>${admEsc([l.match, (l.players || []).length + ' XI', (l.subs || []).length + ' Subs'].filter(Boolean).join(' · '))}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="rdmSwapLineupPlayer('${admEsc(l._docId)}')">Swap XI / Sub</button><button type="button" class="tinyBtn deleteBtn" onclick="xdelete('PlayingXI','${admEsc(l._docId)}')">Delete</button></div></div>`), 'No Playing XI published yet')
    };
  }
  if (type === 'availability') {
    const players = (typeof D !== 'undefined' && Array.isArray(D.players)) ? D.players : [];
    const av = (typeof XD !== 'undefined' && Array.isArray(XD.availability)) ? XD.availability : [];
    return {
      title: 'Manage Player Availability',
      sub: 'Update matchday availability for each squad player',
      top: '',
      body: listWrap(players.map(p => {
        const a = av.find(z => z.playerId === p.id);
        const st = a?.status || 'NOT SET';
        return `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(p.name)}</strong><small>${admEsc(p.id)} · Status: ${admEsc(st)}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="setAvailability('${admEsc(p.id)}')">Change Status</button></div></div>`;
      }), 'No players found')
    };
  }
  if (type === 'honours') {
    const arr = (typeof D !== 'undefined' && Array.isArray(D.honours)) ? D.honours : [];
    return {
      title: 'Manage Club Honours & Trophies',
      sub: 'Add or remove club silverware',
      top: `<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="openEdit('honour')">+ Add Honour</button></div>`,
      body: listWrap(arr.map((h, i) => `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${admEsc(h.year)} · ${mini(h.title || 'Honour')}</strong><small>${admEsc(h.sub || '')}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn deleteBtn" onclick="removeItem('honours',${i})">Delete</button></div></div>`), 'No honours added yet')
    };
  }
  if (type === 'gallery') {
    const arr = (typeof D !== 'undefined' && Array.isArray(D.gallery)) ? D.gallery : [];
    return {
      title: 'Manage Club Gallery',
      sub: 'Upload new photos, change albums, or delete items',
      top: `<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="openEdit('gallery')">+ Add Gallery Photo</button></div>`,
      body: listWrap(arr.map(g => `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(g.caption || 'RDM Memory')}</strong><small>${admEsc(g.album || 'MEMORIES')}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="moveGalleryPhoto?.('${admEsc(g._docId)}','${admEsc((g.album || 'MEMORIES').toUpperCase())}')">Move</button><button type="button" class="tinyBtn deleteBtn" onclick="xdelete('Gallery','${admEsc(g._docId)}')">Delete</button></div></div>`), 'No gallery photos yet')
    };
  }
  if (type === 'socials') {
    const arr = (typeof D !== 'undefined' && Array.isArray(D.socials)) ? D.socials : [];
    return {
      title: 'Manage Official Social Links',
      sub: 'Add, edit, or delete club social media channels',
      top: `<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="openEdit('social')">+ Add Social Link</button></div>`,
      body: listWrap(arr.map((s, i) => `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(s.displayName || s.name || 'Social')}</strong><small>${admEsc(s.url || 'Link not set')}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="editSocial(${i})">Edit</button><button type="button" class="tinyBtn deleteBtn" onclick="removeItem('socials',${i})">Delete</button></div></div>`), 'No social links yet')
    };
  }
  return null;
}

window.openAdminSectionManager = function (type) {
  if (!rdmAdmin()) return toast?.('Admin only');
  const spec = buildAdminManagerHtml(type);
  if (!spec) return;
  _rdmCurrentAdminManager = type;
  let m = document.getElementById('rdmAdminManagerModal');
  if (!m) {
    m = document.createElement('div');
    m.id = 'rdmAdminManagerModal';
    m.className = 'modal show rdmUnifiedModal';
    document.body.appendChild(m);
  }
  m.className = 'modal show rdmUnifiedModal';
  m.innerHTML = `<div class="dialog publicDialog rdmAdminManagerDialog" role="dialog" aria-modal="true"><button class="close" type="button" aria-label="Close">×</button><div class="adminManagerHead"><span class="sectionKicker">Command Console</span><h2>${spec.title}</h2><p>${spec.sub}</p></div>${spec.top}${spec.body}</div>`;
  const close = () => { _rdmCurrentAdminManager = null; m.remove(); };
  m.querySelector('.close').onclick = close;
  m.onclick = e => { if (e.target === m) close(); };
};

window.refreshAdminSectionManager = function () {
  if (!_rdmCurrentAdminManager) return;
  if (!document.getElementById('rdmAdminManagerModal')?.classList.contains('show')) { _rdmCurrentAdminManager = null; return; }
  window.openAdminSectionManager(_rdmCurrentAdminManager);
};

/* Redesigned Sidebar + Main Workspace Admin Console */
function v61Admin(force = false) {
  if (!rdmAdmin()) return;
  const a = document.getElementById('adminBody');
  if (!a) return;
  if (!force && a.dataset.v61Ready === '1') return;
  a.dataset.v61Ready = '1';

  const nPlayers = Array.isArray(window.D?.players) ? D.players.length : 17;
  const nMatches = Array.isArray(window.D?.matches) ? D.matches.length : 0;
  const nTourn = Array.isArray(V6?.tournaments) ? V6.tournaments.length : 0;
  const nNews = Array.isArray(window.D?.news) ? D.news.length : 0;
  const nUpdates = Array.isArray(window.RDM_UPDATES) ? RDM_UPDATES.length : 0;
  const nGallery = Array.isArray(window.D?.gallery) ? D.gallery.length : 0;

  const jump = id => `document.getElementById('${id}')?.scrollIntoView({behavior:'smooth',block:'start'})`;

  a.innerHTML = `<div class="adminShell">
    <aside class="adminSidebar" aria-label="Admin workspace navigation">
      <div class="adminSideBrand">
        <span class="sectionKicker">Control Plane</span>
        <strong>RDM Command</strong>
        <small>Live Web &amp; APK Sync</small>
      </div>
      <nav class="adminSideNav">
        <button type="button" onclick="${jump('adminKpiOverview')}">Overview &amp; KPIs</button>
        <button type="button" onclick="${jump('adminModulesGrid')}">Operations Console</button>
        <button type="button" onclick="${jump('adminPlayerManager')}">Squad Profiles (${nPlayers})</button>
        <button type="button" onclick="${jump('adminAccessLinksBox')}">Portals &amp; Keys</button>
        <button type="button" onclick="document.querySelector('.brandAdminBox')?.scrollIntoView({behavior:'smooth',block:'start'})">Club Branding</button>
        <button type="button" onclick="${jump('adminFirebaseEmailCard')}">Auth Email SDK</button>
      </nav>
      <div class="adminSideFooter">
        <a class="secondary" href="./" target="_blank" rel="noopener">Public Site ↗</a>
        <a class="secondary" href="./portals.html" target="_blank" rel="noopener">Portals Hub ↗</a>
        <button type="button" class="primary" id="adminInstallAppBtn" data-rdm-install-btn>Install Admin App</button>
        <button type="button" class="secondary dangerBtn" onclick="rdmLockAdmin()">Lock Admin Panel</button>
      </div>
    </aside>

    <div class="adminWorkspaceMain" id="adminWorkspaceMain">
      <div class="adminSessionBar">
        <div>
          <span class="sectionKicker">Authenticated Admin Session</span>
          <strong>RDM Official Command Workspace</strong>
          <span>Changes published here persist to Firestore and update Website &amp; Android APK live.</span>
        </div>
        <div class="adminSessionActions">
          <button type="button" class="secondary dangerBtn" onclick="rdmLockAdmin()">Lock Admin</button>
        </div>
      </div>

      <div class="adminKpiGrid" id="adminKpiOverview" aria-label="Club overview counts">
        <div class="adminKpiCard"><span>Squad</span><strong>${nPlayers}</strong><small>Registered Players</small></div>
        <div class="adminKpiCard"><span>Fixtures</span><strong>${nMatches}</strong><small>Matches &amp; Results</small></div>
        <div class="adminKpiCard"><span>Competitions</span><strong>${nTourn}</strong><small>Tournaments</small></div>
        <div class="adminKpiCard"><span>Dispatches</span><strong>${nNews + nUpdates}</strong><small>News &amp; Updates</small></div>
        <div class="adminKpiCard"><span>Archive</span><strong>${nGallery}</strong><small>Gallery Photos</small></div>
      </div>

      <div class="adminCategoryGrid" id="adminModulesGrid">
        <section class="adminModuleCard">
          <div class="adminModuleHead">
            <span class="sectionKicker">01 · Matchday Operations</span>
            <h3>Fixtures, Playing XI &amp; Availability</h3>
          </div>
          <div class="adminModuleActions">
            <button type="button" class="primary" data-add="match">+ Upcoming Match</button>
            <button type="button" class="primary" onclick="addScorecard()">+ Scorecard / Result</button>
            <button type="button" class="secondary" onclick="openAdminSectionManager('matches')">Manage Matches</button>
            <button type="button" class="secondary" onclick="addLineup()">+ Publish Playing XI</button>
            <button type="button" class="secondary" onclick="openAdminSectionManager('lineup')">Manage XI &amp; Swap</button>
            <button type="button" class="secondary" onclick="openAdminSectionManager('availability')">Player Availability</button>
          </div>
        </section>

        <section class="adminModuleCard">
          <div class="adminModuleHead">
            <span class="sectionKicker">02 · Squad, Stats &amp; Records</span>
            <h3>Players, Career Numbers &amp; History</h3>
          </div>
          <div class="adminModuleActions">
            <button type="button" class="primary" data-add="player">+ Add Player</button>
            <button type="button" class="secondary" onclick="openAdminSectionManager('stats')">Edit Player Stats</button>
            <button type="button" class="secondary" onclick="addAchievement()">+ Award / POTM</button>
            <button type="button" class="secondary" onclick="openAdminSectionManager('achievements')">Manage Awards</button>
            <button type="button" class="secondary" onclick="v63AddPlayerRecord()">+ Player Record</button>
            <button type="button" class="secondary" onclick="v63AddTeamRecord()">+ Team Record</button>
            <button type="button" class="secondary" onclick="v63AddPartnershipRecord()">+ Partnership</button>
            <button type="button" class="secondary" onclick="openAdminSectionManager('records')">Manage Records</button>
            <button type="button" class="secondary" onclick="v6AddTournament()">+ Tournament</button>
            <button type="button" class="secondary" onclick="openAdminSectionManager('tournaments')">Manage Tournaments</button>
            <button type="button" class="secondary" onclick="v6AddOpponent()">+ Opponent H2H</button>
            <button type="button" class="secondary" onclick="openAdminSectionManager('opponents')">Manage Opponents</button>
          </div>
        </section>

        <section class="adminModuleCard">
          <div class="adminModuleHead">
            <span class="sectionKicker">03 · Media, News &amp; Club Channels</span>
            <h3>Announcements, Honours &amp; Branding</h3>
          </div>
          <div class="adminModuleActions">
            <button type="button" class="primary" data-add="news">+ Add Team News</button>
            <button type="button" class="secondary" onclick="openAdminSectionManager('news')">Manage &amp; Pin News</button>
            <button type="button" class="secondary manageUpdatesBtn" onclick="openAdminSectionManager('updates')">Manage Updates</button>
            <button type="button" class="secondary" data-add="gallery">+ Gallery Photo</button>
            <button type="button" class="secondary" onclick="openAdminSectionManager('gallery')">Manage Gallery</button>
            <button type="button" class="secondary" data-add="honour">+ Add Honour</button>
            <button type="button" class="secondary" onclick="openAdminSectionManager('honours')">Manage Honours</button>
            <button type="button" class="secondary" data-add="social">+ Add Social</button>
            <button type="button" class="secondary" onclick="openAdminSectionManager('socials')">Manage Socials</button>
          </div>
        </section>
      </div>
    </div>
  </div>`;

  if (typeof bindAdds === 'function') bindAdds();
  window.rdmInjectPlayerManager?.();
  window.rdmInjectBrandAdmin?.();
  window.rdmInjectEmailToolCard?.();
  window.rdmSyncInstallButtons?.();
}

const v61OldRenderAdmin = window.renderAdmin;
window.renderAdmin = function () {
  const a = document.getElementById('adminBody');
  if (a) delete a.dataset.v61Ready;
  if (v61OldRenderAdmin) v61OldRenderAdmin();
  if (rdmAdmin()) setTimeout(() => v61Admin(true), 0);
};
setInterval(() => {
  window.rdmRenderHomeMatchHub?.();
  window.rdmEnhanceMatchCentre?.();
  if (rdmAdmin() && document.body.classList.contains('admin') && document.getElementById('admin')?.classList.contains('active')) {
    v61Admin(false);
  }
}, 1500);

/* V6.2 Structured Modals + V6.3 Separated Records */
function v62Modal(title, fields, values, onSave) {
  if (!rdmAdmin()) return toast?.('Admin only');
  let m = document.getElementById('v62Modal');
  if (m) m.remove();
  m = document.createElement('div');
  m.id = 'v62Modal';
  m.className = 'modal show';
  const html = fields.map(f => {
    const val = esc(values[f.k] ?? '');
    if (f.type === 'textarea') return `<label class="${f.full ? 'full' : ''}">${f.label}<textarea data-k="${f.k}" placeholder="${esc(f.ph || '')}">${val}</textarea></label>`;
    if (f.type === 'select') return `<label class="${f.full ? 'full' : ''}">${f.label}<select data-k="${f.k}">${f.options.map(o => `<option value="${esc(o)}" ${String(values[f.k] || '') === o ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select></label>`;
    return `<label class="${f.full ? 'full' : ''}">${f.label}<input data-k="${f.k}" type="${f.type || 'text'}" value="${val}" placeholder="${esc(f.ph || '')}"></label>`;
  }).join('');
  m.innerHTML = `<form class="dialog rdmUnifiedDialog"><button class="close" type="button">×</button><h2>${title}</h2><div class="v62Grid">${html}</div><button class="primary wide" type="submit">Save &amp; Sync</button></form>`;
  document.body.appendChild(m);
  m.querySelector('.close').onclick = () => m.remove();
  m.addEventListener('click', e => { if (e.target === m) m.remove(); });
  m.querySelector('form').onsubmit = async e => {
    e.preventDefault();
    const d = {};
    m.querySelectorAll('[data-k]').forEach(x => d[x.dataset.k] = x.value.trim());
    try { await onSave(d); m.remove(); }
    catch (err) { console.error(err); toast('Save failed'); }
  };
}

async function v6AddRecord(id) {
  if (!rdmAdmin()) return;
  const x = V6.records.find(z => z._docId === id) || {};
  v62Modal(id ? 'Edit Team Record' : 'Add Team Record', [
    { k: 'category', label: 'Category', type: 'select', options: ['TEAM', 'BATTING', 'BOWLING', 'PARTNERSHIP', 'FIELDING', 'OTHER'] },
    { k: 'season', label: 'Season / Year', ph: '2027' },
    { k: 'title', label: 'Record Name', ph: 'Highest Team Score', full: true },
    { k: 'value', label: 'Record Value', ph: '185/6' },
    { k: 'player', label: 'Player / Holder', ph: 'Rehan Akhtar' },
    { k: 'opponent', label: 'vs Opponent', ph: 'Team name' },
    { k: 'date', label: 'Date', type: 'date' },
    { k: 'note', label: 'Note', type: 'textarea', full: true, ph: 'Optional details' }
  ], x, async d => {
    if (!d.title || !d.value) { toast('Record name & value required'); throw Error('required'); }
    d.updatedAt = rdmStamp();
    d.createdMs = x.createdMs || Date.now();
    try {
      (id && !String(id).startsWith('loc_'))
        ? await rdmDB.collection(V6COL.records).doc(id).set(v6Strip(d), { merge: true })
        : await rdmDB.collection(V6COL.records).add(v6Strip(d));
    } catch (err) {
      v6Err(err, 'Record sync');
    }
    await v6load();
    toast('Record saved & synced');
  });
}

function v6Tournaments() {
  const t = document.getElementById('tournamentList');
  if (t) {
    t.innerHTML = V6.tournaments.length
      ? [...V6.tournaments].sort((a, b) => String(b.season || '').localeCompare(String(a.season || ''))).map(x => `<article class="tournamentCard">
          <h3>${mini(x.name)}</h3>
          <div class="v62Meta"><span class="seasonTag">${mini(x.season || '')}</span>${x.status ? `<span class="v62Chip">${mini(x.status)}</span>` : ''}${x.position ? `<span class="v62Chip">${mini(x.position)}</span>` : ''}</div>
          ${x.venue ? `<p>Venue · ${mini(x.venue)}</p>` : ''}${x.dates ? `<p>Dates · ${mini(x.dates)}</p>` : ''}${x.organizer ? `<p>Organizer · ${mini(x.organizer)}</p>` : ''}
          <p>${x.teams ? mini(x.teams) + ' Teams · ' : ''}${x.matches ? mini(x.matches) + ' Matches · ' : ''}${x.wins ? mini(x.wins) + ' Wins · ' : ''}${x.losses ? mini(x.losses) + ' Losses' : ''}</p>
          ${x.fixtures ? `<p class="v62Note">${mini(x.fixtures)}</p>` : ''}
          ${rdmAdmin() ? `<div class="v62Actions"><button class="tinyBtn" onclick="v6AddTournament('${x._docId}')">Edit</button><button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.tournaments}','${x._docId}')">Delete</button></div>` : ''}
        </article>`).join('')
      : '<div class="empty">No tournament added yet</div>';
  }
  const o = document.getElementById('opponentList');
  if (o) {
    o.innerHTML = V6.opponents.length
      ? V6.opponents.map(x => `<article class="card">
          <h3>${mini(x.name)}</h3>
          <p>Head-to-Head · ${x.played || 0} Played · ${x.won || 0} Won · ${x.lost || 0} Lost</p>
          ${rdmAdmin() ? `<div class="v62Actions"><button class="tinyBtn" onclick="v6AddOpponent('${x._docId}')">Edit</button><button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.opponents}','${x._docId}')">Delete</button></div>` : ''}
        </article>`).join('')
      : '<div class="empty">No opponent added yet</div>';
  }
}

async function v6AddTournament(id) {
  if (!rdmAdmin()) return;
  const x = V6.tournaments.find(z => z._docId === id) || {};
  v62Modal(id ? 'Edit Tournament' : 'Add Tournament', [
    { k: 'name', label: 'Tournament Name', ph: 'Mahuawan Premier League 3', full: true },
    { k: 'season', label: 'Season / Year', ph: '2027' },
    { k: 'status', label: 'Status', type: 'select', options: ['UPCOMING', 'ONGOING', 'COMPLETED'] },
    { k: 'position', label: 'RDM Position', ph: 'Winner / Runner-Up / Group Stage' },
    { k: 'venue', label: 'Venue', ph: 'Ground / Village' },
    { k: 'dates', label: 'Dates', ph: '10 Jan – 15 Jan 2027' },
    { k: 'organizer', label: 'Organizer', ph: 'Organizer name' },
    { k: 'teams', label: 'Total Teams', type: 'number' },
    { k: 'matches', label: 'RDM Matches', type: 'number' },
    { k: 'wins', label: 'RDM Wins', type: 'number' },
    { k: 'losses', label: 'RDM Losses', type: 'number' },
    { k: 'fixtures', label: 'Fixtures / Points / Notes', type: 'textarea', full: true, ph: 'Match 1: RDM vs Team A' }
  ], x, async d => {
    if (!d.name || !d.season) { toast('Name & season required'); throw Error('required'); }
    d.updatedAt = rdmStamp();
    d.createdMs = x.createdMs || Date.now();
    try {
      (id && !String(id).startsWith('loc_'))
        ? await rdmDB.collection(V6COL.tournaments).doc(id).set(v6Strip(d), { merge: true })
        : await rdmDB.collection(V6COL.tournaments).add(v6Strip(d));
      v6ClearOverride('tournaments', true);
    } catch (err) {
      v6Err(err, 'Tournament sync');
    }
    await v6load();
    toast('Tournament saved & synced');
  });
}
window.v6AddRecord = v6AddRecord;
window.v6EditRecord = v6AddRecord;
window.v6AddTournament = v6AddTournament;

function v63Type(x) {
  if (x.recordType) return x.recordType;
  const c = String(x.category || '').toUpperCase();
  if (c === 'PARTNERSHIP') return 'PARTNERSHIP';
  if (['BATTING', 'BOWLING', 'FIELDING', 'PLAYER'].includes(c)) return 'PLAYER';
  return 'TEAM';
}
function v63Date(d) {
  if (!d) return '';
  const a = String(d).split('-');
  if (a.length !== 3) return d;
  const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${Number(a[2])} ${m[Number(a[1]) - 1] || a[1]} ${a[0]}`;
}
function v63Card(x, editFn) {
  return `<article class="recordCard">
    <div class="v62Meta"><span class="seasonTag">${mini(x.season || 'ALL TIME')}</span>${x.category ? `<span class="v62Chip">${mini(x.category)}</span>` : ''}</div>
    <h3>${mini(x.title || 'Record')}</h3>
    <div class="recordValue">${mini(x.value || '—')}</div>
    ${x.player ? `<p>Player · ${mini(x.player)}</p>` : ''}
    ${x.player2 ? `<p>Partner · ${mini(x.player2)}</p>` : ''}
    ${x.wicket ? `<p>Stand · ${mini(x.wicket)}</p>` : ''}
    ${x.opponent ? `<p>Opponent · ${mini(x.opponent)}</p>` : ''}
    ${x.date ? `<p>Date · ${mini(v63Date(x.date))}</p>` : ''}
    ${x.note ? `<p class="v62Note">${mini(x.note)}</p>` : ''}
    ${rdmAdmin() ? `<div class="v62Actions"><button class="tinyBtn" onclick="${editFn}('${x._docId}')">Edit</button><button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.records}','${x._docId}')">Delete</button></div>` : ''}
  </article>`;
}
function v63List(id, arr, editFn, empty) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = arr.length ? arr.map(x => v63Card(x, editFn)).join('') : `<div class="empty">${empty}</div>`;
}
function v6SetSeason(season) { v6Season = season || 'ALL'; v6Records(); }
window.v6SetSeason = v6SetSeason;

function v6Records() {
  const tabs = [['PLAYER', 'Player Records'], ['TEAM', 'Team Records'], ['PARTNERSHIP', 'Partnerships'], ['LEADERBOARD', 'Leaderboard & Stats']];
  const rf = document.getElementById('recordTypeFilters');
  if (rf) rf.innerHTML = tabs.map(([k, lbl]) => `<button type="button" class="tinyBtn recordTypeBtn ${v6RecordType === k ? 'on' : ''}" onclick="v6SetRecordType('${k}')">${lbl}</button>`).join('');
  const seasons = [...new Set([...XD.stats.map(s => s.season), ...V6.records.map(r => r.season)].map(s => String(s || '').trim()).filter(Boolean))].sort((a, b) => b.localeCompare(a));
  const sf = document.getElementById('seasonFilters');
  if (sf) {
    sf.innerHTML = seasons.length
      ? [`<button type="button" class="seasonFilterBtn ${v6Season === 'ALL' ? 'on' : ''}" onclick="v6SetSeason('ALL')">All Seasons</button>`, ...seasons.map(y => `<button type="button" class="seasonFilterBtn ${String(v6Season) === y ? 'on' : ''}" onclick="v6SetSeason('${esc(y)}')">${esc(y)}</button>`)].join('')
      : '';
  }
  const stats = v6Season === 'ALL' ? XD.stats : XD.stats.filter(s => String(s.season || '') === String(v6Season));
  const total = p => stats.filter(s => s.playerId === p.id).reduce((a, z) => {
    ['matches', 'runs', 'wickets', 'highScore', 'fours', 'sixes', 'fifties', 'hundreds', 'runOuts'].forEach(k => a[k] = (k === 'highScore' ? Math.max(xnum(a[k]), xnum(z[k])) : xnum(a[k]) + xnum(z[k])));
    a.strikeRate = Math.max(xnum(a.strikeRate), xnum(z.strikeRate));
    a.economy = a.economy ? Math.min(xnum(a.economy), xnum(z.economy)) : xnum(z.economy);
    a.bestBowling = z.bestBowling || a.bestBowling || '';
    return a;
  }, { matches: 0, runs: 0, wickets: 0, highScore: 0, fours: 0, sixes: 0, fifties: 0, hundreds: 0, runOuts: 0, strikeRate: 0, economy: 0, bestBowling: '' });
  const ranked = D.players.map(p => ({ p, s: total(p) }));
  const best = (k, low = false) => [...ranked].filter(x => x.s[k] > 0).sort((a, b) => low ? a.s[k] - b.s[k] : b.s[k] - a.s[k])[0];
  const awards = {};
  XD.achievements.forEach(a => { if (/player of the match|potm/i.test(a.title || '')) awards[a.playerName] = (awards[a.playerName] || 0) + 1; });
  const potm = Object.entries(awards).sort((a, b) => b[1] - a[1])[0];
  const lb = document.getElementById('leaderboard');
  if (lb) {
    const items = [['Top Run Scorer', best('runs'), 'runs'], ['Top Wicket Taker', best('wickets'), 'wickets'], ['Most Sixes', best('sixes'), 'sixes'], ['Most Fours', best('fours'), 'fours']];
    lb.innerHTML = `<div class="leaderGrid">${items.map(([t, x, k]) => `<div class="leaderCard"><span>${t}</span><b>${x ? mini(x.p.name) + ' · ' + x.s[k] : 'No stats recorded yet'}</b></div>`).join('')}<div class="leaderCard"><span>Most POTM</span><b>${potm ? mini(potm[0]) + ' · ' + potm[1] : 'No POTM awards yet'}</b></div></div>`;
  }
  const tblWrap = document.getElementById('squadLeaderboardTableWrap');
  if (tblWrap) {
    const rows = [...ranked].sort((a, b) => (b.s.runs - a.s.runs) || (b.s.wickets - a.s.wickets) || (b.s.matches - a.s.matches));
    const hasAnyStats = rows.some(r => r.s.matches > 0 || r.s.runs > 0 || r.s.wickets > 0);
    tblWrap.innerHTML = `<div class="squadLeaderboardTitleRow"><h3>Squad Career Statistics</h3><span>${hasAnyStats ? 'Tap any player row to view full profile' : 'Stats update automatically when player figures are logged'}</span></div><div class="statsTableScroll"><table class="statsLeaderboardTable"><thead><tr><th>#</th><th>Player</th><th>Mat</th><th>Runs</th><th>HS</th><th>SR</th><th>4s/6s</th><th>Wkts</th><th>Econ</th></tr></thead><tbody>${rows.map((r, idx) => `<tr onclick="openPlayerProfile?.('${esc(r.p.id)}')" title="View ${esc(mini(r.p.name))} profile"><td class="statsRankNum">${idx + 1}</td><td class="statsPlayerCell">${mini(r.p.name)}<small>${mini(r.p.role)}</small></td><td>${r.s.matches}</td><td class="statsHighlightVal">${r.s.runs}</td><td>${r.s.highScore}</td><td>${r.s.strikeRate || '—'}</td><td>${r.s.fours}/${r.s.sixes}</td><td class="statsHighlightVal">${r.s.wickets}</td><td>${r.s.economy || '—'}</td></tr>`).join('')}</tbody></table></div>`;
  }
  const autoDefs = [['Highest Individual Score', 'highScore', ' Runs'], ['Most Runs', 'runs', ' Runs'], ['Most Wickets', 'wickets', ' Wickets'], ['Most Sixes', 'sixes', ' Sixes'], ['Most Fours', 'fours', ' Fours'], ['Most 50s', 'fifties', ''], ['Most 100s', 'hundreds', ''], ['Most Run Outs', 'runOuts', ''], ['Best Strike Rate', 'strikeRate', ''], ['Best Economy', 'economy', '', true]];
  const pr = document.getElementById('playerRecordList');
  if (pr) pr.innerHTML = autoDefs.map(([title, k, suf, low]) => { const x = best(k, !!low); return `<article class="recordCard"><span class="v62Chip">Auto Stats</span><h3>${mini(title)}</h3><div class="recordValue">${x ? mini(String(x.s[k]) + suf) : '—'}</div><p>${x ? mini(x.p.name) : 'No stats recorded yet'}</p></article>`; }).join('');
  const all = (v6Season === 'ALL' ? V6.records : V6.records.filter(x => String(x.season || '') === String(v6Season))).sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
  v63List('teamRecordList', all.filter(x => v63Type(x) === 'TEAM'), 'v63AddTeamRecord', 'No team records added yet');
  v63List('partnershipRecordList', all.filter(x => v63Type(x) === 'PARTNERSHIP'), 'v63AddPartnershipRecord', 'No partnership records added yet');
  const map = { PLAYER: 'playerRecordSection', TEAM: 'teamRecordSection', PARTNERSHIP: 'partnershipRecordSection', LEADERBOARD: 'leaderboardSection' };
  Object.entries(map).forEach(([t, id]) => { const el = document.getElementById(id); if (el) el.hidden = v6RecordType !== t; });
}

function v6SetRecordType(t) {
  v6RecordType = t;
  if (t === 'TOURNAMENT') { document.querySelector('[data-page="tournaments"]')?.click(); setTimeout(() => document.getElementById('tournamentList')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80); return; }
  if (t === 'H2H') { document.querySelector('[data-page="tournaments"]')?.click(); setTimeout(() => document.getElementById('opponentList')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80); return; }
  v6Records();
}
window.v6SetRecordType = v6SetRecordType;

async function v63Save(id, x, d, type) {
  if (!rdmAdmin()) return toast?.('Admin only');
  if (!d.title || !d.value) { toast('Record name & value required'); throw Error('required'); }
  d.recordType = type;
  d.createdMs = x.createdMs || Date.now();
  const rec = { ...x, ...d, _docId: id || 'loc_' + Date.now() };
  if (id) Object.assign(x, rec);
  else V6.records.unshift(rec);
  v6SaveOverride('records', V6.records, true);
  let synced = true;
  try {
    const clean = v6Strip({ ...d, createdMs: rec.createdMs, updatedAt: rdmStamp() });
    if (id && !String(id).startsWith('loc_')) {
      await rdmDB.collection(V6COL.records).doc(id).set(clean, { merge: true });
    } else {
      const ref = await rdmDB.collection(V6COL.records).add(clean);
      rec._docId = ref.id;
    }
    v6ClearOverride('records', true);
  } catch (err) {
    synced = false;
    v6Err(err, 'Record sync');
  }
  v6render();
  window.refreshAdminSectionManager?.();
  if (synced) toast('Record saved & synced');
}

function v63AddPlayerRecord(id) {
  if (!rdmAdmin()) return;
  const x = V6.records.find(z => z._docId === id) || {};
  v62Modal(id ? 'Edit Player Record' : 'Add Player Record', [
    { k: 'category', label: 'Type', type: 'select', options: ['BATTING', 'BOWLING', 'FIELDING', 'ALL-ROUNDER', 'OTHER'] },
    { k: 'season', label: 'Season / Year', ph: '2027' },
    { k: 'player', label: 'Player', ph: 'Rehan Akhtar' },
    { k: 'title', label: 'Record Name', ph: 'Highest Individual Score', full: true },
    { k: 'value', label: 'Record Value', ph: '85 Runs' },
    { k: 'opponent', label: 'vs Opponent', ph: 'Team name' },
    { k: 'date', label: 'Date', type: 'date' },
    { k: 'note', label: 'Note', type: 'textarea', full: true }
  ], x, d => v63Save(id, x, d, 'PLAYER'));
}

function v63AddTeamRecord(id) {
  if (!rdmAdmin()) return;
  const x = V6.records.find(z => z._docId === id) || {};
  v62Modal(id ? 'Edit Team Record' : 'Add Team Record', [
    { k: 'category', label: 'Type', type: 'select', options: ['TEAM', 'CHASE', 'WIN', 'STREAK', 'OTHER'] },
    { k: 'season', label: 'Season / Year', ph: '2027' },
    { k: 'title', label: 'Record Name', ph: 'Highest Team Score', full: true },
    { k: 'value', label: 'Record Value', ph: '185/6' },
    { k: 'opponent', label: 'vs Opponent', ph: 'Team name' },
    { k: 'date', label: 'Date', type: 'date' },
    { k: 'note', label: 'Note', type: 'textarea', full: true }
  ], x, d => v63Save(id, x, d, 'TEAM'));
}

function v63AddPartnershipRecord(id) {
  if (!rdmAdmin()) return;
  const x = V6.records.find(z => z._docId === id) || {};
  v62Modal(id ? 'Edit Partnership' : 'Add Partnership Record', [
    { k: 'season', label: 'Season / Year', ph: '2027' },
    { k: 'player', label: 'Player 1', ph: 'Rehan Akhtar' },
    { k: 'player2', label: 'Player 2', ph: 'Saif Ali' },
    { k: 'wicket', label: 'Wicket', ph: '1st Wicket' },
    { k: 'title', label: 'Record Name', ph: 'Highest Partnership', full: true },
    { k: 'value', label: 'Runs', ph: '120 Runs' },
    { k: 'opponent', label: 'vs Opponent', ph: 'Team name' },
    { k: 'date', label: 'Date', type: 'date' },
    { k: 'note', label: 'Note', type: 'textarea', full: true }
  ], x, d => { d.category = 'PARTNERSHIP'; return v63Save(id, x, d, 'PARTNERSHIP'); });
}

window.v63AddPlayerRecord = v63AddPlayerRecord;
window.v63AddTeamRecord = v63AddTeamRecord;
window.v63AddPartnershipRecord = v63AddPartnershipRecord;

(function rdmPublicHashRouter() {
  function syncFromHash() {
    if ((window.__rdmUrlKeyRole || 'public') !== 'public') return;
    const h = String(location.hash || '').replace(/^#/, '').trim().toLowerCase();
    if (!h || h.startsWith('player=')) return;
    if (typeof VALID_PUBLIC_PAGES !== 'undefined' && VALID_PUBLIC_PAGES.has(h) && typeof go === 'function') {
      go(h, { updateHash: false });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', syncFromHash, { once: true });
  else syncFromHash();
  window.addEventListener('hashchange', syncFromHash);
})();
