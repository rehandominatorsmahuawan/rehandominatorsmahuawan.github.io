(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const w={appName:"RDM Official",orgName:"REHAN DOMINATORS MAHUAWAN",shortName:"RDM",location:"MAHUAWAN • GOPALGANJ • BIHAR",locationLabel:"Mahuawan, Gopalganj, Bihar",founded:"2024",motto:"ONE TEAM • ONE DREAM • ONE DOMINATION",tagline:"YOUR TEAM. YOUR PRIDE. YOUR GAME.",subtitle:"THE HOME OF REHAN DOMINATORS MAHUAWAN",captainContactUrl:"https://wa.me/918521254605",captainPhoneDisplay:"+91 85212 54605",appVersion:"v1.0",apkDownloadUrl:"https://github.com/RehanDominatorsMahuawan/RehanDominatorsMahuawan.github.io/releases/latest/download/RDM-Official.apk",apkReleasesUrl:"https://github.com/RehanDominatorsMahuawan/RehanDominatorsMahuawan.github.io/releases/latest",websiteUrl:"https://rehandominatorsmahuawan.github.io/",logoPath:"assets/rdm-logo.png",heroImagePath:"src/assets/images/hero_cricket_stadium_1794890926411.jpg",heritageImagePath:"src/assets/images/club_heritage_banner_1794890926814.jpg"},de={RDM001:"RA08",RDM003:"SA-V",RDM006:"SO-WK",RDM004:"AKA",RDM002:"ASI",RDM007:"WSM",RDM008:"JBD",RDM010:"GLM",RDM011:"SHA57",RDM005:"SAL02",RDM012:"LKY",RDM016:"KLF",RDM009:"SKH",RDM013:"ABS",RDM014:"SBA",RDM015:"ZSN",RDM017:"JVD"},we={RDM001:{nick:"The Skipper",bio:"Captain and all-rounder who leads from the front with discipline, confidence and team-first cricket."},RDM002:{nick:"The Anchor",bio:"A reliable top-order batsman who values a solid start, smart shot selection and steady runs."},RDM003:{nick:"The Game Changer",bio:"Vice-captain and all-rounder who brings flexibility, energy and impact through every phase of the game."},RDM004:{nick:"The Attacker",bio:"An aggressive strike opener and fast-bowling all-rounder built to set the tempo and deliver under pressure."},RDM005:{nick:"The Finisher",bio:"A calm middle-order batsman who backs his shots and looks to finish innings with confidence."},RDM006:{nick:"The Gloveman",bio:"The team main wicket-keeper and a versatile batsman who adds energy, awareness and balance to the team."},RDM007:{nick:"The Complete Package",bio:"A top-order all-rounder who can contribute with bat and ball across every phase of the match."},RDM008:{nick:"The Middle Rock",bio:"A dependable middle-order batsman focused on building partnerships and keeping the innings moving."},RDM009:{nick:"The Closer",bio:"A finisher who enjoys pressure moments and looks to give the team a strong end to the innings."},RDM010:{nick:"The Impact Player",bio:"A useful all-rounder and finisher who can change momentum with quick runs and emergency bowling."},RDM011:{nick:"The Middle Order Maestro",bio:"A right-handed middle-order batsman who adds stability and depth to the batting line-up."},RDM012:{nick:"The All-Rounder",bio:"A versatile all-rounder who can contribute with bat or ball when the team needs him."},RDM013:{nick:"The Utility Ace",bio:"A flexible all-rounder who can finish with the bat and handle important middle or death overs."},RDM014:{nick:"The Power Finisher",bio:"A batsman with a finisher role who looks to add quick runs and impact."},RDM015:{nick:"The Last-Over Hitter",bio:"A finisher who plays with intent in high-pressure batting moments."},RDM016:{nick:"The Lefty",bio:"A left-handed middle-order batsman who adds variety and balance to the batting line-up."},RDM017:{nick:"The Finisher",bio:"A right-handed batsman who specialises in the finisher role and looks to close innings strongly."}},X=[["RDM001","Rehan Akhtar","Captain • All-Rounder","Right-Handed • Right-Arm Fast • Middle Order • Middle Overs","08"],["RDM003","Saif Ali","Vice-Captain • All-Rounder","Both-Handed • Fast • Non-Striker Opener • All Phases",""],["RDM006","Soaib Akhtar","Wicket-Keeper • Batsman","Right-Handed • Left-Arm Fast • Top Order • Finisher",""],["RDM004","Akib Ansari","All-Rounder","Right-Handed • Fast • Striker Opener • Middle + Death",""],["RDM002","Asif Ali","Batsman","Right-Handed • Top Order",""],["RDM007","Wasim","All-Rounder","Right-Handed • Fast • Top Order • All Phases",""],["RDM008","Jubed","Batsman","Right-Handed • Middle Order",""],["RDM010","Gulam","All-Rounder","Right-Handed • Fast • Finisher • Emergency Bowling",""],["RDM011","Sahil Ansari","Batsman","Right-Handed • Middle Order","57"],["RDM005","Sahil Ali","Batsman","Right-Handed • Middle Order • Finisher","02"],["RDM012","Lucky","All-Rounder","Right-Handed • Fast • Middle Order • Middle Overs",""],["RDM016","Kaif Lefty","Batsman","Left-Handed • Middle Order",""],["RDM009","SK. Hanif","Batsman","Right-Handed • Finisher",""],["RDM013","Abushad","All-Rounder","Right-Handed • Fast • Middle Order + Finisher • Middle + Death",""],["RDM014","Sabre Alam","Batsman","Right-Handed • Finisher",""],["RDM015","Zishan","Batsman","Right-Handed • Finisher",""],["RDM017","Javed","Batsman","Right-Handed • Finisher",""]].map((e,t)=>{var a,r;return{id:e[0],name:e[1],role:e[2],detail:e[3],jersey:e[4],image:"",nick:((a=we[e[0]])==null?void 0:a.nick)||"",bio:((r=we[e[0]])==null?void 0:r.bio)||"",socials:[],order:t+1,_docId:e[0]}}),Re=[{_docId:"h01",year:"2024",title:"Winner",sub:"Mahuawan Premier League 1",image:"assets/trophy-2024.png",order:1},{_docId:"h02",year:"2025",title:"Winner",sub:"Mahuawan Premier League 2",image:"assets/trophy-2025.png",order:2},{_docId:"h03",year:"2026",title:"Runner-Up",sub:"Tournament Name • To Be Added",image:"assets/trophy-2026.png",order:3}],Pe=[{_docId:"youtube",name:"YOUTUBE",displayName:"RDM YouTube",url:"https://www.youtube.com/@rehan_dominators_mahuawan",icon:"▶",order:1},{_docId:"telegram",name:"TELEGRAM",displayName:"RDM Telegram",url:"https://t.me/rehandominatorsmahuawan",icon:"✈",order:2},{_docId:"whatsapp",name:"WHATSAPP",displayName:"RDM WhatsApp Channel",url:"https://whatsapp.com/channel/0029Vb8icRM3WHTQGQtM4G3j",icon:"◉",order:3},{_docId:"instagram",name:"INSTAGRAM",displayName:"RDM Instagram",url:"",icon:"IG",order:4},{_docId:"facebook",name:"FACEBOOK",displayName:"RDM Facebook",url:"",icon:"f",order:5}];function b(e=""){const t=String(e??"").replace(/\r\n?/g,`
`).replace(/^\n+|\s+$/g,"");if(!t)return"";const a={"ᴀ":"A",ʙ:"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F",ɢ:"G",ʜ:"H",ɪ:"I","ᴊ":"J","ᴋ":"K",ʟ:"L","ᴍ":"M",ɴ:"N","ᴏ":"O","ᴘ":"P",ǫ:"Q",ʀ:"R","ꜱ":"S","ᴛ":"T","ᴜ":"U","ᴠ":"V","ᴡ":"W",ʏ:"Y","ᴢ":"Z"},r=t.replace(/[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡʏᴢ]/g,s=>a[s]||s);return/^(RDM\d+|RA\d+|SA-V|SO-WK|AKA|ASI|WSM|JBD|GLM|SHA\d+|SAL\d+|LKY|KLF|SKH|ABS|SBA|ZSN|JVD)$/i.test(r)?r.toUpperCase():r===r.toUpperCase()&&/[A-Z]{2,}/.test(r)&&r.length>4?r.toLowerCase().replace(/\b([a-z])/g,(n,d,c,o)=>{var f;const u=((f=o.slice(c).match(/^[a-z]+/i))==null?void 0:f[0])||"";return c>0&&o[c-1]!==`
`&&["and","or","of","the","in","on","to","for","at","by","vs","is"].includes(u.toLowerCase())?u.toLowerCase().charAt(0):d.toUpperCase()}).replace(/\b(Rdm|Xi|H2h|Mpl|Potm|Nr)\b/gi,n=>n.toUpperCase()).replace(/\bSk\./gi,"SK."):r}function l(e=""){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function N(e=""){const t=String(e||"").trim();return/^https?:\/\//i.test(t)?t:""}function ae(e=""){const t=String(e||"").trim();return!!(!t||/^data:image\/svg\+xml/i.test(t)||/(?:logo\.jpg|CRICKET_YOUR_TAGLINE_HERE|rdm_crest_emblem|^assets\/(?:rehan\.png|players\/))/i.test(t))}function ze(e,t=""){const a=String(e||"").trim();return ae(a)?t&&!ae(t)?t:w.logoPath:a}function re(){return window.rdmAuth||(typeof rdmAuth<"u"?rdmAuth:null)}function q(){return window.rdmDB||(typeof rdmDB<"u"?rdmDB:null)}function K(){var e,t,a,r;return((r=(a=(t=(e=window.firebase)==null?void 0:e.firestore)==null?void 0:t.FieldValue)==null?void 0:a.serverTimestamp)==null?void 0:r.call(a))||new Date}const L=e=>({...e.data(),_docId:e.id}),i={ready:!1,loadingData:!1,loadError:"",authChecked:!1,user:null,account:null,role:"guest",playerId:null,brandLogo:w.logoPath,apkDownloadUrl:w.apkDownloadUrl,apkReleasesUrl:w.apkReleasesUrl,appVersion:w.appVersion,players:X.map(e=>({...e})),matches:[],news:[],updates:[],honours:Re.map(e=>({...e})),gallery:[],socials:Pe.map(e=>({...e})),stats:[],achievements:[],availability:[],lineups:[],records:[],tournaments:[],opponents:[]};function z(){return!!(i.user&&i.account&&i.account.active===!0&&i.account.role==="admin"&&i.role==="admin")}function dt(e,t,a){const r=new Map(X.map((o,u)=>[o.id,u+1])),s=new Map(X.map(o=>[o.id,o]));let n;e.length>0?(n=e.map(o=>{const u=s.get(o.id);return{id:o.id,name:o.name||(u==null?void 0:u.name)||o.id,role:o.role||(u==null?void 0:u.role)||"",detail:o.detail||(u==null?void 0:u.detail)||"",jersey:o.jersey??(u==null?void 0:u.jersey)??"",image:ae(o.image)?"":o.image||"",nick:"",bio:"",socials:[],order:typeof o.order=="number"?o.order:r.get(o.id)||999,active:o.active!==!1,_docId:o._docId||o.id}}),X.forEach(o=>{n.some(u=>u.id===o.id)||n.push({...o})})):n=X.map(o=>({...o})),n.sort((o,u)=>(o.order||999)-(u.order||999));const d=o=>{var u,f;return typeof(o==null?void 0:o.updatedMs)=="number"?o.updatedMs:typeof((u=o==null?void 0:o.updatedAt)==null?void 0:u.toMillis)=="function"?o.updatedAt.toMillis():typeof((f=o==null?void 0:o.updatedAt)==null?void 0:f.seconds)=="number"?o.updatedAt.seconds*1e3:0};return[...t].sort((o,u)=>{const f=d(o)-d(u);if(f!==0)return f;const y=a&&o._docId===a?1:0,g=a&&u._docId===a?1:0;return y-g}).forEach(o=>{const u=n.find(f=>f.id===o.playerId);u&&(o.jersey!==void 0&&o.jersey!==null&&o.jersey!==""&&(u.jersey=String(o.jersey)),o.nick!==void 0&&o.nick!==null&&o.nick!==""&&(u.nick=String(o.nick)),o.bio!==void 0&&o.bio!==null&&o.bio!==""&&(u.bio=String(o.bio)),"image"in o&&o.image!==void 0&&o.image!==null&&(u.image=ae(o.image)?"":String(o.image)),Array.isArray(o.socials)&&(u.socials=o.socials.slice(0,3)),u._profileUid=o._docId)}),n.forEach(o=>{const u=we[o.id];u&&(o.nick||(o.nick=u.nick),o.bio||(o.bio=u.bio))}),n.filter(o=>o.active!==!1)}let Me=[],$e=[],Q=[];function Se(){var t,a;const e=((a=(t=re())==null?void 0:t.currentUser)==null?void 0:a.uid)||"";i.players=dt(Me,$e,e)}function ut(e){const t=q();if(!t)return()=>{};Q.forEach(n=>{try{n()}catch{}}),Q=[];let a=null;const r=()=>{typeof e=="function"&&(clearTimeout(a),a=setTimeout(()=>{i.ready=!0,e()},50))},s=(n,d)=>{try{const c=t.collection(n).onSnapshot(o=>{d(o.docs.map(L)),r()},()=>{});Q.push(c)}catch{}};s("TeamPlayers",n=>{Me=n,Se()}),s("PlayerProfiles",n=>{$e=n,Se()}),s("Matches",n=>{i.matches=n.sort((d,c)=>(c.createdMs||0)-(d.createdMs||0))}),s("News",n=>{i.news=n.sort((d,c)=>(c.pinned?1:0)-(d.pinned?1:0)||(c.createdMs||0)-(d.createdMs||0))}),s("Honours",n=>{i.honours=n.length?n.sort((d,c)=>(d.order||999)-(c.order||999)):Re.map(d=>({...d}))}),s("Gallery",n=>{i.gallery=n.sort((d,c)=>(c.createdMs||0)-(d.createdMs||0))}),s("Socials",n=>{i.socials=n.length?n.sort((d,c)=>(d.order||999)-(c.order||999)):Pe.map(d=>({...d}))}),s("PlayerStats",n=>{i.stats=n}),s("Achievements",n=>{i.achievements=n.sort((d,c)=>(c.createdMs||0)-(d.createdMs||0))}),s("Availability",n=>{i.availability=n}),s("PlayingXI",n=>{i.lineups=n.sort((d,c)=>(c.createdMs||0)-(d.createdMs||0))}),s("TeamRecords",n=>{i.records=n.sort((d,c)=>(c.createdMs||0)-(d.createdMs||0))}),s("Tournaments",n=>{i.tournaments=n.sort((d,c)=>(c.createdMs||0)-(d.createdMs||0))}),s("Opponents",n=>{i.opponents=n.sort((d,c)=>(c.createdMs||0)-(d.createdMs||0))}),s("Updates",n=>{i.updates=n.filter(d=>d._docId!=="_news_updates_swap_v1").sort((d,c)=>(c.pinned?1:0)-(d.pinned?1:0)||(c.createdMs||0)-(d.createdMs||0))});try{const n=t.collection("BrandSettings").doc("main").onSnapshot(d=>{if(d.exists){const c=d.data()||{};c.logo&&!ae(c.logo)&&(i.brandLogo=c.logo),c.apkDownloadUrl&&/^https?:\/\//i.test(String(c.apkDownloadUrl).trim())&&(i.apkDownloadUrl=String(c.apkDownloadUrl).trim()),c.apkReleasesUrl&&/^https?:\/\//i.test(String(c.apkReleasesUrl).trim())&&(i.apkReleasesUrl=String(c.apkReleasesUrl).trim()),c.appVersion&&(i.appVersion=String(c.appVersion).trim()),r()}},()=>{});Q.push(n)}catch{}return()=>{clearTimeout(a),Q.forEach(n=>{try{n()}catch{}}),Q=[]}}async function U(){const e=q();if(!e)return i.loadError="Firebase is unavailable. Check your internet connection and retry.",i.ready=!0,!1;i.loadingData=!0,i.loadError="";try{const[t,a,r,s,n,d,c,o,u,f,y,g,S,k,P]=await Promise.all([e.collection("TeamPlayers").get(),e.collection("Matches").get(),e.collection("News").get(),e.collection("Honours").get(),e.collection("Gallery").get(),e.collection("Socials").get(),e.collection("PlayerProfiles").get(),e.collection("PlayerStats").get(),e.collection("Achievements").get(),e.collection("Availability").get(),e.collection("PlayingXI").get(),e.collection("TeamRecords").get(),e.collection("Tournaments").get(),e.collection("Opponents").get(),e.collection("Updates").get()]);Me=t.docs.map(L),$e=c.docs.map(L),Se(),i.matches=a.docs.map(L).sort((m,v)=>(v.createdMs||0)-(m.createdMs||0)),i.news=r.docs.map(L).sort((m,v)=>(v.pinned?1:0)-(m.pinned?1:0)||(v.createdMs||0)-(m.createdMs||0)),i.honours=s.empty?Re.map(m=>({...m})):s.docs.map(L).sort((m,v)=>(m.order||999)-(v.order||999)),i.gallery=n.docs.map(L).sort((m,v)=>(v.createdMs||0)-(m.createdMs||0)),i.socials=d.empty?Pe.map(m=>({...m})):d.docs.map(L).sort((m,v)=>(m.order||999)-(v.order||999)),i.stats=o.docs.map(L),i.achievements=u.docs.map(L).sort((m,v)=>(v.createdMs||0)-(m.createdMs||0)),i.availability=f.docs.map(L),i.lineups=y.docs.map(L).sort((m,v)=>(v.createdMs||0)-(m.createdMs||0)),i.records=g.docs.map(L).sort((m,v)=>(v.createdMs||0)-(m.createdMs||0)),i.tournaments=S.docs.map(L).sort((m,v)=>(v.createdMs||0)-(m.createdMs||0)),i.opponents=k.docs.map(L).sort((m,v)=>(v.createdMs||0)-(m.createdMs||0)),i.updates=P.docs.filter(m=>m.id!=="_news_updates_swap_v1").map(L).sort((m,v)=>(v.pinned?1:0)-(m.pinned?1:0)||(v.createdMs||0)-(m.createdMs||0));try{const m=await e.collection("BrandSettings").doc("main").get();if(m.exists){const v=m.data()||{};v.logo&&!ae(v.logo)&&(i.brandLogo=v.logo),v.apkDownloadUrl&&/^https?:\/\//i.test(String(v.apkDownloadUrl).trim())&&(i.apkDownloadUrl=String(v.apkDownloadUrl).trim()),v.apkReleasesUrl&&/^https?:\/\//i.test(String(v.apkReleasesUrl).trim())&&(i.apkReleasesUrl=String(v.apkReleasesUrl).trim()),v.appVersion&&(i.appVersion=String(v.appVersion).trim())}}catch{i.brandLogo=w.logoPath}return i.ready=!0,!0}catch(t){return console.error("Club data load failed",t),i.loadError="Unable to sync live team data from Firebase. Showing bundled squad roster.",i.ready=!0,!1}finally{i.loadingData=!1}}async function Ye(e){var r,s,n,d;const t=re(),a=q();if(!e||!a)return i.user=null,i.account=null,i.role="guest",i.playerId=null,{ok:!1,reason:"NOT_SIGNED_IN"};try{const c=await a.collection("Accounts").doc(e.uid).get();if(!c.exists)return await((r=t==null?void 0:t.signOut)==null?void 0:r.call(t)),i.user=null,i.account=null,i.role="guest",i.playerId=null,{ok:!1,reason:"NO_ACCOUNT_RECORD"};const o=c.data()||{};if(o.active!==!0)return await((s=t==null?void 0:t.signOut)==null?void 0:s.call(t)),i.user=null,i.account=null,i.role="guest",i.playerId=null,{ok:!1,reason:"ACCOUNT_INACTIVE"};if(o.role==="admin")return i.user=e,i.account=o,i.role="admin",i.playerId=o.playerId||null,{ok:!0,role:"admin",account:o};const u=typeof o.playerId=="string"?o.playerId.trim():"";return u&&(i.players.some(y=>y.id===u)||X.some(y=>y.id===u))?(i.user=e,i.account=o,i.role="player",i.playerId=u,{ok:!0,role:"player",playerId:u,account:o}):(await((n=t==null?void 0:t.signOut)==null?void 0:n.call(t)),i.user=null,i.account=null,i.role="guest",i.playerId=null,{ok:!1,reason:"INVALID_ROLE_MAPPING"})}catch(c){return console.error("Account verification failed",c),await((d=t==null?void 0:t.signOut)==null?void 0:d.call(t)),i.user=null,i.account=null,i.role="guest",i.playerId=null,{ok:!1,reason:(c==null?void 0:c.code)||"VERIFICATION_ERROR"}}}async function pt(e,t){const a=re();if(!a)throw new Error("FIREBASE_UNAVAILABLE");const r=String(e||"").trim(),s=String(t||"");if(!r||!s)throw new Error("EMAIL_PASSWORD_REQUIRED");const n=await a.signInWithEmailAndPassword(r,s),d=await Ye(n.user);if(!d.ok){const c=new Error(d.reason||"ACCOUNT_NOT_AUTHORIZED");throw c.code=d.reason,c}return await U(),d}async function mt(e){const t=re();if(!t)throw new Error("FIREBASE_UNAVAILABLE");const a=String(e||"").trim();if(!a)throw new Error("EMAIL_REQUIRED");await t.sendPasswordResetEmail(a)}async function Oe(){const e=re();e&&await e.signOut(),i.user=null,i.account=null,i.role="guest",i.playerId=null}function ht(e){const t=re();return t?t.onAuthStateChanged(async a=>{if(!a){i.user=null,i.account=null,i.role="guest",i.playerId=null,i.authChecked=!0,e({role:"guest",verified:!1});return}const r=await Ye(a);i.authChecked=!0,e({role:r.ok?r.role:"guest",verified:r.ok,reason:r.ok?"":r.reason})}):(i.authChecked=!0,e({role:"guest",verified:!1}),()=>{})}async function bt(e,t){const a=q();if(!a||!i.user)throw new Error("AUTH_REQUIRED");const r=String(t||"").toUpperCase();if(!["AVAILABLE","UNAVAILABLE"].includes(r))throw new Error("INVALID_STATUS");if(!z()&&!(i.role==="player"&&i.playerId===e))throw new Error("NOT_ALLOWED");await a.collection("Availability").doc(e).set({playerId:e,status:r,updatedAt:K()},{merge:!0}),await U()}async function B(e,t,a){const r=q();if(!r||!z())throw new Error("ADMIN_REQUIRED");const s={...a,updatedAt:K()};delete s._docId,t?await r.collection(e).doc(t).set(s,{merge:!0}):await r.collection(e).add({...s,createdMs:s.createdMs||Date.now()}),await U()}async function ft(e,t){const a=q();if(!a||!z())throw new Error("ADMIN_REQUIRED");const r={id:e,name:String(t.name||"").trim(),role:String(t.role||"").trim(),detail:String(t.detail||"").trim(),jersey:String(t.jersey||"").trim(),active:!0,updatedAt:K()};"image"in t&&t.image!==void 0&&(r.image=t.image),await a.collection("TeamPlayers").doc(e).set(r,{merge:!0});const s=i.players.find(c=>c.id===e),n=(s==null?void 0:s._profileUid)||`profile_${e}`,d={playerId:e,jersey:r.jersey,nick:String(t.nick??(s==null?void 0:s.nick)??"").trim(),bio:String(t.bio??(s==null?void 0:s.bio)??"").trim(),updatedMs:Date.now(),updatedAt:K()};"image"in t&&t.image!==void 0&&(d.image=t.image),await a.collection("PlayerProfiles").doc(n).set(d,{merge:!0}),await U()}async function yt(e){const t=q();if(!t||!z())throw new Error("ADMIN_REQUIRED");const a={appVersion:String(e.appVersion||w.appVersion).trim(),apkDownloadUrl:String(e.apkDownloadUrl||w.apkDownloadUrl).trim(),apkReleasesUrl:String(e.apkReleasesUrl||w.apkReleasesUrl).trim(),updatedMs:Date.now(),updatedAt:K()};e.logo&&(a.logo=String(e.logo)),await t.collection("BrandSettings").doc("main").set(a,{merge:!0}),await U()}async function gt(e,t){const a=q();if(!a||!z()||!t)throw new Error("ADMIN_REQUIRED");await a.collection(e).doc(t).delete(),await U()}async function vt(e){const t=q();if(!t||!z()||!e)throw new Error("ADMIN_REQUIRED");X.some(r=>r.id===e)?await t.collection("TeamPlayers").doc(e).set({id:e,active:!1,updatedAt:K()},{merge:!0}):await t.collection("TeamPlayers").doc(e).delete(),await U()}async function wt(e,t,a){const r=q();if(!r||!z())throw new Error("ADMIN_REQUIRED");if(a){const s=await r.collection(e).where("pinned","==",!0).get();if(!s.empty){const n=r.batch();s.docs.forEach(d=>{d.id!==t&&n.set(d.ref,{pinned:!1,updatedAt:K()},{merge:!0})}),await n.commit()}}await r.collection(e).doc(t).set({pinned:!!a,updatedAt:K()},{merge:!0}),await U()}function le(e,t=960,a=.74){return new Promise((r,s)=>{if(!e)return r("");const n=new FileReader;n.onerror=()=>s(new Error("READ_FAILED")),n.onload=()=>{const d=new Image;d.onerror=()=>s(new Error("IMAGE_INVALID")),d.onload=()=>{const c=Math.min(1,t/Math.max(d.width,d.height)),o=document.createElement("canvas");o.width=Math.max(1,Math.round(d.width*c)),o.height=Math.max(1,Math.round(d.height*c)),o.getContext("2d").drawImage(d,0,0,o.width,o.height);let u=o.toDataURL("image/jpeg",a);if(u.length>72e4&&(u=o.toDataURL("image/jpeg",.56)),u.length>9e5)return s(new Error("IMAGE_TOO_LARGE"));r(u)},d.src=n.result},n.readAsDataURL(e)})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var ne;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(ne||(ne={}));class ge extends Error{constructor(t,a,r){super(t),this.message=t,this.code=a,this.data=r}}const St=e=>{var t,a;return e!=null&&e.androidBridge?"android":!((a=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||a===void 0)&&a.bridge?"ios":"web"},kt=e=>{const t=e.CapacitorCustomPlatform||null,a=e.Capacitor||{},r=a.Plugins=a.Plugins||{},s=()=>t!==null?t.name:St(e),n=()=>s()!=="web",d=y=>{const g=u.get(y);return!!(g!=null&&g.platforms.has(s())||c(y))},c=y=>{var g;return(g=a.PluginHeaders)===null||g===void 0?void 0:g.find(S=>S.name===y)},o=y=>e.console.error(y),u=new Map,f=(y,g={})=>{const S=u.get(y);if(S)return console.warn(`Capacitor plugin "${y}" already registered. Cannot register plugins twice.`),S.proxy;const k=s(),P=c(y);let m;const v=async()=>(!m&&k in g?m=typeof g[k]=="function"?m=await g[k]():m=g[k]:t!==null&&!m&&"web"in g&&(m=typeof g.web=="function"?m=await g.web():m=g.web),m),J=(R,D)=>{var x,G;if(P){const V=P==null?void 0:P.methods.find(O=>D===O.name);if(V)return V.rtype==="promise"?O=>a.nativePromise(y,D.toString(),O):(O,oe)=>a.nativeCallback(y,D.toString(),O,oe);if(R)return(x=R[D])===null||x===void 0?void 0:x.bind(R)}else{if(R)return(G=R[D])===null||G===void 0?void 0:G.bind(R);throw new ge(`"${y}" plugin is not implemented on ${k}`,ne.Unimplemented)}},h=R=>{let D;const x=(...G)=>{const V=v().then(O=>{const oe=J(O,R);if(oe){const ie=oe(...G);return D=ie==null?void 0:ie.remove,ie}else throw new ge(`"${y}.${R}()" is not implemented on ${k}`,ne.Unimplemented)});return R==="addListener"&&(V.remove=async()=>D()),V};return x.toString=()=>`${R.toString()}() { [capacitor code] }`,Object.defineProperty(x,"name",{value:R,writable:!1,configurable:!1}),x},T=h("addListener"),$=h("removeListener"),F=(R,D)=>{const x=T({eventName:R},D).then(O=>O),G=async()=>{const O=await x;await $({eventName:R,callbackId:O})},V=new Promise(O=>x.then(()=>O({remove:G})));return V.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await G()},V},I=new Proxy({},{get(R,D){switch(D){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return P?F:T;case"removeListener":return $;default:return h(D)}}});return r[y]=I,u.set(y,{name:y,proxy:I,platforms:new Set([...Object.keys(g),...P?[k]:[]])}),I};return a.convertFileSrc||(a.convertFileSrc=y=>y),a.getPlatform=s,a.handleError=o,a.isNativePlatform=n,a.isPluginAvailable=d,a.registerPlugin=f,a.Exception=ge,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a},At=e=>e.Capacitor=kt(e),H=At(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Y=H.registerPlugin;class Te{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,a){let r=!1;this.listeners[t]||(this.listeners[t]=[],r=!0),this.listeners[t].push(a);const n=this.windowListeners[t];n&&!n.registered&&this.addWindowListener(n),r&&this.sendRetainedArgumentsForEvent(t);const d=async()=>this.removeListener(t,a);return Promise.resolve({remove:d})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,a,r){const s=this.listeners[t];if(!s){if(r){let n=this.retainedEventArguments[t];n||(n=[]),n.push(a),this.retainedEventArguments[t]=n}return}s.forEach(n=>n(a))}hasListeners(t){var a;return!!(!((a=this.listeners[t])===null||a===void 0)&&a.length)}registerWindowListener(t,a){this.windowListeners[a]={registered:!1,windowEventName:t,pluginEventName:a,handler:r=>{this.notifyListeners(a,r)}}}unimplemented(t="not implemented"){return new H.Exception(t,ne.Unimplemented)}unavailable(t="not available"){return new H.Exception(t,ne.Unavailable)}async removeListener(t,a){const r=this.listeners[t];if(!r)return;const s=r.indexOf(a);s!==-1&&this.listeners[t].splice(s,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const a=this.retainedEventArguments[t];a&&(delete this.retainedEventArguments[t],a.forEach(r=>{this.notifyListeners(t,r)}))}}const Fe=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Be=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Et extends Te{async getCookies(){const t=document.cookie,a={};return t.split(";").forEach(r=>{if(r.length<=0)return;let[s,n]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Be(s).trim(),n=Be(n).trim(),a[s]=n}),a}async setCookie(t){try{const a=Fe(t.key),r=Fe(t.value),s=t.expires?`; expires=${t.expires.replace("expires=","")}`:"",n=(t.path||"/").replace("path=",""),d=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${a}=${r||""}${s}; path=${n}; ${d};`}catch(a){return Promise.reject(a)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(a){return Promise.reject(a)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const a of t)document.cookie=a.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}Y("CapacitorCookies",{web:()=>new Et});const Rt=async e=>new Promise((t,a)=>{const r=new FileReader;r.onload=()=>{const s=r.result;t(s.indexOf(",")>=0?s.split(",")[1]:s)},r.onerror=s=>a(s),r.readAsDataURL(e)}),Pt=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(s=>s.toLocaleLowerCase()).reduce((s,n,d)=>(s[n]=e[t[d]],s),{})},Mt=(e,t=!0)=>e?Object.entries(e).reduce((r,s)=>{const[n,d]=s;let c,o;return Array.isArray(d)?(o="",d.forEach(u=>{c=t?encodeURIComponent(u):u,o+=`${n}=${c}&`}),o.slice(0,-1)):(c=t?encodeURIComponent(d):d,o=`${n}=${c}`),`${r}&${o}`},"").substr(1):null,$t=(e,t={})=>{const a=Object.assign({method:e.method||"GET",headers:e.headers},t),s=Pt(e.headers)["content-type"]||"";if(typeof e.data=="string")a.body=e.data;else if(s.includes("application/x-www-form-urlencoded")){const n=new URLSearchParams;for(const[d,c]of Object.entries(e.data||{}))n.set(d,c);a.body=n.toString()}else if(s.includes("multipart/form-data")||e.data instanceof FormData){const n=new FormData;if(e.data instanceof FormData)e.data.forEach((c,o)=>{n.append(o,c)});else for(const c of Object.keys(e.data))n.append(c,e.data[c]);a.body=n;const d=new Headers(a.headers);d.delete("content-type"),a.headers=d}else(s.includes("application/json")||typeof e.data=="object")&&(a.body=JSON.stringify(e.data));return a};class Tt extends Te{async request(t){const a=$t(t,t.webFetchExtra),r=Mt(t.params,t.shouldEncodeUrlParams),s=r?`${t.url}?${r}`:t.url,n=await fetch(s,a),d=n.headers.get("content-type")||"";let{responseType:c="text"}=n.ok?t:{};d.includes("application/json")&&(c="json");let o,u;switch(c){case"arraybuffer":case"blob":u=await n.blob(),o=await Rt(u);break;case"json":o=await n.json();break;case"document":case"text":default:o=await n.text()}const f={};return n.headers.forEach((y,g)=>{f[g]=y}),{data:o,headers:f,status:n.status,url:n.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}Y("CapacitorHttp",{web:()=>new Tt});var Ne;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(Ne||(Ne={}));var Ue;(function(e){e.StatusBar="StatusBar",e.NavigationBar="NavigationBar"})(Ue||(Ue={}));class Dt extends Te{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Y("SystemBars",{web:()=>new Dt});const Lt="modulepreload",Ct=function(e,t){return new URL(e,t).href},xe={},De=function(t,a,r){let s=Promise.resolve();if(a&&a.length>0){let d=function(f){return Promise.all(f.map(y=>Promise.resolve(y).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const c=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),u=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=d(a.map(f=>{if(f=Ct(f,r),f in xe)return;xe[f]=!0;const y=f.endsWith(".css"),g=y?'[rel="stylesheet"]':"";if(!!r)for(let P=c.length-1;P>=0;P--){const m=c[P];if(m.href===f&&(!y||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${g}`))return;const k=document.createElement("link");if(k.rel=y?"stylesheet":Lt,y||(k.as="script"),k.crossOrigin="",k.href=f,u&&k.setAttribute("nonce",u),document.head.appendChild(k),y)return new Promise((P,m)=>{k.addEventListener("load",P),k.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${f}`)))})}))}function n(d){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=d,window.dispatchEvent(c),!c.defaultPrevented)throw d}return s.then(d=>{for(const c of d||[])c.status==="rejected"&&n(c.reason);return t().catch(n)})},Je=Y("App",{web:()=>De(()=>import("./web-B8Jh2NHt.js"),[],import.meta.url).then(e=>new e.AppWeb)});var ue;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(ue||(ue={}));var He;(function(e){e.None="NONE",e.Slide="SLIDE",e.Fade="FADE"})(He||(He={}));const ve=Y("StatusBar"),It=Y("SplashScreen",{web:()=>De(()=>import("./web-MUynnOI3.js"),[],import.meta.url).then(e=>new e.SplashScreenWeb)});var _e;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(_e||(_e={}));var qe;(function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"})(qe||(qe={}));const je=Y("Keyboard"),Ot=Y("Browser",{web:()=>De(()=>import("./web-p8wZBXyX.js"),[],import.meta.url).then(e=>new e.BrowserWeb)});let We=!1,Z=null;typeof window<"u"&&window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Z=e,window.dispatchEvent(new CustomEvent("rdm-pwa-ready"))});function ke(){return H.isNativePlatform()}function Xe(){return!H.isNativePlatform()&&!!Z}async function Ft(){if(!Z)return!1;try{await Z.prompt();const e=await Z.userChoice;if((e==null?void 0:e.outcome)==="accepted")return Z=null,!0}catch{}return!1}async function Qe(e="azure"){const t={azure:"#F2F7FD",daylight:"#FFFFFF",turf:"#F4F9F6",night:"#071224"},a=t[e]||t.azure,r=document.getElementById("rdmThemeMeta");if(r&&(r.content=a),!!H.isNativePlatform())try{await ve.setOverlaysWebView({overlay:!1}),await ve.setBackgroundColor({color:a}),await ve.setStyle({style:e==="night"?ue.Dark:ue.Light})}catch{}}async function Bt(e){const t=localStorage.getItem("rdm-app-theme")||"azure";if(await Qe(t),H.isNativePlatform()){try{je.addListener("keyboardWillShow",()=>{document.body.classList.add("keyboard-open");const a=document.activeElement;a&&typeof a.scrollIntoView=="function"&&setTimeout(()=>{try{a.scrollIntoView({behavior:"smooth",block:"center"})}catch{}},120)}),je.addListener("keyboardWillHide",()=>{document.body.classList.remove("keyboard-open")})}catch{}if(!We&&typeof e=="function"){We=!0;try{Je.addListener("backButton",({canGoBack:a})=>{e({canGoBack:a})})}catch{}}}}async function Ge(){if(H.isNativePlatform())try{await It.hide({fadeOutDuration:220})}catch{}}async function Nt(){if(H.isNativePlatform())try{await Je.exitApp()}catch{}}async function Ut(e){const t=String(e||"").trim();if(!/^https?:\/\//i.test(t))return!1;if(H.isNativePlatform())try{return await Ot.open({url:t,presentationStyle:"popover"}),!0}catch{}const a=document.createElement("a");return a.href=t,a.target="_blank",a.rel="noopener noreferrer",document.body.appendChild(a),a.click(),a.remove(),!0}let se=[];function E(e){const t=document.getElementById("rdmToast");t&&(t.textContent=String(e||""),t.classList.add("show"),clearTimeout(t._timer),t._timer=setTimeout(()=>t.classList.remove("show"),2200))}function Ae(){return se.length>0}function Ze(){const e=se.pop();return e&&e.isConnected?(e.remove(),!0):!1}function he(e){return se.push(e),()=>{se=se.filter(t=>t!==e),e.isConnected&&e.remove()}}function Ee({title:e,message:t,confirmLabel:a="Confirm",danger:r=!1,onConfirm:s}){const n=document.createElement("div");n.className="sheetOverlay show",n.innerHTML=`
    <div class="sheetCard confirmCard" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <h3>${l(e)}</h3>
      </div>
      <p class="confirmMessage">${l(t)}</p>
      <div class="sheetActions">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="button" class="${r?"btnDanger":"btnPrimary"}" data-ok>${l(a)}</button>
      </div>
    </div>
  `,document.body.appendChild(n);const d=he(n);n.querySelector("[data-cancel]").onclick=d,n.addEventListener("click",c=>{c.target===n&&d()}),n.querySelector("[data-ok]").onclick=async c=>{const o=c.currentTarget;o.disabled=!0;try{await s(),d()}catch(u){o.disabled=!1,E((u==null?void 0:u.message)||"Action failed")}}}function C({title:e,subtitle:t="",fields:a,submitLabel:r="Save",onSubmit:s}){const n=document.createElement("div");n.className="sheetOverlay show";const d=a.map(o=>{const u=o.required?"required":"",f=l(o.value??"");if(o.type==="textarea")return`
        <label class="fieldBlock">
          <span>${l(o.label)}</span>
          <textarea name="${l(o.name)}" rows="${o.rows||4}" placeholder="${l(o.placeholder||"")}" ${u}>${f}</textarea>
        </label>
      `;if(o.type==="select"){const y=(o.options||[]).map(g=>{const S=typeof g=="object"?g.value:g,k=typeof g=="object"?g.label:g,P=String(S)===String(o.value??"")?"selected":"";return`<option value="${l(S)}" ${P}>${l(k)}</option>`}).join("");return`
        <label class="fieldBlock">
          <span>${l(o.label)}</span>
          <select name="${l(o.name)}">${y}</select>
        </label>
      `}return o.type==="checkbox"?`
        <label class="checkboxRow">
          <input type="checkbox" name="${l(o.name)}" ${o.checked?"checked":""}>
          <span>${l(o.label)}</span>
        </label>
      `:o.type==="file"?`
        <label class="fieldBlock">
          <span>${l(o.label)}</span>
          <input type="file" name="${l(o.name)}" accept="image/*" ${u}>
        </label>
      `:`
      <label class="fieldBlock">
        <span>${l(o.label)}</span>
        <input type="${l(o.type||"text")}" name="${l(o.name)}" value="${f}" placeholder="${l(o.placeholder||"")}" ${u}>
      </label>
    `}).join("");n.innerHTML=`
    <form class="sheetCard formSheet" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>${l(e)}</h3>
          ${t?`<p class="sheetSub">${l(t)}</p>`:""}
        </div>
      </div>
      <div class="formStack">${d}</div>
      <div class="sheetFooterSticky">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="submit" class="btnPrimary">${l(r)}</button>
      </div>
    </form>
  `,document.body.appendChild(n);const c=he(n);n.querySelector("[data-cancel]").onclick=c,n.addEventListener("click",o=>{o.target===n&&c()}),n.querySelector("form").onsubmit=async o=>{o.preventDefault();const u=o.currentTarget,f=u.querySelector('[type="submit"]');f.disabled=!0;try{const y={};a.forEach(g=>{var k;const S=u.elements[g.name];S&&(g.type==="checkbox"?y[g.name]=S.checked:g.type==="file"?y[g.name]=((k=S.files)==null?void 0:k[0])||null:g.type==="textarea"?y[g.name]=String(S.value??"").replace(/\r\n?/g,`
`).replace(/^\n+|\s+$/g,""):y[g.name]=String(S.value??"").trim())}),await s(y),c()}catch(y){f.disabled=!1,E((y==null?void 0:y.message)||"Save failed")}}}function Ve({currentTheme:e,onSelectTheme:t}){const a=document.createElement("div");a.className="sheetOverlay show";const r=[{id:"azure",name:"Sky Azure",desc:"Official Light Blue & White team palette",swatches:["#F2F7FD","#FFFFFF","#0958D9"]},{id:"daylight",name:"Stadium Daylight",desc:"Crisp high-clarity bright white canvas",swatches:["#FFFFFF","#F6F9FC","#1D4ED8"]},{id:"turf",name:"Emerald Turf",desc:"Championship cricket pitch green & white",swatches:["#F4F9F6","#FFFFFF","#0D7A4E"]},{id:"night",name:"Floodlight Night",desc:"Deep stadium navy dark mode",swatches:["#071224","#0E1F3A","#38BDF8"]}];a.innerHTML=`
    <div class="sheetCard" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>App Appearance</h3>
          <p class="sheetSub">Tap a palette to apply immediately</p>
        </div>
      </div>
      <div class="themeChoiceList">
        ${r.map(n=>`
          <button type="button" class="themeChoiceRow ${e===n.id?"active":""}" data-pick-theme="${n.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${n.swatches.map(d=>`<span style="background:${d}"></span>`).join("")}
            </div>
            <div class="themeChoiceCopy">
              <strong>${l(n.name)}</strong>
              <span>${l(n.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${e===n.id?"Active":"Apply"}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `,document.body.appendChild(a);const s=he(a);a.addEventListener("click",n=>{n.target===a&&s()}),a.querySelectorAll("[data-pick-theme]").forEach(n=>{n.addEventListener("click",()=>{t(n.dataset.pickTheme),s()})})}function Ke(e,t=""){const a=document.createElement("div");a.className="lightboxOverlay show",a.innerHTML=`
    <div class="lightboxTopBar">
      <div class="lightboxLeft">
        <button type="button" class="iconCloseBtn darkSurface" aria-label="Back">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <span class="lightboxCaption">${l(t||"Team Gallery")}</span>
      </div>
    </div>
    <div class="lightboxCanvas">
      <img src="${l(e)}" alt="${l(t||"Gallery image")}" referrerPolicy="no-referrer">
    </div>
  `,document.body.appendChild(a);const r=he(a);a.querySelector(".iconCloseBtn").onclick=r,a.addEventListener("click",s=>{(s.target===a||s.target.classList.contains("lightboxCanvas"))&&r()})}async function xt({player:e,brandLogo:t}){const s=document.createElement("canvas");s.width=1080,s.height=1350;const n=s.getContext("2d"),d=S=>new Promise((k,P)=>{const m=new Image;m.crossOrigin="anonymous",m.onload=()=>k(m),m.onerror=P,m.src=S}),c=(S,k,P,m,v,J,h)=>{n.beginPath(),n.moveTo(S+v,k),n.arcTo(S+P,k,S+P,k+m,v),n.arcTo(S+P,k+m,S,k+m,v),n.arcTo(S,k+m,S,k,v),n.arcTo(S,k,S+P,k,v),n.closePath(),J&&(n.fillStyle=J,n.fill()),h&&(n.strokeStyle=h,n.lineWidth=2,n.stroke())},o=n.createLinearGradient(0,0,1080,1350);o.addColorStop(0,"#EDF5FF"),o.addColorStop(1,"#FFFFFF"),n.fillStyle=o,n.fillRect(0,0,1080,1350),c(40,40,1e3,1270,40,"#FFFFFF","#C9DFF7"),c(80,80,920,10,5,"#0958D9",null);let u=null;try{u=await d(t||w.logoPath)}catch{}u&&n.drawImage(u,84,120,74,74),n.textAlign="left",n.fillStyle="#0B2340",n.font='800 34px "Barlow Condensed", "Plus Jakarta Sans", sans-serif',n.fillText("REHAN DOMINATORS MAHUAWAN",176,156),n.fillStyle="#5B7693",n.font='600 18px "Plus Jakarta Sans", sans-serif',n.fillText("MAHUAWAN • GOPALGANJ • BIHAR",176,186);let f=null;try{f=await d(ze(e.image,t))}catch{f=u}if(f){n.save(),n.beginPath(),n.arc(1080/2,370,140,0,Math.PI*2),n.clip();const S=Math.max(280/f.width,280/f.height);n.drawImage(f,1080/2-f.width*S/2,370-f.height*S/2,f.width*S,f.height*S),n.restore(),n.strokeStyle="#0958D9",n.lineWidth=8,n.beginPath(),n.arc(1080/2,370,146,0,Math.PI*2),n.stroke()}n.textAlign="center",n.fillStyle="#0B2340",n.font='800 58px "Barlow Condensed", "Plus Jakarta Sans", sans-serif',n.fillText(b(e.name),1080/2,580),c(120,620,840,124,24,"#F2F7FD","#CFE2F7"),n.fillStyle="#0958D9",n.font='700 16px "Plus Jakarta Sans", sans-serif',n.fillText("PLAYER CODE",330,662),n.fillText("JERSEY NUMBER",750,662),n.fillStyle="#0B2340",n.font='700 30px "JetBrains Mono", monospace',n.fillText(de[e.id]||e.id,330,708),n.fillText(e.jersey?`#${e.jersey}`:"—",750,708),c(120,774,840,140,24,"#F8FBFF","#D9E8F7"),n.fillStyle="#0958D9",n.font='700 24px "Plus Jakarta Sans", sans-serif',n.fillText(b(e.role||""),1080/2,828),n.fillStyle="#3E5A78",n.font='600 20px "Plus Jakarta Sans", sans-serif',n.fillText(b(e.detail||"").slice(0,66),1080/2,872),n.fillStyle="#0958D9",n.font='700 18px "Plus Jakarta Sans", sans-serif',n.fillText("ONE TEAM • ONE DREAM • ONE DOMINATION",1080/2,1234),n.fillStyle="#5B7693",n.font='600 15px "Plus Jakarta Sans", sans-serif',n.fillText("RDM OFFICIAL • PLAYER IDENTITY CARD",1080/2,1266);const y=s.toDataURL("image/png"),g=document.createElement("a");g.href=y,g.download=`${e.id}-${String(e.name||"PLAYER").replace(/\s+/g,"-")}-RDM-CARD.png`,document.body.appendChild(g),g.click(),g.remove(),E("Player card downloaded")}const be=[{id:"azure",label:"Sky Azure",desc:"Light Blue & White",swatches:["#F2F7FD","#FFFFFF","#0958D9"]},{id:"daylight",label:"Stadium Daylight",desc:"Crisp High-Key White",swatches:["#FFFFFF","#F6F9FC","#1D4ED8"]},{id:"turf",label:"Emerald Turf",desc:"Cricket Pitch Green",swatches:["#F4F9F6","#FFFFFF","#0D7A4E"]},{id:"night",label:"Floodlight Night",desc:"Deep Stadium Navy",swatches:["#071224","#0E1F3A","#38BDF8"]}],p={screen:"public",portalMode:"public",portalPlayerId:null,publicTab:"home",matchesSubTab:"fixtures",galleryAlbum:"ALL",squadQuery:"",squadFilter:"ALL",detailPlayerId:null,morePage:"news",adminTab:"overview",drawerOpen:!1,theme:_t(),loginError:"",loginBusy:!1,lastBackPressAt:0},M=[];function et(){return{screen:p.screen,publicTab:p.publicTab,matchesSubTab:p.matchesSubTab,detailPlayerId:p.detailPlayerId,morePage:p.morePage,adminTab:p.adminTab}}function Ht(e,t){return e&&t&&e.screen===t.screen&&e.publicTab===t.publicTab&&e.matchesSubTab===t.matchesSubTab&&e.detailPlayerId===t.detailPlayerId&&e.morePage===t.morePage&&e.adminTab===t.adminTab}function te(e){return e.screen==="playerDetail"&&e.detailPlayerId?`#player-${e.detailPlayerId}`:e.screen==="subpage"?`#section-${e.morePage}`:(e.screen==="playerPortal"&&p.portalPlayerId,e.screen==="portalAuth"?"#portal-verify":e.screen==="admin"?`#admin-${e.adminTab}`:`#${e.publicTab||"home"}`)}function Le(e){p.screen=e.screen,p.publicTab=e.publicTab||"home",p.matchesSubTab=e.matchesSubTab||"fixtures",p.detailPlayerId=e.detailPlayerId||null,p.morePage=e.morePage||"news",p.adminTab=e.adminTab||"overview",p.drawerOpen=!1,A(),window.scrollTo({top:0,behavior:"auto"})}function j(e,{push:t=!0,replace:a=!1}={}){e.screen==="admin"&&(e={screen:"public",publicTab:"home"}),e.screen==="playerPortal"&&(e={screen:"public",publicTab:"home"}),e.screen==="portalAuth"&&(e={screen:"public",publicTab:"home"});const r={...et(),...e},s=M[M.length-1];if(!Ht(s,r)){if(a&&M.length>0){M[M.length-1]=r;try{window.history.replaceState({rdmIdx:M.length-1},"",te(r))}catch{}}else if(t||M.length===0){M.push(r);try{window.history.pushState({rdmIdx:M.length-1},"",te(r))}catch{}}}Le(r)}function ee(e){p.drawerOpen=!!e;const t=document.getElementById("drawerOverlay");if(t){const a=t.querySelector(".drawerPanel");a&&(a.style.transform=""),t.classList.remove("dragging"),t.classList.toggle("open",p.drawerOpen),t.setAttribute("aria-hidden",p.drawerOpen?"false":"true")}else A()}function tt(){if(Ae())return Ze(),!0;if(p.drawerOpen)return ee(!1),!0;if(M.length>1){M.pop();const e=M[M.length-1];try{window.history.replaceState({rdmIdx:M.length-1},"",te(e))}catch{}return Le(e),!0}return!1}function _t(){try{const e=localStorage.getItem("rdm-app-theme")||"azure";return be.some(t=>t.id===e)?e:"azure"}catch{return"azure"}}function at(e){var t;return((t=be.find(a=>a.id===e))==null?void 0:t.label)||"Sky Azure"}function ce(e){const t=be.some(a=>a.id===e)?e:"azure";p.theme=t,document.documentElement.setAttribute("data-theme",t);try{localStorage.setItem("rdm-app-theme",t)}catch{}Qe(t),A()}function _(){return i.brandLogo||w.logoPath}function fe(){return N(i.apkDownloadUrl)||w.apkDownloadUrl}function nt(){return N(i.apkReleasesUrl)||w.apkReleasesUrl}function Ce(){return i.appVersion||w.appVersion}function Ie(e){const t=ze(e,_()),a=t===_()||t===w.logoPath;return{src:t,cls:a?"avatarCircle is-crest":"avatarCircle is-photo"}}function W(e){return{home:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/></svg>',squad:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',matches:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',gallery:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>',more:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>'}[e]||""}function rt(e){return{home:W("home"),squad:W("squad"),matches:W("matches"),gallery:W("gallery"),more:W("more"),xi:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',records:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',tournaments:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 8.5 15.5 15.5"/><path d="M15.5 8.5 8.5 15.5"/></svg>',honours:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',news:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',updates:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',socials:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',about:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',download:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>'}[e]||""}function pe({title:e="RDM Official",showBack:t=!1,showPublicNav:a=!0,rightActionHtml:r=""}){const s=[["home","Home"],["squad","Squad"],["matches","Matches"],["gallery","Gallery"],["more","More"]],n=t?`<button type="button" class="menuCircleBtn" id="btnStepBack" aria-label="Go back">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
       </button>`:`<button type="button" class="menuCircleBtn" id="btnOpenDrawer" aria-label="Open team menu">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
       </button>`,d=r||'<button type="button" class="topActionBtn" id="btnPickTheme">Theme</button>';return`
    <header class="topBar">
      <div class="topBarInner">
        <div class="topLeftGroup">
          ${n}
          <button type="button" class="topBrand" id="btnBrandHome" aria-label="RDM Official Home">
            <img src="${l(_())}" alt="RDM Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
            <span class="topBrandText">${l(e)}</span>
          </button>
        </div>
        ${a?`
          <nav class="topDesktopNav" aria-label="Primary navigation">
            ${s.map(([c,o])=>`
              <button type="button" class="topNavLink ${p.screen==="public"&&p.publicTab===c?"active":""}" data-public-tab="${c}">${o}</button>
            `).join("")}
          </nav>
        `:"<div></div>"}
        <div class="topBarActions">
          ${d}
        </div>
      </div>
    </header>
  `}function qt(){const e=[["xi","Playing XI"],["records","Team Records"],["tournaments","Tournaments & H2H"],["honours","Team Honours"],["news","Team News"],["updates","Official Updates"],["socials","Channels & Contact"],["about","About RDM"],["download","Get Android App"]];return`
    <div class="drawerOverlay ${p.drawerOpen?"open":""}" id="drawerOverlay" role="dialog" aria-modal="true" aria-hidden="${p.drawerOpen?"false":"true"}" aria-label="Team navigation menu">
      <aside class="drawerPanel" id="drawerPanel">
        <div class="drawerHeader">
          <div class="drawerBrandLockup">
            <img src="${l(_())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
            <div>
              <strong>RDM Official</strong>
              <span>Cricket Team · Mahuawan, Bihar</span>
            </div>
          </div>
        </div>

        <div class="drawerBody">
          <div class="drawerGroupLabel">Team Sections</div>
          ${e.map(([a,r])=>`
            <button type="button" class="drawerNavBtn ${p.screen==="subpage"&&p.morePage===a?"active":""}" data-open-subpage="${a}">
              <span class="drawerNavLeft">
                <span class="drawerNavIcon" aria-hidden="true">${rt(a)}</span>
                <span>${r}</span>
              </span>
              <span aria-hidden="true">›</span>
            </button>
          `).join("")}
        </div>

        <div class="drawerFooter">
          <button type="button" class="btnSecondary btnSm btnFull" id="btnDrawerTheme">Theme · ${l(at(p.theme))}</button>
          
        </div>
      </aside>
    </div>
  `}function me(){return`
    <footer class="webFooter">
      <div class="webFooterInner">
        <div class="webFooterBrand">
          <img src="${l(_())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
          <div>
            <strong>${l(b(w.orgName))}</strong>
            <span>${l(w.location)} · Est. ${l(w.founded)}</span>
          </div>
        </div>
        <div class="webFooterLinks">
          <button type="button" class="webFooterLink" data-public-tab="home">Home</button>
          <button type="button" class="webFooterLink" data-public-tab="squad">Squad</button>
          <button type="button" class="webFooterLink" data-public-tab="matches">Matches</button>
          <button type="button" class="webFooterLink" data-public-tab="gallery">Gallery</button>
          <button type="button" class="webFooterLink" data-open-subpage="records">Records</button>
          <button type="button" class="webFooterLink" data-open-subpage="honours">Honours</button>
          <button type="button" class="webFooterLink" data-open-subpage="download">Android App</button>
          <button type="button" class="webFooterLink" data-ext-url="${l(fe())}">Download APK ↗</button>
          <button type="button" class="webFooterLink" data-ext-url="${l(w.captainContactUrl)}">WhatsApp Captain ↗</button>
        </div>
      </div>
    </footer>
  `}function jt(){return`
    <nav class="bottomNav" aria-label="Mobile navigation">
      <div class="bottomNavGrid">
        ${[["home","Home"],["squad","Squad"],["matches","Matches"],["gallery","Gallery"],["more","More"]].map(([t,a])=>`
          <button type="button" class="navTabBtn ${p.screen==="public"&&p.publicTab===t?"active":""}" data-public-tab="${t}" aria-current="${p.screen==="public"&&p.publicTab===t?"page":"false"}">
            <span class="navIconPill">${W(t)}</span>
            <span>${a}</span>
          </button>
        `).join("")}
      </div>
    </nav>
  `}function Wt(){const e=i.matches.find(u=>!/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${u.matchStatus||""} ${u.status||""} ${u.note||""}`)),t=i.matches.find(u=>/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${u.matchStatus||""} ${u.status||""} ${u.note||""}`)),a=i.updates.find(u=>u.pinned)||i.updates[0],r=i.news.find(u=>u.pinned)||i.news[0],s=a||r,n=i.players.find(u=>u.id==="RDM001")||i.players[0],d=i.players.find(u=>u.id==="RDM003"),c=i.players.find(u=>u.id==="RDM006"),o=[n,d,c].filter(Boolean);return`
    ${i.loadError?`<div class="infoBanner"><span>${l(i.loadError)}</span><button type="button" class="btnSecondary btnSm" id="btnRetrySync">Retry</button></div>`:""}

    <section class="heroBannerCard">
      <div class="heroPhotoLayer" aria-hidden="true">
        <img src="${l(w.heritageImagePath)}" alt="" referrerPolicy="no-referrer">
      </div>
      <div class="heroBannerInner">
        <div class="heroBannerTop">
          <img class="heroBannerLogo" src="${l(_())}" alt="RDM Official Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
          <div class="heroBannerCopy">
            <span class="heroEyebrow">OFFICIAL CRICKET TEAM</span>
            <h1 class="heroDisplayTitle">${l(w.orgName)}</h1>
            <p>${l(w.motto)}</p>
          </div>
        </div>
        <div class="heroBannerBottom">
          <div class="heroBannerMeta">
            <span>Est. ${l(w.founded)}</span>
            <span aria-hidden="true">·</span>
            <span>${l(w.locationLabel)}</span>
          </div>
          <div class="heroToolbarActions">
            <button type="button" class="heroGhostBtn" data-open-subpage="news">Team News</button>
            <button type="button" class="heroPrimaryBtn" data-public-tab="squad">Explore Squad</button>
          </div>
        </div>
      </div>
    </section>

    <section class="kpiStripGrid" aria-label="Team overview metrics">
      <button type="button" class="kpiCardBtn" data-public-tab="squad">
        <div>
          <strong class="kpiValue num">${i.players.length}</strong>
          <span class="kpiLabel">Squad Players</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${W("squad")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-open-subpage="honours">
        <div>
          <strong class="kpiValue num">${i.honours.length}</strong>
          <span class="kpiLabel">Team Honours</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${rt("honours")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="matches">
        <div>
          <strong class="kpiValue num">${i.matches.length}</strong>
          <span class="kpiLabel">Matches</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${W("matches")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="gallery">
        <div>
          <strong class="kpiValue num">${i.gallery.length}</strong>
          <span class="kpiLabel">Gallery Photos</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${W("gallery")}</span>
      </button>
    </section>

    <div class="homeSplitGrid">
      <article class="surfaceCard">
        <div>
          <div class="sectionHeader" style="margin-bottom:12px;">
            <div>
              <span class="sectionKicker">Match Centre</span>
              <h2 class="sectionTitle">${e?"Upcoming Fixture":t?"Recent Match":"Match Schedule"}</h2>
            </div>
            <button type="button" class="btnGhost btnSm" data-public-tab="matches">Matches ›</button>
          </div>
          ${e||t?st(e||t):'<p class="sectionSub" style="margin-top:6px;">No upcoming match has been scheduled yet. Check back or contact team management.</p>'}
        </div>
      </article>

      <article class="surfaceCard">
        <div>
          <div class="sectionHeader" style="margin-bottom:12px;">
            <div>
              <span class="sectionKicker">Official Dispatch</span>
              <h2 class="sectionTitle">${s?l(b(s.title||"Team Update")):"Team Announcements"}</h2>
            </div>
            <button type="button" class="btnGhost btnSm" data-open-subpage="updates">All Updates ›</button>
          </div>
          ${s?`
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${l(b(s.text||""))}</p>
            ${s.date?`<p class="sectionSub num" style="margin-top:8px;">Published ${l(s.date)}</p>`:""}
          `:'<p class="sectionSub">Official news, fixtures, and team notices appear here when posted by team management.</p>'}
        </div>
        ${a!=null&&a.url&&N(a.url)?`
          <div style="margin-top:14px;">
            <button type="button" class="btnSecondary btnSm" data-ext-url="${l(N(a.url))}">Open Link ↗</button>
          </div>
        `:""}
      </article>
    </div>

    <section>
      <div class="sectionHeader" style="margin-bottom:12px;">
        <div>
          <span class="sectionKicker">Team Leadership</span>
          <h2 class="sectionTitle">Leading the Dominators</h2>
        </div>
        <button type="button" class="btnGhost btnSm" data-public-tab="squad">Full Squad ›</button>
      </div>
      <div class="leaderRow">
        ${o.map(u=>{const f=Ie(u.image);return`
            <button type="button" class="leaderCard" data-open-player="${l(u.id)}">
              <img class="${f.cls}" src="${l(f.src)}" alt="${l(u.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
              <div>
                <div class="leaderCardMeta">${l(b(u.role))}</div>
                <div class="leaderCardTitle">${l(b(u.name))}</div>
                ${u.detail?`<div class="leaderCardSub">${l(b(u.detail))}</div>`:""}
              </div>
            </button>
          `}).join("")}
      </div>
    </section>
  `}function st(e){const t=b(e.matchStatus||e.status||"Match"),a=[e.date,e.time,e.venueName||e.venue].filter(Boolean).map(b).join(" · ");return`
    <div>
      <div class="matchCardHead">
        <strong>RDM vs ${l(b(e.opponent||"Opponent"))}</strong>
        <span class="matchStatusText">${l(t)}</span>
      </div>
      ${a?`<div class="num" style="font-size:0.78rem;color:var(--ink-muted);margin-bottom:8px;">${l(a)}</div>`:""}
      ${e.ourScore||e.oppScore?`
        <div class="matchScoreRow num">
          <span>RDM: ${l(e.ourScore||"—")}</span>
          <span>${l(b(e.opponent||"Opp"))}: ${l(e.oppScore||"—")}</span>
        </div>
      `:""}
      ${e.result||e.note?`<p class="richText" style="margin:6px 0 0;font-size:0.84rem;color:var(--ink-secondary);">${l(b(e.result?`${e.result}${e.margin?" · "+e.margin:""}`:e.note))}</p>`:""}
      ${e.potm?`<p style="margin:6px 0 0;font-size:0.8rem;font-weight:700;color:var(--brand-blue);">Player of the Match: ${l(b(e.potm))}</p>`:""}
    </div>
  `}function Gt(){const e=p.squadQuery.trim().toLowerCase(),t=i.players.filter(a=>{const r=String(a.role||"").toUpperCase();return p.squadFilter==="ALL"||p.squadFilter==="LEADERS"&&(r.includes("CAPTAIN")||r.includes("KEEPER"))||p.squadFilter==="ALLROUNDER"&&r.includes("ALL-ROUNDER")||p.squadFilter==="BATSMAN"&&r.includes("BATSMAN")&&!r.includes("ALL-ROUNDER")?e?`${a.name} ${a.role} ${a.detail} ${a.id} ${de[a.id]||""} ${a.jersey||""}`.toLowerCase().includes(e):!0:!1});return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Official Roster</span>
        <h2 class="sectionTitle">RDM Squad</h2>
        <p class="sectionSub"><span class="num">${i.players.length}</span> registered players</p>
      </div>
    </div>

    <input id="squadSearchInput" class="searchInput" type="search" placeholder="Search player name, role, or jersey..." value="${l(p.squadQuery)}">

    <div class="filterRow">
      ${[["ALL","All Players"],["LEADERS","Leadership"],["ALLROUNDER","All-Rounders"],["BATSMAN","Batsmen"]].map(([a,r])=>`<button type="button" class="segTab ${p.squadFilter===a?"active":""}" data-squad-filter="${a}">${r}</button>`).join("")}
    </div>

    ${t.length?`
      <div class="squadGrid">
        ${t.map(a=>{const r=de[a.id]||a.id,s=Ie(a.image);return`
            <button type="button" class="playerCard" data-open-player="${l(a.id)}">
              <img class="playerCardAvatar ${s.cls}" src="${l(s.src)}" alt="${l(a.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
              <div class="playerCardBody">
                <span class="metaCode">${l(r)}${a.jersey?" · #"+l(a.jersey):""}</span>
                <h3>${l(b(a.name))}</h3>
                <div class="playerCardRole">${l(b(a.role))}</div>
                ${a.detail?`<div class="playerCardDetail">${l(b(a.detail))}</div>`:""}
              </div>
              <span class="chevron" aria-hidden="true">›</span>
            </button>
          `}).join("")}
      </div>
    `:'<div class="emptyState">No players match your current filter.</div>'}
  `}function Vt(){let e="";return p.matchesSubTab==="fixtures"?e=i.matches.length?`<div class="stackList">${i.matches.map(t=>`<article class="surfaceCard">${st(t)}</article>`).join("")}</div>`:'<div class="emptyState">No fixtures or match results added yet.</div>':p.matchesSubTab==="xi"?e=ot():e=it(),`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Schedule &amp; Results</span>
        <h2 class="sectionTitle">Matches Centre</h2>
      </div>
    </div>
    <div class="filterRow">
      ${[["fixtures","Fixtures & Results"],["xi","Playing XI"],["tournaments","Tournaments & Records"]].map(([t,a])=>`<button type="button" class="segTab ${p.matchesSubTab===t?"active":""}" data-matches-sub="${t}">${a}</button>`).join("")}
    </div>
    ${e}
  `}function ot(){return i.lineups.length?`<div class="stackList">${i.lineups.map(e=>`
    <article class="surfaceCard">
      <h3 style="margin:0 0 4px;font-size:1.25rem;">${l(b(e.title||"Playing XI"))}</h3>
      ${e.match?`<p style="margin:0 0 10px;font-size:0.8125rem;color:var(--ink-muted);">${l(b(e.match))}</p>`:""}
      <div class="xiGrid num">
        ${(e.players||[]).map((t,a)=>{const r=i.players.find(n=>n.id===t),s=`${a+1}. ${b((r==null?void 0:r.name)||t)}`;return r?`<button type="button" class="xiPlayerBtn" data-open-player="${l(t)}">${l(s)}</button>`:`<div style="padding:6px 8px;">${l(s)}</div>`}).join("")}
      </div>
      ${(e.subs||[]).length?`
        <p style="margin:10px 0 0;font-size:0.78rem;color:var(--ink-muted);">
          Substitutes: ${e.subs.map(t=>{var a;return l(b(((a=i.players.find(r=>r.id===t))==null?void 0:a.name)||t))}).join(" · ")}
        </p>
      `:""}
    </article>
  `).join("")}</div>`:'<div class="emptyState">No Playing XI published yet.</div>'}function it(){return i.tournaments.length>0||i.records.length>0||i.opponents.length>0?`
    <div class="stackList">
      ${i.tournaments.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">${l(b(t.status||"Tournament"))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${l(b(t.name||"Tournament"))}</h3>
          <p class="sectionSub num">${[t.season,t.position,t.venueName||t.venue].filter(Boolean).map(b).join(" · ")}</p>
          ${t.fixtures?`<p class="richText" style="margin:8px 0 0;font-size:0.82rem;color:var(--ink-secondary);">${l(t.fixtures)}</p>`:""}
        </article>
      `).join("")}
      ${i.records.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">${l(b(t.season||"Team Record"))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${l(b(t.title||"Record"))}</h3>
          <p style="margin:0;font-weight:700;color:var(--brand-blue);" class="num">${l(b(t.value||""))}${t.player?" · "+l(b(t.player)):""}</p>
        </article>
      `).join("")}
      ${i.opponents.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">Head-to-Head</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">RDM vs ${l(b(t.name||"Opponent"))}</h3>
          <p class="sectionSub num">${Number(t.played||0)} Played · ${Number(t.won||0)} Won · ${Number(t.lost||0)} Lost</p>
        </article>
      `).join("")}
    </div>
  `:'<div class="emptyState">No tournaments or team records recorded yet.</div>'}function lt(){return`
    <div class="honoursGrid">
      ${i.honours.map(e=>`
        <article class="honourCard">
          <button type="button" class="honourMediaBtn" data-zoom-src="${l(e.image||_())}" data-zoom-cap="${l(`${e.year} · ${e.title} — ${e.sub}`)}">
            <img src="${l(e.image||_())}" alt="${l(e.title)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
          </button>
          <div class="honourCardBody">
            <div class="honourCardTop">
              <span class="metaCode">${l(e.year)}</span>
              <span class="honourTapHint">Tap to view full</span>
            </div>
            <h3 class="honourCardTitle">${l(b(e.title))}</h3>
            <p class="honourCardSub">${l(b(e.sub))}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `}function Kt(){const e=["ALL","TEAM PHOTOS","MEMORIES","UPDATES"],t=i.gallery.filter(a=>{const r=String(a.album||"MEMORIES").toUpperCase();return p.galleryAlbum==="ALL"?!["MATCHES","TROPHIES"].includes(r):r===p.galleryAlbum});return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Team Memories</span>
        <h2 class="sectionTitle">Team Gallery</h2>
      </div>
    </div>

    <div class="filterRow">
      ${e.map(a=>`<button type="button" class="segTab ${p.galleryAlbum===a?"active":""}" data-gallery-album="${a}">${l(b(a))}</button>`).join("")}
    </div>

    ${t.length?`
      <div class="galleryGrid">
        ${t.map((a,r)=>`
          <button type="button" class="galleryTile" data-zoom-gallery="${r}">
            <img src="${l(a.image)}" alt="${l(a.caption||"RDM Memory")}" referrerPolicy="no-referrer">
            <div class="galleryTileCaption">
              <strong>${l(b(a.album||"Memories"))}</strong>
              <span>${l(b(a.caption||"RDM Memory"))}</span>
            </div>
          </button>
        `).join("")}
      </div>
    `:'<div class="emptyState">No photos added in this album yet.</div>'}

    <div class="sectionHeader" style="margin-top:8px;">
      <div>
        <span class="sectionKicker">Trophy Cabinet</span>
        <h2 class="sectionTitle">Team Honours</h2>
      </div>
    </div>
    ${lt()}
  `}function zt(){const e=Xe();return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Preferences &amp; Team Channels</span>
        <h2 class="sectionTitle">Settings &amp; More</h2>
        <p class="sectionSub">Use the top-left menu drawer to browse News, Records, Playing XI, and Team History.</p>
      </div>
    </div>

    <section class="surfaceCard">
      <div class="sectionHeader" style="margin-bottom:12px;">
        <div>
          <span class="sectionKicker">Theme Studio</span>
          <h3 class="sectionTitle" style="font-size:1.25rem;">Appearance &amp; Palette</h3>
          <p class="sectionSub">Active: ${l(at(p.theme))}</p>
        </div>
      </div>
      <div class="themeGrid">
        ${be.map(t=>`
          <button type="button" class="themeChoiceRow ${p.theme===t.id?"active":""}" data-quick-theme="${t.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${t.swatches.map(a=>`<span style="background:${a}"></span>`).join("")}
            </div>
            <div class="themeChoiceCopy">
              <strong>${l(t.label)}</strong>
              <span>${l(t.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${p.theme===t.id?"Active":"Apply"}</span>
          </button>
        `).join("")}
      </div>
    </section>

    <section class="surfaceCard">
      <span class="sectionKicker">Connect</span>
      <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:10px;">Official Channels &amp; Contact</h3>
      <div class="linkRowWrap">
        <button type="button" class="linkActionBtn" data-ext-url="${l(w.captainContactUrl)}">WhatsApp Captain ↗</button>
        ${i.socials.filter(t=>N(t.url)).map(t=>`
          <button type="button" class="linkActionBtn" data-ext-url="${l(N(t.url))}">${l(b(t.displayName||t.name))} ↗</button>
        `).join("")}
      </div>
    </section>

    <section class="surfaceCard">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Android App · ${l(Ce())}</span>
          <h3 class="sectionTitle" style="font-size:1.22rem;">App &amp; Sync</h3>
          <p class="sectionSub">${ke()?"RDM Official Android App · Live Cloud Sync Active":"Download the Android APK directly from GitHub or sync live team data"}</p>
        </div>
        <div class="rowActions">
          <button type="button" class="btnPrimary btnSm" data-ext-url="${l(fe())}">Download APK ↗</button>
          <button type="button" class="btnSecondary btnSm" id="btnRefreshClub">Sync Team Data</button>
          ${e?'<button type="button" class="btnSecondary btnSm" id="btnInstallWebApp">Install Web App</button>':""}
        </div>
      </div>
    </section>
  `}function Yt(){const e=i.players.find(c=>c.id===p.detailPlayerId);if(!e)return`
      ${pe({title:"Player Profile",showBack:!0,showPublicNav:!0})}
      <div class="tabContent fullPageContent">
        <div class="emptyState">Player record not found.</div>
      </div>
      ${me()}
    `;const t=Ie(e.image),a=i.stats.find(c=>c.playerId===e.id),r=i.availability.find(c=>c.playerId===e.id),s=de[e.id]||e.id,n=(Array.isArray(e.socials)?e.socials:[]).filter(c=>N((c==null?void 0:c.url)||c)),d=a&&(Number(a.matches)>0||Number(a.runs)>0||Number(a.wickets)>0||Number(a.highScore)>0);return`
    ${pe({title:b(e.name),showBack:!0,showPublicNav:!0})}
    <div class="tabContent fullPageContent">
      <section class="fullProfileHero">
        <img class="fullProfileAvatar ${t.cls}" src="${l(t.src)}" alt="${l(e.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
        <div>
          <span class="metaCode">${l(s)} · ${l(e.id)}${e.jersey?" · #"+l(e.jersey):""}</span>
          <h1 class="fullProfileName">${l(b(e.name))}</h1>
          <div class="fullProfileRole">${l(b(e.role))}</div>
          ${e.detail?`<p class="fullProfileMeta richText" style="margin:6px auto 0;">${l(b(e.detail))}</p>`:""}
          ${e.nick?`<p class="sectionSub" style="margin-top:6px;">Nickname: ${l(b(e.nick))}</p>`:""}
          ${r!=null&&r.status?`<p class="sectionSub" style="margin-top:4px;font-weight:700;color:var(--brand-blue);">Match Status: ${l(b(r.status))}</p>`:""}
        </div>
        <div>
          <button type="button" class="btnPrimary btnSm" id="btnDownloadDetailCard">Download Player Card</button>
        </div>
      </section>

      ${e.bio?`
        <section class="surfaceCard">
          <span class="sectionKicker">About Player</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:6px;">Player Biography</h2>
          <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.9rem;">${l(b(e.bio))}</p>
        </section>
      `:""}

      <section class="surfaceCard">
        <span class="sectionKicker">Performance</span>
        <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Verified Career Statistics</h2>
        ${d?`
          <div class="statGrid4">
            <div class="statCell"><strong class="num">${Number(a.matches||0)}</strong><span>Matches</span></div>
            <div class="statCell"><strong class="num">${Number(a.runs||0)}</strong><span>Runs</span></div>
            <div class="statCell"><strong class="num">${Number(a.highScore||0)}</strong><span>High Score</span></div>
            <div class="statCell"><strong class="num">${Number(a.wickets||0)}</strong><span>Wickets</span></div>
          </div>
          <div class="statSubRow num">
            <span>4s/6s: ${Number(a.fours||0)}/${Number(a.sixes||0)}</span>
            <span>50s/100s: ${Number(a.fifties||0)}/${Number(a.hundreds||0)}</span>
            <span>SR: ${Number(a.strikeRate||0)}</span>
            <span>Econ: ${Number(a.economy||0)}</span>
            <span>Best: ${l(a.bestBowling||"—")}</span>
          </div>
        `:'<p class="sectionSub">No verified career statistics recorded for this player yet.</p>'}
      </section>

      ${n.length?`
        <section class="surfaceCard">
          <span class="sectionKicker">Connect</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Official Social Links</h2>
          <div class="linkRowWrap">
            ${n.map((c,o)=>{const u=N(typeof c=="string"?c:c.url),f=typeof c=="string"?`Social ${o+1}`:c.name||`Social ${o+1}`;return`<button type="button" class="linkActionBtn" data-ext-url="${l(u)}">${l(b(f))} ↗</button>`}).join("")}
          </div>
        </section>
      `:""}
    </div>
    ${me()}
  `}function Jt(){const t={news:"Team News",updates:"Official Updates",records:"Team Records",tournaments:"Tournaments & H2H",xi:"Playing XI",honours:"Team Honours",socials:"Channels & Contact",about:"About RDM",download:"Get Android App"}[p.morePage]||"Team Info";let a="";if(p.morePage==="news")a=i.news.length?`<div class="stackList">${i.news.map(r=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${r.pinned?"Pinned Announcement":"Team News"}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${l(b(r.title||"Announcement"))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${l(b(r.text||""))}</p>
          </article>
        `).join("")}</div>`:'<div class="emptyState">No team news announcements posted yet.</div>';else if(p.morePage==="updates")a=i.updates.length?`<div class="stackList">${i.updates.map(r=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${l(b(r.category||"Official Update"))}${r.date?" · "+l(r.date):""}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${l(b(r.title||"Update"))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${l(b(r.text||""))}</p>
            ${r.url&&N(r.url)?`<div style="margin-top:12px;"><button type="button" class="btnSecondary btnSm" data-ext-url="${l(N(r.url))}">Open Link ↗</button></div>`:""}
          </article>
        `).join("")}</div>`:'<div class="emptyState">No official updates published yet.</div>';else if(p.morePage==="xi")a=ot();else if(p.morePage==="records")a=i.records.length?`<div class="stackList">${i.records.map(r=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${l(b(r.season||"Team Record"))}</span>
            <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:4px;">${l(b(r.title||"Record"))}</h3>
            <p style="margin:0;font-weight:700;color:var(--brand-blue);" class="num">${l(b(r.value||""))}${r.player?" · "+l(b(r.player)):""}</p>
          </article>
        `).join("")}</div>`:'<div class="emptyState">No team records recorded yet.</div>';else if(p.morePage==="tournaments")a=it();else if(p.morePage==="honours")a=lt();else if(p.morePage==="socials")a=`
      <div class="surfaceCard">
        <span class="sectionKicker">Direct Contact</span>
        <h3 class="sectionTitle" style="font-size:1.3rem;margin-bottom:8px;">Team Channels &amp; Captain</h3>
        <div class="linkRowWrap">
          <button type="button" class="linkActionBtn" data-ext-url="${l(w.captainContactUrl)}">WhatsApp Captain ↗</button>
          ${i.socials.filter(r=>N(r.url)).map(r=>`
            <button type="button" class="linkActionBtn" data-ext-url="${l(N(r.url))}">${l(b(r.displayName||r.name))} ↗</button>
          `).join("")}
        </div>
      </div>
    `;else if(p.morePage==="about")a=`
      <div class="surfaceCard">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px;">
          <img src="${l(_())}" alt="RDM Logo" referrerPolicy="no-referrer" style="width:64px;height:64px;border-radius:50%;background:#FFFFFF;border:1px solid var(--border-strong);padding:4px;object-fit:contain;">
          <div>
            <h3 class="sectionTitle">${l(b(w.orgName))}</h3>
            <p class="sectionSub">Founded ${l(w.founded)} · ${l(w.location)}</p>
          </div>
        </div>
        <p class="richText" style="margin:0;color:var(--ink-secondary);">${l(w.motto)} — Official cricket team app uniting the squad, fixtures, honours, and supporters of Rehan Dominators Mahuawan.</p>
      </div>
    `;else{const r=Xe();a=`
      <div class="surfaceCard">
        <span class="sectionKicker">Android APK · ${l(Ce())}</span>
        <h3 class="sectionTitle" style="font-size:1.35rem;margin-bottom:8px;">RDM Official Android App</h3>
        <p style="margin:0 0 14px;color:var(--ink-secondary);font-size:0.9rem;">
          ${ke()?"You are running the native RDM Official Android App. All squad profiles, fixtures, news, and updates sync live with the website.":"Download the latest RDM Official Android APK directly from GitHub Releases. Every update posted on the website syncs live inside the Android App."}
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          <button type="button" class="btnPrimary btnSm" data-ext-url="${l(fe())}">${ke()?"Download Latest APK ↗":"Download Android APK ↗"}</button>
          <button type="button" class="btnSecondary btnSm" data-ext-url="${l(nt())}">GitHub Releases ↗</button>
          ${r?'<button type="button" class="btnSecondary btnSm" id="btnInstallWebApp">Install Web App</button>':""}
          <button type="button" class="btnSecondary btnSm" data-public-tab="home">Back to Home</button>
        </div>
      </div>
    `}return`
    ${pe({title:t,showBack:!0,showPublicNav:!0})}
    <div class="tabContent fullPageContent">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Rehan Dominators Mahuawan</span>
          <h1 class="sectionTitle">${l(t)}</h1>
        </div>
      </div>
      ${a}
    </div>
    ${me()}
  `}function Xt(){return ye()}function Qt(){return ye()}function Zt(){return ye()}function ye(){let e="";return p.publicTab==="home"?e=Wt():p.publicTab==="squad"?e=Gt():p.publicTab==="matches"?e=Vt():p.publicTab==="gallery"?e=Kt():e=zt(),`
    ${pe({title:"RDM Official",showBack:!1,showPublicNav:!0})}
    <div class="tabContent">${e}</div>
    ${me()}
    ${jt()}
  `}function A(){const e=document.getElementById("appViewport");if(!e)return;let t="";p.screen==="playerDetail"?t=Yt():p.screen==="subpage"?t=Jt():p.screen==="playerPortal"?t=Qt():p.screen==="portalAuth"?t=Xt():p.screen==="admin"?t=Zt():t=ye(),e.innerHTML=t+qt(),ea()}function ea(){var s,n,d,c,o,u,f,y,g,S,k,P,m,v,J;const e=h=>document.getElementById(h);(s=e("btnStepBack"))==null||s.addEventListener("click",()=>{tt()||j({screen:"public",publicTab:"home"})}),(n=e("btnOpenDrawer"))==null||n.addEventListener("click",()=>{ee(!0)});const t=e("drawerOverlay"),a=e("drawerPanel");if(t==null||t.addEventListener("click",h=>{h.target.id==="drawerOverlay"&&ee(!1)}),t&&a){let h=0,T=0,$=!1;a.addEventListener("touchstart",I=>{!p.drawerOpen||I.touches.length!==1||(h=I.touches[0].clientX,T=0,$=!0,t.classList.add("dragging"))},{passive:!0}),a.addEventListener("touchmove",I=>{if(!$||I.touches.length!==1)return;const R=I.touches[0].clientX-h;T=Math.min(0,R),a.style.transform=`translateX(${T}px)`},{passive:!0});const F=()=>{$&&($=!1,t.classList.remove("dragging"),a.style.transform="",T<=-68&&ee(!1))};a.addEventListener("touchend",F,{passive:!0}),a.addEventListener("touchcancel",F,{passive:!0})}(d=e("btnPickTheme"))==null||d.addEventListener("click",()=>{Ve({currentTheme:p.theme,onSelectTheme:ce})}),(c=e("btnDrawerTheme"))==null||c.addEventListener("click",()=>{ee(!1),Ve({currentTheme:p.theme,onSelectTheme:ce})}),document.querySelectorAll("[data-quick-theme]").forEach(h=>{h.addEventListener("click",()=>ce(h.dataset.quickTheme))}),(o=e("btnBrandHome"))==null||o.addEventListener("click",()=>{j({screen:"public",publicTab:"home"})}),(u=e("btnPortalPublicView"))==null||u.addEventListener("click",()=>{j({screen:"public",publicTab:"home"})}),(f=e("btnReturnPortal"))==null||f.addEventListener("click",()=>{}),(y=e("btnRefreshClub"))==null||y.addEventListener("click",async()=>{E("Syncing team data..."),await U(),A(),E("Team data synced")}),(g=e("btnRetrySync"))==null||g.addEventListener("click",async()=>{await U(),A()}),(S=e("btnInstallWebApp"))==null||S.addEventListener("click",async()=>{await Ft()&&(A(),E("App installed"))}),(k=e("btnLogout"))==null||k.addEventListener("click",()=>{Ee({title:"Confirm Sign Out",message:"Sign out of Cloud Sync on this browser?",confirmLabel:"Sign Out",danger:!0,onConfirm:async()=>{await Oe(),p.drawerOpen=!1,p.portalMode==="admin"||A(),E("Signed out")}})}),(P=e("btnTogglePw"))==null||P.addEventListener("click",()=>{const h=e("loginPassword"),T=e("btnTogglePw");if(!h||!T)return;const $=h.type==="password";h.type=$?"text":"password",T.textContent=$?"Hide":"Show"}),(m=e("btnForgotPw"))==null||m.addEventListener("click",()=>{var T,$;const h=(($=(T=e("loginEmail"))==null?void 0:T.value)==null?void 0:$.trim())||"";C({title:"Reset Password",subtitle:"Receive a Firebase password reset link on your registered email",fields:[{name:"email",label:"Registered Email",type:"email",value:h,required:!0}],submitLabel:"Send Reset Link",onSubmit:async F=>{await mt(F.email),E("Password reset email sent")}})}),(v=e("rdmPortalAuthForm"))==null||v.addEventListener("submit",async h=>{var F,I;h.preventDefault();const T=((F=e("loginEmail"))==null?void 0:F.value)||"",$=((I=e("loginPassword"))==null?void 0:I.value)||"";p.loginBusy=!0,p.loginError="",A();try{const R=await pt(T,$);if(p.loginBusy=!1,R.role!=="admin"){await Oe(),p.loginError="Admin authorization required for this private link.",A();return}E("Admin Cloud Sync verified"),j({screen:"admin",adminTab:"overview"},{replace:!0})}catch(R){p.loginBusy=!1;const D=String((R==null?void 0:R.code)||(R==null?void 0:R.message)||"");D.includes("wrong-password")||D.includes("invalid-credential")||D.includes("user-not-found")||D.includes("INVALID_LOGIN_CREDENTIALS")?p.loginError="Invalid email or password.":D==="ACCOUNT_INACTIVE"||D==="NO_ACCOUNT_RECORD"||D==="INVALID_ROLE_MAPPING"?p.loginError="Your account is inactive or lacks Admin authorization.":D.includes("too-many-requests")?p.loginError="Too many attempts. Please wait before trying again.":p.loginError="Verification failed. Check your network and credentials.",A()}}),document.querySelectorAll("[data-public-tab]").forEach(h=>{h.addEventListener("click",()=>{j({screen:"public",publicTab:h.dataset.publicTab})})}),document.querySelectorAll("[data-open-subpage]").forEach(h=>{h.addEventListener("click",()=>{j({screen:"subpage",morePage:h.dataset.openSubpage})})}),document.querySelectorAll("[data-open-player]").forEach(h=>{h.addEventListener("click",()=>{j({screen:"playerDetail",detailPlayerId:h.dataset.openPlayer})})}),(J=e("btnDownloadDetailCard"))==null||J.addEventListener("click",async()=>{const h=i.players.find(T=>T.id===p.detailPlayerId);if(h)try{await xt({player:h,brandLogo:_()})}catch{E("Unable to export profile card")}});const r=e("squadSearchInput");r&&r.addEventListener("input",h=>{const T=h.target.selectionStart;p.squadQuery=h.target.value,A();const $=document.getElementById("squadSearchInput");if($){$.focus();try{$.setSelectionRange(T,T)}catch{}}}),document.querySelectorAll("[data-squad-filter]").forEach(h=>{h.addEventListener("click",()=>{p.squadFilter=h.dataset.squadFilter,A()})}),document.querySelectorAll("[data-matches-sub]").forEach(h=>{h.addEventListener("click",()=>{p.matchesSubTab=h.dataset.matchesSub,A()})}),document.querySelectorAll("[data-gallery-album]").forEach(h=>{h.addEventListener("click",()=>{p.galleryAlbum=h.dataset.galleryAlbum,A()})}),document.querySelectorAll("[data-zoom-gallery]").forEach(h=>{h.addEventListener("click",()=>{const $=i.gallery.filter(F=>{const I=String(F.album||"MEMORIES").toUpperCase();return p.galleryAlbum==="ALL"?!["MATCHES","TROPHIES"].includes(I):I===p.galleryAlbum})[Number(h.dataset.zoomGallery)];$!=null&&$.image&&Ke($.image,b($.caption||"RDM Gallery"))})}),document.querySelectorAll("[data-zoom-src]").forEach(h=>{h.addEventListener("click",()=>Ke(h.dataset.zoomSrc,h.dataset.zoomCap||""))}),document.querySelectorAll("[data-ext-url]").forEach(h=>{h.addEventListener("click",()=>Ut(h.dataset.extUrl))}),ta()}function ta(){z()&&(document.querySelectorAll("[data-admin-tab]").forEach(e=>{e.addEventListener("click",()=>{j({screen:"admin",adminTab:e.dataset.adminTab},{replace:!0})})}),document.querySelectorAll("[data-admin-action]").forEach(e=>{e.addEventListener("click",()=>aa(e.dataset.adminAction))}),document.querySelectorAll("[data-admin-edit-player]").forEach(e=>{e.addEventListener("click",()=>{const t=i.players.find(a=>a.id===e.dataset.adminEditPlayer);t&&C({title:`Edit ${b(t.name)}`,fields:[{name:"name",label:"Player Name",value:t.name,required:!0},{name:"role",label:"Role",value:t.role,required:!0},{name:"detail",label:"Playing Detail",type:"textarea",value:t.detail,rows:3},{name:"jersey",label:"Jersey Number",value:t.jersey||""},{name:"nick",label:"Nickname",value:t.nick||""},{name:"bio",label:"Bio",type:"textarea",value:t.bio||"",rows:3},{name:"photo",label:"Replace Photo (Optional)",type:"file"}],onSubmit:async a=>{const r={...a};a.photo&&(r.image=await le(a.photo,700,.74)),await ft(t.id,r),A(),E("Player updated")}})})}),document.querySelectorAll("[data-admin-remove-player]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.adminRemovePlayer,a=i.players.find(r=>r.id===t);Ee({title:"Remove Player",message:`Remove ${b((a==null?void 0:a.name)||t)} (${t}) from the active RDM squad?`,confirmLabel:"Remove",danger:!0,onConfirm:async()=>{await vt(t),A(),E("Player removed")}})})}),document.querySelectorAll("[data-admin-edit-stats]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.adminEditStats,a=i.players.find(s=>s.id===t),r=i.stats.find(s=>s.playerId===t)||{};C({title:`Stats · ${b((a==null?void 0:a.name)||t)}`,fields:[{name:"matches",label:"Matches",type:"number",value:r.matches||0},{name:"runs",label:"Runs",type:"number",value:r.runs||0},{name:"highScore",label:"High Score",type:"number",value:r.highScore||0},{name:"wickets",label:"Wickets",type:"number",value:r.wickets||0},{name:"fours",label:"Fours",type:"number",value:r.fours||0},{name:"sixes",label:"Sixes",type:"number",value:r.sixes||0},{name:"fifties",label:"50s",type:"number",value:r.fifties||0},{name:"hundreds",label:"100s",type:"number",value:r.hundreds||0},{name:"strikeRate",label:"Strike Rate",type:"number",value:r.strikeRate||0},{name:"economy",label:"Economy",type:"number",value:r.economy||0},{name:"bestBowling",label:"Best Bowling",value:r.bestBowling||""},{name:"season",label:"Season",value:r.season||"2027"}],onSubmit:async s=>{const n=d=>Number(d||0)||0;await B("PlayerStats",t,{playerId:t,matches:n(s.matches),runs:n(s.runs),highScore:n(s.highScore),wickets:n(s.wickets),fours:n(s.fours),sixes:n(s.sixes),fifties:n(s.fifties),hundreds:n(s.hundreds),strikeRate:n(s.strikeRate),economy:n(s.economy),bestBowling:s.bestBowling,season:s.season}),A(),E("Player stats saved")}})})}),document.querySelectorAll("[data-admin-avail]").forEach(e=>{e.addEventListener("click",()=>{var r;const t=e.dataset.adminAvail,a=((r=i.availability.find(s=>s.playerId===t))==null?void 0:r.status)||"AVAILABLE";C({title:`Availability · ${t}`,fields:[{name:"status",label:"Status",type:"select",value:a,options:["AVAILABLE","UNAVAILABLE"]}],onSubmit:async s=>{await bt(t,s.status),A(),E("Availability saved")}})})}),document.querySelectorAll("[data-admin-edit-match]").forEach(e=>{e.addEventListener("click",()=>{const t=i.matches.find(a=>a._docId===e.dataset.adminEditMatch);t&&ct(t)})}),document.querySelectorAll("[data-admin-edit-social]").forEach(e=>{e.addEventListener("click",()=>{const t=i.socials.find(a=>a._docId===e.dataset.adminEditSocial);t&&C({title:"Edit Social Channel",fields:[{name:"name",label:"Platform",value:t.name||"",required:!0},{name:"displayName",label:"Display Title",value:t.displayName||t.name||""},{name:"url",label:"URL",value:t.url||"",placeholder:"https://..."}],onSubmit:async a=>{await B("Socials",t._docId,{name:a.name.toUpperCase(),displayName:a.displayName||a.name,url:a.url,icon:t.icon||"↗",order:t.order||9}),A(),E("Social updated")}})})}),document.querySelectorAll("[data-admin-pin]").forEach(e=>{e.addEventListener("click",async()=>{const[t,a,r]=e.dataset.adminPin.split(":");try{await wt(t,a,r==="1"),A(),E(r==="1"?"Pinned to Home":"Unpinned")}catch(s){E((s==null?void 0:s.message)||"Pin update failed")}})}),document.querySelectorAll("[data-admin-del]").forEach(e=>{e.addEventListener("click",()=>{const[t,a]=e.dataset.adminDel.split(":");Ee({title:"Delete Record",message:"Permanently delete this record from Firestore?",confirmLabel:"Delete",danger:!0,onConfirm:async()=>{await gt(t,a),A(),E("Deleted")}})})}))}function ct(e=null){C({title:e?"Edit Match":"Add Match / Result",fields:[{name:"opponent",label:"Opponent Team",value:(e==null?void 0:e.opponent)||"",required:!0},{name:"matchStatus",label:"Status",type:"select",value:(e==null?void 0:e.matchStatus)||(e==null?void 0:e.status)||"UPCOMING",options:["UPCOMING","LIVE","COMPLETED","CANCELLED"]},{name:"date",label:"Date",type:"date",value:(e==null?void 0:e.date)||""},{name:"time",label:"Time",type:"time",value:(e==null?void 0:e.time)||""},{name:"venueName",label:"Venue / Ground",value:(e==null?void 0:e.venueName)||(e==null?void 0:e.venue)||""},{name:"ourScore",label:"RDM Score",value:(e==null?void 0:e.ourScore)||""},{name:"oppScore",label:"Opponent Score",value:(e==null?void 0:e.oppScore)||""},{name:"result",label:"Result (if completed)",value:(e==null?void 0:e.result)||""},{name:"potm",label:"Player of the Match",value:(e==null?void 0:e.potm)||""},{name:"note",label:"Match Notes",type:"textarea",value:(e==null?void 0:e.note)||"",placeholder:"Enter key match details (line breaks & spaces preserved)",rows:4}],onSubmit:async t=>{await B("Matches",(e==null?void 0:e._docId)||null,{...t,venue:t.venueName,status:t.matchStatus==="COMPLETED"?"RESULT":t.matchStatus,createdMs:(e==null?void 0:e.createdMs)||Date.now()}),A(),E("Match saved")}})}function aa(e){if(e==="addMatch")return ct(null);if(e==="addNews")return C({title:"Add Team News",fields:[{name:"title",label:"Title",required:!0},{name:"text",label:"Announcement",type:"textarea",placeholder:"Write announcement (Enter for new lines & spaces preserved)",rows:5,required:!0},{name:"pinned",label:"Pin announcement",type:"checkbox"}],onSubmit:async t=>{await B("News",null,{title:t.title,text:t.text,pinned:!!t.pinned,createdMs:Date.now()}),A(),E("News added")}});if(e==="addUpdate")return C({title:"Add Official Update",fields:[{name:"category",label:"Category",type:"select",options:["WEBSITE","SOCIAL MEDIA","PLATFORM","ACCOUNT","FEATURE","OTHER"]},{name:"title",label:"Title",required:!0},{name:"text",label:"Description",type:"textarea",placeholder:"Write full update (Enter for new lines & spaces preserved)",rows:5,required:!0},{name:"url",label:"Optional Link",placeholder:"https://..."},{name:"pinned",label:"Pin to Home",type:"checkbox"}],onSubmit:async t=>{await B("Updates",null,{category:t.category,title:t.title,text:t.text,url:t.url,pinned:!!t.pinned,date:new Date().toISOString().slice(0,10),createdMs:Date.now()}),A(),E("Update saved")}});if(e==="addGallery")return C({title:"Add Gallery Photo",fields:[{name:"photo",label:"Select Image",type:"file",required:!0},{name:"caption",label:"Caption",value:"RDM Memory"},{name:"album",label:"Album",type:"select",value:"MEMORIES",options:["TEAM PHOTOS","MEMORIES","UPDATES"]}],onSubmit:async t=>{if(!t.photo)throw new Error("Image required");const a=await le(t.photo,960,.72);await B("Gallery",null,{image:a,caption:t.caption,album:t.album,createdMs:Date.now()}),A(),E("Photo uploaded")}});if(e==="addPlayer"){const t=i.players.map(r=>Number(String(r.id).replace(/\D/g,""))).filter(Number.isFinite),a=`RDM${String(Math.max(17,...t)+1).padStart(3,"0")}`;return C({title:`Add Player (${a})`,fields:[{name:"name",label:"Full Name",required:!0},{name:"role",label:"Role",required:!0},{name:"detail",label:"Playing Style / Detail",type:"textarea",rows:3},{name:"jersey",label:"Jersey Number"},{name:"photo",label:"Profile Photo (Optional)",type:"file"}],onSubmit:async r=>{const s=r.photo?await le(r.photo,700,.74):"";await B("TeamPlayers",a,{id:a,name:r.name.toUpperCase(),role:r.role.toUpperCase(),detail:r.detail.toUpperCase(),jersey:r.jersey,image:s,order:i.players.length+1,active:!0}),A(),E("Player added")}})}if(e==="addLineup")return C({title:"Publish Playing XI",fields:[{name:"title",label:"Title",value:"Playing XI",required:!0},{name:"match",label:"Match / Opponent"},{name:"players",label:"11 Player IDs (comma separated)",type:"textarea",value:"RDM001,RDM002,RDM003,RDM004,RDM005,RDM006,RDM007,RDM008,RDM009,RDM010,RDM011",rows:3},{name:"subs",label:"Substitutes (comma separated)",value:"RDM012,RDM013,RDM014,RDM015"}],onSubmit:async t=>{const a=n=>[...new Set(String(n||"").split(",").map(d=>d.trim().toUpperCase()).filter(d=>/^RDM\d{3}$/.test(d)))],r=a(t.players).slice(0,11),s=a(t.subs).filter(n=>!r.includes(n));if(r.length!==11)throw new Error("Playing XI requires 11 valid Player IDs");await B("PlayingXI",null,{title:t.title,match:t.match,players:r,subs:s,createdMs:Date.now()}),A(),E("Playing XI published")}});if(e==="addHonour")return C({title:"Add Team Honour",fields:[{name:"year",label:"Year",value:String(new Date().getFullYear()),required:!0},{name:"title",label:"Result (e.g. Winner)",required:!0},{name:"sub",label:"Tournament Name",required:!0}],onSubmit:async t=>{await B("Honours",null,{year:t.year,title:t.title,sub:t.sub,image:w.logoPath,order:i.honours.length+1}),A(),E("Honour saved")}});if(e==="addTournament")return C({title:"Add Tournament",fields:[{name:"name",label:"Tournament Name",required:!0},{name:"season",label:"Season / Year",value:String(new Date().getFullYear())},{name:"status",label:"Status",type:"select",options:["UPCOMING","ONGOING","COMPLETED"]},{name:"position",label:"Final Position"},{name:"venueName",label:"Venue"}],onSubmit:async t=>{await B("Tournaments",null,{...t,venue:t.venueName,createdMs:Date.now()}),A(),E("Tournament added")}});if(e==="addRecord")return C({title:"Add Team Record",fields:[{name:"title",label:"Record Title",placeholder:"e.g. Highest Team Score",required:!0},{name:"value",label:"Record Value",placeholder:"e.g. 214/3 (20 Ov)",required:!0},{name:"player",label:"Player Name (Optional)"},{name:"season",label:"Season / Year",value:String(new Date().getFullYear())}],onSubmit:async t=>{await B("TeamRecords",null,{...t,createdMs:Date.now()}),A(),E("Record saved")}});if(e==="editAppConfig")return C({title:"App & GitHub APK Settings",subtitle:"Changes sync live to both the Website and Android App",fields:[{name:"appVersion",label:"App Version",value:Ce(),required:!0},{name:"apkDownloadUrl",label:"Direct APK Download URL",value:fe(),required:!0},{name:"apkReleasesUrl",label:"GitHub Releases Page URL",value:nt(),required:!0},{name:"logoPhoto",label:"Update Team Logo (Optional)",type:"file"}],onSubmit:async t=>{const a=t.logoPhoto?await le(t.logoPhoto,600,.8):"";await yt({appVersion:t.appVersion,apkDownloadUrl:t.apkDownloadUrl,apkReleasesUrl:t.apkReleasesUrl,logo:a}),A(),E("App & APK settings synced")}});if(e==="addSocial")return C({title:"Add Social Channel",fields:[{name:"name",label:"Platform",placeholder:"INSTAGRAM",required:!0},{name:"displayName",label:"Display Name",placeholder:"RDM Instagram"},{name:"url",label:"URL",placeholder:"https://...",required:!0}],onSubmit:async t=>{await B("Socials",null,{name:t.name.toUpperCase(),displayName:t.displayName||t.name,url:t.url,icon:"↗",order:i.socials.length+1}),A(),E("Social channel added")}})}function na(){if(tt())return;const e=Date.now();if(e-p.lastBackPressAt<2e3){Nt();return}p.lastBackPressAt=e,E("Press back again to exit RDM Official")}async function ra(){ce(p.theme);const e=et();M.length=0,M.push(e);try{window.history.replaceState({rdmIdx:0},"",te(e))}catch{}window.addEventListener("popstate",()=>{if(Ae()){Ze();try{window.history.pushState({rdmIdx:M.length-1},"",te(M[M.length-1]))}catch{}return}if(p.drawerOpen){ee(!1);try{window.history.pushState({rdmIdx:M.length-1},"",te(M[M.length-1]))}catch{}return}M.length>1&&(M.pop(),Le(M[M.length-1]))}),await Bt(na),window.addEventListener("rdm-pwa-ready",()=>{(p.screen==="public"&&p.publicTab==="more"||p.screen==="subpage"&&p.morePage==="download")&&A()}),await U(),ut(()=>{const t=document.activeElement,a=t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.tagName==="SELECT");!Ae()&&!a&&A()}),ht(({role:t,verified:a})=>{p.screen==="admin"||p.screen==="portalAuth"||p.screen==="playerPortal"?j({screen:"public",publicTab:"home"},{replace:!0}):A(),Ge()}),setTimeout(()=>Ge(),1200)}ra();export{Te as W};
