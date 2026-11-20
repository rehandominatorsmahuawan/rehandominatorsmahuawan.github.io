const CACHE = 'rdm-official-v8100';
const CORE = [
  './',
  'index.html',
  'firebase-config.js',
  'site.webmanifest',
  'assets/rdm-logo.png',
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

  if (/\/version\.json$/i.test(url.pathname)) {
    e.respondWith(fetch(e.request, { cache: 'no-store' }));
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

  // Always network-first for code, styles, manifests, and service worker so updates show immediately
  if (/\.(js|mjs|css|html|webmanifest|json)$/i.test(url.pathname)) {
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
