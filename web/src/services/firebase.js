import {
  APP_BUILD_INFO,
  CLUB_INFO,
  DEFAULT_SOCIALS,
  PLAYER_DEFAULTS,
  REMOTE_VERSION_JSON_URL,
  SEED_HONOURS,
  SEED_PLAYERS,
  compareVersions,
  isLegacyBrokenImage,
  resolveLoginIdentifier
} from '../data/club.js';

function getAuth() {
  return window.rdmAuth || (typeof rdmAuth !== 'undefined' ? rdmAuth : null);
}

function getDB() {
  return window.rdmDB || (typeof rdmDB !== 'undefined' ? rdmDB : null);
}

function serverStamp() {
  return window.firebase?.firestore?.FieldValue?.serverTimestamp?.() || new Date();
}

const mapDoc = doc => ({ ...doc.data(), _docId: doc.id });

export const state = {
  ready: false,
  loadingData: false,
  loadError: '',
  authChecked: false,
  user: null,
  account: null,
  role: 'guest',
  playerId: null,
  brandLogo: CLUB_INFO.logoPath,
  apkDownloadUrl: CLUB_INFO.apkDownloadUrl,
  apkReleasesUrl: CLUB_INFO.apkReleasesUrl,
  appVersion: APP_BUILD_INFO.versionName,
  appVersionCode: APP_BUILD_INFO.versionCode,
  updateNotes: '',
  forceUpdate: false,
  remoteVersionInfo: null,
  players: SEED_PLAYERS.map(p => ({ ...p })),
  matches: [],
  news: [],
  updates: [],
  honours: SEED_HONOURS.map(h => ({ ...h })),
  gallery: [],
  socials: DEFAULT_SOCIALS.map(s => ({ ...s })),
  stats: [],
  achievements: [],
  availability: [],
  lineups: [],
  records: [],
  tournaments: [],
  opponents: []
};

export function isVerifiedAdmin() {
  return Boolean(
    state.user &&
    state.account &&
    state.account.active === true &&
    state.account.role === 'admin' &&
    state.role === 'admin'
  );
}

export function getVerifiedPlayer() {
  if (!state.user || !state.account || state.account.active !== true || state.role !== 'player' || !state.playerId) {
    return null;
  }
  return state.players.find(p => p.id === state.playerId) || null;
}

function mergeSeedPlayers(remoteDocs, profileDocs, uid) {
  const canonicalOrder = new Map(SEED_PLAYERS.map((p, idx) => [p.id, idx + 1]));
  const canonicalById = new Map(SEED_PLAYERS.map(p => [p.id, p]));

  let list;
  if (remoteDocs.length > 0) {
    list = remoteDocs.map(d => {
      const base = canonicalById.get(d.id);
      return {
        id: d.id,
        name: d.name || base?.name || d.id,
        role: d.role || base?.role || '',
        detail: d.detail || base?.detail || '',
        jersey: d.jersey ?? base?.jersey ?? '',
        image: isLegacyBrokenImage(d.image) ? '' : (d.image || ''),
        nick: '',
        bio: '',
        socials: [],
        order: typeof d.order === 'number' ? d.order : (canonicalOrder.get(d.id) || 999),
        active: d.active !== false,
        _docId: d._docId || d.id
      };
    });
    SEED_PLAYERS.forEach(seedP => {
      if (!list.some(p => p.id === seedP.id)) {
        list.push({ ...seedP });
      }
    });
  } else {
    list = SEED_PLAYERS.map(p => ({ ...p }));
  }

  list.sort((a, b) => (a.order || 999) - (b.order || 999));

  const profileTime = pr => {
    if (typeof pr?.updatedMs === 'number') return pr.updatedMs;
    if (typeof pr?.updatedAt?.toMillis === 'function') return pr.updatedAt.toMillis();
    if (typeof pr?.updatedAt?.seconds === 'number') return pr.updatedAt.seconds * 1000;
    return 0;
  };
  const sortedProfiles = [...profileDocs].sort((a, b) => {
    const dt = profileTime(a) - profileTime(b);
    if (dt !== 0) return dt;
    const aMine = uid && a._docId === uid ? 1 : 0;
    const bMine = uid && b._docId === uid ? 1 : 0;
    return aMine - bMine;
  });

  sortedProfiles.forEach(pr => {
    const target = list.find(p => p.id === pr.playerId);
    if (!target) return;
    if (pr.jersey !== undefined && pr.jersey !== null && pr.jersey !== '') target.jersey = String(pr.jersey);
    if (pr.nick !== undefined && pr.nick !== null && pr.nick !== '') target.nick = String(pr.nick);
    if (pr.bio !== undefined && pr.bio !== null && pr.bio !== '') target.bio = String(pr.bio);
    if ('image' in pr && pr.image !== undefined && pr.image !== null) {
      target.image = isLegacyBrokenImage(pr.image) ? '' : String(pr.image);
    }
    if (Array.isArray(pr.socials)) {
      target.socials = pr.socials.slice(0, 3);
    }
    target._profileUid = pr._docId;
  });

  list.forEach(p => {
    const def = PLAYER_DEFAULTS[p.id];
    if (def) {
      if (!p.nick) p.nick = def.nick;
      if (!p.bio) p.bio = def.bio;
    }
  });

  return list.filter(p => p.active !== false);
}

let cachedPlayerDocs = [];
let cachedProfileDocs = [];
let realtimeUnsubs = [];

function applyPlayersAndProfiles() {
  const uid = getAuth()?.currentUser?.uid || '';
  state.players = mergeSeedPlayers(cachedPlayerDocs, cachedProfileDocs, uid);
}

export function subscribeClubDataRealtime(onUpdate) {
  const db = getDB();
  if (!db) return () => {};

  realtimeUnsubs.forEach(fn => { try { fn(); } catch (_) {} });
  realtimeUnsubs = [];

  let timer = null;
  const trigger = () => {
    if (typeof onUpdate !== 'function') return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      state.ready = true;
      onUpdate();
    }, 50);
  };

  const watch = (col, handler) => {
    try {
      const unsub = db.collection(col).onSnapshot(
        snap => {
          handler(snap.docs.map(mapDoc));
          trigger();
        },
        () => {}
      );
      realtimeUnsubs.push(unsub);
    } catch (_) {}
  };

  watch('TeamPlayers', docs => {
    cachedPlayerDocs = docs;
    applyPlayersAndProfiles();
  });
  watch('PlayerProfiles', docs => {
    cachedProfileDocs = docs;
    applyPlayersAndProfiles();
  });
  watch('Matches', docs => {
    state.matches = docs.sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
  });
  watch('News', docs => {
    state.news = docs.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || (b.createdMs || 0) - (a.createdMs || 0));
  });
  watch('Honours', docs => {
    state.honours = docs.length ? docs.sort((a, b) => (a.order || 999) - (b.order || 999)) : SEED_HONOURS.map(h => ({ ...h }));
  });
  watch('Gallery', docs => {
    state.gallery = docs.sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
  });
  watch('Socials', docs => {
    state.socials = docs.length ? docs.sort((a, b) => (a.order || 999) - (b.order || 999)) : DEFAULT_SOCIALS.map(s => ({ ...s }));
  });
  watch('PlayerStats', docs => { state.stats = docs; });
  watch('Achievements', docs => {
    state.achievements = docs.sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
  });
  watch('Availability', docs => { state.availability = docs; });
  watch('PlayingXI', docs => {
    state.lineups = docs.sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
  });
  watch('TeamRecords', docs => {
    state.records = docs.sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
  });
  watch('Tournaments', docs => {
    state.tournaments = docs.sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
  });
  watch('Opponents', docs => {
    state.opponents = docs.sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
  });
  watch('Updates', docs => {
    state.updates = docs
      .filter(d => d._docId !== '_news_updates_swap_v1')
      .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || (b.createdMs || 0) - (a.createdMs || 0));
  });

  try {
    const unsubBrand = db.collection('BrandSettings').doc('main').onSnapshot(
      snap => {
        if (snap.exists) {
          applyBrandSettingsData(snap.data() || {});
          trigger();
        }
      },
      () => {}
    );
    realtimeUnsubs.push(unsubBrand);
  } catch (_) {}

  return () => {
    clearTimeout(timer);
    realtimeUnsubs.forEach(fn => { try { fn(); } catch (_) {} });
    realtimeUnsubs = [];
  };
}

export async function loadClubData() {
  const db = getDB();
  if (!db) {
    state.loadError = 'Live sync is currently unavailable. Showing verified squad and club data.';
    state.ready = true;
    return false;
  }

  state.loadingData = true;
  state.loadError = '';

  try {
    const [
      ps, ms, ns, hs, gs, ss,
      profiles, stats, ach, avail, xi,
      records, tourn, opp, upds
    ] = await Promise.all([
      db.collection('TeamPlayers').get(),
      db.collection('Matches').get(),
      db.collection('News').get(),
      db.collection('Honours').get(),
      db.collection('Gallery').get(),
      db.collection('Socials').get(),
      db.collection('PlayerProfiles').get(),
      db.collection('PlayerStats').get(),
      db.collection('Achievements').get(),
      db.collection('Availability').get(),
      db.collection('PlayingXI').get(),
      db.collection('TeamRecords').get(),
      db.collection('Tournaments').get(),
      db.collection('Opponents').get(),
      db.collection('Updates').get()
    ]);

    cachedPlayerDocs = ps.docs.map(mapDoc);
    cachedProfileDocs = profiles.docs.map(mapDoc);
    applyPlayersAndProfiles();
    state.matches = ms.docs.map(mapDoc).sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
    state.news = ns.docs.map(mapDoc).sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || (b.createdMs || 0) - (a.createdMs || 0));
    state.honours = !hs.empty
      ? hs.docs.map(mapDoc).sort((a, b) => (a.order || 999) - (b.order || 999))
      : SEED_HONOURS.map(h => ({ ...h }));
    state.gallery = gs.docs.map(mapDoc).sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
    state.socials = !ss.empty
      ? ss.docs.map(mapDoc).sort((a, b) => (a.order || 999) - (b.order || 999))
      : DEFAULT_SOCIALS.map(s => ({ ...s }));
    state.stats = stats.docs.map(mapDoc);
    state.achievements = ach.docs.map(mapDoc).sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
    state.availability = avail.docs.map(mapDoc);
    state.lineups = xi.docs.map(mapDoc).sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
    state.records = records.docs.map(mapDoc).sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
    state.tournaments = tourn.docs.map(mapDoc).sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
    state.opponents = opp.docs.map(mapDoc).sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));
    state.updates = upds.docs
      .filter(d => d.id !== '_news_updates_swap_v1')
      .map(mapDoc)
      .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || (b.createdMs || 0) - (a.createdMs || 0));

    try {
      const bSnap = await db.collection('BrandSettings').doc('main').get();
      if (bSnap.exists) {
        applyBrandSettingsData(bSnap.data() || {});
      }
    } catch (_) {
      state.brandLogo = CLUB_INFO.logoPath;
    }

    state.ready = true;
    return true;
  } catch (err) {
    console.error('Club data load failed', err);
    state.loadError = 'Unable to sync live club updates right now. Showing verified squad roster.';
    state.ready = true;
    return false;
  } finally {
    state.loadingData = false;
  }
}

export async function verifyAccountRole(user) {
  const auth = getAuth();
  const db = getDB();
  if (!user || !db) {
    state.user = null;
    state.account = null;
    state.role = 'guest';
    state.playerId = null;
    return { ok: false, reason: 'NOT_SIGNED_IN' };
  }

  try {
    const snap = await db.collection('Accounts').doc(user.uid).get();
    if (!snap.exists) {
      await auth?.signOut?.();
      state.user = null;
      state.account = null;
      state.role = 'guest';
      state.playerId = null;
      return { ok: false, reason: 'NO_ACCOUNT_RECORD' };
    }

    const data = snap.data() || {};
    if (data.active !== true) {
      await auth?.signOut?.();
      state.user = null;
      state.account = null;
      state.role = 'guest';
      state.playerId = null;
      return { ok: false, reason: 'ACCOUNT_INACTIVE' };
    }

    if (data.role === 'admin') {
      state.user = user;
      state.account = data;
      state.role = 'admin';
      state.playerId = data.playerId || null;
      return { ok: true, role: 'admin', account: data };
    }

    const mappedPlayerId = typeof data.playerId === 'string' ? data.playerId.trim() : '';
    const playerExists = mappedPlayerId && (
      state.players.some(p => p.id === mappedPlayerId) ||
      SEED_PLAYERS.some(p => p.id === mappedPlayerId)
    );

    if (playerExists) {
      state.user = user;
      state.account = data;
      state.role = 'player';
      state.playerId = mappedPlayerId;
      return { ok: true, role: 'player', playerId: mappedPlayerId, account: data };
    }

    await auth?.signOut?.();
    state.user = null;
    state.account = null;
    state.role = 'guest';
    state.playerId = null;
    return { ok: false, reason: 'INVALID_ROLE_MAPPING' };
  } catch (err) {
    console.error('Account verification failed', err);
    await auth?.signOut?.();
    state.user = null;
    state.account = null;
    state.role = 'guest';
    state.playerId = null;
    return { ok: false, reason: err?.code || 'VERIFICATION_ERROR' };
  }
}

export async function loginWithEmailPassword(identifier, password) {
  const auth = getAuth();
  if (!auth) throw new Error('FIREBASE_UNAVAILABLE');

  const cleanEmail = resolveLoginIdentifier(identifier);
  const cleanPass = String(password || '');
  if (!cleanEmail || !cleanPass) throw new Error('EMAIL_PASSWORD_REQUIRED');

  const cred = await auth.signInWithEmailAndPassword(cleanEmail, cleanPass);
  const check = await verifyAccountRole(cred.user);
  if (!check.ok) {
    const err = new Error(check.reason || 'ACCOUNT_NOT_AUTHORIZED');
    err.code = check.reason;
    throw err;
  }
  await loadClubData();
  return check;
}

export async function sendResetPasswordEmail(identifier) {
  const auth = getAuth();
  if (!auth) throw new Error('FIREBASE_UNAVAILABLE');
  const cleanEmail = resolveLoginIdentifier(identifier);
  if (!cleanEmail) throw new Error('EMAIL_REQUIRED');
  await auth.sendPasswordResetEmail(cleanEmail);
}

export async function logoutAccount() {
  const auth = getAuth();
  if (auth) {
    await auth.signOut();
  }
  state.user = null;
  state.account = null;
  state.role = 'guest';
  state.playerId = null;
}

export function subscribeAuthChanges(onChange) {
  const auth = getAuth();
  if (!auth) {
    state.authChecked = true;
    onChange({ role: 'guest', verified: false });
    return () => {};
  }
  return auth.onAuthStateChanged(async user => {
    if (!user) {
      state.user = null;
      state.account = null;
      state.role = 'guest';
      state.playerId = null;
      state.authChecked = true;
      onChange({ role: 'guest', verified: false });
      return;
    }
    const res = await verifyAccountRole(user);
    state.authChecked = true;
    onChange({
      role: res.ok ? res.role : 'guest',
      verified: res.ok,
      reason: res.ok ? '' : res.reason
    });
  });
}

export function canEditPlayerPortal(playerId) {
  if (!playerId || !state.user) return false;
  if (isVerifiedAdmin()) return true;
  return Boolean(state.account && state.account.active === true && state.role === 'player' && state.playerId === playerId);
}

export async function savePlayerPortalProfile(targetPlayerId, updates) {
  const db = getDB();
  if (!db || !state.user) throw new Error('AUTH_REQUIRED');
  if (!canEditPlayerPortal(targetPlayerId)) throw new Error('NOT_ALLOWED');

  const player = state.players.find(p => p.id === targetPlayerId) || SEED_PLAYERS.find(p => p.id === targetPlayerId);
  if (!player) throw new Error('PLAYER_NOT_FOUND');

  const docId = isVerifiedAdmin()
    ? (player._profileUid || `profile_${targetPlayerId}`)
    : state.user.uid;

  const cleanSocials = Array.isArray(updates.socials)
    ? updates.socials.slice(0, 3).map(s => ({
        name: String(s?.name || '').trim() || 'Social',
        url: String(s?.url || '').trim()
      }))
    : (player.socials || []).slice(0, 3);

  const payload = {
    playerId: targetPlayerId,
    jersey: String(updates.jersey ?? player.jersey ?? '').trim(),
    nick: String(updates.nick ?? player.nick ?? '').trim(),
    bio: String(updates.bio ?? player.bio ?? '').trim(),
    socials: cleanSocials,
    updatedMs: Date.now(),
    updatedAt: serverStamp()
  };

  if ('image' in updates) {
    payload.image = String(updates.image || '');
  }

  await db.collection('PlayerProfiles').doc(docId).set(payload, { merge: true });
  await loadClubData();
}

export async function savePlayerAvailability(playerId, status) {
  const db = getDB();
  if (!db || !state.user) throw new Error('AUTH_REQUIRED');
  const cleanStatus = String(status || '').toUpperCase();
  if (!['AVAILABLE', 'UNAVAILABLE'].includes(cleanStatus)) throw new Error('INVALID_STATUS');

  if (!isVerifiedAdmin() && !(state.role === 'player' && state.playerId === playerId)) {
    throw new Error('NOT_ALLOWED');
  }

  await db.collection('Availability').doc(playerId).set({
    playerId,
    status: cleanStatus,
    updatedAt: serverStamp()
  }, { merge: true });

  await loadClubData();
}

export async function adminUpsertDoc(collection, docId, payload) {
  const db = getDB();
  if (!db || !isVerifiedAdmin()) throw new Error('ADMIN_REQUIRED');

  const data = { ...payload, updatedAt: serverStamp() };
  delete data._docId;

  if (docId) {
    await db.collection(collection).doc(docId).set(data, { merge: true });
  } else {
    await db.collection(collection).add({ ...data, createdMs: data.createdMs || Date.now() });
  }
  await loadClubData();
}

export async function adminUpdatePlayer(playerId, fields) {
  const db = getDB();
  if (!db || !isVerifiedAdmin()) throw new Error('ADMIN_REQUIRED');

  const playerPayload = {
    id: playerId,
    name: String(fields.name || '').trim(),
    role: String(fields.role || '').trim(),
    detail: String(fields.detail || '').trim(),
    jersey: String(fields.jersey || '').trim(),
    active: true,
    updatedAt: serverStamp()
  };
  if ('image' in fields && fields.image !== undefined) {
    playerPayload.image = fields.image;
  }
  await db.collection('TeamPlayers').doc(playerId).set(playerPayload, { merge: true });

  const target = state.players.find(p => p.id === playerId);
  const profileDocId = target?._profileUid || `profile_${playerId}`;
  const profPayload = {
    playerId,
    jersey: playerPayload.jersey,
    nick: String(fields.nick ?? target?.nick ?? '').trim(),
    bio: String(fields.bio ?? target?.bio ?? '').trim(),
    updatedMs: Date.now(),
    updatedAt: serverStamp()
  };
  if ('image' in fields && fields.image !== undefined) {
    profPayload.image = fields.image;
  }
  await db.collection('PlayerProfiles').doc(profileDocId).set(profPayload, { merge: true });
  await loadClubData();
}

export async function adminSaveBrandSettings(fields) {
  const db = getDB();
  if (!db || !isVerifiedAdmin()) throw new Error('ADMIN_REQUIRED');
  const parsedCode = Number(fields.appVersionCode);
  const payload = {
    appVersion: String(fields.appVersion || CLUB_INFO.appVersion).trim(),
    appVersionCode: Number.isFinite(parsedCode) && parsedCode > 0 ? parsedCode : state.appVersionCode || APP_BUILD_INFO.versionCode,
    updateNotes: String(fields.updateNotes ?? '').trim(),
    forceUpdate: Boolean(fields.forceUpdate),
    apkDownloadUrl: String(fields.apkDownloadUrl || CLUB_INFO.apkDownloadUrl).trim(),
    apkReleasesUrl: String(fields.apkReleasesUrl || CLUB_INFO.apkReleasesUrl).trim(),
    updatedMs: Date.now(),
    updatedAt: serverStamp()
  };
  if (fields.logo) {
    payload.logo = String(fields.logo);
  }
  await db.collection('BrandSettings').doc('main').set(payload, { merge: true });
  await loadClubData();
}

function applyBrandSettingsData(bData) {
  if (!bData) return;
  if (bData.logo && !isLegacyBrokenImage(bData.logo)) {
    state.brandLogo = bData.logo;
  }
  if (bData.apkDownloadUrl && /^https?:\/\//i.test(String(bData.apkDownloadUrl).trim())) {
    state.apkDownloadUrl = String(bData.apkDownloadUrl).trim();
  }
  if (bData.apkReleasesUrl && /^https?:\/\//i.test(String(bData.apkReleasesUrl).trim())) {
    state.apkReleasesUrl = String(bData.apkReleasesUrl).trim();
  }
  if (bData.appVersion) {
    state.appVersion = String(bData.appVersion).trim();
  }
  if (Number.isFinite(Number(bData.appVersionCode))) {
    state.appVersionCode = Number(bData.appVersionCode);
  }
  if ('updateNotes' in bData) {
    state.updateNotes = String(bData.updateNotes || '');
  }
  if ('forceUpdate' in bData) {
    state.forceUpdate = Boolean(bData.forceUpdate);
  }
}

export function evaluateAvailableUpdate() {
  const candidates = [];

  if (state.appVersion || state.appVersionCode) {
    candidates.push({
      versionName: state.appVersion || APP_BUILD_INFO.versionName,
      versionCode: Number(state.appVersionCode) || APP_BUILD_INFO.versionCode,
      apkDownloadUrl: state.apkDownloadUrl || CLUB_INFO.apkDownloadUrl,
      apkReleasesUrl: state.apkReleasesUrl || CLUB_INFO.apkReleasesUrl,
      notes: state.updateNotes || '',
      forceUpdate: Boolean(state.forceUpdate)
    });
  }

  if (state.remoteVersionInfo) {
    candidates.push(state.remoteVersionInfo);
  }

  let best = {
    versionName: APP_BUILD_INFO.versionName,
    versionCode: APP_BUILD_INFO.versionCode,
    apkDownloadUrl: state.apkDownloadUrl || CLUB_INFO.apkDownloadUrl,
    apkReleasesUrl: state.apkReleasesUrl || CLUB_INFO.apkReleasesUrl,
    notes: '',
    forceUpdate: false
  };

  candidates.forEach(c => {
    const cVer = String(c.versionName || '0.0.0').trim();
    const cCode = Number(c.versionCode) || 0;
    const isNewerVer = compareVersions(best.versionName, cVer) < 0;
    const isSameOrNewerWithHigherCode = compareVersions(best.versionName, cVer) === 0 && cCode > best.versionCode;
    if (isNewerVer || isSameOrNewerWithHigherCode || cCode > best.versionCode) {
      best = {
        versionName: cVer || best.versionName,
        versionCode: Math.max(cCode, best.versionCode),
        apkDownloadUrl: /^https?:\/\//i.test(String(c.apkDownloadUrl || '')) ? String(c.apkDownloadUrl).trim() : best.apkDownloadUrl,
        apkReleasesUrl: /^https?:\/\//i.test(String(c.apkReleasesUrl || '')) ? String(c.apkReleasesUrl).trim() : best.apkReleasesUrl,
        notes: c.notes || best.notes,
        forceUpdate: Boolean(c.forceUpdate || best.forceUpdate)
      };
    }
  });

  const hasNewerVersion =
    compareVersions(APP_BUILD_INFO.versionName, best.versionName) < 0 ||
    Number(best.versionCode) > Number(APP_BUILD_INFO.versionCode);

  return {
    hasUpdate: hasNewerVersion,
    currentVersion: APP_BUILD_INFO.versionName,
    currentCode: APP_BUILD_INFO.versionCode,
    latestVersion: best.versionName,
    latestCode: best.versionCode,
    apkUrl: best.apkDownloadUrl,
    releasesUrl: best.apkReleasesUrl,
    notes: best.notes || 'A newer version of RDM Official Android APK is ready to download.',
    forceUpdate: best.forceUpdate
  };
}

export async function checkRemoteAppVersion() {
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = controller ? setTimeout(() => controller.abort(), 5000) : null;
  const urls = [];
  if (typeof window !== 'undefined' && /^https?:$/i.test(window.location.protocol)) {
    urls.push(`./version.json?t=${Date.now()}`);
  }
  urls.push(`${REMOTE_VERSION_JSON_URL}?t=${Date.now()}`);

  for (const url of urls) {
    try {
      const res = await fetch(url, {
        cache: 'no-store',
        signal: controller?.signal
      });
      if (!res.ok) continue;
      const data = await res.json();
      if (data && (data.versionName || data.versionCode)) {
        state.remoteVersionInfo = {
          versionName: String(data.versionName || APP_BUILD_INFO.versionName).trim(),
          versionCode: Number(data.versionCode) || APP_BUILD_INFO.versionCode,
          apkDownloadUrl: String(data.apkDownloadUrl || CLUB_INFO.apkDownloadUrl).trim(),
          apkReleasesUrl: String(data.apkReleasesUrl || CLUB_INFO.apkReleasesUrl).trim(),
          notes: String(data.notes || ''),
          forceUpdate: Boolean(data.forceUpdate)
        };
        break;
      }
    } catch (_) {}
  }
  if (timer) clearTimeout(timer);
  return evaluateAvailableUpdate();
}

export async function adminDeleteDoc(collection, docId) {
  const db = getDB();
  if (!db || !isVerifiedAdmin() || !docId) throw new Error('ADMIN_REQUIRED');
  await db.collection(collection).doc(docId).delete();
  await loadClubData();
}

export async function adminRemovePlayer(playerId) {
  const db = getDB();
  if (!db || !isVerifiedAdmin() || !playerId) throw new Error('ADMIN_REQUIRED');
  const isSeed = SEED_PLAYERS.some(p => p.id === playerId);
  if (isSeed) {
    await db.collection('TeamPlayers').doc(playerId).set({
      id: playerId,
      active: false,
      updatedAt: serverStamp()
    }, { merge: true });
  } else {
    await db.collection('TeamPlayers').doc(playerId).delete();
  }
  await loadClubData();
}

export async function adminSetPinned(collection, targetId, pinned) {
  const db = getDB();
  if (!db || !isVerifiedAdmin()) throw new Error('ADMIN_REQUIRED');
  if (pinned) {
    const snap = await db.collection(collection).where('pinned', '==', true).get();
    if (!snap.empty) {
      const batch = db.batch();
      snap.docs.forEach(d => {
        if (d.id !== targetId) {
          batch.set(d.ref, { pinned: false, updatedAt: serverStamp() }, { merge: true });
        }
      });
      await batch.commit();
    }
  }
  await db.collection(collection).doc(targetId).set({ pinned: !!pinned, updatedAt: serverStamp() }, { merge: true });
  await loadClubData();
}

export function compressImageFile(file, maxDim = 960, quality = 0.74) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve('');
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('READ_FAILED'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('IMAGE_INVALID'));
      img.onload = () => {
        const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        let out = canvas.toDataURL('image/jpeg', quality);
        if (out.length > 720000) out = canvas.toDataURL('image/jpeg', 0.56);
        if (out.length > 900000) return reject(new Error('IMAGE_TOO_LARGE'));
        resolve(out);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
