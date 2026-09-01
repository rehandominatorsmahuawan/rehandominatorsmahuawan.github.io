/* RDM V6.8.7 - fixed gallery albums, move, separate metadata */
(function(){
 const ALBUMS=['ALL','TEAM PHOTOS','MEMORIES','UPDATES'];
 const DEST=ALBUMS.filter(x=>x!=='ALL');
 window.galleryFilter=(typeof window.galleryFilter==='string'&&ALBUMS.includes(window.galleryFilter))?window.galleryFilter:'ALL';
 function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
 function when(x){return typeof rdmWhen==='function'?rdmWhen(x):''}
 window.moveGalleryPhoto=async function(id,current){
   if(!(typeof rdmAdmin==='function'&&rdmAdmin()))return;
   const m=document.createElement('div');m.className='modal show';
   m.innerHTML=`<form class="dialog galleryMoveDialog"><button class="close" type="button">×</button><h2>ᴍᴏᴠᴇ ᴘʜᴏᴛᴏ</h2><p>ꜱᴇʟᴇᴄᴛ ᴅᴇꜱᴛɪɴᴀᴛɪᴏɴ ᴀʟʙᴜᴍ</p><label>ᴀʟʙᴜᴍ<select id="moveAlbum">${DEST.map(a=>`<option ${a===current?'selected':''}>${a}</option>`).join('')}</select></label><button class="primary wide">ᴍᴏᴠᴇ ᴛᴏ ᴀʟʙᴜᴍ</button></form>`;
   document.body.appendChild(m);window.rdmMiniFormUI?.(m);m.querySelector('.close').onclick=()=>m.remove();
   m.querySelector('form').onsubmit=async e=>{e.preventDefault();const album=m.querySelector('#moveAlbum').value;try{await rdmDB.collection('Gallery').doc(id).set({album,updatedAt:rdmStamp()},{merge:true});m.remove();if(typeof rdmLoadAll==='function')await rdmLoadAll();renderGalleryAlbums();toast('ᴘʜᴏᴛᴏ ᴍᴏᴠᴇᴅ')}catch(err){console.error(err);toast('ᴍᴏᴠᴇ ꜰᴀɪʟᴇᴅ')}};
 };
 window.renderGalleryAlbums=function(){
   const g=document.getElementById('galleryList');if(!g||typeof D==='undefined')return;
   let bar=document.getElementById('albumFilters');if(!bar){bar=document.createElement('div');bar.id='albumFilters';bar.className='albumFilters';g.before(bar)}
   if(!ALBUMS.includes(window.galleryFilter))window.galleryFilter='ALL';
   bar.innerHTML=ALBUMS.map(c=>`<button type="button" class="tinyBtn albumTab ${window.galleryFilter===c?'on':''}" data-album="${esc(c)}">${mini(c)}</button>`).join('');
   bar.querySelectorAll('[data-album]').forEach(btn=>btn.addEventListener('click',()=>{window.galleryFilter=btn.dataset.album;window.renderGalleryAlbums()}));
   const all=(D.gallery||[]).filter(x=>!['MATCHES','TROPHIES'].includes((x.album||'MEMORIES').toUpperCase()));
   const arr=window.galleryFilter==='ALL'?all:all.filter(x=>(x.album||'MEMORIES').toUpperCase()===window.galleryFilter);
   g.innerHTML=arr.length?arr.map(x=>{const album=(x.album||'MEMORIES').toUpperCase();const note=x.caption||'RDM MEMORY';return `<figure class="galleryCard"><img src="${x.image}" onclick="zoom(this.src)"><figcaption><div class="galleryAlbumName">${mini(album)}</div><div class="galleryDateTime">${when(x.createdMs)||'🕒 ᴛɪᴍᴇ ɴᴏᴛ ᴀᴠᴀɪʟᴀʙʟᴇ'}</div><div class="galleryNote">${mini(note)}</div></figcaption>${rdmAdmin()?`<div class="galleryAdminActions"><button class="tinyBtn" onclick="moveGalleryPhoto('${x._docId}','${esc(album)}')">↪ ᴍᴏᴠᴇ</button><button class="tinyBtn deleteBtn" onclick="xdelete('Gallery','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button></div>`:''}</figure>`}).join(''):'<div class="empty">ɴᴏ ᴘʜᴏᴛᴏꜱ ɪɴ ᴛʜɪꜱ ᴀʟʙᴜᴍ</div>';
 };
 const oldOpen=window.openEdit;
 window.openEdit=function(mode,obj=null){if(oldOpen)oldOpen(mode,obj);if(mode==='gallery'){const sel=document.getElementById('e2');if(sel)sel.innerHTML=DEST.map(a=>`<option ${a==='MEMORIES'?'selected':''}>${a}</option>`).join('')}};
 const oldRender=window.render;
 if(typeof oldRender==='function')window.render=function(){oldRender.apply(this,arguments);setTimeout(()=>{try{renderGalleryAlbums()}catch(e){}},0)};
 document.addEventListener('click',e=>{const b=e.target.closest('[data-page="gallery"]');if(b)setTimeout(()=>{try{renderGalleryAlbums()}catch(err){console.error(err)}},80)});
 const galleryPage=document.getElementById('gallery');if(galleryPage){new MutationObserver(()=>{if(galleryPage.classList.contains('active'))setTimeout(()=>{try{renderGalleryAlbums()}catch(err){}},20)}).observe(galleryPage,{attributes:true,attributeFilter:['class']});}
 setTimeout(()=>{try{renderGalleryAlbums()}catch(e){console.error(e)}},500);
 setInterval(()=>{try{const pg=document.getElementById('gallery');const bar=document.getElementById('albumFilters');if(pg?.classList.contains('active') && (!bar || !bar.children.length)) renderGalleryAlbums()}catch(e){}},700);
})();
