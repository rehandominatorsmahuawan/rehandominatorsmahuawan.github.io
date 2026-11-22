/* RDM V8.0.0 — Unified Modal Forms, Password-Gated Player Actions & Stripped Firestore Payloads */
(() => {
  const E = s => String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
  const N = v => Number(v || 0) || 0;
  const strip = obj => typeof window.rdmStripDocMeta === 'function' ? window.rdmStripDocMeta(obj) : (() => { const c = {}; for (const [k, v] of Object.entries(obj || {})) { if (k !== '_docId' && k !== '_profileUid' && k !== '_col' && v !== undefined && v !== null) c[k] = v; } return c; })();
  const reportErr = (err, label) => typeof window.rdmReportWriteError === 'function' ? window.rdmReportWriteError(err, label) : console.warn(label, err);

  function rdmMiniText(v) {
    const str = String(v ?? '');
    const map = {
      'ᴀ': 'A', 'ʙ': 'B', 'ᴄ': 'C', 'ᴅ': 'D', 'ᴇ': 'E', 'ꜰ': 'F', 'ɢ': 'G', 'ʜ': 'H',
      'ɪ': 'I', 'ᴊ': 'J', 'ᴋ': 'K', 'ʟ': 'L', 'ᴍ': 'M', 'ɴ': 'N', 'ᴏ': 'O', 'ᴘ': 'P',
      'ǫ': 'Q', 'ʀ': 'R', 'ꜱ': 'S', 'ᴛ': 'T', 'ᴜ': 'U', 'ᴠ': 'V', 'ᴡ': 'W', 'ʏ': 'Y', 'ᴢ': 'Z'
    };
    return str.replace(/[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡʏᴢ]/g, ch => map[ch] || ch);
  }
  function rdmMiniFormUI(root = document) {
    const scopes = [];
    if (root.nodeType === 1 && (root.matches?.('.dialog,.rdmUnifiedDialog,.rdmInlineForm') || root.querySelector?.('form'))) scopes.push(root);
    root.querySelectorAll?.('.dialog,.rdmUnifiedDialog,.rdmInlineForm').forEach(x => scopes.push(x));
    scopes.forEach(scope => {
      scope.querySelectorAll('h1,h2,h3,h4,legend,.rdmFormHead span').forEach(el => {
        if (!el.dataset.rdmMiniDone) { el.textContent = rdmMiniText(el.textContent); el.dataset.rdmMiniDone = '1'; }
      });
    });
  }
  window.rdmMiniText = rdmMiniText;
  window.rdmMiniFormUI = rdmMiniFormUI;

  function field(f) {
    const v = E(f.value ?? '');
    if (f.type === 'textarea') return `<label>${E(f.label)}<textarea name="${f.name}" rows="${f.rows || 4}" ${f.required ? 'required' : ''}>${v}</textarea></label>`;
    if (f.type === 'select') return `<label>${E(f.label)}<select name="${f.name}">${(f.options || []).map(o => `<option value="${E(o)}" ${String(o) === String(f.value) ? 'selected' : ''}>${E(o)}</option>`).join('')}</select></label>`;
    return `<label>${E(f.label)}<input name="${f.name}" type="${f.type || 'text'}" value="${v}" ${f.required ? 'required' : ''} ${f.placeholder ? `placeholder="${E(f.placeholder)}"` : ''}></label>`;
  }

  function modal(title, fields, onSave) {
    document.getElementById('rdmUnifiedForm')?.remove();
    const m = document.createElement('div');
    m.id = 'rdmUnifiedForm';
    m.className = 'modal show rdmUnifiedModal';
    m.innerHTML = `<form class="dialog rdmUnifiedDialog">
      <button class="close" type="button" aria-label="Close">×</button>
      <h2>${E(rdmMiniText(title))}</h2>
      <div class="rdmUnifiedFields">${fields.map(field).join('')}</div>
      <button class="primary wide" type="submit">Save &amp; Sync</button>
    </form>`;
    document.body.appendChild(m);
    const dlg = m.querySelector('.dialog');
    m.querySelector('.close').onclick = () => m.remove();
    m.addEventListener('click', e => { if (e.target === m) m.remove(); });
    m.querySelector('form').onsubmit = async e => {
      e.preventDefault();
      const b = e.submitter;
      b.disabled = true;
      const d = Object.fromEntries(new FormData(e.currentTarget).entries());
      try { await onSave(d); m.remove(); }
      catch (err) { console.error(err); toast?.('Save failed'); b.disabled = false; }
    };
    requestAnimationFrame(() => { dlg.scrollTop = 0; });
  }
  window.rdmUnifiedModal = modal;

  window.editStats = id => {
    if (!rdmAdmin?.()) return toast?.('Admin only');
    const s = (typeof XD !== 'undefined' ? XD.stats : []).find(z => z.playerId === id) || {};
    modal('Edit Player Stats', [
      ['matches', 'Matches'], ['runs', 'Runs'], ['wickets', 'Wickets'], ['highScore', 'Highest Score'],
      ['fours', 'Fours'], ['sixes', 'Sixes'], ['fifties', '50s'], ['hundreds', '100s'],
      ['runOuts', 'Run Outs'], ['strikeRate', 'Strike Rate'], ['economy', 'Economy'], ['ballsFaced', 'Balls Faced']
    ].map(([name, label]) => ({ name, label, type: 'number', value: s[name] || 0 })).concat([
      { name: 'bestBowling', label: 'Best Bowling', value: s.bestBowling || '' },
      { name: 'last5', label: 'Last 5 Match Form', value: s.last5 || '' },
      { name: 'season', label: 'Season / Year', value: s.season || '2027' }
    ]), async d => {
      const payload = {
        playerId: id,
        matches: N(d.matches),
        runs: N(d.runs),
        wickets: N(d.wickets),
        highScore: N(d.highScore),
        fours: N(d.fours),
        sixes: N(d.sixes),
        fifties: N(d.fifties),
        hundreds: N(d.hundreds),
        runOuts: N(d.runOuts),
        strikeRate: N(d.strikeRate),
        economy: N(d.economy),
        ballsFaced: N(d.ballsFaced),
        bestBowling: String(d.bestBowling || '').trim(),
        last5: String(d.last5 || '').trim(),
        season: String(d.season || '2027').trim()
      };
      const rec = { ...payload, _docId: id };
      const idx = XD.stats.findIndex(z => z.playerId === id);
      if (idx >= 0) XD.stats[idx] = rec;
      else XD.stats.push(rec);
      try {
        await rdmDB.collection('PlayerStats').doc(id).set({ ...strip(payload), updatedAt: rdmStamp() }, { merge: true });
      } catch (err) {
        window.xSaveOverride?.('stats', XD.stats);
        reportErr(err, 'Player stats sync');
      }
      xrender?.();
      v6render?.();
      window.refreshAdminSectionManager?.();
      toast?.('Stats saved & synced');
    });
  };

  window.addAchievement = () => {
    if (!rdmAdmin?.()) return toast?.('Admin only');
    return modal('Add Achievement', [
      { name: 'title', label: 'Achievement / Award', required: true },
      { name: 'playerName', label: 'Player Name', value: 'TEAM' },
      { name: 'detail', label: 'Details', type: 'textarea' }
    ], async d => {
      const payload = { title: String(d.title || '').trim(), playerName: String(d.playerName || 'TEAM').trim(), detail: String(d.detail || '').trim(), createdMs: Date.now() };
      const rec = { ...payload, _docId: 'loc_' + Date.now() };
      try {
        const ref = await rdmDB.collection('Achievements').add({ ...strip(payload), updatedAt: rdmStamp() });
        rec._docId = ref.id;
      } catch (err) {
        reportErr(err, 'Add achievement sync');
      }
      XD.achievements.unshift(rec);
      xrender?.();
      v6render?.();
      window.refreshAdminSectionManager?.();
      toast?.('Achievement saved & synced');
    });
  };

  window.v6EditAchievement = id => {
    if (!rdmAdmin?.()) return toast?.('Admin only');
    const a = XD.achievements.find(x => x._docId === id) || {};
    modal('Edit Achievement', [
      { name: 'title', label: 'Achievement / Award', value: a.title, required: true },
      { name: 'playerName', label: 'Player Name', value: a.playerName || 'TEAM' },
      { name: 'detail', label: 'Details', type: 'textarea', value: a.detail || '' }
    ], async d => {
      const clean = { title: String(d.title || '').trim(), playerName: String(d.playerName || 'TEAM').trim(), detail: String(d.detail || '').trim() };
      Object.assign(a, clean);
      try {
        const clean = { ...strip(clean), updatedAt: rdmStamp() };
        if (id && !String(id).startsWith('loc_')) {
          await rdmDB.collection('Achievements').doc(id).set(clean, { merge: true });
        } else {
          const ref = await rdmDB.collection('Achievements').add({ ...clean, createdMs: a.createdMs || Date.now() });
          a._docId = ref.id;
        }
      } catch (err) {
        window.xSaveOverride?.('achievements', XD.achievements);
        reportErr(err, 'Edit achievement sync');
      }
      xrender?.();
      v6render?.();
      window.refreshAdminSectionManager?.();
      toast?.('Achievement updated & synced');
    });
  };

  window.setAvailability = id => {
    const canSelf = window.__rdmUrlKeyRole === 'player' && session?.mode === 'player' && session.playerId === id && (typeof window.rdmIsPlayerUnlocked !== 'function' || window.rdmIsPlayerUnlocked(id));
    if (!rdmAdmin?.() && !canSelf) return toast?.('Unlock profile first');
    const a = XD.availability.find(z => z.playerId === id) || {};
    modal('Player Availability', [
      { name: 'status', label: 'Matchday Status', type: 'select', value: a.status || 'AVAILABLE', options: ['AVAILABLE', 'UNAVAILABLE'] }
    ], async d => {
      const payload = { playerId: id, status: String(d.status || 'AVAILABLE').toUpperCase() };
      const rec = { ...payload, _docId: id };
      const idx = XD.availability.findIndex(z => z.playerId === id);
      if (idx >= 0) XD.availability[idx] = rec;
      else XD.availability.push(rec);
      try {
        await rdmDB.collection('Availability').doc(id).set({ ...strip(payload), updatedAt: rdmStamp() }, { merge: true });
      } catch (err) {
        window.xSaveOverride?.('availability', XD.availability);
        reportErr(err, 'Availability sync');
      }
      xrender?.();
      if (session?.mode === 'player') window.renderProfile?.();
      window.refreshAdminSectionManager?.();
      toast?.('Availability updated & synced');
    });
  };

  function rdmLineupIds(v) {
    return [...new Set((Array.isArray(v) ? v : String(v || '').split(',')).map(x => String(x).trim().toUpperCase()).filter(id => /^RDM\d{3}$/.test(id)))];
  }

  window.addLineup = () => {
    if (!rdmAdmin?.()) return toast?.('Admin only');
    return modal('Publish Playing XI', [
      { name: 'title', label: 'Title', value: 'PLAYING XI' },
      { name: 'match', label: 'Match / Opponent' },
      { name: 'players', label: '11 Player IDs (comma separated)', type: 'textarea', value: 'RDM001,RDM002,RDM003,RDM004,RDM005,RDM006,RDM007,RDM008,RDM009,RDM010,RDM011' },
      { name: 'subs', label: 'Substitute Player IDs', value: 'RDM012,RDM013,RDM014,RDM015' }
    ], async d => {
      const players = rdmLineupIds(d.players).slice(0, 11);
      const subs = rdmLineupIds(d.subs).filter(id => !players.includes(id));
      if (players.length !== 11) { toast?.('Exactly 11 unique RDM IDs required'); throw Error('PLAYING_XI_MUST_HAVE_11'); }
      const payload = { title: String(d.title || 'PLAYING XI').trim(), match: String(d.match || '').trim(), players, subs, createdMs: Date.now() };
      const rec = { ...payload, _docId: 'loc_' + Date.now() };
      try {
        const ref = await rdmDB.collection('PlayingXI').add({ ...strip(payload), updatedAt: rdmStamp() });
        rec._docId = ref.id;
      } catch (err) {
        reportErr(err, 'Playing XI sync');
      }
      XD.lineups.unshift(rec);
      xrender?.();
      window.refreshAdminSectionManager?.();
      toast?.('Playing XI published & synced');
    });
  };

  window.rdmSwapLineupPlayer = docId => {
    if (!rdmAdmin?.()) return toast?.('Admin only');
    const l = (typeof XD !== 'undefined' ? XD.lineups : []).find(x => x._docId === docId);
    if (!l) return;
    const players = rdmLineupIds(l.players);
    const subs = rdmLineupIds(l.subs);
    if (!players.length || !subs.length) return toast?.('No substitute available');
    const label = id => {
      const p = (typeof D !== 'undefined' ? D.players : []).find(x => x.id === id);
      return id + ' — ' + (p?.name || id);
    };
    modal('Swap Playing XI / Substitute', [
      { name: 'xi', label: 'Move from Playing XI to Substitute', type: 'select', options: players.map(label) },
      { name: 'sub', label: 'Move from Substitute to Playing XI', type: 'select', options: subs.map(label) }
    ], async d => {
      const xi = String(d.xi || '').split(' — ')[0].trim();
      const sub = String(d.sub || '').split(' — ')[0].trim();
      if (!players.includes(xi) || !subs.includes(sub)) throw Error('INVALID_SWAP');
      const nextPlayers = players.map(id => id === xi ? sub : id);
      const nextSubs = subs.map(id => id === sub ? xi : id);
      l.players = nextPlayers;
      l.subs = nextSubs;
      try {
        const clean = { players: nextPlayers, subs: nextSubs, updatedAt: rdmStamp() };
        if (docId && !String(docId).startsWith('loc_')) {
          await rdmDB.collection('PlayingXI').doc(docId).set(clean, { merge: true });
        } else {
          const ref = await rdmDB.collection('PlayingXI').add({ title: l.title || 'PLAYING XI', match: l.match || '', ...clean, createdMs: l.createdMs || Date.now() });
          l._docId = ref.id;
        }
      } catch (err) {
        window.xSaveOverride?.('lineups', XD.lineups);
        reportErr(err, 'Swap XI sync');
      }
      xrender?.();
      window.refreshAdminSectionManager?.();
      toast?.('Playing XI updated & synced');
    });
  };

  window.addScorecard = () => {
    if (!rdmAdmin?.()) return toast?.('Admin only');
    return modal('Add Scorecard', [
      { name: 'opponent', label: 'Opponent', required: true },
      { name: 'date', label: 'Date' },
      { name: 'venue', label: 'Venue' },
      { name: 'ourScore', label: 'RDM Score' },
      { name: 'oppScore', label: 'Opponent Score' },
      { name: 'result', label: 'Result' },
      { name: 'potm', label: 'Player of the Match' }
    ], async d => {
      const payload = { ...d, note: d.result, status: 'RESULT', createdMs: Date.now() };
      const rec = { ...payload, _docId: 'loc_' + Date.now() };
      try {
        const ref = await rdmDB.collection('Matches').add({ ...strip(payload), updatedAt: rdmStamp() });
        rec._docId = ref.id;
      } catch (err) {
        reportErr(err, 'Add scorecard sync');
      }
      D.matches.unshift(rec);
      rdmRefresh?.();
      window.refreshAdminSectionManager?.();
      toast?.('Scorecard saved & synced');
    });
  };

  window.v6AddOpponent = id => {
    if (!rdmAdmin?.()) return toast?.('Admin only');
    const x = (V6.opponents || []).find(z => z._docId === id) || {};
    modal(id ? 'Edit Opponent' : 'Add Opponent', [
      { name: 'name', label: 'Opponent Team Name', value: x.name || '', required: true },
      { name: 'played', label: 'Matches Played', type: 'number', value: x.played || 0 },
      { name: 'won', label: 'RDM Wins', type: 'number', value: x.won || 0 },
      { name: 'lost', label: 'RDM Losses', type: 'number', value: x.lost || 0 }
    ], async d => {
      const payload = { name: String(d.name || '').trim(), played: N(d.played), won: N(d.won), lost: N(d.lost), createdMs: x.createdMs || Date.now() };
      const rec = { ...payload, _docId: id || 'loc_' + Date.now() };
      if (id) Object.assign(x, rec);
      else V6.opponents.unshift(rec);
      try {
        const clean = strip({ ...payload, updatedAt: rdmStamp() });
        if (id && !String(id).startsWith('loc_')) await rdmDB.collection('Opponents').doc(id).set(clean, { merge: true });
        else { const ref = await rdmDB.collection('Opponents').add(clean); rec._docId = ref.id; }
      } catch (err) {
        window.v6SaveOverride?.('opponents', V6.opponents);
        reportErr(err, 'Opponent sync');
      }
      v6render?.();
      window.refreshAdminSectionManager?.();
      toast?.('Opponent saved & synced');
    });
  };

  window.v6EditMatch = id => {
    if (!rdmAdmin?.()) return toast?.('Admin only');
    const m = D.matches.find(x => x._docId === id) || {};
    modal('Edit Match Scorecard', [
      { name: 'tossWinner', label: 'Toss Winner', value: m.tossWinner || '' },
      { name: 'tossDecision', label: 'Toss Decision', value: m.tossDecision || '' },
      { name: 'batting', label: 'Batting Scorecard', type: 'textarea', value: m.batting || '', rows: 6 },
      { name: 'bowling', label: 'Bowling Scorecard', type: 'textarea', value: m.bowling || '', rows: 6 },
      { name: 'partnerships', label: 'Partnerships', type: 'textarea', value: m.partnerships || '' },
      { name: 'fow', label: 'Fall of Wickets', type: 'textarea', value: m.fow || '' },
      { name: 'potm', label: 'Player of the Match', value: m.potm || '' }
    ], async d => {
      Object.assign(m, d);
      try {
        const clean = { ...strip(d), updatedAt: rdmStamp() };
        if (id && !String(id).startsWith('loc_')) {
          await rdmDB.collection('Matches').doc(id).set(clean, { merge: true });
        } else {
          const ref = await rdmDB.collection('Matches').add({ ...clean, opponent: m.opponent || 'Opponent', createdMs: m.createdMs || Date.now() });
          m._docId = ref.id;
        }
      } catch (err) {
        window.rdmSaveCollectionOverride?.('matches', D.matches);
        reportErr(err, 'Match details sync');
      }
      rdmRefresh?.();
      setTimeout(v6render, 100);
      window.refreshAdminSectionManager?.();
      toast?.('Match updated & synced');
    });
  };

  setTimeout(() => {
    [['addAchievement', addAchievement], ['addLineup', addLineup], ['addTournament', () => window.v6AddTournament()], ['addOpponent', () => window.v6AddOpponent()], ['addScorecard', window.addScorecard]].forEach(([id, fn]) => {
      const b = document.getElementById(id);
      if (b) b.onclick = e => { e.stopPropagation(); fn(); };
    });
  }, 700);
})();

/* Confirmation Dialog */
window.rdmConfirmModal = function (title, message, onConfirm) {
  document.getElementById('rdmConfirmModal')?.remove();
  const m = document.createElement('div');
  m.id = 'rdmConfirmModal';
  m.className = 'modal show rdmUnifiedModal';
  m.innerHTML = `<div class="dialog rdmUnifiedDialog rdmConfirmDialog">
    <button class="close" type="button" aria-label="Close">×</button>
    <h2>${window.rdmMiniText?.(title || 'Confirm') || String(title || 'Confirm')}</h2>
    <p class="rdmConfirmText">${window.rdmMiniText?.(message || 'Are you sure?') || String(message || 'Are you sure?')}</p>
    <div class="rdmConfirmActions">
      <button type="button" class="secondary" data-cancel>Cancel</button>
      <button type="button" class="primary deleteConfirmBtn" data-confirm>Delete</button>
    </div>
  </div>`;
  document.body.appendChild(m);
  const close = () => m.remove();
  m.querySelector('.close').onclick = close;
  m.querySelector('[data-cancel]').onclick = close;
  m.addEventListener('click', e => { if (e.target === m) close(); });
  m.querySelector('[data-confirm]').onclick = async e => {
    const b = e.currentTarget;
    b.disabled = true;
    try { await onConfirm(); close(); }
    catch (err) { console.error(err); toast?.('Action failed'); b.disabled = false; }
  };
};

/* Professional Match / Scorecard / Tournament Manager & Renderers */
(() => {
  const H = s => String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
  const num = v => Number(v || 0) || 0;
  const strip = obj => typeof window.rdmStripDocMeta === 'function' ? window.rdmStripDocMeta(obj) : (() => { const c = {}; for (const [k, v] of Object.entries(obj || {})) { if (k !== '_docId' && k !== '_profileUid' && k !== '_col' && v !== undefined && v !== null) c[k] = v; } return c; })();
  const reportErr = (err, label) => typeof window.rdmReportWriteError === 'function' ? window.rdmReportWriteError(err, label) : console.warn(label, err);

  const mapUrl = (lat, lng) => lat && lng ? `https://www.openstreetmap.org/export/embed.html?bbox=${Number(lng) - 0.008}%2C${Number(lat) - 0.006}%2C${Number(lng) + 0.008}%2C${Number(lat) + 0.006}&layer=mapnik&marker=${lat}%2C${lng}` : '';
  const directionsUrl = (lat, lng) => lat && lng ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(lat + ',' + lng)}&travelmode=driving` : '';
  function proMapCard(lat, lng, label = 'Open Full Map & Directions') {
    if (!lat || !lng) return '';
    return `<div class="proMapCardBlock"><div class="proMiniMap"><iframe loading="lazy" src="${H(mapUrl(lat, lng))}"></iframe></div><a class="proMapBelowBtn" href="${H(directionsUrl(lat, lng))}" target="_blank" rel="noopener">📍 ${label}</a></div>`;
  }
  window.proMapCard = proMapCard;

  function proField(label, name, value = '', type = 'text', opts = '') {
    return `<label class="proField"><span>${label}</span><input name="${name}" type="${type}" value="${H(value)}" ${opts}></label>`;
  }
  function proSelect(label, name, value, arr) {
    return `<label class="proField"><span>${label}</span><select name="${name}">${arr.map(x => `<option value="${H(x)}" ${String(x) === String(value) ? 'selected' : ''}>${H(x)}</option>`).join('')}</select></label>`;
  }
  function locBlock(x = {}) {
    return `<section class="proGroup proLocation">
      <h3>📍 Venue &amp; Location</h3>
      <div class="proGrid">
        ${proField('Venue / Ground Name', 'venueName', x.venueName || x.venue || '', 'text', 'required')}
        ${proField('Area / Village', 'area', x.area || '')}
        ${proField('City / District', 'district', x.district || '')}
        ${proField('State', 'state', x.state || 'Bihar')}
        ${proField('Latitude', 'latitude', x.latitude || '', 'number', 'step="any"')}
        ${proField('Longitude', 'longitude', x.longitude || '', 'number', 'step="any"')}
      </div>
      <div class="proLocationActions">
        <button type="button" class="primary proLocate">Use Current Location</button>
        <span class="proLocStatus">${x.latitude && x.longitude ? 'Location Saved' : 'Location Optional'}</span>
      </div>
      <div class="proMapWrap" ${x.latitude && x.longitude ? '' : 'hidden'}>
        <iframe class="proMap" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${H(mapUrl(x.latitude, x.longitude))}"></iframe>
        <a class="proMapOpen" target="_blank" rel="noopener">Open Map</a>
      </div>
    </section>`;
  }

  function proModal(title, body, onSave) {
    document.getElementById('rdmProForm')?.remove();
    const m = document.createElement('div');
    m.id = 'rdmProForm';
    m.className = 'modal show rdmUnifiedModal';
    m.innerHTML = `<form class="dialog rdmUnifiedDialog proDialog">
      <button class="close" type="button" aria-label="Close">×</button>
      <div class="proTitle"><h2>${H(title)}</h2><p>Complete RDM Official Record · Live Sync</p></div>
      ${body}
      <div class="proBottom"><button type="button" class="secondary proCancel">Cancel</button><button class="primary" type="submit">Save &amp; Sync</button></div>
    </form>`;
    document.body.appendChild(m);
    const close = () => m.remove();
    m.querySelector('.close').onclick = close;
    m.querySelector('.proCancel').onclick = close;
    m.onclick = e => { if (e.target === m) close(); };
    const locate = m.querySelector('.proLocate');
    if (locate) {
      locate.onclick = () => {
        const st = m.querySelector('.proLocStatus');
        if (!navigator.geolocation) { st.textContent = 'Location not supported'; return; }
        st.textContent = 'Getting location…';
        navigator.geolocation.getCurrentPosition(p => {
          const lat = p.coords.latitude.toFixed(6), lng = p.coords.longitude.toFixed(6);
          m.querySelector('[name=latitude]').value = lat;
          m.querySelector('[name=longitude]').value = lng;
          st.textContent = 'Current location saved';
          const w = m.querySelector('.proMapWrap');
          w.hidden = false;
          w.querySelector('iframe').src = mapUrl(lat, lng);
          w.querySelector('a').href = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=17/${lat}/${lng}`;
        }, () => { st.textContent = 'Location permission not available'; }, { enableHighAccuracy: true, timeout: 10000 });
      };
    }
    m.querySelector('form').onsubmit = async e => {
      e.preventDefault();
      const b = e.submitter;
      b.disabled = true;
      const d = Object.fromEntries(new FormData(e.currentTarget).entries());
      try { await onSave(d); close(); }
      catch (err) { console.error(err); toast?.('Save failed'); b.disabled = false; }
    };
  }

  function matchBody(x = {}) {
    return `<section class="proGroup">
      <h3>🏏 Match Information</h3>
      <div class="proGrid">
        ${proField('Opponent Team', 'opponent', x.opponent || '', 'text', 'required')}
        ${proSelect('Match Type', 'matchType', x.matchType || 'Friendly', ['Friendly', 'League Match', 'Knockout', 'Semi Final', 'Final', 'Practice'])}
        ${proField('Date', 'date', x.date || '', 'date')}
        ${proField('Time', 'time', x.time || '', 'time')}
        ${proField('Overs', 'overs', x.overs || 20, 'number', 'min="1"')}
        ${proSelect('Match Status', 'matchStatus', x.matchStatus || x.status || 'UPCOMING', ['UPCOMING', 'LIVE', 'COMPLETED', 'CANCELLED'])}
        ${proSelect('Toss Winner', 'tossWinner', x.tossWinner || 'NOT DECIDED', ['NOT DECIDED', 'RDM', 'OPPONENT'])}
        ${proSelect('Toss Decision', 'tossDecision', x.tossDecision || 'NOT DECIDED', ['NOT DECIDED', 'BATTING', 'BOWLING'])}
      </div>
    </section>${locBlock(x)}<section class="proGroup">
      <h3>ℹ Additional Information</h3>
      <div class="proGrid">
        ${proSelect('Venue Type', 'venueType', x.venueType || 'Outdoor', ['Outdoor', 'Indoor'])}
        ${proField('Pitch / Surface', 'pitchType', x.pitchType || '')}
        ${proField('Umpire / Official', 'official', x.official || '')}
        ${proField('Tournament', 'tournament', x.tournament || '')}
      </div>
      <label class="proField proFull"><span>Notes / Match Details</span><textarea name="note" rows="3">${H(x.note || '')}</textarea></label>
    </section>`;
  }

  window.rdmProAddMatch = function (id) {
    if (!rdmAdmin?.()) return toast?.('Admin only');
    const x = id ? (D.matches || []).find(z => z._docId === id) || {} : {};
    proModal(id ? 'Edit Match' : 'Add Match', matchBody(x), async d => {
      d.venue = d.venueName;
      d.createdMs = x.createdMs || Date.now();
      d.overs = num(d.overs);
      const rec = { ...x, ...d, _docId: id || 'loc_' + Date.now() };
      if (id) Object.assign(x, rec);
      else D.matches.unshift(rec);
      try {
        const clean = strip({ ...d, updatedAt: rdmStamp() });
        if (id && !String(id).startsWith('loc_')) await rdmDB.collection('Matches').doc(id).set(clean, { merge: true });
        else { const ref = await rdmDB.collection('Matches').add(clean); rec._docId = ref.id; }
      } catch (err) {
        window.rdmSaveCollectionOverride?.('matches', D.matches);
        reportErr(err, 'Match sync');
      }
      rdmRefresh?.();
      window.refreshAdminSectionManager?.();
      toast?.('Match saved & synced');
    });
  };

  const oldOpen = window.openEdit;
  window.openEdit = function (mode, obj) {
    if (!rdmAdmin?.()) return toast?.('Admin only');
    if (mode === 'match') return window.rdmProAddMatch();
    return oldOpen?.(mode, obj);
  };

  window.addScorecard = function (id) {
    if (!rdmAdmin?.()) return toast?.('Admin only');
    const x = id ? (D.matches || []).find(z => z._docId === id) || {} : {};
    const body = `<section class="proGroup">
      <h3>🏏 Match &amp; Result</h3>
      <div class="proGrid">
        ${proField('Opponent Team', 'opponent', x.opponent || '', 'text', 'required')}
        ${proField('Date', 'date', x.date || '', 'date')}
        ${proField('RDM Score', 'ourScore', x.ourScore || '')}
        ${proField('Opponent Score', 'oppScore', x.oppScore || '')}
        ${proField('RDM Overs', 'ourOvers', x.ourOvers || '')}
        ${proField('Opponent Overs', 'oppOvers', x.oppOvers || '')}
        ${proSelect('Result', 'result', x.result || 'RDM WON', ['RDM WON', 'RDM LOST', 'TIE', 'NO RESULT'])}
        ${proField('Win / Loss Margin', 'margin', x.margin || '')}
        ${proField('Player of the Match', 'potm', x.potm || '')}
        ${proField('Toss Winner', 'tossWinner', x.tossWinner || '')}
        ${proField('Toss Decision', 'tossDecision', x.tossDecision || '')}
        ${proField('Match Type', 'matchType', x.matchType || '')}
      </div>
    </section>${locBlock(x)}<section class="proGroup">
      <h3>📊 Score Details</h3>
      <div class="proGrid">
        ${proField('RDM Wickets', 'ourWickets', x.ourWickets || 0, 'number')}
        ${proField('Opponent Wickets', 'oppWickets', x.oppWickets || 0, 'number')}
        ${proField('RDM Extras', 'ourExtras', x.ourExtras || 0, 'number')}
        ${proField('Opponent Extras', 'oppExtras', x.oppExtras || 0, 'number')}
      </div>
      <label class="proField proFull"><span>Match Summary / Notes</span><textarea name="note" rows="3">${H(x.note || '')}</textarea></label>
    </section>`;
    proModal(id ? 'Edit Scorecard' : 'Add Scorecard', body, async d => {
      d.venue = d.venueName;
      d.status = 'RESULT';
      d.matchStatus = 'COMPLETED';
      ['ourWickets', 'oppWickets', 'ourExtras', 'oppExtras'].forEach(k => d[k] = num(d[k]));
      d.createdMs = x.createdMs || Date.now();
      const rec = { ...x, ...d, _docId: id || 'loc_' + Date.now() };
      if (id) Object.assign(x, rec);
      else D.matches.unshift(rec);
      try {
        const clean = strip({ ...d, updatedAt: rdmStamp() });
        if (id && !String(id).startsWith('loc_')) await rdmDB.collection('Matches').doc(id).set(clean, { merge: true });
        else { const ref = await rdmDB.collection('Matches').add(clean); rec._docId = ref.id; }
      } catch (err) {
        window.rdmSaveCollectionOverride?.('matches', D.matches);
        reportErr(err, 'Scorecard sync');
      }
      rdmRefresh?.();
      window.refreshAdminSectionManager?.();
      toast?.('Scorecard saved & synced');
    });
  };

  window.v6AddTournament = function (id) {
    if (!rdmAdmin?.()) return toast?.('Admin only');
    const x = id ? (V6.tournaments || []).find(z => z._docId === id) || {} : {};
    const body = `<section class="proGroup">
      <h3>🏆 Tournament Information</h3>
      <div class="proGrid">
        ${proField('Tournament Name', 'name', x.name || '', 'text', 'required')}
        ${proField('Season / Year', 'season', x.season || new Date().getFullYear())}
        ${proSelect('Status', 'status', x.status || 'UPCOMING', ['UPCOMING', 'ONGOING', 'COMPLETED'])}
        ${proField('Final Position / Status', 'position', x.position || '')}
        ${proField('Start Date', 'startDate', x.startDate || '', 'date')}
        ${proField('End Date', 'endDate', x.endDate || '', 'date')}
        ${proField('Organizer', 'organizer', x.organizer || '')}
        ${proField('Total Teams', 'teams', x.teams || 0, 'number')}
        ${proField('RDM Matches', 'matches', x.matches || 0, 'number')}
        ${proField('RDM Wins', 'wins', x.wins || 0, 'number')}
        ${proField('RDM Losses', 'losses', x.losses || 0, 'number')}
        ${proField('RDM Draws / NR', 'draws', x.draws || 0, 'number')}
      </div>
    </section>${locBlock(x)}<section class="proGroup">
      <h3>📝 Fixtures &amp; Notes</h3>
      <label class="proField proFull"><span>Fixtures / Points / Description</span><textarea name="fixtures" rows="5">${H(x.fixtures || '')}</textarea></label>
    </section>`;
    proModal(id ? 'Edit Tournament' : 'Add Tournament', body, async d => {
      d.venue = d.venueName;
      d.dates = [d.startDate, d.endDate].filter(Boolean).join(' - ');
      ['teams', 'matches', 'wins', 'losses', 'draws'].forEach(k => d[k] = num(d[k]));
      d.createdMs = x.createdMs || Date.now();
      const rec = { ...x, ...d, _docId: id || 'loc_' + Date.now() };
      if (id) Object.assign(x, rec);
      else V6.tournaments.unshift(rec);
      try {
        const clean = strip({ ...d, updatedAt: rdmStamp() });
        if (id && !String(id).startsWith('loc_')) await rdmDB.collection('Tournaments').doc(id).set(clean, { merge: true });
        else { const ref = await rdmDB.collection('Tournaments').add(clean); rec._docId = ref.id; }
      } catch (err) {
        window.v6SaveOverride?.('tournaments', V6.tournaments);
        reportErr(err, 'Tournament sync');
      }
      window.v6render?.();
      window.rdmHardRenderTournaments?.();
      window.refreshAdminSectionManager?.();
      toast?.('Tournament saved & synced');
    });
  };

  setTimeout(() => {
    document.getElementById('addScorecard')?.addEventListener('click', e => { e.preventDefault(); e.stopImmediatePropagation(); window.addScorecard(); }, true);
    document.getElementById('addTournament')?.addEventListener('click', e => { e.preventDefault(); e.stopImmediatePropagation(); window.v6AddTournament(); }, true);
  }, 900);

  function matchCard(m) {
    const lat = m.latitude, lng = m.longitude;
    return `<article class="card proDataCard rdmHardMiniMatch">
      <div class="proCardHead">
        <div>
          <span class="proStatus">${H(mini(m.matchStatus || m.status || 'MATCH'))}</span>
          <h3>RDM <span>VS</span> ${H(mini(m.opponent || 'Opponent'))}</h3>
        </div>
      </div>
      <div class="proInfoGrid">
        <p><b>Date</b>${H(mini(m.date || '—'))}</p>
        <p><b>Time</b>${H(mini(m.time || '—'))}</p>
        <p><b>Match Type</b>${H(mini(m.matchType || '—'))}</p>
        <p><b>Overs</b>${H(mini(m.overs || '—'))}</p>
        <p class="proWide"><b>Venue</b>${H(mini(m.venueName || m.venue || '—'))}${m.area || m.district ? ` · ${H(mini([m.area, m.district, m.state].filter(Boolean).join(', ')))}` : ''}</p>
        ${m.ourScore || m.oppScore ? `<p><b>RDM Score</b>${H(mini(m.ourScore || '—'))}</p><p><b>Opponent Score</b>${H(mini(m.oppScore || '—'))}</p>` : ''}
        ${m.result ? `<p class="proWide"><b>Result</b>${H(mini(m.result))} ${H(mini(m.margin || ''))}</p>` : ''}
        ${m.potm ? `<p class="proWide"><b>Player of the Match</b>${H(mini(m.potm))}</p>` : ''}
        ${m.tossWinner && m.tossWinner !== 'NOT DECIDED' ? `<p class="proWide"><b>Toss</b>${H(mini(m.tossWinner))} · ${H(mini(m.tossDecision || ''))}</p>` : ''}
      </div>
      ${proMapCard(lat, lng)}
      ${m.note ? `<p class="proNote">${H(mini(m.note))}</p>` : ''}
      ${rdmAdmin() ? `<div class="proCardActions"><button class="tinyBtn" onclick="rdmProAddMatch('${m._docId}')">Edit</button>${(m.status === 'RESULT' || m.matchStatus === 'COMPLETED') ? `<button class="tinyBtn" onclick="addScorecard('${m._docId}')">Scorecard</button>` : ''}<button class="tinyBtn deleteBtn" onclick="removeItem('matches',${D.matches.indexOf(m)})">Delete</button></div>` : ''}
    </article>`;
  }

  const prevRender = window.render;
  window.render = function () {
    prevRender?.();
    const box = document.getElementById('matchList');
    if (box) box.innerHTML = (D.matches || []).length ? D.matches.map(matchCard).join('') : '<div class="empty">No match added yet</div>';
  };

  window.rdmHardRenderTournaments = function () {
    const box = document.getElementById('tournamentList');
    if (!box || !window.V6) return;
    const arr = V6.tournaments || [];
    box.innerHTML = arr.length
      ? arr.map(x => `<article class="tournamentCard proDataCard rdmHardTournament">
          <div class="proCardHead"><div><span class="proStatus">${mini(x.status || 'TOURNAMENT')}</span><h3>🏆 ${mini(x.name || 'Tournament')}</h3></div></div>
          <div class="proInfoGrid">
            <p><b>Season / Year</b>${mini(x.season || '—')}</p>
            <p><b>Position</b>${mini(x.position || '—')}</p>
            <p><b>Start Date</b>${mini(x.startDate || '—')}</p>
            <p><b>End Date</b>${mini(x.endDate || '—')}</p>
            <p><b>Organizer</b>${mini(x.organizer || '—')}</p>
            <p><b>Total Teams</b>${mini(x.teams || 0)}</p>
            <p><b>RDM Matches</b>${mini(x.matches || 0)}</p>
            <p><b>W / L / NR</b>${mini(x.wins || 0)} / ${mini(x.losses || 0)} / ${mini(x.draws || 0)}</p>
            <p class="proWide"><b>Venue / Location</b>${mini(x.venueName || x.venue || '—')} ${x.area || x.district ? '· ' + mini([x.area, x.district, x.state].filter(Boolean).join(', ')) : ''}</p>
          </div>
          ${proMapCard(x.latitude, x.longitude)}
          ${x.fixtures ? `<p class="proNote">${H(x.fixtures)}</p>` : ''}
          ${rdmAdmin() ? `<div class="proCardActions rdmHardAdminActions"><button type="button" class="tinyBtn rdmEditBtn" data-tedit="${H(x._docId)}">Edit</button><button type="button" class="tinyBtn deleteBtn rdmDeleteBtn" data-tdel="${H(x._docId)}">Delete</button></div>` : ''}
        </article>`).join('')
      : '<div class="empty">No tournament added yet</div>';
    box.querySelectorAll('[data-tedit]').forEach(b => b.onclick = () => window.v6AddTournament?.(b.dataset.tedit));
    box.querySelectorAll('[data-tdel]').forEach(b => b.onclick = () => window.v6Delete?.('Tournaments', b.dataset.tdel));
  };

  const prevVT = window.v6Tournaments;
  window.v6Tournaments = function () {
    try { prevVT?.(); } finally { window.rdmHardRenderTournaments(); }
  };
  setTimeout(() => { window.render?.(); window.v6Tournaments?.(); }, 1000);
})();

if (!window.__rdmEscModalBound) {
  window.__rdmEscModalBound = true;
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const open = [...document.querySelectorAll('.modal.show')];
    const top = open[open.length - 1];
    if (!top) return;
    const closeBtn = top.querySelector('.close');
    if (closeBtn) { closeBtn.click(); return; }
    if (['editor', 'cropModal', 'lightbox', 'publicProfileModal', 'adminPlayerProfileModal'].includes(top.id)) top.classList.remove('show');
    else top.remove();
  });
}
