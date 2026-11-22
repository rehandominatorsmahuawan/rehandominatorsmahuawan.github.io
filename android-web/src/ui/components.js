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

function isPermErr(err) {
  return err?.code === 'permission-denied' || /Missing (?:or insufficient|cloud) permissions/i.test(String(err?.message || ''));
}

export function openConfirmSheet({ title, message, confirmLabel = 'Confirm', danger = false, onConfirm, onPermissionDenied }) {
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
      if (isPermErr(err) && typeof onPermissionDenied === 'function') {
        close();
        onPermissionDenied(err);
        return;
      }
      btn.disabled = false;
      showToast(err?.message || 'Action failed');
    }
  };
}

export function openFormSheet({ title, subtitle = '', fields, submitLabel = 'Save', onSubmit, onPermissionDenied }) {
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
      if (isPermErr(err) && typeof onPermissionDenied === 'function') {
        close();
        onPermissionDenied(err);
        return;
      }
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
      id: 'leather',
      name: 'Editorial Crimson',
      desc: 'Alabaster Chalk canvas & Cricket Leather Crimson',
      swatches: ['#FAF9F7', '#FFFFFF', '#9F1239']
    },
    {
      id: 'carbon',
      name: 'Floodlight Carbon',
      desc: 'Dark carbon stadium slate with crimson accents',
      swatches: ['#090A0D', '#12141A', '#E11D48']
    },
    {
      id: 'alabaster',
      name: 'Pavilion Ivory',
      desc: 'Clean daylight alabaster with deep sapphire ink',
      swatches: ['#F8FAFC', '#FFFFFF', '#1D4ED8']
    },
    {
      id: 'copper',
      name: 'Heritage Copper',
      desc: 'Warm stone chalk & burnished bronze accent',
      swatches: ['#F7F5F2', '#FFFFFF', '#9A3412']
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
  bg.addColorStop(0, '#FAF9F7');
  bg.addColorStop(1, '#F2EFEA');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  roundRect(40, 40, W - 80, H - 80, 28, '#FFFFFF', '#E5E0D8');
  roundRect(80, 80, W - 160, 8, 4, '#9F1239', null);

  let logo = null;
  try { logo = await loadImg(brandLogo || CLUB_INFO.logoPath); } catch (_) {}
  if (logo) {
    ctx.drawImage(logo, 84, 120, 74, 74);
  }
  ctx.textAlign = 'left';
  ctx.fillStyle = '#161412';
  ctx.font = '700 34px "Oswald", "Plus Jakarta Sans", sans-serif';
  ctx.fillText('REHAN DOMINATORS MAHUAWAN', 176, 156);
  ctx.fillStyle = '#665E57';
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
    ctx.strokeStyle = '#9F1239';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(W / 2, 370, 146, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.textAlign = 'center';
  ctx.fillStyle = '#161412';
  ctx.font = '700 58px "Oswald", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(formatTextCase(player.name), W / 2, 580);

  roundRect(120, 620, 840, 124, 18, '#FAF9F7', '#E5E0D8');
  ctx.fillStyle = '#9F1239';
  ctx.font = '700 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('PLAYER CODE', 330, 662);
  ctx.fillText('JERSEY NUMBER', 750, 662);
  ctx.fillStyle = '#161412';
  ctx.font = '700 30px "IBM Plex Mono", monospace';
  ctx.fillText(PLAYER_CODES[player.id] || player.id, 330, 708);
  ctx.fillText(player.jersey ? `#${player.jersey}` : '—', 750, 708);

  roundRect(120, 774, 840, 140, 18, '#F2EFEA', '#E5E0D8');
  ctx.fillStyle = '#9F1239';
  ctx.font = '700 24px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(formatTextCase(player.role || ''), W / 2, 828);
  ctx.fillStyle = '#3B3530';
  ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(formatTextCase(player.detail || '').slice(0, 66), W / 2, 872);

  ctx.fillStyle = '#9F1239';
  ctx.font = '700 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('ONE TEAM · ONE DREAM · ONE DOMINATION', W / 2, 1234);
  ctx.fillStyle = '#665E57';
  ctx.font = '600 15px "IBM Plex Mono", monospace';
  ctx.fillText('RDM OFFICIAL · PLAYER IDENTITY CARD', W / 2, 1266);

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

export function openAppUpdateSheet({
  currentVersion,
  latestVersion,
  notes,
  forceUpdate = false,
  isNative = false,
  needsInstallPermission = false,
  onDownload,
  onOpenPermissionSettings,
  onSubscribeProgress
}) {
  if (document.getElementById('rdmUpdateSheetOverlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'rdmUpdateSheetOverlay';
  overlay.className = 'sheetOverlay show';

  let permMissing = Boolean(isNative && needsInstallPermission);
  const actionLabel = isNative
    ? (permMissing ? 'Allow App Updates Setting' : `Update App In-Place (v${escHtml(latestVersion)})`)
    : `Download APK v${escHtml(latestVersion)}`;

  overlay.innerHTML = `
    <div class="sheetCard confirmCard" role="dialog" aria-modal="true" aria-label="App Update Available">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <span class="sectionKicker">New Version Available</span>
          <h3>${isNative ? 'Update RDM Official' : 'Update RDM Official APK'}</h3>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:10px;">
        <span class="metaCode">Installed: v${escHtml(currentVersion)}</span>
        <span class="metaCode" style="color:var(--brand-blue);">Latest: v${escHtml(latestVersion)}</span>
      </div>
      <p class="confirmMessage richText" style="margin-bottom:12px;">${escHtml(notes || 'A newer version of RDM Official Android App is ready to install right inside the app without uninstalling.')}</p>
      <div class="updatePermBox" id="rdmUpdatePermBox" style="${permMissing ? '' : 'display:none;'}">
        <strong>One-Time Android Permission Needed</strong>
        <span>Allow "Install unknown apps" for RDM Official so Android can update your app automatically in place without losing your login or data.</span>
      </div>
      <div class="updateProgressWrap" id="rdmUpdateProgressWrap" style="display:none;">
        <div class="updateProgressTop">
          <span id="rdmUpdateStatusText">Preparing update...</span>
          <span id="rdmUpdatePercentText" class="num">0%</span>
        </div>
        <div class="updateProgressTrack">
          <div class="updateProgressFill" id="rdmUpdateProgressFill" style="width:0%;"></div>
        </div>
      </div>
      <div class="errorBanner" id="rdmUpdateErrorBox" style="display:none;margin-bottom:12px;"></div>
      <div class="sheetActions"${forceUpdate ? ' style="grid-template-columns:1fr;"' : ''}>
        ${forceUpdate ? '' : '<button type="button" class="btnSecondary" data-later>Later</button>'}
        <button type="button" class="btnPrimary" data-download>${actionLabel}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  const rawClose = registerModal(overlay);

  const permBox = overlay.querySelector('#rdmUpdatePermBox');
  const progressWrap = overlay.querySelector('#rdmUpdateProgressWrap');
  const statusEl = overlay.querySelector('#rdmUpdateStatusText');
  const pctEl = overlay.querySelector('#rdmUpdatePercentText');
  const fillEl = overlay.querySelector('#rdmUpdateProgressFill');
  const errEl = overlay.querySelector('#rdmUpdateErrorBox');
  const dlBtn = overlay.querySelector('[data-download]');
  const laterBtn = overlay.querySelector('[data-later]');

  let unsubProgress = () => {};
  const close = () => {
    unsubProgress();
    rawClose();
  };

  if (typeof onSubscribeProgress === 'function') {
    unsubProgress = onSubscribeProgress(({ percent = 0, downloadedBytes = 0, totalBytes = 0 }) => {
      progressWrap.style.display = 'block';
      errEl.style.display = 'none';
      const safePct = Math.max(0, Math.min(100, Number(percent) || 0));
      fillEl.style.width = `${safePct}%`;
      pctEl.textContent = `${safePct}%`;
      const mbDown = (downloadedBytes / (1024 * 1024)).toFixed(1);
      if (totalBytes > 0) {
        const mbTot = (totalBytes / (1024 * 1024)).toFixed(1);
        statusEl.textContent = safePct >= 100 ? 'Verifying & opening Android updater...' : `Downloading ${mbDown} / ${mbTot} MB...`;
      } else {
        statusEl.textContent = `Downloading ${mbDown} MB...`;
      }
    });
  }

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

  dlBtn.onclick = async () => {
    errEl.style.display = 'none';
    if (isNative && permMissing) {
      permMissing = false;
      permBox.style.display = 'none';
      dlBtn.textContent = `Update App In-Place (v${latestVersion})`;
      if (typeof onOpenPermissionSettings === 'function') {
        await onOpenPermissionSettings();
      }
      return;
    }

    if (!isNative) {
      if (typeof onDownload === 'function') onDownload();
      if (!forceUpdate) close();
      return;
    }

    dlBtn.disabled = true;
    dlBtn.textContent = 'Downloading Update...';
    progressWrap.style.display = 'block';
    statusEl.textContent = 'Starting secure download...';
    try {
      const result = await onDownload?.();
      if (result && result.needsPermission) {
        permMissing = true;
        permBox.style.display = 'flex';
        progressWrap.style.display = 'none';
        dlBtn.disabled = false;
        dlBtn.textContent = 'Allow App Updates Setting';
        return;
      }
      statusEl.textContent = 'Installer ready. Confirm Update on Android prompt.';
      pctEl.textContent = '100%';
      fillEl.style.width = '100%';
      dlBtn.disabled = false;
      dlBtn.textContent = `Install Update v${latestVersion}`;
      if (!forceUpdate) {
        setTimeout(() => close(), 900);
      }
    } catch (err) {
      dlBtn.disabled = false;
      dlBtn.textContent = `Retry Update (v${latestVersion})`;
      errEl.textContent = err?.message || 'Unable to download update. Please check your connection and try again.';
      errEl.style.display = 'block';
    }
  };
}
