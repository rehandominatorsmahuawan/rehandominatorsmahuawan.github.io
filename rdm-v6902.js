/* RDM V6.9.02 — lean assets + cloud branding manager */
(()=>{
'use strict';
const STATIC_PLAYER=/^(?:\.?\/)?assets\/(?:rehan\.png|players\/)/i;
const BRAND_DOC=()=>window.rdmDB?.collection('BrandSettings').doc('main');
let brand={logo:'',favicon:'',appIcon:'',socialPreview:''};
const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function initials(name){return String(name||'RDM').trim().split(/\s+/).slice(0,2).map(x=>x[0]||'').join('').toUpperCase()||'RDM'}
function placeholder(name){const t=initials(name);return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" rx="128" fill="#eaf5fb"/><circle cx="128" cy="128" r="118" fill="none" stroke="#1b6f9e" stroke-width="6"/><text x="128" y="145" text-anchor="middle" font-family="Arial,sans-serif" font-size="64" font-weight="700" fill="#155f91">${t}</text></svg>`)}
function cleanPlayers(){if(!window.D?.players)return;D.players.forEach(p=>{if(!p.image||STATIC_PLAYER.test(String(p.image)))p.image=placeholder(p.name)})}
window.rdmCleanStaticPlayerImages=cleanPlayers;
function applyBrand(){
 const logo=brand.logo||'assets/logo.jpg', fav=brand.favicon||brand.appIcon||logo, app=brand.appIcon||fav, social=brand.socialPreview||logo;
 document.querySelectorAll('header .brand img,.heroLogo img,footer img,.downloadAppCard>img').forEach(x=>x.src=logo);
 document.querySelectorAll('link[rel="icon"]').forEach(x=>x.href=fav);
 document.querySelectorAll('link[rel="apple-touch-icon"]').forEach(x=>x.href=app);
 const og=document.querySelector('meta[property="og:image"]');if(og)og.content=social;
 const tw=document.querySelector('meta[name="twitter:image"]');if(tw)tw.content=social;
}
async function loadBrand(){try{if(!BRAND_DOC())return;const d=await BRAND_DOC().get();if(d.exists)brand={...brand,...d.data()};applyBrand()}catch(e){console.warn('Brand load',e)}}
async function compress(file,max=700,q=.76){if(!file)return'';const u=await new Promise((r,j)=>{const f=new FileReader;f.onload=()=>r(f.result);f.onerror=j;f.readAsDataURL(file)});const im=await new Promise((r,j)=>{const x=new Image;x.onload=()=>r(x);x.onerror=j;x.src=u});const s=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(im.width*s));c.height=Math.max(1,Math.round(im.height*s));c.getContext('2d').drawImage(im,0,0,c.width,c.height);let out=c.toDataURL('image/png');if(out.length>780000)out=c.toDataURL('image/jpeg',q);if(out.length>900000)throw Error('IMAGE_TOO_LARGE');return out}
function brandingBox(){return `<section class="brandAdminBox"><div class="sectionHead subHead"><div><span>ʙʀᴀɴᴅɪɴɢ</span><h2>ʟᴏɢᴏ & ᴀᴘᴘ ᴀꜱꜱᴇᴛꜱ</h2><p>ᴄʜᴀɴɢᴇ ᴡᴇʙꜱɪᴛᴇ ʙʀᴀɴᴅɪɴɢ ꜰʀᴏᴍ ᴀᴅᴍɪɴ</p></div></div><div class="brandAdminGrid">
 <label>ᴡᴇʙꜱɪᴛᴇ ʟᴏɢᴏ<input id="brandLogoFile" type="file" accept="image/*"><button type="button" class="primary" onclick="rdmSaveBrandAsset('logo','brandLogoFile')">ᴜᴘᴅᴀᴛᴇ ʟᴏɢᴏ</button></label>
 <label>ꜰᴀᴠɪᴄᴏɴ<input id="brandFaviconFile" type="file" accept="image/*"><button type="button" class="primary" onclick="rdmSaveBrandAsset('favicon','brandFaviconFile')">ᴜᴘᴅᴀᴛᴇ ꜰᴀᴠɪᴄᴏɴ</button></label>
 <label>ᴘᴡᴀ / ᴀᴘᴘ ɪᴄᴏɴ<input id="brandAppFile" type="file" accept="image/*"><button type="button" class="primary" onclick="rdmSaveBrandAsset('appIcon','brandAppFile')">ᴜᴘᴅᴀᴛᴇ ᴀᴘᴘ ɪᴄᴏɴ</button></label>
 <label>ꜱᴏᴄɪᴀʟ / ꜱᴇᴏ ᴘʀᴇᴠɪᴇᴡ<input id="brandSocialFile" type="file" accept="image/*"><button type="button" class="primary" onclick="rdmSaveBrandAsset('socialPreview','brandSocialFile')">ᴜᴘᴅᴀᴛᴇ ᴘʀᴇᴠɪᴇᴡ</button></label>
 </div><p class="adminHint">ᴘʟᴀʏᴇʀ ᴘʜᴏᴛᴏꜱ ᴀʀᴇ ᴍᴀɴᴀɢᴇᴅ ꜰʀᴏᴍ ᴇᴀᴄʜ ᴘʟᴀʏᴇʀ ᴘʀᴏꜰɪʟᴇ. ᴛʀᴏᴘʜʏ ɪᴍᴀɢᴇꜱ ᴀʀᴇ ᴘʀᴇꜱᴇʀᴠᴇᴅ.</p></section>`}
window.rdmSaveBrandAsset=async function(key,inputId){try{if(!window.session||session.mode!=='admin')return;const f=document.getElementById(inputId)?.files?.[0];if(!f)return window.toast?.('ꜱᴇʟᴇᴄᴛ ᴀɴ ɪᴍᴀɢᴇ');const val=await compress(f,key==='favicon'?256:key==='appIcon'?512:800);await BRAND_DOC().set({[key]:val,updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});brand[key]=val;applyBrand();window.toast?.('ʙʀᴀɴᴅɪɴɢ ᴜᴘᴅᴀᴛᴇᴅ')}catch(e){console.error(e);window.toast?.('ᴜᴘᴅᴀᴛᴇ ꜰᴀɪʟᴇᴅ')}};
function injectAdmin(){const b=document.getElementById('adminBody');if(!b||b.querySelector('.brandAdminBox')||window.session?.mode!=='admin')return;b.insertAdjacentHTML('beforeend',brandingBox())}
const oldAdmin=window.renderAdmin;window.renderAdmin=function(){oldAdmin?.();setTimeout(injectAdmin,40)};
const oldRefresh=window.rdmRefresh;window.rdmRefresh=function(){cleanPlayers();oldRefresh?.();applyBrand()};
const oldLoad=window.rdmLoadAll;if(oldLoad)window.rdmLoadAll=async function(){await oldLoad.apply(this,arguments);cleanPlayers();try{window.render?.();if(session?.mode==='player')window.renderProfile?.();if(session?.mode==='admin')window.renderAdmin?.()}catch{}applyBrand()};
new MutationObserver(()=>applyBrand()).observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('DOMContentLoaded',()=>{cleanPlayers();loadBrand();setTimeout(injectAdmin,800)});loadBrand();
})();
