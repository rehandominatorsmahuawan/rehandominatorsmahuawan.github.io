/* RDM V6.8.97 admin player browser */
(()=>{
 function add(){
  if(!window.rdmAdmin?.() || !document.getElementById('adminBody'))return;
  const body=document.getElementById('adminBody');
  let box=document.getElementById('adminPlayerManager');
  if(!box){box=document.createElement('section');box.id='adminPlayerManager';box.className='adminPlayerManager';body.prepend(box)}
  box.innerHTML='<div class="sectionHead"><div><span>ᴘʟᴀʏᴇʀ ᴍᴀɴᴀɢᴇʀ</span><h2>ᴀʟʟ ᴘʟᴀʏᴇʀ ᴘʀᴏꜰɪʟᴇꜱ</h2><p>ᴏᴘᴇɴ & ᴇᴅɪᴛ ᴏɴᴇ ᴘʟᴀʏᴇʀ ᴀᴛ ᴀ ᴛɪᴍᴇ</p></div></div><div class="adminPlayerGrid">'+D.players.map(p=>`<button type="button" onclick="adminOpenPlayerProfile('${p.id}')"><img src="${p.image||'assets/logo.jpg'}" alt=""><span><b>${mini(p.name)}</b><small>${mini(typeof playerCode==='function'?playerCode(p.id):p.id)}</small></span><i>›</i></button>`).join('')+'</div>';
 }
 const old=window.renderAdmin;
 window.renderAdmin=function(){old?.();setTimeout(add,0)};
 window.addEventListener('rdm-auth-ready',()=>setTimeout(add,100));
})();
