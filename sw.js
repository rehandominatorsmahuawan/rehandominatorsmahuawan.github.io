const CACHE = 'rdm-v9001';
const CORE = [
  './',
  'index.html',
  'portals.html',
  'style.css?v=9.0.0',
  'rdm-v6890-fix.css?v=9.0.0',
  'firebase-config.js?v=9.0.0',
  'app.js?v=9.0.0',
  'firebase-login.js?v=9.0.0',
  'access-links.js?v=9.0.0',
  'firebase-backend.js?v=9.0.0',
  'enhancements.js?v=9.0.0',
  'admin-player-manager.js?v=9.0.0',
  'admin-auth-email.js?v=9.0.0',
  'v6.js?v=9.0.0',
  'gallery-v686.js?v=9.0.0',
  'updates.js?v=9.0.0',
  'forms-v6821.js?v=9.0.0',
  'rdm-v6900.js?v=9.0.0',
  'rdm-v6901.js?v=9.0.0',
  'rdm-v6902.js?v=9.0.0',
  'rdm-global-mini.js?v=9.0.0',
  'rdm-pwa.js?v=9.0.0',
  'site.webmanifest?v=9000',
  'assets/rdm-logo.png?v=7400',
  'assets/trophy-2024.png',
  'assets/trophy-2025.png',
  'assets/trophy-2026.png',
  'src/assets/images/hero_cricket_stadium_1794890926411.jpg',
  'src/assets/images/club_heritage_banner_1794890926814.jpg',
  'pwa-192x192.png',
  'pwa-512x512.png',
  'pwa-maskable-512x512.png',
  'apple-touch-icon.png'
];
const ADMIN_KEY = '0AqlZ35wF8lcXYiAkgz04KjzGeiSfnHs';
const PLAYER_KEYS = {
  'yJjA_yyMuR6OyPJgfvspRUmD': 'Rehan Akhtar',
  '6tYIAzsx4WM534_Ovd1mDaE1': 'Asif Ali',
  'iGo217fTX-irxYyJoPfrlXBf': 'Saif Ali',
  'pArgda-19Jz59OJc6D-WszY4': 'Akib Ansari',
  '2GJogYcYn4dG23ug5zkC9c-D': 'Sahil Ali',
  'RLnuOF9niHZMV0yemW4-Mm5O': 'Soaib Akhtar',
  'ubl_kIeHJdMlhTrMeV39LTjq': 'Wasim',
  'HthzwXsiP1scviZJJUWIymep': 'Jubed',
  '88DTqmDck9JVXCybKZXajzzG': 'SK. Hanif',
  'kSHlVvpggLEs9wpLrlUfTMxs': 'Gulam',
  'GgSPtAUgj_zIrTTY2WMeLeXW': 'Sahil Ansari',
  'mxXlPl2zOIzz-Lig_jsx6MEm': 'Lucky',
  'uwN3JA0MPpUewH_BFcRVoiJX': 'Abushad',
  'wKTMjxcXSV3sweGJWQ4AKZoX': 'Sabre Alam',
  'FYnhheOTlpei4tJD6C43Qc66': 'Zishan',
  'UpcsKFrMOK6GEnBLjTCZcdBk': 'Kaif Lefty',
  'YvKJ8KIvznZlq_7OQc9AYyvG': 'Javed'
};

function buildPortalManifestResponse(reqUrl) {
  const key = (reqUrl.searchParams.get('key') || '').trim();
  const isAdmin = key === ADMIN_KEY;
  const pName = PLAYER_KEYS[key] || '';
  const baseUrl = new URL('./', self.registration.scope);
  const startUrl = (isAdmin || pName)
    ? new URL('?key=' + encodeURIComponent(key), baseUrl).href
    : baseUrl.href;
  const first = (pName.split(' ')[0] || 'Player').slice(0, 7);
  const manifest = {
    id: startUrl,
    name: isAdmin ? 'RDM Admin Panel' : (pName ? pName + ' · RDM Profile' : 'Rehan Dominators Mahuawan'),
    short_name: isAdmin ? 'RDM Admin' : (pName ? (first + ' RDM').slice(0, 12) : 'RDM'),
    description: isAdmin
      ? 'Official RDM Admin Control Panel'
      : (pName ? 'Official RDM Player Profile — ' + pName : 'Official Rehan Dominators Mahuawan cricket team app.'),
    start_url: startUrl,
    scope: baseUrl.href,
    display: 'standalone',
    orientation: 'any',
    background_color: '#070D0A',
    theme_color: '#047857',
    prefer_related_applications: false,
    categories: ['sports'],
    icons: [
      { src: new URL('pwa-192x192.png', baseUrl).href, sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: new URL('pwa-512x512.png', baseUrl).href, sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: new URL('pwa-maskable-512x512.png', baseUrl).href, sizes: '512x512', type: 'image/png', purpose: 'maskable' }
    ]
  };
  return new Response(JSON.stringify(manifest), {
    status: 200,
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(CORE.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('/rdm-portal.webmanifest') || url.pathname === '/rdm-portal.webmanifest') {
    e.respondWith(buildPortalManifestResponse(url));
    return;
  }
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put('./', copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match('./').then(r => r || caches.match('index.html')))
    );
    return;
  }
  if (/\.(js|css|html|webmanifest)$/i.test(url.pathname)) {
    e.respondWith(
      fetch(e.request, { cache: 'no-cache' })
        .then(res => {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => {
      const net = fetch(e.request).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        }
        return res;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
