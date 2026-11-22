/* RDM V8.0.0 Admin Player Directory + Portals Directory Link & Access Console */
(() => {
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

  function add() {
    if (!window.rdmAdmin?.() || !document.getElementById('adminBody')) return;
    const body = document.getElementById('adminBody');

    let box = document.getElementById('adminPlayerManager');
    if (!box) {
      box = document.createElement('section');
      box.id = 'adminPlayerManager';
      box.className = 'adminPlayerManager';
      body.appendChild(box);
    }
    box.innerHTML = `<div class="sectionHead subHead">
        <div>
          <span>Squad Directory</span>
          <h2>Edit Player Profiles (${D.players.length})</h2>
          <p>Select any squad player to edit bio, stats, photo, jersey number, or match availability</p>
        </div>
      </div>
      <div class="adminPlayerGrid">${D.players.map(p => {
        const code = typeof playerCode === 'function' ? playerCode(p.id) : p.id;
        return `<button type="button" onclick="adminOpenPlayerProfile('${p.id}')">
          <img src="${p.image || 'assets/rdm-logo.png?v=7400'}" onerror="this.onerror=null;this.src='assets/rdm-logo.png?v=7400'" alt="${p.name}">
          <span><b>${mini(p.name)}</b><small>${p.id} · ${mini(code)}${p.jersey ? ' · #' + p.jersey : ''}</small></span>
          <i>›</i>
        </button>`;
      }).join('')}</div>`;

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
    const rows = D.players.map(p => {
      const token = playerMap[p.id];
      const url = token ? `${base}?key=${encodeURIComponent(token)}` : base;
      const code = typeof playerCode === 'function' ? playerCode(p.id) : p.id;
      return `<div class="accessLinkRow">
        <div class="accessLinkMeta">
          <strong>${mini(p.name)} <span class="pwProtectedTag">🔒 Password Protected</span></strong>
          <small>${p.id} · ${code}${p.jersey ? ' · #' + p.jersey : ''}</small>
          <input type="text" readonly value="${url}" aria-label="${mini(p.name)} portal link" onclick="this.select()">
        </div>
        <div class="accessLinkBtns">
          <button type="button" class="tinyBtn" onclick="rdmCopyAccessLink('${url}', this)">Copy</button>
          <a class="tinyBtn" href="${url}" target="_blank" rel="noopener">Open ↗</a>
        </div>
      </div>`;
    }).join('');

    linksBox.innerHTML = `<div class="sectionHead subHead">
        <div>
          <span>Web Portals Hub</span>
          <h2>Portals &amp; Private Links</h2>
          <p>Separate directory page holds Public, Admin, and all 17 password-protected Player Profile links</p>
        </div>
      </div>
      <div class="accessLinkList">
        <div class="accessLinkRow accessLinkRowHighlight">
          <div class="accessLinkMeta">
            <strong>All Portals Directory Page (/portals.html)</strong>
            <small>Central web page listing Public, Admin, and Player Profile links</small>
            <input type="text" readonly value="${portalsUrl}" aria-label="Portals directory URL" onclick="this.select()">
          </div>
          <div class="accessLinkBtns">
            <button type="button" class="tinyBtn" onclick="rdmCopyAccessLink('${portalsUrl}', this)">Copy</button>
            <a class="primary" href="./portals.html" target="_blank" rel="noopener">Open Hub ↗</a>
          </div>
        </div>
        <div class="accessLinkRow accessLinkRowHighlight">
          <div class="accessLinkMeta">
            <strong>Public Website (View Only)</strong>
            <small>Share openly with fans, sponsors, and opponents</small>
            <input type="text" readonly value="${base}" aria-label="Public website link" onclick="this.select()">
          </div>
          <div class="accessLinkBtns">
            <button type="button" class="tinyBtn" onclick="rdmCopyAccessLink('${base}', this)">Copy</button>
            <a class="tinyBtn" href="${base}" target="_blank" rel="noopener">Open ↗</a>
          </div>
        </div>
        <div class="accessLinkRow accessLinkRowHighlight">
          <div class="accessLinkMeta">
            <strong>Admin Panel Direct Link (Full Control)</strong>
            <small>Keep confidential — unlocks Web Admin directly</small>
            <input type="text" readonly value="${adminUrl}" aria-label="Admin private link" onclick="this.select()">
          </div>
          <div class="accessLinkBtns">
            <button type="button" class="tinyBtn" onclick="rdmCopyAccessLink('${adminUrl}', this)">Copy</button>
          </div>
        </div>
        ${rows}
      </div>`;
  }

  window.rdmInjectPlayerManager = add;
  const old = window.renderAdmin;
  window.renderAdmin = function () { old?.(); setTimeout(add, 0); };
  window.addEventListener('rdm-auth-ready', () => setTimeout(add, 100));
})();
