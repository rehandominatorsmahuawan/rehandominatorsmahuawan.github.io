/* RDM Admin-Only Firebase Auth User Email Updater (UID Locked)
   Runs strictly inside the private Admin Portal (?key=<ADMIN_LINK>).
   Zero service account keys or privileged Admin SDK credentials exist in frontend code.
   All updates go through server-side POST /api/admin/update-user-email authenticated with a real Firebase Admin ID Token. */
(() => {
  'use strict';

  const TARGET_UID = 'eNgwkyptLJVOk82PFgL5lmovqxp2';

  function escHtml(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c]));
  }

  async function getIdToken() {
    const user = typeof rdmAuth !== 'undefined' ? rdmAuth?.currentUser : null;
    if (!user) return '';
    return user.getIdToken(true);
  }

  async function fetchTargetStatus() {
    const statusBox = document.getElementById('rdmTargetUidStatus');
    if (!statusBox) return;

    const token = await getIdToken();
    if (!token) {
      statusBox.textContent = 'Sign in with your Firebase Admin account above to inspect target UID status.';
      return;
    }

    statusBox.textContent = 'Checking target UID via secure server endpoint...';
    try {
      const res = await fetch('/api/admin/target-user-status', {
        headers: { Authorization: 'Bearer ' + token }
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        statusBox.textContent = data.error || `Server check returned HTTP ${res.status}`;
        return;
      }
      statusBox.innerHTML =
        `UID: <code>${escHtml(data.uid)}</code> · Current Email: <b>${escHtml(data.currentEmail || 'Not set')}</b> · Verified: ${data.emailVerified ? 'Yes' : 'No'}`;
    } catch (err) {
      statusBox.textContent = 'Unable to reach /api/admin/target-user-status: ' + (err?.message || err);
    }
  }

  function renderEmailToolCard() {
    if (!window.rdmAdmin?.() || !document.getElementById('adminBody')) return;
    const adminBody = document.getElementById('adminBody');

    let card = document.getElementById('adminFirebaseEmailCard');
    if (!card) {
      card = document.createElement('section');
      card.id = 'adminFirebaseEmailCard';
      card.className = 'adminPlayerManager adminLinksBox';
      adminBody.appendChild(card);
    }

    const currentAdmin = typeof rdmAuth !== 'undefined' ? rdmAuth?.currentUser : null;

    card.innerHTML = `
      <div class="sectionHead">
        <div>
          <span>Server-Side Firebase Admin SDK</span>
          <h2>Update Target Auth User Email</h2>
          <p>In-place email update for locked UID <code>${TARGET_UID}</code> via <code>updateUser()</code>. UID is preserved; no user is deleted or recreated.</p>
        </div>
      </div>

      <div style="display:grid;gap:12px;margin-top:12px;">
        <div style="padding:12px;border:1px solid var(--line,rgba(148,163,184,.25));border-radius:10px;background:var(--card2,rgba(15,23,42,.04));">
          <div style="font-size:13px;font-weight:600;margin-bottom:6px;">
            1. Firebase Admin Session:
            ${currentAdmin
              ? `<span style="color:var(--ok,#15803d);">Signed in as ${escHtml(currentAdmin.email || currentAdmin.uid)}</span>`
              : '<span style="color:var(--warn,#b45309);">Not signed in to Firebase Auth</span>'}
          </div>
          ${currentAdmin
            ? `<button type="button" class="tinyBtn" id="rdmFbAdminSignOutBtn">Sign Out Firebase Auth</button>`
            : `<form id="rdmFbAdminSignInForm" style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
                 <input type="email" id="rdmFbAdminEmail" required placeholder="Firebase Admin Email" autocomplete="username" style="flex:1;min-width:180px;padding:8px 10px;border-radius:8px;border:1px solid var(--line,#cbd5e1);">
                 <input type="password" id="rdmFbAdminPass" required placeholder="Password" autocomplete="current-password" style="flex:1;min-width:150px;padding:8px 10px;border-radius:8px;border:1px solid var(--line,#cbd5e1);">
                 <button type="submit" class="primary">Sign In as Firebase Admin</button>
               </form>`}
        </div>

        <div id="rdmTargetUidStatus" style="font-size:13px;padding:10px 12px;border-radius:8px;border:1px dashed var(--line,rgba(148,163,184,.35));">
          Checking authentication state...
        </div>

        <form id="rdmUpdateTargetEmailForm" style="display:grid;gap:10px;">
          <label style="display:grid;gap:4px;font-size:13px;font-weight:600;">
            Locked Target UID
            <input type="text" readonly value="${TARGET_UID}" style="padding:8px 10px;border-radius:8px;border:1px solid var(--line,#cbd5e1);font-family:var(--mono,monospace);opacity:.85;">
          </label>
          <label style="display:grid;gap:4px;font-size:13px;font-weight:600;">
            New Email Address
            <input type="email" id="rdmNewTargetEmail" required placeholder="Enter exact new email address" autocomplete="off" style="padding:8px 10px;border-radius:8px;border:1px solid var(--line,#cbd5e1);">
          </label>
          <label style="display:grid;gap:4px;font-size:13px;font-weight:600;">
            Confirm New Email Address
            <input type="email" id="rdmConfirmTargetEmail" required placeholder="Re-type exact new email address" autocomplete="off" style="padding:8px 10px;border-radius:8px;border:1px solid var(--line,#cbd5e1);">
          </label>
          <label style="display:flex;gap:8px;align-items:flex-start;font-size:12.5px;line-height:1.4;">
            <input type="checkbox" id="rdmConfirmUidLock" required style="margin-top:3px;">
            <span>I confirm I want to update <strong>only</strong> UID <code>${TARGET_UID}</code> in place without deleting or modifying any other Firebase user.</span>
          </label>
          <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
            <button type="submit" class="primary" id="rdmSubmitTargetEmailBtn" ${currentAdmin ? '' : 'disabled'}>Update Target User Email</button>
            <button type="button" class="tinyBtn" id="rdmRefreshTargetStatusBtn">Refresh Status</button>
          </div>
          <div id="rdmUpdateTargetEmailResult" style="font-size:13px;min-height:18px;"></div>
        </form>
      </div>
    `;

    document.getElementById('rdmFbAdminSignOutBtn')?.addEventListener('click', async () => {
      try {
        await rdmAuth.signOut();
        renderEmailToolCard();
      } catch (err) {
        window.toast?.(err?.message || 'Sign out failed');
      }
    });

    document.getElementById('rdmFbAdminSignInForm')?.addEventListener('submit', async e => {
      e.preventDefault();
      const email = document.getElementById('rdmFbAdminEmail')?.value?.trim() || '';
      const pass = document.getElementById('rdmFbAdminPass')?.value || '';
      const resultEl = document.getElementById('rdmUpdateTargetEmailResult');
      try {
        await rdmAuth.signInWithEmailAndPassword(email, pass);
        window.toast?.('Signed in to Firebase Auth');
        renderEmailToolCard();
      } catch (err) {
        if (resultEl) resultEl.textContent = err?.message || 'Firebase sign-in failed.';
      }
    });

    document.getElementById('rdmRefreshTargetStatusBtn')?.addEventListener('click', () => {
      fetchTargetStatus();
    });

    document.getElementById('rdmUpdateTargetEmailForm')?.addEventListener('submit', async e => {
      e.preventDefault();
      const resultEl = document.getElementById('rdmUpdateTargetEmailResult');
      const btn = document.getElementById('rdmSubmitTargetEmailBtn');
      const newEmail = document.getElementById('rdmNewTargetEmail')?.value?.trim() || '';
      const confirmEmail = document.getElementById('rdmConfirmTargetEmail')?.value?.trim() || '';

      if (!newEmail || newEmail !== confirmEmail) {
        if (resultEl) resultEl.textContent = 'Email and confirmation email do not match.';
        return;
      }

      const token = await getIdToken();
      if (!token) {
        if (resultEl) resultEl.textContent = 'Please sign in with your Firebase Admin account first.';
        return;
      }

      if (btn) btn.disabled = true;
      if (resultEl) resultEl.textContent = 'Updating email securely via server...';

      try {
        const res = await fetch('/api/admin/update-user-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
          },
          body: JSON.stringify({
            uid: TARGET_UID,
            newEmail
          })
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.ok) {
          if (resultEl) resultEl.textContent = data.error || `Failed (HTTP ${res.status})`;
          return;
        }
        if (resultEl) {
          resultEl.innerHTML =
            `<span style="color:var(--ok,#15803d);font-weight:600;">Updated!</span> UID <code>${escHtml(data.uid)}</code> email changed from <b>${escHtml(data.previousEmail || 'unset')}</b> to <b>${escHtml(data.email)}</b>.`;
        }
        window.toast?.('Target user email updated');
        fetchTargetStatus();
      } catch (err) {
        if (resultEl) resultEl.textContent = 'Request failed: ' + (err?.message || err);
      } finally {
        if (btn) btn.disabled = false;
      }
    });

    fetchTargetStatus();
  }

  const prevRenderAdmin = window.renderAdmin;
  window.renderAdmin = function () {
    prevRenderAdmin?.();
    setTimeout(renderEmailToolCard, 0);
  };
  window.addEventListener('rdm-auth-ready', () => setTimeout(renderEmailToolCard, 120));
  if (typeof rdmAuth !== 'undefined' && rdmAuth?.onAuthStateChanged) {
    rdmAuth.onAuthStateChanged(() => {
      if (document.getElementById('adminFirebaseEmailCard')) renderEmailToolCard();
    });
  }
})();
