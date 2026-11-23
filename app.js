const seed=[
['RDM001','REHAN AKHTAR','CAPTAIN • ALL-ROUNDER','RIGHT-HANDED • RIGHT-ARM FAST • MIDDLE ORDER • MIDDLE OVERS','','','08'],
['RDM003','SAIF ALI','VICE-CAPTAIN • ALL-ROUNDER','BOTH-HANDED • FAST • NON-STRIKER OPENER • ALL PHASES','','',''],
['RDM006','SOAIB AKHTAR','WICKET-KEEPER • BATSMAN','RIGHT-HANDED • LEFT-ARM FAST • TOP ORDER • FINISHER','','',''],
['RDM004','AKIB ANSARI','ALL-ROUNDER','RIGHT-HANDED • FAST • STRIKER OPENER • MIDDLE + DEATH','','',''],
['RDM002','ASIF ALI','BATSMAN','RIGHT-HANDED • TOP ORDER','','',''],
['RDM007','WASIM','ALL-ROUNDER','RIGHT-HANDED • FAST • TOP ORDER • ALL PHASES','','',''],
['RDM008','JUBED','BATSMAN','RIGHT-HANDED • MIDDLE ORDER','','',''],
['RDM010','GULAM','ALL-ROUNDER','RIGHT-HANDED • FAST • FINISHER • EMERGENCY BOWLING','','',''],
['RDM011','SAHIL ANSARI','BATSMAN','RIGHT-HANDED • MIDDLE ORDER','','','57'],
['RDM005','SAHIL ALI','BATSMAN','RIGHT-HANDED • MIDDLE ORDER • FINISHER','','','02'],
['RDM012','LUCKY','ALL-ROUNDER','RIGHT-HANDED • FAST • MIDDLE ORDER • MIDDLE OVERS','','',''],
['RDM016','KAIF LEFTY','BATSMAN','LEFT-HANDED • MIDDLE ORDER','','',''],
['RDM009','SK. HANIF','BATSMAN','RIGHT-HANDED • FINISHER','','',''],
['RDM013','ABUSHAD','ALL-ROUNDER','RIGHT-HANDED • FAST • MIDDLE ORDER + FINISHER • MIDDLE + DEATH','','',''],
['RDM014','SABRE ALAM','BATSMAN','RIGHT-HANDED • FINISHER','','',''],
['RDM015','ZISHAN','BATSMAN','RIGHT-HANDED • FINISHER','','',''],
['RDM017','JAVED','BATSMAN','RIGHT-HANDED • FINISHER','','','']
];

const PLAYER_CODES={"RDM001":"RA08","RDM003":"SA-V","RDM006":"SO-WK","RDM004":"AKA","RDM002":"ASI","RDM007":"WSM","RDM008":"JBD","RDM010":"GLM","RDM011":"SHA57","RDM005":"SAL02","RDM012":"LKY","RDM016":"KLF","RDM009":"SKH","RDM013":"ABS","RDM014":"SBA","RDM015":"ZSN","RDM017":"JVD"};
const playerCode=id=>PLAYER_CODES[id]||"RDM";
const playerDefaults={
'RDM001':{nick:'THE SKIPPER',bio:'CAPTAIN AND ALL-ROUNDER WHO LEADS FROM THE FRONT WITH DISCIPLINE, CONFIDENCE AND TEAM-FIRST CRICKET.'},
'RDM002':{nick:'THE ANCHOR',bio:'A RELIABLE TOP-ORDER BATSMAN WHO VALUES A SOLID START, SMART SHOT SELECTION AND STEADY RUNS.'},
'RDM003':{nick:'THE GAME CHANGER',bio:'VICE-CAPTAIN AND ALL-ROUNDER WHO BRINGS FLEXIBILITY, ENERGY AND IMPACT THROUGH EVERY PHASE OF THE GAME.'},
'RDM004':{nick:'THE ATTACKER',bio:'AN AGGRESSIVE STRIKE OPENER AND FAST-BOWLING ALL-ROUNDER BUILT TO SET THE TEMPO AND DELIVER UNDER PRESSURE.'},
'RDM005':{nick:'THE FINISHER',bio:'A CALM MIDDLE-ORDER BATSMAN WHO BACKS HIS SHOTS AND LOOKS TO FINISH INNINGS WITH CONFIDENCE.'},
'RDM006':{nick:'THE GLOVEMAN',bio:'THE TEAM MAIN WICKET-KEEPER AND A VERSATILE BATSMAN WHO ADDS ENERGY, AWARENESS AND BALANCE TO THE TEAM.'},
'RDM007':{nick:'THE COMPLETE PACKAGE',bio:'A TOP-ORDER ALL-ROUNDER WHO CAN CONTRIBUTE WITH BAT AND BALL ACROSS EVERY PHASE OF THE MATCH.'},
'RDM008':{nick:'THE MIDDLE ROCK',bio:'A DEPENDABLE MIDDLE-ORDER BATSMAN FOCUSED ON BUILDING PARTNERSHIPS AND KEEPING THE INNINGS MOVING.'},
'RDM009':{nick:'THE CLOSER',bio:'A FINISHER WHO ENJOYS PRESSURE MOMENTS AND LOOKS TO GIVE THE TEAM A STRONG END TO THE INNINGS.'},
'RDM010':{nick:'THE IMPACT PLAYER',bio:'A USEFUL ALL-ROUNDER AND FINISHER WHO CAN CHANGE MOMENTUM WITH QUICK RUNS AND EMERGENCY BOWLING.'},
'RDM011':{nick:'THE MIDDLE ORDER MAESTRO',bio:'A RIGHT-HANDED MIDDLE-ORDER BATSMAN WHO ADDS STABILITY AND DEPTH TO THE BATTING LINE-UP.'},
'RDM012':{nick:'THE ALL-ROUNDER',bio:'A VERSATILE ALL-ROUNDER WHO CAN CONTRIBUTE WITH BAT OR BALL WHEN THE TEAM NEEDS HIM.'},
'RDM013':{nick:'THE UTILITY ACE',bio:'A FLEXIBLE ALL-ROUNDER WHO CAN FINISH WITH THE BAT AND HANDLE IMPORTANT MIDDLE OR DEATH OVERS.'},
'RDM014':{nick:'THE POWER FINISHER',bio:'A BATSMAN WITH A FINISHER ROLE WHO LOOKS TO ADD QUICK RUNS AND IMPACT.'},
'RDM015':{nick:'THE LAST-OVER HITTER',bio:'A FINISHER WHO PLAYS WITH INTENT IN HIGH-PRESSURE BATTING MOMENTS.'},
'RDM016':{nick:'THE LEFTY',bio:'A LEFT-HANDED MIDDLE-ORDER BATSMAN WHO ADDS VARIETY AND BALANCE TO THE BATTING LINE-UP.'},
'RDM017':{nick:'THE FINISHER',bio:'A RIGHT-HANDED BATSMAN WHO SPECIALISES IN THE FINISHER ROLE AND LOOKS TO CLOSE INNINGS STRONGLY.'}
};
const K='RDM_V33_DATA',SK='RDM_V33_SESSION';
const fresh=()=>({players:seed.map(x=>({id:x[0],name:x[1],role:x[2],detail:x[3],pass:x[4],image:x[5],jersey:x[6],nick:(playerDefaults[x[0]]?.nick||''),bio:(playerDefaults[x[0]]?.bio||''),socials:[]})),matches:[],news:[],gallery:[],honours:[{year:'2024',title:'WINNER',sub:'MAHUAWAN PREMIER LEAGUE 1',image:'assets/trophy-2024.png'},{year:'2025',title:'WINNER',sub:'MAHUAWAN PREMIER LEAGUE 2',image:'assets/trophy-2025.png'},{year:'2026',title:'RUNNER-UP',sub:'TOURNAMENT NAME • TO BE ADDED',image:'assets/trophy-2026.png'}],socials:[{name:'INSTAGRAM',url:'',icon:'IG',image:''},{name:'FACEBOOK',url:'',icon:'f',image:''},{name:'YOUTUBE',url:'https://www.youtube.com/@rehan_dominators_mahuawan',icon:'▶',image:''},{name:'TELEGRAM',url:'',icon:'✈',image:''},{name:'WHATSAPP',url:'https://wa.me/918521254605',icon:'◉',image:''}]});
let D;try{D=JSON.parse(localStorage.getItem(K))||fresh()}catch{D=fresh()}
// Repair incomplete/blank saved data automatically
if(!D||!Array.isArray(D.players)||D.players.length===0){D=fresh();saveLater=true}else{var saveLater=false}
if(!Array.isArray(D.honours)||D.honours.length===0)D.honours=fresh().honours;

if(!Array.isArray(D.socials)||D.socials.length===0)D.socials=fresh().socials;
// V6.8.95 — canonical 17-player RDM squad. No permanent PLAYING/SUBSTITUTE labels.
const rdmRoster2026=Object.fromEntries(seed.map((x,i)=>[x[0],{id:x[0],name:x[1],role:x[2],detail:x[3],image:x[5],jersey:x[6],order:i+1}]));
function rdmRepairRoster2026(){
 if(!Array.isArray(D.players))D.players=[];
 for(const x of seed){
   let p=D.players.find(v=>v.id===x[0]);
   if(!p){p={id:x[0],name:x[1],role:x[2],detail:x[3],pass:x[4],image:x[5],jersey:x[6],nick:'',bio:'',socials:[]};D.players.push(p)}
   const c=rdmRoster2026[x[0]]; p.name=c.name;p.role=c.role;p.detail=c.detail;p.order=c.order;
   if(c.jersey && !p.jersey)p.jersey=c.jersey;
   if(/(?:logo\.jpg|CRICKET_YOUR_TAGLINE_HERE|rdm_crest_emblem|^assets\/(?:rehan\.png|players\/))/i.test(String(p.image||'')))p.image='';
   const d=playerDefaults[p.id];if(d){if(!p.nick)p.nick=d.nick;if(!p.bio)p.bio=d.bio}
 }
 const keep=new Set(seed.map(x=>x[0]));D.players=D.players.filter(p=>keep.has(p.id)).sort((a,b)=>(rdmRoster2026[a.id]?.order||999)-(rdmRoster2026[b.id]?.order||999));
}
rdmRepairRoster2026();
const requiredSocials=fresh().socials;requiredSocials.forEach(def=>{let found=D.socials.find(x=>String((Array.isArray(x)?x[0]:x.name)||'').toUpperCase().includes(def.name));if(!found)D.socials.push({...def});else if(!Array.isArray(found)){if(found.image===undefined)found.image='';if(!found.icon)found.icon=def.icon;}});
D.players.forEach(p=>{const d=playerDefaults[p.id];if(d){if(!p.nick)p.nick=d.nick;if(!p.bio)p.bio=d.bio;}});if(!Array.isArray(D.matches))D.matches=[];if(!Array.isArray(D.news))D.news=[];if(!Array.isArray(D.gallery))D.gallery=[];let session=null;try{session=JSON.parse(localStorage.getItem(SK))}catch{}let loginMode='player',editMode='',editObj=null;
const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)],save=()=>localStorage.setItem(K,JSON.stringify(D));
function mini(s=''){
  const str=String(s??'').trim();
  if(!str)return '';
  const map={'ᴀ':'A','ʙ':'B','ᴄ':'C','ᴅ':'D','ᴇ':'E','ꜰ':'F','ɢ':'G','ʜ':'H','ɪ':'I','ᴊ':'J','ᴋ':'K','ʟ':'L','ᴍ':'M','ɴ':'N','ᴏ':'O','ᴘ':'P','ǫ':'Q','ʀ':'R','ꜱ':'S','ᴛ':'T','ᴜ':'U','ᴠ':'V','ᴡ':'W','ʏ':'Y','ᴢ':'Z'};
  const ascii=str.replace(/[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡʏᴢ]/g,c=>map[c]||c);
  if(/^(RDM\d+|RA\d+|SA-V|SO-WK|AKA|ASI|WSM|JBD|GLM|SHA\d+|SAL\d+|LKY|KLF|SKH|ABS|SBA|ZSN|JVD)$/i.test(ascii))return ascii.toUpperCase();
  if(ascii===ascii.toUpperCase()&&/[A-Z]{2,}/.test(ascii)){
    let out=ascii.toLowerCase().replace(/\b([a-z])/g,(m,c,idx,full)=>{
      const w=full.slice(idx).match(/^[a-z]+/i)?.[0]||'';
      if(idx>0&&['and','or','of','the','in','on','to','for','at','by','vs','is'].includes(w.toLowerCase()))return w.toLowerCase().charAt(0);
      return c.toUpperCase();
    });
    return out.replace(/\b(Rdm|Xi|H2h|Mpl|Potm|Nr|Pwa)\b/gi,m=>m.toUpperCase()).replace(/\bSk\./gi,'SK.');
  }
  return ascii;
}
function miniId(s=''){return String(s??'').toUpperCase()}function toast(t){let x=q('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),1600)}
function rdmSocialSvg(name=''){
  const n=String(name||'').toUpperCase();
  if(n.includes('WHATSAPP'))return '<svg class="socialBrandSvg is-wa" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#25D366"/><path fill="#fff" d="M12.03 6.2a5.76 5.76 0 0 0-4.96 8.7l-.72 2.63 2.7-.71a5.77 5.77 0 0 0 8.74-4.94 5.77 5.77 0 0 0-5.76-5.68Zm3.35 8.15c-.14.4-.83.76-1.15.81-.3.04-.68.06-1.1-.07-.25-.08-.58-.19-.99-.37-1.74-.75-2.88-2.51-2.96-2.63-.09-.12-.71-.94-.71-1.8 0-.86.45-1.28.61-1.45.16-.17.35-.21.46-.21h.33c.11 0 .25-.04.39.3.14.35.49 1.21.53 1.3.04.09.07.19.01.31-.06.12-.09.19-.17.29-.09.1-.18.23-.26.31-.09.09-.18.18-.08.35.1.17.46.76.99 1.23.68.61 1.25.8 1.42.89.17.09.27.07.37-.04.1-.12.43-.5.55-.67.12-.17.23-.14.39-.09.16.06 1.01.48 1.18.56.17.09.29.13.33.2.04.07.04.42-.1.82Z"/></svg>';
  if(n.includes('FACEBOOK'))return '<svg class="socialBrandSvg is-fb" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#1877F2"/><path fill="#fff" d="M13.5 19v-6.2h2.08l.31-2.4H13.5V8.87c0-.7.2-1.17 1.2-1.17h1.28V5.55c-.22-.03-.98-.1-1.87-.1-1.85 0-3.11 1.13-3.11 3.2v1.75H8.9v2.4h2.1V19h2.5Z"/></svg>';
  if(n.includes('YOUTUBE'))return '<svg class="socialBrandSvg is-yt" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4.2" fill="#FF0000"/><polygon points="10,9 16,12 10,15" fill="#fff"/></svg>';
  if(n.includes('TELEGRAM'))return '<svg class="socialBrandSvg is-tg" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#229ED9"/><path fill="#fff" d="M17.2 7.6 5.9 12c-.77.31-.76.74-.14.93l2.9.9 6.72-4.24c.32-.2.61-.09.37.13l-5.44 4.91-.2 3.01c.29 0 .42-.13.58-.29l1.4-1.36 2.9 2.14c.54.3.92.14 1.05-.49l1.9-8.98c.2-.78-.3-1.13-.94-.86Z"/></svg>';
  if(n.includes('INSTAGRAM'))return '<svg class="socialBrandSvg is-ig" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="rdmIgGrad" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#F58529"/><stop offset="45%" stop-color="#DD2A7B"/><stop offset="78%" stop-color="#8134AF"/><stop offset="100%" stop-color="#515BD4"/></linearGradient></defs><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="url(#rdmIgGrad)"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" stroke-width="1.9"/><circle cx="17.2" cy="6.8" r="1.15" fill="#fff"/></svg>';
  return '';
}
window.rdmSocialSvg=rdmSocialSvg;
const VALID_PUBLIC_PAGES=new Set(['home','squad','matches','records','tournaments','lineup','honours','socials','gallery','news','updates','download']);
function go(id,opts={}){
  const role=window.__rdmUrlKeyRole||'public';
  if(role==='admin'){id='admin';}
  else if(role==='player'){id='profile';}
  else if(id==='admin'||id==='profile'||!VALID_PUBLIC_PAGES.has(id)){id='home';}
  qa('.page').forEach(x=>x.classList.toggle('active',x.id===id));
  qa('.nav button').forEach(x=>{
    const on=x.dataset.page===id;
    x.classList.toggle('active',on);
    if(on){
      x.setAttribute('aria-current','page');
      try{x.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});}catch{}
    }else{
      x.removeAttribute('aria-current');
    }
  });
  if(role==='public'&&opts.updateHash!==false&&!String(location.hash||'').startsWith('#player=')){
    const targetHash=id==='home'?'':'#'+id;
    if((location.hash||'')!==targetHash){
      try{history.replaceState(null,'',location.pathname+location.search+targetHash);}catch{}
    }
  }
  if(id==='profile')renderProfile();
  if(id==='admin')renderAdmin();
  scrollTo({top:0,behavior:'smooth'});
}
qa('[data-page]').forEach(b=>b.onclick=()=>go(b.dataset.page));
document.addEventListener('click',e=>{
  const b=e.target.closest?.('[data-go]');
  if(b){e.preventDefault();go(b.dataset.go);}
});
function isAdmin(){return session?.mode==='admin'&&window.__rdmUrlKeyRole==='admin'&&(typeof window.rdmIsAdminUnlocked!=='function'||window.rdmIsAdminUnlocked())}function currentPlayer(){return D.players.find(p=>p.id===session?.playerId)}
function updateAuthUI(){
  const urlRole=window.__rdmUrlKeyRole||'public';
  const admin=isAdmin();
  const player=session?.mode==='player'&&urlRole==='player'&&(!window.__rdmUrlPlayerId||session.playerId===window.__rdmUrlPlayerId);
  document.body.classList.toggle('admin',admin);
  const pNav=q('#profileNav'); if(pNav)pNav.hidden=!player;
  const aNav=q('#adminNav'); if(aNav)aNav.hidden=!(urlRole==='admin');
}
function render(){q('#players').innerHTML=D.players.map(p=>`<article class="player" data-player-id="${p.id}"><div class="photo"><img src="${p.image||'assets/rdm-logo.png?v=7400'}" alt="${p.name}"></div><div class="pbody"><span class="badge">${mini(playerCode(p.id))}${p.jersey?' • #'+p.jersey:''}</span><h3>${mini(p.name)}</h3><b>${mini(p.role)}</b><p>${mini(p.detail)}</p>${p.nick?`<p class="squadNick">Nickname · ${mini(p.nick)}</p>`:''}<div class="squadCardActions"><button type="button" class="tinyBtn squadStatsToggleBtn" data-toggle-stats="${p.id}" aria-expanded="false" aria-controls="squad-stats-${p.id}"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg><span>View Stats</span></button><button type="button" class="tinyBtn squadShareBtn" data-share-player="${p.id}" aria-label="Share ${mini(p.name)} profile"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg><span>Share Profile</span></button>${isAdmin()?`<button type="button" class="tinyBtn adminOnly" onclick="editPlayer('${p.id}')">Edit</button>`:''}</div><div class="squadStats squadStatsPanel" id="squad-stats-${p.id}" hidden><div class="squadStatsGroup"><div class="squadStatsGroupTitle">Batting Statistics</div><div class="squadStatsGrid"><b>0<small>Matches</small></b><b>0<small>Runs</small></b><b>0<small>High Score</small></b><b>0<small>Strike Rate</small></b></div></div><div class="squadStatsGroup"><div class="squadStatsGroupTitle">Bowling Statistics</div><div class="squadStatsGrid squadStatsGridBowling"><b>0<small>Wickets</small></b><b>—<small>Best Bowling</small></b><b>0<small>Economy</small></b></div></div></div></div></article>`).join('');
q('#honourList').innerHTML=D.honours.map((h,i)=>`<article class="honour"><div class="trophy"><img src="${h.image}" onclick="zoom('${h.image}')"></div><h3>${h.year} • ${mini(h.title)}</h3><p>${mini(h.sub)}</p>${isAdmin()?`<button class="tinyBtn deleteBtn" onclick="removeItem('honours',${i})">Delete</button>`:''}</article>`).join('');
q('#matchList').innerHTML=D.matches.length?D.matches.map((m,i)=>`<article class="card"><h3>${mini(m.opponent)}</h3><p>${mini(m.date)} • ${mini(m.venue)}</p><p>${mini(m.note)}</p>${isAdmin()?`<button class="tinyBtn deleteBtn" onclick="removeItem('matches',${i})">Delete</button>`:''}</article>`).join(''):'<div class="empty">No match added yet</div>';
q('#newsList').innerHTML=D.news.length?D.news.map((n,i)=>`<article class="card"><h3>${mini(n.title)}</h3><p>${mini(n.text)}</p>${isAdmin()?`<button class="tinyBtn deleteBtn" onclick="removeItem('news',${i})">Delete</button>`:''}</article>`).join(''):'<div class="empty">No announcement yet</div>';
q('#galleryList').innerHTML=D.gallery.length?D.gallery.map((g,i)=>`<figure><img src="${g.image}" onclick="zoom(this.src)"><figcaption>${mini(g.caption||'RDM Memory')}</figcaption>${isAdmin()?`<button class="tinyBtn deleteBtn" onclick="removeItem('gallery',${i})">Delete</button>`:''}</figure>`).join(''):'<div class="empty">No gallery photo added yet</div>';
q('#socialList').innerHTML=D.socials.map((s,i)=>{let o=Array.isArray(s)?{name:s[0],url:s[1],icon:'↗',image:''}:s;let svg=rdmSocialSvg(o.name);let media=(o.image&&!/CRICKET_YOUR_TAGLINE_HERE|logo\.jpg/i.test(o.image))?`<img src="${o.image}" alt="${o.name}" loading="lazy" decoding="async" referrerPolicy="no-referrer">`:(svg||`<span>${o.icon||'↗'}</span>`);let open=o.url?`<a class="primary socialAction" href="${o.url}" target="_blank" rel="noopener">Open</a>`:`<button class="secondary socialAction" disabled>Link Not Added</button>`;return `<article class="socialCard"><div class="socialIcon">${media}</div><h3>${mini(o.name)}</h3><div class="socialActions">${open}${isAdmin()?`<button class="tinyBtn socialAction" onclick="editSocial(${i})">Edit</button>`:''}</div></article>`}).join('');const mp=q('#metricPlayersCount');if(mp&&Array.isArray(D.players))mp.textContent=D.players.length;const mh=q('#metricHonoursCount');if(mh&&Array.isArray(D.honours))mh.textContent=D.honours.length;updateAuthUI()}
window.removeItem=(k,i)=>{if(!isAdmin())return;D[k].splice(i,1);save();render();toast('Deleted')};window.zoom=src=>{q('#lightImg').src=src;q('#lightbox').classList.add('show')};qa('.modal .close').forEach(b=>b.onclick=()=>b.closest('.modal').classList.remove('show'));
function renderProfile(){let p=currentPlayer();if(!p)return;let socials=p.socials?.length?`<div class="ownSocials">${p.socials.map((x,i)=>`<a href="${x}" target="_blank">Social ${i+1} ↗</a>`).join('')}</div>`:'';q('#profileBody').innerHTML=`<article class="profileCard"><img class="profileAvatar" src="${p.image}"><h2>${mini(p.name)}</h2><div class="profileIdentity"><div class="identityItem"><span>Player Code</span><strong>${mini(playerCode(p.id))}</strong></div><div class="identityDivider"></div><div class="identityItem"><span>Jersey Number</span><strong>${p.jersey?'#'+p.jersey:'—'}</strong></div></div>${p.nick?`<p>${mini(p.nick)}</p>`:''}<div class="profileOfficial"><b>${mini(p.role)}</b><br>${mini(p.detail)}</div>${p.bio?`<p>${mini(p.bio)}</p>`:''}${socials}<div class="profileActions"><button class="secondary" onclick="chooseDP()">Photo</button><button class="secondary" onclick="selfEdit('jersey')">Jersey</button><button class="secondary" onclick="selfEdit('nick')">Nickname</button><button class="secondary" onclick="selfEdit('bio')">Bio</button><button class="secondary" onclick="selfEdit('socials')">Socials</button></div></article>`}
window.selfEdit=k=>{if(window.__rdmUrlKeyRole!=='player'&&!isAdmin())return;let p=currentPlayer();if(!p)return;if(typeof window.rdmUnifiedModal!=='function')return toast('Form loading');const cfg={jersey:['EDIT JERSEY NUMBER','JERSEY NUMBER','text',p.jersey||''],nick:['EDIT NICKNAME','NICKNAME','text',p.nick||''],bio:['EDIT BIO','BIO','textarea',p.bio||''],socials:['EDIT SOCIAL LINKS','MAX 3 SOCIAL LINKS • COMMA SEPARATED','textarea',(p.socials||[]).join(', ')],pass:['CHANGE PASSWORD','NEW PASSWORD','password','']}[k];if(!cfg)return;window.rdmUnifiedModal(cfg[0],[{name:'value',label:cfg[1],type:cfg[2],value:cfg[3]}],async d=>{const v=String(d.value||'').trim();if(k==='socials')p.socials=v.split(',').map(x=>x.trim()).filter(Boolean).slice(0,3);else if(k==='pass'){if(v.length<4){toast('Password too short');throw Error('VALIDATION')}p.pass=v}else p[k]=v;save();render();renderProfile();toast('Saved')})};
function renderAdmin(){
  const body=q('#adminBody');
  if(!body)return;
  if(window.__rdmUrlKeyRole!=='admin'||!isAdmin()){
    body.innerHTML='';
    return;
  }
  body.innerHTML=`<div class="adminSessionBar"><div><strong>Admin Session Active</strong><span>RDM Official Team Management</span></div><div class="adminSessionActions"><button type="button" class="primary" id="adminInstallAppBtn" data-rdm-install-btn>Install Admin App</button></div></div><div class="adminGrid"><button class="primary" data-add="match">+ Upcoming Match</button><button class="primary" onclick="addScorecard()">+ Scorecard / Result</button><button class="primary" data-add="news">+ News</button><button class="primary" data-add="player">+ Player</button><button class="primary" data-add="honour">+ Honour</button><button class="primary" data-add="gallery">+ Album Photo</button><button class="primary" data-add="social">+ Social</button><button class="primary" onclick="addAchievement()">+ Award / Achievement</button><button class="primary" onclick="addLineup()">+ Publish Playing XI</button><button class="primary" onclick="v6AddRecord()">+ Team Record</button><button class="primary" onclick="v6AddTournament()">+ Tournament</button><button class="primary" onclick="v6AddOpponent()">+ Opponent / H2H</button><button class="primary" onclick="document.querySelector('.brandAdminBox')?.scrollIntoView({behavior:'smooth',block:'start'})">Manage Logo &amp; Branding</button><button class="primary" onclick="document.getElementById('adminAccessLinksBox')?.scrollIntoView({behavior:'smooth',block:'start'})">Private Access Links</button></div>`;
  bindAdds();
}
function bindAdds(){qa('[data-add]').forEach(b=>b.onclick=()=>{if(!isAdmin())return toast('Admin only');openEdit(b.dataset.add)})}window.editPlayer=id=>{if(isAdmin())openEdit('editPlayer',D.players.find(x=>x.id===id))};window.editSocial=i=>{if(isAdmin())openEdit('editSocial',D.socials[i])};function fileInput(){return '<label>Image<input id="efile" type="file" accept="image/*"></label>'}
function openEdit(mode,obj=null){if(!isAdmin())return toast('Admin only');editMode=mode;editObj=obj;let h='',f='';if(mode==='match'){h='Add Match';f='<label>Opponent<input id="e1"></label><label>Date / Time<input id="e2"></label><label>Venue<input id="e3"></label><label>Detail / Result / POTM<textarea id="e4"></textarea></label>'}if(mode==='news'){h='Add News';f='<label>Title<input id="e1"></label><label>Announcement<textarea id="e2"></textarea></label>'}if(mode==='player'){h='Add Player';f='<label>Name<input id="e1"></label><label>Role<input id="e2"></label><label>Playing Detail<textarea id="e3"></textarea></label>'+fileInput()}if(mode==='honour'){h='Add Honour';f='<label>Year<input id="e1"></label><label>Result<input id="e2"></label><label>Tournament<input id="e3"></label>'+fileInput()}if(mode==='gallery'){h='Add Album Photo';f=fileInput()+'<label>Caption<input id="e1"></label><label>Album<select id="e2"><option>TEAM PHOTOS</option><option selected>MEMORIES</option><option>UPDATES</option></select></label>'}if(mode==='social'){h='Add Social';f='<label>Name<input id="e1"></label><label>Link<input id="e2" placeholder="https://..."></label><label>Icon<input id="e3" placeholder="↗"></label>'}if(mode==='editSocial'){h='Edit Social';f=`<label>Name<input id="e1" value="${obj.name||''}"></label><label>Link<input id="e2" value="${obj.url||''}" placeholder="https://..."></label><label>Icon<input id="e3" value="${obj.icon||''}"></label>${fileInput()}` }if(mode==='editPlayer'){h='Edit Player';f=`<label>Name<input id="e1" value="${obj.name}"></label><label>Role<input id="e2" value="${obj.role}"></label><label>Detail<textarea id="e3">${obj.detail}</textarea></label>${fileInput()}`}q('#editTitle').textContent=h;q('#editFields').innerHTML=f;q('#editor').classList.add('show')}
const readImage=()=>new Promise(r=>{let f=q('#efile')?.files?.[0];if(!f)return r('');let x=new FileReader;x.onload=()=>r(x.result);x.readAsDataURL(f)});q('#editForm').onsubmit=async e=>{e.preventDefault();if(!isAdmin())return;let img=await readImage(),v=id=>q('#'+id)?.value?.trim()||'';if(editMode==='match')D.matches.unshift({opponent:v('e1'),date:v('e2'),venue:v('e3'),note:v('e4')});if(editMode==='news')D.news.unshift({title:v('e1'),text:v('e2')});if(editMode==='player'){let id='RDM'+String(Math.max(0,...D.players.map(p=>+p.id.replace(/\D/g,'')))+1).padStart(3,'0');D.players.push({id,name:v('e1'),role:v('e2'),detail:v('e3'),pass:'',image:img||'assets/rdm-logo.png?v=7400',jersey:'',nick:'',bio:'',socials:[]})}if(editMode==='honour')D.honours.unshift({year:v('e1'),title:v('e2'),sub:v('e3'),image:img||'assets/rdm-logo.png?v=7400'});if(editMode==='gallery'){if(!img)return toast('Select an image');D.gallery.unshift({image:img,caption:v('e1'),album:v('e2')||'MEMORIES'})}if(editMode==='social')D.socials.push({name:v('e1'),url:v('e2'),icon:v('e3')||'↗'});if(editMode==='editSocial'){editObj.name=v('e1');editObj.url=v('e2');editObj.icon=v('e3')||editObj.icon||'↗';if(img)editObj.image=img}if(editMode==='editPlayer'){editObj.name=v('e1');editObj.role=v('e2');editObj.detail=v('e3');if(img)editObj.image=img}save();q('#editor').classList.remove('show');render();renderAdmin();toast('Saved')};
// Circular DP cropper
let crop={img:null,scale:1,x:0,y:0,drag:false,lx:0,ly:0};window.chooseDP=()=>{if(!isAdmin()&&window.__rdmUrlKeyRole!=='player')return;let inp=document.createElement('input');inp.type='file';inp.accept='image/*';inp.onchange=()=>{let f=inp.files[0];if(!f)return;let r=new FileReader;r.onload=()=>{let im=new Image;im.onload=()=>{crop={img:im,scale:1,x:0,y:0,drag:false,lx:0,ly:0};q('#cropZoom').value=1;q('#cropModal').classList.add('show');drawCrop()};im.src=r.result};r.readAsDataURL(f)};inp.click()};
function drawCrop(){let c=q('#cropCanvas'),ctx=c.getContext('2d'),im=crop.img;if(!im)return;ctx.clearRect(0,0,320,320);let base=Math.max(320/im.width,320/im.height),sc=base*crop.scale,w=im.width*sc,h=im.height*sc,x=(320-w)/2+crop.x,y=(320-h)/2+crop.y;ctx.save();ctx.beginPath();ctx.arc(160,160,158,0,Math.PI*2);ctx.clip();ctx.drawImage(im,x,y,w,h);ctx.restore()}
q('#cropZoom').oninput=e=>{crop.scale=+e.target.value;drawCrop()};let cc=q('#cropCanvas');cc.onpointerdown=e=>{crop.drag=true;crop.lx=e.clientX;crop.ly=e.clientY;cc.setPointerCapture(e.pointerId)};cc.onpointermove=e=>{if(!crop.drag)return;crop.x+=e.clientX-crop.lx;crop.y+=e.clientY-crop.ly;crop.lx=e.clientX;crop.ly=e.clientY;drawCrop()};cc.onpointerup=()=>crop.drag=false;q('#cropSave').onclick=()=>{if(!isAdmin()&&window.__rdmUrlKeyRole!=='player')return;let p=currentPlayer();if(!p||!crop.img)return;let c=q('#cropCanvas'),out=document.createElement('canvas');out.width=512;out.height=512;let ctx=out.getContext('2d');ctx.drawImage(c,0,0,512,512);p.image=out.toDataURL('image/jpeg',.9);save();q('#cropModal').classList.remove('show');render();renderProfile();toast('Photo saved')};
bindAdds();render();if(session){let valid=session.mode==='admin'||D.players.some(p=>p.id===session.playerId);if(!valid){session=null;localStorage.removeItem(SK)}updateAuthUI()}

if(typeof saveLater!=='undefined'&&saveLater)save();
