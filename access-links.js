/* RDM V6.8.96 private-link router.
   IMPORTANT: link tokens select the private UI only. Firebase Authentication + Firestore rules still authorize writes. */
(()=>{
const PLAYER_LINKS={"RDM001":"yJjA_yyMuR6OyPJgfvspRUmD","RDM003":"iGo217fTX-irxYyJoPfrlXBf","RDM006":"RLnuOF9niHZMV0yemW4-Mm5O","RDM004":"pArgda-19Jz59OJc6D-WszY4","RDM002":"6tYIAzsx4WM534_Ovd1mDaE1","RDM007":"ubl_kIeHJdMlhTrMeV39LTjq","RDM008":"HthzwXsiP1scviZJJUWIymep","RDM010":"kSHlVvpggLEs9wpLrlUfTMxs","RDM011":"GgSPtAUgj_zIrTTY2WMeLeXW","RDM005":"2GJogYcYn4dG23ug5zkC9c-D","RDM012":"mxXlPl2zOIzz-Lig_jsx6MEm","RDM016":"UpcsKFrMOK6GEnBLjTCZcdBk","RDM009":"88DTqmDck9JVXCybKZXajzzG","RDM013":"uwN3JA0MPpUewH_BFcRVoiJX","RDM014":"wKTMjxcXSV3sweGJWQ4AKZoX","RDM015":"FYnhheOTlpei4tJD6C43Qc66","RDM017":"YvKJ8KIvznZlq_7OQc9AYyvG"};
const ADMIN_LINK="0AqlZ35wF8lcXYiAkgz04KjzGeiSfnHs";
const params=new URLSearchParams(location.search);
const key=params.get('key')||'';
const requestedPlayer=Object.keys(PLAYER_LINKS).find(id=>PLAYER_LINKS[id]===key)||null;
const wantsAdmin=key===ADMIN_LINK;
function publicMode(){
  document.body.classList.remove('admin');
  document.querySelector('#profileNav')?.setAttribute('hidden','');
  document.querySelector('#adminNav')?.setAttribute('hidden','');
  document.querySelectorAll('.adminOnly').forEach(x=>x.style.display='none');
}
function route(){
  if(wantsAdmin){
    if(session?.mode==='admin'){updateAuthUI();render();go('admin');return;}
    publicMode();return;
  }
  if(requestedPlayer){
    if(session?.mode==='player'&&session.playerId===requestedPlayer){updateAuthUI();render();go('profile');return;}
    /* Never convert an authenticated admin session into a player session. Doing so made profile writes use the admin UID and overwrite another player's profile. */
    if(session?.mode==='admin'){updateAuthUI();render();go('admin');setTimeout(()=>window.adminOpenPlayerProfile?.(requestedPlayer),80);return;}
    publicMode();return;
  }
  session=null;publicMode();render();go('home');
}
window.addEventListener('rdm-auth-ready',route);
setTimeout(route,500);
})();
