/* RDM V6.8.4 - Official Updates system */
const UPDATE_COL='Updates';
let RDM_UPDATES=[];
const updEsc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const updUrl=u=>/^https?:\/\//i.test(String(u||''))?String(u):'';
const updDate=v=>{if(!v)return'';try{const d=new Date(v+'T00:00:00');return d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})}catch{return v}};
const updTime=ms=>{if(!ms)return'';const d=new Date(ms);return d.toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit',hour12:true})};
const updDay=x=>x?.date?updDate(x.date):(x?.createdMs?new Date(x.createdMs).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}):'');
const updDateTime=x=>{const d=updDay(x),t=updTime(x?.createdMs);return [d&&('📅 '+d),t&&('🕒 '+t)].filter(Boolean).join(' • ')};
function hydrateUpdatesLocal(){const ov=window.rdmGetOverrides?.();if(Array.isArray(ov?.updates))RDM_UPDATES=ov.updates;}
async function loadUpdates(){try{const s=await rdmDB.collection(UPDATE_COL).get();RDM_UPDATES=s.docs.filter(d=>d.id!=='_news_updates_swap_v1').map(d=>({...d.data(),_docId:d.id})).sort((a,b)=>(b.pinned?1:0)-(a.pinned?1:0)||(b.createdMs||0)-(a.createdMs||0));}catch(e){console.warn('Local fallback for updates',e?.code||e)}
 hydrateUpdatesLocal();
 renderUpdates();
}
function saveUpdatesOverride(){window.rdmSetOverrides?.(o=>{o.updates=RDM_UPDATES});}
function renderUpdates(){
 const el=document.getElementById('updateList');
 if(el)el.innerHTML=RDM_UPDATES.length?RDM_UPDATES.map(x=>`<article class="card updateCard ${x.pinned?'pinnedUpdate':''}">${x.pinned?'<span class="pinTag">📌 Pinned Update</span>':''}<div class="updateMeta"><span>${mini(x.category||'WEBSITE')}</span><span>${updDateTime(x)||'Date not set'}</span></div><h3>${mini(x.title||'UPDATE')}</h3><p class="preserveLines">${mini(x.text||'')}</p>${updUrl(x.url)?`<a class="secondary updateLink" href="${updEsc(updUrl(x.url))}" target="_blank" rel="noopener">Open Link ↗</a>`:''}${rdmAdmin()?`<div class="updateActions"><button type="button" class="tinyBtn updateEditBtn" onclick="editUpdate('${x._docId}')">✎ Edit</button><button type="button" class="tinyBtn updatePinBtn" onclick="pinUpdate('${x._docId}',${!x.pinned})">${x.pinned?'Unpin':'📌 Pin'}</button><button type="button" class="tinyBtn deleteBtn updateDeleteBtn" onclick="deleteUpdate('${x._docId}')">🗑 Delete</button></div>`:''}</article>`).join(''):'<div class="empty">No official updates yet</div>';
 renderHomeUpdate();
}
function renderHomeUpdate(){
 let box=document.getElementById('homeUpdateHub');const home=document.getElementById('home');if(!home)return;const x=RDM_UPDATES.find(a=>a.pinned);
 if(!x){if(box)box.remove();return}
 if(!box){box=document.createElement('div');box.id='homeUpdateHub';box.className='homeUpdateHub';const mh=document.getElementById('homeMatchHub');(mh||home.querySelector('.metrics'))?.insertAdjacentElement(mh?'afterend':'beforebegin',box)}
 const raw=String(x.text||'').trim();
 box.innerHTML=`<div class="homeUpdateTag">📌 Pinned Update</div><h3>${mini(x.title||'UPDATE')}</h3><p class="homeUpdatePreview">${mini(raw)}</p><div class="homeUpdateTime">${updDateTime(x)}</div><button class="secondary homeUpdateOpen" data-go="updates" type="button">View Updates ›</button>`;
}
function updateModal(item={}){if(!rdmAdmin())return;let m=document.getElementById('updateEditor');if(m)m.remove();m=document.createElement('div');m.id='updateEditor';m.className='modal show';m.innerHTML=`<form class="dialog updateDialog"><button class="close" type="button">×</button><h2>${item._docId?'Edit':'Add'} Update</h2><label>Category<select id="uCat"><option>WEBSITE</option><option>SOCIAL MEDIA</option><option>PLATFORM</option><option>ACCOUNT</option><option>FEATURE</option><option>OTHER</option></select></label><label>Title<input id="uTitle" value="${updEsc(item.title||'')}"></label><label>Description<textarea id="uText"></textarea></label><label>Date<input id="uDate" type="date" value="${updEsc(item.date||new Date().toISOString().slice(0,10))}"></label><label>Optional Link<input id="uUrl" value="${updEsc(item.url||'')}" placeholder="https://..."></label><label class="remember"><input id="uPin" type="checkbox" ${item.pinned?'checked':''}> <span>📌 Pin this update</span></label><button class="primary wide">Save Update</button></form>`;document.body.appendChild(m);m.querySelector('#uCat').value=item.category||'WEBSITE';m.querySelector('#uText').value=item.text||'';m.querySelector('.close').onclick=()=>m.remove();m.addEventListener('click',e=>{if(e.target===m)m.remove()});m.querySelector('form').onsubmit=async e=>{e.preventDefault();const data={category:m.querySelector('#uCat').value,title:m.querySelector('#uTitle').value.trim(),text:m.querySelector('#uText').value.trim(),date:m.querySelector('#uDate').value,url:m.querySelector('#uUrl').value.trim(),pinned:m.querySelector('#uPin').checked,createdMs:item.createdMs||Date.now()};if(!data.title||!data.text)return toast('Title & description required');if(data.pinned)RDM_UPDATES.forEach(u=>{if(u._docId!==item._docId)u.pinned=false});if(item._docId){Object.assign(item,data)}else{const rec={...data,_docId:'loc_'+Date.now()};RDM_UPDATES.unshift(rec);item=rec}RDM_UPDATES.sort((a,b)=>(b.pinned?1:0)-(a.pinned?1:0)||(b.createdMs||0)-(a.createdMs||0));saveUpdatesOverride();try{if(data.pinned){const pins=await rdmDB.collection(UPDATE_COL).where('pinned','==',true).get();const b=rdmDB.batch();pins.docs.forEach(d=>{if(d.id!==item._docId)b.set(d.ref,{pinned:false,updatedAt:rdmStamp()},{merge:true})});if(!pins.empty)await b.commit()}item._docId&&!String(item._docId).startsWith('loc_')?await rdmDB.collection(UPDATE_COL).doc(item._docId).set({...data,updatedAt:rdmStamp()},{merge:true}):await rdmDB.collection(UPDATE_COL).add({...data,updatedAt:rdmStamp()})}catch(err){console.warn('Update local fallback',err?.code||err)}m.remove();renderUpdates();window.refreshAdminSectionManager?.();toast('Update saved')}}
window.addUpdate=()=>updateModal({});window.editUpdate=id=>updateModal(RDM_UPDATES.find(x=>x._docId===id)||{});
window.pinUpdate=async(id,pinned)=>{if(!rdmAdmin())return;if(pinned)RDM_UPDATES.forEach(u=>u.pinned=false);const target=RDM_UPDATES.find(u=>u._docId===id);if(target)target.pinned=pinned;RDM_UPDATES.sort((a,b)=>(b.pinned?1:0)-(a.pinned?1:0)||(b.createdMs||0)-(a.createdMs||0));saveUpdatesOverride();try{if(pinned){const s=await rdmDB.collection(UPDATE_COL).where('pinned','==',true).get();const b=rdmDB.batch();s.docs.forEach(d=>b.set(d.ref,{pinned:false,updatedAt:rdmStamp()},{merge:true}));if(!s.empty)await b.commit()}await rdmDB.collection(UPDATE_COL).doc(id).set({pinned,updatedAt:rdmStamp()},{merge:true})}catch{}renderUpdates();window.refreshAdminSectionManager?.();toast(pinned?'Update pinned to home':'Update unpinned')};
window.deleteUpdate=async id=>{if(!rdmAdmin())return;const run=async()=>{try{await rdmDB.collection(UPDATE_COL).doc(id).delete()}catch{}RDM_UPDATES=RDM_UPDATES.filter(u=>u._docId!==id);saveUpdatesOverride();renderUpdates();window.refreshAdminSectionManager?.();toast('Update deleted')};if(typeof window.rdmConfirmModal==='function')return window.rdmConfirmModal('DELETE UPDATE','THIS UPDATE WILL BE REMOVED PERMANENTLY.',run);return run()};
document.getElementById('addUpdateBtn')?.addEventListener('click',()=>addUpdate());
const _updAdmin=window.renderAdmin;window.renderAdmin=function(){if(_updAdmin)_updAdmin();setTimeout(()=>{const g=document.querySelector('#adminBody .adminGrid');if(g&&!g.querySelector('.manageUpdatesBtn'))g.insertAdjacentHTML('beforeend','<button type="button" class="primary manageUpdatesBtn" onclick="window.openAdminSectionManager?.(\'updates\')">＋ ᴍᴀɴᴀɢᴇ ᴜᴘᴅᴀᴛᴇꜱ</button>')},20)};
setTimeout(loadUpdates,800);document.addEventListener('visibilitychange',()=>{if(!document.hidden)loadUpdates()});


/* V6.8.38 — keep Update admin actions stable after auth/session refresh. */
let _rdmUpdateAdminState = null;
function rdmRefreshUpdateAdminActions(force=false){
  const now = !!(typeof rdmAdmin === 'function' && rdmAdmin());
  if(force || now !== _rdmUpdateAdminState){
    _rdmUpdateAdminState = now;
    if(Array.isArray(RDM_UPDATES)) renderUpdates();
  }
}
if(typeof window.updateAuthUI === 'function'){
  const _rdmBaseUpdateAuthUI = window.updateAuthUI;
  window.updateAuthUI = function(){
    const out = _rdmBaseUpdateAuthUI.apply(this, arguments);
    requestAnimationFrame(()=>rdmRefreshUpdateAdminActions(true));
    return out;
  };
}
if(document.body){
  new MutationObserver(()=>rdmRefreshUpdateAdminActions()).observe(document.body,{attributes:true,attributeFilter:['class']});
}
setTimeout(()=>rdmRefreshUpdateAdminActions(true),100);
setTimeout(()=>rdmRefreshUpdateAdminActions(true),700);
setTimeout(()=>rdmRefreshUpdateAdminActions(true),1600);


/* V6.8.8 one-time correction: previously entered News and Updates were reversed.
   Runs once for an authenticated admin, records a Firestore marker, then future entries stay in their own collections. */
async function rdmSwapMisfiledNewsUpdatesOnce(){
 if(!(typeof rdmAdmin==='function'&&rdmAdmin())) return;
 const marker=rdmDB.collection('Updates').doc('_news_updates_swap_v1');
 try{
  const done=await marker.get(); if(done.exists&&done.data()?.done) return;
  const [newsSnap,updSnap]=await Promise.all([rdmDB.collection('News').get(),rdmDB.collection('Updates').get()]);
  const oldUpdates=updSnap.docs.filter(d=>d.id!=='_news_updates_swap_v1');
  const batch=rdmDB.batch();
  newsSnap.docs.forEach(d=>{const x=d.data(); const ref=rdmDB.collection('Updates').doc('fromNews_'+d.id); batch.set(ref,{...x,category:x.category||'OTHER',updatedAt:rdmStamp()}); batch.delete(d.ref)});
  oldUpdates.forEach(d=>{const x=d.data(); const ref=rdmDB.collection('News').doc('fromUpdate_'+d.id); batch.set(ref,{title:x.title||'NEWS',text:x.text||'',pinned:!!x.pinned,createdMs:x.createdMs||Date.now(),updatedAt:rdmStamp()}); batch.delete(d.ref)});
  batch.set(marker,{done:true,doneAt:rdmStamp(),createdMs:Date.now()});
  await batch.commit();
  if(typeof rdmLoadAll==='function') await rdmLoadAll();
  await loadUpdates(); toast('ɴᴇᴡꜱ & ᴜᴘᴅᴀᴛᴇꜱ ᴄᴏʀʀᴇᴄᴛᴇᴅ');
 }catch(e){console.warn('News/Updates correction pending',e)}
}
let _swapTry=0;const _swapTimer=setInterval(async()=>{_swapTry++;if(typeof rdmAdmin==='function'&&rdmAdmin()){clearInterval(_swapTimer);await rdmSwapMisfiledNewsUpdatesOnce()}else if(_swapTry>30)clearInterval(_swapTimer)},700);
