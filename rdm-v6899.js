/* RDM V6.8.99 — leadership live sync + install page */
(function(){
  function m(s){try{return typeof mini==='function'?mini(s||''):(s||'')}catch(e){return s||''}}
  function byName(name){return (window.D&&Array.isArray(D.players))?D.players.find(function(p){return String(p.name||'').trim().toUpperCase()===name}):null}
  function leadership(){
    var c=byName('REHAN AKHTAR'),v=byName('SAIF ALI');
    function put(p,prefix,fallback){if(!p)return;var im=document.getElementById(prefix+'Image'),n=document.getElementById(prefix+'Name'),d=document.getElementById(prefix+'Detail');if(im)im.src=p.image||fallback;if(n)n.textContent=m(p.name);if(d)d.textContent=m([p.role,p.detail].filter(Boolean).join(' • '))}
    put(c,'homeCaptain','assets/rehan.png');put(v,'homeVice','assets/logo.jpg');
  }
  var old=window.render; if(typeof old==='function')window.render=function(){var r=old.apply(this,arguments);leadership();return r};
  document.addEventListener('DOMContentLoaded',function(){leadership();setTimeout(leadership,400);setTimeout(leadership,1400)});
  var deferred=null;window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferred=e});
  document.addEventListener('click',async function(e){var b=e.target.closest&&e.target.closest('#downloadApplicationBtn');if(!b)return;var h=document.getElementById('downloadApplicationHelp');if(deferred){deferred.prompt();try{await deferred.userChoice}catch(_){}deferred=null;if(h)h.textContent='ɪɴꜱᴛᴀʟʟ ʀᴇQᴜᴇꜱᴛ ꜱᴇɴᴛ';return}if(h)h.textContent='ᴄʜʀᴏᴍᴇ ᴍᴇɴᴜ → ᴀᴅᴅ ᴛᴏ ʜᴏᴍᴇ ꜱᴄʀᴇᴇɴ / ɪɴꜱᴛᴀʟʟ ᴀᴘᴘ';});
})();
