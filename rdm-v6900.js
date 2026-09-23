/* RDM V6.9.00 — reliable live leadership sync */
(function(){
  'use strict';
  function m(s){try{return typeof mini==='function'?mini(s||''):(s||'')}catch(e){return s||''}}
  function player(name){return (window.D&&Array.isArray(D.players))?D.players.find(function(p){return String(p.name||'').trim().toUpperCase()===name}):null}
  function validPlayerImage(src){
    src=String(src||'').trim();
    if(!src)return '';
    /* Never show the team logo as a Captain/VC profile photo. */
    if(/(?:^|\/)assets\/logo\.jpg(?:[?#].*)?$/i.test(src))return '';
    if(/(?:^|\/)assets\/favicon-(?:48|192|512)\.png(?:[?#].*)?$/i.test(src))return '';
    return src;
  }
  function initials(name){return String(name||'RDM').split(/\s+/).filter(Boolean).slice(0,2).map(function(x){return x[0]}).join('').toUpperCase()}
  function setLeader(p,prefix,fallback){
    if(!p)return;
    var im=document.getElementById(prefix+'Image'),n=document.getElementById(prefix+'Name'),d=document.getElementById(prefix+'Detail');
    if(im){
      var src=validPlayerImage(p.image)||validPlayerImage(fallback);
      if(src){im.hidden=false;im.src=src;im.removeAttribute('data-no-player-photo')}
      else{im.hidden=true;im.removeAttribute('src');im.setAttribute('data-no-player-photo','1')}
      var card=im.closest('.leadCard');
      if(card){var ph=card.querySelector('.leaderInitials');if(!src){if(!ph){ph=document.createElement('div');ph.className='leaderInitials';im.insertAdjacentElement('afterend',ph)}ph.textContent=initials(p.name);ph.hidden=false}else if(ph){ph.hidden=true}}
    }
    if(n)n.textContent=m(p.name);
    if(d)d.textContent=m([p.role,p.detail].filter(Boolean).join(' • '));
  }
  function sync(){setLeader(player('REHAN AKHTAR'),'homeCaptain','assets/rehan.png');setLeader(player('SAIF ALI'),'homeVice','')}
  window.rdmSyncLeadership=sync;
  var old=window.render;
  if(typeof old==='function')window.render=function(){var r=old.apply(this,arguments);queueMicrotask(sync);return r};
  document.addEventListener('DOMContentLoaded',function(){sync();[250,700,1500,3000,6000].forEach(function(t){setTimeout(sync,t)})});
  document.addEventListener('click',async function(e){
    var b=e.target.closest&&e.target.closest('#downloadApplicationBtn');if(!b)return;
    var h=document.getElementById('downloadApplicationHelp');
    if(matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true){if(h)h.textContent='ʀᴅᴍ ᴀᴘᴘ ɪꜱ ᴀʟʀᴇᴀᴅʏ ɪɴꜱᴛᴀʟʟᴇᴅ';return}
    if(typeof window.rdmPromptInstall==='function'){
      var outcome=await window.rdmPromptInstall();
      if(h)h.textContent=outcome==='accepted'?'ɪɴꜱᴛᴀʟʟɪɴɢ ʀᴅᴍ ᴀᴘᴘ…':'ᴄʜʀᴏᴍᴇ ᴍᴇɴᴜ → ɪɴꜱᴛᴀʟʟ ᴀᴘᴘ / ᴀᴅᴅ ᴛᴏ ʜᴏᴍᴇ ꜱᴄʀᴇᴇɴ';
    }else if(h)h.textContent='ᴄʜʀᴏᴍᴇ ᴍᴇɴᴜ → ɪɴꜱᴛᴀʟʟ ᴀᴘᴘ / ᴀᴅᴅ ᴛᴏ ʜᴏᴍᴇ ꜱᴄʀᴇᴇɴ';
  });
})();
