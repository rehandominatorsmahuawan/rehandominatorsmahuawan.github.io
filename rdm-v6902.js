/* RDM V8.0.0 — Real-time Crest & Brand Assets Manager */
(() => {
  'use strict';
  const STATIC_PLAYER = /^(?:\.?\/)?assets\/(?:rehan\.png|players\/)/i;
  const BRAND_DOC = () => window.rdmDB?.collection('BrandSettings').doc('main');
  const BRAND_LOCAL_KEY = 'RDM_LOCAL_BRAND_V1';
  let brand = { logo: '', favicon: '', appIcon: '', socialPreview: '', brandVersion: '' };
  let brandWatchActive = false;
  const LEGACY_LOGO = /(?:logo\.jpg|CRICKET_YOUR_TAGLINE_HERE|rdm_crest_emblem)/i;

  try {
    const saved = JSON.parse(localStorage.getItem(BRAND_LOCAL_KEY) || 'null');
    if (saved && typeof saved === 'object') {
      brand = { ...brand, ...saved };
      if (LEGACY_LOGO.test(brand.logo || '')) brand.logo = '';
    }
  } catch {}

  const esc = s => String(s || '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
  const DEFAULT_LOGO = 'assets/rdm-logo.png?v=7400';
  const DEFAULT_FAVICON = 'pwa-192x192.png';
  const DEFAULT_APPLE = 'apple-touch-icon.png';

  function isMissingPlayerPhoto(src) {
    const s = String(src || '').trim();
    return !s || STATIC_PLAYER.test(s) || /^data:image\/svg\+xml/i.test(s) || LEGACY_LOGO.test(s);
  }
  function cleanPlayers() {
    if (!window.D?.players) return;
    const fallback = (brand.logo && !LEGACY_LOGO.test(brand.logo)) ? brand.logo : DEFAULT_LOGO;
    D.players.forEach(p => { if (isMissingPlayerPhoto(p.image)) p.image = fallback; });
  }
  window.rdmCleanStaticPlayerImages = cleanPlayers;
  window.rdmDefaultPlayerLogo = () => ((brand.logo && !LEGACY_LOGO.test(brand.logo)) ? brand.logo : DEFAULT_LOGO);

  function applyBrand() {
    const cleanLogo = (brand.logo && !LEGACY_LOGO.test(brand.logo)) ? brand.logo : DEFAULT_LOGO;
    const logo = cleanLogo;
    const fav = brand.favicon || brand.appIcon || cleanLogo || DEFAULT_FAVICON;
    const app = brand.appIcon || cleanLogo || DEFAULT_APPLE;
    const social = brand.socialPreview || logo;
    document.querySelectorAll('header .brand img,.heroLogo img,footer img,.downloadAppCard>img,#brandLogoPreview,.installGuideHead img').forEach(x => {
      if (x.getAttribute('src') !== logo) x.src = logo;
      if (!x.dataset.rdmLogoFallback) {
        x.dataset.rdmLogoFallback = '1';
        x.addEventListener('error', () => {
          if (x.getAttribute('src') !== DEFAULT_LOGO) x.src = DEFAULT_LOGO;
        });
      }
    });
    document.querySelectorAll('link[rel="icon"]').forEach(x => { if (x.getAttribute('href') !== fav) x.href = fav; });
    document.querySelectorAll('link[rel="apple-touch-icon"]').forEach(x => { if (x.getAttribute('href') !== app) x.href = app; });
    const og = document.querySelector('meta[property="og:image"]'); if (og && og.content !== social) og.content = social;
    const tw = document.querySelector('meta[name="twitter:image"]'); if (tw && tw.content !== social) tw.content = social;
  }

  function applyRemoteBrand(remote) {
    if (!remote || typeof remote !== 'object') return;
    brand = { ...brand, ...remote };
    if (LEGACY_LOGO.test(brand.logo || '')) brand.logo = '';
    try { localStorage.setItem(BRAND_LOCAL_KEY, JSON.stringify(brand)); } catch {}
    cleanPlayers();
    applyBrand();
  }

  async function loadBrand() {
    try {
      if (!BRAND_DOC()) return;
      const d = await BRAND_DOC().get();
      if (d.exists) applyRemoteBrand(d.data());
      else applyBrand();
    } catch {
      applyBrand();
    }
  }

  function watchBrandRealtime() {
    if (brandWatchActive || !BRAND_DOC()) return;
    brandWatchActive = true;
    try {
      BRAND_DOC().onSnapshot(doc => {
        if (doc.exists) applyRemoteBrand(doc.data());
      }, err => console.warn('Brand realtime watch error:', err?.code || err));
    } catch {}
  }

  async function compress(file, max = 700, q = 0.76) {
    if (!file) return '';
    const u = await new Promise((r, j) => {
      const f = new FileReader();
      f.onload = () => r(f.result);
      f.onerror = j;
      f.readAsDataURL(file);
    });
    const im = await new Promise((r, j) => {
      const x = new Image();
      x.onload = () => r(x);
      x.onerror = j;
      x.src = u;
    });
    const s = Math.min(1, max / Math.max(im.width, im.height));
    const c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(im.width * s));
    c.height = Math.max(1, Math.round(im.height * s));
    c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
    let out = c.toDataURL('image/png');
    if (out.length > 780000) out = c.toDataURL('image/jpeg', q);
    if (out.length > 900000) throw Error('IMAGE_TOO_LARGE');
    return out;
  }

  function brandingBox() {
    const logo = (brand.logo && !LEGACY_LOGO.test(brand.logo)) ? brand.logo : DEFAULT_LOGO;
    return `<section class="brandAdminBox">
      <div class="sectionHead subHead">
        <div>
          <span>Identity &amp; Assets</span>
          <h2>Club Crest &amp; Branding</h2>
          <p>Update the official club logo, favicon, app icon, and social share preview — syncs across Web &amp; APK</p>
        </div>
      </div>
      <div class="brandLogoPreviewRow">
        <img id="brandLogoPreview" src="${esc(logo)}" alt="Current RDM Logo">
        <div>
          <strong>Current Club Crest</strong>
          <p>Displayed across header, hero emblem, footer, and Android APK.</p>
          <button type="button" class="tinyBtn danger" onclick="rdmResetBrandAsset('logo')">Reset to Default Logo</button>
        </div>
      </div>
      <div class="brandAdminGrid">
        <label><span>Website Logo</span><input id="brandLogoFile" type="file" accept="image/*"><button type="button" class="primary" onclick="rdmSaveBrandAsset('logo','brandLogoFile')">Update Logo</button></label>
        <label><span>Favicon</span><input id="brandFaviconFile" type="file" accept="image/*"><button type="button" class="primary" onclick="rdmSaveBrandAsset('favicon','brandFaviconFile')">Update Favicon</button></label>
        <label><span>PWA / App Icon</span><input id="brandAppFile" type="file" accept="image/*"><button type="button" class="primary" onclick="rdmSaveBrandAsset('appIcon','brandAppFile')">Update App Icon</button></label>
        <label><span>Social / SEO Preview</span><input id="brandSocialFile" type="file" accept="image/*"><button type="button" class="primary" onclick="rdmSaveBrandAsset('socialPreview','brandSocialFile')">Update Preview</button></label>
      </div>
      <p class="adminHint">Player portraits are edited inside individual player profiles; club trophy imagery remains preserved.</p>
    </section>`;
  }

  window.rdmSaveBrandAsset = async function (key, inputId) {
    try {
      if (!window.rdmAdmin?.()) return;
      const f = document.getElementById(inputId)?.files?.[0];
      if (!f) return window.toast?.('Select an image');
      const val = await compress(f, key === 'favicon' ? 256 : key === 'appIcon' ? 512 : 800);
      brand[key] = val;
      brand.brandVersion = 'v9.0';
      try { localStorage.setItem(BRAND_LOCAL_KEY, JSON.stringify(brand)); } catch {}
      try {
        await BRAND_DOC().set({ [key]: val, brandVersion: 'v9.0', updatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
      } catch (err) {
        window.rdmReportWriteError?.(err, 'Branding sync');
      }
      applyBrand();
      window.toast?.('Branding updated & synced');
    } catch (e) {
      console.error(e);
      window.toast?.('Update failed');
    }
  };

  window.rdmResetBrandAsset = async function (key) {
    try {
      if (!window.rdmAdmin?.()) return;
      brand[key] = '';
      brand.brandVersion = 'v9.0';
      try { localStorage.setItem(BRAND_LOCAL_KEY, JSON.stringify(brand)); } catch {}
      try {
        await BRAND_DOC().set({ [key]: '', brandVersion: 'v9.0', updatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
      } catch (err) {
        window.rdmReportWriteError?.(err, 'Reset branding');
      }
      applyBrand();
      window.toast?.('Logo reset to default');
    } catch (e) {
      console.error(e);
      window.toast?.('Reset failed');
    }
  };

  function injectAdmin() {
    const b = document.getElementById('adminWorkspaceMain') || document.getElementById('adminBody');
    if (!b || b.querySelector('.brandAdminBox') || !window.rdmAdmin?.()) return;
    b.insertAdjacentHTML('beforeend', brandingBox());
  }
  window.rdmInjectBrandAdmin = injectAdmin;

  const oldAdmin = window.renderAdmin;
  window.renderAdmin = function () { oldAdmin?.(); setTimeout(injectAdmin, 40); };
  const oldRefresh = window.rdmRefresh;
  window.rdmRefresh = function () { cleanPlayers(); oldRefresh?.(); applyBrand(); };
  const oldLoad = window.rdmLoadAll;
  if (oldLoad) {
    window.rdmLoadAll = async function () {
      await oldLoad.apply(this, arguments);
      cleanPlayers();
      try {
        if (!window.rdmHasOpenModalOrTyping?.()) {
          window.render?.();
          if (session?.mode === 'player' && window.__rdmUrlKeyRole === 'player') window.renderProfile?.();
          if (window.rdmAdmin?.()) {
            window.refreshAdminWorkspaceKpis?.();
            window.rdmInjectPlayerManager?.();
            injectAdmin();
            window.rdmInjectEmailToolCard?.();
          }
        }
      } catch {}
      applyBrand();
    };
  }

  let brandRaf = 0;
  new MutationObserver(() => {
    if (brandRaf) return;
    brandRaf = requestAnimationFrame(() => {
      brandRaf = 0;
      applyBrand();
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', () => {
    cleanPlayers();
    loadBrand();
    watchBrandRealtime();
    setTimeout(injectAdmin, 800);
  });
  loadBrand();
  watchBrandRealtime();
})();
