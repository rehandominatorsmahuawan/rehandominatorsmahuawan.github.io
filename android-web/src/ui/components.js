import {
  CLUB_INFO,
  PLAYER_CODES,
  escHtml,
  formatTextCase,
  resolvePlayerImage
} from '../data/roster.js';

let activeModalStack = [];

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
  overlay.className = 'sheetOverlay show';
  overlay.innerHTML = `
    <div class="sheetCard confirmCard" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <h3>${escHtml(title)}</h3>
      </div>
      <p class="confirmMessage">${escHtml(message)}</p>
      <div class="sheetActions">
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
  overlay.className = 'sheetOverlay show';

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
    <form class="sheetCard formSheet" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>${escHtml(title)}</h3>
          ${subtitle ? `<p class="sheetSub">${escHtml(subtitle)}</p>` : ''}
        </div>
      </div>
      <div class="formStack">${fieldsHtml}</div>
      <div class="sheetFooterSticky">
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

export function openThemeSheet({ currentTheme, onSelectTheme }) {
  const overlay = document.createElement('div');
  overlay.className = 'sheetOverlay show';
  const themes = [
    {
      id: 'azure',
      name: 'Sky Azure',
      desc: 'Official Royal Blue & crisp white palette',
      swatches: ['#F3F7FD', '#FFFFFF', '#0958D9']
    },
    {
      id: 'crimson',
      name: 'Dominator Crimson',
      desc: 'Club crest crimson red & clean white',
      swatches: ['#FCF7F7', '#FFFFFF', '#C61D2E']
    },
    {
      id: 'daylight',
      name: 'Stadium Daylight',
      desc: 'Minimal high-clarity bright white canvas',
      swatches: ['#F8FAFC', '#FFFFFF', '#1D4ED8']
    },
    {
      id: 'night',
      name: 'Floodlight Night',
      desc: 'Deep stadium navy dark mode',
      swatches: ['#071224', '#0E1F3A', '#38BDF8']
    }
  ];

  overlay.innerHTML = `
    <div class="sheetCard" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>App Appearance</h3>
          <p class="sheetSub">Tap a palette to apply immediately</p>
        </div>
      </div>
      <div class="themeChoiceList">
        ${themes.map(t => `
          <button type="button" class="themeChoiceRow ${currentTheme === t.id ? 'active' : ''}" data-pick-theme="${t.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${t.swatches.map(c => `<span style="background:${c}"></span>`).join('')}
            </div>
            <div class="themeChoiceCopy">
              <strong>${escHtml(t.name)}</strong>
              <span>${escHtml(t.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${currentTheme === t.id ? 'Active' : 'Apply'}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  const close = registerModal(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  overlay.querySelectorAll('[data-pick-theme]').forEach(btn => {
    btn.addEventListener('click', () => {
      onSelectTheme(btn.dataset.pickTheme);
      close();
    });
  });
}

export function openLightbox(src, caption = '') {
  const overlay = document.createElement('div');
  overlay.className = 'lightboxOverlay show';
  overlay.innerHTML = `
    <div class="lightboxTopBar">
      <div class="lightboxLeft">
        <button type="button" class="iconCloseBtn darkSurface" aria-label="Back">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <span class="lightboxCaption">${escHtml(caption || 'Team Gallery')}</span>
      </div>
    </div>
    <div class="lightboxCanvas">
      <img src="${escHtml(src)}" alt="${escHtml(caption || 'Gallery image')}" referrerPolicy="no-referrer">
    </div>
  `;
  document.body.appendChild(overlay);
  const close = registerModal(overlay);
  overlay.querySelector('.iconCloseBtn').onclick = close;
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
        overlay.className = 'sheetOverlay show';
        overlay.innerHTML = `
          <div class="sheetCard cropSheet" role="dialog" aria-modal="true">
            <div class="sheetHandle"></div>
            <div class="sheetHeader">
              <div>
                <h3>Adjust Profile Photo</h3>
                <p class="sheetSub">Drag to center and slide zoom</p>
              </div>
            </div>
            <div class="cropStageWrap">
              <canvas id="rdmCropCanvas" width="300" height="300"></canvas>
            </div>
            <label class="fieldBlock">
              <span>Zoom</span>
              <input id="rdmCropZoom" type="range" min="1" max="3" step="0.02" value="1">
            </label>
            <div class="sheetActions">
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
          ctx.clearRect(0, 0, 300, 300);
          const base = Math.max(300 / img.width, 300 / img.height);
          const sc = base * crop.scale;
          const w = img.width * sc;
          const h = img.height * sc;
          const x = (300 - w) / 2 + crop.x;
          const y = (300 - h) / 2 + crop.y;
          ctx.save();
          ctx.beginPath();
          ctx.arc(150, 150, 146, 0, Math.PI * 2);
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
  bg.addColorStop(0, '#EDF5FF');
  bg.addColorStop(1, '#FFFFFF');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  roundRect(40, 40, W - 80, H - 80, 40, '#FFFFFF', '#C9DFF7');
  roundRect(80, 80, W - 160, 10, 5, '#0958D9', null);

  let logo = null;
  try { logo = await loadImg(brandLogo || CLUB_INFO.logoPath); } catch (_) {}
  if (logo) {
    ctx.drawImage(logo, 84, 120, 74, 74);
  }
  ctx.textAlign = 'left';
  ctx.fillStyle = '#0B2340';
  ctx.font = '800 34px "Barlow Condensed", "Plus Jakarta Sans", sans-serif';
  ctx.fillText('REHAN DOMINATORS MAHUAWAN', 176, 156);
  ctx.fillStyle = '#5B7693';
  ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('MAHUAWAN • GOPALGANJ • BIHAR', 176, 186);

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
    ctx.strokeStyle = '#0958D9';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(W / 2, 370, 146, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.textAlign = 'center';
  ctx.fillStyle = '#0B2340';
  ctx.font = '800 58px "Barlow Condensed", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(formatTextCase(player.name), W / 2, 580);

  roundRect(120, 620, 840, 124, 24, '#F2F7FD', '#CFE2F7');
  ctx.fillStyle = '#0958D9';
  ctx.font = '700 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('PLAYER CODE', 330, 662);
  ctx.fillText('JERSEY NUMBER', 750, 662);
  ctx.fillStyle = '#0B2340';
  ctx.font = '700 30px "JetBrains Mono", monospace';
  ctx.fillText(PLAYER_CODES[player.id] || player.id, 330, 708);
  ctx.fillText(player.jersey ? `#${player.jersey}` : '—', 750, 708);

  roundRect(120, 774, 840, 140, 24, '#F8FBFF', '#D9E8F7');
  ctx.fillStyle = '#0958D9';
  ctx.font = '700 24px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(formatTextCase(player.role || ''), W / 2, 828);
  ctx.fillStyle = '#3E5A78';
  ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(formatTextCase(player.detail || '').slice(0, 66), W / 2, 872);

  ctx.fillStyle = '#0958D9';
  ctx.font = '700 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('ONE TEAM • ONE DREAM • ONE DOMINATION', W / 2, 1234);
  ctx.fillStyle = '#5B7693';
  ctx.font = '600 15px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('RDM OFFICIAL • PLAYER IDENTITY CARD', W / 2, 1266);

  const fileName = `${player.id}-${String(player.name || 'PLAYER').replace(/\s+/g, '-')}-RDM-CARD.png`;
  const blob = await new Promise(resolve => c.toBlob(resolve, 'image/png'));

  if (blob && typeof navigator !== 'undefined' && typeof navigator.share === 'function' && typeof File === 'function') {
    try {
      const file = new File([blob], fileName, { type: 'image/png' });
      const canShareFiles = typeof navigator.canShare === 'function' ? navigator.canShare({ files: [file] }) : true;
      if (canShareFiles) {
        await navigator.share({
          files: [file],
          title: `${formatTextCase(player.name)} · RDM Player Card`,
          text: `${formatTextCase(player.name)} (${PLAYER_CODES[player.id] || player.id}) — Rehan Dominators Mahuawan`
        });
        showToast('Player card ready to save or share');
        return;
      }
    } catch (err) {
      if (err && err.name === 'AbortError') return;
    }
  }

  const dataUrl = c.toDataURL('image/png');
  const isCapacitorNative = Boolean(window.Capacitor?.isNativePlatform?.());
  if (!isCapacitorNative) {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast('Player card downloaded');
    return;
  }

  openLightbox(dataUrl, `${formatTextCase(player.name)} · RDM Player Card`);
  showToast('Player card generated');
}

export function openAppUpdateSheet({ currentVersion, latestVersion, notes, forceUpdate = false, onDownload }) {
  if (document.getElementById('rdmUpdateSheetOverlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'rdmUpdateSheetOverlay';
  overlay.className = 'sheetOverlay show';
  overlay.innerHTML = `
    <div class="sheetCard confirmCard" role="dialog" aria-modal="true" aria-label="App Update Available">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <span class="sectionKicker">New Version Available</span>
          <h3>Update RDM Official APK</h3>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:10px;">
        <span class="metaCode">Installed: v${escHtml(currentVersion)}</span>
        <span class="metaCode" style="background:var(--brand-blue);color:#fff;">Latest: v${escHtml(latestVersion)}</span>
      </div>
      <p class="confirmMessage richText" style="margin-bottom:16px;">${escHtml(notes || 'A newer version of RDM Official Android App is ready to download and install.')}</p>
      <div class="sheetActions"${forceUpdate ? ' style="grid-template-columns:1fr;"' : ''}>
        ${forceUpdate ? '' : '<button type="button" class="btnSecondary" data-later>Later</button>'}
        <button type="button" class="btnPrimary" data-download>Download Update v${escHtml(latestVersion)}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  const close = registerModal(overlay);
  const laterBtn = overlay.querySelector('[data-later]');
  if (laterBtn) {
    laterBtn.onclick = () => {
      try { sessionStorage.setItem(`rdm-dismiss-update-${latestVersion}`, '1'); } catch (_) {}
      close();
    };
  }
  if (!forceUpdate) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        try { sessionStorage.setItem(`rdm-dismiss-update-${latestVersion}`, '1'); } catch (_) {}
        close();
      }
    });
  }
  overlay.querySelector('[data-download]').onclick = () => {
    if (typeof onDownload === 'function') onDownload();
    if (!forceUpdate) close();
  };
}
