/* RDM V9.0.0 direct private-link router + SHA-256 Admin & Player Portal password verification.
   - Public URL (no ?key=): strictly public view-only.
   - Player private link (?key=<PLAYER_TOKEN>): opens Player Portal and requires that player's personal password.
   - Admin private link (?key=<ADMIN_TOKEN>): opens Admin Portal and requires Admin password verification. */
(() => {
  const PLAYER_LINKS = {
    "RDM001": "yJjA_yyMuR6OyPJgfvspRUmD",
    "RDM003": "iGo217fTX-irxYyJoPfrlXBf",
    "RDM006": "RLnuOF9niHZMV0yemW4-Mm5O",
    "RDM004": "pArgda-19Jz59OJc6D-WszY4",
    "RDM002": "6tYIAzsx4WM534_Ovd1mDaE1",
    "RDM007": "ubl_kIeHJdMlhTrMeV39LTjq",
    "RDM008": "HthzwXsiP1scviZJJUWIymep",
    "RDM010": "kSHlVvpggLEs9wpLrlUfTMxs",
    "RDM011": "GgSPtAUgj_zIrTTY2WMeLeXW",
    "RDM005": "2GJogYcYn4dG23ug5zkC9c-D",
    "RDM012": "mxXlPl2zOIzz-Lig_jsx6MEm",
    "RDM016": "UpcsKFrMOK6GEnBLjTCZcdBk",
    "RDM009": "88DTqmDck9JVXCybKZXajzzG",
    "RDM013": "uwN3JA0MPpUewH_BFcRVoiJX",
    "RDM014": "wKTMjxcXSV3sweGJWQ4AKZoX",
    "RDM015": "FYnhheOTlpei4tJD6C43Qc66",
    "RDM017": "YvKJ8KIvznZlq_7OQc9AYyvG"
  };

  const PLAYER_PW_HASHES = {
    "RDM001": "6fb67b0874290083bb94886486ada2535de541c56fca8eb91b7134bb5014019a",
    "RDM002": "0df79a87814b5ff72554d539b8d94d6592ae84e8145cda22111ee55ffa8876a0",
    "RDM003": "c13d891485885373a0c125b510bf6491c3f22e115da1c1b8f0ab95cabdf572d9",
    "RDM004": "f71cf8dbeb14f2e8c69484f6ff80d20b1402943f084f713e590ea9abb6afe2fc",
    "RDM005": "561ba1e989a02839b4ed929616fb54fb8cb6414cee6b5e43434162151b853c8d",
    "RDM006": "6ce4bb6723456794764b11952958ead6e243848a389cf97ab13040e4d56389b9",
    "RDM007": "1fefa430168b7419ae9b7596b9ae51d25989d81a89f7981afe6bc21f69a22353",
    "RDM008": "b391f2d79a5827d539596a1005111febf86a0e2324c6265c700a3020188122cb",
    "RDM009": "d7bb73041868d2bc129b7d7935e28524d5d168f1d6beb1b2c56efef08fb2194d",
    "RDM010": "48ddb3c347f15fc29dd161e6ac9f988827731db86fd78b6a6a9833c977e2aecb",
    "RDM011": "7f88a18f219f70c47ad1ba9f00ab03bcd710d426aa42a43064ac80dd66cd80e9",
    "RDM012": "d1ff943fd5199f473569af348a31630842b0b935b4da36e94ec47b9a431f2355",
    "RDM013": "23a060a79f69510bee9ad34ed809f96336ad606d5e9f14436253460194569145",
    "RDM014": "f06575828bd55e8aceaeab8af0b48d93a6d6b9f714f68ea7717de532a7f9073f",
    "RDM015": "41d5c7c2a1bda007fc24ce1fa8f911ce69e457251733b74d12c9c10ae496dc53",
    "RDM016": "e44b33be11c30c3ec35638ddde517ad1338c88557f80f795f0c5b05e5552a6a0",
    "RDM017": "2b4eff690afa58c019fee95e6bddf75880f48315fc4f83bbb7f9214ca8b25790"
  };

  const ADMIN_LINK = "0AqlZ35wF8lcXYiAkgz04KjzGeiSfnHs";
  const ADMIN_PW_HASH = "73442ec47da8d19de47638438c8563bb266e880cf4ce8cafa5579ed20d2b94be";
  const ADMIN_PW_KEY = "rdm_admin_pw_unlocked_v1";

  window.RDM_PLAYER_LINKS = PLAYER_LINKS;
  window.RDM_ADMIN_LINK = ADMIN_LINK;

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
    words[words.length] = (asciiBitLength);
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

  const params = new URLSearchParams(location.search);
  const key = (params.get('key') || '').trim();
  const requestedPlayer = Object.keys(PLAYER_LINKS).find(id => PLAYER_LINKS[id] === key) || null;
  const wantsAdmin = key === ADMIN_LINK;
  const openedFromHub = params.get('portal') === 'hub';

  if (wantsAdmin && openedFromHub) {
    window.__rdmUnlockedAdmin = false;
    try { sessionStorage.removeItem(ADMIN_PW_KEY); } catch (_) {}
    try {
      params.delete('portal');
      const qs = params.toString();
      const nextUrl = location.pathname + (qs ? '?' + qs : '') + location.hash;
      if (history?.replaceState) history.replaceState(null, '', nextUrl);
    } catch (_) {}
  }

  window.__rdmUrlKeyRole = wantsAdmin ? 'admin' : (requestedPlayer ? 'player' : 'public');
  window.__rdmUrlPlayerId = requestedPlayer;

  window.rdmIsAdminUnlocked = function () {
    if (!wantsAdmin) return false;
    try {
      return window.__rdmUnlockedAdmin === true || sessionStorage.getItem(ADMIN_PW_KEY) === '1';
    } catch {
      return window.__rdmUnlockedAdmin === true;
    }
  };

  window.rdmVerifyAdminPassword = async function (password) {
    if (!wantsAdmin) return false;
    const clean = String(password || '').trim();
    if (!clean) return false;
    const digest = await sha256Hex(clean);
    if (digest === ADMIN_PW_HASH) {
      window.__rdmUnlockedAdmin = true;
      try { sessionStorage.setItem(ADMIN_PW_KEY, '1'); } catch (_) {}
      route();
      return true;
    }
    return false;
  };

  window.rdmLockAdmin = function () {
    window.__rdmUnlockedAdmin = false;
    try { sessionStorage.removeItem(ADMIN_PW_KEY); } catch (_) {}
    route();
    window.toast?.('Admin Panel locked');
  };

  window.rdmIsPlayerUnlocked = function (playerId) {
    if (!playerId) return false;
    if (wantsAdmin && window.rdmIsAdminUnlocked() && session?.mode === 'admin') return true;
    try {
      return window.__rdmUnlockedPlayerId === playerId || sessionStorage.getItem('rdm_player_pw_' + playerId) === '1';
    } catch {
      return window.__rdmUnlockedPlayerId === playerId;
    }
  };

  window.rdmVerifyPlayerPassword = async function (playerId, password) {
    const expected = PLAYER_PW_HASHES[playerId];
    if (!expected) return false;
    const clean = String(password || '').trim();
    if (!clean) return false;
    const digest = await sha256Hex(clean);
    if (digest === expected) {
      window.__rdmUnlockedPlayerId = playerId;
      try { sessionStorage.setItem('rdm_player_pw_' + playerId, '1'); } catch (_) {}
      return true;
    }
    return false;
  };

  window.rdmLockPlayer = function (playerId) {
    const id = playerId || window.__rdmUrlPlayerId;
    window.__rdmUnlockedPlayerId = null;
    if (id) {
      try { sessionStorage.removeItem('rdm_player_pw_' + id); } catch (_) {}
    }
    window.renderProfile?.();
    window.toast?.('Profile locked');
  };

  function setPortal(role) {
    document.documentElement.dataset.rdmPortal = role;
    if (document.body) document.body.dataset.rdmPortal = role;
  }

  if (wantsAdmin && window.rdmIsAdminUnlocked()) {
    session = { mode: 'admin', realRole: 'admin', playerId: 'RDM001', viaLink: true };
    setPortal('admin');
  } else if (wantsAdmin) {
    session = null;
    setPortal('admin');
  } else if (requestedPlayer) {
    session = { mode: 'player', realRole: 'player', playerId: requestedPlayer, viaLink: true };
    setPortal('player');
  } else {
    session = null;
    setPortal('public');
  }

  function publicMode() {
    setPortal('public');
    document.body.classList.remove('admin');
    document.querySelector('#profileNav')?.setAttribute('hidden', '');
    document.querySelector('#adminNav')?.setAttribute('hidden', '');
    document.querySelectorAll('.adminOnly').forEach(x => { x.style.display = 'none'; });
    window.updateAuthUI?.();
  }

  function route() {
    if (wantsAdmin) {
      const unlocked = window.rdmIsAdminUnlocked();
      session = unlocked ? { mode: 'admin', realRole: 'admin', playerId: 'RDM001', viaLink: true } : null;
      setPortal('admin');
      document.body.classList.toggle('admin', unlocked);
      document.querySelector('#adminNav')?.removeAttribute('hidden');
      document.querySelector('#profileNav')?.setAttribute('hidden', '');
      document.querySelectorAll('.adminOnly').forEach(x => { x.style.display = unlocked ? '' : 'none'; });
      window.updateAuthUI?.();
      window.render?.();
      window.go?.('admin');
      return;
    }
    if (requestedPlayer) {
      session = { mode: 'player', realRole: 'player', playerId: requestedPlayer, viaLink: true };
      setPortal('player');
      document.body.classList.remove('admin');
      document.querySelector('#profileNav')?.removeAttribute('hidden');
      document.querySelector('#adminNav')?.setAttribute('hidden', '');
      document.querySelectorAll('.adminOnly').forEach(x => { x.style.display = 'none'; });
      window.updateAuthUI?.();
      window.render?.();
      window.go?.('profile');
      return;
    }
    publicMode();
    window.render?.();
  }

  window.addEventListener('rdm-auth-ready', route);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', route, { once: true });
  } else {
    route();
  }
})();
