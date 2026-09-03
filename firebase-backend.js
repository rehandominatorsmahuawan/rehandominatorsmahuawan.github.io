/* RDM V4 cloud backend: Firestore persistence + public profiles + admin/player profile controls */
const RCOL={players:'TeamPlayers',matches:'Matches',news:'News',honours:'Honours',gallery:'Gallery',socials:'Socials'};
const DEFAULT_SOCIAL_URLS={YOUTUBE:'https://www.youtube.com/@rehan_dominators_mahuawan',TELEGRAM:'https://t.me/rehandominatorsmahuawan',WHATSAPP:'https://whatsapp.com/channel/0029Vb8icRM3WHTQGQtM4G3j'};
let rdmRemoteReady=false,rdmLoading=false,rdmCropTarget=null;
const rdmStamp=()=>firebase.firestore.FieldValue.serverTimestamp();
const rdmDocData=d=>({...d.data(),_docId:d.id});
const rdmAdmin=()=>session?.mode==='admin';
const rdmPlayer=()=>session?.mode==='player'?D.players.find(p=>p.id===session.playerId):null;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl=u=>/^https?:\/\//i.test(String(u||''))?String(u):'';
function rdmRefresh(){render();if(session?.mode==='player')renderProfile();if(session?.mode==='admin')renderAdmin();}
async function rdmCompressFile(file,max=1000,quality=.72){
  if(!file)return'';const url=await new Promise((res,rej)=>{const r=new FileReader;r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(file)});
  const im=await new Promise((res,rej)=>{const x=new Image;x.onload=()=>res(x);x.onerror=rej;x.src=url});const scale=Math.min(1,max/Math.max(im.width,im.height));
  const c=document.createElement('canvas');c.width=Math.max(1,Math.round(im.width*scale));c.height=Math.max(1,Math.round(im.height*scale));c.getContext('2d').drawImage(im,0,0,c.width,c.height);
  let out=c.toDataURL('image/jpeg',quality);if(out.length>720000)out=c.toDataURL('image/jpeg',.55);if(out.length>900000)throw new Error('IMAGE_TOO_LARGE');return out;
}
async function rdmSeedIfNeeded(){if(!rdmAdmin())return;
  if((await rdmDB.collection(RCOL.players).limit(1).get()).empty){const b=rdmDB.batch();D.players.forEach((p,i)=>b.set(rdmDB.collection(RCOL.players).doc(p.id),{id:p.id,name:p.name,role:p.role,detail:p.detail,image:p.image||'assets/logo.jpg',jersey:p.jersey||'',order:i+1,active:true,updatedAt:rdmStamp()}));await b.commit();}
  if((await rdmDB.collection(RCOL.honours).limit(1).get()).empty){const b=rdmDB.batch();D.honours.forEach((h,i)=>b.set(rdmDB.collection(RCOL.honours).doc('h'+String(i+1).padStart(2,'0')),{...h,order:i+1,updatedAt:rdmStamp()}));await b.commit();}
  if((await rdmDB.collection(RCOL.socials).limit(1).get()).empty){const defs=[{id:'instagram',name:'INSTAGRAM',url:'',icon:'IG',displayName:'RDM INSTAGRAM',order:1},{id:'facebook',name:'FACEBOOK',url:'',icon:'f',displayName:'RDM FACEBOOK',order:2},{id:'youtube',name:'YOUTUBE',url:DEFAULT_SOCIAL_URLS.YOUTUBE,icon:'▶',displayName:'RDM YOUTUBE',order:3},{id:'telegram',name:'TELEGRAM',url:DEFAULT_SOCIAL_URLS.TELEGRAM,icon:'✈',displayName:'RDM TELEGRAM',order:4},{id:'whatsapp',name:'WHATSAPP',url:DEFAULT_SOCIAL_URLS.WHATSAPP,icon:'◉',displayName:'RDM WHATSAPP',order:5}];const b=rdmDB.batch();defs.forEach(x=>{const{id,...z}=x;b.set(rdmDB.collection(RCOL.socials).doc(id),{...z,image:'',updatedAt:rdmStamp()})});await b.commit();}
}
async function rdmLoadAll(){if(rdmLoading)return;rdmLoading=true;try{const[ps,ms,ns,hs,gs,ss,profiles]=await Promise.all([rdmDB.collection(RCOL.players).get(),rdmDB.collection(RCOL.matches).get(),rdmDB.collection(RCOL.news).get(),rdmDB.collection(RCOL.honours).get(),rdmDB.collection(RCOL.gallery).get(),rdmDB.collection(RCOL.socials).get(),rdmDB.collection('PlayerProfiles').get()]);
  if(!ps.empty)D.players=ps.docs.map(rdmDocData).sort((a,b)=>(a.order||999)-(b.order||999)).map(p=>({id:p.id,name:p.name,role:p.role,detail:p.detail,image:p.image||'assets/logo.jpg',jersey:p.jersey||'',nick:'',bio:'',socials:[],_docId:p._docId}));
  D.matches=ms.docs.map(rdmDocData).sort((a,b)=>(b.createdMs||0)-(a.createdMs||0));D.news=ns.docs.map(rdmDocData).sort((a,b)=>(b.createdMs||0)-(a.createdMs||0));if(!hs.empty)D.honours=hs.docs.map(rdmDocData).sort((a,b)=>(a.order||999)-(b.order||999));D.gallery=gs.docs.map(rdmDocData).sort((a,b)=>(b.createdMs||0)-(a.createdMs||0));if(!ss.empty)D.socials=ss.docs.map(rdmDocData).sort((a,b)=>(a.order||999)-(b.order||999));
  profiles.docs.forEach(d=>{const pr=d.data(),p=D.players.find(x=>x.id===pr.playerId);if(p){['jersey','nick','bio','image'].forEach(k=>{if(pr[k]!==undefined&&pr[k]!==null&&pr[k]!=='')p[k]=pr[k]});if(Array.isArray(pr.socials))p.socials=pr.socials;p._profileUid=d.id;}});D.players.forEach(p=>{const d=(typeof playerDefaults!=='undefined'&&playerDefaults[p.id])||null;if(d){if(!p.nick)p.nick=d.nick;if(!p.bio)p.bio=d.bio;}});rdmRemoteReady=true;rdmRefresh();
}catch(e){console.error(e);toast('ᴅᴀᴛᴀ ꜱʏɴᴄ ᴇʀʀᴏʀ')}finally{rdmLoading=false}}
window.rdmBackendAuthReady=async(user,account)=>{if(account?.role==='admin')await rdmSeedIfNeeded();await rdmLoadAll()};rdmLoadAll();document.addEventListener('visibilitychange',()=>{if(!document.hidden)rdmLoadAll()});

async function rdmProfileUid(playerId){const p=D.players.find(x=>x.id===playerId);if(p?._profileUid)return p._profileUid;if(session?.mode==='player'&&session.playerId===playerId)return rdmAuth.currentUser?.uid||null;if(rdmAdmin()){const s=await rdmDB.collection('Accounts').where('playerId','==',playerId).limit(1).get();return s.empty?null:s.docs[0].id}return null}
async function rdmProfileWrite(p,extra={}){const uid=await rdmProfileUid(p.id);if(!uid)throw new Error('PROFILE_ACCOUNT_NOT_FOUND');if(!rdmAdmin()&&(!rdmAuth.currentUser||session?.playerId!==p.id))throw new Error('NOT_ALLOWED');const data={playerId:p.id,jersey:p.jersey||'',nick:p.nick||'',bio:p.bio||'',socials:Array.isArray(p.socials)?p.socials.slice(0,3):[],image:p.image||'',updatedAt:rdmStamp(),...extra};await rdmDB.collection('PlayerProfiles').doc(uid).set(data,{merge:true});p._profileUid=uid}

function socialObj(x,i){return typeof x==='string'?{name:'SOCIAL '+(i+1),url:x}:x||{}}
function profileHtml(p,editable=false,adminEdit=false){const socials=(p.socials||[]).map(socialObj).filter(s=>s.url||s.name);const sh=socials.length?`<div class="profileSocialList">${socials.map((s,i)=>`<div class="profileSocialRow"><a href="${esc(safeUrl(s.url))}" target="_blank" rel="noopener">${mini(s.name||('SOCIAL '+(i+1)))}</a></div>`).join('')}</div>`:'<p class="mutedMini">ɴᴏ ꜱᴏᴄɪᴀʟ ʟɪɴᴋꜱ</p>';
  return `<article class="profileCard publicProfileCard"><img class="profileAvatar" src="${esc(p.image||'assets/logo.jpg')}"><h2>${mini(p.name)}</h2><div class="profileIdentity"><div class="identityItem"><span>ᴘʟᴀʏᴇʀ ɪᴅ</span><strong>${miniId(p.id)}</strong></div><div class="identityDivider"></div><div class="identityItem"><span>ᴊᴇʀꜱᴇʏ ɴᴜᴍʙᴇʀ</span><strong>${p.jersey?'#'+esc(p.jersey):'—'}</strong></div></div>${p.nick?`<p class="profileNick">${mini(p.nick)}</p>`:''}<div class="profileOfficial"><b>${mini(p.role)}</b><br>${mini(p.detail)}</div>${p.bio?`<div class="profileBio">${mini(p.bio)}</div>`:''}${sh}${editable?`<div class="profileEditHub"><button type="button" class="primary profileEditMain" onclick="openProfileEditMenu()">⚙ ᴇᴅɪᴛ ᴘʀᴏꜰɪʟᴇ</button><button type="button" class="secondary profileDownloadMain" onclick="openProfileDownload()">⬇ ᴅᴏᴡɴʟᴏᴀᴅ ᴘʀᴏꜰɪʟᴇ</button></div>`:''}${adminEdit?'':''}</article>`}

render=function(){q('#players').innerHTML=D.players.map(p=>{const n=(p.name||'').toUpperCase();const lead=n==='REHAN AKHTAR'?'CAPTAIN':n==='SAIF ALI'?'VICE-CAPTAIN':n==='SOAIB AKHTAR'?'WICKET-KEEPER':'';return `<article class="player clickablePlayer" onclick="openPlayerProfile('${p.id}')"><div class="photo"><img src="${esc(p.image||'assets/logo.jpg')}" alt="${esc(p.name)}"></div>${lead?`<div class="leadershipBadge ${lead==='VICE-CAPTAIN'?'vice':lead==='WICKET-KEEPER'?'keeper':''}">${lead==='CAPTAIN'?'♛':lead==='VICE-CAPTAIN'?'★':'🧤'} ${mini(lead)}</div>`:''}<div class="pbody"><span class="simplePlayerId">${miniId(p.id)}${p.jersey?' <em>#'+esc(p.jersey)+'</em>':''}</span><h3>${mini(p.name)}</h3><b>${mini(p.role)}</b><p>${mini(p.detail)}</p>${p.nick?`<p>ɴɪᴄᴋɴᴀᴍᴇ • ${mini(p.nick)}</p>`:''}<button class="tinyBtn viewProfileBtn" onclick="event.stopPropagation();openPlayerProfile('${p.id}')">ᴠɪᴇᴡ ᴘʀᴏꜰɪʟᴇ</button>${rdmAdmin()?`<button class="tinyBtn" onclick="event.stopPropagation();editPlayer('${p.id}')">✎ ᴇᴅɪᴛ</button>`:''}</div></article>`}).join('');
 q('#honourList').innerHTML=D.honours.map((h,i)=>`<article class="honour"><div class="trophy"><img src="${h.image}" onclick="zoom('${h.image}')"></div><h3>${h.year} • ${mini(h.title)}</h3><p>${mini(h.sub)}</p>${rdmAdmin()?`<button class="tinyBtn" onclick="removeItem('honours',${i})">ᴅᴇʟᴇᴛᴇ</button>`:''}</article>`).join('');
 q('#matchList').innerHTML=D.matches.length?D.matches.map((m,i)=>`<article class="card"><h3>${mini(m.opponent)}</h3><p>${mini(m.date)} • ${mini(m.venue)}</p><p>${mini(m.note)}</p>${rdmAdmin()?`<button class="tinyBtn" onclick="removeItem('matches',${i})">ᴅᴇʟᴇᴛᴇ</button>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ᴍᴀᴛᴄʜ ᴀᴅᴅᴇᴅ ʏᴇᴛ</div>';
 q('#newsList').innerHTML=D.news.length?D.news.map((n,i)=>`<article class="card"><h3>${mini(n.title)}</h3><p>${mini(n.text)}</p>${rdmAdmin()?`<button class="tinyBtn" onclick="removeItem('news',${i})">ᴅᴇʟᴇᴛᴇ</button>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ ʏᴇᴛ</div>';
 q('#galleryList').innerHTML=D.gallery.length?D.gallery.map((g,i)=>`<figure><img src="${g.image}" onclick="zoom(this.src)"><figcaption>${mini(g.caption||'RDM MEMORY')}</figcaption>${rdmAdmin()?`<button class="tinyBtn" onclick="removeItem('gallery',${i})">ᴅᴇʟᴇᴛᴇ</button>`:''}</figure>`).join(''):'<div class="empty">ɴᴏ ɢᴀʟʟᴇʀʏ ᴘʜᴏᴛᴏ ᴀᴅᴅᴇᴅ ʏᴇᴛ</div>';
 q('#socialList').innerHTML=D.socials.map((o,i)=>{o=Array.isArray(o)?{name:o[0],url:o[1],icon:'↗'}:o;const media=o.image?`<img src="${o.image}" alt="${esc(o.name)}">`:`<span>${esc(o.icon||'↗')}</span>`;const open=o.url?`<a class="primary socialAction" href="${esc(safeUrl(o.url))}" target="_blank" rel="noopener">ᴏᴘᴇɴ</a>`:`<button class="secondary socialAction" disabled>ʟɪɴᴋ ɴᴏᴛ ᴀᴅᴅᴇᴅ</button>`;return `<article class="socialCard"><div class="socialIcon">${media}</div><h3>${mini(o.displayName||o.name)}</h3><p class="socialPlatform">${mini(o.name)}</p><div class="socialActions">${open}${rdmAdmin()?`<button class="tinyBtn socialAction" onclick="editSocial(${i})">✎ ᴇᴅɪᴛ</button><button class="tinyBtn socialAction danger" onclick="removeItem('socials',${i})">ᴅᴇʟᴇᴛᴇ</button>`:''}</div></article>`}).join('');updateAuthUI()};
renderProfile=function(){const p=rdmPlayer();if(p)q('#profileBody').innerHTML=profileHtml(p,true,false)};
window.openPlayerProfile=id=>{const p=D.players.find(x=>x.id===id);if(!p)return;let m=q('#publicProfileModal');if(!m){m=document.createElement('div');m.id='publicProfileModal';m.className='modal';m.innerHTML='<div class="dialog publicDialog"><button class="close" type="button">×</button><div id="publicProfileBody"></div></div>';document.body.appendChild(m);m.querySelector('.close').onclick=()=>m.classList.remove('show');}q('#publicProfileBody').innerHTML=profileHtml(p,false,rdmAdmin());m.classList.add('show')};


function rdmOpenSimpleModal(title,fields,onSave){
  if(typeof window.rdmUnifiedModal==='function') return window.rdmUnifiedModal(title,fields,onSave);
  return null;
}
function closeProfileEditMenu(){document.getElementById('profileEditModal')?.remove()}
function profileEditRows(){
  return `<div class="profileEditMenu show profileEditMenuModal"><button class="profileEditRow" type="button" onclick="runProfileEditAction('photo')"><span>📷</span><b>ᴘʀᴏꜰɪʟᴇ ᴘʜᴏᴛᴏ</b><i>›</i></button><button class="profileEditRow" type="button" onclick="runProfileEditAction('jersey')"><span>🏏</span><b>ᴊᴇʀꜱᴇʏ ɴᴜᴍʙᴇʀ</b><i>›</i></button><button class="profileEditRow" type="button" onclick="runProfileEditAction('nick')"><span>✦</span><b>ɴɪᴄᴋɴᴀᴍᴇ</b><i>›</i></button><button class="profileEditRow" type="button" onclick="runProfileEditAction('bio')"><span>✎</span><b>ʙɪᴏ</b><i>›</i></button><button class="profileEditRow" type="button" onclick="runProfileEditAction('socials')"><span>🔗</span><b>ꜱᴏᴄɪᴀʟꜱ</b><i>›</i></button><button class="profileEditRow" type="button" onclick="runProfileEditAction('pass')"><span>🔐</span><b>ᴘᴀꜱꜱᴡᴏʀᴅ</b><i>›</i></button></div>`
}
window.openProfileEditMenu=function(){
  closeProfileEditMenu();
  const m=document.createElement('div');
  m.id='profileEditModal';
  m.className='modal show profileEditOverlay';
  m.innerHTML=`<div class="dialog rdmUnifiedDialog profileEditDialog"><button class="close" type="button">×</button><h2>EDIT PROFILE</h2>${profileEditRows()}</div>`;
  document.body.appendChild(m);
  window.rdmMiniFormUI?.(m);
  const c=m.querySelector('.close');
  if(c)c.onclick=()=>closeProfileEditMenu();
  m.addEventListener('click',e=>{if(e.target===m)closeProfileEditMenu()});
  const dlg=m.querySelector('.profileEditDialog');
  requestAnimationFrame(()=>{if(dlg)dlg.scrollTop=0});
};
window.runProfileEditAction=function(action){
  closeProfileEditMenu();
  setTimeout(()=>{
    if(action==='photo') return chooseDP();
    if(action==='socials') return openOwnSocialManager();
    return selfEdit(action);
  },40);
};
window.selfEdit=async k=>{
  const p=rdmPlayer();
  if(!p)return;
  const useModal=typeof window.rdmUnifiedModal==='function';
  if(k==='pass'){
    if(useModal){
      return rdmOpenSimpleModal('CHANGE PASSWORD',[
        {name:'currentPassword',label:'CURRENT PASSWORD',type:'password',required:true},
        {name:'newPassword',label:'NEW PASSWORD • MINIMUM 6 CHARACTERS',type:'password',required:true},
        {name:'confirmPassword',label:'CONFIRM NEW PASSWORD',type:'password',required:true}
      ],async d=>{
        const old=String(d.currentPassword||'').trim();
        const nw=String(d.newPassword||'').trim();
        const cf=String(d.confirmPassword||'').trim();
        if(nw.length<6){toast('ᴍɪɴɪᴍᴜᴍ 6 ᴄʜᴀʀᴀᴄᴛᴇʀꜱ');throw new Error('VALIDATION')}
        if(nw!==cf){toast('ᴘᴀꜱꜱᴡᴏʀᴅꜱ ᴅᴏ ɴᴏᴛ ᴍᴀᴛᴄʜ');throw new Error('VALIDATION')}
        try{
          const u=rdmAuth.currentUser,cred=firebase.auth.EmailAuthProvider.credential(u.email,old);
          await u.reauthenticateWithCredential(cred);
          await u.updatePassword(nw);
          toast('ᴘᴀꜱꜱᴡᴏʀᴅ ᴄʜᴀɴɢᴇᴅ');
        }catch(e){console.error(e);toast('ᴄᴜʀʀᴇɴᴛ ᴘᴀꜱꜱᴡᴏʀᴅ ᴡʀᴏɴɢ');throw e}
      });
    }
    return toast('ꜰᴏʀᴍ ʟᴏᴀᴅɪɴɢ');
  }
  const config={
    jersey:{title:'EDIT JERSEY NUMBER',field:{name:'value',label:'JERSEY NUMBER',value:p.jersey||''}},
    nick:{title:'EDIT NICKNAME',field:{name:'value',label:'NICKNAME',value:p.nick||''}},
    bio:{title:'EDIT BIO',field:{name:'value',label:'BIO',type:'textarea',value:p.bio||'',rows:5}},
  }[k];
  if(!config)return;
  if(useModal){
    return rdmOpenSimpleModal(config.title,[config.field],async d=>{
      p[k]=String(d.value||'').trim();
      try{await rdmProfileWrite(p);rdmRefresh();toast('ꜱᴀᴠᴇᴅ ᴏɴʟɪɴᴇ')}catch(e){console.error(e);toast('ꜱᴀᴠᴇ ꜰᴀɪʟᴇᴅ');throw e}
    });
  }
  return toast('ꜰᴏʀᴍ ʟᴏᴀᴅɪɴɢ')
};
window.openOwnSocialManager=function(){
  const p=rdmPlayer();if(!p)return;
  document.getElementById('ownSocialManager')?.remove();
  const socials=(p.socials||[]).map(socialObj);
  const m=document.createElement('div');m.id='ownSocialManager';m.className='modal show profileEditOverlay';
  m.innerHTML=`<div class="dialog rdmUnifiedDialog socialManagerDialog"><button class="close" type="button">×</button><h2>SOCIAL LINKS</h2><div class="socialManagerList">${socials.length?socials.map((s,i)=>`<div class="socialManagerRow"><b>${mini(s.name||('SOCIAL '+(i+1)))}</b><div><button type="button" class="tinyBtn" data-edit="${i}">✏️ ᴇᴅɪᴛ</button><button type="button" class="tinyBtn danger" data-delete="${i}">🗑️ ᴅᴇʟᴇᴛᴇ</button></div></div>`).join(''):'<p class="mutedMini">ɴᴏ ꜱᴏᴄɪᴀʟ ʟɪɴᴋꜱ</p>'}</div>${socials.length<3?'<button type="button" class="primary wide socialManagerAdd">＋ ᴀᴅᴅ ꜱᴏᴄɪᴀʟ</button>':''}</div>`;
  document.body.appendChild(m);window.rdmMiniFormUI?.(m);
  const close=()=>m.remove();m.querySelector('.close').onclick=close;m.onclick=e=>{if(e.target===m)close()};
  m.querySelector('.socialManagerAdd')?.addEventListener('click',()=>{close();addOwnSocial()});
  m.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>{const i=+b.dataset.edit;close();editOwnSocial(i)});
  m.querySelectorAll('[data-delete]').forEach(b=>b.onclick=async()=>{const i=+b.dataset.delete;close();await deleteOwnSocial(i)});
};
window.addOwnSocial=async()=>{
  const p=rdmPlayer();if(!p)return;
  if((p.socials||[]).length>=3)return toast('ᴍᴀx 3 ꜱᴏᴄɪᴀʟꜱ');
  if(typeof window.rdmUnifiedModal==='function'){
    return rdmOpenSimpleModal('ADD SOCIAL',[
      {name:'name',label:'SOCIAL NAME',placeholder:'INSTAGRAM',required:true},
      {name:'url',label:'SOCIAL LINK',placeholder:'https://...',required:true}
    ],async d=>{
      if(!safeUrl(d.url)) {toast('ᴠᴀʟɪᴅ ʟɪɴᴋ ʀᴇǫᴜɪʀᴇᴅ');throw new Error('VALIDATION')}
      p.socials=[...(p.socials||[]),{name:String(d.name).trim()||('SOCIAL '+((p.socials||[]).length+1)),url:String(d.url).trim()}].slice(0,3);
      await rdmProfileWrite(p);rdmRefresh();toast('ꜱᴏᴄɪᴀʟ ᴀᴅᴅᴇᴅ');
    });
  }
  return toast('ꜰᴏʀᴍ ʟᴏᴀᴅɪɴɢ')
};
window.editOwnSocial=async i=>{
  const p=rdmPlayer(),s=socialObj(p?.socials?.[i],i);if(!p||!s)return;
  if(typeof window.rdmUnifiedModal==='function'){
    return rdmOpenSimpleModal('EDIT SOCIAL',[
      {name:'name',label:'SOCIAL NAME',value:s.name||''},
      {name:'url',label:'SOCIAL LINK',value:s.url||'',placeholder:'https://...',required:true}
    ],async d=>{
      if(!safeUrl(d.url)) {toast('ᴠᴀʟɪᴅ ʟɪɴᴋ ʀᴇǫᴜɪʀᴇᴅ');throw new Error('VALIDATION')}
      p.socials[i]={name:String(d.name||'').trim()||('SOCIAL '+(i+1)),url:String(d.url).trim()};
      await rdmProfileWrite(p);rdmRefresh();toast('ꜱᴏᴄɪᴀʟ ᴜᴘᴅᴀᴛᴇᴅ');
    });
  }
  return toast('ꜰᴏʀᴍ ʟᴏᴀᴅɪɴɢ')
};
window.deleteOwnSocial=async i=>{const p=rdmPlayer();if(!p)return;p.socials.splice(i,1);await rdmProfileWrite(p);rdmRefresh();toast('ꜱᴏᴄɪᴀʟ ᴅᴇʟᴇᴛᴇᴅ')};

/* V6.8.28 — restore full cloud Admin/Profile controls accidentally lost in V6.8.26. */
const originalChooseDP=window.chooseDP;
window.chooseDP=()=>{rdmCropTarget=rdmPlayer()?.id||null;originalChooseDP()};
window.adminChooseDP=id=>{if(!rdmAdmin())return;rdmCropTarget=id;originalChooseDP()};
q('#cropSave').onclick=async()=>{const p=D.players.find(x=>x.id===(rdmCropTarget||rdmPlayer()?.id));if(!p||!crop.img)return;const src=q('#cropCanvas'),out=document.createElement('canvas');out.width=320;out.height=320;out.getContext('2d').drawImage(src,0,0,320,320);p.image=out.toDataURL('image/jpeg',.72);try{if(rdmAdmin())await rdmDB.collection(RCOL.players).doc(p.id).set({image:p.image,updatedAt:rdmStamp()},{merge:true});await rdmProfileWrite(p);q('#cropModal').classList.remove('show');rdmCropTarget=null;await rdmLoadAll();toast('ᴅᴘ ꜱᴀᴠᴇᴅ ᴏɴʟɪɴᴇ')}catch(e){console.error(e);toast('ᴅᴘ ꜱᴀᴠᴇ ꜰᴀɪʟᴇᴅ')}};

window.removeItem=async(k,i)=>{if(!rdmAdmin())return toast('ᴀᴅᴍɪɴ ᴏɴʟʏ');const item=D[k]?.[i],col=RCOL[k];if(!item||!col)return;const run=async()=>{try{if(item._docId)await rdmDB.collection(col).doc(item._docId).delete();D[k].splice(i,1);rdmRefresh();toast('ᴅᴇʟᴇᴛᴇᴅ ᴏɴʟɪɴᴇ')}catch(e){console.error(e);toast('ᴅᴇʟᴇᴛᴇ ꜰᴀɪʟᴇᴅ');throw e}};if(typeof window.rdmConfirmModal==='function')return window.rdmConfirmModal('DELETE ITEM','THIS ACTION CANNOT BE UNDONE.',run);return run()};
window.editPlayer=id=>{if(rdmAdmin())openEdit('editPlayer',D.players.find(x=>x.id===id))};
window.editSocial=i=>{if(rdmAdmin())openEdit('editSocial',D.socials[i])};
openEdit=function(mode,obj=null){editMode=mode;editObj=obj;let h='',f='';const fi='<label>ɪᴍᴀɢᴇ<input id="efile" type="file" accept="image/*"></label>';
 if(mode==='match'){h='ᴀᴅᴅ ᴍᴀᴛᴄʜ';f='<label>ᴏᴘᴘᴏɴᴇɴᴛ<input id="e1"></label><label>ᴅᴀᴛᴇ / ᴛɪᴍᴇ<input id="e2"></label><label>ᴠᴇɴᴜᴇ<input id="e3"></label><label>ᴅᴇᴛᴀɪʟ / ʀᴇꜱᴜʟᴛ / ᴘᴏᴛᴍ<textarea id="e4"></textarea></label>'}
 if(mode==='news'){h='ᴀᴅᴅ ɴᴇᴡꜱ';f='<label>ᴛɪᴛʟᴇ<input id="e1"></label><label>ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ<textarea id="e2"></textarea></label>'}
 if(mode==='player'){h='ᴀᴅᴅ ᴘʟᴀʏᴇʀ';f='<label>ɴᴀᴍᴇ<input id="e1"></label><label>ʀᴏʟᴇ<input id="e2"></label><label>ᴘʟᴀʏɪɴɢ ᴅᴇᴛᴀɪʟ<textarea id="e3"></textarea></label>'+fi}
 if(mode==='honour'){h='ᴀᴅᴅ ʜᴏɴᴏᴜʀ';f='<label>ʏᴇᴀʀ<input id="e1"></label><label>ʀᴇꜱᴜʟᴛ<input id="e2"></label><label>ᴛᴏᴜʀɴᴀᴍᴇɴᴛ<input id="e3"></label>'+fi}
 if(mode==='gallery'){h='ᴀᴅᴅ ᴘʜᴏᴛᴏ';f=fi+'<label>ᴄᴀᴘᴛɪᴏɴ<input id="e1"></label><label>ᴀʟʙᴜᴍ<select id="e2"><option>TEAM PHOTOS</option><option selected>MEMORIES</option><option>UPDATES</option></select></label>'}
 if(mode==='social'){h='ᴀᴅᴅ ꜱᴏᴄɪᴀʟ';f='<label>ᴘʟᴀᴛꜰᴏʀᴍ<input id="e1" placeholder="INSTAGRAM"></label><label>ᴅɪꜱᴘʟᴀʏ ɴᴀᴍᴇ<input id="e4" placeholder="RDM INSTAGRAM"></label><label>ʟɪɴᴋ<input id="e2" placeholder="https://..."></label><label>ɪᴄᴏɴ<input id="e3" placeholder="IG"></label>'+fi}
 if(mode==='editSocial'){h='ᴇᴅɪᴛ ꜱᴏᴄɪᴀʟ';f=`<label>ᴘʟᴀᴛꜰᴏʀᴍ<input id="e1" value="${esc(obj.name||'')}"></label><label>ᴅɪꜱᴘʟᴀʏ ɴᴀᴍᴇ<input id="e4" value="${esc(obj.displayName||obj.name||'')}"></label><label>ʟɪɴᴋ<input id="e2" value="${esc(obj.url||'')}"></label><label>ɪᴄᴏɴ<input id="e3" value="${esc(obj.icon||'')}"></label>${fi}`}
 if(mode==='editPlayer'){h='ᴇᴅɪᴛ ᴘʟᴀʏᴇʀ';f=`<label>ɴᴀᴍᴇ<input id="e1" value="${esc(obj.name)}"></label><label>ʀᴏʟᴇ<input id="e2" value="${esc(obj.role)}"></label><label>ᴘʟᴀʏɪɴɢ ᴅᴇᴛᴀɪʟ<textarea id="e3">${esc(obj.detail)}</textarea></label><label>ᴊᴇʀꜱᴇʏ<input id="e4" value="${esc(obj.jersey||'')}"></label><label>ɴɪᴄᴋɴᴀᴍᴇ<input id="e5" value="${esc(obj.nick||'')}"></label><label>ʙɪᴏ<textarea id="e6">${esc(obj.bio||'')}</textarea></label>${fi}`}
 q('#editTitle').textContent=h;q('#editFields').innerHTML=f;q('#editor').classList.add('show');window.rdmMiniFormUI?.(q('#editor'))};
q('#editForm').onsubmit=async e=>{e.preventDefault();if(!rdmAdmin())return toast('ᴀᴅᴍɪɴ ᴏɴʟʏ');const v=id=>q('#'+id)?.value?.trim()||'',file=q('#efile')?.files?.[0];try{let img='';if(file)img=await rdmCompressFile(file);const now=Date.now();
 if(editMode==='match')await rdmDB.collection(RCOL.matches).add({opponent:v('e1'),date:v('e2'),venue:v('e3'),note:v('e4'),createdMs:now,updatedAt:rdmStamp()});
 if(editMode==='news')await rdmDB.collection(RCOL.news).add({title:v('e1'),text:v('e2'),createdMs:now,updatedAt:rdmStamp()});
 if(editMode==='player'){const nums=(await rdmDB.collection(RCOL.players).get()).docs.map(d=>+String(d.id).replace(/\D/g,'')).filter(Number.isFinite),id='RDM'+String(Math.max(0,...nums)+1).padStart(3,'0');await rdmDB.collection(RCOL.players).doc(id).set({id,name:v('e1'),role:v('e2'),detail:v('e3'),image:img||'assets/logo.jpg',jersey:'',order:nums.length+1,active:true,updatedAt:rdmStamp()})}
 if(editMode==='honour')await rdmDB.collection(RCOL.honours).add({year:v('e1'),title:v('e2'),sub:v('e3'),image:img||'assets/logo.jpg',order:D.honours.length+1,createdMs:now,updatedAt:rdmStamp()});
 if(editMode==='gallery'){if(!img)return toast('ꜱᴇʟᴇᴄᴛ ᴀɴ ɪᴍᴀɢᴇ');await rdmDB.collection(RCOL.gallery).add({image:img,caption:v('e1')||'RDM MEMORY',album:v('e2')||'MEMORIES',createdMs:now,updatedAt:rdmStamp()})}
 if(editMode==='social')await rdmDB.collection(RCOL.socials).add({name:v('e1'),displayName:v('e4')||v('e1'),url:v('e2'),icon:v('e3')||'↗',image:img||'',order:D.socials.length+1,updatedAt:rdmStamp()});
 if(editMode==='editSocial')await rdmDB.collection(RCOL.socials).doc(editObj._docId).set({name:v('e1'),displayName:v('e4')||v('e1'),url:v('e2'),icon:v('e3')||editObj.icon||'↗',...(img?{image:img}:{}),updatedAt:rdmStamp()},{merge:true});
 if(editMode==='editPlayer'){const p=editObj;p.name=v('e1');p.role=v('e2');p.detail=v('e3');p.jersey=v('e4');p.nick=v('e5');p.bio=v('e6');if(img)p.image=img;await rdmDB.collection(RCOL.players).doc(p.id).set({name:p.name,role:p.role,detail:p.detail,jersey:p.jersey,...(img?{image:img}:{}),updatedAt:rdmStamp()},{merge:true});await rdmProfileWrite(p)}
 q('#editor').classList.remove('show');await rdmLoadAll();toast('ꜱᴀᴠᴇᴅ ᴏɴʟɪɴᴇ')}catch(e){console.error(e);toast(e.message==='IMAGE_TOO_LARGE'?'ɪᴍᴀɢᴇ ᴛᴏᴏ ʟᴀʀɢᴇ':'ꜱᴀᴠᴇ ꜰᴀɪʟᴇᴅ')}};
rdmRefresh();

function rdmCanvasRoundRect(ctx,x,y,w,h,r,fill,stroke){
  r=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();if(fill){ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=2;ctx.stroke()}
}
function rdmWrapCanvasText(ctx,text,x,y,maxWidth,lineHeight,maxLines=5){
  const words=String(text||'').replace(/\s+/g,' ').trim().split(' ');let line='',lines=[];
  for(const word of words){const test=line?line+' '+word:word;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=word}else line=test;if(lines.length>=maxLines)break}
  if(line&&lines.length<maxLines)lines.push(line);lines.slice(0,maxLines).forEach((ln,i)=>ctx.fillText(ln,x,y+i*lineHeight));return lines.length*lineHeight;
}
function rdmLoadImage(src){return new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=reject;im.src=src})}
function rdmExportMini(v){
  if(typeof window.rdmMiniText==='function')return window.rdmMiniText(String(v??''));
  if(typeof mini==='function')return mini(String(v??''));
  return String(v??'');
}
function rdmCanvasFont(ctx,weight,size){ctx.font=`${weight} ${size}px "Noto Sans", "Arial Unicode MS", Arial, sans-serif`}
async function rdmDrawProfileImage(format='png'){
  const p=rdmPlayer();if(!p)return;
  /* 4:5 profile-only export: no browser/UI chrome, no dark/black area. */
  const W=1080,H=1350,c=document.createElement('canvas');c.width=W;c.height=H;const ctx=c.getContext('2d');
  const bg=ctx.createLinearGradient(0,0,W,H);bg.addColorStop(0,'#f0faff');bg.addColorStop(.48,'#fffbea');bg.addColorStop(1,'#effff6');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
  rdmCanvasRoundRect(ctx,34,34,W-68,H-68,44,'rgba(255,255,255,.97)','#b7ddec');
  const band=ctx.createLinearGradient(80,0,W-80,0);band.addColorStop(0,'#2e8ff2');band.addColorStop(.55,'#36c6dc');band.addColorStop(1,'#2bc793');rdmCanvasRoundRect(ctx,70,70,W-140,10,5,band,null);
  let logo=null;try{logo=await rdmLoadImage('assets/logo.jpg')}catch{}
  if(logo){ctx.save();ctx.beginPath();ctx.arc(105,132,38,0,Math.PI*2);ctx.clip();ctx.drawImage(logo,67,94,76,76);ctx.restore();ctx.strokeStyle='#d3b34f';ctx.lineWidth=3;ctx.beginPath();ctx.arc(105,132,40,0,Math.PI*2);ctx.stroke()}
  ctx.textAlign='left';ctx.fillStyle='#174f82';rdmCanvasFont(ctx,900,26);ctx.fillText(rdmExportMini('REHAN DOMINATORS MAHUAWAN'),165,128);ctx.fillStyle='#6f879b';rdmCanvasFont(ctx,700,15);ctx.fillText(rdmExportMini('MAHUAWAN • GOPALGANJ • BIHAR'),165,155);
  let avatar=null;try{avatar=await rdmLoadImage(p.image||'assets/logo.jpg')}catch{try{avatar=await rdmLoadImage('assets/logo.jpg')}catch{}}
  if(avatar){ctx.save();ctx.beginPath();ctx.arc(W/2,315,132,0,Math.PI*2);ctx.clip();const s=Math.max(264/avatar.width,264/avatar.height),dw=avatar.width*s,dh=avatar.height*s;ctx.drawImage(avatar,W/2-dw/2,315-dh/2,dw,dh);ctx.restore();ctx.strokeStyle='#26bd94';ctx.lineWidth=10;ctx.beginPath();ctx.arc(W/2,315,138,0,Math.PI*2);ctx.stroke();ctx.strokeStyle='#ffffff';ctx.lineWidth=4;ctx.beginPath();ctx.arc(W/2,315,143,0,Math.PI*2);ctx.stroke()}
  ctx.textAlign='center';ctx.fillStyle='#174f82';rdmCanvasFont(ctx,900,42);ctx.fillText(rdmExportMini(p.name||'PLAYER'),W/2,505);
  rdmCanvasRoundRect(ctx,120,545,840,120,26,'#eef8ff','#c5e1ee');ctx.fillStyle='#d59a1c';rdmCanvasFont(ctx,900,15);ctx.fillText(rdmExportMini('PLAYER ID'),330,583);ctx.fillText(rdmExportMini('JERSEY NUMBER'),750,583);ctx.fillStyle='#174f82';rdmCanvasFont(ctx,900,27);ctx.fillText(rdmExportMini(p.id||'—'),330,627);ctx.fillText(rdmExportMini(p.jersey?'#'+p.jersey:'—'),750,627);ctx.strokeStyle='#6e8ba1';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(540,564);ctx.lineTo(540,648);ctx.stroke();
  let y=712;
  if(p.nick){ctx.fillStyle='#5c7890';rdmCanvasFont(ctx,800,19);ctx.fillText(rdmExportMini(p.nick),W/2,y);y+=48}
  const roleH=140;rdmCanvasRoundRect(ctx,120,y,840,roleH,26,'#f4f9ff','#c6e0ed');ctx.fillStyle='#315f83';rdmCanvasFont(ctx,900,22);ctx.fillText(rdmExportMini(p.role||''),W/2,y+43);rdmCanvasFont(ctx,750,18);rdmWrapCanvasText(ctx,rdmExportMini(p.detail||''),W/2,y+82,740,28,2);y+=roleH+52;
  if(p.bio){ctx.fillStyle='#526f87';rdmCanvasFont(ctx,700,18);const used=rdmWrapCanvasText(ctx,rdmExportMini(p.bio),W/2,y,780,28,4);y+=used+28}
  const socials=(p.socials||[]).map(socialObj).filter(s=>s.name||s.url).slice(0,3);
  if(socials.length){const sh=56+socials.length*32;rdmCanvasRoundRect(ctx,135,y,810,sh,20,'#f8fcff','#d4e7ef');ctx.fillStyle='#d59a1c';rdmCanvasFont(ctx,900,15);ctx.fillText(rdmExportMini('SOCIALS'),W/2,y+29);ctx.fillStyle='#466c89';rdmCanvasFont(ctx,700,16);socials.forEach((s,i)=>ctx.fillText(rdmExportMini(s.name||('SOCIAL '+(i+1))),W/2,y+62+i*30));y+=sh+18}
  const footerY=Math.min(1272,Math.max(1220,y+32));ctx.fillStyle='#d59a1c';rdmCanvasFont(ctx,900,15);ctx.fillText(rdmExportMini('ONE TEAM • ONE DREAM • ONE DOMINATION'),W/2,footerY);ctx.fillStyle='#7890a3';rdmCanvasFont(ctx,700,13);ctx.fillText(rdmExportMini('OFFICIAL PLAYER PROFILE • RDM'),W/2,footerY+30);
  const mime=format==='jpg'?'image/jpeg':'image/png',ext=format==='jpg'?'jpg':'png';const url=c.toDataURL(mime,format==='jpg'?.95:1);const a=document.createElement('a');a.href=url;a.download=`${String(p.id||'RDM')}-${String(p.name||'PLAYER').replace(/\s+/g,'-')}-PROFILE.${ext}`;document.body.appendChild(a);a.click();a.remove();toast?.(`ᴘʀᴏꜰɪʟᴇ ${ext.toUpperCase()} ʀᴇᴀᴅʏ`)
}
window.openProfileDownload=function(){
  document.getElementById('profileDownloadModal')?.remove();const m=document.createElement('div');m.id='profileDownloadModal';m.className='modal show profileDownloadOverlay';m.innerHTML=`<div class="dialog rdmUnifiedDialog profileDownloadDialog"><button class="close" type="button">×</button><h2>DOWNLOAD PROFILE</h2><p class="profileDownloadNote">ᴄʜᴏᴏꜱᴇ ɪᴍᴀɢᴇ ꜰᴏʀᴍᴀᴛ</p><div class="profileDownloadChoices"><button type="button" class="primary" data-format="png">⬇ ᴘɴɢ • ʙᴇꜱᴛ ǫᴜᴀʟɪᴛʏ</button><button type="button" class="secondary" data-format="jpg">⬇ ᴊᴘɢ • ꜱᴍᴀʟʟᴇʀ ꜰɪʟᴇ</button></div></div>`;document.body.appendChild(m);window.rdmMiniFormUI?.(m);const close=()=>m.remove();m.querySelector('.close').onclick=close;m.addEventListener('click',e=>{if(e.target===m)close()});m.querySelectorAll('[data-format]').forEach(b=>b.onclick=async()=>{const f=b.dataset.format;b.disabled=true;try{await rdmDrawProfileImage(f);close()}catch(e){console.error(e);toast?.('ᴅᴏᴡɴʟᴏᴀᴅ ꜰᴀɪʟᴇᴅ');b.disabled=false}})
};

window.toggleProfileEditMenu=function(force){ if(force===false) closeProfileEditMenu(); else openProfileEditMenu(); };


/* V6.8.67 FULL PROFILE + STATS INSIDE SQUAD */
function squadStatsHtml(p){const s=(typeof XD!=='undefined'&&XD.stats||[]).find(z=>z.playerId===p.id)||{},n=v=>Number(v||0)||0;return `<div class="squadStats"><div class="squadStatsTitle">ᴘʟᴀʏᴇʀ ꜱᴛᴀᴛꜱ</div><div class="statNums"><b>${n(s.matches)}<small>ᴍᴀᴛᴄʜᴇꜱ</small></b><b>${n(s.runs)}<small>ʀᴜɴꜱ</small></b><b>${n(s.wickets)}<small>ᴡɪᴄᴋᴇᴛꜱ</small></b><b>${n(s.highScore)}<small>ʜɪɢʜ ꜱᴄᴏʀᴇ</small></b><b>${n(s.fours)}<small>4ꜱ</small></b><b>${n(s.sixes)}<small>6ꜱ</small></b><b>${n(s.fifties)}<small>50ꜱ</small></b><b>${n(s.hundreds)}<small>100ꜱ</small></b><b>${n(s.runOuts)}<small>ʀᴜɴ ᴏᴜᴛꜱ</small></b><b>${n(s.strikeRate)}<small>ꜱᴛʀɪᴋᴇ ʀᴀᴛᴇ</small></b><b>${n(s.economy)}<small>ᴇᴄᴏɴᴏᴍʏ</small></b><b>${n(s.ballsFaced)}<small>ʙᴀʟʟꜱ ꜰᴀᴄᴇᴅ</small></b></div><div class="squadStatLines"><p>ʙᴇꜱᴛ ʙᴏᴡʟɪɴɢ • ${esc(s.bestBowling||'—')}</p><p>ʟᴀꜱᴛ 5 • ${esc(s.last5||'—')} • ꜱᴇᴀꜱᴏɴ • ${esc(s.season||'2027')}</p></div></div>`}
function renderSquadFullProfiles(){const box=q('#players');if(!box)return;box.innerHTML=D.players.map(p=>{const n=(p.name||'').toUpperCase(),lead=n==='REHAN AKHTAR'?'CAPTAIN':n==='SAIF ALI'?'VICE-CAPTAIN':n==='SOAIB AKHTAR'?'WICKET-KEEPER':'';const socials=(p.socials||[]).map(socialObj).filter(s=>s.url||s.name);return `<article class="player squadFullProfile">${rdmAdmin()?`<button type="button" class="squadEditFab" aria-label="Edit ${esc(p.name)}" title="Edit" onclick="openSquadEditMenu('${p.id}')">✏️</button>`:''}<div class="photo"><img src="${esc(p.image||'assets/logo.jpg')}" alt="${esc(p.name)}"></div>${lead?`<div class="leadershipBadge ${lead==='VICE-CAPTAIN'?'vice':lead==='WICKET-KEEPER'?'keeper':''}">${lead==='CAPTAIN'?'♛':lead==='VICE-CAPTAIN'?'★':'🧤'} ${mini(lead)}</div>`:''}<div class="pbody"><div class="squadIdentity"><span>${miniId(p.id)}</span><span>${p.jersey?'#'+esc(p.jersey):'—'}</span></div><h3>${mini(p.name)}</h3><b>${mini(p.role)}</b><p>${mini(p.detail)}</p>${p.nick?`<p>ɴɪᴄᴋɴᴀᴍᴇ • ${mini(p.nick)}</p>`:''}${p.bio?`<div class="profileBio">${mini(p.bio)}</div>`:''}${socials.length?`<div class="squadSocials">${socials.map((s,i)=>`<a href="${esc(safeUrl(s.url))}" target="_blank" rel="noopener">${mini(s.name||('SOCIAL '+(i+1)))}</a>`).join('')}</div>`:''}${squadStatsHtml(p)}</div></article>`}).join('')}
window.openSquadEditMenu=function(id){if(!rdmAdmin())return;document.getElementById('squadEditModal')?.remove();const p=D.players.find(x=>x.id===id);if(!p)return;const m=document.createElement('div');m.id='squadEditModal';m.className='modal show';m.innerHTML=`<div class="dialog rdmUnifiedDialog squadEditDialog"><button class="close" type="button" aria-label="Close">×</button><h2>ᴇᴅɪᴛ ${mini(p.name)}</h2><div class="squadEditChoices"><button class="squadEditChoice" type="button">👤 <span><b>ᴘʟᴀʏᴇʀ ᴅᴇᴛᴀɪʟꜱ</b><small>ᴘʀᴏꜰɪʟᴇ • ᴊᴇʀꜱᴇʏ • ʀᴏʟᴇ • ʙɪᴏ • ꜱᴏᴄɪᴀʟꜱ</small></span></button><button class="squadEditChoice" type="button">📊 <span><b>ᴘʟᴀʏᴇʀ ꜱᴛᴀᴛꜱ</b><small>ᴍᴀᴛᴄʜᴇꜱ • ʀᴜɴꜱ • ᴡɪᴄᴋᴇᴛꜱ • ʙᴀʟʟꜱ ꜰᴀᴄᴇᴅ</small></span></button></div></div>`;document.body.appendChild(m);const choices=m.querySelectorAll('.squadEditChoice');choices[0].onclick=()=>{m.remove();editPlayer(id)};choices[1].onclick=()=>{m.remove();editStats(id)};m.querySelector('.close').onclick=()=>m.remove();m.onclick=e=>{if(e.target===m)m.remove()}}
const renderBeforeSquadFull=render;render=function(){renderBeforeSquadFull();renderSquadFullProfiles()};
