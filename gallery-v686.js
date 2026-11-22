/* RDM V8.0.0 — Gallery albums & live sync */
(function () {
  const ALBUMS = ['ALL', 'TEAM PHOTOS', 'MEMORIES', 'UPDATES'];
  const DEST = ALBUMS.filter(x => x !== 'ALL');
  window.galleryFilter = (typeof window.galleryFilter === 'string' && ALBUMS.includes(window.galleryFilter)) ? window.galleryFilter : 'ALL';

  function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }
  function when(x) {
    return typeof rdmWhen === 'function' ? rdmWhen(x) : '';
  }

  window.moveGalleryPhoto = async function (id, current) {
    if (!(typeof rdmAdmin === 'function' && rdmAdmin())) return;
    const m = document.createElement('div');
    m.id = 'galleryMoveModal';
    m.className = 'modal show';
    m.innerHTML = `<form class="dialog rdmUnifiedDialog galleryMoveDialog">
      <button class="close" type="button" aria-label="Close">×</button>
      <h2>Move Photo</h2>
      <p class="authModalSub">Select destination album for this gallery item</p>
      <label>Album<select id="moveAlbum">${DEST.map(a => `<option value="${esc(a)}" ${a === current ? 'selected' : ''}>${mini(a)}</option>`).join('')}</select></label>
      <button class="primary wide" type="submit">Move to Album</button>
    </form>`;
    document.body.appendChild(m);
    m.querySelector('.close').onclick = () => m.remove();
    m.addEventListener('click', e => { if (e.target === m) m.remove(); });
    m.querySelector('form').onsubmit = async e => {
      e.preventDefault();
      const album = m.querySelector('#moveAlbum').value;
      const g = (D.gallery || []).find(x => x._docId === id);
      if (g) g.album = album;
      try {
        await rdmDB.collection('Gallery').doc(id).set({ album, updatedAt: rdmStamp() }, { merge: true });
      } catch (err) {
        window.rdmSaveCollectionOverride?.('gallery', D.gallery);
        window.rdmReportWriteError?.(err, 'Move gallery photo');
      }
      m.remove();
      renderGalleryAlbums();
      window.refreshAdminSectionManager?.();
      toast('Photo moved');
    };
  };

  window.renderGalleryAlbums = function () {
    const g = document.getElementById('galleryList');
    if (!g || typeof D === 'undefined') return;
    let bar = document.getElementById('albumFilters');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'albumFilters';
      bar.className = 'albumFilters';
      g.before(bar);
    }
    if (!ALBUMS.includes(window.galleryFilter)) window.galleryFilter = 'ALL';
    bar.innerHTML = ALBUMS.map(c => `<button type="button" class="tinyBtn albumTab ${window.galleryFilter === c ? 'on' : ''}" data-album="${esc(c)}">${mini(c)}</button>`).join('');
    bar.querySelectorAll('[data-album]').forEach(btn => btn.addEventListener('click', () => {
      window.galleryFilter = btn.dataset.album;
      window.renderGalleryAlbums();
    }));

    const all = (D.gallery || []).filter(x => !['MATCHES', 'TROPHIES'].includes((x.album || 'MEMORIES').toUpperCase()));
    const arr = window.galleryFilter === 'ALL'
      ? all
      : all.filter(x => (x.album || 'MEMORIES').toUpperCase() === window.galleryFilter);

    g.innerHTML = arr.length
      ? arr.map(x => {
          const album = (x.album || 'MEMORIES').toUpperCase();
          const note = x.caption || 'RDM Memory';
          return `<figure class="galleryCard">
            <img src="${esc(x.image)}" alt="${esc(mini(note))}" loading="lazy" decoding="async" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='assets/rdm-logo.png?v=7400'" onclick="zoom(this.src)">
            <figcaption>
              <div class="galleryAlbumName">${mini(album)}</div>
              <div class="galleryDateTime">${when(x.createdMs) || 'Club Archive'}</div>
              <div class="galleryNote">${mini(note)}</div>
            </figcaption>
            ${rdmAdmin() ? `<div class="galleryAdminActions">
              <button class="tinyBtn" onclick="moveGalleryPhoto('${esc(x._docId)}','${esc(album)}')">Move Album</button>
              <button class="tinyBtn deleteBtn" onclick="xdelete('Gallery','${esc(x._docId)}')">Delete</button>
            </div>` : ''}
          </figure>`;
        }).join('')
      : '<div class="empty">No photos in this album yet</div>';
  };

  const oldOpen = window.openEdit;
  window.openEdit = function (mode, obj = null) {
    if (oldOpen) oldOpen(mode, obj);
    if (mode === 'gallery') {
      const sel = document.getElementById('e2');
      if (sel) sel.innerHTML = DEST.map(a => `<option value="${esc(a)}" ${a === 'MEMORIES' ? 'selected' : ''}>${mini(a)}</option>`).join('');
    }
  };

  const oldRender = window.render;
  if (typeof oldRender === 'function') {
    window.render = function () {
      oldRender.apply(this, arguments);
      setTimeout(() => { try { renderGalleryAlbums(); } catch {} }, 0);
    };
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-page="gallery"]');
    if (b) setTimeout(() => { try { renderGalleryAlbums(); } catch (err) { console.error(err); } }, 80);
  });
  const galleryPage = document.getElementById('gallery');
  if (galleryPage) {
    new MutationObserver(() => {
      if (galleryPage.classList.contains('active')) setTimeout(() => { try { renderGalleryAlbums(); } catch {} }, 20);
    }).observe(galleryPage, { attributes: true, attributeFilter: ['class'] });
  }
  setTimeout(() => { try { renderGalleryAlbums(); } catch (e) { console.error(e); } }, 500);
})();
