/* RDM V8.0.0 Admin Player Directory + Portals Directory Link & Access Console */
(() => {
  function escHtml(v) {
    return String(v ?? '').replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function baseOriginUrl() {
    return location.origin + location.pathname;
  }

  function portalsDirectoryUrl() {
    return new URL('portals.html', location.href).href;
  }

  window.rdmCopyAccessLink = async function (url, btn) {
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(url); ok = true; }
    } catch {}
    if (!ok) {
      try {
        const ta = document.createElement('textarea');
        ta.value = url;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand('copy');
        ta.remove();
      } catch {}
    }
    if (ok) {
      if (btn) {
        const prev = btn.textContent;
        btn.textContent = 'Copied ✓';
        setTimeout(() => { if (btn.isConnected) btn.textContent = prev; }, 1600);
      }
      window.toast?.('Link copied');
    } else {
      window.toast?.('Copy failed');
    }
  };

  if (!window.__rdmCopyLinkDelegated) {
    window.__rdmCopyLinkDelegated = true;
    document.addEventListener('click', e => {
      const btn = e.target.closest?.('[data-copy-url]');
      if (!btn) return;
      e.preventDefault();
      window.rdmCopyAccessLink(btn.dataset.copyUrl || '', btn);
    });
  }

  window.rdmFilterAdminRoster = function (query) {
    window._admPlayerSearch = String(query || '');
    const q = window._admPlayerSearch.trim().toLowerCase();
    const grid = document.querySelector('#adminPlayerManager .adminPlayerGrid');
    if (!grid) return;
    let shown = 0;
    grid.querySelectorAll('button[data-search]').forEach(btn => {
      const match = !q || (btn.dataset.search || '').includes(q);
      btn.hidden = !match;
      btn.style.display = match ? '' : 'none';
      if (match) shown++;
    });
    const emptyEl = document.getElementById('admPlayerSearchEmpty');
    if (emptyEl) emptyEl.hidden = shown > 0;
  };

  function renderPlayerGridButtons(players) {
    const photoFn = typeof window.playerPhotoUrl === 'function' ? window.playerPhotoUrl : (u => u || 'assets/rdm-logo.png?v=7400');
    return players.map(p => {
      const code = typeof playerCode === 'function' ? playerCode(p.id) : p.id;
      const searchBlob = `${p.name || ''} ${p.id || ''} ${code || ''} ${p.role || ''} ${p.jersey || ''}`.toLowerCase();
      return `<button type="button" data-search="${escHtml(searchBlob)}" onclick="adminOpenPlayerProfile('${escHtml(p.id)}')">
        <img src="${escHtml(photoFn(p.image))}" onerror="this.onerror=null;this.src='assets/rdm-logo.png?v=7400'" alt="${escHtml(p.name)}">
        <span><b>${mini(p.name)}</b><small>${escHtml(p.id)} · ${mini(code)}${p.jersey ? ' · #' + escHtml(p.jersey) : ''} · ${mini(p.role || 'Player')}</small></span>
        <i>›</i>
      </button>`;
    }).join('');
  }

  function add() {
    if (!window.rdmAdmin?.() || !document.getElementById('adminBody')) return;
    const body = document.getElementById('adminWorkspaceMain') || document.getElementById('adminBody');
    const players = Array.isArray(window.D?.players) ? D.players : [];

    let box = document.getElementById('adminPlayerManager');
    const searchActive = document.activeElement?.id === 'admPlayerSearch';
    if (!box) {
      box = document.createElement('section');
      box.id = 'adminPlayerManager';
      box.className = 'adminPlayerManager';
      body.appendChild(box);
    }

    if (searchActive && box.querySelector('.adminPlayerGrid')) {
      box.querySelector('.adminPlayerGrid').innerHTML = renderPlayerGridButtons(players);
      const countEl = box.querySelector('h2');
      if (countEl) countEl.textContent = `Edit Player Profiles (${players.length})`;
      window.rdmFilterAdminRoster(window._admPlayerSearch || '');
    } else {
      box.innerHTML = `<div class="sectionHead subHead">
          <div>
            <span>Squad Directory</span>
            <h2>Edit Player Profiles (${players.length})</h2>
            <p>Select any squad player to edit bio, stats, photo, jersey number, socials, or match availability</p>
          </div>
          <button type="button" class="primary" onclick="openEdit('player')">+ Add Player</button>
        </div>
        <div class="adminPlayerSearchRow">
          <input id="admPlayerSearch" type="search" value="${escHtml(window._admPlayerSearch || '')}" placeholder="Search squad players by name, role, RDM ID, or jersey..." aria-label="Search squad profiles">
        </div>
        <div class="adminPlayerGrid">${renderPlayerGridButtons(players)}</div>
        <div id="admPlayerSearchEmpty" class="empty" hidden>No player matches your search.</div>`;

      document.getElementById('admPlayerSearch')?.addEventListener('input', e => {
        window.rdmFilterAdminRoster(e.target.value);
      });
      if (window._admPlayerSearch) window.rdmFilterAdminRoster(window._admPlayerSearch);
    }

    let linksBox = document.getElementById('adminAccessLinksBox');
    if (!linksBox) {
      linksBox = document.createElement('section');
      linksBox.id = 'adminAccessLinksBox';
      linksBox.className = 'adminPlayerManager adminLinksBox';
      body.appendChild(linksBox);
    }
    const base = baseOriginUrl();
    const portalsUrl = portalsDirectoryUrl();
    const adminUrl = `${base}?key=${encodeURIComponent(window.RDM_ADMIN_LINK || '')}`;
    const playerMap = window.RDM_PLAYER_LINKS || {};
    const rows = players.map(p => {
      const token = playerMap[p.id];
      const url = token ? `${base}?key=${encodeURIComponent(token)}` : base;
      const code = typeof playerCode === 'function' ? playerCode(p.id) : p.id;
      return `<div class="accessLinkRow">
        <div class="accessLinkMeta">
          <strong>${mini(p.name)} <span class="pwProtectedTag">Password Protected</span></strong>
          <small>${escHtml(p.id)} · ${escHtml(code)}${p.jersey ? ' · #' + escHtml(p.jersey) : ''}</small>
          <input type="text" readonly value="${escHtml(url)}" aria-label="${escHtml(mini(p.name))} portal link" onclick="this.select()">
        </div>
        <div class="accessLinkBtns">
          <button type="button" class="tinyBtn" data-copy-url="${escHtml(url)}">Copy</button>
          <a class="tinyBtn" href="${escHtml(url)}" target="_blank" rel="noopener">Open ↗</a>
        </div>
      </div>`;
    }).join('');

    const foldOpen = linksBox.querySelector('.accessLinksFold')?.open ? ' open' : '';
    linksBox.innerHTML = `<div class="sectionHead subHead">
        <div>
          <span>Web Portals Hub</span>
          <h2>Portals &amp; Private Links</h2>
          <p>Central access directory for Public Website, Admin Workspace, and all ${players.length} password-protected Player Profile portals</p>
        </div>
      </div>
      <div class="accessLinkList">
        <div class="accessLinkRow accessLinkRowHighlight">
          <div class="accessLinkMeta">
            <strong>All Portals Directory Page (/portals.html)</strong>
            <small>Central web page listing Public, Admin, and Player Profile links</small>
            <input type="text" readonly value="${escHtml(portalsUrl)}" aria-label="Portals directory URL" onclick="this.select()">
          </div>
          <div class="accessLinkBtns">
            <button type="button" class="tinyBtn" data-copy-url="${escHtml(portalsUrl)}">Copy</button>
            <a class="primary" href="./portals.html" target="_blank" rel="noopener">Open Hub ↗</a>
          </div>
        </div>
        <div class="accessLinkRow accessLinkRowHighlight">
          <div class="accessLinkMeta">
            <strong>Public Website (View Only)</strong>
            <small>Share openly with fans, sponsors, and opponents</small>
            <input type="text" readonly value="${escHtml(base)}" aria-label="Public website link" onclick="this.select()">
          </div>
          <div class="accessLinkBtns">
            <button type="button" class="tinyBtn" data-copy-url="${escHtml(base)}">Copy</button>
            <a class="tinyBtn" href="${escHtml(base)}" target="_blank" rel="noopener">Open ↗</a>
          </div>
        </div>
        <div class="accessLinkRow accessLinkRowHighlight">
          <div class="accessLinkMeta">
            <strong>Admin Panel Direct Link (Full Control)</strong>
            <small>Keep confidential — unlocks Web Admin directly</small>
            <input type="text" readonly value="${escHtml(adminUrl)}" aria-label="Admin private link" onclick="this.select()">
          </div>
          <div class="accessLinkBtns">
            <button type="button" class="tinyBtn" data-copy-url="${escHtml(adminUrl)}">Copy</button>
          </div>
        </div>
        <details class="accessLinksFold"${foldOpen}>
          <summary>View Individual Player Portal Links (${players.length})</summary>
          <div class="accessLinkList">${rows}</div>
        </details>
      </div>`;
  }

  window.rdmInjectPlayerManager = add;
  const old = window.renderAdmin;
  window.renderAdmin = function () { old?.(); setTimeout(add, 0); };
  window.addEventListener('rdm-auth-ready', () => setTimeout(add, 100));
})();
