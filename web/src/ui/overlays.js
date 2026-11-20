import {
  CLUB_INFO,
  PLAYER_CODES,
  escHtml,
  formatTextCase,
  resolvePlayerImage
} from '../data/club.js';

let activeModalStack = [];
let deferredInstallPrompt = null;

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredInstallPrompt = e;
    window.dispatchEvent(new CustomEvent('rdm-pwa-ready'));
  });
}

export function canInstallWebPwa() {
  return Boolean(deferredInstallPrompt);
}

export async function triggerWebPwaInstall() {
  if (!deferredInstallPrompt) return false;
  try {
    await deferredInstallPrompt.prompt();
    const res = await deferredInstallPrompt.userChoice;
    if (res?.outcome === 'accepted') {
      deferredInstallPrompt = null;
      return true;
    }
  } catch (_) {}
  return false;
}

export function openExternalUrl(url) {
  const safe = String(url || '').trim();
  if (!/^https?:\/\//i.test(safe)) return false;
  const a = document.createElement('a');
  a.href = safe;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  a.remove();
  return true;
}

export function downloadApkFile(url) {
  const safe = String(url || '').trim();
  if (!/^https?:\/\//i.test(safe)) return false;
  const a = document.createElement('a');
  a.href = safe;
  a.download = 'RDM-Official.apk';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  a.remove();
  return true;
}

export function showToast(message) {
  const el = document.getElementById('rdmToast');
  if (!el) return;
  el.textContent = String(message || '');
  el.classList.add('show');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('show'), 2200);
}

export function hasOpenOverlay() {
  return activeModalStack.length > 0;
}

export function closeTopOverlay() {
  const top = activeModalStack.pop();
  if (top && top.isConnected) {
    top.remove();
    return true;
  }
  return false;
}

function registerModal(el) {
  activeModalStack.push(el);
  return () => {
    activeModalStack = activeModalStack.filter(item => item !== el);
    if (el.isConnected) el.remove();
  };
}

export function openConfirmSheet({ title, message, confirmLabel = 'Confirm', danger = false, onConfirm }) {
  const overlay = document.createElement('div');
  overlay.className = 'modalOverlay';
  overlay.innerHTML = `
    <div class="modalCard modalCardSm" role="dialog" aria-modal="true">
      <div class="modalHeader">
        <h3>${escHtml(title)}</h3>
      </div>
      <p class="modalText">${escHtml(message)}</p>
      <div class="modalActions">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="button" class="${danger ? 'btnDanger' : 'btnPrimary'}" data-ok>${escHtml(confirmLabel)}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  const close = registerModal(overlay);
  overlay.querySelector('[data-cancel]').onclick = close;
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  overlay.querySelector('[data-ok]').onclick = async e => {
    const btn = e.currentTarget;
    btn.disabled = true;
    try {
      await onConfirm();
      close();
    } catch (err) {
      btn.disabled = false;
      showToast(err?.message || 'Action failed');
    }
  };
}

export function openFormSheet({ title, subtitle = '', fields, submitLabel = 'Save', onSubmit }) {
  const overlay = document.createElement('div');
  overlay.className = 'modalOverlay';

  const fieldsHtml = fields.map(f => {
    const req = f.required ? 'required' : '';
    const val = escHtml(f.value ?? '');
    if (f.type === 'textarea') {
      return `
        <label class="fieldBlock">
          <span>${escHtml(f.label)}</span>
          <textarea name="${escHtml(f.name)}" rows="${f.rows || 4}" placeholder="${escHtml(f.placeholder || '')}" ${req}>${val}</textarea>
        </label>
      `;
    }
    if (f.type === 'select') {
      const opts = (f.options || []).map(o => {
        const optVal = typeof o === 'object' ? o.value : o;
        const optLabel = typeof o === 'object' ? o.label : o;
        const sel = String(optVal) === String(f.value ?? '') ? 'selected' : '';
        return `<option value="${escHtml(optVal)}" ${sel}>${escHtml(optLabel)}</option>`;
      }).join('');
      return `
        <label class="fieldBlock">
          <span>${escHtml(f.label)}</span>
          <select name="${escHtml(f.name)}">${opts}</select>
        </label>
      `;
    }
    if (f.type === 'checkbox') {
      return `
        <label class="checkboxRow">
          <input type="checkbox" name="${escHtml(f.name)}" ${f.checked ? 'checked' : ''}>
          <span>${escHtml(f.label)}</span>
        </label>
      `;
    }
    if (f.type === 'file') {
      return `
        <label class="fieldBlock">
          <span>${escHtml(f.label)}</span>
          <input type="file" name="${escHtml(f.name)}" accept="image/*" ${req}>
        </label>
      `;
    }
    return `
      <label class="fieldBlock">
        <span>${escHtml(f.label)}</span>
        <input type="${escHtml(f.type || 'text')}" name="${escHtml(f.name)}" value="${val}" placeholder="${escHtml(f.placeholder || '')}" ${req}>
      </label>
    `;
  }).join('');

  overlay.innerHTML = `
    <form class="modalCard" role="dialog" aria-modal="true">
      <div class="modalHeader">
        <div>
          <h3>${escHtml(title)}</h3>
          ${subtitle ? `<p class="modalSub">${escHtml(subtitle)}</p>` : ''}
        </div>
      </div>
      <div class="formStack">${fieldsHtml}</div>
      <div class="modalActions">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="submit" class="btnPrimary">${escHtml(submitLabel)}</button>
      </div>
    </form>
  `;

  document.body.appendChild(overlay);
  const close = registerModal(overlay);
  overlay.querySelector('[data-cancel]').onclick = close;
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  overlay.querySelector('form').onsubmit = async e => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const submitBtn = formEl.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    try {
      const data = {};
      fields.forEach(f => {
        const inp = formEl.elements[f.name];
        if (!inp) return;
        if (f.type === 'checkbox') data[f.name] = inp.checked;
        else if (f.type === 'file') data[f.name] = inp.files?.[0] || null;
        else if (f.type === 'textarea') data[f.name] = String(inp.value ?? '').replace(/\r\n?/g, '\n').replace(/^\n+|\s+$/g, '');
        else data[f.name] = String(inp.value ?? '').trim();
      });
      await onSubmit(data);
      close();
    } catch (err) {
      submitBtn.disabled = false;
      showToast(err?.message || 'Save failed');
    }
  };
}

export function openLightbox(src, caption = '') {
  const overlay = document.createElement('div');
  overlay.className = 'lightboxOverlay';
  overlay.innerHTML = `
    <div class="lightboxTopBar">
      <button type="button" class="lightboxCloseBtn" aria-label="Close viewer">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        <span>Back</span>
      </button>
      <span class="lightboxCaption">${escHtml(caption || 'Team Media')}</span>
    </div>
    <div class="lightboxCanvas">
      <img src="${escHtml(src)}" alt="${escHtml(caption || 'RDM Media')}" referrerPolicy="no-referrer">
    </div>
  `;
  document.body.appendChild(overlay);
  const close = registerModal(overlay);
  overlay.querySelector('.lightboxCloseBtn').onclick = close;
  overlay.addEventListener('click', e => {
    if (e.target === overlay || e.target.classList.contains('lightboxCanvas')) close();
  });
}

export function openAvatarCropper({ onSaveDataUrl }) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = () => {
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const overlay = document.createElement('div');
        overlay.className = 'modalOverlay';
        overlay.innerHTML = `
          <div class="modalCard modalCardSm" role="dialog" aria-modal="true">
            <div class="modalHeader">
              <div>
                <h3>Adjust Profile Photo</h3>
                <p class="modalSub">Drag to center and slide zoom</p>
              </div>
            </div>
            <div class="cropStageWrap">
              <canvas id="rdmCropCanvas" width="280" height="280"></canvas>
            </div>
            <label class="fieldBlock">
              <span>Zoom</span>
              <input id="rdmCropZoom" type="range" min="1" max="3" step="0.02" value="1">
            </label>
            <div class="modalActions">
              <button type="button" class="btnSecondary" data-cancel>Cancel</button>
              <button type="button" class="btnPrimary" data-save>Save Photo</button>
            </div>
          </div>
        `;
        document.body.appendChild(overlay);
        const close = registerModal(overlay);
        const canvas = overlay.querySelector('#rdmCropCanvas');
        const zoomInp = overlay.querySelector('#rdmCropZoom');
        const ctx = canvas.getContext('2d');
        const crop = { scale: 1, x: 0, y: 0, drag: false, lx: 0, ly: 0 };

        const draw = () => {
          ctx.clearRect(0, 0, 280, 280);
          const base = Math.max(280 / img.width, 280 / img.height);
          const sc = base * crop.scale;
          const w = img.width * sc;
          const h = img.height * sc;
          const x = (280 - w) / 2 + crop.x;
          const y = (280 - h) / 2 + crop.y;
          ctx.save();
          ctx.beginPath();
          ctx.arc(140, 140, 136, 0, Math.PI * 2);
          ctx.clip();
          ctx.drawImage(img, x, y, w, h);
          ctx.restore();
        };
        draw();

        zoomInp.oninput = e => {
          crop.scale = Number(e.target.value) || 1;
          draw();
        };
        canvas.onpointerdown = e => {
          crop.drag = true;
          crop.lx = e.clientX;
          crop.ly = e.clientY;
          canvas.setPointerCapture(e.pointerId);
        };
        canvas.onpointermove = e => {
          if (!crop.drag) return;
          crop.x += e.clientX - crop.lx;
          crop.y += e.clientY - crop.ly;
          crop.lx = e.clientX;
          crop.ly = e.clientY;
          draw();
        };
        canvas.onpointerup = () => { crop.drag = false; };

        overlay.querySelector('[data-cancel]').onclick = close;
        overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

        overlay.querySelector('[data-save]').onclick = async e => {
          const btn = e.currentTarget;
          btn.disabled = true;
          try {
            const out = document.createElement('canvas');
            out.width = 320;
            out.height = 320;
            out.getContext('2d').drawImage(canvas, 0, 0, 320, 320);
            const dataUrl = out.toDataURL('image/jpeg', 0.72);
            await onSaveDataUrl(dataUrl);
            close();
          } catch (err) {
            btn.disabled = false;
            showToast(err?.message || 'Photo save failed');
          }
        };
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

export async function downloadPlayerProfileCard({ player, brandLogo }) {
  const W = 1080;
  const H = 1350;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d');

  const loadImg = src => new Promise((res, rej) => {
    const im = new Image();
    im.crossOrigin = 'anonymous';
    im.onload = () => res(im);
    im.onerror = rej;
    im.src = src;
  });

  const roundRect = (x, y, w, h, r, fill, stroke) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 2; ctx.stroke(); }
  };

  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#F7F8FA');
  bg.addColorStop(1, '#FFFFFF');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  roundRect(40, 40, W - 80, H - 80, 36, '#FFFFFF', '#E2E6ED');
  roundRect(80, 80, W - 160, 10, 5, '#C81E2B', null);

  let logo = null;
  try { logo = await loadImg(brandLogo || CLUB_INFO.logoPath); } catch (_) {}
  if (logo) {
    ctx.drawImage(logo, 84, 120, 74, 74);
  }
  ctx.textAlign = 'left';
  ctx.fillStyle = '#0F172A';
  ctx.font = '800 34px "Outfit", "Plus Jakarta Sans", sans-serif';
  ctx.fillText('REHAN DOMINATORS MAHUAWAN', 176, 156);
  ctx.fillStyle = '#64748B';
  ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('MAHUAWAN · GOPALGANJ · BIHAR', 176, 186);

  let avatar = null;
  try {
    avatar = await loadImg(resolvePlayerImage(player.image, brandLogo));
  } catch (_) {
    avatar = logo;
  }
  if (avatar) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(W / 2, 370, 140, 0, Math.PI * 2);
    ctx.clip();
    const sc = Math.max(280 / avatar.width, 280 / avatar.height);
    ctx.drawImage(avatar, W / 2 - (avatar.width * sc) / 2, 370 - (avatar.height * sc) / 2, avatar.width * sc, avatar.height * sc);
    ctx.restore();
    ctx.strokeStyle = '#C81E2B';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(W / 2, 370, 146, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.textAlign = 'center';
  ctx.fillStyle = '#0F172A';
  ctx.font = '800 58px "Barlow Condensed", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(formatTextCase(player.name), W / 2, 580);

  roundRect(120, 620, 840, 124, 24, '#FCF7F7', '#F3D4D8');
  ctx.fillStyle = '#C81E2B';
  ctx.font = '700 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('PLAYER CODE', 330, 662);
  ctx.fillText('JERSEY NUMBER', 750, 662);
  ctx.fillStyle = '#0F172A';
  ctx.font = '700 30px "JetBrains Mono", monospace';
  ctx.fillText(PLAYER_CODES[player.id] || player.id, 330, 708);
  ctx.fillText(player.jersey ? `#${player.jersey}` : '—', 750, 708);

  roundRect(120, 774, 840, 140, 24, '#F8FAFC', '#E2E6ED');
  ctx.fillStyle = '#C81E2B';
  ctx.font = '700 24px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(formatTextCase(player.role || ''), W / 2, 828);
  ctx.fillStyle = '#475569';
  ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(formatTextCase(player.detail || '').slice(0, 66), W / 2, 872);

  ctx.fillStyle = '#C81E2B';
  ctx.font = '700 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('ONE TEAM · ONE DREAM · ONE DOMINATION', W / 2, 1234);
  ctx.fillStyle = '#64748B';
  ctx.font = '600 15px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('RDM OFFICIAL · PLAYER IDENTITY CARD', W / 2, 1266);

  const fileName = `${player.id}-${String(player.name || 'PLAYER').replace(/\s+/g, '-')}-RDM-CARD.png`;
  const dataUrl = c.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  showToast('Player card downloaded');
}
