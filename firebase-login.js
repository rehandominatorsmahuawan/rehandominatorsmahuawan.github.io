/* RDM Portal Session & Password Lock Controller */
(function () {
  'use strict';

  window.openPrivateKeyAuthModal = function () {};

  window.rdmLogout = function () {
    if (window.__rdmUrlKeyRole === 'admin') {
      window.rdmLockAdmin?.();
      return;
    }
    if (window.__rdmUrlPlayerId) {
      try { sessionStorage.removeItem('rdm_player_pw_' + window.__rdmUrlPlayerId); } catch (_) {}
    }
    if (window.__rdmUrlKeyRole === 'player' && window.__rdmUrlPlayerId) {
      window.rdmLockPlayer?.(window.__rdmUrlPlayerId);
      return;
    }
    session = null;
    localStorage.removeItem('RDM_V33_SESSION');
    if (window.history && history.replaceState) {
      history.replaceState(null, '', location.pathname + location.hash);
    }
    window.__rdmUrlKeyRole = 'public';
    window.__rdmUrlPlayerId = null;
    updateAuthUI?.();
    render?.();
    go?.('home');
  };

  localStorage.removeItem('RDM_V33_SESSION');
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('rdm-auth-ready'));
  }, 0);
})();
