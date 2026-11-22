import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import '@fontsource/outfit/800.css';
import '@fontsource/barlow-condensed/700.css';
import '@fontsource/barlow-condensed/800.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/600.css';
import '@fontsource/jetbrains-mono/700.css';
import {
  APP_BUILD_INFO,
  CLUB_INFO,
  PLAYER_CODES,
  escHtml,
  formatTextCase,
  resolvePlayerImage,
  safeExternalUrl
} from './data/roster.js';
import { ADMIN_CONSOLE_ENABLED, PORTAL_ENABLED, resolvePortalKey } from 'virtual:rdm-portal';
import {
  adminDeleteDoc,
  adminRemovePlayer,
  adminSaveBrandSettings,
  adminSetPinned,
  adminUpdatePlayer,
  adminUpsertDoc,
  canEditPlayerPortal,
  checkRemoteAppVersion,
  compressImageFile,
  connectAdminCloudSync,
  evaluateAvailableUpdate,
  isFirebaseCloudAdmin,
  isVerifiedAdmin,
  loadClubData,
  loginAdminWithPassword,
  loginWithEmailPassword,
  logoutAccount,
  savePlayerAvailability,
  savePlayerPortalProfile,
  state,
  subscribeAuthChanges,
  subscribeClubDataRealtime
} from './services/firebase-service.js';
import {
  canInstallWebPwa,
  downloadApkFile,
  exitNativeApp,
  hideNativeSplash,
  initNativeShell,
  isNativePlatform,
  openExternalUrl,
  syncStatusBarTheme,
  triggerWebPwaInstall
} from './services/native-bridge.js';
import {
  closeTopOverlay,
  downloadPlayerProfileCard,
  hasOpenOverlay,
  openAppUpdateSheet,
  openAvatarCropper,
  openConfirmSheet,
  openFormSheet,
  openLightbox,
  openThemeSheet,
  showToast
} from './ui/components.js';

const THEMES = [
  { id: 'azure', label: 'Sky Azure', desc: 'Official Royal Blue & White', swatches: ['#F3F7FD', '#FFFFFF', '#0958D9'] },
  { id: 'crimson', label: 'Dominator Crimson', desc: 'Club Crest Red & White', swatches: ['#FCF7F7', '#FFFFFF', '#C61D2E'] },
  { id: 'daylight', label: 'Stadium Daylight', desc: 'Crisp High-Key White', swatches: ['#F8FAFC', '#FFFFFF', '#1D4ED8'] },
  { id: 'night', label: 'Floodlight Night', desc: 'Deep Stadium Navy', swatches: ['#071224', '#0E1F3A', '#38BDF8'] }
];

const ui = {
  screen: 'public', // 'public' | 'playerDetail' | 'subpage' | 'admin' | 'playerPortal' | 'portalAuth'
  portalMode: 'public', // 'public' | 'admin' | 'player'
  portalPlayerId: null,
  publicTab: 'home', // 'home' | 'squad' | 'matches' | 'gallery' | 'more'
  matchesSubTab: 'fixtures', // 'fixtures' | 'xi' | 'tournaments'
  galleryAlbum: 'ALL',
  squadQuery: '',
  squadFilter: 'ALL',
  detailPlayerId: null,
  morePage: 'news', // 'news' | 'updates' | 'records' | 'tournaments' | 'xi' | 'honours' | 'socials' | 'about' | 'download'
  adminTab: 'overview', // 'overview' | 'squad' | 'matches' | 'content'
  drawerOpen: false,
  theme: loadInitialTheme(),
  loginError: '',
  loginBusy: false,
  lastBackPressAt: 0
};

// Single-step history stack synced with phone browser history & Capacitor hardware back
const navStack = [];

function snapshotRoute() {
  return {
    screen: ui.screen,
    publicTab: ui.publicTab,
    matchesSubTab: ui.matchesSubTab,
    detailPlayerId: ui.detailPlayerId,
    morePage: ui.morePage,
    adminTab: ui.adminTab
  };
}

function sameRoute(a, b) {
  return a && b &&
    a.screen === b.screen &&
    a.publicTab === b.publicTab &&
    a.matchesSubTab === b.matchesSubTab &&
    a.detailPlayerId === b.detailPlayerId &&
    a.morePage === b.morePage &&
    a.adminTab === b.adminTab;
}

function buildRouteHash(r) {
  if (r.screen === 'playerDetail' && r.detailPlayerId) return `#player-${r.detailPlayerId}`;
  if (r.screen === 'subpage') return `#section-${r.morePage}`;
  if (r.screen === 'playerPortal' && ui.portalPlayerId) return `#portal-${ui.portalPlayerId}`;
  if (r.screen === 'portalAuth') return '#portal-verify';
  if (r.screen === 'admin') return `#admin-${r.adminTab}`;
  return `#${r.publicTab || 'home'}`;
}

function applyRouteSnapshot(r) {
  ui.screen = r.screen;
  ui.publicTab = r.publicTab || 'home';
  ui.matchesSubTab = r.matchesSubTab || 'fixtures';
  ui.detailPlayerId = r.detailPlayerId || null;
  ui.morePage = r.morePage || 'news';
  ui.adminTab = r.adminTab || 'overview';
  ui.drawerOpen = false;
  renderApp();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function navigateTo(patch, { push = true, replace = false } = {}) {
  if (patch.screen === 'admin') {
    if (!ADMIN_CONSOLE_ENABLED) {
      patch = { screen: 'public', publicTab: 'home' };
    } else if (!isVerifiedAdmin()) {
      patch = { ...patch, screen: 'portalAuth' };
    }
  }
  if (patch.screen === 'playerPortal' && (!PORTAL_ENABLED || ui.portalMode !== 'player' || !ui.portalPlayerId)) {
    patch = { screen: 'public', publicTab: 'home' };
  }
  if (patch.screen === 'portalAuth' && !ADMIN_CONSOLE_ENABLED) {
    patch = { screen: 'public', publicTab: 'home' };
  }

  const next = { ...snapshotRoute(), ...patch };
  const top = navStack[navStack.length - 1];

  if (!sameRoute(top, next)) {
    if (replace && navStack.length > 0) {
      navStack[navStack.length - 1] = next;
      try {
        window.history.replaceState({ rdmIdx: navStack.length - 1 }, '', buildRouteHash(next));
      } catch (_) {}
    } else if (push || navStack.length === 0) {
      navStack.push(next);
      if (navStack.length > 24) navStack.shift();
      try {
        window.history.pushState({ rdmIdx: navStack.length - 1 }, '', buildRouteHash(next));
      } catch (_) {}
    }
  }
  applyRouteSnapshot(next);
}

function setDrawerOpen(open) {
  ui.drawerOpen = !!open;
  const overlay = document.getElementById('drawerOverlay');
  if (overlay) {
    const panel = overlay.querySelector('.drawerPanel');
    if (panel) panel.style.transform = '';
    overlay.classList.remove('dragging');
    overlay.classList.toggle('open', ui.drawerOpen);
    overlay.setAttribute('aria-hidden', ui.drawerOpen ? 'false' : 'true');
  } else {
    renderApp();
  }
}

function stepBackOne() {
  if (hasOpenOverlay()) {
    closeTopOverlay();
    return true;
  }
  if (ui.drawerOpen) {
    setDrawerOpen(false);
    return true;
  }
  if (navStack.length > 1) {
    navStack.pop();
    const prev = navStack[navStack.length - 1];
    try {
      window.history.replaceState({ rdmIdx: navStack.length - 1 }, '', buildRouteHash(prev));
    } catch (_) {}
    applyRouteSnapshot(prev);
    return true;
  }
  return false;
}

function loadInitialTheme() {
  try {
    const saved = localStorage.getItem('rdm-app-theme') || 'azure';
    if (saved === 'turf') {
      localStorage.setItem('rdm-app-theme', 'azure');
      return 'azure';
    }
    return THEMES.some(t => t.id === saved) ? saved : 'azure';
  } catch {
    return 'azure';
  }
}

function getThemeLabel(id) {
  return THEMES.find(t => t.id === id)?.label || 'Sky Azure';
}

function applyTheme(nextTheme) {
  const valid = THEMES.some(t => t.id === nextTheme) ? nextTheme : 'azure';
  ui.theme = valid;
  document.documentElement.setAttribute('data-theme', valid);
  try { localStorage.setItem('rdm-app-theme', valid); } catch (_) {}
  syncStatusBarTheme(valid);
  renderApp();
}

function currentLogo() {
  return state.brandLogo || CLUB_INFO.logoPath;
}

function currentApkUrl() {
  return safeExternalUrl(state.apkDownloadUrl) || CLUB_INFO.apkDownloadUrl;
}

function currentReleasesUrl() {
  return safeExternalUrl(state.apkReleasesUrl) || CLUB_INFO.apkReleasesUrl;
}

function currentAppVersion() {
  return String(state.appVersion || APP_BUILD_INFO.versionName || CLUB_INFO.appVersion || '1.1.0').replace(/^v/i, '');
}

function avatarAttrs(imgUrl) {
  const resolved = resolvePlayerImage(imgUrl, currentLogo());
  const isCrest = resolved === currentLogo() || resolved === CLUB_INFO.logoPath;
  return { src: resolved, cls: isCrest ? 'avatarCircle is-crest' : 'avatarCircle is-photo' };
}

function tabIcon(name) {
  const icons = {
    home: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/></svg>',
    squad: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    matches: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    gallery: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>',
    more: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>'
  };
  return icons[name] || '';
}

function drawerIcon(name) {
  const icons = {
    home: tabIcon('home'),
    squad: tabIcon('squad'),
    matches: tabIcon('matches'),
    gallery: tabIcon('gallery'),
    more: tabIcon('more'),
    xi: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
    records: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',
    tournaments: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 8.5 15.5 15.5"/><path d="M15.5 8.5 8.5 15.5"/></svg>',
    honours: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
    news: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',
    updates: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    socials: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    about: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    download: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>'
  };
  return icons[name] || '';
}

/* ==================== RENDERERS ==================== */

function renderTopBar({ title = 'RDM Official', showBack = false, showPublicNav = true, rightActionHtml = '' }) {
  const navItems = [
    ['home', 'Home'],
    ['squad', 'Squad'],
    ['matches', 'Matches'],
    ['gallery', 'Gallery'],
    ['more', 'More']
  ];

  const leftControl = showBack
    ? `<button type="button" class="menuCircleBtn" id="btnStepBack" aria-label="Go back">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
       </button>`
    : `<button type="button" class="menuCircleBtn" id="btnOpenDrawer" aria-label="Open team menu">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
       </button>`;

  const defaultRight = rightActionHtml || `<button type="button" class="topActionBtn" id="btnPickTheme">Theme</button>`;

  return `
    <header class="topBar">
      <div class="topBarInner">
        <div class="topLeftGroup">
          ${leftControl}
          <button type="button" class="topBrand" id="btnBrandHome" aria-label="RDM Official Home">
            <img src="${escHtml(currentLogo())}" alt="RDM Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
            <span class="topBrandText">${escHtml(title)}</span>
          </button>
        </div>
        ${showPublicNav ? `
          <nav class="topDesktopNav" aria-label="Primary navigation">
            ${navItems.map(([id, label]) => `
              <button type="button" class="topNavLink ${ui.screen === 'public' && ui.publicTab === id ? 'active' : ''}" data-public-tab="${id}">${label}</button>
            `).join('')}
          </nav>
        ` : '<div></div>'}
        <div class="topBarActions">
          ${defaultRight}
        </div>
      </div>
    </header>
  `;
}

function renderSideDrawer() {
  const teamPages = [
    ['xi', 'Playing XI'],
    ['records', 'Team Records'],
    ['tournaments', 'Tournaments & H2H'],
    ['honours', 'Team Honours'],
    ['news', 'Team News'],
    ['updates', 'Official Updates'],
    ['socials', 'Channels & Contact'],
    ['about', 'About RDM'],
    ['download', 'Get Android App']
  ];

  const portalQuickBtn = (PORTAL_ENABLED && ui.portalMode === 'player' && ui.portalPlayerId)
    ? `<button type="button" class="btnPrimary btnSm btnFull" id="btnReturnPortal">My Profile Control</button>`
    : (ADMIN_CONSOLE_ENABLED
      ? `<button type="button" class="btnSecondary btnSm btnFull" id="btnOpenAdminPortal">${isVerifiedAdmin() ? 'Open Admin Console' : 'Admin Panel'}</button>`
      : '');

  return `
    <div class="drawerOverlay ${ui.drawerOpen ? 'open' : ''}" id="drawerOverlay" role="dialog" aria-modal="true" aria-hidden="${ui.drawerOpen ? 'false' : 'true'}" aria-label="Team navigation menu">
      <aside class="drawerPanel" id="drawerPanel">
        <div class="drawerHeader">
          <div class="drawerBrandLockup">
            <img src="${escHtml(currentLogo())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
            <div>
              <strong>RDM Official</strong>
              <span>Cricket Team · Mahuawan, Bihar</span>
            </div>
          </div>
        </div>

        <div class="drawerBody">
          <div class="drawerGroupLabel">Team Sections</div>
          ${teamPages.map(([id, label]) => `
            <button type="button" class="drawerNavBtn ${ui.screen === 'subpage' && ui.morePage === id ? 'active' : ''}" data-open-subpage="${id}">
              <span class="drawerNavLeft">
                <span class="drawerNavIcon" aria-hidden="true">${drawerIcon(id)}</span>
                <span>${label}</span>
              </span>
              <span aria-hidden="true">›</span>
            </button>
          `).join('')}
        </div>

        <div class="drawerFooter">
          <button type="button" class="btnSecondary btnSm btnFull" id="btnDrawerTheme">Theme · ${escHtml(getThemeLabel(ui.theme))}</button>
          ${portalQuickBtn}
        </div>
      </aside>
    </div>
  `;
}

function renderWebFooter() {
  return `
    <footer class="webFooter">
      <div class="webFooterInner">
        <div class="webFooterBrand">
          <img src="${escHtml(currentLogo())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
          <div>
            <strong>${escHtml(formatTextCase(CLUB_INFO.orgName))}</strong>
            <span>${escHtml(CLUB_INFO.location)} · Est. ${escHtml(CLUB_INFO.founded)}</span>
          </div>
        </div>
        <div class="webFooterLinks">
          <button type="button" class="webFooterLink" data-public-tab="home">Home</button>
          <button type="button" class="webFooterLink" data-public-tab="squad">Squad</button>
          <button type="button" class="webFooterLink" data-public-tab="matches">Matches</button>
          <button type="button" class="webFooterLink" data-public-tab="gallery">Gallery</button>
          <button type="button" class="webFooterLink" data-open-subpage="records">Records</button>
          <button type="button" class="webFooterLink" data-open-subpage="honours">Honours</button>
          <button type="button" class="webFooterLink" data-open-subpage="download">Android App</button>
          <button type="button" class="webFooterLink" data-ext-url="${escHtml(CLUB_INFO.captainContactUrl)}">WhatsApp Captain ↗</button>
          ${ADMIN_CONSOLE_ENABLED ? `<button type="button" class="webFooterLink" id="btnFooterAdminPortal">Admin Panel</button>` : ''}
        </div>
      </div>
    </footer>
  `;
}

function renderPublicBottomNav() {
  const tabs = [
    ['home', 'Home'],
    ['squad', 'Squad'],
    ['matches', 'Matches'],
    ['gallery', 'Gallery'],
    ['more', 'More']
  ];
  return `
    <nav class="bottomNav" aria-label="Mobile navigation">
      <div class="bottomNavGrid">
        ${tabs.map(([id, label]) => `
          <button type="button" class="navTabBtn ${ui.screen === 'public' && ui.publicTab === id ? 'active' : ''}" data-public-tab="${id}" aria-current="${ui.screen === 'public' && ui.publicTab === id ? 'page' : 'false'}">
            <span class="navIconPill">${tabIcon(id)}</span>
            <span>${label}</span>
          </button>
        `).join('')}
      </div>
    </nav>
  `;
}

function renderHomeTab() {
  const upcoming = state.matches.find(m => !/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${m.matchStatus || ''} ${m.status || ''} ${m.note || ''}`));
  const recent = state.matches.find(m => /RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${m.matchStatus || ''} ${m.status || ''} ${m.note || ''}`));
  const pinnedUpdate = state.updates.find(u => u.pinned) || state.updates[0];
  const latestNews = state.news.find(n => n.pinned) || state.news[0];
  const featuredItem = pinnedUpdate || latestNews;

  const captain = state.players.find(p => p.id === 'RDM001') || state.players[0];
  const vice = state.players.find(p => p.id === 'RDM003');
  const keeper = state.players.find(p => p.id === 'RDM006');
  const leaders = [captain, vice, keeper].filter(Boolean);

  return `
    ${state.loadError ? `<div class="infoBanner"><span>${escHtml(state.loadError)}</span><button type="button" class="btnSecondary btnSm" id="btnRetrySync">Retry</button></div>` : ''}

    <section class="heroBannerCard">
      <div class="heroPhotoLayer" aria-hidden="true">
        <img src="${escHtml(CLUB_INFO.heroImagePath)}" alt="" referrerPolicy="no-referrer">
      </div>
      <div class="heroBannerInner">
        <div class="heroBannerTop">
          <img class="heroBannerLogo" src="${escHtml(currentLogo())}" alt="RDM Official Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
          <div class="heroBannerCopy">
            <span class="heroEyebrow">OFFICIAL CRICKET TEAM</span>
            <h1 class="heroDisplayTitle">${escHtml(CLUB_INFO.orgName)}</h1>
            <p>${escHtml(CLUB_INFO.motto)}</p>
          </div>
        </div>
        <div class="heroBannerBottom">
          <div class="heroBannerMeta">
            <span>Est. ${escHtml(CLUB_INFO.founded)}</span>
            <span aria-hidden="true">·</span>
            <span>${escHtml(CLUB_INFO.locationLabel)}</span>
          </div>
          <div class="heroToolbarActions">
            <button type="button" class="heroGhostBtn" data-open-subpage="news">Team News</button>
            <button type="button" class="heroPrimaryBtn" data-public-tab="squad">Explore Squad</button>
          </div>
        </div>
      </div>
    </section>

    <section class="kpiStripGrid" aria-label="Team overview metrics">
      <button type="button" class="kpiCardBtn" data-public-tab="squad">
        <div>
          <strong class="kpiValue num">${state.players.length}</strong>
          <span class="kpiLabel">Squad Players</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${tabIcon('squad')}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-open-subpage="honours">
        <div>
          <strong class="kpiValue num">${state.honours.length}</strong>
          <span class="kpiLabel">Team Honours</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${drawerIcon('honours')}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="matches">
        <div>
          <strong class="kpiValue num">${state.matches.length}</strong>
          <span class="kpiLabel">Matches</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${tabIcon('matches')}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="gallery">
        <div>
          <strong class="kpiValue num">${state.gallery.length}</strong>
          <span class="kpiLabel">Gallery Photos</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${tabIcon('gallery')}</span>
      </button>
    </section>

    <div class="homeSplitGrid">
      <article class="surfaceCard">
        <div>
          <div class="sectionHeader" style="margin-bottom:12px;">
            <div>
              <span class="sectionKicker">Match Centre</span>
              <h2 class="sectionTitle">${upcoming ? 'Upcoming Fixture' : recent ? 'Recent Match' : 'Match Schedule'}</h2>
            </div>
            <button type="button" class="btnGhost btnSm" data-public-tab="matches">Matches ›</button>
          </div>
          ${(upcoming || recent)
            ? renderMatchSummaryBlock(upcoming || recent)
            : '<p class="sectionSub" style="margin-top:6px;">No upcoming match has been scheduled yet. Check back or contact team management.</p>'}
        </div>
      </article>

      <article class="surfaceCard">
        <div>
          <div class="sectionHeader" style="margin-bottom:12px;">
            <div>
              <span class="sectionKicker">Official Dispatch</span>
              <h2 class="sectionTitle">${featuredItem ? escHtml(formatTextCase(featuredItem.title || 'Team Update')) : 'Team Announcements'}</h2>
            </div>
            <button type="button" class="btnGhost btnSm" data-open-subpage="updates">All Updates ›</button>
          </div>
          ${featuredItem ? `
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${escHtml(formatTextCase(featuredItem.text || ''))}</p>
            ${featuredItem.date ? `<p class="sectionSub num" style="margin-top:8px;">Published ${escHtml(featuredItem.date)}</p>` : ''}
          ` : '<p class="sectionSub">Official news, fixtures, and team notices appear here when posted by team management.</p>'}
        </div>
        ${(pinnedUpdate?.url && safeExternalUrl(pinnedUpdate.url)) ? `
          <div style="margin-top:14px;">
            <button type="button" class="btnSecondary btnSm" data-ext-url="${escHtml(safeExternalUrl(pinnedUpdate.url))}">Open Link ↗</button>
          </div>
        ` : ''}
      </article>
    </div>

    <section>
      <div class="sectionHeader" style="margin-bottom:12px;">
        <div>
          <span class="sectionKicker">Team Leadership</span>
          <h2 class="sectionTitle">Leading the Dominators</h2>
        </div>
        <button type="button" class="btnGhost btnSm" data-public-tab="squad">Full Squad ›</button>
      </div>
      <div class="leaderRow">
        ${leaders.map(p => {
          const av = avatarAttrs(p.image);
          return `
            <button type="button" class="leaderCard" data-open-player="${escHtml(p.id)}">
              <img class="${av.cls}" src="${escHtml(av.src)}" alt="${escHtml(p.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
              <div>
                <div class="leaderCardMeta">${escHtml(formatTextCase(p.role))}</div>
                <div class="leaderCardTitle">${escHtml(formatTextCase(p.name))}</div>
                ${p.detail ? `<div class="leaderCardSub">${escHtml(formatTextCase(p.detail))}</div>` : ''}
              </div>
            </button>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function renderMatchSummaryBlock(m) {
  const status = formatTextCase(m.matchStatus || m.status || 'Match');
  const meta = [m.date, m.time, m.venueName || m.venue].filter(Boolean).map(formatTextCase).join(' · ');
  return `
    <div>
      <div class="matchCardHead">
        <strong>RDM vs ${escHtml(formatTextCase(m.opponent || 'Opponent'))}</strong>
        <span class="matchStatusText">${escHtml(status)}</span>
      </div>
      ${meta ? `<div class="num" style="font-size:0.78rem;color:var(--ink-muted);margin-bottom:8px;">${escHtml(meta)}</div>` : ''}
      ${(m.ourScore || m.oppScore) ? `
        <div class="matchScoreRow num">
          <span>RDM: ${escHtml(m.ourScore || '—')}</span>
          <span>${escHtml(formatTextCase(m.opponent || 'Opp'))}: ${escHtml(m.oppScore || '—')}</span>
        </div>
      ` : ''}
      ${(m.result || m.note) ? `<p class="richText" style="margin:6px 0 0;font-size:0.84rem;color:var(--ink-secondary);">${escHtml(formatTextCase(m.result ? `${m.result}${m.margin ? ' · ' + m.margin : ''}` : m.note))}</p>` : ''}
      ${m.potm ? `<p style="margin:6px 0 0;font-size:0.8rem;font-weight:700;color:var(--brand-blue);">Player of the Match: ${escHtml(formatTextCase(m.potm))}</p>` : ''}
    </div>
  `;
}

function renderSquadTab() {
  const query = ui.squadQuery.trim().toLowerCase();
  const filtered = state.players.filter(p => {
    const roleUpper = String(p.role || '').toUpperCase();
    const filterPass =
      ui.squadFilter === 'ALL' ||
      (ui.squadFilter === 'LEADERS' && (roleUpper.includes('CAPTAIN') || roleUpper.includes('KEEPER'))) ||
      (ui.squadFilter === 'ALLROUNDER' && roleUpper.includes('ALL-ROUNDER')) ||
      (ui.squadFilter === 'BATSMAN' && roleUpper.includes('BATSMAN') && !roleUpper.includes('ALL-ROUNDER'));
    if (!filterPass) return false;
    if (!query) return true;
    const hay = `${p.name} ${p.role} ${p.detail} ${p.id} ${PLAYER_CODES[p.id] || ''} ${p.jersey || ''}`.toLowerCase();
    return hay.includes(query);
  });

  return `
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Official Roster</span>
        <h2 class="sectionTitle">RDM Squad</h2>
        <p class="sectionSub"><span class="num">${state.players.length}</span> registered players</p>
      </div>
    </div>

    <input id="squadSearchInput" class="searchInput" type="search" placeholder="Search player name, role, or jersey..." value="${escHtml(ui.squadQuery)}">

    <div class="filterRow">
      ${[
        ['ALL', 'All Players'],
        ['LEADERS', 'Leadership'],
        ['ALLROUNDER', 'All-Rounders'],
        ['BATSMAN', 'Batsmen']
      ].map(([k, label]) => `<button type="button" class="segTab ${ui.squadFilter === k ? 'active' : ''}" data-squad-filter="${k}">${label}</button>`).join('')}
    </div>

    ${filtered.length ? `
      <div class="squadGrid">
        ${filtered.map(p => {
          const code = PLAYER_CODES[p.id] || p.id;
          const av = avatarAttrs(p.image);
          return `
            <button type="button" class="playerCard" data-open-player="${escHtml(p.id)}">
              <img class="playerCardAvatar ${av.cls}" src="${escHtml(av.src)}" alt="${escHtml(p.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
              <div class="playerCardBody">
                <span class="metaCode">${escHtml(code)}${p.jersey ? ' · #' + escHtml(p.jersey) : ''}</span>
                <h3>${escHtml(formatTextCase(p.name))}</h3>
                <div class="playerCardRole">${escHtml(formatTextCase(p.role))}</div>
                ${p.detail ? `<div class="playerCardDetail">${escHtml(formatTextCase(p.detail))}</div>` : ''}
              </div>
              <span class="chevron" aria-hidden="true">›</span>
            </button>
          `;
        }).join('')}
      </div>
    ` : '<div class="emptyState">No players match your current filter.</div>'}
  `;
}

function renderMatchesTab() {
  let body = '';
  if (ui.matchesSubTab === 'fixtures') {
    body = state.matches.length
      ? `<div class="stackList">${state.matches.map(m => `<article class="surfaceCard">${renderMatchSummaryBlock(m)}</article>`).join('')}</div>`
      : '<div class="emptyState">No fixtures or match results added yet.</div>';
  } else if (ui.matchesSubTab === 'xi') {
    body = renderPlayingXiList();
  } else {
    body = renderRecordsAndTournamentsList();
  }

  return `
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Schedule &amp; Results</span>
        <h2 class="sectionTitle">Matches Centre</h2>
      </div>
    </div>
    <div class="filterRow">
      ${[
        ['fixtures', 'Fixtures & Results'],
        ['xi', 'Playing XI'],
        ['tournaments', 'Tournaments & Records']
      ].map(([id, label]) => `<button type="button" class="segTab ${ui.matchesSubTab === id ? 'active' : ''}" data-matches-sub="${id}">${label}</button>`).join('')}
    </div>
    ${body}
  `;
}

function renderPlayingXiList() {
  if (!state.lineups.length) return '<div class="emptyState">No Playing XI published yet.</div>';
  return `<div class="stackList">${state.lineups.map(l => `
    <article class="surfaceCard">
      <h3 style="margin:0 0 4px;font-size:1.25rem;">${escHtml(formatTextCase(l.title || 'Playing XI'))}</h3>
      ${l.match ? `<p style="margin:0 0 10px;font-size:0.8125rem;color:var(--ink-muted);">${escHtml(formatTextCase(l.match))}</p>` : ''}
      <div class="xiGrid num">
        ${(l.players || []).map((id, i) => {
          const pl = state.players.find(p => p.id === id);
          const label = `${i + 1}. ${formatTextCase(pl?.name || id)}`;
          return pl
            ? `<button type="button" class="xiPlayerBtn" data-open-player="${escHtml(id)}">${escHtml(label)}</button>`
            : `<div style="padding:6px 8px;">${escHtml(label)}</div>`;
        }).join('')}
      </div>
      ${(l.subs || []).length ? `
        <p style="margin:10px 0 0;font-size:0.78rem;color:var(--ink-muted);">
          Substitutes: ${l.subs.map(id => escHtml(formatTextCase(state.players.find(p => p.id === id)?.name || id))).join(' · ')}
        </p>
      ` : ''}
    </article>
  `).join('')}</div>`;
}

function renderRecordsAndTournamentsList() {
  const hasRecords = state.tournaments.length > 0 || state.records.length > 0 || state.opponents.length > 0;
  if (!hasRecords) return '<div class="emptyState">No tournaments or team records recorded yet.</div>';
  return `
    <div class="stackList">
      ${state.tournaments.map(t => `
        <article class="surfaceCard">
          <span class="sectionKicker">${escHtml(formatTextCase(t.status || 'Tournament'))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${escHtml(formatTextCase(t.name || 'Tournament'))}</h3>
          <p class="sectionSub num">${[t.season, t.position, t.venueName || t.venue].filter(Boolean).map(formatTextCase).join(' · ')}</p>
          ${t.fixtures ? `<p class="richText" style="margin:8px 0 0;font-size:0.82rem;color:var(--ink-secondary);">${escHtml(t.fixtures)}</p>` : ''}
        </article>
      `).join('')}
      ${state.records.map(r => `
        <article class="surfaceCard">
          <span class="sectionKicker">${escHtml(formatTextCase(r.season || 'Team Record'))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${escHtml(formatTextCase(r.title || 'Record'))}</h3>
          <p style="margin:0;font-weight:700;color:var(--brand-blue);" class="num">${escHtml(formatTextCase(r.value || ''))}${r.player ? ' · ' + escHtml(formatTextCase(r.player)) : ''}</p>
        </article>
      `).join('')}
      ${state.opponents.map(o => `
        <article class="surfaceCard">
          <span class="sectionKicker">Head-to-Head</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">RDM vs ${escHtml(formatTextCase(o.name || 'Opponent'))}</h3>
          <p class="sectionSub num">${Number(o.played || 0)} Played · ${Number(o.won || 0)} Won · ${Number(o.lost || 0)} Lost</p>
        </article>
      `).join('')}
    </div>
  `;
}

function renderHonoursList() {
  return `
    <div class="honoursGrid">
      ${state.honours.map(h => `
        <article class="honourCard">
          <button type="button" class="honourMediaBtn" data-zoom-src="${escHtml(h.image || currentLogo())}" data-zoom-cap="${escHtml(`${h.year} · ${h.title} — ${h.sub}`)}">
            <img src="${escHtml(h.image || currentLogo())}" alt="${escHtml(h.title)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
          </button>
          <div class="honourCardBody">
            <div class="honourCardTop">
              <span class="metaCode">${escHtml(h.year)}</span>
              <span class="honourTapHint">Tap to view full</span>
            </div>
            <h3 class="honourCardTitle">${escHtml(formatTextCase(h.title))}</h3>
            <p class="honourCardSub">${escHtml(formatTextCase(h.sub))}</p>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function renderGalleryTab() {
  const albums = ['ALL', 'TEAM PHOTOS', 'MEMORIES', 'UPDATES'];
  const items = state.gallery.filter(g => {
    const alb = String(g.album || 'MEMORIES').toUpperCase();
    return ui.galleryAlbum === 'ALL' ? !['MATCHES', 'TROPHIES'].includes(alb) : alb === ui.galleryAlbum;
  });

  return `
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Team Memories</span>
        <h2 class="sectionTitle">Team Gallery</h2>
      </div>
    </div>

    <div class="filterRow">
      ${albums.map(alb => `<button type="button" class="segTab ${ui.galleryAlbum === alb ? 'active' : ''}" data-gallery-album="${alb}">${escHtml(formatTextCase(alb))}</button>`).join('')}
    </div>

    ${items.length ? `
      <div class="galleryGrid">
        ${items.map((g, idx) => `
          <button type="button" class="galleryTile" data-zoom-gallery="${idx}">
            <img src="${escHtml(g.image)}" alt="${escHtml(g.caption || 'RDM Memory')}" referrerPolicy="no-referrer">
            <div class="galleryTileCaption">
              <strong>${escHtml(formatTextCase(g.album || 'Memories'))}</strong>
              <span>${escHtml(formatTextCase(g.caption || 'RDM Memory'))}</span>
            </div>
          </button>
        `).join('')}
      </div>
    ` : '<div class="emptyState">No photos added in this album yet.</div>'}

    <div class="sectionHeader" style="margin-top:8px;">
      <div>
        <span class="sectionKicker">Trophy Cabinet</span>
        <h2 class="sectionTitle">Team Honours</h2>
      </div>
    </div>
    ${renderHonoursList()}
  `;
}

function renderMoreTab() {
  const showWebInstall = canInstallWebPwa();

  return `
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Preferences &amp; Team Channels</span>
        <h2 class="sectionTitle">Settings &amp; More</h2>
        <p class="sectionSub">Use the top-left menu drawer to browse News, Records, Playing XI, and Team History.</p>
      </div>
    </div>

    <section class="surfaceCard">
      <div class="sectionHeader" style="margin-bottom:12px;">
        <div>
          <span class="sectionKicker">Theme Studio</span>
          <h3 class="sectionTitle" style="font-size:1.25rem;">Appearance &amp; Palette</h3>
          <p class="sectionSub">Active: ${escHtml(getThemeLabel(ui.theme))}</p>
        </div>
      </div>
      <div class="themeGrid">
        ${THEMES.map(t => `
          <button type="button" class="themeChoiceRow ${ui.theme === t.id ? 'active' : ''}" data-quick-theme="${t.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${t.swatches.map(c => `<span style="background:${c}"></span>`).join('')}
            </div>
            <div class="themeChoiceCopy">
              <strong>${escHtml(t.label)}</strong>
              <span>${escHtml(t.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${ui.theme === t.id ? 'Active' : 'Apply'}</span>
          </button>
        `).join('')}
      </div>
    </section>

    <section class="surfaceCard">
      <span class="sectionKicker">Connect</span>
      <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:10px;">Official Channels &amp; Contact</h3>
      <div class="linkRowWrap">
        <button type="button" class="linkActionBtn" data-ext-url="${escHtml(CLUB_INFO.captainContactUrl)}">WhatsApp Captain ↗</button>
        ${state.socials.filter(s => safeExternalUrl(s.url)).map(s => `
          <button type="button" class="linkActionBtn" data-ext-url="${escHtml(safeExternalUrl(s.url))}">${escHtml(formatTextCase(s.displayName || s.name))} ↗</button>
        `).join('')}
      </div>
    </section>

    <section class="surfaceCard">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Official App · v${escHtml(currentAppVersion())}</span>
          <h3 class="sectionTitle" style="font-size:1.22rem;">App &amp; Sync</h3>
          <p class="sectionSub">${isNativePlatform() ? `Installed Build v${escHtml(APP_BUILD_INFO.versionName)} · Live Cloud Sync Active` : 'Sync live team data or open the Android App & Updates centre'}</p>
        </div>
        <div class="rowActions">
          <button type="button" class="btnPrimary btnSm" data-open-subpage="download">App &amp; Updates ›</button>
          <button type="button" class="btnSecondary btnSm" id="btnRefreshClub">Sync Team Data</button>
          ${showWebInstall ? `<button type="button" class="btnSecondary btnSm" id="btnInstallWebApp">Install Web App</button>` : ''}
        </div>
      </div>
    </section>
  `;
}

/* ==================== FULL-SCREEN PLAYER PROFILE PAGE ==================== */

function renderPlayerDetailPage() {
  const player = state.players.find(p => p.id === ui.detailPlayerId);
  if (!player) {
    return `
      ${renderTopBar({ title: 'Player Profile', showBack: true, showPublicNav: true })}
      <div class="tabContent fullPageContent">
        <div class="emptyState">Player record not found.</div>
      </div>
      ${renderWebFooter()}
    `;
  }

  const av = avatarAttrs(player.image);
  const stat = state.stats.find(s => s.playerId === player.id);
  const availability = state.availability.find(a => a.playerId === player.id);
  const code = PLAYER_CODES[player.id] || player.id;
  const socials = (Array.isArray(player.socials) ? player.socials : []).filter(s => safeExternalUrl(s?.url || s));

  const hasStats = stat && (
    Number(stat.matches) > 0 ||
    Number(stat.runs) > 0 ||
    Number(stat.wickets) > 0 ||
    Number(stat.highScore) > 0
  );

  return `
    ${renderTopBar({ title: formatTextCase(player.name), showBack: true, showPublicNav: true })}
    <div class="tabContent fullPageContent">
      <section class="fullProfileHero">
        <img class="fullProfileAvatar ${av.cls}" src="${escHtml(av.src)}" alt="${escHtml(player.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
        <div>
          <span class="metaCode">${escHtml(code)} · ${escHtml(player.id)}${player.jersey ? ' · #' + escHtml(player.jersey) : ''}</span>
          <h1 class="fullProfileName">${escHtml(formatTextCase(player.name))}</h1>
          <div class="fullProfileRole">${escHtml(formatTextCase(player.role))}</div>
          ${player.detail ? `<p class="fullProfileMeta richText" style="margin:6px auto 0;">${escHtml(formatTextCase(player.detail))}</p>` : ''}
          ${player.nick ? `<p class="sectionSub" style="margin-top:6px;">Nickname: ${escHtml(formatTextCase(player.nick))}</p>` : ''}
          ${availability?.status ? `<p class="sectionSub" style="margin-top:4px;font-weight:700;color:var(--brand-blue);">Match Status: ${escHtml(formatTextCase(availability.status))}</p>` : ''}
        </div>
        <div>
          <button type="button" class="btnPrimary btnSm" id="btnDownloadDetailCard">Download Player Card</button>
        </div>
      </section>

      ${player.bio ? `
        <section class="surfaceCard">
          <span class="sectionKicker">About Player</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:6px;">Player Biography</h2>
          <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.9rem;">${escHtml(formatTextCase(player.bio))}</p>
        </section>
      ` : ''}

      <section class="surfaceCard">
        <span class="sectionKicker">Performance</span>
        <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Verified Career Statistics</h2>
        ${hasStats ? `
          <div class="statGrid4">
            <div class="statCell"><strong class="num">${Number(stat.matches || 0)}</strong><span>Matches</span></div>
            <div class="statCell"><strong class="num">${Number(stat.runs || 0)}</strong><span>Runs</span></div>
            <div class="statCell"><strong class="num">${Number(stat.highScore || 0)}</strong><span>High Score</span></div>
            <div class="statCell"><strong class="num">${Number(stat.wickets || 0)}</strong><span>Wickets</span></div>
          </div>
          <div class="statSubRow num">
            <span>4s/6s: ${Number(stat.fours || 0)}/${Number(stat.sixes || 0)}</span>
            <span>50s/100s: ${Number(stat.fifties || 0)}/${Number(stat.hundreds || 0)}</span>
            <span>SR: ${Number(stat.strikeRate || 0)}</span>
            <span>Econ: ${Number(stat.economy || 0)}</span>
            <span>Best: ${escHtml(stat.bestBowling || '—')}</span>
          </div>
        ` : '<p class="sectionSub">No verified career statistics recorded for this player yet.</p>'}
      </section>

      ${socials.length ? `
        <section class="surfaceCard">
          <span class="sectionKicker">Connect</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Official Social Links</h2>
          <div class="linkRowWrap">
            ${socials.map((s, idx) => {
              const url = safeExternalUrl(typeof s === 'string' ? s : s.url);
              const label = typeof s === 'string' ? `Social ${idx + 1}` : (s.name || `Social ${idx + 1}`);
              return `<button type="button" class="linkActionBtn" data-ext-url="${escHtml(url)}">${escHtml(formatTextCase(label))} ↗</button>`;
            }).join('')}
          </div>
        </section>
      ` : ''}
    </div>
    ${renderWebFooter()}
  `;
}

/* ==================== FULL-SCREEN SUBPAGES (MORE / DRAWER) ==================== */

function renderTeamSubpage() {
  const titles = {
    news: 'Team News',
    updates: 'Official Updates',
    records: 'Team Records',
    tournaments: 'Tournaments & H2H',
    xi: 'Playing XI',
    honours: 'Team Honours',
    socials: 'Channels & Contact',
    about: 'About RDM',
    download: 'Get Android App'
  };
  const pageTitle = titles[ui.morePage] || 'Team Info';
  let body = '';

  if (ui.morePage === 'news') {
    body = state.news.length
      ? `<div class="stackList">${state.news.map(n => `
          <article class="surfaceCard">
            <span class="sectionKicker">${n.pinned ? 'Pinned Announcement' : 'Team News'}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${escHtml(formatTextCase(n.title || 'Announcement'))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${escHtml(formatTextCase(n.text || ''))}</p>
          </article>
        `).join('')}</div>`
      : '<div class="emptyState">No team news announcements posted yet.</div>';
  } else if (ui.morePage === 'updates') {
    body = state.updates.length
      ? `<div class="stackList">${state.updates.map(u => `
          <article class="surfaceCard">
            <span class="sectionKicker">${escHtml(formatTextCase(u.category || 'Official Update'))}${u.date ? ' · ' + escHtml(u.date) : ''}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${escHtml(formatTextCase(u.title || 'Update'))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${escHtml(formatTextCase(u.text || ''))}</p>
            ${(u.url && safeExternalUrl(u.url)) ? `<div style="margin-top:12px;"><button type="button" class="btnSecondary btnSm" data-ext-url="${escHtml(safeExternalUrl(u.url))}">Open Link ↗</button></div>` : ''}
          </article>
        `).join('')}</div>`
      : '<div class="emptyState">No official updates published yet.</div>';
  } else if (ui.morePage === 'xi') {
    body = renderPlayingXiList();
  } else if (ui.morePage === 'records') {
    body = state.records.length
      ? `<div class="stackList">${state.records.map(r => `
          <article class="surfaceCard">
            <span class="sectionKicker">${escHtml(formatTextCase(r.season || 'Team Record'))}</span>
            <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:4px;">${escHtml(formatTextCase(r.title || 'Record'))}</h3>
            <p style="margin:0;font-weight:700;color:var(--brand-blue);" class="num">${escHtml(formatTextCase(r.value || ''))}${r.player ? ' · ' + escHtml(formatTextCase(r.player)) : ''}</p>
          </article>
        `).join('')}</div>`
      : '<div class="emptyState">No team records recorded yet.</div>';
  } else if (ui.morePage === 'tournaments') {
    body = renderRecordsAndTournamentsList();
  } else if (ui.morePage === 'honours') {
    body = renderHonoursList();
  } else if (ui.morePage === 'socials') {
    body = `
      <div class="surfaceCard">
        <span class="sectionKicker">Direct Contact</span>
        <h3 class="sectionTitle" style="font-size:1.3rem;margin-bottom:8px;">Team Channels &amp; Captain</h3>
        <div class="linkRowWrap">
          <button type="button" class="linkActionBtn" data-ext-url="${escHtml(CLUB_INFO.captainContactUrl)}">WhatsApp Captain ↗</button>
          ${state.socials.filter(s => safeExternalUrl(s.url)).map(s => `
            <button type="button" class="linkActionBtn" data-ext-url="${escHtml(safeExternalUrl(s.url))}">${escHtml(formatTextCase(s.displayName || s.name))} ↗</button>
          `).join('')}
        </div>
      </div>
    `;
  } else if (ui.morePage === 'about') {
    body = `
      <div class="surfaceCard">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
          <img src="${escHtml(currentLogo())}" alt="RDM Logo" referrerPolicy="no-referrer" style="width:68px;height:68px;border-radius:50%;background:#FFFFFF;border:1.5px solid var(--border-strong);object-fit:cover;flex-shrink:0;">
          <div>
            <span class="sectionKicker">Est. ${escHtml(CLUB_INFO.founded)} · ${escHtml(CLUB_INFO.locationLabel)}</span>
            <h3 class="sectionTitle">${escHtml(formatTextCase(CLUB_INFO.orgName))}</h3>
            <p class="sectionSub" style="font-weight:700;color:var(--brand-blue);">${escHtml(CLUB_INFO.motto)}</p>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:14px;color:var(--ink-secondary);font-size:0.93rem;line-height:1.72;">
          <p class="richText" style="margin:0;">Founded in 2024 in the cricket-loving village of Mahuawan in Gopalganj district, Bihar, Rehan Dominators Mahuawan (RDM) began with a clear vision: to turn raw grassroots cricket talent into a structured, fearless, and respected competitive side. What started on local grounds with lifelong friends quickly grew into one of the most organized and passionate village-to-district cricket units in the region.</p>
          <p class="richText" style="margin:0;">At the heart of RDM is our founding philosophy — One Team, One Dream, One Domination. Every match day is built on brotherhood, respect for the game, disciplined training, and total commitment in all three departments. Whether defending a modest total under pressure or chasing targets in front of local supporters, every player wears the RDM crest with pride and accountability.</p>
          <p class="richText" style="margin:0;">Guided on the field by Captain Rehan Alam (#45), Vice-Captain Saif Ali, and Wicketkeeper-Batsman Soaib Akhtar, our 17-member active roster blends explosive top-order stroke makers, dependable middle-order finishers, sharp all-rounders, and strike bowlers capable of turning any contest around. Together, the core squad has built an identity defined by teamwork and composure in crunch overs.</p>
          <p class="richText" style="margin:0;">RDM’s competitive pedigree is marked by landmark achievements in regional tournaments — highlighted by lifting the Mahuawan Premier League (MPL) Championship Trophy in 2024 and finishing as MPL Runner-Up in 2025. Each season adds new milestones, head-to-head rivalries, individual records, and unforgettable team memories celebrated across our community.</p>
          <p class="richText" style="margin:0;">Our official Website, installable Web App (PWA), and Android APK keep players, management, and fans connected through one live digital platform. From instant match fixtures, verified career statistics, Playing XI announcements, and downloadable player identity cards to real-time news and direct team channels, RDM Official brings every update directly to your pocket.</p>
        </div>
      </div>
    `;
  } else {
    const showWebInstall = canInstallWebPwa();
    const upd = evaluateAvailableUpdate();
    body = `
      <div class="surfaceCard">
        <span class="sectionKicker">Official Android APK · v${escHtml(upd.latestVersion)}</span>
        <h3 class="sectionTitle" style="font-size:1.35rem;margin-bottom:8px;">RDM Official Android App</h3>
        <p style="margin:0 0 12px;color:var(--ink-secondary);font-size:0.9rem;">
          ${isNativePlatform()
            ? `You are running the native RDM Official Android App (v${escHtml(APP_BUILD_INFO.versionName)}). Check for the newest build and download updates directly right here — all data stays synced live with the Website.`
            : 'Download the latest RDM Official Android APK directly to your phone. The Website, PWA, and Android App share the exact same live squad profiles, fixtures, and Admin Panel.'}
        </p>
        ${upd.hasUpdate ? `<div class="infoBanner" style="margin-bottom:12px;"><span>Update v${escHtml(upd.latestVersion)} available — ${escHtml(upd.notes)}</span></div>` : ''}
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;">
          <span class="metaCode">${isNativePlatform() ? `Installed: v${escHtml(APP_BUILD_INFO.versionName)}` : `Web Version: v${escHtml(APP_BUILD_INFO.versionName)}`}</span>
          <span class="metaCode">Latest APK: v${escHtml(upd.latestVersion)}</span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          <button type="button" class="btnPrimary btnSm" id="btnDownloadLatestApk">Download Latest APK (v${escHtml(upd.latestVersion)})</button>
          <button type="button" class="btnSecondary btnSm" id="btnCheckAppUpdate">Check for Update</button>
          ${showWebInstall ? `<button type="button" class="btnSecondary btnSm" id="btnInstallWebApp">Install Web App</button>` : ''}
          <button type="button" class="btnSecondary btnSm" data-public-tab="home">Back to Home</button>
        </div>
      </div>
    `;
  }

  return `
    ${renderTopBar({ title: pageTitle, showBack: true, showPublicNav: true })}
    <div class="tabContent fullPageContent">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Rehan Dominators Mahuawan</span>
          <h1 class="sectionTitle">${escHtml(pageTitle)}</h1>
        </div>
      </div>
      ${body}
    </div>
    ${renderWebFooter()}
  `;
}

/* ==================== ADMIN CONSOLE AUTH (WEBSITE, PWA & ANDROID APK) ==================== */

function renderAdminPortalAuthScreen() {
  if (!ADMIN_CONSOLE_ENABLED) return renderPublicScreen();
  return `
    ${renderTopBar({
      title: 'RDM Admin Panel',
      showBack: true,
      showPublicNav: false,
      rightActionHtml: `<button type="button" class="topActionBtn" id="btnPortalPublicView">Public View</button>`
    })}
    <div class="loginCardWrap">
      <div class="surfaceCard">
        <div class="loginLogoBox">
          <img src="${escHtml(currentLogo())}" alt="RDM Crest" referrerPolicy="no-referrer">
        </div>
        <h2 class="sectionTitle" style="text-align:center;">Admin Panel Unlock</h2>
        <p class="sectionSub" style="text-align:center;margin-bottom:16px;">Enter your APK Admin Password to open the Admin Console. No username required. (Website Admin uses its separate private link.)</p>
        ${ui.loginError ? `<div class="errorBanner" style="margin-bottom:12px;">${escHtml(ui.loginError)}</div>` : ''}
        <form id="rdmPortalAuthForm" class="formStack">
          <label class="fieldBlock">
            <span>Admin Password</span>
            <div class="passwordWrap">
              <input id="loginPassword" name="password" type="password" autocomplete="current-password" placeholder="Enter admin password" required>
              <button type="button" class="togglePwBtn" id="btnTogglePw">Show</button>
            </div>
          </label>
          <button type="submit" class="btnPrimary btnFull" id="btnLoginSubmit" ${ui.loginBusy ? 'disabled' : ''}>
            ${ui.loginBusy ? 'Unlocking Admin Panel…' : 'Open Admin Panel'}
          </button>
        </form>
      </div>
    </div>
  `;
}

function renderPlayerPortalScreen() {
  if (!PORTAL_ENABLED || ui.portalMode !== 'player' || !ui.portalPlayerId) return renderPublicScreen();
  const player = state.players.find(p => p.id === ui.portalPlayerId);
  if (!player) {
    return `
      ${renderTopBar({
        title: 'Player Portal',
        showBack: false,
        showPublicNav: false,
        rightActionHtml: `<button type="button" class="topActionBtn" id="btnPortalPublicView">Public View</button>`
      })}
      <div class="tabContent fullPageContent">
        <div class="emptyState">Player profile not found.</div>
      </div>
    `;
  }

  const av = avatarAttrs(player.image);
  const stat = state.stats.find(s => s.playerId === player.id);
  const availability = state.availability.find(a => a.playerId === player.id)?.status || 'NOT SET';
  const code = PLAYER_CODES[player.id] || player.id;
  const socials = (Array.isArray(player.socials) ? player.socials : []).map((s, idx) => (
    typeof s === 'string'
      ? { name: `Social ${idx + 1}`, url: s }
      : { name: s?.name || `Social ${idx + 1}`, url: s?.url || '' }
  )).filter(s => safeExternalUrl(s.url));
  const cloudVerified = canEditPlayerPortal(player.id);

  const hasStats = stat && (
    Number(stat.matches) > 0 ||
    Number(stat.runs) > 0 ||
    Number(stat.wickets) > 0 ||
    Number(stat.highScore) > 0
  );

  return `
    ${renderTopBar({
      title: `${formatTextCase(player.name)} · Portal`,
      showBack: false,
      showPublicNav: false,
      rightActionHtml: `<button type="button" class="topActionBtn" id="btnPortalPublicView">Public View</button>`
    })}
    <div class="tabContent fullPageContent">
      ${cloudVerified ? `
        <div class="infoBanner">
          <span>Cloud Sync Active (${escHtml(state.user?.email || 'Verified')}) — Edits update Website &amp; Android App live.</span>
          <button type="button" class="btnSecondary btnSm" id="btnLogout">Sign Out</button>
        </div>
      ` : `
        <div class="infoBanner">
          <span>Verify your Firebase sync account once to publish edits live to Website &amp; Android App.</span>
          <button type="button" class="btnPrimary btnSm" id="btnPlayerPortalVerify">Connect Sync</button>
        </div>
      `}

      <section class="fullProfileHero">
        <img class="fullProfileAvatar ${av.cls}" src="${escHtml(av.src)}" alt="${escHtml(player.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
        <div>
          <span class="metaCode">${escHtml(code)} · ${escHtml(player.id)}${player.jersey ? ' · #' + escHtml(player.jersey) : ''}</span>
          <h1 class="fullProfileName">${escHtml(formatTextCase(player.name))}</h1>
          <div class="fullProfileRole">${escHtml(formatTextCase(player.role))}</div>
          ${player.detail ? `<p class="fullProfileMeta richText" style="margin:6px auto 0;">${escHtml(formatTextCase(player.detail))}</p>` : ''}
          ${player.nick ? `<p class="sectionSub" style="margin-top:6px;">Nickname: ${escHtml(formatTextCase(player.nick))}</p>` : ''}
        </div>
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px;">
          <button type="button" class="btnPrimary btnSm" id="btnPortalPhoto">Change Photo</button>
          <button type="button" class="btnSecondary btnSm" id="btnPortalResetPhoto">Use RDM Logo</button>
          <button type="button" class="btnSecondary btnSm" id="btnDownloadPortalCard">Download Card</button>
        </div>
      </section>

      <section class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <div>
            <span class="sectionKicker">Match Status</span>
            <h2 class="sectionTitle" style="font-size:1.25rem;">My Match Availability</h2>
            <p class="sectionSub" style="font-weight:700;color:var(--brand-blue);">Current: ${escHtml(formatTextCase(availability))}</p>
          </div>
          <div class="rowActions">
            <button type="button" class="btnPrimary btnSm" id="btnPortalAvailYes">Available</button>
            <button type="button" class="btnSecondary btnSm" id="btnPortalAvailNo">Unavailable</button>
          </div>
        </div>
      </section>

      <section class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <div>
            <span class="sectionKicker">My Profile Control</span>
            <h2 class="sectionTitle" style="font-size:1.25rem;">Personal Info &amp; Bio</h2>
          </div>
          <button type="button" class="btnPrimary btnSm" id="btnPortalEditProfile">Edit Info</button>
        </div>
        <p style="margin:0 0 6px;font-size:0.86rem;color:var(--ink-secondary);"><strong>Jersey:</strong> ${player.jersey ? '#' + escHtml(player.jersey) : 'Not set'} · <strong>Nickname:</strong> ${player.nick ? escHtml(formatTextCase(player.nick)) : 'Not set'}</p>
        <p class="richText" style="margin:0;font-size:0.88rem;color:var(--ink-secondary);">${player.bio ? escHtml(formatTextCase(player.bio)) : 'No bio added yet.'}</p>
      </section>

      <section class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <div>
            <span class="sectionKicker">My Socials (Max 3)</span>
            <h2 class="sectionTitle" style="font-size:1.25rem;">Official Social Links</h2>
          </div>
          ${socials.length < 3 ? `<button type="button" class="btnPrimary btnSm" id="btnPortalAddSocial">+ Add Social</button>` : ''}
        </div>
        ${socials.length ? socials.map((s, idx) => `
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.88rem;">${escHtml(formatTextCase(s.name))}</strong>
              <span style="font-size:0.74rem;color:var(--ink-muted);word-break:break-all;">${escHtml(s.url)}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-portal-ext="${escHtml(safeExternalUrl(s.url))}">Open</button>
              <button type="button" class="btnDanger btnSm" data-portal-del-social="${idx}">Remove</button>
            </div>
          </div>
        `).join('') : '<p class="sectionSub">No social links added yet.</p>'}
      </section>

      <section class="surfaceCard">
        <span class="sectionKicker">Verified Performance</span>
        <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Career Statistics</h2>
        ${hasStats ? `
          <div class="statGrid4">
            <div class="statCell"><strong class="num">${Number(stat.matches || 0)}</strong><span>Matches</span></div>
            <div class="statCell"><strong class="num">${Number(stat.runs || 0)}</strong><span>Runs</span></div>
            <div class="statCell"><strong class="num">${Number(stat.highScore || 0)}</strong><span>High Score</span></div>
            <div class="statCell"><strong class="num">${Number(stat.wickets || 0)}</strong><span>Wickets</span></div>
          </div>
          <div class="statSubRow num">
            <span>4s/6s: ${Number(stat.fours || 0)}/${Number(stat.sixes || 0)}</span>
            <span>50s/100s: ${Number(stat.fifties || 0)}/${Number(stat.hundreds || 0)}</span>
            <span>SR: ${Number(stat.strikeRate || 0)}</span>
            <span>Econ: ${Number(stat.economy || 0)}</span>
            <span>Best: ${escHtml(stat.bestBowling || '—')}</span>
          </div>
        ` : '<p class="sectionSub">Career statistics are updated by team management after official matches.</p>'}
      </section>
    </div>
  `;
}

function renderAdminDashboard() {
  if (!ADMIN_CONSOLE_ENABLED) return renderPublicScreen();
  if (!isVerifiedAdmin()) return renderAdminPortalAuthScreen();

  let tabBody = '';
  if (ui.adminTab === 'overview') {
    tabBody = `
      <div class="kpiStripGrid">
        <div class="factBox"><strong class="num">${state.players.length}</strong><span>Squad Players</span></div>
        <div class="factBox"><strong class="num">${state.matches.length}</strong><span>Matches</span></div>
        <div class="factBox"><strong class="num">${state.news.length + state.updates.length}</strong><span>News &amp; Updates</span></div>
        <div class="factBox"><strong class="num">${state.gallery.length}</strong><span>Gallery Photos</span></div>
      </div>

      <div class="surfaceCard">
        <h3 class="sectionTitle" style="font-size:1.25rem;margin-bottom:12px;">Quick Admin Actions</h3>
        <div class="adminActionGrid">
          <button type="button" class="btnPrimary btnSm" data-admin-action="addPlayer">+ Add Player</button>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addMatch">+ Match / Result</button>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addNews">+ Team News</button>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addUpdate">+ Official Update</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addGallery">+ Gallery Photo</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addLineup">+ Playing XI</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addHonour">+ Team Honour</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addRecord">+ Team Record</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addTournament">+ Tournament</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addSocial">+ Social Link</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="editAppConfig">App &amp; APK Update</button>
        </div>
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:8px;">
          <div>
            <span class="sectionKicker">APK Admin v${escHtml(currentAppVersion())} · ${isFirebaseCloudAdmin() ? 'Firebase Cloud Sync Live' : 'Local Admin Unlocked'}</span>
            <h3 class="sectionTitle" style="font-size:1.22rem;">Website, PWA &amp; Android APK Connected</h3>
            <p class="sectionSub">${isFirebaseCloudAdmin()
              ? 'Every change published here saves to Firebase and updates Website, PWA, and all installed Android APKs in real time.'
              : 'APK Admin unlocked with password. Connect Firebase Cloud Sync once if live cloud rules require signed-in Firebase Admin Auth.'}</p>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            ${!isFirebaseCloudAdmin() ? '<button type="button" class="btnPrimary btnSm" id="btnAdminConnectFirebase">Connect Cloud Sync</button>' : ''}
            <button type="button" class="btnSecondary btnSm" data-admin-action="editAppConfig">Configure APK</button>
          </div>
        </div>
      </div>
    `;
  } else if (ui.adminTab === 'squad') {
    tabBody = `
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:8px;">
          <div><h3 class="sectionTitle" style="font-size:1.25rem;">Manage Squad (Add, Edit, Stats, Remove)</h3></div>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addPlayer">+ Add Player</button>
        </div>
        <div>
          ${state.players.map(p => {
            const av = state.availability.find(a => a.playerId === p.id)?.status || 'NOT SET';
            return `
              <div class="listRowItem">
                <div style="min-width:0;">
                  <strong style="display:block;font-size:0.92rem;">${escHtml(formatTextCase(p.name))}</strong>
                  <span class="num" style="font-size:0.76rem;color:var(--ink-muted);">${escHtml(p.id)} · ${escHtml(formatTextCase(av))}</span>
                </div>
                <div class="rowActions">
                  <button type="button" class="btnSecondary btnSm" data-admin-edit-player="${escHtml(p.id)}">Edit</button>
                  <button type="button" class="btnSecondary btnSm" data-admin-edit-stats="${escHtml(p.id)}">Stats</button>
                  <button type="button" class="btnSecondary btnSm" data-admin-avail="${escHtml(p.id)}">Avail</button>
                  <button type="button" class="btnDanger btnSm" data-admin-remove-player="${escHtml(p.id)}">Remove</button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  } else if (ui.adminTab === 'matches') {
    tabBody = `
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Matches (${state.matches.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addMatch">+ Match</button>
        </div>
        ${state.matches.length ? state.matches.map(m => `
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">RDM vs ${escHtml(formatTextCase(m.opponent || 'Opponent'))}</strong>
              <span class="num" style="font-size:0.76rem;color:var(--ink-muted);">${escHtml(formatTextCase(m.matchStatus || m.status || 'Match'))} · ${escHtml(m.date || 'Date TBA')}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-match="${escHtml(m._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Matches:${escHtml(m._docId)}">Delete</button>
            </div>
          </div>
        `).join('') : '<p class="sectionSub">No matches yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Playing XI (${state.lineups.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addLineup">+ Lineup</button>
        </div>
        ${state.lineups.length ? state.lineups.map(l => `
          <div class="listRowItem">
            <div>
              <strong style="display:block;font-size:0.9rem;">${escHtml(formatTextCase(l.title || 'Playing XI'))}</strong>
              <span style="font-size:0.76rem;color:var(--ink-muted);">${escHtml(formatTextCase(l.match || ''))}</span>
            </div>
            <button type="button" class="btnDanger btnSm" data-admin-del="PlayingXI:${escHtml(l._docId)}">Delete</button>
          </div>
        `).join('') : '<p class="sectionSub">No lineups yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Tournaments &amp; Records (${state.tournaments.length + state.records.length})</h3>
          <div style="display:flex;gap:6px;">
            <button type="button" class="btnPrimary btnSm" data-admin-action="addTournament">+ Tournament</button>
            <button type="button" class="btnSecondary btnSm" data-admin-action="addRecord">+ Record</button>
          </div>
        </div>
        ${[
          ...state.tournaments.map(t => ({ _col: 'Tournaments', _docId: t._docId, title: t.name || 'Tournament', sub: [t.season, t.status, t.position].filter(Boolean).join(' · ') })),
          ...state.records.map(r => ({ _col: 'TeamRecords', _docId: r._docId, title: r.title || 'Record', sub: [r.value, r.player, r.season].filter(Boolean).join(' · ') }))
        ].map(item => `
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${escHtml(formatTextCase(item.title))}</strong>
              <span style="font-size:0.75rem;color:var(--ink-muted);">${escHtml(item._col)}${item.sub ? ' · ' + escHtml(formatTextCase(item.sub)) : ''}</span>
            </div>
            <button type="button" class="btnDanger btnSm" data-admin-del="${escHtml(item._col)}:${escHtml(item._docId)}">Delete</button>
          </div>
        `).join('') || '<p class="sectionSub">No tournaments or records added yet.</p>'}
      </div>
    `;
  } else {
    tabBody = `
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">News &amp; Official Updates</h3>
          <div style="display:flex;gap:6px;">
            <button type="button" class="btnPrimary btnSm" data-admin-action="addNews">+ News</button>
            <button type="button" class="btnSecondary btnSm" data-admin-action="addUpdate">+ Update</button>
          </div>
        </div>
        ${[...state.news.map(x => ({ ...x, _col: 'News' })), ...state.updates.map(x => ({ ...x, _col: 'Updates' }))].map(item => `
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${item.pinned ? '[Pinned] ' : ''}${escHtml(formatTextCase(item.title || 'Item'))}</strong>
              <span style="font-size:0.75rem;color:var(--ink-muted);">${escHtml(item._col)}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-pin="${escHtml(item._col)}:${escHtml(item._docId)}:${item.pinned ? '0' : '1'}">${item.pinned ? 'Unpin' : 'Pin'}</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="${escHtml(item._col)}:${escHtml(item._docId)}">Delete</button>
            </div>
          </div>
        `).join('') || '<p class="sectionSub">No news or updates yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Team Honours (${state.honours.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addHonour">+ Honour</button>
        </div>
        ${state.honours.length ? state.honours.map(h => `
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${escHtml(h.year || '')} · ${escHtml(formatTextCase(h.title || 'Honour'))}</strong>
              <span style="font-size:0.75rem;color:var(--ink-muted);">${escHtml(formatTextCase(h.sub || ''))}</span>
            </div>
            <button type="button" class="btnDanger btnSm" data-admin-del="Honours:${escHtml(h._docId)}">Delete</button>
          </div>
        `).join('') : '<p class="sectionSub">No honours yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Gallery Photos (${state.gallery.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addGallery">+ Photo</button>
        </div>
        ${state.gallery.length ? state.gallery.map(g => `
          <div class="listRowItem">
            <div style="display:flex;align-items:center;gap:10px;min-width:0;">
              <img src="${escHtml(g.image)}" alt="" referrerPolicy="no-referrer" style="width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0;">
              <div style="min-width:0;">
                <strong style="display:block;font-size:0.86rem;">${escHtml(formatTextCase(g.caption || 'Memory'))}</strong>
                <span style="font-size:0.75rem;color:var(--ink-muted);">${escHtml(formatTextCase(g.album || 'MEMORIES'))}</span>
              </div>
            </div>
            <button type="button" class="btnDanger btnSm" data-admin-del="Gallery:${escHtml(g._docId)}">Delete</button>
          </div>
        `).join('') : '<p class="sectionSub">No gallery photos yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Social Channels</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addSocial">+ Social</button>
        </div>
        ${state.socials.map(s => `
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.88rem;">${escHtml(formatTextCase(s.displayName || s.name))}</strong>
              <span style="font-size:0.74rem;color:var(--ink-muted);word-break:break-all;">${escHtml(s.url || 'No link set')}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-social="${escHtml(s._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Socials:${escHtml(s._docId)}">Delete</button>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:8px;">
          <div>
            <h3 class="sectionTitle" style="font-size:1.25rem;">App &amp; APK Update Settings</h3>
            <p class="sectionSub">Latest APK: v${escHtml(currentAppVersion())} (Code ${escHtml(String(state.appVersionCode || APP_BUILD_INFO.versionCode))})</p>
          </div>
          <button type="button" class="btnPrimary btnSm" data-admin-action="editAppConfig">Edit APK Update</button>
        </div>
        <p style="margin:0;font-size:0.78rem;color:var(--ink-muted);word-break:break-all;">APK URL Configured</p>
      </div>
    `;
  }

  return `
    ${renderTopBar({
      title: 'Admin Console',
      showBack: true,
      showPublicNav: true,
      rightActionHtml: `<button type="button" class="topActionBtn" id="btnLogout">Logout</button>`
    })}

    <div class="tabContent fullPageContent">
      <div class="filterRow">
        ${[
          ['overview', 'Overview'],
          ['squad', 'Squad & Stats'],
          ['matches', 'Matches & XI'],
          ['content', 'Content & Media']
        ].map(([k, label]) => `<button type="button" class="segTab ${ui.adminTab === k ? 'active' : ''}" data-admin-tab="${k}">${label}</button>`).join('')}
      </div>
      ${tabBody}
    </div>
    ${renderWebFooter()}
  `;
}

function renderPublicScreen() {
  let content = '';
  if (ui.publicTab === 'home') content = renderHomeTab();
  else if (ui.publicTab === 'squad') content = renderSquadTab();
  else if (ui.publicTab === 'matches') content = renderMatchesTab();
  else if (ui.publicTab === 'gallery') content = renderGalleryTab();
  else content = renderMoreTab();

  return `
    ${renderTopBar({ title: 'RDM Official', showBack: false, showPublicNav: true })}
    <div class="tabContent">${content}</div>
    ${renderWebFooter()}
    ${renderPublicBottomNav()}
  `;
}

/* ==================== RENDER & EVENT BINDINGS ==================== */

function renderApp() {
  const root = document.getElementById('appViewport');
  if (!root) return;

  let html = '';
  if (ui.screen === 'playerDetail') html = renderPlayerDetailPage();
  else if (ui.screen === 'subpage') html = renderTeamSubpage();
  else if (ui.screen === 'playerPortal') html = renderPlayerPortalScreen();
  else if (ui.screen === 'portalAuth') html = renderAdminPortalAuthScreen();
  else if (ui.screen === 'admin') html = renderAdminDashboard();
  else html = renderPublicScreen();

  root.innerHTML = html + renderSideDrawer();
  bindScreenEvents();
}

function bindScreenEvents() {
  const q = id => document.getElementById(id);

  q('btnStepBack')?.addEventListener('click', () => {
    if (!stepBackOne()) navigateTo({ screen: 'public', publicTab: 'home' });
  });

  q('btnOpenDrawer')?.addEventListener('click', () => {
    setDrawerOpen(true);
  });

  const drawerOverlay = q('drawerOverlay');
  const drawerPanel = q('drawerPanel');
  drawerOverlay?.addEventListener('click', e => {
    if (e.target.id === 'drawerOverlay') setDrawerOpen(false);
  });

  if (drawerOverlay && drawerPanel) {
    let startX = 0;
    let deltaX = 0;
    let tracking = false;
    drawerPanel.addEventListener('touchstart', e => {
      if (!ui.drawerOpen || e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      deltaX = 0;
      tracking = true;
      drawerOverlay.classList.add('dragging');
    }, { passive: true });
    drawerPanel.addEventListener('touchmove', e => {
      if (!tracking || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - startX;
      deltaX = Math.min(0, dx);
      drawerPanel.style.transform = `translateX(${deltaX}px)`;
    }, { passive: true });
    const finishSwipe = () => {
      if (!tracking) return;
      tracking = false;
      drawerOverlay.classList.remove('dragging');
      drawerPanel.style.transform = '';
      if (deltaX <= -68) setDrawerOpen(false);
    };
    drawerPanel.addEventListener('touchend', finishSwipe, { passive: true });
    drawerPanel.addEventListener('touchcancel', finishSwipe, { passive: true });
  }

  q('btnPickTheme')?.addEventListener('click', () => {
    openThemeSheet({ currentTheme: ui.theme, onSelectTheme: applyTheme });
  });
  q('btnDrawerTheme')?.addEventListener('click', () => {
    setDrawerOpen(false);
    openThemeSheet({ currentTheme: ui.theme, onSelectTheme: applyTheme });
  });
  document.querySelectorAll('[data-quick-theme]').forEach(btn => {
    btn.addEventListener('click', () => applyTheme(btn.dataset.quickTheme));
  });

  q('btnBrandHome')?.addEventListener('click', () => {
    navigateTo({ screen: 'public', publicTab: 'home' });
  });

  q('btnPortalPublicView')?.addEventListener('click', () => {
    navigateTo({ screen: 'public', publicTab: 'home' });
  });

  q('btnReturnPortal')?.addEventListener('click', () => {
    setDrawerOpen(false);
    if (ui.portalMode === 'admin') navigateTo({ screen: 'admin', adminTab: 'overview' });
    else if (ui.portalMode === 'player' && ui.portalPlayerId) navigateTo({ screen: 'playerPortal' });
  });

  const openAdminConsoleFromApp = () => {
    setDrawerOpen(false);
    navigateTo({ screen: isVerifiedAdmin() ? 'admin' : 'portalAuth', adminTab: 'overview' });
  };
  q('btnOpenAdminPortal')?.addEventListener('click', openAdminConsoleFromApp);
  q('btnFooterAdminPortal')?.addEventListener('click', openAdminConsoleFromApp);

  q('btnDownloadLatestApk')?.addEventListener('click', () => {
    const upd = evaluateAvailableUpdate();
    downloadApkFile(upd.apkUrl || currentApkUrl());
    showToast(`Downloading RDM Official APK v${upd.latestVersion}...`);
  });

  q('btnCheckAppUpdate')?.addEventListener('click', async () => {
    showToast('Checking for latest APK update...');
    await checkRemoteAppVersion();
    renderApp();
    maybeShowAppUpdatePopup(true);
  });

  q('btnRefreshClub')?.addEventListener('click', async () => {
    showToast('Syncing team data...');
    await loadClubData();
    renderApp();
    showToast('Team data synced');
  });
  q('btnRetrySync')?.addEventListener('click', async () => {
    await loadClubData();
    renderApp();
  });
  q('btnInstallWebApp')?.addEventListener('click', async () => {
    const installed = await triggerWebPwaInstall();
    if (installed) {
      renderApp();
      showToast('App installed');
    }
  });

  q('btnLogout')?.addEventListener('click', () => {
    openConfirmSheet({
      title: 'Confirm Sign Out',
      message: 'Sign out of Admin Cloud Sync on this device?',
      confirmLabel: 'Sign Out',
      danger: true,
      onConfirm: async () => {
        await logoutAccount();
        ui.drawerOpen = false;
        if (ui.portalMode === 'admin') navigateTo({ screen: 'portalAuth' }, { replace: true });
        else if (ui.screen === 'admin') navigateTo({ screen: 'public', publicTab: 'home' }, { replace: true });
        else renderApp();
        showToast('Signed out');
      }
    });
  });

  q('btnTogglePw')?.addEventListener('click', () => {
    const pw = q('loginPassword');
    const btn = q('btnTogglePw');
    if (!pw || !btn) return;
    const hidden = pw.type === 'password';
    pw.type = hidden ? 'text' : 'password';
    btn.textContent = hidden ? 'Hide' : 'Show';
  });

  q('rdmPortalAuthForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const password = q('loginPassword')?.value || '';
    ui.loginBusy = true;
    ui.loginError = '';
    renderApp();

    try {
      const res = await loginAdminWithPassword(password);
      ui.loginBusy = false;
      showToast(res.cloudSynced ? 'Admin Panel unlocked (Cloud Sync Live)' : 'Admin Panel unlocked');
      navigateTo({ screen: 'admin', adminTab: 'overview' }, { replace: true });
    } catch (err) {
      ui.loginBusy = false;
      const code = String(err?.code || err?.message || '');
      if (code === 'INVALID_ADMIN_PASSWORD' || code === 'PASSWORD_REQUIRED') {
        ui.loginError = 'Incorrect Admin password. Please enter the correct password.';
      } else {
        ui.loginError = 'Unable to unlock Admin Panel. Please try again.';
      }
      renderApp();
    }
  });

  bindPlayerPortalEvents();

  document.querySelectorAll('[data-public-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      navigateTo({ screen: 'public', publicTab: btn.dataset.publicTab });
    });
  });

  document.querySelectorAll('[data-open-subpage]').forEach(btn => {
    btn.addEventListener('click', () => {
      navigateTo({ screen: 'subpage', morePage: btn.dataset.openSubpage });
    });
  });

  document.querySelectorAll('[data-open-player]').forEach(btn => {
    btn.addEventListener('click', () => {
      navigateTo({ screen: 'playerDetail', detailPlayerId: btn.dataset.openPlayer });
    });
  });

  q('btnDownloadDetailCard')?.addEventListener('click', async () => {
    const p = state.players.find(x => x.id === ui.detailPlayerId);
    if (!p) return;
    try {
      await downloadPlayerProfileCard({ player: p, brandLogo: currentLogo() });
    } catch (_) {
      showToast('Unable to export profile card');
    }
  });

  const searchEl = q('squadSearchInput');
  if (searchEl) {
    searchEl.addEventListener('input', e => {
      const pos = e.target.selectionStart;
      ui.squadQuery = e.target.value;
      renderApp();
      const restored = document.getElementById('squadSearchInput');
      if (restored) {
        restored.focus();
        try { restored.setSelectionRange(pos, pos); } catch (_) {}
      }
    });
  }
  document.querySelectorAll('[data-squad-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      ui.squadFilter = btn.dataset.squadFilter;
      renderApp();
    });
  });

  document.querySelectorAll('[data-matches-sub]').forEach(btn => {
    btn.addEventListener('click', () => {
      ui.matchesSubTab = btn.dataset.matchesSub;
      renderApp();
    });
  });
  document.querySelectorAll('[data-gallery-album]').forEach(btn => {
    btn.addEventListener('click', () => {
      ui.galleryAlbum = btn.dataset.galleryAlbum;
      renderApp();
    });
  });
  document.querySelectorAll('[data-zoom-gallery]').forEach(btn => {
    btn.addEventListener('click', () => {
      const albumsItems = state.gallery.filter(g => {
        const alb = String(g.album || 'MEMORIES').toUpperCase();
        return ui.galleryAlbum === 'ALL' ? !['MATCHES', 'TROPHIES'].includes(alb) : alb === ui.galleryAlbum;
      });
      const item = albumsItems[Number(btn.dataset.zoomGallery)];
      if (item?.image) openLightbox(item.image, formatTextCase(item.caption || 'RDM Gallery'));
    });
  });
  document.querySelectorAll('[data-zoom-src]').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.dataset.zoomSrc, img.dataset.zoomCap || ''));
  });
  document.querySelectorAll('[data-ext-url]').forEach(btn => {
    btn.addEventListener('click', () => openExternalUrl(btn.dataset.extUrl));
  });

  bindAdminDashboardEvents();
}

function openPlayerPortalAuthPrompt(player) {
  openFormSheet({
    title: `Connect Sync · ${formatTextCase(player.name)}`,
    subtitle: 'Sign in with your assigned Firebase sync account to publish changes live to Website & Android App.',
    fields: [
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'password', label: 'Password', type: 'password', required: true }
    ],
    submitLabel: 'Connect Sync',
    onSubmit: async d => {
      const res = await loginWithEmailPassword(d.email, d.password);
      if (res.role !== 'admin' && res.playerId !== player.id) {
        await logoutAccount();
        throw new Error(`This account belongs to ${res.playerId || 'another user'}, not ${player.id}`);
      }
      renderApp();
      showToast('Cloud sync connected');
    }
  });
}

function bindPlayerPortalEvents() {
  if (!PORTAL_ENABLED || ui.portalMode !== 'player' || !ui.portalPlayerId || ui.screen !== 'playerPortal') return;
  const player = state.players.find(p => p.id === ui.portalPlayerId);
  if (!player) return;

  const q = id => document.getElementById(id);
  const ensureCloudSync = () => {
    if (canEditPlayerPortal(player.id)) return true;
    openPlayerPortalAuthPrompt(player);
    return false;
  };

  q('btnPlayerPortalVerify')?.addEventListener('click', () => openPlayerPortalAuthPrompt(player));

  q('btnDownloadPortalCard')?.addEventListener('click', async () => {
    try {
      await downloadPlayerProfileCard({ player, brandLogo: currentLogo() });
    } catch (_) {
      showToast('Unable to export profile card');
    }
  });

  q('btnPortalPhoto')?.addEventListener('click', () => {
    if (!ensureCloudSync()) return;
    openAvatarCropper({
      onSaveDataUrl: async dataUrl => {
        await savePlayerPortalProfile(player.id, { image: dataUrl });
        renderApp();
        showToast('Profile photo updated live');
      }
    });
  });

  q('btnPortalResetPhoto')?.addEventListener('click', () => {
    if (!ensureCloudSync()) return;
    openConfirmSheet({
      title: 'Use RDM Crest',
      message: 'Reset your profile photo to the official RDM logo?',
      confirmLabel: 'Reset Photo',
      onConfirm: async () => {
        await savePlayerPortalProfile(player.id, { image: '' });
        renderApp();
        showToast('Photo reset to RDM logo');
      }
    });
  });

  q('btnPortalEditProfile')?.addEventListener('click', () => {
    if (!ensureCloudSync()) return;
    openFormSheet({
      title: `Edit ${formatTextCase(player.name)}`,
      fields: [
        { name: 'jersey', label: 'Jersey Number', value: player.jersey || '' },
        { name: 'nick', label: 'Nickname', value: player.nick || '' },
        { name: 'bio', label: 'Bio', type: 'textarea', value: player.bio || '', placeholder: 'Write your cricket bio (spaces & Enter preserved)', rows: 4 }
      ],
      onSubmit: async d => {
        await savePlayerPortalProfile(player.id, { jersey: d.jersey, nick: d.nick, bio: d.bio });
        renderApp();
        showToast('Profile updated live');
      }
    });
  });

  const setAvail = async status => {
    if (!ensureCloudSync()) return;
    try {
      await savePlayerAvailability(player.id, status);
      renderApp();
      showToast(`Availability: ${status}`);
    } catch (err) {
      showToast(err?.message || 'Failed to save availability');
    }
  };
  q('btnPortalAvailYes')?.addEventListener('click', () => setAvail('AVAILABLE'));
  q('btnPortalAvailNo')?.addEventListener('click', () => setAvail('UNAVAILABLE'));

  q('btnPortalAddSocial')?.addEventListener('click', () => {
    if (!ensureCloudSync()) return;
    const existing = Array.isArray(player.socials) ? player.socials : [];
    if (existing.length >= 3) return showToast('Maximum 3 social links allowed');
    openFormSheet({
      title: 'Add Social Link',
      fields: [
        { name: 'name', label: 'Platform Name', placeholder: 'Instagram / YouTube', required: true },
        { name: 'url', label: 'Profile URL', placeholder: 'https://...', required: true }
      ],
      onSubmit: async d => {
        const clean = safeExternalUrl(d.url);
        if (!clean) throw new Error('Valid https:// link required');
        const nextSocials = [...existing, { name: d.name, url: clean }].slice(0, 3);
        await savePlayerPortalProfile(player.id, { socials: nextSocials });
        renderApp();
        showToast('Social link added live');
      }
    });
  });

  document.querySelectorAll('[data-portal-ext]').forEach(btn => {
    btn.addEventListener('click', () => openExternalUrl(btn.dataset.portalExt));
  });

  document.querySelectorAll('[data-portal-del-social]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!ensureCloudSync()) return;
      const idx = Number(btn.dataset.portalDelSocial);
      const existing = Array.isArray(player.socials) ? [...player.socials] : [];
      existing.splice(idx, 1);
      openConfirmSheet({
        title: 'Remove Social Link',
        message: 'Remove this social link from your profile?',
        confirmLabel: 'Remove',
        danger: true,
        onConfirm: async () => {
          await savePlayerPortalProfile(player.id, { socials: existing });
          renderApp();
          showToast('Social link removed');
        }
      });
    });
  });
}

function bindAdminDashboardEvents() {
  if (!isVerifiedAdmin()) return;

  document.querySelectorAll('[data-admin-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      navigateTo({ screen: 'admin', adminTab: btn.dataset.adminTab }, { replace: true });
    });
  });

  document.querySelectorAll('[data-admin-action]').forEach(btn => {
    btn.addEventListener('click', () => handleAdminCreateAction(btn.dataset.adminAction));
  });

  document.querySelectorAll('[data-admin-edit-player]').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = state.players.find(x => x.id === btn.dataset.adminEditPlayer);
      if (!p) return;
      openFormSheet({
        title: `Edit ${formatTextCase(p.name)}`,
        fields: [
          { name: 'name', label: 'Player Name', value: p.name, required: true },
          { name: 'role', label: 'Role', value: p.role, required: true },
          { name: 'detail', label: 'Playing Detail', type: 'textarea', value: p.detail, rows: 3 },
          { name: 'jersey', label: 'Jersey Number', value: p.jersey || '' },
          { name: 'nick', label: 'Nickname', value: p.nick || '' },
          { name: 'bio', label: 'Bio', type: 'textarea', value: p.bio || '', rows: 3 },
          { name: 'photo', label: 'Replace Photo (Optional)', type: 'file' }
        ],
        onSubmit: async d => {
          const payload = { ...d };
          if (d.photo) payload.image = await compressImageFile(d.photo, 700, 0.74);
          await adminUpdatePlayer(p.id, payload);
          renderApp();
          showToast('Player updated');
        }
      });
    });
  });

  document.querySelectorAll('[data-admin-remove-player]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.adminRemovePlayer;
      const p = state.players.find(x => x.id === id);
      openConfirmSheet({
        title: 'Remove Player',
        message: `Remove ${formatTextCase(p?.name || id)} (${id}) from the active RDM squad?`,
        confirmLabel: 'Remove',
        danger: true,
        onConfirm: async () => {
          await adminRemovePlayer(id);
          renderApp();
          showToast('Player removed');
        }
      });
    });
  });

  document.getElementById('btnAdminConnectFirebase')?.addEventListener('click', () => {
    openFormSheet({
      title: 'Connect Firebase Cloud Sync',
      subtitle: 'Sign in once with your Firebase Admin email and Firebase account password.',
      fields: [
        { name: 'email', label: 'Firebase Admin Email', type: 'email', value: 'rehahalam7124517@gmail.com', required: true },
        { name: 'password', label: 'Firebase Password', type: 'password', required: true }
      ],
      submitLabel: 'Connect Cloud Sync',
      onSubmit: async d => {
        await connectAdminCloudSync(d.email, d.password);
        renderApp();
        showToast('Firebase Cloud Sync connected');
      }
    });
  });

  document.querySelectorAll('[data-admin-edit-stats]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.adminEditStats;
      const p = state.players.find(x => x.id === id);
      const s = state.stats.find(x => x.playerId === id) || {};
      openFormSheet({
        title: `Stats · ${formatTextCase(p?.name || id)}`,
        fields: [
          { name: 'matches', label: 'Matches', type: 'number', value: s.matches || 0 },
          { name: 'runs', label: 'Runs', type: 'number', value: s.runs || 0 },
          { name: 'highScore', label: 'High Score', type: 'number', value: s.highScore || 0 },
          { name: 'wickets', label: 'Wickets', type: 'number', value: s.wickets || 0 },
          { name: 'fours', label: 'Fours', type: 'number', value: s.fours || 0 },
          { name: 'sixes', label: 'Sixes', type: 'number', value: s.sixes || 0 },
          { name: 'fifties', label: '50s', type: 'number', value: s.fifties || 0 },
          { name: 'hundreds', label: '100s', type: 'number', value: s.hundreds || 0 },
          { name: 'strikeRate', label: 'Strike Rate', type: 'number', value: s.strikeRate || 0 },
          { name: 'economy', label: 'Economy', type: 'number', value: s.economy || 0 },
          { name: 'bestBowling', label: 'Best Bowling', value: s.bestBowling || '' },
          { name: 'season', label: 'Season', value: s.season || '2027' }
        ],
        onSubmit: async d => {
          const n = v => Number(v || 0) || 0;
          await adminUpsertDoc('PlayerStats', id, {
            playerId: id,
            matches: n(d.matches),
            runs: n(d.runs),
            highScore: n(d.highScore),
            wickets: n(d.wickets),
            fours: n(d.fours),
            sixes: n(d.sixes),
            fifties: n(d.fifties),
            hundreds: n(d.hundreds),
            strikeRate: n(d.strikeRate),
            economy: n(d.economy),
            bestBowling: String(d.bestBowling || '').trim(),
            season: String(d.season || '2027').trim()
          });
          renderApp();
          showToast('Player stats saved');
        }
      });
    });
  });

  document.querySelectorAll('[data-admin-avail]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.adminAvail;
      const cur = state.availability.find(a => a.playerId === id)?.status || 'AVAILABLE';
      openFormSheet({
        title: `Availability · ${id}`,
        fields: [{ name: 'status', label: 'Status', type: 'select', value: cur, options: ['AVAILABLE', 'UNAVAILABLE'] }],
        onSubmit: async d => {
          await savePlayerAvailability(id, d.status);
          renderApp();
          showToast('Availability saved');
        }
      });
    });
  });

  document.querySelectorAll('[data-admin-edit-match]').forEach(btn => {
    btn.addEventListener('click', () => {
      const m = state.matches.find(x => x._docId === btn.dataset.adminEditMatch);
      if (m) handleAdminMatchModal(m);
    });
  });

  document.querySelectorAll('[data-admin-edit-social]').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = state.socials.find(x => x._docId === btn.dataset.adminEditSocial);
      if (!s) return;
      openFormSheet({
        title: 'Edit Social Channel',
        fields: [
          { name: 'name', label: 'Platform', value: s.name || '', required: true },
          { name: 'displayName', label: 'Display Title', value: s.displayName || s.name || '' },
          { name: 'url', label: 'URL', value: s.url || '', placeholder: 'https://...' }
        ],
        onSubmit: async d => {
          await adminUpsertDoc('Socials', s._docId, {
            name: d.name.toUpperCase(),
            displayName: d.displayName || d.name,
            url: d.url,
            icon: s.icon || '↗',
            order: s.order || 9
          });
          renderApp();
          showToast('Social updated');
        }
      });
    });
  });

  document.querySelectorAll('[data-admin-pin]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const parts = String(btn.dataset.adminPin || '').split(':');
      const col = parts[0] || '';
      const id = parts[1] || '';
      const pinFlag = parts[2] || '0';
      if (!col || !id) return;
      try {
        await adminSetPinned(col, id, pinFlag === '1');
        renderApp();
        showToast(pinFlag === '1' ? 'Pinned to Home' : 'Unpinned');
      } catch (err) {
        showToast(err?.message || 'Pin update failed');
      }
    });
  });

  document.querySelectorAll('[data-admin-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      const raw = String(btn.dataset.adminDel || '');
      const sep = raw.indexOf(':');
      const col = sep > 0 ? raw.slice(0, sep) : '';
      const docId = sep > 0 ? raw.slice(sep + 1) : '';
      if (!col || !docId) {
        showToast('Invalid record identifier');
        return;
      }
      openConfirmSheet({
        title: 'Delete Record',
        message: 'Permanently delete this record from Firestore?',
        confirmLabel: 'Delete',
        danger: true,
        onConfirm: async () => {
          await adminDeleteDoc(col, docId);
          renderApp();
          showToast('Deleted');
        }
      });
    });
  });
}

function handleAdminMatchModal(existing = null) {
  openFormSheet({
    title: existing ? 'Edit Match' : 'Add Match / Result',
    fields: [
      { name: 'opponent', label: 'Opponent Team', value: existing?.opponent || '', required: true },
      { name: 'matchStatus', label: 'Status', type: 'select', value: existing?.matchStatus || existing?.status || 'UPCOMING', options: ['UPCOMING', 'LIVE', 'COMPLETED', 'CANCELLED'] },
      { name: 'date', label: 'Date', type: 'date', value: existing?.date || '' },
      { name: 'time', label: 'Time', type: 'time', value: existing?.time || '' },
      { name: 'venueName', label: 'Venue / Ground', value: existing?.venueName || existing?.venue || '' },
      { name: 'ourScore', label: 'RDM Score', value: existing?.ourScore || '' },
      { name: 'oppScore', label: 'Opponent Score', value: existing?.oppScore || '' },
      { name: 'result', label: 'Result (if completed)', value: existing?.result || '' },
      { name: 'potm', label: 'Player of the Match', value: existing?.potm || '' },
      { name: 'note', label: 'Match Notes', type: 'textarea', value: existing?.note || '', placeholder: 'Enter key match details (line breaks & spaces preserved)', rows: 4 }
    ],
    onSubmit: async d => {
      await adminUpsertDoc('Matches', existing?._docId || null, {
        ...d,
        venue: d.venueName,
        status: d.matchStatus === 'COMPLETED' ? 'RESULT' : d.matchStatus,
        createdMs: existing?.createdMs || Date.now()
      });
      renderApp();
      showToast('Match saved');
    }
  });
}

function handleAdminCreateAction(action) {
  if (action === 'addMatch') return handleAdminMatchModal(null);

  if (action === 'addNews') {
    return openFormSheet({
      title: 'Add Team News',
      fields: [
        { name: 'title', label: 'Title', required: true },
        { name: 'text', label: 'Announcement', type: 'textarea', placeholder: 'Write announcement (Enter for new lines & spaces preserved)', rows: 5, required: true },
        { name: 'pinned', label: 'Pin announcement', type: 'checkbox' }
      ],
      onSubmit: async d => {
        await adminUpsertDoc('News', null, { title: d.title, text: d.text, pinned: !!d.pinned, createdMs: Date.now() });
        renderApp();
        showToast('News added');
      }
    });
  }

  if (action === 'addUpdate') {
    return openFormSheet({
      title: 'Add Official Update',
      fields: [
        { name: 'category', label: 'Category', type: 'select', options: ['WEBSITE', 'SOCIAL MEDIA', 'PLATFORM', 'ACCOUNT', 'FEATURE', 'OTHER'] },
        { name: 'title', label: 'Title', required: true },
        { name: 'text', label: 'Description', type: 'textarea', placeholder: 'Write full update (Enter for new lines & spaces preserved)', rows: 5, required: true },
        { name: 'url', label: 'Optional Link', placeholder: 'https://...' },
        { name: 'pinned', label: 'Pin to Home', type: 'checkbox' }
      ],
      onSubmit: async d => {
        await adminUpsertDoc('Updates', null, {
          category: d.category,
          title: d.title,
          text: d.text,
          url: d.url,
          pinned: !!d.pinned,
          date: new Date().toISOString().slice(0, 10),
          createdMs: Date.now()
        });
        renderApp();
        showToast('Update saved');
      }
    });
  }

  if (action === 'addGallery') {
    return openFormSheet({
      title: 'Add Gallery Photo',
      fields: [
        { name: 'photo', label: 'Select Image', type: 'file', required: true },
        { name: 'caption', label: 'Caption', value: 'RDM Memory' },
        { name: 'album', label: 'Album', type: 'select', value: 'MEMORIES', options: ['TEAM PHOTOS', 'MEMORIES', 'UPDATES'] }
      ],
      onSubmit: async d => {
        if (!d.photo) throw new Error('Image required');
        const img = await compressImageFile(d.photo, 960, 0.72);
        await adminUpsertDoc('Gallery', null, { image: img, caption: d.caption, album: d.album, createdMs: Date.now() });
        renderApp();
        showToast('Photo uploaded');
      }
    });
  }

  if (action === 'addPlayer') {
    const nums = state.players.map(p => Number(String(p.id).replace(/\D/g, ''))).filter(Number.isFinite);
    const nextId = `RDM${String(Math.max(17, ...nums) + 1).padStart(3, '0')}`;
    return openFormSheet({
      title: `Add Player (${nextId})`,
      fields: [
        { name: 'name', label: 'Full Name', required: true },
        { name: 'role', label: 'Role', required: true },
        { name: 'detail', label: 'Playing Style / Detail', type: 'textarea', rows: 3 },
        { name: 'jersey', label: 'Jersey Number' },
        { name: 'photo', label: 'Profile Photo (Optional)', type: 'file' }
      ],
      onSubmit: async d => {
        const img = d.photo ? await compressImageFile(d.photo, 700, 0.74) : '';
        await adminUpsertDoc('TeamPlayers', nextId, {
          id: nextId,
          name: d.name.toUpperCase(),
          role: d.role.toUpperCase(),
          detail: d.detail.toUpperCase(),
          jersey: d.jersey,
          image: img,
          order: state.players.length + 1,
          active: true
        });
        renderApp();
        showToast('Player added');
      }
    });
  }

  if (action === 'addLineup') {
    return openFormSheet({
      title: 'Publish Playing XI',
      fields: [
        { name: 'title', label: 'Title', value: 'Playing XI', required: true },
        { name: 'match', label: 'Match / Opponent' },
        { name: 'players', label: '11 Player IDs (comma separated)', type: 'textarea', value: 'RDM001,RDM002,RDM003,RDM004,RDM005,RDM006,RDM007,RDM008,RDM009,RDM010,RDM011', rows: 3 },
        { name: 'subs', label: 'Substitutes (comma separated)', value: 'RDM012,RDM013,RDM014,RDM015' }
      ],
      onSubmit: async d => {
        const cleanIds = str => [...new Set(String(str || '').split(',').map(x => x.trim().toUpperCase()).filter(id => /^RDM\d{3}$/.test(id)))];
        const players = cleanIds(d.players).slice(0, 11);
        const subs = cleanIds(d.subs).filter(id => !players.includes(id));
        if (players.length !== 11) throw new Error('Playing XI requires 11 valid Player IDs');
        await adminUpsertDoc('PlayingXI', null, { title: d.title, match: d.match, players, subs, createdMs: Date.now() });
        renderApp();
        showToast('Playing XI published');
      }
    });
  }

  if (action === 'addHonour') {
    return openFormSheet({
      title: 'Add Team Honour',
      fields: [
        { name: 'year', label: 'Year', value: String(new Date().getFullYear()), required: true },
        { name: 'title', label: 'Result (e.g. Winner)', required: true },
        { name: 'sub', label: 'Tournament Name', required: true }
      ],
      onSubmit: async d => {
        await adminUpsertDoc('Honours', null, { year: d.year, title: d.title, sub: d.sub, image: CLUB_INFO.logoPath, order: state.honours.length + 1 });
        renderApp();
        showToast('Honour saved');
      }
    });
  }

  if (action === 'addTournament') {
    return openFormSheet({
      title: 'Add Tournament',
      fields: [
        { name: 'name', label: 'Tournament Name', required: true },
        { name: 'season', label: 'Season / Year', value: String(new Date().getFullYear()) },
        { name: 'status', label: 'Status', type: 'select', options: ['UPCOMING', 'ONGOING', 'COMPLETED'] },
        { name: 'position', label: 'Final Position' },
        { name: 'venueName', label: 'Venue' }
      ],
      onSubmit: async d => {
        await adminUpsertDoc('Tournaments', null, {
          name: String(d.name || '').trim(),
          season: String(d.season || '').trim(),
          status: String(d.status || 'UPCOMING').trim(),
          position: String(d.position || '').trim(),
          venueName: String(d.venueName || '').trim(),
          venue: String(d.venueName || '').trim(),
          createdMs: Date.now()
        });
        renderApp();
        showToast('Tournament added');
      }
    });
  }

  if (action === 'addRecord') {
    return openFormSheet({
      title: 'Add Team Record',
      fields: [
        { name: 'title', label: 'Record Title', placeholder: 'e.g. Highest Team Score', required: true },
        { name: 'value', label: 'Record Value', placeholder: 'e.g. 214/3 (20 Ov)', required: true },
        { name: 'player', label: 'Player Name (Optional)' },
        { name: 'season', label: 'Season / Year', value: String(new Date().getFullYear()) }
      ],
      onSubmit: async d => {
        await adminUpsertDoc('TeamRecords', null, { ...d, createdMs: Date.now() });
        renderApp();
        showToast('Record saved');
      }
    });
  }

  if (action === 'editAppConfig') {
    return openFormSheet({
      title: 'App & APK Update',
      subtitle: 'Bump Version & Version Code to trigger automatic Update Popup in all older Android APKs',
      fields: [
        { name: 'appVersion', label: 'Latest APK Version (e.g. 1.2.0)', value: currentAppVersion(), required: true },
        { name: 'appVersionCode', label: 'Version Code (Integer, e.g. 3)', type: 'number', value: String(state.appVersionCode || APP_BUILD_INFO.versionCode), required: true },
        { name: 'updateNotes', label: 'What is New (Update Popup Notes)', type: 'textarea', value: state.updateNotes || '', placeholder: 'Describe new features or bug fixes for users', rows: 3 },
        { name: 'apkDownloadUrl', label: 'Direct APK Download URL', value: currentApkUrl(), required: true },
        { name: 'apkReleasesUrl', label: 'Update Page URL (Optional)', value: currentReleasesUrl() },
        { name: 'forceUpdate', label: 'Force Update (Hide Later button)', type: 'checkbox', checked: Boolean(state.forceUpdate) },
        { name: 'logoPhoto', label: 'Update Team Logo (Optional)', type: 'file' }
      ],
      onSubmit: async d => {
        const logo = d.logoPhoto ? await compressImageFile(d.logoPhoto, 600, 0.8) : '';
        await adminSaveBrandSettings({
          appVersion: d.appVersion,
          appVersionCode: d.appVersionCode,
          updateNotes: d.updateNotes,
          forceUpdate: !!d.forceUpdate,
          apkDownloadUrl: d.apkDownloadUrl,
          apkReleasesUrl: d.apkReleasesUrl,
          logo
        });
        renderApp();
        showToast('APK update settings synced to all devices');
      }
    });
  }

  if (action === 'addSocial') {
    return openFormSheet({
      title: 'Add Social Channel',
      fields: [
        { name: 'name', label: 'Platform', placeholder: 'INSTAGRAM', required: true },
        { name: 'displayName', label: 'Display Name', placeholder: 'RDM Instagram' },
        { name: 'url', label: 'URL', placeholder: 'https://...', required: true }
      ],
      onSubmit: async d => {
        await adminUpsertDoc('Socials', null, { name: d.name.toUpperCase(), displayName: d.displayName || d.name, url: d.url, icon: '↗', order: state.socials.length + 1 });
        renderApp();
        showToast('Social channel added');
      }
    });
  }
}

function maybeShowAppUpdatePopup(manual = false) {
  const upd = evaluateAvailableUpdate();
  if (!upd.hasUpdate) {
    if (manual) showToast(`You are on the latest version (v${upd.currentVersion})`);
    return false;
  }
  if (!manual && !upd.forceUpdate) {
    try {
      if (sessionStorage.getItem(`rdm-dismiss-update-${upd.latestVersion}`) === '1') {
        return false;
      }
    } catch (_) {}
  }
  openAppUpdateSheet({
    currentVersion: upd.currentVersion,
    latestVersion: upd.latestVersion,
    notes: upd.notes,
    forceUpdate: upd.forceUpdate,
    onDownload: () => {
      downloadApkFile(upd.apkUrl || currentApkUrl());
      showToast(`Downloading RDM Official APK v${upd.latestVersion}...`);
    }
  });
  return true;
}

/* ==================== BOOTSTRAP & 1-STEP PHONE NAVIGATION ==================== */

function handleHardwareBack() {
  if (stepBackOne()) return;

  const now = Date.now();
  if (now - ui.lastBackPressAt < 2000) {
    exitNativeApp();
    return;
  }
  ui.lastBackPressAt = now;
  showToast('Press back again to exit RDM Official');
}

async function bootstrap() {
  applyTheme(ui.theme);

  if (PORTAL_ENABLED) {
    try {
      const rawKey = new URLSearchParams(window.location.search).get('key') || '';
      if (rawKey.trim()) {
        const resolved = await resolvePortalKey(rawKey);
        if (resolved?.role === 'admin') {
          ui.portalMode = 'admin';
          ui.screen = 'portalAuth';
        } else if (resolved?.role === 'player' && resolved.playerId) {
          ui.portalMode = 'player';
          ui.portalPlayerId = resolved.playerId;
          ui.screen = 'playerPortal';
        }
      }
    } catch (_) {}
  }

  // Initialize root route in history stack so phone back works 1 step at a time
  const initialRoute = snapshotRoute();
  navStack.length = 0;
  navStack.push(initialRoute);
  try {
    window.history.replaceState({ rdmIdx: 0 }, '', buildRouteHash(initialRoute));
  } catch (_) {}

  window.addEventListener('popstate', () => {
    if (hasOpenOverlay()) {
      closeTopOverlay();
      try {
        window.history.pushState({ rdmIdx: navStack.length - 1 }, '', buildRouteHash(navStack[navStack.length - 1]));
      } catch (_) {}
      return;
    }
    if (ui.drawerOpen) {
      setDrawerOpen(false);
      try {
        window.history.pushState({ rdmIdx: navStack.length - 1 }, '', buildRouteHash(navStack[navStack.length - 1]));
      } catch (_) {}
      return;
    }
    if (navStack.length > 1) {
      navStack.pop();
      applyRouteSnapshot(navStack[navStack.length - 1]);
    }
  });

  await initNativeShell(handleHardwareBack);

  window.addEventListener('rdm-pwa-ready', () => {
    if ((ui.screen === 'public' && ui.publicTab === 'more') || (ui.screen === 'subpage' && ui.morePage === 'download')) {
      renderApp();
    }
  });

  await loadClubData();

  checkRemoteAppVersion().then(() => {
    maybeShowAppUpdatePopup(false);
  }).catch(() => {});

  subscribeClubDataRealtime(() => {
    const activeEl = document.activeElement;
    const isTyping = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'SELECT');
    if (!hasOpenOverlay() && !isTyping) {
      renderApp();
      maybeShowAppUpdatePopup(false);
    }
  });

  subscribeAuthChanges(({ role, verified }) => {
    if (ui.portalMode === 'admin') {
      if (verified && role === 'admin') {
        navigateTo({ screen: 'admin', adminTab: 'overview' }, { replace: true });
      } else {
        navigateTo({ screen: 'portalAuth' }, { replace: true });
      }
    } else if (ui.portalMode === 'player' && ui.portalPlayerId) {
      renderApp();
    } else if (ui.screen === 'portalAuth' && verified && role === 'admin') {
      navigateTo({ screen: 'admin', adminTab: 'overview' }, { replace: true });
    } else if (ui.screen === 'admin' && !(verified && role === 'admin')) {
      navigateTo({ screen: 'portalAuth' }, { replace: true });
    } else if (ui.screen === 'playerPortal') {
      navigateTo({ screen: 'public', publicTab: 'home' }, { replace: true });
    } else {
      renderApp();
    }
    hideNativeSplash();
  });

  setTimeout(() => hideNativeSplash(), 1200);
}

bootstrap();
