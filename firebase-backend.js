/* RDM Firestore live-data bridge. Loaded AFTER app.js and firebase-login.js. */
const RCOL={players:'TeamPlayers',matches:'Matches',news:'News',honours:'Honours',gallery:'Gallery',socials:'Socials'};
const DEFAULT_SOCIAL_URLS={
  YOUTUBE:'https://www.youtube.com/@rehan_dominators_mahuawan',
  TELEGRAM:'https://t.me/rehandominatorsmahuawan',
  WHATSAPP:'https://whatsapp.com/channel/0029Vb8icRM3WHTQGQtM4G3j'
};
let rdmRemoteReady=false, rdmLoading=false;

function rdmStamp(){ return firebase.firestore.FieldValue.serverTimestamp(); }
function rdmDocData(doc){ return {...doc.data(),_docId:doc.id}; }
function rdmAdmin(){ return session?.mode==='admin'; }
function rdmPlayer(){ return session?.mode==='player' ? D.players.find(p=>p.id===session.playerId) : null; }
function rdmRefresh(){ render(); if(session?.mode==='player')renderProfile(); if(session?.mode==='admin')renderAdmin(); }

async function rdmCompressFile(file,max=900,quality=.78){
  if(!file) return '';
  const url=await new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(file)});
  const im=await new Promise((res,rej)=>{const x=new Image();x.onload=()=>res(x);x.onerror=rej;x.src=url});
  const scale=Math.min(1,max/Math.max(im.width,im.height));
  const c=document.createElement('canvas'); c.width=Math.max(1,Math.round(im.width*scale)); c.height=Math.max(1,Math.round(im.height*scale));
  c.getContext('2d').drawImage(im,0,0,c.width,c.height);
  const out=c.toDataURL('image/jpeg',quality);
  if(out.length>850000) throw new Error('IMAGE_TOO_LARGE');
  return out;
}

async function rdmSeedIfNeeded(){
  if(!rdmAdmin()) return;
  const ps=await rdmDB.collection(RCOL.players).limit(1).get();
  if(ps.empty){
    const batch=rdmDB.batch();
    D.players.forEach((p,i)=>batch.set(rdmDB.collection(RCOL.players).doc(p.id),{
      id:p.id,name:p.name,role:p.role,detail:p.detail,image:p.image||'assets/logo.jpg',jersey:p.jersey||'',order:i+1,active:true,updatedAt:rdmStamp()
    }));
    await batch.commit();
  }
  const hs=await rdmDB.collection(RCOL.honours).limit(1).get();
  if(hs.empty){
    const batch=rdmDB.batch();
    D.honours.forEach((h,i)=>batch.set(rdmDB.collection(RCOL.honours).doc('h'+String(i+1).padStart(2,'0')),{...h,order:i+1,updatedAt:rdmStamp()}));
    await batch.commit();
  }
  const ss=await rdmDB.collection(RCOL.socials).limit(1).get();
  if(ss.empty){
    const defs=[
      {id:'instagram',name:'INSTAGRAM',url:'',icon:'IG',image:'',order:1},
      {id:'facebook',name:'FACEBOOK',url:'',icon:'f',image:'',order:2},
      {id:'youtube',name:'YOUTUBE',url:DEFAULT_SOCIAL_URLS.YOUTUBE,icon:'▶',image:'',order:3},
      {id:'telegram',name:'TELEGRAM',url:DEFAULT_SOCIAL_URLS.TELEGRAM,icon:'✈',image:'',order:4},
      {id:'whatsapp',name:'WHATSAPP',url:DEFAULT_SOCIAL_URLS.WHATSAPP,icon:'◉',image:'',order:5}
    ];
    const batch=rdmDB.batch(); defs.forEach(x=>{const {id,...data}=x;batch.set(rdmDB.collection(RCOL.socials).doc(id),{...data,updatedAt:rdmStamp()})}); await batch.commit();
  }
}

async function rdmLoadAll(){
  if(rdmLoading) return; rdmLoading=true;
  try{
    const [ps,ms,ns,hs,gs,ss,profiles]=await Promise.all([
      rdmDB.collection(RCOL.players).get(),rdmDB.collection(RCOL.matches).get(),rdmDB.collection(RCOL.news).get(),rdmDB.collection(RCOL.honours).get(),rdmDB.collection(RCOL.gallery).get(),rdmDB.collection(RCOL.socials).get(),rdmDB.collection('PlayerProfiles').get()
    ]);
    if(!ps.empty){
      D.players=ps.docs.map(rdmDocData).sort((a,b)=>(a.order||999)-(b.order||999)).map(p=>({id:p.id,name:p.name,role:p.role,detail:p.detail,image:p.image||'assets/logo.jpg',jersey:p.jersey||'',nick:'',bio:'',socials:[],_docId:p._docId}));
    }
    D.matches=ms.docs.map(rdmDocData).sort((a,b)=>(b.createdMs||0)-(a.createdMs||0));
    D.news=ns.docs.map(rdmDocData).sort((a,b)=>(b.createdMs||0)-(a.createdMs||0));
    if(!hs.empty) D.honours=hs.docs.map(rdmDocData).sort((a,b)=>(a.order||999)-(b.order||999));
    D.gallery=gs.docs.map(rdmDocData).sort((a,b)=>(b.createdMs||0)-(a.createdMs||0));
    if(!ss.empty) D.socials=ss.docs.map(rdmDocData).sort((a,b)=>(a.order||999)-(b.order||999));
    profiles.docs.forEach(d=>{const pr=d.data(),p=D.players.find(x=>x.id===pr.playerId);if(p){['jersey','nick','bio','image'].forEach(k=>{if(pr[k]!==undefined&&pr[k]!==null&&pr[k]!=='')p[k]=pr[k]});if(Array.isArray(pr.socials))p.socials=pr.socials;p._profileUid=d.id;}});
    // Repair exact official social links if old local defaults were seeded.
    D.socials.forEach(s=>{const n=String(s.name||'').toUpperCase();if(DEFAULT_SOCIAL_URLS[n] && (!s.url || (n==='WHATSAPP'&&String(s.url).includes('wa.me/918521254605')))) s.url=DEFAULT_SOCIAL_URLS[n];});
    rdmRemoteReady=true; rdmRefresh();
  }catch(e){ console.error('RDM Firestore load failed',e); toast('ᴅᴀᴛᴀ ꜱʏɴᴄ ᴇʀʀᴏʀ'); }
  finally{rdmLoading=false;}
}

window.rdmBackendAuthReady=async(user,account)=>{
  if(account?.role==='admin'){ await rdmSeedIfNeeded(); await rdmLoadAll(); }
  else await rdmLoadAll();
};

// Public visitors get the same cloud data too.
rdmLoadAll();

async function rdmProfileWrite(p,extra={}){
  if(!rdmAuth.currentUser || session?.mode!=='player') throw new Error('PLAYER_LOGIN_REQUIRED');
  const data={playerId:p.id,jersey:p.jersey||'',nick:p.nick||'',bio:p.bio||'',socials:Array.isArray(p.socials)?p.socials.slice(0,3):[],image:p.image||'',updatedAt:rdmStamp(),...extra};
  await rdmDB.collection('PlayerProfiles').doc(rdmAuth.currentUser.uid).set(data,{merge:true});
}

window.selfEdit=async k=>{
  const p=rdmPlayer(); if(!p)return;
  if(k==='pass'){
    const v=prompt('NEW PASSWORD'); if(v===null)return; if(v.length<6)return toast('ᴍɪɴɪᴍᴜᴍ 6 ᴄʜᴀʀᴀᴄᴛᴇʀꜱ');
    try{await rdmAuth.currentUser.updatePassword(v);toast('ᴘᴀꜱꜱᴡᴏʀᴅ ᴜᴘᴅᴀᴛᴇᴅ')}catch(e){console.error(e);toast('ʀᴇ-ʟᴏɢɪɴ & ᴛʀʏ ᴀɢᴀɪɴ')} return;
  }
  const label={jersey:'JERSEY NUMBER',nick:'NICKNAME',bio:'BIO',socials:'MAX 3 SOCIAL LINKS • COMMA SEPARATED'}[k];
  const old=k==='socials'?(p.socials||[]).join(', '):p[k]||''; const v=prompt(label,old); if(v===null)return;
  if(k==='socials')p.socials=v.split(',').map(x=>x.trim()).filter(Boolean).slice(0,3); else p[k]=v;
  try{await rdmProfileWrite(p);rdmRefresh();toast('ꜱᴀᴠᴇᴅ ᴏɴʟɪɴᴇ')}catch(e){console.error(e);toast('ꜱᴀᴠᴇ ꜰᴀɪʟᴇᴅ')}
};

// Replace crop save: compressed circular DP stored in player's own Firestore profile doc.
q('#cropSave').onclick=async()=>{
  const p=rdmPlayer(); if(!p||!crop.img)return;
  const src=q('#cropCanvas'),out=document.createElement('canvas'); out.width=320;out.height=320;out.getContext('2d').drawImage(src,0,0,320,320); p.image=out.toDataURL('image/jpeg',.80);
  try{await rdmProfileWrite(p);q('#cropModal').classList.remove('show');rdmRefresh();toast('ᴅᴘ ꜱᴀᴠᴇᴅ ᴏɴʟɪɴᴇ')}catch(e){console.error(e);toast('ᴅᴘ ꜱᴀᴠᴇ ꜰᴀɪʟᴇᴅ')}
};

window.removeItem=async(k,i)=>{
  if(!rdmAdmin())return toast('ᴀᴅᴍɪɴ ᴏɴʟʏ');
  const item=D[k]?.[i],col=RCOL[k]; if(!item||!col)return;
  try{if(item._docId)await rdmDB.collection(col).doc(item._docId).delete();D[k].splice(i,1);rdmRefresh();toast('ᴅᴇʟᴇᴛᴇᴅ ᴏɴʟɪɴᴇ')}catch(e){console.error(e);toast('ᴅᴇʟᴇᴛᴇ ꜰᴀɪʟᴇᴅ')}
};

q('#editForm').onsubmit=async e=>{
  e.preventDefault(); if(!rdmAdmin())return toast('ᴀᴅᴍɪɴ ᴏɴʟʏ');
  const v=id=>q('#'+id)?.value?.trim()||''; const file=q('#efile')?.files?.[0];
  try{
    let img=''; if(file)img=await rdmCompressFile(file,900,.76);
    const now=Date.now();
    if(editMode==='match') await rdmDB.collection(RCOL.matches).add({opponent:v('e1'),date:v('e2'),venue:v('e3'),note:v('e4'),createdMs:now,updatedAt:rdmStamp()});
    if(editMode==='news') await rdmDB.collection(RCOL.news).add({title:v('e1'),text:v('e2'),createdMs:now,updatedAt:rdmStamp()});
    if(editMode==='player'){
      const nums=(await rdmDB.collection(RCOL.players).get()).docs.map(d=>+String(d.id).replace(/\D/g,'')).filter(Number.isFinite);const id='RDM'+String((Math.max(0,...nums)+1)).padStart(3,'0');
      await rdmDB.collection(RCOL.players).doc(id).set({id,name:v('e1'),role:v('e2'),detail:v('e3'),image:img||'assets/logo.jpg',jersey:'',order:nums.length+1,active:true,updatedAt:rdmStamp()});
    }
    if(editMode==='honour') await rdmDB.collection(RCOL.honours).add({year:v('e1'),title:v('e2'),sub:v('e3'),image:img||'assets/logo.jpg',order:D.honours.length+1,createdMs:now,updatedAt:rdmStamp()});
    if(editMode==='gallery'){if(!img)return toast('ꜱᴇʟᴇᴄᴛ ᴀɴ ɪᴍᴀɢᴇ');await rdmDB.collection(RCOL.gallery).add({image:img,caption:v('e1')||'RDM MEMORY',createdMs:now,updatedAt:rdmStamp()});}
    if(editMode==='social') await rdmDB.collection(RCOL.socials).add({name:v('e1'),url:v('e2'),icon:v('e3')||'↗',image:img||'',order:D.socials.length+1,updatedAt:rdmStamp()});
    if(editMode==='editSocial') await rdmDB.collection(RCOL.socials).doc(editObj._docId).set({name:v('e1'),url:v('e2'),icon:v('e3')||editObj.icon||'↗',...(img?{image:img}:{}),updatedAt:rdmStamp()},{merge:true});
    if(editMode==='editPlayer') await rdmDB.collection(RCOL.players).doc(editObj.id).set({name:v('e1'),role:v('e2'),detail:v('e3'),...(img?{image:img}:{}),updatedAt:rdmStamp()},{merge:true});
    q('#editor').classList.remove('show'); await rdmLoadAll(); toast('ꜱᴀᴠᴇᴅ ᴏɴʟɪɴᴇ');
  }catch(e){console.error(e);toast(e.message==='IMAGE_TOO_LARGE'?'ɪᴍᴀɢᴇ ᴛᴏᴏ ʟᴀʀɢᴇ':'ꜱᴀᴠᴇ ꜰᴀɪʟᴇᴅ')}
};
