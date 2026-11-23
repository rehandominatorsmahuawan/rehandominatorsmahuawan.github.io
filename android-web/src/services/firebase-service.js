import {
  APP_BUILD_INFO,
  APK_ADMIN_EMAILS,
  CLUB_INFO,
  DEFAULT_SOCIALS,
  PLAYER_DEFAULTS,
  REMOTE_OTA_MANIFEST_URL,
  REMOTE_VERSION_JSON_URL,
  SEED_HONOURS,
  SEED_PLAYERS,
  compareVersions,
  isLegacyBrokenImage,
  resolveLoginIdentifier
} from '../data/roster.js';
import {
  checkAndApplyOtaUpdate,
  getNativeAppVersionInfo
} from './native-bridge.js';

const APK_ADMIN_PW_HASH = '73442ec47da8d19de47638438c8563bb266e880cf4ce8cafa5579ed20d2b94be';
const APK_ADMIN_SESSION_KEY = 'rdm_apk_admin_unlocked_v1';
const APK_PLAYER_SESSION_KEY = 'rdm_apk_player_unlocked_v1';

const APK_PLAYER_PW_HASHES = {
  RDM001: '6fb67b0874290083bb94886486ada2535de541c56fca8eb91b7134bb5014019a',
  RDM002: '0df79a87814b5ff72554d539b8d94d6592ae84e8145cda22111ee55ffa8876a0',
  RDM003: 'c13d891485885373a0c125b510bf6491c3f22e115da1c1b8f0ab95cabdf572d9',
  RDM004: 'f71cf8dbeb14f2e8c69484f6ff80d20b1402943f084f713e590ea9abb6afe2fc',
  RDM005: '561ba1e989a02839b4ed929616fb54fb8cb6414cee6b5e43434162151b853c8d',
  RDM006: '6ce4bb6723456794764b11952958ead6e243848a389cf97ab13040e4d56389b9',
  RDM007: '1fefa430168b7419ae9b7596b9ae51d25989d81a89f7981afe6bc21f69a22353',
  RDM008: 'b391f2d79a5827d539596a1005111febf86a0e2324c6265c700a3020188122cb',
  RDM009: 'd7bb73041868d2bc129b7d7935e28524d5d168f1d6beb1b2c56efef08fb2194d',
  RDM010: '48ddb3c347f15fc29dd161e6ac9f988827731db86fd78b6a6a9833c977e2aecb',
  RDM011: '7f88a18f219f70c47ad1ba9f00ab03bcd710d426aa42a43064ac80dd66cd80e9',
  RDM012: 'd1ff943fd5199f473569af348a31630842b0b935b4da36e94ec47b9a431f2355',
  RDM013: '23a060a79f69510bee9ad34ed809f96336ad606d5e9f14436253460194569145',
  RDM014: 'f06575828bd55e8aceaeab8af0b48d93a6d6b9f714f68ea7717de532a7f9073f',
  RDM015: '41d5c7c2a1bda007fc24ce1fa8f911ce69e457251733b74d12c9c10ae496dc53',
  RDM016: 'e44b33be11c30c3ec35638ddde517ad1338c88557f80f795f0c5b05e5552a6a0',
  RDM017: '2b4eff690afa58c019fee95e6bddf75880f48315fc4f83bbb7f9214ca8b25790'
};

function sha256Fallback(ascii) {
  function rightRotate(value, amount) { return (value >>> amount) | (value << (32 - amount)); }
  const mathPow = Math.pow;
  const maxWord = mathPow(2, 32);
  let result = '';
  const words = [];
  const asciiBitLength = ascii.length * 8;
  const hash = [];
  const k = [];
  let primeCounter = 0;
  const isComposite = {};
  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (let i = 0; i < 313; i += candidate) isComposite[i] = candidate;
      hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }
  ascii += '\x80';
  while (ascii.length % 64 - 56) ascii += '\x00';
  for (let i = 0; i < ascii.length; i++) {
    const j = ascii.charCodeAt(i);
    words[i >> 2] |= j << ((3 - i) % 4) * 8;
  }
  words[words.length] = ((asciiBitLength / maxWord) | 0);
  words[words.length] = asciiBitLength;
  for (let j = 0; j < words.length;) {
    const w = words.slice(j, j += 16);
    const oldHash = hash.slice(0);
    for (let i = 0; i < 64; i++) {
      const w15 = w[i - 15], w2 = w[i - 2];
      const a = hash[0], e = hash[4];
      const temp1 = hash[7]
        + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25))
        + ((e & hash[5]) ^ ((~e) & hash[6]))
        + k[i]
        + (w[i] = (i < 16) ? w[i] : (
          w[i - 16]
          + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3))
          + w[i - 7]
          + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))
        ) | 0);
      const temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
        + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
      hash[7] = hash[6]; hash[6] = hash[5]; hash[5] = hash[4];
      hash[4] = (hash[3] + temp1) | 0;
      hash[3] = hash[2]; hash[2] = hash[1]; hash[1] = hash[0];
      hash[0] = (temp1 + temp2) | 0;
    }
    for (let i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
  }
  for (let i = 0; i < 8; i++) {
    for (let j = 3; j + 1; j--) {
      const b = (hash[i] >> (j * 8)) & 255;
      result += ((b < 16) ? 0 : '') + b.toString(16);
    }
  }
  return result;
}

async function sha256Hex(str) {
  const raw = String(str ?? '');
  try {
    if (globalThis.crypto?.subtle?.digest) {
      const buf = await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode(raw));
      return Array.from(new Uint8Array(buf), b => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (_) {}
  const utf8 = unescape(encodeURIComponent(raw));
  return sha256Fallback(utf8);
}

function readApkAdminFlag() {
  try {
    return localStorage.getItem(APK_ADMIN_SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

function writeApkAdminFlag(active) {
  try {
    if (active) localStorage.setItem(APK_ADMIN_SESSION_KEY, '1');
    else localStorage.removeItem(APK_ADMIN_SESSION_KEY);
  } catch {}
}

function readApkPlayerId() {
  try {
    const raw = String(localStorage.getItem(APK_PLAYER_SESSION_KEY) || '').trim().toUpperCase();
    return Object.prototype.hasOwnProperty.call(APK_PLAYER_PW_HASHES, raw) ? raw : null;
  } catch {
    return null;
  }
}

function writeApkPlayerId(playerId) {
  try {
    if (playerId) localStorage.setItem(APK_PLAYER_SESSION_KEY, String(playerId).trim().toUpperCase());
    else localStorage.removeItem(APK_PLAYER_SESSION_KEY);
  } catch {}
}

function getAuth() {
  return window.rdmAuth || (typeof rdmAuth !== 'undefined' ? rdmAuth : null);
}

function getDB() {
  return window.rdmDB || (typeof rdmDB !== 'undefined' ? rdmDB : null);
}

function serverStamp() {
  return window.firebase?.firestore?.FieldValue?.serverTimestamp?.() || new Date();
}

function sanitizePayload(obj) {
  const clean = {};
  if (!obj || typeof obj !== 'object') return clean;
  for (const [k, v] of Object.entries(obj)) {
    if (k === '_docId' || k === '_profileUid' || k === '_col') continue;
    if (v === undefined || v === null) continue;
    clean[k] = v;
  }
  return clean;
}

export function isPermissionDeniedError(err) {
  const code = String(err?.code || '');
  const msg = String(err?.message || '');
  return code === 'permission-denied' || /Missing or insufficient permissions|Missing cloud permissions/i.test(msg);
}

function mapFirestoreWriteError(err) {
  if (isPermissionDeniedError(err)) {
    const out = new Error(
      'Missing cloud permissions: connect Firebase Cloud Sync below or publish updated firestore.rules.'
    );
    out.code = 'permission-denied';
    return out;
  }
  return err instanceof Error ? err : new Error(String(err?.message || 'Sync failed'));
}

const mapDoc = doc => ({ ...doc.data(), _docId: doc.id });

export const state = {
  ready: false,
  loadingData: false,
  loadError: '',
  authChecked: false,
  apkAdminUnlocked: readApkAdminFlag(),
  apkPlayerId: readApkPlayerId(),
  user: null,
  account: null, // Verified Accounts/{uid} doc
  role: 'guest', // 'guest' | 'player' | 'admin'
  playerId: null,
  brandLogo: CLUB_INFO.logoPath,
  apkDownloadUrl: CLUB_INFO.apkDownloadUrl,
  apkReleasesUrl: CLUB_INFO.apkReleasesUrl,
  appVersion: APP_BUILD_INFO.versionName,
  appVersionCode: APP_BUILD_INFO.versionCode,
  nativeVersionName: null,
  nativeVersionCode: null,
  otaBuild: 0,
  otaVersion: '',
  canInstallPackages: false,
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

export function isFirebaseCloudAdmin() {
  return Boolean(
    state.user &&
    state.account &&
    state.account.active === true &&
    state.account.role === 'admin' &&
    state.role === 'admin'
  );
}

export function isVerifiedAdmin() {
  return Boolean(isFirebaseCloudAdmin() || state.apkAdminUnlocked);
}

export function isFirebaseCloudPlayer(playerId = '') {
  const ok = Boolean(
    state.user &&
    state.account &&
    state.account.active === true &&
    state.role === 'player' &&
    state.playerId
  );
  if (!ok) return false;
  return playerId ? state.playerId === playerId : true;
}

export function getVerifiedPlayerId() {
  if (isFirebaseCloudPlayer()) return state.playerId;
  if (state.apkPlayerId) return state.apkPlayerId;
  return null;
}

export function isVerifiedPlayer(playerId = '') {
  const activeId = getVerifiedPlayerId();
  if (!activeId) return false;
  return playerId ? activeId === playerId : true;
}

export function getVerifiedPlayer() {
  const activeId = getVerifiedPlayerId();
  if (!activeId) return null;
  return state.players.find(p => p.id === activeId) || null;
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
    // Ensure canonical players not yet in Firestore still retain order if present
    SEED_PLAYERS.forEach(seedP => {
      if (!list.some(p => p.id === seedP.id)) {
        list.push({ ...seedP });
      }
    });
  } else {
    list = SEED_PLAYERS.map(p => ({ ...p }));
  }

  list.sort((a, b) => (a.order || 999) - (b.order || 999));

  // Apply PlayerProfiles in chronological order so the most recent update (Player or Admin) wins
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
    if ('jersey' in pr && pr.jersey !== undefined && pr.jersey !== null) target.jersey = String(pr.jersey);
    if ('nick' in pr && pr.nick !== undefined && pr.nick !== null) {
      target.nick = String(pr.nick);
      target._nickCustom = true;
    }
    if ('bio' in pr && pr.bio !== undefined && pr.bio !== null) {
      target.bio = String(pr.bio);
      target._bioCustom = true;
    }
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
      if (!p._nickCustom && !p.nick) p.nick = def.nick;
      if (!p._bioCustom && !p.bio) p.bio = def.bio;
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
    state.loadError = 'Firebase is unavailable. Check your internet connection and retry.';
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

    // Graceful BrandSettings read — live rules may return PERMISSION_DENIED; keep bundled rdm-logo.png
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
    state.loadError = 'Unable to sync live team data from Firebase. Showing bundled squad roster.';
    state.ready = true;
    return false;
  } finally {
    state.loadingData = false;
  }
}

/**
 * Strictly verify Accounts/{uid} in Firestore. Fail closed on missing, inactive, or invalid role docs.
 */
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

export async function loginAdminWithPassword(password) {
  const cleanPass = String(password || '');
  if (!cleanPass) {
    const err = new Error('PASSWORD_REQUIRED');
    err.code = 'PASSWORD_REQUIRED';
    throw err;
  }

  const digest = await sha256Hex(cleanPass);
  const matched = digest ? digest === APK_ADMIN_PW_HASH : false;
  if (!matched) {
    const err = new Error('INVALID_ADMIN_PASSWORD');
    err.code = 'INVALID_ADMIN_PASSWORD';
    throw err;
  }

  state.apkAdminUnlocked = true;
  state.role = 'admin';
  writeApkAdminFlag(true);

  let cloudSynced = isFirebaseCloudAdmin();
  const auth = getAuth();
  if (auth && !cloudSynced) {
    for (const email of APK_ADMIN_EMAILS) {
      try {
        const cred = await auth.signInWithEmailAndPassword(email, cleanPass);
        const check = await verifyAccountRole(cred.user);
        if (check.ok && check.role === 'admin') {
          cloudSynced = true;
          break;
        }
      } catch (_) {}
    }
  }

  try {
    await loadClubData();
  } catch (_) {}

  return { ok: true, role: 'admin', cloudSynced };
}

export async function loginPlayerWithPassword(playerId, password) {
  const targetId = String(playerId || '').trim().toUpperCase();
  const expected = APK_PLAYER_PW_HASHES[targetId];
  if (!expected) {
    const err = new Error('INVALID_PLAYER_ID');
    err.code = 'INVALID_PLAYER_ID';
    throw err;
  }

  const rawPass = String(password || '');
  const trimmedPass = rawPass.trim();
  if (!trimmedPass) {
    const err = new Error('PASSWORD_REQUIRED');
    err.code = 'PASSWORD_REQUIRED';
    throw err;
  }

  const digestExact = await sha256Hex(rawPass);
  const digestTrim = trimmedPass !== rawPass ? await sha256Hex(trimmedPass) : digestExact;
  const matched = digestExact === expected || digestTrim === expected;
  if (!matched) {
    const err = new Error('INVALID_PLAYER_PASSWORD');
    err.code = 'INVALID_PLAYER_PASSWORD';
    throw err;
  }

  state.apkPlayerId = targetId;
  writeApkPlayerId(targetId);
  if (!isVerifiedAdmin()) {
    state.role = 'player';
    state.playerId = targetId;
  }

  try {
    await loadClubData();
  } catch (_) {}

  return { ok: true, role: 'player', playerId: targetId, cloudSynced: isFirebaseCloudPlayer(targetId) };
}

export async function loginPlayerWithFirebase(identifier, password) {
  const res = await loginWithEmailPassword(identifier, password);
  if (res.role !== 'player' || !res.playerId) {
    if (res.role === 'admin') {
      const err = new Error('This is an Admin account. Use Admin Panel login or choose your Player profile.');
      err.code = 'NOT_PLAYER_ACCOUNT';
      throw err;
    }
    const err = new Error('This Firebase account is not linked to an active Player profile.');
    err.code = 'NOT_PLAYER_ACCOUNT';
    throw err;
  }
  state.apkPlayerId = res.playerId;
  writeApkPlayerId(res.playerId);
  return { ok: true, role: 'player', playerId: res.playerId, cloudSynced: true };
}

export async function connectAdminCloudSync(identifier, password) {
  const res = await loginWithEmailPassword(identifier, password);
  if (res.role !== 'admin') {
    await logoutAccount();
    const err = new Error('This Firebase account is not an active Admin in Accounts/{uid}.');
    err.code = 'NOT_ADMIN_ACCOUNT';
    throw err;
  }
  state.apkAdminUnlocked = true;
  state.role = 'admin';
  writeApkAdminFlag(true);
  return res;
}

export async function sendResetPasswordEmail(identifier) {
  const auth = getAuth();
  if (!auth) throw new Error('FIREBASE_UNAVAILABLE');
  const cleanEmail = resolveLoginIdentifier(identifier);
  if (!cleanEmail) throw new Error('EMAIL_REQUIRED');
  await auth.sendPasswordResetEmail(cleanEmail);
}

export async function logoutPlayerAccount() {
  state.apkPlayerId = null;
  writeApkPlayerId(null);
  if (state.role === 'player' || (state.account && state.account.role === 'player')) {
    const auth = getAuth();
    if (auth) {
      try {
        await auth.signOut();
      } catch (_) {}
    }
    state.user = null;
    state.account = null;
  }
  if (state.apkAdminUnlocked) {
    state.role = 'admin';
    state.playerId = null;
  } else {
    state.role = 'guest';
    state.playerId = null;
  }
}

export async function logoutAccount() {
  state.apkAdminUnlocked = false;
  state.apkPlayerId = null;
  writeApkAdminFlag(false);
  writeApkPlayerId(null);
  const auth = getAuth();
  if (auth) {
    try {
      await auth.signOut();
    } catch (_) {}
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
    if (state.apkAdminUnlocked) {
      state.role = 'admin';
      onChange({ role: 'admin', verified: true });
    } else if (state.apkPlayerId) {
      state.role = 'player';
      state.playerId = state.apkPlayerId;
      onChange({ role: 'player', playerId: state.apkPlayerId, verified: true });
    } else {
      onChange({ role: 'guest', verified: false });
    }
    return () => {};
  }
  return auth.onAuthStateChanged(async user => {
    if (!user) {
      state.user = null;
      state.account = null;
      if (state.apkAdminUnlocked) {
        state.role = 'admin';
        state.playerId = null;
        state.authChecked = true;
        onChange({ role: 'admin', verified: true });
        return;
      }
      if (state.apkPlayerId) {
        state.role = 'player';
        state.playerId = state.apkPlayerId;
        state.authChecked = true;
        onChange({ role: 'player', playerId: state.apkPlayerId, verified: true });
        return;
      }
      state.role = 'guest';
      state.playerId = null;
      state.authChecked = true;
      onChange({ role: 'guest', verified: false });
      return;
    }
    const res = await verifyAccountRole(user);
    state.authChecked = true;
    if (res.ok && res.role === 'player' && res.playerId) {
      state.apkPlayerId = res.playerId;
      writeApkPlayerId(res.playerId);
    }
    if (!res.ok && state.apkAdminUnlocked) {
      state.role = 'admin';
      onChange({ role: 'admin', verified: true });
      return;
    }
    if (!res.ok && state.apkPlayerId) {
      state.role = 'player';
      state.playerId = state.apkPlayerId;
      onChange({ role: 'player', playerId: state.apkPlayerId, verified: true });
      return;
    }
    onChange({
      role: res.ok ? res.role : 'guest',
      playerId: res.ok ? res.playerId : null,
      verified: res.ok,
      reason: res.ok ? '' : res.reason
    });
  });
}

/* ==================== WRITE OPERATIONS (STRICT FIRESTORE RULES) ==================== */

export function canEditPlayerPortal(playerId) {
  if (!playerId) return false;
  if (isVerifiedAdmin()) return true;
  if (getVerifiedPlayerId() === playerId) return true;
  return Boolean(
    state.user &&
    state.account &&
    state.account.active === true &&
    state.role === 'player' &&
    state.playerId === playerId
  );
}

export async function savePlayerPortalProfile(targetPlayerId, updates) {
  const db = getDB();
  if (!db) throw new Error('FIREBASE_UNAVAILABLE');
  if (!canEditPlayerPortal(targetPlayerId)) throw new Error('NOT_ALLOWED');

  const player = state.players.find(p => p.id === targetPlayerId) || SEED_PLAYERS.find(p => p.id === targetPlayerId);
  if (!player) throw new Error('PLAYER_NOT_FOUND');

  const docId = player._profileUid || `profile_${targetPlayerId}`;

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

  try {
    await db.collection('PlayerProfiles').doc(docId).set(sanitizePayload(payload), { merge: true });
    if ('jersey' in updates || 'image' in updates) {
      const teamPatch = sanitizePayload({
        id: targetPlayerId,
        jersey: payload.jersey,
        updatedMs: payload.updatedMs,
        updatedAt: serverStamp()
      });
      if ('image' in updates) teamPatch.image = payload.image;
      try {
        await db.collection('TeamPlayers').doc(targetPlayerId).set(teamPatch, { merge: true });
      } catch (_) {}
    }
    await loadClubData();
  } catch (err) {
    throw mapFirestoreWriteError(err);
  }
}

export async function saveOwnPlayerProfile(updates) {
  const player = getVerifiedPlayer();
  if (!player) throw new Error('PLAYER_AUTH_REQUIRED');
  return savePlayerPortalProfile(player.id, updates);
}

export async function savePlayerAvailability(playerId, status) {
  const db = getDB();
  if (!db) throw new Error('FIREBASE_UNAVAILABLE');
  const cleanStatus = String(status || '').toUpperCase();
  if (!['AVAILABLE', 'UNAVAILABLE'].includes(cleanStatus)) throw new Error('INVALID_STATUS');

  if (!canEditPlayerPortal(playerId)) {
    throw new Error('NOT_ALLOWED');
  }

  try {
    await db.collection('Availability').doc(playerId).set({
      playerId,
      status: cleanStatus,
      updatedAt: serverStamp()
    }, { merge: true });

    await loadClubData();
  } catch (err) {
    throw mapFirestoreWriteError(err);
  }
}

export async function adminUpsertDoc(collection, docId, payload) {
  const db = getDB();
  if (!db || !isVerifiedAdmin()) throw new Error('ADMIN_REQUIRED');

  const data = sanitizePayload({ ...payload, updatedAt: serverStamp() });
  const validId = docId && !String(docId).startsWith('loc_') ? String(docId) : '';

  try {
    if (collection === 'Honours' || collection === 'Socials') {
      const existingSnap = await db.collection(collection).limit(1).get();
      if (existingSnap.empty) {
        const defaults = collection === 'Honours' ? SEED_HONOURS : DEFAULT_SOCIALS;
        const batch = db.batch();
        defaults.forEach(item => {
          if (item._docId && item._docId !== validId) {
            const { _docId, ...rest } = item;
            batch.set(db.collection(collection).doc(_docId), sanitizePayload({ ...rest, updatedAt: serverStamp() }), { merge: true });
          }
        });
        await batch.commit();
      }
    }
    if (validId) {
      await db.collection(collection).doc(validId).set(data, { merge: true });
    } else {
      await db.collection(collection).add({ ...data, createdMs: data.createdMs || Date.now() });
    }
    await loadClubData();
  } catch (err) {
    throw mapFirestoreWriteError(err);
  }
}

export async function adminUpdatePlayer(playerId, fields) {
  const db = getDB();
  if (!db || !isVerifiedAdmin()) throw new Error('ADMIN_REQUIRED');

  const playerPayload = sanitizePayload({
    id: playerId,
    name: String(fields.name || '').trim(),
    role: String(fields.role || '').trim(),
    detail: String(fields.detail || '').trim(),
    jersey: String(fields.jersey || '').trim(),
    active: true,
    updatedAt: serverStamp()
  });
  if ('image' in fields && fields.image !== undefined && fields.image !== null) {
    playerPayload.image = String(fields.image);
  }

  const target = state.players.find(p => p.id === playerId);
  const profileDocId = target?._profileUid || `profile_${playerId}`;
  const profPayload = sanitizePayload({
    playerId,
    jersey: playerPayload.jersey,
    nick: String(fields.nick ?? target?.nick ?? '').trim(),
    bio: String(fields.bio ?? target?.bio ?? '').trim(),
    updatedMs: Date.now(),
    updatedAt: serverStamp()
  });
  if ('image' in fields && fields.image !== undefined && fields.image !== null) {
    profPayload.image = String(fields.image);
  }

  try {
    await db.collection('TeamPlayers').doc(playerId).set(playerPayload, { merge: true });
    await db.collection('PlayerProfiles').doc(profileDocId).set(profPayload, { merge: true });
    await loadClubData();
  } catch (err) {
    throw mapFirestoreWriteError(err);
  }
}

export async function adminSaveBrandSettings(fields) {
  const db = getDB();
  if (!db || !isVerifiedAdmin()) throw new Error('ADMIN_REQUIRED');
  const parsedCode = Number(fields.appVersionCode);
  const payload = sanitizePayload({
    appVersion: String(fields.appVersion || CLUB_INFO.appVersion).trim(),
    appVersionCode: Number.isFinite(parsedCode) && parsedCode > 0 ? parsedCode : state.appVersionCode || APP_BUILD_INFO.versionCode,
    updateNotes: String(fields.updateNotes ?? '').trim(),
    forceUpdate: Boolean(fields.forceUpdate),
    apkDownloadUrl: String(fields.apkDownloadUrl || CLUB_INFO.apkDownloadUrl).trim(),
    apkReleasesUrl: String(fields.apkReleasesUrl || CLUB_INFO.apkReleasesUrl).trim(),
    updatedMs: Date.now(),
    updatedAt: serverStamp()
  });
  if (fields.logo) {
    payload.logo = String(fields.logo);
  }
  try {
    await db.collection('BrandSettings').doc('main').set(payload, { merge: true });
    await loadClubData();
  } catch (err) {
    throw mapFirestoreWriteError(err);
  }
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

export async function syncNativeVersionInfo() {
  const info = await getNativeAppVersionInfo();
  if (info && (info.versionName || info.versionCode)) {
    state.nativeVersionName = String(info.versionName || APP_BUILD_INFO.versionName).trim();
    state.nativeVersionCode = Number(info.versionCode) || APP_BUILD_INFO.versionCode;
    state.otaBuild = Number(info.otaBuild) || 0;
    state.otaVersion = String(info.otaVersion || '');
    state.canInstallPackages = Boolean(info.canInstallPackages);
  }
  return info;
}

export function evaluateAvailableUpdate() {
  const installedVersionName = state.nativeVersionName || APP_BUILD_INFO.versionName;
  const installedVersionCode = Number(state.nativeVersionCode) || APP_BUILD_INFO.versionCode;
  const candidates = [];

  if (state.appVersion || state.appVersionCode) {
    candidates.push({
      versionName: state.appVersion || installedVersionName,
      versionCode: Number(state.appVersionCode) || installedVersionCode,
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
    versionName: installedVersionName,
    versionCode: installedVersionCode,
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
    compareVersions(installedVersionName, best.versionName) < 0 ||
    Number(best.versionCode) > Number(installedVersionCode);

  return {
    hasUpdate: hasNewerVersion,
    currentVersion: installedVersionName,
    currentCode: installedVersionCode,
    otaBuild: Number(state.otaBuild) || 0,
    otaVersion: state.otaVersion || '',
    canInstallPackages: Boolean(state.canInstallPackages),
    latestVersion: best.versionName,
    latestCode: best.versionCode,
    apkUrl: best.apkDownloadUrl,
    releasesUrl: best.apkReleasesUrl,
    notes: best.notes || 'A newer version of RDM Official Android APK is ready with automatic in-app update support.',
    forceUpdate: best.forceUpdate
  };
}

export async function checkRemoteAppVersion() {
  await syncNativeVersionInfo().catch(() => null);
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

export async function runAutomaticAppUpdates() {
  const otaResult = await checkAndApplyOtaUpdate(REMOTE_OTA_MANIFEST_URL).catch(() => ({ updated: false }));
  const apkUpdate = await checkRemoteAppVersion();
  return { otaResult, apkUpdate };
}

export async function adminDeleteDoc(collection, docId) {
  const db = getDB();
  if (!db || !isVerifiedAdmin() || !docId) throw new Error('ADMIN_REQUIRED');
  if (String(docId).startsWith('loc_')) return;
  try {
    if (collection === 'Honours' || collection === 'Socials') {
      const existingSnap = await db.collection(collection).limit(1).get();
      if (existingSnap.empty) {
        const defaults = collection === 'Honours' ? SEED_HONOURS : DEFAULT_SOCIALS;
        const batch = db.batch();
        defaults.forEach(item => {
          if (item._docId && item._docId !== String(docId)) {
            const { _docId, ...rest } = item;
            batch.set(db.collection(collection).doc(_docId), sanitizePayload({ ...rest, updatedAt: serverStamp() }), { merge: true });
          }
        });
        await batch.commit();
        await loadClubData();
        return;
      }
    }
    await db.collection(collection).doc(String(docId)).delete();
    await loadClubData();
  } catch (err) {
    throw mapFirestoreWriteError(err);
  }
}

export async function adminRemovePlayer(playerId) {
  const db = getDB();
  if (!db || !isVerifiedAdmin() || !playerId) throw new Error('ADMIN_REQUIRED');
  const isSeed = SEED_PLAYERS.some(p => p.id === playerId);
  try {
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
  } catch (err) {
    throw mapFirestoreWriteError(err);
  }
}

export async function adminSetPinned(collection, targetId, pinned) {
  const db = getDB();
  if (!db || !isVerifiedAdmin() || !targetId) throw new Error('ADMIN_REQUIRED');
  if (String(targetId).startsWith('loc_')) return;
  try {
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
  } catch (err) {
    throw mapFirestoreWriteError(err);
  }
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
