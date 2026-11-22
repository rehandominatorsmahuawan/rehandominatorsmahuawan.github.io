(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const x={versionName:"1.3.0",versionCode:5},Lt="https://rehandominatorsmahuawan.github.io/version.json",It="https://rehandominatorsmahuawan.github.io/ota/manifest.json",Nt=["rehanalam7124517@gmail.com","rehahalam7124517@gmail.com","admin@rdm-official.in"],Xe={"rdm.admin":"admin@rdm-official.in","rdm-admin":"admin@rdm-official.in",admin:"admin@rdm-official.in"};function Ut(e=""){const t=String(e||"").trim();if(!t)return"";const a=t.toLowerCase();return Object.prototype.hasOwnProperty.call(Xe,a)?Xe[a]:t}function Ce(e="0.0.0",t="0.0.0"){const a=l=>String(l||"").replace(/^v/i,"").split(/[^0-9]+/).filter(Boolean).map(Number),n=a(e),s=a(t),r=Math.max(n.length,s.length,3);for(let l=0;l<r;l++){const u=n[l]||0,c=s[l]||0;if(u<c)return-1;if(u>c)return 1}return 0}const w={appName:"RDM Official",orgName:"REHAN DOMINATORS MAHUAWAN",shortName:"RDM",location:"MAHUAWAN • GOPALGANJ • BIHAR",locationLabel:"Mahuawan, Gopalganj, Bihar",founded:"2024",motto:"ONE TEAM • ONE DREAM • ONE DOMINATION",tagline:"YOUR TEAM. YOUR PRIDE. YOUR GAME.",subtitle:"THE HOME OF REHAN DOMINATORS MAHUAWAN",captainContactUrl:"https://wa.me/918521254605",captainPhoneDisplay:"+91 85212 54605",appVersion:x.versionName,apkDownloadUrl:"https://github.com/RehanDominatorsMahuawan/RehanDominatorsMahuawan.github.io/releases/latest/download/RDM-Official.apk",apkReleasesUrl:"https://github.com/RehanDominatorsMahuawan/RehanDominatorsMahuawan.github.io/releases/latest",websiteUrl:"https://rehandominatorsmahuawan.github.io/",logoPath:"assets/rdm-logo.png",heroImagePath:"src/assets/images/hero_cobalt_stadium_1795345341929.jpg",heritageImagePath:"src/assets/images/craft_willow_cobalt_1795345340935.jpg"},pe={RDM001:"RA08",RDM003:"SA-V",RDM006:"SO-WK",RDM004:"AKA",RDM002:"ASI",RDM007:"WSM",RDM008:"JBD",RDM010:"GLM",RDM011:"SHA57",RDM005:"SAL02",RDM012:"LKY",RDM016:"KLF",RDM009:"SKH",RDM013:"ABS",RDM014:"SBA",RDM015:"ZSN",RDM017:"JVD"},Me={RDM001:{nick:"The Skipper",bio:"Captain and all-rounder who leads from the front with discipline, confidence and team-first cricket."},RDM002:{nick:"The Anchor",bio:"A reliable top-order batsman who values a solid start, smart shot selection and steady runs."},RDM003:{nick:"The Game Changer",bio:"Vice-captain and all-rounder who brings flexibility, energy and impact through every phase of the game."},RDM004:{nick:"The Attacker",bio:"An aggressive strike opener and fast-bowling all-rounder built to set the tempo and deliver under pressure."},RDM005:{nick:"The Finisher",bio:"A calm middle-order batsman who backs his shots and looks to finish innings with confidence."},RDM006:{nick:"The Gloveman",bio:"The team main wicket-keeper and a versatile batsman who adds energy, awareness and balance to the team."},RDM007:{nick:"The Complete Package",bio:"A top-order all-rounder who can contribute with bat and ball across every phase of the match."},RDM008:{nick:"The Middle Rock",bio:"A dependable middle-order batsman focused on building partnerships and keeping the innings moving."},RDM009:{nick:"The Closer",bio:"A finisher who enjoys pressure moments and looks to give the team a strong end to the innings."},RDM010:{nick:"The Impact Player",bio:"A useful all-rounder and finisher who can change momentum with quick runs and emergency bowling."},RDM011:{nick:"The Middle Order Maestro",bio:"A right-handed middle-order batsman who adds stability and depth to the batting line-up."},RDM012:{nick:"The All-Rounder",bio:"A versatile all-rounder who can contribute with bat or ball when the team needs him."},RDM013:{nick:"The Utility Ace",bio:"A flexible all-rounder who can finish with the bat and handle important middle or death overs."},RDM014:{nick:"The Power Finisher",bio:"A batsman with a finisher role who looks to add quick runs and impact."},RDM015:{nick:"The Last-Over Hitter",bio:"A finisher who plays with intent in high-pressure batting moments."},RDM016:{nick:"The Lefty",bio:"A left-handed middle-order batsman who adds variety and balance to the batting line-up."},RDM017:{nick:"The Finisher",bio:"A right-handed batsman who specialises in the finisher role and looks to close innings strongly."}},te=[["RDM001","Rehan Akhtar","Captain • All-Rounder","Right-Handed • Right-Arm Fast • Middle Order • Middle Overs","08"],["RDM003","Saif Ali","Vice-Captain • All-Rounder","Both-Handed • Fast • Non-Striker Opener • All Phases",""],["RDM006","Soaib Akhtar","Wicket-Keeper • Batsman","Right-Handed • Left-Arm Fast • Top Order • Finisher",""],["RDM004","Akib Ansari","All-Rounder","Right-Handed • Fast • Striker Opener • Middle + Death",""],["RDM002","Asif Ali","Batsman","Right-Handed • Top Order",""],["RDM007","Wasim","All-Rounder","Right-Handed • Fast • Top Order • All Phases",""],["RDM008","Jubed","Batsman","Right-Handed • Middle Order",""],["RDM010","Gulam","All-Rounder","Right-Handed • Fast • Finisher • Emergency Bowling",""],["RDM011","Sahil Ansari","Batsman","Right-Handed • Middle Order","57"],["RDM005","Sahil Ali","Batsman","Right-Handed • Middle Order • Finisher","02"],["RDM012","Lucky","All-Rounder","Right-Handed • Fast • Middle Order • Middle Overs",""],["RDM016","Kaif Lefty","Batsman","Left-Handed • Middle Order",""],["RDM009","SK. Hanif","Batsman","Right-Handed • Finisher",""],["RDM013","Abushad","All-Rounder","Right-Handed • Fast • Middle Order + Finisher • Middle + Death",""],["RDM014","Sabre Alam","Batsman","Right-Handed • Finisher",""],["RDM015","Zishan","Batsman","Right-Handed • Finisher",""],["RDM017","Javed","Batsman","Right-Handed • Finisher",""]].map((e,t)=>{var a,n;return{id:e[0],name:e[1],role:e[2],detail:e[3],jersey:e[4],image:"",nick:((a=Me[e[0]])==null?void 0:a.nick)||"",bio:((n=Me[e[0]])==null?void 0:n.bio)||"",socials:[],order:t+1,_docId:e[0]}}),Be=[{_docId:"h01",year:"2024",title:"Winner",sub:"Mahuawan Premier League 1",image:"assets/trophy-2024.png",order:1},{_docId:"h02",year:"2025",title:"Winner",sub:"Mahuawan Premier League 2",image:"assets/trophy-2025.png",order:2},{_docId:"h03",year:"2026",title:"Runner-Up",sub:"Tournament Name • To Be Added",image:"assets/trophy-2026.png",order:3}],xe=[{_docId:"youtube",name:"YOUTUBE",displayName:"RDM YouTube",url:"https://www.youtube.com/@rehan_dominators_mahuawan",icon:"▶",order:1},{_docId:"telegram",name:"TELEGRAM",displayName:"RDM Telegram",url:"https://t.me/rehandominatorsmahuawan",icon:"✈",order:2},{_docId:"whatsapp",name:"WHATSAPP",displayName:"RDM WhatsApp Channel",url:"https://whatsapp.com/channel/0029Vb8icRM3WHTQGQtM4G3j",icon:"◉",order:3},{_docId:"instagram",name:"INSTAGRAM",displayName:"RDM Instagram",url:"",icon:"IG",order:4},{_docId:"facebook",name:"FACEBOOK",displayName:"RDM Facebook",url:"",icon:"f",order:5}];function h(e=""){const t=String(e??"").replace(/\r\n?/g,`
`).replace(/^\n+|\s+$/g,"");if(!t)return"";const a={"ᴀ":"A",ʙ:"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F",ɢ:"G",ʜ:"H",ɪ:"I","ᴊ":"J","ᴋ":"K",ʟ:"L","ᴍ":"M",ɴ:"N","ᴏ":"O","ᴘ":"P",ǫ:"Q",ʀ:"R","ꜱ":"S","ᴛ":"T","ᴜ":"U","ᴠ":"V","ᴡ":"W",ʏ:"Y","ᴢ":"Z"},n=t.replace(/[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡʏᴢ]/g,s=>a[s]||s);return/^(RDM\d+|RA\d+|SA-V|SO-WK|AKA|ASI|WSM|JBD|GLM|SHA\d+|SAL\d+|LKY|KLF|SKH|ABS|SBA|ZSN|JVD)$/i.test(n)?n.toUpperCase():n===n.toUpperCase()&&/[A-Z]{2,}/.test(n)&&n.length>4?n.toLowerCase().replace(/\b([a-z])/g,(r,l,u,c)=>{var b;const d=((b=c.slice(u).match(/^[a-z]+/i))==null?void 0:b[0])||"";return u>0&&c[u-1]!==`
`&&["and","or","of","the","in","on","to","for","at","by","vs","is"].includes(d.toLowerCase())?d.toLowerCase().charAt(0):l.toUpperCase()}).replace(/\b(Rdm|Xi|H2h|Mpl|Potm|Nr)\b/gi,r=>r.toUpperCase()).replace(/\bSk\./gi,"SK."):n}function i(e=""){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function W(e=""){const t=String(e||"").trim();return/^https?:\/\//i.test(t)?t:""}function me(e=""){const t=String(e||"").trim();return!!(!t||/^data:image\/svg\+xml/i.test(t)||/(?:logo\.jpg|CRICKET_YOUR_TAGLINE_HERE|rdm_crest_emblem|^assets\/(?:rehan\.png|players\/))/i.test(t))}function lt(e,t=""){const a=String(e||"").trim();return me(a)?t&&!me(t)?t:w.logoPath:a}/*! Capacitor: https://capacitorjs.com/ - MIT License */var le;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(le||(le={}));class Re extends Error{constructor(t,a,n){super(t),this.message=t,this.code=a,this.data=n}}const Ot=e=>{var t,a;return e!=null&&e.androidBridge?"android":!((a=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||a===void 0)&&a.bridge?"ios":"web"},Bt=e=>{const t=e.CapacitorCustomPlatform||null,a=e.Capacitor||{},n=a.Plugins=a.Plugins||{},s=()=>t!==null?t.name:Ot(e),r=()=>s()!=="web",l=v=>{const g=d.get(v);return!!(g!=null&&g.platforms.has(s())||u(v))},u=v=>{var g;return(g=a.PluginHeaders)===null||g===void 0?void 0:g.find(C=>C.name===v)},c=v=>e.console.error(v),d=new Map,b=(v,g={})=>{const C=d.get(v);if(C)return console.warn(`Capacitor plugin "${v}" already registered. Cannot register plugins twice.`),C.proxy;const $=s(),R=u(v);let y;const f=async()=>(!y&&$ in g?y=typeof g[$]=="function"?y=await g[$]():y=g[$]:t!==null&&!y&&"web"in g&&(y=typeof g.web=="function"?y=await g.web():y=g.web),y),L=(S,k)=>{var E,D;if(R){const q=R==null?void 0:R.methods.find(_=>k===_.name);if(q)return q.rtype==="promise"?_=>a.nativePromise(v,k.toString(),_):(_,fe)=>a.nativeCallback(v,k.toString(),_,fe);if(S)return(E=S[k])===null||E===void 0?void 0:E.bind(S)}else{if(S)return(D=S[k])===null||D===void 0?void 0:D.bind(S);throw new Re(`"${v}" plugin is not implemented on ${$}`,le.Unimplemented)}},T=S=>{let k;const E=(...D)=>{const q=f().then(_=>{const fe=L(_,S);if(fe){const ye=fe(...D);return k=ye==null?void 0:ye.remove,ye}else throw new Re(`"${v}.${S}()" is not implemented on ${$}`,le.Unimplemented)});return S==="addListener"&&(q.remove=async()=>k()),q};return E.toString=()=>`${S.toString()}() { [capacitor code] }`,Object.defineProperty(E,"name",{value:S,writable:!1,configurable:!1}),E},I=T("addListener"),B=T("removeListener"),V=(S,k)=>{const E=I({eventName:S},k).then(_=>_),D=async()=>{const _=await E;await B({eventName:S,callbackId:_})},q=new Promise(_=>E.then(()=>_({remove:D})));return q.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await D()},q},m=new Proxy({},{get(S,k){switch(k){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return R?V:I;case"removeListener":return B;default:return T(k)}}});return n[v]=m,d.set(v,{name:v,proxy:m,platforms:new Set([...Object.keys(g),...R?[$]:[]])}),m};return a.convertFileSrc||(a.convertFileSrc=v=>v),a.getPlatform=s,a.handleError=c,a.isNativePlatform=r,a.isPluginAvailable=l,a.registerPlugin=b,a.Exception=Re,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a},xt=e=>e.Capacitor=Bt(e),O=xt(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Q=O.registerPlugin;class Fe{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,a){let n=!1;this.listeners[t]||(this.listeners[t]=[],n=!0),this.listeners[t].push(a);const r=this.windowListeners[t];r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(t);const l=async()=>this.removeListener(t,a);return Promise.resolve({remove:l})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,a,n){const s=this.listeners[t];if(!s){if(n){let r=this.retainedEventArguments[t];r||(r=[]),r.push(a),this.retainedEventArguments[t]=r}return}s.forEach(r=>r(a))}hasListeners(t){var a;return!!(!((a=this.listeners[t])===null||a===void 0)&&a.length)}registerWindowListener(t,a){this.windowListeners[a]={registered:!1,windowEventName:t,pluginEventName:a,handler:n=>{this.notifyListeners(a,n)}}}unimplemented(t="not implemented"){return new O.Exception(t,le.Unimplemented)}unavailable(t="not available"){return new O.Exception(t,le.Unavailable)}async removeListener(t,a){const n=this.listeners[t];if(!n)return;const s=n.indexOf(a);s!==-1&&this.listeners[t].splice(s,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const a=this.retainedEventArguments[t];a&&(delete this.retainedEventArguments[t],a.forEach(n=>{this.notifyListeners(t,n)}))}}const Ye=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Je=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Ft extends Fe{async getCookies(){const t=document.cookie,a={};return t.split(";").forEach(n=>{if(n.length<=0)return;let[s,r]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Je(s).trim(),r=Je(r).trim(),a[s]=r}),a}async setCookie(t){try{const a=Ye(t.key),n=Ye(t.value),s=t.expires?`; expires=${t.expires.replace("expires=","")}`:"",r=(t.path||"/").replace("path=",""),l=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${a}=${n||""}${s}; path=${r}; ${l};`}catch(a){return Promise.reject(a)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(a){return Promise.reject(a)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const a of t)document.cookie=a.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}Q("CapacitorCookies",{web:()=>new Ft});const _t=async e=>new Promise((t,a)=>{const n=new FileReader;n.onload=()=>{const s=n.result;t(s.indexOf(",")>=0?s.split(",")[1]:s)},n.onerror=s=>a(s),n.readAsDataURL(e)}),Ht=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(s=>s.toLocaleLowerCase()).reduce((s,r,l)=>(s[r]=e[t[l]],s),{})},Vt=(e,t=!0)=>e?Object.entries(e).reduce((n,s)=>{const[r,l]=s;let u,c;return Array.isArray(l)?(c="",l.forEach(d=>{u=t?encodeURIComponent(d):d,c+=`${r}=${u}&`}),c.slice(0,-1)):(u=t?encodeURIComponent(l):l,c=`${r}=${u}`),`${n}&${c}`},"").substr(1):null,qt=(e,t={})=>{const a=Object.assign({method:e.method||"GET",headers:e.headers},t),s=Ht(e.headers)["content-type"]||"";if(typeof e.data=="string")a.body=e.data;else if(s.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[l,u]of Object.entries(e.data||{}))r.set(l,u);a.body=r.toString()}else if(s.includes("multipart/form-data")||e.data instanceof FormData){const r=new FormData;if(e.data instanceof FormData)e.data.forEach((u,c)=>{r.append(c,u)});else for(const u of Object.keys(e.data))r.append(u,e.data[u]);a.body=r;const l=new Headers(a.headers);l.delete("content-type"),a.headers=l}else(s.includes("application/json")||typeof e.data=="object")&&(a.body=JSON.stringify(e.data));return a};class jt extends Fe{async request(t){const a=qt(t,t.webFetchExtra),n=Vt(t.params,t.shouldEncodeUrlParams),s=n?`${t.url}?${n}`:t.url,r=await fetch(s,a),l=r.headers.get("content-type")||"";let{responseType:u="text"}=r.ok?t:{};l.includes("application/json")&&(u="json");let c,d;switch(u){case"arraybuffer":case"blob":d=await r.blob(),c=await _t(d);break;case"json":c=await r.json();break;case"document":case"text":default:c=await r.text()}const b={};return r.headers.forEach((v,g)=>{b[g]=v}),{data:c,headers:b,status:r.status,url:r.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}Q("CapacitorHttp",{web:()=>new jt});var Qe;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(Qe||(Qe={}));var Ze;(function(e){e.StatusBar="StatusBar",e.NavigationBar="NavigationBar"})(Ze||(Ze={}));class Wt extends Fe{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Q("SystemBars",{web:()=>new Wt});const Gt="modulepreload",Kt=function(e,t){return new URL(e,t).href},et={},_e=function(t,a,n){let s=Promise.resolve();if(a&&a.length>0){let l=function(b){return Promise.all(b.map(v=>Promise.resolve(v).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const u=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=l(a.map(b=>{if(b=Kt(b,n),b in et)return;et[b]=!0;const v=b.endsWith(".css"),g=v?'[rel="stylesheet"]':"";if(!!n)for(let R=u.length-1;R>=0;R--){const y=u[R];if(y.href===b&&(!v||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${b}"]${g}`))return;const $=document.createElement("link");if($.rel=v?"stylesheet":Gt,v||($.as="script"),$.crossOrigin="",$.href=b,d&&$.setAttribute("nonce",d),document.head.appendChild($),v)return new Promise((R,y)=>{$.addEventListener("load",R),$.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${b}`)))})}))}function r(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return s.then(l=>{for(const u of l||[])u.status==="rejected"&&r(u.reason);return t().catch(r)})},He=Q("App",{web:()=>_e(()=>import("./web-CgClLGgN.js"),[],import.meta.url).then(e=>new e.AppWeb)});var Se;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(Se||(Se={}));var tt;(function(e){e.None="NONE",e.Slide="SLIDE",e.Fade="FADE"})(tt||(tt={}));const Ee=Q("StatusBar"),zt=Q("SplashScreen",{web:()=>_e(()=>import("./web-DHNUbc1N.js"),[],import.meta.url).then(e=>new e.SplashScreenWeb)});var at;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(at||(at={}));var nt;(function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"})(nt||(nt={}));const rt=Q("Keyboard"),ct=Q("Browser",{web:()=>_e(()=>import("./web-CSHAbCw7.js"),[],import.meta.url).then(e=>new e.BrowserWeb)}),F=O.isNativePlatform()?Q("RdmUpdater"):null;let st=!1,se=null;typeof window<"u"&&window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),se=e,window.dispatchEvent(new CustomEvent("rdm-pwa-ready"))});function X(){return O.isNativePlatform()&&O.getPlatform()==="android"}function Te(){return O.isNativePlatform()}function dt(){return!O.isNativePlatform()&&!!se}async function Xt(){if(!se)return!1;try{await se.prompt();const e=await se.userChoice;if((e==null?void 0:e.outcome)==="accepted")return se=null,!0}catch{}return!1}async function ut(e="royal"){const t=e==="night"||e==="carbon"||e==="floodlight"?"floodlight":e==="emerald"?"emerald":e==="copper"||e==="crimson"?"crimson":"royal",a={royal:"#F5F7FB",floodlight:"#070C18",emerald:"#F6F9F7",crimson:"#FAF7F6"},n=a[t]||a.royal,s=document.getElementById("rdmThemeMeta");if(s&&(s.content=n),!!O.isNativePlatform())try{await Ee.setOverlaysWebView({overlay:!1}),await Ee.setBackgroundColor({color:n}),await Ee.setStyle({style:t==="floodlight"?Se.Dark:Se.Light})}catch{}}async function Yt(e){const t=localStorage.getItem("rdm-app-theme")||"royal";if(await ut(t),O.isNativePlatform()){try{rt.addListener("keyboardWillShow",()=>{document.body.classList.add("keyboard-open");const a=document.activeElement;a&&typeof a.scrollIntoView=="function"&&setTimeout(()=>{try{a.scrollIntoView({behavior:"smooth",block:"center"})}catch{}},120)}),rt.addListener("keyboardWillHide",()=>{document.body.classList.remove("keyboard-open")})}catch{}if(!st&&typeof e=="function"){st=!0;try{He.addListener("backButton",({canGoBack:a})=>{e({canGoBack:a})})}catch{}}}}async function ot(){if(O.isNativePlatform())try{await zt.hide({fadeOutDuration:220})}catch{}}async function Jt(){if(O.isNativePlatform())try{await He.exitApp()}catch{}}async function Qt(e){const t=String(e||"").trim();if(!/^https?:\/\//i.test(t))return!1;if(O.isNativePlatform())try{return await ct.open({url:t,presentationStyle:"popover"}),!0}catch{}const a=document.createElement("a");return a.href=t,a.target="_blank",a.rel="noopener noreferrer",document.body.appendChild(a),a.click(),a.remove(),!0}async function Zt(){if(!X()||!F)return null;try{return await F.getVersionInfo()}catch{return null}}async function ea(){if(!X()||!F)return!1;try{const e=await F.canInstallPackages();return!!(e!=null&&e.allowed)}catch{return!1}}async function ta(){if(!X()||!F)return!1;try{const e=await F.openInstallPermissionSettings();return!!(e!=null&&e.opened)}catch{return!1}}async function aa(e){if(!X()||!F)return{updated:!1};try{return await F.checkAndApplyOta({manifestUrl:e})}catch(t){return{updated:!1,error:(t==null?void 0:t.message)||"OTA check failed"}}}async function na(e){const t=String(e).trim();if(!/^https:\/\//i.test(t))throw new Error("HTTPS APK download URL is required.");if(!X()||!F)throw new Error("Native APK updater is only available inside the Android app.");return await F.downloadAndInstallApk({url:t})}function ra(e){if(!X()||!F||typeof e!="function")return()=>{};let t=null,a=!1;try{const n=F.addListener("apkDownloadProgress",s=>{a||e(s||{})});Promise.resolve(n).then(s=>{var r;if(a)try{(r=s==null?void 0:s.remove)==null||r.call(s)}catch{}else t=s}).catch(()=>{})}catch{}return()=>{var n;a=!0;try{(n=t==null?void 0:t.remove)==null||n.call(t)}catch{}}}function sa(e){if(!O.isNativePlatform()||typeof e!="function")return()=>{};let t=null,a=!1;try{const n=He.addListener("appStateChange",({isActive:s})=>{s&&!a&&e()});Promise.resolve(n).then(s=>{var r;if(a)try{(r=s==null?void 0:s.remove)==null||r.call(s)}catch{}else t=s}).catch(()=>{})}catch{}return()=>{var n;a=!0;try{(n=t==null?void 0:t.remove)==null||n.call(t)}catch{}}}async function pt(e){const t=String(e||"").trim();if(!/^https?:\/\//i.test(t))return!1;if(X()&&F)return await F.downloadAndInstallApk({url:t});if(O.isNativePlatform())try{return await ct.open({url:t,presentationStyle:"popover"}),!0}catch{}const a=document.createElement("a");return a.href=t,a.download="RDM-Official.apk",a.rel="noopener noreferrer",document.body.appendChild(a),a.click(),a.remove(),!0}const oa="73442ec47da8d19de47638438c8563bb266e880cf4ce8cafa5579ed20d2b94be",De="rdm_apk_admin_unlocked_v1";async function ia(e){var a,n;const t=new TextEncoder().encode(String(e??""));if((n=(a=globalThis.crypto)==null?void 0:a.subtle)!=null&&n.digest){const s=await globalThis.crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(s),r=>r.toString(16).padStart(2,"0")).join("")}return""}function la(){try{return localStorage.getItem(De)==="1"}catch{return!1}}function Ve(e){try{e?localStorage.setItem(De,"1"):localStorage.removeItem(De)}catch{}}function de(){return window.rdmAuth||(typeof rdmAuth<"u"?rdmAuth:null)}function Y(){return window.rdmDB||(typeof rdmDB<"u"?rdmDB:null)}function ee(){var e,t,a,n;return((n=(a=(t=(e=window.firebase)==null?void 0:e.firestore)==null?void 0:t.FieldValue)==null?void 0:a.serverTimestamp)==null?void 0:n.call(a))||new Date}function Ae(e){const t={};if(!e||typeof e!="object")return t;for(const[a,n]of Object.entries(e))a==="_docId"||a==="_profileUid"||a==="_col"||n!=null&&(t[a]=n);return t}function mt(e){const t=String((e==null?void 0:e.code)||""),a=String((e==null?void 0:e.message)||"");return t==="permission-denied"||/Missing or insufficient permissions|Missing cloud permissions/i.test(a)}function ae(e){if(mt(e)){const t=new Error("Missing cloud permissions: connect Firebase Cloud Sync below or publish updated firestore.rules.");return t.code="permission-denied",t}return e instanceof Error?e:new Error(String((e==null?void 0:e.message)||"Sync failed"))}const N=e=>({...e.data(),_docId:e.id}),o={ready:!1,loadingData:!1,loadError:"",authChecked:!1,apkAdminUnlocked:la(),user:null,account:null,role:"guest",playerId:null,brandLogo:w.logoPath,apkDownloadUrl:w.apkDownloadUrl,apkReleasesUrl:w.apkReleasesUrl,appVersion:x.versionName,appVersionCode:x.versionCode,nativeVersionName:null,nativeVersionCode:null,otaBuild:0,otaVersion:"",canInstallPackages:!1,updateNotes:"",forceUpdate:!1,remoteVersionInfo:null,players:te.map(e=>({...e})),matches:[],news:[],updates:[],honours:Be.map(e=>({...e})),gallery:[],socials:xe.map(e=>({...e})),stats:[],achievements:[],availability:[],lineups:[],records:[],tournaments:[],opponents:[]};function oe(){return!!(o.user&&o.account&&o.account.active===!0&&o.account.role==="admin"&&o.role==="admin")}function K(){return!!(oe()||o.apkAdminUnlocked)}function ca(e,t,a){const n=new Map(te.map((c,d)=>[c.id,d+1])),s=new Map(te.map(c=>[c.id,c]));let r;e.length>0?(r=e.map(c=>{const d=s.get(c.id);return{id:c.id,name:c.name||(d==null?void 0:d.name)||c.id,role:c.role||(d==null?void 0:d.role)||"",detail:c.detail||(d==null?void 0:d.detail)||"",jersey:c.jersey??(d==null?void 0:d.jersey)??"",image:me(c.image)?"":c.image||"",nick:"",bio:"",socials:[],order:typeof c.order=="number"?c.order:n.get(c.id)||999,active:c.active!==!1,_docId:c._docId||c.id}}),te.forEach(c=>{r.some(d=>d.id===c.id)||r.push({...c})})):r=te.map(c=>({...c})),r.sort((c,d)=>(c.order||999)-(d.order||999));const l=c=>{var d,b;return typeof(c==null?void 0:c.updatedMs)=="number"?c.updatedMs:typeof((d=c==null?void 0:c.updatedAt)==null?void 0:d.toMillis)=="function"?c.updatedAt.toMillis():typeof((b=c==null?void 0:c.updatedAt)==null?void 0:b.seconds)=="number"?c.updatedAt.seconds*1e3:0};return[...t].sort((c,d)=>{const b=l(c)-l(d);if(b!==0)return b;const v=a&&c._docId===a?1:0,g=a&&d._docId===a?1:0;return v-g}).forEach(c=>{const d=r.find(b=>b.id===c.playerId);d&&("jersey"in c&&c.jersey!==void 0&&c.jersey!==null&&(d.jersey=String(c.jersey)),"nick"in c&&c.nick!==void 0&&c.nick!==null&&(d.nick=String(c.nick),d._nickCustom=!0),"bio"in c&&c.bio!==void 0&&c.bio!==null&&(d.bio=String(c.bio),d._bioCustom=!0),"image"in c&&c.image!==void 0&&c.image!==null&&(d.image=me(c.image)?"":String(c.image)),Array.isArray(c.socials)&&(d.socials=c.socials.slice(0,3)),d._profileUid=c._docId)}),r.forEach(c=>{const d=Me[c.id];d&&(!c._nickCustom&&!c.nick&&(c.nick=d.nick),!c._bioCustom&&!c.bio&&(c.bio=d.bio))}),r.filter(c=>c.active!==!1)}let qe=[],je=[],ne=[];function Le(){var t,a;const e=((a=(t=de())==null?void 0:t.currentUser)==null?void 0:a.uid)||"";o.players=ca(qe,je,e)}function da(e){const t=Y();if(!t)return()=>{};ne.forEach(r=>{try{r()}catch{}}),ne=[];let a=null;const n=()=>{typeof e=="function"&&(clearTimeout(a),a=setTimeout(()=>{o.ready=!0,e()},50))},s=(r,l)=>{try{const u=t.collection(r).onSnapshot(c=>{l(c.docs.map(N)),n()},()=>{});ne.push(u)}catch{}};s("TeamPlayers",r=>{qe=r,Le()}),s("PlayerProfiles",r=>{je=r,Le()}),s("Matches",r=>{o.matches=r.sort((l,u)=>(u.createdMs||0)-(l.createdMs||0))}),s("News",r=>{o.news=r.sort((l,u)=>(u.pinned?1:0)-(l.pinned?1:0)||(u.createdMs||0)-(l.createdMs||0))}),s("Honours",r=>{o.honours=r.length?r.sort((l,u)=>(l.order||999)-(u.order||999)):Be.map(l=>({...l}))}),s("Gallery",r=>{o.gallery=r.sort((l,u)=>(u.createdMs||0)-(l.createdMs||0))}),s("Socials",r=>{o.socials=r.length?r.sort((l,u)=>(l.order||999)-(u.order||999)):xe.map(l=>({...l}))}),s("PlayerStats",r=>{o.stats=r}),s("Achievements",r=>{o.achievements=r.sort((l,u)=>(u.createdMs||0)-(l.createdMs||0))}),s("Availability",r=>{o.availability=r}),s("PlayingXI",r=>{o.lineups=r.sort((l,u)=>(u.createdMs||0)-(l.createdMs||0))}),s("TeamRecords",r=>{o.records=r.sort((l,u)=>(u.createdMs||0)-(l.createdMs||0))}),s("Tournaments",r=>{o.tournaments=r.sort((l,u)=>(u.createdMs||0)-(l.createdMs||0))}),s("Opponents",r=>{o.opponents=r.sort((l,u)=>(u.createdMs||0)-(l.createdMs||0))}),s("Updates",r=>{o.updates=r.filter(l=>l._docId!=="_news_updates_swap_v1").sort((l,u)=>(u.pinned?1:0)-(l.pinned?1:0)||(u.createdMs||0)-(l.createdMs||0))});try{const r=t.collection("BrandSettings").doc("main").onSnapshot(l=>{l.exists&&(bt(l.data()||{}),n())},()=>{});ne.push(r)}catch{}return()=>{clearTimeout(a),ne.forEach(r=>{try{r()}catch{}}),ne=[]}}async function G(){const e=Y();if(!e)return o.loadError="Firebase is unavailable. Check your internet connection and retry.",o.ready=!0,!1;o.loadingData=!0,o.loadError="";try{const[t,a,n,s,r,l,u,c,d,b,v,g,C,$,R]=await Promise.all([e.collection("TeamPlayers").get(),e.collection("Matches").get(),e.collection("News").get(),e.collection("Honours").get(),e.collection("Gallery").get(),e.collection("Socials").get(),e.collection("PlayerProfiles").get(),e.collection("PlayerStats").get(),e.collection("Achievements").get(),e.collection("Availability").get(),e.collection("PlayingXI").get(),e.collection("TeamRecords").get(),e.collection("Tournaments").get(),e.collection("Opponents").get(),e.collection("Updates").get()]);qe=t.docs.map(N),je=u.docs.map(N),Le(),o.matches=a.docs.map(N).sort((y,f)=>(f.createdMs||0)-(y.createdMs||0)),o.news=n.docs.map(N).sort((y,f)=>(f.pinned?1:0)-(y.pinned?1:0)||(f.createdMs||0)-(y.createdMs||0)),o.honours=s.empty?Be.map(y=>({...y})):s.docs.map(N).sort((y,f)=>(y.order||999)-(f.order||999)),o.gallery=r.docs.map(N).sort((y,f)=>(f.createdMs||0)-(y.createdMs||0)),o.socials=l.empty?xe.map(y=>({...y})):l.docs.map(N).sort((y,f)=>(y.order||999)-(f.order||999)),o.stats=c.docs.map(N),o.achievements=d.docs.map(N).sort((y,f)=>(f.createdMs||0)-(y.createdMs||0)),o.availability=b.docs.map(N),o.lineups=v.docs.map(N).sort((y,f)=>(f.createdMs||0)-(y.createdMs||0)),o.records=g.docs.map(N).sort((y,f)=>(f.createdMs||0)-(y.createdMs||0)),o.tournaments=C.docs.map(N).sort((y,f)=>(f.createdMs||0)-(y.createdMs||0)),o.opponents=$.docs.map(N).sort((y,f)=>(f.createdMs||0)-(y.createdMs||0)),o.updates=R.docs.filter(y=>y.id!=="_news_updates_swap_v1").map(N).sort((y,f)=>(f.pinned?1:0)-(y.pinned?1:0)||(f.createdMs||0)-(y.createdMs||0));try{const y=await e.collection("BrandSettings").doc("main").get();y.exists&&bt(y.data()||{})}catch{o.brandLogo=w.logoPath}return o.ready=!0,!0}catch(t){return console.error("Club data load failed",t),o.loadError="Unable to sync live team data from Firebase. Showing bundled squad roster.",o.ready=!0,!1}finally{o.loadingData=!1}}async function We(e){var n,s,r,l;const t=de(),a=Y();if(!e||!a)return o.user=null,o.account=null,o.role="guest",o.playerId=null,{ok:!1,reason:"NOT_SIGNED_IN"};try{const u=await a.collection("Accounts").doc(e.uid).get();if(!u.exists)return await((n=t==null?void 0:t.signOut)==null?void 0:n.call(t)),o.user=null,o.account=null,o.role="guest",o.playerId=null,{ok:!1,reason:"NO_ACCOUNT_RECORD"};const c=u.data()||{};if(c.active!==!0)return await((s=t==null?void 0:t.signOut)==null?void 0:s.call(t)),o.user=null,o.account=null,o.role="guest",o.playerId=null,{ok:!1,reason:"ACCOUNT_INACTIVE"};if(c.role==="admin")return o.user=e,o.account=c,o.role="admin",o.playerId=c.playerId||null,{ok:!0,role:"admin",account:c};const d=typeof c.playerId=="string"?c.playerId.trim():"";return d&&(o.players.some(v=>v.id===d)||te.some(v=>v.id===d))?(o.user=e,o.account=c,o.role="player",o.playerId=d,{ok:!0,role:"player",playerId:d,account:c}):(await((r=t==null?void 0:t.signOut)==null?void 0:r.call(t)),o.user=null,o.account=null,o.role="guest",o.playerId=null,{ok:!1,reason:"INVALID_ROLE_MAPPING"})}catch(u){return console.error("Account verification failed",u),await((l=t==null?void 0:t.signOut)==null?void 0:l.call(t)),o.user=null,o.account=null,o.role="guest",o.playerId=null,{ok:!1,reason:(u==null?void 0:u.code)||"VERIFICATION_ERROR"}}}async function ua(e,t){const a=de();if(!a)throw new Error("FIREBASE_UNAVAILABLE");const n=Ut(e),s=String(t||"");if(!n||!s)throw new Error("EMAIL_PASSWORD_REQUIRED");const r=await a.signInWithEmailAndPassword(n,s),l=await We(r.user);if(!l.ok){const u=new Error(l.reason||"ACCOUNT_NOT_AUTHORIZED");throw u.code=l.reason,u}return await G(),l}async function pa(e){const t=String(e||"");if(!t){const l=new Error("PASSWORD_REQUIRED");throw l.code="PASSWORD_REQUIRED",l}const a=await ia(t);if(!(a?a===oa:!1)){const l=new Error("INVALID_ADMIN_PASSWORD");throw l.code="INVALID_ADMIN_PASSWORD",l}o.apkAdminUnlocked=!0,o.role="admin",Ve(!0);let s=oe();const r=de();if(r&&!s)for(const l of Nt)try{const u=await r.signInWithEmailAndPassword(l,t),c=await We(u.user);if(c.ok&&c.role==="admin"){s=!0;break}}catch{}try{await G()}catch{}return{ok:!0,role:"admin",cloudSynced:s}}async function ma(e,t){const a=await ua(e,t);if(a.role!=="admin"){await ht();const n=new Error("This Firebase account is not an active Admin in Accounts/{uid}.");throw n.code="NOT_ADMIN_ACCOUNT",n}return o.apkAdminUnlocked=!0,o.role="admin",Ve(!0),a}async function ht(){o.apkAdminUnlocked=!1,Ve(!1);const e=de();if(e)try{await e.signOut()}catch{}o.user=null,o.account=null,o.role="guest",o.playerId=null}function ha(e){const t=de();if(!t){o.authChecked=!0;const a=o.apkAdminUnlocked;return e({role:a?"admin":"guest",verified:a}),()=>{}}return t.onAuthStateChanged(async a=>{if(!a){if(o.user=null,o.account=null,o.apkAdminUnlocked){o.role="admin",o.playerId=null,o.authChecked=!0,e({role:"admin",verified:!0});return}o.role="guest",o.playerId=null,o.authChecked=!0,e({role:"guest",verified:!1});return}const n=await We(a);if(o.authChecked=!0,!n.ok&&o.apkAdminUnlocked){o.role="admin",e({role:"admin",verified:!0});return}e({role:n.ok?n.role:"guest",verified:n.ok,reason:n.ok?"":n.reason})})}function ba(e){return e?K()||o.role==="player"&&o.playerId===e?!0:!!(o.user&&o.account&&o.account.active===!0&&o.role==="player"&&o.playerId===e):!1}async function fa(e,t){const a=Y();if(!a)throw new Error("FIREBASE_UNAVAILABLE");const n=String(t||"").toUpperCase();if(!["AVAILABLE","UNAVAILABLE"].includes(n))throw new Error("INVALID_STATUS");if(!ba(e))throw new Error("NOT_ALLOWED");try{await a.collection("Availability").doc(e).set({playerId:e,status:n,updatedAt:ee()},{merge:!0}),await G()}catch(s){throw ae(s)}}async function j(e,t,a){const n=Y();if(!n||!K())throw new Error("ADMIN_REQUIRED");const s=Ae({...a,updatedAt:ee()}),r=t&&!String(t).startsWith("loc_")?String(t):"";try{r?await n.collection(e).doc(r).set(s,{merge:!0}):await n.collection(e).add({...s,createdMs:s.createdMs||Date.now()}),await G()}catch(l){throw ae(l)}}async function ya(e,t){const a=Y();if(!a||!K())throw new Error("ADMIN_REQUIRED");const n=Ae({id:e,name:String(t.name||"").trim(),role:String(t.role||"").trim(),detail:String(t.detail||"").trim(),jersey:String(t.jersey||"").trim(),active:!0,updatedAt:ee()});"image"in t&&t.image!==void 0&&t.image!==null&&(n.image=String(t.image));const s=o.players.find(u=>u.id===e),r=(s==null?void 0:s._profileUid)||`profile_${e}`,l=Ae({playerId:e,jersey:n.jersey,nick:String(t.nick??(s==null?void 0:s.nick)??"").trim(),bio:String(t.bio??(s==null?void 0:s.bio)??"").trim(),updatedMs:Date.now(),updatedAt:ee()});"image"in t&&t.image!==void 0&&t.image!==null&&(l.image=String(t.image));try{await a.collection("TeamPlayers").doc(e).set(n,{merge:!0}),await a.collection("PlayerProfiles").doc(r).set(l,{merge:!0}),await G()}catch(u){throw ae(u)}}async function va(e){const t=Y();if(!t||!K())throw new Error("ADMIN_REQUIRED");const a=Number(e.appVersionCode),n=Ae({appVersion:String(e.appVersion||w.appVersion).trim(),appVersionCode:Number.isFinite(a)&&a>0?a:o.appVersionCode||x.versionCode,updateNotes:String(e.updateNotes??"").trim(),forceUpdate:!!e.forceUpdate,apkDownloadUrl:String(e.apkDownloadUrl||w.apkDownloadUrl).trim(),apkReleasesUrl:String(e.apkReleasesUrl||w.apkReleasesUrl).trim(),updatedMs:Date.now(),updatedAt:ee()});e.logo&&(n.logo=String(e.logo));try{await t.collection("BrandSettings").doc("main").set(n,{merge:!0}),await G()}catch(s){throw ae(s)}}function bt(e){e&&(e.logo&&!me(e.logo)&&(o.brandLogo=e.logo),e.apkDownloadUrl&&/^https?:\/\//i.test(String(e.apkDownloadUrl).trim())&&(o.apkDownloadUrl=String(e.apkDownloadUrl).trim()),e.apkReleasesUrl&&/^https?:\/\//i.test(String(e.apkReleasesUrl).trim())&&(o.apkReleasesUrl=String(e.apkReleasesUrl).trim()),e.appVersion&&(o.appVersion=String(e.appVersion).trim()),Number.isFinite(Number(e.appVersionCode))&&(o.appVersionCode=Number(e.appVersionCode)),"updateNotes"in e&&(o.updateNotes=String(e.updateNotes||"")),"forceUpdate"in e&&(o.forceUpdate=!!e.forceUpdate))}async function ga(){const e=await Zt();return e&&(e.versionName||e.versionCode)&&(o.nativeVersionName=String(e.versionName||x.versionName).trim(),o.nativeVersionCode=Number(e.versionCode)||x.versionCode,o.otaBuild=Number(e.otaBuild)||0,o.otaVersion=String(e.otaVersion||""),o.canInstallPackages=!!e.canInstallPackages),e}function $e(){const e=o.nativeVersionName||x.versionName,t=Number(o.nativeVersionCode)||x.versionCode,a=[];(o.appVersion||o.appVersionCode)&&a.push({versionName:o.appVersion||e,versionCode:Number(o.appVersionCode)||t,apkDownloadUrl:o.apkDownloadUrl||w.apkDownloadUrl,apkReleasesUrl:o.apkReleasesUrl||w.apkReleasesUrl,notes:o.updateNotes||"",forceUpdate:!!o.forceUpdate}),o.remoteVersionInfo&&a.push(o.remoteVersionInfo);let n={versionName:e,versionCode:t,apkDownloadUrl:o.apkDownloadUrl||w.apkDownloadUrl,apkReleasesUrl:o.apkReleasesUrl||w.apkReleasesUrl,notes:"",forceUpdate:!1};return a.forEach(r=>{const l=String(r.versionName||"0.0.0").trim(),u=Number(r.versionCode)||0,c=Ce(n.versionName,l)<0,d=Ce(n.versionName,l)===0&&u>n.versionCode;(c||d||u>n.versionCode)&&(n={versionName:l||n.versionName,versionCode:Math.max(u,n.versionCode),apkDownloadUrl:/^https?:\/\//i.test(String(r.apkDownloadUrl||""))?String(r.apkDownloadUrl).trim():n.apkDownloadUrl,apkReleasesUrl:/^https?:\/\//i.test(String(r.apkReleasesUrl||""))?String(r.apkReleasesUrl).trim():n.apkReleasesUrl,notes:r.notes||n.notes,forceUpdate:!!(r.forceUpdate||n.forceUpdate)})}),{hasUpdate:Ce(e,n.versionName)<0||Number(n.versionCode)>Number(t),currentVersion:e,currentCode:t,otaBuild:Number(o.otaBuild)||0,otaVersion:o.otaVersion||"",canInstallPackages:!!o.canInstallPackages,latestVersion:n.versionName,latestCode:n.versionCode,apkUrl:n.apkDownloadUrl,releasesUrl:n.apkReleasesUrl,notes:n.notes||"A newer version of RDM Official Android APK is ready with automatic in-app update support.",forceUpdate:n.forceUpdate}}async function wa(){await ga().catch(()=>null);const e=typeof AbortController<"u"?new AbortController:null,t=e?setTimeout(()=>e.abort(),5e3):null,a=[];typeof window<"u"&&/^https?:$/i.test(window.location.protocol)&&a.push(`./version.json?t=${Date.now()}`),a.push(`${Lt}?t=${Date.now()}`);for(const n of a)try{const s=await fetch(n,{cache:"no-store",signal:e==null?void 0:e.signal});if(!s.ok)continue;const r=await s.json();if(r&&(r.versionName||r.versionCode)){o.remoteVersionInfo={versionName:String(r.versionName||x.versionName).trim(),versionCode:Number(r.versionCode)||x.versionCode,apkDownloadUrl:String(r.apkDownloadUrl||w.apkDownloadUrl).trim(),apkReleasesUrl:String(r.apkReleasesUrl||w.apkReleasesUrl).trim(),notes:String(r.notes||""),forceUpdate:!!r.forceUpdate};break}}catch{}return t&&clearTimeout(t),$e()}async function Ie(){const e=await aa(It).catch(()=>({updated:!1})),t=await wa();return{otaResult:e,apkUpdate:t}}async function Sa(e,t){const a=Y();if(!a||!K()||!t)throw new Error("ADMIN_REQUIRED");if(!String(t).startsWith("loc_"))try{await a.collection(e).doc(String(t)).delete(),await G()}catch(n){throw ae(n)}}async function Aa(e){const t=Y();if(!t||!K()||!e)throw new Error("ADMIN_REQUIRED");const a=te.some(n=>n.id===e);try{a?await t.collection("TeamPlayers").doc(e).set({id:e,active:!1,updatedAt:ee()},{merge:!0}):await t.collection("TeamPlayers").doc(e).delete(),await G()}catch(n){throw ae(n)}}async function ka(e,t,a){const n=Y();if(!n||!K()||!t)throw new Error("ADMIN_REQUIRED");if(!String(t).startsWith("loc_"))try{if(a){const s=await n.collection(e).where("pinned","==",!0).get();if(!s.empty){const r=n.batch();s.docs.forEach(l=>{l.id!==t&&r.set(l.ref,{pinned:!1,updatedAt:ee()},{merge:!0})}),await r.commit()}}await n.collection(e).doc(t).set({pinned:!!a,updatedAt:ee()},{merge:!0}),await G()}catch(s){throw ae(s)}}function ve(e,t=960,a=.74){return new Promise((n,s)=>{if(!e)return n("");const r=new FileReader;r.onerror=()=>s(new Error("READ_FAILED")),r.onload=()=>{const l=new Image;l.onerror=()=>s(new Error("IMAGE_INVALID")),l.onload=()=>{const u=Math.min(1,t/Math.max(l.width,l.height)),c=document.createElement("canvas");c.width=Math.max(1,Math.round(l.width*u)),c.height=Math.max(1,Math.round(l.height*u)),c.getContext("2d").drawImage(l,0,0,c.width,c.height);let d=c.toDataURL("image/jpeg",a);if(d.length>72e4&&(d=c.toDataURL("image/jpeg",.56)),d.length>9e5)return s(new Error("IMAGE_TOO_LARGE"));n(d)},l.src=r.result},r.readAsDataURL(e)})}let ue=[];function A(e){const t=document.getElementById("rdmToast");t&&(t.textContent=String(e||""),t.classList.add("show"),clearTimeout(t._timer),t._timer=setTimeout(()=>t.classList.remove("show"),2200))}function Ne(){return ue.length>0}function ft(){const e=ue.pop();return e&&e.isConnected?(e.remove(),!0):!1}function be(e){return ue.push(e),()=>{ue=ue.filter(t=>t!==e),e.isConnected&&e.remove()}}function yt(e){return(e==null?void 0:e.code)==="permission-denied"||/Missing (?:or insufficient|cloud) permissions/i.test(String((e==null?void 0:e.message)||""))}function Ue({title:e,message:t,confirmLabel:a="Confirm",danger:n=!1,onConfirm:s,onPermissionDenied:r}){const l=document.createElement("div");l.className="sheetOverlay show",l.innerHTML=`
    <div class="sheetCard confirmCard" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <h3>${i(e)}</h3>
      </div>
      <p class="confirmMessage">${i(t)}</p>
      <div class="sheetActions">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="button" class="${n?"btnDanger":"btnPrimary"}" data-ok>${i(a)}</button>
      </div>
    </div>
  `,document.body.appendChild(l);const u=be(l);l.querySelector("[data-cancel]").onclick=u,l.addEventListener("click",c=>{c.target===l&&u()}),l.querySelector("[data-ok]").onclick=async c=>{const d=c.currentTarget;d.disabled=!0;try{await s(),u()}catch(b){if(yt(b)&&typeof r=="function"){u(),r(b);return}d.disabled=!1,A((b==null?void 0:b.message)||"Action failed")}}}function vt({title:e,subtitle:t="",fields:a,submitLabel:n="Save",onSubmit:s,onPermissionDenied:r}){const l=document.createElement("div");l.className="sheetOverlay show";const u=a.map(d=>{const b=d.required?"required":"",v=i(d.value??"");if(d.type==="textarea")return`
        <label class="fieldBlock">
          <span>${i(d.label)}</span>
          <textarea name="${i(d.name)}" rows="${d.rows||4}" placeholder="${i(d.placeholder||"")}" ${b}>${v}</textarea>
        </label>
      `;if(d.type==="select"){const g=(d.options||[]).map(C=>{const $=typeof C=="object"?C.value:C,R=typeof C=="object"?C.label:C,y=String($)===String(d.value??"")?"selected":"";return`<option value="${i($)}" ${y}>${i(R)}</option>`}).join("");return`
        <label class="fieldBlock">
          <span>${i(d.label)}</span>
          <select name="${i(d.name)}">${g}</select>
        </label>
      `}return d.type==="checkbox"?`
        <label class="checkboxRow">
          <input type="checkbox" name="${i(d.name)}" ${d.checked?"checked":""}>
          <span>${i(d.label)}</span>
        </label>
      `:d.type==="file"?`
        <label class="fieldBlock">
          <span>${i(d.label)}</span>
          <input type="file" name="${i(d.name)}" accept="image/*" ${b}>
        </label>
      `:`
      <label class="fieldBlock">
        <span>${i(d.label)}</span>
        <input type="${i(d.type||"text")}" name="${i(d.name)}" value="${v}" placeholder="${i(d.placeholder||"")}" ${b}>
      </label>
    `}).join("");l.innerHTML=`
    <form class="sheetCard formSheet" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>${i(e)}</h3>
          ${t?`<p class="sheetSub">${i(t)}</p>`:""}
        </div>
      </div>
      <div class="formStack">${u}</div>
      <div class="sheetFooterSticky">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="submit" class="btnPrimary">${i(n)}</button>
      </div>
    </form>
  `,document.body.appendChild(l);const c=be(l);l.querySelector("[data-cancel]").onclick=c,l.addEventListener("click",d=>{d.target===l&&c()}),l.querySelector("form").onsubmit=async d=>{d.preventDefault();const b=d.currentTarget,v=b.querySelector('[type="submit"]');v.disabled=!0;try{const g={};a.forEach(C=>{var R;const $=b.elements[C.name];$&&(C.type==="checkbox"?g[C.name]=$.checked:C.type==="file"?g[C.name]=((R=$.files)==null?void 0:R[0])||null:C.type==="textarea"?g[C.name]=String($.value??"").replace(/\r\n?/g,`
`).replace(/^\n+|\s+$/g,""):g[C.name]=String($.value??"").trim())}),await s(g),c()}catch(g){if(yt(g)&&typeof r=="function"){c(),r(g);return}v.disabled=!1,A((g==null?void 0:g.message)||"Save failed")}}}function it({currentTheme:e,onSelectTheme:t}){const a=document.createElement("div");a.className="sheetOverlay show";const n=[{id:"royal",name:"Royal Cobalt",desc:"Crisp Daylight Frost & Midnight Cobalt",swatches:["#F5F7FB","#FFFFFF","#1D4ED8"]},{id:"floodlight",name:"Floodlight Navy",desc:"Deep Stadium Navy & Championship Gold",swatches:["#070C18","#0F172A","#2563EB"]},{id:"emerald",name:"Pavilion Emerald",desc:"Classic Turf Mint & Pavilion Emerald",swatches:["#F6F9F7","#FFFFFF","#0F5132"]},{id:"crimson",name:"Test Crimson",desc:"Editorial Chalk & Cricket Leather Crimson",swatches:["#FAF7F6","#FFFFFF","#9F1239"]}];a.innerHTML=`
    <div class="sheetCard" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>App Appearance</h3>
          <p class="sheetSub">Tap a palette to apply immediately</p>
        </div>
      </div>
      <div class="themeChoiceList">
        ${n.map(r=>`
          <button type="button" class="themeChoiceRow ${e===r.id?"active":""}" data-pick-theme="${r.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${r.swatches.map(l=>`<span style="background:${l}"></span>`).join("")}
            </div>
            <div class="themeChoiceCopy">
              <strong>${i(r.name)}</strong>
              <span>${i(r.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${e===r.id?"Active":"Apply"}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `,document.body.appendChild(a);const s=be(a);a.addEventListener("click",r=>{r.target===a&&s()}),a.querySelectorAll("[data-pick-theme]").forEach(r=>{r.addEventListener("click",()=>{t(r.dataset.pickTheme),s()})})}function Oe(e,t=""){const a=document.createElement("div");a.className="lightboxOverlay show",a.innerHTML=`
    <div class="lightboxTopBar">
      <div class="lightboxLeft">
        <button type="button" class="iconCloseBtn darkSurface" aria-label="Back">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <span class="lightboxCaption">${i(t||"Team Gallery")}</span>
      </div>
    </div>
    <div class="lightboxCanvas">
      <img src="${i(e)}" alt="${i(t||"Gallery image")}" referrerPolicy="no-referrer">
    </div>
  `,document.body.appendChild(a);const n=be(a);a.querySelector(".iconCloseBtn").onclick=n,a.addEventListener("click",s=>{(s.target===a||s.target.classList.contains("lightboxCanvas"))&&n()})}async function Pa({player:e,brandLogo:t}){var R,y;const s=document.createElement("canvas");s.width=1080,s.height=1350;const r=s.getContext("2d"),l=f=>new Promise((L,T)=>{const I=new Image;I.crossOrigin="anonymous",I.onload=()=>L(I),I.onerror=T,I.src=f}),u=(f,L,T,I,B,V,m)=>{r.beginPath(),r.moveTo(f+B,L),r.arcTo(f+T,L,f+T,L+I,B),r.arcTo(f+T,L+I,f,L+I,B),r.arcTo(f,L+I,f,L,B),r.arcTo(f,L,f+T,L,B),r.closePath(),V&&(r.fillStyle=V,r.fill()),m&&(r.strokeStyle=m,r.lineWidth=2,r.stroke())},c=r.createLinearGradient(0,0,1080,1350);c.addColorStop(0,"#F5F7FB"),c.addColorStop(1,"#E8EEF8"),r.fillStyle=c,r.fillRect(0,0,1080,1350),u(40,40,1e3,1270,28,"#FFFFFF","#DCE4F0"),u(80,80,920,8,4,"#1D4ED8",null);let d=null;try{d=await l(t||w.logoPath)}catch{}d&&r.drawImage(d,84,120,74,74),r.textAlign="left",r.fillStyle="#0B1324",r.font='700 34px "Outfit", "Plus Jakarta Sans", sans-serif',r.fillText("REHAN DOMINATORS MAHUAWAN",176,156),r.fillStyle="#576780",r.font='600 18px "Plus Jakarta Sans", sans-serif',r.fillText("MAHUAWAN · GOPALGANJ · BIHAR",176,186);let b=null;try{b=await l(lt(e.image,t))}catch{b=d}if(b){r.save(),r.beginPath(),r.arc(1080/2,370,140,0,Math.PI*2),r.clip();const f=Math.max(280/b.width,280/b.height);r.drawImage(b,1080/2-b.width*f/2,370-b.height*f/2,b.width*f,b.height*f),r.restore(),r.strokeStyle="#1D4ED8",r.lineWidth=8,r.beginPath(),r.arc(1080/2,370,146,0,Math.PI*2),r.stroke()}r.textAlign="center",r.fillStyle="#0B1324",r.font='700 58px "Outfit", "Plus Jakarta Sans", sans-serif',r.fillText(h(e.name),1080/2,580),u(120,620,840,124,18,"#F5F7FB","#DCE4F0"),r.fillStyle="#1D4ED8",r.font='700 16px "Plus Jakarta Sans", sans-serif',r.fillText("PLAYER CODE",330,662),r.fillText("JERSEY NUMBER",750,662),r.fillStyle="#0B1324",r.font='700 30px "JetBrains Mono", monospace',r.fillText(pe[e.id]||e.id,330,708),r.fillText(e.jersey?`#${e.jersey}`:"—",750,708),u(120,774,840,140,18,"#EAEFF7","#DCE4F0"),r.fillStyle="#1D4ED8",r.font='700 24px "Plus Jakarta Sans", sans-serif',r.fillText(h(e.role||""),1080/2,828),r.fillStyle="#27344D",r.font='600 20px "Plus Jakarta Sans", sans-serif',r.fillText(h(e.detail||"").slice(0,66),1080/2,872),r.fillStyle="#B45309",r.font='700 18px "Plus Jakarta Sans", sans-serif',r.fillText("ONE TEAM · ONE DREAM · ONE DOMINATION",1080/2,1234),r.fillStyle="#576780",r.font='600 15px "JetBrains Mono", monospace',r.fillText("RDM OFFICIAL · PLAYER IDENTITY CARD",1080/2,1266);const v=`${e.id}-${String(e.name||"PLAYER").replace(/\s+/g,"-")}-RDM-CARD.png`,g=await new Promise(f=>s.toBlob(f,"image/png"));if(g&&typeof navigator<"u"&&typeof navigator.share=="function"&&typeof File=="function")try{const f=new File([g],v,{type:"image/png"});if(typeof navigator.canShare=="function"?navigator.canShare({files:[f]}):!0){await navigator.share({files:[f],title:`${h(e.name)} · RDM Player Card`,text:`${h(e.name)} (${pe[e.id]||e.id}) — Rehan Dominators Mahuawan`}),A("Player card ready to save or share");return}}catch(f){if(f&&f.name==="AbortError")return}const C=s.toDataURL("image/png");if(!!!((y=(R=window.Capacitor)==null?void 0:R.isNativePlatform)!=null&&y.call(R))){const f=document.createElement("a");f.href=C,f.download=v,document.body.appendChild(f),f.click(),f.remove(),A("Player card downloaded");return}Oe(C,`${h(e.name)} · RDM Player Card`),A("Player card generated")}function $a({currentVersion:e,latestVersion:t,notes:a,forceUpdate:n=!1,isNative:s=!1,needsInstallPermission:r=!1,onDownload:l,onOpenPermissionSettings:u,onSubscribeProgress:c}){if(document.getElementById("rdmUpdateSheetOverlay"))return;const d=document.createElement("div");d.id="rdmUpdateSheetOverlay",d.className="sheetOverlay show";let b=!!(s&&r);const v=s?b?"Allow App Updates Setting":`Update App In-Place (v${i(t)})`:`Download APK v${i(t)}`;d.innerHTML=`
    <div class="sheetCard confirmCard" role="dialog" aria-modal="true" aria-label="App Update Available">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <span class="sectionKicker">New Version Available</span>
          <h3>${s?"Update RDM Official":"Update RDM Official APK"}</h3>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:10px;">
        <span class="metaCode">Installed: v${i(e)}</span>
        <span class="metaCode" style="color:var(--brand-text);">Latest: v${i(t)}</span>
      </div>
      <p class="confirmMessage richText" style="margin-bottom:12px;">${i(a||"A newer version of RDM Official Android App is ready to install right inside the app without uninstalling.")}</p>
      <div class="updatePermBox" id="rdmUpdatePermBox" style="${b?"":"display:none;"}">
        <strong>One-Time Android Permission Needed</strong>
        <span>Allow "Install unknown apps" for RDM Official so Android can update your app automatically in place without losing your login or data.</span>
      </div>
      <div class="updateProgressWrap" id="rdmUpdateProgressWrap" style="display:none;">
        <div class="updateProgressTop">
          <span id="rdmUpdateStatusText">Preparing update...</span>
          <span id="rdmUpdatePercentText" class="num">0%</span>
        </div>
        <div class="updateProgressTrack">
          <div class="updateProgressFill" id="rdmUpdateProgressFill" style="width:0%;"></div>
        </div>
      </div>
      <div class="errorBanner" id="rdmUpdateErrorBox" style="display:none;margin-bottom:12px;"></div>
      <div class="sheetActions"${n?' style="grid-template-columns:1fr;"':""}>
        ${n?"":'<button type="button" class="btnSecondary" data-later>Later</button>'}
        <button type="button" class="btnPrimary" data-download>${v}</button>
      </div>
    </div>
  `,document.body.appendChild(d);const g=be(d),C=d.querySelector("#rdmUpdatePermBox"),$=d.querySelector("#rdmUpdateProgressWrap"),R=d.querySelector("#rdmUpdateStatusText"),y=d.querySelector("#rdmUpdatePercentText"),f=d.querySelector("#rdmUpdateProgressFill"),L=d.querySelector("#rdmUpdateErrorBox"),T=d.querySelector("[data-download]"),I=d.querySelector("[data-later]");let B=()=>{};const V=()=>{B(),g()};typeof c=="function"&&(B=c(({percent:m=0,downloadedBytes:S=0,totalBytes:k=0})=>{$.style.display="block",L.style.display="none";const E=Math.max(0,Math.min(100,Number(m)||0));f.style.width=`${E}%`,y.textContent=`${E}%`;const D=(S/(1024*1024)).toFixed(1);if(k>0){const q=(k/1048576).toFixed(1);R.textContent=E>=100?"Verifying & opening Android updater...":`Downloading ${D} / ${q} MB...`}else R.textContent=`Downloading ${D} MB...`})),I&&(I.onclick=()=>{try{sessionStorage.setItem(`rdm-dismiss-update-${t}`,"1")}catch{}V()}),n||d.addEventListener("click",m=>{if(m.target===d){try{sessionStorage.setItem(`rdm-dismiss-update-${t}`,"1")}catch{}V()}}),T.onclick=async()=>{if(L.style.display="none",s&&b){b=!1,C.style.display="none",T.textContent=`Update App In-Place (v${t})`,typeof u=="function"&&await u();return}if(!s){typeof l=="function"&&l(),n||V();return}T.disabled=!0,T.textContent="Downloading Update...",$.style.display="block",R.textContent="Starting secure download...";try{const m=await(l==null?void 0:l());if(m&&m.needsPermission){b=!0,C.style.display="flex",$.style.display="none",T.disabled=!1,T.textContent="Allow App Updates Setting";return}R.textContent="Installer ready. Confirm Update on Android prompt.",y.textContent="100%",f.style.width="100%",T.disabled=!1,T.textContent=`Install Update v${t}`,n||setTimeout(()=>V(),900)}catch(m){T.disabled=!1,T.textContent=`Retry Update (v${t})`,L.textContent=(m==null?void 0:m.message)||"Unable to download update. Please check your connection and try again.",L.style.display="block"}}}const Ge=[{id:"royal",label:"Royal Cobalt",desc:"Crisp Daylight Frost & Midnight Cobalt",swatches:["#F5F7FB","#FFFFFF","#1D4ED8"]},{id:"floodlight",label:"Floodlight Navy",desc:"Deep Stadium Navy & Championship Gold",swatches:["#070C18","#0F172A","#2563EB"]},{id:"emerald",label:"Pavilion Emerald",desc:"Classic Turf Mint & Pavilion Emerald",swatches:["#F6F9F7","#FFFFFF","#0F5132"]},{id:"crimson",label:"Test Crimson",desc:"Editorial Chalk & Cricket Leather Crimson",swatches:["#FAF7F6","#FFFFFF","#9F1239"]}],p={screen:"public",portalMode:"public",portalPlayerId:null,publicTab:"home",matchesSubTab:"fixtures",galleryAlbum:"ALL",squadQuery:"",squadFilter:"ALL",detailPlayerId:null,morePage:"news",adminTab:"overview",drawerOpen:!1,theme:Ra(),loginError:"",loginBusy:!1,lastBackPressAt:0},M=[];function gt(){return{screen:p.screen,publicTab:p.publicTab,matchesSubTab:p.matchesSubTab,detailPlayerId:p.detailPlayerId,morePage:p.morePage,adminTab:p.adminTab}}function Ca(e,t){return e&&t&&e.screen===t.screen&&e.publicTab===t.publicTab&&e.matchesSubTab===t.matchesSubTab&&e.detailPlayerId===t.detailPlayerId&&e.morePage===t.morePage&&e.adminTab===t.adminTab}function ie(e){return e.screen==="playerDetail"&&e.detailPlayerId?`#player-${e.detailPlayerId}`:e.screen==="subpage"?`#section-${e.morePage}`:(e.screen==="playerPortal"&&p.portalPlayerId,e.screen==="portalAuth"?"#portal-verify":e.screen==="admin"?`#admin-${e.adminTab}`:`#${e.publicTab||"home"}`)}function Ke(e){p.screen=e.screen,p.publicTab=e.publicTab||"home",p.matchesSubTab=e.matchesSubTab||"fixtures",p.detailPlayerId=e.detailPlayerId||null,p.morePage=e.morePage||"news",p.adminTab=e.adminTab||"overview",p.drawerOpen=!1,P(),window.scrollTo({top:0,behavior:"auto"})}function H(e,{push:t=!0,replace:a=!1}={}){e.screen==="admin"&&(K()||(e={...e,screen:"portalAuth"})),e.screen==="playerPortal"&&(e={screen:"public",publicTab:"home"}),e.screen;const n={...gt(),...e},s=M[M.length-1];if(!Ca(s,n)){if(a&&M.length>0){M[M.length-1]=n;try{window.history.replaceState({rdmIdx:M.length-1},"",ie(n))}catch{}}else if(t||M.length===0){M.push(n),M.length>24&&M.shift();try{window.history.pushState({rdmIdx:M.length-1},"",ie(n))}catch{}}}Ke(n)}function Z(e){p.drawerOpen=!!e;const t=document.getElementById("drawerOverlay");if(t){const a=t.querySelector(".drawerPanel");a&&(a.style.transform=""),t.classList.remove("dragging"),t.classList.toggle("open",p.drawerOpen),t.setAttribute("aria-hidden",p.drawerOpen?"false":"true")}else P()}function wt(){if(Ne())return ft(),!0;if(p.drawerOpen)return Z(!1),!0;if(M.length>1){M.pop();const e=M[M.length-1];try{window.history.replaceState({rdmIdx:M.length-1},"",ie(e))}catch{}return Ke(e),!0}return!1}function St(e){return e==="leather"||e==="turf"||e==="azure"||e==="alabaster"||e==="daylight"?"royal":e==="carbon"||e==="night"?"floodlight":e==="copper"?"crimson":Ge.some(t=>t.id===e)?e:"royal"}function Ra(){try{const e=localStorage.getItem("rdm-app-theme")||"royal",t=St(e);return t!==e&&localStorage.setItem("rdm-app-theme",t),t}catch{return"royal"}}function At(e){var t;return((t=Ge.find(a=>a.id===e))==null?void 0:t.label)||"Royal Cobalt"}function ge(e){const t=St(e);p.theme=t,document.documentElement.setAttribute("data-theme",t);try{localStorage.setItem("rdm-app-theme",t)}catch{}ut(t),P()}function z(){return o.brandLogo||w.logoPath}function ke(){return W(o.apkDownloadUrl)||w.apkDownloadUrl}function Ea(){return W(o.apkReleasesUrl)||w.apkReleasesUrl}function Pe(){return String(o.nativeVersionName||o.appVersion||x.versionName||w.appVersion||"1.3.0").replace(/^v/i,"")}function ze(e){const t=lt(e,z()),a=t===z()||t===w.logoPath;return{src:t,cls:a?"avatarCircle is-crest":"avatarCircle is-photo"}}function J(e){return{home:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/></svg>',squad:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',matches:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',gallery:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>',more:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>'}[e]||""}function kt(e){return{home:J("home"),squad:J("squad"),matches:J("matches"),gallery:J("gallery"),more:J("more"),xi:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',records:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',tournaments:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 8.5 15.5 15.5"/><path d="M15.5 8.5 8.5 15.5"/></svg>',honours:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',news:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',updates:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',socials:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',about:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',download:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>'}[e]||""}function ce({title:e="RDM Official",showBack:t=!1,showPublicNav:a=!0,rightActionHtml:n=""}){const s=[["home","Home"],["squad","Squad"],["matches","Matches"],["gallery","Gallery"],["more","More"]],r=t?`<button type="button" class="menuCircleBtn" id="btnStepBack" aria-label="Go back">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
       </button>`:`<button type="button" class="menuCircleBtn" id="btnOpenDrawer" aria-label="Open team menu">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
       </button>`,l=n||'<button type="button" class="topActionBtn" id="btnPickTheme">Theme</button>';return`
    <header class="topBar">
      <div class="topBarInner">
        <div class="topLeftGroup">
          ${r}
          <button type="button" class="topBrand" id="btnBrandHome" aria-label="RDM Official Home">
            <img src="${i(z())}" alt="RDM Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
            <span class="topBrandText">${i(e)}</span>
          </button>
        </div>
        ${a?`
          <nav class="topDesktopNav" aria-label="Primary navigation">
            ${s.map(([u,c])=>`
              <button type="button" class="topNavLink ${p.screen==="public"&&p.publicTab===u?"active":""}" data-public-tab="${u}">${c}</button>
            `).join("")}
          </nav>
        `:"<div></div>"}
        <div class="topBarActions">
          ${l}
        </div>
      </div>
    </header>
  `}function Ma(){const e=[["xi","Playing XI"],["records","Team Records"],["tournaments","Tournaments & H2H"],["honours","Team Honours"],["news","Team News"],["updates","Official Updates"],["socials","Channels & Contact"],["about","About RDM"],["download","Get Android App"]],t=`<button type="button" class="btnSecondary btnSm btnFull" id="btnOpenAdminPortal">${K()?"Open Admin Console":"Admin Panel"}</button>`;return`
    <div class="drawerOverlay ${p.drawerOpen?"open":""}" id="drawerOverlay" role="dialog" aria-modal="true" aria-hidden="${p.drawerOpen?"false":"true"}" aria-label="Team navigation menu">
      <aside class="drawerPanel" id="drawerPanel">
        <div class="drawerHeader">
          <div class="drawerBrandLockup">
            <img src="${i(z())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
            <div>
              <strong>RDM Official</strong>
              <span>Cricket Team · Mahuawan, Bihar</span>
            </div>
          </div>
        </div>

        <div class="drawerBody">
          <div class="drawerGroupLabel">Team Sections</div>
          ${e.map(([a,n])=>`
            <button type="button" class="drawerNavBtn ${p.screen==="subpage"&&p.morePage===a?"active":""}" data-open-subpage="${a}">
              <span class="drawerNavLeft">
                <span class="drawerNavIcon" aria-hidden="true">${kt(a)}</span>
                <span>${n}</span>
              </span>
              <span aria-hidden="true">›</span>
            </button>
          `).join("")}
        </div>

        <div class="drawerFooter">
          <button type="button" class="btnSecondary btnSm btnFull" id="btnDrawerTheme">Theme · ${i(At(p.theme))}</button>
          ${t}
        </div>
      </aside>
    </div>
  `}function he(){return`
    <footer class="webFooter">
      <div class="webFooterInner">
        <div class="webFooterBrand">
          <img src="${i(z())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
          <div>
            <strong>${i(h(w.orgName))}</strong>
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
  `}function Ta(){return`
    <nav class="bottomNav" aria-label="Mobile navigation">
      <div class="bottomNavGrid">
        ${[["home","Home"],["squad","Squad"],["matches","Matches"],["gallery","Gallery"],["more","More"]].map(([t,a])=>`
          <button type="button" class="navTabBtn ${p.screen==="public"&&p.publicTab===t?"active":""}" data-public-tab="${t}" aria-current="${p.screen==="public"&&p.publicTab===t?"page":"false"}">
            <span class="navIconPill">${J(t)}</span>
            <span>${a}</span>
          </button>
        `).join("")}
      </div>
    </nav>
  `}function Da(){const e=o.matches.find(d=>!/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${d.matchStatus||""} ${d.status||""} ${d.note||""}`)),t=o.matches.find(d=>/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${d.matchStatus||""} ${d.status||""} ${d.note||""}`)),a=o.updates.find(d=>d.pinned)||o.updates[0],n=o.news.find(d=>d.pinned)||o.news[0],s=a||n,r=o.players.find(d=>d.id==="RDM001")||o.players[0],l=o.players.find(d=>d.id==="RDM003"),u=o.players.find(d=>d.id==="RDM006"),c=[r,l,u].filter(Boolean);return`
    ${o.loadError?`<div class="infoBanner"><span>${i(o.loadError)}</span><button type="button" class="btnSecondary btnSm" id="btnRetrySync">Retry</button></div>`:""}

    <section class="heroBannerCard">
      <div class="heroPhotoLayer" aria-hidden="true">
        <img src="${i(w.heroImagePath)}" alt="" referrerPolicy="no-referrer">
      </div>
      <div class="heroBannerGrid">
        <div class="heroBannerInner">
          <div class="heroBannerTop">
            <img class="heroBannerLogo" src="${i(z())}" alt="RDM Official Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
            <div class="heroBannerCopy">
              <span class="heroEyebrow">OFFICIAL CRICKET CLUB · EST. ${i(w.founded)}</span>
              <h1 class="heroDisplayTitle">${i(w.orgName)}</h1>
              <p>${i(w.motto)}</p>
            </div>
          </div>
          <div class="heroBannerBottom">
            <div class="heroBannerMeta">
              <span>${i(w.locationLabel)}</span>
              <span aria-hidden="true">·</span>
              <span>Limited Overs &amp; T20</span>
            </div>
            <div class="heroToolbarActions">
              <button type="button" class="heroGhostBtn" data-open-subpage="news">Team News</button>
              <button type="button" class="heroPrimaryBtn" data-public-tab="squad">Explore Squad</button>
            </div>
          </div>
        </div>
        <aside class="heroDossierCard" aria-label="Club Almanac">
          <div class="heroDossierHead">
            <span>Official Almanac</span>
            <strong>RDM · ${i(w.founded)}</strong>
          </div>
          <div class="heroDossierStats">
            <div>
              <strong>2× MPL</strong>
              <span>Champions</span>
            </div>
            <div>
              <strong class="num">${o.players.length}</strong>
              <span>Active Roster</span>
            </div>
            <div>
              <strong>T20 / LO</strong>
              <span>Formats</span>
            </div>
            <div>
              <strong>Rehan Akhtar</strong>
              <span>Captain (RA08)</span>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="kpiStripGrid" aria-label="Team overview metrics">
      <button type="button" class="kpiCardBtn" data-public-tab="squad">
        <div>
          <strong class="kpiValue num">${o.players.length}</strong>
          <span class="kpiLabel">Squad Players</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${J("squad")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-open-subpage="honours">
        <div>
          <strong class="kpiValue num">${o.honours.length}</strong>
          <span class="kpiLabel">Team Honours</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${kt("honours")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="matches">
        <div>
          <strong class="kpiValue num">${o.matches.length}</strong>
          <span class="kpiLabel">Matches</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${J("matches")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="gallery">
        <div>
          <strong class="kpiValue num">${o.gallery.length}</strong>
          <span class="kpiLabel">Gallery Photos</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${J("gallery")}</span>
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
          ${e||t?Pt(e||t):'<p class="sectionSub" style="margin-top:6px;">No upcoming match has been scheduled yet. Check back or contact team management.</p>'}
        </div>
      </article>

      <article class="surfaceCard">
        <div>
          <div class="sectionHeader" style="margin-bottom:12px;">
            <div>
              <span class="sectionKicker">Official Dispatch</span>
              <h2 class="sectionTitle">${s?i(h(s.title||"Team Update")):"Team Announcements"}</h2>
            </div>
            <button type="button" class="btnGhost btnSm" data-open-subpage="updates">All Updates ›</button>
          </div>
          ${s?`
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${i(h(s.text||""))}</p>
            ${s.date?`<p class="sectionSub num" style="margin-top:8px;">Published ${i(s.date)}</p>`:""}
          `:'<p class="sectionSub">Official news, fixtures, and team notices appear here when posted by team management.</p>'}
        </div>
        ${a!=null&&a.url&&W(a.url)?`
          <div style="margin-top:14px;">
            <button type="button" class="btnSecondary btnSm" data-ext-url="${i(W(a.url))}">Open Link ↗</button>
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
        ${c.map(d=>{const b=ze(d.image);return`
            <button type="button" class="leaderCard" data-open-player="${i(d.id)}">
              <img class="${b.cls}" src="${i(b.src)}" alt="${i(d.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
              <div>
                <div class="leaderCardMeta">${i(h(d.role))}</div>
                <div class="leaderCardTitle">${i(h(d.name))}</div>
                ${d.detail?`<div class="leaderCardSub">${i(h(d.detail))}</div>`:""}
              </div>
            </button>
          `}).join("")}
      </div>
    </section>
  `}function Pt(e){const t=h(e.matchStatus||e.status||"Match"),a=[e.date,e.time,e.venueName||e.venue].filter(Boolean).map(h).join(" · ");return`
    <div>
      <div class="matchCardHead">
        <strong>RDM vs ${i(h(e.opponent||"Opponent"))}</strong>
        <span class="matchStatusText">${i(t)}</span>
      </div>
      ${a?`<div class="num" style="font-size:0.78rem;color:var(--ink-muted);margin-bottom:8px;">${i(a)}</div>`:""}
      ${e.ourScore||e.oppScore?`
        <div class="matchScoreRow num">
          <span>RDM: ${i(e.ourScore||"—")}</span>
          <span>${i(h(e.opponent||"Opp"))}: ${i(e.oppScore||"—")}</span>
        </div>
      `:""}
      ${e.result||e.note?`<p class="richText" style="margin:6px 0 0;font-size:0.84rem;color:var(--ink-secondary);">${i(h(e.result?`${e.result}${e.margin?" · "+e.margin:""}`:e.note))}</p>`:""}
      ${e.potm?`<p style="margin:6px 0 0;font-size:0.8rem;font-weight:700;color:var(--brand-text);">Player of the Match: ${i(h(e.potm))}</p>`:""}
    </div>
  `}function La(){const e=p.squadQuery.trim().toLowerCase(),t=o.players.filter(a=>{const n=String(a.role||"").toUpperCase();return p.squadFilter==="ALL"||p.squadFilter==="LEADERS"&&(n.includes("CAPTAIN")||n.includes("KEEPER"))||p.squadFilter==="ALLROUNDER"&&n.includes("ALL-ROUNDER")||p.squadFilter==="BATSMAN"&&n.includes("BATSMAN")&&!n.includes("ALL-ROUNDER")?e?`${a.name} ${a.role} ${a.detail} ${a.id} ${pe[a.id]||""} ${a.jersey||""}`.toLowerCase().includes(e):!0:!1});return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Official Roster</span>
        <h2 class="sectionTitle">RDM Squad</h2>
        <p class="sectionSub"><span class="num">${o.players.length}</span> registered players</p>
      </div>
    </div>

    <input id="squadSearchInput" class="searchInput" type="search" placeholder="Search player name, role, or jersey..." value="${i(p.squadQuery)}">

    <div class="filterRow">
      ${[["ALL","All Players"],["LEADERS","Leadership"],["ALLROUNDER","All-Rounders"],["BATSMAN","Batsmen"]].map(([a,n])=>`<button type="button" class="segTab ${p.squadFilter===a?"active":""}" data-squad-filter="${a}">${n}</button>`).join("")}
    </div>

    ${t.length?`
      <div class="squadGrid">
        ${t.map(a=>{const n=pe[a.id]||a.id,s=ze(a.image);return`
            <button type="button" class="playerCard" data-open-player="${i(a.id)}">
              <img class="playerCardAvatar ${s.cls}" src="${i(s.src)}" alt="${i(a.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
              <div class="playerCardBody">
                <span class="metaCode">${i(n)}${a.jersey?" · #"+i(a.jersey):""}</span>
                <h3>${i(h(a.name))}</h3>
                <div class="playerCardRole">${i(h(a.role))}</div>
                ${a.detail?`<div class="playerCardDetail">${i(h(a.detail))}</div>`:""}
              </div>
              <span class="chevron" aria-hidden="true">›</span>
            </button>
          `}).join("")}
      </div>
    `:'<div class="emptyState">No players match your current filter.</div>'}
  `}function Ia(){let e="";return p.matchesSubTab==="fixtures"?e=o.matches.length?`<div class="stackList">${o.matches.map(t=>`<article class="surfaceCard">${Pt(t)}</article>`).join("")}</div>`:'<div class="emptyState">No fixtures or match results added yet.</div>':p.matchesSubTab==="xi"?e=$t():e=Ct(),`
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
  `}function $t(){return o.lineups.length?`<div class="stackList">${o.lineups.map(e=>`
    <article class="surfaceCard">
      <h3 style="margin:0 0 4px;font-size:1.25rem;">${i(h(e.title||"Playing XI"))}</h3>
      ${e.match?`<p style="margin:0 0 10px;font-size:0.8125rem;color:var(--ink-muted);">${i(h(e.match))}</p>`:""}
      <div class="xiGrid num">
        ${(e.players||[]).map((t,a)=>{const n=o.players.find(r=>r.id===t),s=`${a+1}. ${h((n==null?void 0:n.name)||t)}`;return n?`<button type="button" class="xiPlayerBtn" data-open-player="${i(t)}">${i(s)}</button>`:`<div style="padding:6px 8px;">${i(s)}</div>`}).join("")}
      </div>
      ${(e.subs||[]).length?`
        <p style="margin:10px 0 0;font-size:0.78rem;color:var(--ink-muted);">
          Substitutes: ${e.subs.map(t=>{var a;return i(h(((a=o.players.find(n=>n.id===t))==null?void 0:a.name)||t))}).join(" · ")}
        </p>
      `:""}
    </article>
  `).join("")}</div>`:'<div class="emptyState">No Playing XI published yet.</div>'}function Ct(){return o.tournaments.length>0||o.records.length>0||o.opponents.length>0?`
    <div class="stackList">
      ${o.tournaments.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">${i(h(t.status||"Tournament"))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${i(h(t.name||"Tournament"))}</h3>
          <p class="sectionSub num">${[t.season,t.position,t.venueName||t.venue].filter(Boolean).map(h).join(" · ")}</p>
          ${t.fixtures?`<p class="richText" style="margin:8px 0 0;font-size:0.82rem;color:var(--ink-secondary);">${i(t.fixtures)}</p>`:""}
        </article>
      `).join("")}
      ${o.records.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">${i(h(t.season||"Team Record"))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${i(h(t.title||"Record"))}</h3>
          <p style="margin:0;font-weight:700;color:var(--brand-text);" class="num">${i(h(t.value||""))}${t.player?" · "+i(h(t.player)):""}</p>
        </article>
      `).join("")}
      ${o.opponents.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">Head-to-Head</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">RDM vs ${i(h(t.name||"Opponent"))}</h3>
          <p class="sectionSub num">${Number(t.played||0)} Played · ${Number(t.won||0)} Won · ${Number(t.lost||0)} Lost</p>
        </article>
      `).join("")}
    </div>
  `:'<div class="emptyState">No tournaments or team records recorded yet.</div>'}function Rt(){return`
    <div class="honoursGrid">
      ${o.honours.map(e=>`
        <article class="honourCard">
          <button type="button" class="honourMediaBtn" data-zoom-src="${i(e.image||z())}" data-zoom-cap="${i(`${e.year} · ${e.title} — ${e.sub}`)}">
            <img src="${i(e.image||z())}" alt="${i(e.title)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
          </button>
          <div class="honourCardBody">
            <div class="honourCardTop">
              <span class="metaCode">${i(e.year)}</span>
              <span class="honourTapHint">Tap to view full</span>
            </div>
            <h3 class="honourCardTitle">${i(h(e.title))}</h3>
            <p class="honourCardSub">${i(h(e.sub))}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `}function Na(){const e=["ALL","TEAM PHOTOS","MEMORIES","UPDATES"],t=o.gallery.filter(a=>{const n=String(a.album||"MEMORIES").toUpperCase();return p.galleryAlbum==="ALL"?!["MATCHES","TROPHIES"].includes(n):n===p.galleryAlbum});return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Team Memories</span>
        <h2 class="sectionTitle">Team Gallery</h2>
      </div>
    </div>

    <div class="filterRow">
      ${e.map(a=>`<button type="button" class="segTab ${p.galleryAlbum===a?"active":""}" data-gallery-album="${a}">${i(h(a))}</button>`).join("")}
    </div>

    ${t.length?`
      <div class="galleryGrid">
        ${t.map((a,n)=>`
          <button type="button" class="galleryTile" data-zoom-gallery="${n}">
            <img src="${i(a.image)}" alt="${i(a.caption||"RDM Memory")}" referrerPolicy="no-referrer">
            <div class="galleryTileCaption">
              <strong>${i(h(a.album||"Memories"))}</strong>
              <span>${i(h(a.caption||"RDM Memory"))}</span>
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
    ${Rt()}
  `}function Ua(){const e=dt();return`
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
          <p class="sectionSub">Active: ${i(At(p.theme))}</p>
        </div>
      </div>
      <div class="themeGrid">
        ${Ge.map(t=>`
          <button type="button" class="themeChoiceRow ${p.theme===t.id?"active":""}" data-quick-theme="${t.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${t.swatches.map(a=>`<span style="background:${a}"></span>`).join("")}
            </div>
            <div class="themeChoiceCopy">
              <strong>${i(t.label)}</strong>
              <span>${i(t.desc)}</span>
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
        <button type="button" class="linkActionBtn" data-ext-url="${i(w.captainContactUrl)}">WhatsApp Captain ↗</button>
        ${o.socials.filter(t=>W(t.url)).map(t=>`
          <button type="button" class="linkActionBtn" data-ext-url="${i(W(t.url))}">${i(h(t.displayName||t.name))} ↗</button>
        `).join("")}
      </div>
    </section>

    <section class="surfaceCard">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Official App · v${i(Pe())}${o.otaBuild?` · OTA #${o.otaBuild}`:""}</span>
          <h3 class="sectionTitle" style="font-size:1.22rem;">App &amp; Sync</h3>
          <p class="sectionSub">${Te()?`Installed Build v${i(o.nativeVersionName||x.versionName)} · Auto-Update Active`:"Sync live team data or open the Android App & Updates centre"}</p>
        </div>
        <div class="rowActions">
          <button type="button" class="btnPrimary btnSm" data-open-subpage="download">App &amp; Updates ›</button>
          <button type="button" class="btnSecondary btnSm" id="btnRefreshClub">Sync Team Data</button>
          ${e?'<button type="button" class="btnSecondary btnSm" id="btnInstallWebApp">Install Web App</button>':""}
        </div>
      </div>
    </section>
  `}function Oa(){const e=o.players.find(u=>u.id===p.detailPlayerId);if(!e)return`
      ${ce({title:"Player Profile",showBack:!0,showPublicNav:!0})}
      <div class="tabContent fullPageContent">
        <div class="emptyState">Player record not found.</div>
      </div>
      ${he()}
    `;const t=ze(e.image),a=o.stats.find(u=>u.playerId===e.id),n=o.availability.find(u=>u.playerId===e.id),s=pe[e.id]||e.id,r=(Array.isArray(e.socials)?e.socials:[]).filter(u=>W((u==null?void 0:u.url)||u)),l=a&&(Number(a.matches)>0||Number(a.runs)>0||Number(a.wickets)>0||Number(a.highScore)>0);return`
    ${ce({title:h(e.name),showBack:!0,showPublicNav:!0})}
    <div class="tabContent fullPageContent">
      <section class="fullProfileHero">
        <img class="fullProfileAvatar ${t.cls}" src="${i(t.src)}" alt="${i(e.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${w.logoPath}'">
        <div>
          <span class="metaCode">${i(s)} · ${i(e.id)}${e.jersey?" · #"+i(e.jersey):""}</span>
          <h1 class="fullProfileName">${i(h(e.name))}</h1>
          <div class="fullProfileRole">${i(h(e.role))}</div>
          ${e.detail?`<p class="fullProfileMeta richText" style="margin:6px auto 0;">${i(h(e.detail))}</p>`:""}
          ${e.nick?`<p class="sectionSub" style="margin-top:6px;">Nickname: ${i(h(e.nick))}</p>`:""}
          ${n!=null&&n.status?`<p class="sectionSub" style="margin-top:4px;font-weight:700;color:var(--brand-text);">Match Status: ${i(h(n.status))}</p>`:""}
        </div>
        <div>
          <button type="button" class="btnPrimary btnSm" id="btnDownloadDetailCard">Download Player Card</button>
        </div>
      </section>

      ${e.bio?`
        <section class="surfaceCard">
          <span class="sectionKicker">About Player</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:6px;">Player Biography</h2>
          <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.9rem;">${i(h(e.bio))}</p>
        </section>
      `:""}

      <section class="surfaceCard">
        <span class="sectionKicker">Performance</span>
        <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Verified Career Statistics</h2>
        ${l?`
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

      ${r.length?`
        <section class="surfaceCard">
          <span class="sectionKicker">Connect</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Official Social Links</h2>
          <div class="linkRowWrap">
            ${r.map((u,c)=>{const d=W(typeof u=="string"?u:u.url),b=typeof u=="string"?`Social ${c+1}`:u.name||`Social ${c+1}`;return`<button type="button" class="linkActionBtn" data-ext-url="${i(d)}">${i(h(b))} ↗</button>`}).join("")}
          </div>
        </section>
      `:""}
    </div>
    ${he()}
  `}function Ba(){const t={news:"Team News",updates:"Official Updates",records:"Team Records",tournaments:"Tournaments & H2H",xi:"Playing XI",honours:"Team Honours",socials:"Channels & Contact",about:"About RDM",download:"Get Android App"}[p.morePage]||"Team Info";let a="";if(p.morePage==="news")a=o.news.length?`<div class="stackList">${o.news.map(n=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${n.pinned?"Pinned Announcement":"Team News"}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${i(h(n.title||"Announcement"))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${i(h(n.text||""))}</p>
          </article>
        `).join("")}</div>`:'<div class="emptyState">No team news announcements posted yet.</div>';else if(p.morePage==="updates")a=o.updates.length?`<div class="stackList">${o.updates.map(n=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${i(h(n.category||"Official Update"))}${n.date?" · "+i(n.date):""}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${i(h(n.title||"Update"))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${i(h(n.text||""))}</p>
            ${n.url&&W(n.url)?`<div style="margin-top:12px;"><button type="button" class="btnSecondary btnSm" data-ext-url="${i(W(n.url))}">Open Link ↗</button></div>`:""}
          </article>
        `).join("")}</div>`:'<div class="emptyState">No official updates published yet.</div>';else if(p.morePage==="xi")a=$t();else if(p.morePage==="records")a=o.records.length?`<div class="stackList">${o.records.map(n=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${i(h(n.season||"Team Record"))}</span>
            <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:4px;">${i(h(n.title||"Record"))}</h3>
            <p style="margin:0;font-weight:700;color:var(--brand-blue);" class="num">${i(h(n.value||""))}${n.player?" · "+i(h(n.player)):""}</p>
          </article>
        `).join("")}</div>`:'<div class="emptyState">No team records recorded yet.</div>';else if(p.morePage==="tournaments")a=Ct();else if(p.morePage==="honours")a=Rt();else if(p.morePage==="socials")a=`
      <div class="surfaceCard">
        <span class="sectionKicker">Direct Contact</span>
        <h3 class="sectionTitle" style="font-size:1.3rem;margin-bottom:8px;">Team Channels &amp; Captain</h3>
        <div class="linkRowWrap">
          <button type="button" class="linkActionBtn" data-ext-url="${i(w.captainContactUrl)}">WhatsApp Captain ↗</button>
          ${o.socials.filter(n=>W(n.url)).map(n=>`
            <button type="button" class="linkActionBtn" data-ext-url="${i(W(n.url))}">${i(h(n.displayName||n.name))} ↗</button>
          `).join("")}
        </div>
      </div>
    `;else if(p.morePage==="about")a=`
      <div class="surfaceCard">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
          <img src="${i(z())}" alt="RDM Logo" referrerPolicy="no-referrer" style="width:68px;height:68px;border-radius:50%;background:#FFFFFF;border:1.5px solid var(--border-strong);object-fit:cover;flex-shrink:0;">
          <div>
            <span class="sectionKicker">Est. ${i(w.founded)} · ${i(w.locationLabel)}</span>
            <h3 class="sectionTitle">${i(h(w.orgName))}</h3>
            <p class="sectionSub" style="font-weight:700;color:var(--brand-text);">${i(w.motto)}</p>
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
    `;else{const n=dt(),s=$e(),r=s.otaBuild?` · OTA #${s.otaBuild}`:"";a=`
      <div class="surfaceCard">
        <span class="sectionKicker">Official Android APK · v${i(s.latestVersion)}</span>
        <h3 class="sectionTitle" style="font-size:1.35rem;margin-bottom:8px;">RDM Official Android App</h3>
        <p style="margin:0 0 12px;color:var(--ink-secondary);font-size:0.9rem;">
          ${Te()?`You are running the native RDM Official Android App (v${i(s.currentVersion)}${i(r)}). Updates apply silently in the background or install right inside the app without uninstalling.`:"Download the latest RDM Official Android APK directly to your phone. All updates install smoothly in place while preserving your data."}
        </p>
        ${s.hasUpdate?`<div class="infoBanner" style="margin-bottom:12px;"><span>Update v${i(s.latestVersion)} ready — ${i(s.notes)}</span></div>`:""}
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;">
          <span class="metaCode">${Te()?`Installed: v${i(s.currentVersion)}${i(r)}`:`Web Version: v${i(s.currentVersion)}`}</span>
          <span class="metaCode">Latest APK: v${i(s.latestVersion)}</span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          <button type="button" class="btnPrimary btnSm" id="btnDownloadLatestApk">${X()?s.hasUpdate?`Update In-Place (v${i(s.latestVersion)})`:`Reinstall APK (v${i(s.latestVersion)})`:`Download Latest APK (v${i(s.latestVersion)})`}</button>
          <button type="button" class="btnSecondary btnSm" id="btnCheckAppUpdate">Check for Update</button>
          ${n?'<button type="button" class="btnSecondary btnSm" id="btnInstallWebApp">Install Web App</button>':""}
          <button type="button" class="btnSecondary btnSm" data-public-tab="home">Back to Home</button>
        </div>
      </div>
    `}return`
    ${ce({title:t,showBack:!0,showPublicNav:!0})}
    <div class="tabContent fullPageContent">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Rehan Dominators Mahuawan</span>
          <h1 class="sectionTitle">${i(t)}</h1>
        </div>
      </div>
      ${a}
    </div>
    ${he()}
  `}function Et(){return`
    ${ce({title:"RDM Admin Panel",showBack:!0,showPublicNav:!1,rightActionHtml:'<button type="button" class="topActionBtn" id="btnPortalPublicView">Public View</button>'})}
    <div class="loginCardWrap">
      <div class="surfaceCard">
        <div class="loginLogoBox">
          <img src="${i(z())}" alt="RDM Crest" referrerPolicy="no-referrer">
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
  `}function xa(){return Mt()}function Fa(){if(!K())return Et();let e="";return p.adminTab==="overview"?e=`
      <div class="kpiStripGrid">
        <div class="factBox"><strong class="num">${o.players.length}</strong><span>Squad Players</span></div>
        <div class="factBox"><strong class="num">${o.matches.length}</strong><span>Matches</span></div>
        <div class="factBox"><strong class="num">${o.news.length+o.updates.length}</strong><span>News &amp; Updates</span></div>
        <div class="factBox"><strong class="num">${o.gallery.length}</strong><span>Gallery Photos</span></div>
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
            <span class="sectionKicker">APK Admin v${i(Pe())} · ${oe()?"Firebase Cloud Sync Live":"Local Admin Unlocked"}</span>
            <h3 class="sectionTitle" style="font-size:1.22rem;">Website, PWA &amp; Android APK Connected</h3>
            <p class="sectionSub">${oe()?"Every change published here saves to Firebase and updates Website, PWA, and all installed Android APKs in real time.":"APK Admin unlocked with password. Connect Firebase Cloud Sync once if live cloud rules require signed-in Firebase Admin Auth."}</p>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            ${oe()?"":'<button type="button" class="btnPrimary btnSm" id="btnAdminConnectFirebase">Connect Cloud Sync</button>'}
            <button type="button" class="btnSecondary btnSm" data-admin-action="editAppConfig">Configure APK</button>
          </div>
        </div>
      </div>
    `:p.adminTab==="squad"?e=`
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:8px;">
          <div><h3 class="sectionTitle" style="font-size:1.25rem;">Manage Squad (Add, Edit, Stats, Remove)</h3></div>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addPlayer">+ Add Player</button>
        </div>
        <div>
          ${o.players.map(t=>{var n;const a=((n=o.availability.find(s=>s.playerId===t.id))==null?void 0:n.status)||"NOT SET";return`
              <div class="listRowItem">
                <div style="min-width:0;">
                  <strong style="display:block;font-size:0.92rem;">${i(h(t.name))}</strong>
                  <span class="num" style="font-size:0.76rem;color:var(--ink-muted);">${i(t.id)} · ${i(h(a))}</span>
                </div>
                <div class="rowActions">
                  <button type="button" class="btnSecondary btnSm" data-admin-edit-player="${i(t.id)}">Edit</button>
                  <button type="button" class="btnSecondary btnSm" data-admin-edit-stats="${i(t.id)}">Stats</button>
                  <button type="button" class="btnSecondary btnSm" data-admin-avail="${i(t.id)}">Avail</button>
                  <button type="button" class="btnDanger btnSm" data-admin-remove-player="${i(t.id)}">Remove</button>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    `:p.adminTab==="matches"?e=`
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Matches (${o.matches.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addMatch">+ Match</button>
        </div>
        ${o.matches.length?o.matches.map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">RDM vs ${i(h(t.opponent||"Opponent"))}</strong>
              <span class="num" style="font-size:0.76rem;color:var(--ink-muted);">${i(h(t.matchStatus||t.status||"Match"))} · ${i(t.date||"Date TBA")}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-match="${i(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Matches:${i(t._docId)}">Delete</button>
            </div>
          </div>
        `).join(""):'<p class="sectionSub">No matches yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Playing XI (${o.lineups.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addLineup">+ Lineup</button>
        </div>
        ${o.lineups.length?o.lineups.map(t=>`
          <div class="listRowItem">
            <div>
              <strong style="display:block;font-size:0.9rem;">${i(h(t.title||"Playing XI"))}</strong>
              <span style="font-size:0.76rem;color:var(--ink-muted);">${i(h(t.match||""))}</span>
            </div>
            <button type="button" class="btnDanger btnSm" data-admin-del="PlayingXI:${i(t._docId)}">Delete</button>
          </div>
        `).join(""):'<p class="sectionSub">No lineups yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Tournaments &amp; Records (${o.tournaments.length+o.records.length})</h3>
          <div style="display:flex;gap:6px;">
            <button type="button" class="btnPrimary btnSm" data-admin-action="addTournament">+ Tournament</button>
            <button type="button" class="btnSecondary btnSm" data-admin-action="addRecord">+ Record</button>
          </div>
        </div>
        ${[...o.tournaments.map(t=>({_col:"Tournaments",_docId:t._docId,title:t.name||"Tournament",sub:[t.season,t.status,t.position].filter(Boolean).join(" · ")})),...o.records.map(t=>({_col:"TeamRecords",_docId:t._docId,title:t.title||"Record",sub:[t.value,t.player,t.season].filter(Boolean).join(" · ")}))].map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${i(h(t.title))}</strong>
              <span style="font-size:0.75rem;color:var(--ink-muted);">${i(t._col)}${t.sub?" · "+i(h(t.sub)):""}</span>
            </div>
            <button type="button" class="btnDanger btnSm" data-admin-del="${i(t._col)}:${i(t._docId)}">Delete</button>
          </div>
        `).join("")||'<p class="sectionSub">No tournaments or records added yet.</p>'}
      </div>
    `:e=`
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">News &amp; Official Updates</h3>
          <div style="display:flex;gap:6px;">
            <button type="button" class="btnPrimary btnSm" data-admin-action="addNews">+ News</button>
            <button type="button" class="btnSecondary btnSm" data-admin-action="addUpdate">+ Update</button>
          </div>
        </div>
        ${[...o.news.map(t=>({...t,_col:"News"})),...o.updates.map(t=>({...t,_col:"Updates"}))].map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${t.pinned?"[Pinned] ":""}${i(h(t.title||"Item"))}</strong>
              <span style="font-size:0.75rem;color:var(--ink-muted);">${i(t._col)}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-pin="${i(t._col)}:${i(t._docId)}:${t.pinned?"0":"1"}">${t.pinned?"Unpin":"Pin"}</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="${i(t._col)}:${i(t._docId)}">Delete</button>
            </div>
          </div>
        `).join("")||'<p class="sectionSub">No news or updates yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Team Honours (${o.honours.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addHonour">+ Honour</button>
        </div>
        ${o.honours.length?o.honours.map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${i(t.year||"")} · ${i(h(t.title||"Honour"))}</strong>
              <span style="font-size:0.75rem;color:var(--ink-muted);">${i(h(t.sub||""))}</span>
            </div>
            <button type="button" class="btnDanger btnSm" data-admin-del="Honours:${i(t._docId)}">Delete</button>
          </div>
        `).join(""):'<p class="sectionSub">No honours yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Gallery Photos (${o.gallery.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addGallery">+ Photo</button>
        </div>
        ${o.gallery.length?o.gallery.map(t=>`
          <div class="listRowItem">
            <div style="display:flex;align-items:center;gap:10px;min-width:0;">
              <img src="${i(t.image)}" alt="" referrerPolicy="no-referrer" style="width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0;">
              <div style="min-width:0;">
                <strong style="display:block;font-size:0.86rem;">${i(h(t.caption||"Memory"))}</strong>
                <span style="font-size:0.75rem;color:var(--ink-muted);">${i(h(t.album||"MEMORIES"))}</span>
              </div>
            </div>
            <button type="button" class="btnDanger btnSm" data-admin-del="Gallery:${i(t._docId)}">Delete</button>
          </div>
        `).join(""):'<p class="sectionSub">No gallery photos yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Social Channels</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addSocial">+ Social</button>
        </div>
        ${o.socials.map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.88rem;">${i(h(t.displayName||t.name))}</strong>
              <span style="font-size:0.74rem;color:var(--ink-muted);word-break:break-all;">${i(t.url||"No link set")}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-social="${i(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Socials:${i(t._docId)}">Delete</button>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:8px;">
          <div>
            <h3 class="sectionTitle" style="font-size:1.25rem;">App &amp; APK Update Settings</h3>
            <p class="sectionSub">Latest APK: v${i(Pe())} (Code ${i(String(o.appVersionCode||x.versionCode))})</p>
          </div>
          <button type="button" class="btnPrimary btnSm" data-admin-action="editAppConfig">Edit APK Update</button>
        </div>
        <p style="margin:0;font-size:0.78rem;color:var(--ink-muted);word-break:break-all;">APK URL Configured</p>
      </div>
    `,`
    ${ce({title:"Admin Console",showBack:!0,showPublicNav:!0,rightActionHtml:'<button type="button" class="topActionBtn" id="btnLogout">Logout</button>'})}

    <div class="tabContent fullPageContent">
      ${oe()?"":`
        <div class="infoBanner">
          <span><strong>Local Admin Mode:</strong> Connect Firebase Cloud Sync once if deleting or saving records returns a permission error.</span>
          <button type="button" class="btnPrimary btnSm" id="btnAdminConnectFirebaseBanner">Connect Sync</button>
        </div>
      `}
      <div class="filterRow">
        ${[["overview","Overview"],["squad","Squad & Stats"],["matches","Matches & XI"],["content","Content & Media"]].map(([t,a])=>`<button type="button" class="segTab ${p.adminTab===t?"active":""}" data-admin-tab="${t}">${a}</button>`).join("")}
      </div>
      ${e}
    </div>
    ${he()}
  `}function Mt(){let e="";return p.publicTab==="home"?e=Da():p.publicTab==="squad"?e=La():p.publicTab==="matches"?e=Ia():p.publicTab==="gallery"?e=Na():e=Ua(),`
    ${ce({title:"RDM Official",showBack:!1,showPublicNav:!0})}
    <div class="tabContent">${e}</div>
    ${he()}
    ${Ta()}
  `}function P(){const e=document.getElementById("appViewport");if(!e)return;let t="";p.screen==="playerDetail"?t=Oa():p.screen==="subpage"?t=Ba():p.screen==="playerPortal"?t=xa():p.screen==="portalAuth"?t=Et():p.screen==="admin"?t=Fa():t=Mt(),e.innerHTML=t+Ma(),_a()}function _a(){var r,l,u,c,d,b,v,g,C,$,R,y,f,L,T,I,B,V;const e=m=>document.getElementById(m);(r=e("btnStepBack"))==null||r.addEventListener("click",()=>{wt()||H({screen:"public",publicTab:"home"})}),(l=e("btnOpenDrawer"))==null||l.addEventListener("click",()=>{Z(!0)});const t=e("drawerOverlay"),a=e("drawerPanel");if(t==null||t.addEventListener("click",m=>{m.target.id==="drawerOverlay"&&Z(!1)}),t&&a){let m=0,S=0,k=!1;a.addEventListener("touchstart",D=>{!p.drawerOpen||D.touches.length!==1||(m=D.touches[0].clientX,S=0,k=!0,t.classList.add("dragging"))},{passive:!0}),a.addEventListener("touchmove",D=>{if(!k||D.touches.length!==1)return;const q=D.touches[0].clientX-m;S=Math.min(0,q),a.style.transform=`translateX(${S}px)`},{passive:!0});const E=()=>{k&&(k=!1,t.classList.remove("dragging"),a.style.transform="",S<=-68&&Z(!1))};a.addEventListener("touchend",E,{passive:!0}),a.addEventListener("touchcancel",E,{passive:!0})}(u=e("btnPickTheme"))==null||u.addEventListener("click",()=>{it({currentTheme:p.theme,onSelectTheme:ge})}),(c=e("btnDrawerTheme"))==null||c.addEventListener("click",()=>{Z(!1),it({currentTheme:p.theme,onSelectTheme:ge})}),document.querySelectorAll("[data-quick-theme]").forEach(m=>{m.addEventListener("click",()=>ge(m.dataset.quickTheme))}),(d=e("btnBrandHome"))==null||d.addEventListener("click",()=>{H({screen:"public",publicTab:"home"})}),(b=e("btnPortalPublicView"))==null||b.addEventListener("click",()=>{H({screen:"public",publicTab:"home"})}),(v=e("btnReturnPortal"))==null||v.addEventListener("click",()=>{Z(!1)});const n=()=>{Z(!1),H({screen:K()?"admin":"portalAuth",adminTab:"overview"})};(g=e("btnOpenAdminPortal"))==null||g.addEventListener("click",n),(C=e("btnFooterAdminPortal"))==null||C.addEventListener("click",n),($=e("btnDownloadLatestApk"))==null||$.addEventListener("click",()=>{const m=$e();if(X()){Dt(m);return}pt(m.apkUrl||ke()),A(`Downloading RDM Official APK v${m.latestVersion}...`)}),(R=e("btnCheckAppUpdate"))==null||R.addEventListener("click",async()=>{var S;A("Checking for latest update...");const m=await Ie();if(P(),(S=m==null?void 0:m.otaResult)!=null&&S.updated){A(`App updated silently to OTA v${m.otaResult.otaVersion||""}`);return}await we(!0)}),(y=e("btnRefreshClub"))==null||y.addEventListener("click",async()=>{A("Syncing team data..."),await G(),P(),A("Team data synced")}),(f=e("btnRetrySync"))==null||f.addEventListener("click",async()=>{await G(),P()}),(L=e("btnInstallWebApp"))==null||L.addEventListener("click",async()=>{await Xt()&&(P(),A("App installed"))}),(T=e("btnLogout"))==null||T.addEventListener("click",()=>{Ue({title:"Confirm Sign Out",message:"Sign out of Admin Cloud Sync on this device?",confirmLabel:"Sign Out",danger:!0,onConfirm:async()=>{await ht(),p.drawerOpen=!1,p.portalMode==="admin"||(p.screen==="admin"?H({screen:"public",publicTab:"home"},{replace:!0}):P()),A("Signed out")}})}),(I=e("btnTogglePw"))==null||I.addEventListener("click",()=>{const m=e("loginPassword"),S=e("btnTogglePw");if(!m||!S)return;const k=m.type==="password";m.type=k?"text":"password",S.textContent=k?"Hide":"Show"}),(B=e("rdmPortalAuthForm"))==null||B.addEventListener("submit",async m=>{var k;m.preventDefault();const S=((k=e("loginPassword"))==null?void 0:k.value)||"";p.loginBusy=!0,p.loginError="",P();try{const E=await pa(S);p.loginBusy=!1,A(E.cloudSynced?"Admin Panel unlocked (Cloud Sync Live)":"Admin Panel unlocked"),H({screen:"admin",adminTab:"overview"},{replace:!0})}catch(E){p.loginBusy=!1;const D=String((E==null?void 0:E.code)||(E==null?void 0:E.message)||"");D==="INVALID_ADMIN_PASSWORD"||D==="PASSWORD_REQUIRED"?p.loginError="Incorrect Admin password. Please enter the correct password.":p.loginError="Unable to unlock Admin Panel. Please try again.",P()}}),document.querySelectorAll("[data-public-tab]").forEach(m=>{m.addEventListener("click",()=>{H({screen:"public",publicTab:m.dataset.publicTab})})}),document.querySelectorAll("[data-open-subpage]").forEach(m=>{m.addEventListener("click",()=>{H({screen:"subpage",morePage:m.dataset.openSubpage})})}),document.querySelectorAll("[data-open-player]").forEach(m=>{m.addEventListener("click",()=>{H({screen:"playerDetail",detailPlayerId:m.dataset.openPlayer})})}),(V=e("btnDownloadDetailCard"))==null||V.addEventListener("click",async()=>{const m=o.players.find(S=>S.id===p.detailPlayerId);if(m)try{await Pa({player:m,brandLogo:z()})}catch{A("Unable to export profile card")}});const s=e("squadSearchInput");s&&s.addEventListener("input",m=>{const S=m.target.selectionStart;p.squadQuery=m.target.value,P();const k=document.getElementById("squadSearchInput");if(k){k.focus();try{k.setSelectionRange(S,S)}catch{}}}),document.querySelectorAll("[data-squad-filter]").forEach(m=>{m.addEventListener("click",()=>{p.squadFilter=m.dataset.squadFilter,P()})}),document.querySelectorAll("[data-matches-sub]").forEach(m=>{m.addEventListener("click",()=>{p.matchesSubTab=m.dataset.matchesSub,P()})}),document.querySelectorAll("[data-gallery-album]").forEach(m=>{m.addEventListener("click",()=>{p.galleryAlbum=m.dataset.galleryAlbum,P()})}),document.querySelectorAll("[data-zoom-gallery]").forEach(m=>{m.addEventListener("click",()=>{const k=o.gallery.filter(E=>{const D=String(E.album||"MEMORIES").toUpperCase();return p.galleryAlbum==="ALL"?!["MATCHES","TROPHIES"].includes(D):D===p.galleryAlbum})[Number(m.dataset.zoomGallery)];k!=null&&k.image&&Oe(k.image,h(k.caption||"RDM Gallery"))})}),document.querySelectorAll("[data-zoom-src]").forEach(m=>{m.addEventListener("click",()=>Oe(m.dataset.zoomSrc,m.dataset.zoomCap||""))}),document.querySelectorAll("[data-ext-url]").forEach(m=>{m.addEventListener("click",()=>Qt(m.dataset.extUrl))}),Ha()}function Ha(){var e,t;K()&&(document.querySelectorAll("[data-admin-tab]").forEach(a=>{a.addEventListener("click",()=>{H({screen:"admin",adminTab:a.dataset.adminTab},{replace:!0})})}),document.querySelectorAll("[data-admin-action]").forEach(a=>{a.addEventListener("click",()=>Va(a.dataset.adminAction))}),document.querySelectorAll("[data-admin-edit-player]").forEach(a=>{a.addEventListener("click",()=>{const n=o.players.find(s=>s.id===a.dataset.adminEditPlayer);n&&U({title:`Edit ${h(n.name)}`,fields:[{name:"name",label:"Player Name",value:n.name,required:!0},{name:"role",label:"Role",value:n.role,required:!0},{name:"detail",label:"Playing Detail",type:"textarea",value:n.detail,rows:3},{name:"jersey",label:"Jersey Number",value:n.jersey||""},{name:"nick",label:"Nickname",value:n.nick||""},{name:"bio",label:"Bio",type:"textarea",value:n.bio||"",rows:3},{name:"photo",label:"Replace Photo (Optional)",type:"file"}],onSubmit:async s=>{const r={...s};s.photo&&(r.image=await ve(s.photo,700,.74)),await ya(n.id,r),P(),A("Player updated")}})})}),document.querySelectorAll("[data-admin-remove-player]").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.adminRemovePlayer,s=o.players.find(l=>l.id===n),r=async()=>{await Aa(n),P(),A("Player removed")};Ue({title:"Remove Player",message:`Remove ${h((s==null?void 0:s.name)||n)} (${n}) from the active RDM squad?`,confirmLabel:"Remove",danger:!0,onConfirm:r,onPermissionDenied:()=>re(r)})})}),(e=document.getElementById("btnAdminConnectFirebase"))==null||e.addEventListener("click",()=>{re()}),(t=document.getElementById("btnAdminConnectFirebaseBanner"))==null||t.addEventListener("click",()=>{re()}),document.querySelectorAll("[data-admin-edit-stats]").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.adminEditStats,s=o.players.find(l=>l.id===n),r=o.stats.find(l=>l.playerId===n)||{};U({title:`Stats · ${h((s==null?void 0:s.name)||n)}`,fields:[{name:"matches",label:"Matches",type:"number",value:r.matches||0},{name:"runs",label:"Runs",type:"number",value:r.runs||0},{name:"highScore",label:"High Score",type:"number",value:r.highScore||0},{name:"wickets",label:"Wickets",type:"number",value:r.wickets||0},{name:"fours",label:"Fours",type:"number",value:r.fours||0},{name:"sixes",label:"Sixes",type:"number",value:r.sixes||0},{name:"fifties",label:"50s",type:"number",value:r.fifties||0},{name:"hundreds",label:"100s",type:"number",value:r.hundreds||0},{name:"strikeRate",label:"Strike Rate",type:"number",value:r.strikeRate||0},{name:"economy",label:"Economy",type:"number",value:r.economy||0},{name:"bestBowling",label:"Best Bowling",value:r.bestBowling||""},{name:"season",label:"Season",value:r.season||"2027"}],onSubmit:async l=>{const u=c=>Number(c||0)||0;await j("PlayerStats",n,{playerId:n,matches:u(l.matches),runs:u(l.runs),highScore:u(l.highScore),wickets:u(l.wickets),fours:u(l.fours),sixes:u(l.sixes),fifties:u(l.fifties),hundreds:u(l.hundreds),strikeRate:u(l.strikeRate),economy:u(l.economy),bestBowling:String(l.bestBowling||"").trim(),season:String(l.season||"2027").trim()}),P(),A("Player stats saved")}})})}),document.querySelectorAll("[data-admin-avail]").forEach(a=>{a.addEventListener("click",()=>{var r;const n=a.dataset.adminAvail,s=((r=o.availability.find(l=>l.playerId===n))==null?void 0:r.status)||"AVAILABLE";U({title:`Availability · ${n}`,fields:[{name:"status",label:"Status",type:"select",value:s,options:["AVAILABLE","UNAVAILABLE"]}],onSubmit:async l=>{await fa(n,l.status),P(),A("Availability saved")}})})}),document.querySelectorAll("[data-admin-edit-match]").forEach(a=>{a.addEventListener("click",()=>{const n=o.matches.find(s=>s._docId===a.dataset.adminEditMatch);n&&Tt(n)})}),document.querySelectorAll("[data-admin-edit-social]").forEach(a=>{a.addEventListener("click",()=>{const n=o.socials.find(s=>s._docId===a.dataset.adminEditSocial);n&&U({title:"Edit Social Channel",fields:[{name:"name",label:"Platform",value:n.name||"",required:!0},{name:"displayName",label:"Display Title",value:n.displayName||n.name||""},{name:"url",label:"URL",value:n.url||"",placeholder:"https://..."}],onSubmit:async s=>{await j("Socials",n._docId,{name:s.name.toUpperCase(),displayName:s.displayName||s.name,url:s.url,icon:n.icon||"↗",order:n.order||9}),P(),A("Social updated")}})})}),document.querySelectorAll("[data-admin-pin]").forEach(a=>{a.addEventListener("click",async()=>{const n=String(a.dataset.adminPin||"").split(":"),s=n[0]||"",r=n[1]||"",l=n[2]||"0";if(!s||!r)return;const u=async()=>{await ka(s,r,l==="1"),P(),A(l==="1"?"Pinned to Home":"Unpinned")};try{await u()}catch(c){if(mt(c)){re(u);return}A((c==null?void 0:c.message)||"Pin update failed")}})}),document.querySelectorAll("[data-admin-del]").forEach(a=>{a.addEventListener("click",()=>{const n=String(a.dataset.adminDel||""),s=n.indexOf(":"),r=s>0?n.slice(0,s):"",l=s>0?n.slice(s+1):"";if(!r||!l){A("Invalid record identifier");return}const u=async()=>{await Sa(r,l),P(),A("Deleted")};Ue({title:"Delete Record",message:"Permanently delete this record from Firestore?",confirmLabel:"Delete",danger:!0,onConfirm:u,onPermissionDenied:()=>re(u)})})}))}function re(e){vt({title:"Connect Firebase Cloud Sync",subtitle:"Sign in with your Firebase Admin account to authorize this cloud write or delete, or publish updated firestore.rules in Firebase Console.",fields:[{name:"email",label:"Firebase Admin Email",type:"email",value:"rehanalam7124517@gmail.com",required:!0},{name:"password",label:"Firebase Password",type:"password",required:!0}],submitLabel:"Connect & Retry",onSubmit:async t=>{await ma(t.email,t.password),typeof e=="function"?await e():(P(),A("Firebase Cloud Sync connected"))}})}function U(e){let t=null;vt({...e,onSubmit:async a=>(t=a,await e.onSubmit(a)),onPermissionDenied:()=>re(async()=>{t&&typeof e.onSubmit=="function"&&await e.onSubmit(t)})})}function Tt(e=null){U({title:e?"Edit Match":"Add Match / Result",fields:[{name:"opponent",label:"Opponent Team",value:(e==null?void 0:e.opponent)||"",required:!0},{name:"matchStatus",label:"Status",type:"select",value:(e==null?void 0:e.matchStatus)||(e==null?void 0:e.status)||"UPCOMING",options:["UPCOMING","LIVE","COMPLETED","CANCELLED"]},{name:"date",label:"Date",type:"date",value:(e==null?void 0:e.date)||""},{name:"time",label:"Time",type:"time",value:(e==null?void 0:e.time)||""},{name:"venueName",label:"Venue / Ground",value:(e==null?void 0:e.venueName)||(e==null?void 0:e.venue)||""},{name:"ourScore",label:"RDM Score",value:(e==null?void 0:e.ourScore)||""},{name:"oppScore",label:"Opponent Score",value:(e==null?void 0:e.oppScore)||""},{name:"result",label:"Result (if completed)",value:(e==null?void 0:e.result)||""},{name:"potm",label:"Player of the Match",value:(e==null?void 0:e.potm)||""},{name:"note",label:"Match Notes",type:"textarea",value:(e==null?void 0:e.note)||"",placeholder:"Enter key match details (line breaks & spaces preserved)",rows:4}],onSubmit:async t=>{await j("Matches",(e==null?void 0:e._docId)||null,{...t,venue:t.venueName,status:t.matchStatus==="COMPLETED"?"RESULT":t.matchStatus,createdMs:(e==null?void 0:e.createdMs)||Date.now()}),P(),A("Match saved")}})}function Va(e){if(e==="addMatch")return Tt(null);if(e==="addNews")return U({title:"Add Team News",fields:[{name:"title",label:"Title",required:!0},{name:"text",label:"Announcement",type:"textarea",placeholder:"Write announcement (Enter for new lines & spaces preserved)",rows:5,required:!0},{name:"pinned",label:"Pin announcement",type:"checkbox"}],onSubmit:async t=>{await j("News",null,{title:t.title,text:t.text,pinned:!!t.pinned,createdMs:Date.now()}),P(),A("News added")}});if(e==="addUpdate")return U({title:"Add Official Update",fields:[{name:"category",label:"Category",type:"select",options:["WEBSITE","SOCIAL MEDIA","PLATFORM","ACCOUNT","FEATURE","OTHER"]},{name:"title",label:"Title",required:!0},{name:"text",label:"Description",type:"textarea",placeholder:"Write full update (Enter for new lines & spaces preserved)",rows:5,required:!0},{name:"url",label:"Optional Link",placeholder:"https://..."},{name:"pinned",label:"Pin to Home",type:"checkbox"}],onSubmit:async t=>{await j("Updates",null,{category:t.category,title:t.title,text:t.text,url:t.url,pinned:!!t.pinned,date:new Date().toISOString().slice(0,10),createdMs:Date.now()}),P(),A("Update saved")}});if(e==="addGallery")return U({title:"Add Gallery Photo",fields:[{name:"photo",label:"Select Image",type:"file",required:!0},{name:"caption",label:"Caption",value:"RDM Memory"},{name:"album",label:"Album",type:"select",value:"MEMORIES",options:["TEAM PHOTOS","MEMORIES","UPDATES"]}],onSubmit:async t=>{if(!t.photo)throw new Error("Image required");const a=await ve(t.photo,960,.72);await j("Gallery",null,{image:a,caption:t.caption,album:t.album,createdMs:Date.now()}),P(),A("Photo uploaded")}});if(e==="addPlayer"){const t=o.players.map(n=>Number(String(n.id).replace(/\D/g,""))).filter(Number.isFinite),a=`RDM${String(Math.max(17,...t)+1).padStart(3,"0")}`;return U({title:`Add Player (${a})`,fields:[{name:"name",label:"Full Name",required:!0},{name:"role",label:"Role",required:!0},{name:"detail",label:"Playing Style / Detail",type:"textarea",rows:3},{name:"jersey",label:"Jersey Number"},{name:"photo",label:"Profile Photo (Optional)",type:"file"}],onSubmit:async n=>{const s=n.photo?await ve(n.photo,700,.74):"";await j("TeamPlayers",a,{id:a,name:n.name.toUpperCase(),role:n.role.toUpperCase(),detail:n.detail.toUpperCase(),jersey:n.jersey,image:s,order:o.players.length+1,active:!0}),P(),A("Player added")}})}if(e==="addLineup")return U({title:"Publish Playing XI",fields:[{name:"title",label:"Title",value:"Playing XI",required:!0},{name:"match",label:"Match / Opponent"},{name:"players",label:"11 Player IDs (comma separated)",type:"textarea",value:"RDM001,RDM002,RDM003,RDM004,RDM005,RDM006,RDM007,RDM008,RDM009,RDM010,RDM011",rows:3},{name:"subs",label:"Substitutes (comma separated)",value:"RDM012,RDM013,RDM014,RDM015"}],onSubmit:async t=>{const a=r=>[...new Set(String(r||"").split(",").map(l=>l.trim().toUpperCase()).filter(l=>/^RDM\d{3}$/.test(l)))],n=a(t.players).slice(0,11),s=a(t.subs).filter(r=>!n.includes(r));if(n.length!==11)throw new Error("Playing XI requires 11 valid Player IDs");await j("PlayingXI",null,{title:t.title,match:t.match,players:n,subs:s,createdMs:Date.now()}),P(),A("Playing XI published")}});if(e==="addHonour")return U({title:"Add Team Honour",fields:[{name:"year",label:"Year",value:String(new Date().getFullYear()),required:!0},{name:"title",label:"Result (e.g. Winner)",required:!0},{name:"sub",label:"Tournament Name",required:!0}],onSubmit:async t=>{await j("Honours",null,{year:t.year,title:t.title,sub:t.sub,image:w.logoPath,order:o.honours.length+1}),P(),A("Honour saved")}});if(e==="addTournament")return U({title:"Add Tournament",fields:[{name:"name",label:"Tournament Name",required:!0},{name:"season",label:"Season / Year",value:String(new Date().getFullYear())},{name:"status",label:"Status",type:"select",options:["UPCOMING","ONGOING","COMPLETED"]},{name:"position",label:"Final Position"},{name:"venueName",label:"Venue"}],onSubmit:async t=>{await j("Tournaments",null,{name:String(t.name||"").trim(),season:String(t.season||"").trim(),status:String(t.status||"UPCOMING").trim(),position:String(t.position||"").trim(),venueName:String(t.venueName||"").trim(),venue:String(t.venueName||"").trim(),createdMs:Date.now()}),P(),A("Tournament added")}});if(e==="addRecord")return U({title:"Add Team Record",fields:[{name:"title",label:"Record Title",placeholder:"e.g. Highest Team Score",required:!0},{name:"value",label:"Record Value",placeholder:"e.g. 214/3 (20 Ov)",required:!0},{name:"player",label:"Player Name (Optional)"},{name:"season",label:"Season / Year",value:String(new Date().getFullYear())}],onSubmit:async t=>{await j("TeamRecords",null,{...t,createdMs:Date.now()}),P(),A("Record saved")}});if(e==="editAppConfig")return U({title:"App & APK Update",subtitle:"Bump Version & Version Code to trigger automatic Update Popup in all older Android APKs",fields:[{name:"appVersion",label:"Latest APK Version (e.g. 1.2.0)",value:Pe(),required:!0},{name:"appVersionCode",label:"Version Code (Integer, e.g. 3)",type:"number",value:String(o.appVersionCode||x.versionCode),required:!0},{name:"updateNotes",label:"What is New (Update Popup Notes)",type:"textarea",value:o.updateNotes||"",placeholder:"Describe new features or bug fixes for users",rows:3},{name:"apkDownloadUrl",label:"Direct APK Download URL",value:ke(),required:!0},{name:"apkReleasesUrl",label:"Update Page URL (Optional)",value:Ea()},{name:"forceUpdate",label:"Force Update (Hide Later button)",type:"checkbox",checked:!!o.forceUpdate},{name:"logoPhoto",label:"Update Team Logo (Optional)",type:"file"}],onSubmit:async t=>{const a=t.logoPhoto?await ve(t.logoPhoto,600,.8):"";await va({appVersion:t.appVersion,appVersionCode:t.appVersionCode,updateNotes:t.updateNotes,forceUpdate:!!t.forceUpdate,apkDownloadUrl:t.apkDownloadUrl,apkReleasesUrl:t.apkReleasesUrl,logo:a}),P(),A("APK update settings synced to all devices")}});if(e==="addSocial")return U({title:"Add Social Channel",fields:[{name:"name",label:"Platform",placeholder:"INSTAGRAM",required:!0},{name:"displayName",label:"Display Name",placeholder:"RDM Instagram"},{name:"url",label:"URL",placeholder:"https://...",required:!0}],onSubmit:async t=>{await j("Socials",null,{name:t.name.toUpperCase(),displayName:t.displayName||t.name,url:t.url,icon:"↗",order:o.socials.length+1}),P(),A("Social channel added")}})}async function Dt(e){const t=X(),a=t?await ea():!0;$a({currentVersion:e.currentVersion,latestVersion:e.latestVersion,notes:e.notes,forceUpdate:e.forceUpdate,isNative:t,needsInstallPermission:t&&!a,onOpenPermissionSettings:()=>ta(),onSubscribeProgress:n=>ra(n),onDownload:async()=>t?await na(e.apkUrl||ke()):(pt(e.apkUrl||ke()),A(`Downloading RDM Official APK v${e.latestVersion}...`),{started:!0})})}async function we(e=!1){const t=$e();if(!t.hasUpdate)return e&&A(`You are on the latest version (v${t.currentVersion})`),!1;if(!e&&!t.forceUpdate)try{if(sessionStorage.getItem(`rdm-dismiss-update-${t.latestVersion}`)==="1")return!1}catch{}return await Dt(t),!0}function qa(){if(wt())return;const e=Date.now();if(e-p.lastBackPressAt<2e3){Jt();return}p.lastBackPressAt=e,A("Press back again to exit RDM Official")}async function ja(){ge(p.theme);const e=gt();M.length=0,M.push(e);try{window.history.replaceState({rdmIdx:0},"",ie(e))}catch{}window.addEventListener("popstate",()=>{if(Ne()){ft();try{window.history.pushState({rdmIdx:M.length-1},"",ie(M[M.length-1]))}catch{}return}if(p.drawerOpen){Z(!1);try{window.history.pushState({rdmIdx:M.length-1},"",ie(M[M.length-1]))}catch{}return}M.length>1&&(M.pop(),Ke(M[M.length-1]))}),await Yt(qa),window.addEventListener("rdm-pwa-ready",()=>{(p.screen==="public"&&p.publicTab==="more"||p.screen==="subpage"&&p.morePage==="download")&&P()}),await G();let t=Date.now();Ie().then(a=>{var n;(n=a==null?void 0:a.otaResult)!=null&&n.updated&&A(`Updated silently to v${a.otaResult.otaVersion||""}`),we(!1)}).catch(()=>{}),sa(()=>{const a=Date.now();a-t<3e4||(t=a,Ie().then(()=>{we(!1)}).catch(()=>{}))}),da(()=>{const a=document.activeElement,n=a&&(a.tagName==="INPUT"||a.tagName==="TEXTAREA"||a.tagName==="SELECT");!Ne()&&!n&&(P(),we(!1))}),ha(({role:a,verified:n})=>{p.screen==="portalAuth"&&n&&a==="admin"?H({screen:"admin",adminTab:"overview"},{replace:!0}):p.screen==="admin"&&!(n&&a==="admin")?H({screen:"portalAuth"},{replace:!0}):p.screen==="playerPortal"?H({screen:"public",publicTab:"home"},{replace:!0}):P(),ot()}),setTimeout(()=>ot(),1200)}ja();export{Fe as W};
