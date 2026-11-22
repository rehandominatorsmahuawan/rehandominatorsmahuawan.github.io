(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const T={versionName:"1.2.0",versionCode:3},wt="https://rehandominatorsmahuawan.github.io/version.json",St=["rehanalam7124517@gmail.com","admin@rdm-official.in"];function we(t="0.0.0",e="0.0.0"){const a=c=>String(c||"").replace(/^v/i,"").split(/[^0-9]+/).filter(Boolean).map(Number),r=a(t),o=a(e),n=Math.max(r.length,o.length,3);for(let c=0;c<n;c++){const d=r[c]||0,l=o[c]||0;if(d<l)return-1;if(d>l)return 1}return 0}const w={appName:"RDM Official",orgName:"REHAN DOMINATORS MAHUAWAN",shortName:"RDM",location:"MAHUAWAN • GOPALGANJ • BIHAR",locationLabel:"Mahuawan, Gopalganj, Bihar",founded:"2024",motto:"ONE TEAM • ONE DREAM • ONE DOMINATION",tagline:"YOUR TEAM. YOUR PRIDE. YOUR GAME.",subtitle:"THE HOME OF REHAN DOMINATORS MAHUAWAN",captainContactUrl:"https://wa.me/918521254605",captainPhoneDisplay:"+91 85212 54605",appVersion:T.versionName,apkDownloadUrl:"https://github.com/RehanDominatorsMahuawan/RehanDominatorsMahuawan.github.io/releases/latest/download/RDM-Official.apk",apkReleasesUrl:"https://github.com/RehanDominatorsMahuawan/RehanDominatorsMahuawan.github.io/releases/latest",websiteUrl:"https://rehandominatorsmahuawan.github.io/",logoPath:"assets/rdm-logo.png",heroImagePath:"src/assets/images/hero_cricket_stadium_1794890926411.jpg",heritageImagePath:"src/assets/images/club_heritage_banner_1794890926814.jpg"},oe={RDM001:"RA08",RDM003:"SA-V",RDM006:"SO-WK",RDM004:"AKA",RDM002:"ASI",RDM007:"WSM",RDM008:"JBD",RDM010:"GLM",RDM011:"SHA57",RDM005:"SAL02",RDM012:"LKY",RDM016:"KLF",RDM009:"SKH",RDM013:"ABS",RDM014:"SBA",RDM015:"ZSN",RDM017:"JVD"},Ae={RDM001:{nick:"The Skipper",bio:"Captain and all-rounder who leads from the front with discipline, confidence and team-first cricket."},RDM002:{nick:"The Anchor",bio:"A reliable top-order batsman who values a solid start, smart shot selection and steady runs."},RDM003:{nick:"The Game Changer",bio:"Vice-captain and all-rounder who brings flexibility, energy and impact through every phase of the game."},RDM004:{nick:"The Attacker",bio:"An aggressive strike opener and fast-bowling all-rounder built to set the tempo and deliver under pressure."},RDM005:{nick:"The Finisher",bio:"A calm middle-order batsman who backs his shots and looks to finish innings with confidence."},RDM006:{nick:"The Gloveman",bio:"The team main wicket-keeper and a versatile batsman who adds energy, awareness and balance to the team."},RDM007:{nick:"The Complete Package",bio:"A top-order all-rounder who can contribute with bat and ball across every phase of the match."},RDM008:{nick:"The Middle Rock",bio:"A dependable middle-order batsman focused on building partnerships and keeping the innings moving."},RDM009:{nick:"The Closer",bio:"A finisher who enjoys pressure moments and looks to give the team a strong end to the innings."},RDM010:{nick:"The Impact Player",bio:"A useful all-rounder and finisher who can change momentum with quick runs and emergency bowling."},RDM011:{nick:"The Middle Order Maestro",bio:"A right-handed middle-order batsman who adds stability and depth to the batting line-up."},RDM012:{nick:"The All-Rounder",bio:"A versatile all-rounder who can contribute with bat or ball when the team needs him."},RDM013:{nick:"The Utility Ace",bio:"A flexible all-rounder who can finish with the bat and handle important middle or death overs."},RDM014:{nick:"The Power Finisher",bio:"A batsman with a finisher role who looks to add quick runs and impact."},RDM015:{nick:"The Last-Over Hitter",bio:"A finisher who plays with intent in high-pressure batting moments."},RDM016:{nick:"The Lefty",bio:"A left-handed middle-order batsman who adds variety and balance to the batting line-up."},RDM017:{nick:"The Finisher",bio:"A right-handed batsman who specialises in the finisher role and looks to close innings strongly."}},Z=[["RDM001","Rehan Akhtar","Captain • All-Rounder","Right-Handed • Right-Arm Fast • Middle Order • Middle Overs","08"],["RDM003","Saif Ali","Vice-Captain • All-Rounder","Both-Handed • Fast • Non-Striker Opener • All Phases",""],["RDM006","Soaib Akhtar","Wicket-Keeper • Batsman","Right-Handed • Left-Arm Fast • Top Order • Finisher",""],["RDM004","Akib Ansari","All-Rounder","Right-Handed • Fast • Striker Opener • Middle + Death",""],["RDM002","Asif Ali","Batsman","Right-Handed • Top Order",""],["RDM007","Wasim","All-Rounder","Right-Handed • Fast • Top Order • All Phases",""],["RDM008","Jubed","Batsman","Right-Handed • Middle Order",""],["RDM010","Gulam","All-Rounder","Right-Handed • Fast • Finisher • Emergency Bowling",""],["RDM011","Sahil Ansari","Batsman","Right-Handed • Middle Order","57"],["RDM005","Sahil Ali","Batsman","Right-Handed • Middle Order • Finisher","02"],["RDM012","Lucky","All-Rounder","Right-Handed • Fast • Middle Order • Middle Overs",""],["RDM016","Kaif Lefty","Batsman","Left-Handed • Middle Order",""],["RDM009","SK. Hanif","Batsman","Right-Handed • Finisher",""],["RDM013","Abushad","All-Rounder","Right-Handed • Fast • Middle Order + Finisher • Middle + Death",""],["RDM014","Sabre Alam","Batsman","Right-Handed • Finisher",""],["RDM015","Zishan","Batsman","Right-Handed • Finisher",""],["RDM017","Javed","Batsman","Right-Handed • Finisher",""]].map((t,e)=>{var a,r;return{id:t[0],name:t[1],role:t[2],detail:t[3],jersey:t[4],image:"",nick:((a=Ae[t[0]])==null?void 0:a.nick)||"",bio:((r=Ae[t[0]])==null?void 0:r.bio)||"",socials:[],order:e+1,_docId:t[0]}}),De=[{_docId:"h01",year:"2024",title:"Winner",sub:"Mahuawan Premier League 1",image:"assets/trophy-2024.png",order:1},{_docId:"h02",year:"2025",title:"Winner",sub:"Mahuawan Premier League 2",image:"assets/trophy-2025.png",order:2},{_docId:"h03",year:"2026",title:"Runner-Up",sub:"Tournament Name • To Be Added",image:"assets/trophy-2026.png",order:3}],Le=[{_docId:"youtube",name:"YOUTUBE",displayName:"RDM YouTube",url:"https://www.youtube.com/@rehan_dominators_mahuawan",icon:"▶",order:1},{_docId:"telegram",name:"TELEGRAM",displayName:"RDM Telegram",url:"https://t.me/rehandominatorsmahuawan",icon:"✈",order:2},{_docId:"whatsapp",name:"WHATSAPP",displayName:"RDM WhatsApp Channel",url:"https://whatsapp.com/channel/0029Vb8icRM3WHTQGQtM4G3j",icon:"◉",order:3},{_docId:"instagram",name:"INSTAGRAM",displayName:"RDM Instagram",url:"",icon:"IG",order:4},{_docId:"facebook",name:"FACEBOOK",displayName:"RDM Facebook",url:"",icon:"f",order:5}];function m(t=""){const e=String(t??"").replace(/\r\n?/g,`
`).replace(/^\n+|\s+$/g,"");if(!e)return"";const a={"ᴀ":"A",ʙ:"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F",ɢ:"G",ʜ:"H",ɪ:"I","ᴊ":"J","ᴋ":"K",ʟ:"L","ᴍ":"M",ɴ:"N","ᴏ":"O","ᴘ":"P",ǫ:"Q",ʀ:"R","ꜱ":"S","ᴛ":"T","ᴜ":"U","ᴠ":"V","ᴡ":"W",ʏ:"Y","ᴢ":"Z"},r=e.replace(/[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡʏᴢ]/g,o=>a[o]||o);return/^(RDM\d+|RA\d+|SA-V|SO-WK|AKA|ASI|WSM|JBD|GLM|SHA\d+|SAL\d+|LKY|KLF|SKH|ABS|SBA|ZSN|JVD)$/i.test(r)?r.toUpperCase():r===r.toUpperCase()&&/[A-Z]{2,}/.test(r)&&r.length>4?r.toLowerCase().replace(/\b([a-z])/g,(n,c,d,l)=>{var f;const u=((f=l.slice(d).match(/^[a-z]+/i))==null?void 0:f[0])||"";return d>0&&l[d-1]!==`
`&&["and","or","of","the","in","on","to","for","at","by","vs","is"].includes(u.toLowerCase())?u.toLowerCase().charAt(0):c.toUpperCase()}).replace(/\b(Rdm|Xi|H2h|Mpl|Potm|Nr)\b/gi,n=>n.toUpperCase()).replace(/\bSk\./gi,"SK."):r}function i(t=""){return String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function _(t=""){const e=String(t||"").trim();return/^https?:\/\//i.test(e)?e:""}function ie(t=""){const e=String(t||"").trim();return!!(!e||/^data:image\/svg\+xml/i.test(e)||/(?:logo\.jpg|CRICKET_YOUR_TAGLINE_HERE|rdm_crest_emblem|^assets\/(?:rehan\.png|players\/))/i.test(e))}function Qe(t,e=""){const a=String(t||"").trim();return ie(a)?e&&!ie(e)?e:w.logoPath:a}const kt="73442ec47da8d19de47638438c8563bb266e880cf4ce8cafa5579ed20d2b94be",Pe="rdm_apk_admin_unlocked_v1";async function At(t){var a,r;const e=new TextEncoder().encode(String(t??""));if((r=(a=globalThis.crypto)==null?void 0:a.subtle)!=null&&r.digest){const o=await globalThis.crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(o),n=>n.toString(16).padStart(2,"0")).join("")}return""}function Pt(){try{return localStorage.getItem(Pe)==="1"}catch{return!1}}function Ze(t){try{t?localStorage.setItem(Pe,"1"):localStorage.removeItem(Pe)}catch{}}function ce(){return window.rdmAuth||(typeof rdmAuth<"u"?rdmAuth:null)}function G(){return window.rdmDB||(typeof rdmDB<"u"?rdmDB:null)}function Y(){var t,e,a,r;return((r=(a=(e=(t=window.firebase)==null?void 0:t.firestore)==null?void 0:e.FieldValue)==null?void 0:a.serverTimestamp)==null?void 0:r.call(a))||new Date}const N=t=>({...t.data(),_docId:t.id}),s={ready:!1,loadingData:!1,loadError:"",authChecked:!1,apkAdminUnlocked:Pt(),user:null,account:null,role:"guest",playerId:null,brandLogo:w.logoPath,apkDownloadUrl:w.apkDownloadUrl,apkReleasesUrl:w.apkReleasesUrl,appVersion:T.versionName,appVersionCode:T.versionCode,updateNotes:"",forceUpdate:!1,remoteVersionInfo:null,players:Z.map(t=>({...t})),matches:[],news:[],updates:[],honours:De.map(t=>({...t})),gallery:[],socials:Le.map(t=>({...t})),stats:[],achievements:[],availability:[],lineups:[],records:[],tournaments:[],opponents:[]};function be(){return!!(s.user&&s.account&&s.account.active===!0&&s.account.role==="admin"&&s.role==="admin")}function H(){return!!(be()||s.apkAdminUnlocked)}function $t(t,e,a){const r=new Map(Z.map((l,u)=>[l.id,u+1])),o=new Map(Z.map(l=>[l.id,l]));let n;t.length>0?(n=t.map(l=>{const u=o.get(l.id);return{id:l.id,name:l.name||(u==null?void 0:u.name)||l.id,role:l.role||(u==null?void 0:u.role)||"",detail:l.detail||(u==null?void 0:u.detail)||"",jersey:l.jersey??(u==null?void 0:u.jersey)??"",image:ie(l.image)?"":l.image||"",nick:"",bio:"",socials:[],order:typeof l.order=="number"?l.order:r.get(l.id)||999,active:l.active!==!1,_docId:l._docId||l.id}}),Z.forEach(l=>{n.some(u=>u.id===l.id)||n.push({...l})})):n=Z.map(l=>({...l})),n.sort((l,u)=>(l.order||999)-(u.order||999));const c=l=>{var u,f;return typeof(l==null?void 0:l.updatedMs)=="number"?l.updatedMs:typeof((u=l==null?void 0:l.updatedAt)==null?void 0:u.toMillis)=="function"?l.updatedAt.toMillis():typeof((f=l==null?void 0:l.updatedAt)==null?void 0:f.seconds)=="number"?l.updatedAt.seconds*1e3:0};return[...e].sort((l,u)=>{const f=c(l)-c(u);if(f!==0)return f;const y=a&&l._docId===a?1:0,g=a&&u._docId===a?1:0;return y-g}).forEach(l=>{const u=n.find(f=>f.id===l.playerId);u&&(l.jersey!==void 0&&l.jersey!==null&&l.jersey!==""&&(u.jersey=String(l.jersey)),l.nick!==void 0&&l.nick!==null&&l.nick!==""&&(u.nick=String(l.nick)),l.bio!==void 0&&l.bio!==null&&l.bio!==""&&(u.bio=String(l.bio)),"image"in l&&l.image!==void 0&&l.image!==null&&(u.image=ie(l.image)?"":String(l.image)),Array.isArray(l.socials)&&(u.socials=l.socials.slice(0,3)),u._profileUid=l._docId)}),n.forEach(l=>{const u=Ae[l.id];u&&(l.nick||(l.nick=u.nick),l.bio||(l.bio=u.bio))}),n.filter(l=>l.active!==!1)}let Ie=[],Ne=[],ee=[];function $e(){var e,a;const t=((a=(e=ce())==null?void 0:e.currentUser)==null?void 0:a.uid)||"";s.players=$t(Ie,Ne,t)}function Rt(t){const e=G();if(!e)return()=>{};ee.forEach(n=>{try{n()}catch{}}),ee=[];let a=null;const r=()=>{typeof t=="function"&&(clearTimeout(a),a=setTimeout(()=>{s.ready=!0,t()},50))},o=(n,c)=>{try{const d=e.collection(n).onSnapshot(l=>{c(l.docs.map(N)),r()},()=>{});ee.push(d)}catch{}};o("TeamPlayers",n=>{Ie=n,$e()}),o("PlayerProfiles",n=>{Ne=n,$e()}),o("Matches",n=>{s.matches=n.sort((c,d)=>(d.createdMs||0)-(c.createdMs||0))}),o("News",n=>{s.news=n.sort((c,d)=>(d.pinned?1:0)-(c.pinned?1:0)||(d.createdMs||0)-(c.createdMs||0))}),o("Honours",n=>{s.honours=n.length?n.sort((c,d)=>(c.order||999)-(d.order||999)):De.map(c=>({...c}))}),o("Gallery",n=>{s.gallery=n.sort((c,d)=>(d.createdMs||0)-(c.createdMs||0))}),o("Socials",n=>{s.socials=n.length?n.sort((c,d)=>(c.order||999)-(d.order||999)):Le.map(c=>({...c}))}),o("PlayerStats",n=>{s.stats=n}),o("Achievements",n=>{s.achievements=n.sort((c,d)=>(d.createdMs||0)-(c.createdMs||0))}),o("Availability",n=>{s.availability=n}),o("PlayingXI",n=>{s.lineups=n.sort((c,d)=>(d.createdMs||0)-(c.createdMs||0))}),o("TeamRecords",n=>{s.records=n.sort((c,d)=>(d.createdMs||0)-(c.createdMs||0))}),o("Tournaments",n=>{s.tournaments=n.sort((c,d)=>(d.createdMs||0)-(c.createdMs||0))}),o("Opponents",n=>{s.opponents=n.sort((c,d)=>(d.createdMs||0)-(c.createdMs||0))}),o("Updates",n=>{s.updates=n.filter(c=>c._docId!=="_news_updates_swap_v1").sort((c,d)=>(d.pinned?1:0)-(c.pinned?1:0)||(d.createdMs||0)-(c.createdMs||0))});try{const n=e.collection("BrandSettings").doc("main").onSnapshot(c=>{c.exists&&(tt(c.data()||{}),r())},()=>{});ee.push(n)}catch{}return()=>{clearTimeout(a),ee.forEach(n=>{try{n()}catch{}}),ee=[]}}async function j(){const t=G();if(!t)return s.loadError="Firebase is unavailable. Check your internet connection and retry.",s.ready=!0,!1;s.loadingData=!0,s.loadError="";try{const[e,a,r,o,n,c,d,l,u,f,y,g,C,R,E]=await Promise.all([t.collection("TeamPlayers").get(),t.collection("Matches").get(),t.collection("News").get(),t.collection("Honours").get(),t.collection("Gallery").get(),t.collection("Socials").get(),t.collection("PlayerProfiles").get(),t.collection("PlayerStats").get(),t.collection("Achievements").get(),t.collection("Availability").get(),t.collection("PlayingXI").get(),t.collection("TeamRecords").get(),t.collection("Tournaments").get(),t.collection("Opponents").get(),t.collection("Updates").get()]);Ie=e.docs.map(N),Ne=d.docs.map(N),$e(),s.matches=a.docs.map(N).sort((v,h)=>(h.createdMs||0)-(v.createdMs||0)),s.news=r.docs.map(N).sort((v,h)=>(h.pinned?1:0)-(v.pinned?1:0)||(h.createdMs||0)-(v.createdMs||0)),s.honours=o.empty?De.map(v=>({...v})):o.docs.map(N).sort((v,h)=>(v.order||999)-(h.order||999)),s.gallery=n.docs.map(N).sort((v,h)=>(h.createdMs||0)-(v.createdMs||0)),s.socials=c.empty?Le.map(v=>({...v})):c.docs.map(N).sort((v,h)=>(v.order||999)-(h.order||999)),s.stats=l.docs.map(N),s.achievements=u.docs.map(N).sort((v,h)=>(h.createdMs||0)-(v.createdMs||0)),s.availability=f.docs.map(N),s.lineups=y.docs.map(N).sort((v,h)=>(h.createdMs||0)-(v.createdMs||0)),s.records=g.docs.map(N).sort((v,h)=>(h.createdMs||0)-(v.createdMs||0)),s.tournaments=C.docs.map(N).sort((v,h)=>(h.createdMs||0)-(v.createdMs||0)),s.opponents=R.docs.map(N).sort((v,h)=>(h.createdMs||0)-(v.createdMs||0)),s.updates=E.docs.filter(v=>v.id!=="_news_updates_swap_v1").map(N).sort((v,h)=>(h.pinned?1:0)-(v.pinned?1:0)||(h.createdMs||0)-(v.createdMs||0));try{const v=await t.collection("BrandSettings").doc("main").get();v.exists&&tt(v.data()||{})}catch{s.brandLogo=w.logoPath}return s.ready=!0,!0}catch(e){return console.error("Club data load failed",e),s.loadError="Unable to sync live team data from Firebase. Showing bundled squad roster.",s.ready=!0,!1}finally{s.loadingData=!1}}async function et(t){var r,o,n,c;const e=ce(),a=G();if(!t||!a)return s.user=null,s.account=null,s.role="guest",s.playerId=null,{ok:!1,reason:"NOT_SIGNED_IN"};try{const d=await a.collection("Accounts").doc(t.uid).get();if(!d.exists)return await((r=e==null?void 0:e.signOut)==null?void 0:r.call(e)),s.user=null,s.account=null,s.role="guest",s.playerId=null,{ok:!1,reason:"NO_ACCOUNT_RECORD"};const l=d.data()||{};if(l.active!==!0)return await((o=e==null?void 0:e.signOut)==null?void 0:o.call(e)),s.user=null,s.account=null,s.role="guest",s.playerId=null,{ok:!1,reason:"ACCOUNT_INACTIVE"};if(l.role==="admin")return s.user=t,s.account=l,s.role="admin",s.playerId=l.playerId||null,{ok:!0,role:"admin",account:l};const u=typeof l.playerId=="string"?l.playerId.trim():"";return u&&(s.players.some(y=>y.id===u)||Z.some(y=>y.id===u))?(s.user=t,s.account=l,s.role="player",s.playerId=u,{ok:!0,role:"player",playerId:u,account:l}):(await((n=e==null?void 0:e.signOut)==null?void 0:n.call(e)),s.user=null,s.account=null,s.role="guest",s.playerId=null,{ok:!1,reason:"INVALID_ROLE_MAPPING"})}catch(d){return console.error("Account verification failed",d),await((c=e==null?void 0:e.signOut)==null?void 0:c.call(e)),s.user=null,s.account=null,s.role="guest",s.playerId=null,{ok:!1,reason:(d==null?void 0:d.code)||"VERIFICATION_ERROR"}}}async function Mt(t){const e=String(t||"");if(!e){const c=new Error("PASSWORD_REQUIRED");throw c.code="PASSWORD_REQUIRED",c}const a=await At(e);if(!(a?a===kt:!1)){const c=new Error("INVALID_ADMIN_PASSWORD");throw c.code="INVALID_ADMIN_PASSWORD",c}s.apkAdminUnlocked=!0,s.role="admin",Ze(!0);let o=be();const n=ce();if(n&&!o)for(const c of St)try{const d=await n.signInWithEmailAndPassword(c,e),l=await et(d.user);if(l.ok&&l.role==="admin"){o=!0;break}}catch{}try{await j()}catch{}return{ok:!0,role:"admin",cloudSynced:o}}async function Et(){s.apkAdminUnlocked=!1,Ze(!1);const t=ce();if(t)try{await t.signOut()}catch{}s.user=null,s.account=null,s.role="guest",s.playerId=null}function Ct(t){const e=ce();if(!e){s.authChecked=!0;const a=s.apkAdminUnlocked;return t({role:a?"admin":"guest",verified:a}),()=>{}}return e.onAuthStateChanged(async a=>{if(!a){if(s.user=null,s.account=null,s.apkAdminUnlocked){s.role="admin",s.playerId=null,s.authChecked=!0,t({role:"admin",verified:!0});return}s.role="guest",s.playerId=null,s.authChecked=!0,t({role:"guest",verified:!1});return}const r=await et(a);if(s.authChecked=!0,!r.ok&&s.apkAdminUnlocked){s.role="admin",t({role:"admin",verified:!0});return}t({role:r.ok?r.role:"guest",verified:r.ok,reason:r.ok?"":r.reason})})}function Tt(t){return t?H()||s.role==="player"&&s.playerId===t?!0:!!(s.user&&s.account&&s.account.active===!0&&s.role==="player"&&s.playerId===t):!1}async function Dt(t,e){const a=G();if(!a)throw new Error("FIREBASE_UNAVAILABLE");const r=String(e||"").toUpperCase();if(!["AVAILABLE","UNAVAILABLE"].includes(r))throw new Error("INVALID_STATUS");if(!Tt(t))throw new Error("NOT_ALLOWED");await a.collection("Availability").doc(t).set({playerId:t,status:r,updatedAt:Y()},{merge:!0}),await j()}async function x(t,e,a){const r=G();if(!r||!H())throw new Error("ADMIN_REQUIRED");const o={...a,updatedAt:Y()};delete o._docId,e?await r.collection(t).doc(e).set(o,{merge:!0}):await r.collection(t).add({...o,createdMs:o.createdMs||Date.now()}),await j()}async function Lt(t,e){const a=G();if(!a||!H())throw new Error("ADMIN_REQUIRED");const r={id:t,name:String(e.name||"").trim(),role:String(e.role||"").trim(),detail:String(e.detail||"").trim(),jersey:String(e.jersey||"").trim(),active:!0,updatedAt:Y()};"image"in e&&e.image!==void 0&&(r.image=e.image),await a.collection("TeamPlayers").doc(t).set(r,{merge:!0});const o=s.players.find(d=>d.id===t),n=(o==null?void 0:o._profileUid)||`profile_${t}`,c={playerId:t,jersey:r.jersey,nick:String(e.nick??(o==null?void 0:o.nick)??"").trim(),bio:String(e.bio??(o==null?void 0:o.bio)??"").trim(),updatedMs:Date.now(),updatedAt:Y()};"image"in e&&e.image!==void 0&&(c.image=e.image),await a.collection("PlayerProfiles").doc(n).set(c,{merge:!0}),await j()}async function It(t){const e=G();if(!e||!H())throw new Error("ADMIN_REQUIRED");const a=Number(t.appVersionCode),r={appVersion:String(t.appVersion||w.appVersion).trim(),appVersionCode:Number.isFinite(a)&&a>0?a:s.appVersionCode||T.versionCode,updateNotes:String(t.updateNotes??"").trim(),forceUpdate:!!t.forceUpdate,apkDownloadUrl:String(t.apkDownloadUrl||w.apkDownloadUrl).trim(),apkReleasesUrl:String(t.apkReleasesUrl||w.apkReleasesUrl).trim(),updatedMs:Date.now(),updatedAt:Y()};t.logo&&(r.logo=String(t.logo)),await e.collection("BrandSettings").doc("main").set(r,{merge:!0}),await j()}function tt(t){t&&(t.logo&&!ie(t.logo)&&(s.brandLogo=t.logo),t.apkDownloadUrl&&/^https?:\/\//i.test(String(t.apkDownloadUrl).trim())&&(s.apkDownloadUrl=String(t.apkDownloadUrl).trim()),t.apkReleasesUrl&&/^https?:\/\//i.test(String(t.apkReleasesUrl).trim())&&(s.apkReleasesUrl=String(t.apkReleasesUrl).trim()),t.appVersion&&(s.appVersion=String(t.appVersion).trim()),Number.isFinite(Number(t.appVersionCode))&&(s.appVersionCode=Number(t.appVersionCode)),"updateNotes"in t&&(s.updateNotes=String(t.updateNotes||"")),"forceUpdate"in t&&(s.forceUpdate=!!t.forceUpdate))}function ve(){const t=[];(s.appVersion||s.appVersionCode)&&t.push({versionName:s.appVersion||T.versionName,versionCode:Number(s.appVersionCode)||T.versionCode,apkDownloadUrl:s.apkDownloadUrl||w.apkDownloadUrl,apkReleasesUrl:s.apkReleasesUrl||w.apkReleasesUrl,notes:s.updateNotes||"",forceUpdate:!!s.forceUpdate}),s.remoteVersionInfo&&t.push(s.remoteVersionInfo);let e={versionName:T.versionName,versionCode:T.versionCode,apkDownloadUrl:s.apkDownloadUrl||w.apkDownloadUrl,apkReleasesUrl:s.apkReleasesUrl||w.apkReleasesUrl,notes:"",forceUpdate:!1};return t.forEach(r=>{const o=String(r.versionName||"0.0.0").trim(),n=Number(r.versionCode)||0,c=we(e.versionName,o)<0,d=we(e.versionName,o)===0&&n>e.versionCode;(c||d||n>e.versionCode)&&(e={versionName:o||e.versionName,versionCode:Math.max(n,e.versionCode),apkDownloadUrl:/^https?:\/\//i.test(String(r.apkDownloadUrl||""))?String(r.apkDownloadUrl).trim():e.apkDownloadUrl,apkReleasesUrl:/^https?:\/\//i.test(String(r.apkReleasesUrl||""))?String(r.apkReleasesUrl).trim():e.apkReleasesUrl,notes:r.notes||e.notes,forceUpdate:!!(r.forceUpdate||e.forceUpdate)})}),{hasUpdate:we(T.versionName,e.versionName)<0||Number(e.versionCode)>Number(T.versionCode),currentVersion:T.versionName,currentCode:T.versionCode,latestVersion:e.versionName,latestCode:e.versionCode,apkUrl:e.apkDownloadUrl,releasesUrl:e.apkReleasesUrl,notes:e.notes||"A newer version of RDM Official Android APK is ready with the latest updates and improvements.",forceUpdate:e.forceUpdate}}async function at(){const t=typeof AbortController<"u"?new AbortController:null,e=t?setTimeout(()=>t.abort(),5e3):null,a=[];typeof window<"u"&&/^https?:$/i.test(window.location.protocol)&&a.push(`./version.json?t=${Date.now()}`),a.push(`${wt}?t=${Date.now()}`);for(const r of a)try{const o=await fetch(r,{cache:"no-store",signal:t==null?void 0:t.signal});if(!o.ok)continue;const n=await o.json();if(n&&(n.versionName||n.versionCode)){s.remoteVersionInfo={versionName:String(n.versionName||T.versionName).trim(),versionCode:Number(n.versionCode)||T.versionCode,apkDownloadUrl:String(n.apkDownloadUrl||w.apkDownloadUrl).trim(),apkReleasesUrl:String(n.apkReleasesUrl||w.apkReleasesUrl).trim(),notes:String(n.notes||""),forceUpdate:!!n.forceUpdate};break}}catch{}return e&&clearTimeout(e),ve()}async function Nt(t,e){const a=G();if(!a||!H()||!e)throw new Error("ADMIN_REQUIRED");await a.collection(t).doc(e).delete(),await j()}async function Ut(t){const e=G();if(!e||!H()||!t)throw new Error("ADMIN_REQUIRED");Z.some(r=>r.id===t)?await e.collection("TeamPlayers").doc(t).set({id:t,active:!1,updatedAt:Y()},{merge:!0}):await e.collection("TeamPlayers").doc(t).delete(),await j()}async function Ot(t,e,a){const r=G();if(!r||!H())throw new Error("ADMIN_REQUIRED");if(a){const o=await r.collection(t).where("pinned","==",!0).get();if(!o.empty){const n=r.batch();o.docs.forEach(c=>{c.id!==e&&n.set(c.ref,{pinned:!1,updatedAt:Y()},{merge:!0})}),await n.commit()}}await r.collection(t).doc(e).set({pinned:!!a,updatedAt:Y()},{merge:!0}),await j()}function me(t,e=960,a=.74){return new Promise((r,o)=>{if(!t)return r("");const n=new FileReader;n.onerror=()=>o(new Error("READ_FAILED")),n.onload=()=>{const c=new Image;c.onerror=()=>o(new Error("IMAGE_INVALID")),c.onload=()=>{const d=Math.min(1,e/Math.max(c.width,c.height)),l=document.createElement("canvas");l.width=Math.max(1,Math.round(c.width*d)),l.height=Math.max(1,Math.round(c.height*d)),l.getContext("2d").drawImage(c,0,0,l.width,l.height);let u=l.toDataURL("image/jpeg",a);if(u.length>72e4&&(u=l.toDataURL("image/jpeg",.56)),u.length>9e5)return o(new Error("IMAGE_TOO_LARGE"));r(u)},c.src=n.result},n.readAsDataURL(t)})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var ne;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(ne||(ne={}));class Se extends Error{constructor(e,a,r){super(e),this.message=e,this.code=a,this.data=r}}const Bt=t=>{var e,a;return t!=null&&t.androidBridge?"android":!((a=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||a===void 0)&&a.bridge?"ios":"web"},Ft=t=>{const e=t.CapacitorCustomPlatform||null,a=t.Capacitor||{},r=a.Plugins=a.Plugins||{},o=()=>e!==null?e.name:Bt(t),n=()=>o()!=="web",c=y=>{const g=u.get(y);return!!(g!=null&&g.platforms.has(o())||d(y))},d=y=>{var g;return(g=a.PluginHeaders)===null||g===void 0?void 0:g.find(C=>C.name===y)},l=y=>t.console.error(y),u=new Map,f=(y,g={})=>{const C=u.get(y);if(C)return console.warn(`Capacitor plugin "${y}" already registered. Cannot register plugins twice.`),C.proxy;const R=o(),E=d(y);let v;const h=async()=>(!v&&R in g?v=typeof g[R]=="function"?v=await g[R]():v=g[R]:e!==null&&!v&&"web"in g&&(v=typeof g.web=="function"?v=await g.web():v=g.web),v),L=(P,A)=>{var M,D;if(E){const K=E==null?void 0:E.methods.find(B=>A===B.name);if(K)return K.rtype==="promise"?B=>a.nativePromise(y,A.toString(),B):(B,ue)=>a.nativeCallback(y,A.toString(),B,ue);if(P)return(M=P[A])===null||M===void 0?void 0:M.bind(P)}else{if(P)return(D=P[A])===null||D===void 0?void 0:D.bind(P);throw new Se(`"${y}" plugin is not implemented on ${R}`,ne.Unimplemented)}},O=P=>{let A;const M=(...D)=>{const K=h().then(B=>{const ue=L(B,P);if(ue){const pe=ue(...D);return A=pe==null?void 0:pe.remove,pe}else throw new Se(`"${y}.${P}()" is not implemented on ${R}`,ne.Unimplemented)});return P==="addListener"&&(K.remove=async()=>A()),K};return M.toString=()=>`${P.toString()}() { [capacitor code] }`,Object.defineProperty(M,"name",{value:P,writable:!1,configurable:!1}),M},I=O("addListener"),q=O("removeListener"),Q=(P,A)=>{const M=I({eventName:P},A).then(B=>B),D=async()=>{const B=await M;await q({eventName:P,callbackId:B})},K=new Promise(B=>M.then(()=>B({remove:D})));return K.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await D()},K},b=new Proxy({},{get(P,A){switch(A){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return E?Q:I;case"removeListener":return q;default:return O(A)}}});return r[y]=b,u.set(y,{name:y,proxy:b,platforms:new Set([...Object.keys(g),...E?[R]:[]])}),b};return a.convertFileSrc||(a.convertFileSrc=y=>y),a.getPlatform=o,a.handleError=l,a.isNativePlatform=n,a.isPluginAvailable=c,a.registerPlugin=f,a.Exception=Se,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a},xt=t=>t.Capacitor=Ft(t),V=xt(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),J=V.registerPlugin;class Ue{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,a){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(a);const n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n),r&&this.sendRetainedArgumentsForEvent(e);const c=async()=>this.removeListener(e,a);return Promise.resolve({remove:c})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,a,r){const o=this.listeners[e];if(!o){if(r){let n=this.retainedEventArguments[e];n||(n=[]),n.push(a),this.retainedEventArguments[e]=n}return}o.forEach(n=>n(a))}hasListeners(e){var a;return!!(!((a=this.listeners[e])===null||a===void 0)&&a.length)}registerWindowListener(e,a){this.windowListeners[a]={registered:!1,windowEventName:e,pluginEventName:a,handler:r=>{this.notifyListeners(a,r)}}}unimplemented(e="not implemented"){return new V.Exception(e,ne.Unimplemented)}unavailable(e="not available"){return new V.Exception(e,ne.Unavailable)}async removeListener(e,a){const r=this.listeners[e];if(!r)return;const o=r.indexOf(a);o!==-1&&this.listeners[e].splice(o,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const a=this.retainedEventArguments[e];a&&(delete this.retainedEventArguments[e],a.forEach(r=>{this.notifyListeners(e,r)}))}}const _e=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),He=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class _t extends Ue{async getCookies(){const e=document.cookie,a={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[o,n]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");o=He(o).trim(),n=He(n).trim(),a[o]=n}),a}async setCookie(e){try{const a=_e(e.key),r=_e(e.value),o=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",n=(e.path||"/").replace("path=",""),c=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${a}=${r||""}${o}; path=${n}; ${c};`}catch(a){return Promise.reject(a)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(a){return Promise.reject(a)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const a of e)document.cookie=a.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}J("CapacitorCookies",{web:()=>new _t});const Ht=async t=>new Promise((e,a)=>{const r=new FileReader;r.onload=()=>{const o=r.result;e(o.indexOf(",")>=0?o.split(",")[1]:o)},r.onerror=o=>a(o),r.readAsDataURL(t)}),qt=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(o=>o.toLocaleLowerCase()).reduce((o,n,c)=>(o[n]=t[e[c]],o),{})},jt=(t,e=!0)=>t?Object.entries(t).reduce((r,o)=>{const[n,c]=o;let d,l;return Array.isArray(c)?(l="",c.forEach(u=>{d=e?encodeURIComponent(u):u,l+=`${n}=${d}&`}),l.slice(0,-1)):(d=e?encodeURIComponent(c):c,l=`${n}=${d}`),`${r}&${l}`},"").substr(1):null,Vt=(t,e={})=>{const a=Object.assign({method:t.method||"GET",headers:t.headers},e),o=qt(t.headers)["content-type"]||"";if(typeof t.data=="string")a.body=t.data;else if(o.includes("application/x-www-form-urlencoded")){const n=new URLSearchParams;for(const[c,d]of Object.entries(t.data||{}))n.set(c,d);a.body=n.toString()}else if(o.includes("multipart/form-data")||t.data instanceof FormData){const n=new FormData;if(t.data instanceof FormData)t.data.forEach((d,l)=>{n.append(l,d)});else for(const d of Object.keys(t.data))n.append(d,t.data[d]);a.body=n;const c=new Headers(a.headers);c.delete("content-type"),a.headers=c}else(o.includes("application/json")||typeof t.data=="object")&&(a.body=JSON.stringify(t.data));return a};class Wt extends Ue{async request(e){const a=Vt(e,e.webFetchExtra),r=jt(e.params,e.shouldEncodeUrlParams),o=r?`${e.url}?${r}`:e.url,n=await fetch(o,a),c=n.headers.get("content-type")||"";let{responseType:d="text"}=n.ok?e:{};c.includes("application/json")&&(d="json");let l,u;switch(d){case"arraybuffer":case"blob":u=await n.blob(),l=await Ht(u);break;case"json":l=await n.json();break;case"document":case"text":default:l=await n.text()}const f={};return n.headers.forEach((y,g)=>{f[g]=y}),{data:l,headers:f,status:n.status,url:n.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}J("CapacitorHttp",{web:()=>new Wt});var qe;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(qe||(qe={}));var je;(function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"})(je||(je={}));class Kt extends Ue{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}J("SystemBars",{web:()=>new Kt});const Gt="modulepreload",zt=function(t,e){return new URL(t,e).href},Ve={},Oe=function(e,a,r){let o=Promise.resolve();if(a&&a.length>0){let c=function(f){return Promise.all(f.map(y=>Promise.resolve(y).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const d=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=c(a.map(f=>{if(f=zt(f,r),f in Ve)return;Ve[f]=!0;const y=f.endsWith(".css"),g=y?'[rel="stylesheet"]':"";if(!!r)for(let E=d.length-1;E>=0;E--){const v=d[E];if(v.href===f&&(!y||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${g}`))return;const R=document.createElement("link");if(R.rel=y?"stylesheet":Gt,y||(R.as="script"),R.crossOrigin="",R.href=f,u&&R.setAttribute("nonce",u),document.head.appendChild(R),y)return new Promise((E,v)=>{R.addEventListener("load",E),R.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${f}`)))})}))}function n(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return o.then(c=>{for(const d of c||[])d.status==="rejected"&&n(d.reason);return e().catch(n)})},nt=J("App",{web:()=>Oe(()=>import("./web-DYUQbbPb.js"),[],import.meta.url).then(t=>new t.AppWeb)});var fe;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(fe||(fe={}));var We;(function(t){t.None="NONE",t.Slide="SLIDE",t.Fade="FADE"})(We||(We={}));const ke=J("StatusBar"),Xt=J("SplashScreen",{web:()=>Oe(()=>import("./web-CbatzbrX.js"),[],import.meta.url).then(t=>new t.SplashScreenWeb)});var Ke;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(Ke||(Ke={}));var Ge;(function(t){t.Body="body",t.Ionic="ionic",t.Native="native",t.None="none"})(Ge||(Ge={}));const ze=J("Keyboard"),rt=J("Browser",{web:()=>Oe(()=>import("./web-CmRwIBBZ.js"),[],import.meta.url).then(t=>new t.BrowserWeb)});let Xe=!1,te=null;typeof window<"u"&&window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),te=t,window.dispatchEvent(new CustomEvent("rdm-pwa-ready"))});function Re(){return V.isNativePlatform()}function st(){return!V.isNativePlatform()&&!!te}async function Yt(){if(!te)return!1;try{await te.prompt();const t=await te.userChoice;if((t==null?void 0:t.outcome)==="accepted")return te=null,!0}catch{}return!1}async function ot(t="azure"){const e={azure:"#F3F7FD",crimson:"#FCF7F7",daylight:"#F8FAFC",night:"#071224"},a=e[t]||e.azure,r=document.getElementById("rdmThemeMeta");if(r&&(r.content=a),!!V.isNativePlatform())try{await ke.setOverlaysWebView({overlay:!1}),await ke.setBackgroundColor({color:a}),await ke.setStyle({style:t==="night"?fe.Dark:fe.Light})}catch{}}async function Jt(t){const e=localStorage.getItem("rdm-app-theme")||"azure";if(await ot(e),V.isNativePlatform()){try{ze.addListener("keyboardWillShow",()=>{document.body.classList.add("keyboard-open");const a=document.activeElement;a&&typeof a.scrollIntoView=="function"&&setTimeout(()=>{try{a.scrollIntoView({behavior:"smooth",block:"center"})}catch{}},120)}),ze.addListener("keyboardWillHide",()=>{document.body.classList.remove("keyboard-open")})}catch{}if(!Xe&&typeof t=="function"){Xe=!0;try{nt.addListener("backButton",({canGoBack:a})=>{t({canGoBack:a})})}catch{}}}}async function Ye(){if(V.isNativePlatform())try{await Xt.hide({fadeOutDuration:220})}catch{}}async function Qt(){if(V.isNativePlatform())try{await nt.exitApp()}catch{}}async function Zt(t){const e=String(t||"").trim();if(!/^https?:\/\//i.test(e))return!1;if(V.isNativePlatform())try{return await rt.open({url:e,presentationStyle:"popover"}),!0}catch{}const a=document.createElement("a");return a.href=e,a.target="_blank",a.rel="noopener noreferrer",document.body.appendChild(a),a.click(),a.remove(),!0}async function it(t){const e=String(t||"").trim();if(!/^https?:\/\//i.test(e))return!1;if(V.isNativePlatform())try{return await rt.open({url:e,presentationStyle:"popover"}),!0}catch{}const a=document.createElement("a");return a.href=e,a.download="RDM-Official.apk",a.rel="noopener noreferrer",document.body.appendChild(a),a.click(),a.remove(),!0}let se=[];function k(t){const e=document.getElementById("rdmToast");e&&(e.textContent=String(t||""),e.classList.add("show"),clearTimeout(e._timer),e._timer=setTimeout(()=>e.classList.remove("show"),2200))}function Me(){return se.length>0}function lt(){const t=se.pop();return t&&t.isConnected?(t.remove(),!0):!1}function de(t){return se.push(t),()=>{se=se.filter(e=>e!==t),t.isConnected&&t.remove()}}function Ee({title:t,message:e,confirmLabel:a="Confirm",danger:r=!1,onConfirm:o}){const n=document.createElement("div");n.className="sheetOverlay show",n.innerHTML=`
    <div class="sheetCard confirmCard" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <h3>${i(t)}</h3>
      </div>
      <p class="confirmMessage">${i(e)}</p>
      <div class="sheetActions">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="button" class="${r?"btnDanger":"btnPrimary"}" data-ok>${i(a)}</button>
      </div>
    </div>
  `,document.body.appendChild(n);const c=de(n);n.querySelector("[data-cancel]").onclick=c,n.addEventListener("click",d=>{d.target===n&&c()}),n.querySelector("[data-ok]").onclick=async d=>{const l=d.currentTarget;l.disabled=!0;try{await o(),c()}catch(u){l.disabled=!1,k((u==null?void 0:u.message)||"Action failed")}}}function U({title:t,subtitle:e="",fields:a,submitLabel:r="Save",onSubmit:o}){const n=document.createElement("div");n.className="sheetOverlay show";const c=a.map(l=>{const u=l.required?"required":"",f=i(l.value??"");if(l.type==="textarea")return`
        <label class="fieldBlock">
          <span>${i(l.label)}</span>
          <textarea name="${i(l.name)}" rows="${l.rows||4}" placeholder="${i(l.placeholder||"")}" ${u}>${f}</textarea>
        </label>
      `;if(l.type==="select"){const y=(l.options||[]).map(g=>{const C=typeof g=="object"?g.value:g,R=typeof g=="object"?g.label:g,E=String(C)===String(l.value??"")?"selected":"";return`<option value="${i(C)}" ${E}>${i(R)}</option>`}).join("");return`
        <label class="fieldBlock">
          <span>${i(l.label)}</span>
          <select name="${i(l.name)}">${y}</select>
        </label>
      `}return l.type==="checkbox"?`
        <label class="checkboxRow">
          <input type="checkbox" name="${i(l.name)}" ${l.checked?"checked":""}>
          <span>${i(l.label)}</span>
        </label>
      `:l.type==="file"?`
        <label class="fieldBlock">
          <span>${i(l.label)}</span>
          <input type="file" name="${i(l.name)}" accept="image/*" ${u}>
        </label>
      `:`
      <label class="fieldBlock">
        <span>${i(l.label)}</span>
        <input type="${i(l.type||"text")}" name="${i(l.name)}" value="${f}" placeholder="${i(l.placeholder||"")}" ${u}>
      </label>
    `}).join("");n.innerHTML=`
    <form class="sheetCard formSheet" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>${i(t)}</h3>
          ${e?`<p class="sheetSub">${i(e)}</p>`:""}
        </div>
      </div>
      <div class="formStack">${c}</div>
      <div class="sheetFooterSticky">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="submit" class="btnPrimary">${i(r)}</button>
      </div>
    </form>
  `,document.body.appendChild(n);const d=de(n);n.querySelector("[data-cancel]").onclick=d,n.addEventListener("click",l=>{l.target===n&&d()}),n.querySelector("form").onsubmit=async l=>{l.preventDefault();const u=l.currentTarget,f=u.querySelector('[type="submit"]');f.disabled=!0;try{const y={};a.forEach(g=>{var R;const C=u.elements[g.name];C&&(g.type==="checkbox"?y[g.name]=C.checked:g.type==="file"?y[g.name]=((R=C.files)==null?void 0:R[0])||null:g.type==="textarea"?y[g.name]=String(C.value??"").replace(/\r\n?/g,`
`).replace(/^\n+|\s+$/g,""):y[g.name]=String(C.value??"").trim())}),await o(y),d()}catch(y){f.disabled=!1,k((y==null?void 0:y.message)||"Save failed")}}}function Je({currentTheme:t,onSelectTheme:e}){const a=document.createElement("div");a.className="sheetOverlay show";const r=[{id:"azure",name:"Sky Azure",desc:"Official Royal Blue & crisp white palette",swatches:["#F3F7FD","#FFFFFF","#0958D9"]},{id:"crimson",name:"Dominator Crimson",desc:"Club crest crimson red & clean white",swatches:["#FCF7F7","#FFFFFF","#C61D2E"]},{id:"daylight",name:"Stadium Daylight",desc:"Minimal high-clarity bright white canvas",swatches:["#F8FAFC","#FFFFFF","#1D4ED8"]},{id:"night",name:"Floodlight Night",desc:"Deep stadium navy dark mode",swatches:["#071224","#0E1F3A","#38BDF8"]}];a.innerHTML=`
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
          <button type="button" class="themeChoiceRow ${t===n.id?"active":""}" data-pick-theme="${n.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${n.swatches.map(c=>`<span style="background:${c}"></span>`).join("")}
            </div>
            <div class="themeChoiceCopy">
              <strong>${i(n.name)}</strong>
              <span>${i(n.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${t===n.id?"Active":"Apply"}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `,document.body.appendChild(a);const o=de(a);a.addEventListener("click",n=>{n.target===a&&o()}),a.querySelectorAll("[data-pick-theme]").forEach(n=>{n.addEventListener("click",()=>{e(n.dataset.pickTheme),o()})})}function Ce(t,e=""){const a=document.createElement("div");a.className="lightboxOverlay show",a.innerHTML=`
    <div class="lightboxTopBar">
      <div class="lightboxLeft">
        <button type="button" class="iconCloseBtn darkSurface" aria-label="Back">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <span class="lightboxCaption">${i(e||"Team Gallery")}</span>
      </div>
    </div>
    <div class="lightboxCanvas">
      <img src="${i(t)}" alt="${i(e||"Gallery image")}" referrerPolicy="no-referrer">
    </div>
  `,document.body.appendChild(a);const r=de(a);a.querySelector(".iconCloseBtn").onclick=r,a.addEventListener("click",o=>{(o.target===a||o.target.classList.contains("lightboxCanvas"))&&r()})}async function ea({player:t,brandLogo:e}){var E,v;const o=document.createElement("canvas");o.width=1080,o.height=1350;const n=o.getContext("2d"),c=h=>new Promise((L,O)=>{const I=new Image;I.crossOrigin="anonymous",I.onload=()=>L(I),I.onerror=O,I.src=h}),d=(h,L,O,I,q,Q,b)=>{n.beginPath(),n.moveTo(h+q,L),n.arcTo(h+O,L,h+O,L+I,q),n.arcTo(h+O,L+I,h,L+I,q),n.arcTo(h,L+I,h,L,q),n.arcTo(h,L,h+O,L,q),n.closePath(),Q&&(n.fillStyle=Q,n.fill()),b&&(n.strokeStyle=b,n.lineWidth=2,n.stroke())},l=n.createLinearGradient(0,0,1080,1350);l.addColorStop(0,"#EDF5FF"),l.addColorStop(1,"#FFFFFF"),n.fillStyle=l,n.fillRect(0,0,1080,1350),d(40,40,1e3,1270,40,"#FFFFFF","#C9DFF7"),d(80,80,920,10,5,"#0958D9",null);let u=null;try{u=await c(e||w.logoPath)}catch{}u&&n.drawImage(u,84,120,74,74),n.textAlign="left",n.fillStyle="#0B2340",n.font='800 34px "Barlow Condensed", "Plus Jakarta Sans", sans-serif',n.fillText("REHAN DOMINATORS MAHUAWAN",176,156),n.fillStyle="#5B7693",n.font='600 18px "Plus Jakarta Sans", sans-serif',n.fillText("MAHUAWAN • GOPALGANJ • BIHAR",176,186);let f=null;try{f=await c(Qe(t.image,e))}catch{f=u}if(f){n.save(),n.beginPath(),n.arc(1080/2,370,140,0,Math.PI*2),n.clip();const h=Math.max(280/f.width,280/f.height);n.drawImage(f,1080/2-f.width*h/2,370-f.height*h/2,f.width*h,f.height*h),n.restore(),n.strokeStyle="#0958D9",n.lineWidth=8,n.beginPath(),n.arc(1080/2,370,146,0,Math.PI*2),n.stroke()}n.textAlign="center",n.fillStyle="#0B2340",n.font='800 58px "Barlow Condensed", "Plus Jakarta Sans", sans-serif',n.fillText(m(t.name),1080/2,580),d(120,620,840,124,24,"#F2F7FD","#CFE2F7"),n.fillStyle="#0958D9",n.font='700 16px "Plus Jakarta Sans", sans-serif',n.fillText("PLAYER CODE",330,662),n.fillText("JERSEY NUMBER",750,662),n.fillStyle="#0B2340",n.font='700 30px "JetBrains Mono", monospace',n.fillText(oe[t.id]||t.id,330,708),n.fillText(t.jersey?`#${t.jersey}`:"—",750,708),d(120,774,840,140,24,"#F8FBFF","#D9E8F7"),n.fillStyle="#0958D9",n.font='700 24px "Plus Jakarta Sans", sans-serif',n.fillText(m(t.role||""),1080/2,828),n.fillStyle="#3E5A78",n.font='600 20px "Plus Jakarta Sans", sans-serif',n.fillText(m(t.detail||"").slice(0,66),1080/2,872),n.fillStyle="#0958D9",n.font='700 18px "Plus Jakarta Sans", sans-serif',n.fillText("ONE TEAM • ONE DREAM • ONE DOMINATION",1080/2,1234),n.fillStyle="#5B7693",n.font='600 15px "Plus Jakarta Sans", sans-serif',n.fillText("RDM OFFICIAL • PLAYER IDENTITY CARD",1080/2,1266);const y=`${t.id}-${String(t.name||"PLAYER").replace(/\s+/g,"-")}-RDM-CARD.png`,g=await new Promise(h=>o.toBlob(h,"image/png"));if(g&&typeof navigator<"u"&&typeof navigator.share=="function"&&typeof File=="function")try{const h=new File([g],y,{type:"image/png"});if(typeof navigator.canShare=="function"?navigator.canShare({files:[h]}):!0){await navigator.share({files:[h],title:`${m(t.name)} · RDM Player Card`,text:`${m(t.name)} (${oe[t.id]||t.id}) — Rehan Dominators Mahuawan`}),k("Player card ready to save or share");return}}catch(h){if(h&&h.name==="AbortError")return}const C=o.toDataURL("image/png");if(!!!((v=(E=window.Capacitor)==null?void 0:E.isNativePlatform)!=null&&v.call(E))){const h=document.createElement("a");h.href=C,h.download=y,document.body.appendChild(h),h.click(),h.remove(),k("Player card downloaded");return}Ce(C,`${m(t.name)} · RDM Player Card`),k("Player card generated")}function ta({currentVersion:t,latestVersion:e,notes:a,forceUpdate:r=!1,onDownload:o}){if(document.getElementById("rdmUpdateSheetOverlay"))return;const n=document.createElement("div");n.id="rdmUpdateSheetOverlay",n.className="sheetOverlay show",n.innerHTML=`
    <div class="sheetCard confirmCard" role="dialog" aria-modal="true" aria-label="App Update Available">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <span class="sectionKicker">New Version Available</span>
          <h3>Update RDM Official APK</h3>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:10px;">
        <span class="metaCode">Installed: v${i(t)}</span>
        <span class="metaCode" style="background:var(--brand-blue);color:#fff;">Latest: v${i(e)}</span>
      </div>
      <p class="confirmMessage richText" style="margin-bottom:16px;">${i(a||"A newer version of RDM Official Android App is ready to download and install.")}</p>
      <div class="sheetActions"${r?' style="grid-template-columns:1fr;"':""}>
        ${r?"":'<button type="button" class="btnSecondary" data-later>Later</button>'}
        <button type="button" class="btnPrimary" data-download>Download Update v${i(e)}</button>
      </div>
    </div>
  `,document.body.appendChild(n);const c=de(n),d=n.querySelector("[data-later]");d&&(d.onclick=()=>{try{sessionStorage.setItem(`rdm-dismiss-update-${e}`,"1")}catch{}c()}),r||n.addEventListener("click",l=>{if(l.target===n){try{sessionStorage.setItem(`rdm-dismiss-update-${e}`,"1")}catch{}c()}}),n.querySelector("[data-download]").onclick=()=>{typeof o=="function"&&o(),r||c()}}const ge=[{id:"azure",label:"Sky Azure",desc:"Official Royal Blue & White",swatches:["#F3F7FD","#FFFFFF","#0958D9"]},{id:"crimson",label:"Dominator Crimson",desc:"Club Crest Red & White",swatches:["#FCF7F7","#FFFFFF","#C61D2E"]},{id:"daylight",label:"Stadium Daylight",desc:"Crisp High-Key White",swatches:["#F8FAFC","#FFFFFF","#1D4ED8"]},{id:"night",label:"Floodlight Night",desc:"Deep Stadium Navy",swatches:["#071224","#0E1F3A","#38BDF8"]}],p={screen:"public",portalMode:"public",portalPlayerId:null,publicTab:"home",matchesSubTab:"fixtures",galleryAlbum:"ALL",squadQuery:"",squadFilter:"ALL",detailPlayerId:null,morePage:"news",adminTab:"overview",drawerOpen:!1,theme:na(),loginError:"",loginBusy:!1,lastBackPressAt:0},$=[];function ct(){return{screen:p.screen,publicTab:p.publicTab,matchesSubTab:p.matchesSubTab,detailPlayerId:p.detailPlayerId,morePage:p.morePage,adminTab:p.adminTab}}function aa(t,e){return t&&e&&t.screen===e.screen&&t.publicTab===e.publicTab&&t.matchesSubTab===e.matchesSubTab&&t.detailPlayerId===e.detailPlayerId&&t.morePage===e.morePage&&t.adminTab===e.adminTab}function ae(t){return t.screen==="playerDetail"&&t.detailPlayerId?`#player-${t.detailPlayerId}`:t.screen==="subpage"?`#section-${t.morePage}`:(t.screen==="playerPortal"&&p.portalPlayerId,t.screen==="portalAuth"?"#portal-verify":t.screen==="admin"?`#admin-${t.adminTab}`:`#${t.publicTab||"home"}`)}function Be(t){p.screen=t.screen,p.publicTab=t.publicTab||"home",p.matchesSubTab=t.matchesSubTab||"fixtures",p.detailPlayerId=t.detailPlayerId||null,p.morePage=t.morePage||"news",p.adminTab=t.adminTab||"overview",p.drawerOpen=!1,S(),window.scrollTo({top:0,behavior:"auto"})}function F(t,{push:e=!0,replace:a=!1}={}){t.screen==="admin"&&(H()||(t={...t,screen:"portalAuth"})),t.screen==="playerPortal"&&(t={screen:"public",publicTab:"home"}),t.screen;const r={...ct(),...t},o=$[$.length-1];if(!aa(o,r)){if(a&&$.length>0){$[$.length-1]=r;try{window.history.replaceState({rdmIdx:$.length-1},"",ae(r))}catch{}}else if(e||$.length===0){$.push(r),$.length>24&&$.shift();try{window.history.pushState({rdmIdx:$.length-1},"",ae(r))}catch{}}}Be(r)}function X(t){p.drawerOpen=!!t;const e=document.getElementById("drawerOverlay");if(e){const a=e.querySelector(".drawerPanel");a&&(a.style.transform=""),e.classList.remove("dragging"),e.classList.toggle("open",p.drawerOpen),e.setAttribute("aria-hidden",p.drawerOpen?"false":"true")}else S()}function dt(){if(Me())return lt(),!0;if(p.drawerOpen)return X(!1),!0;if($.length>1){$.pop();const t=$[$.length-1];try{window.history.replaceState({rdmIdx:$.length-1},"",ae(t))}catch{}return Be(t),!0}return!1}function na(){try{const t=localStorage.getItem("rdm-app-theme")||"azure";return t==="turf"?(localStorage.setItem("rdm-app-theme","azure"),"azure"):ge.some(e=>e.id===t)?t:"azure"}catch{return"azure"}}function ut(t){var e;return((e=ge.find(a=>a.id===t))==null?void 0:e.label)||"Sky Azure"}function he(t){const e=ge.some(a=>a.id===t)?t:"azure";p.theme=e,document.documentElement.setAttribute("data-theme",e);try{localStorage.setItem("rdm-app-theme",e)}catch{}ot(e),S()}function W(){return s.brandLogo||w.logoPath}function Fe(){return _(s.apkDownloadUrl)||w.apkDownloadUrl}function ra(){return _(s.apkReleasesUrl)||w.apkReleasesUrl}function ye(){return String(s.appVersion||T.versionName).replace(/^v/i,"")}function xe(t){const e=Qe(t,W()),a=e===W()||e===w.logoPath;return{src:e,cls:a?"avatarCircle is-crest":"avatarCircle is-photo"}}function z(t){return{home:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/></svg>',squad:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',matches:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',gallery:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>',more:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>'}[t]||""}function pt(t){return{home:z("home"),squad:z("squad"),matches:z("matches"),gallery:z("gallery"),more:z("more"),xi:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',records:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',tournaments:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 8.5 15.5 15.5"/><path d="M15.5 8.5 8.5 15.5"/></svg>',honours:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',news:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',updates:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',socials:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',about:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',download:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>'}[t]||""}function re({title:t="RDM Official",showBack:e=!1,showPublicNav:a=!0,rightActionHtml:r=""}){const o=[["home","Home"],["squad","Squad"],["matches","Matches"],["gallery","Gallery"],["more","More"]],n=e?`<button type="button" class="menuCircleBtn" id="btnStepBack" aria-label="Go back">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
       </button>`:`<button type="button" class="menuCircleBtn" id="btnOpenDrawer" aria-label="Open team menu">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
       </button>`,c=r||'<button type="button" class="topActionBtn" id="btnPickTheme">Theme</button>';return`
    <header class="topBar">
      <div class="topBarInner">
        <div class="topLeftGroup">
          ${n}
          <button type="button" class="topBrand" id="btnBrandHome" aria-label="RDM Official Home">
            <img src="${i(W())}" alt="RDM Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
            <span class="topBrandText">${i(t)}</span>
          </button>
        </div>
        ${a?`
          <nav class="topDesktopNav" aria-label="Primary navigation">
            ${o.map(([d,l])=>`
              <button type="button" class="topNavLink ${p.screen==="public"&&p.publicTab===d?"active":""}" data-public-tab="${d}">${l}</button>
            `).join("")}
          </nav>
        `:"<div></div>"}
        <div class="topBarActions">
          ${c}
        </div>
      </div>
    </header>
  `}function sa(){const t=[["xi","Playing XI"],["records","Team Records"],["tournaments","Tournaments & H2H"],["honours","Team Honours"],["news","Team News"],["updates","Official Updates"],["socials","Channels & Contact"],["about","About RDM"],["download","Get Android App"]],e=`<button type="button" class="btnSecondary btnSm btnFull" id="btnOpenAdminPortal">${H()?"Open Admin Console":"Admin Panel"}</button>`;return`
    <div class="drawerOverlay ${p.drawerOpen?"open":""}" id="drawerOverlay" role="dialog" aria-modal="true" aria-hidden="${p.drawerOpen?"false":"true"}" aria-label="Team navigation menu">
      <aside class="drawerPanel" id="drawerPanel">
        <div class="drawerHeader">
          <div class="drawerBrandLockup">
            <img src="${i(W())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
            <div>
              <strong>RDM Official</strong>
              <span>Cricket Team · Mahuawan, Bihar</span>
            </div>
          </div>
        </div>

        <div class="drawerBody">
          <div class="drawerGroupLabel">Team Sections</div>
          ${t.map(([a,r])=>`
            <button type="button" class="drawerNavBtn ${p.screen==="subpage"&&p.morePage===a?"active":""}" data-open-subpage="${a}">
              <span class="drawerNavLeft">
                <span class="drawerNavIcon" aria-hidden="true">${pt(a)}</span>
                <span>${r}</span>
              </span>
              <span aria-hidden="true">›</span>
            </button>
          `).join("")}
        </div>

        <div class="drawerFooter">
          <button type="button" class="btnSecondary btnSm btnFull" id="btnDrawerTheme">Theme · ${i(ut(p.theme))}</button>
          ${e}
        </div>
      </aside>
    </div>
  `}function le(){return`
    <footer class="webFooter">
      <div class="webFooterInner">
        <div class="webFooterBrand">
          <img src="${i(W())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
          <div>
            <strong>${i(m(w.orgName))}</strong>
            <span>${i(w.location)} · Est. ${i(w.founded)}</span>
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
          <button type="button" class="webFooterLink" data-ext-url="${i(w.captainContactUrl)}">WhatsApp Captain ↗</button>
          <button type="button" class="webFooterLink" id="btnFooterAdminPortal">Admin Panel</button>
        </div>
      </div>
    </footer>
  `}function oa(){return`
    <nav class="bottomNav" aria-label="Mobile navigation">
      <div class="bottomNavGrid">
        ${[["home","Home"],["squad","Squad"],["matches","Matches"],["gallery","Gallery"],["more","More"]].map(([e,a])=>`
          <button type="button" class="navTabBtn ${p.screen==="public"&&p.publicTab===e?"active":""}" data-public-tab="${e}" aria-current="${p.screen==="public"&&p.publicTab===e?"page":"false"}">
            <span class="navIconPill">${z(e)}</span>
            <span>${a}</span>
          </button>
        `).join("")}
      </div>
    </nav>
  `}function ia(){const t=s.matches.find(u=>!/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${u.matchStatus||""} ${u.status||""} ${u.note||""}`)),e=s.matches.find(u=>/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${u.matchStatus||""} ${u.status||""} ${u.note||""}`)),a=s.updates.find(u=>u.pinned)||s.updates[0],r=s.news.find(u=>u.pinned)||s.news[0],o=a||r,n=s.players.find(u=>u.id==="RDM001")||s.players[0],c=s.players.find(u=>u.id==="RDM003"),d=s.players.find(u=>u.id==="RDM006"),l=[n,c,d].filter(Boolean);return`
    ${s.loadError?`<div class="infoBanner"><span>${i(s.loadError)}</span><button type="button" class="btnSecondary btnSm" id="btnRetrySync">Retry</button></div>`:""}

    <section class="heroBannerCard">
      <div class="heroPhotoLayer" aria-hidden="true">
        <img src="${i(w.heroImagePath)}" alt="" referrerPolicy="no-referrer">
      </div>
      <div class="heroBannerInner">
        <div class="heroBannerTop">
          <img class="heroBannerLogo" src="${i(W())}" alt="RDM Official Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
          <div class="heroBannerCopy">
            <span class="heroEyebrow">OFFICIAL CRICKET TEAM</span>
            <h1 class="heroDisplayTitle">${i(w.orgName)}</h1>
            <p>${i(w.motto)}</p>
          </div>
        </div>
        <div class="heroBannerBottom">
          <div class="heroBannerMeta">
            <span>Est. ${i(w.founded)}</span>
            <span aria-hidden="true">·</span>
            <span>${i(w.locationLabel)}</span>
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
          <strong class="kpiValue num">${s.players.length}</strong>
          <span class="kpiLabel">Squad Players</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${z("squad")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-open-subpage="honours">
        <div>
          <strong class="kpiValue num">${s.honours.length}</strong>
          <span class="kpiLabel">Team Honours</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${pt("honours")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="matches">
        <div>
          <strong class="kpiValue num">${s.matches.length}</strong>
          <span class="kpiLabel">Matches</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${z("matches")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="gallery">
        <div>
          <strong class="kpiValue num">${s.gallery.length}</strong>
          <span class="kpiLabel">Gallery Photos</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${z("gallery")}</span>
      </button>
    </section>

    <div class="homeSplitGrid">
      <article class="surfaceCard">
        <div>
          <div class="sectionHeader" style="margin-bottom:12px;">
            <div>
              <span class="sectionKicker">Match Centre</span>
              <h2 class="sectionTitle">${t?"Upcoming Fixture":e?"Recent Match":"Match Schedule"}</h2>
            </div>
            <button type="button" class="btnGhost btnSm" data-public-tab="matches">Matches ›</button>
          </div>
          ${t||e?mt(t||e):'<p class="sectionSub" style="margin-top:6px;">No upcoming match has been scheduled yet. Check back or contact team management.</p>'}
        </div>
      </article>

      <article class="surfaceCard">
        <div>
          <div class="sectionHeader" style="margin-bottom:12px;">
            <div>
              <span class="sectionKicker">Official Dispatch</span>
              <h2 class="sectionTitle">${o?i(m(o.title||"Team Update")):"Team Announcements"}</h2>
            </div>
            <button type="button" class="btnGhost btnSm" data-open-subpage="updates">All Updates ›</button>
          </div>
          ${o?`
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${i(m(o.text||""))}</p>
            ${o.date?`<p class="sectionSub num" style="margin-top:8px;">Published ${i(o.date)}</p>`:""}
          `:'<p class="sectionSub">Official news, fixtures, and team notices appear here when posted by team management.</p>'}
        </div>
        ${a!=null&&a.url&&_(a.url)?`
          <div style="margin-top:14px;">
            <button type="button" class="btnSecondary btnSm" data-ext-url="${i(_(a.url))}">Open Link ↗</button>
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
        ${l.map(u=>{const f=xe(u.image);return`
            <button type="button" class="leaderCard" data-open-player="${i(u.id)}">
              <img class="${f.cls}" src="${i(f.src)}" alt="${i(u.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
              <div>
                <div class="leaderCardMeta">${i(m(u.role))}</div>
                <div class="leaderCardTitle">${i(m(u.name))}</div>
                ${u.detail?`<div class="leaderCardSub">${i(m(u.detail))}</div>`:""}
              </div>
            </button>
          `}).join("")}
      </div>
    </section>
  `}function mt(t){const e=m(t.matchStatus||t.status||"Match"),a=[t.date,t.time,t.venueName||t.venue].filter(Boolean).map(m).join(" · ");return`
    <div>
      <div class="matchCardHead">
        <strong>RDM vs ${i(m(t.opponent||"Opponent"))}</strong>
        <span class="matchStatusText">${i(e)}</span>
      </div>
      ${a?`<div class="num" style="font-size:0.78rem;color:var(--ink-muted);margin-bottom:8px;">${i(a)}</div>`:""}
      ${t.ourScore||t.oppScore?`
        <div class="matchScoreRow num">
          <span>RDM: ${i(t.ourScore||"—")}</span>
          <span>${i(m(t.opponent||"Opp"))}: ${i(t.oppScore||"—")}</span>
        </div>
      `:""}
      ${t.result||t.note?`<p class="richText" style="margin:6px 0 0;font-size:0.84rem;color:var(--ink-secondary);">${i(m(t.result?`${t.result}${t.margin?" · "+t.margin:""}`:t.note))}</p>`:""}
      ${t.potm?`<p style="margin:6px 0 0;font-size:0.8rem;font-weight:700;color:var(--brand-blue);">Player of the Match: ${i(m(t.potm))}</p>`:""}
    </div>
  `}function la(){const t=p.squadQuery.trim().toLowerCase(),e=s.players.filter(a=>{const r=String(a.role||"").toUpperCase();return p.squadFilter==="ALL"||p.squadFilter==="LEADERS"&&(r.includes("CAPTAIN")||r.includes("KEEPER"))||p.squadFilter==="ALLROUNDER"&&r.includes("ALL-ROUNDER")||p.squadFilter==="BATSMAN"&&r.includes("BATSMAN")&&!r.includes("ALL-ROUNDER")?t?`${a.name} ${a.role} ${a.detail} ${a.id} ${oe[a.id]||""} ${a.jersey||""}`.toLowerCase().includes(t):!0:!1});return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Official Roster</span>
        <h2 class="sectionTitle">RDM Squad</h2>
        <p class="sectionSub"><span class="num">${s.players.length}</span> registered players</p>
      </div>
    </div>

    <input id="squadSearchInput" class="searchInput" type="search" placeholder="Search player name, role, or jersey..." value="${i(p.squadQuery)}">

    <div class="filterRow">
      ${[["ALL","All Players"],["LEADERS","Leadership"],["ALLROUNDER","All-Rounders"],["BATSMAN","Batsmen"]].map(([a,r])=>`<button type="button" class="segTab ${p.squadFilter===a?"active":""}" data-squad-filter="${a}">${r}</button>`).join("")}
    </div>

    ${e.length?`
      <div class="squadGrid">
        ${e.map(a=>{const r=oe[a.id]||a.id,o=xe(a.image);return`
            <button type="button" class="playerCard" data-open-player="${i(a.id)}">
              <img class="playerCardAvatar ${o.cls}" src="${i(o.src)}" alt="${i(a.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
              <div class="playerCardBody">
                <span class="metaCode">${i(r)}${a.jersey?" · #"+i(a.jersey):""}</span>
                <h3>${i(m(a.name))}</h3>
                <div class="playerCardRole">${i(m(a.role))}</div>
                ${a.detail?`<div class="playerCardDetail">${i(m(a.detail))}</div>`:""}
              </div>
              <span class="chevron" aria-hidden="true">›</span>
            </button>
          `}).join("")}
      </div>
    `:'<div class="emptyState">No players match your current filter.</div>'}
  `}function ca(){let t="";return p.matchesSubTab==="fixtures"?t=s.matches.length?`<div class="stackList">${s.matches.map(e=>`<article class="surfaceCard">${mt(e)}</article>`).join("")}</div>`:'<div class="emptyState">No fixtures or match results added yet.</div>':p.matchesSubTab==="xi"?t=ht():t=bt(),`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Schedule &amp; Results</span>
        <h2 class="sectionTitle">Matches Centre</h2>
      </div>
    </div>
    <div class="filterRow">
      ${[["fixtures","Fixtures & Results"],["xi","Playing XI"],["tournaments","Tournaments & Records"]].map(([e,a])=>`<button type="button" class="segTab ${p.matchesSubTab===e?"active":""}" data-matches-sub="${e}">${a}</button>`).join("")}
    </div>
    ${t}
  `}function ht(){return s.lineups.length?`<div class="stackList">${s.lineups.map(t=>`
    <article class="surfaceCard">
      <h3 style="margin:0 0 4px;font-size:1.25rem;">${i(m(t.title||"Playing XI"))}</h3>
      ${t.match?`<p style="margin:0 0 10px;font-size:0.8125rem;color:var(--ink-muted);">${i(m(t.match))}</p>`:""}
      <div class="xiGrid num">
        ${(t.players||[]).map((e,a)=>{const r=s.players.find(n=>n.id===e),o=`${a+1}. ${m((r==null?void 0:r.name)||e)}`;return r?`<button type="button" class="xiPlayerBtn" data-open-player="${i(e)}">${i(o)}</button>`:`<div style="padding:6px 8px;">${i(o)}</div>`}).join("")}
      </div>
      ${(t.subs||[]).length?`
        <p style="margin:10px 0 0;font-size:0.78rem;color:var(--ink-muted);">
          Substitutes: ${t.subs.map(e=>{var a;return i(m(((a=s.players.find(r=>r.id===e))==null?void 0:a.name)||e))}).join(" · ")}
        </p>
      `:""}
    </article>
  `).join("")}</div>`:'<div class="emptyState">No Playing XI published yet.</div>'}function bt(){return s.tournaments.length>0||s.records.length>0||s.opponents.length>0?`
    <div class="stackList">
      ${s.tournaments.map(e=>`
        <article class="surfaceCard">
          <span class="sectionKicker">${i(m(e.status||"Tournament"))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${i(m(e.name||"Tournament"))}</h3>
          <p class="sectionSub num">${[e.season,e.position,e.venueName||e.venue].filter(Boolean).map(m).join(" · ")}</p>
          ${e.fixtures?`<p class="richText" style="margin:8px 0 0;font-size:0.82rem;color:var(--ink-secondary);">${i(e.fixtures)}</p>`:""}
        </article>
      `).join("")}
      ${s.records.map(e=>`
        <article class="surfaceCard">
          <span class="sectionKicker">${i(m(e.season||"Team Record"))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${i(m(e.title||"Record"))}</h3>
          <p style="margin:0;font-weight:700;color:var(--brand-blue);" class="num">${i(m(e.value||""))}${e.player?" · "+i(m(e.player)):""}</p>
        </article>
      `).join("")}
      ${s.opponents.map(e=>`
        <article class="surfaceCard">
          <span class="sectionKicker">Head-to-Head</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">RDM vs ${i(m(e.name||"Opponent"))}</h3>
          <p class="sectionSub num">${Number(e.played||0)} Played · ${Number(e.won||0)} Won · ${Number(e.lost||0)} Lost</p>
        </article>
      `).join("")}
    </div>
  `:'<div class="emptyState">No tournaments or team records recorded yet.</div>'}function ft(){return`
    <div class="honoursGrid">
      ${s.honours.map(t=>`
        <article class="honourCard">
          <button type="button" class="honourMediaBtn" data-zoom-src="${i(t.image||W())}" data-zoom-cap="${i(`${t.year} · ${t.title} — ${t.sub}`)}">
            <img src="${i(t.image||W())}" alt="${i(t.title)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
          </button>
          <div class="honourCardBody">
            <div class="honourCardTop">
              <span class="metaCode">${i(t.year)}</span>
              <span class="honourTapHint">Tap to view full</span>
            </div>
            <h3 class="honourCardTitle">${i(m(t.title))}</h3>
            <p class="honourCardSub">${i(m(t.sub))}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `}function da(){const t=["ALL","TEAM PHOTOS","MEMORIES","UPDATES"],e=s.gallery.filter(a=>{const r=String(a.album||"MEMORIES").toUpperCase();return p.galleryAlbum==="ALL"?!["MATCHES","TROPHIES"].includes(r):r===p.galleryAlbum});return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Team Memories</span>
        <h2 class="sectionTitle">Team Gallery</h2>
      </div>
    </div>

    <div class="filterRow">
      ${t.map(a=>`<button type="button" class="segTab ${p.galleryAlbum===a?"active":""}" data-gallery-album="${a}">${i(m(a))}</button>`).join("")}
    </div>

    ${e.length?`
      <div class="galleryGrid">
        ${e.map((a,r)=>`
          <button type="button" class="galleryTile" data-zoom-gallery="${r}">
            <img src="${i(a.image)}" alt="${i(a.caption||"RDM Memory")}" referrerPolicy="no-referrer">
            <div class="galleryTileCaption">
              <strong>${i(m(a.album||"Memories"))}</strong>
              <span>${i(m(a.caption||"RDM Memory"))}</span>
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
    ${ft()}
  `}function ua(){const t=st();return`
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
          <p class="sectionSub">Active: ${i(ut(p.theme))}</p>
        </div>
      </div>
      <div class="themeGrid">
        ${ge.map(e=>`
          <button type="button" class="themeChoiceRow ${p.theme===e.id?"active":""}" data-quick-theme="${e.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${e.swatches.map(a=>`<span style="background:${a}"></span>`).join("")}
            </div>
            <div class="themeChoiceCopy">
              <strong>${i(e.label)}</strong>
              <span>${i(e.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${p.theme===e.id?"Active":"Apply"}</span>
          </button>
        `).join("")}
      </div>
    </section>

    <section class="surfaceCard">
      <span class="sectionKicker">Connect</span>
      <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:10px;">Official Channels &amp; Contact</h3>
      <div class="linkRowWrap">
        <button type="button" class="linkActionBtn" data-ext-url="${i(w.captainContactUrl)}">WhatsApp Captain ↗</button>
        ${s.socials.filter(e=>_(e.url)).map(e=>`
          <button type="button" class="linkActionBtn" data-ext-url="${i(_(e.url))}">${i(m(e.displayName||e.name))} ↗</button>
        `).join("")}
      </div>
    </section>

    <section class="surfaceCard">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Official App · v${i(ye())}</span>
          <h3 class="sectionTitle" style="font-size:1.22rem;">App &amp; Sync</h3>
          <p class="sectionSub">${Re()?`Installed Build v${i(T.versionName)} · Live Cloud Sync Active`:"Sync live team data or open the Android App & Updates centre"}</p>
        </div>
        <div class="rowActions">
          <button type="button" class="btnPrimary btnSm" data-open-subpage="download">App &amp; Updates ›</button>
          <button type="button" class="btnSecondary btnSm" id="btnRefreshClub">Sync Team Data</button>
          ${t?'<button type="button" class="btnSecondary btnSm" id="btnInstallWebApp">Install Web App</button>':""}
        </div>
      </div>
    </section>
  `}function pa(){const t=s.players.find(d=>d.id===p.detailPlayerId);if(!t)return`
      ${re({title:"Player Profile",showBack:!0,showPublicNav:!0})}
      <div class="tabContent fullPageContent">
        <div class="emptyState">Player record not found.</div>
      </div>
      ${le()}
    `;const e=xe(t.image),a=s.stats.find(d=>d.playerId===t.id),r=s.availability.find(d=>d.playerId===t.id),o=oe[t.id]||t.id,n=(Array.isArray(t.socials)?t.socials:[]).filter(d=>_((d==null?void 0:d.url)||d)),c=a&&(Number(a.matches)>0||Number(a.runs)>0||Number(a.wickets)>0||Number(a.highScore)>0);return`
    ${re({title:m(t.name),showBack:!0,showPublicNav:!0})}
    <div class="tabContent fullPageContent">
      <section class="fullProfileHero">
        <img class="fullProfileAvatar ${e.cls}" src="${i(e.src)}" alt="${i(t.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
        <div>
          <span class="metaCode">${i(o)} · ${i(t.id)}${t.jersey?" · #"+i(t.jersey):""}</span>
          <h1 class="fullProfileName">${i(m(t.name))}</h1>
          <div class="fullProfileRole">${i(m(t.role))}</div>
          ${t.detail?`<p class="fullProfileMeta richText" style="margin:6px auto 0;">${i(m(t.detail))}</p>`:""}
          ${t.nick?`<p class="sectionSub" style="margin-top:6px;">Nickname: ${i(m(t.nick))}</p>`:""}
          ${r!=null&&r.status?`<p class="sectionSub" style="margin-top:4px;font-weight:700;color:var(--brand-blue);">Match Status: ${i(m(r.status))}</p>`:""}
        </div>
        <div>
          <button type="button" class="btnPrimary btnSm" id="btnDownloadDetailCard">Download Player Card</button>
        </div>
      </section>

      ${t.bio?`
        <section class="surfaceCard">
          <span class="sectionKicker">About Player</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:6px;">Player Biography</h2>
          <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.9rem;">${i(m(t.bio))}</p>
        </section>
      `:""}

      <section class="surfaceCard">
        <span class="sectionKicker">Performance</span>
        <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Verified Career Statistics</h2>
        ${c?`
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
            <span>Best: ${i(a.bestBowling||"—")}</span>
          </div>
        `:'<p class="sectionSub">No verified career statistics recorded for this player yet.</p>'}
      </section>

      ${n.length?`
        <section class="surfaceCard">
          <span class="sectionKicker">Connect</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Official Social Links</h2>
          <div class="linkRowWrap">
            ${n.map((d,l)=>{const u=_(typeof d=="string"?d:d.url),f=typeof d=="string"?`Social ${l+1}`:d.name||`Social ${l+1}`;return`<button type="button" class="linkActionBtn" data-ext-url="${i(u)}">${i(m(f))} ↗</button>`}).join("")}
          </div>
        </section>
      `:""}
    </div>
    ${le()}
  `}function ma(){const e={news:"Team News",updates:"Official Updates",records:"Team Records",tournaments:"Tournaments & H2H",xi:"Playing XI",honours:"Team Honours",socials:"Channels & Contact",about:"About RDM",download:"Get Android App"}[p.morePage]||"Team Info";let a="";if(p.morePage==="news")a=s.news.length?`<div class="stackList">${s.news.map(r=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${r.pinned?"Pinned Announcement":"Team News"}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${i(m(r.title||"Announcement"))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${i(m(r.text||""))}</p>
          </article>
        `).join("")}</div>`:'<div class="emptyState">No team news announcements posted yet.</div>';else if(p.morePage==="updates")a=s.updates.length?`<div class="stackList">${s.updates.map(r=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${i(m(r.category||"Official Update"))}${r.date?" · "+i(r.date):""}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${i(m(r.title||"Update"))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${i(m(r.text||""))}</p>
            ${r.url&&_(r.url)?`<div style="margin-top:12px;"><button type="button" class="btnSecondary btnSm" data-ext-url="${i(_(r.url))}">Open Link ↗</button></div>`:""}
          </article>
        `).join("")}</div>`:'<div class="emptyState">No official updates published yet.</div>';else if(p.morePage==="xi")a=ht();else if(p.morePage==="records")a=s.records.length?`<div class="stackList">${s.records.map(r=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${i(m(r.season||"Team Record"))}</span>
            <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:4px;">${i(m(r.title||"Record"))}</h3>
            <p style="margin:0;font-weight:700;color:var(--brand-blue);" class="num">${i(m(r.value||""))}${r.player?" · "+i(m(r.player)):""}</p>
          </article>
        `).join("")}</div>`:'<div class="emptyState">No team records recorded yet.</div>';else if(p.morePage==="tournaments")a=bt();else if(p.morePage==="honours")a=ft();else if(p.morePage==="socials")a=`
      <div class="surfaceCard">
        <span class="sectionKicker">Direct Contact</span>
        <h3 class="sectionTitle" style="font-size:1.3rem;margin-bottom:8px;">Team Channels &amp; Captain</h3>
        <div class="linkRowWrap">
          <button type="button" class="linkActionBtn" data-ext-url="${i(w.captainContactUrl)}">WhatsApp Captain ↗</button>
          ${s.socials.filter(r=>_(r.url)).map(r=>`
            <button type="button" class="linkActionBtn" data-ext-url="${i(_(r.url))}">${i(m(r.displayName||r.name))} ↗</button>
          `).join("")}
        </div>
      </div>
    `;else if(p.morePage==="about")a=`
      <div class="surfaceCard">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
          <img src="${i(W())}" alt="RDM Logo" referrerPolicy="no-referrer" style="width:68px;height:68px;border-radius:50%;background:#FFFFFF;border:1.5px solid var(--border-strong);object-fit:cover;flex-shrink:0;">
          <div>
            <span class="sectionKicker">Est. ${i(w.founded)} · ${i(w.locationLabel)}</span>
            <h3 class="sectionTitle">${i(m(w.orgName))}</h3>
            <p class="sectionSub" style="font-weight:700;color:var(--brand-blue);">${i(w.motto)}</p>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:14px;color:var(--ink-secondary);font-size:0.93rem;line-height:1.72;">
          <p class="richText" style="margin:0;">Founded in 2024 in the cricket-loving village of Mahuawan in Gopalganj district, Bihar, Rehan Dominators Mahuawan (RDM) began with a clear vision: to turn raw grassroots cricket talent into a structured, fearless, and respected competitive side. What started on local grounds with lifelong friends quickly grew into one of the most organized and passionate village-to-district cricket units in the region.</p>
          <p class="richText" style="margin:0;">At the heart of RDM is our founding philosophy — One Team, One Dream, One Domination. Every match day is built on brotherhood, respect for the game, disciplined training, and total commitment in all three departments. Whether defending a modest total under pressure or chasing targets in front of local supporters, every player wears the RDM crest with pride and accountability.</p>
          <p class="richText" style="margin:0;">Guided on the field by Captain Rehan Alam (#45), Vice-Captain Saif Ali, and Wicketkeeper-Batsman Soaib Akhtar, our 17-member active roster blends explosive top-order stroke makers, dependable middle-order finishers, sharp all-rounders, and strike bowlers capable of turning any contest around. Together, the core squad has built an identity defined by teamwork and composure in crunch overs.</p>
          <p class="richText" style="margin:0;">RDM’s competitive pedigree is marked by landmark achievements in regional tournaments — highlighted by lifting the Mahuawan Premier League (MPL) Championship Trophy in 2024 and finishing as MPL Runner-Up in 2025. Each season adds new milestones, head-to-head rivalries, individual records, and unforgettable team memories celebrated across our community.</p>
          <p class="richText" style="margin:0;">Our official Website, installable Web App (PWA), and Android APK keep players, management, and fans connected through one live digital platform. From instant match fixtures, verified career statistics, Playing XI announcements, and downloadable player identity cards to real-time news and direct team channels, RDM Official brings every update directly to your pocket.</p>
        </div>
      </div>
    `;else{const r=st(),o=ve();a=`
      <div class="surfaceCard">
        <span class="sectionKicker">Official Android APK · v${i(o.latestVersion)}</span>
        <h3 class="sectionTitle" style="font-size:1.35rem;margin-bottom:8px;">RDM Official Android App</h3>
        <p style="margin:0 0 12px;color:var(--ink-secondary);font-size:0.9rem;">
          ${Re()?`You are running the native RDM Official Android App (v${i(T.versionName)}). Check for the newest build and download updates directly right here — all data stays synced live with the Website.`:"Download the latest RDM Official Android APK directly to your phone. The Website, PWA, and Android App share the exact same live squad profiles, fixtures, and Admin Panel."}
        </p>
        ${o.hasUpdate?`<div class="infoBanner" style="margin-bottom:12px;"><span>Update v${i(o.latestVersion)} available — ${i(o.notes)}</span></div>`:""}
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;">
          <span class="metaCode">${Re()?`Installed: v${i(T.versionName)}`:`Web Version: v${i(T.versionName)}`}</span>
          <span class="metaCode">Latest APK: v${i(o.latestVersion)}</span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          <button type="button" class="btnPrimary btnSm" id="btnDownloadLatestApk">Download Latest APK (v${i(o.latestVersion)})</button>
          <button type="button" class="btnSecondary btnSm" id="btnCheckAppUpdate">Check for Update</button>
          ${r?'<button type="button" class="btnSecondary btnSm" id="btnInstallWebApp">Install Web App</button>':""}
          <button type="button" class="btnSecondary btnSm" data-public-tab="home">Back to Home</button>
        </div>
      </div>
    `}return`
    ${re({title:e,showBack:!0,showPublicNav:!0})}
    <div class="tabContent fullPageContent">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Rehan Dominators Mahuawan</span>
          <h1 class="sectionTitle">${i(e)}</h1>
        </div>
      </div>
      ${a}
    </div>
    ${le()}
  `}function yt(){return`
    ${re({title:"RDM Admin Panel",showBack:!0,showPublicNav:!1,rightActionHtml:'<button type="button" class="topActionBtn" id="btnPortalPublicView">Public View</button>'})}
    <div class="loginCardWrap">
      <div class="surfaceCard">
        <div class="loginLogoBox">
          <img src="${i(W())}" alt="RDM Crest" referrerPolicy="no-referrer">
        </div>
        <h2 class="sectionTitle" style="text-align:center;">Admin Panel Unlock</h2>
        <p class="sectionSub" style="text-align:center;margin-bottom:16px;">Enter your APK Admin Password to open the Admin Console. No username required. (Website Admin uses its separate private link.)</p>
        ${p.loginError?`<div class="errorBanner" style="margin-bottom:12px;">${i(p.loginError)}</div>`:""}
        <form id="rdmPortalAuthForm" class="formStack">
          <label class="fieldBlock">
            <span>Admin Password</span>
            <div class="passwordWrap">
              <input id="loginPassword" name="password" type="password" autocomplete="current-password" placeholder="Enter admin password" required>
              <button type="button" class="togglePwBtn" id="btnTogglePw">Show</button>
            </div>
          </label>
          <button type="submit" class="btnPrimary btnFull" id="btnLoginSubmit" ${p.loginBusy?"disabled":""}>
            ${p.loginBusy?"Unlocking Admin Panel…":"Open Admin Panel"}
          </button>
        </form>
      </div>
    </div>
  `}function ha(){return vt()}function ba(){if(!H())return yt();let t="";return p.adminTab==="overview"?t=`
      <div class="kpiStripGrid">
        <div class="factBox"><strong class="num">${s.players.length}</strong><span>Squad Players</span></div>
        <div class="factBox"><strong class="num">${s.matches.length}</strong><span>Matches</span></div>
        <div class="factBox"><strong class="num">${s.news.length+s.updates.length}</strong><span>News &amp; Updates</span></div>
        <div class="factBox"><strong class="num">${s.gallery.length}</strong><span>Gallery Photos</span></div>
      </div>

      <div class="surfaceCard">
        <h3 class="sectionTitle" style="font-size:1.25rem;margin-bottom:12px;">Quick Admin Actions</h3>
        <div class="adminActionGrid">
          <button type="button" class="btnPrimary btnSm" data-admin-action="addPlayer">+ Add Player</button>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addMatch">+ Match / Result</button>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addNews">+ Team News</button>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addUpdate">+ Official Update</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addGallery">+ Gallery Photo</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addLineup">+ Playing XI</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addHonour">+ Team Honour</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addRecord">+ Team Record</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addTournament">+ Tournament</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="addSocial">+ Social Link</button>
          <button type="button" class="btnSecondary btnSm" data-admin-action="editAppConfig">App &amp; APK Update</button>
        </div>
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:8px;">
          <div>
            <span class="sectionKicker">APK Admin v${i(ye())} · ${be()?"Firebase Cloud Sync Live":"Local Admin Unlocked"}</span>
            <h3 class="sectionTitle" style="font-size:1.22rem;">Website, PWA &amp; Android APK Connected</h3>
            <p class="sectionSub">${be()?"Every change published here saves to Firebase and updates Website, PWA, and all installed Android APKs in real time.":"APK Admin unlocked with password. Ensure your Firebase Admin account password matches in Firebase Console so cloud writes sync across Website and APKs."}</p>
          </div>
          <button type="button" class="btnSecondary btnSm" data-admin-action="editAppConfig">Configure APK</button>
        </div>
      </div>
    `:p.adminTab==="squad"?t=`
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:8px;">
          <div><h3 class="sectionTitle" style="font-size:1.25rem;">Manage Squad (Add, Edit, Stats, Remove)</h3></div>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addPlayer">+ Add Player</button>
        </div>
        <div>
          ${s.players.map(e=>{var r;const a=((r=s.availability.find(o=>o.playerId===e.id))==null?void 0:r.status)||"NOT SET";return`
              <div class="listRowItem">
                <div style="min-width:0;">
                  <strong style="display:block;font-size:0.92rem;">${i(m(e.name))}</strong>
                  <span class="num" style="font-size:0.76rem;color:var(--ink-muted);">${i(e.id)} · ${i(m(a))}</span>
                </div>
                <div class="rowActions">
                  <button type="button" class="btnSecondary btnSm" data-admin-edit-player="${i(e.id)}">Edit</button>
                  <button type="button" class="btnSecondary btnSm" data-admin-edit-stats="${i(e.id)}">Stats</button>
                  <button type="button" class="btnSecondary btnSm" data-admin-avail="${i(e.id)}">Avail</button>
                  <button type="button" class="btnDanger btnSm" data-admin-remove-player="${i(e.id)}">Remove</button>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    `:p.adminTab==="matches"?t=`
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Matches (${s.matches.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addMatch">+ Match</button>
        </div>
        ${s.matches.length?s.matches.map(e=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">RDM vs ${i(m(e.opponent||"Opponent"))}</strong>
              <span class="num" style="font-size:0.76rem;color:var(--ink-muted);">${i(m(e.matchStatus||e.status||"Match"))} · ${i(e.date||"Date TBA")}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-match="${i(e._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Matches:${i(e._docId)}">Delete</button>
            </div>
          </div>
        `).join(""):'<p class="sectionSub">No matches yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Playing XI (${s.lineups.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addLineup">+ Lineup</button>
        </div>
        ${s.lineups.length?s.lineups.map(e=>`
          <div class="listRowItem">
            <div>
              <strong style="display:block;font-size:0.9rem;">${i(m(e.title||"Playing XI"))}</strong>
              <span style="font-size:0.76rem;color:var(--ink-muted);">${i(m(e.match||""))}</span>
            </div>
            <button type="button" class="btnDanger btnSm" data-admin-del="PlayingXI:${i(e._docId)}">Delete</button>
          </div>
        `).join(""):'<p class="sectionSub">No lineups yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Tournaments &amp; Records (${s.tournaments.length+s.records.length})</h3>
          <div style="display:flex;gap:6px;">
            <button type="button" class="btnPrimary btnSm" data-admin-action="addTournament">+ Tournament</button>
            <button type="button" class="btnSecondary btnSm" data-admin-action="addRecord">+ Record</button>
          </div>
        </div>
        ${[...s.tournaments.map(e=>({_col:"Tournaments",_docId:e._docId,title:e.name||"Tournament",sub:[e.season,e.status,e.position].filter(Boolean).join(" · ")})),...s.records.map(e=>({_col:"TeamRecords",_docId:e._docId,title:e.title||"Record",sub:[e.value,e.player,e.season].filter(Boolean).join(" · ")}))].map(e=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${i(m(e.title))}</strong>
              <span style="font-size:0.75rem;color:var(--ink-muted);">${i(e._col)}${e.sub?" · "+i(m(e.sub)):""}</span>
            </div>
            <button type="button" class="btnDanger btnSm" data-admin-del="${i(e._col)}:${i(e._docId)}">Delete</button>
          </div>
        `).join("")||'<p class="sectionSub">No tournaments or records added yet.</p>'}
      </div>
    `:t=`
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">News &amp; Official Updates</h3>
          <div style="display:flex;gap:6px;">
            <button type="button" class="btnPrimary btnSm" data-admin-action="addNews">+ News</button>
            <button type="button" class="btnSecondary btnSm" data-admin-action="addUpdate">+ Update</button>
          </div>
        </div>
        ${[...s.news.map(e=>({...e,_col:"News"})),...s.updates.map(e=>({...e,_col:"Updates"}))].map(e=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${e.pinned?"[Pinned] ":""}${i(m(e.title||"Item"))}</strong>
              <span style="font-size:0.75rem;color:var(--ink-muted);">${i(e._col)}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-pin="${i(e._col)}:${i(e._docId)}:${e.pinned?"0":"1"}">${e.pinned?"Unpin":"Pin"}</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="${i(e._col)}:${i(e._docId)}">Delete</button>
            </div>
          </div>
        `).join("")||'<p class="sectionSub">No news or updates yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Team Honours (${s.honours.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addHonour">+ Honour</button>
        </div>
        ${s.honours.length?s.honours.map(e=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${i(e.year||"")} · ${i(m(e.title||"Honour"))}</strong>
              <span style="font-size:0.75rem;color:var(--ink-muted);">${i(m(e.sub||""))}</span>
            </div>
            <button type="button" class="btnDanger btnSm" data-admin-del="Honours:${i(e._docId)}">Delete</button>
          </div>
        `).join(""):'<p class="sectionSub">No honours yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Gallery Photos (${s.gallery.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addGallery">+ Photo</button>
        </div>
        ${s.gallery.length?s.gallery.map(e=>`
          <div class="listRowItem">
            <div style="display:flex;align-items:center;gap:10px;min-width:0;">
              <img src="${i(e.image)}" alt="" referrerPolicy="no-referrer" style="width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0;">
              <div style="min-width:0;">
                <strong style="display:block;font-size:0.86rem;">${i(m(e.caption||"Memory"))}</strong>
                <span style="font-size:0.75rem;color:var(--ink-muted);">${i(m(e.album||"MEMORIES"))}</span>
              </div>
            </div>
            <button type="button" class="btnDanger btnSm" data-admin-del="Gallery:${i(e._docId)}">Delete</button>
          </div>
        `).join(""):'<p class="sectionSub">No gallery photos yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Social Channels</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addSocial">+ Social</button>
        </div>
        ${s.socials.map(e=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.88rem;">${i(m(e.displayName||e.name))}</strong>
              <span style="font-size:0.74rem;color:var(--ink-muted);word-break:break-all;">${i(e.url||"No link set")}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-social="${i(e._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Socials:${i(e._docId)}">Delete</button>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:8px;">
          <div>
            <h3 class="sectionTitle" style="font-size:1.25rem;">App &amp; APK Update Settings</h3>
            <p class="sectionSub">Latest APK: v${i(ye())} (Code ${i(String(s.appVersionCode||T.versionCode))})</p>
          </div>
          <button type="button" class="btnPrimary btnSm" data-admin-action="editAppConfig">Edit APK Update</button>
        </div>
        <p style="margin:0;font-size:0.78rem;color:var(--ink-muted);word-break:break-all;">APK URL Configured</p>
      </div>
    `,`
    ${re({title:"Admin Console",showBack:!0,showPublicNav:!0,rightActionHtml:'<button type="button" class="topActionBtn" id="btnLogout">Logout</button>'})}

    <div class="tabContent fullPageContent">
      <div class="filterRow">
        ${[["overview","Overview"],["squad","Squad & Stats"],["matches","Matches & XI"],["content","Content & Media"]].map(([e,a])=>`<button type="button" class="segTab ${p.adminTab===e?"active":""}" data-admin-tab="${e}">${a}</button>`).join("")}
      </div>
      ${t}
    </div>
    ${le()}
  `}function vt(){let t="";return p.publicTab==="home"?t=ia():p.publicTab==="squad"?t=la():p.publicTab==="matches"?t=ca():p.publicTab==="gallery"?t=da():t=ua(),`
    ${re({title:"RDM Official",showBack:!1,showPublicNav:!0})}
    <div class="tabContent">${t}</div>
    ${le()}
    ${oa()}
  `}function S(){const t=document.getElementById("appViewport");if(!t)return;let e="";p.screen==="playerDetail"?e=pa():p.screen==="subpage"?e=ma():p.screen==="playerPortal"?e=ha():p.screen==="portalAuth"?e=yt():p.screen==="admin"?e=ba():e=vt(),t.innerHTML=e+sa(),fa()}function fa(){var n,c,d,l,u,f,y,g,C,R,E,v,h,L,O,I,q,Q;const t=b=>document.getElementById(b);(n=t("btnStepBack"))==null||n.addEventListener("click",()=>{dt()||F({screen:"public",publicTab:"home"})}),(c=t("btnOpenDrawer"))==null||c.addEventListener("click",()=>{X(!0)});const e=t("drawerOverlay"),a=t("drawerPanel");if(e==null||e.addEventListener("click",b=>{b.target.id==="drawerOverlay"&&X(!1)}),e&&a){let b=0,P=0,A=!1;a.addEventListener("touchstart",D=>{!p.drawerOpen||D.touches.length!==1||(b=D.touches[0].clientX,P=0,A=!0,e.classList.add("dragging"))},{passive:!0}),a.addEventListener("touchmove",D=>{if(!A||D.touches.length!==1)return;const K=D.touches[0].clientX-b;P=Math.min(0,K),a.style.transform=`translateX(${P}px)`},{passive:!0});const M=()=>{A&&(A=!1,e.classList.remove("dragging"),a.style.transform="",P<=-68&&X(!1))};a.addEventListener("touchend",M,{passive:!0}),a.addEventListener("touchcancel",M,{passive:!0})}(d=t("btnPickTheme"))==null||d.addEventListener("click",()=>{Je({currentTheme:p.theme,onSelectTheme:he})}),(l=t("btnDrawerTheme"))==null||l.addEventListener("click",()=>{X(!1),Je({currentTheme:p.theme,onSelectTheme:he})}),document.querySelectorAll("[data-quick-theme]").forEach(b=>{b.addEventListener("click",()=>he(b.dataset.quickTheme))}),(u=t("btnBrandHome"))==null||u.addEventListener("click",()=>{F({screen:"public",publicTab:"home"})}),(f=t("btnPortalPublicView"))==null||f.addEventListener("click",()=>{F({screen:"public",publicTab:"home"})}),(y=t("btnReturnPortal"))==null||y.addEventListener("click",()=>{X(!1)});const r=()=>{X(!1),F({screen:H()?"admin":"portalAuth",adminTab:"overview"})};(g=t("btnOpenAdminPortal"))==null||g.addEventListener("click",r),(C=t("btnFooterAdminPortal"))==null||C.addEventListener("click",r),(R=t("btnDownloadLatestApk"))==null||R.addEventListener("click",()=>{const b=ve();it(b.apkUrl||Fe()),k(`Downloading RDM Official APK v${b.latestVersion}...`)}),(E=t("btnCheckAppUpdate"))==null||E.addEventListener("click",async()=>{k("Checking for latest APK update..."),await at(),S(),Te(!0)}),(v=t("btnRefreshClub"))==null||v.addEventListener("click",async()=>{k("Syncing team data..."),await j(),S(),k("Team data synced")}),(h=t("btnRetrySync"))==null||h.addEventListener("click",async()=>{await j(),S()}),(L=t("btnInstallWebApp"))==null||L.addEventListener("click",async()=>{await Yt()&&(S(),k("App installed"))}),(O=t("btnLogout"))==null||O.addEventListener("click",()=>{Ee({title:"Confirm Sign Out",message:"Sign out of Admin Cloud Sync on this device?",confirmLabel:"Sign Out",danger:!0,onConfirm:async()=>{await Et(),p.drawerOpen=!1,p.portalMode==="admin"||(p.screen==="admin"?F({screen:"public",publicTab:"home"},{replace:!0}):S()),k("Signed out")}})}),(I=t("btnTogglePw"))==null||I.addEventListener("click",()=>{const b=t("loginPassword"),P=t("btnTogglePw");if(!b||!P)return;const A=b.type==="password";b.type=A?"text":"password",P.textContent=A?"Hide":"Show"}),(q=t("rdmPortalAuthForm"))==null||q.addEventListener("submit",async b=>{var A;b.preventDefault();const P=((A=t("loginPassword"))==null?void 0:A.value)||"";p.loginBusy=!0,p.loginError="",S();try{const M=await Mt(P);p.loginBusy=!1,k(M.cloudSynced?"Admin Panel unlocked (Cloud Sync Live)":"Admin Panel unlocked"),F({screen:"admin",adminTab:"overview"},{replace:!0})}catch(M){p.loginBusy=!1;const D=String((M==null?void 0:M.code)||(M==null?void 0:M.message)||"");D==="INVALID_ADMIN_PASSWORD"||D==="PASSWORD_REQUIRED"?p.loginError="Incorrect Admin password. Please enter the correct password.":p.loginError="Unable to unlock Admin Panel. Please try again.",S()}}),document.querySelectorAll("[data-public-tab]").forEach(b=>{b.addEventListener("click",()=>{F({screen:"public",publicTab:b.dataset.publicTab})})}),document.querySelectorAll("[data-open-subpage]").forEach(b=>{b.addEventListener("click",()=>{F({screen:"subpage",morePage:b.dataset.openSubpage})})}),document.querySelectorAll("[data-open-player]").forEach(b=>{b.addEventListener("click",()=>{F({screen:"playerDetail",detailPlayerId:b.dataset.openPlayer})})}),(Q=t("btnDownloadDetailCard"))==null||Q.addEventListener("click",async()=>{const b=s.players.find(P=>P.id===p.detailPlayerId);if(b)try{await ea({player:b,brandLogo:W()})}catch{k("Unable to export profile card")}});const o=t("squadSearchInput");o&&o.addEventListener("input",b=>{const P=b.target.selectionStart;p.squadQuery=b.target.value,S();const A=document.getElementById("squadSearchInput");if(A){A.focus();try{A.setSelectionRange(P,P)}catch{}}}),document.querySelectorAll("[data-squad-filter]").forEach(b=>{b.addEventListener("click",()=>{p.squadFilter=b.dataset.squadFilter,S()})}),document.querySelectorAll("[data-matches-sub]").forEach(b=>{b.addEventListener("click",()=>{p.matchesSubTab=b.dataset.matchesSub,S()})}),document.querySelectorAll("[data-gallery-album]").forEach(b=>{b.addEventListener("click",()=>{p.galleryAlbum=b.dataset.galleryAlbum,S()})}),document.querySelectorAll("[data-zoom-gallery]").forEach(b=>{b.addEventListener("click",()=>{const A=s.gallery.filter(M=>{const D=String(M.album||"MEMORIES").toUpperCase();return p.galleryAlbum==="ALL"?!["MATCHES","TROPHIES"].includes(D):D===p.galleryAlbum})[Number(b.dataset.zoomGallery)];A!=null&&A.image&&Ce(A.image,m(A.caption||"RDM Gallery"))})}),document.querySelectorAll("[data-zoom-src]").forEach(b=>{b.addEventListener("click",()=>Ce(b.dataset.zoomSrc,b.dataset.zoomCap||""))}),document.querySelectorAll("[data-ext-url]").forEach(b=>{b.addEventListener("click",()=>Zt(b.dataset.extUrl))}),ya()}function ya(){H()&&(document.querySelectorAll("[data-admin-tab]").forEach(t=>{t.addEventListener("click",()=>{F({screen:"admin",adminTab:t.dataset.adminTab},{replace:!0})})}),document.querySelectorAll("[data-admin-action]").forEach(t=>{t.addEventListener("click",()=>va(t.dataset.adminAction))}),document.querySelectorAll("[data-admin-edit-player]").forEach(t=>{t.addEventListener("click",()=>{const e=s.players.find(a=>a.id===t.dataset.adminEditPlayer);e&&U({title:`Edit ${m(e.name)}`,fields:[{name:"name",label:"Player Name",value:e.name,required:!0},{name:"role",label:"Role",value:e.role,required:!0},{name:"detail",label:"Playing Detail",type:"textarea",value:e.detail,rows:3},{name:"jersey",label:"Jersey Number",value:e.jersey||""},{name:"nick",label:"Nickname",value:e.nick||""},{name:"bio",label:"Bio",type:"textarea",value:e.bio||"",rows:3},{name:"photo",label:"Replace Photo (Optional)",type:"file"}],onSubmit:async a=>{const r={...a};a.photo&&(r.image=await me(a.photo,700,.74)),await Lt(e.id,r),S(),k("Player updated")}})})}),document.querySelectorAll("[data-admin-remove-player]").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.adminRemovePlayer,a=s.players.find(r=>r.id===e);Ee({title:"Remove Player",message:`Remove ${m((a==null?void 0:a.name)||e)} (${e}) from the active RDM squad?`,confirmLabel:"Remove",danger:!0,onConfirm:async()=>{await Ut(e),S(),k("Player removed")}})})}),document.querySelectorAll("[data-admin-edit-stats]").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.adminEditStats,a=s.players.find(o=>o.id===e),r=s.stats.find(o=>o.playerId===e)||{};U({title:`Stats · ${m((a==null?void 0:a.name)||e)}`,fields:[{name:"matches",label:"Matches",type:"number",value:r.matches||0},{name:"runs",label:"Runs",type:"number",value:r.runs||0},{name:"highScore",label:"High Score",type:"number",value:r.highScore||0},{name:"wickets",label:"Wickets",type:"number",value:r.wickets||0},{name:"fours",label:"Fours",type:"number",value:r.fours||0},{name:"sixes",label:"Sixes",type:"number",value:r.sixes||0},{name:"fifties",label:"50s",type:"number",value:r.fifties||0},{name:"hundreds",label:"100s",type:"number",value:r.hundreds||0},{name:"strikeRate",label:"Strike Rate",type:"number",value:r.strikeRate||0},{name:"economy",label:"Economy",type:"number",value:r.economy||0},{name:"bestBowling",label:"Best Bowling",value:r.bestBowling||""},{name:"season",label:"Season",value:r.season||"2027"}],onSubmit:async o=>{const n=c=>Number(c||0)||0;await x("PlayerStats",e,{playerId:e,matches:n(o.matches),runs:n(o.runs),highScore:n(o.highScore),wickets:n(o.wickets),fours:n(o.fours),sixes:n(o.sixes),fifties:n(o.fifties),hundreds:n(o.hundreds),strikeRate:n(o.strikeRate),economy:n(o.economy),bestBowling:o.bestBowling,season:o.season}),S(),k("Player stats saved")}})})}),document.querySelectorAll("[data-admin-avail]").forEach(t=>{t.addEventListener("click",()=>{var r;const e=t.dataset.adminAvail,a=((r=s.availability.find(o=>o.playerId===e))==null?void 0:r.status)||"AVAILABLE";U({title:`Availability · ${e}`,fields:[{name:"status",label:"Status",type:"select",value:a,options:["AVAILABLE","UNAVAILABLE"]}],onSubmit:async o=>{await Dt(e,o.status),S(),k("Availability saved")}})})}),document.querySelectorAll("[data-admin-edit-match]").forEach(t=>{t.addEventListener("click",()=>{const e=s.matches.find(a=>a._docId===t.dataset.adminEditMatch);e&&gt(e)})}),document.querySelectorAll("[data-admin-edit-social]").forEach(t=>{t.addEventListener("click",()=>{const e=s.socials.find(a=>a._docId===t.dataset.adminEditSocial);e&&U({title:"Edit Social Channel",fields:[{name:"name",label:"Platform",value:e.name||"",required:!0},{name:"displayName",label:"Display Title",value:e.displayName||e.name||""},{name:"url",label:"URL",value:e.url||"",placeholder:"https://..."}],onSubmit:async a=>{await x("Socials",e._docId,{name:a.name.toUpperCase(),displayName:a.displayName||a.name,url:a.url,icon:e.icon||"↗",order:e.order||9}),S(),k("Social updated")}})})}),document.querySelectorAll("[data-admin-pin]").forEach(t=>{t.addEventListener("click",async()=>{const[e,a,r]=t.dataset.adminPin.split(":");try{await Ot(e,a,r==="1"),S(),k(r==="1"?"Pinned to Home":"Unpinned")}catch(o){k((o==null?void 0:o.message)||"Pin update failed")}})}),document.querySelectorAll("[data-admin-del]").forEach(t=>{t.addEventListener("click",()=>{const[e,a]=t.dataset.adminDel.split(":");Ee({title:"Delete Record",message:"Permanently delete this record from Firestore?",confirmLabel:"Delete",danger:!0,onConfirm:async()=>{await Nt(e,a),S(),k("Deleted")}})})}))}function gt(t=null){U({title:t?"Edit Match":"Add Match / Result",fields:[{name:"opponent",label:"Opponent Team",value:(t==null?void 0:t.opponent)||"",required:!0},{name:"matchStatus",label:"Status",type:"select",value:(t==null?void 0:t.matchStatus)||(t==null?void 0:t.status)||"UPCOMING",options:["UPCOMING","LIVE","COMPLETED","CANCELLED"]},{name:"date",label:"Date",type:"date",value:(t==null?void 0:t.date)||""},{name:"time",label:"Time",type:"time",value:(t==null?void 0:t.time)||""},{name:"venueName",label:"Venue / Ground",value:(t==null?void 0:t.venueName)||(t==null?void 0:t.venue)||""},{name:"ourScore",label:"RDM Score",value:(t==null?void 0:t.ourScore)||""},{name:"oppScore",label:"Opponent Score",value:(t==null?void 0:t.oppScore)||""},{name:"result",label:"Result (if completed)",value:(t==null?void 0:t.result)||""},{name:"potm",label:"Player of the Match",value:(t==null?void 0:t.potm)||""},{name:"note",label:"Match Notes",type:"textarea",value:(t==null?void 0:t.note)||"",placeholder:"Enter key match details (line breaks & spaces preserved)",rows:4}],onSubmit:async e=>{await x("Matches",(t==null?void 0:t._docId)||null,{...e,venue:e.venueName,status:e.matchStatus==="COMPLETED"?"RESULT":e.matchStatus,createdMs:(t==null?void 0:t.createdMs)||Date.now()}),S(),k("Match saved")}})}function va(t){if(t==="addMatch")return gt(null);if(t==="addNews")return U({title:"Add Team News",fields:[{name:"title",label:"Title",required:!0},{name:"text",label:"Announcement",type:"textarea",placeholder:"Write announcement (Enter for new lines & spaces preserved)",rows:5,required:!0},{name:"pinned",label:"Pin announcement",type:"checkbox"}],onSubmit:async e=>{await x("News",null,{title:e.title,text:e.text,pinned:!!e.pinned,createdMs:Date.now()}),S(),k("News added")}});if(t==="addUpdate")return U({title:"Add Official Update",fields:[{name:"category",label:"Category",type:"select",options:["WEBSITE","SOCIAL MEDIA","PLATFORM","ACCOUNT","FEATURE","OTHER"]},{name:"title",label:"Title",required:!0},{name:"text",label:"Description",type:"textarea",placeholder:"Write full update (Enter for new lines & spaces preserved)",rows:5,required:!0},{name:"url",label:"Optional Link",placeholder:"https://..."},{name:"pinned",label:"Pin to Home",type:"checkbox"}],onSubmit:async e=>{await x("Updates",null,{category:e.category,title:e.title,text:e.text,url:e.url,pinned:!!e.pinned,date:new Date().toISOString().slice(0,10),createdMs:Date.now()}),S(),k("Update saved")}});if(t==="addGallery")return U({title:"Add Gallery Photo",fields:[{name:"photo",label:"Select Image",type:"file",required:!0},{name:"caption",label:"Caption",value:"RDM Memory"},{name:"album",label:"Album",type:"select",value:"MEMORIES",options:["TEAM PHOTOS","MEMORIES","UPDATES"]}],onSubmit:async e=>{if(!e.photo)throw new Error("Image required");const a=await me(e.photo,960,.72);await x("Gallery",null,{image:a,caption:e.caption,album:e.album,createdMs:Date.now()}),S(),k("Photo uploaded")}});if(t==="addPlayer"){const e=s.players.map(r=>Number(String(r.id).replace(/\D/g,""))).filter(Number.isFinite),a=`RDM${String(Math.max(17,...e)+1).padStart(3,"0")}`;return U({title:`Add Player (${a})`,fields:[{name:"name",label:"Full Name",required:!0},{name:"role",label:"Role",required:!0},{name:"detail",label:"Playing Style / Detail",type:"textarea",rows:3},{name:"jersey",label:"Jersey Number"},{name:"photo",label:"Profile Photo (Optional)",type:"file"}],onSubmit:async r=>{const o=r.photo?await me(r.photo,700,.74):"";await x("TeamPlayers",a,{id:a,name:r.name.toUpperCase(),role:r.role.toUpperCase(),detail:r.detail.toUpperCase(),jersey:r.jersey,image:o,order:s.players.length+1,active:!0}),S(),k("Player added")}})}if(t==="addLineup")return U({title:"Publish Playing XI",fields:[{name:"title",label:"Title",value:"Playing XI",required:!0},{name:"match",label:"Match / Opponent"},{name:"players",label:"11 Player IDs (comma separated)",type:"textarea",value:"RDM001,RDM002,RDM003,RDM004,RDM005,RDM006,RDM007,RDM008,RDM009,RDM010,RDM011",rows:3},{name:"subs",label:"Substitutes (comma separated)",value:"RDM012,RDM013,RDM014,RDM015"}],onSubmit:async e=>{const a=n=>[...new Set(String(n||"").split(",").map(c=>c.trim().toUpperCase()).filter(c=>/^RDM\d{3}$/.test(c)))],r=a(e.players).slice(0,11),o=a(e.subs).filter(n=>!r.includes(n));if(r.length!==11)throw new Error("Playing XI requires 11 valid Player IDs");await x("PlayingXI",null,{title:e.title,match:e.match,players:r,subs:o,createdMs:Date.now()}),S(),k("Playing XI published")}});if(t==="addHonour")return U({title:"Add Team Honour",fields:[{name:"year",label:"Year",value:String(new Date().getFullYear()),required:!0},{name:"title",label:"Result (e.g. Winner)",required:!0},{name:"sub",label:"Tournament Name",required:!0}],onSubmit:async e=>{await x("Honours",null,{year:e.year,title:e.title,sub:e.sub,image:w.logoPath,order:s.honours.length+1}),S(),k("Honour saved")}});if(t==="addTournament")return U({title:"Add Tournament",fields:[{name:"name",label:"Tournament Name",required:!0},{name:"season",label:"Season / Year",value:String(new Date().getFullYear())},{name:"status",label:"Status",type:"select",options:["UPCOMING","ONGOING","COMPLETED"]},{name:"position",label:"Final Position"},{name:"venueName",label:"Venue"}],onSubmit:async e=>{await x("Tournaments",null,{...e,venue:e.venueName,createdMs:Date.now()}),S(),k("Tournament added")}});if(t==="addRecord")return U({title:"Add Team Record",fields:[{name:"title",label:"Record Title",placeholder:"e.g. Highest Team Score",required:!0},{name:"value",label:"Record Value",placeholder:"e.g. 214/3 (20 Ov)",required:!0},{name:"player",label:"Player Name (Optional)"},{name:"season",label:"Season / Year",value:String(new Date().getFullYear())}],onSubmit:async e=>{await x("TeamRecords",null,{...e,createdMs:Date.now()}),S(),k("Record saved")}});if(t==="editAppConfig")return U({title:"App & APK Update",subtitle:"Bump Version & Version Code to trigger automatic Update Popup in all older Android APKs",fields:[{name:"appVersion",label:"Latest APK Version (e.g. 1.2.0)",value:ye(),required:!0},{name:"appVersionCode",label:"Version Code (Integer, e.g. 3)",type:"number",value:String(s.appVersionCode||T.versionCode),required:!0},{name:"updateNotes",label:"What is New (Update Popup Notes)",type:"textarea",value:s.updateNotes||"",placeholder:"Describe new features or bug fixes for users",rows:3},{name:"apkDownloadUrl",label:"Direct APK Download URL",value:Fe(),required:!0},{name:"apkReleasesUrl",label:"Update Page URL (Optional)",value:ra()},{name:"forceUpdate",label:"Force Update (Hide Later button)",type:"checkbox",checked:!!s.forceUpdate},{name:"logoPhoto",label:"Update Team Logo (Optional)",type:"file"}],onSubmit:async e=>{const a=e.logoPhoto?await me(e.logoPhoto,600,.8):"";await It({appVersion:e.appVersion,appVersionCode:e.appVersionCode,updateNotes:e.updateNotes,forceUpdate:!!e.forceUpdate,apkDownloadUrl:e.apkDownloadUrl,apkReleasesUrl:e.apkReleasesUrl,logo:a}),S(),k("APK update settings synced to all devices")}});if(t==="addSocial")return U({title:"Add Social Channel",fields:[{name:"name",label:"Platform",placeholder:"INSTAGRAM",required:!0},{name:"displayName",label:"Display Name",placeholder:"RDM Instagram"},{name:"url",label:"URL",placeholder:"https://...",required:!0}],onSubmit:async e=>{await x("Socials",null,{name:e.name.toUpperCase(),displayName:e.displayName||e.name,url:e.url,icon:"↗",order:s.socials.length+1}),S(),k("Social channel added")}})}function Te(t=!1){const e=ve();if(!e.hasUpdate)return t&&k(`You are on the latest version (v${e.currentVersion})`),!1;if(!t&&!e.forceUpdate)try{if(sessionStorage.getItem(`rdm-dismiss-update-${e.latestVersion}`)==="1")return!1}catch{}return ta({currentVersion:e.currentVersion,latestVersion:e.latestVersion,notes:e.notes,forceUpdate:e.forceUpdate,onDownload:()=>{it(e.apkUrl||Fe()),k(`Downloading RDM Official APK v${e.latestVersion}...`)}}),!0}function ga(){if(dt())return;const t=Date.now();if(t-p.lastBackPressAt<2e3){Qt();return}p.lastBackPressAt=t,k("Press back again to exit RDM Official")}async function wa(){he(p.theme);const t=ct();$.length=0,$.push(t);try{window.history.replaceState({rdmIdx:0},"",ae(t))}catch{}window.addEventListener("popstate",()=>{if(Me()){lt();try{window.history.pushState({rdmIdx:$.length-1},"",ae($[$.length-1]))}catch{}return}if(p.drawerOpen){X(!1);try{window.history.pushState({rdmIdx:$.length-1},"",ae($[$.length-1]))}catch{}return}$.length>1&&($.pop(),Be($[$.length-1]))}),await Jt(ga),window.addEventListener("rdm-pwa-ready",()=>{(p.screen==="public"&&p.publicTab==="more"||p.screen==="subpage"&&p.morePage==="download")&&S()}),await j(),at().then(()=>{Te(!1)}).catch(()=>{}),Rt(()=>{const e=document.activeElement,a=e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.tagName==="SELECT");!Me()&&!a&&(S(),Te(!1))}),Ct(({role:e,verified:a})=>{p.screen==="portalAuth"&&a&&e==="admin"?F({screen:"admin",adminTab:"overview"},{replace:!0}):p.screen==="admin"&&!(a&&e==="admin")?F({screen:"portalAuth"},{replace:!0}):p.screen==="playerPortal"?F({screen:"public",publicTab:"home"},{replace:!0}):S(),Ye()}),setTimeout(()=>Ye(),1200)}wa();export{Ue as W};
