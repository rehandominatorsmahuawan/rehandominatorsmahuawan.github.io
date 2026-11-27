/* RDM V8.0.0 cloud backend: Real-time Firestore sync + Player Portal Password Gate + Admin/Public renders */
const RCOL = {
  players: 'TeamPlayers',
  matches: 'Matches',
  news: 'News',
  honours: 'Honours',
  gallery: 'Gallery',
  socials: 'Socials'
};
const DEFAULT_SOCIAL_URLS = {
  YOUTUBE: 'https://www.youtube.com/@rehan_dominators_mahuawan',
  TELEGRAM: 'https://t.me/rehandominatorsmahuawan',
  WHATSAPP: 'https://whatsapp.com/channel/0029Vb8icRM3WHTQGQtM4G3j'
};

let rdmRemoteReady = false;
let rdmLoading = false;
let rdmCropTarget = null;
let rdmTeamDocsCache = [];
let rdmProfileDocsCache = [];
let rdmRealtimeActive = false;
let rdmRealtimeTimer = null;

const rdmStamp = () => firebase.firestore.FieldValue.serverTimestamp();
const rdmDocData = d => ({ ...d.data(), _docId: d.id });
const rdmAdmin = () => session?.mode === 'admin' && window.__rdmUrlKeyRole === 'admin' && (typeof window.rdmIsAdminUnlocked !== 'function' || window.rdmIsAdminUnlocked());
const rdmPlayerUnlockedNow = id => typeof window.rdmIsPlayerUnlocked === 'function' ? window.rdmIsPlayerUnlocked(id) : true;
const rdmPlayer = () => {
  if (session?.mode !== 'player' || window.__rdmUrlKeyRole !== 'player') return null;
  return D.players.find(p => p.id === session.playerId) || null;
};
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));
const safeUrl = u => /^https?:\/\//i.test(String(u || '')) ? String(u) : '';
const rdmStaticPlayerImage = u => /^(?:\.?\/)?assets\/(?:rehan\.png|players\/)/i.test(String(u || ''));

function rdmStripDocMeta(obj) {
  const clean = {};
  if (!obj || typeof obj !== 'object') return clean;
  for (const [k, v] of Object.entries(obj)) {
    if (k === '_docId' || k === '_profileUid' || k === '_col') continue;
    if (v === undefined || v === null) continue;
    clean[k] = v;
  }
  return clean;
}
window.rdmStripDocMeta = rdmStripDocMeta;

function rdmReportWriteError(err, label = 'Cloud sync') {
  console.warn(label + ' error:', err?.code || err?.message || err);
  const code = String(err?.code || '');
  if (code === 'permission-denied') {
    toast?.('Saved locally. Publish updated firestore.rules in Firebase Console to enable live multi-device sync.');
  } else {
    toast?.('Saved locally. Will sync when online.');
  }
}
window.rdmReportWriteError = rdmReportWriteError;

function rdmHasOpenModalOrTyping() {
  if (document.querySelector('#editor.show, #cropModal.show, #rdmUnifiedForm, #rdmProForm, #updateEditor, #v62Modal, #profileEditModal, #ownSocialManager, #rdmConfirmModal, #rdmAdminManagerModal.show, #adminPlayerProfileModal.show, #squadEditModal.show, #galleryMoveModal.show, #profileDownloadModal.show, #playerShareModal.show, #v6PosterModal.show')) {
    return true;
  }
  const ae = document.activeElement;
  return !!(ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA' || ae.tagName === 'SELECT'));
}

function rdmRefresh() {
  window.rdmCleanStaticPlayerImages?.();
  render();
  if (session?.mode === 'player') renderProfile();
  window.renderAdmin?.();
}

function rdmScheduleRefresh() {
  clearTimeout(rdmRealtimeTimer);
  rdmRealtimeTimer = setTimeout(() => {
    if (rdmHasOpenModalOrTyping()) {
      rdmScheduleRefresh();
      return;
    }
    rdmRefresh();
  }, 60);
}
window.rdmScheduleRefresh = rdmScheduleRefresh;

async function rdmCompressFile(file, max = 1000, quality = 0.72) {
  if (!file) return '';
  const url = await new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
  const im = await new Promise((res, rej) => {
    const x = new Image();
    x.onload = () => res(x);
    x.onerror = rej;
    x.src = url;
  });
  const scale = Math.min(1, max / Math.max(im.width, im.height));
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(im.width * scale));
  c.height = Math.max(1, Math.round(im.height * scale));
  c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
  let out = c.toDataURL('image/jpeg', quality);
  if (out.length > 720000) out = c.toDataURL('image/jpeg', 0.55);
  if (out.length > 900000) throw new Error('IMAGE_TOO_LARGE');
  return out;
}

const RDM_LOCAL_OVERRIDES_KEY = 'RDM_LOCAL_OVERRIDES_V1';
function rdmGetOverrides() {
  try {
    const o = JSON.parse(localStorage.getItem(RDM_LOCAL_OVERRIDES_KEY) || '{}');
    return o && typeof o === 'object' ? o : {};
  } catch {
    return {};
  }
}
function rdmSetOverrides(fn) {
  const o = rdmGetOverrides();
  fn(o);
  try {
    localStorage.setItem(RDM_LOCAL_OVERRIDES_KEY, JSON.stringify(o));
  } catch (e) {
    console.warn('Local cache save skipped', e);
  }
}
window.rdmGetOverrides = rdmGetOverrides;
window.rdmSetOverrides = rdmSetOverrides;
function rdmSaveCollectionOverride(key, arr) {
  rdmSetOverrides(o => {
    o.collections = o.collections || {};
    o.collections[key] = arr;
    o.collectionsPending = o.collectionsPending || {};
    o.collectionsPending[key] = true;
  });
  if (typeof save === 'function') save();
}
window.rdmSaveCollectionOverride = rdmSaveCollectionOverride;

function rdmClearCollectionOverride(key, force = false) {
  rdmSetOverrides(o => {
    if (!force && o.collectionsPending?.[key]) return;
    if (o.collections && key in o.collections) delete o.collections[key];
    if (o.collectionsPending && key in o.collectionsPending) delete o.collectionsPending[key];
  });
}
window.rdmClearCollectionOverride = rdmClearCollectionOverride;

function rdmHasPendingCollection(key) {
  const o = rdmGetOverrides();
  return !!(o.collectionsPending?.[key] && Array.isArray(o.collections?.[key]));
}

function rdmProfileTime(pr) {
  if (typeof pr?.updatedMs === 'number') return pr.updatedMs;
  if (typeof pr?.updatedAt?.toMillis === 'function') return pr.updatedAt.toMillis();
  if (typeof pr?.updatedAt?.seconds === 'number') return pr.updatedAt.seconds * 1000;
  return 0;
}

function rdmApplyProfileRecord(p, pr) {
  if (!p || !pr) return;
  if ('name' in pr && pr.name) p.name = String(pr.name);
  if ('role' in pr && pr.role) p.role = String(pr.role);
  if ('detail' in pr && pr.detail !== undefined && pr.detail !== null && String(pr.detail).trim()) p.detail = String(pr.detail);
  if ('jersey' in pr && pr.jersey !== undefined && pr.jersey !== null) p.jersey = String(pr.jersey);
  if ('nick' in pr && pr.nick !== undefined && pr.nick !== null) {
    p.nick = String(pr.nick);
    p._nickCustom = true;
  }
  if ('bio' in pr && pr.bio !== undefined && pr.bio !== null) {
    p.bio = String(pr.bio);
    p._bioCustom = true;
  }
  if ('image' in pr && pr.image !== undefined && pr.image !== null) {
    p.image = rdmStaticPlayerImage(pr.image) ? '' : String(pr.image);
    p._imageCustom = true;
  }
  if (Array.isArray(pr.socials)) p.socials = pr.socials.slice(0, 3);
  if (pr._docId || pr.id) p._profileUid = pr._docId || pr.id;
}

function rdmApplyOverridesToData() {
  const o = rdmGetOverrides();
  if (o.collections) {
    ['matches', 'news', 'honours', 'gallery', 'socials'].forEach(k => {
      if (Array.isArray(o.collections[k])) D[k] = o.collections[k];
    });
  }
  if (Array.isArray(o.extraPlayers)) {
    o.extraPlayers.forEach(ep => {
      if (ep && ep.id && ep.active !== false) {
        const idx = D.players.findIndex(p => p.id === ep.id);
        if (idx >= 0) D.players[idx] = { ...D.players[idx], ...ep };
        else D.players.push({ ...ep });
      }
    });
  }
  if (Array.isArray(o.removedPlayerIds) && o.removedPlayerIds.length) {
    const removed = new Set(o.removedPlayerIds);
    D.players = D.players.filter(p => !removed.has(p.id));
  }
  if (o.playerProfiles && typeof o.playerProfiles === 'object') {
    Object.values(o.playerProfiles).forEach(pr => {
      const p = D.players.find(x => x.id === (pr?.playerId || pr?.id));
      if (p) rdmApplyProfileRecord(p, pr);
    });
  }
}

function rdmMergePlayersAndProfiles(teamDocs, profileDocs) {
  const o = rdmGetOverrides();
  const removedSet = new Set(Array.isArray(o.removedPlayerIds) ? o.removedPlayerIds : []);
  if (Array.isArray(teamDocs) && teamDocs.length > 0) {
    const mapped = teamDocs
      .filter(p => p.active !== false && !removedSet.has(p.id || p._docId))
      .sort((a, b) => (a.order || 999) - (b.order || 999))
      .map(p => ({
        id: p.id || p._docId,
        name: p.name || '',
        role: p.role || '',
        detail: p.detail || '',
        image: rdmStaticPlayerImage(p.image) ? '' : (p.image || ''),
        jersey: p.jersey || '',
        nick: p.nick || '',
        bio: p.bio || '',
        socials: Array.isArray(p.socials) ? p.socials : [],
        order: p.order || 999,
        active: p.active !== false,
        updatedMs: Number(p.updatedMs || 0),
        _docId: p._docId
      }));
    D.players = mapped;
  }
  if (Array.isArray(o.extraPlayers)) {
    o.extraPlayers.forEach(ep => {
      if (!ep || !ep.id || ep.active === false || removedSet.has(ep.id)) return;
      const idx = D.players.findIndex(p => p.id === ep.id);
      if (idx >= 0) D.players[idx] = { ...D.players[idx], ...ep };
      else D.players.push({ ...ep });
    });
  }
  if (typeof rdmRepairRoster2026 === 'function') rdmRepairRoster2026(true);
  if (removedSet.size) {
    D.players = D.players.filter(p => !removedSet.has(p.id));
  }

  const sortedProfiles = [...(profileDocs || [])].sort((a, b) => {
    const dt = rdmProfileTime(a) - rdmProfileTime(b);
    if (dt !== 0) return dt;
    const uid = rdmAuth?.currentUser?.uid || '';
    return ((a._docId || a.id) === uid ? 1 : 0) - ((b._docId || b.id) === uid ? 1 : 0);
  });

  const remoteLatestById = {};
  sortedProfiles.forEach(pr => {
    const p = D.players.find(x => x.id === pr.playerId);
    if (!p) return;
    rdmApplyProfileRecord(p, pr);
    const t = rdmProfileTime(pr);
    if (t >= (remoteLatestById[p.id] || 0)) remoteLatestById[p.id] = t;
  });

  const localProfiles = o?.playerProfiles || {};
  Object.entries(localProfiles).forEach(([pid, localPr]) => {
    const p = D.players.find(x => x.id === (localPr?.playerId || pid));
    if (!p || !localPr) return;
    const localMs = Number(localPr.updatedMs || 0);
    const remoteMs = Number(remoteLatestById[p.id] || 0);
    if (localPr._pending || localMs >= remoteMs) {
      rdmApplyProfileRecord(p, localPr);
    }
  });

  D.players.forEach(p => {
    const d = (typeof playerDefaults !== 'undefined' && playerDefaults[p.id]) || null;
    if (d) {
      if (!p._nickCustom && !p.nick) p.nick = d.nick;
      if (!p._bioCustom && !p.bio) p.bio = d.bio;
    }
  });
  window.rdmCleanStaticPlayerImages?.();
}

async function rdmSeedIfNeeded() {
  if (!rdmAdmin()) return;
  try {
    if ((await rdmDB.collection(RCOL.players).limit(1).get()).empty) {
      const b = rdmDB.batch();
      D.players.forEach((p, i) => b.set(rdmDB.collection(RCOL.players).doc(p.id), {
        id: p.id, name: p.name, role: p.role, detail: p.detail,
        image: p.image || '', jersey: p.jersey || '', order: i + 1, active: true, updatedAt: rdmStamp()
      }));
      await b.commit();
    }
    if ((await rdmDB.collection(RCOL.honours).limit(1).get()).empty) {
      const b = rdmDB.batch();
      D.honours.forEach((h, i) => b.set(rdmDB.collection(RCOL.honours).doc('h' + String(i + 1).padStart(2, '0')), {
        ...h, order: i + 1, updatedAt: rdmStamp()
      }));
      await b.commit();
    }
    if ((await rdmDB.collection(RCOL.socials).limit(1).get()).empty) {
      const defs = [
        { id: 'instagram', name: 'INSTAGRAM', url: '', icon: 'IG', displayName: 'RDM INSTAGRAM', order: 1 },
        { id: 'facebook', name: 'FACEBOOK', url: '', icon: 'f', displayName: 'RDM FACEBOOK', order: 2 },
        { id: 'youtube', name: 'YOUTUBE', url: DEFAULT_SOCIAL_URLS.YOUTUBE, icon: '▶', displayName: 'RDM YOUTUBE', order: 3 },
        { id: 'telegram', name: 'TELEGRAM', url: DEFAULT_SOCIAL_URLS.TELEGRAM, icon: '✈', displayName: 'RDM TELEGRAM', order: 4 },
        { id: 'whatsapp', name: 'WHATSAPP', url: DEFAULT_SOCIAL_URLS.WHATSAPP, icon: '◉', displayName: 'RDM WHATSAPP', order: 5 }
      ];
      const b = rdmDB.batch();
      defs.forEach(x => {
        const { id, ...z } = x;
        b.set(rdmDB.collection(RCOL.socials).doc(id), { ...z, image: '', updatedAt: rdmStamp() });
      });
      await b.commit();
    }
  } catch (_) {}
}

async function rdmLoadAll() {
  if (rdmLoading || typeof rdmDB === 'undefined') return;
  rdmLoading = true;
  try {
    const [ps, ms, ns, hs, gs, ss, profiles] = await Promise.all([
      rdmDB.collection(RCOL.players).get(),
      rdmDB.collection(RCOL.matches).get(),
      rdmDB.collection(RCOL.news).get(),
      rdmDB.collection(RCOL.honours).get(),
      rdmDB.collection(RCOL.gallery).get(),
      rdmDB.collection(RCOL.socials).get(),
      rdmDB.collection('PlayerProfiles').get()
    ]);

    rdmTeamDocsCache = ps.docs.map(rdmDocData);
    rdmProfileDocsCache = profiles.docs.map(rdmDocData);
    rdmMergePlayersAndProfiles(rdmTeamDocsCache, rdmProfileDocsCache);

    const ov = rdmGetOverrides();
    if (rdmHasPendingCollection('matches')) D.matches = ov.collections.matches;
    else { D.matches = ms.docs.map(rdmDocData).sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0)); rdmClearCollectionOverride('matches'); }

    if (rdmHasPendingCollection('news')) D.news = ov.collections.news;
    else { D.news = ns.docs.map(rdmDocData).sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || (b.createdMs || 0) - (a.createdMs || 0)); rdmClearCollectionOverride('news'); }

    if (rdmHasPendingCollection('honours')) D.honours = ov.collections.honours;
    else { if (!hs.empty) D.honours = hs.docs.map(rdmDocData).sort((a, b) => (a.order || 999) - (b.order || 999)); rdmClearCollectionOverride('honours'); }

    if (rdmHasPendingCollection('gallery')) D.gallery = ov.collections.gallery;
    else { D.gallery = gs.docs.map(rdmDocData).sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0)); rdmClearCollectionOverride('gallery'); }

    if (rdmHasPendingCollection('socials')) D.socials = ov.collections.socials;
    else { if (!ss.empty) D.socials = ss.docs.map(rdmDocData).sort((a, b) => (a.order || 999) - (b.order || 999)); rdmClearCollectionOverride('socials'); }

    if (typeof save === 'function') save();
    rdmRemoteReady = true;
    rdmScheduleRefresh();
  } catch (e) {
    console.warn('Firestore initial fetch fallback to local cache', e?.code || e);
    rdmApplyOverridesToData();
    rdmScheduleRefresh();
  } finally {
    rdmLoading = false;
  }
}

function rdmStartRealtimeSync() {
  if (rdmRealtimeActive || typeof rdmDB === 'undefined') return;
  rdmRealtimeActive = true;

  const watch = (col, handler) => {
    try {
      rdmDB.collection(col).onSnapshot(snap => {
        handler(snap.docs.map(rdmDocData), snap);
        rdmRemoteReady = true;
        if (typeof save === 'function') save();
        rdmScheduleRefresh();
      }, err => {
        console.warn('Realtime watch error:', col, err?.code || err);
      });
    } catch (e) {
      console.warn('Realtime init skipped:', col, e);
    }
  };

  watch(RCOL.players, docs => {
    rdmTeamDocsCache = docs;
    rdmMergePlayersAndProfiles(rdmTeamDocsCache, rdmProfileDocsCache);
  });
  watch('PlayerProfiles', docs => {
    rdmProfileDocsCache = docs;
    rdmMergePlayersAndProfiles(rdmTeamDocsCache, rdmProfileDocsCache);
  });
  watch(RCOL.matches, docs => {
    if (rdmHasPendingCollection('matches')) return;
    D.matches = docs.sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
    rdmClearCollectionOverride('matches');
  });
  watch(RCOL.news, docs => {
    if (rdmHasPendingCollection('news')) return;
    D.news = docs.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || (b.createdMs || 0) - (a.createdMs || 0));
    rdmClearCollectionOverride('news');
  });
  watch(RCOL.honours, docs => {
    if (rdmHasPendingCollection('honours')) return;
    if (docs.length) D.honours = docs.sort((a, b) => (a.order || 999) - (b.order || 999));
    rdmClearCollectionOverride('honours');
  });
  watch(RCOL.gallery, docs => {
    if (rdmHasPendingCollection('gallery')) return;
    D.gallery = docs.sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
    rdmClearCollectionOverride('gallery');
  });
  watch(RCOL.socials, docs => {
    if (rdmHasPendingCollection('socials')) return;
    if (docs.length) D.socials = docs.sort((a, b) => (a.order || 999) - (b.order || 999));
    rdmClearCollectionOverride('socials');
  });
}

async function rdmSyncRoster2026() {
  if (!rdmAdmin() || typeof rdmRoster2026 === 'undefined') return;
  try {
    const existing = await rdmDB.collection(RCOL.players).get();
    const existingIds = new Set(existing.docs.map(d => d.id));
    const b = rdmDB.batch();
    let writes = 0;
    Object.values(rdmRoster2026).forEach(c => {
      if (existingIds.has(c.id)) return;
      b.set(rdmDB.collection(RCOL.players).doc(c.id), {
        id: c.id, name: c.name, role: c.role, detail: c.detail,
        jersey: c.jersey || '', order: c.order, active: true, updatedAt: rdmStamp()
      });
      writes++;
    });
    if (writes > 0) await b.commit();
  } catch (e) {
    console.warn('Roster seed check skipped', e);
  }
}

window.rdmBackendAuthReady = async (user, account) => {
  if (account?.role === 'admin') {
    try {
      await rdmSeedIfNeeded();
      await rdmSyncRoster2026();
    } catch (e) {
      console.warn('ROSTER SYNC', e);
    }
  }
  await rdmLoadAll();
};

rdmLoadAll();
setTimeout(rdmStartRealtimeSync, 150);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) rdmLoadAll();
});

async function rdmProfileUid(playerId) {
  const local = D.players.find(p => p.id === playerId);
  if (local?._profileUid) return local._profileUid;
  try {
    const existing = await rdmDB.collection('PlayerProfiles').where('playerId', '==', playerId).limit(1).get();
    if (!existing.empty) return existing.docs[0].id;
  } catch {}
  return 'profile_' + playerId;
}

async function rdmProfileWrite(p, extra = {}) {
  const isPlayerSelf = session?.mode === 'player' && session?.playerId === p.id && rdmPlayerUnlockedNow(p.id);
  if (!rdmAdmin() && !isPlayerSelf) throw new Error('NOT_ALLOWED');
  const nowMs = Date.now();
  const uid = await rdmProfileUid(p.id);
  const localSnap = {
    playerId: p.id,
    jersey: p.jersey || '',
    nick: p.nick || '',
    bio: p.bio || '',
    socials: Array.isArray(p.socials) ? p.socials.slice(0, 3) : [],
    updatedMs: nowMs,
    _docId: uid,
    ...extra
  };
  if ('nick' in localSnap) p._nickCustom = true;
  if ('bio' in localSnap) p._bioCustom = true;
  if ('image' in localSnap) p._imageCustom = true;
  p._profileUid = uid;

  // Persist immediately in local overrides & in-memory cache so snapshots / visibilitychange never revert edits
  rdmSetOverrides(o => {
    o.playerProfiles = o.playerProfiles || {};
    o.playerProfiles[p.id] = { ...(o.playerProfiles[p.id] || {}), ...localSnap, _pending: true };
  });
  const cacheIdx = rdmProfileDocsCache.findIndex(x => (x._docId || x.id) === uid || x.playerId === p.id);
  if (cacheIdx >= 0) rdmProfileDocsCache[cacheIdx] = { ...rdmProfileDocsCache[cacheIdx], ...localSnap };
  else rdmProfileDocsCache.push({ ...localSnap });
  if (typeof save === 'function') save();

  const remotePayload = { ...localSnap, updatedAt: rdmStamp() };
  delete remotePayload._docId;

  try {
    await rdmDB.collection('PlayerProfiles').doc(uid).set(remotePayload, { merge: true });
    if ('jersey' in remotePayload || 'image' in extra || 'name' in extra || 'role' in extra || 'detail' in extra) {
      const teamPatch = {
        id: p.id,
        jersey: remotePayload.jersey,
        updatedMs: nowMs,
        updatedAt: rdmStamp()
      };
      if ('image' in extra) teamPatch.image = extra.image;
      if ('name' in extra) teamPatch.name = extra.name;
      if ('role' in extra) teamPatch.role = extra.role;
      if ('detail' in extra) teamPatch.detail = extra.detail;
      try {
        await rdmDB.collection(RCOL.players).doc(p.id).set(teamPatch, { merge: true });
      } catch (_) {}
    }
    rdmSetOverrides(o => {
      if (o.playerProfiles?.[p.id]?.updatedMs === nowMs) {
        o.playerProfiles[p.id]._pending = false;
      }
    });
    return true;
  } catch (err) {
    rdmReportWriteError(err, 'Profile sync');
    return false;
  }
}

function socialObj(x, i) {
  return typeof x === 'string' ? { name: 'Social ' + (i + 1), url: x } : (x || {});
}
const RDM_FALLBACK_LOGO = 'assets/rdm-logo.png?v=7400';
function playerPhotoUrl(img) {
  const s = String(img || '').trim();
  if (!s || /^data:image\/svg\+xml/i.test(s) || /(?:logo\.jpg|CRICKET_YOUR_TAGLINE_HERE|rdm_crest_emblem|^assets\/(?:rehan\.png|players\/))/i.test(s)) {
    return RDM_FALLBACK_LOGO;
  }
  return s;
}
window.playerPhotoUrl = playerPhotoUrl;

function profileHtml(p, editable = false) {
  const socials = (p.socials || []).map(socialObj).filter(s => s.url || s.name);
  const code = typeof playerCode === 'function' ? playerCode(p.id) : p.id;
  const sh = socials.length
    ? `<div class="profileSocialList">${socials.map((s, i) => {
        const href = safeUrl(s.url);
        return `<div class="profileSocialRow">
          <div>
            <strong>${esc(mini(s.name || ('Social ' + (i + 1))))}</strong>
            ${href ? `<small>${esc(href.replace(/^https?:\/\/(www\.)?/i, '').slice(0, 42))}</small>` : ''}
          </div>
          ${href ? `<a class="tinyBtn" href="${esc(href)}" target="_blank" rel="noopener">Open ↗</a>` : ''}
        </div>`;
      }).join('')}</div>`
    : '<p class="mutedMini">No social links added yet</p>';

  return `<article class="profileCard publicProfileCard">
    <div class="profileHeroBanner">
      <div class="profileAvatarFrame">
        <img class="profileAvatar" src="${esc(playerPhotoUrl(p.image))}" alt="${esc(mini(p.name))}" onerror="this.onerror=null;this.src='${RDM_FALLBACK_LOGO}'">
      </div>
      <div class="profileIdentityHead">
        <div class="profileTagLine">
          <span class="simplePlayerId">${esc(miniId(p.id))} · ${esc(code)}</span>
          ${p.jersey ? `<span class="jerseyTag">Jersey #${esc(p.jersey)}</span>` : ''}
        </div>
        <h2>${esc(mini(p.name))}</h2>
        ${p.nick ? `<p class="profileNick">"${esc(mini(p.nick))}"</p>` : ''}
        <div class="profileOfficial"><b>${esc(mini(p.role))}</b>${p.detail ? `<span>${esc(mini(p.detail))}</span>` : ''}</div>
      </div>
    </div>
    <div class="profileBioBlock">
      <span>Player Bio</span>
      <p class="profileBio">${p.bio ? esc(mini(p.bio)) : '<em class="mutedMini">No bio written yet — add a short player note.</em>'}</p>
    </div>
    <div class="profileSocialsBlock">
      <div class="profileBlockHead">
        <span>Official Socials (${socials.length}/3)</span>
        ${editable ? `<button type="button" class="tinyBtn" onclick="openOwnSocialManager()">Manage Socials</button>` : ''}
      </div>
      ${sh}
    </div>
    ${editable ? `<div class="profileEditorActionGroup">
      <div class="profileEditHub">
        <button type="button" class="primary profileEditMain" onclick="openFullProfileEdit()">Edit Profile Details</button>
        <button type="button" class="secondary" onclick="chooseDP()">Change Photo</button>
        <button type="button" class="secondary" onclick="resetOwnPhoto()">Use RDM Logo</button>
        <button type="button" class="secondary profileDownloadMain" onclick="openProfileDownload()">Download Card</button>
        <button type="button" class="secondary" id="playerInstallAppBtn" data-rdm-install-btn>Install My App</button>
      </div>
    </div>` : `<div class="publicProfileFooterActions" style="margin-top:4px;">
      <button type="button" class="secondary" onclick="document.getElementById('publicProfileModal')?.classList.remove('show');window.openPlayerComparison?.('${esc(p.id)}')">Compare Player</button>
    </div>`}
  </article>`;
}

function renderPlayerPasswordGate(p) {
  const code = typeof playerCode === 'function' ? playerCode(p.id) : p.id;
  return `<div class="playerLockGateWrap">
    <article class="playerLockCard">
      <div class="playerLockHeader">
        <img class="playerLockAvatar" src="${esc(playerPhotoUrl(p.image))}" alt="${esc(mini(p.name))}" onerror="this.onerror=null;this.src='${RDM_FALLBACK_LOGO}'">
        <div>
          <span class="sectionKicker">Protected Player Portal</span>
          <h2>${esc(mini(p.name))}</h2>
          <p>${esc(miniId(p.id))} · ${esc(code)}${p.jersey ? ' · #' + esc(p.jersey) : ''} · ${esc(mini(p.role))}</p>
        </div>
      </div>
      <p class="playerLockDesc">Enter your personal player password to edit your profile photo, bio, jersey number, social links, and matchday availability. Changes sync live to both Website and Android APK.</p>
      <form id="rdmPlayerUnlockForm" class="playerLockForm">
        <label class="playerLockField">
          <span>Player Password</span>
          <div class="playerPwInputRow">
            <input id="rdmPlayerPwInput" type="password" required autocomplete="current-password" placeholder="Enter your password">
            <button type="button" class="secondary" id="rdmPlayerPwToggle">Show</button>
          </div>
        </label>
        <p id="rdmPlayerLockError" class="playerLockError" hidden></p>
        <div class="playerLockActions">
          <button type="submit" class="primary" id="rdmPlayerUnlockBtn">Unlock Profile</button>
          <a class="secondary" href="./">Public Website</a>
          <a class="secondary" href="./portals.html">All Portals</a>
        </div>
      </form>
    </article>
  </div>`;
}

function renderAdminPasswordGate() {
  return `<div class="playerLockGateWrap">
    <article class="playerLockCard adminLockCard">
      <div class="playerLockHeader">
        <img class="playerLockAvatar" src="${RDM_FALLBACK_LOGO}" alt="RDM Official Logo">
        <div>
          <span class="sectionKicker">Protected Management Access</span>
          <h2>Admin Command Workspace</h2>
          <p>Rehan Dominators Mahuawan · Full Club &amp; Squad Control</p>
        </div>
      </div>
      <p class="playerLockDesc">Enter the Admin Password to unlock fixtures, scorecards, squad profiles, tournaments, honours, gallery, branding, and private access links. Opening Admin Panel from the Portals Hub always requires password verification.</p>
      <form id="rdmAdminUnlockForm" class="playerLockForm">
        <label class="playerLockField">
          <span>Admin Password</span>
          <div class="playerPwInputRow">
            <input id="rdmAdminPwInput" type="password" required autocomplete="current-password" placeholder="Enter admin password">
            <button type="button" class="secondary" id="rdmAdminPwToggle">Show</button>
          </div>
        </label>
        <p id="rdmAdminLockError" class="playerLockError" hidden></p>
        <div class="playerLockActions">
          <button type="submit" class="primary" id="rdmAdminUnlockBtn">Unlock Admin Panel</button>
          <a class="secondary" href="./">Public Website</a>
          <a class="secondary" href="./portals.html">Portals Directory</a>
        </div>
      </form>
    </article>
  </div>`;
}
window.renderAdminPasswordGate = renderAdminPasswordGate;

const _baseAdminRenderForGate = window.renderAdmin;
window.renderAdmin = function () {
  const body = q('#adminBody');
  if (!body) return;
  if (window.__rdmUrlKeyRole === 'admin' && typeof window.rdmIsAdminUnlocked === 'function' && !window.rdmIsAdminUnlocked()) {
    delete body.dataset.v61Ready;
    body.innerHTML = renderAdminPasswordGate();
    const form = document.getElementById('rdmAdminUnlockForm');
    const pwInput = document.getElementById('rdmAdminPwInput');
    const toggleBtn = document.getElementById('rdmAdminPwToggle');
    const errEl = document.getElementById('rdmAdminLockError');
    const submitBtn = document.getElementById('rdmAdminUnlockBtn');
    toggleBtn?.addEventListener('click', () => {
      if (!pwInput) return;
      const show = pwInput.type === 'password';
      pwInput.type = show ? 'text' : 'password';
      toggleBtn.textContent = show ? 'Hide' : 'Show';
    });
    form?.addEventListener('submit', async e => {
      e.preventDefault();
      const val = pwInput?.value || '';
      if (submitBtn) submitBtn.disabled = true;
      if (errEl) errEl.hidden = true;
      const ok = await window.rdmVerifyAdminPassword?.(val);
      if (ok) {
        toast?.('Admin Panel unlocked');
      } else {
        if (errEl) {
          errEl.textContent = 'Incorrect Admin Password. Please try again.';
          errEl.hidden = false;
        }
        if (submitBtn) submitBtn.disabled = false;
        pwInput?.focus();
      }
    });
    return;
  }
  _baseAdminRenderForGate?.();
};

render = function () {
  q('#players').innerHTML = D.players.map(p => {
    const n = (p.name || '').toUpperCase();
    const lead = n === 'REHAN AKHTAR' ? 'CAPTAIN' : n === 'SAIF ALI' ? 'VICE-CAPTAIN' : n === 'SOAIB AKHTAR' ? 'WICKET-KEEPER' : '';
    const expanded = !!window.__rdmExpandedStats?.has(p.id);
    return `<article class="player clickablePlayer ${expanded ? 'is-stats-open' : ''}" data-player-id="${esc(p.id)}" onclick="openPlayerProfile('${esc(p.id)}')">
      <div class="photo"><img src="${esc(playerPhotoUrl(p.image))}" alt="${esc(mini(p.name))}" onerror="this.onerror=null;this.src='${RDM_FALLBACK_LOGO}'"></div>
      <div class="pbody">
        ${lead ? `<div class="leadershipBadge ${lead === 'VICE-CAPTAIN' ? 'vice' : lead === 'WICKET-KEEPER' ? 'keeper' : ''}">${esc(mini(lead))}</div>` : ''}
        <span class="simplePlayerId">${esc(miniId(p.id))}${p.jersey ? ' · #' + esc(p.jersey) : ''}</span>
        <h3>${esc(mini(p.name))}</h3>
        <b>${esc(mini(p.role))}</b>
        <p>${esc(mini(p.detail))}</p>
        ${p.nick ? `<p class="squadNick">Nickname · ${esc(mini(p.nick))}</p>` : ''}
      </div>
      <div class="squadCardActions">
        <button type="button" class="tinyBtn squadStatsToggleBtn ${expanded ? 'active' : ''}" data-toggle-stats="${esc(p.id)}" aria-expanded="${expanded}" aria-controls="squad-stats-${esc(p.id)}">
          <span>${expanded ? 'Hide Stats' : 'View Stats'}</span>
        </button>
        <button type="button" class="tinyBtn squadShareBtn" data-share-player="${esc(p.id)}" aria-label="Share ${esc(mini(p.name))} profile">
          <span>Share</span>
        </button>
        ${rdmAdmin() ? `<button type="button" class="tinyBtn" onclick="event.stopPropagation();editPlayer('${esc(p.id)}')">Edit</button>` : ''}
      </div>
      ${squadStatsHtml(p, expanded)}
    </article>`;
  }).join('');

  q('#honourList').innerHTML = D.honours.map((h, i) => `<article class="honour">
    <div class="trophy"><img src="${esc(h.image || RDM_FALLBACK_LOGO)}" alt="${esc(mini(h.title))}" onclick="zoom('${esc(h.image || RDM_FALLBACK_LOGO)}')"></div>
    <h3>${esc(h.year)} · ${esc(mini(h.title))}</h3>
    <p>${esc(mini(h.sub))}</p>
    ${rdmAdmin() ? `<div class="honourAdminActions"><button type="button" class="tinyBtn" onclick="editHonour(${i})">Edit</button><button type="button" class="tinyBtn deleteBtn" onclick="removeItem('honours',${i})">Delete</button></div>` : ''}
  </article>`).join('');

  q('#matchList').innerHTML = D.matches.length
    ? D.matches.map((m, i) => `<article class="card"><h3>${esc(mini(m.opponent))}</h3><p>${esc(mini(m.date))} · ${esc(mini(m.venue))}</p><p>${esc(mini(m.note))}</p>${rdmAdmin() ? `<button class="tinyBtn deleteBtn" onclick="removeItem('matches',${i})">Delete</button>` : ''}</article>`).join('')
    : '<div class="empty">No match added yet</div>';

  q('#newsList').innerHTML = D.news.length
    ? D.news.map((n, i) => `<article class="card"><h3>${esc(mini(n.title))}</h3><p>${esc(mini(n.text))}</p>${rdmAdmin() ? `<button class="tinyBtn deleteBtn" onclick="removeItem('news',${i})">Delete</button>` : ''}</article>`).join('')
    : '<div class="empty">No announcement yet</div>';

  q('#galleryList').innerHTML = D.gallery.length
    ? D.gallery.map((g, i) => `<figure><img src="${esc(g.image)}" onclick="zoom(this.src)"><figcaption>${esc(mini(g.caption || 'RDM Memory'))}</figcaption>${rdmAdmin() ? `<button class="tinyBtn deleteBtn" onclick="removeItem('gallery',${i})">Delete</button>` : ''}</figure>`).join('')
    : '<div class="empty">No gallery photo added yet</div>';

  q('#socialList').innerHTML = D.socials.map((o, i) => {
    o = Array.isArray(o) ? { name: o[0], url: o[1], icon: '↗' } : o;
    const svg = window.rdmSocialSvg?.(o.name) || '';
    const media = (o.image && !/CRICKET_YOUR_TAGLINE_HERE|logo\.jpg/i.test(o.image))
      ? `<img src="${esc(o.image)}" alt="${esc(o.name)}">`
      : (svg || `<span>${esc(o.icon || '↗')}</span>`);
    const open = o.url
      ? `<a class="primary socialAction" href="${esc(safeUrl(o.url))}" target="_blank" rel="noopener">Open Channel</a>`
      : `<button class="secondary socialAction" disabled>Link Not Added</button>`;
    return `<article class="socialCard">
      <div class="socialIcon">${media}</div>
      <h3>${esc(mini(o.displayName || o.name))}</h3>
      <p class="socialPlatform">${esc(mini(o.name))}</p>
      <div class="socialActions">${open}${rdmAdmin() ? `<button class="tinyBtn socialAction" onclick="editSocial(${i})">Edit</button><button class="tinyBtn socialAction danger" onclick="removeItem('socials',${i})">Delete</button>` : ''}</div>
    </article>`;
  }).join('');

  const mp = q('#metricPlayersCount');
  if (mp && Array.isArray(D.players)) mp.textContent = D.players.length;
  const mh = q('#metricHonoursCount');
  if (mh && Array.isArray(D.honours)) mh.textContent = D.honours.length;
  updateAuthUI();
};

renderProfile = function () {
  const p = rdmPlayer();
  const body = q('#profileBody');
  if (!p || !body) return;

  if (!rdmPlayerUnlockedNow(p.id)) {
    body.innerHTML = renderPlayerPasswordGate(p);
    const form = document.getElementById('rdmPlayerUnlockForm');
    const pwInput = document.getElementById('rdmPlayerPwInput');
    const toggleBtn = document.getElementById('rdmPlayerPwToggle');
    const errEl = document.getElementById('rdmPlayerLockError');
    const submitBtn = document.getElementById('rdmPlayerUnlockBtn');

    toggleBtn?.addEventListener('click', () => {
      if (!pwInput) return;
      const show = pwInput.type === 'password';
      pwInput.type = show ? 'text' : 'password';
      toggleBtn.textContent = show ? 'Hide' : 'Show';
    });

    form?.addEventListener('submit', async e => {
      e.preventDefault();
      const val = pwInput?.value || '';
      if (submitBtn) submitBtn.disabled = true;
      if (errEl) errEl.hidden = true;
      const ok = await window.rdmVerifyPlayerPassword?.(p.id, val);
      if (ok) {
        toast?.('Profile unlocked · Live Sync Active');
        renderProfile();
      } else {
        if (errEl) {
          errEl.textContent = 'Incorrect password for ' + mini(p.name) + '. Please try again.';
          errEl.hidden = false;
        }
        if (submitBtn) submitBtn.disabled = false;
        pwInput?.focus();
      }
    });
    return;
  }

  const av = (typeof XD !== 'undefined' && Array.isArray(XD.availability)) ? XD.availability.find(z => z.playerId === p.id) : null;
  const st = (typeof XD !== 'undefined' && Array.isArray(XD.stats)) ? (XD.stats.find(z => z.playerId === p.id) || {}) : {};
  const status = (av?.status || 'NOT SET').toUpperCase();
  const n = v => Number(v || 0) || 0;
  const norm = s => String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const pKey = norm(p.name), idKey = norm(p.id);
  const potmCount = Math.max(
    (D.matches || []).filter(m => { const pm = norm(m.potm); return pm && ((pKey && pm.includes(pKey)) || (idKey && pm.includes(idKey))); }).length,
    ((typeof XD !== 'undefined' ? XD.achievements : []) || []).filter(a => /player of the match|potm/i.test(`${a.title || ''} ${a.detail || ''}`) && ((pKey && norm(a.playerName).includes(pKey)) || (idKey && norm(a.playerName).includes(idKey)))).length
  );
  const mvpPts = n(st.runs) + n(st.fours) + n(st.sixes) * 2 + n(st.fifties) * 15 + n(st.hundreds) * 35 + n(st.wickets) * 22 + n(st.runOuts) * 8 + potmCount * 30;
  const hasPending = !!rdmGetOverrides()?.playerProfiles?.[p.id]?._pending;
  const extras = `<div class="playerPortalExtras">
    <section class="playerPortalCard">
      <div class="playerPortalAvailRow">
        <div>
          <span class="sectionKicker">Matchday Status</span>
          <h3>My Match Availability</h3>
          <b class="availBadge ${status === 'AVAILABLE' ? 'available' : status === 'UNAVAILABLE' ? 'unavailable' : ''}">${esc(mini(status))}</b>
        </div>
        <div class="playerAvailSegmented" role="group" aria-label="Set matchday availability">
          <button type="button" class="tinyBtn ${status === 'AVAILABLE' ? 'active' : ''}" onclick="rdmSetPlayerAvailability('${esc(p.id)}','AVAILABLE')">Available</button>
          <button type="button" class="tinyBtn ${status === 'UNAVAILABLE' ? 'active' : ''}" onclick="rdmSetPlayerAvailability('${esc(p.id)}','UNAVAILABLE')">Unavailable</button>
        </div>
      </div>
    </section>
    <section class="playerPortalCard">
      <div class="sectionHead subHead" style="margin-top:0;">
        <div><span>Performance</span><h3>My Career Statistics</h3></div>
        <button type="button" class="secondary" onclick="window.openPlayerComparison?.('${esc(p.id)}')">Compare Stats</button>
      </div>
      <div class="playerPortalStatsGrid">
        <b>${n(st.matches)}<small>Matches</small></b>
        <b>${n(st.runs)}<small>Runs</small></b>
        <b>${n(st.highScore)}<small>High Score</small></b>
        <b>${n(st.wickets)}<small>Wickets</small></b>
        <b>${mvpPts}<small>MVP Points</small></b>
        <b>${n(st.fours)} / ${n(st.sixes)}<small>4s / 6s</small></b>
        <b>${n(st.fifties)} / ${n(st.hundreds)}<small>50s / 100s</small></b>
        <b>${n(st.strikeRate)}<small>Strike Rate</small></b>
        <b>${esc(st.bestBowling || '—')}<small>Best Bowling</small></b>
        <b>${n(st.economy)}<small>Economy</small></b>
      </div>
      ${st.last5 || st.season ? `<p class="squadStatLines">${st.last5 ? `Last 5 Form: ${esc(st.last5)} · ` : ''}Season: ${esc(st.season || '2027')}${potmCount ? ` · ${potmCount} POTM` : ''}</p>` : ''}
    </section>
  </div>`;
  body.innerHTML = `<div class="playerSyncStatusBanner">
    <span>${hasPending ? 'Saved Locally · Waiting for Cloud Sync Permissions' : 'Cloud Sync Connected · Changes update Website & Android APK'}</span>
    <div class="playerSyncStatusBtns">
      <a class="tinyBtn" href="./">Public Website</a>
      <button type="button" class="tinyBtn" onclick="rdmLockPlayer('${esc(p.id)}')">Lock Profile</button>
    </div>
  </div>` + profileHtml(p, true) + extras;
  window.rdmSyncInstallButtons?.();
};

window.rdmSetPlayerAvailability = async function (id, nextStatus) {
  const canSelf = window.__rdmUrlKeyRole === 'player' && session?.mode === 'player' && session.playerId === id && rdmPlayerUnlockedNow(id);
  if (!rdmAdmin() && !canSelf) return toast?.('Unlock profile first');
  const status = String(nextStatus || 'AVAILABLE').toUpperCase();
  if (!['AVAILABLE', 'UNAVAILABLE'].includes(status)) return;
  const payload = { playerId: id, status, updatedMs: Date.now() };
  const rec = { ...payload, _docId: id };
  if (typeof XD !== 'undefined' && Array.isArray(XD.availability)) {
    const idx = XD.availability.findIndex(z => z.playerId === id);
    if (idx >= 0) XD.availability[idx] = rec;
    else XD.availability.push(rec);
  }
  window.xSaveOverride?.('availability', XD?.availability || [rec], true);
  let synced = true;
  try {
    await rdmDB.collection('Availability').doc(id).set({ ...rdmStripDocMeta(payload), updatedAt: rdmStamp() }, { merge: true });
    window.xClearOverride?.('availability', true);
  } catch (err) {
    synced = false;
    rdmReportWriteError(err, 'Availability sync');
  }
  window.xrender?.();
  if (session?.mode === 'player') window.renderProfile?.();
  window.refreshAdminSectionManager?.();
  if (synced) toast?.('Availability set to ' + mini(status));
};

window.openPlayerProfile = id => {
  const p = D.players.find(x => x.id === id);
  if (!p) return;
  let m = q('#publicProfileModal');
  if (!m) {
    m = document.createElement('div');
    m.id = 'publicProfileModal';
    m.className = 'modal';
    m.innerHTML = '<div class="dialog publicDialog"><button class="close" type="button" aria-label="Close">×</button><div id="publicProfileBody"></div></div>';
    document.body.appendChild(m);
    m.querySelector('.close').onclick = () => m.classList.remove('show');
    m.addEventListener('click', e => { if (e.target === m) m.classList.remove('show'); });
  }
  q('#publicProfileBody').innerHTML = profileHtml(p, false);
  m.classList.add('show');
};

function rdmOpenSimpleModal(title, fields, onSave) {
  if (typeof window.rdmUnifiedModal === 'function') return window.rdmUnifiedModal(title, fields, onSave);
  return null;
}
function closeProfileEditMenu() { document.getElementById('profileEditModal')?.remove(); }
function profileEditRows() {
  return `<div class="profileEditMenu show profileEditMenuModal">
    <button class="profileEditRow" type="button" onclick="runProfileEditAction('all')"><span>All</span><b>Edit Jersey, Nickname &amp; Bio</b><i>›</i></button>
    <button class="profileEditRow" type="button" onclick="runProfileEditAction('photo')"><span>Photo</span><b>Change Profile Photo</b><i>›</i></button>
    <button class="profileEditRow" type="button" onclick="runProfileEditAction('resetPhoto')"><span>Reset</span><b>Use RDM Logo as Photo</b><i>›</i></button>
    <button class="profileEditRow" type="button" onclick="runProfileEditAction('jersey')"><span>#</span><b>Jersey Number</b><i>›</i></button>
    <button class="profileEditRow" type="button" onclick="runProfileEditAction('nick')"><span>Tag</span><b>Nickname</b><i>›</i></button>
    <button class="profileEditRow" type="button" onclick="runProfileEditAction('bio')"><span>Bio</span><b>Player Bio</b><i>›</i></button>
    <button class="profileEditRow" type="button" onclick="runProfileEditAction('socials')"><span>Links</span><b>Official Socials</b><i>›</i></button>
  </div>`;
}
window.openProfileEditMenu = function () {
  const p = rdmPlayer();
  if (!p || !rdmPlayerUnlockedNow(p.id)) return toast?.('Unlock profile first');
  closeProfileEditMenu();
  const m = document.createElement('div');
  m.id = 'profileEditModal';
  m.className = 'modal show profileEditOverlay';
  m.innerHTML = `<div class="dialog rdmUnifiedDialog profileEditDialog"><button class="close" type="button">×</button><h2>Edit Profile</h2>${profileEditRows()}</div>`;
  document.body.appendChild(m);
  const c = m.querySelector('.close');
  if (c) c.onclick = () => closeProfileEditMenu();
  m.addEventListener('click', e => { if (e.target === m) closeProfileEditMenu(); });
  const dlg = m.querySelector('.profileEditDialog');
  requestAnimationFrame(() => { if (dlg) dlg.scrollTop = 0; });
};
window.runProfileEditAction = function (action) {
  closeProfileEditMenu();
  setTimeout(() => {
    if (action === 'all') return window.openFullProfileEdit();
    if (action === 'photo') return chooseDP();
    if (action === 'resetPhoto') return window.resetOwnPhoto?.();
    if (action === 'socials') return openOwnSocialManager();
    return selfEdit(action);
  }, 40);
};
window.openFullProfileEdit = async function () {
  const p = rdmPlayer();
  if (!p || !rdmPlayerUnlockedNow(p.id)) return toast?.('Unlock profile first');
  return rdmOpenSimpleModal('Edit Profile Details', [
    { name: 'jersey', label: 'Jersey Number', value: p.jersey || '', placeholder: 'e.g. 08' },
    { name: 'nick', label: 'Nickname', value: p.nick || '', placeholder: 'Your nickname' },
    { name: 'bio', label: 'Bio', type: 'textarea', value: p.bio || '', rows: 5, placeholder: 'Short bio & playing style' }
  ], async d => {
    p.jersey = String(d.jersey || '').trim();
    p.nick = String(d.nick || '').trim();
    p.bio = String(d.bio || '').trim();
    const synced = await rdmProfileWrite(p);
    rdmRefresh();
    if (synced) toast('Profile saved & synced');
  });
};
window.resetOwnPhoto = async function () {
  const p = rdmPlayer();
  if (!p || !rdmPlayerUnlockedNow(p.id)) return;
  p.image = '';
  const synced = await rdmProfileWrite(p, { image: '' });
  rdmRefresh();
  if (synced) toast('Photo reset to RDM logo');
};
window.selfEdit = async k => {
  const p = rdmPlayer();
  if (!p || !rdmPlayerUnlockedNow(p.id)) return;
  const config = {
    jersey: { title: 'Edit Jersey Number', field: { name: 'value', label: 'Jersey Number', value: p.jersey || '' } },
    nick: { title: 'Edit Nickname', field: { name: 'value', label: 'Nickname', value: p.nick || '' } },
    bio: { title: 'Edit Bio', field: { name: 'value', label: 'Bio', type: 'textarea', value: p.bio || '', rows: 5 } }
  }[k];
  if (!config) return;
  return rdmOpenSimpleModal(config.title, [config.field], async d => {
    p[k] = String(d.value || '').trim();
    const synced = await rdmProfileWrite(p);
    rdmRefresh();
    if (synced) toast('Profile saved & synced');
  });
};
window.openOwnSocialManager = function () {
  const p = rdmPlayer();
  if (!p || !rdmPlayerUnlockedNow(p.id)) return;
  document.getElementById('ownSocialManager')?.remove();
  const socials = (p.socials || []).map(socialObj);
  const m = document.createElement('div');
  m.id = 'ownSocialManager';
  m.className = 'modal show profileEditOverlay';
  m.innerHTML = `<div class="dialog rdmUnifiedDialog socialManagerDialog"><button class="close" type="button">×</button><h2>Social Links</h2><div class="socialManagerList">${socials.length ? socials.map((s, i) => `<div class="socialManagerRow"><div class="socialManagerInfo"><b>${esc(mini(s.name || ('Social ' + (i + 1))))}</b>${s.url ? `<small>${esc(String(s.url).replace(/^https?:\/\/(www\.)?/i, '').slice(0, 44))}</small>` : ''}</div><div><button type="button" class="tinyBtn" data-edit="${i}">Edit</button><button type="button" class="tinyBtn danger" data-delete="${i}">Delete</button></div></div>`).join('') : '<p class="mutedMini">No social links added yet</p>'}</div>${socials.length < 3 ? '<button type="button" class="primary wide socialManagerAdd">+ Add Social Link</button>' : ''}</div>`;
  document.body.appendChild(m);
  const close = () => m.remove();
  m.querySelector('.close').onclick = close;
  m.onclick = e => { if (e.target === m) close(); };
  m.querySelector('.socialManagerAdd')?.addEventListener('click', () => { close(); addOwnSocial(); });
  m.querySelectorAll('[data-edit]').forEach(b => b.onclick = () => { const i = +b.dataset.edit; close(); editOwnSocial(i); });
  m.querySelectorAll('[data-delete]').forEach(b => b.onclick = async () => { const i = +b.dataset.delete; close(); await deleteOwnSocial(i); });
};
window.addOwnSocial = async () => {
  const p = rdmPlayer();
  if (!p || !rdmPlayerUnlockedNow(p.id)) return;
  if ((p.socials || []).length >= 3) return toast('Maximum 3 socials allowed');
  return rdmOpenSimpleModal('Add Social Link', [
    { name: 'name', label: 'Platform Name', placeholder: 'Instagram', required: true },
    { name: 'url', label: 'Profile URL', placeholder: 'https://...', required: true }
  ], async d => {
    if (!safeUrl(d.url)) { toast('Valid https:// link required'); throw new Error('VALIDATION'); }
    p.socials = [...(p.socials || []), { name: String(d.name).trim() || ('Social ' + ((p.socials || []).length + 1)), url: String(d.url).trim() }].slice(0, 3);
    const synced = await rdmProfileWrite(p);
    rdmRefresh();
    if (synced) toast('Social link added & synced');
  });
};
window.editOwnSocial = async i => {
  const p = rdmPlayer(), s = socialObj(p?.socials?.[i], i);
  if (!p || !s || !rdmPlayerUnlockedNow(p.id)) return;
  return rdmOpenSimpleModal('Edit Social Link', [
    { name: 'name', label: 'Platform Name', value: s.name || '' },
    { name: 'url', label: 'Profile URL', value: s.url || '', placeholder: 'https://...', required: true }
  ], async d => {
    if (!safeUrl(d.url)) { toast('Valid https:// link required'); throw new Error('VALIDATION'); }
    p.socials[i] = { name: String(d.name || '').trim() || ('Social ' + (i + 1)), url: String(d.url).trim() };
    const synced = await rdmProfileWrite(p);
    rdmRefresh();
    if (synced) toast('Social link updated & synced');
  });
};
window.deleteOwnSocial = async i => {
  const p = rdmPlayer();
  if (!p || !rdmPlayerUnlockedNow(p.id)) return;
  p.socials.splice(i, 1);
  const synced = await rdmProfileWrite(p);
  rdmRefresh();
  if (synced) toast('Social link deleted');
};

const originalChooseDP = window.chooseDP;
window.chooseDP = () => {
  const p = rdmPlayer();
  if (!p || !rdmPlayerUnlockedNow(p.id)) return toast?.('Unlock profile first');
  rdmCropTarget = p.id;
  originalChooseDP();
};
window.adminChooseDP = id => {
  if (!rdmAdmin()) return;
  rdmCropTarget = id;
  originalChooseDP();
};
window.adminResetDP = async id => {
  if (!rdmAdmin()) return;
  const p = D.players.find(x => x.id === id);
  if (!p) return;
  p.image = '';
  await rdmProfileWrite(p, { image: '' });
  rdmRefresh();
  if (document.getElementById('adminPlayerProfileModal')?.classList.contains('show')) window.adminOpenPlayerProfile(id);
  toast('Photo reset to RDM logo');
};
q('#cropSave').onclick = async () => {
  if (rdmCropTarget) {
    const isSelf = rdmPlayer()?.id === rdmCropTarget && rdmPlayerUnlockedNow(rdmCropTarget);
    if (!rdmAdmin() && !isSelf) return toast?.('Not allowed');
  } else if (!rdmPlayer() || !rdmPlayerUnlockedNow(rdmPlayer().id)) {
    return toast?.('Not allowed');
  }
  const p = D.players.find(x => x.id === (rdmCropTarget || rdmPlayer()?.id));
  if (!p || !crop.img) return;
  const src = q('#cropCanvas'), out = document.createElement('canvas');
  out.width = 320;
  out.height = 320;
  const octx = out.getContext('2d');
  octx.fillStyle = '#FFFFFF';
  octx.fillRect(0, 0, 320, 320);
  octx.save();
  octx.beginPath();
  octx.arc(160, 160, 159, 0, Math.PI * 2);
  octx.clip();
  octx.drawImage(src, 0, 0, 320, 320);
  octx.restore();
  p.image = out.toDataURL('image/jpeg', 0.80);
  try {
    const synced = await rdmProfileWrite(p, { image: p.image });
    q('#cropModal').classList.remove('show');
    const editedId = p.id;
    rdmCropTarget = null;
    rdmRefresh();
    window.refreshAdminSectionManager?.();
    if (document.getElementById('adminPlayerProfileModal')?.classList.contains('show')) window.adminOpenPlayerProfile?.(editedId);
    if (synced) toast('Photo saved & synced');
  } catch (e) {
    console.error(e);
    toast('Photo save failed');
  }
};

window.removeItem = async (k, i) => {
  if (!rdmAdmin()) return toast('Admin only');
  const item = D[k]?.[i], col = RCOL[k];
  if (!item || !col) return;
  const run = async () => {
    let failed = false;
    if (item._docId && !String(item._docId).startsWith('loc_')) {
      try {
        await rdmDB.collection(col).doc(item._docId).delete();
      } catch (err) {
        failed = true;
        rdmReportWriteError(err, 'Delete ' + col);
      }
    }
    D[k].splice(i, 1);
    if (failed) rdmSaveCollectionOverride(k, D[k]);
    rdmRefresh();
    window.refreshAdminSectionManager?.();
    toast('Deleted');
  };
  if (typeof window.rdmConfirmModal === 'function') {
    return window.rdmConfirmModal('Delete Item', 'This action cannot be undone.', run);
  }
  return run();
};

window.editPlayer = id => {
  if (!rdmAdmin()) return;
  if (typeof window.adminEditPlayerProfile === 'function') return window.adminEditPlayerProfile(id);
  openEdit('editPlayer', D.players.find(x => x.id === id));
};
window.editSocial = i => { if (rdmAdmin()) openEdit('editSocial', D.socials[i]); };
window.editHonour = i => {
  if (!rdmAdmin()) return;
  const h = typeof i === 'number' ? D.honours?.[i] : D.honours?.find(x => x._docId === i);
  if (h) openEdit('editHonour', h);
};
window.editGallery = id => {
  if (!rdmAdmin()) return;
  const g = D.gallery?.find(x => x._docId === id);
  if (g) openEdit('editGallery', g);
};
window.addNewsModal = () => {
  if (!rdmAdmin()) return toast('Admin only');
  openEdit('news');
};

openEdit = function (mode, obj = null) {
  if (!rdmAdmin()) return toast('Admin only');
  editMode = mode;
  editObj = obj;
  let h = '', f = '';
  const fi = (lbl = 'Image') => `<label>${lbl}<input id="efile" type="file" accept="image/*"></label>`;
  if (mode === 'match') { h = 'Add Match'; f = '<label>Opponent<input id="e1" required></label><label>Date / Time<input id="e2"></label><label>Venue<input id="e3"></label><label>Detail / Result / POTM<textarea id="e4"></textarea></label>'; }
  if (mode === 'news') { h = 'Add Team News'; f = '<label>Title<input id="e1" required placeholder="Matchday announcement title"></label><label>Announcement<textarea id="e2" rows="5" required placeholder="Write team news or notice..."></textarea></label><label class="rdmCheckField"><input id="epin" type="checkbox"><span>Pin this news banner on Home</span></label>'; }
  if (mode === 'player') { h = 'Add Squad Player'; f = '<label>Player Name<input id="e1" required placeholder="Full name"></label><label>Playing Role<input id="e2" required placeholder="BATSMAN / ALL-ROUNDER / BOWLER"></label><label>Playing Style & Detail<textarea id="e3" rows="3" placeholder="Right-handed · Middle Order"></textarea></label><label>Jersey Number<input id="e4" placeholder="Optional e.g. 18"></label><label>Nickname<input id="e5" placeholder="Optional nickname"></label><label>Bio<textarea id="e6" rows="3" placeholder="Short player intro"></textarea></label>' + fi('Player Photo (optional)'); }
  if (mode === 'honour') { h = 'Add Honour / Trophy'; f = '<label>Year<input id="e1" required placeholder="2026"></label><label>Result / Title<input id="e2" required placeholder="WINNER / RUNNER-UP"></label><label>Tournament Name<input id="e3" required placeholder="Tournament name"></label>' + fi('Trophy Photo (optional)'); }
  if (mode === 'editHonour') { h = 'Edit Honour / Trophy'; f = `<label>Year<input id="e1" required value="${esc(obj?.year || '')}"></label><label>Result / Title<input id="e2" required value="${esc(obj?.title || '')}"></label><label>Tournament Name<input id="e3" required value="${esc(obj?.sub || '')}"></label>` + fi('Replace Trophy Photo (optional)'); }
  if (mode === 'gallery') { h = 'Add Gallery Photo'; f = fi('Select Photo *') + '<label>Caption<input id="e1" placeholder="Match memory or title"></label><label>Album<select id="e2"><option>TEAM PHOTOS</option><option selected>MEMORIES</option><option>UPDATES</option></select></label>'; }
  if (mode === 'editGallery') {
    const alb = String(obj?.album || 'MEMORIES').toUpperCase();
    h = 'Edit Gallery Photo';
    f = `<label>Caption<input id="e1" value="${esc(obj?.caption || '')}"></label><label>Album<select id="e2"><option ${alb === 'TEAM PHOTOS' ? 'selected' : ''}>TEAM PHOTOS</option><option ${alb === 'MEMORIES' ? 'selected' : ''}>MEMORIES</option><option ${alb === 'UPDATES' ? 'selected' : ''}>UPDATES</option></select></label>` + fi('Replace Photo (optional)');
  }
  if (mode === 'social') { h = 'Add Social'; f = '<label>Platform<input id="e1" required placeholder="Instagram"></label><label>Display Name<input id="e4" placeholder="RDM Instagram"></label><label>Link<input id="e2" placeholder="https://..."></label><label>Icon<input id="e3" placeholder="IG"></label>' + fi('Custom Icon (optional)'); }
  if (mode === 'editSocial') { h = 'Edit Social'; f = `<label>Platform<input id="e1" required value="${esc(obj.name || '')}"></label><label>Display Name<input id="e4" value="${esc(obj.displayName || obj.name || '')}"></label><label>Link<input id="e2" value="${esc(obj.url || '')}"></label><label>Icon<input id="e3" value="${esc(obj.icon || '')}"></label>${fi('Replace Icon (optional)')}`; }
  if (mode === 'editPlayer') { h = 'Edit Player'; f = `<label>Name<input id="e1" required value="${esc(obj.name)}"></label><label>Role<input id="e2" required value="${esc(obj.role)}"></label><label>Playing Detail<textarea id="e3" rows="3">${esc(obj.detail)}</textarea></label><label>Jersey<input id="e4" value="${esc(obj.jersey || '')}"></label><label>Nickname<input id="e5" value="${esc(obj.nick || '')}"></label><label>Bio<textarea id="e6" rows="4">${esc(obj.bio || '')}</textarea></label>${fi('Replace Photo (optional)')}`; }
  q('#editTitle').textContent = h;
  q('#editFields').innerHTML = f;
  q('#editor').classList.add('show');
};

q('#editForm').onsubmit = async e => {
  e.preventDefault();
  if (!rdmAdmin()) return toast('Admin only');
  const v = id => q('#' + id)?.value?.trim() || '', file = q('#efile')?.files?.[0];
  try {
    let img = '';
    if (file) img = await rdmCompressFile(file);
    const now = Date.now();
    if (editMode === 'match') {
      const payload = { opponent: v('e1'), date: v('e2'), venue: v('e3'), note: v('e4'), createdMs: now };
      const rec = { ...payload, _docId: 'loc_' + now };
      try { const ref = await rdmDB.collection(RCOL.matches).add({ ...payload, updatedAt: rdmStamp() }); rec._docId = ref.id; } catch (err) { rdmSaveCollectionOverride('matches', [rec, ...(D.matches || [])]); rdmReportWriteError(err, 'Add Match'); }
      D.matches.unshift(rec);
    }
    if (editMode === 'news') {
      const pinned = !!q('#epin')?.checked;
      if (pinned) D.news.forEach(n => { n.pinned = false; });
      const payload = { title: v('e1'), text: v('e2'), pinned, createdMs: now };
      const rec = { ...payload, _docId: 'loc_' + now };
      try {
        if (pinned) {
          const prevPins = await rdmDB.collection(RCOL.news).where('pinned', '==', true).get();
          const b = rdmDB.batch();
          prevPins.docs.forEach(d => b.set(d.ref, { pinned: false, updatedAt: rdmStamp() }, { merge: true }));
          if (!prevPins.empty) await b.commit();
        }
        const ref = await rdmDB.collection(RCOL.news).add({ ...payload, updatedAt: rdmStamp() });
        rec._docId = ref.id;
      } catch (err) {
        rdmSaveCollectionOverride('news', [rec, ...(D.news || [])]);
        rdmReportWriteError(err, 'Add News');
      }
      D.news.unshift(rec);
    }
    if (editMode === 'player') {
      const existingNums = D.players.map(p => +String(p.id).replace(/\D/g, '')).filter(Number.isFinite);
      const docNums = (rdmTeamDocsCache || []).map(p => +String(p.id || p._docId || '').replace(/\D/g, '')).filter(Number.isFinite);
      const nextNum = Math.max(17, ...existingNums, ...docNums) + 1;
      const id = 'RDM' + String(nextNum).padStart(3, '0');
      const payload = {
        id, name: v('e1'), role: v('e2'), detail: v('e3'),
        image: img || '', jersey: v('e4'), nick: v('e5'), bio: v('e6'),
        socials: [], order: Math.max(D.players.length + 1, nextNum), active: true, updatedMs: now
      };
      if (!payload.name) return toast('Player name required');
      const np = { ...payload, _docId: id };
      D.players.push(np);
      rdmSetOverrides(o => {
        o.extraPlayers = (o.extraPlayers || []).filter(ep => ep.id !== id);
        o.extraPlayers.push(np);
        o.removedPlayerIds = (o.removedPlayerIds || []).filter(x => x !== id);
      });
      try { await rdmDB.collection(RCOL.players).doc(id).set({ ...payload, updatedAt: rdmStamp() }); } catch (err) { rdmReportWriteError(err, 'Add Player'); }
      await rdmProfileWrite(np, { name: np.name, role: np.role, detail: np.detail, ...(img ? { image: img } : {}) });
    }
    if (editMode === 'honour') {
      const payload = { year: v('e1'), title: v('e2'), sub: v('e3'), image: img || RDM_FALLBACK_LOGO, order: D.honours.length + 1, createdMs: now };
      const rec = { ...payload, _docId: 'loc_' + now };
      try { const ref = await rdmDB.collection(RCOL.honours).add({ ...payload, updatedAt: rdmStamp() }); rec._docId = ref.id; } catch (err) { rdmSaveCollectionOverride('honours', [rec, ...(D.honours || [])]); rdmReportWriteError(err, 'Add Honour'); }
      D.honours.unshift(rec);
    }
    if (editMode === 'editHonour' && editObj) {
      editObj.year = v('e1');
      editObj.title = v('e2');
      editObj.sub = v('e3');
      if (img) editObj.image = img;
      const patch = { year: editObj.year, title: editObj.title, sub: editObj.sub, ...(img ? { image: img } : {}), updatedAt: rdmStamp() };
      try {
        if (editObj._docId && !String(editObj._docId).startsWith('loc_')) {
          await rdmDB.collection(RCOL.honours).doc(editObj._docId).set(patch, { merge: true });
        } else {
          const ref = await rdmDB.collection(RCOL.honours).add({ ...patch, image: editObj.image || RDM_FALLBACK_LOGO, order: editObj.order || 1, createdMs: editObj.createdMs || now });
          editObj._docId = ref.id;
        }
      } catch (err) {
        rdmSaveCollectionOverride('honours', D.honours);
        rdmReportWriteError(err, 'Edit Honour');
      }
    }
    if (editMode === 'gallery') {
      if (!img) return toast('Select an image');
      const payload = { image: img, caption: v('e1') || 'RDM Memory', album: v('e2') || 'MEMORIES', createdMs: now };
      const rec = { ...payload, _docId: 'loc_' + now };
      try { const ref = await rdmDB.collection(RCOL.gallery).add({ ...payload, updatedAt: rdmStamp() }); rec._docId = ref.id; } catch (err) { rdmSaveCollectionOverride('gallery', [rec, ...(D.gallery || [])]); rdmReportWriteError(err, 'Add Gallery'); }
      D.gallery.unshift(rec);
    }
    if (editMode === 'editGallery' && editObj) {
      editObj.caption = v('e1') || 'RDM Memory';
      editObj.album = v('e2') || 'MEMORIES';
      if (img) editObj.image = img;
      const patch = { caption: editObj.caption, album: editObj.album, ...(img ? { image: img } : {}), updatedAt: rdmStamp() };
      try {
        if (editObj._docId && !String(editObj._docId).startsWith('loc_')) {
          await rdmDB.collection(RCOL.gallery).doc(editObj._docId).set(patch, { merge: true });
        } else {
          const ref = await rdmDB.collection(RCOL.gallery).add({ ...patch, image: editObj.image, createdMs: editObj.createdMs || now });
          editObj._docId = ref.id;
        }
      } catch (err) {
        rdmSaveCollectionOverride('gallery', D.gallery);
        rdmReportWriteError(err, 'Edit Gallery');
      }
    }
    if (editMode === 'social') {
      const payload = { name: v('e1').toUpperCase(), displayName: v('e4') || v('e1'), url: v('e2'), icon: v('e3') || '↗', image: img || '', order: D.socials.length + 1, createdMs: now };
      const rec = { ...payload, _docId: 'loc_' + now };
      try { const ref = await rdmDB.collection(RCOL.socials).add({ ...payload, updatedAt: rdmStamp() }); rec._docId = ref.id; } catch (err) { rdmSaveCollectionOverride('socials', [...(D.socials || []), rec]); rdmReportWriteError(err, 'Add Social'); }
      D.socials.push(rec);
    }
    if (editMode === 'editSocial') {
      editObj.name = v('e1').toUpperCase();
      editObj.displayName = v('e4') || v('e1');
      editObj.url = v('e2');
      editObj.icon = v('e3') || editObj.icon || '↗';
      if (img) editObj.image = img;
      if (editObj._docId && !String(editObj._docId).startsWith('loc_')) {
        try {
          await rdmDB.collection(RCOL.socials).doc(editObj._docId).set({
            name: editObj.name, displayName: editObj.displayName, url: editObj.url, icon: editObj.icon,
            ...(img ? { image: img } : {}), updatedAt: rdmStamp()
          }, { merge: true });
        } catch (err) { rdmReportWriteError(err, 'Edit Social'); }
      } else {
        try {
          const ref = await rdmDB.collection(RCOL.socials).add({
            name: editObj.name, displayName: editObj.displayName, url: editObj.url, icon: editObj.icon,
            order: editObj.order || D.socials.length, createdMs: editObj.createdMs || now,
            ...(img ? { image: img } : {}), updatedAt: rdmStamp()
          });
          editObj._docId = ref.id;
        } catch (err) { rdmReportWriteError(err, 'Edit Social'); }
      }
    }
    if (editMode === 'editPlayer') {
      const p = editObj;
      p.name = v('e1');
      p.role = v('e2');
      p.detail = v('e3');
      p.jersey = v('e4');
      p.nick = v('e5');
      p.bio = v('e6');
      if (img) p.image = img;
      try {
        await rdmDB.collection(RCOL.players).doc(p.id).set({
          name: p.name, role: p.role, detail: p.detail, jersey: p.jersey,
          ...(img ? { image: img } : {}), updatedMs: now, updatedAt: rdmStamp()
        }, { merge: true });
      } catch (err) { rdmReportWriteError(err, 'Edit Player'); }
      await rdmProfileWrite(p, { name: p.name, role: p.role, detail: p.detail, ...(img ? { image: img } : {}) });
    }
    q('#editor').classList.remove('show');
    rdmRefresh();
    window.renderGalleryAlbums?.();
    window.refreshAdminSectionManager?.();
    toast('Saved & synced live');
  } catch (err) {
    console.error(err);
    toast(err.message === 'IMAGE_TOO_LARGE' ? 'Image too large' : 'Save failed');
  }
};
rdmRefresh();

function rdmCanvasRoundRect(ctx, x, y, w, h, r, fill, stroke) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 2; ctx.stroke(); }
}
function rdmWrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 5) {
  const words = String(text || '').replace(/\s+/g, ' ').trim().split(' ');
  let line = '', lines = [];
  for (const word of words) {
    const test = line ? line + ' ' + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else line = test;
    if (lines.length >= maxLines) break;
  }
  if (line && lines.length < maxLines) lines.push(line);
  lines.slice(0, maxLines).forEach((ln, i) => ctx.fillText(ln, x, y + i * lineHeight));
  return lines.length * lineHeight;
}
function rdmLoadImage(src) {
  return new Promise((resolve, reject) => {
    const im = new Image();
    im.onload = () => resolve(im);
    im.onerror = reject;
    im.src = src;
  });
}
function rdmExportMini(v) {
  return typeof mini === 'function' ? mini(String(v ?? '')) : String(v ?? '');
}
function rdmCanvasFont(ctx, weight, size) {
  ctx.font = `${weight} ${size}px "DM Sans", Arial, sans-serif`;
}
async function rdmDrawProfileImage(format = 'png') {
  const p = rdmPlayer();
  if (!p) return;
  const W = 1080, H = 1350, c = document.createElement('canvas');
  c.width = W; c.height = H;
  const ctx = c.getContext('2d');
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#eef3ef');
  bg.addColorStop(0.5, '#f8faf8');
  bg.addColorStop(1, '#e6efe9');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);
  rdmCanvasRoundRect(ctx, 36, 36, W - 72, H - 72, 24, '#ffffff', '#cddad0');
  const band = ctx.createLinearGradient(72, 0, W - 72, 0);
  band.addColorStop(0, '#047857');
  band.addColorStop(0.6, '#b45309');
  band.addColorStop(1, '#0b1a13');
  rdmCanvasRoundRect(ctx, 72, 72, W - 144, 10, 5, band, null);

  let logo = null;
  try { logo = await rdmLoadImage(RDM_FALLBACK_LOGO); } catch {}
  if (logo) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(112, 134, 38, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(logo, 74, 96, 76, 76);
    ctx.restore();
    ctx.strokeStyle = '#047857';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(112, 134, 40, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.textAlign = 'left';
  ctx.fillStyle = '#0b1a13';
  rdmCanvasFont(ctx, 800, 26);
  ctx.fillText('REHAN DOMINATORS MAHUAWAN', 170, 128);
  ctx.fillStyle = '#475a50';
  rdmCanvasFont(ctx, 600, 15);
  ctx.fillText('MAHUAWAN · GOPALGANJ · BIHAR', 170, 155);

  let avatar = null;
  try { avatar = await rdmLoadImage(playerPhotoUrl(p.image)); } catch { try { avatar = await rdmLoadImage(RDM_FALLBACK_LOGO); } catch {} }
  if (avatar) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(W / 2, 315, 132, 0, Math.PI * 2);
    ctx.clip();
    const s = Math.max(264 / avatar.width, 264 / avatar.height), dw = avatar.width * s, dh = avatar.height * s;
    ctx.drawImage(avatar, W / 2 - dw / 2, 315 - dh / 2, dw, dh);
    ctx.restore();
    ctx.strokeStyle = '#047857';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(W / 2, 315, 136, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.textAlign = 'center';
  ctx.fillStyle = '#0b1a13';
  rdmCanvasFont(ctx, 800, 44);
  ctx.fillText(rdmExportMini(p.name || 'PLAYER'), W / 2, 505);
  rdmCanvasRoundRect(ctx, 120, 545, 840, 120, 16, '#f3f6f3', '#cddad0');
  ctx.fillStyle = '#b45309';
  rdmCanvasFont(ctx, 700, 15);
  ctx.fillText('PLAYER ID', 330, 583);
  ctx.fillText('JERSEY NUMBER', 750, 583);
  ctx.fillStyle = '#0b1a13';
  rdmCanvasFont(ctx, 800, 28);
  ctx.fillText(rdmExportMini(p.id || '—'), 330, 628);
  ctx.fillText(p.jersey ? '#' + p.jersey : '—', 750, 628);
  ctx.strokeStyle = '#cddad0';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(540, 564);
  ctx.lineTo(540, 648);
  ctx.stroke();

  let y = 712;
  if (p.nick) {
    ctx.fillStyle = '#047857';
    rdmCanvasFont(ctx, 700, 20);
    ctx.fillText(rdmExportMini(p.nick), W / 2, y);
    y += 48;
  }
  const roleH = 140;
  rdmCanvasRoundRect(ctx, 120, y, 840, roleH, 16, '#f3f6f3', '#cddad0');
  ctx.fillStyle = '#0b1a13';
  rdmCanvasFont(ctx, 800, 22);
  ctx.fillText(rdmExportMini(p.role || ''), W / 2, y + 44);
  ctx.fillStyle = '#475a50';
  rdmCanvasFont(ctx, 600, 18);
  rdmWrapCanvasText(ctx, rdmExportMini(p.detail || ''), W / 2, y + 84, 740, 28, 2);
  y += roleH + 48;
  if (p.bio) {
    ctx.fillStyle = '#2d4036';
    rdmCanvasFont(ctx, 500, 18);
    const used = rdmWrapCanvasText(ctx, rdmExportMini(p.bio), W / 2, y, 780, 28, 4);
    y += used + 28;
  }
  const socials = (p.socials || []).map(socialObj).filter(s => s.name || s.url).slice(0, 3);
  if (socials.length) {
    const sh = 56 + socials.length * 32;
    rdmCanvasRoundRect(ctx, 135, y, 810, sh, 16, '#f3f6f3', '#cddad0');
    ctx.fillStyle = '#b45309';
    rdmCanvasFont(ctx, 700, 15);
    ctx.fillText('OFFICIAL SOCIALS', W / 2, y + 30);
    ctx.fillStyle = '#0b1a13';
    rdmCanvasFont(ctx, 600, 16);
    socials.forEach((s, i) => ctx.fillText(rdmExportMini(s.name || ('Social ' + (i + 1))), W / 2, y + 62 + i * 30));
    y += sh + 18;
  }
  const footerY = Math.min(1272, Math.max(1220, y + 32));
  ctx.fillStyle = '#047857';
  rdmCanvasFont(ctx, 800, 15);
  ctx.fillText('ONE TEAM · ONE DREAM · ONE DOMINATION', W / 2, footerY);
  ctx.fillStyle = '#475a50';
  rdmCanvasFont(ctx, 600, 13);
  ctx.fillText('OFFICIAL PLAYER PROFILE · RDM', W / 2, footerY + 30);

  const mime = format === 'jpg' ? 'image/jpeg' : 'image/png', ext = format === 'jpg' ? 'jpg' : 'png';
  const outUrl = c.toDataURL(mime, format === 'jpg' ? 0.95 : 1);
  const a = document.createElement('a');
  a.href = outUrl;
  a.download = `${String(p.id || 'RDM')}-${String(p.name || 'PLAYER').replace(/\s+/g, '-')}-PROFILE.${ext}`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  toast?.(`Profile ${ext.toUpperCase()} ready`);
}

window.openProfileDownload = function () {
  document.getElementById('profileDownloadModal')?.remove();
  const m = document.createElement('div');
  m.id = 'profileDownloadModal';
  m.className = 'modal show profileDownloadOverlay';
  m.innerHTML = `<div class="dialog rdmUnifiedDialog profileDownloadDialog">
    <button class="close" type="button">×</button>
    <h2>Download Profile Card</h2>
    <p class="profileDownloadNote">Choose high-resolution export format</p>
    <div class="profileDownloadChoices">
      <button type="button" class="primary" data-format="png">PNG · Best Quality</button>
      <button type="button" class="secondary" data-format="jpg">JPG · Smaller File</button>
    </div>
  </div>`;
  document.body.appendChild(m);
  const close = () => m.remove();
  m.querySelector('.close').onclick = close;
  m.addEventListener('click', e => { if (e.target === m) close(); });
  m.querySelectorAll('[data-format]').forEach(b => b.onclick = async () => {
    const f = b.dataset.format;
    b.disabled = true;
    try { await rdmDrawProfileImage(f); close(); }
    catch (e) { console.error(e); toast?.('Download failed'); b.disabled = false; }
  });
};

window.toggleProfileEditMenu = function (force) {
  if (force === false) closeProfileEditMenu();
  else openProfileEditMenu();
};

/* Squad inline career stats + share + admin quick edit */
if (!window.__rdmExpandedStats) window.__rdmExpandedStats = new Set();
function squadStatsHtml(p, expanded = false) {
  const s = (typeof XD !== 'undefined' && XD.stats || []).find(z => z.playerId === p.id) || {};
  const n = v => Number(v || 0) || 0;
  return `<div class="squadStats squadStatsPanel" id="squad-stats-${esc(p.id)}" ${expanded ? '' : 'hidden'}>
    <div class="squadStatsGroup">
      <div class="squadStatsGroupTitle">Batting Statistics</div>
      <div class="squadStatsGrid">
        <b>${n(s.matches)}<small>Matches</small></b>
        <b>${n(s.runs)}<small>Runs</small></b>
        <b>${n(s.highScore)}<small>High Score</small></b>
        <b>${n(s.ballsFaced)}<small>Balls</small></b>
        <b>${n(s.strikeRate)}<small>Strike Rate</small></b>
        <b>${n(s.fours)} / ${n(s.sixes)}<small>4s / 6s</small></b>
        <b>${n(s.fifties)} / ${n(s.hundreds)}<small>50s / 100s</small></b>
        <b>${n(s.runOuts)}<small>Run Outs</small></b>
      </div>
    </div>
    <div class="squadStatsGroup">
      <div class="squadStatsGroupTitle">Bowling Statistics</div>
      <div class="squadStatsGrid squadStatsGridBowling">
        <b>${n(s.wickets)}<small>Wickets</small></b>
        <b>${esc(s.bestBowling || '—')}<small>Best</small></b>
        <b>${n(s.economy)}<small>Economy</small></b>
      </div>
    </div>
    <div class="squadStatLines">
      <p>Last 5: ${esc(s.last5 || '—')} · Season: ${esc(s.season || '2027')}</p>
    </div>
  </div>`;
}
function squadCardActionsHtml(p, expanded = false) {
  const label = mini(p?.name || 'Player');
  return `<div class="squadCardActions">
    <button type="button" class="tinyBtn squadStatsToggleBtn ${expanded ? 'active' : ''}" data-toggle-stats="${esc(p.id)}" aria-expanded="${expanded}" aria-controls="squad-stats-${esc(p.id)}">
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
      <span>${expanded ? 'Hide Stats' : 'View Stats'}</span>
    </button>
    <button type="button" class="tinyBtn squadShareBtn" data-share-player="${esc(p.id)}" aria-label="Share ${esc(label)} profile">
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
      <span>Share</span>
    </button>
  </div>`;
}
function renderSquadFullProfiles() {
  const box = q('#players');
  if (!box) return;
  box.innerHTML = D.players.map(p => {
    const n = (p.name || '').toUpperCase();
    const lead = n === 'REHAN AKHTAR' ? 'CAPTAIN' : n === 'SAIF ALI' ? 'VICE-CAPTAIN' : n === 'SOAIB AKHTAR' ? 'WICKET-KEEPER' : '';
    const socials = (p.socials || []).map(socialObj).filter(s => s.url || s.name);
    const expanded = !!window.__rdmExpandedStats?.has(p.id);
    return `<article class="player squadFullProfile ${expanded ? 'is-stats-open' : ''}" data-player-id="${esc(p.id)}">
      ${rdmAdmin() ? `<button type="button" class="squadEditFab" aria-label="Edit ${esc(p.name)}" title="Edit" onclick="openSquadEditMenu('${esc(p.id)}')">Edit</button>` : ''}
      <div class="photo" onclick="openPlayerProfile('${esc(p.id)}')"><img src="${esc(playerPhotoUrl(p.image))}" alt="${esc(mini(p.name))}" onerror="this.onerror=null;this.src='${RDM_FALLBACK_LOGO}'"></div>
      <div class="pbody">
        ${lead ? `<div class="leadershipBadge ${lead === 'VICE-CAPTAIN' ? 'vice' : lead === 'WICKET-KEEPER' ? 'keeper' : ''}">${esc(mini(lead))}</div>` : ''}
        <div class="squadIdentity"><span>${esc(miniId(p.id))}</span><span>${p.jersey ? '#' + esc(p.jersey) : '—'}</span></div>
        <h3 onclick="openPlayerProfile('${esc(p.id)}')">${esc(mini(p.name))}</h3>
        <b>${esc(mini(p.role))}</b>
        <p>${esc(mini(p.detail))}</p>
        ${p.nick ? `<p class="squadNick">Nickname · ${esc(mini(p.nick))}</p>` : ''}
        ${p.bio ? `<div class="profileBio">${esc(mini(p.bio))}</div>` : ''}
        ${socials.length ? `<div class="squadSocials">${socials.map((s, i) => `<a href="${esc(safeUrl(s.url))}" target="_blank" rel="noopener">${esc(mini(s.name || ('Social ' + (i + 1))))}</a>`).join('')}</div>` : ''}
      </div>
      ${squadCardActionsHtml(p, expanded)}
      ${squadStatsHtml(p, expanded)}
    </article>`;
  }).join('');
}

window.toggleSquadPlayerStats = function (id, btn) {
  const card = btn?.closest('.player') || document.querySelector(`#players .player[data-player-id="${CSS.escape(id)}"]`);
  const panel = document.getElementById(`squad-stats-${id}`) || card?.querySelector('.squadStatsPanel');
  if (!card || !panel) return;
  const open = panel.hidden;
  panel.hidden = !open;
  card.classList.toggle('is-stats-open', open);
  if (open) window.__rdmExpandedStats.add(id);
  else window.__rdmExpandedStats.delete(id);
  const toggleBtn = card.querySelector('[data-toggle-stats]');
  if (toggleBtn) {
    toggleBtn.classList.toggle('active', open);
    toggleBtn.setAttribute('aria-expanded', String(open));
    const span = toggleBtn.querySelector('span');
    if (span) span.textContent = open ? 'Hide Stats' : 'View Stats';
  }
};
if (!window.__rdmStatsToggleDelegated) {
  window.__rdmStatsToggleDelegated = true;
  document.addEventListener('click', e => {
    const btn = e.target.closest?.('[data-toggle-stats]');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    window.toggleSquadPlayerStats?.(btn.dataset.toggleStats, btn);
  });
}

window.openPlayerShareModal = function (id) {
  const p = (D.players || []).find(x => x.id === id);
  if (!p) return;
  document.getElementById('playerShareModal')?.remove();
  const name = mini(p.name || 'Player');
  const role = mini(p.role || 'Squad Player');
  const avatar = playerPhotoUrl(p.image);
  const shareUrl = `${location.origin}${location.pathname}#player=${encodeURIComponent(p.id)}`;
  const shareText = `${name} (${role}) — Rehan Dominators Mahuawan Official Squad`;
  const waHref = `https://wa.me/?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`;
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
  const tgHref = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
  const hasNative = typeof navigator.share === 'function';
  const m = document.createElement('div');
  m.id = 'playerShareModal';
  m.className = 'modal show rdmUnifiedModal';
  m.innerHTML = `<div class="dialog rdmUnifiedDialog playerShareDialog" role="dialog" aria-modal="true" aria-labelledby="shareModalTitle">
    <button class="close" type="button" aria-label="Close">×</button>
    <div class="sharePlayerPreview">
      <img src="${esc(avatar)}" alt="${esc(name)}" referrerPolicy="no-referrer">
      <div>
        <span class="shareKicker">Share Player Profile</span>
        <h2 id="shareModalTitle">${esc(name)}</h2>
        <p>${esc(role)} · ${esc(miniId(p.id))}${p.jersey ? ' · #' + esc(p.jersey) : ''}</p>
      </div>
    </div>
    <div class="shareChannelGrid">
      <a class="shareChannelBtn wa" href="${esc(waHref)}" target="_blank" rel="noopener noreferrer">${window.rdmSocialSvg?.('WHATSAPP') || ''}<span>WhatsApp</span></a>
      <a class="shareChannelBtn x" href="${esc(xHref)}" target="_blank" rel="noopener noreferrer"><span>X / Twitter</span></a>
      <a class="shareChannelBtn fb" href="${esc(fbHref)}" target="_blank" rel="noopener noreferrer">${window.rdmSocialSvg?.('FACEBOOK') || ''}<span>Facebook</span></a>
      <a class="shareChannelBtn tg" href="${esc(tgHref)}" target="_blank" rel="noopener noreferrer">${window.rdmSocialSvg?.('TELEGRAM') || ''}<span>Telegram</span></a>
    </div>
    <div class="shareUrlBox">
      <input type="text" readonly value="${esc(shareUrl)}" aria-label="Shareable player profile URL">
      <button type="button" class="primary" id="shareCopyBtn">Copy Link</button>
    </div>
    ${hasNative ? '<button type="button" class="secondary wide shareNativeBtn" id="shareNativeBtn">Share via Device</button>' : ''}
  </div>`;
  document.body.appendChild(m);
  const close = () => { document.removeEventListener('keydown', onKey); m.remove(); };
  const onKey = e => { if (e.key === 'Escape') close(); };
  document.addEventListener('keydown', onKey);
  m.querySelector('.close').onclick = close;
  m.addEventListener('click', e => { if (e.target === m) close(); });
  const urlInput = m.querySelector('.shareUrlBox input');
  urlInput.addEventListener('focus', () => urlInput.select());
  const copyBtn = m.querySelector('#shareCopyBtn');
  copyBtn.addEventListener('click', async () => {
    let copied = false;
    try { if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(shareUrl); copied = true; } } catch {}
    if (!copied) { try { urlInput.focus(); urlInput.select(); copied = document.execCommand('copy'); } catch {} }
    if (copied) {
      copyBtn.textContent = 'Copied!';
      toast?.('Profile link copied');
      setTimeout(() => { if (copyBtn.isConnected) copyBtn.textContent = 'Copy Link'; }, 1800);
    } else {
      urlInput.focus();
      urlInput.select();
      toast?.('Select and copy the link');
    }
  });
  m.querySelector('#shareNativeBtn')?.addEventListener('click', async () => {
    try { await navigator.share({ title: `${name} · RDM`, text: shareText, url: shareUrl }); }
    catch (err) { if (err && err.name === 'AbortError') return; copyBtn.click(); }
  });
};
if (!window.__rdmShareDelegated) {
  window.__rdmShareDelegated = true;
  document.addEventListener('click', e => {
    const btn = e.target.closest?.('[data-share-player]');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    window.openPlayerShareModal?.(btn.dataset.sharePlayer);
  });
}

window.openSquadEditMenu = function (id) {
  if (!rdmAdmin()) return;
  document.getElementById('squadEditModal')?.remove();
  const p = D.players.find(x => x.id === id);
  if (!p) return;
  const m = document.createElement('div');
  m.id = 'squadEditModal';
  m.className = 'modal show';
  m.innerHTML = `<div class="dialog rdmUnifiedDialog squadEditDialog">
    <button class="close" type="button" aria-label="Close">×</button>
    <h2>Edit ${esc(mini(p.name))}</h2>
    <div class="squadEditChoices">
      <button class="squadEditChoice" type="button"><span><b>Change Player Photo</b><small>Upload &amp; crop circular portrait</small></span></button>
      <button class="squadEditChoice" type="button"><span><b>Player Details</b><small>Name · Role · Jersey · Bio</small></span></button>
      <button class="squadEditChoice" type="button"><span><b>Player Stats</b><small>Matches · Runs · Wickets · Career</small></span></button>
    </div>
  </div>`;
  document.body.appendChild(m);
  const choices = m.querySelectorAll('.squadEditChoice');
  choices[0].onclick = () => { m.remove(); adminChooseDP(id); };
  choices[1].onclick = () => { m.remove(); editPlayer(id); };
  choices[2].onclick = () => { m.remove(); editStats(id); };
  m.querySelector('.close').onclick = () => m.remove();
  m.onclick = e => { if (e.target === m) m.remove(); };
};
const renderBeforeSquadFull = render;
render = function () {
  renderBeforeSquadFull();
  renderSquadFullProfiles();
};

window.adminRemovePlayer = function (id) {
  if (!rdmAdmin()) return toast('Admin only');
  const p = D.players.find(x => x.id === id);
  if (!p) return;
  const run = async () => {
    try {
      await rdmDB.collection(RCOL.players).doc(id).set({ active: false, updatedMs: Date.now(), updatedAt: rdmStamp() }, { merge: true });
    } catch (err) {
      rdmReportWriteError(err, 'Remove player');
    }
    rdmSetOverrides(o => {
      o.removedPlayerIds = [...new Set([...(o.removedPlayerIds || []), id])];
      if (Array.isArray(o.extraPlayers)) o.extraPlayers = o.extraPlayers.filter(ep => ep.id !== id);
    });
    D.players = D.players.filter(x => x.id !== id);
    document.getElementById('adminPlayerProfileModal')?.classList.remove('show');
    rdmRefresh();
    window.refreshAdminSectionManager?.();
    toast(`${mini(p.name)} removed from active squad`);
  };
  if (typeof window.rdmConfirmModal === 'function') {
    return window.rdmConfirmModal('Remove Player', `Remove ${mini(p.name)} (${id}) from the active squad roster?`, run);
  }
  return run();
};

window.adminOpenPlayerProfile = function (id) {
  if (!rdmAdmin()) return toast('Admin only');
  const p = D.players.find(x => x.id === id);
  if (!p) return;
  let m = document.getElementById('adminPlayerProfileModal');
  if (!m) {
    m = document.createElement('div');
    m.id = 'adminPlayerProfileModal';
    m.className = 'modal';
    m.innerHTML = '<div class="dialog publicDialog adminPlayerDialog"><button class="close" type="button">×</button><div id="adminPlayerProfileBody"></div></div>';
    document.body.appendChild(m);
    m.querySelector('.close').onclick = () => m.classList.remove('show');
    m.onclick = e => { if (e.target === m) m.classList.remove('show'); };
  }
  const st = (typeof XD !== 'undefined' && Array.isArray(XD.stats)) ? (XD.stats.find(z => z.playerId === id) || {}) : {};
  const av = (typeof XD !== 'undefined' && Array.isArray(XD.availability)) ? XD.availability.find(z => z.playerId === id) : null;
  const avStatus = (av?.status || 'NOT SET').toUpperCase();
  const n = v => Number(v || 0) || 0;
  const statsStrip = `<div class="adminPlayerQuickStrip">
    <div><span>Matches</span><strong>${n(st.matches)}</strong></div>
    <div><span>Runs</span><strong>${n(st.runs)}</strong></div>
    <div><span>Wickets</span><strong>${n(st.wickets)}</strong></div>
    <div><span>Best</span><strong>${esc(st.bestBowling || '—')}</strong></div>
    <div><span>Availability</span><strong class="${avStatus === 'AVAILABLE' ? 'is-ok' : avStatus === 'UNAVAILABLE' ? 'is-off' : ''}">${esc(mini(avStatus))}</strong></div>
  </div>`;

  document.getElementById('adminPlayerProfileBody').innerHTML = profileHtml(p, false) + statsStrip + `<div class="adminPlayerActions">
    <button type="button" class="primary" onclick="adminEditPlayerProfile('${esc(p.id)}')">Edit Complete Profile</button>
    <button type="button" class="secondary" onclick="editStats('${esc(p.id)}')">Edit Stats</button>
    <button type="button" class="secondary" onclick="setAvailability('${esc(p.id)}')">Availability</button>
    <button type="button" class="secondary" onclick="adminChooseDP('${esc(p.id)}')">Change Photo</button>
    <button type="button" class="secondary" onclick="adminResetDP('${esc(p.id)}')">Use RDM Logo</button>
    <button type="button" class="tinyBtn danger" onclick="adminRemovePlayer('${esc(p.id)}')">Remove Player</button>
  </div>`;
  m.classList.add('show');
};

window.adminEditPlayerProfile = function (id) {
  if (!rdmAdmin()) return;
  const p = D.players.find(x => x.id === id);
  if (!p) return;
  const s0 = socialObj(p.socials?.[0], 0);
  const s1 = socialObj(p.socials?.[1], 1);
  const s2 = socialObj(p.socials?.[2], 2);
  rdmOpenSimpleModal('Edit Complete Player Profile', [
    { name: 'name', label: 'Player Name', value: p.name || '', required: true },
    { name: 'role', label: 'Playing Role', value: p.role || '', required: true, placeholder: 'BATSMAN / ALL-ROUNDER' },
    { name: 'jersey', label: 'Jersey Number', value: p.jersey || '', placeholder: 'e.g. 08' },
    { name: 'nick', label: 'Nickname', value: p.nick || '', placeholder: 'Player nickname' },
    { name: 'detail', label: 'Playing Style & Detail', type: 'textarea', value: p.detail || '', rows: 2, full: true },
    { name: 'bio', label: 'Player Bio', type: 'textarea', value: p.bio || '', rows: 4, full: true },
    { name: 'social1Name', label: 'Social 1 Platform', value: s0.name || '', placeholder: 'Instagram' },
    { name: 'social1Url', label: 'Social 1 Link', value: s0.url || '', placeholder: 'https://...' },
    { name: 'social2Name', label: 'Social 2 Platform', value: s1.name || '', placeholder: 'YouTube' },
    { name: 'social2Url', label: 'Social 2 Link', value: s1.url || '', placeholder: 'https://...' },
    { name: 'social3Name', label: 'Social 3 Platform', value: s2.name || '', placeholder: 'Facebook' },
    { name: 'social3Url', label: 'Social 3 Link', value: s2.url || '', placeholder: 'https://...' }
  ], async d => {
    const name = String(d.name || '').trim();
    const role = String(d.role || '').trim();
    if (!name || !role) { toast('Player name & role required'); throw Error('VALIDATION'); }
    const rawSlots = [
      { name: String(d.social1Name || '').trim(), url: String(d.social1Url || '').trim() },
      { name: String(d.social2Name || '').trim(), url: String(d.social2Url || '').trim() },
      { name: String(d.social3Name || '').trim(), url: String(d.social3Url || '').trim() }
    ];
    const nextSocials = [];
    for (let i = 0; i < rawSlots.length; i++) {
      const slot = rawSlots[i];
      if (!slot.url) continue;
      if (!safeUrl(slot.url)) { toast(`Valid https:// link required for Social ${i + 1}`); throw Error('VALIDATION'); }
      nextSocials.push({ name: slot.name || ('Social ' + (nextSocials.length + 1)), url: slot.url });
    }
    const next = {
      ...p,
      name,
      role,
      detail: String(d.detail || '').trim(),
      jersey: String(d.jersey || '').trim(),
      nick: String(d.nick || '').trim(),
      bio: String(d.bio || '').trim(),
      socials: nextSocials
    };
    Object.assign(p, {
      name: next.name,
      role: next.role,
      detail: next.detail,
      jersey: next.jersey,
      nick: next.nick,
      bio: next.bio,
      socials: next.socials
    });
    const now = Date.now();
    try {
      await rdmDB.collection(RCOL.players).doc(p.id).set({
        id: p.id, name: p.name, role: p.role, detail: p.detail, jersey: p.jersey, updatedMs: now, updatedAt: rdmStamp()
      }, { merge: true });
    } catch (err) {
      rdmReportWriteError(err, 'TeamPlayer save');
    }
    const synced = await rdmProfileWrite(next, { name: p.name, role: p.role, detail: p.detail });
    rdmRefresh();
    if (document.getElementById('adminPlayerProfileModal')?.classList.contains('show')) {
      window.adminOpenPlayerProfile(id);
    }
    if (synced) toast('Player profile saved & synced');
  });
};
