/* RDM V6.8.96 — passive Firebase auth. No visible login/switch UI.
   Private links select a permitted view; Firebase remains the write authorization layer. */
const ACCOUNT_COLLECTION = "Accounts";
async function rdmAccountFor(user){
  if(!user)return null;
  const snap=await rdmDB.collection(ACCOUNT_COLLECTION).doc(user.uid).get();
  return snap.exists?snap.data():null;
}
async function loadFirebaseSession(user){
  if(!user){session=null;updateAuthUI();render();window.dispatchEvent(new CustomEvent('rdm-auth-ready'));return;}
  try{
    const a=await rdmAccountFor(user);
    if(!a||a.active===false){session=null;updateAuthUI();render();return;}
    if(a.role==='admin')session={mode:'admin',realRole:'admin',playerId:'RDM001',uid:user.uid};
    else if(a.role==='player')session={mode:'player',realRole:'player',playerId:a.playerId,uid:user.uid};
    else session=null;
    updateAuthUI();render();
    if(typeof window.rdmBackendAuthReady==='function')await window.rdmBackendAuthReady(user,a);
    window.dispatchEvent(new CustomEvent('rdm-auth-ready',{detail:{account:a}}));
  }catch(e){console.error('Firebase session error',e);session=null;updateAuthUI();render();}
}
localStorage.removeItem('RDM_V33_SESSION');session=null;updateAuthUI();
rdmAuth.onAuthStateChanged(loadFirebaseSession);
