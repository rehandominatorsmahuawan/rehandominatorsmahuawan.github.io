/* RDM Firebase Authentication */
const ACCOUNT_COLLECTION = "Accounts";

async function rdmAccountFor(user){
  if(!user) return null;
  const snap = await rdmDB.collection(ACCOUNT_COLLECTION).doc(user.uid).get();
  return snap.exists ? snap.data() : null;
}

async function loadFirebaseSession(user){
  if(!user){
    session=null; updateAuthUI(); render(); return;
  }
  try{
    const a=await rdmAccountFor(user);
    if(!a || a.active===false){ await rdmAuth.signOut(); return; }
    if(a.role==='admin') session={mode:'admin',realRole:'admin',playerId:'RDM001',canSwitch:true,uid:user.uid};
    else if(a.role==='player') session={mode:'player',realRole:'player',playerId:a.playerId,canSwitch:a.playerId==='RDM001',uid:user.uid};
    else { await rdmAuth.signOut(); return; }
    updateAuthUI(); render();
    if(typeof window.rdmBackendAuthReady==='function') await window.rdmBackendAuthReady(user,a);
  }catch(e){ console.error('Firebase session error',e); }
}

localStorage.removeItem('RDM_V33_SESSION');
session=null; updateAuthUI();
rdmAuth.onAuthStateChanged(loadFirebaseSession);

q('#loginForm').onsubmit=async e=>{
  e.preventDefault();
  const errorBox=q('#loginError');
  const password=q('#password').value;
  errorBox.textContent='';
  try{
    await rdmAuth.setPersistence(q('#remember').checked ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION);
    if(loginMode==='admin'){
      const mobile=q('#amobile').value.replace(/\D/g,'');
      if(mobile!=='8521254605') throw new Error('INVALID_ADMIN');
      const cred=await rdmAuth.signInWithEmailAndPassword('admin@rdm.invalid',password);
      const a=await rdmAccountFor(cred.user);
      if(!a || a.role!=='admin' || a.loginKey!=='8521254605' || a.active===false){ await rdmAuth.signOut(); throw new Error('INVALID_ADMIN'); }
      session={mode:'admin',realRole:'admin',playerId:'RDM001',canSwitch:true,uid:cred.user.uid};
      q('#loginModal').classList.remove('show'); q('#loginForm').reset(); render(); go('admin'); toast('ᴀᴅᴍɪɴ ʟᴏɢɪɴ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟ');
    }else{
      const playerId=q('#pid').value.trim().toUpperCase();
      const playerName=q('#pname').value.trim().toUpperCase();
      if(!/^RDM\d{3}$/.test(playerId)) throw new Error('INVALID_PLAYER');
      const cred=await rdmAuth.signInWithEmailAndPassword(playerId.toLowerCase()+'@rdm.invalid',password);
      const a=await rdmAccountFor(cred.user);
      if(!a || a.role!=='player' || a.playerId!==playerId || String(a.displayName||'').toUpperCase()!==playerName || a.active===false){ await rdmAuth.signOut(); throw new Error('INVALID_PLAYER'); }
      session={mode:'player',realRole:'player',playerId:a.playerId,canSwitch:a.playerId==='RDM001',uid:cred.user.uid};
      q('#loginModal').classList.remove('show'); q('#loginForm').reset(); render(); go('profile'); toast('ʟᴏɢɪɴ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟ');
    }
    if(typeof window.rdmBackendAuthReady==='function') await window.rdmBackendAuthReady(rdmAuth.currentUser,await rdmAccountFor(rdmAuth.currentUser));
  }catch(e){ console.error(e); errorBox.textContent='ʟᴏɢɪɴ ᴅᴇᴛᴀɪʟꜱ ᴅᴏ ɴᴏᴛ ᴍᴀᴛᴄʜ'; }
};

q('#loginOpen').onclick=async()=>{
  if(rdmAuth.currentUser){ await rdmAuth.signOut(); session=null; updateAuthUI(); render(); go('home'); toast('ʟᴏɢɢᴇᴅ ᴏᴜᴛ'); }
  else q('#loginModal').classList.add('show');
};

/* Secure Admin ↔ Rehan quick switch.
   Firebase keeps one authenticated account at a time. An authenticated ADMIN can
   enter Rehan view without another password while the underlying admin auth stays
   active. Rehan cannot gain admin privileges without authenticating as admin. */
let rdmViewMode = null;
const originalRdmAdmin = window.rdmAdmin;

function rdmRealAdmin(){
  return !!(session && session.realRole === 'admin');
}

async function setQuickView(mode){
  if(!session) return;
  if(session.realRole === 'admin'){
    rdmViewMode = mode === 'player' ? 'player' : 'admin';
    session.mode = rdmViewMode;
    session.playerId = 'RDM001';
    session.canSwitch = true;
    updateAuthUI(); render();
    go(rdmViewMode === 'admin' ? 'admin' : 'profile');
    toast(rdmViewMode === 'admin' ? 'ᴀᴅᴍɪɴ ᴍᴏᴅᴇ' : 'ʀᴇʜᴀɴ ᴘʀᴏꜰɪʟᴇ');
    return;
  }
  // A player session cannot silently become an administrator. Ask once for admin auth.
  const password=prompt('ADMIN PASSWORD');
  if(!password) return;
  try{
    const cred=await rdmAuth.signInWithEmailAndPassword('admin@rdm.invalid',password);
    const a=await rdmAccountFor(cred.user);
    if(!a || a.role!=='admin' || a.active===false) throw new Error('INVALID_ADMIN');
    session={mode:'admin',realRole:'admin',playerId:'RDM001',canSwitch:true,uid:cred.user.uid};
    rdmViewMode='admin';
    updateAuthUI(); render(); go('admin'); toast('ᴀᴅᴍɪɴ ᴍᴏᴅᴇ');
  }catch(e){ console.error(e); toast('ᴡʀᴏɴɢ ᴀᴅᴍɪɴ ᴘᴀꜱꜱᴡᴏʀᴅ'); }
}

q('#switchBtn').onclick=async()=>{
  if(!session?.canSwitch) return;
  await setQuickView(session.mode==='admin' ? 'player' : 'admin');
};
