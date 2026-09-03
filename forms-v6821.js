/* RDM V6.8.21 — unified Edit-Player style modal forms */
(()=>{
/* V6.8.24 — real Unicode mini-font UI for every Add/Edit form */
const RDM_MINI_MAP={
'A':'ᴀ','B':'ʙ','C':'ᴄ','D':'ᴅ','E':'ᴇ','F':'ꜰ','G':'ɢ','H':'ʜ','I':'ɪ','J':'ᴊ','K':'ᴋ','L':'ʟ','M':'ᴍ','N':'ɴ','O':'ᴏ','P':'ᴘ','Q':'ǫ','R':'ʀ','S':'ꜱ','T':'ᴛ','U':'ᴜ','V':'ᴠ','W':'ᴡ','X':'x','Y':'ʏ','Z':'ᴢ'
};
function rdmMiniText(v){return String(v??'').replace(/[A-Za-z]/g,ch=>RDM_MINI_MAP[ch.toUpperCase()]||ch)}
function rdmMiniFormUI(root=document){
  const scopes=[];
  if(root.nodeType===1 && (root.matches?.('.dialog,.rdmUnifiedDialog,.rdmInlineForm') || root.querySelector?.('form'))) scopes.push(root);
  root.querySelectorAll?.('.dialog,.rdmUnifiedDialog,.rdmInlineForm').forEach(x=>scopes.push(x));
  scopes.forEach(scope=>{
    scope.querySelectorAll('h1,h2,h3,h4,legend,.rdmFormHead span').forEach(el=>{
      if(!el.dataset.rdmMiniDone){el.textContent=rdmMiniText(el.textContent);el.dataset.rdmMiniDone='1'}
    });
    scope.querySelectorAll('label').forEach(label=>{
      [...label.childNodes].forEach(n=>{
        if(n.nodeType===3 && n.nodeValue.trim()) n.nodeValue=rdmMiniText(n.nodeValue);
      });
    });
    scope.querySelectorAll('button').forEach(btn=>{
      if(btn.classList.contains('close') || btn.dataset.rdmMiniDone) return;
      [...btn.childNodes].forEach(n=>{if(n.nodeType===3 && n.nodeValue.trim()) n.nodeValue=rdmMiniText(n.nodeValue)});
      btn.dataset.rdmMiniDone='1';
    });
    scope.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(el=>{el.placeholder=rdmMiniText(el.placeholder)});
    scope.querySelectorAll('select option').forEach(opt=>{
      if(opt.dataset.rdmMiniDone) return;
      const raw=opt.hasAttribute('value')?opt.getAttribute('value'):opt.textContent;
      if(!opt.hasAttribute('value')) opt.setAttribute('value',raw);
      opt.textContent=rdmMiniText(opt.textContent);
      opt.dataset.rdmMiniDone='1';
    });
  });
}
window.rdmMiniText=rdmMiniText;
window.rdmMiniFormUI=rdmMiniFormUI;
const E=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const N=v=>Number(v||0)||0;
function field(f){const v=E(f.value??'');if(f.type==='textarea')return `<label>${f.label}<textarea name="${f.name}" rows="${f.rows||4}" ${f.required?'required':''}>${v}</textarea></label>`;if(f.type==='select')return `<label>${f.label}<select name="${f.name}">${(f.options||[]).map(o=>`<option ${String(o)===String(f.value)?'selected':''}>${E(o)}</option>`).join('')}</select></label>`;return `<label>${f.label}<input name="${f.name}" type="${f.type||'text'}" value="${v}" ${f.required?'required':''} ${f.placeholder?`placeholder="${E(f.placeholder)}"`:''}></label>`}
function modal(title,fields,onSave){document.getElementById('rdmUnifiedForm')?.remove();const m=document.createElement('div');m.id='rdmUnifiedForm';m.className='modal show rdmUnifiedModal';m.innerHTML=`<form class="dialog rdmUnifiedDialog"><button class="close" type="button">×</button><h2>${E(title)}</h2><div class="rdmUnifiedFields">${fields.map(field).join('')}</div><button class="primary wide" type="submit">SAVE</button></form>`;document.body.appendChild(m);rdmMiniFormUI(m);const dlg=m.querySelector('.dialog');m.querySelector('.close').onclick=()=>m.remove();m.addEventListener('click',e=>{if(e.target===m)m.remove()});m.querySelector('form').onsubmit=async e=>{e.preventDefault();const b=e.submitter;b.disabled=true;const d=Object.fromEntries(new FormData(e.currentTarget).entries());try{await onSave(d);m.remove()}catch(err){console.error(err);toast?.('SAVE FAILED');b.disabled=false}};requestAnimationFrame(()=>{dlg.scrollTop=0})}
window.rdmUnifiedModal=modal;
window.editStats=id=>{const s=(typeof XD!=='undefined'?XD.stats:[]).find(z=>z.playerId===id)||{};modal('EDIT PLAYER STATS',[['matches','MATCHES'],['runs','RUNS'],['wickets','WICKETS'],['highScore','HIGHEST SCORE'],['fours','FOURS'],['sixes','SIXES'],['fifties','50s'],['hundreds','100s'],['runOuts','RUN OUTS'],['strikeRate','STRIKE RATE'],['economy','ECONOMY'],['ballsFaced','BALLS FACED']].map(([name,label])=>({name,label,type:'number',value:s[name]||0})).concat([{name:'bestBowling',label:'BEST BOWLING',value:s.bestBowling||''},{name:'last5',label:'LAST 5 MATCH FORM',value:s.last5||''},{name:'season',label:'SEASON / YEAR',value:s.season||'2027'}]),async d=>{await rdmDB.collection('PlayerStats').doc(id).set({...d,playerId:id,matches:N(d.matches),runs:N(d.runs),wickets:N(d.wickets),highScore:N(d.highScore),fours:N(d.fours),sixes:N(d.sixes),fifties:N(d.fifties),hundreds:N(d.hundreds),runOuts:N(d.runOuts),strikeRate:N(d.strikeRate),economy:N(d.economy),ballsFaced:N(d.ballsFaced),updatedAt:rdmStamp()},{merge:true});await xload()})};
window.addAchievement=()=>modal('ADD ACHIEVEMENT',[{name:'title',label:'ACHIEVEMENT / AWARD',required:true},{name:'playerName',label:'PLAYER NAME',value:'TEAM'},{name:'detail',label:'DETAILS',type:'textarea'}],async d=>{await rdmDB.collection('Achievements').add({...d,createdMs:Date.now(),updatedAt:rdmStamp()});await xload()});
window.v6EditAchievement=id=>{const a=XD.achievements.find(x=>x._docId===id)||{};modal('EDIT ACHIEVEMENT',[{name:'title',label:'ACHIEVEMENT / AWARD',value:a.title,required:true},{name:'playerName',label:'PLAYER NAME',value:a.playerName||'TEAM'},{name:'detail',label:'DETAILS',type:'textarea',value:a.detail||''}],async d=>{await rdmDB.collection('Achievements').doc(id).set({...d,updatedAt:rdmStamp()},{merge:true});await xload()})};
window.setAvailability=id=>{const a=XD.availability.find(z=>z.playerId===id)||{};modal('PLAYER AVAILABILITY',[{name:'status',label:'STATUS',type:'select',value:a.status||'AVAILABLE',options:['AVAILABLE','UNAVAILABLE']}],async d=>{await rdmDB.collection('Availability').doc(id).set({playerId:id,status:d.status,updatedAt:rdmStamp()},{merge:true});await xload()})};
window.addLineup=()=>modal('PUBLISH PLAYING XI',[{name:'title',label:'TITLE',value:'PLAYING XI'},{name:'match',label:'MATCH / OPPONENT'},{name:'players',label:'11 PLAYER IDs',type:'textarea',value:'RDM001,RDM002,RDM003,RDM004,RDM005,RDM006,RDM007,RDM008,RDM009,RDM010,RDM011'},{name:'subs',label:'SUBSTITUTE PLAYER IDs',value:'RDM012,RDM013,RDM014,RDM015'}],async d=>{await rdmDB.collection('PlayingXI').add({title:d.title,match:d.match,players:d.players.split(',').map(x=>x.trim().toUpperCase()).filter(Boolean).slice(0,11),subs:d.subs.split(',').map(x=>x.trim().toUpperCase()).filter(Boolean),createdMs:Date.now(),updatedAt:rdmStamp()});await xload()});
window.addScorecard=()=>modal('ADD SCORECARD',[{name:'opponent',label:'OPPONENT',required:true},{name:'date',label:'DATE'},{name:'venue',label:'VENUE'},{name:'ourScore',label:'RDM SCORE'},{name:'oppScore',label:'OPPONENT SCORE'},{name:'result',label:'RESULT'},{name:'potm',label:'PLAYER OF THE MATCH'}],async d=>{await rdmDB.collection('Matches').add({...d,note:d.result,status:'RESULT',createdMs:Date.now(),updatedAt:rdmStamp()});await rdmLoadAll()});
window.v6AddTournament=id=>{const x=(V6.tournaments||[]).find(z=>z._docId===id)||{};modal(id?'EDIT TOURNAMENT':'ADD TOURNAMENT',[{name:'name',label:'TOURNAMENT NAME',value:x.name||'',required:true},{name:'season',label:'SEASON / YEAR',value:x.season||''},{name:'status',label:'STATUS',type:'select',value:x.status||'UPCOMING',options:['UPCOMING','ONGOING','COMPLETED']},{name:'position',label:'FINAL POSITION / STATUS',value:x.position||''},{name:'venue',label:'VENUE',value:x.venue||''},{name:'dates',label:'DATES',value:x.dates||''},{name:'organizer',label:'ORGANIZER',value:x.organizer||''},{name:'teams',label:'TOTAL TEAMS',type:'number',value:x.teams||0},{name:'matches',label:'RDM MATCHES',type:'number',value:x.matches||0},{name:'wins',label:'RDM WINS',type:'number',value:x.wins||0},{name:'losses',label:'RDM LOSSES',type:'number',value:x.losses||0},{name:'fixtures',label:'FIXTURES / POINTS / NOTES',type:'textarea',value:x.fixtures||'',rows:6}],async d=>{d.updatedAt=rdmStamp();d.createdMs=x.createdMs||Date.now();id?await rdmDB.collection('Tournaments').doc(id).set(d,{merge:true}):await rdmDB.collection('Tournaments').add(d);await v6load()})};
window.v6AddOpponent=id=>{const x=(V6.opponents||[]).find(z=>z._docId===id)||{};modal(id?'EDIT OPPONENT':'ADD OPPONENT',[{name:'name',label:'OPPONENT TEAM NAME',value:x.name||'',required:true},{name:'played',label:'MATCHES PLAYED',type:'number',value:x.played||0},{name:'won',label:'RDM WINS',type:'number',value:x.won||0},{name:'lost',label:'RDM LOSSES',type:'number',value:x.lost||0}],async d=>{d.played=N(d.played);d.won=N(d.won);d.lost=N(d.lost);d.updatedAt=rdmStamp();d.createdMs=x.createdMs||Date.now();id?await rdmDB.collection('Opponents').doc(id).set(d,{merge:true}):await rdmDB.collection('Opponents').add(d);await v6load()})};
window.v6EditMatch=id=>{const m=D.matches.find(x=>x._docId===id)||{};modal('EDIT MATCH SCORECARD',[{name:'tossWinner',label:'TOSS WINNER',value:m.tossWinner||''},{name:'tossDecision',label:'TOSS DECISION',value:m.tossDecision||''},{name:'batting',label:'BATTING SCORECARD',type:'textarea',value:m.batting||'',rows:6},{name:'bowling',label:'BOWLING SCORECARD',type:'textarea',value:m.bowling||'',rows:6},{name:'partnerships',label:'PARTNERSHIPS',type:'textarea',value:m.partnerships||''},{name:'fow',label:'FALL OF WICKETS',type:'textarea',value:m.fow||''},{name:'potm',label:'PLAYER OF THE MATCH',value:m.potm||''}],async d=>{await rdmDB.collection('Matches').doc(id).set({...d,updatedAt:rdmStamp()},{merge:true});await rdmLoadAll();setTimeout(v6render,100)})};

/* Keep legacy editor/profile/admin Add/Edit forms in the same mini-font UI. */
const rdmMiniObserver=new MutationObserver(muts=>{for(const m of muts){for(const n of m.addedNodes){if(n.nodeType===1) rdmMiniFormUI(n)}}});
rdmMiniObserver.observe(document.documentElement,{childList:true,subtree:true});
setTimeout(()=>rdmMiniFormUI(document),250);

setTimeout(()=>{[['addAchievement',addAchievement],['addLineup',addLineup],['addTournament',()=>v6AddTournament()],['addOpponent',()=>v6AddOpponent()],['addScorecard',addScorecard]].forEach(([id,fn])=>{const b=document.getElementById(id);if(b)b.onclick=e=>{e.stopPropagation();fn()}})},700);
})();

/* V6.8.28 — shared premium confirmation dialog for delete actions */
window.rdmConfirmModal=function(title,message,onConfirm){
  document.getElementById('rdmConfirmModal')?.remove();
  const m=document.createElement('div');
  m.id='rdmConfirmModal';m.className='modal show rdmUnifiedModal';
  m.innerHTML=`<div class="dialog rdmUnifiedDialog rdmConfirmDialog"><button class="close" type="button">×</button><h2>${window.rdmMiniText?.(title||'CONFIRM')||String(title||'CONFIRM')}</h2><p class="rdmConfirmText">${window.rdmMiniText?.(message||'ARE YOU SURE?')||String(message||'ARE YOU SURE?')}</p><div class="rdmConfirmActions"><button type="button" class="secondary" data-cancel>ᴄᴀɴᴄᴇʟ</button><button type="button" class="primary deleteConfirmBtn" data-confirm>ᴅᴇʟᴇᴛᴇ</button></div></div>`;
  document.body.appendChild(m);window.rdmMiniFormUI?.(m);
  const close=()=>m.remove();m.querySelector('.close').onclick=close;m.querySelector('[data-cancel]').onclick=close;
  m.addEventListener('click',e=>{if(e.target===m)close()});
  m.querySelector('[data-confirm]').onclick=async e=>{const b=e.currentTarget;b.disabled=true;try{await onConfirm();close()}catch(err){console.error(err);toast?.('ᴀᴄᴛɪᴏɴ ꜰᴀɪʟᴇᴅ');b.disabled=false}};
};
