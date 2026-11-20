/* RDM V6 Full Cricket Portal */
const V6COL={records:'TeamRecords',tournaments:'Tournaments',opponents:'Opponents'};
let V6={records:[],tournaments:[],opponents:[]},v6Season='ALL',v6RecordType='PLAYER';
const v6doc=d=>({...d.data(),_docId:d.id});
function v6HydrateLocal(){const ov=window.rdmGetOverrides?.();if(ov?.v6){['records','tournaments','opponents'].forEach(k=>{if(Array.isArray(ov.v6[k]))V6[k]=ov.v6[k];});}}
async function v6load(){try{const [r,t,o]=await Promise.all(Object.values(V6COL).map(c=>rdmDB.collection(c).get()));V6.records=r.docs.map(v6doc);V6.tournaments=t.docs.map(v6doc);V6.opponents=o.docs.map(v6doc);}catch(e){console.warn('Local fallback for v6',e?.code||e)}
  v6HydrateLocal();
  v6render();
}
function v6SaveOverride(key,arr){window.rdmSetOverrides?.(o=>{o.v6=o.v6||{};o.v6[key]=arr});}
window.v6SaveOverride=v6SaveOverride;
function v6render(){v6Home();v6Records();v6Tournaments();v6Search();setTimeout(v6EnhanceMatches,30)}
function rdmParseMatchDateTime(m){
  if(!m)return null;
  const rawDate=String(m.date||'').trim();
  if(!rawDate)return null;
  const rawTime=String(m.time||'').trim();
  const combined=rawTime&&!/\d{1,2}:\d{2}/.test(rawDate)?`${rawDate} ${rawTime}`:rawDate;
  const isoOnly=combined.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if(isoOnly)return new Date(Number(isoOnly[1]),Number(isoOnly[2])-1,Number(isoOnly[3]),9,0,0,0);
  const isoTime=combined.match(/^(\d{4})-(\d{1,2})-(\d{1,2})[T\s](\d{1,2}):(\d{2})(?::(\d{2}))?/);
  if(isoTime)return new Date(Number(isoTime[1]),Number(isoTime[2])-1,Number(isoTime[3]),Number(isoTime[4]),Number(isoTime[5]),Number(isoTime[6]||0),0);
  const dmy=combined.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})(?:\s+(\d{1,2}):(\d{2}))?/);
  if(dmy)return new Date(Number(dmy[3]),Number(dmy[2])-1,Number(dmy[1]),Number(dmy[4]||9),Number(dmy[5]||0),0,0);
  const parsed=new Date(combined);
  return isNaN(parsed.getTime())?null:parsed;
}
function rdmPad2(n){return String(Math.max(0,Math.floor(n))).padStart(2,'0')}
window.rdmTickHomeCountdown=function(){
  const cd=document.getElementById('homeCountdown');
  const note=document.getElementById('homeCountdownNote');
  if(!cd)return;
  const ts=Number(cd.dataset.targetMs||'0');
  if(!ts){
    cd.hidden=true;
    if(note){
      note.hidden=!cd.dataset.hasUpcoming;
      if(cd.dataset.hasUpcoming==='1')note.textContent='Schedule Date TBA';
    }
    return;
  }
  const left=ts-Date.now();
  if(left<=0){
    cd.hidden=true;
    if(note){note.hidden=false;note.textContent='Match Day / Started';}
    return;
  }
  const days=Math.floor(left/86400000);
  const hours=Math.floor((left%86400000)/3600000);
  const minutes=Math.floor((left%3600000)/60000);
  const dEl=document.getElementById('cdDays');
  const hEl=document.getElementById('cdHours');
  const mEl=document.getElementById('cdMinutes');
  if(dEl)dEl.textContent=rdmPad2(days);
  if(hEl)hEl.textContent=rdmPad2(hours);
  if(mEl)mEl.textContent=rdmPad2(minutes);
  cd.hidden=false;
  if(note)note.hidden=true;
};
function rdmClassifyMatchStatus(m){
  if(!m)return 'UPCOMING';
  const blob=[m.matchStatus,m.status,m.result,m.note].filter(Boolean).join(' ').toUpperCase();
  if(/\bLIVE\b/.test(String(m.matchStatus||m.status||'').toUpperCase()))return 'LIVE';
  if(/COMPLETED|RESULT|FINISHED|WON|LOST|DRAW|TIE|NO RESULT/.test(blob))return 'COMPLETED';
  if(/CANCEL/.test(blob))return 'CANCELLED';
  return 'UPCOMING';
}
window.rdmRenderHomeMatchHub=function(){
  const hub=document.getElementById('homeMatchHub');
  if(!hub)return;
  const matches=Array.isArray(window.D?.matches)?D.matches:[];
  const liveMatch=matches.find(x=>rdmClassifyMatchStatus(x)==='LIVE');
  const upcoming=liveMatch||matches.find(x=>rdmClassifyMatchStatus(x)==='UPCOMING');
  const recent=matches.find(x=>rdmClassifyMatchStatus(x)==='COMPLETED');
  const isLive=!!liveMatch;
  const target=isLive?null:rdmParseMatchDateTime(upcoming);
  const targetMs=target?target.getTime():0;
  const sig=JSON.stringify([
    isLive?'LIVE':'NEXT',
    upcoming?.opponent||'',upcoming?.date||'',upcoming?.time||'',upcoming?.venueName||upcoming?.venue||'',upcoming?.ourScore||'',upcoming?.oppScore||'',targetMs,
    recent?.opponent||'',recent?.ourScore||'',recent?.oppScore||'',recent?.result||recent?.note||recent?.status||''
  ]);
  if(hub.dataset.hubSig!==sig){
    hub.dataset.hubSig=sig;
    const upVenue=upcoming?.venueName||upcoming?.venue||'';
    const upMeta=[upcoming?.date,upcoming?.time,upVenue].filter(Boolean).map(mini).join(' · ');
    const upScore=isLive&&(upcoming?.ourScore||upcoming?.oppScore)?`RDM ${esc(upcoming.ourScore||'—')} vs ${esc(upcoming.oppScore||'—')}`:'';
    const recentScore=recent&&(recent.ourScore||recent.oppScore)?`RDM ${esc(recent.ourScore||'—')} · ${mini(recent.opponent||'Opp')} ${esc(recent.oppScore||'—')}`:'';
    const recentText=recent?[recentScore,mini(recent.result||recent.note||recent.status||'')].filter(Boolean).join(' — '):'Latest scorecard updates will appear here';
    hub.innerHTML=`<div class="miniMatch miniMatchNext">
      <span>${isLive?'Live Match':'Next Match'}</span>
      <b id="homeNextMatch">${upcoming?'RDM vs '+mini(upcoming.opponent||'Opponent'):'No upcoming match'}</b>
      ${upcoming?(upScore?`<small>${upScore}${upMeta?' · '+upMeta:''}</small>`:(upMeta?`<small>${upMeta}</small>`:'<small>Date &amp; venue to be confirmed</small>')):'<small>Check Match Centre for upcoming schedule</small>'}
      <div class="countdownTimer" id="homeCountdown" data-target-ms="${targetMs||''}" data-has-upcoming="${upcoming&&!isLive?'1':'0'}" hidden>
        <div class="cdUnit"><strong id="cdDays">00</strong><span>Days</span></div>
        <span class="cdSep" aria-hidden="true">:</span>
        <div class="cdUnit"><strong id="cdHours">00</strong><span>Hours</span></div>
        <span class="cdSep" aria-hidden="true">:</span>
        <div class="cdUnit"><strong id="cdMinutes">00</strong><span>Minutes</span></div>
      </div>
      <span class="countdown" id="homeCountdownNote" hidden></span>
      <button type="button" class="miniMatchLink" data-go="matches">Match Centre ›</button>
    </div>
    <div class="miniMatch miniMatchRecent">
      <span>Recent Result</span>
      <b class="${recent?'':'mutedTitle'}">${recent?'RDM vs '+mini(recent.opponent||'Opponent'):'No result added yet'}</b>
      <small>${recentText}</small>
      <button type="button" class="miniMatchLink" data-go="matches">View Scorecards ›</button>
    </div>`;
  }
  window.rdmTickHomeCountdown();
  const pin=(D.news||[]).find(x=>x.pinned);
  let b=document.getElementById('noticeBanner');
  if(pin){
    if(!b){b=document.createElement('div');b.id='noticeBanner';b.className='noticeBanner';hub.before(b);}
    const pinSig=JSON.stringify([pin.title||'',pin.text||'']);
    if(b.dataset.pinSig!==pinSig){
      b.dataset.pinSig=pinSig;
      b.innerHTML=`<div class="noticeBannerMain"><span class="pinTag">Team Notice</span><b>${mini(pin.title||'Team Update')}</b><div class="preserveLines">${mini(pin.text||'')}</div></div><button type="button" class="tinyBtn" data-go="news">Open News ›</button>`;
    }
  }else if(b){
    b.remove();
  }
};
function v6Home(){window.rdmRenderHomeMatchHub();}
function statFor(p){return XD.stats.find(s=>s.playerId===p.id)||{}}
function v6Records(){const sf=document.getElementById('seasonFilters');if(sf)sf.innerHTML='';const ranked=[...D.players].map(p=>({p,s:statFor(p)}));const runs=[...ranked].sort((a,b)=>xnum(b.s.runs)-xnum(a.s.runs))[0],wickets=[...ranked].sort((a,b)=>xnum(b.s.wickets)-xnum(a.s.wickets))[0];const awards={};XD.achievements.forEach(a=>{if(/player of the match|potm/i.test(a.title||''))awards[a.playerName]=(awards[a.playerName]||0)+1});const potm=Object.entries(awards).sort((a,b)=>b[1]-a[1])[0];const lb=document.getElementById('leaderboard');if(lb)lb.innerHTML=`<div class="leaderGrid"><div class="leaderCard">🏏 ᴛᴏᴘ ʀᴜɴ ꜱᴄᴏʀᴇʀ<b>${mini(runs?.p.name||'—')} • ${xnum(runs?.s.runs)}</b></div><div class="leaderCard">🎯 ᴛᴏᴘ ᴡɪᴄᴋᴇᴛ ᴛᴀᴋᴇʀ<b>${mini(wickets?.p.name||'—')} • ${xnum(wickets?.s.wickets)}</b></div><div class="leaderCard">🏅 ᴍᴏꜱᴛ ᴘᴏᴛᴍ<b>${mini(potm?.[0]||'—')} • ${potm?.[1]||0}</b></div></div>`;const arr=v6Season==='ALL'?V6.records:V6.records.filter(x=>x.season===v6Season);const rl=document.getElementById('recordList');if(rl)rl.innerHTML=arr.length?arr.map(x=>`<article class="recordCard"><span class="seasonTag">${mini(x.season||'ALL TIME')}</span><h3>${mini(x.title)}</h3><p>${mini(x.value||'')} ${x.player?`• ${mini(x.player)}`:''}</p>${rdmAdmin()?`<button class="tinyBtn" onclick="v6EditRecord('${x._docId}')">✎ ᴇᴅɪᴛ</button> <button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.records}','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ʀᴇᴄᴏʀᴅꜱ ʏᴇᴛ</div>'}
async function v6AddRecord(id){if(!rdmAdmin())return;const old=V6.records.find(x=>x._docId===id)||{};const title=xp('Record title (Highest Team Score / Biggest Win / Highest Partnership / Best Bowling)',old.title||'');if(!title)return;const value=xp('Record value',old.value||'');const player=xp('Player(s), optional',old.player||'');const season=xp('Season / Year',''+(old.season||new Date().getFullYear()));const data={title,value,player,season,updatedAt:rdmStamp(),createdMs:old.createdMs||Date.now()};id?await rdmDB.collection(V6COL.records).doc(id).set(data,{merge:true}):await rdmDB.collection(V6COL.records).add(data);await v6load()}
window.v6EditRecord=v6AddRecord;
function v6Tournaments(){const t=document.getElementById('tournamentList');if(t)t.innerHTML=V6.tournaments.length?V6.tournaments.map(x=>`<article class="card"><h3>🏆 ${mini(x.name)}</h3><p>${mini(x.season||'')} • ${mini(x.position||'')}</p><p class="preserveLines">${mini(x.fixtures||'')}</p>${rdmAdmin()?`<button class="tinyBtn" onclick="v6AddTournament('${x._docId}')">✎ ᴇᴅɪᴛ</button> <button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.tournaments}','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ᴛᴏᴜʀɴᴀᴍᴇɴᴛ ᴀᴅᴅᴇᴅ</div>';const o=document.getElementById('opponentList');if(o)o.innerHTML=V6.opponents.length?V6.opponents.map(x=>`<article class="card"><h3>${mini(x.name)}</h3><p>ʜ2ʜ • ${x.played||0} ᴍᴀᴛᴄʜᴇꜱ • ${x.won||0} ᴡᴏɴ • ${x.lost||0} ʟᴏꜱᴛ</p>${rdmAdmin()?`<button class="tinyBtn" onclick="v6AddOpponent('${x._docId}')">✎ ᴇᴅɪᴛ</button> <button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.opponents}','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ᴏᴘᴘᴏɴᴇɴᴛ ᴀᴅᴅᴇᴅ</div>'}
async function v6AddTournament(id){if(!rdmAdmin())return;const x=V6.tournaments.find(z=>z._docId===id)||{};const name=xp('Tournament name',x.name||'');if(!name)return;const season=xp('Season / Year',x.season||'');const position=xp('Final position / status',x.position||'');const fixtures=xp('Fixtures / points / notes (use new lines)',x.fixtures||'');const d={name,season,position,fixtures,updatedAt:rdmStamp(),createdMs:x.createdMs||Date.now()};id?await rdmDB.collection(V6COL.tournaments).doc(id).set(d,{merge:true}):await rdmDB.collection(V6COL.tournaments).add(d);await v6load()}
async function v6AddOpponent(id){if(!rdmAdmin())return;const x=V6.opponents.find(z=>z._docId===id)||{};const name=xp('Opponent team name',x.name||'');if(!name)return;const played=xnum(xp('Matches played',x.played||0)),won=xnum(xp('RDM wins',x.won||0)),lost=xnum(xp('RDM losses',x.lost||0));const d={name,played,won,lost,updatedAt:rdmStamp(),createdMs:x.createdMs||Date.now()};id?await rdmDB.collection(V6COL.opponents).doc(id).set(d,{merge:true}):await rdmDB.collection(V6COL.opponents).add(d);await v6load()}
async function v6Delete(c,id){if(!rdmAdmin())return;const run=async()=>{try{await rdmDB.collection(c).doc(id).delete()}catch{}const map={TeamRecords:'records',Tournaments:'tournaments',Opponents:'opponents'};const k=map[c];if(k){V6[k]=V6[k].filter(x=>x._docId!==id);v6SaveOverride(k,V6[k]);}v6render();window.rdmHardRenderTournaments?.();window.refreshAdminSectionManager?.();toast('Deleted')};if(typeof window.rdmConfirmModal==='function')return window.rdmConfirmModal('DELETE ITEM','THIS ACTION CANNOT BE UNDONE.',run);return run()}
function v6Search(){
  const box=document.getElementById('players');
  if(!box)return;
  let inp=document.getElementById('playerSearch');
  if(!inp){
    inp=document.createElement('input');
    inp.id='playerSearch';
    inp.className='searchPlayer';
    inp.placeholder='Search by player name, role, or ID...';
    box.before(inp);
  }
  const clearBtn=document.getElementById('squadSearchClear');
  const roleBox=document.getElementById('squadRoleFilters');
  const statusEl=document.getElementById('squadFilterStatus');
  const emptyEl=document.getElementById('squadEmpty');
  const resetBtn=document.getElementById('squadResetFilters');
  if(window.__rdmSquadFilterBound){
    window.applySquadFilter?.();
    return;
  }
  window.__rdmSquadFilterBound=true;
  let activeRole='ALL';
  const norm=v=>String(v||'').toLowerCase().replace(/[-_•·]+/g,' ').replace(/\s+/g,' ').trim();
  function applySquadFilter(){
    const cards=[...box.querySelectorAll('.player')];
    const rawQuery=inp.value.trim();
    const tokens=norm(rawQuery).split(' ').filter(Boolean);
    const roleNeedle=norm(activeRole);
    let shown=0;
    cards.forEach((el,i)=>{
      const p=(typeof D!=='undefined'&&Array.isArray(D.players))?D.players[i]:null;
      const code=(typeof playerCode==='function'&&p?.id)?playerCode(p.id):'';
      const roleBlob=norm([p?.role,el.querySelector('b')?.textContent,el.querySelector('.leadershipBadge')?.textContent].filter(Boolean).join(' '));
      const fullBlob=norm([p?.name,p?.role,p?.detail,p?.nick,p?.id,p?.jersey,code,el.querySelector('h3')?.textContent,el.querySelector('b')?.textContent].filter(Boolean).join(' '));
      const matchesRole=activeRole==='ALL'||roleBlob.includes(roleNeedle);
      const matchesQuery=!tokens.length||tokens.every(t=>fullBlob.includes(t));
      const visible=matchesRole&&matchesQuery;
      el.hidden=!visible;
      el.style.display=visible?'':'none';
      if(visible)shown++;
    });
    if(clearBtn)clearBtn.hidden=!rawQuery;
    if(roleBox){
      roleBox.querySelectorAll('[data-role]').forEach(btn=>{
        const on=btn.dataset.role===activeRole;
        btn.classList.toggle('active',on);
        btn.setAttribute('aria-pressed',String(on));
      });
    }
    if(statusEl){
      const total=cards.length;
      if(!total)statusEl.textContent='';
      else if(!rawQuery&&activeRole==='ALL')statusEl.textContent=`Showing all ${total} players`;
      else statusEl.textContent=`Showing ${shown} of ${total} players`;
    }
    if(emptyEl)emptyEl.hidden=!(cards.length>0&&shown===0);
  }
  window.applySquadFilter=applySquadFilter;
  inp.addEventListener('input',applySquadFilter);
  inp.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&inp.value){
      inp.value='';
      applySquadFilter();
    }
  });
  if(clearBtn){
    clearBtn.addEventListener('click',()=>{
      inp.value='';
      applySquadFilter();
      inp.focus();
    });
  }
  if(roleBox){
    roleBox.addEventListener('click',e=>{
      const btn=e.target.closest('[data-role]');
      if(!btn)return;
      activeRole=btn.dataset.role||'ALL';
      applySquadFilter();
    });
  }
  if(resetBtn){
    resetBtn.addEventListener('click',()=>{
      inp.value='';
      activeRole='ALL';
      applySquadFilter();
      inp.focus();
    });
  }
  new MutationObserver(()=>applySquadFilter()).observe(box,{childList:true});
  applySquadFilter();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',v6Search,{once:true});else v6Search();
let v6MatchFilter='ALL';
window.v6SetMatchStatusFilter=function(st){
  v6MatchFilter=st||'ALL';
  window.rdmEnhanceMatchCentre();
};
window.rdmEnhanceMatchCentre=function(){
  const list=document.getElementById('matchList');
  if(!list||typeof D==='undefined')return;
  const matches=Array.isArray(D.matches)?D.matches:[];
  const counts={ALL:matches.length,UPCOMING:0,LIVE:0,COMPLETED:0};
  let wins=0;
  matches.forEach(m=>{
    const st=rdmClassifyMatchStatus(m);
    if(st==='LIVE')counts.LIVE++;
    else if(st==='COMPLETED')counts.COMPLETED++;
    else counts.UPCOMING++;
    if(/\bRDM WON\b|\bWON\b/i.test([m.result,m.note].filter(Boolean).join(' ')))wins++;
  });
  const sumEl=document.getElementById('matchSummary');
  if(sumEl){
    if(matches.length){
      const winRate=counts.COMPLETED>0?Math.round((wins/counts.COMPLETED)*100)+'%':'—';
      sumEl.innerHTML=`<div class="matchSummaryItem"><strong>${matches.length}</strong><span>Total Fixtures</span></div><div class="matchSummaryItem"><strong>${wins}</strong><span>RDM Wins</span></div><div class="matchSummaryItem"><strong>${counts.UPCOMING}</strong><span>Upcoming</span></div><div class="matchSummaryItem"><strong>${winRate}</strong><span>Win Rate</span></div>`;
    }else{
      sumEl.innerHTML='';
    }
  }
  const fBar=document.getElementById('matchStatusFilters');
  if(fBar){
    if(matches.length){
      const tabs=[['ALL','All',counts.ALL],['UPCOMING','Upcoming',counts.UPCOMING],['LIVE','Live',counts.LIVE],['COMPLETED','Completed',counts.COMPLETED]];
      fBar.innerHTML=tabs.map(([k,lbl,cnt])=>`<button type="button" class="matchFilterBtn ${v6MatchFilter===k?'on':''}" data-match-filter="${k}" role="tab" aria-selected="${v6MatchFilter===k}">${lbl} (${cnt})</button>`).join('');
    }else{
      fBar.innerHTML='';
    }
  }
  const cards=[...list.querySelectorAll('.proDataCard, .scoreCard')];
  let shown=0;
  cards.forEach((el,i)=>{
    const m=matches[i];
    if(!m)return;
    const st=rdmClassifyMatchStatus(m);
    const badge=el.querySelector('.proStatus');
    if(badge)badge.setAttribute('data-status',st);
    el.dataset.matchStatus=st;
    const matchVisible=v6MatchFilter==='ALL'||(v6MatchFilter==='UPCOMING'&&st==='UPCOMING')||(v6MatchFilter==='LIVE'&&st==='LIVE')||(v6MatchFilter==='COMPLETED'&&st==='COMPLETED');
    el.hidden=!matchVisible;
    el.style.display=matchVisible?'':'none';
    if(matchVisible)shown++;

    const sig=JSON.stringify([m.tossWinner||'',m.tossDecision||'',m.potm||'',m.batting||'',m.bowling||'',m.partnerships||'',m.fow||'',m.venueName||m.venue||'']);
    if(el.dataset.rdmMatchSig===sig)return;
    el.dataset.rdmMatchSig=sig;
    el.querySelector('.matchDetails')?.remove();
    el.querySelector('.matchScorecardAccordion')?.remove();
    el.querySelector('.matchVenueMapRow')?.remove();

    const blocks=[];
    if(m.tossWinner&&m.tossWinner!=='NOT DECIDED'&&!el.classList.contains('proDataCard'))blocks.push(`<div class="matchScorecardBlock"><b>Toss</b>${mini(m.tossWinner)}${m.tossDecision?' · '+mini(m.tossDecision):''}</div>`);
    if(m.potm&&!el.classList.contains('proDataCard'))blocks.push(`<div class="matchScorecardBlock"><b>Player of the Match</b>${mini(m.potm)}</div>`);
    if(m.batting)blocks.push(`<div class="matchScorecardBlock preserveLines"><b>Batting Scorecard</b>${mini(m.batting)}</div>`);
    if(m.bowling)blocks.push(`<div class="matchScorecardBlock preserveLines"><b>Bowling Scorecard</b>${mini(m.bowling)}</div>`);
    if(m.partnerships)blocks.push(`<div class="matchScorecardBlock preserveLines"><b>Partnerships</b>${mini(m.partnerships)}</div>`);
    if(m.fow)blocks.push(`<div class="matchScorecardBlock preserveLines"><b>Fall of Wickets</b>${mini(m.fow)}</div>`);

    const actionsEl=el.querySelector('.proCardActions');
    if(blocks.length){
      const html=`<details class="matchScorecardAccordion"><summary>Full Scorecard &amp; Match Details</summary><div class="matchScorecardBody">${blocks.join('')}</div></details>`;
      if(actionsEl)actionsEl.insertAdjacentHTML('beforebegin',html);
      else el.insertAdjacentHTML('beforeend',html);
    }
    const venueText=m.venueName||m.venue||'';
    if(venueText&&!el.querySelector('.proMapCardBlock')){
      const mapRow=`<div class="matchVenueMapRow"><a class="tinyBtn mapBtn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueText)}">View Venue on Map ↗</a></div>`;
      if(actionsEl)actionsEl.insertAdjacentHTML('beforebegin',mapRow);
      else el.insertAdjacentHTML('beforeend',mapRow);
    }
  });
  const emptyEl=document.getElementById('matchFilterEmpty');
  if(emptyEl)emptyEl.hidden=!(matches.length>0&&shown===0);
};
function v6EnhanceMatches(){window.rdmEnhanceMatchCentre();}
async function v6EditMatch(id){if(!rdmAdmin())return;const m=D.matches.find(x=>x._docId===id);if(!m)return;const tossWinner=xp('Toss winner',m.tossWinner||'');const tossDecision=xp('Toss decision: Bat / Bowl',m.tossDecision||'');const batting=xp('Batting scorecard: Name Runs(Balls), 4s, 6s — one player per line',m.batting||'');const bowling=xp('Bowling: Name Overs-Runs-Wickets — one bowler per line',m.bowling||'');const partnerships=xp('Partnerships',m.partnerships||'');const fow=xp('Fall of wickets',m.fow||'');const potm=xp('Player of the Match',m.potm||'');await rdmDB.collection('Matches').doc(id).set({tossWinner,tossDecision,batting,bowling,partnerships,fow,potm,updatedAt:rdmStamp()},{merge:true});await rdmLoadAll();setTimeout(v6render,100)}
function v6Poster(id){const m=D.matches.find(x=>x._docId===id);if(!m)return;document.getElementById('v6PosterModal')?.remove();const box=document.createElement('div');box.id='v6PosterModal';box.className='modal show rdmUnifiedModal';box.innerHTML=`<div class="dialog rdmUnifiedDialog matchPosterDialog"><button class="close" type="button" aria-label="Close">×</button><div class="matchPosterCard"><span class="sectionKicker">Rehan Dominators Mahuawan</span><h2>RDM vs ${esc(m.opponent||'Opponent')}</h2><p class="posterMeta">${esc(m.date||'')} · ${esc(m.venue||'')}</p>${m.ourScore||m.oppScore?`<div class="posterScore">${esc(m.ourScore||'—')}${m.oppScore?' — '+esc(m.oppScore):''}</div>`:''}<p>${esc(m.note||'Upcoming Match')}</p><small>ONE TEAM • ONE DREAM • ONE DOMINATION</small></div></div>`;document.body.appendChild(box);box.querySelector('.close').onclick=()=>box.remove();box.addEventListener('click',e=>{if(e.target===box)box.remove()})}
window.v6AddTournament=v6AddTournament;window.v6AddOpponent=v6AddOpponent;window.v6AddRecord=v6AddRecord;window.v6Delete=v6Delete;window.v6EditMatch=v6EditMatch;window.v6Poster=v6Poster;
document.addEventListener('click',e=>{
  if(e.target?.id==='addRecord')v6AddRecord();
  if(e.target?.id==='addTournament')v6AddTournament();
  if(e.target?.id==='addOpponent')v6AddOpponent();
  const mf=e.target.closest?.('[data-match-filter]');
  if(mf){window.v6SetMatchStatusFilter(mf.dataset.matchFilter);return;}
  if(e.target?.id==='matchResetFilterBtn'){window.v6SetMatchStatusFilter('ALL');return;}
});
const bt=document.getElementById('backToTop');window.addEventListener('scroll',()=>bt?.classList.toggle('show',scrollY>500));bt?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
setTimeout(()=>{
  v6load();
  window.rdmRenderHomeMatchHub?.();
  const ml=document.getElementById('matchList');
  if(ml&&!window.__rdmMatchListObs){
    window.__rdmMatchListObs=true;
    new MutationObserver(()=>queueMicrotask(()=>window.rdmEnhanceMatchCentre())).observe(ml,{childList:true});
  }
  window.rdmEnhanceMatchCentre();
},400);
if(!window.__rdmCountdownTimerStarted){
  window.__rdmCountdownTimerStarted=true;
  setInterval(()=>window.rdmTickHomeCountdown?.(),1000);
}
// V6 finishing touches: captain badges, player form, maps, admin edit controls
function v6Decorate(){document.querySelectorAll('#players .player').forEach((el,i)=>{const p=D.players[i];if(!p)return;const n=(p.name||'').toUpperCase();if((n==='REHAN AKHTAR'||n==='SAIF ALI')&&!el.querySelector('.captainBadge')&&!el.querySelector('.leadershipBadge')){const h=el.querySelector('h3')||el.querySelector('b');h?.insertAdjacentHTML('beforeend',` <span class="captainBadge">${n==='REHAN AKHTAR'?'CAPTAIN':'VICE-CAPTAIN'}</span>`)}});window.rdmEnhanceMatchCentre();}
const v6oldRenderStats=window.renderStats;window.renderStats=function(){v6oldRenderStats();document.querySelectorAll('#statsList .statCard').forEach((el,i)=>{const p=D.players[i],s=statFor(p);if(s.last5&&!el.querySelector('.playerForm'))el.insertAdjacentHTML('beforeend',`<p class="playerForm">Last 5 · ${mini(s.last5)}</p>`)})};
window.editStats=async function(id){if(!rdmAdmin())return;const s=XD.stats.find(z=>z.playerId===id)||{};const matches=xp('Matches',s.matches||0);if(matches===null)return;const runs=xp('Runs',s.runs||0),wickets=xp('Wickets',s.wickets||0),highScore=xp('Highest Score',s.highScore||0),bestBowling=xp('Best Bowling',s.bestBowling||''),last5=xp('Last 5 match form / scores',s.last5||''),season=xp('Season / Year',s.season||'2027');await rdmDB.collection(XCOL.stats).doc(id).set({playerId:id,matches:xnum(matches),runs:xnum(runs),wickets:xnum(wickets),highScore:xnum(highScore),bestBowling:bestBowling||'',last5:last5||'',season:season||'',updatedAt:rdmStamp()},{merge:true});await xload()};
window.renderAchievements=function(){const el=document.getElementById('achievementList');if(!el)return;el.innerHTML=XD.achievements.length?XD.achievements.map(a=>`<article class="card"><h3>🏆 ${mini(a.title)}</h3><p>${mini(a.playerName||'TEAM')} • ${mini(a.detail||'')}</p>${rdmAdmin()?`<button class="tinyBtn" onclick="v6EditAchievement('${a._docId}')">✎ ᴇᴅɪᴛ</button> <button class="tinyBtn deleteBtn" onclick="xdelete('${XCOL.achievements}','${a._docId}')">ᴅᴇʟᴇᴛᴇ</button>`:''}</article>`).join(''):'<div class="empty">No achievement added yet</div>'};
async function v6EditAchievement(id){const a=XD.achievements.find(x=>x._docId===id);if(!a||!rdmAdmin())return;const title=xp('Achievement / Award',a.title);if(!title)return;const playerName=xp('Player Name (or TEAM)',a.playerName||'TEAM'),detail=xp('Details',a.detail||'');await rdmDB.collection(XCOL.achievements).doc(id).set({title,playerName,detail,updatedAt:rdmStamp()},{merge:true});await xload()}window.v6EditAchievement=v6EditAchievement;
setInterval(v6Decorate,1200);

// V6.1 COMPLETE FEATURE VISIBILITY + ADMIN CONTROL FIX
function v61Home(){
  window.rdmRenderHomeMatchHub?.();
}
function v61MatchDetails(){
  window.rdmEnhanceMatchCentre();
}
let _rdmCurrentAdminManager=null;
function admEsc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function buildAdminManagerHtml(type){
  const listWrap=(rows,empty)=>`<div class="adminManagerList">${rows.length?rows.join(''):`<div class="empty">${empty}</div>`}</div>`;
  if(type==='matches'){
    const arr=(typeof D!=='undefined'&&Array.isArray(D.matches))?D.matches:[];
    return {
      title:'Manage Matches & Scorecards',
      sub:'Add, edit scorecards, posters, toss, FOW, or delete matches',
      top:`<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="rdmProAddMatch()">＋ Upcoming Match</button><button type="button" class="secondary" onclick="addScorecard()">＋ Scorecard / Result</button></div>`,
      body:listWrap(arr.map((m,i)=>`<div class="adminManagerRow"><div class="adminManagerMeta"><strong>RDM vs ${mini(m.opponent||'Opponent')}</strong><small>${admEsc([m.matchStatus||m.status||'MATCH',m.date,m.venueName||m.venue].filter(Boolean).join(' · '))}${m.ourScore||m.oppScore?` · ${admEsc(m.ourScore||'—')} vs ${admEsc(m.oppScore||'—')}`:''}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="rdmProAddMatch('${admEsc(m._docId)}')">✎ Edit</button><button type="button" class="tinyBtn" onclick="addScorecard('${admEsc(m._docId)}')">📊 Scorecard</button><button type="button" class="tinyBtn" onclick="v6EditMatch('${admEsc(m._docId)}')">📝 Batting/Bowling</button><button type="button" class="tinyBtn" onclick="v6Poster('${admEsc(m._docId)}')">▣ Poster</button><button type="button" class="tinyBtn deleteBtn" onclick="removeItem('matches',${i})">🗑 Delete</button></div></div>`),'No matches added yet')
    };
  }
  if(type==='news'){
    const arr=(typeof D!=='undefined'&&Array.isArray(D.news))?[...D.news].sort((a,b)=>(b.pinned?1:0)-(a.pinned?1:0)||(b.createdMs||0)-(a.createdMs||0)):[];
    return {
      title:'Manage News & Announcements',
      sub:'Create, edit, pin to Home, or remove announcements',
      top:`<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="openEdit('news')">＋ Add News</button></div>`,
      body:listWrap(arr.map(n=>`<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${n.pinned?'📌 ':''}${mini(n.title||'Announcement')}</strong><small>${admEsc(String(n.text||'').slice(0,110))}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="editNews('${admEsc(n._docId)}')">✎ Edit</button><button type="button" class="tinyBtn" onclick="togglePin('${admEsc(n._docId)}',${!n.pinned})">${n.pinned?'Unpin':'📌 Pin'}</button><button type="button" class="tinyBtn deleteBtn" onclick="xdelete('News','${admEsc(n._docId)}')">🗑 Delete</button></div></div>`),'No news added yet')
    };
  }
  if(type==='updates'){
    const arr=(typeof RDM_UPDATES!=='undefined'&&Array.isArray(RDM_UPDATES))?RDM_UPDATES:[];
    return {
      title:'Manage Official Updates',
      sub:'Publish updates, pin important notices, edit or delete entries',
      top:`<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="addUpdate()">＋ Add Update</button></div>`,
      body:listWrap(arr.map(u=>`<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${u.pinned?'📌 ':''}${mini(u.title||'Update')}</strong><small>${admEsc([u.category||'WEBSITE',u.date].filter(Boolean).join(' · '))}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="editUpdate('${admEsc(u._docId)}')">✎ Edit</button><button type="button" class="tinyBtn" onclick="pinUpdate('${admEsc(u._docId)}',${!u.pinned})">${u.pinned?'Unpin':'📌 Pin'}</button><button type="button" class="tinyBtn deleteBtn" onclick="deleteUpdate('${admEsc(u._docId)}')">🗑 Delete</button></div></div>`),'No updates yet')
    };
  }
  if(type==='stats'){
    const players=(typeof D!=='undefined'&&Array.isArray(D.players))?D.players:[];
    const stats=(typeof XD!=='undefined'&&Array.isArray(XD.stats))?XD.stats:[];
    return {
      title:'Player Stats & Ranking',
      sub:'Update individual career stats for every squad member',
      top:'',
      body:listWrap(players.map(p=>{const s=stats.find(z=>z.playerId===p.id)||{};return `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(p.name)}</strong><small>${admEsc(p.id)} · Matches: ${Number(s.matches||0)} · Runs: ${Number(s.runs||0)} · Wickets: ${Number(s.wickets||0)}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="editStats('${admEsc(p.id)}')">📊 Edit Stats</button></div></div>`}),'No players found')
    };
  }
  if(type==='achievements'){
    const arr=(typeof XD!=='undefined'&&Array.isArray(XD.achievements))?XD.achievements:[];
    return {
      title:'Manage Awards & Achievements',
      sub:'Add POTM, trophies, and player milestones',
      top:`<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="addAchievement()">＋ Add Achievement</button></div>`,
      body:listWrap(arr.map(a=>`<div class="adminManagerRow"><div class="adminManagerMeta"><strong>🏆 ${mini(a.title||'Award')}</strong><small>${admEsc([a.playerName||'TEAM',a.detail].filter(Boolean).join(' · '))}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="v6EditAchievement('${admEsc(a._docId)}')">✎ Edit</button><button type="button" class="tinyBtn deleteBtn" onclick="xdelete('Achievements','${admEsc(a._docId)}')">🗑 Delete</button></div></div>`),'No achievements yet')
    };
  }
  if(type==='records'){
    const arr=(typeof V6!=='undefined'&&Array.isArray(V6.records))?V6.records:[];
    return {
      title:'Manage Club Records',
      sub:'Manage Player, Team, and Partnership records',
      top:`<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="v63AddPlayerRecord()">＋ Player Record</button><button type="button" class="secondary" onclick="v63AddTeamRecord()">＋ Team Record</button><button type="button" class="secondary" onclick="v63AddPartnershipRecord()">＋ Partnership</button></div>`,
      body:listWrap(arr.map(r=>{const fn=v63Type(r)==='PARTNERSHIP'?'v63AddPartnershipRecord':(v63Type(r)==='PLAYER'?'v63AddPlayerRecord':'v63AddTeamRecord');return `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(r.title||'Record')}</strong><small>${admEsc([v63Type(r),r.value,r.player,r.season].filter(Boolean).join(' · '))}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="${fn}('${admEsc(r._docId)}')">✎ Edit</button><button type="button" class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.records}','${admEsc(r._docId)}')">🗑 Delete</button></div></div>`}),'No manual records yet')
    };
  }
  if(type==='tournaments'){
    const arr=(typeof V6!=='undefined'&&Array.isArray(V6.tournaments))?V6.tournaments:[];
    return {
      title:'Manage Tournaments & Fixtures',
      sub:'Add, update standings, dates, venue maps, or delete tournaments',
      top:`<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="v6AddTournament()">＋ Add Tournament</button></div>`,
      body:listWrap(arr.map(t=>`<div class="adminManagerRow"><div class="adminManagerMeta"><strong>🏆 ${mini(t.name||'Tournament')}</strong><small>${admEsc([t.season,t.status,t.position].filter(Boolean).join(' · '))}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="v6AddTournament('${admEsc(t._docId)}')">✎ Edit</button><button type="button" class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.tournaments}','${admEsc(t._docId)}')">🗑 Delete</button></div></div>`),'No tournaments yet')
    };
  }
  if(type==='opponents'){
    const arr=(typeof V6!=='undefined'&&Array.isArray(V6.opponents))?V6.opponents:[];
    return {
      title:'Manage Opponents & Head-to-Head',
      sub:'Track played, won, and lost records against rivals',
      top:`<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="v6AddOpponent()">＋ Add Opponent</button></div>`,
      body:listWrap(arr.map(o=>`<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(o.name||'Opponent')}</strong><small>${o.played||0} Played · ${o.won||0} Won · ${o.lost||0} Lost</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="v6AddOpponent('${admEsc(o._docId)}')">✎ Edit</button><button type="button" class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.opponents}','${admEsc(o._docId)}')">🗑 Delete</button></div></div>`),'No opponents yet')
    };
  }
  if(type==='lineup'){
    const arr=(typeof XD!=='undefined'&&Array.isArray(XD.lineups))?XD.lineups:[];
    return {
      title:'Manage Playing XI & Substitutes',
      sub:'Publish starting 11, swap players with substitutes, or remove lineups',
      top:`<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="addLineup()">＋ Publish Playing XI</button></div>`,
      body:listWrap(arr.map(l=>`<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(l.title||'PLAYING XI')}</strong><small>${admEsc([l.match,(l.players||[]).length+' XI',(l.subs||[]).length+' Subs'].filter(Boolean).join(' · '))}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="rdmSwapLineupPlayer('${admEsc(l._docId)}')">⇄ Swap XI / Sub</button><button type="button" class="tinyBtn deleteBtn" onclick="xdelete('PlayingXI','${admEsc(l._docId)}')">🗑 Delete</button></div></div>`),'No Playing XI published yet')
    };
  }
  if(type==='availability'){
    const players=(typeof D!=='undefined'&&Array.isArray(D.players))?D.players:[];
    const av=(typeof XD!=='undefined'&&Array.isArray(XD.availability))?XD.availability:[];
    return {
      title:'Manage Player Availability',
      sub:'Update matchday availability for each squad player',
      top:'',
      body:listWrap(players.map(p=>{const a=av.find(z=>z.playerId===p.id);const st=a?.status||'NOT SET';return `<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(p.name)}</strong><small>${admEsc(p.id)} · Status: ${admEsc(st)}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="setAvailability('${admEsc(p.id)}')">✓ Change Status</button></div></div>`}),'No players found')
    };
  }
  if(type==='honours'){
    const arr=(typeof D!=='undefined'&&Array.isArray(D.honours))?D.honours:[];
    return {
      title:'Manage Club Honours & Trophies',
      sub:'Add or remove club silverware',
      top:`<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="openEdit('honour')">＋ Add Honour</button></div>`,
      body:listWrap(arr.map((h,i)=>`<div class="adminManagerRow"><div class="adminManagerMeta"><strong>🏆 ${admEsc(h.year)} · ${mini(h.title||'Honour')}</strong><small>${admEsc(h.sub||'')}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn deleteBtn" onclick="removeItem('honours',${i})">🗑 Delete</button></div></div>`),'No honours added yet')
    };
  }
  if(type==='gallery'){
    const arr=(typeof D!=='undefined'&&Array.isArray(D.gallery))?D.gallery:[];
    return {
      title:'Manage Club Gallery',
      sub:'Upload new photos, change albums, or delete items',
      top:`<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="openEdit('gallery')">＋ Add Gallery Photo</button></div>`,
      body:listWrap(arr.map(g=>`<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(g.caption||'RDM MEMORY')}</strong><small>${admEsc(g.album||'MEMORIES')}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="moveGalleryPhoto?.('${admEsc(g._docId)}','${admEsc((g.album||'MEMORIES').toUpperCase())}')">↪ Move</button><button type="button" class="tinyBtn deleteBtn" onclick="xdelete('Gallery','${admEsc(g._docId)}')">🗑 Delete</button></div></div>`),'No gallery photos yet')
    };
  }
  if(type==='socials'){
    const arr=(typeof D!=='undefined'&&Array.isArray(D.socials))?D.socials:[];
    return {
      title:'Manage Official Social Links',
      sub:'Add, edit, or delete club social media channels',
      top:`<div class="adminManagerTopBtns"><button type="button" class="primary" onclick="openEdit('social')">＋ Add Social Link</button></div>`,
      body:listWrap(arr.map((s,i)=>`<div class="adminManagerRow"><div class="adminManagerMeta"><strong>${mini(s.displayName||s.name||'Social')}</strong><small>${admEsc(s.url||'Link not set')}</small></div><div class="adminManagerBtns"><button type="button" class="tinyBtn" onclick="editSocial(${i})">✎ Edit</button><button type="button" class="tinyBtn deleteBtn" onclick="removeItem('socials',${i})">🗑 Delete</button></div></div>`),'No social links yet')
    };
  }
  return null;
}
window.openAdminSectionManager=function(type){
  if(!rdmAdmin())return toast?.('Admin only');
  const spec=buildAdminManagerHtml(type);
  if(!spec)return;
  _rdmCurrentAdminManager=type;
  let m=document.getElementById('rdmAdminManagerModal');
  if(!m){
    m=document.createElement('div');
    m.id='rdmAdminManagerModal';
    m.className='modal show rdmUnifiedModal';
    document.body.appendChild(m);
  }
  m.className='modal show rdmUnifiedModal';
  m.innerHTML=`<div class="dialog publicDialog rdmAdminManagerDialog" role="dialog" aria-modal="true"><button class="close" type="button" aria-label="Close">×</button><div class="adminManagerHead"><span class="sectionKicker">Admin Manager</span><h2>${spec.title}</h2><p>${spec.sub}</p></div>${spec.top}${spec.body}</div>`;
  const close=()=>{_rdmCurrentAdminManager=null;m.remove()};
  m.querySelector('.close').onclick=close;
  m.onclick=e=>{if(e.target===m)close()};
};
window.refreshAdminSectionManager=function(){
  if(!_rdmCurrentAdminManager)return;
  if(!document.getElementById('rdmAdminManagerModal')?.classList.contains('show')){_rdmCurrentAdminManager=null;return}
  window.openAdminSectionManager(_rdmCurrentAdminManager);
};

function v61Admin(force=false){
  if(!rdmAdmin())return;
  const a=document.getElementById('adminBody'); if(!a)return;
  if(!force&&a.dataset.v61Ready==='1')return;
  a.dataset.v61Ready='1';
  a.innerHTML=`<div class="adminSessionBar"><div><strong>Admin Direct Link Active</strong><span>RDM Official Club Management Portal</span></div><div class="adminSessionActions"><button type="button" class="tinyBtn" id="adminInstallAppBtn" data-rdm-install-btn>📲 Install Admin App</button></div></div><div class="adminGrid">
  <button type="button" class="primary" data-add="match">＋ Upcoming Match</button>
  <button type="button" class="primary" onclick="addScorecard()">＋ Scorecard / Result</button>
  <button type="button" class="primary" onclick="openAdminSectionManager('matches')">✎ Manage Matches &amp; Scorecards</button>
  <button type="button" class="primary" data-add="news">＋ News / Notification</button>
  <button type="button" class="primary" onclick="openAdminSectionManager('news')">📌 Manage News &amp; Pin</button>
  <button type="button" class="primary" data-add="player">＋ Add Player</button>
  <button type="button" class="primary" onclick="openAdminSectionManager('stats')">✎ Player Stats &amp; Ranking</button>
  <button type="button" class="primary" onclick="addAchievement()">＋ Award / Achievement</button>
  <button type="button" class="primary" onclick="openAdminSectionManager('achievements')">🏆 Manage Achievements</button>
  <button type="button" class="primary" onclick="v63AddPlayerRecord()">＋ Player Record</button>
  <button type="button" class="primary" onclick="v63AddTeamRecord()">＋ Team Record</button>
  <button type="button" class="primary" onclick="v63AddPartnershipRecord()">＋ Partnership Record</button>
  <button type="button" class="primary" onclick="openAdminSectionManager('records')">📊 Manage Club Records</button>
  <button type="button" class="primary" onclick="v6AddTournament()">＋ Tournament / Fixtures</button>
  <button type="button" class="primary" onclick="openAdminSectionManager('tournaments')">🏆 Manage Tournaments</button>
  <button type="button" class="primary" onclick="v6AddOpponent()">＋ Opponent / H2H</button>
  <button type="button" class="primary" onclick="openAdminSectionManager('opponents')">⚔ Manage Opponents / H2H</button>
  <button type="button" class="primary" onclick="addLineup()">＋ Publish Playing XI</button>
  <button type="button" class="primary" onclick="openAdminSectionManager('lineup')">🏏 Manage Playing XI &amp; Swap</button>
  <button type="button" class="primary" onclick="openAdminSectionManager('availability')">✎ Player Availability</button>
  <button type="button" class="primary" data-add="honour">＋ Honour</button>
  <button type="button" class="primary" onclick="openAdminSectionManager('honours')">🎖 Manage Honours</button>
  <button type="button" class="primary" data-add="gallery">＋ Gallery Photo</button>
  <button type="button" class="primary" onclick="openAdminSectionManager('gallery')">🖼 Manage Gallery</button>
  <button type="button" class="primary" data-add="social">＋ Social Link</button>
  <button type="button" class="primary" onclick="openAdminSectionManager('socials')">🔗 Manage Socials</button>
  <button type="button" class="primary manageUpdatesBtn" onclick="openAdminSectionManager('updates')">＋ Manage Updates</button>
  <button type="button" class="primary" onclick="document.querySelector('.brandAdminBox')?.scrollIntoView({behavior:'smooth',block:'start'})">Manage Logo &amp; Branding</button>
  <button type="button" class="primary" onclick="document.getElementById('adminAccessLinksBox')?.scrollIntoView({behavior:'smooth',block:'start'})">Private Access Links</button>
  </div><p class="adminHint">Dedicated Admin-Only Portal. Public visitors cannot edit anything, and all club management runs directly inside this panel.</p>`;
  if(typeof bindAdds==='function')bindAdds();
  window.rdmInjectPlayerManager?.();
  window.rdmInjectBrandAdmin?.();
  window.rdmSyncInstallButtons?.();
}
const v61OldRenderAdmin=window.renderAdmin;window.renderAdmin=function(){const a=document.getElementById('adminBody');if(a)delete a.dataset.v61Ready;if(v61OldRenderAdmin)v61OldRenderAdmin();if(rdmAdmin())setTimeout(()=>v61Admin(true),0)};
setInterval(()=>{v61Home();v61MatchDetails();if(document.body.classList.contains('admin')&&document.getElementById('admin')?.classList.contains('active'))v61Admin(false)},1500);

/* V6.2 - structured Records & Tournaments */
function v62Modal(title, fields, values, onSave){
 if(!rdmAdmin())return toast?.('Admin only');
 let m=document.getElementById('v62Modal'); if(m)m.remove();
 m=document.createElement('div');m.id='v62Modal';m.className='modal show';
 const html=fields.map(f=>{const val=esc(values[f.k]??'');if(f.type==='textarea')return `<label class="${f.full?'full':''}">${f.label}<textarea data-k="${f.k}" placeholder="${esc(f.ph||'')}">${val}</textarea></label>`;if(f.type==='select')return `<label class="${f.full?'full':''}">${f.label}<select data-k="${f.k}">${f.options.map(o=>`<option ${String(values[f.k]||'')===o?'selected':''}>${esc(o)}</option>`).join('')}</select></label>`;return `<label class="${f.full?'full':''}">${f.label}<input data-k="${f.k}" type="${f.type||'text'}" value="${val}" placeholder="${esc(f.ph||'')}"></label>`}).join('');
 m.innerHTML=`<form class="dialog"><button class="close" type="button">×</button><h2>${title}</h2><div class="v62Grid">${html}</div><button class="primary wide">ꜱᴀᴠᴇ</button></form>`;document.body.appendChild(m);m.querySelector('.close').onclick=()=>m.remove();m.querySelector('form').onsubmit=async e=>{e.preventDefault();const d={};m.querySelectorAll('[data-k]').forEach(x=>d[x.dataset.k]=x.value.trim());try{await onSave(d);m.remove()}catch(err){console.error(err);toast('ꜱᴀᴠᴇ ꜰᴀɪʟᴇᴅ')}}
}
function v6Records(){
 const sf=document.getElementById('seasonFilters');if(sf)sf.innerHTML='';
 const stats=v6Season==='ALL'?XD.stats:XD.stats.filter(s=>String(s.season||'')===String(v6Season));const ranked=D.players.map(p=>({p,s:stats.filter(s=>s.playerId===p.id).reduce((a,s)=>({runs:xnum(a.runs)+xnum(s.runs),wickets:xnum(a.wickets)+xnum(s.wickets)}),{})}));const runs=[...ranked].sort((a,b)=>xnum(b.s.runs)-xnum(a.s.runs))[0],wickets=[...ranked].sort((a,b)=>xnum(b.s.wickets)-xnum(a.s.wickets))[0];const awards={};XD.achievements.filter(a=>v6Season==='ALL'||String(a.season||'')===String(v6Season)).forEach(a=>{if(/player of the match|potm/i.test(a.title||''))awards[a.playerName]=(awards[a.playerName]||0)+1});const potm=Object.entries(awards).sort((a,b)=>b[1]-a[1])[0];const lb=document.getElementById('leaderboard');if(lb)lb.innerHTML=`<div class="leaderGrid"><div class="leaderCard">🏏 ᴛᴏᴘ ʀᴜɴ ꜱᴄᴏʀᴇʀ<b>${mini(runs?.p.name||'—')} • ${xnum(runs?.s.runs)}</b></div><div class="leaderCard">🎯 ᴛᴏᴘ ᴡɪᴄᴋᴇᴛ ᴛᴀᴋᴇʀ<b>${mini(wickets?.p.name||'—')} • ${xnum(wickets?.s.wickets)}</b></div><div class="leaderCard">🏅 ᴍᴏꜱᴛ ᴘᴏᴛᴍ<b>${mini(potm?.[0]||'—')} • ${potm?.[1]||0}</b></div></div>`;
 const arr=(v6Season==='ALL'?V6.records:V6.records.filter(x=>String(x.season)===String(v6Season))).sort((a,b)=>(b.createdMs||0)-(a.createdMs||0));const rl=document.getElementById('recordList');if(rl)rl.innerHTML=arr.length?arr.map(x=>`<article class="recordCard"><div class="v62Meta"><span class="seasonTag">${mini(x.season||'ALL TIME')}</span>${x.category?`<span class="v62Chip">${mini(x.category)}</span>`:''}</div><h3>${mini(x.title)}</h3><div class="recordValue">${mini(x.value||'—')}</div>${x.player?`<p>👤 ${mini(x.player)}</p>`:''}${x.opponent?`<p>🆚 ${mini(x.opponent)}</p>`:''}${x.date?`<p>📅 ${mini(x.date)}</p>`:''}${x.note?`<p class="v62Note">${mini(x.note)}</p>`:''}${rdmAdmin()?`<div class="v62Actions"><button class="tinyBtn" onclick="v6AddRecord('${x._docId}')">✎ ᴇᴅɪᴛ</button><button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.records}','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button></div>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ʀᴇᴄᴏʀᴅꜱ ʏᴇᴛ</div>';
}
async function v6AddRecord(id){if(!rdmAdmin())return;const x=V6.records.find(z=>z._docId===id)||{};v62Modal(id?'ᴇᴅɪᴛ ᴛᴇᴀᴍ ʀᴇᴄᴏʀᴅ':'ᴀᴅᴅ ᴛᴇᴀᴍ ʀᴇᴄᴏʀᴅ',[{k:'category',label:'ᴄᴀᴛᴇɢᴏʀʏ',type:'select',options:['TEAM','BATTING','BOWLING','PARTNERSHIP','FIELDING','OTHER']},{k:'season',label:'ꜱᴇᴀꜱᴏɴ / ʏᴇᴀʀ',ph:'2027'},{k:'title',label:'ʀᴇᴄᴏʀᴅ ɴᴀᴍᴇ',ph:'Highest Team Score',full:true},{k:'value',label:'ʀᴇᴄᴏʀᴅ ᴠᴀʟᴜᴇ',ph:'185/6'},{k:'player',label:'ᴘʟᴀʏᴇʀ / ʜᴏʟᴅᴇʀ',ph:'Rehan Akhtar'},{k:'opponent',label:'ᴠꜱ ᴏᴘᴘᴏɴᴇɴᴛ',ph:'Team name'},{k:'date',label:'ᴅᴀᴛᴇ',type:'date'},{k:'note',label:'ɴᴏᴛᴇ',type:'textarea',full:true,ph:'Optional details'}],x,async d=>{if(!d.title||!d.value){toast('ʀᴇᴄᴏʀᴅ ɴᴀᴍᴇ & ᴠᴀʟᴜᴇ ʀᴇǫᴜɪʀᴇᴅ');throw Error('required')}d.updatedAt=rdmStamp();d.createdMs=x.createdMs||Date.now();id?await rdmDB.collection(V6COL.records).doc(id).set(d,{merge:true}):await rdmDB.collection(V6COL.records).add(d);await v6load();toast('ʀᴇᴄᴏʀᴅ ꜱᴀᴠᴇᴅ')})}
function v6Tournaments(){const t=document.getElementById('tournamentList');if(t)t.innerHTML=V6.tournaments.length?V6.tournaments.sort((a,b)=>String(b.season||'').localeCompare(String(a.season||''))).map(x=>`<article class="tournamentCard"><h3>🏆 ${mini(x.name)}</h3><div class="v62Meta"><span class="seasonTag">${mini(x.season||'')}</span>${x.status?`<span class="v62Chip">${mini(x.status)}</span>`:''}${x.position?`<span class="v62Chip">${mini(x.position)}</span>`:''}</div>${x.venue?`<p>📍 ${mini(x.venue)}</p>`:''}${x.dates?`<p>📅 ${mini(x.dates)}</p>`:''}${x.organizer?`<p>🏏 ${mini(x.organizer)}</p>`:''}<p>${x.teams?mini(x.teams)+' ᴛᴇᴀᴍꜱ • ':''}${x.matches?mini(x.matches)+' ᴍᴀᴛᴄʜᴇꜱ • ':''}${x.wins?mini(x.wins)+' ᴡɪɴꜱ • ':''}${x.losses?mini(x.losses)+' ʟᴏꜱꜱᴇꜱ':''}</p>${x.fixtures?`<p class="v62Note">${mini(x.fixtures)}</p>`:''}${rdmAdmin()?`<div class="v62Actions"><button class="tinyBtn" onclick="v6AddTournament('${x._docId}')">✎ ᴇᴅɪᴛ</button><button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.tournaments}','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button></div>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ᴛᴏᴜʀɴᴀᴍᴇɴᴛ ᴀᴅᴅᴇᴅ</div>';const o=document.getElementById('opponentList');if(o)o.innerHTML=V6.opponents.length?V6.opponents.map(x=>`<article class="card"><h3>${mini(x.name)}</h3><p>ʜ2ʜ • ${x.played||0} ᴍᴀᴛᴄʜᴇꜱ • ${x.won||0} ᴡᴏɴ • ${x.lost||0} ʟᴏꜱᴛ</p>${rdmAdmin()?`<button class="tinyBtn" onclick="v6AddOpponent('${x._docId}')">✎ ᴇᴅɪᴛ</button> <button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.opponents}','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button>`:''}</article>`).join(''):'<div class="empty">ɴᴏ ᴏᴘᴘᴏɴᴇɴᴛ ᴀᴅᴅᴇᴅ</div>'}
async function v6AddTournament(id){if(!rdmAdmin())return;const x=V6.tournaments.find(z=>z._docId===id)||{};v62Modal(id?'ᴇᴅɪᴛ ᴛᴏᴜʀɴᴀᴍᴇɴᴛ':'ᴀᴅᴅ ᴛᴏᴜʀɴᴀᴍᴇɴᴛ',[{k:'name',label:'ᴛᴏᴜʀɴᴀᴍᴇɴᴛ ɴᴀᴍᴇ',ph:'Mahuawan Premier League 3',full:true},{k:'season',label:'ꜱᴇᴀꜱᴏɴ / ʏᴇᴀʀ',ph:'2027'},{k:'status',label:'ꜱᴛᴀᴛᴜꜱ',type:'select',options:['UPCOMING','ONGOING','COMPLETED']},{k:'position',label:'ʀᴅᴍ ᴘᴏꜱɪᴛɪᴏɴ',ph:'Winner / Runner-Up / Group Stage'},{k:'venue',label:'ᴠᴇɴᴜᴇ',ph:'Ground / Village'},{k:'dates',label:'ᴅᴀᴛᴇꜱ',ph:'10 Jan – 15 Jan 2027'},{k:'organizer',label:'ᴏʀɢᴀɴɪᴢᴇʀ',ph:'Organizer name'},{k:'teams',label:'ᴛᴏᴛᴀʟ ᴛᴇᴀᴍꜱ',type:'number'},{k:'matches',label:'ʀᴅᴍ ᴍᴀᴛᴄʜᴇꜱ',type:'number'},{k:'wins',label:'ʀᴅᴍ ᴡɪɴꜱ',type:'number'},{k:'losses',label:'ʀᴅᴍ ʟᴏꜱꜱᴇꜱ',type:'number'},{k:'fixtures',label:'ꜰɪxᴛᴜʀᴇꜱ / ᴘᴏɪɴᴛꜱ / ɴᴏᴛᴇꜱ',type:'textarea',full:true,ph:'Match 1: RDM vs Team A\nMatch 2: RDM vs Team B\nPoints: 4'}],x,async d=>{if(!d.name||!d.season){toast('ɴᴀᴍᴇ & ꜱᴇᴀꜱᴏɴ ʀᴇǫᴜɪʀᴇᴅ');throw Error('required')}d.updatedAt=rdmStamp();d.createdMs=x.createdMs||Date.now();id?await rdmDB.collection(V6COL.tournaments).doc(id).set(d,{merge:true}):await rdmDB.collection(V6COL.tournaments).add(d);await v6load();toast('ᴛᴏᴜʀɴᴀᴍᴇɴᴛ ꜱᴀᴠᴇᴅ')})}
window.v6AddRecord=v6AddRecord;window.v6EditRecord=v6AddRecord;window.v6AddTournament=v6AddTournament;

/* V6.3 - separated Player / Team / Partnership / Tournament records */
function v63Type(x){if(x.recordType)return x.recordType;const c=String(x.category||'').toUpperCase();if(c==='PARTNERSHIP')return 'PARTNERSHIP';if(['BATTING','BOWLING','FIELDING','PLAYER'].includes(c))return 'PLAYER';return 'TEAM'}
function v63Date(d){if(!d)return '';const a=String(d).split('-');if(a.length!==3)return d;const m=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];return `${Number(a[2])} ${m[Number(a[1])-1]||a[1]} ${a[0]}`}
function v63Card(x,editFn){return `<article class="recordCard"><div class="v62Meta"><span class="seasonTag">${mini(x.season||'ALL TIME')}</span>${x.category?`<span class="v62Chip">${mini(x.category)}</span>`:''}</div><h3>${mini(x.title||'Record')}</h3><div class="recordValue">${mini(x.value||'—')}</div>${x.player?`<p>👤 ${mini(x.player)}</p>`:''}${x.player2?`<p>👥 ${mini(x.player2)}</p>`:''}${x.wicket?`<p>🏏 ${mini(x.wicket)}</p>`:''}${x.opponent?`<p>🆚 ${mini(x.opponent)}</p>`:''}${x.date?`<p>📅 ${mini(v63Date(x.date))}</p>`:''}${x.note?`<p class="v62Note">${mini(x.note)}</p>`:''}${rdmAdmin()?`<div class="v62Actions"><button class="tinyBtn" onclick="${editFn}('${x._docId}')">✎ ᴇᴅɪᴛ</button><button class="tinyBtn deleteBtn" onclick="v6Delete('${V6COL.records}','${x._docId}')">🗑 ᴅᴇʟᴇᴛᴇ</button></div>`:''}</article>`}
function v63List(id,arr,editFn,empty){const el=document.getElementById(id);if(el)el.innerHTML=arr.length?arr.map(x=>v63Card(x,editFn)).join(''):`<div class="empty">${empty}</div>`}
function v6SetSeason(season){v6Season=season||'ALL';v6Records();}
window.v6SetSeason=v6SetSeason;
function v6Records(){
 const tabs=[['PLAYER','Player Records'],['TEAM','Team Records'],['PARTNERSHIP','Partnerships'],['LEADERBOARD','Leaderboard & Stats']];
 const rf=document.getElementById('recordTypeFilters');
 if(rf)rf.innerHTML=tabs.map(([k,lbl])=>`<button type="button" class="tinyBtn recordTypeBtn ${v6RecordType===k?'on':''}" onclick="v6SetRecordType('${k}')">${lbl}</button>`).join('');
 const seasons=[...new Set([...XD.stats.map(s=>s.season),...V6.records.map(r=>r.season)].map(s=>String(s||'').trim()).filter(Boolean))].sort((a,b)=>b.localeCompare(a));
 const sf=document.getElementById('seasonFilters');
 if(sf){
   sf.innerHTML=seasons.length?[`<button type="button" class="seasonFilterBtn ${v6Season==='ALL'?'on':''}" onclick="v6SetSeason('ALL')">All Seasons</button>`,...seasons.map(y=>`<button type="button" class="seasonFilterBtn ${String(v6Season)===y?'on':''}" onclick="v6SetSeason('${esc(y)}')">${esc(y)}</button>`)].join(''):'';
 }
 const stats=v6Season==='ALL'?XD.stats:XD.stats.filter(s=>String(s.season||'')===String(v6Season));
 const total=p=>stats.filter(s=>s.playerId===p.id).reduce((a,z)=>{['matches','runs','wickets','highScore','fours','sixes','fifties','hundreds','runOuts'].forEach(k=>a[k]=(k==='highScore'?Math.max(xnum(a[k]),xnum(z[k])):xnum(a[k])+xnum(z[k])));a.strikeRate=Math.max(xnum(a.strikeRate),xnum(z.strikeRate));a.economy=a.economy?Math.min(xnum(a.economy),xnum(z.economy)):xnum(z.economy);a.bestBowling=z.bestBowling||a.bestBowling||'';return a},{matches:0,runs:0,wickets:0,highScore:0,fours:0,sixes:0,fifties:0,hundreds:0,runOuts:0,strikeRate:0,economy:0,bestBowling:''});
 const ranked=D.players.map(p=>({p,s:total(p)}));const best=(k,low=false)=>[...ranked].filter(x=>x.s[k]>0).sort((a,b)=>low?a.s[k]-b.s[k]:b.s[k]-a.s[k])[0];
 const awards={};XD.achievements.forEach(a=>{if(/player of the match|potm/i.test(a.title||''))awards[a.playerName]=(awards[a.playerName]||0)+1});const potm=Object.entries(awards).sort((a,b)=>b[1]-a[1])[0];
 const lb=document.getElementById('leaderboard');
 if(lb){
   const items=[['🏏','Top Run Scorer',best('runs'),'runs'],['🎯','Top Wicket Taker',best('wickets'),'wickets'],['💥','Most Sixes',best('sixes'),'sixes'],['4️⃣','Most Fours',best('fours'),'fours']];
   lb.innerHTML=`<div class="leaderGrid">${items.map(([i,t,x,k])=>`<div class="leaderCard">${i} ${t}<b>${x?mini(x.p.name)+' · '+x.s[k]:'No stats recorded yet'}</b></div>`).join('')}<div class="leaderCard">🏅 Most POTM<b>${potm?mini(potm[0])+' · '+potm[1]:'No POTM awards yet'}</b></div></div>`;
 }
 const tblWrap=document.getElementById('squadLeaderboardTableWrap');
 if(tblWrap){
   const rows=[...ranked].sort((a,b)=>(b.s.runs-a.s.runs)||(b.s.wickets-a.s.wickets)||(b.s.matches-a.s.matches));
   const hasAnyStats=rows.some(r=>r.s.matches>0||r.s.runs>0||r.s.wickets>0);
   tblWrap.innerHTML=`<div class="squadLeaderboardTitleRow"><h3>Squad Career Statistics</h3><span>${hasAnyStats?'Tap any player row to view full profile':'Stats update automatically when player figures are logged'}</span></div><div class="statsTableScroll"><table class="statsLeaderboardTable"><thead><tr><th>#</th><th>Player</th><th>Mat</th><th>Runs</th><th>HS</th><th>SR</th><th>4s/6s</th><th>Wkts</th><th>Econ</th></tr></thead><tbody>${rows.map((r,idx)=>`<tr onclick="openPlayerProfile?.('${esc(r.p.id)}')" title="View ${esc(mini(r.p.name))} profile"><td class="statsRankNum">${idx+1}</td><td class="statsPlayerCell">${mini(r.p.name)}<small>${mini(r.p.role)}</small></td><td>${r.s.matches}</td><td class="statsHighlightVal">${r.s.runs}</td><td>${r.s.highScore}</td><td>${r.s.strikeRate||'—'}</td><td>${r.s.fours}/${r.s.sixes}</td><td class="statsHighlightVal">${r.s.wickets}</td><td>${r.s.economy||'—'}</td></tr>`).join('')}</tbody></table></div>`;
 }
 const autoDefs=[['Highest Individual Score','highScore',' Runs'],['Most Runs','runs',' Runs'],['Most Wickets','wickets',' Wickets'],['Most Sixes','sixes',' Sixes'],['Most Fours','fours',' Fours'],['Most 50s','fifties',''],['Most 100s','hundreds',''],['Most Run Outs','runOuts',''],['Best Strike Rate','strikeRate',''],['Best Economy','economy','',true]];
 const pr=document.getElementById('playerRecordList');if(pr)pr.innerHTML=autoDefs.map(([title,k,suf,low])=>{const x=best(k,!!low);return `<article class="recordCard"><span class="v62Chip">Auto Stats</span><h3>${mini(title)}</h3><div class="recordValue">${x?mini(String(x.s[k])+suf):'—'}</div><p>👤 ${x?mini(x.p.name):'No stats recorded yet'}</p></article>`}).join('');
 const all=(v6Season==='ALL'?V6.records:V6.records.filter(x=>String(x.season||'')===String(v6Season))).sort((a,b)=>(b.createdMs||0)-(a.createdMs||0));
 v63List('teamRecordList',all.filter(x=>v63Type(x)==='TEAM'),'v63AddTeamRecord','No team records added yet');
 v63List('partnershipRecordList',all.filter(x=>v63Type(x)==='PARTNERSHIP'),'v63AddPartnershipRecord','No partnership records added yet');
 const map={PLAYER:'playerRecordSection',TEAM:'teamRecordSection',PARTNERSHIP:'partnershipRecordSection',LEADERBOARD:'leaderboardSection'};Object.entries(map).forEach(([t,id])=>{const el=document.getElementById(id);if(el)el.hidden=v6RecordType!==t});
}
function v6SetRecordType(t){v6RecordType=t;if(t==='TOURNAMENT'){document.querySelector('[data-page="tournaments"]')?.click();setTimeout(()=>document.getElementById('tournamentList')?.scrollIntoView({behavior:'smooth',block:'start'}),80);return}if(t==='H2H'){document.querySelector('[data-page="tournaments"]')?.click();setTimeout(()=>document.getElementById('opponentList')?.scrollIntoView({behavior:'smooth',block:'start'}),80);return}v6Records()}
async function v63Save(id,x,d,type){if(!rdmAdmin())return toast?.('Admin only');if(!d.title||!d.value){toast('Record name & value required');throw Error('required')}d.recordType=type;d.createdMs=x.createdMs||Date.now();const rec={...x,...d,_docId:id||'loc_'+Date.now()};if(id)Object.assign(x,rec);else V6.records.unshift(rec);v6SaveOverride('records',V6.records);try{id?await rdmDB.collection(V6COL.records).doc(id).set({...d,createdMs:rec.createdMs,updatedAt:rdmStamp()},{merge:true}):await rdmDB.collection(V6COL.records).add({...d,createdMs:rec.createdMs,updatedAt:rdmStamp()})}catch{}v6render();window.refreshAdminSectionManager?.();toast('Record saved')}
function v63AddPlayerRecord(id){if(!rdmAdmin())return;const x=V6.records.find(z=>z._docId===id)||{};v62Modal(id?'ᴇᴅɪᴛ ᴘʟᴀʏᴇʀ ʀᴇᴄᴏʀᴅ':'ᴀᴅᴅ ᴘʟᴀʏᴇʀ ʀᴇᴄᴏʀᴅ',[{k:'category',label:'ᴛʏᴘᴇ',type:'select',options:['BATTING','BOWLING','FIELDING','ALL-ROUNDER','OTHER']},{k:'season',label:'ꜱᴇᴀꜱᴏɴ / ʏᴇᴀʀ',ph:'2027'},{k:'player',label:'ᴘʟᴀʏᴇʀ',ph:'Rehan Akhtar'},{k:'title',label:'ʀᴇᴄᴏʀᴅ ɴᴀᴍᴇ',ph:'Highest Individual Score',full:true},{k:'value',label:'ʀᴇᴄᴏʀᴅ ᴠᴀʟᴜᴇ',ph:'85 Runs'},{k:'opponent',label:'ᴠꜱ ᴏᴘᴘᴏɴᴇɴᴛ',ph:'Team name'},{k:'date',label:'ᴅᴀᴛᴇ',type:'date'},{k:'note',label:'ɴᴏᴛᴇ',type:'textarea',full:true}],x,d=>v63Save(id,x,d,'PLAYER'))}
function v63AddTeamRecord(id){if(!rdmAdmin())return;const x=V6.records.find(z=>z._docId===id)||{};v62Modal(id?'ᴇᴅɪᴛ ᴛᴇᴀᴍ ʀᴇᴄᴏʀᴅ':'ᴀᴅᴅ ᴛᴇᴀᴍ ʀᴇᴄᴏʀᴅ',[{k:'category',label:'ᴛʏᴘᴇ',type:'select',options:['TEAM','CHASE','WIN','STREAK','OTHER']},{k:'season',label:'ꜱᴇᴀꜱᴏɴ / ʏᴇᴀʀ',ph:'2027'},{k:'title',label:'ʀᴇᴄᴏʀᴅ ɴᴀᴍᴇ',ph:'Highest Team Score',full:true},{k:'value',label:'ʀᴇᴄᴏʀᴅ ᴠᴀʟᴜᴇ',ph:'185/6'},{k:'opponent',label:'ᴠꜱ ᴏᴘᴘᴏɴᴇɴᴛ',ph:'Team name'},{k:'date',label:'ᴅᴀᴛᴇ',type:'date'},{k:'note',label:'ɴᴏᴛᴇ',type:'textarea',full:true}],x,d=>v63Save(id,x,d,'TEAM'))}
function v63AddPartnershipRecord(id){if(!rdmAdmin())return;const x=V6.records.find(z=>z._docId===id)||{};v62Modal(id?'ᴇᴅɪᴛ ᴘᴀʀᴛɴᴇʀꜱʜɪᴘ':'ᴀᴅᴅ ᴘᴀʀᴛɴᴇʀꜱʜɪᴘ ʀᴇᴄᴏʀᴅ',[{k:'season',label:'ꜱᴇᴀꜱᴏɴ / ʏᴇᴀʀ',ph:'2027'},{k:'player',label:'ᴘʟᴀʏᴇʀ 1',ph:'Rehan Akhtar'},{k:'player2',label:'ᴘʟᴀʏᴇʀ 2',ph:'Saif Ali'},{k:'wicket',label:'ᴡɪᴄᴋᴇᴛ',ph:'1st Wicket'},{k:'title',label:'ʀᴇᴄᴏʀᴅ ɴᴀᴍᴇ',ph:'Highest Partnership',full:true},{k:'value',label:'ʀᴜɴꜱ',ph:'120 Runs'},{k:'opponent',label:'ᴠꜱ ᴏᴘᴘᴏɴᴇɴᴛ',ph:'Team name'},{k:'date',label:'ᴅᴀᴛᴇ',type:'date'},{k:'note',label:'ɴᴏᴛᴇ',type:'textarea',full:true}],x,d=>{d.category='PARTNERSHIP';return v63Save(id,x,d,'PARTNERSHIP')})}
window.v63AddPlayerRecord=v63AddPlayerRecord;window.v63AddTeamRecord=v63AddTeamRecord;window.v63AddPartnershipRecord=v63AddPartnershipRecord;

(function rdmPublicHashRouter(){
  function syncFromHash(){
    if((window.__rdmUrlKeyRole||'public')!=='public')return;
    const h=String(location.hash||'').replace(/^#/,'').trim().toLowerCase();
    if(!h||h.startsWith('player='))return;
    if(typeof VALID_PUBLIC_PAGES!=='undefined'&&VALID_PUBLIC_PAGES.has(h)&&typeof go==='function'){
      go(h,{updateHash:false});
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',syncFromHash,{once:true});
  else syncFromHash();
  window.addEventListener('hashchange',syncFromHash);
})();
