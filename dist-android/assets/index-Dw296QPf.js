(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const Q={versionName:"1.3.0",versionCode:5},ca="https://rehandominatorsmahuawan.github.io/version.json",da="https://rehandominatorsmahuawan.github.io/ota/manifest.json",ua=["rehanalam7124517@gmail.com","rehahalam7124517@gmail.com","admin@rdm-official.in"],At={"rdm.admin":"admin@rdm-official.in","rdm-admin":"admin@rdm-official.in",admin:"admin@rdm-official.in"};function Ut(e=""){const t=String(e||"").trim();if(!t)return"";const a=t.toLowerCase();return Object.prototype.hasOwnProperty.call(At,a)?At[a]:t}function Ge(e="0.0.0",t="0.0.0"){const a=i=>String(i||"").replace(/^v/i,"").split(/[^0-9]+/).filter(Boolean).map(Number),n=a(e),o=a(t),r=Math.max(n.length,o.length,3);for(let i=0;i<r;i++){const l=n[i]||0,d=o[i]||0;if(l<d)return-1;if(l>d)return 1}return 0}const E={appName:"RDM Official",orgName:"REHAN DOMINATORS MAHUAWAN",shortName:"RDM",location:"MAHUAWAN • GOPALGANJ • BIHAR",locationLabel:"Mahuawan, Gopalganj, Bihar",founded:"2024",motto:"ONE TEAM • ONE DREAM • ONE DOMINATION",tagline:"YOUR TEAM. YOUR PRIDE. YOUR GAME.",subtitle:"THE HOME OF REHAN DOMINATORS MAHUAWAN",captainContactUrl:"https://wa.me/918521254605",captainPhoneDisplay:"+91 85212 54605",appVersion:Q.versionName,apkDownloadUrl:"https://github.com/RehanDominatorsMahuawan/RehanDominatorsMahuawan.github.io/releases/latest/download/RDM-Official.apk",apkReleasesUrl:"https://github.com/RehanDominatorsMahuawan/RehanDominatorsMahuawan.github.io/releases/latest",websiteUrl:"https://rehandominatorsmahuawan.github.io/",logoPath:"assets/rdm-logo.png",heroImagePath:"src/assets/images/hero_cobalt_stadium_1795345341929.jpg",heritageImagePath:"src/assets/images/craft_willow_cobalt_1795345340935.jpg"},se={RDM001:"RA08",RDM003:"SA-V",RDM006:"SO-WK",RDM004:"AKA",RDM002:"ASI",RDM007:"WSM",RDM008:"JBD",RDM010:"GLM",RDM011:"SHA57",RDM005:"SAL02",RDM012:"LKY",RDM016:"KLF",RDM009:"SKH",RDM013:"ABS",RDM014:"SBA",RDM015:"ZSN",RDM017:"JVD"},Xe={RDM001:{nick:"The Skipper",bio:"Captain and all-rounder who leads from the front with discipline, confidence and team-first cricket."},RDM002:{nick:"The Anchor",bio:"A reliable top-order batsman who values a solid start, smart shot selection and steady runs."},RDM003:{nick:"The Game Changer",bio:"Vice-captain and all-rounder who brings flexibility, energy and impact through every phase of the game."},RDM004:{nick:"The Attacker",bio:"An aggressive strike opener and fast-bowling all-rounder built to set the tempo and deliver under pressure."},RDM005:{nick:"The Finisher",bio:"A calm middle-order batsman who backs his shots and looks to finish innings with confidence."},RDM006:{nick:"The Gloveman",bio:"The team main wicket-keeper and a versatile batsman who adds energy, awareness and balance to the team."},RDM007:{nick:"The Complete Package",bio:"A top-order all-rounder who can contribute with bat and ball across every phase of the match."},RDM008:{nick:"The Middle Rock",bio:"A dependable middle-order batsman focused on building partnerships and keeping the innings moving."},RDM009:{nick:"The Closer",bio:"A finisher who enjoys pressure moments and looks to give the team a strong end to the innings."},RDM010:{nick:"The Impact Player",bio:"A useful all-rounder and finisher who can change momentum with quick runs and emergency bowling."},RDM011:{nick:"The Middle Order Maestro",bio:"A right-handed middle-order batsman who adds stability and depth to the batting line-up."},RDM012:{nick:"The All-Rounder",bio:"A versatile all-rounder who can contribute with bat or ball when the team needs him."},RDM013:{nick:"The Utility Ace",bio:"A flexible all-rounder who can finish with the bat and handle important middle or death overs."},RDM014:{nick:"The Power Finisher",bio:"A batsman with a finisher role who looks to add quick runs and impact."},RDM015:{nick:"The Last-Over Hitter",bio:"A finisher who plays with intent in high-pressure batting moments."},RDM016:{nick:"The Lefty",bio:"A left-handed middle-order batsman who adds variety and balance to the batting line-up."},RDM017:{nick:"The Finisher",bio:"A right-handed batsman who specialises in the finisher role and looks to close innings strongly."}},pe=[["RDM001","Rehan Akhtar","Captain • All-Rounder","Right-Handed • Right-Arm Fast • Middle Order • Middle Overs","08"],["RDM003","Saif Ali","Vice-Captain • All-Rounder","Both-Handed • Fast • Non-Striker Opener • All Phases",""],["RDM006","Soaib Akhtar","Wicket-Keeper • Batsman","Right-Handed • Left-Arm Fast • Top Order • Finisher",""],["RDM004","Akib Ansari","All-Rounder","Right-Handed • Fast • Striker Opener • Middle + Death",""],["RDM002","Asif Ali","Batsman","Right-Handed • Top Order",""],["RDM007","Wasim","All-Rounder","Right-Handed • Fast • Top Order • All Phases",""],["RDM008","Jubed","Batsman","Right-Handed • Middle Order",""],["RDM010","Gulam","All-Rounder","Right-Handed • Fast • Finisher • Emergency Bowling",""],["RDM011","Sahil Ansari","Batsman","Right-Handed • Middle Order","57"],["RDM005","Sahil Ali","Batsman","Right-Handed • Middle Order • Finisher","02"],["RDM012","Lucky","All-Rounder","Right-Handed • Fast • Middle Order • Middle Overs",""],["RDM016","Kaif Lefty","Batsman","Left-Handed • Middle Order",""],["RDM009","SK. Hanif","Batsman","Right-Handed • Finisher",""],["RDM013","Abushad","All-Rounder","Right-Handed • Fast • Middle Order + Finisher • Middle + Death",""],["RDM014","Sabre Alam","Batsman","Right-Handed • Finisher",""],["RDM015","Zishan","Batsman","Right-Handed • Finisher",""],["RDM017","Javed","Batsman","Right-Handed • Finisher",""]].map((e,t)=>{var a,n;return{id:e[0],name:e[1],role:e[2],detail:e[3],jersey:e[4],image:"",nick:((a=Xe[e[0]])==null?void 0:a.nick)||"",bio:((n=Xe[e[0]])==null?void 0:n.bio)||"",socials:[],order:t+1,_docId:e[0]}}),Ue=[{_docId:"h01",year:"2024",title:"Winner",sub:"Mahuawan Premier League 1",image:"assets/trophy-2024.png",order:1},{_docId:"h02",year:"2025",title:"Winner",sub:"Mahuawan Premier League 2",image:"assets/trophy-2025.png",order:2},{_docId:"h03",year:"2026",title:"Runner-Up",sub:"Tournament Name • To Be Added",image:"assets/trophy-2026.png",order:3}],xe=[{_docId:"youtube",name:"YOUTUBE",displayName:"RDM YouTube",url:"https://www.youtube.com/@rehan_dominators_mahuawan",icon:"▶",order:1},{_docId:"telegram",name:"TELEGRAM",displayName:"RDM Telegram",url:"https://t.me/rehandominatorsmahuawan",icon:"✈",order:2},{_docId:"whatsapp",name:"WHATSAPP",displayName:"RDM WhatsApp Channel",url:"https://whatsapp.com/channel/0029Vb8icRM3WHTQGQtM4G3j",icon:"◉",order:3},{_docId:"instagram",name:"INSTAGRAM",displayName:"RDM Instagram",url:"",icon:"IG",order:4},{_docId:"facebook",name:"FACEBOOK",displayName:"RDM Facebook",url:"",icon:"f",order:5}];function b(e=""){const t=String(e??"").replace(/\r\n?/g,`
`).replace(/^\n+|\s+$/g,"");if(!t)return"";const a={"ᴀ":"A",ʙ:"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F",ɢ:"G",ʜ:"H",ɪ:"I","ᴊ":"J","ᴋ":"K",ʟ:"L","ᴍ":"M",ɴ:"N","ᴏ":"O","ᴘ":"P",ǫ:"Q",ʀ:"R","ꜱ":"S","ᴛ":"T","ᴜ":"U","ᴠ":"V","ᴡ":"W",ʏ:"Y","ᴢ":"Z"},n=t.replace(/[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡʏᴢ]/g,o=>a[o]||o);return/^(RDM\d+|RA\d+|SA-V|SO-WK|AKA|ASI|WSM|JBD|GLM|SHA\d+|SAL\d+|LKY|KLF|SKH|ABS|SBA|ZSN|JVD)$/i.test(n)?n.toUpperCase():n===n.toUpperCase()&&/[A-Z]{2,}/.test(n)&&n.length>4?n.toLowerCase().replace(/\b([a-z])/g,(r,i,l,d)=>{var h;const u=((h=d.slice(l).match(/^[a-z]+/i))==null?void 0:h[0])||"";return l>0&&d[l-1]!==`
`&&["and","or","of","the","in","on","to","for","at","by","vs","is"].includes(u.toLowerCase())?u.toLowerCase().charAt(0):i.toUpperCase()}).replace(/\b(Rdm|Xi|H2h|Mpl|Potm|Nr)\b/gi,r=>r.toUpperCase()).replace(/\bSk\./gi,"SK."):n}function c(e=""){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function K(e=""){const t=String(e||"").trim();return/^https?:\/\//i.test(t)?t:""}function De(e=""){const t=String(e||"").trim();return!!(!t||/^data:image\/svg\+xml/i.test(t)||/(?:logo\.jpg|CRICKET_YOUR_TAGLINE_HERE|rdm_crest_emblem|^assets\/(?:rehan\.png|players\/))/i.test(t))}function xt(e,t=""){const a=String(e||"").trim();return De(a)?t&&!De(t)?t:E.logoPath:a}async function pa(){return null}/*! Capacitor: https://capacitorjs.com/ - MIT License */var Ee;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(Ee||(Ee={}));class Ke extends Error{constructor(t,a,n){super(t),this.message=t,this.code=a,this.data=n}}const ma=e=>{var t,a;return e!=null&&e.androidBridge?"android":!((a=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||a===void 0)&&a.bridge?"ios":"web"},ba=e=>{const t=e.CapacitorCustomPlatform||null,a=e.Capacitor||{},n=a.Plugins=a.Plugins||{},o=()=>t!==null?t.name:ma(e),r=()=>o()!=="web",i=m=>{const f=u.get(m);return!!(f!=null&&f.platforms.has(o())||l(m))},l=m=>{var f;return(f=a.PluginHeaders)===null||f===void 0?void 0:f.find(v=>v.name===m)},d=m=>e.console.error(m),u=new Map,h=(m,f={})=>{const v=u.get(m);if(v)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),v.proxy;const g=o(),k=l(m);let S;const w=async()=>(!S&&g in f?S=typeof f[g]=="function"?S=await f[g]():S=f[g]:t!==null&&!S&&"web"in f&&(S=typeof f.web=="function"?S=await f.web():S=f.web),S),M=(D,_)=>{var V,J;if(k){const ee=k==null?void 0:k.methods.find(j=>_===j.name);if(ee)return ee.rtype==="promise"?j=>a.nativePromise(m,_.toString(),j):(j,fe)=>a.nativeCallback(m,_.toString(),j,fe);if(D)return(V=D[_])===null||V===void 0?void 0:V.bind(D)}else{if(D)return(J=D[_])===null||J===void 0?void 0:J.bind(D);throw new Ke(`"${m}" plugin is not implemented on ${g}`,Ee.Unimplemented)}},I=D=>{let _;const V=(...J)=>{const ee=w().then(j=>{const fe=M(j,D);if(fe){const ve=fe(...J);return _=ve==null?void 0:ve.remove,ve}else throw new Ke(`"${m}.${D}()" is not implemented on ${g}`,Ee.Unimplemented)});return D==="addListener"&&(ee.remove=async()=>_()),ee};return V.toString=()=>`${D.toString()}() { [capacitor code] }`,Object.defineProperty(V,"name",{value:D,writable:!1,configurable:!1}),V},O=I("addListener"),X=I("removeListener"),ae=(D,_)=>{const V=O({eventName:D},_).then(j=>j),J=async()=>{const j=await V;await X({eventName:D,callbackId:j})},ee=new Promise(j=>V.then(()=>j({remove:J})));return ee.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await J()},ee},B=new Proxy({},{get(D,_){switch(_){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return k?ae:O;case"removeListener":return X;default:return I(_)}}});return n[m]=B,u.set(m,{name:m,proxy:B,platforms:new Set([...Object.keys(f),...k?[g]:[]])}),B};return a.convertFileSrc||(a.convertFileSrc=m=>m),a.getPlatform=o,a.handleError=d,a.isNativePlatform=r,a.isPluginAvailable=i,a.registerPlugin=h,a.Exception=Ke,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a},ya=e=>e.Capacitor=ba(e),z=ya(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ce=z.registerPlugin;class ot{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,a){let n=!1;this.listeners[t]||(this.listeners[t]=[],n=!0),this.listeners[t].push(a);const r=this.windowListeners[t];r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(t);const i=async()=>this.removeListener(t,a);return Promise.resolve({remove:i})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,a,n){const o=this.listeners[t];if(!o){if(n){let r=this.retainedEventArguments[t];r||(r=[]),r.push(a),this.retainedEventArguments[t]=r}return}o.forEach(r=>r(a))}hasListeners(t){var a;return!!(!((a=this.listeners[t])===null||a===void 0)&&a.length)}registerWindowListener(t,a){this.windowListeners[a]={registered:!1,windowEventName:t,pluginEventName:a,handler:n=>{this.notifyListeners(a,n)}}}unimplemented(t="not implemented"){return new z.Exception(t,Ee.Unimplemented)}unavailable(t="not available"){return new z.Exception(t,Ee.Unavailable)}async removeListener(t,a){const n=this.listeners[t];if(!n)return;const o=n.indexOf(a);o!==-1&&this.listeners[t].splice(o,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const a=this.retainedEventArguments[t];a&&(delete this.retainedEventArguments[t],a.forEach(n=>{this.notifyListeners(t,n)}))}}const kt=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Et=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ha extends ot{async getCookies(){const t=document.cookie,a={};return t.split(";").forEach(n=>{if(n.length<=0)return;let[o,r]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");o=Et(o).trim(),r=Et(r).trim(),a[o]=r}),a}async setCookie(t){try{const a=kt(t.key),n=kt(t.value),o=t.expires?`; expires=${t.expires.replace("expires=","")}`:"",r=(t.path||"/").replace("path=",""),i=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${a}=${n||""}${o}; path=${r}; ${i};`}catch(a){return Promise.reject(a)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(a){return Promise.reject(a)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const a of t)document.cookie=a.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}ce("CapacitorCookies",{web:()=>new ha});const fa=async e=>new Promise((t,a)=>{const n=new FileReader;n.onload=()=>{const o=n.result;t(o.indexOf(",")>=0?o.split(",")[1]:o)},n.onerror=o=>a(o),n.readAsDataURL(e)}),va=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(o=>o.toLocaleLowerCase()).reduce((o,r,i)=>(o[r]=e[t[i]],o),{})},ga=(e,t=!0)=>e?Object.entries(e).reduce((n,o)=>{const[r,i]=o;let l,d;return Array.isArray(i)?(d="",i.forEach(u=>{l=t?encodeURIComponent(u):u,d+=`${r}=${l}&`}),d.slice(0,-1)):(l=t?encodeURIComponent(i):i,d=`${r}=${l}`),`${n}&${d}`},"").substr(1):null,wa=(e,t={})=>{const a=Object.assign({method:e.method||"GET",headers:e.headers},t),o=va(e.headers)["content-type"]||"";if(typeof e.data=="string")a.body=e.data;else if(o.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[i,l]of Object.entries(e.data||{}))r.set(i,l);a.body=r.toString()}else if(o.includes("multipart/form-data")||e.data instanceof FormData){const r=new FormData;if(e.data instanceof FormData)e.data.forEach((l,d)=>{r.append(d,l)});else for(const l of Object.keys(e.data))r.append(l,e.data[l]);a.body=r;const i=new Headers(a.headers);i.delete("content-type"),a.headers=i}else(o.includes("application/json")||typeof e.data=="object")&&(a.body=JSON.stringify(e.data));return a};class Sa extends ot{async request(t){const a=wa(t,t.webFetchExtra),n=ga(t.params,t.shouldEncodeUrlParams),o=n?`${t.url}?${n}`:t.url,r=await fetch(o,a),i=r.headers.get("content-type")||"";let{responseType:l="text"}=r.ok?t:{};i.includes("application/json")&&(l="json");let d,u;switch(l){case"arraybuffer":case"blob":u=await r.blob(),d=await fa(u);break;case"json":d=await r.json();break;case"document":case"text":default:d=await r.text()}const h={};return r.headers.forEach((m,f)=>{h[f]=m}),{data:d,headers:h,status:r.status,url:r.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}ce("CapacitorHttp",{web:()=>new Sa});var $t;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})($t||($t={}));var Rt;(function(e){e.StatusBar="StatusBar",e.NavigationBar="NavigationBar"})(Rt||(Rt={}));class Pa extends ot{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}ce("SystemBars",{web:()=>new Pa});const Aa="modulepreload",ka=function(e,t){return new URL(e,t).href},Mt={},st=function(t,a,n){let o=Promise.resolve();if(a&&a.length>0){let i=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const l=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),u=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=i(a.map(h=>{if(h=ka(h,n),h in Mt)return;Mt[h]=!0;const m=h.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(!!n)for(let k=l.length-1;k>=0;k--){const S=l[k];if(S.href===h&&(!m||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${f}`))return;const g=document.createElement("link");if(g.rel=m?"stylesheet":Aa,m||(g.as="script"),g.crossOrigin="",g.href=h,u&&g.setAttribute("nonce",u),document.head.appendChild(g),m)return new Promise((k,S)=>{g.addEventListener("load",k),g.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return o.then(i=>{for(const l of i||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})},it=ce("App",{web:()=>st(()=>import("./web-DA-A0i-C.js"),[],import.meta.url).then(e=>new e.AppWeb)});var _e;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(_e||(_e={}));var Ct;(function(e){e.None="NONE",e.Slide="SLIDE",e.Fade="FADE"})(Ct||(Ct={}));const ze=ce("StatusBar"),Ea=ce("SplashScreen",{web:()=>st(()=>import("./web-C0FbYTE8.js"),[],import.meta.url).then(e=>new e.SplashScreenWeb)});var It;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(It||(It={}));var Lt;(function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"})(Lt||(Lt={}));const Tt=ce("Keyboard"),Ot=ce("Browser",{web:()=>st(()=>import("./web-Bd_wm-GE.js"),[],import.meta.url).then(e=>new e.BrowserWeb)}),Z=z.isNativePlatform()?ce("RdmUpdater"):null;let Dt=!1,Ae=null;typeof window<"u"&&window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Ae=e,window.dispatchEvent(new CustomEvent("rdm-pwa-ready"))});function re(){return z.isNativePlatform()&&z.getPlatform()==="android"}function Je(){return z.isNativePlatform()}function Bt(){return!z.isNativePlatform()&&!!Ae}async function $a(){if(!Ae)return!1;try{await Ae.prompt();const e=await Ae.userChoice;if((e==null?void 0:e.outcome)==="accepted")return Ae=null,!0}catch{}return!1}async function Ft(e="royal"){const t=e==="night"||e==="carbon"||e==="floodlight"?"floodlight":e==="emerald"?"emerald":e==="copper"||e==="crimson"?"crimson":"royal",a={royal:"#F5F7FB",floodlight:"#070C18",emerald:"#F6F9F7",crimson:"#FAF7F6"},n=a[t]||a.royal,o=document.getElementById("rdmThemeMeta");if(o&&(o.content=n),!!z.isNativePlatform())try{await ze.setOverlaysWebView({overlay:!1}),await ze.setBackgroundColor({color:n}),await ze.setStyle({style:t==="floodlight"?_e.Dark:_e.Light})}catch{}}async function Ra(e){const t=localStorage.getItem("rdm-app-theme")||"royal";if(await Ft(t),z.isNativePlatform()){try{Tt.addListener("keyboardWillShow",()=>{document.body.classList.add("keyboard-open");const a=document.activeElement;a&&typeof a.scrollIntoView=="function"&&setTimeout(()=>{try{a.scrollIntoView({behavior:"smooth",block:"center"})}catch{}},120)}),Tt.addListener("keyboardWillHide",()=>{document.body.classList.remove("keyboard-open")})}catch{}if(!Dt&&typeof e=="function"){Dt=!0;try{it.addListener("backButton",({canGoBack:a})=>{e({canGoBack:a})})}catch{}}}}async function Ye(){if(z.isNativePlatform())try{await Ea.hide({fadeOutDuration:220})}catch{}}async function Ma(){if(z.isNativePlatform())try{await it.exitApp()}catch{}}async function _t(e){const t=String(e||"").trim();if(!/^https?:\/\//i.test(t))return!1;if(z.isNativePlatform())try{return await Ot.open({url:t,presentationStyle:"popover"}),!0}catch{}const a=document.createElement("a");return a.href=t,a.target="_blank",a.rel="noopener noreferrer",document.body.appendChild(a),a.click(),a.remove(),!0}async function Ca(){if(!re()||!Z)return null;try{return await Z.getVersionInfo()}catch{return null}}async function Ia(){if(!re()||!Z)return!1;try{const e=await Z.canInstallPackages();return!!(e!=null&&e.allowed)}catch{return!1}}async function La(){if(!re()||!Z)return!1;try{const e=await Z.openInstallPermissionSettings();return!!(e!=null&&e.opened)}catch{return!1}}async function Ta(e){if(!re()||!Z)return{updated:!1};try{return await Z.checkAndApplyOta({manifestUrl:e})}catch(t){return{updated:!1,error:(t==null?void 0:t.message)||"OTA check failed"}}}async function Da(e){const t=String(e).trim();if(!/^https:\/\//i.test(t))throw new Error("HTTPS APK download URL is required.");if(!re()||!Z)throw new Error("Native APK updater is only available inside the Android app.");return await Z.downloadAndInstallApk({url:t})}function Na(e){if(!re()||!Z||typeof e!="function")return()=>{};let t=null,a=!1;try{const n=Z.addListener("apkDownloadProgress",o=>{a||e(o||{})});Promise.resolve(n).then(o=>{var r;if(a)try{(r=o==null?void 0:o.remove)==null||r.call(o)}catch{}else t=o}).catch(()=>{})}catch{}return()=>{var n;a=!0;try{(n=t==null?void 0:t.remove)==null||n.call(t)}catch{}}}function Ua(e){if(!z.isNativePlatform()||typeof e!="function")return()=>{};let t=null,a=!1;try{const n=it.addListener("appStateChange",({isActive:o})=>{o&&!a&&e()});Promise.resolve(n).then(o=>{var r;if(a)try{(r=o==null?void 0:o.remove)==null||r.call(o)}catch{}else t=o}).catch(()=>{})}catch{}return()=>{var n;a=!0;try{(n=t==null?void 0:t.remove)==null||n.call(t)}catch{}}}async function Ht(e){const t=String(e||"").trim();if(!/^https?:\/\//i.test(t))return!1;if(re()&&Z)return await Z.downloadAndInstallApk({url:t});if(z.isNativePlatform())try{return await Ot.open({url:t,presentationStyle:"popover"}),!0}catch{}const a=document.createElement("a");return a.href=t,a.download="RDM-Official.apk",a.rel="noopener noreferrer",document.body.appendChild(a),a.click(),a.remove(),!0}const xa="73442ec47da8d19de47638438c8563bb266e880cf4ce8cafa5579ed20d2b94be",Qe="rdm_apk_admin_unlocked_v1",Ze="rdm_apk_player_unlocked_v1",qt={RDM001:"6fb67b0874290083bb94886486ada2535de541c56fca8eb91b7134bb5014019a",RDM002:"0df79a87814b5ff72554d539b8d94d6592ae84e8145cda22111ee55ffa8876a0",RDM003:"c13d891485885373a0c125b510bf6491c3f22e115da1c1b8f0ab95cabdf572d9",RDM004:"f71cf8dbeb14f2e8c69484f6ff80d20b1402943f084f713e590ea9abb6afe2fc",RDM005:"561ba1e989a02839b4ed929616fb54fb8cb6414cee6b5e43434162151b853c8d",RDM006:"6ce4bb6723456794764b11952958ead6e243848a389cf97ab13040e4d56389b9",RDM007:"1fefa430168b7419ae9b7596b9ae51d25989d81a89f7981afe6bc21f69a22353",RDM008:"b391f2d79a5827d539596a1005111febf86a0e2324c6265c700a3020188122cb",RDM009:"d7bb73041868d2bc129b7d7935e28524d5d168f1d6beb1b2c56efef08fb2194d",RDM010:"48ddb3c347f15fc29dd161e6ac9f988827731db86fd78b6a6a9833c977e2aecb",RDM011:"7f88a18f219f70c47ad1ba9f00ab03bcd710d426aa42a43064ac80dd66cd80e9",RDM012:"d1ff943fd5199f473569af348a31630842b0b935b4da36e94ec47b9a431f2355",RDM013:"23a060a79f69510bee9ad34ed809f96336ad606d5e9f14436253460194569145",RDM014:"f06575828bd55e8aceaeab8af0b48d93a6d6b9f714f68ea7717de532a7f9073f",RDM015:"41d5c7c2a1bda007fc24ce1fa8f911ce69e457251733b74d12c9c10ae496dc53",RDM016:"e44b33be11c30c3ec35638ddde517ad1338c88557f80f795f0c5b05e5552a6a0",RDM017:"2b4eff690afa58c019fee95e6bddf75880f48315fc4f83bbb7f9214ca8b25790"};function Oa(e){function t(m,f){return m>>>f|m<<32-f}const a=Math.pow,n=a(2,32);let o="";const r=[],i=e.length*8,l=[],d=[];let u=0;const h={};for(let m=2;u<64;m++)if(!h[m]){for(let f=0;f<313;f+=m)h[f]=m;l[u]=a(m,.5)*n|0,d[u++]=a(m,1/3)*n|0}for(e+="";e.length%64-56;)e+="\0";for(let m=0;m<e.length;m++){const f=e.charCodeAt(m);r[m>>2]|=f<<(3-m)%4*8}r[r.length]=i/n|0,r[r.length]=i;for(let m=0;m<r.length;){const f=r.slice(m,m+=16),v=l.slice(0);for(let g=0;g<64;g++){const k=f[g-15],S=f[g-2],w=l[0],M=l[4],I=l[7]+(t(M,6)^t(M,11)^t(M,25))+(M&l[5]^~M&l[6])+d[g]+(f[g]=g<16?f[g]:f[g-16]+(t(k,7)^t(k,18)^k>>>3)+f[g-7]+(t(S,17)^t(S,19)^S>>>10)|0),O=(t(w,2)^t(w,13)^t(w,22))+(w&l[1]^w&l[2]^l[1]&l[2]);l[7]=l[6],l[6]=l[5],l[5]=l[4],l[4]=l[3]+I|0,l[3]=l[2],l[2]=l[1],l[1]=l[0],l[0]=I+O|0}for(let g=0;g<8;g++)l[g]=l[g]+v[g]|0}for(let m=0;m<8;m++)for(let f=3;f+1;f--){const v=l[m]>>f*8&255;o+=(v<16?0:"")+v.toString(16)}return o}async function et(e){var n,o;const t=String(e??"");try{if((o=(n=globalThis.crypto)==null?void 0:n.subtle)!=null&&o.digest){const r=await globalThis.crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(r),i=>i.toString(16).padStart(2,"0")).join("")}}catch{}const a=unescape(encodeURIComponent(t));return Oa(a)}function Ba(){try{return localStorage.getItem(Qe)==="1"}catch{return!1}}function lt(e){try{e?localStorage.setItem(Qe,"1"):localStorage.removeItem(Qe)}catch{}}function Fa(){try{const e=String(localStorage.getItem(Ze)||"").trim().toUpperCase();return Object.prototype.hasOwnProperty.call(qt,e)?e:null}catch{return null}}function Oe(e){try{e?localStorage.setItem(Ze,String(e).trim().toUpperCase()):localStorage.removeItem(Ze)}catch{}}function be(){return window.rdmAuth||(typeof rdmAuth<"u"?rdmAuth:null)}function oe(){return window.rdmDB||(typeof rdmDB<"u"?rdmDB:null)}function ne(){var e,t,a,n;return((n=(a=(t=(e=window.firebase)==null?void 0:e.firestore)==null?void 0:t.FieldValue)==null?void 0:a.serverTimestamp)==null?void 0:n.call(a))||new Date}function me(e){const t={};if(!e||typeof e!="object")return t;for(const[a,n]of Object.entries(e))a==="_docId"||a==="_profileUid"||a==="_col"||n!=null&&(t[a]=n);return t}function He(e){const t=String((e==null?void 0:e.code)||""),a=String((e==null?void 0:e.message)||"");return t==="permission-denied"||/Missing or insufficient permissions|Missing cloud permissions/i.test(a)}function ye(e){if(He(e)){const t=new Error("Missing cloud permissions: connect Firebase Cloud Sync below or publish updated firestore.rules.");return t.code="permission-denied",t}return e instanceof Error?e:new Error(String((e==null?void 0:e.message)||"Sync failed"))}const W=e=>({...e.data(),_docId:e.id}),s={ready:!1,loadingData:!1,loadError:"",authChecked:!1,apkAdminUnlocked:Ba(),apkPlayerId:Fa(),user:null,account:null,role:"guest",playerId:null,brandLogo:E.logoPath,apkDownloadUrl:E.apkDownloadUrl,apkReleasesUrl:E.apkReleasesUrl,appVersion:Q.versionName,appVersionCode:Q.versionCode,nativeVersionName:null,nativeVersionCode:null,otaBuild:0,otaVersion:"",canInstallPackages:!1,updateNotes:"",forceUpdate:!1,remoteVersionInfo:null,players:pe.map(e=>({...e})),matches:[],news:[],updates:[],honours:Ue.map(e=>({...e})),gallery:[],socials:xe.map(e=>({...e})),stats:[],achievements:[],availability:[],lineups:[],records:[],tournaments:[],opponents:[]};function ge(){return!!(s.user&&s.account&&s.account.active===!0&&s.account.role==="admin"&&s.role==="admin")}function x(){return!!(ge()||s.apkAdminUnlocked)}function ct(e=""){return!(s.user&&s.account&&s.account.active===!0&&s.role==="player"&&s.playerId)?!1:e?s.playerId===e:!0}function he(){return ct()?s.playerId:s.apkPlayerId?s.apkPlayerId:null}function Me(e=""){const t=he();return t?e?t===e:!0:!1}function dt(){const e=he();return e&&s.players.find(t=>t.id===e)||null}function _a(e,t,a){const n=new Map(pe.map((d,u)=>[d.id,u+1])),o=new Map(pe.map(d=>[d.id,d]));let r;e.length>0?(r=e.map(d=>{const u=o.get(d.id);return{id:d.id,name:d.name||(u==null?void 0:u.name)||d.id,role:d.role||(u==null?void 0:u.role)||"",detail:d.detail||(u==null?void 0:u.detail)||"",jersey:d.jersey??(u==null?void 0:u.jersey)??"",image:De(d.image)?"":d.image||"",nick:"",bio:"",socials:[],order:typeof d.order=="number"?d.order:n.get(d.id)||999,active:d.active!==!1,_docId:d._docId||d.id}}),pe.forEach(d=>{r.some(u=>u.id===d.id)||r.push({...d})})):r=pe.map(d=>({...d})),r.sort((d,u)=>(d.order||999)-(u.order||999));const i=d=>{var u,h;return typeof(d==null?void 0:d.updatedMs)=="number"?d.updatedMs:typeof((u=d==null?void 0:d.updatedAt)==null?void 0:u.toMillis)=="function"?d.updatedAt.toMillis():typeof((h=d==null?void 0:d.updatedAt)==null?void 0:h.seconds)=="number"?d.updatedAt.seconds*1e3:0};return[...t].sort((d,u)=>{const h=i(d)-i(u);if(h!==0)return h;const m=a&&d._docId===a?1:0,f=a&&u._docId===a?1:0;return m-f}).forEach(d=>{const u=r.find(h=>h.id===d.playerId);u&&("jersey"in d&&d.jersey!==void 0&&d.jersey!==null&&(u.jersey=String(d.jersey)),"nick"in d&&d.nick!==void 0&&d.nick!==null&&(u.nick=String(d.nick),u._nickCustom=!0),"bio"in d&&d.bio!==void 0&&d.bio!==null&&(u.bio=String(d.bio),u._bioCustom=!0),"image"in d&&d.image!==void 0&&d.image!==null&&(u.image=De(d.image)?"":String(d.image)),Array.isArray(d.socials)&&(u.socials=d.socials.slice(0,3)),u._profileUid=d._docId)}),r.forEach(d=>{const u=Xe[d.id];u&&(!d._nickCustom&&!d.nick&&(d.nick=u.nick),!d._bioCustom&&!d.bio&&(d.bio=u.bio))}),r.filter(d=>d.active!==!1)}let ut=[],pt=[],Se=[];function tt(){var t,a;const e=((a=(t=be())==null?void 0:t.currentUser)==null?void 0:a.uid)||"";s.players=_a(ut,pt,e)}function Ha(e){const t=oe();if(!t)return()=>{};Se.forEach(r=>{try{r()}catch{}}),Se=[];let a=null;const n=()=>{typeof e=="function"&&(clearTimeout(a),a=setTimeout(()=>{s.ready=!0,e()},50))},o=(r,i)=>{try{const l=t.collection(r).onSnapshot(d=>{i(d.docs.map(W)),n()},()=>{});Se.push(l)}catch{}};o("TeamPlayers",r=>{ut=r,tt()}),o("PlayerProfiles",r=>{pt=r,tt()}),o("Matches",r=>{s.matches=r.sort((i,l)=>(l.createdMs||0)-(i.createdMs||0))}),o("News",r=>{s.news=r.sort((i,l)=>(l.pinned?1:0)-(i.pinned?1:0)||(l.createdMs||0)-(i.createdMs||0))}),o("Honours",r=>{s.honours=r.length?r.sort((i,l)=>(i.order||999)-(l.order||999)):Ue.map(i=>({...i}))}),o("Gallery",r=>{s.gallery=r.sort((i,l)=>(l.createdMs||0)-(i.createdMs||0))}),o("Socials",r=>{s.socials=r.length?r.sort((i,l)=>(i.order||999)-(l.order||999)):xe.map(i=>({...i}))}),o("PlayerStats",r=>{s.stats=r}),o("Achievements",r=>{s.achievements=r.sort((i,l)=>(l.createdMs||0)-(i.createdMs||0))}),o("Availability",r=>{s.availability=r}),o("PlayingXI",r=>{s.lineups=r.sort((i,l)=>(l.createdMs||0)-(i.createdMs||0))}),o("TeamRecords",r=>{s.records=r.sort((i,l)=>(l.createdMs||0)-(i.createdMs||0))}),o("Tournaments",r=>{s.tournaments=r.sort((i,l)=>(l.createdMs||0)-(i.createdMs||0))}),o("Opponents",r=>{s.opponents=r.sort((i,l)=>(l.createdMs||0)-(i.createdMs||0))}),o("Updates",r=>{s.updates=r.filter(i=>i._docId!=="_news_updates_swap_v1").sort((i,l)=>(l.pinned?1:0)-(i.pinned?1:0)||(l.createdMs||0)-(i.createdMs||0))});try{const r=t.collection("BrandSettings").doc("main").onSnapshot(i=>{i.exists&&(Gt(i.data()||{}),n())},()=>{});Se.push(r)}catch{}return()=>{clearTimeout(a),Se.forEach(r=>{try{r()}catch{}}),Se=[]}}async function Y(){const e=oe();if(!e)return s.loadError="Firebase is unavailable. Check your internet connection and retry.",s.ready=!0,!1;s.loadingData=!0,s.loadError="";try{const[t,a,n,o,r,i,l,d,u,h,m,f,v,g,k]=await Promise.all([e.collection("TeamPlayers").get(),e.collection("Matches").get(),e.collection("News").get(),e.collection("Honours").get(),e.collection("Gallery").get(),e.collection("Socials").get(),e.collection("PlayerProfiles").get(),e.collection("PlayerStats").get(),e.collection("Achievements").get(),e.collection("Availability").get(),e.collection("PlayingXI").get(),e.collection("TeamRecords").get(),e.collection("Tournaments").get(),e.collection("Opponents").get(),e.collection("Updates").get()]);ut=t.docs.map(W),pt=l.docs.map(W),tt(),s.matches=a.docs.map(W).sort((S,w)=>(w.createdMs||0)-(S.createdMs||0)),s.news=n.docs.map(W).sort((S,w)=>(w.pinned?1:0)-(S.pinned?1:0)||(w.createdMs||0)-(S.createdMs||0)),s.honours=o.empty?Ue.map(S=>({...S})):o.docs.map(W).sort((S,w)=>(S.order||999)-(w.order||999)),s.gallery=r.docs.map(W).sort((S,w)=>(w.createdMs||0)-(S.createdMs||0)),s.socials=i.empty?xe.map(S=>({...S})):i.docs.map(W).sort((S,w)=>(S.order||999)-(w.order||999)),s.stats=d.docs.map(W),s.achievements=u.docs.map(W).sort((S,w)=>(w.createdMs||0)-(S.createdMs||0)),s.availability=h.docs.map(W),s.lineups=m.docs.map(W).sort((S,w)=>(w.createdMs||0)-(S.createdMs||0)),s.records=f.docs.map(W).sort((S,w)=>(w.createdMs||0)-(S.createdMs||0)),s.tournaments=v.docs.map(W).sort((S,w)=>(w.createdMs||0)-(S.createdMs||0)),s.opponents=g.docs.map(W).sort((S,w)=>(w.createdMs||0)-(S.createdMs||0)),s.updates=k.docs.filter(S=>S.id!=="_news_updates_swap_v1").map(W).sort((S,w)=>(w.pinned?1:0)-(S.pinned?1:0)||(w.createdMs||0)-(S.createdMs||0));try{const S=await e.collection("BrandSettings").doc("main").get();S.exists&&Gt(S.data()||{})}catch{s.brandLogo=E.logoPath}return s.ready=!0,!0}catch(t){return console.error("Club data load failed",t),s.loadError="Unable to sync live team data from Firebase. Showing bundled squad roster.",s.ready=!0,!1}finally{s.loadingData=!1}}async function mt(e){var n,o,r,i;const t=be(),a=oe();if(!e||!a)return s.user=null,s.account=null,s.role="guest",s.playerId=null,{ok:!1,reason:"NOT_SIGNED_IN"};try{const l=await a.collection("Accounts").doc(e.uid).get();if(!l.exists)return await((n=t==null?void 0:t.signOut)==null?void 0:n.call(t)),s.user=null,s.account=null,s.role="guest",s.playerId=null,{ok:!1,reason:"NO_ACCOUNT_RECORD"};const d=l.data()||{};if(d.active!==!0)return await((o=t==null?void 0:t.signOut)==null?void 0:o.call(t)),s.user=null,s.account=null,s.role="guest",s.playerId=null,{ok:!1,reason:"ACCOUNT_INACTIVE"};if(d.role==="admin")return s.user=e,s.account=d,s.role="admin",s.playerId=d.playerId||null,{ok:!0,role:"admin",account:d};const u=typeof d.playerId=="string"?d.playerId.trim():"";return u&&(s.players.some(m=>m.id===u)||pe.some(m=>m.id===u))?(s.user=e,s.account=d,s.role="player",s.playerId=u,{ok:!0,role:"player",playerId:u,account:d}):(await((r=t==null?void 0:t.signOut)==null?void 0:r.call(t)),s.user=null,s.account=null,s.role="guest",s.playerId=null,{ok:!1,reason:"INVALID_ROLE_MAPPING"})}catch(l){return console.error("Account verification failed",l),await((i=t==null?void 0:t.signOut)==null?void 0:i.call(t)),s.user=null,s.account=null,s.role="guest",s.playerId=null,{ok:!1,reason:(l==null?void 0:l.code)||"VERIFICATION_ERROR"}}}async function bt(e,t){const a=be();if(!a)throw new Error("FIREBASE_UNAVAILABLE");const n=Ut(e),o=String(t||"");if(!n||!o)throw new Error("EMAIL_PASSWORD_REQUIRED");const r=await a.signInWithEmailAndPassword(n,o),i=await mt(r.user);if(!i.ok){const l=new Error(i.reason||"ACCOUNT_NOT_AUTHORIZED");throw l.code=i.reason,l}return await Y(),i}async function qa(e){const t=String(e||"");if(!t){const i=new Error("PASSWORD_REQUIRED");throw i.code="PASSWORD_REQUIRED",i}const a=await et(t);if(!(a?a===xa:!1)){const i=new Error("INVALID_ADMIN_PASSWORD");throw i.code="INVALID_ADMIN_PASSWORD",i}s.apkAdminUnlocked=!0,s.role="admin",lt(!0);let o=ge();const r=be();if(r&&!o)for(const i of ua)try{const l=await r.signInWithEmailAndPassword(i,t),d=await mt(l.user);if(d.ok&&d.role==="admin"){o=!0;break}}catch{}try{await Y()}catch{}return{ok:!0,role:"admin",cloudSynced:o}}async function Va(e,t){const a=String(e).trim().toUpperCase(),n=qt[a];if(!n){const u=new Error("INVALID_PLAYER_ID");throw u.code="INVALID_PLAYER_ID",u}const o=String(t||""),r=o.trim();if(!r){const u=new Error("PASSWORD_REQUIRED");throw u.code="PASSWORD_REQUIRED",u}const i=await et(o),l=r!==o?await et(r):i;if(!(i===n||l===n)){const u=new Error("INVALID_PLAYER_PASSWORD");throw u.code="INVALID_PLAYER_PASSWORD",u}s.apkPlayerId=a,Oe(a),x()||(s.role="player",s.playerId=a);try{await Y()}catch{}return{ok:!0,role:"player",playerId:a,cloudSynced:ct(a)}}async function ja(e,t){const a=await bt(e,t);if(a.role!=="player"||!a.playerId){if(a.role==="admin"){const o=new Error("This is an Admin account. Use Admin Panel login or choose your Player profile.");throw o.code="NOT_PLAYER_ACCOUNT",o}const n=new Error("This Firebase account is not linked to an active Player profile.");throw n.code="NOT_PLAYER_ACCOUNT",n}return s.apkPlayerId=a.playerId,Oe(a.playerId),{ok:!0,role:"player",playerId:a.playerId,cloudSynced:!0}}async function Wa(e,t){const a=await bt(e,t);if(a.role!=="admin"){await jt();const n=new Error("This Firebase account is not an active Admin in Accounts/{uid}.");throw n.code="NOT_ADMIN_ACCOUNT",n}return s.apkAdminUnlocked=!0,s.role="admin",lt(!0),a}async function Ga(e){const t=be();if(!t)throw new Error("FIREBASE_UNAVAILABLE");const a=Ut(e);if(!a)throw new Error("EMAIL_REQUIRED");await t.sendPasswordResetEmail(a)}async function Vt(){if(s.apkPlayerId=null,Oe(null),s.role==="player"||s.account&&s.account.role==="player"){const e=be();if(e)try{await e.signOut()}catch{}s.user=null,s.account=null}s.apkAdminUnlocked?(s.role="admin",s.playerId=null):(s.role="guest",s.playerId=null)}async function jt(){s.apkAdminUnlocked=!1,s.apkPlayerId=null,lt(!1),Oe(null);const e=be();if(e)try{await e.signOut()}catch{}s.user=null,s.account=null,s.role="guest",s.playerId=null}function Ka(e){const t=be();return t?t.onAuthStateChanged(async a=>{if(!a){if(s.user=null,s.account=null,s.apkAdminUnlocked){s.role="admin",s.playerId=null,s.authChecked=!0,e({role:"admin",verified:!0});return}if(s.apkPlayerId){s.role="player",s.playerId=s.apkPlayerId,s.authChecked=!0,e({role:"player",playerId:s.apkPlayerId,verified:!0});return}s.role="guest",s.playerId=null,s.authChecked=!0,e({role:"guest",verified:!1});return}const n=await mt(a);if(s.authChecked=!0,n.ok&&n.role==="player"&&n.playerId&&(s.apkPlayerId=n.playerId,Oe(n.playerId)),!n.ok&&s.apkAdminUnlocked){s.role="admin",e({role:"admin",verified:!0});return}if(!n.ok&&s.apkPlayerId){s.role="player",s.playerId=s.apkPlayerId,e({role:"player",playerId:s.apkPlayerId,verified:!0});return}e({role:n.ok?n.role:"guest",playerId:n.ok?n.playerId:null,verified:n.ok,reason:n.ok?"":n.reason})}):(s.authChecked=!0,s.apkAdminUnlocked?(s.role="admin",e({role:"admin",verified:!0})):s.apkPlayerId?(s.role="player",s.playerId=s.apkPlayerId,e({role:"player",playerId:s.apkPlayerId,verified:!0})):e({role:"guest",verified:!1}),()=>{})}function yt(e){return e?x()||he()===e?!0:!!(s.user&&s.account&&s.account.active===!0&&s.role==="player"&&s.playerId===e):!1}async function Le(e,t){const a=oe();if(!a)throw new Error("FIREBASE_UNAVAILABLE");if(!yt(e))throw new Error("NOT_ALLOWED");const n=s.players.find(l=>l.id===e)||pe.find(l=>l.id===e);if(!n)throw new Error("PLAYER_NOT_FOUND");const o=n._profileUid||`profile_${e}`,r=Array.isArray(t.socials)?t.socials.slice(0,3).map(l=>({name:String((l==null?void 0:l.name)||"").trim()||"Social",url:String((l==null?void 0:l.url)||"").trim()})):(n.socials||[]).slice(0,3),i={playerId:e,jersey:String(t.jersey??n.jersey??"").trim(),nick:String(t.nick??n.nick??"").trim(),bio:String(t.bio??n.bio??"").trim(),socials:r,updatedMs:Date.now(),updatedAt:ne()};"image"in t&&(i.image=String(t.image||""));try{if(await a.collection("PlayerProfiles").doc(o).set(me(i),{merge:!0}),"jersey"in t||"image"in t){const l=me({id:e,jersey:i.jersey,updatedMs:i.updatedMs,updatedAt:ne()});"image"in t&&(l.image=i.image);try{await a.collection("TeamPlayers").doc(e).set(l,{merge:!0})}catch{}}await Y()}catch(l){throw ye(l)}}async function Wt(e,t){const a=oe();if(!a)throw new Error("FIREBASE_UNAVAILABLE");const n=String(t||"").toUpperCase();if(!["AVAILABLE","UNAVAILABLE"].includes(n))throw new Error("INVALID_STATUS");if(!yt(e))throw new Error("NOT_ALLOWED");try{await a.collection("Availability").doc(e).set({playerId:e,status:n,updatedAt:ne()},{merge:!0}),await Y()}catch(o){throw ye(o)}}async function H(e,t,a){const n=oe();if(!n||!x())throw new Error("ADMIN_REQUIRED");const o=me({...a,updatedAt:ne()}),r=t&&!String(t).startsWith("loc_")?String(t):"";try{if((e==="Honours"||e==="Socials")&&(await n.collection(e).limit(1).get()).empty){const l=e==="Honours"?Ue:xe,d=n.batch();l.forEach(u=>{if(u._docId&&u._docId!==r){const{_docId:h,...m}=u;d.set(n.collection(e).doc(h),me({...m,updatedAt:ne()}),{merge:!0})}}),await d.commit()}r?await n.collection(e).doc(r).set(o,{merge:!0}):await n.collection(e).add({...o,createdMs:o.createdMs||Date.now()}),await Y()}catch(i){throw ye(i)}}async function za(e,t){const a=oe();if(!a||!x())throw new Error("ADMIN_REQUIRED");const n=me({id:e,name:String(t.name||"").trim(),role:String(t.role||"").trim(),detail:String(t.detail||"").trim(),jersey:String(t.jersey||"").trim(),active:!0,updatedAt:ne()});"image"in t&&t.image!==void 0&&t.image!==null&&(n.image=String(t.image));const o=s.players.find(l=>l.id===e),r=(o==null?void 0:o._profileUid)||`profile_${e}`,i=me({playerId:e,jersey:n.jersey,nick:String(t.nick??(o==null?void 0:o.nick)??"").trim(),bio:String(t.bio??(o==null?void 0:o.bio)??"").trim(),updatedMs:Date.now(),updatedAt:ne()});"image"in t&&t.image!==void 0&&t.image!==null&&(i.image=String(t.image));try{await a.collection("TeamPlayers").doc(e).set(n,{merge:!0}),await a.collection("PlayerProfiles").doc(r).set(i,{merge:!0}),await Y()}catch(l){throw ye(l)}}async function Ya(e){const t=oe();if(!t||!x())throw new Error("ADMIN_REQUIRED");const a=Number(e.appVersionCode),n=me({appVersion:String(e.appVersion||E.appVersion).trim(),appVersionCode:Number.isFinite(a)&&a>0?a:s.appVersionCode||Q.versionCode,updateNotes:String(e.updateNotes??"").trim(),forceUpdate:!!e.forceUpdate,apkDownloadUrl:String(e.apkDownloadUrl||E.apkDownloadUrl).trim(),apkReleasesUrl:String(e.apkReleasesUrl||E.apkReleasesUrl).trim(),updatedMs:Date.now(),updatedAt:ne()});e.logo&&(n.logo=String(e.logo));try{await t.collection("BrandSettings").doc("main").set(n,{merge:!0}),await Y()}catch(o){throw ye(o)}}function Gt(e){e&&(e.logo&&!De(e.logo)&&(s.brandLogo=e.logo),e.apkDownloadUrl&&/^https?:\/\//i.test(String(e.apkDownloadUrl).trim())&&(s.apkDownloadUrl=String(e.apkDownloadUrl).trim()),e.apkReleasesUrl&&/^https?:\/\//i.test(String(e.apkReleasesUrl).trim())&&(s.apkReleasesUrl=String(e.apkReleasesUrl).trim()),e.appVersion&&(s.appVersion=String(e.appVersion).trim()),Number.isFinite(Number(e.appVersionCode))&&(s.appVersionCode=Number(e.appVersionCode)),"updateNotes"in e&&(s.updateNotes=String(e.updateNotes||"")),"forceUpdate"in e&&(s.forceUpdate=!!e.forceUpdate))}async function Xa(){const e=await Ca();return e&&(e.versionName||e.versionCode)&&(s.nativeVersionName=String(e.versionName||Q.versionName).trim(),s.nativeVersionCode=Number(e.versionCode)||Q.versionCode,s.otaBuild=Number(e.otaBuild)||0,s.otaVersion=String(e.otaVersion||""),s.canInstallPackages=!!e.canInstallPackages),e}function je(){const e=s.nativeVersionName||Q.versionName,t=Number(s.nativeVersionCode)||Q.versionCode,a=[];(s.appVersion||s.appVersionCode)&&a.push({versionName:s.appVersion||e,versionCode:Number(s.appVersionCode)||t,apkDownloadUrl:s.apkDownloadUrl||E.apkDownloadUrl,apkReleasesUrl:s.apkReleasesUrl||E.apkReleasesUrl,notes:s.updateNotes||"",forceUpdate:!!s.forceUpdate}),s.remoteVersionInfo&&a.push(s.remoteVersionInfo);let n={versionName:e,versionCode:t,apkDownloadUrl:s.apkDownloadUrl||E.apkDownloadUrl,apkReleasesUrl:s.apkReleasesUrl||E.apkReleasesUrl,notes:"",forceUpdate:!1};return a.forEach(r=>{const i=String(r.versionName||"0.0.0").trim(),l=Number(r.versionCode)||0,d=Ge(n.versionName,i)<0,u=Ge(n.versionName,i)===0&&l>n.versionCode;(d||u||l>n.versionCode)&&(n={versionName:i||n.versionName,versionCode:Math.max(l,n.versionCode),apkDownloadUrl:/^https?:\/\//i.test(String(r.apkDownloadUrl||""))?String(r.apkDownloadUrl).trim():n.apkDownloadUrl,apkReleasesUrl:/^https?:\/\//i.test(String(r.apkReleasesUrl||""))?String(r.apkReleasesUrl).trim():n.apkReleasesUrl,notes:r.notes||n.notes,forceUpdate:!!(r.forceUpdate||n.forceUpdate)})}),{hasUpdate:Ge(e,n.versionName)<0||Number(n.versionCode)>Number(t),currentVersion:e,currentCode:t,otaBuild:Number(s.otaBuild)||0,otaVersion:s.otaVersion||"",canInstallPackages:!!s.canInstallPackages,latestVersion:n.versionName,latestCode:n.versionCode,apkUrl:n.apkDownloadUrl,releasesUrl:n.apkReleasesUrl,notes:n.notes||"A newer version of RDM Official Android APK is ready with automatic in-app update support.",forceUpdate:n.forceUpdate}}async function Ja(){await Xa().catch(()=>null);const e=typeof AbortController<"u"?new AbortController:null,t=e?setTimeout(()=>e.abort(),5e3):null,a=[];typeof window<"u"&&/^https?:$/i.test(window.location.protocol)&&a.push(`./version.json?t=${Date.now()}`),a.push(`${ca}?t=${Date.now()}`);for(const n of a)try{const o=await fetch(n,{cache:"no-store",signal:e==null?void 0:e.signal});if(!o.ok)continue;const r=await o.json();if(r&&(r.versionName||r.versionCode)){s.remoteVersionInfo={versionName:String(r.versionName||Q.versionName).trim(),versionCode:Number(r.versionCode)||Q.versionCode,apkDownloadUrl:String(r.apkDownloadUrl||E.apkDownloadUrl).trim(),apkReleasesUrl:String(r.apkReleasesUrl||E.apkReleasesUrl).trim(),notes:String(r.notes||""),forceUpdate:!!r.forceUpdate};break}}catch{}return t&&clearTimeout(t),je()}async function at(){const e=await Ta(da).catch(()=>({updated:!1})),t=await Ja();return{otaResult:e,apkUpdate:t}}async function Qa(e,t){const a=oe();if(!a||!x()||!t)throw new Error("ADMIN_REQUIRED");if(!String(t).startsWith("loc_"))try{if((e==="Honours"||e==="Socials")&&(await a.collection(e).limit(1).get()).empty){const o=e==="Honours"?Ue:xe,r=a.batch();o.forEach(i=>{if(i._docId&&i._docId!==String(t)){const{_docId:l,...d}=i;r.set(a.collection(e).doc(l),me({...d,updatedAt:ne()}),{merge:!0})}}),await r.commit(),await Y();return}await a.collection(e).doc(String(t)).delete(),await Y()}catch(n){throw ye(n)}}async function Za(e){const t=oe();if(!t||!x()||!e)throw new Error("ADMIN_REQUIRED");const a=pe.some(n=>n.id===e);try{a?await t.collection("TeamPlayers").doc(e).set({id:e,active:!1,updatedAt:ne()},{merge:!0}):await t.collection("TeamPlayers").doc(e).delete(),await Y()}catch(n){throw ye(n)}}async function en(e,t,a){const n=oe();if(!n||!x()||!t)throw new Error("ADMIN_REQUIRED");if(!String(t).startsWith("loc_"))try{if(a){const o=await n.collection(e).where("pinned","==",!0).get();if(!o.empty){const r=n.batch();o.docs.forEach(i=>{i.id!==t&&r.set(i.ref,{pinned:!1,updatedAt:ne()},{merge:!0})}),await r.commit()}}await n.collection(e).doc(t).set({pinned:!!a,updatedAt:ne()},{merge:!0}),await Y()}catch(o){throw ye(o)}}function we(e,t=960,a=.74){return new Promise((n,o)=>{if(!e)return n("");const r=new FileReader;r.onerror=()=>o(new Error("READ_FAILED")),r.onload=()=>{const i=new Image;i.onerror=()=>o(new Error("IMAGE_INVALID")),i.onload=()=>{const l=Math.min(1,t/Math.max(i.width,i.height)),d=document.createElement("canvas");d.width=Math.max(1,Math.round(i.width*l)),d.height=Math.max(1,Math.round(i.height*l)),d.getContext("2d").drawImage(i,0,0,d.width,d.height);let u=d.toDataURL("image/jpeg",a);if(u.length>72e4&&(u=d.toDataURL("image/jpeg",.56)),u.length>9e5)return o(new Error("IMAGE_TOO_LARGE"));n(u)},i.src=r.result},r.readAsDataURL(e)})}let Te=[];function P(e){const t=document.getElementById("rdmToast");t&&(t.textContent=String(e||""),t.classList.add("show"),clearTimeout(t._timer),t._timer=setTimeout(()=>t.classList.remove("show"),2200))}function nt(){return Te.length>0}function Kt(){const e=Te.pop();return e&&e.isConnected?(e.remove(),!0):!1}function Ce(e){return Te.push(e),()=>{Te=Te.filter(t=>t!==e),e.isConnected&&e.remove()}}function zt(e){return(e==null?void 0:e.code)==="permission-denied"||/Missing (?:or insufficient|cloud) permissions/i.test(String((e==null?void 0:e.message)||""))}function $e({title:e,message:t,confirmLabel:a="Confirm",danger:n=!1,onConfirm:o,onPermissionDenied:r}){const i=document.createElement("div");i.className="sheetOverlay show",i.innerHTML=`
    <div class="sheetCard confirmCard" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <h3>${c(e)}</h3>
      </div>
      <p class="confirmMessage">${c(t)}</p>
      <div class="sheetActions">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="button" class="${n?"btnDanger":"btnPrimary"}" data-ok>${c(a)}</button>
      </div>
    </div>
  `,document.body.appendChild(i);const l=Ce(i);i.querySelector("[data-cancel]").onclick=l,i.addEventListener("click",d=>{d.target===i&&l()}),i.querySelector("[data-ok]").onclick=async d=>{const u=d.currentTarget;u.disabled=!0;try{await o(),l()}catch(h){if(zt(h)&&typeof r=="function"){l(),r(h);return}u.disabled=!1,P((h==null?void 0:h.message)||"Action failed")}}}function Re({title:e,subtitle:t="",fields:a,submitLabel:n="Save",onSubmit:o,onPermissionDenied:r}){const i=document.createElement("div");i.className="sheetOverlay show";const l=a.map(u=>{const h=u.required?"required":"",m=c(u.value??"");if(u.type==="textarea")return`
        <label class="fieldBlock">
          <span>${c(u.label)}</span>
          <textarea name="${c(u.name)}" rows="${u.rows||4}" placeholder="${c(u.placeholder||"")}" ${h}>${m}</textarea>
        </label>
      `;if(u.type==="select"){const f=(u.options||[]).map(v=>{const g=typeof v=="object"?v.value:v,k=typeof v=="object"?v.label:v,S=String(g)===String(u.value??"")?"selected":"";return`<option value="${c(g)}" ${S}>${c(k)}</option>`}).join("");return`
        <label class="fieldBlock">
          <span>${c(u.label)}</span>
          <select name="${c(u.name)}">${f}</select>
        </label>
      `}return u.type==="checkbox"?`
        <label class="checkboxRow">
          <input type="checkbox" name="${c(u.name)}" ${u.checked?"checked":""}>
          <span>${c(u.label)}</span>
        </label>
      `:u.type==="file"?`
        <label class="fieldBlock">
          <span>${c(u.label)}</span>
          <input type="file" name="${c(u.name)}" accept="image/*" ${h}>
        </label>
      `:`
      <label class="fieldBlock">
        <span>${c(u.label)}</span>
        <input type="${c(u.type||"text")}" name="${c(u.name)}" value="${m}" placeholder="${c(u.placeholder||"")}" ${h}>
      </label>
    `}).join("");i.innerHTML=`
    <form class="sheetCard formSheet" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>${c(e)}</h3>
          ${t?`<p class="sheetSub">${c(t)}</p>`:""}
        </div>
      </div>
      <div class="formStack">${l}</div>
      <div class="sheetFooterSticky">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="submit" class="btnPrimary">${c(n)}</button>
      </div>
    </form>
  `,document.body.appendChild(i);const d=Ce(i);i.querySelector("[data-cancel]").onclick=d,i.addEventListener("click",u=>{u.target===i&&d()}),i.querySelector("form").onsubmit=async u=>{u.preventDefault();const h=u.currentTarget,m=h.querySelector('[type="submit"]');m.disabled=!0;try{const f={};a.forEach(v=>{var k;const g=h.elements[v.name];g&&(v.type==="checkbox"?f[v.name]=g.checked:v.type==="file"?f[v.name]=((k=g.files)==null?void 0:k[0])||null:v.type==="textarea"?f[v.name]=String(g.value??"").replace(/\r\n?/g,`
`).replace(/^\n+|\s+$/g,""):f[v.name]=String(g.value??"").trim())}),await o(f),d()}catch(f){if(zt(f)&&typeof r=="function"){d(),r(f);return}m.disabled=!1,P((f==null?void 0:f.message)||"Save failed")}}}function Nt({currentTheme:e,onSelectTheme:t}){const a=document.createElement("div");a.className="sheetOverlay show";const n=[{id:"royal",name:"Royal Cobalt",desc:"Crisp Daylight Frost & Midnight Cobalt",swatches:["#F5F7FB","#FFFFFF","#1D4ED8"]},{id:"floodlight",name:"Floodlight Navy",desc:"Deep Stadium Navy & Championship Gold",swatches:["#070C18","#0F172A","#2563EB"]},{id:"emerald",name:"Pavilion Emerald",desc:"Classic Turf Mint & Pavilion Emerald",swatches:["#F6F9F7","#FFFFFF","#0F5132"]},{id:"crimson",name:"Test Crimson",desc:"Editorial Chalk & Cricket Leather Crimson",swatches:["#FAF7F6","#FFFFFF","#9F1239"]}];a.innerHTML=`
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
              ${r.swatches.map(i=>`<span style="background:${i}"></span>`).join("")}
            </div>
            <div class="themeChoiceCopy">
              <strong>${c(r.name)}</strong>
              <span>${c(r.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${e===r.id?"Active":"Apply"}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `,document.body.appendChild(a);const o=Ce(a);a.addEventListener("click",r=>{r.target===a&&o()}),a.querySelectorAll("[data-pick-theme]").forEach(r=>{r.addEventListener("click",()=>{t(r.dataset.pickTheme),o()})})}function rt(e,t=""){const a=document.createElement("div");a.className="lightboxOverlay show",a.innerHTML=`
    <div class="lightboxTopBar">
      <div class="lightboxLeft">
        <button type="button" class="iconCloseBtn darkSurface" aria-label="Back">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <span class="lightboxCaption">${c(t||"Team Gallery")}</span>
      </div>
    </div>
    <div class="lightboxCanvas">
      <img src="${c(e)}" alt="${c(t||"Gallery image")}" referrerPolicy="no-referrer">
    </div>
  `,document.body.appendChild(a);const n=Ce(a);a.querySelector(".iconCloseBtn").onclick=n,a.addEventListener("click",o=>{(o.target===a||o.target.classList.contains("lightboxCanvas"))&&n()})}function tn({onSaveDataUrl:e}){const t=document.createElement("input");t.type="file",t.accept="image/*",t.onchange=()=>{var o;const a=(o=t.files)==null?void 0:o[0];if(!a)return;const n=new FileReader;n.onload=()=>{const r=new Image;r.onload=()=>{const i=document.createElement("div");i.className="sheetOverlay show",i.innerHTML=`
          <div class="sheetCard cropSheet" role="dialog" aria-modal="true">
            <div class="sheetHandle"></div>
            <div class="sheetHeader">
              <div>
                <h3>Adjust Profile Photo</h3>
                <p class="sheetSub">Drag to center and slide zoom</p>
              </div>
            </div>
            <div class="cropStageWrap">
              <canvas id="rdmCropCanvas" width="300" height="300"></canvas>
            </div>
            <label class="fieldBlock">
              <span>Zoom</span>
              <input id="rdmCropZoom" type="range" min="1" max="3" step="0.02" value="1">
            </label>
            <div class="sheetActions">
              <button type="button" class="btnSecondary" data-cancel>Cancel</button>
              <button type="button" class="btnPrimary" data-save>Save Photo</button>
            </div>
          </div>
        `,document.body.appendChild(i);const l=Ce(i),d=i.querySelector("#rdmCropCanvas"),u=i.querySelector("#rdmCropZoom"),h=d.getContext("2d"),m={scale:1,x:0,y:0,drag:!1,lx:0,ly:0},f=()=>{h.clearRect(0,0,300,300);const g=Math.max(300/r.width,300/r.height)*m.scale,k=r.width*g,S=r.height*g,w=(300-k)/2+m.x,M=(300-S)/2+m.y;h.save(),h.beginPath(),h.arc(150,150,146,0,Math.PI*2),h.clip(),h.drawImage(r,w,M,k,S),h.restore()};f(),u.oninput=v=>{m.scale=Number(v.target.value)||1,f()},d.onpointerdown=v=>{m.drag=!0,m.lx=v.clientX,m.ly=v.clientY,d.setPointerCapture(v.pointerId)},d.onpointermove=v=>{m.drag&&(m.x+=v.clientX-m.lx,m.y+=v.clientY-m.ly,m.lx=v.clientX,m.ly=v.clientY,f())},d.onpointerup=()=>{m.drag=!1},i.querySelector("[data-cancel]").onclick=l,i.addEventListener("click",v=>{v.target===i&&l()}),i.querySelector("[data-save]").onclick=async v=>{const g=v.currentTarget;g.disabled=!0;try{const k=document.createElement("canvas");k.width=320,k.height=320,k.getContext("2d").drawImage(d,0,0,320,320);const S=k.toDataURL("image/jpeg",.72);await e(S),l()}catch(k){g.disabled=!1,P((k==null?void 0:k.message)||"Photo save failed")}}},r.src=n.result},n.readAsDataURL(a)},t.click()}async function Yt({player:e,brandLogo:t}){var k,S;const o=document.createElement("canvas");o.width=1080,o.height=1350;const r=o.getContext("2d"),i=w=>new Promise((M,I)=>{const O=new Image;O.crossOrigin="anonymous",O.onload=()=>M(O),O.onerror=I,O.src=w}),l=(w,M,I,O,X,ae,B)=>{r.beginPath(),r.moveTo(w+X,M),r.arcTo(w+I,M,w+I,M+O,X),r.arcTo(w+I,M+O,w,M+O,X),r.arcTo(w,M+O,w,M,X),r.arcTo(w,M,w+I,M,X),r.closePath(),ae&&(r.fillStyle=ae,r.fill()),B&&(r.strokeStyle=B,r.lineWidth=2,r.stroke())},d=r.createLinearGradient(0,0,1080,1350);d.addColorStop(0,"#F5F7FB"),d.addColorStop(1,"#E8EEF8"),r.fillStyle=d,r.fillRect(0,0,1080,1350),l(40,40,1e3,1270,28,"#FFFFFF","#DCE4F0"),l(80,80,920,8,4,"#1D4ED8",null);let u=null;try{u=await i(t||E.logoPath)}catch{}u&&r.drawImage(u,84,120,74,74),r.textAlign="left",r.fillStyle="#0B1324",r.font='700 34px "Outfit", "Plus Jakarta Sans", sans-serif',r.fillText("REHAN DOMINATORS MAHUAWAN",176,156),r.fillStyle="#576780",r.font='600 18px "Plus Jakarta Sans", sans-serif',r.fillText("MAHUAWAN · GOPALGANJ · BIHAR",176,186);let h=null;try{h=await i(xt(e.image,t))}catch{h=u}if(h){r.save(),r.beginPath(),r.arc(1080/2,370,140,0,Math.PI*2),r.clip();const w=Math.max(280/h.width,280/h.height);r.drawImage(h,1080/2-h.width*w/2,370-h.height*w/2,h.width*w,h.height*w),r.restore(),r.strokeStyle="#1D4ED8",r.lineWidth=8,r.beginPath(),r.arc(1080/2,370,146,0,Math.PI*2),r.stroke()}r.textAlign="center",r.fillStyle="#0B1324",r.font='700 58px "Outfit", "Plus Jakarta Sans", sans-serif',r.fillText(b(e.name),1080/2,580),l(120,620,840,124,18,"#F5F7FB","#DCE4F0"),r.fillStyle="#1D4ED8",r.font='700 16px "Plus Jakarta Sans", sans-serif',r.fillText("PLAYER CODE",330,662),r.fillText("JERSEY NUMBER",750,662),r.fillStyle="#0B1324",r.font='700 30px "JetBrains Mono", monospace',r.fillText(se[e.id]||e.id,330,708),r.fillText(e.jersey?`#${e.jersey}`:"—",750,708),l(120,774,840,140,18,"#EAEFF7","#DCE4F0"),r.fillStyle="#1D4ED8",r.font='700 24px "Plus Jakarta Sans", sans-serif',r.fillText(b(e.role||""),1080/2,828),r.fillStyle="#27344D",r.font='600 20px "Plus Jakarta Sans", sans-serif',r.fillText(b(e.detail||"").slice(0,66),1080/2,872),r.fillStyle="#B45309",r.font='700 18px "Plus Jakarta Sans", sans-serif',r.fillText("ONE TEAM · ONE DREAM · ONE DOMINATION",1080/2,1234),r.fillStyle="#576780",r.font='600 15px "JetBrains Mono", monospace',r.fillText("RDM OFFICIAL · PLAYER IDENTITY CARD",1080/2,1266);const m=`${e.id}-${String(e.name||"PLAYER").replace(/\s+/g,"-")}-RDM-CARD.png`,f=await new Promise(w=>o.toBlob(w,"image/png"));if(f&&typeof navigator<"u"&&typeof navigator.share=="function"&&typeof File=="function")try{const w=new File([f],m,{type:"image/png"});if(typeof navigator.canShare=="function"?navigator.canShare({files:[w]}):!0){await navigator.share({files:[w],title:`${b(e.name)} · RDM Player Card`,text:`${b(e.name)} (${se[e.id]||e.id}) — Rehan Dominators Mahuawan`}),P("Player card ready to save or share");return}}catch(w){if(w&&w.name==="AbortError")return}const v=o.toDataURL("image/png");if(!!!((S=(k=window.Capacitor)==null?void 0:k.isNativePlatform)!=null&&S.call(k))){const w=document.createElement("a");w.href=v,w.download=m,document.body.appendChild(w),w.click(),w.remove(),P("Player card downloaded");return}rt(v,`${b(e.name)} · RDM Player Card`),P("Player card generated")}function an({currentVersion:e,latestVersion:t,notes:a,forceUpdate:n=!1,isNative:o=!1,needsInstallPermission:r=!1,onDownload:i,onOpenPermissionSettings:l,onSubscribeProgress:d}){if(document.getElementById("rdmUpdateSheetOverlay"))return;const u=document.createElement("div");u.id="rdmUpdateSheetOverlay",u.className="sheetOverlay show";let h=!!(o&&r);const m=o?h?"Allow App Updates Setting":`Update App In-Place (v${c(t)})`:`Download APK v${c(t)}`;u.innerHTML=`
    <div class="sheetCard confirmCard" role="dialog" aria-modal="true" aria-label="App Update Available">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <span class="sectionKicker">New Version Available</span>
          <h3>${o?"Update RDM Official":"Update RDM Official APK"}</h3>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:10px;">
        <span class="metaCode">Installed: v${c(e)}</span>
        <span class="metaCode" style="color:var(--brand-text);">Latest: v${c(t)}</span>
      </div>
      <p class="confirmMessage richText" style="margin-bottom:12px;">${c(a||"A newer version of RDM Official Android App is ready to install right inside the app without uninstalling.")}</p>
      <div class="updatePermBox" id="rdmUpdatePermBox" style="${h?"":"display:none;"}">
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
        <button type="button" class="btnPrimary" data-download>${m}</button>
      </div>
    </div>
  `,document.body.appendChild(u);const f=Ce(u),v=u.querySelector("#rdmUpdatePermBox"),g=u.querySelector("#rdmUpdateProgressWrap"),k=u.querySelector("#rdmUpdateStatusText"),S=u.querySelector("#rdmUpdatePercentText"),w=u.querySelector("#rdmUpdateProgressFill"),M=u.querySelector("#rdmUpdateErrorBox"),I=u.querySelector("[data-download]"),O=u.querySelector("[data-later]");let X=()=>{};const ae=()=>{X(),f()};typeof d=="function"&&(X=d(({percent:B=0,downloadedBytes:D=0,totalBytes:_=0})=>{g.style.display="block",M.style.display="none";const V=Math.max(0,Math.min(100,Number(B)||0));w.style.width=`${V}%`,S.textContent=`${V}%`;const J=(D/(1024*1024)).toFixed(1);if(_>0){const ee=(_/1048576).toFixed(1);k.textContent=V>=100?"Verifying & opening Android updater...":`Downloading ${J} / ${ee} MB...`}else k.textContent=`Downloading ${J} MB...`})),O&&(O.onclick=()=>{try{sessionStorage.setItem(`rdm-dismiss-update-${t}`,"1")}catch{}ae()}),n||u.addEventListener("click",B=>{if(B.target===u){try{sessionStorage.setItem(`rdm-dismiss-update-${t}`,"1")}catch{}ae()}}),I.onclick=async()=>{if(M.style.display="none",o&&h){h=!1,v.style.display="none",I.textContent=`Update App In-Place (v${t})`,typeof l=="function"&&await l();return}if(!o){typeof i=="function"&&i(),n||ae();return}I.disabled=!0,I.textContent="Downloading Update...",g.style.display="block",k.textContent="Starting secure download...";try{const B=await(i==null?void 0:i());if(B&&B.needsPermission){h=!0,v.style.display="flex",g.style.display="none",I.disabled=!1,I.textContent="Allow App Updates Setting";return}k.textContent="Installer ready. Confirm Update on Android prompt.",S.textContent="100%",w.style.width="100%",I.disabled=!1,I.textContent=`Install Update v${t}`,n||setTimeout(()=>ae(),900)}catch(B){I.disabled=!1,I.textContent=`Retry Update (v${t})`,M.textContent=(B==null?void 0:B.message)||"Unable to download update. Please check your connection and try again.",M.style.display="block"}}}const ht=[{id:"royal",label:"Royal Cobalt",desc:"Crisp Daylight Frost & Midnight Cobalt",swatches:["#F5F7FB","#FFFFFF","#1D4ED8"]},{id:"floodlight",label:"Floodlight Navy",desc:"Deep Stadium Navy & Championship Gold",swatches:["#070C18","#0F172A","#2563EB"]},{id:"emerald",label:"Pavilion Emerald",desc:"Classic Turf Mint & Pavilion Emerald",swatches:["#F6F9F7","#FFFFFF","#0F5132"]},{id:"crimson",label:"Test Crimson",desc:"Editorial Chalk & Cricket Leather Crimson",swatches:["#FAF7F6","#FFFFFF","#9F1239"]}],p={screen:"public",portalMode:"public",portalPlayerId:null,publicTab:"home",matchesSubTab:"fixtures",galleryAlbum:"ALL",squadQuery:"",squadFilter:"ALL",detailPlayerId:null,morePage:"news",adminTab:"overview",playerAuthTab:"password",playerAuthSelectedId:"RDM001",drawerOpen:!1,theme:rn(),loginError:"",loginBusy:!1,playerLoginError:"",playerLoginBusy:!1,lastBackPressAt:0},C=[];function Xt(){return{screen:p.screen,publicTab:p.publicTab,matchesSubTab:p.matchesSubTab,detailPlayerId:p.detailPlayerId,morePage:p.morePage,adminTab:p.adminTab,playerAuthSelectedId:p.playerAuthSelectedId}}function nn(e,t){return e&&t&&e.screen===t.screen&&e.publicTab===t.publicTab&&e.matchesSubTab===t.matchesSubTab&&e.detailPlayerId===t.detailPlayerId&&e.morePage===t.morePage&&e.adminTab===t.adminTab&&e.playerAuthSelectedId===t.playerAuthSelectedId}function ke(e){return e.screen==="playerDetail"&&e.detailPlayerId?`#player-${e.detailPlayerId}`:e.screen==="subpage"?`#section-${e.morePage}`:e.screen==="playerPortal"&&p.portalPlayerId?`#portal-${p.portalPlayerId}`:e.screen==="playerAuth"?"#player-login":e.screen==="portalAuth"?"#portal-verify":e.screen==="admin"?`#admin-${e.adminTab}`:`#${e.publicTab||"home"}`}function ft(e){p.screen=e.screen,p.publicTab=e.publicTab||"home",p.matchesSubTab=e.matchesSubTab||"fixtures",p.detailPlayerId=e.detailPlayerId||null,p.morePage=e.morePage||"news",p.adminTab=e.adminTab||"overview",e.playerAuthSelectedId&&(p.playerAuthSelectedId=e.playerAuthSelectedId),p.drawerOpen=!1,A(),window.scrollTo({top:0,behavior:"auto"})}function T(e,{push:t=!0,replace:a=!1}={}){if(e.screen==="admin"&&(x()||(e={...e,screen:"portalAuth"})),e.screen==="playerPortal"){const r=e.portalPlayerId||p.portalPlayerId||he();!r||!Me(r)&&!x()?e={screen:"playerAuth",playerAuthSelectedId:r||p.playerAuthSelectedId||"RDM001"}:(p.portalMode="player",p.portalPlayerId=r)}e.screen,e.screen;const n={...Xt(),...e},o=C[C.length-1];if(!nn(o,n)){if(a&&C.length>0){C[C.length-1]=n;try{window.history.replaceState({rdmIdx:C.length-1},"",ke(n))}catch{}}else if(t||C.length===0){C.push(n),C.length>24&&C.shift();try{window.history.pushState({rdmIdx:C.length-1},"",ke(n))}catch{}}}ft(n)}function ue(e){p.drawerOpen=!!e;const t=document.getElementById("drawerOverlay");if(t){const a=t.querySelector(".drawerPanel");a&&(a.style.transform=""),t.classList.remove("dragging"),t.classList.toggle("open",p.drawerOpen),t.setAttribute("aria-hidden",p.drawerOpen?"false":"true")}else A()}function Jt(){if(nt())return Kt(),!0;if(p.drawerOpen)return ue(!1),!0;if(C.length>1){C.pop();const e=C[C.length-1];try{window.history.replaceState({rdmIdx:C.length-1},"",ke(e))}catch{}return ft(e),!0}return!1}function Qt(e){return e==="leather"||e==="turf"||e==="azure"||e==="alabaster"||e==="daylight"?"royal":e==="carbon"||e==="night"?"floodlight":e==="copper"?"crimson":ht.some(t=>t.id===e)?e:"royal"}function rn(){try{const e=localStorage.getItem("rdm-app-theme")||"royal",t=Qt(e);return t!==e&&localStorage.setItem("rdm-app-theme",t),t}catch{return"royal"}}function Zt(e){var t;return((t=ht.find(a=>a.id===e))==null?void 0:t.label)||"Royal Cobalt"}function Be(e){const t=Qt(e);p.theme=t,document.documentElement.setAttribute("data-theme",t);try{localStorage.setItem("rdm-app-theme",t)}catch{}Ft(t),A()}function te(){return s.brandLogo||E.logoPath}function qe(){return K(s.apkDownloadUrl)||E.apkDownloadUrl}function on(){return K(s.apkReleasesUrl)||E.apkReleasesUrl}function Ve(){return String(s.nativeVersionName||s.appVersion||Q.versionName||E.appVersion||"1.3.0").replace(/^v/i,"")}function Ie(e){const t=xt(e,te()),a=t===te()||t===E.logoPath;return{src:t,cls:a?"avatarCircle is-crest":"avatarCircle is-photo"}}function ie(e){return{home:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/></svg>',squad:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',matches:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',gallery:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>',more:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>'}[e]||""}function ea(e){return{home:ie("home"),squad:ie("squad"),matches:ie("matches"),gallery:ie("gallery"),more:ie("more"),xi:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',records:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',tournaments:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 8.5 15.5 15.5"/><path d="M15.5 8.5 8.5 15.5"/></svg>',honours:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',news:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',updates:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',socials:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',about:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',download:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>'}[e]||""}function le({title:e="RDM Official",showBack:t=!1,showPublicNav:a=!0,rightActionHtml:n=""}){const o=[["home","Home"],["squad","Squad"],["matches","Matches"],["gallery","Gallery"],["more","More"]],r=t?`<button type="button" class="menuCircleBtn" id="btnStepBack" aria-label="Go back">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
       </button>`:`<button type="button" class="menuCircleBtn" id="btnOpenDrawer" aria-label="Open team menu">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
       </button>`,i=n||'<button type="button" class="topActionBtn" id="btnPickTheme">Theme</button>';return`
    <header class="topBar">
      <div class="topBarInner">
        <div class="topLeftGroup">
          ${r}
          <button type="button" class="topBrand" id="btnBrandHome" aria-label="RDM Official Home">
            <img src="${c(te())}" alt="RDM Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${E.logoPath}'">
            <span class="topBrandText">${c(e)}</span>
          </button>
        </div>
        ${a?`
          <nav class="topDesktopNav" aria-label="Primary navigation">
            ${o.map(([l,d])=>`
              <button type="button" class="topNavLink ${p.screen==="public"&&p.publicTab===l?"active":""}" data-public-tab="${l}">${d}</button>
            `).join("")}
          </nav>
        `:"<div></div>"}
        <div class="topBarActions">
          ${i}
        </div>
      </div>
    </header>
  `}function sn(){const e=[["xi","Playing XI"],["records","Team Records"],["tournaments","Tournaments & H2H"],["honours","Team Honours"],["news","Team News"],["updates","Official Updates"],["socials","Channels & Contact"],["about","About RDM"],["download","Get Android App"]],t=dt(),a=`<button type="button" class="btnPrimary btnSm btnFull" id="btnOpenPlayerPortal">${t?`My Portal · ${c(b(t.name))}`:"Player Login"}</button>`,n=`<button type="button" class="btnSecondary btnSm btnFull" id="btnOpenAdminPortal">${x()?"Open Admin Console":"Admin Panel"}</button>`;return`
    <div class="drawerOverlay ${p.drawerOpen?"open":""}" id="drawerOverlay" role="dialog" aria-modal="true" aria-hidden="${p.drawerOpen?"false":"true"}" aria-label="Team navigation menu">
      <aside class="drawerPanel" id="drawerPanel">
        <div class="drawerHeader">
          <div class="drawerBrandLockup">
            <img src="${c(te())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${E.logoPath}'">
            <div>
              <strong>RDM Official</strong>
              <span>Cricket Team · Mahuawan, Bihar</span>
            </div>
          </div>
        </div>

        <div class="drawerBody">
          <div class="drawerGroupLabel">Team Sections</div>
          ${e.map(([o,r])=>`
            <button type="button" class="drawerNavBtn ${p.screen==="subpage"&&p.morePage===o?"active":""}" data-open-subpage="${o}">
              <span class="drawerNavLeft">
                <span class="drawerNavIcon" aria-hidden="true">${ea(o)}</span>
                <span>${r}</span>
              </span>
              <span aria-hidden="true">›</span>
            </button>
          `).join("")}
        </div>

        <div class="drawerFooter">
          <button type="button" class="btnSecondary btnSm btnFull" id="btnDrawerTheme">Theme · ${c(Zt(p.theme))}</button>
          ${a}
          ${n}
        </div>
      </aside>
    </div>
  `}function Ne(){const e=dt();return`
    <footer class="webFooter">
      <div class="webFooterInner">
        <div class="webFooterBrand">
          <img src="${c(te())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${E.logoPath}'">
          <div>
            <strong>${c(b(E.orgName))}</strong>
            <span>${c(E.location)} · Est. ${c(E.founded)}</span>
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
          <button type="button" class="webFooterLink" data-ext-url="${c(E.captainContactUrl)}">WhatsApp Captain ↗</button>
          ${`<button type="button" class="webFooterLink" id="btnFooterPlayerPortal">${e?"My Player Portal":"Player Login"}</button>`}
          <button type="button" class="webFooterLink" id="btnFooterAdminPortal">Admin Panel</button>
        </div>
      </div>
    </footer>
  `}function ln(){return`
    <nav class="bottomNav" aria-label="Mobile navigation">
      <div class="bottomNavGrid">
        ${[["home","Home"],["squad","Squad"],["matches","Matches"],["gallery","Gallery"],["more","More"]].map(([t,a])=>`
          <button type="button" class="navTabBtn ${p.screen==="public"&&p.publicTab===t?"active":""}" data-public-tab="${t}" aria-current="${p.screen==="public"&&p.publicTab===t?"page":"false"}">
            <span class="navIconPill">${ie(t)}</span>
            <span>${a}</span>
          </button>
        `).join("")}
      </div>
    </nav>
  `}function cn(){const e=s.matches.find(u=>!/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${u.matchStatus||""} ${u.status||""} ${u.note||""}`)),t=s.matches.find(u=>/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${u.matchStatus||""} ${u.status||""} ${u.note||""}`)),a=s.updates.find(u=>u.pinned)||s.updates[0],n=s.news.find(u=>u.pinned)||s.news[0],o=a||n,r=s.players.find(u=>u.id==="RDM001")||s.players[0],i=s.players.find(u=>u.id==="RDM003"),l=s.players.find(u=>u.id==="RDM006"),d=[r,i,l].filter(Boolean);return`
    ${s.loadError?`<div class="infoBanner"><span>${c(s.loadError)}</span><button type="button" class="btnSecondary btnSm" id="btnRetrySync">Retry</button></div>`:""}

    <section class="heroBannerCard">
      <div class="heroPhotoLayer" aria-hidden="true">
        <img src="${c(E.heroImagePath)}" alt="" referrerPolicy="no-referrer">
      </div>
      <div class="heroBannerGrid">
        <div class="heroBannerInner">
          <div class="heroBannerTop">
            <img class="heroBannerLogo" src="${c(te())}" alt="RDM Official Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${E.logoPath}'">
            <div class="heroBannerCopy">
              <span class="heroEyebrow">OFFICIAL CRICKET TEAM · EST. ${c(E.founded)}</span>
              <h1 class="heroDisplayTitle">${c(E.orgName)}</h1>
              <p>${c(E.motto)}</p>
            </div>
          </div>
          <div class="heroBannerBottom">
            <div class="heroBannerMeta">
              <span>${c(E.locationLabel)}</span>
              <span aria-hidden="true">·</span>
              <span>Limited Overs &amp; T20</span>
            </div>
            <div class="heroToolbarActions">
              <button type="button" class="heroGhostBtn" data-open-subpage="news">Team News</button>
              <button type="button" class="heroPrimaryBtn" data-public-tab="squad">Explore Squad</button>
            </div>
          </div>
        </div>
        <aside class="heroDossierCard" aria-label="Team Almanac">
          <div class="heroDossierHead">
            <span>Official Almanac</span>
            <strong>RDM · ${c(E.founded)}</strong>
          </div>
          <div class="heroDossierStats">
            <div>
              <strong>2× MPL</strong>
              <span>Champions</span>
            </div>
            <div>
              <strong class="num">${s.players.length}</strong>
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
          <strong class="kpiValue num">${s.players.length}</strong>
          <span class="kpiLabel">Squad Players</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${ie("squad")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-open-subpage="honours">
        <div>
          <strong class="kpiValue num">${s.honours.length}</strong>
          <span class="kpiLabel">Team Honours</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${ea("honours")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="matches">
        <div>
          <strong class="kpiValue num">${s.matches.length}</strong>
          <span class="kpiLabel">Matches</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${ie("matches")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="gallery">
        <div>
          <strong class="kpiValue num">${s.gallery.length}</strong>
          <span class="kpiLabel">Gallery Photos</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${ie("gallery")}</span>
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
          ${e||t?ta(e||t):'<p class="sectionSub" style="margin-top:6px;">No upcoming match has been scheduled yet. Check back or contact team management.</p>'}
        </div>
      </article>

      <article class="surfaceCard">
        <div>
          <div class="sectionHeader" style="margin-bottom:12px;">
            <div>
              <span class="sectionKicker">Official Dispatch</span>
              <h2 class="sectionTitle">${o?c(b(o.title||"Team Update")):"Team Announcements"}</h2>
            </div>
            <button type="button" class="btnGhost btnSm" data-open-subpage="updates">All Updates ›</button>
          </div>
          ${o?`
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${c(b(o.text||""))}</p>
            ${o.date?`<p class="sectionSub num" style="margin-top:8px;">Published ${c(o.date)}</p>`:""}
          `:'<p class="sectionSub">Official news, fixtures, and team notices appear here when posted by team management.</p>'}
        </div>
        ${a!=null&&a.url&&K(a.url)?`
          <div style="margin-top:14px;">
            <button type="button" class="btnSecondary btnSm" data-ext-url="${c(K(a.url))}">Open Link ↗</button>
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
        ${d.map(u=>{const h=Ie(u.image);return`
            <button type="button" class="leaderCard" data-open-player="${c(u.id)}">
              <img class="${h.cls}" src="${c(h.src)}" alt="${c(u.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${E.logoPath}'">
              <div>
                <div class="leaderCardMeta">${c(b(u.role))}</div>
                <div class="leaderCardTitle">${c(b(u.name))}</div>
                ${u.detail?`<div class="leaderCardSub">${c(b(u.detail))}</div>`:""}
              </div>
            </button>
          `}).join("")}
      </div>
    </section>
  `}function ta(e){const t=b(e.matchStatus||e.status||"Match"),a=[e.date,e.time,e.venueName||e.venue].filter(Boolean).map(b).join(" · ");return`
    <div>
      <div class="matchCardHead">
        <strong>RDM vs ${c(b(e.opponent||"Opponent"))}</strong>
        <span class="matchStatusText">${c(t)}</span>
      </div>
      ${a?`<div class="num" style="font-size:0.78rem;color:var(--ink-muted);margin-bottom:8px;">${c(a)}</div>`:""}
      ${e.ourScore||e.oppScore?`
        <div class="matchScoreRow num">
          <span>RDM: ${c(e.ourScore||"—")}</span>
          <span>${c(b(e.opponent||"Opp"))}: ${c(e.oppScore||"—")}</span>
        </div>
      `:""}
      ${e.result||e.note?`<p class="richText" style="margin:6px 0 0;font-size:0.84rem;color:var(--ink-secondary);">${c(b(e.result?`${e.result}${e.margin?" · "+e.margin:""}`:e.note))}</p>`:""}
      ${e.potm?`<p style="margin:6px 0 0;font-size:0.8rem;font-weight:700;color:var(--brand-text);">Player of the Match: ${c(b(e.potm))}</p>`:""}
    </div>
  `}function dn(){const e=p.squadQuery.trim().toLowerCase(),t=s.players.filter(a=>{const n=String(a.role||"").toUpperCase();return p.squadFilter==="ALL"||p.squadFilter==="LEADERS"&&(n.includes("CAPTAIN")||n.includes("KEEPER"))||p.squadFilter==="ALLROUNDER"&&n.includes("ALL-ROUNDER")||p.squadFilter==="BATSMAN"&&n.includes("BATSMAN")&&!n.includes("ALL-ROUNDER")?e?`${a.name} ${a.role} ${a.detail} ${a.id} ${se[a.id]||""} ${a.jersey||""}`.toLowerCase().includes(e):!0:!1});return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Official Roster</span>
        <h2 class="sectionTitle">RDM Squad</h2>
        <p class="sectionSub"><span class="num">${s.players.length}</span> registered players</p>
      </div>
    </div>

    <input id="squadSearchInput" class="searchInput" type="search" placeholder="Search player name, role, or jersey..." value="${c(p.squadQuery)}">

    <div class="filterRow">
      ${[["ALL","All Players"],["LEADERS","Leadership"],["ALLROUNDER","All-Rounders"],["BATSMAN","Batsmen"]].map(([a,n])=>`<button type="button" class="segTab ${p.squadFilter===a?"active":""}" data-squad-filter="${a}">${n}</button>`).join("")}
    </div>

    ${t.length?`
      <div class="squadGrid">
        ${t.map(a=>{const n=se[a.id]||a.id,o=Ie(a.image);return`
            <button type="button" class="playerCard" data-open-player="${c(a.id)}">
              <img class="playerCardAvatar ${o.cls}" src="${c(o.src)}" alt="${c(a.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${E.logoPath}'">
              <div class="playerCardBody">
                <span class="metaCode">${c(n)}${a.jersey?" · #"+c(a.jersey):""}</span>
                <h3>${c(b(a.name))}</h3>
                <div class="playerCardRole">${c(b(a.role))}</div>
                ${a.detail?`<div class="playerCardDetail">${c(b(a.detail))}</div>`:""}
              </div>
              <span class="chevron" aria-hidden="true">›</span>
            </button>
          `}).join("")}
      </div>
    `:'<div class="emptyState">No players match your current filter.</div>'}
  `}function un(){let e="";return p.matchesSubTab==="fixtures"?e=s.matches.length?`<div class="stackList">${s.matches.map(t=>`<article class="surfaceCard">${ta(t)}</article>`).join("")}</div>`:'<div class="emptyState">No fixtures or match results added yet.</div>':p.matchesSubTab==="xi"?e=aa():e=na(),`
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
  `}function aa(){return s.lineups.length?`<div class="stackList">${s.lineups.map(e=>`
    <article class="surfaceCard">
      <h3 style="margin:0 0 4px;font-size:1.25rem;">${c(b(e.title||"Playing XI"))}</h3>
      ${e.match?`<p style="margin:0 0 10px;font-size:0.8125rem;color:var(--ink-muted);">${c(b(e.match))}</p>`:""}
      <div class="xiGrid num">
        ${(e.players||[]).map((t,a)=>{const n=s.players.find(r=>r.id===t),o=`${a+1}. ${b((n==null?void 0:n.name)||t)}`;return n?`<button type="button" class="xiPlayerBtn" data-open-player="${c(t)}">${c(o)}</button>`:`<div style="padding:6px 8px;">${c(o)}</div>`}).join("")}
      </div>
      ${(e.subs||[]).length?`
        <p style="margin:10px 0 0;font-size:0.78rem;color:var(--ink-muted);">
          Substitutes: ${e.subs.map(t=>{var a;return c(b(((a=s.players.find(n=>n.id===t))==null?void 0:a.name)||t))}).join(" · ")}
        </p>
      `:""}
    </article>
  `).join("")}</div>`:'<div class="emptyState">No Playing XI published yet.</div>'}function na(){return s.tournaments.length>0||s.records.length>0||s.opponents.length>0?`
    <div class="stackList">
      ${s.tournaments.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">${c(b(t.status||"Tournament"))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${c(b(t.name||"Tournament"))}</h3>
          <p class="sectionSub num">${[t.season,t.position,t.venueName||t.venue].filter(Boolean).map(b).join(" · ")}</p>
          ${t.fixtures?`<p class="richText" style="margin:8px 0 0;font-size:0.82rem;color:var(--ink-secondary);">${c(t.fixtures)}</p>`:""}
        </article>
      `).join("")}
      ${s.records.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">${c(b(t.season||"Team Record"))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${c(b(t.title||"Record"))}</h3>
          <p style="margin:0;font-weight:700;color:var(--brand-text);" class="num">${c(b(t.value||""))}${t.player?" · "+c(b(t.player)):""}</p>
        </article>
      `).join("")}
      ${s.opponents.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">Head-to-Head</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">RDM vs ${c(b(t.name||"Opponent"))}</h3>
          <p class="sectionSub num">${Number(t.played||0)} Played · ${Number(t.won||0)} Won · ${Number(t.lost||0)} Lost</p>
        </article>
      `).join("")}
    </div>
  `:'<div class="emptyState">No tournaments or team records recorded yet.</div>'}function ra(){return`
    <div class="honoursGrid">
      ${s.honours.map(e=>`
        <article class="honourCard">
          <button type="button" class="honourMediaBtn" data-zoom-src="${c(e.image||te())}" data-zoom-cap="${c(`${e.year} · ${e.title} — ${e.sub}`)}">
            <img src="${c(e.image||te())}" alt="${c(e.title)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${E.logoPath}'">
          </button>
          <div class="honourCardBody">
            <div class="honourCardTop">
              <span class="metaCode">${c(e.year)}</span>
              <span class="honourTapHint">Tap to view full</span>
            </div>
            <h3 class="honourCardTitle">${c(b(e.title))}</h3>
            <p class="honourCardSub">${c(b(e.sub))}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `}function pn(){const e=["ALL","TEAM PHOTOS","MEMORIES","UPDATES"],t=s.gallery.filter(a=>{const n=String(a.album||"MEMORIES").toUpperCase();return p.galleryAlbum==="ALL"?!["MATCHES","TROPHIES"].includes(n):n===p.galleryAlbum});return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Team Memories</span>
        <h2 class="sectionTitle">Team Gallery</h2>
      </div>
    </div>

    <div class="filterRow">
      ${e.map(a=>`<button type="button" class="segTab ${p.galleryAlbum===a?"active":""}" data-gallery-album="${a}">${c(b(a))}</button>`).join("")}
    </div>

    ${t.length?`
      <div class="galleryGrid">
        ${t.map((a,n)=>`
          <button type="button" class="galleryTile" data-zoom-gallery="${n}">
            <img src="${c(a.image)}" alt="${c(a.caption||"RDM Memory")}" referrerPolicy="no-referrer">
            <div class="galleryTileCaption">
              <strong>${c(b(a.album||"Memories"))}</strong>
              <span>${c(b(a.caption||"RDM Memory"))}</span>
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
    ${ra()}
  `}function mn(){const e=Bt(),t=dt();return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Preferences &amp; Team Channels</span>
        <h2 class="sectionTitle">Settings &amp; More</h2>
        <p class="sectionSub">Use the top-left menu drawer to browse News, Records, Playing XI, and Team History.</p>
      </div>
    </div>

    ${`
      <section class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:12px;">
          <div>
            <span class="sectionKicker">Team Portals</span>
            <h3 class="sectionTitle" style="font-size:1.25rem;">Account &amp; Profile Login</h3>
            <p class="sectionSub">Access your personal Player Profile Portal or Management Admin Console inside the app.</p>
          </div>
        </div>
        <div class="portalAccessGrid">
          ${`
            <div class="portalAccessCard">
              <div>
                <span class="sectionKicker">${t?`Signed In · ${c(se[t.id]||t.id)}`:"Squad Member"}</span>
                <h4>${t?c(b(t.name)):"Player Profile Login"}</h4>
                <p>${t?"Update your profile photo, jersey number, nickname, bio, socials, and match availability.":"Sign in with your player password or Firebase account to edit your own profile live."}</p>
              </div>
              <div class="rowActions">
                <button type="button" class="btnPrimary btnSm" id="btnMorePlayerPortal">${t?"Open My Portal":"Player Login"}</button>
                ${t?'<button type="button" class="btnSecondary btnSm" id="btnMorePlayerLogout">Sign Out</button>':""}
              </div>
            </div>
          `}
          ${`
            <div class="portalAccessCard">
              <div>
                <span class="sectionKicker">${x()?"Unlocked · Live Sync":"Management"}</span>
                <h4>Admin Panel</h4>
                <p>${x()?"Manage squad roster, matches, Playing XI, gallery, honours, and APK updates.":"Unlock the team admin console to publish matches, lineups, and squad changes."}</p>
              </div>
              <div class="rowActions">
                <button type="button" class="btnSecondary btnSm" id="btnMoreAdminPortal">${x()?"Open Admin Console":"Admin Login"}</button>
              </div>
            </div>
          `}
        </div>
      </section>
    `}

    <section class="surfaceCard">
      <div class="sectionHeader" style="margin-bottom:12px;">
        <div>
          <span class="sectionKicker">Theme Studio</span>
          <h3 class="sectionTitle" style="font-size:1.25rem;">Appearance &amp; Palette</h3>
          <p class="sectionSub">Active: ${c(Zt(p.theme))}</p>
        </div>
      </div>
      <div class="themeGrid">
        ${ht.map(a=>`
          <button type="button" class="themeChoiceRow ${p.theme===a.id?"active":""}" data-quick-theme="${a.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${a.swatches.map(n=>`<span style="background:${n}"></span>`).join("")}
            </div>
            <div class="themeChoiceCopy">
              <strong>${c(a.label)}</strong>
              <span>${c(a.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${p.theme===a.id?"Active":"Apply"}</span>
          </button>
        `).join("")}
      </div>
    </section>

    <section class="surfaceCard">
      <span class="sectionKicker">Connect</span>
      <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:10px;">Official Channels &amp; Contact</h3>
      <div class="linkRowWrap">
        <button type="button" class="linkActionBtn" data-ext-url="${c(E.captainContactUrl)}">WhatsApp Captain ↗</button>
        ${s.socials.filter(a=>K(a.url)).map(a=>`
          <button type="button" class="linkActionBtn" data-ext-url="${c(K(a.url))}">${c(b(a.displayName||a.name))} ↗</button>
        `).join("")}
      </div>
    </section>

    <section class="surfaceCard">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Official App · v${c(Ve())}${s.otaBuild?` · OTA #${s.otaBuild}`:""}</span>
          <h3 class="sectionTitle" style="font-size:1.22rem;">App &amp; Sync</h3>
          <p class="sectionSub">${Je()?`Installed Build v${c(s.nativeVersionName||Q.versionName)} · Auto-Update Active`:"Sync live team data or open the Android App & Updates centre"}</p>
        </div>
        <div class="rowActions">
          <button type="button" class="btnPrimary btnSm" data-open-subpage="download">App &amp; Updates ›</button>
          <button type="button" class="btnSecondary btnSm" id="btnRefreshClub">Sync Team Data</button>
          ${e?'<button type="button" class="btnSecondary btnSm" id="btnInstallWebApp">Install Web App</button>':""}
        </div>
      </div>
    </section>
  `}function bn(){const e=s.players.find(l=>l.id===p.detailPlayerId);if(!e)return`
      ${le({title:"Player Profile",showBack:!0,showPublicNav:!0})}
      <div class="tabContent fullPageContent">
        <div class="emptyState">Player record not found.</div>
      </div>
      ${Ne()}
    `;const t=Ie(e.image),a=s.stats.find(l=>l.playerId===e.id),n=s.availability.find(l=>l.playerId===e.id),o=se[e.id]||e.id,r=(Array.isArray(e.socials)?e.socials:[]).filter(l=>K((l==null?void 0:l.url)||l)),i=a&&(Number(a.matches)>0||Number(a.runs)>0||Number(a.wickets)>0||Number(a.highScore)>0);return`
    ${le({title:b(e.name),showBack:!0,showPublicNav:!0})}
    <div class="tabContent fullPageContent">
      <section class="fullProfileHero">
        <img class="fullProfileAvatar ${t.cls}" src="${c(t.src)}" alt="${c(e.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${E.logoPath}'">
        <div>
          <span class="metaCode">${c(o)} · ${c(e.id)}${e.jersey?" · #"+c(e.jersey):""}</span>
          <h1 class="fullProfileName">${c(b(e.name))}</h1>
          <div class="fullProfileRole">${c(b(e.role))}</div>
          ${e.detail?`<p class="fullProfileMeta richText" style="margin:6px auto 0;">${c(b(e.detail))}</p>`:""}
          ${e.nick?`<p class="sectionSub" style="margin-top:6px;">Nickname: ${c(b(e.nick))}</p>`:""}
          ${n!=null&&n.status?`<p class="sectionSub" style="margin-top:4px;font-weight:700;color:var(--brand-text);">Match Status: ${c(b(n.status))}</p>`:""}
        </div>
        <div class="rowActions" style="justify-content:center;">
          <button type="button" class="btnPrimary btnSm" id="btnDownloadDetailCard">Download Player Card</button>
          ${`<button type="button" class="btnSecondary btnSm" id="btnDetailPlayerPortal" data-detail-login-player="${c(e.id)}">${Me(e.id)||x()?"Edit My Profile":"Player Login"}</button>`}
        </div>
      </section>

      ${e.bio?`
        <section class="surfaceCard">
          <span class="sectionKicker">About Player</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:6px;">Player Biography</h2>
          <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.9rem;">${c(b(e.bio))}</p>
        </section>
      `:""}

      <section class="surfaceCard">
        <span class="sectionKicker">Performance</span>
        <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Verified Career Statistics</h2>
        ${i?`
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
            <span>Best: ${c(a.bestBowling||"—")}</span>
          </div>
        `:'<p class="sectionSub">No verified career statistics recorded for this player yet.</p>'}
      </section>

      ${r.length?`
        <section class="surfaceCard">
          <span class="sectionKicker">Connect</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Official Social Links</h2>
          <div class="linkRowWrap">
            ${r.map((l,d)=>{const u=K(typeof l=="string"?l:l.url),h=typeof l=="string"?`Social ${d+1}`:l.name||`Social ${d+1}`;return`<button type="button" class="linkActionBtn" data-ext-url="${c(u)}">${c(b(h))} ↗</button>`}).join("")}
          </div>
        </section>
      `:""}
    </div>
    ${Ne()}
  `}function yn(){const t={news:"Team News",updates:"Official Updates",records:"Team Records",tournaments:"Tournaments & H2H",xi:"Playing XI",honours:"Team Honours",socials:"Channels & Contact",about:"About RDM",download:"Get Android App"}[p.morePage]||"Team Info";let a="";if(p.morePage==="news")a=s.news.length?`<div class="stackList">${s.news.map(n=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${n.pinned?"Pinned Announcement":"Team News"}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${c(b(n.title||"Announcement"))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${c(b(n.text||""))}</p>
          </article>
        `).join("")}</div>`:'<div class="emptyState">No team news announcements posted yet.</div>';else if(p.morePage==="updates")a=s.updates.length?`<div class="stackList">${s.updates.map(n=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${c(b(n.category||"Official Update"))}${n.date?" · "+c(n.date):""}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${c(b(n.title||"Update"))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${c(b(n.text||""))}</p>
            ${n.url&&K(n.url)?`<div style="margin-top:12px;"><button type="button" class="btnSecondary btnSm" data-ext-url="${c(K(n.url))}">Open Link ↗</button></div>`:""}
          </article>
        `).join("")}</div>`:'<div class="emptyState">No official updates published yet.</div>';else if(p.morePage==="xi")a=aa();else if(p.morePage==="records")a=s.records.length?`<div class="stackList">${s.records.map(n=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${c(b(n.season||"Team Record"))}</span>
            <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:4px;">${c(b(n.title||"Record"))}</h3>
            <p style="margin:0;font-weight:700;color:var(--brand-blue);" class="num">${c(b(n.value||""))}${n.player?" · "+c(b(n.player)):""}</p>
          </article>
        `).join("")}</div>`:'<div class="emptyState">No team records recorded yet.</div>';else if(p.morePage==="tournaments")a=na();else if(p.morePage==="honours")a=ra();else if(p.morePage==="socials")a=`
      <div class="surfaceCard">
        <span class="sectionKicker">Direct Contact</span>
        <h3 class="sectionTitle" style="font-size:1.3rem;margin-bottom:8px;">Team Channels &amp; Captain</h3>
        <div class="linkRowWrap">
          <button type="button" class="linkActionBtn" data-ext-url="${c(E.captainContactUrl)}">WhatsApp Captain ↗</button>
          ${s.socials.filter(n=>K(n.url)).map(n=>`
            <button type="button" class="linkActionBtn" data-ext-url="${c(K(n.url))}">${c(b(n.displayName||n.name))} ↗</button>
          `).join("")}
        </div>
      </div>
    `;else if(p.morePage==="about")a=`
      <div class="surfaceCard">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
          <img src="${c(te())}" alt="RDM Logo" referrerPolicy="no-referrer" style="width:68px;height:68px;border-radius:50%;background:#FFFFFF;border:1.5px solid var(--border-strong);object-fit:cover;flex-shrink:0;">
          <div>
            <span class="sectionKicker">Est. ${c(E.founded)} · ${c(E.locationLabel)}</span>
            <h3 class="sectionTitle">${c(b(E.orgName))}</h3>
            <p class="sectionSub" style="font-weight:700;color:var(--brand-text);">${c(E.motto)}</p>
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
    `;else{const n=Bt(),o=je(),r=o.otaBuild?` · OTA #${o.otaBuild}`:"";a=`
      <div class="surfaceCard">
        <span class="sectionKicker">Official Android APK · v${c(o.latestVersion)}</span>
        <h3 class="sectionTitle" style="font-size:1.35rem;margin-bottom:8px;">RDM Official Android App</h3>
        <p style="margin:0 0 12px;color:var(--ink-secondary);font-size:0.9rem;">
          ${Je()?`You are running the native RDM Official Android App (v${c(o.currentVersion)}${c(r)}). Updates apply silently in the background or install right inside the app without uninstalling.`:"Download the latest RDM Official Android APK directly to your phone. All updates install smoothly in place while preserving your data."}
        </p>
        ${o.hasUpdate?`<div class="infoBanner" style="margin-bottom:12px;"><span>Update v${c(o.latestVersion)} ready — ${c(o.notes)}</span></div>`:""}
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;">
          <span class="metaCode">${Je()?`Installed: v${c(o.currentVersion)}${c(r)}`:`Web Version: v${c(o.currentVersion)}`}</span>
          <span class="metaCode">Latest APK: v${c(o.latestVersion)}</span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          ${re()?o.hasUpdate?`<button type="button" class="btnPrimary btnSm" id="btnDownloadLatestApk">Update In-Place (v${c(o.latestVersion)})</button>`:"":`<button type="button" class="btnPrimary btnSm" id="btnDownloadLatestApk">Download Latest APK (v${c(o.latestVersion)})</button>`}
          <button type="button" class="${re()&&!o.hasUpdate?"btnPrimary":"btnSecondary"} btnSm" id="btnCheckAppUpdate">Check for Update</button>
          ${n?'<button type="button" class="btnSecondary btnSm" id="btnInstallWebApp">Install Web App</button>':""}
          <button type="button" class="btnSecondary btnSm" data-public-tab="home">Back to Home</button>
        </div>
      </div>
    `}return`
    ${le({title:t,showBack:!0,showPublicNav:!0})}
    <div class="tabContent fullPageContent">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Rehan Dominators Mahuawan</span>
          <h1 class="sectionTitle">${c(t)}</h1>
        </div>
      </div>
      ${a}
    </div>
    ${Ne()}
  `}function oa(){return`
    ${le({title:"RDM Admin Panel",showBack:!0,showPublicNav:!1,rightActionHtml:'<button type="button" class="topActionBtn" id="btnPortalPublicView">Public View</button>'})}
    <div class="loginCardWrap">
      <div class="surfaceCard">
        <div class="loginLogoBox">
          <img src="${c(te())}" alt="RDM Crest" referrerPolicy="no-referrer">
        </div>
        <h2 class="sectionTitle" style="text-align:center;">Admin Panel Unlock</h2>
        <p class="sectionSub" style="text-align:center;margin-bottom:16px;">Enter your APK Admin Password to open the Admin Console. No username required. (Website Admin uses its separate private link.)</p>
        ${p.loginError?`<div class="errorBanner" style="margin-bottom:12px;">${c(p.loginError)}</div>`:""}
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
  `}function sa(){const e=s.players.length?s.players:[],t=e.find(i=>i.id===p.playerAuthSelectedId)||e[0]||null,a=(t==null?void 0:t.id)||p.playerAuthSelectedId||"RDM001",n=Ie(t==null?void 0:t.image),o=se[a]||a,r=p.playerAuthTab!=="firebase";return`
    ${le({title:"Player Profile Login",showBack:!0,showPublicNav:!1,rightActionHtml:'<button type="button" class="topActionBtn" id="btnPortalPublicView">Public View</button>'})}
    <div class="loginCardWrap">
      <div class="surfaceCard">
        <div class="loginLogoBox">
          <img id="playerLoginAvatar" class="${n.cls}" src="${c(n.src)}" alt="${c((t==null?void 0:t.name)||"RDM Crest")}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${E.logoPath}'">
        </div>
        <div class="loginSelectedMeta">
          <span class="metaCode" id="playerLoginMeta">${c(o)} · ${c(a)}</span>
          <h2 class="sectionTitle" id="playerLoginTitle" style="text-align:center;">${t?c(b(t.name)):"Player Profile Login"}</h2>
          <p class="sectionSub" id="playerLoginRole" style="text-align:center;margin-top:4px;">${t?c(b(t.role)):"Sign in to manage your RDM player profile"}</p>
        </div>

        <div class="loginModeTabs" role="tablist" aria-label="Player sign in method">
          <button type="button" class="segTab ${r?"active":""}" data-player-auth-tab="password" role="tab" aria-selected="${r?"true":"false"}">Player Password</button>
          <button type="button" class="segTab ${r?"":"active"}" data-player-auth-tab="firebase" role="tab" aria-selected="${r?"false":"true"}">Firebase Account</button>
        </div>

        ${p.playerLoginError?`<div class="errorBanner" style="margin-bottom:12px;">${c(p.playerLoginError)}</div>`:""}

        ${r?`
          <form id="rdmPlayerPasswordForm" class="formStack">
            <label class="fieldBlock">
              <span>Select Your Player Profile</span>
              <select id="playerLoginSelect" name="playerId" required>
                ${e.map(i=>{const l=se[i.id]||i.id;return`<option value="${c(i.id)}" ${i.id===a?"selected":""}>${c(b(i.name))} · ${c(i.id)} (${c(l)})</option>`}).join("")}
              </select>
            </label>
            <label class="fieldBlock">
              <span>Player Password</span>
              <div class="passwordWrap">
                <input id="playerLoginPassword" name="password" type="password" autocomplete="current-password" placeholder="Enter your player password" required>
                <button type="button" class="togglePwBtn" id="btnTogglePlayerPw">Show</button>
              </div>
            </label>
            <button type="submit" class="btnPrimary btnFull" id="btnPlayerLoginSubmit" ${p.playerLoginBusy?"disabled":""}>
              ${p.playerLoginBusy?"Unlocking Player Portal…":"Open My Player Profile"}
            </button>
          </form>
        `:`
          <form id="rdmPlayerFirebaseForm" class="formStack">
            <label class="fieldBlock">
              <span>Assigned Email</span>
              <input id="playerFbEmail" name="email" type="email" autocomplete="username" placeholder="player@rdm-official.in" required>
            </label>
            <label class="fieldBlock">
              <span>Account Password</span>
              <div class="passwordWrap">
                <input id="playerFbPassword" name="password" type="password" autocomplete="current-password" placeholder="Enter Firebase account password" required>
                <button type="button" class="togglePwBtn" id="btnTogglePlayerFbPw">Show</button>
              </div>
            </label>
            <button type="button" class="textLinkBtn" id="btnPlayerForgotPw">Forgot Password?</button>
            <button type="submit" class="btnPrimary btnFull" id="btnPlayerFbSubmit" ${p.playerLoginBusy?"disabled":""}>
              ${p.playerLoginBusy?"Signing In…":"Sign In & Open Portal"}
            </button>
          </form>
        `}
      </div>
    </div>
  `}function hn(){var u,h;const e=p.portalPlayerId||he();if(!e||!Me(e)&&!x())return sa();const t=s.players.find(m=>m.id===e);if(!t)return`
      ${le({title:"Player Portal",showBack:!0,showPublicNav:!1,rightActionHtml:'<button type="button" class="topActionBtn" id="btnPortalPublicView">Public View</button>'})}
      <div class="tabContent fullPageContent">
        <div class="emptyState">Player profile not found.</div>
      </div>
    `;const a=Ie(t.image),n=s.stats.find(m=>m.playerId===t.id),o=((u=s.availability.find(m=>m.playerId===t.id))==null?void 0:u.status)||"NOT SET",r=se[t.id]||t.id,i=(Array.isArray(t.socials)?t.socials:[]).map((m,f)=>typeof m=="string"?{name:`Social ${f+1}`,url:m}:{name:(m==null?void 0:m.name)||`Social ${f+1}`,url:(m==null?void 0:m.url)||""}).filter(m=>K(m.url)),l=ct(t.id)||ge(),d=n&&(Number(n.matches)>0||Number(n.runs)>0||Number(n.wickets)>0||Number(n.highScore)>0);return`
    ${le({title:`${b(t.name)} · Portal`,showBack:!0,showPublicNav:!1,rightActionHtml:'<button type="button" class="topActionBtn" id="btnPlayerLogout">Logout</button>'})}
    <div class="tabContent fullPageContent">
      <div class="infoBanner">
        <span>${l?`Cloud Sync Active (${c(((h=s.user)==null?void 0:h.email)||"Verified")}) — Edits update Website &amp; Android App live.`:`Player Session Unlocked (${c(r)}) — Edits sync live to Website &amp; Android App.`}</span>
        <div class="rowActions">
          ${l?"":'<button type="button" class="btnSecondary btnSm" id="btnPlayerPortalVerify">Connect Sync</button>'}
          <button type="button" class="btnSecondary btnSm" id="btnPortalPublicView">Public View</button>
        </div>
      </div>

      <section class="fullProfileHero">
        <img class="fullProfileAvatar ${a.cls}" src="${c(a.src)}" alt="${c(t.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${E.logoPath}'">
        <div>
          <span class="metaCode">${c(r)} · ${c(t.id)}${t.jersey?" · #"+c(t.jersey):""}</span>
          <h1 class="fullProfileName">${c(b(t.name))}</h1>
          <div class="fullProfileRole">${c(b(t.role))}</div>
          ${t.detail?`<p class="fullProfileMeta richText" style="margin:6px auto 0;">${c(b(t.detail))}</p>`:""}
          ${t.nick?`<p class="sectionSub" style="margin-top:6px;">Nickname: ${c(b(t.nick))}</p>`:""}
        </div>
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px;">
          <button type="button" class="btnPrimary btnSm" id="btnPortalPhoto">Change Photo</button>
          <button type="button" class="btnSecondary btnSm" id="btnPortalResetPhoto">Use RDM Logo</button>
          <button type="button" class="btnSecondary btnSm" id="btnDownloadPortalCard">Download Card</button>
        </div>
      </section>

      <section class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <div>
            <span class="sectionKicker">Match Status</span>
            <h2 class="sectionTitle" style="font-size:1.25rem;">My Match Availability</h2>
            <p class="sectionSub" style="font-weight:700;color:var(--brand-text);">Current: ${c(b(o))}</p>
          </div>
          <div class="rowActions">
            <button type="button" class="btnPrimary btnSm" id="btnPortalAvailYes">Available</button>
            <button type="button" class="btnSecondary btnSm" id="btnPortalAvailNo">Unavailable</button>
          </div>
        </div>
      </section>

      <section class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <div>
            <span class="sectionKicker">My Profile Control</span>
            <h2 class="sectionTitle" style="font-size:1.25rem;">Personal Info &amp; Bio</h2>
          </div>
          <button type="button" class="btnPrimary btnSm" id="btnPortalEditProfile">Edit Info</button>
        </div>
        <p style="margin:0 0 6px;font-size:0.86rem;color:var(--ink-secondary);"><strong>Jersey:</strong> ${t.jersey?"#"+c(t.jersey):"Not set"} · <strong>Nickname:</strong> ${t.nick?c(b(t.nick)):"Not set"}</p>
        <p class="richText" style="margin:0;font-size:0.88rem;color:var(--ink-secondary);">${t.bio?c(b(t.bio)):"No bio added yet."}</p>
      </section>

      <section class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <div>
            <span class="sectionKicker">My Socials (Max 3)</span>
            <h2 class="sectionTitle" style="font-size:1.25rem;">Official Social Links</h2>
          </div>
          ${i.length<3?'<button type="button" class="btnPrimary btnSm" id="btnPortalAddSocial">+ Add Social</button>':""}
        </div>
        ${i.length?i.map((m,f)=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.88rem;">${c(b(m.name))}</strong>
              <span style="font-size:0.74rem;color:var(--ink-muted);word-break:break-all;">${c(m.url)}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-portal-ext="${c(K(m.url))}">Open</button>
              <button type="button" class="btnDanger btnSm" data-portal-del-social="${f}">Remove</button>
            </div>
          </div>
        `).join(""):'<p class="sectionSub">No social links added yet.</p>'}
      </section>

      <section class="surfaceCard">
        <span class="sectionKicker">Verified Performance</span>
        <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Career Statistics</h2>
        ${d?`
          <div class="statGrid4">
            <div class="statCell"><strong class="num">${Number(n.matches||0)}</strong><span>Matches</span></div>
            <div class="statCell"><strong class="num">${Number(n.runs||0)}</strong><span>Runs</span></div>
            <div class="statCell"><strong class="num">${Number(n.highScore||0)}</strong><span>High Score</span></div>
            <div class="statCell"><strong class="num">${Number(n.wickets||0)}</strong><span>Wickets</span></div>
          </div>
          <div class="statSubRow num">
            <span>4s/6s: ${Number(n.fours||0)}/${Number(n.sixes||0)}</span>
            <span>50s/100s: ${Number(n.fifties||0)}/${Number(n.hundreds||0)}</span>
            <span>SR: ${Number(n.strikeRate||0)}</span>
            <span>Econ: ${Number(n.economy||0)}</span>
            <span>Best: ${c(n.bestBowling||"—")}</span>
          </div>
        `:'<p class="sectionSub">Career statistics are updated by team management after official matches.</p>'}
      </section>
    </div>
  `}function fn(){if(!x())return oa();let e="";return p.adminTab==="overview"?e=`
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
            <span class="sectionKicker">APK Admin v${c(Ve())} · ${ge()?"Firebase Cloud Sync Live":"Local Admin Unlocked"}</span>
            <h3 class="sectionTitle" style="font-size:1.22rem;">Website, PWA &amp; Android APK Connected</h3>
            <p class="sectionSub">${ge()?"Every change published here saves to Firebase and updates Website, PWA, and all installed Android APKs in real time.":"APK Admin unlocked with password. Connect Firebase Cloud Sync once if live cloud rules require signed-in Firebase Admin Auth."}</p>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            ${ge()?"":'<button type="button" class="btnPrimary btnSm" id="btnAdminConnectFirebase">Connect Cloud Sync</button>'}
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
          ${s.players.map(t=>{var n;const a=((n=s.availability.find(o=>o.playerId===t.id))==null?void 0:n.status)||"NOT SET";return`
              <div class="listRowItem">
                <div style="min-width:0;">
                  <strong style="display:block;font-size:0.92rem;">${c(b(t.name))}</strong>
                  <span class="num" style="font-size:0.76rem;color:var(--ink-muted);">${c(t.id)} · ${c(b(a))}</span>
                </div>
                <div class="rowActions">
                  <button type="button" class="btnSecondary btnSm" data-admin-edit-player="${c(t.id)}">Edit</button>
                  <button type="button" class="btnSecondary btnSm" data-admin-edit-stats="${c(t.id)}">Stats</button>
                  <button type="button" class="btnSecondary btnSm" data-admin-avail="${c(t.id)}">Avail</button>
                  <button type="button" class="btnDanger btnSm" data-admin-remove-player="${c(t.id)}">Remove</button>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    `:p.adminTab==="matches"?e=`
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Matches (${s.matches.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addMatch">+ Match</button>
        </div>
        ${s.matches.length?s.matches.map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">RDM vs ${c(b(t.opponent||"Opponent"))}</strong>
              <span class="num" style="font-size:0.76rem;color:var(--ink-muted);">${c(b(t.matchStatus||t.status||"Match"))} · ${c(t.date||"Date TBA")}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-match="${c(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Matches:${c(t._docId)}">Delete</button>
            </div>
          </div>
        `).join(""):'<p class="sectionSub">No matches yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Playing XI (${s.lineups.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addLineup">+ Lineup</button>
        </div>
        ${s.lineups.length?s.lineups.map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${c(b(t.title||"Playing XI"))}</strong>
              <span style="font-size:0.76rem;color:var(--ink-muted);">${c(b(t.match||""))}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-lineup="${c(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="PlayingXI:${c(t._docId)}">Delete</button>
            </div>
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
        ${[...s.tournaments.map(t=>({_col:"Tournaments",_docId:t._docId,title:t.name||"Tournament",sub:[t.season,t.status,t.position].filter(Boolean).join(" · ")})),...s.records.map(t=>({_col:"TeamRecords",_docId:t._docId,title:t.title||"Record",sub:[t.value,t.player,t.season].filter(Boolean).join(" · ")}))].map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${c(b(t.title))}</strong>
              <span style="font-size:0.75rem;color:var(--ink-muted);">${c(t._col)}${t.sub?" · "+c(b(t.sub)):""}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-item="${c(t._col)}:${c(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="${c(t._col)}:${c(t._docId)}">Delete</button>
            </div>
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
        ${[...s.news.map(t=>({...t,_col:"News"})),...s.updates.map(t=>({...t,_col:"Updates"}))].map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${t.pinned?"[Pinned] ":""}${c(b(t.title||"Item"))}</strong>
              <span style="font-size:0.75rem;color:var(--ink-muted);">${c(t._col)}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-post="${c(t._col)}:${c(t._docId)}">Edit</button>
              <button type="button" class="btnSecondary btnSm" data-admin-pin="${c(t._col)}:${c(t._docId)}:${t.pinned?"0":"1"}">${t.pinned?"Unpin":"Pin"}</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="${c(t._col)}:${c(t._docId)}">Delete</button>
            </div>
          </div>
        `).join("")||'<p class="sectionSub">No news or updates yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Team Honours (${s.honours.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addHonour">+ Honour</button>
        </div>
        ${s.honours.length?s.honours.map(t=>`
          <div class="listRowItem">
            <div style="display:flex;align-items:center;gap:10px;min-width:0;">
              <img src="${c(t.image||te())}" alt="${c(t.title||"Honour")}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${E.logoPath}'" style="width:44px;height:44px;border-radius:10px;object-fit:contain;background:var(--bg-subtle);border:1px solid var(--border-hairline);padding:3px;flex-shrink:0;">
              <div style="min-width:0;">
                <strong style="display:block;font-size:0.9rem;">${c(t.year||"")} · ${c(b(t.title||"Honour"))}</strong>
                <span style="font-size:0.75rem;color:var(--ink-muted);">${c(b(t.sub||""))}</span>
              </div>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-honour="${c(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Honours:${c(t._docId)}">Delete</button>
            </div>
          </div>
        `).join(""):'<p class="sectionSub">No honours yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Gallery Photos (${s.gallery.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addGallery">+ Photo</button>
        </div>
        ${s.gallery.length?s.gallery.map(t=>`
          <div class="listRowItem">
            <div style="display:flex;align-items:center;gap:10px;min-width:0;">
              <img src="${c(t.image)}" alt="" referrerPolicy="no-referrer" style="width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0;">
              <div style="min-width:0;">
                <strong style="display:block;font-size:0.86rem;">${c(b(t.caption||"Memory"))}</strong>
                <span style="font-size:0.75rem;color:var(--ink-muted);">${c(b(t.album||"MEMORIES"))}</span>
              </div>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-gallery="${c(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Gallery:${c(t._docId)}">Delete</button>
            </div>
          </div>
        `).join(""):'<p class="sectionSub">No gallery photos yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Social Channels</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addSocial">+ Social</button>
        </div>
        ${s.socials.map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.88rem;">${c(b(t.displayName||t.name))}</strong>
              <span style="font-size:0.74rem;color:var(--ink-muted);word-break:break-all;">${c(t.url||"No link set")}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-social="${c(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Socials:${c(t._docId)}">Delete</button>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:8px;">
          <div>
            <h3 class="sectionTitle" style="font-size:1.25rem;">App &amp; APK Update Settings</h3>
            <p class="sectionSub">Latest APK: v${c(Ve())} (Code ${c(String(s.appVersionCode||Q.versionCode))})</p>
          </div>
          <button type="button" class="btnPrimary btnSm" data-admin-action="editAppConfig">Edit APK Update</button>
        </div>
        <p style="margin:0;font-size:0.78rem;color:var(--ink-muted);word-break:break-all;">APK URL Configured</p>
      </div>
    `,`
    ${le({title:"Admin Console",showBack:!0,showPublicNav:!0,rightActionHtml:'<button type="button" class="topActionBtn" id="btnLogout">Logout</button>'})}

    <div class="tabContent fullPageContent">
      ${ge()?"":`
        <div class="infoBanner">
          <span><strong>Local Admin Mode:</strong> Connect Firebase Cloud Sync once if deleting or saving records returns a permission error.</span>
          <button type="button" class="btnPrimary btnSm" id="btnAdminConnectFirebaseBanner">Connect Sync</button>
        </div>
      `}
      <div class="filterRow adminTabsRow">
        ${[["overview","Overview"],["squad","Squad & Stats"],["matches","Matches & XI"],["content","Content & Media"]].map(([t,a])=>`<button type="button" class="segTab ${p.adminTab===t?"active":""}" data-admin-tab="${t}">${a}</button>`).join("")}
      </div>
      ${e}
    </div>
    ${Ne()}
  `}function vn(){let e="";return p.publicTab==="home"?e=cn():p.publicTab==="squad"?e=dn():p.publicTab==="matches"?e=un():p.publicTab==="gallery"?e=pn():e=mn(),`
    ${le({title:"RDM Official",showBack:!1,showPublicNav:!0})}
    <div class="tabContent">${e}</div>
    ${Ne()}
    ${ln()}
  `}function A(){const e=document.getElementById("appViewport");if(!e)return;let t="";p.screen==="playerDetail"?t=bn():p.screen==="subpage"?t=yn():p.screen==="playerPortal"?t=hn():p.screen==="playerAuth"?t=sa():p.screen==="portalAuth"?t=oa():p.screen==="admin"?t=fn():t=vn(),e.innerHTML=t+sn(),gn()}function gn(){var l,d,u,h,m,f,v,g,k,S,w,M,I,O,X,ae,B,D,_,V,J,ee,j,fe,ve,vt,gt,wt,St,Pt;const e=y=>document.getElementById(y);(l=e("btnStepBack"))==null||l.addEventListener("click",()=>{Jt()||T({screen:"public",publicTab:"home"})}),(d=e("btnOpenDrawer"))==null||d.addEventListener("click",()=>{ue(!0)});const t=e("drawerOverlay"),a=e("drawerPanel");if(t==null||t.addEventListener("click",y=>{y.target.id==="drawerOverlay"&&ue(!1)}),t&&a){let y=0,R=0,$=!1;a.addEventListener("touchstart",N=>{!p.drawerOpen||N.touches.length!==1||(y=N.touches[0].clientX,R=0,$=!0,t.classList.add("dragging"))},{passive:!0}),a.addEventListener("touchmove",N=>{if(!$||N.touches.length!==1)return;const q=N.touches[0].clientX-y;R=Math.min(0,q),a.style.transform=`translateX(${R}px)`},{passive:!0});const L=()=>{$&&($=!1,t.classList.remove("dragging"),a.style.transform="",R<=-68&&ue(!1))};a.addEventListener("touchend",L,{passive:!0}),a.addEventListener("touchcancel",L,{passive:!0})}(u=e("btnPickTheme"))==null||u.addEventListener("click",()=>{Nt({currentTheme:p.theme,onSelectTheme:Be})}),(h=e("btnDrawerTheme"))==null||h.addEventListener("click",()=>{ue(!1),Nt({currentTheme:p.theme,onSelectTheme:Be})}),document.querySelectorAll("[data-quick-theme]").forEach(y=>{y.addEventListener("click",()=>Be(y.dataset.quickTheme))}),(m=e("btnBrandHome"))==null||m.addEventListener("click",()=>{T({screen:"public",publicTab:"home"})}),(f=e("btnPortalPublicView"))==null||f.addEventListener("click",()=>{T({screen:"public",publicTab:"home"})});const n=(y=null)=>{var $;ue(!1);const R=he();if(y&&(Me(y)||x())){p.portalMode="player",p.portalPlayerId=y,T({screen:"playerPortal"});return}if(!y&&R){p.portalMode="player",p.portalPlayerId=R,T({screen:"playerPortal"});return}p.playerLoginError="",p.playerAuthSelectedId=y||p.playerAuthSelectedId||(($=s.players[0])==null?void 0:$.id)||"RDM001",T({screen:"playerAuth",playerAuthSelectedId:p.playerAuthSelectedId})};(v=e("btnOpenPlayerPortal"))==null||v.addEventListener("click",()=>n()),(g=e("btnFooterPlayerPortal"))==null||g.addEventListener("click",()=>n()),(k=e("btnMorePlayerPortal"))==null||k.addEventListener("click",()=>n()),(S=e("btnDetailPlayerPortal"))==null||S.addEventListener("click",()=>{var R;const y=((R=e("btnDetailPlayerPortal"))==null?void 0:R.dataset.detailLoginPlayer)||p.detailPlayerId;n(y)});const o=()=>{ue(!1),T({screen:x()?"admin":"portalAuth",adminTab:"overview"})};(w=e("btnOpenAdminPortal"))==null||w.addEventListener("click",o),(M=e("btnFooterAdminPortal"))==null||M.addEventListener("click",o),(I=e("btnMoreAdminPortal"))==null||I.addEventListener("click",o),(O=e("btnDownloadLatestApk"))==null||O.addEventListener("click",()=>{const y=je();if(re()){la(y);return}Ht(y.apkUrl||qe()),P(`Downloading RDM Official APK v${y.latestVersion}...`)}),(X=e("btnCheckAppUpdate"))==null||X.addEventListener("click",async()=>{var R;P("Checking for latest update...");const y=await at();if(A(),(R=y==null?void 0:y.otaResult)!=null&&R.updated){P(`App updated silently to OTA v${y.otaResult.otaVersion||""}`);return}await Fe(!0)}),(ae=e("btnRefreshClub"))==null||ae.addEventListener("click",async()=>{P("Syncing team data..."),await Y(),A(),P("Team data synced")}),(B=e("btnRetrySync"))==null||B.addEventListener("click",async()=>{await Y(),A()}),(D=e("btnInstallWebApp"))==null||D.addEventListener("click",async()=>{await $a()&&(A(),P("App installed"))});const r=()=>{$e({title:"Confirm Player Sign Out",message:"Lock and sign out of your Player Profile on this device?",confirmLabel:"Sign Out",danger:!0,onConfirm:async()=>{await Vt(),p.drawerOpen=!1,p.portalMode="public",p.portalPlayerId=null,p.screen==="playerPortal"?T({screen:"playerAuth"},{replace:!0}):A(),P("Player profile locked")}})};(_=e("btnPlayerLogout"))==null||_.addEventListener("click",r),(V=e("btnMorePlayerLogout"))==null||V.addEventListener("click",r),(J=e("btnLogout"))==null||J.addEventListener("click",()=>{$e({title:"Confirm Sign Out",message:"Sign out of Admin Cloud Sync on this device?",confirmLabel:"Sign Out",danger:!0,onConfirm:async()=>{const y=p.portalMode==="admin";await jt(),p.drawerOpen=!1,p.portalMode="public",p.portalPlayerId=null,y?T({screen:"portalAuth"},{replace:!0}):p.screen==="admin"?T({screen:"public",publicTab:"home"},{replace:!0}):A(),P("Signed out")}})}),(ee=e("btnTogglePw"))==null||ee.addEventListener("click",()=>{const y=e("loginPassword"),R=e("btnTogglePw");if(!y||!R)return;const $=y.type==="password";y.type=$?"text":"password",R.textContent=$?"Hide":"Show"}),(j=e("rdmPortalAuthForm"))==null||j.addEventListener("submit",async y=>{var $;y.preventDefault();const R=(($=e("loginPassword"))==null?void 0:$.value)||"";p.loginBusy=!0,p.loginError="",A();try{const L=await qa(R);p.loginBusy=!1,P(L.cloudSynced?"Admin Panel unlocked (Cloud Sync Live)":"Admin Panel unlocked"),T({screen:"admin",adminTab:"overview"},{replace:!0})}catch(L){p.loginBusy=!1;const N=String((L==null?void 0:L.code)||(L==null?void 0:L.message)||"");N==="INVALID_ADMIN_PASSWORD"||N==="PASSWORD_REQUIRED"?p.loginError="Incorrect Admin password. Please enter the correct password.":p.loginError="Unable to unlock Admin Panel. Please try again.",A()}}),document.querySelectorAll("[data-player-auth-tab]").forEach(y=>{y.addEventListener("click",()=>{p.playerAuthTab=y.dataset.playerAuthTab==="firebase"?"firebase":"password",p.playerLoginError="",A()})}),(fe=e("playerLoginSelect"))==null||fe.addEventListener("change",y=>{const R=String(y.target.value||"RDM001").toUpperCase();p.playerAuthSelectedId=R,p.playerLoginError="";const $=s.players.find(L=>L.id===R);if($){const L=Ie($.image),N=e("playerLoginAvatar");N&&(N.src=L.src,N.className=L.cls,N.alt=$.name);const q=e("playerLoginMeta");q&&(q.textContent=`${se[$.id]||$.id} · ${$.id}`);const F=e("playerLoginTitle");F&&(F.textContent=b($.name));const G=e("playerLoginRole");G&&(G.textContent=b($.role))}}),(ve=e("btnTogglePlayerPw"))==null||ve.addEventListener("click",()=>{const y=e("playerLoginPassword"),R=e("btnTogglePlayerPw");if(!y||!R)return;const $=y.type==="password";y.type=$?"text":"password",R.textContent=$?"Hide":"Show"}),(vt=e("btnTogglePlayerFbPw"))==null||vt.addEventListener("click",()=>{const y=e("playerFbPassword"),R=e("btnTogglePlayerFbPw");if(!y||!R)return;const $=y.type==="password";y.type=$?"text":"password",R.textContent=$?"Hide":"Show"}),(gt=e("btnPlayerForgotPw"))==null||gt.addEventListener("click",()=>{var R,$;const y=(($=(R=e("playerFbEmail"))==null?void 0:R.value)==null?void 0:$.trim())||"";Re({title:"Reset Player Password",subtitle:"Enter your assigned Firebase email to receive a password reset link.",fields:[{name:"email",label:"Assigned Email",type:"email",value:y,required:!0}],submitLabel:"Send Reset Link",onSubmit:async L=>{await Ga(L.email),P("Password reset email sent")}})}),(wt=e("rdmPlayerPasswordForm"))==null||wt.addEventListener("submit",async y=>{var L,N;y.preventDefault();const R=((L=e("playerLoginSelect"))==null?void 0:L.value)||p.playerAuthSelectedId||"RDM001",$=((N=e("playerLoginPassword"))==null?void 0:N.value)||"";p.playerAuthSelectedId=R,p.playerLoginBusy=!0,p.playerLoginError="",A();try{const q=await Va(R,$);p.playerLoginBusy=!1,p.portalMode="player",p.portalPlayerId=q.playerId;const F=s.players.find(G=>G.id===q.playerId);P(`${b((F==null?void 0:F.name)||q.playerId)} profile unlocked`),T({screen:"playerPortal"},{replace:!0})}catch(q){p.playerLoginBusy=!1;const F=String((q==null?void 0:q.code)||(q==null?void 0:q.message)||"");if(F==="INVALID_PLAYER_PASSWORD"||F==="PASSWORD_REQUIRED"){const G=s.players.find(We=>We.id===R);p.playerLoginError=`Incorrect password for ${b((G==null?void 0:G.name)||R)}. Please try again.`}else p.playerLoginError="Unable to unlock player profile. Please try again.";A()}}),(St=e("rdmPlayerFirebaseForm"))==null||St.addEventListener("submit",async y=>{var L,N,q;y.preventDefault();const R=((N=(L=e("playerFbEmail"))==null?void 0:L.value)==null?void 0:N.trim())||"",$=((q=e("playerFbPassword"))==null?void 0:q.value)||"";p.playerLoginBusy=!0,p.playerLoginError="",A();try{const F=await ja(R,$);p.playerLoginBusy=!1,p.portalMode="player",p.portalPlayerId=F.playerId;const G=s.players.find(We=>We.id===F.playerId);P(`Signed in as ${b((G==null?void 0:G.name)||F.playerId)}`),T({screen:"playerPortal"},{replace:!0})}catch(F){p.playerLoginBusy=!1;const G=String((F==null?void 0:F.message)||(F==null?void 0:F.code)||"");/wrong-password|invalid-credential|user-not-found|invalid-email/i.test(G)?p.playerLoginError="Invalid email or password. Please check your credentials.":p.playerLoginError=G||"Unable to sign in with Firebase account.",A()}}),wn(),document.querySelectorAll("[data-public-tab]").forEach(y=>{y.addEventListener("click",()=>{T({screen:"public",publicTab:y.dataset.publicTab})})}),document.querySelectorAll("[data-open-subpage]").forEach(y=>{y.addEventListener("click",()=>{T({screen:"subpage",morePage:y.dataset.openSubpage})})}),document.querySelectorAll("[data-open-player]").forEach(y=>{y.addEventListener("click",()=>{T({screen:"playerDetail",detailPlayerId:y.dataset.openPlayer})})}),(Pt=e("btnDownloadDetailCard"))==null||Pt.addEventListener("click",async()=>{const y=s.players.find(R=>R.id===p.detailPlayerId);if(y)try{await Yt({player:y,brandLogo:te()})}catch{P("Unable to export profile card")}});const i=e("squadSearchInput");i&&i.addEventListener("input",y=>{const R=y.target.selectionStart;p.squadQuery=y.target.value,A();const $=document.getElementById("squadSearchInput");if($){$.focus();try{$.setSelectionRange(R,R)}catch{}}}),document.querySelectorAll("[data-squad-filter]").forEach(y=>{y.addEventListener("click",()=>{p.squadFilter=y.dataset.squadFilter,A()})}),document.querySelectorAll("[data-matches-sub]").forEach(y=>{y.addEventListener("click",()=>{p.matchesSubTab=y.dataset.matchesSub,A()})}),document.querySelectorAll("[data-gallery-album]").forEach(y=>{y.addEventListener("click",()=>{p.galleryAlbum=y.dataset.galleryAlbum,A()})}),document.querySelectorAll("[data-zoom-gallery]").forEach(y=>{y.addEventListener("click",()=>{const $=s.gallery.filter(L=>{const N=String(L.album||"MEMORIES").toUpperCase();return p.galleryAlbum==="ALL"?!["MATCHES","TROPHIES"].includes(N):N===p.galleryAlbum})[Number(y.dataset.zoomGallery)];$!=null&&$.image&&rt($.image,b($.caption||"RDM Gallery"))})}),document.querySelectorAll("[data-zoom-src]").forEach(y=>{y.addEventListener("click",()=>rt(y.dataset.zoomSrc,y.dataset.zoomCap||""))}),document.querySelectorAll("[data-ext-url]").forEach(y=>{y.addEventListener("click",()=>_t(y.dataset.extUrl))}),Sn()}function de(e){Re({title:`Connect Sync · ${b(e.name)}`,subtitle:"Sign in with your assigned Firebase sync account to publish changes live to Website & Android App.",fields:[{name:"email",label:"Email",type:"email",required:!0},{name:"password",label:"Password",type:"password",required:!0}],submitLabel:"Connect Sync",onSubmit:async t=>{const a=await bt(t.email,t.password);if(a.role!=="admin"&&a.playerId!==e.id)throw await Vt(),new Error(`This account belongs to ${a.playerId||"another user"}, not ${e.id}`);A(),P("Cloud sync connected")}})}function wn(){var r,i,l,d,u,h,m,f;const e=p.portalPlayerId||he();if(p.screen!=="playerPortal"||!e||!Me(e)&&!x())return;const t=s.players.find(v=>v.id===e);if(!t)return;const a=v=>document.getElementById(v),n=()=>yt(t.id)?!0:(de(t),!1);(r=a("btnPlayerPortalVerify"))==null||r.addEventListener("click",()=>de(t)),(i=a("btnDownloadPortalCard"))==null||i.addEventListener("click",async()=>{try{await Yt({player:t,brandLogo:te()})}catch{P("Unable to export profile card")}}),(l=a("btnPortalPhoto"))==null||l.addEventListener("click",()=>{n()&&tn({onSaveDataUrl:async v=>{try{await Le(t.id,{image:v}),A(),P("Profile photo updated live")}catch(g){if(He(g)){de(t);return}throw g}}})}),(d=a("btnPortalResetPhoto"))==null||d.addEventListener("click",()=>{if(!n())return;$e({title:"Use RDM Crest",message:"Reset your profile photo to the official RDM logo?",confirmLabel:"Reset Photo",onConfirm:async()=>{await Le(t.id,{image:""}),A(),P("Photo reset to RDM logo")},onPermissionDenied:()=>de(t)})}),(u=a("btnPortalEditProfile"))==null||u.addEventListener("click",()=>{if(!n())return;let v=null;Re({title:`Edit ${b(t.name)}`,fields:[{name:"jersey",label:"Jersey Number",value:t.jersey||""},{name:"nick",label:"Nickname",value:t.nick||""},{name:"bio",label:"Bio",type:"textarea",value:t.bio||"",placeholder:"Write your cricket bio (spaces & Enter preserved)",rows:4}],onSubmit:async g=>{v={jersey:g.jersey,nick:g.nick,bio:g.bio},await Le(t.id,v),A(),P("Profile updated live")},onPermissionDenied:()=>de(t)})});const o=async v=>{if(n())try{await Wt(t.id,v),A(),P(`Availability: ${v}`)}catch(g){if(He(g)){de(t);return}P((g==null?void 0:g.message)||"Failed to save availability")}};(h=a("btnPortalAvailYes"))==null||h.addEventListener("click",()=>o("AVAILABLE")),(m=a("btnPortalAvailNo"))==null||m.addEventListener("click",()=>o("UNAVAILABLE")),(f=a("btnPortalAddSocial"))==null||f.addEventListener("click",()=>{if(!n())return;const v=Array.isArray(t.socials)?t.socials:[];if(v.length>=3)return P("Maximum 3 social links allowed");Re({title:"Add Social Link",fields:[{name:"name",label:"Platform Name",placeholder:"Instagram / YouTube",required:!0},{name:"url",label:"Profile URL",placeholder:"https://...",required:!0}],onSubmit:async g=>{const k=K(g.url);if(!k)throw new Error("Valid https:// link required");const S=[...v,{name:g.name,url:k}].slice(0,3);await Le(t.id,{socials:S}),A(),P("Social link added live")},onPermissionDenied:()=>de(t)})}),document.querySelectorAll("[data-portal-ext]").forEach(v=>{v.addEventListener("click",()=>_t(v.dataset.portalExt))}),document.querySelectorAll("[data-portal-del-social]").forEach(v=>{v.addEventListener("click",()=>{if(!n())return;const g=Number(v.dataset.portalDelSocial),k=Array.isArray(t.socials)?[...t.socials]:[];k.splice(g,1),$e({title:"Remove Social Link",message:"Remove this social link from your profile?",confirmLabel:"Remove",danger:!0,onConfirm:async()=>{await Le(t.id,{socials:k}),A(),P("Social link removed")},onPermissionDenied:()=>de(t)})})})}function Sn(){var e,t;x()&&(document.querySelectorAll("[data-admin-tab]").forEach(a=>{a.addEventListener("click",()=>{T({screen:"admin",adminTab:a.dataset.adminTab},{replace:!0})})}),document.querySelectorAll("[data-admin-action]").forEach(a=>{a.addEventListener("click",()=>Pn(a.dataset.adminAction))}),document.querySelectorAll("[data-admin-edit-player]").forEach(a=>{a.addEventListener("click",()=>{const n=s.players.find(o=>o.id===a.dataset.adminEditPlayer);n&&U({title:`Edit ${b(n.name)}`,fields:[{name:"name",label:"Player Name",value:n.name,required:!0},{name:"role",label:"Role",value:n.role,required:!0},{name:"detail",label:"Playing Detail",type:"textarea",value:n.detail,rows:3},{name:"jersey",label:"Jersey Number",value:n.jersey||""},{name:"nick",label:"Nickname",value:n.nick||""},{name:"bio",label:"Bio",type:"textarea",value:n.bio||"",rows:3},{name:"photo",label:"Replace Photo (Optional)",type:"file"}],onSubmit:async o=>{const r={...o};o.photo&&(r.image=await we(o.photo,700,.74)),await za(n.id,r),A(),P("Player updated")}})})}),document.querySelectorAll("[data-admin-remove-player]").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.adminRemovePlayer,o=s.players.find(i=>i.id===n),r=async()=>{await Za(n),A(),P("Player removed")};$e({title:"Remove Player",message:`Remove ${b((o==null?void 0:o.name)||n)} (${n}) from the active RDM squad?`,confirmLabel:"Remove",danger:!0,onConfirm:r,onPermissionDenied:()=>Pe(r)})})}),(e=document.getElementById("btnAdminConnectFirebase"))==null||e.addEventListener("click",()=>{Pe()}),(t=document.getElementById("btnAdminConnectFirebaseBanner"))==null||t.addEventListener("click",()=>{Pe()}),document.querySelectorAll("[data-admin-edit-stats]").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.adminEditStats,o=s.players.find(i=>i.id===n),r=s.stats.find(i=>i.playerId===n)||{};U({title:`Stats · ${b((o==null?void 0:o.name)||n)}`,fields:[{name:"matches",label:"Matches",type:"number",value:r.matches||0},{name:"runs",label:"Runs",type:"number",value:r.runs||0},{name:"highScore",label:"High Score",type:"number",value:r.highScore||0},{name:"wickets",label:"Wickets",type:"number",value:r.wickets||0},{name:"fours",label:"Fours",type:"number",value:r.fours||0},{name:"sixes",label:"Sixes",type:"number",value:r.sixes||0},{name:"fifties",label:"50s",type:"number",value:r.fifties||0},{name:"hundreds",label:"100s",type:"number",value:r.hundreds||0},{name:"strikeRate",label:"Strike Rate",type:"number",value:r.strikeRate||0},{name:"economy",label:"Economy",type:"number",value:r.economy||0},{name:"bestBowling",label:"Best Bowling",value:r.bestBowling||""},{name:"season",label:"Season",value:r.season||"2027"}],onSubmit:async i=>{const l=d=>Number(d||0)||0;await H("PlayerStats",n,{playerId:n,matches:l(i.matches),runs:l(i.runs),highScore:l(i.highScore),wickets:l(i.wickets),fours:l(i.fours),sixes:l(i.sixes),fifties:l(i.fifties),hundreds:l(i.hundreds),strikeRate:l(i.strikeRate),economy:l(i.economy),bestBowling:String(i.bestBowling||"").trim(),season:String(i.season||"2027").trim()}),A(),P("Player stats saved")}})})}),document.querySelectorAll("[data-admin-avail]").forEach(a=>{a.addEventListener("click",()=>{var r;const n=a.dataset.adminAvail,o=((r=s.availability.find(i=>i.playerId===n))==null?void 0:r.status)||"AVAILABLE";U({title:`Availability · ${n}`,fields:[{name:"status",label:"Status",type:"select",value:o,options:["AVAILABLE","UNAVAILABLE"]}],onSubmit:async i=>{await Wt(n,i.status),A(),P("Availability saved")}})})}),document.querySelectorAll("[data-admin-edit-match]").forEach(a=>{a.addEventListener("click",()=>{const n=s.matches.find(o=>o._docId===a.dataset.adminEditMatch);n&&ia(n)})}),document.querySelectorAll("[data-admin-edit-lineup]").forEach(a=>{a.addEventListener("click",()=>{const n=s.lineups.find(o=>o._docId===a.dataset.adminEditLineup);n&&U({title:"Edit Playing XI",fields:[{name:"title",label:"Title",value:n.title||"Playing XI",required:!0},{name:"match",label:"Match / Opponent",value:n.match||""},{name:"players",label:"11 Player IDs (comma separated)",type:"textarea",value:(n.players||[]).join(","),rows:3},{name:"subs",label:"Substitutes (comma separated)",value:(n.subs||[]).join(",")}],onSubmit:async o=>{const r=d=>[...new Set(String(d||"").split(",").map(u=>u.trim().toUpperCase()).filter(u=>/^RDM\d{3}$/.test(u)))],i=r(o.players).slice(0,11),l=r(o.subs).filter(d=>!i.includes(d));if(i.length!==11)throw new Error("Playing XI requires 11 valid Player IDs");await H("PlayingXI",n._docId,{title:o.title,match:o.match,players:i,subs:l,createdMs:n.createdMs||Date.now()}),A(),P("Playing XI updated")}})})}),document.querySelectorAll("[data-admin-edit-item]").forEach(a=>{a.addEventListener("click",()=>{const n=String(a.dataset.adminEditItem||""),o=n.indexOf(":"),r=o>0?n.slice(0,o):"",i=o>0?n.slice(o+1):"";if(r==="Tournaments"){const l=s.tournaments.find(d=>d._docId===i);if(!l)return;U({title:"Edit Tournament",fields:[{name:"name",label:"Tournament Name",value:l.name||"",required:!0},{name:"season",label:"Season / Year",value:l.season||""},{name:"status",label:"Status",type:"select",value:l.status||"UPCOMING",options:["UPCOMING","ONGOING","COMPLETED"]},{name:"position",label:"Final Position",value:l.position||""},{name:"venueName",label:"Venue",value:l.venueName||l.venue||""}],onSubmit:async d=>{await H("Tournaments",l._docId,{name:String(d.name||"").trim(),season:String(d.season||"").trim(),status:String(d.status||"UPCOMING").trim(),position:String(d.position||"").trim(),venueName:String(d.venueName||"").trim(),venue:String(d.venueName||"").trim(),createdMs:l.createdMs||Date.now()}),A(),P("Tournament updated")}})}else if(r==="TeamRecords"){const l=s.records.find(d=>d._docId===i);if(!l)return;U({title:"Edit Team Record",fields:[{name:"title",label:"Record Title",value:l.title||"",required:!0},{name:"value",label:"Record Value",value:l.value||"",required:!0},{name:"player",label:"Player Name (Optional)",value:l.player||""},{name:"season",label:"Season / Year",value:l.season||""}],onSubmit:async d=>{await H("TeamRecords",l._docId,{title:String(d.title||"").trim(),value:String(d.value||"").trim(),player:String(d.player||"").trim(),season:String(d.season||"").trim(),createdMs:l.createdMs||Date.now()}),A(),P("Record updated")}})}})}),document.querySelectorAll("[data-admin-edit-post]").forEach(a=>{a.addEventListener("click",()=>{const n=String(a.dataset.adminEditPost||""),o=n.indexOf(":"),r=o>0?n.slice(0,o):"",i=o>0?n.slice(o+1):"";if(r==="News"){const l=s.news.find(d=>d._docId===i);if(!l)return;U({title:"Edit Team News",fields:[{name:"title",label:"Title",value:l.title||"",required:!0},{name:"text",label:"Announcement",type:"textarea",value:l.text||"",rows:5,required:!0},{name:"pinned",label:"Pin announcement",type:"checkbox",checked:!!l.pinned}],onSubmit:async d=>{await H("News",l._docId,{title:d.title,text:d.text,pinned:!!d.pinned,createdMs:l.createdMs||Date.now()}),A(),P("News updated")}})}else if(r==="Updates"){const l=s.updates.find(d=>d._docId===i);if(!l)return;U({title:"Edit Official Update",fields:[{name:"category",label:"Category",type:"select",value:l.category||"WEBSITE",options:["WEBSITE","SOCIAL MEDIA","PLATFORM","ACCOUNT","FEATURE","OTHER"]},{name:"title",label:"Title",value:l.title||"",required:!0},{name:"text",label:"Description",type:"textarea",value:l.text||"",rows:5,required:!0},{name:"url",label:"Optional Link",value:l.url||"",placeholder:"https://..."},{name:"pinned",label:"Pin to Home",type:"checkbox",checked:!!l.pinned}],onSubmit:async d=>{await H("Updates",l._docId,{category:d.category,title:d.title,text:d.text,url:d.url,pinned:!!d.pinned,date:l.date||new Date().toISOString().slice(0,10),createdMs:l.createdMs||Date.now()}),A(),P("Update saved")}})}})}),document.querySelectorAll("[data-admin-edit-honour]").forEach(a=>{a.addEventListener("click",()=>{const n=s.honours.find(o=>o._docId===a.dataset.adminEditHonour);n&&U({title:"Edit Team Honour",fields:[{name:"year",label:"Year",value:n.year||"",required:!0},{name:"title",label:"Result (e.g. Winner)",value:n.title||"",required:!0},{name:"sub",label:"Tournament Name",value:n.sub||"",required:!0},{name:"photo",label:"Trophy / Honour Photo (Optional)",type:"file"}],onSubmit:async o=>{const r=o.photo?await we(o.photo,900,.78):n.image||E.logoPath;await H("Honours",n._docId,{year:String(o.year||"").trim(),title:String(o.title||"").trim(),sub:String(o.sub||"").trim(),image:r,order:n.order||99}),A(),P("Honour updated")}})})}),document.querySelectorAll("[data-admin-edit-gallery]").forEach(a=>{a.addEventListener("click",()=>{const n=s.gallery.find(o=>o._docId===a.dataset.adminEditGallery);n&&U({title:"Edit Gallery Photo",fields:[{name:"caption",label:"Caption",value:n.caption||"RDM Memory"},{name:"album",label:"Album",type:"select",value:String(n.album||"MEMORIES").toUpperCase(),options:["TEAM PHOTOS","MEMORIES","UPDATES"]},{name:"photo",label:"Replace Image (Optional)",type:"file"}],onSubmit:async o=>{const r=o.photo?await we(o.photo,960,.72):n.image;await H("Gallery",n._docId,{image:r,caption:o.caption,album:o.album,createdMs:n.createdMs||Date.now()}),A(),P("Gallery photo updated")}})})}),document.querySelectorAll("[data-admin-edit-social]").forEach(a=>{a.addEventListener("click",()=>{const n=s.socials.find(o=>o._docId===a.dataset.adminEditSocial);n&&U({title:"Edit Social Channel",fields:[{name:"name",label:"Platform",value:n.name||"",required:!0},{name:"displayName",label:"Display Title",value:n.displayName||n.name||""},{name:"url",label:"URL",value:n.url||"",placeholder:"https://..."}],onSubmit:async o=>{await H("Socials",n._docId,{name:o.name.toUpperCase(),displayName:o.displayName||o.name,url:o.url,icon:n.icon||"↗",order:n.order||9}),A(),P("Social updated")}})})}),document.querySelectorAll("[data-admin-pin]").forEach(a=>{a.addEventListener("click",async()=>{const n=String(a.dataset.adminPin||"").split(":"),o=n[0]||"",r=n[1]||"",i=n[2]||"0";if(!o||!r)return;const l=async()=>{await en(o,r,i==="1"),A(),P(i==="1"?"Pinned to Home":"Unpinned")};try{await l()}catch(d){if(He(d)){Pe(l);return}P((d==null?void 0:d.message)||"Pin update failed")}})}),document.querySelectorAll("[data-admin-del]").forEach(a=>{a.addEventListener("click",()=>{const n=String(a.dataset.adminDel||""),o=n.indexOf(":"),r=o>0?n.slice(0,o):"",i=o>0?n.slice(o+1):"";if(!r||!i){P("Invalid record identifier");return}const l=async()=>{await Qa(r,i),A(),P("Deleted")};$e({title:"Delete Record",message:"Permanently delete this record from Firestore?",confirmLabel:"Delete",danger:!0,onConfirm:l,onPermissionDenied:()=>Pe(l)})})}))}function Pe(e){Re({title:"Connect Firebase Cloud Sync",subtitle:"Sign in with your Firebase Admin account to authorize this cloud write or delete, or publish updated firestore.rules in Firebase Console.",fields:[{name:"email",label:"Firebase Admin Email",type:"email",value:"rehanalam7124517@gmail.com",required:!0},{name:"password",label:"Firebase Password",type:"password",required:!0}],submitLabel:"Connect & Retry",onSubmit:async t=>{await Wa(t.email,t.password),typeof e=="function"?await e():(A(),P("Firebase Cloud Sync connected"))}})}function U(e){let t=null;Re({...e,onSubmit:async a=>(t=a,await e.onSubmit(a)),onPermissionDenied:()=>Pe(async()=>{t&&typeof e.onSubmit=="function"&&await e.onSubmit(t)})})}function ia(e=null){U({title:e?"Edit Match":"Add Match / Result",fields:[{name:"opponent",label:"Opponent Team",value:(e==null?void 0:e.opponent)||"",required:!0},{name:"matchStatus",label:"Status",type:"select",value:(e==null?void 0:e.matchStatus)||(e==null?void 0:e.status)||"UPCOMING",options:["UPCOMING","LIVE","COMPLETED","CANCELLED"]},{name:"date",label:"Date",type:"date",value:(e==null?void 0:e.date)||""},{name:"time",label:"Time",type:"time",value:(e==null?void 0:e.time)||""},{name:"venueName",label:"Venue / Ground",value:(e==null?void 0:e.venueName)||(e==null?void 0:e.venue)||""},{name:"ourScore",label:"RDM Score",value:(e==null?void 0:e.ourScore)||""},{name:"oppScore",label:"Opponent Score",value:(e==null?void 0:e.oppScore)||""},{name:"result",label:"Result (if completed)",value:(e==null?void 0:e.result)||""},{name:"potm",label:"Player of the Match",value:(e==null?void 0:e.potm)||""},{name:"note",label:"Match Notes",type:"textarea",value:(e==null?void 0:e.note)||"",placeholder:"Enter key match details (line breaks & spaces preserved)",rows:4}],onSubmit:async t=>{await H("Matches",(e==null?void 0:e._docId)||null,{...t,venue:t.venueName,status:t.matchStatus==="COMPLETED"?"RESULT":t.matchStatus,createdMs:(e==null?void 0:e.createdMs)||Date.now()}),A(),P("Match saved")}})}function Pn(e){if(e==="addMatch")return ia(null);if(e==="addNews")return U({title:"Add Team News",fields:[{name:"title",label:"Title",required:!0},{name:"text",label:"Announcement",type:"textarea",placeholder:"Write announcement (Enter for new lines & spaces preserved)",rows:5,required:!0},{name:"pinned",label:"Pin announcement",type:"checkbox"}],onSubmit:async t=>{await H("News",null,{title:t.title,text:t.text,pinned:!!t.pinned,createdMs:Date.now()}),A(),P("News added")}});if(e==="addUpdate")return U({title:"Add Official Update",fields:[{name:"category",label:"Category",type:"select",options:["WEBSITE","SOCIAL MEDIA","PLATFORM","ACCOUNT","FEATURE","OTHER"]},{name:"title",label:"Title",required:!0},{name:"text",label:"Description",type:"textarea",placeholder:"Write full update (Enter for new lines & spaces preserved)",rows:5,required:!0},{name:"url",label:"Optional Link",placeholder:"https://..."},{name:"pinned",label:"Pin to Home",type:"checkbox"}],onSubmit:async t=>{await H("Updates",null,{category:t.category,title:t.title,text:t.text,url:t.url,pinned:!!t.pinned,date:new Date().toISOString().slice(0,10),createdMs:Date.now()}),A(),P("Update saved")}});if(e==="addGallery")return U({title:"Add Gallery Photo",fields:[{name:"photo",label:"Select Image",type:"file",required:!0},{name:"caption",label:"Caption",value:"RDM Memory"},{name:"album",label:"Album",type:"select",value:"MEMORIES",options:["TEAM PHOTOS","MEMORIES","UPDATES"]}],onSubmit:async t=>{if(!t.photo)throw new Error("Image required");const a=await we(t.photo,960,.72);await H("Gallery",null,{image:a,caption:t.caption,album:t.album,createdMs:Date.now()}),A(),P("Photo uploaded")}});if(e==="addPlayer"){const t=s.players.map(n=>Number(String(n.id).replace(/\D/g,""))).filter(Number.isFinite),a=`RDM${String(Math.max(17,...t)+1).padStart(3,"0")}`;return U({title:`Add Player (${a})`,fields:[{name:"name",label:"Full Name",required:!0},{name:"role",label:"Role",required:!0},{name:"detail",label:"Playing Style / Detail",type:"textarea",rows:3},{name:"jersey",label:"Jersey Number"},{name:"photo",label:"Profile Photo (Optional)",type:"file"}],onSubmit:async n=>{const o=n.photo?await we(n.photo,700,.74):"";await H("TeamPlayers",a,{id:a,name:n.name.toUpperCase(),role:n.role.toUpperCase(),detail:n.detail.toUpperCase(),jersey:n.jersey,image:o,order:s.players.length+1,active:!0}),A(),P("Player added")}})}if(e==="addLineup")return U({title:"Publish Playing XI",fields:[{name:"title",label:"Title",value:"Playing XI",required:!0},{name:"match",label:"Match / Opponent"},{name:"players",label:"11 Player IDs (comma separated)",type:"textarea",value:"RDM001,RDM002,RDM003,RDM004,RDM005,RDM006,RDM007,RDM008,RDM009,RDM010,RDM011",rows:3},{name:"subs",label:"Substitutes (comma separated)",value:"RDM012,RDM013,RDM014,RDM015"}],onSubmit:async t=>{const a=r=>[...new Set(String(r||"").split(",").map(i=>i.trim().toUpperCase()).filter(i=>/^RDM\d{3}$/.test(i)))],n=a(t.players).slice(0,11),o=a(t.subs).filter(r=>!n.includes(r));if(n.length!==11)throw new Error("Playing XI requires 11 valid Player IDs");await H("PlayingXI",null,{title:t.title,match:t.match,players:n,subs:o,createdMs:Date.now()}),A(),P("Playing XI published")}});if(e==="addHonour")return U({title:"Add Team Honour",fields:[{name:"year",label:"Year",value:String(new Date().getFullYear()),required:!0},{name:"title",label:"Result (e.g. Winner)",required:!0},{name:"sub",label:"Tournament Name",required:!0},{name:"photo",label:"Trophy / Honour Photo (Optional)",type:"file"}],onSubmit:async t=>{const a=t.photo?await we(t.photo,900,.78):E.logoPath;await H("Honours",null,{year:String(t.year||"").trim(),title:String(t.title||"").trim(),sub:String(t.sub||"").trim(),image:a,order:s.honours.length+1}),A(),P("Honour saved")}});if(e==="addTournament")return U({title:"Add Tournament",fields:[{name:"name",label:"Tournament Name",required:!0},{name:"season",label:"Season / Year",value:String(new Date().getFullYear())},{name:"status",label:"Status",type:"select",options:["UPCOMING","ONGOING","COMPLETED"]},{name:"position",label:"Final Position"},{name:"venueName",label:"Venue"}],onSubmit:async t=>{await H("Tournaments",null,{name:String(t.name||"").trim(),season:String(t.season||"").trim(),status:String(t.status||"UPCOMING").trim(),position:String(t.position||"").trim(),venueName:String(t.venueName||"").trim(),venue:String(t.venueName||"").trim(),createdMs:Date.now()}),A(),P("Tournament added")}});if(e==="addRecord")return U({title:"Add Team Record",fields:[{name:"title",label:"Record Title",placeholder:"e.g. Highest Team Score",required:!0},{name:"value",label:"Record Value",placeholder:"e.g. 214/3 (20 Ov)",required:!0},{name:"player",label:"Player Name (Optional)"},{name:"season",label:"Season / Year",value:String(new Date().getFullYear())}],onSubmit:async t=>{await H("TeamRecords",null,{...t,createdMs:Date.now()}),A(),P("Record saved")}});if(e==="editAppConfig")return U({title:"App & APK Update",subtitle:"Bump Version & Version Code to trigger automatic Update Popup in all older Android APKs",fields:[{name:"appVersion",label:"Latest APK Version (e.g. 1.2.0)",value:Ve(),required:!0},{name:"appVersionCode",label:"Version Code (Integer, e.g. 3)",type:"number",value:String(s.appVersionCode||Q.versionCode),required:!0},{name:"updateNotes",label:"What is New (Update Popup Notes)",type:"textarea",value:s.updateNotes||"",placeholder:"Describe new features or bug fixes for users",rows:3},{name:"apkDownloadUrl",label:"Direct APK Download URL",value:qe(),required:!0},{name:"apkReleasesUrl",label:"Update Page URL (Optional)",value:on()},{name:"forceUpdate",label:"Force Update (Hide Later button)",type:"checkbox",checked:!!s.forceUpdate},{name:"logoPhoto",label:"Update Team Logo (Optional)",type:"file"}],onSubmit:async t=>{const a=t.logoPhoto?await we(t.logoPhoto,600,.8):"";await Ya({appVersion:t.appVersion,appVersionCode:t.appVersionCode,updateNotes:t.updateNotes,forceUpdate:!!t.forceUpdate,apkDownloadUrl:t.apkDownloadUrl,apkReleasesUrl:t.apkReleasesUrl,logo:a}),A(),P("APK update settings synced to all devices")}});if(e==="addSocial")return U({title:"Add Social Channel",fields:[{name:"name",label:"Platform",placeholder:"INSTAGRAM",required:!0},{name:"displayName",label:"Display Name",placeholder:"RDM Instagram"},{name:"url",label:"URL",placeholder:"https://...",required:!0}],onSubmit:async t=>{await H("Socials",null,{name:t.name.toUpperCase(),displayName:t.displayName||t.name,url:t.url,icon:"↗",order:s.socials.length+1}),A(),P("Social channel added")}})}async function la(e){const t=re(),a=t?await Ia():!0;an({currentVersion:e.currentVersion,latestVersion:e.latestVersion,notes:e.notes,forceUpdate:e.forceUpdate,isNative:t,needsInstallPermission:t&&!a,onOpenPermissionSettings:()=>La(),onSubscribeProgress:n=>Na(n),onDownload:async()=>t?await Da(e.apkUrl||qe()):(Ht(e.apkUrl||qe()),P(`Downloading RDM Official APK v${e.latestVersion}...`),{started:!0})})}async function Fe(e=!1){const t=je();if(!t.hasUpdate)return e&&P(`You are on the latest version (v${t.currentVersion})`),!1;if(!e&&!t.forceUpdate)try{if(sessionStorage.getItem(`rdm-dismiss-update-${t.latestVersion}`)==="1")return!1}catch{}return await la(t),!0}function An(){if(Jt())return;const e=Date.now();if(e-p.lastBackPressAt<2e3){Ma();return}p.lastBackPressAt=e,P("Press back again to exit RDM Official")}async function kn(){Be(p.theme);try{const a=new URLSearchParams(window.location.search).get("key")||"";if(a.trim()){const n=await pa(a);(n==null?void 0:n.role)==="admin"?(p.portalMode="admin",p.screen="portalAuth"):(n==null?void 0:n.role)==="player"&&n.playerId&&(p.portalMode="player",p.portalPlayerId=n.playerId,p.screen="playerPortal")}}catch{}const e=Xt();C.length=0,C.push(e);try{window.history.replaceState({rdmIdx:0},"",ke(e))}catch{}window.addEventListener("popstate",()=>{if(nt()){Kt();try{window.history.pushState({rdmIdx:C.length-1},"",ke(C[C.length-1]))}catch{}return}if(p.drawerOpen){ue(!1);try{window.history.pushState({rdmIdx:C.length-1},"",ke(C[C.length-1]))}catch{}return}C.length>1&&(C.pop(),ft(C[C.length-1]))}),await Ra(An),window.addEventListener("rdm-pwa-ready",()=>{(p.screen==="public"&&p.publicTab==="more"||p.screen==="subpage"&&p.morePage==="download")&&A()}),await Y();let t=Date.now();at().then(a=>{var n;(n=a==null?void 0:a.otaResult)!=null&&n.updated&&P(`Updated silently to v${a.otaResult.otaVersion||""}`),Fe(!1)}).catch(()=>{}),Ua(()=>{const a=Date.now();a-t<3e4||(t=a,at().then(()=>{Fe(!1)}).catch(()=>{}))}),Ha(()=>{const a=document.activeElement,n=a&&(a.tagName==="INPUT"||a.tagName==="TEXTAREA"||a.tagName==="SELECT");!nt()&&!n&&(A(),Fe(!1))}),Ka(({role:a,playerId:n,verified:o})=>{if(o&&a==="player"&&n&&(p.portalPlayerId=n,p.screen==="playerAuth")){p.portalMode="player",T({screen:"playerPortal"},{replace:!0}),Ye();return}p.portalMode==="admin"?o&&a==="admin"?T({screen:"admin",adminTab:"overview"},{replace:!0}):T({screen:"portalAuth"},{replace:!0}):p.screen==="portalAuth"&&o&&a==="admin"?T({screen:"admin",adminTab:"overview"},{replace:!0}):p.screen==="admin"&&!(o&&a==="admin")?T({screen:"portalAuth"},{replace:!0}):p.screen==="playerPortal"&&!(Me(p.portalPlayerId||he())||x())?T({screen:"playerAuth"},{replace:!0}):A(),Ye()}),setTimeout(()=>Ye(),1200)}kn();export{ot as W};
