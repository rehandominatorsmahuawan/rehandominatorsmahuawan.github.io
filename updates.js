/* RDM V6.8.4 - Official Updates system */
const UPDATE_COL='Updates';
let RDM_UPDATES=[];
const updEsc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const updUrl=u=>/^https?:\/\//i.test(String(u||''))?String(u):'';
const updDate=v=>{if(!v)return'';try{const d=new Date(v+'T00:00:00');return d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})}catch{return v}};
const updTime=ms=>{if(!ms)return'';const d=new Date(ms);return d.toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit',hour12:true})};
async function loadUpdates(){try{const s=await rdmDB.collection(UPDATE_COL).get();RDM_UPDATES=s.docs.filter(d=>d.id!=='_news_updates_swap_v1').map(d=>({...d.data(),_docId:d.id})).sort((a,b)=>(b.pinned?1:0)-(a.pinned?1:0)||(b.createdMs||0)-(a.createdMs||0));renderUpdates()}catch(e){console.error(e)}}
function renderUpdates(){
 const el=document.getElementById('updateList');
 if(el)el.innerHTML=RDM_UPDATES.length?RDM_UPDATES.map(x=>`<article class="card updateCard ${x.pinned?'pinnedUpdate':''}">${x.pinned?'<span class="pinTag">📌 ᴘɪɴɴᴇᴅ ᴜᴘᴅᴀᴛᴇ</span>':''}<div class="updateMeta"><span>${mini(x.category||'WEBSITE')}</span>${x.date?`<span>📅 ${updDate(x.date)}</span>`:''}${x.createdMs?`<span>🕒 ${updTime(x.createdMs)}</span>`:''}</div><h3>${mini(x.title||'UPDATE')}</h3><p class="preserveLines">${mini(x.text||'')}</p>${updUrl(x.url)?`<a class="secondary updateLink" href="${updEsc(updUrl(x.url))}" target="_blank" rel="noopener">ᴏᴘᴇɴ ʟɪɴᴋ ↗</a>`:''}${rdmAdmin()?`<div class="updateActions"><button class="tinyBtn" onclick="editUpdate('${x._docId}')">✎ ᴇᴅɪᴛ</button><button class="tinyBtn" onclick="pinUpdate('${x._docId}',${!x.pinned})">${x.pinned?'ᴜɴᴘɪɴ':'📌 ᴘɪɴ'}</button><button class="tinyBtn deleteBtn" onclick="deleteUpdate('${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button></div>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ᴜᴘᴅᴀᴛᴇꜱ ʏᴇᴛ</div>';
 renderHomeUpdate();
}
function renderHomeUpdate(){let box=document.getElementById('homeUpdateHub');const home=document.getElementById('home');if(!home)return;const x=RDM_UPDATES.find(a=>a.pinned);if(!x){if(box)box.remove();return}if(!box){box=document.createElement('div');box.id='homeUpdateHub';box.className='homeUpdateHub';const mh=document.getElementById('homeMatchHub');(mh||home.querySelector('.metrics'))?.insertAdjacentElement(mh?'afterend':'beforebegin',box)}box.innerHTML=`<div class="homeUpdateTag">📌 ʟᴀᴛᴇꜱᴛ ᴜᴘᴅᴀᴛᴇ</div><h3>${mini(x.title)}</h3><p>${mini(x.text)}</p><div class="homeUpdateTime">📅 ${updDate(x.date)}${x.createdMs?' • 🕒 '+updTime(x.createdMs):''}</div><button class="secondary" onclick="go('updates')">ᴠɪᴇᴡ ᴜᴘᴅᴀᴛᴇꜱ</button>`}
function updateModal(item={}){if(!rdmAdmin())return;let m=document.getElementById('updateEditor');if(m)m.remove();m=document.createElement('div');m.id='updateEditor';m.className='modal show';m.innerHTML=`<form class="dialog updateDialog"><button class="close" type="button">×</button><h2>${item._docId?'ᴇᴅɪᴛ':'ᴀᴅᴅ'} ᴜᴘᴅᴀᴛᴇ</h2><label>ᴄᴀᴛᴇɢᴏʀʏ<select id="uCat"><option>WEBSITE</option><option>SOCIAL MEDIA</option><option>PLATFORM</option><option>ACCOUNT</option><option>FEATURE</option><option>OTHER</option></select></label><label>ᴛɪᴛʟᴇ<input id="uTitle" value="${updEsc(item.title||'')}"></label><label>ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ<textarea id="uText"></textarea></label><label>ᴅᴀᴛᴇ<input id="uDate" type="date" value="${updEsc(item.date||new Date().toISOString().slice(0,10))}"></label><label>ᴏᴘᴛɪᴏɴᴀʟ ʟɪɴᴋ<input id="uUrl" value="${updEsc(item.url||'')}" placeholder="https://..."></label><label class="remember"><input id="uPin" type="checkbox" ${item.pinned?'checked':''}> <span>📌 ᴘɪɴ ᴛʜɪꜱ ᴜᴘᴅᴀᴛᴇ</span></label><button class="primary wide">ꜱᴀᴠᴇ ᴜᴘᴅᴀᴛᴇ</button></form>`;document.body.appendChild(m);m.querySelector('#uCat').value=item.category||'WEBSITE';m.querySelector('#uText').value=item.text||'';m.querySelector('.close').onclick=()=>m.remove();m.querySelector('form').onsubmit=async e=>{e.preventDefault();const data={category:m.querySelector('#uCat').value,title:m.querySelector('#uTitle').value.trim(),text:m.querySelector('#uText').value.trim(),date:m.querySelector('#uDate').value,url:m.querySelector('#uUrl').value.trim(),pinned:m.querySelector('#uPin').checked,createdMs:item.createdMs||Date.now(),updatedAt:rdmStamp()};if(!data.title||!data.text)return toast('ᴛɪᴛʟᴇ & ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ ʀᴇǫᴜɪʀᴇᴅ');try{if(data.pinned){const pins=await rdmDB.collection(UPDATE_COL).where('pinned','==',true).get();const b=rdmDB.batch();pins.docs.forEach(d=>{if(d.id!==item._docId)b.set(d.ref,{pinned:false,updatedAt:rdmStamp()},{merge:true})});if(!pins.empty)await b.commit()}item._docId?await rdmDB.collection(UPDATE_COL).doc(item._docId).set(data,{merge:true}):await rdmDB.collection(UPDATE_COL).add(data);m.remove();await loadUpdates();toast('ᴜᴘᴅᴀᴛᴇ ꜱᴀᴠᴇᴅ')}catch(err){console.error(err);toast('ꜱᴀᴠᴇ ꜰᴀɪʟᴇᴅ')}}}
window.addUpdate=()=>updateModal({});window.editUpdate=id=>updateModal(RDM_UPDATES.find(x=>x._docId===id)||{});
window.pinUpdate=async(id,pinned)=>{if(!rdmAdmin())return;try{if(pinned){const s=await rdmDB.collection(UPDATE_COL).where('pinned','==',true).get();const b=rdmDB.batch();s.docs.forEach(d=>b.set(d.ref,{pinned:false,updatedAt:rdmStamp()},{merge:true}));if(!s.empty)await b.commit()}await rdmDB.collection(UPDATE_COL).doc(id).set({pinned,updatedAt:rdmStamp()},{merge:true});await loadUpdates()}catch(e){console.error(e);toast('ᴜᴘᴅᴀᴛᴇ ꜰᴀɪʟᴇᴅ')}};
window.deleteUpdate=async id=>{if(!rdmAdmin()||!confirm('Delete this update?'))return;await rdmDB.collection(UPDATE_COL).doc(id).delete();await loadUpdates();toast('ᴜᴘᴅᴀᴛᴇ ᴅᴇʟᴇᴛᴇᴅ')};
document.getElementById('addUpdateBtn')?.addEventListener('click',()=>addUpdate());
const _updAdmin=window.renderAdmin;window.renderAdmin=function(){if(_updAdmin)_updAdmin();setTimeout(()=>{const g=document.querySelector('#adminBody .adminGrid');if(g&&!g.querySelector('.manageUpdatesBtn'))g.insertAdjacentHTML('beforeend','<button class="primary manageUpdatesBtn" onclick="go(\'updates\')">＋ ᴍᴀɴᴀɢᴇ ᴜᴘᴅᴀᴛᴇꜱ</button>')},20)};
setTimeout(loadUpdates,800);document.addEventListener('visibilitychange',()=>{if(!document.hidden)loadUpdates()});


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
