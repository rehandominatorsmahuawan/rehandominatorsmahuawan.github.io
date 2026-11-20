(function(){
  'use strict';

  function portalManifestHref(){
    const role = window.__rdmUrlKeyRole || document.documentElement.dataset.rdmPortal || 'public';
    if (role !== 'admin' && role !== 'player') return null;
    const key = (new URLSearchParams(location.search).get('key') || '').trim();
    if (!key) return null;
    return new URL('rdm-portal.webmanifest?key=' + encodeURIComponent(key) + '&v=7700', location.href).href;
  }

  function upgradePortalManifestUrl(){
    const targetHref = portalManifestHref();
    if (!targetHref) return;
    if (!navigator.serviceWorker || !navigator.serviceWorker.controller) return;
    const link = document.getElementById('rdmManifestLink');
    if (link && link.getAttribute('href') !== targetHref) {
      link.setAttribute('href', targetHref);
    }
  }

  const isDevPreviewHost = /^(localhost|127\.0\.0\.1)$/i.test(location.hostname) || /\.run\.app$/i.test(location.hostname);

  if ('serviceWorker' in navigator) {
    const regSW = () => {
      if (isDevPreviewHost) {
        navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(r => r.unregister())).catch(() => {});
        return;
      }
      navigator.serviceWorker.register('sw.js?v=7700').then(reg => {
        if (reg && reg.active) upgradePortalManifestUrl();
      }).catch(console.warn);
      navigator.serviceWorker.addEventListener('controllerchange', upgradePortalManifestUrl);
      navigator.serviceWorker.ready.then(upgradePortalManifestUrl).catch(() => {});
    };
    if (document.readyState === 'complete') regSW();
    else window.addEventListener('load', regSW, { once: true });
  }

  let promptEvent = null;

  function portalAppLabel(){
    const role = window.__rdmUrlKeyRole || document.documentElement.dataset.rdmPortal || 'public';
    if (role === 'admin') {
      return {
        noun: 'Admin App',
        title: 'Install RDM Admin App',
        desc: 'Install this dedicated Admin Panel app to your home screen — opens straight into Admin Control.'
      };
    }
    if (role === 'player') {
      const pName = (typeof window.D !== 'undefined' && window.session?.playerId)
        ? (window.D.players.find(p => p.id === window.session.playerId)?.name || 'My Profile')
        : 'My Profile';
      return {
        noun: 'My Profile App',
        title: `Install ${pName} App`,
        desc: 'Install your private player app to your home screen — opens straight into your personal profile.'
      };
    }
    return {
      noun: 'RDM App',
      title: 'Install Rehan Dominators App',
      desc: 'Install the official RDM club app for quick home-screen access and offline readiness.'
    };
  }

  function isStandalone(){
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  }

  function syncInstallButtons(){
    const info = portalAppLabel();
    const installed = isStandalone() || !!window.__rdmAppInstalled;
    const btns = document.querySelectorAll('[data-rdm-install-btn], #downloadApplicationBtn');
    const help = document.getElementById('downloadApplicationHelp');
    btns.forEach(btn => {
      if (!btn.dataset.baseLabel) btn.dataset.baseLabel = btn.textContent.trim();
      if (installed) {
        btn.textContent = info.noun + ' Installed';
        btn.disabled = true;
      } else if (promptEvent) {
        btn.disabled = false;
        btn.textContent = 'Install ' + info.noun;
      } else {
        btn.disabled = false;
        btn.textContent = btn.id === 'downloadApplicationBtn' ? 'Install RDM App' : btn.dataset.baseLabel;
      }
    });
    if (help) {
      if (installed) help.textContent = info.noun + ' is already installed on this device';
      else if (promptEvent) help.textContent = 'Ready to install ' + info.noun + ' onto your home screen';
      else help.textContent = 'Works on Android Chrome, iPhone Safari (Add to Home Screen), and Desktop Chrome/Edge';
    }
  }
  window.rdmSyncInstallButtons = syncInstallButtons;

  async function copyUrlFallback(url, btn){
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
    if (ok && btn) {
      const prev = btn.textContent;
      btn.textContent = 'Link Copied ✓';
      setTimeout(() => { if (btn.isConnected) btn.textContent = prev; }, 1600);
    }
    window.toast?.(ok ? 'Link copied' : 'Copy failed');
  }

  function openInstallGuideModal(){
    document.getElementById('rdmInstallGuideModal')?.remove();
    const info = portalAppLabel();
    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const inIframe = window.self !== window.top;
    const m = document.createElement('div');
    m.id = 'rdmInstallGuideModal';
    m.className = 'modal show rdmUnifiedModal';
    let body = '';
    if (inIframe) {
      body = `<p class="authModalSub">Embedded preview frames block native app installation. Open this exact URL in a full Chrome/Safari browser tab to install ${info.noun}.</p>
      <div class="installGuideActions">
        <a class="primary wide" href="${location.href}" target="_blank" rel="noopener noreferrer">Open in Browser to Install</a>
        <button type="button" class="secondary wide" id="rdmCopyInstallUrl">Copy Portal Link</button>
      </div>`;
    } else if (isIOS) {
      body = `<p class="authModalSub">${info.desc}</p>
      <div class="installGuideSteps">
        <div><strong>1.</strong> Tap the <strong>Share</strong> icon in Safari's toolbar.</div>
        <div><strong>2.</strong> Scroll down and tap <strong>Add to Home Screen</strong>.</div>
        <div><strong>3.</strong> Tap <strong>Add</strong> to save ${info.noun}.</div>
      </div>
      <div class="installGuideActions">
        <button type="button" class="secondary wide" id="rdmCopyInstallUrl">Copy Portal Link</button>
      </div>`;
    } else {
      body = `<p class="authModalSub">${info.desc}</p>
      <div class="installGuideSteps">
        <div><strong>Android Chrome:</strong> Open the browser menu (<strong>⋮</strong>) and tap <strong>Install app</strong> or <strong>Add to Home screen</strong>.</div>
        <div><strong>Desktop Chrome / Edge:</strong> Click the <strong>Install (⊕)</strong> icon in the address bar.</div>
      </div>
      <div class="installGuideActions">
        <button type="button" class="secondary wide" id="rdmCopyInstallUrl">Copy Portal Link</button>
      </div>`;
    }
    m.innerHTML = `<div class="dialog rdmUnifiedDialog installGuideDialog" role="dialog" aria-modal="true">
      <button class="close" type="button" aria-label="Close">×</button>
      <div class="installGuideHead">
        <img src="assets/rdm-logo.png?v=7400" alt="RDM Logo">
        <div>
          <span class="sectionKicker">Official App</span>
          <h2>${info.title}</h2>
        </div>
      </div>
      ${body}
    </div>`;
    document.body.appendChild(m);
    const close = () => m.remove();
    m.querySelector('.close').onclick = close;
    m.querySelector('#rdmCopyInstallUrl')?.addEventListener('click', e => copyUrlFallback(location.href, e.currentTarget));
    m.addEventListener('click', e => { if (e.target === m) close(); });
    const onEsc = e => { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEsc); } };
    document.addEventListener('keydown', onEsc);
  }

  window.rdmPromptInstall = async function(){
    if (isStandalone() || window.__rdmAppInstalled) return 'installed';
    if (!promptEvent) {
      openInstallGuideModal();
      return 'unavailable';
    }
    const e = promptEvent;
    promptEvent = null;
    try {
      await e.prompt();
      const choice = await e.userChoice;
      const outcome = choice && choice.outcome ? choice.outcome : 'dismissed';
      if (outcome === 'accepted') {
        window.__rdmAppInstalled = true;
      }
      syncInstallButtons();
      return outcome;
    } catch (_) {
      openInstallGuideModal();
      return 'dismissed';
    }
  };

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    promptEvent = e;
    syncInstallButtons();
  });

  window.addEventListener('appinstalled', () => {
    promptEvent = null;
    window.__rdmAppInstalled = true;
    syncInstallButtons();
    window.toast?.('RDM App installed');
  });

  try {
    const dm = window.matchMedia('(display-mode: standalone)');
    if (dm.addEventListener) dm.addEventListener('change', () => {
      document.documentElement.classList.toggle('rdm-standalone', isStandalone());
      syncInstallButtons();
    });
  } catch {}

  document.addEventListener('DOMContentLoaded', () => {
    upgradePortalManifestUrl();
    syncInstallButtons();
  });

  document.addEventListener('click', async e => {
    const navDownload = e.target.closest?.('#nav [data-page="download"]');
    if (navDownload && promptEvent && !isStandalone() && !window.__rdmAppInstalled) {
      setTimeout(() => { window.rdmPromptInstall(); }, 140);
      return;
    }
    const btn = e.target.closest?.('[data-rdm-install-btn], #downloadApplicationBtn');
    if (!btn) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    const h = document.getElementById('downloadApplicationHelp');
    const outcome = await window.rdmPromptInstall();
    if (h) {
      if (outcome === 'installed') h.textContent = 'App is already installed on your device';
      else if (outcome === 'accepted') h.textContent = 'Installing RDM app on your device…';
      else if (outcome === 'dismissed') h.textContent = 'Tap Install RDM App whenever ready';
    }
  }, true);
})();
