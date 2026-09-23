(function(){
'use strict';
const standalone=matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js?v=6900').catch(console.warn));
let promptEvent=null,bar=null;
window.rdmPromptInstall=async function(){if(!promptEvent)return 'unavailable';const e=promptEvent;promptEvent=null;e.prompt();try{const c=await e.userChoice;return c&&c.outcome?c.outcome:'dismissed'}catch(_){return 'dismissed'}};
function build(){if(bar)return bar;bar=document.createElement('div');bar.className='rdmInstall';bar.innerHTML='<img src="assets/favicon-192.png" alt="RDM"><div class="rdmInstallText"><b>INSTALL RDM APP</b><small>FAST • FULL SCREEN • HOME SCREEN ACCESS</small></div><button type="button">INSTALL</button>';document.body.appendChild(bar);bar.querySelector('button').onclick=async()=>{bar.classList.add('installing');bar.querySelector('button').textContent='OPENING…';const outcome=await window.rdmPromptInstall();if(outcome==='accepted'){bar.querySelector('button').textContent='INSTALLING…'}else{bar.classList.remove('installing');bar.querySelector('button').textContent='INSTALL';bar.classList.remove('show')}};return bar}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();promptEvent=e;if(!standalone)setTimeout(()=>build().classList.add('show'),700)});
window.addEventListener('appinstalled',()=>{promptEvent=null;if(bar){bar.classList.add('installing');bar.querySelector('button').textContent='INSTALLED ✓';setTimeout(()=>bar.classList.remove('show'),1300)}});
})();
