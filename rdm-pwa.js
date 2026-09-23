(function(){
'use strict';
const standalone=matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js?v=6899').catch(console.warn));
let promptEvent=null,bar=null;
function build(){if(bar)return bar;bar=document.createElement('div');bar.className='rdmInstall';bar.innerHTML='<img src="assets/favicon-192.png" alt="RDM"><div class="rdmInstallText"><b>INSTALL RDM APP</b><small>FAST • FULL SCREEN • HOME SCREEN ACCESS</small></div><button type="button">INSTALL</button>';document.body.appendChild(bar);bar.querySelector('button').onclick=async()=>{if(!promptEvent)return;bar.classList.add('installing');bar.querySelector('button').textContent='OPENING…';await new Promise(r=>setTimeout(r,500));promptEvent.prompt();const c=await promptEvent.userChoice;promptEvent=null;if(c.outcome==='accepted'){bar.querySelector('button').textContent='INSTALLING…'}else{bar.classList.remove('installing');bar.querySelector('button').textContent='INSTALL';bar.classList.remove('show')}};return bar}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();promptEvent=e;if(!standalone)setTimeout(()=>build().classList.add('show'),900)});
window.addEventListener('appinstalled',()=>{if(bar){bar.classList.add('installing');bar.querySelector('button').textContent='INSTALLED ✓';setTimeout(()=>bar.classList.remove('show'),1300)}});
})();
