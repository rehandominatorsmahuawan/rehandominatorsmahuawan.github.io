/* RDM V6.8.86 — TRUE MINI FONT EVERYWHERE */
(function(){
'use strict';
const MAP={A:'ᴀ',B:'ʙ',C:'ᴄ',D:'ᴅ',E:'ᴇ',F:'ꜰ',G:'ɢ',H:'ʜ',I:'ɪ',J:'ᴊ',K:'ᴋ',L:'ʟ',M:'ᴍ',N:'ɴ',O:'ᴏ',P:'ᴘ',Q:'ǫ',R:'ʀ',S:'ꜱ',T:'ᴛ',U:'ᴜ',V:'ᴠ',W:'ᴡ',X:'x',Y:'ʏ',Z:'ᴢ'};
const mini=s=>String(s??'').replace(/[A-Za-z]/g,c=>MAP[c.toUpperCase()]||c);
const SKIP=new Set(['SCRIPT','STYLE','NOSCRIPT','IFRAME','SVG','PATH','CODE','PRE']);
function textNode(n){const p=n.parentElement;if(!p||SKIP.has(p.tagName)||p.closest('[data-rdm-no-mini]'))return;if(/[A-Za-z]/.test(n.nodeValue||''))n.nodeValue=mini(n.nodeValue)}
function control(el){
 if(el.closest?.('[data-rdm-no-mini]'))return;
 if(el.placeholder)el.placeholder=mini(el.placeholder);
 if(el.tagName==='SELECT'){el.querySelectorAll('option').forEach(o=>{if(!o.dataset.rdmValueSaved){o.dataset.rdmValueSaved='1';if(!o.hasAttribute('value'))o.value=o.textContent}o.textContent=mini(o.textContent)});return}
 if(el.tagName==='TEXTAREA'){if(/[A-Za-z]/.test(el.value))el.value=mini(el.value);return}
 if(el.tagName==='INPUT'){
   const t=(el.type||'text').toLowerCase();
   if(['password','email','url','file','date','time','datetime-local','month','week','number','range','color','checkbox','radio','hidden'].includes(t))return;
   if(/[A-Za-z]/.test(el.value))el.value=mini(el.value);
 }
}
function scan(root=document){
 if(root.nodeType===3){textNode(root);return}
 if(root.nodeType!==1&&root.nodeType!==9)return;
 if(root.nodeType===1&&SKIP.has(root.tagName))return;
 const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode())textNode(n);
 if(root.matches?.('input,textarea,select'))control(root);
 root.querySelectorAll?.('input,textarea,select').forEach(control);
}
let busy=false;
const obs=new MutationObserver(ms=>{if(busy)return;busy=true;try{ms.forEach(m=>m.addedNodes.forEach(scan));}finally{busy=false}});
function start(){scan(document);obs.observe(document.documentElement,{subtree:true,childList:true});document.addEventListener('input',e=>{if(e.target.matches?.('input:not([type=password]):not([type=email]):not([type=url]),textarea')){const el=e.target,s=el.selectionStart;control(el);try{el.setSelectionRange(s,s)}catch(_){}}},true);document.addEventListener('change',e=>{if(e.target.matches?.('input,textarea,select'))control(e.target)},true)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
window.rdmGlobalMini=mini;
})();

/* V6.8.87 — auto-detect every Edit/Delete/Pin action, including dynamically rendered sections */
(function(){
 const classify=b=>{
   if(!b||b.nodeType!==1)return;
   const t=(b.textContent||'').toLowerCase().replace(/\s+/g,' ');
   b.classList.remove('rdmDeleteAction','rdmEditAction','rdmPinAction');
   if(t.includes('ᴅᴇʟᴇᴛᴇ')||t.includes('delete')) b.classList.add('rdmDeleteAction');
   else if(t.includes('ᴜɴᴘɪɴ')||t.includes('unpin')||t.includes('ᴘɪɴ')||/(^|\s)pin(\s|$)/.test(t)) b.classList.add('rdmPinAction');
   else if(t.includes('ᴇᴅɪᴛ')||t.includes('edit')) b.classList.add('rdmEditAction');
 };
 const scan=r=>{if(r.matches?.('button'))classify(r);r.querySelectorAll?.('button').forEach(classify)};
 const go=()=>{scan(document);new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1)scan(n)}))).observe(document.body,{childList:true,subtree:true})};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go,{once:true});else go();
})();
