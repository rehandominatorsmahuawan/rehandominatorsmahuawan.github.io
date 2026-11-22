/* RDM V6.9.01 — leadership DOM sync + permission preferences */
(function(){
'use strict';
function miniSafe(s){try{return typeof mini==='function'?mini(s||''):(s||'')}catch(_){return s||''}}
function invalidPhoto(src){src=String(src||'').trim();return !src||/^data:image\/svg\+xml/i.test(src)||/(?:^|\/)(?:assets\/(?:logo\.jpg|favicon-(?:48|192|512)\.png|aistudio\/CRICKET_YOUR_TAGLINE_HERE-[^?#]+)|src\/assets\/images\/rdm_(?:crest_emblem|official_crest)_[^?#]+|pwa-(?:192x192|512x512|maskable-512x512)\.png|apple-touch-icon\.png)(?:[?#].*)?$/i.test(src)}
function fallbackLogo(){return (typeof window.rdmDefaultPlayerLogo==='function'?window.rdmDefaultPlayerLogo():'assets/rdm-logo.png?v=7400')}
function playerByName(name){return window.D&&Array.isArray(D.players)?D.players.find(p=>String(p.name||'').trim().toUpperCase()===name):null}
function squadImage(name){const cards=[...document.querySelectorAll('#players .player')];const card=cards.find(c=>String(c.querySelector('h3')?.textContent||'').toUpperCase().includes(name.split(' ')[0]));const src=card?.querySelector('.photo img')?.getAttribute('src')||'';return invalidPhoto(src)?'':src}
function setLeader(name,prefix){const p=playerByName(name);if(!p)return;const im=document.getElementById(prefix+'Image'),nm=document.getElementById(prefix+'Name'),dt=document.getElementById(prefix+'Detail');let src=invalidPhoto(p.image)?'':String(p.image||'');if(!src)src=squadImage(name)||fallbackLogo();if(im){const card=im.closest('.leadCard');const ph=card?.querySelector('.leaderInitials');im.src=src;im.hidden=false;if(ph)ph.hidden=true;}if(nm)nm.textContent=miniSafe(p.name);if(dt)dt.textContent=miniSafe([p.role,p.detail].filter(Boolean).join(' • '))}
function sync(){setLeader('REHAN AKHTAR','homeCaptain');setLeader('SAIF ALI','homeVice')}
window.rdmSyncLeadership=sync;
document.addEventListener('DOMContentLoaded',()=>{sync();[300,800,1600,3200,6500].forEach(t=>setTimeout(sync,t));const box=document.getElementById('players');if(box)new MutationObserver(()=>queueMicrotask(sync)).observe(box,{childList:true,subtree:true,attributes:true,attributeFilter:['src']})});

/* Ask only for a permission that RDM currently uses: notifications. Browser remains authoritative. */
const CONSENT_KEY='rdm-permission-consent-v1';
function saveConsent(kind,status){try{const all=JSON.parse(localStorage.getItem(CONSENT_KEY)||'{}');all[kind]={status:String(status),updatedAt:new Date().toISOString()};localStorage.setItem(CONSENT_KEY,JSON.stringify(all))}catch(_){}}
window.rdmRequestNotificationPermission=async function(){if(!('Notification' in window)){saveConsent('notifications','unsupported');return 'unsupported'}let status=Notification.permission;if(status==='default'){try{status=await Notification.requestPermission()}catch(_){status=Notification.permission||'default'}}saveConsent('notifications',status);return status};
window.rdmPermissionPreferences=function(){try{return JSON.parse(localStorage.getItem(CONSENT_KEY)||'{}')}catch(_){return {}}};

/* Permission is requested from a clear user action, never automatically on page load. */
document.addEventListener('click',async function(e){const b=e.target.closest&&e.target.closest('#enableRdmNotifications');if(!b)return;b.disabled=true;const s=await window.rdmRequestNotificationPermission();b.textContent=s==='granted'?'Notifications Allowed':s==='denied'?'Notifications Blocked':'Notifications Unavailable';b.disabled=false});
})();
