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
} from './data/club.js';
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
  evaluateAvailableUpdate,
  isVerifiedAdmin,
  loadClubData,
  loginWithEmailPassword,
  logoutAccount,
  savePlayerAvailability,
  savePlayerPortalProfile,
  sendResetPasswordEmail,
  state,
  subscribeAuthChanges,
  subscribeClubDataRealtime
} from './services/firebase.js';
import {
  canInstallWebPwa,
  closeTopOverlay,
  downloadApkFile,
  downloadPlayerProfileCard,
  hasOpenOverlay,
  openAvatarCropper,
  openConfirmSheet,
  openExternalUrl,
  openFormSheet,
  openLightbox,
  showToast,
  triggerWebPwaInstall
} from './ui/overlays.js';

const ui = {
  screen: 'public', // 'public' | 'playerDetail' | 'admin' | 'portalAuth' | 'playerPortal'
  page: 'home', // 'home' | 'squad' | 'matches' | 'records' | 'tournaments' | 'xi' | 'honours' | 'socials' | 'gallery' | 'news' | 'updates' | 'about' | 'download'
  matchesSub: 'fixtures', // 'fixtures' | 'xi' | 'tournaments' | 'records'
  galleryAlbum: 'ALL',
  squadQuery: '',
  squadFilter: 'ALL',
  detailPlayerId: null,
  portalMode: 'public', // 'public' | 'admin' | 'player'
  portalPlayerId: null,
  adminTab: 'overview',
  theme: loadInitialWebTheme(),
  loginError: '',
  loginBusy: false
};

const navHistory = [];

function loadInitialWebTheme() {
  try {
    const t = localStorage.getItem('rdm-web-theme') || 'light';
    return t === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

function applyWebTheme(next) {
  const valid = next === 'dark' ? 'dark' : 'light';
  ui.theme = valid;
  document.documentElement.setAttribute('data-web-theme', valid);
  const meta = document.getElementById('rdmThemeMeta');
  if (meta) meta.content = valid === 'dark' ? '#0B0E14' : '#FFFFFF';
  try { localStorage.setItem('rdm-web-theme', valid); } catch (_) {}
  renderSite();
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

function snapshotRoute() {
  return {
    screen: ui.screen,
    page: ui.page,
    matchesSub: ui.matchesSub,
    detailPlayerId: ui.detailPlayerId,
    adminTab: ui.adminTab
  };
}

function sameRoute(a, b) {
  return a && b &&
    a.screen === b.screen &&
    a.page === b.page &&
    a.matchesSub === b.matchesSub &&
    a.detailPlayerId === b.detailPlayerId &&
    a.adminTab === b.adminTab;
}

function routeHash(r) {
  if (r.screen === 'playerDetail' && r.detailPlayerId) return `#player-${r.detailPlayerId}`;
  if (r.screen === 'playerPortal' && ui.portalPlayerId) return `#portal-${ui.portalPlayerId}`;
  if (r.screen === 'portalAuth') return '#portal-verify';
  if (r.screen === 'admin') return `#admin-${r.adminTab}`;
  return `#${r.page || 'home'}`;
}

function applyRoute(r) {
  ui.screen = r.screen;
  ui.page = r.page || 'home';
  ui.matchesSub = r.matchesSub || 'fixtures';
  ui.detailPlayerId = r.detailPlayerId || null;
  ui.adminTab = r.adminTab || 'overview';
  renderSite();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function navigateTo(patch, { push = true, replace = false } = {}) {
  if (patch.screen === 'admin') {
    if (!ADMIN_CONSOLE_ENABLED) patch = { screen: 'public', page: 'home' };
    else if (!isVerifiedAdmin()) patch = { ...patch, screen: 'portalAuth' };
  }
  if (patch.screen === 'playerPortal' && (!PORTAL_ENABLED || ui.portalMode !== 'player' || !ui.portalPlayerId)) {
    patch = { screen: 'public', page: 'home' };
  }

  const next = { ...snapshotRoute(), ...patch };
  const top = navHistory[navHistory.length - 1];
  if (!sameRoute(top, next)) {
    if (replace && navHistory.length > 0) {
      navHistory[navHistory.length - 1] = next;
      try { window.history.replaceState({ rdmWeb: navHistory.length - 1 }, '', routeHash(next)); } catch (_) {}
    } else if (push || navHistory.length === 0) {
      navHistory.push(next);
      if (navHistory.length > 24) navHistory.shift();
      try { window.history.pushState({ rdmWeb: navHistory.length - 1 }, '', routeHash(next)); } catch (_) {}
    }
  }
  applyRoute(next);
}

/* ==================== WEBSITE HEADER & FOOTER ==================== */

function renderSiteHeader() {
  const desktopNav = [
    ['home', 'Home'],
    ['squad', 'Squad'],
    ['matches', 'Matches'],
    ['honours', 'Honours'],
    ['gallery', 'Gallery'],
    ['about', 'About']
  ];

  const railNav = [
    ['home', 'Home'],
    ['squad', 'Squad'],
    ['matches', 'Matches'],
    ['records', 'Records'],
    ['tournaments', 'Tournaments'],
    ['xi', 'Playing XI'],
    ['honours', 'Honours'],
    ['news', 'News'],
    ['updates', 'Updates'],
    ['gallery', 'Gallery'],
    ['socials', 'Socials'],
    ['about', 'About'],
    ['download', 'Android App']
  ];

  const showPublicNav = ui.screen === 'public' || ui.screen === 'playerDetail';

  return `
    <header class="siteHeader">
      <div class="siteHeaderRow">
        <button type="button" class="siteBrandBtn" id="btnBrandHome" aria-label="Rehan Dominators Mahuawan Home">
          <img src="${escHtml(currentLogo())}" alt="RDM Official Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
          <span class="siteBrandWordmark">${escHtml(CLUB_INFO.orgName)}</span>
        </button>

        ${showPublicNav ? `
          <nav class="desktopNavLinks" aria-label="Primary website navigation">
            ${desktopNav.map(([id, label]) => `
              <button type="button" class="navTextLink ${ui.screen === 'public' && ui.page === id ? 'active' : ''}" data-nav-page="${id}">${label}</button>
            `).join('')}
          </nav>
        ` : '<div></div>'}

        <div class="siteHeaderRight">
          <button type="button" class="themeModeBtn" id="btnToggleWebTheme" aria-label="Toggle light or dark mode">${ui.theme === 'dark' ? 'Light' : 'Dark'}</button>
          ${showPublicNav
            ? `<button type="button" class="headerAppCta" data-nav-page="download">Get App</button>`
            : `<button type="button" class="themeModeBtn" id="btnBackPublic">Website</button>`
          }
        </div>
      </div>

      ${showPublicNav ? `
        <nav class="subNavRail" aria-label="All club sections">
          <div class="subNavRailInner">
            ${railNav.map(([id, label]) => `
              <button type="button" class="railTabLink ${ui.screen === 'public' && ui.page === id ? 'active' : ''}" data-nav-page="${id}">${label}</button>
            `).join('')}
          </div>
        </nav>
      ` : ''}
    </header>
  `;
}

function renderSiteFooter() {
  const footerLinks = [
    ['home', 'Home'],
    ['squad', 'Squad'],
    ['matches', 'Matches'],
    ['xi', 'Playing XI'],
    ['records', 'Records'],
    ['tournaments', 'Tournaments'],
    ['honours', 'Honours'],
    ['gallery', 'Gallery'],
    ['news', 'News'],
    ['updates', 'Updates'],
    ['about', 'About RDM'],
    ['download', 'Android App']
  ];

  return `
    <footer class="siteFooter">
      <div class="siteFooterInner">
        <div class="footerCrestBlock">
          <img src="${escHtml(currentLogo())}" alt="RDM Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
          <strong>${escHtml(CLUB_INFO.orgName)}</strong>
          <span>One Team · One Dream · One Domination · ${escHtml(CLUB_INFO.location)}</span>
        </div>
        <div class="footerLinksRow">
          ${footerLinks.map(([id, label]) => `
            <button type="button" class="footerLinkBtn" data-nav-page="${id}">${label}</button>
          `).join('')}
          <button type="button" class="footerLinkBtn" data-ext-url="${escHtml(CLUB_INFO.captainContactUrl)}">WhatsApp Captain ↗</button>
          ${ADMIN_CONSOLE_ENABLED ? `<button type="button" class="footerLinkBtn" id="btnFooterAdmin">Admin Panel</button>` : ''}
        </div>
      </div>
    </footer>
  `;
}

/* ==================== PUBLIC WEBSITE PAGES ==================== */

function renderMatchSummaryCard(m) {
  const status = formatTextCase(m.matchStatus || m.status || 'Match');
  const meta = [m.date, m.time, m.venueName || m.venue].filter(Boolean).map(formatTextCase).join(' · ');
  return `
    <div>
      <div class="matchTitleRow">
        <strong>RDM vs ${escHtml(formatTextCase(m.opponent || 'Opponent'))}</strong>
        <span class="matchStatusLabel">${escHtml(status)}</span>
      </div>
      ${meta ? `<div class="num" style="font-size:0.82rem;color:var(--ink-muted);margin-bottom:6px;">${escHtml(meta)}</div>` : ''}
      ${(m.ourScore || m.oppScore) ? `
        <div class="matchScoreStrip num">
          <span>RDM: ${escHtml(m.ourScore || '—')}</span>
          <span>${escHtml(formatTextCase(m.opponent || 'Opponent'))}: ${escHtml(m.oppScore || '—')}</span>
        </div>
      ` : ''}
      ${(m.result || m.note) ? `<p class="richText" style="margin:6px 0 0;font-size:0.875rem;color:var(--ink-secondary);">${escHtml(formatTextCase(m.result ? `${m.result}${m.margin ? ' · ' + m.margin : ''}` : m.note))}</p>` : ''}
      ${m.potm ? `<p style="margin:6px 0 0;font-size:0.82rem;font-weight:700;color:var(--accent);">Player of the Match: ${escHtml(formatTextCase(m.potm))}</p>` : ''}
    </div>
  `;
}

function renderHomePage() {
  const upcoming = state.matches.find(m => !/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${m.matchStatus || ''} ${m.status || ''} ${m.note || ''}`));
  const recent = state.matches.find(m => /RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${m.matchStatus || ''} ${m.status || ''} ${m.note || ''}`));
  const pinnedUpdate = state.updates.find(u => u.pinned) || state.updates[0];
  const latestNews = state.news.find(n => n.pinned) || state.news[0];
  const dispatch = pinnedUpdate || latestNews;

  const captain = state.players.find(p => p.id === 'RDM001') || state.players[0];
  const vice = state.players.find(p => p.id === 'RDM003');
  const keeper = state.players.find(p => p.id === 'RDM006');
  const leaders = [captain, vice, keeper].filter(Boolean);

  const champWins = state.honours.filter(h => /winner|champion/i.test(`${h.title || ''}`)).length || 2;
  const upd = evaluateAvailableUpdate();

  return `
    ${state.loadError ? `<div class="infoBanner"><span>${escHtml(state.loadError)}</span><button type="button" class="btnSecondary btnSm" id="btnRetrySync">Retry Sync</button></div>` : ''}

    <section class="heroStage">
      <img class="heroBackdropImg" src="${escHtml(CLUB_INFO.heroImagePath)}" alt="RDM Floodlit Cricket Stadium" referrerPolicy="no-referrer">
      <div class="heroScrim" aria-hidden="true"></div>
      <div class="heroContent">
        <img class="heroCrestRing" src="${escHtml(currentLogo())}" alt="Rehan Dominators Mahuawan Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
        <span class="heroLocationLine">OFFICIAL CRICKET CLUB · ${escHtml(CLUB_INFO.locationCaps)} · EST. ${escHtml(CLUB_INFO.founded)}</span>
        <span class="heroClubLine">${escHtml(CLUB_INFO.orgNameCaps)}</span>
        <h1 class="heroDisplayStack">
          ${escHtml(CLUB_INFO.headlineTop)}
          <span class="heroDisplayAccent">${escHtml(CLUB_INFO.headlineAccent)}</span>
        </h1>
        <p class="heroTagline">${escHtml(CLUB_INFO.motto)}</p>
        <div class="heroActionRow">
          <button type="button" class="btnPrimary" data-nav-page="squad">View Official Squad</button>
          <button type="button" class="btnHeroOutline" data-ext-url="${escHtml(CLUB_INFO.captainContactUrl)}">Contact Captain</button>
        </div>
      </div>
    </section>

    <section class="kpiStrip num" aria-label="Club Overview Numbers">
      <button type="button" class="kpiBox" data-nav-page="about">
        <strong class="kpiFigure">${escHtml(CLUB_INFO.founded)}</strong>
        <span class="kpiCaption">Club Founded</span>
      </button>
      <button type="button" class="kpiBox" data-nav-page="honours">
        <strong class="kpiFigure">${champWins}×</strong>
        <span class="kpiCaption">MPL Champions</span>
      </button>
      <button type="button" class="kpiBox" data-nav-page="squad">
        <strong class="kpiFigure">${state.players.length}</strong>
        <span class="kpiCaption">Registered Players</span>
      </button>
      <button type="button" class="kpiBox" data-nav-page="matches">
        <strong class="kpiFigure">${state.matches.length}</strong>
        <span class="kpiCaption">Matches Recorded</span>
      </button>
    </section>

    <section>
      <div class="sectionTopRow" style="margin-bottom:14px;">
        <div class="sectionTopCopy">
          <span class="kickerLabel">Club Leadership</span>
          <h2 class="sectionHeading">Leading the Dominators</h2>
        </div>
        <button type="button" class="inlineActionLink" data-nav-page="squad">View Full Squad →</button>
      </div>
      <div class="leadershipGrid">
        ${leaders.map(p => `
          <button type="button" class="leaderPanel" data-open-player="${escHtml(p.id)}">
            <img class="leaderAvatar" src="${escHtml(resolvePlayerImage(p.image, currentLogo()))}" alt="${escHtml(p.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
            <div style="min-width:0;">
              <div class="leaderRole">${escHtml(formatTextCase(p.role))}</div>
              <div class="leaderName">${escHtml(formatTextCase(p.name))}</div>
              ${p.detail ? `<div class="leaderDetail">${escHtml(formatTextCase(p.detail))}</div>` : ''}
            </div>
          </button>
        `).join('')}
      </div>
    </section>

    <section class="splitGrid2">
      <article class="surfacePanel">
        <div class="sectionTopRow" style="margin-bottom:10px;">
          <div class="sectionTopCopy">
            <span class="kickerLabel">Next Match</span>
            <h2 class="sectionHeading" style="font-size:1.25rem;">${upcoming ? 'Upcoming Fixture' : 'No upcoming match'}</h2>
          </div>
          <button type="button" class="inlineActionLink" data-nav-page="matches">Schedule →</button>
        </div>
        ${upcoming
          ? renderMatchSummaryCard(upcoming)
          : '<p class="sectionMutedDesc">Check the Fixtures section for upcoming tournaments and scheduled match announcements.</p>'}
      </article>

      <article class="surfacePanel">
        <div class="sectionTopRow" style="margin-bottom:10px;">
          <div class="sectionTopCopy">
            <span class="kickerLabel">Recent Result</span>
            <h2 class="sectionHeading" style="font-size:1.25rem;">${recent ? 'Latest Scorecard' : 'No result added yet'}</h2>
          </div>
          <button type="button" class="inlineActionLink" data-nav-page="matches">Match Centre →</button>
        </div>
        ${recent
          ? renderMatchSummaryCard(recent)
          : '<p class="sectionMutedDesc">Completed match scorecards, winning margins, and Player of the Match awards appear here.</p>'}
      </article>
    </section>

    ${dispatch ? `
      <section class="surfacePanel">
        <div class="sectionTopRow" style="margin-bottom:10px;">
          <div class="sectionTopCopy">
            <span class="kickerLabel">${escHtml(formatTextCase(dispatch.category || 'Official Dispatch'))}${dispatch.date ? ' · ' + escHtml(dispatch.date) : ''}</span>
            <h2 class="sectionHeading" style="font-size:1.3rem;">${escHtml(formatTextCase(dispatch.title || 'Team Dispatch'))}</h2>
          </div>
          <button type="button" class="inlineActionLink" data-nav-page="updates">All Updates →</button>
        </div>
        <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.93rem;">${escHtml(formatTextCase(dispatch.text || ''))}</p>
        ${(dispatch.url && safeExternalUrl(dispatch.url)) ? `
          <div style="margin-top:12px;">
            <button type="button" class="btnSecondary btnSm" data-ext-url="${escHtml(safeExternalUrl(dispatch.url))}">Open Link ↗</button>
          </div>
        ` : ''}
      </section>
    ` : ''}

    <section class="heritageSplit">
      <div class="heritageMediaBox">
        <img src="${escHtml(CLUB_INFO.heritageImagePath)}" alt="Cricket ball and wooden stumps on Mahuawan pitch" referrerPolicy="no-referrer">
      </div>
      <div class="heritageCopyPanel">
        <span class="kickerLabel">Club Profile</span>
        <h3>Rehan Dominators Mahuawan (RDM) Cricket Team</h3>
        <p>Rehan Dominators Mahuawan, known as RDM or RDM Mahuawan, is an official competitive cricket club from Mahuawan, Gopalganj, Bihar. Built on discipline, brotherhood, and fearless intent, the squad competes across village and district tournaments with full matchday structure.</p>
        <p class="heritageRosterNote">Official Squad: ${escHtml(state.players.map(p => formatTextCase(p.name)).join(', '))}.</p>
        <div class="heritageActions">
          <button type="button" class="btnSecondary btnSm" data-nav-page="about">About RDM</button>
          <button type="button" class="btnGhost btnSm" data-nav-page="honours">Trophy Cabinet →</button>
        </div>
      </div>
    </section>

    <section>
      <div class="sectionTopRow" style="margin-bottom:14px;">
        <div class="sectionTopCopy">
          <span class="kickerLabel">Trophy Cabinet</span>
          <h2 class="sectionHeading">Club Honours</h2>
        </div>
        <button type="button" class="inlineActionLink" data-nav-page="honours">All Honours →</button>
      </div>
      ${renderHonoursGrid(3)}
    </section>

    <section class="appDownloadBanner">
      <div class="appDownloadRow">
        <div class="sectionTopCopy">
          <span class="kickerLabel">Official Android App · v${escHtml(upd.latestVersion)}</span>
          <h2 class="sectionHeading" style="font-size:1.4rem;">Take RDM Official Everywhere</h2>
          <p class="sectionMutedDesc">Install the Android APK for live squad cards, fixtures, Playing XI updates, and instant club notices synced directly with this website.</p>
        </div>
        <div class="rowActions">
          <button type="button" class="btnPrimary" id="btnHomeDownloadApk">Download APK (v${escHtml(upd.latestVersion)})</button>
          <button type="button" class="btnSecondary" data-nav-page="download">App Details</button>
        </div>
      </div>
    </section>
  `;
}

function renderSquadPage() {
  const q = ui.squadQuery.trim().toLowerCase();
  const filtered = state.players.filter(p => {
    const roleUpper = String(p.role || '').toUpperCase();
    const pass =
      ui.squadFilter === 'ALL' ||
      (ui.squadFilter === 'LEADERS' && (roleUpper.includes('CAPTAIN') || roleUpper.includes('KEEPER'))) ||
      (ui.squadFilter === 'ALLROUNDER' && roleUpper.includes('ALL-ROUNDER')) ||
      (ui.squadFilter === 'BATSMAN' && roleUpper.includes('BATSMAN') && !roleUpper.includes('ALL-ROUNDER'));
    if (!pass) return false;
    if (!q) return true;
    const hay = `${p.name} ${p.role} ${p.detail} ${p.id} ${PLAYER_CODES[p.id] || ''} ${p.jersey || ''}`.toLowerCase();
    return hay.includes(q);
  });

  return `
    <div class="sectionTopRow">
      <div class="sectionTopCopy">
        <span class="kickerLabel">Official Roster · Est. 2024</span>
        <h1 class="sectionHeading">RDM Active Squad (<span class="num">${state.players.length}</span>)</h1>
        <p class="sectionMutedDesc">Select any player to view profile bio, verified career stats, and downloadable player card.</p>
      </div>
    </div>

    <div class="squadControlsBar">
      <input id="squadSearchInput" class="searchField" type="search" placeholder="Search player by name, code, role, or jersey..." value="${escHtml(ui.squadQuery)}">
      <div class="segmentedBar" role="tablist" aria-label="Filter squad by role">
        ${[
          ['ALL', 'All Players'],
          ['LEADERS', 'Leadership'],
          ['ALLROUNDER', 'All-Rounders'],
          ['BATSMAN', 'Batsmen']
        ].map(([id, label]) => `<button type="button" class="segBtn ${ui.squadFilter === id ? 'active' : ''}" data-squad-filter="${id}">${label}</button>`).join('')}
      </div>
    </div>

    ${filtered.length ? `
      <div class="rosterGrid">
        ${filtered.map(p => {
          const code = PLAYER_CODES[p.id] || p.id;
          return `
            <button type="button" class="rosterCard" data-open-player="${escHtml(p.id)}">
              <img class="rosterAvatar" src="${escHtml(resolvePlayerImage(p.image, currentLogo()))}" alt="${escHtml(p.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
              <div class="rosterBody">
                <div class="rosterMetaLine">${escHtml(code)}${p.jersey ? ' · #' + escHtml(p.jersey) : ''}</div>
                <div class="rosterName">${escHtml(formatTextCase(p.name))}</div>
                <div class="rosterRole">${escHtml(formatTextCase(p.role))}</div>
                ${p.detail ? `<div class="rosterDetail">${escHtml(formatTextCase(p.detail))}</div>` : ''}
              </div>
              <span class="chevronArrow" aria-hidden="true">›</span>
            </button>
          `;
        }).join('')}
      </div>
    ` : '<div class="emptyPanel">No players match your search or filter.</div>'}
  `;
}

function renderPlayingXiSection() {
  if (!state.lineups.length) return '<div class="emptyPanel">No Playing XI published yet.</div>';
  return `<div class="cardStack">${state.lineups.map(l => `
    <article class="surfacePanel">
      <span class="kickerLabel">Matchday Lineup</span>
      <h3 style="margin:0 0 4px;font-size:1.2rem;">${escHtml(formatTextCase(l.title || 'Playing XI'))}</h3>
      ${l.match ? `<p style="margin:0 0 12px;font-size:0.84rem;color:var(--ink-muted);">${escHtml(formatTextCase(l.match))}</p>` : ''}
      <div class="xiRosterGrid num">
        ${(l.players || []).map((id, idx) => {
          const pl = state.players.find(p => p.id === id);
          const label = `${idx + 1}. ${formatTextCase(pl?.name || id)}`;
          return pl
            ? `<button type="button" class="xiSlotBtn" data-open-player="${escHtml(id)}">${escHtml(label)}</button>`
            : `<div class="xiSlotBtn">${escHtml(label)}</div>`;
        }).join('')}
      </div>
      ${(l.subs || []).length ? `
        <p style="margin:12px 0 0;font-size:0.8rem;color:var(--ink-muted);">
          Substitutes: ${l.subs.map(id => escHtml(formatTextCase(state.players.find(p => p.id === id)?.name || id))).join(' · ')}
        </p>
      ` : ''}
    </article>
  `).join('')}</div>`;
}

function renderTournamentsAndRecordsSection(mode = 'all') {
  const blocks = [];
  if (mode === 'all' || mode === 'tournaments') {
    blocks.push(...state.tournaments.map(t => `
      <article class="surfacePanel">
        <span class="kickerLabel">${escHtml(formatTextCase(t.status || 'Tournament'))}</span>
        <h3 style="margin:0 0 4px;font-size:1.2rem;">${escHtml(formatTextCase(t.name || 'Tournament'))}</h3>
        <p class="sectionMutedDesc num">${[t.season, t.position, t.venueName || t.venue].filter(Boolean).map(formatTextCase).join(' · ')}</p>
        ${t.fixtures ? `<p class="richText" style="margin:8px 0 0;font-size:0.85rem;color:var(--ink-secondary);">${escHtml(t.fixtures)}</p>` : ''}
      </article>
    `));
  }
  if (mode === 'all' || mode === 'records') {
    blocks.push(...state.records.map(r => `
      <article class="surfacePanel">
        <span class="kickerLabel">${escHtml(formatTextCase(r.season || 'Team Record'))}</span>
        <h3 style="margin:0 0 4px;font-size:1.2rem;">${escHtml(formatTextCase(r.title || 'Record'))}</h3>
        <p style="margin:0;font-weight:700;color:var(--accent);" class="num">${escHtml(formatTextCase(r.value || ''))}${r.player ? ' · ' + escHtml(formatTextCase(r.player)) : ''}</p>
      </article>
    `));
    blocks.push(...state.opponents.map(o => `
      <article class="surfacePanel">
        <span class="kickerLabel">Head-to-Head</span>
        <h3 style="margin:0 0 4px;font-size:1.2rem;">RDM vs ${escHtml(formatTextCase(o.name || 'Opponent'))}</h3>
        <p class="sectionMutedDesc num">${Number(o.played || 0)} Played · ${Number(o.won || 0)} Won · ${Number(o.lost || 0)} Lost</p>
      </article>
    `));
  }
  if (!blocks.length) return '<div class="emptyPanel">No records or tournament entries added yet.</div>';
  return `<div class="cardStack">${blocks.join('')}</div>`;
}

function renderMatchesPage() {
  let body = '';
  if (ui.matchesSub === 'fixtures') {
    body = state.matches.length
      ? `<div class="cardStack">${state.matches.map(m => `<article class="surfacePanel">${renderMatchSummaryCard(m)}</article>`).join('')}</div>`
      : '<div class="emptyPanel">No fixtures or match results added yet.</div>';
  } else if (ui.matchesSub === 'xi') {
    body = renderPlayingXiSection();
  } else if (ui.matchesSub === 'tournaments') {
    body = renderTournamentsAndRecordsSection('tournaments');
  } else {
    body = renderTournamentsAndRecordsSection('records');
  }

  return `
    <div class="sectionTopRow">
      <div class="sectionTopCopy">
        <span class="kickerLabel">Schedule &amp; Matchday Data</span>
        <h1 class="sectionHeading">Match Centre</h1>
      </div>
    </div>

    <div class="segmentedBar" role="tablist">
      ${[
        ['fixtures', 'Fixtures & Results'],
        ['xi', 'Playing XI'],
        ['tournaments', 'Tournaments'],
        ['records', 'Records & H2H']
      ].map(([id, label]) => `<button type="button" class="segBtn ${ui.matchesSub === id ? 'active' : ''}" data-matches-sub="${id}">${label}</button>`).join('')}
    </div>

    ${body}
  `;
}

function renderHonoursGrid(limit = null) {
  const list = limit ? state.honours.slice(0, limit) : state.honours;
  return `
    <div class="honoursGrid">
      ${list.map(h => `
        <article class="honourCard">
          <button type="button" class="honourMediaTrigger" data-zoom-src="${escHtml(h.image || currentLogo())}" data-zoom-cap="${escHtml(`${h.year} · ${h.title} — ${h.sub}`)}">
            <img src="${escHtml(h.image || currentLogo())}" alt="${escHtml(h.title)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
          </button>
          <div class="honourBody">
            <div class="honourMetaRow">
              <span class="honourYear num">${escHtml(h.year)}</span>
              <span>Tap photo to enlarge</span>
            </div>
            <h3 class="honourTitle">${escHtml(formatTextCase(h.title))}</h3>
            <p class="honourSub">${escHtml(formatTextCase(h.sub))}</p>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function renderGalleryPage() {
  const albums = ['ALL', 'TEAM PHOTOS', 'MEMORIES', 'UPDATES'];
  const items = state.gallery.filter(g => {
    const alb = String(g.album || 'MEMORIES').toUpperCase();
    return ui.galleryAlbum === 'ALL' ? !['MATCHES', 'TROPHIES'].includes(alb) : alb === ui.galleryAlbum;
  });

  return `
    <div class="sectionTopRow">
      <div class="sectionTopCopy">
        <span class="kickerLabel">Matchdays &amp; Moments</span>
        <h1 class="sectionHeading">Team Gallery</h1>
      </div>
    </div>

    <div class="segmentedBar" role="tablist">
      ${albums.map(a => `<button type="button" class="segBtn ${ui.galleryAlbum === a ? 'active' : ''}" data-gallery-album="${a}">${escHtml(formatTextCase(a))}</button>`).join('')}
    </div>

    ${items.length ? `
      <div class="galleryGrid">
        ${items.map((g, idx) => `
          <button type="button" class="galleryCardBtn" data-zoom-gallery="${idx}">
            <img src="${escHtml(g.image)}" alt="${escHtml(g.caption || 'RDM Memory')}" referrerPolicy="no-referrer">
            <div class="galleryOverlayCap">
              <strong>${escHtml(formatTextCase(g.album || 'Memories'))}</strong>
              <span>${escHtml(formatTextCase(g.caption || 'RDM Memory'))}</span>
            </div>
          </button>
        `).join('')}
      </div>
    ` : '<div class="emptyPanel">No photos added in this album yet.</div>'}

    <div class="sectionTopRow" style="margin-top:10px;">
      <div class="sectionTopCopy">
        <span class="kickerLabel">Championship History</span>
        <h2 class="sectionHeading">Trophy Cabinet</h2>
      </div>
    </div>
    ${renderHonoursGrid()}
  `;
}

function renderAboutPage() {
  return `
    <div class="sectionTopRow">
      <div class="sectionTopCopy">
        <span class="kickerLabel">Est. ${escHtml(CLUB_INFO.founded)} · ${escHtml(CLUB_INFO.location)}</span>
        <h1 class="sectionHeading">About Rehan Dominators Mahuawan</h1>
      </div>
    </div>

    <section class="heritageSplit">
      <div class="heritageMediaBox">
        <img src="${escHtml(CLUB_INFO.heritageImagePath)}" alt="Cricket stumps and red leather ball on Mahuawan turf" referrerPolicy="no-referrer">
      </div>
      <div class="heritageCopyPanel">
        <div style="display:flex;align-items:center;gap:14px;">
          <img src="${escHtml(currentLogo())}" alt="RDM Official Crest" style="width:64px;height:64px;border-radius:50%;object-fit:cover;border:1.5px solid var(--border-strong);background:#fff;">
          <div>
            <span class="kickerLabel" style="margin-bottom:2px;">Official Cricket Club</span>
            <h2 style="margin:0;font-size:1.3rem;">${escHtml(CLUB_INFO.orgName)}</h2>
          </div>
        </div>
        <p>Founded in 2024 in Mahuawan, Gopalganj, Bihar, Rehan Dominators Mahuawan (RDM) began with a clear goal: to turn local grassroots cricket passion into a disciplined, organized, and fearless competitive team across village and district tournaments.</p>
        <p>Built on the principle — One Team, One Dream, One Domination — every matchday reflects brotherhood, preparation, and total commitment across batting, bowling, and fielding.</p>
        <p>Led by Captain Rehan Akhtar, Vice-Captain Saif Ali, and Wicket-Keeper Soaib Akhtar, our 17-member squad combines explosive opening strokeplay, steady middle-order anchoring, adaptable all-rounders, and death-overs specialists.</p>
        <p>RDM’s competitive legacy includes winning back-to-back Mahuawan Premier League titles in 2024 and 2025 alongside ongoing tournament campaigns. Our Website, PWA, and Android App share real-time updates across players and supporters alike.</p>
      </div>
    </section>
  `;
}

function renderDownloadPage() {
  const showWebInstall = canInstallWebPwa();
  const upd = evaluateAvailableUpdate();
  return `
    <div class="sectionTopRow">
      <div class="sectionTopCopy">
        <span class="kickerLabel">Android APK &amp; Web App</span>
        <h1 class="sectionHeading">Get the Official RDM App</h1>
      </div>
    </div>

    <section class="surfacePanel" style="max-width:740px;">
      <span class="kickerLabel">Latest Release · v${escHtml(upd.latestVersion)}</span>
      <h2 class="sectionHeading" style="font-size:1.5rem;margin-bottom:8px;">RDM Official Android App</h2>
      <p style="margin:0 0 14px;color:var(--ink-secondary);font-size:0.95rem;">Download the official RDM Android APK directly to your phone. Squad rosters, player profiles, live scorecards, Playing XI announcements, and updates stay synchronized automatically with this website.</p>
      <p class="num" style="margin:0 0 18px;font-size:0.84rem;color:var(--ink-muted);">Current Web Build: v${escHtml(APP_BUILD_INFO.versionName)} · Latest Android APK: v${escHtml(upd.latestVersion)}</p>
      <div class="rowActions">
        <button type="button" class="btnPrimary" id="btnDownloadLatestApk">Download Android APK (v${escHtml(upd.latestVersion)})</button>
        <button type="button" class="btnSecondary" id="btnCheckAppUpdate">Check Latest Version</button>
        ${showWebInstall ? `<button type="button" class="btnSecondary" id="btnInstallWebApp">Install Web App</button>` : ''}
      </div>
    </section>
  `;
}

function renderPublicPage() {
  let inner = '';
  if (ui.page === 'home') inner = renderHomePage();
  else if (ui.page === 'squad') inner = renderSquadPage();
  else if (ui.page === 'matches') inner = renderMatchesPage();
  else if (ui.page === 'xi') inner = `
    <div class="sectionTopRow"><div class="sectionTopCopy"><span class="kickerLabel">Matchday Selection</span><h1 class="sectionHeading">Playing XI</h1></div></div>
    ${renderPlayingXiSection()}
  `;
  else if (ui.page === 'records') inner = `
    <div class="sectionTopRow"><div class="sectionTopCopy"><span class="kickerLabel">Club Milestones</span><h1 class="sectionHeading">Team Records &amp; H2H</h1></div></div>
    ${renderTournamentsAndRecordsSection('records')}
  `;
  else if (ui.page === 'tournaments') inner = `
    <div class="sectionTopRow"><div class="sectionTopCopy"><span class="kickerLabel">Competitions</span><h1 class="sectionHeading">Tournaments</h1></div></div>
    ${renderTournamentsAndRecordsSection('tournaments')}
  `;
  else if (ui.page === 'honours') inner = `
    <div class="sectionTopRow"><div class="sectionTopCopy"><span class="kickerLabel">Championships</span><h1 class="sectionHeading">Team Honours</h1></div></div>
    ${renderHonoursGrid()}
  `;
  else if (ui.page === 'gallery') inner = renderGalleryPage();
  else if (ui.page === 'news') inner = `
    <div class="sectionTopRow"><div class="sectionTopCopy"><span class="kickerLabel">Announcements</span><h1 class="sectionHeading">Team News</h1></div></div>
    ${state.news.length ? `<div class="cardStack">${state.news.map(n => `
      <article class="surfacePanel">
        <span class="kickerLabel">${n.pinned ? 'Pinned Announcement' : 'Team News'}</span>
        <h3 style="margin:0 0 6px;font-size:1.2rem;">${escHtml(formatTextCase(n.title || 'Announcement'))}</h3>
        <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.9rem;">${escHtml(formatTextCase(n.text || ''))}</p>
      </article>
    `).join('')}</div>` : '<div class="emptyPanel">No news announcements posted yet.</div>'}
  `;
  else if (ui.page === 'updates') inner = `
    <div class="sectionTopRow"><div class="sectionTopCopy"><span class="kickerLabel">Club Dispatches</span><h1 class="sectionHeading">Official Updates</h1></div></div>
    ${state.updates.length ? `<div class="cardStack">${state.updates.map(u => `
      <article class="surfacePanel">
        <span class="kickerLabel">${escHtml(formatTextCase(u.category || 'Official Update'))}${u.date ? ' · ' + escHtml(u.date) : ''}</span>
        <h3 style="margin:0 0 6px;font-size:1.2rem;">${escHtml(formatTextCase(u.title || 'Update'))}</h3>
        <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.9rem;">${escHtml(formatTextCase(u.text || ''))}</p>
        ${(u.url && safeExternalUrl(u.url)) ? `<div style="margin-top:12px;"><button type="button" class="btnSecondary btnSm" data-ext-url="${escHtml(safeExternalUrl(u.url))}">Open Link ↗</button></div>` : ''}
      </article>
    `).join('')}</div>` : '<div class="emptyPanel">No official updates published yet.</div>'}
  `;
  else if (ui.page === 'socials') inner = `
    <div class="sectionTopRow"><div class="sectionTopCopy"><span class="kickerLabel">Connect With Us</span><h1 class="sectionHeading">Official Channels &amp; Captain</h1></div></div>
    <section class="surfacePanel">
      <div class="channelGrid">
        <button type="button" class="btnPrimary" data-ext-url="${escHtml(CLUB_INFO.captainContactUrl)}">WhatsApp Captain ↗</button>
        ${state.socials.filter(s => safeExternalUrl(s.url)).map(s => `
          <button type="button" class="btnSecondary" data-ext-url="${escHtml(safeExternalUrl(s.url))}">${escHtml(formatTextCase(s.displayName || s.name))} ↗</button>
        `).join('')}
      </div>
    </section>
  `;
  else if (ui.page === 'download') inner = renderDownloadPage();
  else inner = renderAboutPage();

  return `
    ${renderSiteHeader()}
    <div class="pageMain">${inner}</div>
    ${renderSiteFooter()}
  `;
}

/* ==================== PLAYER DETAIL PAGE ==================== */

function renderPlayerDetailPage() {
  const player = state.players.find(p => p.id === ui.detailPlayerId);
  if (!player) {
    return `
      ${renderSiteHeader()}
      <div class="pageMain">
        <button type="button" class="inlineActionLink" id="btnBackToSquad" style="align-self:flex-start;">← Back to Squad</button>
        <div class="emptyPanel">Player record not found.</div>
      </div>
      ${renderSiteFooter()}
    `;
  }

  const stat = state.stats.find(s => s.playerId === player.id);
  const avail = state.availability.find(a => a.playerId === player.id);
  const code = PLAYER_CODES[player.id] || player.id;
  const socials = (Array.isArray(player.socials) ? player.socials : []).filter(s => safeExternalUrl(s?.url || s));
  const hasStats = stat && (Number(stat.matches) > 0 || Number(stat.runs) > 0 || Number(stat.wickets) > 0 || Number(stat.highScore) > 0);

  return `
    ${renderSiteHeader()}
    <div class="pageMain">
      <button type="button" class="inlineActionLink" id="btnBackToSquad" style="align-self:flex-start;">← Back to Squad</button>

      <section class="profileHeroCard">
        <img class="profileHeroAvatar" src="${escHtml(resolvePlayerImage(player.image, currentLogo()))}" alt="${escHtml(player.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${CLUB_INFO.logoPath}'">
        <div class="rosterMetaLine">${escHtml(code)} · ${escHtml(player.id)}${player.jersey ? ' · #' + escHtml(player.jersey) : ''}</div>
        <h1 class="profileHeroName">${escHtml(formatTextCase(player.name))}</h1>
        <div class="rosterRole">${escHtml(formatTextCase(player.role))}</div>
        ${player.detail ? `<p class="richText" style="margin:2px 0 0;color:var(--ink-secondary);max-width:52ch;">${escHtml(formatTextCase(player.detail))}</p>` : ''}
        ${player.nick ? `<p class="sectionMutedDesc" style="margin:0;">Nickname: ${escHtml(formatTextCase(player.nick))}</p>` : ''}
        ${avail?.status ? `<p class="sectionMutedDesc" style="margin:0;color:var(--accent);font-weight:700;">Match Status: ${escHtml(formatTextCase(avail.status))}</p>` : ''}
        <div style="margin-top:6px;">
          <button type="button" class="btnPrimary btnSm" id="btnDownloadDetailCard">Download Player Card</button>
        </div>
      </section>

      ${player.bio ? `
        <section class="surfacePanel">
          <span class="kickerLabel">Player Biography</span>
          <h2 class="sectionHeading" style="font-size:1.25rem;margin-bottom:8px;">About ${escHtml(formatTextCase(player.name))}</h2>
          <p class="richText" style="margin:0;color:var(--ink-secondary);">${escHtml(formatTextCase(player.bio))}</p>
        </section>
      ` : ''}

      <section class="surfacePanel">
        <span class="kickerLabel">Performance</span>
        <h2 class="sectionHeading" style="font-size:1.25rem;margin-bottom:12px;">Verified Career Statistics</h2>
        ${hasStats ? `
          <div class="statGrid4 num">
            <div class="statBox"><strong>${Number(stat.matches || 0)}</strong><span>Matches</span></div>
            <div class="statBox"><strong>${Number(stat.runs || 0)}</strong><span>Runs</span></div>
            <div class="statBox"><strong>${Number(stat.highScore || 0)}</strong><span>High Score</span></div>
            <div class="statBox"><strong>${Number(stat.wickets || 0)}</strong><span>Wickets</span></div>
          </div>
          <div class="statExtrasRow num">
            <span>4s/6s: ${Number(stat.fours || 0)}/${Number(stat.sixes || 0)}</span>
            <span>50s/100s: ${Number(stat.fifties || 0)}/${Number(stat.hundreds || 0)}</span>
            <span>SR: ${Number(stat.strikeRate || 0)}</span>
            <span>Econ: ${Number(stat.economy || 0)}</span>
            <span>Best: ${escHtml(stat.bestBowling || '—')}</span>
          </div>
        ` : '<p class="sectionMutedDesc">No verified career statistics recorded for this player yet.</p>'}
      </section>

      ${socials.length ? `
        <section class="surfacePanel">
          <span class="kickerLabel">Connect</span>
          <h2 class="sectionHeading" style="font-size:1.25rem;margin-bottom:12px;">Official Social Links</h2>
          <div class="channelGrid">
            ${socials.map((s, idx) => {
              const url = safeExternalUrl(typeof s === 'string' ? s : s.url);
              const label = typeof s === 'string' ? `Social ${idx + 1}` : (s.name || `Social ${idx + 1}`);
              return `<button type="button" class="btnSecondary" data-ext-url="${escHtml(url)}">${escHtml(formatTextCase(label))} ↗</button>`;
            }).join('')}
          </div>
        </section>
      ` : ''}
    </div>
    ${renderSiteFooter()}
  `;
}

/* ==================== PRIVATE PORTAL & ADMIN CONSOLE (COMPATIBLE UNTIL NEXT DESIGN PASS) ==================== */

function renderAdminAuthPage() {
  if (!ADMIN_CONSOLE_ENABLED) return renderPublicPage();
  return `
    ${renderSiteHeader()}
    <div class="authCardWrap">
      <div class="surfacePanel">
        <div style="text-align:center;margin-bottom:14px;">
          <img src="${escHtml(currentLogo())}" alt="RDM Crest" style="width:68px;height:68px;border-radius:50%;object-fit:cover;border:1.5px solid var(--border-strong);background:#fff;">
        </div>
        <h1 class="sectionHeading" style="text-align:center;font-size:1.45rem;">Admin Panel Sign In</h1>
        <p class="sectionMutedDesc" style="text-align:center;margin-bottom:16px;">Sign in with <code>rdm.admin</code> or your verified Admin email to manage club updates.</p>
        ${ui.loginError ? `<div class="errorBanner" style="margin-bottom:12px;">${escHtml(ui.loginError)}</div>` : ''}
        <form id="rdmPortalAuthForm" class="formStack">
          <label class="fieldBlock">
            <span>Admin Username or Email</span>
            <input id="loginEmail" name="email" type="text" autocomplete="username" placeholder="rdm.admin" required>
          </label>
          <label class="fieldBlock">
            <span>Password</span>
            <input id="loginPassword" name="password" type="password" autocomplete="current-password" placeholder="Enter password" required>
          </label>
          <button type="submit" class="btnPrimary btnFull" ${ui.loginBusy ? 'disabled' : ''}>${ui.loginBusy ? 'Verifying…' : 'Open Admin Panel'}</button>
          <button type="button" class="btnGhost btnFull" id="btnForgotPw">Forgot Password?</button>
        </form>
      </div>
    </div>
    ${renderSiteFooter()}
  `;
}

function renderAdminPage() {
  if (!ADMIN_CONSOLE_ENABLED) return renderPublicPage();
  if (!isVerifiedAdmin()) return renderAdminAuthPage();

  let body = '';
  if (ui.adminTab === 'overview') {
    body = `
      <div class="surfacePanel">
        <span class="kickerLabel">Management</span>
        <h2 class="sectionHeading" style="margin-bottom:12px;">Club Controls</h2>
        <div class="actionGrid">
          <button type="button" class="btnPrimary btnSm" data-admin-action="addMatch">+ Match / Result</button>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addNews">+ Team News</button>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addUpdate">+ Official Update</button>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addPlayer">+ Player</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addGallery">+ Gallery Photo</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addLineup">+ Playing XI</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addHonour">+ Honour</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addRecord">+ Team Record</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addTournament">+ Tournament</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addSocial">+ Social</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="editAppConfig">App &amp; Branding</button>
        </div>
      </div>
    `;
  } else if (ui.adminTab === 'squad') {
    body = `
      <div class="surfacePanel">
        <div class="sectionTopRow" style="margin-bottom:10px;">
          <h2 class="sectionHeading" style="font-size:1.25rem;">Squad Management</h2>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addPlayer">+ Add Player</button>
        </div>
        ${state.players.map(p => `
          <div class="listRowItem">
            <div>
              <strong>${escHtml(formatTextCase(p.name))}</strong>
              <div class="sectionMutedDesc num">${escHtml(p.id)} · ${escHtml(formatTextCase(p.role))}</div>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-player="${escHtml(p.id)}">Edit</button>
              <button type="button" class="btnSecondary btnSm" data-admin-edit-stats="${escHtml(p.id)}">Stats</button>
              <button type="button" class="btnDanger btnSm" data-admin-remove-player="${escHtml(p.id)}">Remove</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    body = `
      <div class="surfacePanel">
        <div class="sectionTopRow" style="margin-bottom:10px;">
          <h2 class="sectionHeading" style="font-size:1.25rem;">Matches, News &amp; Updates</h2>
          <div class="rowActions">
            <button type="button" class="btnPrimary btnSm" data-admin-action="addMatch">+ Match</button>
            <button type="button" class="btnSecondary btnSm" data-admin-action="addNews">+ News</button>
            <button type="button" class="btnSecondary btnSm" data-admin-action="addUpdate">+ Update</button>
          </div>
        </div>
        ${[
          ...state.matches.map(m => ({ _col: 'Matches', _docId: m._docId, title: `RDM vs ${m.opponent || 'Opponent'}`, sub: m.matchStatus || m.date || '' })),
          ...state.news.map(n => ({ _col: 'News', _docId: n._docId, title: n.title || 'News', sub: 'Team News', pinned: n.pinned })),
          ...state.updates.map(u => ({ _col: 'Updates', _docId: u._docId, title: u.title || 'Update', sub: u.category || 'Update', pinned: u.pinned }))
        ].map(row => `
          <div class="listRowItem">
            <div>
              <strong>${escHtml(formatTextCase(row.title))}</strong>
              <div class="sectionMutedDesc">${escHtml(row.sub)}</div>
            </div>
            <div class="rowActions">
              ${(row._col === 'News' || row._col === 'Updates') ? `<button type="button" class="btnSecondary btnSm" data-admin-pin="${escHtml(row._col)}:${escHtml(row._docId)}:${row.pinned ? '0' : '1'}">${row.pinned ? 'Unpin' : 'Pin'}</button>` : ''}
              <button type="button" class="btnDanger btnSm" data-admin-del="${escHtml(row._col)}:${escHtml(row._docId)}">Delete</button>
            </div>
          </div>
        `).join('') || '<p class="sectionMutedDesc">No records found.</p>'}
      </div>
    `;
  }

  return `
    ${renderSiteHeader()}
    <div class="pageMain">
      <div class="sectionTopRow">
        <div class="sectionTopCopy">
          <span class="kickerLabel">Management</span>
          <h1 class="sectionHeading">Admin Panel</h1>
        </div>
        <button type="button" class="btnDanger btnSm" id="btnLogout">Logout</button>
      </div>
      <div class="segmentedBar">
        ${[
          ['overview', 'Overview'],
          ['squad', 'Squad & Stats'],
          ['content', 'Matches & Updates']
        ].map(([k, label]) => `<button type="button" class="segBtn ${ui.adminTab === k ? 'active' : ''}" data-admin-tab="${k}">${label}</button>`).join('')}
      </div>
      ${body}
    </div>
    ${renderSiteFooter()}
  `;
}

function renderPlayerPortalPage() {
  if (!PORTAL_ENABLED || ui.portalMode !== 'player' || !ui.portalPlayerId) return renderPublicPage();
  const player = state.players.find(p => p.id === ui.portalPlayerId);
  if (!player) return renderPublicPage();
  const cloudVerified = canEditPlayerPortal(player.id);
  const avail = state.availability.find(a => a.playerId === player.id)?.status || 'NOT SET';

  return `
    ${renderSiteHeader()}
    <div class="pageMain">
      ${cloudVerified ? `
        <div class="infoBanner">
          <span>Cloud Sync Active (${escHtml(state.user?.email || 'Verified')})</span>
          <button type="button" class="btnSecondary btnSm" id="btnLogout">Sign Out</button>
        </div>
      ` : `
        <div class="infoBanner">
          <span>Verify your player sync account to publish profile changes live.</span>
          <button type="button" class="btnPrimary btnSm" id="btnPlayerPortalVerify">Connect Sync</button>
        </div>
      `}
      <section class="profileHeroCard">
        <img class="profileHeroAvatar" src="${escHtml(resolvePlayerImage(player.image, currentLogo()))}" alt="${escHtml(player.name)}" referrerPolicy="no-referrer">
        <h1 class="profileHeroName">${escHtml(formatTextCase(player.name))}</h1>
        <div class="rosterRole">${escHtml(formatTextCase(player.role))}</div>
        <div class="rowActions" style="margin-top:8px;">
          <button type="button" class="btnPrimary btnSm" id="btnPortalPhoto">Change Photo</button>
          <button type="button" class="btnSecondary btnSm" id="btnPortalEditProfile">Edit Info</button>
          <button type="button" class="btnSecondary btnSm" id="btnDownloadPortalCard">Download Card</button>
        </div>
      </section>
      <section class="surfacePanel">
        <div class="sectionTopRow">
          <div>
            <span class="kickerLabel">Availability</span>
            <h2 class="sectionHeading" style="font-size:1.2rem;">Current Status: ${escHtml(formatTextCase(avail))}</h2>
          </div>
          <div class="rowActions">
            <button type="button" class="btnPrimary btnSm" id="btnPortalAvailYes">Available</button>
            <button type="button" class="btnSecondary btnSm" id="btnPortalAvailNo">Unavailable</button>
          </div>
        </div>
      </section>
    </div>
    ${renderSiteFooter()}
  `;
}

/* ==================== RENDER LOOP & EVENT BINDING ==================== */

function renderSite() {
  const root = document.getElementById('siteViewport');
  if (!root) return;

  if (ui.screen === 'playerDetail') root.innerHTML = renderPlayerDetailPage();
  else if (ui.screen === 'playerPortal') root.innerHTML = renderPlayerPortalPage();
  else if (ui.screen === 'portalAuth') root.innerHTML = renderAdminAuthPage();
  else if (ui.screen === 'admin') root.innerHTML = renderAdminPage();
  else root.innerHTML = renderPublicPage();

  bindSiteEvents();
}

function bindSiteEvents() {
  const q = id => document.getElementById(id);

  q('btnBrandHome')?.addEventListener('click', () => navigateTo({ screen: 'public', page: 'home' }));
  q('btnBackPublic')?.addEventListener('click', () => navigateTo({ screen: 'public', page: 'home' }));
  q('btnBackToSquad')?.addEventListener('click', () => navigateTo({ screen: 'public', page: 'squad' }));
  q('btnToggleWebTheme')?.addEventListener('click', () => applyWebTheme(ui.theme === 'dark' ? 'light' : 'dark'));

  document.querySelectorAll('[data-nav-page]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo({ screen: 'public', page: btn.dataset.navPage }));
  });

  document.querySelectorAll('[data-open-player]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo({ screen: 'playerDetail', detailPlayerId: btn.dataset.openPlayer }));
  });

  document.querySelectorAll('[data-ext-url]').forEach(btn => {
    btn.addEventListener('click', () => openExternalUrl(btn.dataset.extUrl));
  });

  const downloadApkHandler = () => {
    const upd = evaluateAvailableUpdate();
    downloadApkFile(upd.apkUrl || currentApkUrl());
    showToast(`Downloading RDM Official APK v${upd.latestVersion}...`);
  };
  q('btnHomeDownloadApk')?.addEventListener('click', downloadApkHandler);
  q('btnDownloadLatestApk')?.addEventListener('click', downloadApkHandler);

  q('btnCheckAppUpdate')?.addEventListener('click', async () => {
    showToast('Checking latest release...');
    const upd = await checkRemoteAppVersion();
    renderSite();
    showToast(upd.hasUpdate ? `Update v${upd.latestVersion} available` : `Up to date (v${upd.latestVersion})`);
  });

  q('btnInstallWebApp')?.addEventListener('click', async () => {
    if (await triggerWebPwaInstall()) {
      renderSite();
      showToast('Web App installed');
    }
  });

  q('btnRetrySync')?.addEventListener('click', async () => {
    await loadClubData();
    renderSite();
  });

  q('btnDownloadDetailCard')?.addEventListener('click', () => {
    const p = state.players.find(x => x.id === ui.detailPlayerId);
    if (p) downloadPlayerProfileCard({ player: p, brandLogo: currentLogo() }).catch(() => showToast('Export failed'));
  });

  const searchInp = q('squadSearchInput');
  if (searchInp) {
    searchInp.addEventListener('input', e => {
      const pos = e.target.selectionStart;
      ui.squadQuery = e.target.value;
      renderSite();
      const el = q('squadSearchInput');
      if (el) {
        el.focus();
        try { el.setSelectionRange(pos, pos); } catch (_) {}
      }
    });
  }

  document.querySelectorAll('[data-squad-filter]').forEach(btn => {
    btn.addEventListener('click', () => { ui.squadFilter = btn.dataset.squadFilter; renderSite(); });
  });
  document.querySelectorAll('[data-matches-sub]').forEach(btn => {
    btn.addEventListener('click', () => { ui.matchesSub = btn.dataset.matchesSub; renderSite(); });
  });
  document.querySelectorAll('[data-gallery-album]').forEach(btn => {
    btn.addEventListener('click', () => { ui.galleryAlbum = btn.dataset.galleryAlbum; renderSite(); });
  });
  document.querySelectorAll('[data-zoom-gallery]').forEach(btn => {
    btn.addEventListener('click', () => {
      const items = state.gallery.filter(g => {
        const alb = String(g.album || 'MEMORIES').toUpperCase();
        return ui.galleryAlbum === 'ALL' ? !['MATCHES', 'TROPHIES'].includes(alb) : alb === ui.galleryAlbum;
      });
      const item = items[Number(btn.dataset.zoomGallery)];
      if (item?.image) openLightbox(item.image, formatTextCase(item.caption || 'RDM Gallery'));
    });
  });
  document.querySelectorAll('[data-zoom-src]').forEach(btn => {
    btn.addEventListener('click', () => openLightbox(btn.dataset.zoomSrc, btn.dataset.zoomCap || ''));
  });

  q('btnFooterAdmin')?.addEventListener('click', () => {
    navigateTo({ screen: isVerifiedAdmin() ? 'admin' : 'portalAuth', adminTab: 'overview' });
  });

  bindAdminAndPortalEvents();
}

function bindAdminAndPortalEvents() {
  const q = id => document.getElementById(id);

  q('btnLogout')?.addEventListener('click', () => {
    openConfirmSheet({
      title: 'Confirm Sign Out',
      message: 'Sign out of cloud sync on this browser?',
      confirmLabel: 'Sign Out',
      danger: true,
      onConfirm: async () => {
        await logoutAccount();
        navigateTo({ screen: 'public', page: 'home' }, { replace: true });
        showToast('Signed out');
      }
    });
  });

  q('btnForgotPw')?.addEventListener('click', () => {
    openFormSheet({
      title: 'Reset Admin Password',
      fields: [{ name: 'email', label: 'Admin Username or Email', required: true }],
      submitLabel: 'Send Reset Link',
      onSubmit: async d => {
        await sendResetPasswordEmail(d.email);
        showToast('Password reset email sent');
      }
    });
  });

  q('rdmPortalAuthForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const email = q('loginEmail')?.value || '';
    const password = q('loginPassword')?.value || '';
    ui.loginBusy = true;
    ui.loginError = '';
    renderSite();
    try {
      const res = await loginWithEmailPassword(email, password);
      ui.loginBusy = false;
      if (res.role !== 'admin') {
        await logoutAccount();
        ui.loginError = 'Admin authorization required.';
        renderSite();
        return;
      }
      navigateTo({ screen: 'admin', adminTab: 'overview' }, { replace: true });
    } catch (_) {
      ui.loginBusy = false;
      ui.loginError = 'Invalid Admin credentials or network error.';
      renderSite();
    }
  });

  if (PORTAL_ENABLED && ui.portalMode === 'player' && ui.portalPlayerId && ui.screen === 'playerPortal') {
    const player = state.players.find(p => p.id === ui.portalPlayerId);
    if (player) {
      const promptVerify = () => openFormSheet({
        title: `Connect Sync · ${formatTextCase(player.name)}`,
        fields: [
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'password', label: 'Password', type: 'password', required: true }
        ],
        submitLabel: 'Connect Sync',
        onSubmit: async d => {
          const res = await loginWithEmailPassword(d.email, d.password);
          if (res.role !== 'admin' && res.playerId !== player.id) {
            await logoutAccount();
            throw new Error(`Account belongs to ${res.playerId || 'another user'}`);
          }
          renderSite();
          showToast('Cloud sync connected');
        }
      });
      const ensure = () => canEditPlayerPortal(player.id) || (promptVerify(), false);
      q('btnPlayerPortalVerify')?.addEventListener('click', promptVerify);
      q('btnDownloadPortalCard')?.addEventListener('click', () => downloadPlayerProfileCard({ player, brandLogo: currentLogo() }));
      q('btnPortalPhoto')?.addEventListener('click', () => {
        if (!ensure()) return;
        openAvatarCropper({ onSaveDataUrl: async image => { await savePlayerPortalProfile(player.id, { image }); renderSite(); showToast('Photo updated'); } });
      });
      q('btnPortalEditProfile')?.addEventListener('click', () => {
        if (!ensure()) return;
        openFormSheet({
          title: `Edit ${formatTextCase(player.name)}`,
          fields: [
            { name: 'jersey', label: 'Jersey Number', value: player.jersey || '' },
            { name: 'nick', label: 'Nickname', value: player.nick || '' },
            { name: 'bio', label: 'Bio', type: 'textarea', value: player.bio || '', rows: 4 }
          ],
          onSubmit: async d => { await savePlayerPortalProfile(player.id, d); renderSite(); showToast('Profile updated'); }
        });
      });
      q('btnPortalAvailYes')?.addEventListener('click', async () => { if (ensure()) { await savePlayerAvailability(player.id, 'AVAILABLE'); renderSite(); showToast('Marked Available'); } });
      q('btnPortalAvailNo')?.addEventListener('click', async () => { if (ensure()) { await savePlayerAvailability(player.id, 'UNAVAILABLE'); renderSite(); showToast('Marked Unavailable'); } });
    }
  }

  if (!isVerifiedAdmin()) return;

  document.querySelectorAll('[data-admin-tab]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo({ screen: 'admin', adminTab: btn.dataset.adminTab }, { replace: true }));
  });
  document.querySelectorAll('[data-admin-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      const [col, id] = btn.dataset.adminDel.split(':');
      openConfirmSheet({
        title: 'Delete Record',
        message: 'Delete this entry from Firestore?',
        confirmLabel: 'Delete',
        danger: true,
        onConfirm: async () => { await adminDeleteDoc(col, id); renderSite(); showToast('Deleted'); }
      });
    });
  });
  document.querySelectorAll('[data-admin-pin]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const [col, id, flag] = btn.dataset.adminPin.split(':');
      await adminSetPinned(col, id, flag === '1');
      renderSite();
    });
  });
  document.querySelectorAll('[data-admin-remove-player]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.adminRemovePlayer;
      openConfirmSheet({
        title: 'Remove Player',
        message: `Remove ${id} from active roster?`,
        confirmLabel: 'Remove',
        danger: true,
        onConfirm: async () => { await adminRemovePlayer(id); renderSite(); }
      });
    });
  });
  document.querySelectorAll('[data-admin-edit-player]').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = state.players.find(x => x.id === btn.dataset.adminEditPlayer);
      if (!p) return;
      openFormSheet({
        title: `Edit ${formatTextCase(p.name)}`,
        fields: [
          { name: 'name', label: 'Name', value: p.name, required: true },
          { name: 'role', label: 'Role', value: p.role, required: true },
          { name: 'detail', label: 'Playing Style', type: 'textarea', value: p.detail, rows: 3 },
          { name: 'jersey', label: 'Jersey #', value: p.jersey || '' },
          { name: 'nick', label: 'Nickname', value: p.nick || '' },
          { name: 'bio', label: 'Bio', type: 'textarea', value: p.bio || '', rows: 3 },
          { name: 'photo', label: 'Replace Photo', type: 'file' }
        ],
        onSubmit: async d => {
          const payload = { ...d };
          if (d.photo) payload.image = await compressImageFile(d.photo, 700, 0.74);
          await adminUpdatePlayer(p.id, payload);
          renderSite();
          showToast('Player updated');
        }
      });
    });
  });
  document.querySelectorAll('[data-admin-edit-stats]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.adminEditStats;
      const s = state.stats.find(x => x.playerId === id) || {};
      openFormSheet({
        title: `Stats · ${id}`,
        fields: [
          { name: 'matches', label: 'Matches', type: 'number', value: s.matches || 0 },
          { name: 'runs', label: 'Runs', type: 'number', value: s.runs || 0 },
          { name: 'highScore', label: 'High Score', type: 'number', value: s.highScore || 0 },
          { name: 'wickets', label: 'Wickets', type: 'number', value: s.wickets || 0 }
        ],
        onSubmit: async d => {
          const n = v => Number(v || 0) || 0;
          await adminUpsertDoc('PlayerStats', id, { playerId: id, matches: n(d.matches), runs: n(d.runs), highScore: n(d.highScore), wickets: n(d.wickets) });
          renderSite();
          showToast('Stats saved');
        }
      });
    });
  });
  document.querySelectorAll('[data-admin-action]').forEach(btn => {
    btn.addEventListener('click', () => handleAdminCreate(btn.dataset.adminAction));
  });
}

function handleAdminCreate(action) {
  if (action === 'addMatch') {
    return openFormSheet({
      title: 'Add Match / Result',
      fields: [
        { name: 'opponent', label: 'Opponent', required: true },
        { name: 'matchStatus', label: 'Status', type: 'select', options: ['UPCOMING', 'LIVE', 'COMPLETED'] },
        { name: 'date', label: 'Date', type: 'date' },
        { name: 'venueName', label: 'Venue' },
        { name: 'ourScore', label: 'RDM Score' },
        { name: 'oppScore', label: 'Opponent Score' },
        { name: 'result', label: 'Result' },
        { name: 'potm', label: 'Player of the Match' }
      ],
      onSubmit: async d => { await adminUpsertDoc('Matches', null, { ...d, venue: d.venueName, createdMs: Date.now() }); renderSite(); showToast('Match saved'); }
    });
  }
  if (action === 'addNews') {
    return openFormSheet({
      title: 'Add Team News',
      fields: [{ name: 'title', label: 'Title', required: true }, { name: 'text', label: 'Body', type: 'textarea', rows: 4, required: true }, { name: 'pinned', label: 'Pin announcement', type: 'checkbox' }],
      onSubmit: async d => { await adminUpsertDoc('News', null, { title: d.title, text: d.text, pinned: !!d.pinned, createdMs: Date.now() }); renderSite(); showToast('News added'); }
    });
  }
  if (action === 'addUpdate') {
    return openFormSheet({
      title: 'Add Official Update',
      fields: [{ name: 'category', label: 'Category', type: 'select', options: ['WEBSITE', 'PLATFORM', 'SOCIAL MEDIA', 'OTHER'] }, { name: 'title', label: 'Title', required: true }, { name: 'text', label: 'Description', type: 'textarea', rows: 4, required: true }, { name: 'pinned', label: 'Pin to Home', type: 'checkbox' }],
      onSubmit: async d => { await adminUpsertDoc('Updates', null, { ...d, pinned: !!d.pinned, date: new Date().toISOString().slice(0, 10), createdMs: Date.now() }); renderSite(); showToast('Update published'); }
    });
  }
  if (action === 'addGallery') {
    return openFormSheet({
      title: 'Add Gallery Photo',
      fields: [{ name: 'photo', label: 'Image', type: 'file', required: true }, { name: 'caption', label: 'Caption', value: 'RDM Memory' }, { name: 'album', label: 'Album', type: 'select', value: 'MEMORIES', options: ['TEAM PHOTOS', 'MEMORIES', 'UPDATES'] }],
      onSubmit: async d => { const image = await compressImageFile(d.photo, 960, 0.72); await adminUpsertDoc('Gallery', null, { image, caption: d.caption, album: d.album, createdMs: Date.now() }); renderSite(); showToast('Photo uploaded'); }
    });
  }
  if (action === 'addPlayer') {
    const nums = state.players.map(p => Number(String(p.id).replace(/\D/g, ''))).filter(Number.isFinite);
    const nextId = `RDM${String(Math.max(17, ...nums) + 1).padStart(3, '0')}`;
    return openFormSheet({
      title: `Add Player (${nextId})`,
      fields: [{ name: 'name', label: 'Full Name', required: true }, { name: 'role', label: 'Role', required: true }, { name: 'detail', label: 'Playing Detail', type: 'textarea', rows: 2 }, { name: 'jersey', label: 'Jersey #' }],
      onSubmit: async d => { await adminUpsertDoc('TeamPlayers', nextId, { id: nextId, name: d.name.toUpperCase(), role: d.role.toUpperCase(), detail: d.detail.toUpperCase(), jersey: d.jersey, order: state.players.length + 1, active: true }); renderSite(); showToast('Player added'); }
    });
  }
  if (action === 'addLineup') {
    return openFormSheet({
      title: 'Publish Playing XI',
      fields: [{ name: 'title', label: 'Title', value: 'Playing XI', required: true }, { name: 'match', label: 'Match' }, { name: 'players', label: '11 Player IDs (comma separated)', type: 'textarea', value: 'RDM001,RDM002,RDM003,RDM004,RDM005,RDM006,RDM007,RDM008,RDM009,RDM010,RDM011', rows: 3 }],
      onSubmit: async d => { const players = String(d.players || '').split(',').map(x => x.trim().toUpperCase()).filter(Boolean).slice(0, 11); await adminUpsertDoc('PlayingXI', null, { title: d.title, match: d.match, players, subs: [], createdMs: Date.now() }); renderSite(); showToast('Playing XI published'); }
    });
  }
  if (action === 'addHonour') {
    return openFormSheet({
      title: 'Add Honour',
      fields: [{ name: 'year', label: 'Year', value: String(new Date().getFullYear()), required: true }, { name: 'title', label: 'Title', required: true }, { name: 'sub', label: 'Tournament', required: true }],
      onSubmit: async d => { await adminUpsertDoc('Honours', null, { ...d, image: CLUB_INFO.logoPath, order: state.honours.length + 1 }); renderSite(); showToast('Honour added'); }
    });
  }
  if (action === 'addTournament') {
    return openFormSheet({
      title: 'Add Tournament',
      fields: [{ name: 'name', label: 'Name', required: true }, { name: 'season', label: 'Season', value: String(new Date().getFullYear()) }, { name: 'status', label: 'Status', type: 'select', options: ['UPCOMING', 'ONGOING', 'COMPLETED'] }],
      onSubmit: async d => { await adminUpsertDoc('Tournaments', null, { ...d, createdMs: Date.now() }); renderSite(); showToast('Tournament added'); }
    });
  }
  if (action === 'addRecord') {
    return openFormSheet({
      title: 'Add Team Record',
      fields: [{ name: 'title', label: 'Record Title', required: true }, { name: 'value', label: 'Value', required: true }, { name: 'player', label: 'Player' }, { name: 'season', label: 'Season', value: String(new Date().getFullYear()) }],
      onSubmit: async d => { await adminUpsertDoc('TeamRecords', null, { ...d, createdMs: Date.now() }); renderSite(); showToast('Record saved'); }
    });
  }
  if (action === 'addSocial') {
    return openFormSheet({
      title: 'Add Social Channel',
      fields: [{ name: 'name', label: 'Platform', required: true }, { name: 'displayName', label: 'Display Name' }, { name: 'url', label: 'URL', required: true }],
      onSubmit: async d => { await adminUpsertDoc('Socials', null, { name: d.name.toUpperCase(), displayName: d.displayName || d.name, url: d.url, order: state.socials.length + 1 }); renderSite(); showToast('Social saved'); }
    });
  }
  if (action === 'editAppConfig') {
    return openFormSheet({
      title: 'App & Branding Settings',
      fields: [
        { name: 'appVersion', label: 'Latest APK Version', value: currentAppVersion(), required: true },
        { name: 'appVersionCode', label: 'Version Code', type: 'number', value: String(state.appVersionCode || APP_BUILD_INFO.versionCode), required: true },
        { name: 'updateNotes', label: 'Release Notes', type: 'textarea', value: state.updateNotes || '', rows: 3 },
        { name: 'apkDownloadUrl', label: 'APK Download URL', value: currentApkUrl(), required: true },
        { name: 'apkReleasesUrl', label: 'Releases URL', value: currentReleasesUrl() },
        { name: 'forceUpdate', label: 'Force Update', type: 'checkbox', checked: Boolean(state.forceUpdate) }
      ],
      onSubmit: async d => { await adminSaveBrandSettings(d); renderSite(); showToast('Settings synced'); }
    });
  }
}

/* ==================== BOOTSTRAP ==================== */

async function bootstrap() {
  applyWebTheme(ui.theme);

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

  // Respect direct hash URL when not a private portal key
  if (ui.screen === 'public') {
    const h = window.location.hash.replace(/^#/, '');
    if (h.startsWith('player-')) {
      ui.screen = 'playerDetail';
      ui.detailPlayerId = h.slice(7);
    } else if (['squad', 'matches', 'records', 'tournaments', 'xi', 'honours', 'socials', 'gallery', 'news', 'updates', 'about', 'download'].includes(h)) {
      ui.page = h;
    }
  }

  navHistory.length = 0;
  const initRoute = snapshotRoute();
  navHistory.push(initRoute);
  try { window.history.replaceState({ rdmWeb: 0 }, '', routeHash(initRoute)); } catch (_) {}

  window.addEventListener('popstate', () => {
    if (hasOpenOverlay()) {
      closeTopOverlay();
      return;
    }
    if (navHistory.length > 1) {
      navHistory.pop();
      applyRoute(navHistory[navHistory.length - 1]);
    }
  });

  window.addEventListener('rdm-pwa-ready', () => {
    if (ui.page === 'download') renderSite();
  });

  await loadClubData();
  checkRemoteAppVersion().catch(() => {});

  subscribeClubDataRealtime(() => {
    const el = document.activeElement;
    const typing = el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT');
    if (!hasOpenOverlay() && !typing) renderSite();
  });

  subscribeAuthChanges(({ role, verified }) => {
    if (ui.portalMode === 'admin') {
      if (verified && role === 'admin') navigateTo({ screen: 'admin', adminTab: 'overview' }, { replace: true });
      else navigateTo({ screen: 'portalAuth' }, { replace: true });
    } else if (ui.screen === 'portalAuth' && verified && role === 'admin') {
      navigateTo({ screen: 'admin', adminTab: 'overview' }, { replace: true });
    } else if (ui.screen === 'admin' && !(verified && role === 'admin')) {
      navigateTo({ screen: 'portalAuth' }, { replace: true });
    } else {
      renderSite();
    }
  });
}

bootstrap();
