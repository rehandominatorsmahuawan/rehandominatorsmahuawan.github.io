(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const le={versionName:"1.3.0",versionCode:5},Ls="https://rehandominatorsmahuawan.github.io/version.json",Ns="https://rehandominatorsmahuawan.github.io/ota/manifest.json",Is=["rehanalam7124517@gmail.com","rehahalam7124517@gmail.com","admin@rdm-official.in"],Za={"rdm.admin":"admin@rdm-official.in","rdm-admin":"admin@rdm-official.in",admin:"admin@rdm-official.in"};function Vr(e=""){const t=String(e||"").trim();if(!t)return"";const n=t.toLowerCase();return Object.prototype.hasOwnProperty.call(Za,n)?Za[n]:t}function An(e="0.0.0",t="0.0.0"){const n=s=>String(s||"").replace(/^v/i,"").split(/[^0-9]+/).filter(Boolean).map(Number),a=n(e),r=n(t),i=Math.max(a.length,r.length,3);for(let s=0;s<i;s++){const o=a[s]||0,l=r[s]||0;if(o<l)return-1;if(o>l)return 1}return 0}const R={appName:"RDM Official",orgName:"REHAN DOMINATORS MAHUAWAN",shortName:"RDM",location:"MAHUAWAN • GOPALGANJ • BIHAR",locationLabel:"Mahuawan, Gopalganj, Bihar",founded:"2024",motto:"ONE TEAM • ONE DREAM • ONE DOMINATION",tagline:"YOUR TEAM. YOUR PRIDE. YOUR GAME.",subtitle:"THE HOME OF REHAN DOMINATORS MAHUAWAN",captainContactUrl:"https://wa.me/918521254605",captainPhoneDisplay:"+91 85212 54605",appVersion:le.versionName,apkDownloadUrl:"https://github.com/RehanDominatorsMahuawan/RehanDominatorsMahuawan.github.io/releases/latest/download/RDM-Official.apk",apkReleasesUrl:"https://github.com/RehanDominatorsMahuawan/RehanDominatorsMahuawan.github.io/releases/latest",websiteUrl:"https://rehandominatorsmahuawan.github.io/",logoPath:"assets/rdm-logo.png",heroImagePath:"src/assets/images/hero_cobalt_stadium_1795345341929.jpg",heritageImagePath:"src/assets/images/craft_willow_cobalt_1795345340935.jpg"},he={RDM001:"RA08",RDM003:"SA-V",RDM006:"SO-WK",RDM004:"AKA",RDM002:"ASI",RDM007:"WSM",RDM008:"JBD",RDM010:"GLM",RDM011:"SHA57",RDM005:"SAL02",RDM012:"LKY",RDM016:"KLF",RDM009:"SKH",RDM013:"ABS",RDM014:"SBA",RDM015:"ZSN",RDM017:"JVD"},In={RDM001:{nick:"The Skipper",bio:"Captain and all-rounder who leads from the front with discipline, confidence and team-first cricket."},RDM002:{nick:"The Anchor",bio:"A reliable top-order batsman who values a solid start, smart shot selection and steady runs."},RDM003:{nick:"The Game Changer",bio:"Vice-captain and all-rounder who brings flexibility, energy and impact through every phase of the game."},RDM004:{nick:"The Attacker",bio:"An aggressive strike opener and fast-bowling all-rounder built to set the tempo and deliver under pressure."},RDM005:{nick:"The Finisher",bio:"A calm middle-order batsman who backs his shots and looks to finish innings with confidence."},RDM006:{nick:"The Gloveman",bio:"The team main wicket-keeper and a versatile batsman who adds energy, awareness and balance to the team."},RDM007:{nick:"The Complete Package",bio:"A top-order all-rounder who can contribute with bat and ball across every phase of the match."},RDM008:{nick:"The Middle Rock",bio:"A dependable middle-order batsman focused on building partnerships and keeping the innings moving."},RDM009:{nick:"The Closer",bio:"A finisher who enjoys pressure moments and looks to give the team a strong end to the innings."},RDM010:{nick:"The Impact Player",bio:"A useful all-rounder and finisher who can change momentum with quick runs and emergency bowling."},RDM011:{nick:"The Middle Order Maestro",bio:"A right-handed middle-order batsman who adds stability and depth to the batting line-up."},RDM012:{nick:"The All-Rounder",bio:"A versatile all-rounder who can contribute with bat or ball when the team needs him."},RDM013:{nick:"The Utility Ace",bio:"A flexible all-rounder who can finish with the bat and handle important middle or death overs."},RDM014:{nick:"The Power Finisher",bio:"A batsman with a finisher role who looks to add quick runs and impact."},RDM015:{nick:"The Last-Over Hitter",bio:"A finisher who plays with intent in high-pressure batting moments."},RDM016:{nick:"The Lefty",bio:"A left-handed middle-order batsman who adds variety and balance to the batting line-up."},RDM017:{nick:"The Finisher",bio:"A right-handed batsman who specialises in the finisher role and looks to close innings strongly."}},Te=[["RDM001","Rehan Akhtar","Captain • All-Rounder","Right-Handed • Right-Arm Fast • Middle Order • Middle Overs","08"],["RDM003","Saif Ali","Vice-Captain • All-Rounder","Both-Handed • Fast • Non-Striker Opener • All Phases",""],["RDM006","Soaib Akhtar","Wicket-Keeper • Batsman","Right-Handed • Left-Arm Fast • Top Order • Finisher",""],["RDM004","Akib Ansari","All-Rounder","Right-Handed • Fast • Striker Opener • Middle + Death",""],["RDM002","Asif Ali","Batsman","Right-Handed • Top Order",""],["RDM007","Wasim","All-Rounder","Right-Handed • Fast • Top Order • All Phases",""],["RDM008","Jubed","Batsman","Right-Handed • Middle Order",""],["RDM010","Gulam","All-Rounder","Right-Handed • Fast • Finisher • Emergency Bowling",""],["RDM011","Sahil Ansari","Batsman","Right-Handed • Middle Order","57"],["RDM005","Sahil Ali","Batsman","Right-Handed • Middle Order • Finisher","02"],["RDM012","Lucky","All-Rounder","Right-Handed • Fast • Middle Order • Middle Overs",""],["RDM016","Kaif Lefty","Batsman","Left-Handed • Middle Order",""],["RDM009","SK. Hanif","Batsman","Right-Handed • Finisher",""],["RDM013","Abushad","All-Rounder","Right-Handed • Fast • Middle Order + Finisher • Middle + Death",""],["RDM014","Sabre Alam","Batsman","Right-Handed • Finisher",""],["RDM015","Zishan","Batsman","Right-Handed • Finisher",""],["RDM017","Javed","Batsman","Right-Handed • Finisher",""]].map((e,t)=>{var n,a;return{id:e[0],name:e[1],role:e[2],detail:e[3],jersey:e[4],image:"",nick:((n=In[e[0]])==null?void 0:n.nick)||"",bio:((a=In[e[0]])==null?void 0:a.bio)||"",socials:[],order:t+1,_docId:e[0]}}),Rt=[{_docId:"h01",year:"2024",title:"Winner",sub:"Mahuawan Premier League 1",image:"assets/trophy-2024.png",order:1},{_docId:"h02",year:"2025",title:"Winner",sub:"Mahuawan Premier League 2",image:"assets/trophy-2025.png",order:2},{_docId:"h03",year:"2026",title:"Runner-Up",sub:"Tournament Name • To Be Added",image:"assets/trophy-2026.png",order:3}],Lt=[{_docId:"youtube",name:"YOUTUBE",displayName:"RDM YouTube",url:"https://www.youtube.com/@rehan_dominators_mahuawan",icon:"▶",order:1},{_docId:"telegram",name:"TELEGRAM",displayName:"RDM Telegram",url:"https://t.me/rehandominatorsmahuawan",icon:"✈",order:2},{_docId:"whatsapp",name:"WHATSAPP",displayName:"RDM WhatsApp Channel",url:"https://whatsapp.com/channel/0029Vb8icRM3WHTQGQtM4G3j",icon:"◉",order:3},{_docId:"instagram",name:"INSTAGRAM",displayName:"RDM Instagram",url:"",icon:"IG",order:4},{_docId:"facebook",name:"FACEBOOK",displayName:"RDM Facebook",url:"",icon:"f",order:5}];function v(e=""){const t=String(e??"").replace(/\r\n?/g,`
`).replace(/^\n+|\s+$/g,"");if(!t)return"";const n={"ᴀ":"A",ʙ:"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F",ɢ:"G",ʜ:"H",ɪ:"I","ᴊ":"J","ᴋ":"K",ʟ:"L","ᴍ":"M",ɴ:"N","ᴏ":"O","ᴘ":"P",ǫ:"Q",ʀ:"R","ꜱ":"S","ᴛ":"T","ᴜ":"U","ᴠ":"V","ᴡ":"W",ʏ:"Y","ᴢ":"Z"},a=t.replace(/[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡʏᴢ]/g,r=>n[r]||r);return/^(RDM\d+|RA\d+|SA-V|SO-WK|AKA|ASI|WSM|JBD|GLM|SHA\d+|SAL\d+|LKY|KLF|SKH|ABS|SBA|ZSN|JVD)$/i.test(a)?a.toUpperCase():a===a.toUpperCase()&&/[A-Z]{2,}/.test(a)&&a.length>4?a.toLowerCase().replace(/\b([a-z])/g,(i,s,o,l)=>{var f;const c=((f=l.slice(o).match(/^[a-z]+/i))==null?void 0:f[0])||"";return o>0&&l[o-1]!==`
`&&["and","or","of","the","in","on","to","for","at","by","vs","is"].includes(c.toLowerCase())?c.toLowerCase().charAt(0):s.toUpperCase()}).replace(/\b(Rdm|Xi|H2h|Mpl|Potm|Nr)\b/gi,i=>i.toUpperCase()).replace(/\bSk\./gi,"SK."):a}function p(e=""){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ie(e=""){const t=String(e||"").trim();return/^https?:\/\//i.test(t)?t:""}function St(e=""){const t=String(e||"").trim();return!!(!t||/^data:image\/svg\+xml/i.test(t)||/(?:logo\.jpg|CRICKET_YOUR_TAGLINE_HERE|rdm_crest_emblem|^assets\/(?:rehan\.png|players\/))/i.test(t))}function sa(e,t=""){const n=String(e||"").trim();return St(n)?t&&!St(t)?t:R.logoPath:n}async function Ds(){return null}/*! Capacitor: https://capacitorjs.com/ - MIT License */var rt;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(rt||(rt={}));class kn extends Error{constructor(t,n,a){super(t),this.message=t,this.code=n,this.data=a}}const Os=e=>{var t,n;return e!=null&&e.androidBridge?"android":!((n=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},Us=e=>{const t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},a=n.Plugins=n.Plugins||{},r=()=>t!==null?t.name:Os(e),i=()=>r()!=="web",s=d=>{const h=c.get(d);return!!(h!=null&&h.platforms.has(r())||o(d))},o=d=>{var h;return(h=n.PluginHeaders)===null||h===void 0?void 0:h.find(m=>m.name===d)},l=d=>e.console.error(d),c=new Map,f=(d,h={})=>{const m=c.get(d);if(m)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),m.proxy;const b=r(),_=o(d);let w;const g=async()=>(!w&&b in h?w=typeof h[b]=="function"?w=await h[b]():w=h[b]:t!==null&&!w&&"web"in h&&(w=typeof h.web=="function"?w=await h.web():w=h.web),w),k=(x,F)=>{var B,H;if(_){const E=_==null?void 0:_.methods.find(U=>F===U.name);if(E)return E.rtype==="promise"?U=>n.nativePromise(d,F.toString(),U):(U,j)=>n.nativeCallback(d,F.toString(),U,j);if(x)return(B=x[F])===null||B===void 0?void 0:B.bind(x)}else{if(x)return(H=x[F])===null||H===void 0?void 0:H.bind(x);throw new kn(`"${d}" plugin is not implemented on ${b}`,rt.Unimplemented)}},P=x=>{let F;const B=(...H)=>{const E=g().then(U=>{const j=k(U,x);if(j){const A=j(...H);return F=A==null?void 0:A.remove,A}else throw new kn(`"${d}.${x}()" is not implemented on ${b}`,rt.Unimplemented)});return x==="addListener"&&(E.remove=async()=>F()),E};return B.toString=()=>`${x.toString()}() { [capacitor code] }`,Object.defineProperty(B,"name",{value:x,writable:!1,configurable:!1}),B},$=P("addListener"),N=P("removeListener"),L=(x,F)=>{const B=$({eventName:x},F).then(U=>U),H=async()=>{const U=await B;await N({eventName:x,callbackId:U})},E=new Promise(U=>B.then(()=>U({remove:H})));return E.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await H()},E},O=new Proxy({},{get(x,F){switch(F){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return _?L:$;case"removeListener":return N;default:return P(F)}}});return a[d]=O,c.set(d,{name:d,proxy:O,platforms:new Set([...Object.keys(h),..._?[b]:[]])}),O};return n.convertFileSrc||(n.convertFileSrc=d=>d),n.getPlatform=r,n.handleError=l,n.isNativePlatform=i,n.isPluginAvailable=s,n.registerPlugin=f,n.Exception=kn,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},Bs=e=>e.Capacitor=Us(e),se=Bs(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Me=se.registerPlugin;class oa{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,n){let a=!1;this.listeners[t]||(this.listeners[t]=[],a=!0),this.listeners[t].push(n);const i=this.windowListeners[t];i&&!i.registered&&this.addWindowListener(i),a&&this.sendRetainedArgumentsForEvent(t);const s=async()=>this.removeListener(t,n);return Promise.resolve({remove:s})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,n,a){const r=this.listeners[t];if(!r){if(a){let i=this.retainedEventArguments[t];i||(i=[]),i.push(n),this.retainedEventArguments[t]=i}return}r.forEach(i=>i(n))}hasListeners(t){var n;return!!(!((n=this.listeners[t])===null||n===void 0)&&n.length)}registerWindowListener(t,n){this.windowListeners[n]={registered:!1,windowEventName:t,pluginEventName:n,handler:a=>{this.notifyListeners(n,a)}}}unimplemented(t="not implemented"){return new se.Exception(t,rt.Unimplemented)}unavailable(t="not available"){return new se.Exception(t,rt.Unavailable)}async removeListener(t,n){const a=this.listeners[t];if(!a)return;const r=a.indexOf(n);r!==-1&&this.listeners[t].splice(r,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const n=this.retainedEventArguments[t];n&&(delete this.retainedEventArguments[t],n.forEach(a=>{this.notifyListeners(t,a)}))}}const er=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),tr=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Fs extends oa{async getCookies(){const t=document.cookie,n={};return t.split(";").forEach(a=>{if(a.length<=0)return;let[r,i]=a.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");r=tr(r).trim(),i=tr(i).trim(),n[r]=i}),n}async setCookie(t){try{const n=er(t.key),a=er(t.value),r=t.expires?`; expires=${t.expires.replace("expires=","")}`:"",i=(t.path||"/").replace("path=",""),s=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${n}=${a||""}${r}; path=${i}; ${s};`}catch(n){return Promise.reject(n)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const n of t)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}Me("CapacitorCookies",{web:()=>new Fs});const Hs=async e=>new Promise((t,n)=>{const a=new FileReader;a.onload=()=>{const r=a.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},a.onerror=r=>n(r),a.readAsDataURL(e)}),qs=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(r=>r.toLocaleLowerCase()).reduce((r,i,s)=>(r[i]=e[t[s]],r),{})},Vs=(e,t=!0)=>e?Object.entries(e).reduce((a,r)=>{const[i,s]=r;let o,l;return Array.isArray(s)?(l="",s.forEach(c=>{o=t?encodeURIComponent(c):c,l+=`${i}=${o}&`}),l.slice(0,-1)):(o=t?encodeURIComponent(s):s,l=`${i}=${o}`),`${a}&${l}`},"").substr(1):null,Ws=(e,t={})=>{const n=Object.assign({method:e.method||"GET",headers:e.headers},t),r=qs(e.headers)["content-type"]||"";if(typeof e.data=="string")n.body=e.data;else if(r.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[s,o]of Object.entries(e.data||{}))i.set(s,o);n.body=i.toString()}else if(r.includes("multipart/form-data")||e.data instanceof FormData){const i=new FormData;if(e.data instanceof FormData)e.data.forEach((o,l)=>{i.append(l,o)});else for(const o of Object.keys(e.data))i.append(o,e.data[o]);n.body=i;const s=new Headers(n.headers);s.delete("content-type"),n.headers=s}else(r.includes("application/json")||typeof e.data=="object")&&(n.body=JSON.stringify(e.data));return n};class js extends oa{async request(t){const n=Ws(t,t.webFetchExtra),a=Vs(t.params,t.shouldEncodeUrlParams),r=a?`${t.url}?${a}`:t.url,i=await fetch(r,n),s=i.headers.get("content-type")||"";let{responseType:o="text"}=i.ok?t:{};s.includes("application/json")&&(o="json");let l,c;switch(o){case"arraybuffer":case"blob":c=await i.blob(),l=await Hs(c);break;case"json":l=await i.json();break;case"document":case"text":default:l=await i.text()}const f={};return i.headers.forEach((d,h)=>{f[h]=d}),{data:l,headers:f,status:i.status,url:i.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}Me("CapacitorHttp",{web:()=>new js});var nr;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(nr||(nr={}));var ar;(function(e){e.StatusBar="StatusBar",e.NavigationBar="NavigationBar"})(ar||(ar={}));class Gs extends oa{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Me("SystemBars",{web:()=>new Gs});const zs="modulepreload",Ks=function(e,t){return new URL(e,t).href},rr={},la=function(t,n,a){let r=Promise.resolve();if(n&&n.length>0){let s=function(f){return Promise.all(f.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=s(n.map(f=>{if(f=Ks(f,a),f in rr)return;rr[f]=!0;const d=f.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!a)for(let _=o.length-1;_>=0;_--){const w=o[_];if(w.href===f&&(!d||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${h}`))return;const b=document.createElement("link");if(b.rel=d?"stylesheet":zs,d||(b.as="script"),b.crossOrigin="",b.href=f,c&&b.setAttribute("nonce",c),document.head.appendChild(b),d)return new Promise((_,w)=>{b.addEventListener("load",_),b.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return r.then(s=>{for(const o of s||[])o.status==="rejected"&&i(o.reason);return t().catch(i)})},ca=Me("App",{web:()=>la(()=>import("./web-uU7madHV.js"),[],import.meta.url).then(e=>new e.AppWeb)});var Gt;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(Gt||(Gt={}));var ir;(function(e){e.None="NONE",e.Slide="SLIDE",e.Fade="FADE"})(ir||(ir={}));const $n=Me("StatusBar"),Xs=Me("SplashScreen",{web:()=>la(()=>import("./web-D6BOmRez.js"),[],import.meta.url).then(e=>new e.SplashScreenWeb)});var sr;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(sr||(sr={}));var or;(function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"})(or||(or={}));const lr=Me("Keyboard"),Wr=Me("Browser",{web:()=>la(()=>import("./web-C3Pc550_.js"),[],import.meta.url).then(e=>new e.BrowserWeb)}),ce=se.isNativePlatform()?Me("RdmUpdater"):null;let cr=!1,Je=null;typeof window<"u"&&window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Je=e,window.dispatchEvent(new CustomEvent("rdm-pwa-ready"))});function ye(){return se.isNativePlatform()&&se.getPlatform()==="android"}function Dn(){return se.isNativePlatform()}function jr(){return!se.isNativePlatform()&&!!Je}async function Ys(){if(!Je)return!1;try{await Je.prompt();const e=await Je.userChoice;if((e==null?void 0:e.outcome)==="accepted")return Je=null,!0}catch{}return!1}async function Gr(e="royal"){const t=e==="night"||e==="carbon"||e==="floodlight"?"floodlight":e==="emerald"?"emerald":e==="copper"||e==="crimson"?"crimson":"royal",n={royal:"#F5F7FB",floodlight:"#070C18",emerald:"#F6F9F7",crimson:"#FAF7F6"},a=n[t]||n.royal,r=document.getElementById("rdmThemeMeta");if(r&&(r.content=a),!!se.isNativePlatform())try{await $n.setOverlaysWebView({overlay:!1}),await $n.setBackgroundColor({color:a}),await $n.setStyle({style:t==="floodlight"?Gt.Dark:Gt.Light})}catch{}}async function Js(e){const t=localStorage.getItem("rdm-app-theme")||"royal";if(await Gr(t),se.isNativePlatform()){try{lr.addListener("keyboardWillShow",()=>{document.body.classList.add("keyboard-open");const n=document.activeElement;n&&typeof n.scrollIntoView=="function"&&setTimeout(()=>{try{n.scrollIntoView({behavior:"smooth",block:"center"})}catch{}},120)}),lr.addListener("keyboardWillHide",()=>{document.body.classList.remove("keyboard-open")})}catch{}if(!cr&&typeof e=="function"){cr=!0;try{ca.addListener("backButton",({canGoBack:n})=>{e({canGoBack:n})})}catch{}}}}async function xn(){if(se.isNativePlatform())try{await Xs.hide({fadeOutDuration:220})}catch{}}async function Qs(){if(se.isNativePlatform())try{await ca.exitApp()}catch{}}async function zr(e){const t=String(e||"").trim();if(!/^https?:\/\//i.test(t))return!1;if(se.isNativePlatform())try{return await Wr.open({url:t,presentationStyle:"popover"}),!0}catch{}const n=document.createElement("a");return n.href=t,n.target="_blank",n.rel="noopener noreferrer",document.body.appendChild(n),n.click(),n.remove(),!0}async function Zs(){if(!ye()||!ce)return null;try{return await ce.getVersionInfo()}catch{return null}}async function eo(){if(!ye()||!ce)return!1;try{const e=await ce.canInstallPackages();return!!(e!=null&&e.allowed)}catch{return!1}}async function to(){if(!ye()||!ce)return!1;try{const e=await ce.openInstallPermissionSettings();return!!(e!=null&&e.opened)}catch{return!1}}async function no(e){if(!ye()||!ce)return{updated:!1};try{return await ce.checkAndApplyOta({manifestUrl:e})}catch(t){return{updated:!1,error:(t==null?void 0:t.message)||"OTA check failed"}}}async function ao(e){const t=String(e).trim();if(!/^https:\/\//i.test(t))throw new Error("HTTPS APK download URL is required.");if(!ye()||!ce)throw new Error("Native APK updater is only available inside the Android app.");return await ce.downloadAndInstallApk({url:t})}function ro(e){if(!ye()||!ce||typeof e!="function")return()=>{};let t=null,n=!1;try{const a=ce.addListener("apkDownloadProgress",r=>{n||e(r||{})});Promise.resolve(a).then(r=>{var i;if(n)try{(i=r==null?void 0:r.remove)==null||i.call(r)}catch{}else t=r}).catch(()=>{})}catch{}return()=>{var a;n=!0;try{(a=t==null?void 0:t.remove)==null||a.call(t)}catch{}}}function io(e){if(!se.isNativePlatform()||typeof e!="function")return()=>{};let t=null,n=!1;try{const a=ca.addListener("appStateChange",({isActive:r})=>{r&&!n&&e()});Promise.resolve(a).then(r=>{var i;if(n)try{(i=r==null?void 0:r.remove)==null||i.call(r)}catch{}else t=r}).catch(()=>{})}catch{}return()=>{var a;n=!0;try{(a=t==null?void 0:t.remove)==null||a.call(t)}catch{}}}async function Kr(e){const t=String(e||"").trim();if(!/^https?:\/\//i.test(t))return!1;if(ye()&&ce)return await ce.downloadAndInstallApk({url:t});if(se.isNativePlatform())try{return await Wr.open({url:t,presentationStyle:"popover"}),!0}catch{}const n=document.createElement("a");return n.href=t,n.download="RDM-Official.apk",n.rel="noopener noreferrer",document.body.appendChild(n),n.click(),n.remove(),!0}const so="73442ec47da8d19de47638438c8563bb266e880cf4ce8cafa5579ed20d2b94be",On="rdm_apk_admin_unlocked_v1",Un="rdm_apk_player_unlocked_v1",Xr={RDM001:"6fb67b0874290083bb94886486ada2535de541c56fca8eb91b7134bb5014019a",RDM002:"0df79a87814b5ff72554d539b8d94d6592ae84e8145cda22111ee55ffa8876a0",RDM003:"c13d891485885373a0c125b510bf6491c3f22e115da1c1b8f0ab95cabdf572d9",RDM004:"f71cf8dbeb14f2e8c69484f6ff80d20b1402943f084f713e590ea9abb6afe2fc",RDM005:"561ba1e989a02839b4ed929616fb54fb8cb6414cee6b5e43434162151b853c8d",RDM006:"6ce4bb6723456794764b11952958ead6e243848a389cf97ab13040e4d56389b9",RDM007:"1fefa430168b7419ae9b7596b9ae51d25989d81a89f7981afe6bc21f69a22353",RDM008:"b391f2d79a5827d539596a1005111febf86a0e2324c6265c700a3020188122cb",RDM009:"d7bb73041868d2bc129b7d7935e28524d5d168f1d6beb1b2c56efef08fb2194d",RDM010:"48ddb3c347f15fc29dd161e6ac9f988827731db86fd78b6a6a9833c977e2aecb",RDM011:"7f88a18f219f70c47ad1ba9f00ab03bcd710d426aa42a43064ac80dd66cd80e9",RDM012:"d1ff943fd5199f473569af348a31630842b0b935b4da36e94ec47b9a431f2355",RDM013:"23a060a79f69510bee9ad34ed809f96336ad606d5e9f14436253460194569145",RDM014:"f06575828bd55e8aceaeab8af0b48d93a6d6b9f714f68ea7717de532a7f9073f",RDM015:"41d5c7c2a1bda007fc24ce1fa8f911ce69e457251733b74d12c9c10ae496dc53",RDM016:"e44b33be11c30c3ec35638ddde517ad1338c88557f80f795f0c5b05e5552a6a0",RDM017:"2b4eff690afa58c019fee95e6bddf75880f48315fc4f83bbb7f9214ca8b25790"};function oo(e){function t(d,h){return d>>>h|d<<32-h}const n=Math.pow,a=n(2,32);let r="";const i=[],s=e.length*8,o=[],l=[];let c=0;const f={};for(let d=2;c<64;d++)if(!f[d]){for(let h=0;h<313;h+=d)f[h]=d;o[c]=n(d,.5)*a|0,l[c++]=n(d,1/3)*a|0}for(e+="";e.length%64-56;)e+="\0";for(let d=0;d<e.length;d++){const h=e.charCodeAt(d);i[d>>2]|=h<<(3-d)%4*8}i[i.length]=s/a|0,i[i.length]=s;for(let d=0;d<i.length;){const h=i.slice(d,d+=16),m=o.slice(0);for(let b=0;b<64;b++){const _=h[b-15],w=h[b-2],g=o[0],k=o[4],P=o[7]+(t(k,6)^t(k,11)^t(k,25))+(k&o[5]^~k&o[6])+l[b]+(h[b]=b<16?h[b]:h[b-16]+(t(_,7)^t(_,18)^_>>>3)+h[b-7]+(t(w,17)^t(w,19)^w>>>10)|0),$=(t(g,2)^t(g,13)^t(g,22))+(g&o[1]^g&o[2]^o[1]&o[2]);o[7]=o[6],o[6]=o[5],o[5]=o[4],o[4]=o[3]+P|0,o[3]=o[2],o[2]=o[1],o[1]=o[0],o[0]=P+$|0}for(let b=0;b<8;b++)o[b]=o[b]+m[b]|0}for(let d=0;d<8;d++)for(let h=3;h+1;h--){const m=o[d]>>h*8&255;r+=(m<16?0:"")+m.toString(16)}return r}async function Bn(e){var a,r;const t=String(e??"");try{if((r=(a=globalThis.crypto)==null?void 0:a.subtle)!=null&&r.digest){const i=await globalThis.crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(i),s=>s.toString(16).padStart(2,"0")).join("")}}catch{}const n=unescape(encodeURIComponent(t));return oo(n)}function lo(){try{return localStorage.getItem(On)==="1"}catch{return!1}}function da(e){try{e?localStorage.setItem(On,"1"):localStorage.removeItem(On)}catch{}}function co(){try{const e=String(localStorage.getItem(Un)||"").trim().toUpperCase();return Object.prototype.hasOwnProperty.call(Xr,e)?e:null}catch{return null}}function Nt(e){try{e?localStorage.setItem(Un,String(e).trim().toUpperCase()):localStorage.removeItem(Un)}catch{}}function Ne(){return window.rdmAuth||(typeof rdmAuth<"u"?rdmAuth:null)}function be(){return window.rdmDB||(typeof rdmDB<"u"?rdmDB:null)}function fe(){var e,t,n,a;return((a=(n=(t=(e=window.firebase)==null?void 0:e.firestore)==null?void 0:t.FieldValue)==null?void 0:n.serverTimestamp)==null?void 0:a.call(n))||new Date}function Re(e){const t={};if(!e||typeof e!="object")return t;for(const[n,a]of Object.entries(e))n==="_docId"||n==="_profileUid"||n==="_col"||a!=null&&(t[n]=a);return t}function zt(e){const t=String((e==null?void 0:e.code)||""),n=String((e==null?void 0:e.message)||"");return t==="permission-denied"||/Missing or insufficient permissions|Missing cloud permissions/i.test(n)}function Ie(e){if(zt(e)){const t=new Error("Missing cloud permissions: connect Firebase Cloud Sync below or publish updated firestore.rules.");return t.code="permission-denied",t}return e instanceof Error?e:new Error(String((e==null?void 0:e.message)||"Sync failed"))}const ne=e=>({...e.data(),_docId:e.id}),u={ready:!1,loadingData:!1,loadError:"",authChecked:!1,apkAdminUnlocked:lo(),apkPlayerId:co(),user:null,account:null,role:"guest",playerId:null,brandLogo:R.logoPath,apkDownloadUrl:R.apkDownloadUrl,apkReleasesUrl:R.apkReleasesUrl,appVersion:le.versionName,appVersionCode:le.versionCode,nativeVersionName:null,nativeVersionCode:null,otaBuild:0,otaVersion:"",canInstallPackages:!1,updateNotes:"",forceUpdate:!1,remoteVersionInfo:null,players:Te.map(e=>({...e})),matches:[],news:[],updates:[],honours:Rt.map(e=>({...e})),gallery:[],socials:Lt.map(e=>({...e})),stats:[],achievements:[],availability:[],lineups:[],records:[],tournaments:[],opponents:[]};function Fe(){return!!(u.user&&u.account&&u.account.active===!0&&u.account.role==="admin"&&u.role==="admin")}function J(){return!!(Fe()||u.apkAdminUnlocked)}function ua(e=""){return!(u.user&&u.account&&u.account.active===!0&&u.role==="player"&&u.playerId)?!1:e?u.playerId===e:!0}function De(){return ua()?u.playerId:u.apkPlayerId?u.apkPlayerId:null}function ut(e=""){const t=De();return t?e?t===e:!0:!1}function pa(){const e=De();return e&&u.players.find(t=>t.id===e)||null}function uo(e,t,n){const a=new Map(Te.map((l,c)=>[l.id,c+1])),r=new Map(Te.map(l=>[l.id,l]));let i;e.length>0?(i=e.map(l=>{const c=r.get(l.id);return{id:l.id,name:l.name||(c==null?void 0:c.name)||l.id,role:l.role||(c==null?void 0:c.role)||"",detail:l.detail||(c==null?void 0:c.detail)||"",jersey:l.jersey??(c==null?void 0:c.jersey)??"",image:St(l.image)?"":l.image||"",nick:"",bio:"",socials:[],order:typeof l.order=="number"?l.order:a.get(l.id)||999,active:l.active!==!1,_docId:l._docId||l.id}}),Te.forEach(l=>{i.some(c=>c.id===l.id)||i.push({...l})})):i=Te.map(l=>({...l})),i.sort((l,c)=>(l.order||999)-(c.order||999));const s=l=>{var c,f;return typeof(l==null?void 0:l.updatedMs)=="number"?l.updatedMs:typeof((c=l==null?void 0:l.updatedAt)==null?void 0:c.toMillis)=="function"?l.updatedAt.toMillis():typeof((f=l==null?void 0:l.updatedAt)==null?void 0:f.seconds)=="number"?l.updatedAt.seconds*1e3:0};return[...t].sort((l,c)=>{const f=s(l)-s(c);if(f!==0)return f;const d=n&&l._docId===n?1:0,h=n&&c._docId===n?1:0;return d-h}).forEach(l=>{const c=i.find(f=>f.id===l.playerId);c&&("jersey"in l&&l.jersey!==void 0&&l.jersey!==null&&(c.jersey=String(l.jersey)),"nick"in l&&l.nick!==void 0&&l.nick!==null&&(c.nick=String(l.nick),c._nickCustom=!0),"bio"in l&&l.bio!==void 0&&l.bio!==null&&(c.bio=String(l.bio),c._bioCustom=!0),"image"in l&&l.image!==void 0&&l.image!==null&&(c.image=St(l.image)?"":String(l.image)),Array.isArray(l.socials)&&(c.socials=l.socials.slice(0,3)),c._profileUid=l._docId)}),i.forEach(l=>{const c=In[l.id];c&&(!l._nickCustom&&!l.nick&&(l.nick=c.nick),!l._bioCustom&&!l.bio&&(l.bio=c.bio))}),i.filter(l=>l.active!==!1)}let ha=[],fa=[],Xe=[];function Fn(){var t,n;const e=((n=(t=Ne())==null?void 0:t.currentUser)==null?void 0:n.uid)||"";u.players=uo(ha,fa,e)}function po(e){const t=be();if(!t)return()=>{};Xe.forEach(i=>{try{i()}catch{}}),Xe=[];let n=null;const a=()=>{typeof e=="function"&&(clearTimeout(n),n=setTimeout(()=>{u.ready=!0,e()},50))},r=(i,s)=>{try{const o=t.collection(i).onSnapshot(l=>{s(l.docs.map(ne)),a()},()=>{});Xe.push(o)}catch{}};r("TeamPlayers",i=>{ha=i,Fn()}),r("PlayerProfiles",i=>{fa=i,Fn()}),r("Matches",i=>{u.matches=i.sort((s,o)=>(o.createdMs||0)-(s.createdMs||0))}),r("News",i=>{u.news=i.sort((s,o)=>(o.pinned?1:0)-(s.pinned?1:0)||(o.createdMs||0)-(s.createdMs||0))}),r("Honours",i=>{u.honours=i.length?i.sort((s,o)=>(s.order||999)-(o.order||999)):Rt.map(s=>({...s}))}),r("Gallery",i=>{u.gallery=i.sort((s,o)=>(o.createdMs||0)-(s.createdMs||0))}),r("Socials",i=>{u.socials=i.length?i.sort((s,o)=>(s.order||999)-(o.order||999)):Lt.map(s=>({...s}))}),r("PlayerStats",i=>{u.stats=i}),r("Achievements",i=>{u.achievements=i.sort((s,o)=>(o.createdMs||0)-(s.createdMs||0))}),r("Availability",i=>{u.availability=i}),r("PlayingXI",i=>{u.lineups=i.sort((s,o)=>(o.createdMs||0)-(s.createdMs||0))}),r("TeamRecords",i=>{u.records=i.sort((s,o)=>(o.createdMs||0)-(s.createdMs||0))}),r("Tournaments",i=>{u.tournaments=i.sort((s,o)=>(o.createdMs||0)-(s.createdMs||0))}),r("Opponents",i=>{u.opponents=i.sort((s,o)=>(o.createdMs||0)-(s.createdMs||0))}),r("Updates",i=>{u.updates=i.filter(s=>s._docId!=="_news_updates_swap_v1").sort((s,o)=>(o.pinned?1:0)-(s.pinned?1:0)||(o.createdMs||0)-(s.createdMs||0))});try{const i=t.collection("BrandSettings").doc("main").onSnapshot(s=>{s.exists&&(Zr(s.data()||{}),a())},()=>{});Xe.push(i)}catch{}return()=>{clearTimeout(n),Xe.forEach(i=>{try{i()}catch{}}),Xe=[]}}async function oe(){const e=be();if(!e)return u.loadError="Firebase is unavailable. Check your internet connection and retry.",u.ready=!0,!1;u.loadingData=!0,u.loadError="";try{const[t,n,a,r,i,s,o,l,c,f,d,h,m,b,_]=await Promise.all([e.collection("TeamPlayers").get(),e.collection("Matches").get(),e.collection("News").get(),e.collection("Honours").get(),e.collection("Gallery").get(),e.collection("Socials").get(),e.collection("PlayerProfiles").get(),e.collection("PlayerStats").get(),e.collection("Achievements").get(),e.collection("Availability").get(),e.collection("PlayingXI").get(),e.collection("TeamRecords").get(),e.collection("Tournaments").get(),e.collection("Opponents").get(),e.collection("Updates").get()]);ha=t.docs.map(ne),fa=o.docs.map(ne),Fn(),u.matches=n.docs.map(ne).sort((w,g)=>(g.createdMs||0)-(w.createdMs||0)),u.news=a.docs.map(ne).sort((w,g)=>(g.pinned?1:0)-(w.pinned?1:0)||(g.createdMs||0)-(w.createdMs||0)),u.honours=r.empty?Rt.map(w=>({...w})):r.docs.map(ne).sort((w,g)=>(w.order||999)-(g.order||999)),u.gallery=i.docs.map(ne).sort((w,g)=>(g.createdMs||0)-(w.createdMs||0)),u.socials=s.empty?Lt.map(w=>({...w})):s.docs.map(ne).sort((w,g)=>(w.order||999)-(g.order||999)),u.stats=l.docs.map(ne),u.achievements=c.docs.map(ne).sort((w,g)=>(g.createdMs||0)-(w.createdMs||0)),u.availability=f.docs.map(ne),u.lineups=d.docs.map(ne).sort((w,g)=>(g.createdMs||0)-(w.createdMs||0)),u.records=h.docs.map(ne).sort((w,g)=>(g.createdMs||0)-(w.createdMs||0)),u.tournaments=m.docs.map(ne).sort((w,g)=>(g.createdMs||0)-(w.createdMs||0)),u.opponents=b.docs.map(ne).sort((w,g)=>(g.createdMs||0)-(w.createdMs||0)),u.updates=_.docs.filter(w=>w.id!=="_news_updates_swap_v1").map(ne).sort((w,g)=>(g.pinned?1:0)-(w.pinned?1:0)||(g.createdMs||0)-(w.createdMs||0));try{const w=await e.collection("BrandSettings").doc("main").get();w.exists&&Zr(w.data()||{})}catch{u.brandLogo=R.logoPath}return u.ready=!0,!0}catch(t){return console.error("Club data load failed",t),u.loadError="Unable to sync live team data from Firebase. Showing bundled squad roster.",u.ready=!0,!1}finally{u.loadingData=!1}}async function ma(e){var a,r,i,s;const t=Ne(),n=be();if(!e||!n)return u.user=null,u.account=null,u.role="guest",u.playerId=null,{ok:!1,reason:"NOT_SIGNED_IN"};try{const o=await n.collection("Accounts").doc(e.uid).get();if(!o.exists)return await((a=t==null?void 0:t.signOut)==null?void 0:a.call(t)),u.user=null,u.account=null,u.role="guest",u.playerId=null,{ok:!1,reason:"NO_ACCOUNT_RECORD"};const l=o.data()||{};if(l.active!==!0)return await((r=t==null?void 0:t.signOut)==null?void 0:r.call(t)),u.user=null,u.account=null,u.role="guest",u.playerId=null,{ok:!1,reason:"ACCOUNT_INACTIVE"};if(l.role==="admin")return u.user=e,u.account=l,u.role="admin",u.playerId=l.playerId||null,{ok:!0,role:"admin",account:l};const c=typeof l.playerId=="string"?l.playerId.trim():"";return c&&(u.players.some(d=>d.id===c)||Te.some(d=>d.id===c))?(u.user=e,u.account=l,u.role="player",u.playerId=c,{ok:!0,role:"player",playerId:c,account:l}):(await((i=t==null?void 0:t.signOut)==null?void 0:i.call(t)),u.user=null,u.account=null,u.role="guest",u.playerId=null,{ok:!1,reason:"INVALID_ROLE_MAPPING"})}catch(o){return console.error("Account verification failed",o),await((s=t==null?void 0:t.signOut)==null?void 0:s.call(t)),u.user=null,u.account=null,u.role="guest",u.playerId=null,{ok:!1,reason:(o==null?void 0:o.code)||"VERIFICATION_ERROR"}}}async function ya(e,t){const n=Ne();if(!n)throw new Error("FIREBASE_UNAVAILABLE");const a=Vr(e),r=String(t||"");if(!a||!r)throw new Error("EMAIL_PASSWORD_REQUIRED");const i=await n.signInWithEmailAndPassword(a,r),s=await ma(i.user);if(!s.ok){const o=new Error(s.reason||"ACCOUNT_NOT_AUTHORIZED");throw o.code=s.reason,o}return await oe(),s}async function ho(e){const t=String(e||"");if(!t){const s=new Error("PASSWORD_REQUIRED");throw s.code="PASSWORD_REQUIRED",s}const n=await Bn(t);if(!(n?n===so:!1)){const s=new Error("INVALID_ADMIN_PASSWORD");throw s.code="INVALID_ADMIN_PASSWORD",s}u.apkAdminUnlocked=!0,u.role="admin",da(!0);let r=Fe();const i=Ne();if(i&&!r)for(const s of Is)try{const o=await i.signInWithEmailAndPassword(s,t),l=await ma(o.user);if(l.ok&&l.role==="admin"){r=!0;break}}catch{}try{await oe()}catch{}return{ok:!0,role:"admin",cloudSynced:r}}async function fo(e,t){const n=String(e).trim().toUpperCase(),a=Xr[n];if(!a){const c=new Error("INVALID_PLAYER_ID");throw c.code="INVALID_PLAYER_ID",c}const r=String(t||""),i=r.trim();if(!i){const c=new Error("PASSWORD_REQUIRED");throw c.code="PASSWORD_REQUIRED",c}const s=await Bn(r),o=i!==r?await Bn(i):s;if(!(s===a||o===a)){const c=new Error("INVALID_PLAYER_PASSWORD");throw c.code="INVALID_PLAYER_PASSWORD",c}u.apkPlayerId=n,Nt(n),J()||(u.role="player",u.playerId=n);try{await oe()}catch{}return{ok:!0,role:"player",playerId:n,cloudSynced:ua(n)}}async function mo(e,t){const n=await ya(e,t);if(n.role!=="player"||!n.playerId){if(n.role==="admin"){const r=new Error("This is an Admin account. Use Admin Panel login or choose your Player profile.");throw r.code="NOT_PLAYER_ACCOUNT",r}const a=new Error("This Firebase account is not linked to an active Player profile.");throw a.code="NOT_PLAYER_ACCOUNT",a}return u.apkPlayerId=n.playerId,Nt(n.playerId),{ok:!0,role:"player",playerId:n.playerId,cloudSynced:!0}}async function yo(e,t){const n=await ya(e,t);if(n.role!=="admin"){await Jr();const a=new Error("This Firebase account is not an active Admin in Accounts/{uid}.");throw a.code="NOT_ADMIN_ACCOUNT",a}return u.apkAdminUnlocked=!0,u.role="admin",da(!0),n}async function bo(e){const t=Ne();if(!t)throw new Error("FIREBASE_UNAVAILABLE");const n=Vr(e);if(!n)throw new Error("EMAIL_REQUIRED");await t.sendPasswordResetEmail(n)}async function Yr(){if(u.apkPlayerId=null,Nt(null),u.role==="player"||u.account&&u.account.role==="player"){const e=Ne();if(e)try{await e.signOut()}catch{}u.user=null,u.account=null}u.apkAdminUnlocked?(u.role="admin",u.playerId=null):(u.role="guest",u.playerId=null)}async function Jr(){u.apkAdminUnlocked=!1,u.apkPlayerId=null,da(!1),Nt(null);const e=Ne();if(e)try{await e.signOut()}catch{}u.user=null,u.account=null,u.role="guest",u.playerId=null}function go(e){const t=Ne();return t?t.onAuthStateChanged(async n=>{if(!n){if(u.user=null,u.account=null,u.apkAdminUnlocked){u.role="admin",u.playerId=null,u.authChecked=!0,e({role:"admin",verified:!0});return}if(u.apkPlayerId){u.role="player",u.playerId=u.apkPlayerId,u.authChecked=!0,e({role:"player",playerId:u.apkPlayerId,verified:!0});return}u.role="guest",u.playerId=null,u.authChecked=!0,e({role:"guest",verified:!1});return}const a=await ma(n);if(u.authChecked=!0,a.ok&&a.role==="player"&&a.playerId&&(u.apkPlayerId=a.playerId,Nt(a.playerId)),!a.ok&&u.apkAdminUnlocked){u.role="admin",e({role:"admin",verified:!0});return}if(!a.ok&&u.apkPlayerId){u.role="player",u.playerId=u.apkPlayerId,e({role:"player",playerId:u.apkPlayerId,verified:!0});return}e({role:a.ok?a.role:"guest",playerId:a.ok?a.playerId:null,verified:a.ok,reason:a.ok?"":a.reason})}):(u.authChecked=!0,u.apkAdminUnlocked?(u.role="admin",e({role:"admin",verified:!0})):u.apkPlayerId?(u.role="player",u.playerId=u.apkPlayerId,e({role:"player",playerId:u.apkPlayerId,verified:!0})):e({role:"guest",verified:!1}),()=>{})}function ba(e){return e?J()||De()===e?!0:!!(u.user&&u.account&&u.account.active===!0&&u.role==="player"&&u.playerId===e):!1}async function mt(e,t){const n=be();if(!n)throw new Error("FIREBASE_UNAVAILABLE");if(!ba(e))throw new Error("NOT_ALLOWED");const a=u.players.find(o=>o.id===e)||Te.find(o=>o.id===e);if(!a)throw new Error("PLAYER_NOT_FOUND");const r=a._profileUid||`profile_${e}`,i=Array.isArray(t.socials)?t.socials.slice(0,3).map(o=>({name:String((o==null?void 0:o.name)||"").trim()||"Social",url:String((o==null?void 0:o.url)||"").trim()})):(a.socials||[]).slice(0,3),s={playerId:e,jersey:String(t.jersey??a.jersey??"").trim(),nick:String(t.nick??a.nick??"").trim(),bio:String(t.bio??a.bio??"").trim(),socials:i,updatedMs:Date.now(),updatedAt:fe()};"image"in t&&(s.image=String(t.image||""));try{if(await n.collection("PlayerProfiles").doc(r).set(Re(s),{merge:!0}),"jersey"in t||"image"in t){const o=Re({id:e,jersey:s.jersey,updatedMs:s.updatedMs,updatedAt:fe()});"image"in t&&(o.image=s.image);try{await n.collection("TeamPlayers").doc(e).set(o,{merge:!0})}catch{}}await oe()}catch(o){throw Ie(o)}}async function Qr(e,t){const n=be();if(!n)throw new Error("FIREBASE_UNAVAILABLE");const a=String(t||"").toUpperCase();if(!["AVAILABLE","UNAVAILABLE"].includes(a))throw new Error("INVALID_STATUS");if(!ba(e))throw new Error("NOT_ALLOWED");try{await n.collection("Availability").doc(e).set({playerId:e,status:a,updatedAt:fe()},{merge:!0}),await oe()}catch(r){throw Ie(r)}}async function Q(e,t,n){const a=be();if(!a||!J())throw new Error("ADMIN_REQUIRED");const r=Re({...n,updatedAt:fe()}),i=t&&!String(t).startsWith("loc_")?String(t):"";try{if((e==="Honours"||e==="Socials")&&(await a.collection(e).limit(1).get()).empty){const o=e==="Honours"?Rt:Lt,l=a.batch();o.forEach(c=>{if(c._docId&&c._docId!==i){const{_docId:f,...d}=c;l.set(a.collection(e).doc(f),Re({...d,updatedAt:fe()}),{merge:!0})}}),await l.commit()}i?await a.collection(e).doc(i).set(r,{merge:!0}):await a.collection(e).add({...r,createdMs:r.createdMs||Date.now()}),await oe()}catch(s){throw Ie(s)}}async function vo(e,t){const n=be();if(!n||!J())throw new Error("ADMIN_REQUIRED");const a=Re({id:e,name:String(t.name||"").trim(),role:String(t.role||"").trim(),detail:String(t.detail||"").trim(),jersey:String(t.jersey||"").trim(),active:!0,updatedAt:fe()});"image"in t&&t.image!==void 0&&t.image!==null&&(a.image=String(t.image));const r=u.players.find(o=>o.id===e),i=(r==null?void 0:r._profileUid)||`profile_${e}`,s=Re({playerId:e,jersey:a.jersey,nick:String(t.nick??(r==null?void 0:r.nick)??"").trim(),bio:String(t.bio??(r==null?void 0:r.bio)??"").trim(),updatedMs:Date.now(),updatedAt:fe()});"image"in t&&t.image!==void 0&&t.image!==null&&(s.image=String(t.image));try{await n.collection("TeamPlayers").doc(e).set(a,{merge:!0}),await n.collection("PlayerProfiles").doc(i).set(s,{merge:!0}),await oe()}catch(o){throw Ie(o)}}async function wo(e){const t=be();if(!t||!J())throw new Error("ADMIN_REQUIRED");const n=Number(e.appVersionCode),a=Re({appVersion:String(e.appVersion||R.appVersion).trim(),appVersionCode:Number.isFinite(n)&&n>0?n:u.appVersionCode||le.versionCode,updateNotes:String(e.updateNotes??"").trim(),forceUpdate:!!e.forceUpdate,apkDownloadUrl:String(e.apkDownloadUrl||R.apkDownloadUrl).trim(),apkReleasesUrl:String(e.apkReleasesUrl||R.apkReleasesUrl).trim(),updatedMs:Date.now(),updatedAt:fe()});e.logo&&(a.logo=String(e.logo));try{await t.collection("BrandSettings").doc("main").set(a,{merge:!0}),await oe()}catch(r){throw Ie(r)}}function Zr(e){e&&(e.logo&&!St(e.logo)&&(u.brandLogo=e.logo),e.apkDownloadUrl&&/^https?:\/\//i.test(String(e.apkDownloadUrl).trim())&&(u.apkDownloadUrl=String(e.apkDownloadUrl).trim()),e.apkReleasesUrl&&/^https?:\/\//i.test(String(e.apkReleasesUrl).trim())&&(u.apkReleasesUrl=String(e.apkReleasesUrl).trim()),e.appVersion&&(u.appVersion=String(e.appVersion).trim()),Number.isFinite(Number(e.appVersionCode))&&(u.appVersionCode=Number(e.appVersionCode)),"updateNotes"in e&&(u.updateNotes=String(e.updateNotes||"")),"forceUpdate"in e&&(u.forceUpdate=!!e.forceUpdate))}async function _o(){const e=await Zs();return e&&(e.versionName||e.versionCode)&&(u.nativeVersionName=String(e.versionName||le.versionName).trim(),u.nativeVersionCode=Number(e.versionCode)||le.versionCode,u.otaBuild=Number(e.otaBuild)||0,u.otaVersion=String(e.otaVersion||""),u.canInstallPackages=!!e.canInstallPackages),e}function hn(){const e=u.nativeVersionName||le.versionName,t=Number(u.nativeVersionCode)||le.versionCode,n=[];(u.appVersion||u.appVersionCode)&&n.push({versionName:u.appVersion||e,versionCode:Number(u.appVersionCode)||t,apkDownloadUrl:u.apkDownloadUrl||R.apkDownloadUrl,apkReleasesUrl:u.apkReleasesUrl||R.apkReleasesUrl,notes:u.updateNotes||"",forceUpdate:!!u.forceUpdate}),u.remoteVersionInfo&&n.push(u.remoteVersionInfo);let a={versionName:e,versionCode:t,apkDownloadUrl:u.apkDownloadUrl||R.apkDownloadUrl,apkReleasesUrl:u.apkReleasesUrl||R.apkReleasesUrl,notes:"",forceUpdate:!1};return n.forEach(i=>{const s=String(i.versionName||"0.0.0").trim(),o=Number(i.versionCode)||0,l=An(a.versionName,s)<0,c=An(a.versionName,s)===0&&o>a.versionCode;(l||c||o>a.versionCode)&&(a={versionName:s||a.versionName,versionCode:Math.max(o,a.versionCode),apkDownloadUrl:/^https?:\/\//i.test(String(i.apkDownloadUrl||""))?String(i.apkDownloadUrl).trim():a.apkDownloadUrl,apkReleasesUrl:/^https?:\/\//i.test(String(i.apkReleasesUrl||""))?String(i.apkReleasesUrl).trim():a.apkReleasesUrl,notes:i.notes||a.notes,forceUpdate:!!(i.forceUpdate||a.forceUpdate)})}),{hasUpdate:An(e,a.versionName)<0||Number(a.versionCode)>Number(t),currentVersion:e,currentCode:t,otaBuild:Number(u.otaBuild)||0,otaVersion:u.otaVersion||"",canInstallPackages:!!u.canInstallPackages,latestVersion:a.versionName,latestCode:a.versionCode,apkUrl:a.apkDownloadUrl,releasesUrl:a.apkReleasesUrl,notes:a.notes||"A newer version of RDM Official Android APK is ready with automatic in-app update support.",forceUpdate:a.forceUpdate}}async function So(){await _o().catch(()=>null);const e=typeof AbortController<"u"?new AbortController:null,t=e?setTimeout(()=>e.abort(),5e3):null,n=[];typeof window<"u"&&/^https?:$/i.test(window.location.protocol)&&n.push(`./version.json?t=${Date.now()}`),n.push(`${Ls}?t=${Date.now()}`);for(const a of n)try{const r=await fetch(a,{cache:"no-store",signal:e==null?void 0:e.signal});if(!r.ok)continue;const i=await r.json();if(i&&(i.versionName||i.versionCode)){u.remoteVersionInfo={versionName:String(i.versionName||le.versionName).trim(),versionCode:Number(i.versionCode)||le.versionCode,apkDownloadUrl:String(i.apkDownloadUrl||R.apkDownloadUrl).trim(),apkReleasesUrl:String(i.apkReleasesUrl||R.apkReleasesUrl).trim(),notes:String(i.notes||""),forceUpdate:!!i.forceUpdate};break}}catch{}return t&&clearTimeout(t),hn()}async function Hn(){const e=await no(Ns).catch(()=>({updated:!1})),t=await So();return{otaResult:e,apkUpdate:t}}async function Po(e,t){const n=be();if(!n||!J()||!t)throw new Error("ADMIN_REQUIRED");if(!String(t).startsWith("loc_"))try{if((e==="Honours"||e==="Socials")&&(await n.collection(e).limit(1).get()).empty){const r=e==="Honours"?Rt:Lt,i=n.batch();r.forEach(s=>{if(s._docId&&s._docId!==String(t)){const{_docId:o,...l}=s;i.set(n.collection(e).doc(o),Re({...l,updatedAt:fe()}),{merge:!0})}}),await i.commit(),await oe();return}await n.collection(e).doc(String(t)).delete(),await oe()}catch(a){throw Ie(a)}}async function Ao(e){const t=be();if(!t||!J()||!e)throw new Error("ADMIN_REQUIRED");const n=Te.some(a=>a.id===e);try{n?await t.collection("TeamPlayers").doc(e).set({id:e,active:!1,updatedAt:fe()},{merge:!0}):await t.collection("TeamPlayers").doc(e).delete(),await oe()}catch(a){throw Ie(a)}}async function ko(e,t,n){const a=be();if(!a||!J()||!t)throw new Error("ADMIN_REQUIRED");if(!String(t).startsWith("loc_"))try{if(n){const r=await a.collection(e).where("pinned","==",!0).get();if(!r.empty){const i=a.batch();r.docs.forEach(s=>{s.id!==t&&i.set(s.ref,{pinned:!1,updatedAt:fe()},{merge:!0})}),await i.commit()}}await a.collection(e).doc(t).set({pinned:!!n,updatedAt:fe()},{merge:!0}),await oe()}catch(r){throw Ie(r)}}function He(e,t=960,n=.74){return new Promise((a,r)=>{if(!e)return a("");const i=new FileReader;i.onerror=()=>r(new Error("READ_FAILED")),i.onload=()=>{const s=new Image;s.onerror=()=>r(new Error("IMAGE_INVALID")),s.onload=()=>{const o=Math.min(1,t/Math.max(s.width,s.height)),l=document.createElement("canvas");l.width=Math.max(1,Math.round(s.width*o)),l.height=Math.max(1,Math.round(s.height*o)),l.getContext("2d").drawImage(s,0,0,l.width,l.height);let c=l.toDataURL("image/jpeg",n);if(c.length>72e4&&(c=l.toDataURL("image/jpeg",.56)),c.length>9e5)return r(new Error("IMAGE_TOO_LARGE"));a(c)},s.src=i.result},i.readAsDataURL(e)})}let wt=[];function M(e){const t=document.getElementById("rdmToast");t&&(t.textContent=String(e||""),t.classList.add("show"),clearTimeout(t._timer),t._timer=setTimeout(()=>t.classList.remove("show"),2200))}function qn(){return wt.length>0}function ei(){const e=wt.pop();return e&&e.isConnected?(e.remove(),!0):!1}function Ke(e){return wt.push(e),()=>{wt=wt.filter(t=>t!==e),e.isConnected&&e.remove()}}function ti(e){return(e==null?void 0:e.code)==="permission-denied"||/Missing (?:or insufficient|cloud) permissions/i.test(String((e==null?void 0:e.message)||""))}function it({title:e,message:t,confirmLabel:n="Confirm",danger:a=!1,onConfirm:r,onPermissionDenied:i}){const s=document.createElement("div");s.className="sheetOverlay show",s.innerHTML=`
    <div class="sheetCard confirmCard" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <h3>${p(e)}</h3>
      </div>
      <p class="confirmMessage">${p(t)}</p>
      <div class="sheetActions">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="button" class="${a?"btnDanger":"btnPrimary"}" data-ok>${p(n)}</button>
      </div>
    </div>
  `,document.body.appendChild(s);const o=Ke(s);s.querySelector("[data-cancel]").onclick=o,s.addEventListener("click",l=>{l.target===s&&o()}),s.querySelector("[data-ok]").onclick=async l=>{const c=l.currentTarget;c.disabled=!0;try{await r(),o()}catch(f){if(ti(f)&&typeof i=="function"){o(),i(f);return}c.disabled=!1,M((f==null?void 0:f.message)||"Action failed")}}}function st({title:e,subtitle:t="",fields:n,submitLabel:a="Save",onSubmit:r,onPermissionDenied:i}){const s=document.createElement("div");s.className="sheetOverlay show";const o=n.map(c=>{const f=c.required?"required":"",d=p(c.value??"");if(c.type==="textarea")return`
        <label class="fieldBlock">
          <span>${p(c.label)}</span>
          <textarea name="${p(c.name)}" rows="${c.rows||4}" placeholder="${p(c.placeholder||"")}" ${f}>${d}</textarea>
        </label>
      `;if(c.type==="select"){const h=(c.options||[]).map(m=>{const b=typeof m=="object"?m.value:m,_=typeof m=="object"?m.label:m,w=String(b)===String(c.value??"")?"selected":"";return`<option value="${p(b)}" ${w}>${p(_)}</option>`}).join("");return`
        <label class="fieldBlock">
          <span>${p(c.label)}</span>
          <select name="${p(c.name)}">${h}</select>
        </label>
      `}return c.type==="checkbox"?`
        <label class="checkboxRow">
          <input type="checkbox" name="${p(c.name)}" ${c.checked?"checked":""}>
          <span>${p(c.label)}</span>
        </label>
      `:c.type==="file"?`
        <label class="fieldBlock">
          <span>${p(c.label)}</span>
          <input type="file" name="${p(c.name)}" accept="image/*" ${f}>
        </label>
      `:`
      <label class="fieldBlock">
        <span>${p(c.label)}</span>
        <input type="${p(c.type||"text")}" name="${p(c.name)}" value="${d}" placeholder="${p(c.placeholder||"")}" ${f}>
      </label>
    `}).join("");s.innerHTML=`
    <form class="sheetCard formSheet" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>${p(e)}</h3>
          ${t?`<p class="sheetSub">${p(t)}</p>`:""}
        </div>
      </div>
      <div class="formStack">${o}</div>
      <div class="sheetFooterSticky">
        <button type="button" class="btnSecondary" data-cancel>Cancel</button>
        <button type="submit" class="btnPrimary">${p(a)}</button>
      </div>
    </form>
  `,document.body.appendChild(s);const l=Ke(s);s.querySelector("[data-cancel]").onclick=l,s.addEventListener("click",c=>{c.target===s&&l()}),s.querySelector("form").onsubmit=async c=>{c.preventDefault();const f=c.currentTarget,d=f.querySelector('[type="submit"]');d.disabled=!0;try{const h={};n.forEach(m=>{var _;const b=f.elements[m.name];b&&(m.type==="checkbox"?h[m.name]=b.checked:m.type==="file"?h[m.name]=((_=b.files)==null?void 0:_[0])||null:m.type==="textarea"?h[m.name]=String(b.value??"").replace(/\r\n?/g,`
`).replace(/^\n+|\s+$/g,""):h[m.name]=String(b.value??"").trim())}),await r(h),l()}catch(h){if(ti(h)&&typeof i=="function"){l(),i(h);return}d.disabled=!1,M((h==null?void 0:h.message)||"Save failed")}}}function dr({currentTheme:e,onSelectTheme:t}){const n=document.createElement("div");n.className="sheetOverlay show";const a=[{id:"royal",name:"Royal Cobalt",desc:"Crisp Daylight Frost & Midnight Cobalt",swatches:["#F5F7FB","#FFFFFF","#1D4ED8"]},{id:"floodlight",name:"Floodlight Navy",desc:"Deep Stadium Navy & Championship Gold",swatches:["#070C18","#0F172A","#2563EB"]},{id:"emerald",name:"Pavilion Emerald",desc:"Classic Turf Mint & Pavilion Emerald",swatches:["#F6F9F7","#FFFFFF","#0F5132"]},{id:"crimson",name:"Test Crimson",desc:"Editorial Chalk & Cricket Leather Crimson",swatches:["#FAF7F6","#FFFFFF","#9F1239"]}];n.innerHTML=`
    <div class="sheetCard" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>App Appearance</h3>
          <p class="sheetSub">Tap a palette to apply immediately</p>
        </div>
      </div>
      <div class="themeChoiceList">
        ${a.map(i=>`
          <button type="button" class="themeChoiceRow ${e===i.id?"active":""}" data-pick-theme="${i.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${i.swatches.map(s=>`<span style="background:${s}"></span>`).join("")}
            </div>
            <div class="themeChoiceCopy">
              <strong>${p(i.name)}</strong>
              <span>${p(i.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${e===i.id?"Active":"Apply"}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `,document.body.appendChild(n);const r=Ke(n);n.addEventListener("click",i=>{i.target===n&&r()}),n.querySelectorAll("[data-pick-theme]").forEach(i=>{i.addEventListener("click",()=>{t(i.dataset.pickTheme),r()})})}function Vn(e,t=""){const n=document.createElement("div");n.className="lightboxOverlay show",n.innerHTML=`
    <div class="lightboxTopBar">
      <div class="lightboxLeft">
        <button type="button" class="iconCloseBtn darkSurface" aria-label="Back">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <span class="lightboxCaption">${p(t||"Team Gallery")}</span>
      </div>
    </div>
    <div class="lightboxCanvas">
      <img src="${p(e)}" alt="${p(t||"Gallery image")}" referrerPolicy="no-referrer">
    </div>
  `,document.body.appendChild(n);const a=Ke(n);n.querySelector(".iconCloseBtn").onclick=a,n.addEventListener("click",r=>{(r.target===n||r.target.classList.contains("lightboxCanvas"))&&a()})}function $o({onSaveDataUrl:e}){const t=document.createElement("input");t.type="file",t.accept="image/*",t.onchange=()=>{var r;const n=(r=t.files)==null?void 0:r[0];if(!n)return;const a=new FileReader;a.onload=()=>{const i=new Image;i.onload=()=>{const s=document.createElement("div");s.className="sheetOverlay show",s.innerHTML=`
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
        `,document.body.appendChild(s);const o=Ke(s),l=s.querySelector("#rdmCropCanvas"),c=s.querySelector("#rdmCropZoom"),f=l.getContext("2d"),d={scale:1,x:0,y:0,drag:!1,lx:0,ly:0},h=()=>{f.clearRect(0,0,300,300);const b=Math.max(300/i.width,300/i.height)*d.scale,_=i.width*b,w=i.height*b,g=(300-_)/2+d.x,k=(300-w)/2+d.y;f.save(),f.beginPath(),f.arc(150,150,146,0,Math.PI*2),f.clip(),f.drawImage(i,g,k,_,w),f.restore()};h(),c.oninput=m=>{d.scale=Number(m.target.value)||1,h()},l.onpointerdown=m=>{d.drag=!0,d.lx=m.clientX,d.ly=m.clientY,l.setPointerCapture(m.pointerId)},l.onpointermove=m=>{d.drag&&(d.x+=m.clientX-d.lx,d.y+=m.clientY-d.ly,d.lx=m.clientX,d.ly=m.clientY,h())},l.onpointerup=()=>{d.drag=!1},s.querySelector("[data-cancel]").onclick=o,s.addEventListener("click",m=>{m.target===s&&o()}),s.querySelector("[data-save]").onclick=async m=>{const b=m.currentTarget;b.disabled=!0;try{const _=document.createElement("canvas");_.width=320,_.height=320,_.getContext("2d").drawImage(l,0,0,320,320);const w=_.toDataURL("image/jpeg",.72);await e(w),o()}catch(_){b.disabled=!1,M((_==null?void 0:_.message)||"Photo save failed")}}},i.src=a.result},a.readAsDataURL(n)},t.click()}async function ni({player:e,brandLogo:t}){var _,w;const r=document.createElement("canvas");r.width=1080,r.height=1350;const i=r.getContext("2d"),s=g=>new Promise((k,P)=>{const $=new Image;$.crossOrigin="anonymous",$.onload=()=>k($),$.onerror=P,$.src=g}),o=(g,k,P,$,N,L,O)=>{i.beginPath(),i.moveTo(g+N,k),i.arcTo(g+P,k,g+P,k+$,N),i.arcTo(g+P,k+$,g,k+$,N),i.arcTo(g,k+$,g,k,N),i.arcTo(g,k,g+P,k,N),i.closePath(),L&&(i.fillStyle=L,i.fill()),O&&(i.strokeStyle=O,i.lineWidth=2,i.stroke())},l=i.createLinearGradient(0,0,1080,1350);l.addColorStop(0,"#F5F7FB"),l.addColorStop(1,"#E8EEF8"),i.fillStyle=l,i.fillRect(0,0,1080,1350),o(40,40,1e3,1270,28,"#FFFFFF","#DCE4F0"),o(80,80,920,8,4,"#1D4ED8",null);let c=null;try{c=await s(t||R.logoPath)}catch{}c&&i.drawImage(c,84,120,74,74),i.textAlign="left",i.fillStyle="#0B1324",i.font='700 34px "Outfit", "Plus Jakarta Sans", sans-serif',i.fillText("REHAN DOMINATORS MAHUAWAN",176,156),i.fillStyle="#576780",i.font='600 18px "Plus Jakarta Sans", sans-serif',i.fillText("MAHUAWAN · GOPALGANJ · BIHAR",176,186);let f=null;try{f=await s(sa(e.image,t))}catch{f=c}if(f){i.save(),i.beginPath(),i.arc(1080/2,370,140,0,Math.PI*2),i.clip();const g=Math.max(280/f.width,280/f.height);i.drawImage(f,1080/2-f.width*g/2,370-f.height*g/2,f.width*g,f.height*g),i.restore(),i.strokeStyle="#1D4ED8",i.lineWidth=8,i.beginPath(),i.arc(1080/2,370,146,0,Math.PI*2),i.stroke()}i.textAlign="center",i.fillStyle="#0B1324",i.font='700 58px "Outfit", "Plus Jakarta Sans", sans-serif',i.fillText(v(e.name),1080/2,580),o(120,620,840,124,18,"#F5F7FB","#DCE4F0"),i.fillStyle="#1D4ED8",i.font='700 16px "Plus Jakarta Sans", sans-serif',i.fillText("PLAYER CODE",330,662),i.fillText("JERSEY NUMBER",750,662),i.fillStyle="#0B1324",i.font='700 30px "JetBrains Mono", monospace',i.fillText(he[e.id]||e.id,330,708),i.fillText(e.jersey?`#${e.jersey}`:"—",750,708),o(120,774,840,140,18,"#EAEFF7","#DCE4F0"),i.fillStyle="#1D4ED8",i.font='700 24px "Plus Jakarta Sans", sans-serif',i.fillText(v(e.role||""),1080/2,828),i.fillStyle="#27344D",i.font='600 20px "Plus Jakarta Sans", sans-serif',i.fillText(v(e.detail||"").slice(0,66),1080/2,872),i.fillStyle="#B45309",i.font='700 18px "Plus Jakarta Sans", sans-serif',i.fillText("ONE TEAM · ONE DREAM · ONE DOMINATION",1080/2,1234),i.fillStyle="#576780",i.font='600 15px "JetBrains Mono", monospace',i.fillText("RDM OFFICIAL · PLAYER IDENTITY CARD",1080/2,1266);const d=`${e.id}-${String(e.name||"PLAYER").replace(/\s+/g,"-")}-RDM-CARD.png`,h=await new Promise(g=>r.toBlob(g,"image/png"));if(h&&typeof navigator<"u"&&typeof navigator.share=="function"&&typeof File=="function")try{const g=new File([h],d,{type:"image/png"});if(typeof navigator.canShare=="function"?navigator.canShare({files:[g]}):!0){await navigator.share({files:[g],title:`${v(e.name)} · RDM Player Card`,text:`${v(e.name)} (${he[e.id]||e.id}) — Rehan Dominators Mahuawan`}),M("Player card ready to save or share");return}}catch(g){if(g&&g.name==="AbortError")return}const m=r.toDataURL("image/png");if(!!!((w=(_=window.Capacitor)==null?void 0:_.isNativePlatform)!=null&&w.call(_))){const g=document.createElement("a");g.href=m,g.download=d,document.body.appendChild(g),g.click(),g.remove(),M("Player card downloaded");return}Vn(m,`${v(e.name)} · RDM Player Card`),M("Player card generated")}function xo({currentVersion:e,latestVersion:t,notes:n,forceUpdate:a=!1,isNative:r=!1,needsInstallPermission:i=!1,onDownload:s,onOpenPermissionSettings:o,onSubscribeProgress:l}){if(document.getElementById("rdmUpdateSheetOverlay"))return;const c=document.createElement("div");c.id="rdmUpdateSheetOverlay",c.className="sheetOverlay show";let f=!!(r&&i);const d=r?f?"Allow App Updates Setting":`Update App In-Place (v${p(t)})`:`Download APK v${p(t)}`;c.innerHTML=`
    <div class="sheetCard confirmCard" role="dialog" aria-modal="true" aria-label="App Update Available">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <span class="sectionKicker">New Version Available</span>
          <h3>${r?"Update RDM Official":"Update RDM Official APK"}</h3>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:10px;">
        <span class="metaCode">Installed: v${p(e)}</span>
        <span class="metaCode" style="color:var(--brand-text);">Latest: v${p(t)}</span>
      </div>
      <p class="confirmMessage richText" style="margin-bottom:12px;">${p(n||"A newer version of RDM Official Android App is ready to install right inside the app without uninstalling.")}</p>
      <div class="updatePermBox" id="rdmUpdatePermBox" style="${f?"":"display:none;"}">
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
      <div class="sheetActions"${a?' style="grid-template-columns:1fr;"':""}>
        ${a?"":'<button type="button" class="btnSecondary" data-later>Later</button>'}
        <button type="button" class="btnPrimary" data-download>${d}</button>
      </div>
    </div>
  `,document.body.appendChild(c);const h=Ke(c),m=c.querySelector("#rdmUpdatePermBox"),b=c.querySelector("#rdmUpdateProgressWrap"),_=c.querySelector("#rdmUpdateStatusText"),w=c.querySelector("#rdmUpdatePercentText"),g=c.querySelector("#rdmUpdateProgressFill"),k=c.querySelector("#rdmUpdateErrorBox"),P=c.querySelector("[data-download]"),$=c.querySelector("[data-later]");let N=()=>{};const L=()=>{N(),h()};typeof l=="function"&&(N=l(({percent:O=0,downloadedBytes:x=0,totalBytes:F=0})=>{b.style.display="block",k.style.display="none";const B=Math.max(0,Math.min(100,Number(O)||0));g.style.width=`${B}%`,w.textContent=`${B}%`;const H=(x/(1024*1024)).toFixed(1);if(F>0){const E=(F/1048576).toFixed(1);_.textContent=B>=100?"Verifying & opening Android updater...":`Downloading ${H} / ${E} MB...`}else _.textContent=`Downloading ${H} MB...`})),$&&($.onclick=()=>{try{sessionStorage.setItem(`rdm-dismiss-update-${t}`,"1")}catch{}L()}),a||c.addEventListener("click",O=>{if(O.target===c){try{sessionStorage.setItem(`rdm-dismiss-update-${t}`,"1")}catch{}L()}}),P.onclick=async()=>{if(k.style.display="none",r&&f){f=!1,m.style.display="none",P.textContent=`Update App In-Place (v${t})`,typeof o=="function"&&await o();return}if(!r){typeof s=="function"&&s(),a||L();return}P.disabled=!0,P.textContent="Downloading Update...",b.style.display="block",_.textContent="Starting secure download...";try{const O=await(s==null?void 0:s());if(O&&O.needsPermission){f=!0,m.style.display="flex",b.style.display="none",P.disabled=!1,P.textContent="Allow App Updates Setting";return}_.textContent="Installer ready. Confirm Update on Android prompt.",w.textContent="100%",g.style.width="100%",P.disabled=!1,P.textContent=`Install Update v${t}`,a||setTimeout(()=>L(),900)}catch(O){P.disabled=!1,P.textContent=`Retry Update (v${t})`,k.textContent=(O==null?void 0:O.message)||"Unable to download update. Please check your connection and try again.",k.style.display="block"}}}function Mo({title:e,subtitle:t="",bodyHtml:n="",wide:a=!1,onReady:r}){const i=document.createElement("div");i.className="sheetOverlay show",i.innerHTML=`
    <div class="sheetCard${a?" is-wide":""}" role="dialog" aria-modal="true">
      <div class="sheetHandle"></div>
      <div class="sheetHeader">
        <div>
          <h3>${p(e)}</h3>
          ${t?`<p class="sheetSub">${p(t)}</p>`:""}
        </div>
        <button type="button" class="iconCloseBtn" data-close-sheet aria-label="Close">×</button>
      </div>
      <div class="customSheetBody">${n}</div>
    </div>
  `,document.body.appendChild(i);const s=Ke(i);return i.querySelector("[data-close-sheet]").onclick=s,i.addEventListener("click",o=>{o.target===i&&s()}),typeof r=="function"&&r(i,s),s}function _t(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function ai(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function ga(e){let t,n,a;e.length!==2?(t=_t,n=(o,l)=>_t(e(o),l),a=(o,l)=>e(o)-l):(t=e===_t||e===ai?e:Eo,n=e,a=e);function r(o,l,c=0,f=o.length){if(c<f){if(t(l,l)!==0)return f;do{const d=c+f>>>1;n(o[d],l)<0?c=d+1:f=d}while(c<f)}return c}function i(o,l,c=0,f=o.length){if(c<f){if(t(l,l)!==0)return f;do{const d=c+f>>>1;n(o[d],l)<=0?c=d+1:f=d}while(c<f)}return c}function s(o,l,c=0,f=o.length){const d=r(o,l,c,f-1);return d>c&&a(o[d-1],l)>-a(o[d],l)?d-1:d}return{left:r,center:s,right:i}}function Eo(){return 0}function Co(e){return e===null?NaN:+e}const To=ga(_t),Wn=To.right;ga(Co).center;class jn extends Map{constructor(t,n=No){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),t!=null)for(const[a,r]of t)this.set(a,r)}get(t){return super.get(ur(this,t))}has(t){return super.has(ur(this,t))}set(t,n){return super.set(Ro(this,t),n)}delete(t){return super.delete(Lo(this,t))}}function ur({_intern:e,_key:t},n){const a=t(n);return e.has(a)?e.get(a):n}function Ro({_intern:e,_key:t},n){const a=t(n);return e.has(a)?e.get(a):(e.set(a,n),n)}function Lo({_intern:e,_key:t},n){const a=t(n);return e.has(a)&&(n=e.get(a),e.delete(a)),n}function No(e){return e!==null&&typeof e=="object"?e.valueOf():e}const Io=Math.sqrt(50),Do=Math.sqrt(10),Oo=Math.sqrt(2);function Kt(e,t,n){const a=(t-e)/Math.max(0,n),r=Math.floor(Math.log10(a)),i=a/Math.pow(10,r),s=i>=Io?10:i>=Do?5:i>=Oo?2:1;let o,l,c;return r<0?(c=Math.pow(10,-r)/s,o=Math.round(e*c),l=Math.round(t*c),o/c<e&&++o,l/c>t&&--l,c=-c):(c=Math.pow(10,r)*s,o=Math.round(e/c),l=Math.round(t/c),o*c<e&&++o,l*c>t&&--l),l<o&&.5<=n&&n<2?Kt(e,t,n*2):[o,l,c]}function ri(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const a=t<e,[r,i,s]=a?Kt(t,e,n):Kt(e,t,n);if(!(i>=r))return[];const o=i-r+1,l=new Array(o);if(a)if(s<0)for(let c=0;c<o;++c)l[c]=(i-c)/-s;else for(let c=0;c<o;++c)l[c]=(i-c)*s;else if(s<0)for(let c=0;c<o;++c)l[c]=(r+c)/-s;else for(let c=0;c<o;++c)l[c]=(r+c)*s;return l}function Xt(e,t,n){return t=+t,e=+e,n=+n,Kt(e,t,n)[2]}function ii(e,t,n){t=+t,e=+e,n=+n;const a=t<e,r=a?Xt(t,e,n):Xt(e,t,n);return(a?-1:1)*(r<0?1/-r:r)}function si(e,t,n){e=+e,t=+t,n=(r=arguments.length)<2?(t=e,e=0,1):r<3?1:+n;for(var a=-1,r=Math.max(0,Math.ceil((t-e)/n))|0,i=new Array(r);++a<r;)i[a]=e+a*n;return i}function Uo(e){return e}var Bo=4,pr=1e-6;function Fo(e){return"translate(0,"+e+")"}function Ho(e){return t=>+e(t)}function qo(e,t){return t=Math.max(0,e.bandwidth()-t*2)/2,e.round()&&(t=Math.round(t)),n=>+e(n)+t}function Vo(){return!this.__axis}function Wo(e,t){var n=[],a=null,r=null,i=6,s=6,o=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=-1,f="x",d=Fo;function h(m){var b=a??(t.ticks?t.ticks.apply(t,n):t.domain()),_=r??(t.tickFormat?t.tickFormat.apply(t,n):Uo),w=Math.max(i,0)+o,g=t.range(),k=+g[0]+l,P=+g[g.length-1]+l,$=(t.bandwidth?qo:Ho)(t.copy(),l),N=m.selection?m.selection():m,L=N.selectAll(".domain").data([null]),O=N.selectAll(".tick").data(b,t).order(),x=O.exit(),F=O.enter().append("g").attr("class","tick"),B=O.select("line"),H=O.select("text");L=L.merge(L.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),O=O.merge(F),B=B.merge(F.append("line").attr("stroke","currentColor").attr(f+"2",c*i)),H=H.merge(F.append("text").attr("fill","currentColor").attr(f,c*w).attr("dy","0.32em")),m!==N&&(L=L.transition(m),O=O.transition(m),B=B.transition(m),H=H.transition(m),x=x.transition(m).attr("opacity",pr).attr("transform",function(E){return isFinite(E=$(E))?d(E+l):this.getAttribute("transform")}),F.attr("opacity",pr).attr("transform",function(E){var U=this.parentNode.__axis;return d((U&&isFinite(U=U(E))?U:$(E))+l)})),x.remove(),L.attr("d",s?"M"+c*s+","+k+"H"+l+"V"+P+"H"+c*s:"M"+l+","+k+"V"+P),O.attr("opacity",1).attr("transform",function(E){return d($(E)+l)}),B.attr(f+"2",c*i),H.attr(f,c*w).text(_),N.filter(Vo).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor","end"),N.each(function(){this.__axis=$})}return h.scale=function(m){return arguments.length?(t=m,h):t},h.ticks=function(){return n=Array.from(arguments),h},h.tickArguments=function(m){return arguments.length?(n=m==null?[]:Array.from(m),h):n.slice()},h.tickValues=function(m){return arguments.length?(a=m==null?null:Array.from(m),h):a&&a.slice()},h.tickFormat=function(m){return arguments.length?(r=m,h):r},h.tickSize=function(m){return arguments.length?(i=s=+m,h):i},h.tickSizeInner=function(m){return arguments.length?(i=+m,h):i},h.tickSizeOuter=function(m){return arguments.length?(s=+m,h):s},h.tickPadding=function(m){return arguments.length?(o=+m,h):o},h.offset=function(m){return arguments.length?(l=+m,h):l},h}function oi(e){return Wo(Bo,e)}var jo={value:()=>{}};function va(){for(var e=0,t=arguments.length,n={},a;e<t;++e){if(!(a=arguments[e]+"")||a in n||/[\s.]/.test(a))throw new Error("illegal type: "+a);n[a]=[]}return new Ht(n)}function Ht(e){this._=e}function Go(e,t){return e.trim().split(/^|\s+/).map(function(n){var a="",r=n.indexOf(".");if(r>=0&&(a=n.slice(r+1),n=n.slice(0,r)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:a}})}Ht.prototype=va.prototype={constructor:Ht,on:function(e,t){var n=this._,a=Go(e+"",n),r,i=-1,s=a.length;if(arguments.length<2){for(;++i<s;)if((r=(e=a[i]).type)&&(r=zo(n[r],e.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<s;)if(r=(e=a[i]).type)n[r]=hr(n[r],e.name,t);else if(t==null)for(r in n)n[r]=hr(n[r],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Ht(e)},call:function(e,t){if((r=arguments.length-2)>0)for(var n=new Array(r),a=0,r,i;a<r;++a)n[a]=arguments[a+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],a=0,r=i.length;a<r;++a)i[a].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var a=this._[e],r=0,i=a.length;r<i;++r)a[r].value.apply(t,n)}};function zo(e,t){for(var n=0,a=e.length,r;n<a;++n)if((r=e[n]).name===t)return r.value}function hr(e,t,n){for(var a=0,r=e.length;a<r;++a)if(e[a].name===t){e[a]=jo,e=e.slice(0,a).concat(e.slice(a+1));break}return n!=null&&e.push({name:t,value:n}),e}var Gn="http://www.w3.org/1999/xhtml",zn={svg:"http://www.w3.org/2000/svg",xhtml:Gn,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function It(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),zn.hasOwnProperty(t)?{space:zn[t],local:e}:e}function Ko(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Gn&&t.documentElement.namespaceURI===Gn?t.createElement(e):t.createElementNS(n,e)}}function Xo(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function wa(e){var t=It(e);return(t.local?Xo:Ko)(t)}function Yo(){}function fn(e){return e==null?Yo:function(){return this.querySelector(e)}}function Jo(e){typeof e!="function"&&(e=fn(e));for(var t=this._groups,n=t.length,a=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,o=a[r]=new Array(s),l,c,f=0;f<s;++f)(l=i[f])&&(c=e.call(l,l.__data__,f,i))&&("__data__"in l&&(c.__data__=l.__data__),o[f]=c);return new ue(a,this._parents)}function Qo(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Zo(){return[]}function _a(e){return e==null?Zo:function(){return this.querySelectorAll(e)}}function el(e){return function(){return Qo(e.apply(this,arguments))}}function tl(e){typeof e=="function"?e=el(e):e=_a(e);for(var t=this._groups,n=t.length,a=[],r=[],i=0;i<n;++i)for(var s=t[i],o=s.length,l,c=0;c<o;++c)(l=s[c])&&(a.push(e.call(l,l.__data__,c,s)),r.push(l));return new ue(a,r)}function Sa(e){return function(){return this.matches(e)}}function li(e){return function(t){return t.matches(e)}}var nl=Array.prototype.find;function al(e){return function(){return nl.call(this.children,e)}}function rl(){return this.firstElementChild}function il(e){return this.select(e==null?rl:al(typeof e=="function"?e:li(e)))}var sl=Array.prototype.filter;function ol(){return Array.from(this.children)}function ll(e){return function(){return sl.call(this.children,e)}}function cl(e){return this.selectAll(e==null?ol:ll(typeof e=="function"?e:li(e)))}function dl(e){typeof e!="function"&&(e=Sa(e));for(var t=this._groups,n=t.length,a=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,o=a[r]=[],l,c=0;c<s;++c)(l=i[c])&&e.call(l,l.__data__,c,i)&&o.push(l);return new ue(a,this._parents)}function ci(e){return new Array(e.length)}function ul(){return new ue(this._enter||this._groups.map(ci),this._parents)}function Yt(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Yt.prototype={constructor:Yt,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function pl(e){return function(){return e}}function hl(e,t,n,a,r,i){for(var s=0,o,l=t.length,c=i.length;s<c;++s)(o=t[s])?(o.__data__=i[s],a[s]=o):n[s]=new Yt(e,i[s]);for(;s<l;++s)(o=t[s])&&(r[s]=o)}function fl(e,t,n,a,r,i,s){var o,l,c=new Map,f=t.length,d=i.length,h=new Array(f),m;for(o=0;o<f;++o)(l=t[o])&&(h[o]=m=s.call(l,l.__data__,o,t)+"",c.has(m)?r[o]=l:c.set(m,l));for(o=0;o<d;++o)m=s.call(e,i[o],o,i)+"",(l=c.get(m))?(a[o]=l,l.__data__=i[o],c.delete(m)):n[o]=new Yt(e,i[o]);for(o=0;o<f;++o)(l=t[o])&&c.get(h[o])===l&&(r[o]=l)}function ml(e){return e.__data__}function yl(e,t){if(!arguments.length)return Array.from(this,ml);var n=t?fl:hl,a=this._parents,r=this._groups;typeof e!="function"&&(e=pl(e));for(var i=r.length,s=new Array(i),o=new Array(i),l=new Array(i),c=0;c<i;++c){var f=a[c],d=r[c],h=d.length,m=bl(e.call(f,f&&f.__data__,c,a)),b=m.length,_=o[c]=new Array(b),w=s[c]=new Array(b),g=l[c]=new Array(h);n(f,d,_,w,g,m,t);for(var k=0,P=0,$,N;k<b;++k)if($=_[k]){for(k>=P&&(P=k+1);!(N=w[P])&&++P<b;);$._next=N||null}}return s=new ue(s,a),s._enter=o,s._exit=l,s}function bl(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function gl(){return new ue(this._exit||this._groups.map(ci),this._parents)}function vl(e,t,n){var a=this.enter(),r=this,i=this.exit();return typeof e=="function"?(a=e(a),a&&(a=a.selection())):a=a.append(e+""),t!=null&&(r=t(r),r&&(r=r.selection())),n==null?i.remove():n(i),a&&r?a.merge(r).order():r}function wl(e){for(var t=e.selection?e.selection():e,n=this._groups,a=t._groups,r=n.length,i=a.length,s=Math.min(r,i),o=new Array(r),l=0;l<s;++l)for(var c=n[l],f=a[l],d=c.length,h=o[l]=new Array(d),m,b=0;b<d;++b)(m=c[b]||f[b])&&(h[b]=m);for(;l<r;++l)o[l]=n[l];return new ue(o,this._parents)}function _l(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var a=e[t],r=a.length-1,i=a[r],s;--r>=0;)(s=a[r])&&(i&&s.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(s,i),i=s);return this}function Sl(e){e||(e=Pl);function t(d,h){return d&&h?e(d.__data__,h.__data__):!d-!h}for(var n=this._groups,a=n.length,r=new Array(a),i=0;i<a;++i){for(var s=n[i],o=s.length,l=r[i]=new Array(o),c,f=0;f<o;++f)(c=s[f])&&(l[f]=c);l.sort(t)}return new ue(r,this._parents).order()}function Pl(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Al(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function kl(){return Array.from(this)}function $l(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var a=e[t],r=0,i=a.length;r<i;++r){var s=a[r];if(s)return s}return null}function xl(){let e=0;for(const t of this)++e;return e}function Ml(){return!this.node()}function El(e){for(var t=this._groups,n=0,a=t.length;n<a;++n)for(var r=t[n],i=0,s=r.length,o;i<s;++i)(o=r[i])&&e.call(o,o.__data__,i,r);return this}function Cl(e){return function(){this.removeAttribute(e)}}function Tl(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Rl(e,t){return function(){this.setAttribute(e,t)}}function Ll(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Nl(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Il(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Dl(e,t){var n=It(e);if(arguments.length<2){var a=this.node();return n.local?a.getAttributeNS(n.space,n.local):a.getAttribute(n)}return this.each((t==null?n.local?Tl:Cl:typeof t=="function"?n.local?Il:Nl:n.local?Ll:Rl)(n,t))}function Pa(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Ol(e){return function(){this.style.removeProperty(e)}}function Ul(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Bl(e,t,n){return function(){var a=t.apply(this,arguments);a==null?this.style.removeProperty(e):this.style.setProperty(e,a,n)}}function Fl(e,t,n){return arguments.length>1?this.each((t==null?Ol:typeof t=="function"?Bl:Ul)(e,t,n??"")):je(this.node(),e)}function je(e,t){return e.style.getPropertyValue(t)||Pa(e).getComputedStyle(e,null).getPropertyValue(t)}function Hl(e){return function(){delete this[e]}}function ql(e,t){return function(){this[e]=t}}function Vl(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Wl(e,t){return arguments.length>1?this.each((t==null?Hl:typeof t=="function"?Vl:ql)(e,t)):this.node()[e]}function di(e){return e.trim().split(/^|\s+/)}function Aa(e){return e.classList||new ui(e)}function ui(e){this._node=e,this._names=di(e.getAttribute("class")||"")}ui.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function pi(e,t){for(var n=Aa(e),a=-1,r=t.length;++a<r;)n.add(t[a])}function hi(e,t){for(var n=Aa(e),a=-1,r=t.length;++a<r;)n.remove(t[a])}function jl(e){return function(){pi(this,e)}}function Gl(e){return function(){hi(this,e)}}function zl(e,t){return function(){(t.apply(this,arguments)?pi:hi)(this,e)}}function Kl(e,t){var n=di(e+"");if(arguments.length<2){for(var a=Aa(this.node()),r=-1,i=n.length;++r<i;)if(!a.contains(n[r]))return!1;return!0}return this.each((typeof t=="function"?zl:t?jl:Gl)(n,t))}function Xl(){this.textContent=""}function Yl(e){return function(){this.textContent=e}}function Jl(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Ql(e){return arguments.length?this.each(e==null?Xl:(typeof e=="function"?Jl:Yl)(e)):this.node().textContent}function Zl(){this.innerHTML=""}function ec(e){return function(){this.innerHTML=e}}function tc(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function nc(e){return arguments.length?this.each(e==null?Zl:(typeof e=="function"?tc:ec)(e)):this.node().innerHTML}function ac(){this.nextSibling&&this.parentNode.appendChild(this)}function rc(){return this.each(ac)}function ic(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function sc(){return this.each(ic)}function oc(e){var t=typeof e=="function"?e:wa(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function lc(){return null}function cc(e,t){var n=typeof e=="function"?e:wa(e),a=t==null?lc:typeof t=="function"?t:fn(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),a.apply(this,arguments)||null)})}function dc(){var e=this.parentNode;e&&e.removeChild(this)}function uc(){return this.each(dc)}function pc(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function hc(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function fc(e){return this.select(e?hc:pc)}function mc(e){return arguments.length?this.property("__data__",e):this.node().__data__}function yc(e){return function(t){e.call(this,t,this.__data__)}}function bc(e){return e.trim().split(/^|\s+/).map(function(t){var n="",a=t.indexOf(".");return a>=0&&(n=t.slice(a+1),t=t.slice(0,a)),{type:t,name:n}})}function gc(e){return function(){var t=this.__on;if(t){for(var n=0,a=-1,r=t.length,i;n<r;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++a]=i;++a?t.length=a:delete this.__on}}}function vc(e,t,n){return function(){var a=this.__on,r,i=yc(t);if(a){for(var s=0,o=a.length;s<o;++s)if((r=a[s]).type===e.type&&r.name===e.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=i,r.options=n),r.value=t;return}}this.addEventListener(e.type,i,n),r={type:e.type,name:e.name,value:t,listener:i,options:n},a?a.push(r):this.__on=[r]}}function wc(e,t,n){var a=bc(e+""),r,i=a.length,s;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,c=o.length,f;l<c;++l)for(r=0,f=o[l];r<i;++r)if((s=a[r]).type===f.type&&s.name===f.name)return f.value}return}for(o=t?vc:gc,r=0;r<i;++r)this.each(o(a[r],t,n));return this}function fi(e,t,n){var a=Pa(e),r=a.CustomEvent;typeof r=="function"?r=new r(t,n):(r=a.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function _c(e,t){return function(){return fi(this,e,t)}}function Sc(e,t){return function(){return fi(this,e,t.apply(this,arguments))}}function Pc(e,t){return this.each((typeof t=="function"?Sc:_c)(e,t))}function*Ac(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var a=e[t],r=0,i=a.length,s;r<i;++r)(s=a[r])&&(yield s)}var mi=[null];function ue(e,t){this._groups=e,this._parents=t}function pt(){return new ue([[document.documentElement]],mi)}function kc(){return this}ue.prototype=pt.prototype={constructor:ue,select:Jo,selectAll:tl,selectChild:il,selectChildren:cl,filter:dl,data:yl,enter:ul,exit:gl,join:vl,merge:wl,selection:kc,order:_l,sort:Sl,call:Al,nodes:kl,node:$l,size:xl,empty:Ml,each:El,attr:Dl,style:Fl,property:Wl,classed:Kl,text:Ql,html:nc,raise:rc,lower:sc,append:oc,insert:cc,remove:uc,clone:fc,datum:mc,on:wc,dispatch:Pc,[Symbol.iterator]:Ac};function yi(e){return typeof e=="string"?new ue([[document.querySelector(e)]],[document.documentElement]):new ue([[e]],mi)}var $c=0;function fr(){this._="@"+(++$c).toString(36)}fr.prototype={constructor:fr,get:function(e){for(var t=this._;!(t in e);)if(!(e=e.parentNode))return;return e[t]},set:function(e,t){return e[this._]=t},remove:function(e){return this._ in e&&delete e[this._]},toString:function(){return this._}};function ht(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Dt(e,t){var n=Object.create(e.prototype);for(var a in t)n[a]=t[a];return n}function Oe(){}var Ge=.7,ot=1/Ge,et="\\s*([+-]?\\d+)\\s*",Pt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",we="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",xc=/^#([0-9a-f]{3,8})$/,Mc=new RegExp(`^rgb\\(${et},${et},${et}\\)$`),Ec=new RegExp(`^rgb\\(${we},${we},${we}\\)$`),Cc=new RegExp(`^rgba\\(${et},${et},${et},${Pt}\\)$`),Tc=new RegExp(`^rgba\\(${we},${we},${we},${Pt}\\)$`),Rc=new RegExp(`^hsl\\(${Pt},${we},${we}\\)$`),Lc=new RegExp(`^hsla\\(${Pt},${we},${we},${Pt}\\)$`),mr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};ht(Oe,Le,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:yr,formatHex:yr,formatHex8:Nc,formatHsl:Ic,formatRgb:br,toString:br});function yr(){return this.rgb().formatHex()}function Nc(){return this.rgb().formatHex8()}function Ic(){return bi(this).formatHsl()}function br(){return this.rgb().formatRgb()}function Le(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=xc.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?gr(t):n===3?new ee(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ot(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ot(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Mc.exec(e))?new ee(t[1],t[2],t[3],1):(t=Ec.exec(e))?new ee(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Cc.exec(e))?Ot(t[1],t[2],t[3],t[4]):(t=Tc.exec(e))?Ot(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Rc.exec(e))?_r(t[1],t[2]/100,t[3]/100,1):(t=Lc.exec(e))?_r(t[1],t[2]/100,t[3]/100,t[4]):mr.hasOwnProperty(e)?gr(mr[e]):e==="transparent"?new ee(NaN,NaN,NaN,0):null}function gr(e){return new ee(e>>16&255,e>>8&255,e&255,1)}function Ot(e,t,n,a){return a<=0&&(e=t=n=NaN),new ee(e,t,n,a)}function ka(e){return e instanceof Oe||(e=Le(e)),e?(e=e.rgb(),new ee(e.r,e.g,e.b,e.opacity)):new ee}function Jt(e,t,n,a){return arguments.length===1?ka(e):new ee(e,t,n,a??1)}function ee(e,t,n,a){this.r=+e,this.g=+t,this.b=+n,this.opacity=+a}ht(ee,Jt,Dt(Oe,{brighter(e){return e=e==null?ot:Math.pow(ot,e),new ee(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Ge:Math.pow(Ge,e),new ee(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new ee(Ve(this.r),Ve(this.g),Ve(this.b),Qt(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:vr,formatHex:vr,formatHex8:Dc,formatRgb:wr,toString:wr}));function vr(){return`#${qe(this.r)}${qe(this.g)}${qe(this.b)}`}function Dc(){return`#${qe(this.r)}${qe(this.g)}${qe(this.b)}${qe((isNaN(this.opacity)?1:this.opacity)*255)}`}function wr(){const e=Qt(this.opacity);return`${e===1?"rgb(":"rgba("}${Ve(this.r)}, ${Ve(this.g)}, ${Ve(this.b)}${e===1?")":`, ${e})`}`}function Qt(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Ve(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function qe(e){return e=Ve(e),(e<16?"0":"")+e.toString(16)}function _r(e,t,n,a){return a<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new me(e,t,n,a)}function bi(e){if(e instanceof me)return new me(e.h,e.s,e.l,e.opacity);if(e instanceof Oe||(e=Le(e)),!e)return new me;if(e instanceof me)return e;e=e.rgb();var t=e.r/255,n=e.g/255,a=e.b/255,r=Math.min(t,n,a),i=Math.max(t,n,a),s=NaN,o=i-r,l=(i+r)/2;return o?(t===i?s=(n-a)/o+(n<a)*6:n===i?s=(a-t)/o+2:s=(t-n)/o+4,o/=l<.5?i+r:2-i-r,s*=60):o=l>0&&l<1?0:s,new me(s,o,l,e.opacity)}function gi(e,t,n,a){return arguments.length===1?bi(e):new me(e,t,n,a??1)}function me(e,t,n,a){this.h=+e,this.s=+t,this.l=+n,this.opacity=+a}ht(me,gi,Dt(Oe,{brighter(e){return e=e==null?ot:Math.pow(ot,e),new me(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Ge:Math.pow(Ge,e),new me(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,a=n+(n<.5?n:1-n)*t,r=2*n-a;return new ee(Mn(e>=240?e-240:e+120,r,a),Mn(e,r,a),Mn(e<120?e+240:e-120,r,a),this.opacity)},clamp(){return new me(Sr(this.h),Ut(this.s),Ut(this.l),Qt(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Qt(this.opacity);return`${e===1?"hsl(":"hsla("}${Sr(this.h)}, ${Ut(this.s)*100}%, ${Ut(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Sr(e){return e=(e||0)%360,e<0?e+360:e}function Ut(e){return Math.max(0,Math.min(1,e||0))}function Mn(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const vi=Math.PI/180,wi=180/Math.PI,Zt=18,_i=.96422,Si=1,Pi=.82521,Ai=4/29,tt=6/29,ki=3*tt*tt,Oc=tt*tt*tt;function $i(e){if(e instanceof _e)return new _e(e.l,e.a,e.b,e.opacity);if(e instanceof ke)return Ei(e);e instanceof ee||(e=ka(e));var t=Rn(e.r),n=Rn(e.g),a=Rn(e.b),r=En((.2225045*t+.7168786*n+.0606169*a)/Si),i,s;return t===n&&n===a?i=s=r:(i=En((.4360747*t+.3850649*n+.1430804*a)/_i),s=En((.0139322*t+.0971045*n+.7141733*a)/Pi)),new _e(116*r-16,500*(i-r),200*(r-s),e.opacity)}function xi(e,t,n,a){return arguments.length===1?$i(e):new _e(e,t,n,a??1)}function _e(e,t,n,a){this.l=+e,this.a=+t,this.b=+n,this.opacity=+a}ht(_e,xi,Dt(Oe,{brighter(e){return new _e(this.l+Zt*(e??1),this.a,this.b,this.opacity)},darker(e){return new _e(this.l-Zt*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=_i*Cn(t),e=Si*Cn(e),n=Pi*Cn(n),new ee(Tn(3.1338561*t-1.6168667*e-.4906146*n),Tn(-.9787684*t+1.9161415*e+.033454*n),Tn(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function En(e){return e>Oc?Math.pow(e,1/3):e/ki+Ai}function Cn(e){return e>tt?e*e*e:ki*(e-Ai)}function Tn(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Rn(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Uc(e){if(e instanceof ke)return new ke(e.h,e.c,e.l,e.opacity);if(e instanceof _e||(e=$i(e)),e.a===0&&e.b===0)return new ke(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*wi;return new ke(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Mi(e,t,n,a){return arguments.length===1?Uc(e):new ke(e,t,n,a??1)}function ke(e,t,n,a){this.h=+e,this.c=+t,this.l=+n,this.opacity=+a}function Ei(e){if(isNaN(e.h))return new _e(e.l,0,0,e.opacity);var t=e.h*vi;return new _e(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}ht(ke,Mi,Dt(Oe,{brighter(e){return new ke(this.h,this.c,this.l+Zt*(e??1),this.opacity)},darker(e){return new ke(this.h,this.c,this.l-Zt*(e??1),this.opacity)},rgb(){return Ei(this).rgb()}}));var Ci=-.14861,$a=1.78277,xa=-.29227,mn=-.90649,At=1.97294,Pr=At*mn,Ar=At*$a,kr=$a*xa-mn*Ci;function Bc(e){if(e instanceof We)return new We(e.h,e.s,e.l,e.opacity);e instanceof ee||(e=ka(e));var t=e.r/255,n=e.g/255,a=e.b/255,r=(kr*a+Pr*t-Ar*n)/(kr+Pr-Ar),i=a-r,s=(At*(n-r)-xa*i)/mn,o=Math.sqrt(s*s+i*i)/(At*r*(1-r)),l=o?Math.atan2(s,i)*wi-120:NaN;return new We(l<0?l+360:l,o,r,e.opacity)}function en(e,t,n,a){return arguments.length===1?Bc(e):new We(e,t,n,a??1)}function We(e,t,n,a){this.h=+e,this.s=+t,this.l=+n,this.opacity=+a}ht(We,en,Dt(Oe,{brighter(e){return e=e==null?ot:Math.pow(ot,e),new We(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Ge:Math.pow(Ge,e),new We(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*vi,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),a=Math.cos(e),r=Math.sin(e);return new ee(255*(t+n*(Ci*a+$a*r)),255*(t+n*(xa*a+mn*r)),255*(t+n*(At*a)),this.opacity)}}));var yn=e=>()=>e;function Ti(e,t){return function(n){return e+n*t}}function Fc(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(a){return Math.pow(e+a*t,n)}}function Hc(e,t){var n=t-e;return n?Ti(e,n>180||n<-180?n-360*Math.round(n/360):n):yn(isNaN(e)?t:e)}function qc(e){return(e=+e)==1?nt:function(t,n){return n-t?Fc(t,n,e):yn(isNaN(t)?n:t)}}function nt(e,t){var n=t-e;return n?Ti(e,n):yn(isNaN(e)?t:e)}var kt=(function e(t){var n=qc(t);function a(r,i){var s=n((r=Jt(r)).r,(i=Jt(i)).r),o=n(r.g,i.g),l=n(r.b,i.b),c=nt(r.opacity,i.opacity);return function(f){return r.r=s(f),r.g=o(f),r.b=l(f),r.opacity=c(f),r+""}}return a.gamma=e,a})(1);function Ri(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,a=t.slice(),r;return function(i){for(r=0;r<n;++r)a[r]=e[r]*(1-i)+t[r]*i;return a}}function Vc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Wc(e,t){var n=t?t.length:0,a=e?Math.min(n,e.length):0,r=new Array(a),i=new Array(n),s;for(s=0;s<a;++s)r[s]=bn(e[s],t[s]);for(;s<n;++s)i[s]=t[s];return function(o){for(s=0;s<a;++s)i[s]=r[s](o);return i}}function Li(e,t){var n=new Date;return e=+e,t=+t,function(a){return n.setTime(e*(1-a)+t*a),n}}function pe(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Ni(e,t){var n={},a={},r;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in e?n[r]=bn(e[r],t[r]):a[r]=t[r];return function(i){for(r in n)a[r]=n[r](i);return a}}var Kn=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ln=new RegExp(Kn.source,"g");function jc(e){return function(){return e}}function Gc(e){return function(t){return e(t)+""}}function Ma(e,t){var n=Kn.lastIndex=Ln.lastIndex=0,a,r,i,s=-1,o=[],l=[];for(e=e+"",t=t+"";(a=Kn.exec(e))&&(r=Ln.exec(t));)(i=r.index)>n&&(i=t.slice(n,i),o[s]?o[s]+=i:o[++s]=i),(a=a[0])===(r=r[0])?o[s]?o[s]+=r:o[++s]=r:(o[++s]=null,l.push({i:s,x:pe(a,r)})),n=Ln.lastIndex;return n<t.length&&(i=t.slice(n),o[s]?o[s]+=i:o[++s]=i),o.length<2?l[0]?Gc(l[0].x):jc(t):(t=l.length,function(c){for(var f=0,d;f<t;++f)o[(d=l[f]).i]=d.x(c);return o.join("")})}function bn(e,t){var n=typeof t,a;return t==null||n==="boolean"?yn(t):(n==="number"?pe:n==="string"?(a=Le(t))?(t=a,kt):Ma:t instanceof Le?kt:t instanceof Date?Li:Vc(t)?Ri:Array.isArray(t)?Wc:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Ni:pe)(e,t)}function Ii(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}var $r=180/Math.PI,Xn={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Di(e,t,n,a,r,i){var s,o,l;return(s=Math.sqrt(e*e+t*t))&&(e/=s,t/=s),(l=e*n+t*a)&&(n-=e*l,a-=t*l),(o=Math.sqrt(n*n+a*a))&&(n/=o,a/=o,l/=o),e*a<t*n&&(e=-e,t=-t,l=-l,s=-s),{translateX:r,translateY:i,rotate:Math.atan2(t,e)*$r,skewX:Math.atan(l)*$r,scaleX:s,scaleY:o}}var Bt;function zc(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Xn:Di(t.a,t.b,t.c,t.d,t.e,t.f)}function Kc(e){return e==null||(Bt||(Bt=document.createElementNS("http://www.w3.org/2000/svg","g")),Bt.setAttribute("transform",e),!(e=Bt.transform.baseVal.consolidate()))?Xn:(e=e.matrix,Di(e.a,e.b,e.c,e.d,e.e,e.f))}function Oi(e,t,n,a){function r(c){return c.length?c.pop()+" ":""}function i(c,f,d,h,m,b){if(c!==d||f!==h){var _=m.push("translate(",null,t,null,n);b.push({i:_-4,x:pe(c,d)},{i:_-2,x:pe(f,h)})}else(d||h)&&m.push("translate("+d+t+h+n)}function s(c,f,d,h){c!==f?(c-f>180?f+=360:f-c>180&&(c+=360),h.push({i:d.push(r(d)+"rotate(",null,a)-2,x:pe(c,f)})):f&&d.push(r(d)+"rotate("+f+a)}function o(c,f,d,h){c!==f?h.push({i:d.push(r(d)+"skewX(",null,a)-2,x:pe(c,f)}):f&&d.push(r(d)+"skewX("+f+a)}function l(c,f,d,h,m,b){if(c!==d||f!==h){var _=m.push(r(m)+"scale(",null,",",null,")");b.push({i:_-4,x:pe(c,d)},{i:_-2,x:pe(f,h)})}else(d!==1||h!==1)&&m.push(r(m)+"scale("+d+","+h+")")}return function(c,f){var d=[],h=[];return c=e(c),f=e(f),i(c.translateX,c.translateY,f.translateX,f.translateY,d,h),s(c.rotate,f.rotate,d,h),o(c.skewX,f.skewX,d,h),l(c.scaleX,c.scaleY,f.scaleX,f.scaleY,d,h),c=f=null,function(m){for(var b=-1,_=h.length,w;++b<_;)d[(w=h[b]).i]=w.x(m);return d.join("")}}}var Ui=Oi(zc,"px, ","px)","deg)"),Bi=Oi(Kc,", ",")",")"),Xc=1e-12;function xr(e){return((e=Math.exp(e))+1/e)/2}function Yc(e){return((e=Math.exp(e))-1/e)/2}function Jc(e){return((e=Math.exp(2*e))-1)/(e+1)}(function e(t,n,a){function r(i,s){var o=i[0],l=i[1],c=i[2],f=s[0],d=s[1],h=s[2],m=f-o,b=d-l,_=m*m+b*b,w,g;if(_<Xc)g=Math.log(h/c)/t,w=function(O){return[o+O*m,l+O*b,c*Math.exp(t*O*g)]};else{var k=Math.sqrt(_),P=(h*h-c*c+a*_)/(2*c*n*k),$=(h*h-c*c-a*_)/(2*h*n*k),N=Math.log(Math.sqrt(P*P+1)-P),L=Math.log(Math.sqrt($*$+1)-$);g=(L-N)/t,w=function(O){var x=O*g,F=xr(N),B=c/(n*k)*(F*Jc(t*x+N)-Yc(N));return[o+B*m,l+B*b,c*F/xr(t*x+N)]}}return w.duration=Math.abs(g)*1e3*t/Math.SQRT2,w}return r.rho=function(i){var s=Math.max(.001,+i),o=s*s,l=o*o;return e(s,o,l)},r})(Math.SQRT2,2,4);function Fi(e){return(function t(n){n=+n;function a(r,i){var s=e((r=en(r)).h,(i=en(i)).h),o=nt(r.s,i.s),l=nt(r.l,i.l),c=nt(r.opacity,i.opacity);return function(f){return r.h=s(f),r.s=o(f),r.l=l(Math.pow(f,n)),r.opacity=c(f),r+""}}return a.gamma=t,a})(1)}Fi(Hc);Fi(nt);var lt=0,bt=0,yt=0,Hi=1e3,tn,gt,nn=0,ze=0,gn=0,$t=typeof performance=="object"&&performance.now?performance:Date,qi=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function vn(){return ze||(qi(Qc),ze=$t.now()+gn)}function Qc(){ze=0}function an(){this._call=this._time=this._next=null}an.prototype=Ea.prototype={constructor:an,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?vn():+n)+(t==null?0:+t),!this._next&&gt!==this&&(gt?gt._next=this:tn=this,gt=this),this._call=e,this._time=n,Yn()},stop:function(){this._call&&(this._call=null,this._time=1/0,Yn())}};function Ea(e,t,n){var a=new an;return a.restart(e,t,n),a}function Vi(){vn(),++lt;for(var e=tn,t;e;)(t=ze-e._time)>=0&&e._call.call(void 0,t),e=e._next;--lt}function Mr(){ze=(nn=$t.now())+gn,lt=bt=0;try{Vi()}finally{lt=0,ed(),ze=0}}function Zc(){var e=$t.now(),t=e-nn;t>Hi&&(gn-=t,nn=e)}function ed(){for(var e,t=tn,n,a=1/0;t;)t._call?(a>t._time&&(a=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:tn=n);gt=e,Yn(a)}function Yn(e){if(!lt){bt&&(bt=clearTimeout(bt));var t=e-ze;t>24?(e<1/0&&(bt=setTimeout(Mr,Math.ceil(e-$t.now()-gn)+1)),yt&&(yt=clearInterval(yt))):(yt||(nn=$t.now(),yt=setInterval(Zc,Hi)),lt=1,qi(Mr))}}function Jn(e,t,n){var a=new an;return t=t==null?0:+t,a.restart(r=>{a.stop(),e(r+t)},t,n),a}function Qn(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Ca=3;(function e(t){t=+t;function n(a){return Math.pow(a,t)}return n.exponent=e,n})(Ca);(function e(t){t=+t;function n(a){return 1-Math.pow(1-a,t)}return n.exponent=e,n})(Ca);(function e(t){t=+t;function n(a){return((a*=2)<=1?Math.pow(a,t):2-Math.pow(2-a,t))/2}return n.exponent=e,n})(Ca);function rn(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}var Ta=1.70158;(function e(t){t=+t;function n(a){return(a=+a)*a*(t*(a-1)+a)}return n.overshoot=e,n})(Ta);(function e(t){t=+t;function n(a){return--a*a*((a+1)*t+a)+1}return n.overshoot=e,n})(Ta);(function e(t){t=+t;function n(a){return((a*=2)<1?a*a*((t+1)*a-t):(a-=2)*a*((t+1)*a+t)+2)/2}return n.overshoot=e,n})(Ta);var ct=2*Math.PI,Ra=1,La=.3;(function e(t,n){var a=Math.asin(1/(t=Math.max(1,t)))*(n/=ct);function r(i){return t*rn(- --i)*Math.sin((a-i)/n)}return r.amplitude=function(i){return e(i,n*ct)},r.period=function(i){return e(t,i)},r})(Ra,La);(function e(t,n){var a=Math.asin(1/(t=Math.max(1,t)))*(n/=ct);function r(i){return 1-t*rn(i=+i)*Math.sin((i+a)/n)}return r.amplitude=function(i){return e(i,n*ct)},r.period=function(i){return e(t,i)},r})(Ra,La);(function e(t,n){var a=Math.asin(1/(t=Math.max(1,t)))*(n/=ct);function r(i){return((i=i*2-1)<0?t*rn(-i)*Math.sin((a-i)/n):2-t*rn(i)*Math.sin((a+i)/n))/2}return r.amplitude=function(i){return e(i,n*ct)},r.period=function(i){return e(t,i)},r})(Ra,La);var td=va("start","end","cancel","interrupt"),nd=[],Wi=0,Er=1,Zn=2,qt=3,Cr=4,ea=5,Vt=6;function wn(e,t,n,a,r,i){var s=e.__transition;if(!s)e.__transition={};else if(n in s)return;ad(e,n,{name:t,index:a,group:r,on:td,tween:nd,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:Wi})}function Na(e,t){var n=ge(e,t);if(n.state>Wi)throw new Error("too late; already scheduled");return n}function Se(e,t){var n=ge(e,t);if(n.state>qt)throw new Error("too late; already running");return n}function ge(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function ad(e,t,n){var a=e.__transition,r;a[t]=n,n.timer=Ea(i,0,n.time);function i(c){n.state=Er,n.timer.restart(s,n.delay,n.time),n.delay<=c&&s(c-n.delay)}function s(c){var f,d,h,m;if(n.state!==Er)return l();for(f in a)if(m=a[f],m.name===n.name){if(m.state===qt)return Jn(s);m.state===Cr?(m.state=Vt,m.timer.stop(),m.on.call("interrupt",e,e.__data__,m.index,m.group),delete a[f]):+f<t&&(m.state=Vt,m.timer.stop(),m.on.call("cancel",e,e.__data__,m.index,m.group),delete a[f])}if(Jn(function(){n.state===qt&&(n.state=Cr,n.timer.restart(o,n.delay,n.time),o(c))}),n.state=Zn,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Zn){for(n.state=qt,r=new Array(h=n.tween.length),f=0,d=-1;f<h;++f)(m=n.tween[f].value.call(e,e.__data__,n.index,n.group))&&(r[++d]=m);r.length=d+1}}function o(c){for(var f=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=ea,1),d=-1,h=r.length;++d<h;)r[d].call(e,f);n.state===ea&&(n.on.call("end",e,e.__data__,n.index,n.group),l())}function l(){n.state=Vt,n.timer.stop(),delete a[t];for(var c in a)return;delete e.__transition}}function ji(e,t){var n=e.__transition,a,r,i=!0,s;if(n){t=t==null?null:t+"";for(s in n){if((a=n[s]).name!==t){i=!1;continue}r=a.state>Zn&&a.state<ea,a.state=Vt,a.timer.stop(),a.on.call(r?"interrupt":"cancel",e,e.__data__,a.index,a.group),delete n[s]}i&&delete e.__transition}}function rd(e){return this.each(function(){ji(this,e)})}function id(e,t){var n,a;return function(){var r=Se(this,e),i=r.tween;if(i!==n){a=n=i;for(var s=0,o=a.length;s<o;++s)if(a[s].name===t){a=a.slice(),a.splice(s,1);break}}r.tween=a}}function sd(e,t,n){var a,r;if(typeof n!="function")throw new Error;return function(){var i=Se(this,e),s=i.tween;if(s!==a){r=(a=s).slice();for(var o={name:t,value:n},l=0,c=r.length;l<c;++l)if(r[l].name===t){r[l]=o;break}l===c&&r.push(o)}i.tween=r}}function od(e,t){var n=this._id;if(e+="",arguments.length<2){for(var a=ge(this.node(),n).tween,r=0,i=a.length,s;r<i;++r)if((s=a[r]).name===e)return s.value;return null}return this.each((t==null?id:sd)(n,e,t))}function Ia(e,t,n){var a=e._id;return e.each(function(){var r=Se(this,a);(r.value||(r.value={}))[t]=n.apply(this,arguments)}),function(r){return ge(r,a).value[t]}}function Gi(e,t){var n;return(typeof t=="number"?pe:t instanceof Le?kt:(n=Le(t))?(t=n,kt):Ma)(e,t)}function ld(e){return function(){this.removeAttribute(e)}}function cd(e){return function(){this.removeAttributeNS(e.space,e.local)}}function dd(e,t,n){var a,r=n+"",i;return function(){var s=this.getAttribute(e);return s===r?null:s===a?i:i=t(a=s,n)}}function ud(e,t,n){var a,r=n+"",i;return function(){var s=this.getAttributeNS(e.space,e.local);return s===r?null:s===a?i:i=t(a=s,n)}}function pd(e,t,n){var a,r,i;return function(){var s,o=n(this),l;return o==null?void this.removeAttribute(e):(s=this.getAttribute(e),l=o+"",s===l?null:s===a&&l===r?i:(r=l,i=t(a=s,o)))}}function hd(e,t,n){var a,r,i;return function(){var s,o=n(this),l;return o==null?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local),l=o+"",s===l?null:s===a&&l===r?i:(r=l,i=t(a=s,o)))}}function fd(e,t){var n=It(e),a=n==="transform"?Bi:Gi;return this.attrTween(e,typeof t=="function"?(n.local?hd:pd)(n,a,Ia(this,"attr."+e,t)):t==null?(n.local?cd:ld)(n):(n.local?ud:dd)(n,a,t))}function md(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function yd(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function bd(e,t){var n,a;function r(){var i=t.apply(this,arguments);return i!==a&&(n=(a=i)&&yd(e,i)),n}return r._value=t,r}function gd(e,t){var n,a;function r(){var i=t.apply(this,arguments);return i!==a&&(n=(a=i)&&md(e,i)),n}return r._value=t,r}function vd(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var a=It(e);return this.tween(n,(a.local?bd:gd)(a,t))}function wd(e,t){return function(){Na(this,e).delay=+t.apply(this,arguments)}}function _d(e,t){return t=+t,function(){Na(this,e).delay=t}}function Sd(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?wd:_d)(t,e)):ge(this.node(),t).delay}function Pd(e,t){return function(){Se(this,e).duration=+t.apply(this,arguments)}}function Ad(e,t){return t=+t,function(){Se(this,e).duration=t}}function kd(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Pd:Ad)(t,e)):ge(this.node(),t).duration}function $d(e,t){if(typeof t!="function")throw new Error;return function(){Se(this,e).ease=t}}function xd(e){var t=this._id;return arguments.length?this.each($d(t,e)):ge(this.node(),t).ease}function Md(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Se(this,e).ease=n}}function Ed(e){if(typeof e!="function")throw new Error;return this.each(Md(this._id,e))}function Cd(e){typeof e!="function"&&(e=Sa(e));for(var t=this._groups,n=t.length,a=new Array(n),r=0;r<n;++r)for(var i=t[r],s=i.length,o=a[r]=[],l,c=0;c<s;++c)(l=i[c])&&e.call(l,l.__data__,c,i)&&o.push(l);return new $e(a,this._parents,this._name,this._id)}function Td(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,a=t.length,r=n.length,i=Math.min(a,r),s=new Array(a),o=0;o<i;++o)for(var l=t[o],c=n[o],f=l.length,d=s[o]=new Array(f),h,m=0;m<f;++m)(h=l[m]||c[m])&&(d[m]=h);for(;o<a;++o)s[o]=t[o];return new $e(s,this._parents,this._name,this._id)}function Rd(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Ld(e,t,n){var a,r,i=Rd(t)?Na:Se;return function(){var s=i(this,e),o=s.on;o!==a&&(r=(a=o).copy()).on(t,n),s.on=r}}function Nd(e,t){var n=this._id;return arguments.length<2?ge(this.node(),n).on.on(e):this.each(Ld(n,e,t))}function Id(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Dd(){return this.on("end.remove",Id(this._id))}function Od(e){var t=this._name,n=this._id;typeof e!="function"&&(e=fn(e));for(var a=this._groups,r=a.length,i=new Array(r),s=0;s<r;++s)for(var o=a[s],l=o.length,c=i[s]=new Array(l),f,d,h=0;h<l;++h)(f=o[h])&&(d=e.call(f,f.__data__,h,o))&&("__data__"in f&&(d.__data__=f.__data__),c[h]=d,wn(c[h],t,n,h,c,ge(f,n)));return new $e(i,this._parents,t,n)}function Ud(e){var t=this._name,n=this._id;typeof e!="function"&&(e=_a(e));for(var a=this._groups,r=a.length,i=[],s=[],o=0;o<r;++o)for(var l=a[o],c=l.length,f,d=0;d<c;++d)if(f=l[d]){for(var h=e.call(f,f.__data__,d,l),m,b=ge(f,n),_=0,w=h.length;_<w;++_)(m=h[_])&&wn(m,t,n,_,h,b);i.push(h),s.push(f)}return new $e(i,s,t,n)}var Bd=pt.prototype.constructor;function Fd(){return new Bd(this._groups,this._parents)}function Hd(e,t){var n,a,r;return function(){var i=je(this,e),s=(this.style.removeProperty(e),je(this,e));return i===s?null:i===n&&s===a?r:r=t(n=i,a=s)}}function zi(e){return function(){this.style.removeProperty(e)}}function qd(e,t,n){var a,r=n+"",i;return function(){var s=je(this,e);return s===r?null:s===a?i:i=t(a=s,n)}}function Vd(e,t,n){var a,r,i;return function(){var s=je(this,e),o=n(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(e),je(this,e))),s===l?null:s===a&&l===r?i:(r=l,i=t(a=s,o))}}function Wd(e,t){var n,a,r,i="style."+t,s="end."+i,o;return function(){var l=Se(this,e),c=l.on,f=l.value[i]==null?o||(o=zi(t)):void 0;(c!==n||r!==f)&&(a=(n=c).copy()).on(s,r=f),l.on=a}}function jd(e,t,n){var a=(e+="")=="transform"?Ui:Gi;return t==null?this.styleTween(e,Hd(e,a)).on("end.style."+e,zi(e)):typeof t=="function"?this.styleTween(e,Vd(e,a,Ia(this,"style."+e,t))).each(Wd(this._id,e)):this.styleTween(e,qd(e,a,t),n).on("end.style."+e,null)}function Gd(e,t,n){return function(a){this.style.setProperty(e,t.call(this,a),n)}}function zd(e,t,n){var a,r;function i(){var s=t.apply(this,arguments);return s!==r&&(a=(r=s)&&Gd(e,s,n)),a}return i._value=t,i}function Kd(e,t,n){var a="style."+(e+="");if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;return this.tween(a,zd(e,t,n??""))}function Xd(e){return function(){this.textContent=e}}function Yd(e){return function(){var t=e(this);this.textContent=t??""}}function Jd(e){return this.tween("text",typeof e=="function"?Yd(Ia(this,"text",e)):Xd(e==null?"":e+""))}function Qd(e){return function(t){this.textContent=e.call(this,t)}}function Zd(e){var t,n;function a(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Qd(r)),t}return a._value=e,a}function eu(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Zd(e))}function tu(){for(var e=this._name,t=this._id,n=Ki(),a=this._groups,r=a.length,i=0;i<r;++i)for(var s=a[i],o=s.length,l,c=0;c<o;++c)if(l=s[c]){var f=ge(l,t);wn(l,e,n,c,s,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new $e(a,this._parents,e,n)}function nu(){var e,t,n=this,a=n._id,r=n.size();return new Promise(function(i,s){var o={value:s},l={value:function(){--r===0&&i()}};n.each(function(){var c=Se(this,a),f=c.on;f!==e&&(t=(e=f).copy(),t._.cancel.push(o),t._.interrupt.push(o),t._.end.push(l)),c.on=t}),r===0&&i()})}var au=0;function $e(e,t,n,a){this._groups=e,this._parents=t,this._name=n,this._id=a}function Ki(){return++au}var Pe=pt.prototype;$e.prototype={constructor:$e,select:Od,selectAll:Ud,selectChild:Pe.selectChild,selectChildren:Pe.selectChildren,filter:Cd,merge:Td,selection:Fd,transition:tu,call:Pe.call,nodes:Pe.nodes,node:Pe.node,size:Pe.size,empty:Pe.empty,each:Pe.each,on:Nd,attr:fd,attrTween:vd,style:jd,styleTween:Kd,text:Jd,textTween:eu,remove:Dd,tween:od,delay:Sd,duration:kd,ease:xd,easeVarying:Ed,end:nu,[Symbol.iterator]:Pe[Symbol.iterator]};var ru={time:null,delay:0,duration:250,ease:Qn};function iu(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function su(e){var t,n;e instanceof $e?(t=e._id,e=e._name):(t=Ki(),(n=ru).time=vn(),e=e==null?null:e+"");for(var a=this._groups,r=a.length,i=0;i<r;++i)for(var s=a[i],o=s.length,l,c=0;c<o;++c)(l=s[c])&&wn(l,e,t,c,s,n||iu(l,t));return new $e(a,this._parents,e,t)}pt.prototype.interrupt=rd;pt.prototype.transition=su;const vt=Math.PI,ta=2*vt,Be=1e-6,ou=ta-Be;function Xi(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function lu(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return Xi;const n=10**t;return function(a){this._+=a[0];for(let r=1,i=a.length;r<i;++r)this._+=Math.round(arguments[r]*n)/n+a[r]}}function Yi(e,t,n,a){return e===n&&t===a}function cu(e){const t=Math.floor(e);if(!(t<=15))return Yi;const n=10**t,a=function(r){return Math.round(r*n)};return function(r,i,s,o){return a(r)===a(s)&&a(i)===a(o)}}class Ji{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Xi:lu(t),this._equal=t==null?Yi:cu(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,a,r){this._append`Q${+t},${+n},${this._x1=+a},${this._y1=+r}`}bezierCurveTo(t,n,a,r,i,s){this._append`C${+t},${+n},${+a},${+r},${this._x1=+i},${this._y1=+s}`}arcTo(t,n,a,r,i){if(t=+t,n=+n,a=+a,r=+r,i=+i,i<0)throw new Error(`negative radius: ${i}`);let s=this._x1,o=this._y1,l=a-t,c=r-n,f=s-t,d=o-n,h=f*f+d*d;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(h>Be)if(!(Math.abs(d*l-c*f)>Be)||!i)this._append`L${this._x1=t},${this._y1=n}`;else{let m=a-s,b=r-o,_=l*l+c*c,w=m*m+b*b,g=Math.sqrt(_),k=Math.sqrt(h),P=i*Math.tan((vt-Math.acos((_+h-w)/(2*g*k)))/2),$=P/k,N=P/g;Math.abs($-1)>Be&&this._append`L${t+$*f},${n+$*d}`,this._append`A${i},${i},0,0,${+(d*m>f*b)},${this._x1=t+N*l},${this._y1=n+N*c}`}}arc(t,n,a,r,i,s){if(t=+t,n=+n,a=+a,s=!!s,a<0)throw new Error(`negative radius: ${a}`);let o=a*Math.cos(r),l=a*Math.sin(r),c=t+o,f=n+l,d=1^s,h=s?r-i:i-r;if(this._x1===null?this._append`M${c},${f}`:(Math.abs(this._x1-c)>Be||Math.abs(this._y1-f)>Be)&&this._append`L${c},${f}`,!!a){if(h<0&&(h=h%ta+ta),h>ou)this._append`A${a},${a},0,1,${d},${t-o},${n-l}A${a},${a},0,1,${d},${this._x1=c},${this._y1=f}`;else if(h>Be){const m=t+a*Math.cos(i),b=n+a*Math.sin(i);if(h>=vt&&this._equal(c,f,m,b)){h/=2;let _=r+h;this._append`A${a},${a},0,${+(h>=vt)},${d},${t+a*Math.cos(_)},${n+a*Math.sin(_)}`}this._append`A${a},${a},0,${+(h>=vt)},${d},${this._x1=m},${this._y1=b}`}}}rect(t,n,a,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${a=+a}v${+r}h${-a}Z`}toString(){return this._}}function du(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function sn(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"),a=e.slice(0,n);return[a.length>1?a[0]+a.slice(2):a,+e.slice(n+1)]}function dt(e){return e=sn(Math.abs(e)),e?e[1]:NaN}function uu(e,t){return function(n,a){for(var r=n.length,i=[],s=0,o=e[0],l=0;r>0&&o>0&&(l+o+1>a&&(o=Math.max(1,a-l)),i.push(n.substring(r-=o,r+o)),!((l+=o+1)>a));)o=e[s=(s+1)%e.length];return i.reverse().join(t)}}function pu(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var hu=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function xt(e){if(!(t=hu.exec(e)))throw new Error("invalid format: "+e);var t;return new _n({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}xt.prototype=_n.prototype;function _n(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}_n.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function fu(e){e:for(var t=e.length,n=1,a=-1,r;n<t;++n)switch(e[n]){case".":a=r=n;break;case"0":a===0&&(a=n),r=n;break;default:if(!+e[n])break e;a>0&&(a=0);break}return a>0?e.slice(0,a)+e.slice(r+1):e}var on;function mu(e,t){var n=sn(e,t);if(!n)return on=void 0,e.toPrecision(t);var a=n[0],r=n[1],i=r-(on=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,s=a.length;return i===s?a:i>s?a+new Array(i-s+1).join("0"):i>0?a.slice(0,i)+"."+a.slice(i):"0."+new Array(1-i).join("0")+sn(e,Math.max(0,t+i-1))[0]}function Tr(e,t){var n=sn(e,t);if(!n)return e+"";var a=n[0],r=n[1];return r<0?"0."+new Array(-r).join("0")+a:a.length>r+1?a.slice(0,r+1)+"."+a.slice(r+1):a+new Array(r-a.length+2).join("0")}var Rr={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:du,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>Tr(e*100,t),r:Tr,s:mu,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function Lr(e){return e}var Nr=Array.prototype.map,Ir=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Qi(e){var t=e.grouping===void 0||e.thousands===void 0?Lr:uu(Nr.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",a=e.currency===void 0?"":e.currency[1]+"",r=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?Lr:pu(Nr.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",o=e.minus===void 0?"−":e.minus+"",l=e.nan===void 0?"NaN":e.nan+"";function c(d,h){d=xt(d);var m=d.fill,b=d.align,_=d.sign,w=d.symbol,g=d.zero,k=d.width,P=d.comma,$=d.precision,N=d.trim,L=d.type;L==="n"?(P=!0,L="g"):Rr[L]||($===void 0&&($=12),N=!0,L="g"),(g||m==="0"&&b==="=")&&(g=!0,m="0",b="=");var O=(h&&h.prefix!==void 0?h.prefix:"")+(w==="$"?n:w==="#"&&/[boxX]/.test(L)?"0"+L.toLowerCase():""),x=(w==="$"?a:/[%p]/.test(L)?s:"")+(h&&h.suffix!==void 0?h.suffix:""),F=Rr[L],B=/[defgprs%]/.test(L);$=$===void 0?6:/[gprs]/.test(L)?Math.max(1,Math.min(21,$)):Math.max(0,Math.min(20,$));function H(E){var U=O,j=x,A,T,q;if(L==="c")j=F(E)+j,E="";else{E=+E;var de=E<0||1/E<0;if(E=isNaN(E)?l:F(Math.abs(E),$),N&&(E=fu(E)),de&&+E==0&&_!=="+"&&(de=!1),U=(de?_==="("?_:o:_==="-"||_==="("?"":_)+U,j=(L==="s"&&!isNaN(E)&&on!==void 0?Ir[8+on/3]:"")+j+(de&&_==="("?")":""),B){for(A=-1,T=E.length;++A<T;)if(q=E.charCodeAt(A),48>q||q>57){j=(q===46?r+E.slice(A+1):E.slice(A))+j,E=E.slice(0,A);break}}}P&&!g&&(E=t(E,1/0));var ve=U.length+E.length+j.length,ae=ve<k?new Array(k-ve+1).join(m):"";switch(P&&g&&(E=t(ae+E,ae.length?k-j.length:1/0),ae=""),b){case"<":E=U+E+j+ae;break;case"=":E=U+ae+E+j;break;case"^":E=ae.slice(0,ve=ae.length>>1)+U+E+j+ae.slice(ve);break;default:E=ae+U+E+j;break}return i(E)}return H.toString=function(){return d+""},H}function f(d,h){var m=Math.max(-8,Math.min(8,Math.floor(dt(h)/3)))*3,b=Math.pow(10,-m),_=c((d=xt(d),d.type="f",d),{suffix:Ir[8+m/3]});return function(w){return _(b*w)}}return{format:c,formatPrefix:f}}var Ft,Da,Oa;Zi({thousands:",",grouping:[3],currency:["$",""]});function Zi(e){return Ft=Qi(e),Da=Ft.format,Oa=Ft.formatPrefix,Ft}function es(e){return Math.max(0,-dt(Math.abs(e)))}function ts(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(dt(t)/3)))*3-dt(Math.abs(e)))}function ns(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,dt(t)-dt(e))+1}function Ua(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}const na=Symbol("implicit");function Ba(){var e=new jn,t=[],n=[],a=na;function r(i){let s=e.get(i);if(s===void 0){if(a!==na)return a;e.set(i,s=t.push(i)-1)}return n[s%n.length]}return r.domain=function(i){if(!arguments.length)return t.slice();t=[],e=new jn;for(const s of i)e.has(s)||e.set(s,t.push(s)-1);return r},r.range=function(i){return arguments.length?(n=Array.from(i),r):n.slice()},r.unknown=function(i){return arguments.length?(a=i,r):a},r.copy=function(){return Ba(t,n).unknown(a)},Ua.apply(r,arguments),r}function Fa(){var e=Ba().unknown(void 0),t=e.domain,n=e.range,a=0,r=1,i,s,o=!1,l=0,c=0,f=.5;delete e.unknown;function d(){var h=t().length,m=r<a,b=m?r:a,_=m?a:r;i=(_-b)/Math.max(1,h-l+c*2),o&&(i=Math.floor(i)),b+=(_-b-i*(h-l))*f,s=i*(1-l),o&&(b=Math.round(b),s=Math.round(s));var w=si(h).map(function(g){return b+i*g});return n(m?w.reverse():w)}return e.domain=function(h){return arguments.length?(t(h),d()):t()},e.range=function(h){return arguments.length?([a,r]=h,a=+a,r=+r,d()):[a,r]},e.rangeRound=function(h){return[a,r]=h,a=+a,r=+r,o=!0,d()},e.bandwidth=function(){return s},e.step=function(){return i},e.round=function(h){return arguments.length?(o=!!h,d()):o},e.padding=function(h){return arguments.length?(l=Math.min(1,c=+h),d()):l},e.paddingInner=function(h){return arguments.length?(l=Math.min(1,h),d()):l},e.paddingOuter=function(h){return arguments.length?(c=+h,d()):c},e.align=function(h){return arguments.length?(f=Math.max(0,Math.min(1,h)),d()):f},e.copy=function(){return Fa(t(),[a,r]).round(o).paddingInner(l).paddingOuter(c).align(f)},Ua.apply(d(),arguments)}function as(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return as(t())},e}function aa(){return as(Fa.apply(null,arguments).paddingInner(1))}function yu(e){return function(){return e}}function bu(e){return+e}var Dr=[0,1];function Qe(e){return e}function ra(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:yu(isNaN(t)?NaN:.5)}function gu(e,t){var n;return e>t&&(n=e,e=t,t=n),function(a){return Math.max(e,Math.min(t,a))}}function vu(e,t,n){var a=e[0],r=e[1],i=t[0],s=t[1];return r<a?(a=ra(r,a),i=n(s,i)):(a=ra(a,r),i=n(i,s)),function(o){return i(a(o))}}function wu(e,t,n){var a=Math.min(e.length,t.length)-1,r=new Array(a),i=new Array(a),s=-1;for(e[a]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<a;)r[s]=ra(e[s],e[s+1]),i[s]=n(t[s],t[s+1]);return function(o){var l=Wn(e,o,1,a)-1;return i[l](r[l](o))}}function _u(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Su(){var e=Dr,t=Dr,n=bn,a,r,i,s=Qe,o,l,c;function f(){var h=Math.min(e.length,t.length);return s!==Qe&&(s=gu(e[0],e[h-1])),o=h>2?wu:vu,l=c=null,d}function d(h){return h==null||isNaN(h=+h)?i:(l||(l=o(e.map(a),t,n)))(a(s(h)))}return d.invert=function(h){return s(r((c||(c=o(t,e.map(a),pe)))(h)))},d.domain=function(h){return arguments.length?(e=Array.from(h,bu),f()):e.slice()},d.range=function(h){return arguments.length?(t=Array.from(h),f()):t.slice()},d.rangeRound=function(h){return t=Array.from(h),n=Ii,f()},d.clamp=function(h){return arguments.length?(s=h?!0:Qe,f()):s!==Qe},d.interpolate=function(h){return arguments.length?(n=h,f()):n},d.unknown=function(h){return arguments.length?(i=h,d):i},function(h,m){return a=h,r=m,f()}}function Pu(){return Su()(Qe,Qe)}function rs(e,t,n,a){var r=ii(e,t,n),i;switch(a=xt(a??",f"),a.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return a.precision==null&&!isNaN(i=ts(r,s))&&(a.precision=i),Oa(a,s)}case"":case"e":case"g":case"p":case"r":{a.precision==null&&!isNaN(i=ns(r,Math.max(Math.abs(e),Math.abs(t))))&&(a.precision=i-(a.type==="e"));break}case"f":case"%":{a.precision==null&&!isNaN(i=es(r))&&(a.precision=i-(a.type==="%")*2);break}}return Da(a)}function Au(e){var t=e.domain;return e.ticks=function(n){var a=t();return ri(a[0],a[a.length-1],n??10)},e.tickFormat=function(n,a){var r=t();return rs(r[0],r[r.length-1],n??10,a)},e.nice=function(n){n==null&&(n=10);var a=t(),r=0,i=a.length-1,s=a[r],o=a[i],l,c,f=10;for(o<s&&(c=s,s=o,o=c,c=r,r=i,i=c);f-- >0;){if(c=Xt(s,o,n),c===l)return a[r]=s,a[i]=o,t(a);if(c>0)s=Math.floor(s/c)*c,o=Math.ceil(o/c)*c;else if(c<0)s=Math.ceil(s*c)/c,o=Math.floor(o*c)/c;else break;l=c}return e},e}function Ha(){var e=Pu();return e.copy=function(){return _u(e,Ha())},Ua.apply(e,arguments),Au(e)}function Z(e){return function(){return e}}const Or=1e-12;function is(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const a=Math.floor(n);if(!(a>=0))throw new RangeError(`invalid digits: ${n}`);t=a}return e},()=>new Ji(t)}function ss(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function os(e){this._context=e}os.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function qa(e){return new os(e)}function ls(e){return e[0]}function cs(e){return e[1]}function Va(e,t){var n=Z(!0),a=null,r=qa,i=null,s=is(o);e=typeof e=="function"?e:e===void 0?ls:Z(e),t=typeof t=="function"?t:t===void 0?cs:Z(t);function o(l){var c,f=(l=ss(l)).length,d,h=!1,m;for(a==null&&(i=r(m=s())),c=0;c<=f;++c)!(c<f&&n(d=l[c],c,l))===h&&((h=!h)?i.lineStart():i.lineEnd()),h&&i.point(+e(d,c,l),+t(d,c,l));if(m)return i=null,m+""||null}return o.x=function(l){return arguments.length?(e=typeof l=="function"?l:Z(+l),o):e},o.y=function(l){return arguments.length?(t=typeof l=="function"?l:Z(+l),o):t},o.defined=function(l){return arguments.length?(n=typeof l=="function"?l:Z(!!l),o):n},o.curve=function(l){return arguments.length?(r=l,a!=null&&(i=r(a)),o):r},o.context=function(l){return arguments.length?(l==null?a=i=null:i=r(a=l),o):a},o}function ds(e,t,n){var a=null,r=Z(!0),i=null,s=qa,o=null,l=is(c);e=typeof e=="function"?e:e===void 0?ls:Z(+e),t=typeof t=="function"?t:Z(t===void 0?0:+t),n=typeof n=="function"?n:n===void 0?cs:Z(+n);function c(d){var h,m,b,_=(d=ss(d)).length,w,g=!1,k,P=new Array(_),$=new Array(_);for(i==null&&(o=s(k=l())),h=0;h<=_;++h){if(!(h<_&&r(w=d[h],h,d))===g)if(g=!g)m=h,o.areaStart(),o.lineStart();else{for(o.lineEnd(),o.lineStart(),b=h-1;b>=m;--b)o.point(P[b],$[b]);o.lineEnd(),o.areaEnd()}g&&(P[h]=+e(w,h,d),$[h]=+t(w,h,d),o.point(a?+a(w,h,d):P[h],n?+n(w,h,d):$[h]))}if(k)return o=null,k+""||null}function f(){return Va().defined(r).curve(s).context(i)}return c.x=function(d){return arguments.length?(e=typeof d=="function"?d:Z(+d),a=null,c):e},c.x0=function(d){return arguments.length?(e=typeof d=="function"?d:Z(+d),c):e},c.x1=function(d){return arguments.length?(a=d==null?null:typeof d=="function"?d:Z(+d),c):a},c.y=function(d){return arguments.length?(t=typeof d=="function"?d:Z(+d),n=null,c):t},c.y0=function(d){return arguments.length?(t=typeof d=="function"?d:Z(+d),c):t},c.y1=function(d){return arguments.length?(n=d==null?null:typeof d=="function"?d:Z(+d),c):n},c.lineX0=c.lineY0=function(){return f().x(e).y(t)},c.lineY1=function(){return f().x(e).y(n)},c.lineX1=function(){return f().x(a).y(t)},c.defined=function(d){return arguments.length?(r=typeof d=="function"?d:Z(!!d),c):r},c.curve=function(d){return arguments.length?(s=d,i!=null&&(o=s(i)),c):s},c.context=function(d){return arguments.length?(d==null?i=o=null:o=s(i=d),c):i},c}function ln(){}function Ur(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function Wa(e){this._context=e}Wa.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Ur(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Ur(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function us(e,t){this._basis=new Wa(e),this._beta=t}us.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var e=this._x,t=this._y,n=e.length-1;if(n>0)for(var a=e[0],r=t[0],i=e[n]-a,s=t[n]-r,o=-1,l;++o<=n;)l=o/n,this._basis.point(this._beta*e[o]+(1-this._beta)*(a+l*i),this._beta*t[o]+(1-this._beta)*(r+l*s));this._x=this._y=null,this._basis.lineEnd()},point:function(e,t){this._x.push(+e),this._y.push(+t)}};(function e(t){function n(a){return t===1?new Wa(a):new us(a,t)}return n.beta=function(a){return e(+a)},n})(.85);function cn(e,t,n){e._context.bezierCurveTo(e._x1+e._k*(e._x2-e._x0),e._y1+e._k*(e._y2-e._y0),e._x2+e._k*(e._x1-t),e._y2+e._k*(e._y1-n),e._x2,e._y2)}function ja(e,t){this._context=e,this._k=(1-t)/6}ja.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:cn(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2,this._x1=e,this._y1=t;break;case 2:this._point=3;default:cn(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function e(t){function n(a){return new ja(a,t)}return n.tension=function(a){return e(+a)},n})(0);function Ga(e,t){this._context=e,this._k=(1-t)/6}Ga.prototype={areaStart:ln,areaEnd:ln,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:cn(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function e(t){function n(a){return new Ga(a,t)}return n.tension=function(a){return e(+a)},n})(0);function za(e,t){this._context=e,this._k=(1-t)/6}za.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:cn(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function e(t){function n(a){return new za(a,t)}return n.tension=function(a){return e(+a)},n})(0);function Ka(e,t,n){var a=e._x1,r=e._y1,i=e._x2,s=e._y2;if(e._l01_a>Or){var o=2*e._l01_2a+3*e._l01_a*e._l12_a+e._l12_2a,l=3*e._l01_a*(e._l01_a+e._l12_a);a=(a*o-e._x0*e._l12_2a+e._x2*e._l01_2a)/l,r=(r*o-e._y0*e._l12_2a+e._y2*e._l01_2a)/l}if(e._l23_a>Or){var c=2*e._l23_2a+3*e._l23_a*e._l12_a+e._l12_2a,f=3*e._l23_a*(e._l23_a+e._l12_a);i=(i*c+e._x1*e._l23_2a-t*e._l12_2a)/f,s=(s*c+e._y1*e._l23_2a-n*e._l12_2a)/f}e._context.bezierCurveTo(a,r,i,s,e._x2,e._y2)}function ps(e,t){this._context=e,this._alpha=t}ps.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,a=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+a*a,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3;default:Ka(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function e(t){function n(a){return t?new ps(a,t):new ja(a,0)}return n.alpha=function(a){return e(+a)},n})(.5);function hs(e,t){this._context=e,this._alpha=t}hs.prototype={areaStart:ln,areaEnd:ln,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,a=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+a*a,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:Ka(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function e(t){function n(a){return t?new hs(a,t):new Ga(a,0)}return n.alpha=function(a){return e(+a)},n})(.5);function fs(e,t){this._context=e,this._alpha=t}fs.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,a=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+a*a,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Ka(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function e(t){function n(a){return t?new fs(a,t):new za(a,0)}return n.alpha=function(a){return e(+a)},n})(.5);function Br(e){return e<0?-1:1}function Fr(e,t,n){var a=e._x1-e._x0,r=t-e._x1,i=(e._y1-e._y0)/(a||r<0&&-0),s=(n-e._y1)/(r||a<0&&-0),o=(i*r+s*a)/(a+r);return(Br(i)+Br(s))*Math.min(Math.abs(i),Math.abs(s),.5*Math.abs(o))||0}function Hr(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function Nn(e,t,n){var a=e._x0,r=e._y0,i=e._x1,s=e._y1,o=(i-a)/3;e._context.bezierCurveTo(a+o,r+o*t,i-o,s-o*n,i,s)}function dn(e){this._context=e}dn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Nn(this,this._t0,Hr(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Nn(this,Hr(this,n=Fr(this,e,t)),n);break;default:Nn(this,this._t0,n=Fr(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};Object.create(dn.prototype).point=function(e,t){dn.prototype.point.call(this,t,e)};function ia(e){return new dn(e)}function Ze(e,t,n){this.k=e,this.x=t,this.y=n}Ze.prototype={constructor:Ze,scale:function(e){return e===1?this:new Ze(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ze(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Ze.prototype;const ku=Object.freeze(Object.defineProperty({__proto__:null,FormatSpecifier:_n,InternMap:jn,Path:Ji,ZoomTransform:Ze,area:ds,ascending:_t,axisLeft:oi,bisect:Wn,bisectRight:Wn,bisector:ga,color:Le,creator:wa,cubehelix:en,curveLinear:qa,curveMonotoneX:ia,descending:ai,dispatch:va,easeCubic:Qn,easeCubicInOut:Qn,get format(){return Da},formatDefaultLocale:Zi,formatLocale:Qi,get formatPrefix(){return Oa},formatSpecifier:xt,hcl:Mi,hsl:gi,interpolate:bn,interpolateDate:Li,interpolateNumber:pe,interpolateNumberArray:Ri,interpolateObject:Ni,interpolateRgb:kt,interpolateRound:Ii,interpolateString:Ma,interpolateTransformCss:Ui,interpolateTransformSvg:Bi,interrupt:ji,lab:xi,line:Va,matcher:Sa,namespace:It,namespaces:zn,now:vn,precisionFixed:es,precisionPrefix:ts,precisionRound:ns,range:si,rgb:Jt,scaleBand:Fa,scaleImplicit:na,scaleLinear:Ha,scaleOrdinal:Ba,scalePoint:aa,select:yi,selection:pt,selector:fn,selectorAll:_a,style:je,tickFormat:rs,tickIncrement:Xt,tickStep:ii,ticks:ri,timeout:Jn,timer:Ea,timerFlush:Vi,window:Pa},Symbol.toStringTag,{value:"Module"}));function Ue(e){const t=Number(e);return Number.isFinite(t)?t:0}function qr(e){const t=String(e||"").match(/(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?/i);if(!t)return null;let n=Number(t[1]);const a=Number(t[2]),r=Number(t[3]||0),i=(t[4]||"").toUpperCase();return i==="PM"&&n<12&&(n+=12),i==="AM"&&n===12&&(n=0),{hh:n,mm:a,ss:r}}function $u(e){var d;if(!e)return null;const t=e.scheduledAt??e.startTime??e.dateTime??e.date??e.matchDate;if(t&&typeof t=="object"){if(typeof t.toDate=="function"){const h=t.toDate();return isNaN((d=h==null?void 0:h.getTime)==null?void 0:d.call(h))?null:h}if(typeof t.seconds=="number"){const h=new Date(t.seconds*1e3);return isNaN(h.getTime())?null:h}}const n=String(t||"").trim();if(!n)return null;const a=String(e.time??e.matchTime??"").trim(),r=qr(a),i=qr(n),s=r||i||{hh:9,mm:0,ss:0},o=n.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:$|[^\d])/);if(o){if(/[T]\d{2}:\d{2}/.test(n)&&/(?:Z|[+-]\d{2}:?\d{2})$/i.test(n)&&!r){const h=new Date(n);if(!isNaN(h.getTime()))return h}return new Date(Number(o[1]),Number(o[2])-1,Number(o[3]),s.hh,s.mm,s.ss,0)}const l=n.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);if(l)return new Date(Number(l[3]),Number(l[2])-1,Number(l[1]),s.hh,s.mm,s.ss,0);const c=a&&!/\d{1,2}:\d{2}/.test(n)?`${n} ${a}`:n,f=new Date(c);return isNaN(f.getTime())?null:(r&&!/\d{1,2}:\d{2}/.test(n)?f.setHours(r.hh,r.mm,r.ss,0):!r&&!i&&f.setHours(9,0,0,0),f)}function Sn(e){if(!e)return"UPCOMING";const t=String(e.matchStatus||e.status||"").trim().toUpperCase();if(/\bLIVE\b/.test(t))return"LIVE";if(/CANCEL/.test(t))return"CANCELLED";if(/^(COMPLETED|RESULT|FINISHED|WON|LOST|DRAW|TIE|NO RESULT)$/.test(t))return"COMPLETED";if(/^(UPCOMING|SCHEDULED|FIXTURE|NEXT)$/.test(t))return e.result&&!/CANCEL/i.test(String(e.result))?"COMPLETED":"UPCOMING";const n=[t,e.result,e.note].filter(Boolean).join(" ").toUpperCase();return/CANCEL/.test(n)?"CANCELLED":/COMPLETED|RESULT|FINISHED|\bRDM\s*WON\b|\bRDM\s*LOST\b|\bLOST\b|\bDRAW\b|\bTIE\b|\bNO\s*RESULT\b/.test(n)||String(e.ourScore||"").trim()&&String(e.oppScore||"").trim()?"COMPLETED":"UPCOMING"}function Mt(e){const t=String(e||"").trim();if(!t)return null;const n=t.match(/(\d{1,4})(?:\s*[\/\-]\s*(\d{1,2}))?/);return n?{runs:Number(n[1])||0,wickets:n[2]!==void 0?Number(n[2]):null}:null}function ms(e){if(!e)return null;const t=Sn(e);if(t==="CANCELLED"||t==="UPCOMING"||t==="LIVE")return null;const n=String(e.opponent||"").trim().toUpperCase(),a=f=>{const d=String(f||"").trim().toUpperCase();if(!d)return null;if(/\bNO\s*RESULT\b|\bN\/?R\b|\bABANDONED\b/.test(d))return"NO_RESULT";if(/\bTIE\b|\bTIED\b|\bDRAW\b|\bDRAWN\b/.test(d))return"TIE";if(/\bRDM\s*LOST\b|\bOPPONENT\s*WON\b|\bLOST\b|\bLOSS\b|\bDEFEAT\b/.test(d)||n&&d.includes(n)&&/\b(?:WON|WIN|VICTORY)\b/.test(d)&&!/\bRDM\b/.test(d))return"LOSS";const h=d.match(/^(.*?)\b(?:WON|WIN|VICTORY)\b/);if(h){const m=h[1].replace(/[^A-Z0-9 ]+/g," ").trim();return!m||/\b(?:RDM|WE|OUR|TEAM|HOME)\b/.test(m)?"WIN":"LOSS"}return null},r=a(e.result);if(r)return r;const i=a(e.status||e.matchStatus);if(i)return i;const s=String(e.note||"").replace(/\b(?:won|win|lost)\s+(?:the\s+)?toss\b/gi," "),o=a(s);if(o)return o;const l=Mt(e.ourScore),c=Mt(e.oppScore);return l&&c?l.runs>c.runs?"WIN":l.runs<c.runs?"LOSS":"TIE":null}function ys(e){const t=Array.isArray(e)?e:[],n={ALL:t.length,UPCOMING:0,LIVE:0,COMPLETED:0,CANCELLED:0};let a=0,r=0,i=0,s=0,o=null;const l=[];t.forEach((P,$)=>{var O;const N=Sn(P);N==="LIVE"?n.LIVE++:N==="COMPLETED"?n.COMPLETED++:N==="CANCELLED"?n.CANCELLED++:n.UPCOMING++;const L=ms(P);if(L==="WIN"?a++:L==="LOSS"?r++:L==="TIE"?i++:L==="NO_RESULT"&&s++,L==="WIN"||L==="LOSS"||L==="TIE"||L==="NO_RESULT"){const x=$u(P),F=(x==null?void 0:x.getTime())||Number(P.createdMs||0)||t.length-$,B=String(P.date||P.matchDate||"").trim();let H="";if(x&&!isNaN(x.getTime()))H=x.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});else if(B)H=B;else if(P.updatedAt&&typeof P.updatedAt.toDate=="function"){const U=P.updatedAt.toDate();isNaN((O=U==null?void 0:U.getTime)==null?void 0:O.call(U))||(H=U.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}))}else Number(P.createdMs||0)>0&&(H=new Date(Number(P.createdMs)).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}));const E=L==="WIN"?"W":L==="LOSS"?"L":L==="TIE"?"T":"NR";l.push({code:E,outcome:L,ts:F,date:B,dateLabel:H||"Result logged",opponent:String(P.opponent||"Opponent").trim()||"Opponent",venue:String(P.venueName||P.venue||"").trim(),potm:String(P.potm||"").trim(),ourScore:String(P.ourScore||"").trim(),oppScore:String(P.oppScore||"").trim(),result:String(P.result||P.margin||P.note||"").trim()})}if(N==="COMPLETED"||N==="LIVE"){const x=Mt(P.ourScore);x&&x.runs>=0&&String(P.ourScore||"").trim()&&(!o||x.runs>o.runs||x.runs===o.runs&&(x.wickets??99)<(o.wickets??99))&&(o={runs:x.runs,wickets:x.wickets,display:String(P.ourScore).trim(),opponent:P.opponent||"Opponent"})}});const c=n.COMPLETED,f=a+r+i,d=f>0?f:c>s?c-s:0,h=d>0?Math.round(a/d*1e3)/10:null,m=h===null?"—":Number.isInteger(h)?`${h}%`:`${h.toFixed(1)}%`;l.sort((P,$)=>$.ts-P.ts);let b=0;for(const P of l)if(P.outcome!=="NO_RESULT")if(P.outcome==="WIN")b++;else break;const _=l.slice(0,5);let w=0,g=0;const k=[...l.slice(0,8)].reverse().map((P,$)=>{P.outcome==="WIN"?(w++,g++):(P.outcome==="LOSS"||P.outcome==="TIE")&&g++;const N=g>0?Math.round(w/g*1e3)/10:w>0?100:50;return{...P,index:$+1,runningWinPct:N}});return{totalFixtures:n.ALL,played:c,upcoming:n.UPCOMING,live:n.LIVE,cancelled:n.CANCELLED,wins:a,losses:r,ties:i,noResult:s,decided:f,winStreak:b,winPctNum:h,winPctText:m,highestScore:o,recentForm:_,recentTrend:k}}function bs(e){const t=(e||[]).filter(i=>{const s=Sn(i);return s==="CANCELLED"?!1:s==="COMPLETED"||!!(i.result||i.ourScore||i.oppScore||i.potm)});if(!t.length)return null;const n=t.find(i=>i.isBestMatch===!0||i.bestMatch===!0);if(n)return{match:n,reason:"Featured Best Match · Selected by Team Management",completedCount:t.length};const r=t.map((i,s)=>{const o=Mt(i.ourScore),l=Mt(i.oppScore),f=ms(i)==="WIN",d=(o==null?void 0:o.runs)||0,h=(l==null?void 0:l.runs)||0,m=d+h,b=o&&l?Math.abs(d-h):null,_=b!==null&&b<=15,w=f&&b!==null&&b>=40;let g=0;f&&(g+=1e3),g+=m,_&&(g+=120),w&&(g+=80),i.potm&&(g+=60),i.batting&&(g+=40),i.bowling&&(g+=40);let k="Top Logged Match Result";return f&&_?k="Thriller Victory · Narrow Margin Contest":f&&w?k="Commanding RDM Victory":f&&d>0?k=`RDM Victory · ${d} Runs Scored`:i.potm?k=`Standout Performance · POTM ${v(i.potm)}`:m>0&&(k=`High-Scoring Match · ${m} Combined Runs`),{match:i,pts:g,reason:k,idx:s}}).sort((i,s)=>s.pts-i.pts||i.idx-s.idx)[0];return{match:r.match,reason:r.reason,completedCount:t.length}}function Xa(e,t,n,a){var o;const r=l=>String(l||"").toLowerCase().replace(/[^a-z0-9]/g,""),s=[...(e||[]).map(l=>{const c=(t||[]).filter(g=>g.playerId===l.id).reduce((g,k)=>{["matches","runs","wickets","fours","sixes","fifties","hundreds","runOuts"].forEach($=>{g[$]=Ue(g[$])+Ue(k[$])}),g.highScore=Math.max(Ue(g.highScore),Ue(k.highScore)),g.strikeRate=Math.max(Ue(g.strikeRate),Ue(k.strikeRate));const P=Ue(k.economy);return P>0&&(g.economy=g.economy>0?Math.min(g.economy,P):P),k.bestBowling&&(g.bestBowling=k.bestBowling),g},{matches:0,runs:0,wickets:0,highScore:0,fours:0,sixes:0,fifties:0,hundreds:0,runOuts:0,strikeRate:0,economy:0,bestBowling:""}),f=r(l.name),d=r(l.id),h=(n||[]).filter(g=>{const k=r(g.potm);return k&&(f&&k.includes(f)||d&&k.includes(d))}).length,m=(a||[]).filter(g=>{if(!/player of the match|potm/i.test(`${g.title||""} ${g.detail||""}`))return!1;const k=r(g.playerName);return k&&(f&&k.includes(f)||d&&k.includes(d))}).length,b=Math.max(h,m),_=c.runs*1+c.fours*1+c.sixes*2+c.fifties*15+c.hundreds*35+c.wickets*22+c.runOuts*8+b*30,w=c.matches>0||c.runs>0||c.wickets>0||c.highScore>0||c.fours>0||c.sixes>0||c.runOuts>0||b>0;return{p:l,s:c,potmCount:b,mvpPoints:_,hasPerformance:w}})].sort((l,c)=>c.mvpPoints-l.mvpPoints||c.s.runs-l.s.runs||c.s.wickets-l.s.wickets||c.potmCount-l.potmCount||c.s.matches-l.s.matches);return{ranked:s,bestPlayer:(o=s[0])!=null&&o.hasPerformance?s[0]:null}}function gs(e,t){const n=String(e||"").trim();if(!n||!Array.isArray(t)||!t.length)return null;const a=o=>String(o||"").toLowerCase().replace(/[^a-z0-9]/g,""),r=a(n);if(!r)return null;const i=t.find(o=>a(o.id)===r||a(o.name)===r);if(i)return i;const s=t.filter(o=>{const l=a(o.name),c=a(o.id);return l&&(r.includes(l)||l.includes(r))||c&&r.includes(c)});return s.sort((o,l)=>a(l.name).length-a(o.name).length),s[0]||null}function Et(e=1,t="Player of the Match"){const n=Number(e)>1;return`<span class="rdmPotmPortraitBadge${n?" has-count":""}" title="${p(t)}" aria-label="${p(t)}"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.85 5.77 6.37.93-4.61 4.49 1.09 6.35L12 17.04l-5.7 3 1.09-6.35-4.61-4.49 6.37-.93L12 2.5z"/></svg>${n?`<span>${p(String(e))}×</span>`:""}</span>`}function Ya(e="Player of the Match"){return`<span class="rdmPotmInlineTag"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.85 5.77 6.37.93-4.61 4.49 1.09 6.35L12 17.04l-5.7 3 1.09-6.35-4.61-4.49 6.37-.93L12 2.5z"/></svg>${p(e)}</span>`}function Ct(e,t=""){const n=sa(e,t),a=n===t||n===R.logoPath;return{src:n,isCrest:a}}function xu(e,t){if(!e||!ku)return;const n=Array.isArray(t==null?void 0:t.recentTrend)?t.recentTrend:[],a=yi(e);a.selectAll("svg.matchTrendSvg").remove();const r=680,i=168,s={top:20,right:24,bottom:32,left:42},o=r-s.left-s.right,l=i-s.top-s.bottom,c=a.insert("svg",".matchTrendTooltip").attr("class","matchTrendSvg").attr("viewBox",`0 0 ${r} ${i}`).attr("preserveAspectRatio","xMidYMid meet").attr("role","img").attr("aria-label",n.length?`D3 win/loss trend chart across last ${n.length} completed matches`:"Win/loss trend chart awaiting completed matches"),f=c.append("defs"),d="rdmTrendAreaGrad",h=f.append("linearGradient").attr("id",d).attr("x1","0%").attr("y1","0%").attr("x2","0%").attr("y2","100%");h.append("stop").attr("offset","0%").attr("stop-color","var(--success-text)").attr("stop-opacity",.28),h.append("stop").attr("offset","55%").attr("stop-color","var(--brand-blue)").attr("stop-opacity",.08),h.append("stop").attr("offset","100%").attr("stop-color","var(--brand-blue)").attr("stop-opacity",0);const m=c.append("g").attr("transform",`translate(${s.left},${s.top})`),b=Ha().domain([0,100]).range([l,0]);m.selectAll("line.rdmD3Grid").data([0,50,100]).join("line").attr("class",A=>A===50?"rdmD3Grid rdmD3Baseline":"rdmD3Grid").attr("x1",0).attr("x2",o).attr("y1",A=>b(A)).attr("y2",A=>b(A));const _=oi(b).tickValues([0,50,100]).tickFormat(A=>`${A}%`).tickSize(0).tickPadding(8);if(m.append("g").attr("class","rdmD3Axis").call(_).select(".domain").remove(),!n.length){const A=["M1","M2","M3","M4","M5"],T=aa().domain(A).range([28,o-28]);m.selectAll("text.rdmD3XLabel").data(A).join("text").attr("class","rdmD3XLabel").attr("x",q=>T(q)).attr("y",l+20).attr("text-anchor","middle").text(q=>q),m.append("text").attr("class","rdmD3Empty").attr("x",o/2).attr("y",b(50)-10).attr("text-anchor","middle").text("No completed matches logged in Firestore yet");return}const g=n.map((A,T)=>T),k=aa().domain(g).range(n.length===1?[o/2,o/2]:[30,o-30]),P=Math.min(34,Math.max(18,o/Math.max(n.length*2.2,6))),$=A=>A.code==="W"?l*.86:A.code==="T"?l*.52:A.code==="NR"?l*.36:l*.24,N=A=>A.code==="W"?"is-win":A.code==="L"?"is-loss":A.code==="T"?"is-tie":"is-nr";if(m.selectAll("rect.rdmD3Stem").data(n).join("rect").attr("class",A=>`rdmD3Stem ${N(A)}`).attr("x",(A,T)=>k(T)-P/2).attr("y",A=>l-$(A)).attr("width",P).attr("height",A=>$(A)).attr("rx",5),n.length>1){const A=ds().x((q,de)=>k(de)).y0(l).y1(q=>b(q.runningWinPct)).curve(ia);m.append("path").datum(n).attr("class","rdmD3Area").attr("fill",`url(#${d})`).attr("d",A);const T=Va().x((q,de)=>k(de)).y(q=>b(q.runningWinPct)).curve(ia);m.append("path").datum(n).attr("class","rdmD3Line").attr("d",T)}const L=A=>{const T=v(A||"Opp");return T.length>10?T.slice(0,9)+"…":T};m.selectAll("text.rdmD3XLabel").data(n).join("text").attr("class",(A,T)=>`rdmD3XLabel${T===n.length-1?" is-latest":""}`).attr("x",(A,T)=>k(T)).attr("y",l+20).attr("text-anchor","middle").text((A,T)=>`M${T+1} · ${L(A.opponent)}`);const O=m.append("line").attr("class","rdmD3Guide").attr("y1",0).attr("y2",l).style("opacity",0),x=e.querySelector(".matchTrendTooltip"),F=A=>{if(m.selectAll("rect.rdmD3Stem").classed("is-hovered",(T,q)=>q===A),m.selectAll("g.rdmD3Node").classed("is-hovered",(T,q)=>q===A),A>=0&&A<n.length){const T=k(A);O.attr("x1",T).attr("x2",T).style("opacity",1)}else O.style("opacity",0)},B=(A,T)=>{if(!x)return;F(T);const q=v(A.opponent||"Opponent"),de=A.dateLabel||A.date||"Result logged",ve=A.venue?v(A.venue):"",ae=A.ourScore||A.oppScore?`RDM ${A.ourScore||"—"} vs ${A.oppScore||"—"}`:"",S=A.code==="W"?"WIN":A.code==="L"?"LOSS":A.code==="T"?"TIE":"NR",I=A.result?v(A.result):A.code==="W"?"RDM Won":A.code==="L"?"RDM Lost":A.code==="T"?"Match Tied":"No Result",D=[`<div class="matchTrendTipRow"><span>Opponent</span><strong>${p(q)}</strong></div>`,`<div class="matchTrendTipRow"><span>Date</span><strong>${p(de)}</strong></div>`];ve&&D.push(`<div class="matchTrendTipRow"><span>Venue</span><strong>${p(ve)}</strong></div>`),ae&&D.push(`<div class="matchTrendTipRow"><span>Score</span><strong>${p(ae)}</strong></div>`);const V=A.potm?`<span>POTM: <b>${p(v(A.potm))}</b></span>`:"";x.innerHTML=`<div class="matchTrendTipHead"><b class="matchTrendTipBadge ${N(A)}">${p(S)}</b><span class="matchTrendTipMatchNum">Match ${T+1} of ${n.length}</span></div><div class="matchTrendTipDetails">${D.join("")}</div><div class="matchTrendTipMeta">${p(I)}</div><div class="matchTrendTipFoot"><span>Win Rate: <b>${p(String(A.runningWinPct))}%</b></span>${V}</div>`,x.hidden=!1;const G=(s.left+k(T))/r*100,X=(s.top+b(A.runningWinPct))/i*100,K=X<50;x.classList.toggle("is-below",K),x.style.left=`${Math.min(78,Math.max(22,G))}%`,x.style.top=K?`${Math.min(84,X+11)}%`:`${Math.max(14,X-9)}%`},H=()=>{F(-1),x&&(x.hidden=!0,x.classList.remove("is-below"))},E=n.length>1?(o-60)/(n.length-1):o,U=n.length>1?Math.max(44,E):o;m.selectAll("rect.rdmD3ColHit").data(n).join("rect").attr("class","rdmD3ColHit").attr("x",(A,T)=>k(T)-U/2).attr("y",0).attr("width",U).attr("height",l).on("mouseenter",function(A,T){B(T,n.indexOf(T))}).on("click",function(A,T){const q=n.indexOf(T);x&&!x.hidden&&x.dataset.activeIdx===String(q)?(H(),delete x.dataset.activeIdx):(x&&(x.dataset.activeIdx=String(q)),B(T,q))});const j=m.selectAll("g.rdmD3Node").data(n).join("g").attr("class",(A,T)=>`rdmD3Node ${N(A)}${T===n.length-1?" is-latest":""}`).attr("transform",(A,T)=>`translate(${k(T)},${b(A.runningWinPct)})`).attr("tabindex","0").attr("role","button").attr("aria-label",(A,T)=>`Match ${T+1}, Opponent ${v(A.opponent)}, Date ${A.dateLabel||"logged date"}, Result ${A.code}, running win rate ${A.runningWinPct}%`);j.append("circle").attr("class","rdmD3Hit").attr("r",16),j.append("circle").attr("class","rdmD3Dot").attr("r",(A,T)=>T===n.length-1?7:5.5),j.append("text").attr("class","rdmD3NodeCode").attr("y",-11).attr("text-anchor","middle").text(A=>A.code),j.on("mouseenter focus",function(A,T){B(T,n.indexOf(T))}).on("click",function(A,T){const q=n.indexOf(T);x&&!x.hidden&&x.dataset.activeIdx===String(q)?(H(),delete x.dataset.activeIdx):(x&&(x.dataset.activeIdx=String(q)),B(T,q))}).on("blur",()=>{x&&delete x.dataset.activeIdx,H()}),c.on("mouseleave",()=>{x&&delete x.dataset.activeIdx,H()})}const Ja=[{id:"royal",label:"Royal Cobalt",desc:"Crisp Daylight Frost & Midnight Cobalt",swatches:["#F5F7FB","#FFFFFF","#1D4ED8"]},{id:"floodlight",label:"Floodlight Navy",desc:"Deep Stadium Navy & Championship Gold",swatches:["#070C18","#0F172A","#2563EB"]},{id:"emerald",label:"Pavilion Emerald",desc:"Classic Turf Mint & Pavilion Emerald",swatches:["#F6F9F7","#FFFFFF","#0F5132"]},{id:"crimson",label:"Test Crimson",desc:"Editorial Chalk & Cricket Leather Crimson",swatches:["#FAF7F6","#FFFFFF","#9F1239"]}],y={screen:"public",portalMode:"public",portalPlayerId:null,publicTab:"home",matchesSubTab:"fixtures",matchesStatusFilter:"ALL",galleryAlbum:"ALL",squadQuery:"",squadFilter:"ALL",detailPlayerId:null,morePage:"news",adminTab:"overview",playerAuthTab:"password",playerAuthSelectedId:"RDM001",drawerOpen:!1,theme:Eu(),loginError:"",loginBusy:!1,playerLoginError:"",playerLoginBusy:!1,lastBackPressAt:0},W=[];function vs(){return{screen:y.screen,publicTab:y.publicTab,matchesSubTab:y.matchesSubTab,detailPlayerId:y.detailPlayerId,morePage:y.morePage,adminTab:y.adminTab,playerAuthSelectedId:y.playerAuthSelectedId}}function Mu(e,t){return e&&t&&e.screen===t.screen&&e.publicTab===t.publicTab&&e.matchesSubTab===t.matchesSubTab&&e.detailPlayerId===t.detailPlayerId&&e.morePage===t.morePage&&e.adminTab===t.adminTab&&e.playerAuthSelectedId===t.playerAuthSelectedId}function at(e){return e.screen==="playerDetail"&&e.detailPlayerId?`#player-${e.detailPlayerId}`:e.screen==="subpage"?`#section-${e.morePage}`:e.screen==="playerPortal"&&y.portalPlayerId?`#portal-${y.portalPlayerId}`:e.screen==="playerAuth"?"#player-login":e.screen==="portalAuth"?"#portal-verify":e.screen==="admin"?`#admin-${e.adminTab}`:`#${e.publicTab||"home"}`}function Qa(e){y.screen=e.screen,y.publicTab=e.publicTab||"home",y.matchesSubTab=e.matchesSubTab||"fixtures",y.detailPlayerId=e.detailPlayerId||null,y.morePage=e.morePage||"news",y.adminTab=e.adminTab||"overview",e.playerAuthSelectedId&&(y.playerAuthSelectedId=e.playerAuthSelectedId),y.drawerOpen=!1,C(),window.scrollTo({top:0,behavior:"auto"})}function z(e,{push:t=!0,replace:n=!1}={}){if(e.screen==="admin"&&(J()||(e={...e,screen:"portalAuth"})),e.screen==="playerPortal"){const i=e.portalPlayerId||y.portalPlayerId||De();!i||!ut(i)&&!J()?e={screen:"playerAuth",playerAuthSelectedId:i||y.playerAuthSelectedId||"RDM001"}:(y.portalMode="player",y.portalPlayerId=i)}e.screen,e.screen;const a={...vs(),...e},r=W[W.length-1];if(!Mu(r,a)){if(n&&W.length>0){W[W.length-1]=a;try{window.history.replaceState({rdmIdx:W.length-1},"",at(a))}catch{}}else if(t||W.length===0){W.push(a),W.length>24&&W.shift();try{window.history.pushState({rdmIdx:W.length-1},"",at(a))}catch{}}}Qa(a)}function Ce(e){y.drawerOpen=!!e;const t=document.getElementById("drawerOverlay");if(t){const n=t.querySelector(".drawerPanel");n&&(n.style.transform=""),t.classList.remove("dragging"),t.classList.toggle("open",y.drawerOpen),t.setAttribute("aria-hidden",y.drawerOpen?"false":"true")}else C()}function ws(){if(qn())return ei(),!0;if(y.drawerOpen)return Ce(!1),!0;if(W.length>1){W.pop();const e=W[W.length-1];try{window.history.replaceState({rdmIdx:W.length-1},"",at(e))}catch{}return Qa(e),!0}return!1}function _s(e){return e==="leather"||e==="turf"||e==="azure"||e==="alabaster"||e==="daylight"?"royal":e==="carbon"||e==="night"?"floodlight":e==="copper"?"crimson":Ja.some(t=>t.id===e)?e:"royal"}function Eu(){try{const e=localStorage.getItem("rdm-app-theme")||"royal",t=_s(e);return t!==e&&localStorage.setItem("rdm-app-theme",t),t}catch{return"royal"}}function Ss(e){var t;return((t=Ja.find(n=>n.id===e))==null?void 0:t.label)||"Royal Cobalt"}function Wt(e){const t=_s(e);y.theme=t,document.documentElement.setAttribute("data-theme",t);try{localStorage.setItem("rdm-app-theme",t)}catch{}Gr(t),C()}function te(){return u.brandLogo||R.logoPath}function un(){return ie(u.apkDownloadUrl)||R.apkDownloadUrl}function Cu(){return ie(u.apkReleasesUrl)||R.apkReleasesUrl}function pn(){return String(u.nativeVersionName||u.appVersion||le.versionName||R.appVersion||"1.3.0").replace(/^v/i,"")}function ft(e){const t=sa(e,te()),n=t===te()||t===R.logoPath;return{src:t,cls:n?"avatarCircle is-crest":"avatarCircle is-photo"}}function Ae(e){return{home:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/></svg>',squad:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',matches:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',gallery:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>',more:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>'}[e]||""}function Ps(e){return{home:Ae("home"),squad:Ae("squad"),matches:Ae("matches"),gallery:Ae("gallery"),more:Ae("more"),xi:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',records:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',tournaments:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 8.5 15.5 15.5"/><path d="M15.5 8.5 8.5 15.5"/></svg>',honours:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',news:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',updates:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',socials:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',about:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',download:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>'}[e]||""}function xe({title:e="RDM Official",showBack:t=!1,showPublicNav:n=!0,rightActionHtml:a=""}){const r=[["home","Home"],["squad","Squad"],["matches","Matches"],["gallery","Gallery"],["more","More"]],i=t?`<button type="button" class="menuCircleBtn" id="btnStepBack" aria-label="Go back">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
       </button>`:`<button type="button" class="menuCircleBtn" id="btnOpenDrawer" aria-label="Open team menu">
         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
       </button>`,s=a||'<button type="button" class="topActionBtn" id="btnPickTheme">Theme</button>';return`
    <header class="topBar">
      <div class="topBarInner">
        <div class="topLeftGroup">
          ${i}
          <button type="button" class="topBrand" id="btnBrandHome" aria-label="RDM Official Home">
            <img src="${p(te())}" alt="RDM Crest" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'">
            <span class="topBrandText">${p(e)}</span>
          </button>
        </div>
        ${n?`
          <nav class="topDesktopNav" aria-label="Primary navigation">
            ${r.map(([o,l])=>`
              <button type="button" class="topNavLink ${y.screen==="public"&&y.publicTab===o?"active":""}" data-public-tab="${o}">${l}</button>
            `).join("")}
          </nav>
        `:"<div></div>"}
        <div class="topBarActions">
          ${s}
        </div>
      </div>
    </header>
  `}function Tu(){const e=[["xi","Playing XI"],["records","Team Records"],["tournaments","Tournaments & H2H"],["honours","Team Honours"],["news","Team News"],["updates","Official Updates"],["socials","Channels & Contact"],["about","About RDM"],["download","Get Android App"]],t=pa(),n=`<button type="button" class="btnPrimary btnSm btnFull" id="btnOpenPlayerPortal">${t?`My Portal · ${p(v(t.name))}`:"Player Login"}</button>`,a=`<button type="button" class="btnSecondary btnSm btnFull" id="btnOpenAdminPortal">${J()?"Open Admin Console":"Admin Panel"}</button>`;return`
    <div class="drawerOverlay ${y.drawerOpen?"open":""}" id="drawerOverlay" role="dialog" aria-modal="true" aria-hidden="${y.drawerOpen?"false":"true"}" aria-label="Team navigation menu">
      <aside class="drawerPanel" id="drawerPanel">
        <div class="drawerHeader">
          <div class="drawerBrandLockup">
            <img src="${p(te())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'">
            <div>
              <strong>RDM Official</strong>
              <span>Cricket Team · Mahuawan, Bihar</span>
            </div>
          </div>
        </div>

        <div class="drawerBody">
          <div class="drawerGroupLabel">Team Sections</div>
          ${e.map(([r,i])=>`
            <button type="button" class="drawerNavBtn ${y.screen==="subpage"&&y.morePage===r?"active":""}" data-open-subpage="${r}">
              <span class="drawerNavLeft">
                <span class="drawerNavIcon" aria-hidden="true">${Ps(r)}</span>
                <span>${i}</span>
              </span>
              <span aria-hidden="true">›</span>
            </button>
          `).join("")}
        </div>

        <div class="drawerFooter">
          <button type="button" class="btnSecondary btnSm btnFull" id="btnDrawerTheme">Theme · ${p(Ss(y.theme))}</button>
          ${n}
          ${a}
        </div>
      </aside>
    </div>
  `}function Tt(){const e=pa();return`
    <footer class="webFooter">
      <div class="webFooterInner">
        <div class="webFooterBrand">
          <img src="${p(te())}" alt="RDM Logo" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'">
          <div>
            <strong>${p(v(R.orgName))}</strong>
            <span>${p(R.location)} · Est. ${p(R.founded)}</span>
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
          <button type="button" class="webFooterLink" data-ext-url="${p(R.captainContactUrl)}">WhatsApp Captain ↗</button>
          ${`<button type="button" class="webFooterLink" id="btnFooterPlayerPortal">${e?"My Player Portal":"Player Login"}</button>`}
          <button type="button" class="webFooterLink" id="btnFooterAdminPortal">Admin Panel</button>
        </div>
      </div>
    </footer>
  `}function Ru(){return`
    <nav class="bottomNav" aria-label="Mobile navigation">
      <div class="bottomNavGrid">
        ${[["home","Home"],["squad","Squad"],["matches","Matches"],["gallery","Gallery"],["more","More"]].map(([t,n])=>`
          <button type="button" class="navTabBtn ${y.screen==="public"&&y.publicTab===t?"active":""}" data-public-tab="${t}" aria-current="${y.screen==="public"&&y.publicTab===t?"page":"false"}">
            <span class="navIconPill">${Ae(t)}</span>
            <span>${n}</span>
          </button>
        `).join("")}
      </div>
    </nav>
  `}function As(e,{compact:t=!1}={}){if(!e||!e.match)return`
      <article class="spotlightCard">
        <span class="spotlightKicker">Best Match Spotlight</span>
        <h3 class="spotlightTitle">No Completed Match Logged Yet</h3>
        <p class="spotlightMeta">Once match scorecards or results are recorded, RDM's standout match will be highlighted here automatically.</p>
        <div class="spotlightActions">
          <button type="button" class="btnSecondary btnSm" data-public-tab="matches">Open Match Centre</button>
        </div>
      </article>
    `;const n=e.match,a=[n.date,n.matchType,n.venueName||n.venue].filter(Boolean).map(v).join(" · "),r=[n.result,n.margin].filter(Boolean).map(v).join(" · ")||v(n.note||"Completed Match"),i=n.potm?gs(n.potm,u.players):null,s=v(i?i.name:n.potm||""),o=Ct((i==null?void 0:i.image)||"",te()),l=n.potm?`
    <div class="spotlightPotmRow${i?" is-clickable":""}"${i?` role="button" tabindex="0" data-open-player="${p(i.id)}"`:""}>
      <div class="rdmPortraitWrap spotlightPotmPortrait">
        <img class="spotlightPotmAvatar avatarCircle ${o.isCrest?"is-crest":"is-photo"}" src="${p(o.src)}" alt="${p(s)} — Player of the Match" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'">
        ${Et(1,`Player of the Match: ${s}`)}
      </div>
      <div class="spotlightPotmMeta">
        ${Ya("Player of the Match")}
        <strong>${p(s)}</strong>
        ${i!=null&&i.role?`<small>${p(v(i.role))}</small>`:""}
      </div>
    </div>
  `:"";return`
    <article class="spotlightCard">
      <div class="spotlightHeadRow">
        <div>
          <span class="spotlightKicker">Best Match · ${p(e.reason)}</span>
          <h3 class="spotlightTitle">RDM vs ${p(v(n.opponent||"Opponent"))}</h3>
        </div>
      </div>
      ${a?`<p class="spotlightMeta num">${p(a)}</p>`:""}
      ${l}
      ${n.ourScore||n.oppScore?`
        <div class="spotlightScoreStrip">
          <div class="spotlightScoreCell">
            <span>RDM Score</span>
            <strong class="num">${p(n.ourScore||"—")}${n.ourOvers?` (${p(n.ourOvers)} ov)`:""}</strong>
          </div>
          <div class="spotlightScoreCell">
            <span>${p(v(n.opponent||"Opponent"))}</span>
            <strong class="num">${p(n.oppScore||"—")}${n.oppOvers?` (${p(n.oppOvers)} ov)`:""}</strong>
          </div>
        </div>
      `:""}
      <p class="spotlightVerdict">${p(r)}</p>
      <div class="spotlightActions">
        <button type="button" class="btnSecondary btnSm" data-public-tab="matches">View Match Centre</button>
        ${t?"":'<button type="button" class="btnPrimary btnSm" data-compare-players="">Compare Players</button>'}
      </div>
    </article>
  `}function Lu(){const e=bs(u.matches),n=Xa(u.players,u.stats,u.matches,u.achievements).bestPlayer;let a="";if(n){const r=Ct(n.p.image,te()),i=n.potmCount>0?Et(n.potmCount,`${n.potmCount}× Player of the Match`):"",s=n.potmCount>0?Ya(`${n.potmCount}× Player of the Match`):"",o=he[n.p.id]||n.p.id;a=`
      <article class="spotlightCard">
        <span class="spotlightKicker">All-Time Best Performer · MVP</span>
        <div class="mvpHeroRow">
          <div class="rdmPortraitWrap mvpPortraitWrap" role="button" tabindex="0" data-open-player="${p(n.p.id)}">
            <img class="mvpAvatar avatarCircle ${r.isCrest?"is-crest":"is-photo"}" src="${p(r.src)}" alt="${p(n.p.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'">
            ${i}
          </div>
          <div class="mvpIdentity">
            <small class="num">${p(n.p.id)} · ${p(o)} · ${p(String(n.mvpPoints))} MVP Pts</small>
            <h3 class="spotlightTitle">${p(v(n.p.name))}</h3>
            <b>${p(v(n.p.role))}</b>
            ${s}
          </div>
        </div>
        <div class="mvpStatsStrip">
          <div class="mvpStatCell"><strong class="num">${n.s.matches}</strong><span>Matches</span></div>
          <div class="mvpStatCell"><strong class="num">${n.s.runs}</strong><span>Runs</span></div>
          <div class="mvpStatCell"><strong class="num">${n.s.wickets}</strong><span>Wickets</span></div>
          <div class="mvpStatCell"><strong class="num">${n.potmCount}</strong><span>POTM</span></div>
        </div>
        <div class="spotlightActions">
          <button type="button" class="btnSecondary btnSm" data-open-player="${p(n.p.id)}">View Profile</button>
          <button type="button" class="btnPrimary btnSm" data-compare-players="${p(n.p.id)}">Compare Players</button>
        </div>
      </article>
    `}else a=`
      <article class="spotlightCard">
        <span class="spotlightKicker">All-Time Best Performer · MVP</span>
        <h3 class="spotlightTitle">Compare Any Two Players</h3>
        <p class="spotlightMeta">Player impact rankings unlock automatically as match stats and POTM awards are logged. Compare squad members anytime.</p>
        <div class="spotlightActions">
          <button type="button" class="btnPrimary btnSm" data-compare-players="">Compare Players</button>
          <button type="button" class="btnSecondary btnSm" data-open-subpage="records">Team Records</button>
        </div>
      </article>
    `;return`
    <section aria-label="Best Match and Best Player highlights">
      <div class="sectionHeader" style="margin-bottom:12px;">
        <div>
          <span class="sectionKicker">Match &amp; Squad Spotlight</span>
          <h2 class="sectionTitle">Best Match &amp; MVP Highlights</h2>
        </div>
        <button type="button" class="btnGhost btnSm" data-compare-players="">Compare ›</button>
      </div>
      <div id="homePerformanceHighlights" class="homeHighlightsGrid">
        ${As(e,{compact:!0})}
        ${a}
      </div>
    </section>
  `}function Nu(){const e=u.matches.find(c=>!/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${c.matchStatus||""} ${c.status||""} ${c.note||""}`)),t=u.matches.find(c=>/RESULT|COMPLETED|FINISHED|WON|LOST|DRAW/i.test(`${c.matchStatus||""} ${c.status||""} ${c.note||""}`)),n=u.updates.find(c=>c.pinned)||u.updates[0],a=u.news.find(c=>c.pinned)||u.news[0],r=n||a,i=u.players.find(c=>c.id==="RDM001")||u.players[0],s=u.players.find(c=>c.id==="RDM003"),o=u.players.find(c=>c.id==="RDM006"),l=[i,s,o].filter(Boolean);return`
    ${u.loadError?`<div class="infoBanner"><span>${p(u.loadError)}</span><button type="button" class="btnSecondary btnSm" id="btnRetrySync">Retry</button></div>`:""}

    <section class="heroBannerCard">
      <div class="heroPhotoLayer" aria-hidden="true">
        <img src="${p(R.heroImagePath)}" alt="" referrerPolicy="no-referrer">
      </div>
      <div class="heroBannerGrid">
        <div class="heroBannerInner">
          <div class="heroBannerTop">
            <div class="heroBannerCopy">
              <span class="heroEyebrow">OFFICIAL CRICKET TEAM · EST. ${p(R.founded)}</span>
              <h1 class="heroDisplayTitle">${p(R.orgName)}</h1>
              <p>${p(R.motto)}</p>
            </div>
          </div>
          <div class="heroBannerBottom">
            <div class="heroBannerMeta">
              <span>${p(R.locationLabel)}</span>
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
            <strong>RDM · ${p(R.founded)}</strong>
          </div>
          <div class="heroDossierStats">
            <div>
              <strong>2× MPL</strong>
              <span>Champions</span>
            </div>
            <div>
              <strong class="num">${u.players.length}</strong>
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
          <strong class="kpiValue num">${u.players.length}</strong>
          <span class="kpiLabel">Squad Players</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${Ae("squad")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-open-subpage="honours">
        <div>
          <strong class="kpiValue num">${u.honours.length}</strong>
          <span class="kpiLabel">Team Honours</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${Ps("honours")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="matches">
        <div>
          <strong class="kpiValue num">${u.matches.length}</strong>
          <span class="kpiLabel">Matches</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${Ae("matches")}</span>
      </button>
      <button type="button" class="kpiCardBtn" data-public-tab="gallery">
        <div>
          <strong class="kpiValue num">${u.gallery.length}</strong>
          <span class="kpiLabel">Gallery Photos</span>
        </div>
        <span class="kpiIconBox" aria-hidden="true">${Ae("gallery")}</span>
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
          ${e||t?ks(e||t):'<p class="sectionSub" style="margin-top:6px;">No upcoming match has been scheduled yet. Check back or contact team management.</p>'}
        </div>
      </article>

      <article class="surfaceCard">
        <div>
          <div class="sectionHeader" style="margin-bottom:12px;">
            <div>
              <span class="sectionKicker">Official Dispatch</span>
              <h2 class="sectionTitle">${r?p(v(r.title||"Team Update")):"Team Announcements"}</h2>
            </div>
            <button type="button" class="btnGhost btnSm" data-open-subpage="updates">All Updates ›</button>
          </div>
          ${r?`
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${p(v(r.text||""))}</p>
            ${r.date?`<p class="sectionSub num" style="margin-top:8px;">Published ${p(r.date)}</p>`:""}
          `:'<p class="sectionSub">Official news, fixtures, and team notices appear here when posted by team management.</p>'}
        </div>
        ${n!=null&&n.url&&ie(n.url)?`
          <div style="margin-top:14px;">
            <button type="button" class="btnSecondary btnSm" data-ext-url="${p(ie(n.url))}">Open Link ↗</button>
          </div>
        `:""}
      </article>
    </div>

    ${Lu()}

    <section>
      <div class="sectionHeader" style="margin-bottom:12px;">
        <div>
          <span class="sectionKicker">Team Leadership</span>
          <h2 class="sectionTitle">Leading the Dominators</h2>
        </div>
        <button type="button" class="btnGhost btnSm" data-public-tab="squad">Full Squad ›</button>
      </div>
      <div class="leaderRow">
        ${l.map(c=>{const f=ft(c.image);return`
            <button type="button" class="leaderCard" data-open-player="${p(c.id)}">
              <img class="${f.cls}" src="${p(f.src)}" alt="${p(c.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'">
              <div>
                <div class="leaderCardMeta">${p(v(c.role))}</div>
                <div class="leaderCardTitle">${p(v(c.name))}</div>
                ${c.detail?`<div class="leaderCardSub">${p(v(c.detail))}</div>`:""}
              </div>
            </button>
          `}).join("")}
      </div>
    </section>
  `}function ks(e){const t=v(e.matchStatus||e.status||"Match"),n=[e.date,e.time,e.venueName||e.venue].filter(Boolean).map(v).join(" · "),a=e.potm?gs(e.potm,u.players):null,r=v(a?a.name:e.potm||""),i=a?Ct(a.image,te()):null;return`
    <div>
      <div class="matchCardHead">
        <strong>RDM vs ${p(v(e.opponent||"Opponent"))}</strong>
        <span class="matchStatusText">${p(t)}</span>
      </div>
      ${n?`<div class="num" style="font-size:0.78rem;color:var(--ink-muted);margin-bottom:8px;">${p(n)}</div>`:""}
      ${e.ourScore||e.oppScore?`
        <div class="matchScoreRow num">
          <span>RDM: ${p(e.ourScore||"—")}</span>
          <span>${p(v(e.opponent||"Opp"))}: ${p(e.oppScore||"—")}</span>
        </div>
      `:""}
      ${e.result||e.note?`<p class="richText" style="margin:6px 0 0;font-size:0.84rem;color:var(--ink-secondary);">${p(v(e.result?`${e.result}${e.margin?" · "+e.margin:""}`:e.note))}</p>`:""}
      ${e.potm?a?`
        <div class="matchPotmCompact is-clickable" role="button" tabindex="0" data-open-player="${p(a.id)}">
          <div class="rdmPortraitWrap matchPotmPortrait">
            <img class="matchPotmAvatar avatarCircle ${i.isCrest?"is-crest":"is-photo"}" src="${p(i.src)}" alt="${p(r)} — Player of the Match" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'">
            ${Et(1,`Player of the Match: ${r}`)}
          </div>
          <div class="matchPotmCompactMeta">
            ${Ya("Player of the Match")}
            <strong>${p(r)}</strong>
          </div>
        </div>
      `:`<p style="margin:8px 0 0;font-size:0.8rem;font-weight:700;color:var(--brand-text);">Player of the Match: ${p(r)}</p>`:""}
    </div>
  `}function Iu(){const e=y.squadQuery.trim().toLowerCase(),t=u.players.filter(n=>{const a=String(n.role||"").toUpperCase();return y.squadFilter==="ALL"||y.squadFilter==="LEADERS"&&(a.includes("CAPTAIN")||a.includes("KEEPER"))||y.squadFilter==="ALLROUNDER"&&a.includes("ALL-ROUNDER")||y.squadFilter==="BATSMAN"&&a.includes("BATSMAN")&&!a.includes("ALL-ROUNDER")?e?`${n.name} ${n.role} ${n.detail} ${n.id} ${he[n.id]||""} ${n.jersey||""}`.toLowerCase().includes(e):!0:!1});return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Official Roster</span>
        <h2 class="sectionTitle">RDM Squad</h2>
        <p class="sectionSub"><span class="num">${u.players.length}</span> registered players</p>
      </div>
    </div>

    <input id="squadSearchInput" class="searchInput" type="search" placeholder="Search player name, role, or jersey..." value="${p(y.squadQuery)}">

    <div class="filterRow">
      ${[["ALL","All Players"],["LEADERS","Leadership"],["ALLROUNDER","All-Rounders"],["BATSMAN","Batsmen"]].map(([n,a])=>`<button type="button" class="segTab ${y.squadFilter===n?"active":""}" data-squad-filter="${n}">${a}</button>`).join("")}
    </div>

    ${t.length?`
      <div class="squadGrid">
        ${t.map(n=>{const a=he[n.id]||n.id,r=ft(n.image);return`
            <button type="button" class="playerCard" data-open-player="${p(n.id)}">
              <img class="playerCardAvatar ${r.cls}" src="${p(r.src)}" alt="${p(n.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'">
              <div class="playerCardBody">
                <span class="metaCode">${p(a)}${n.jersey?" · #"+p(n.jersey):""}</span>
                <h3>${p(v(n.name))}</h3>
                <div class="playerCardRole">${p(v(n.role))}</div>
                ${n.detail?`<div class="playerCardDetail">${p(v(n.detail))}</div>`:""}
              </div>
              <span class="chevron" aria-hidden="true">›</span>
            </button>
          `}).join("")}
      </div>
    `:'<div class="emptyState">No players match your current filter.</div>'}
  `}function Du(e){const t=e.winPctNum===null?"":e.winPctNum>=50?" is-win":" is-loss",n=e.live>0?" is-live":"",a=e.totalFixtures>0?`${e.totalFixtures} Total Fixture${e.totalFixtures===1?"":"s"}`:"Synced with Firestore",r=[`${e.losses} Lost`];e.ties>0&&r.push(`${e.ties} Tied`),e.noResult>0&&r.push(`${e.noResult} NR`);const i=e.decided>0?`${e.wins} of ${e.decided} decided`:e.played>0?"No decided results yet":"Awaiting results",s=e.winPctNum===null?0:Math.min(100,Math.max(0,e.winPctNum)),o=e.live>0?`${e.live} Live`:String(e.upcoming),l=e.live>0?"Live & Upcoming":"Upcoming Fixtures",c=e.live>0?`${e.upcoming} Scheduled Next`:e.cancelled>0?`${e.cancelled} Cancelled`:"Scheduled Next",f=e.highestScore?e.highestScore.display:"—",d=e.highestScore?`vs ${v(e.highestScore.opponent||"Opponent")}`:"Awaiting scorecards",h=e.recentTrend,m=h.filter($=>$.code==="W").length,b=h.filter($=>$.code==="L").length,_=h.filter($=>$.code==="T").length,w=h.length?`Win / Loss Trend · Last ${h.length} Match${h.length===1?"":"es"}`:"Win / Loss Trend · Recent Matches",g=h.length?`${m}W · ${b}L${_?` · ${_}T`:""} · Oldest → Latest`:"Synced from Firestore Matches",k=e.winStreak>0?"is-hot":"is-neutral",P=e.winStreak>0?`${e.winStreak}W`:e.decided>0?"0":"—";return`
    <div id="matchSummary" class="matchSummaryStrip">
      <div class="matchSummaryItem">
        <strong class="num">${e.played}</strong>
        <span>Total Matches Played</span>
        <small class="matchSummarySub">${p(a)}</small>
      </div>
      <div class="matchSummaryItem${e.wins>0?" is-win":""}">
        <strong class="num">${e.wins}</strong>
        <span>Matches Won</span>
        <small class="matchSummarySub">${p(r.join(" · "))}</small>
      </div>
      <div class="matchSummaryItem${t}">
        <strong class="num">${p(e.winPctText)}</strong>
        <span>Win Percentage</span>
        <div class="matchSummaryBar" aria-hidden="true"><i style="width:${s}%"></i></div>
        <small class="matchSummarySub">${p(i)}</small>
      </div>
      <div class="matchSummaryItem${n}">
        <strong class="num">${p(o)}</strong>
        <span>${l}</span>
        <small class="matchSummarySub">${p(c)}</small>
      </div>
      <div class="matchSummaryItem">
        <strong class="num">${p(f)}</strong>
        <span>Highest Team Score</span>
        <small class="matchSummarySub">${p(d)}</small>
      </div>
      <div class="matchSummaryFormRow">
        <div class="matchTrendHead">
          <div class="matchTrendMeta">
            <span>${p(w)}</span>
            <small class="matchSummarySub">${p(g)}</small>
          </div>
          <div class="matchTrendAside">
            <div class="matchWinStreakBadge ${k}" title="Current consecutive RDM wins from latest completed matches">
              <span>Win Streak</span>
              <strong class="num">${p(P)}</strong>
            </div>
            <div class="matchTrendLegend" aria-hidden="true">
              <span class="matchLegendItem is-win"><i></i>Win</span>
              <span class="matchLegendItem is-loss"><i></i>Loss</span>
              <span class="matchLegendItem is-tie"><i></i>Tie</span>
            </div>
          </div>
        </div>
        <div id="androidMatchTrendWrap" class="matchTrendChartWrap">
          <div class="matchTrendTooltip" hidden></div>
        </div>
      </div>
    </div>
  `}function Ou(){let e="";if(y.matchesSubTab==="fixtures"){const t=ys(u.matches),n=bs(u.matches),a=[["ALL","All",t.totalFixtures],["UPCOMING","Upcoming",t.upcoming],["LIVE","Live",t.live],["COMPLETED","Completed",t.played]],r=u.matches.filter(i=>{const s=Sn(i);return y.matchesStatusFilter==="ALL"||s===y.matchesStatusFilter});e=`
      ${Du(t)}
      ${n?`<div style="margin-bottom:4px;">${As(n,{compact:!1})}</div>`:""}
      ${u.matches.length?`
        <div class="filterRow">
          ${a.map(([i,s,o])=>`<button type="button" class="segTab ${y.matchesStatusFilter===i?"active":""}" data-matches-status-filter="${i}">${s} (${o})</button>`).join("")}
        </div>
      `:""}
      ${r.length?`<div class="stackList">${r.map(i=>`<article class="surfaceCard">${ks(i)}</article>`).join("")}</div>`:`<div class="emptyState">${u.matches.length?"No matches in this category.":"No fixtures or match results added yet."}</div>`}
    `}else y.matchesSubTab==="xi"?e=$s():e=xs();return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Schedule &amp; Results</span>
        <h2 class="sectionTitle">Matches Centre</h2>
      </div>
    </div>
    <div class="filterRow">
      ${[["fixtures","Fixtures & Results"],["xi","Playing XI"],["tournaments","Tournaments & Records"]].map(([t,n])=>`<button type="button" class="segTab ${y.matchesSubTab===t?"active":""}" data-matches-sub="${t}">${n}</button>`).join("")}
    </div>
    ${e}
  `}function $s(){return u.lineups.length?`<div class="stackList">${u.lineups.map(e=>`
    <article class="surfaceCard">
      <h3 style="margin:0 0 4px;font-size:1.25rem;">${p(v(e.title||"Playing XI"))}</h3>
      ${e.match?`<p style="margin:0 0 10px;font-size:0.8125rem;color:var(--ink-muted);">${p(v(e.match))}</p>`:""}
      <div class="xiGrid num">
        ${(e.players||[]).map((t,n)=>{const a=u.players.find(i=>i.id===t),r=`${n+1}. ${v((a==null?void 0:a.name)||t)}`;return a?`<button type="button" class="xiPlayerBtn" data-open-player="${p(t)}">${p(r)}</button>`:`<div style="padding:6px 8px;">${p(r)}</div>`}).join("")}
      </div>
      ${(e.subs||[]).length?`
        <p style="margin:10px 0 0;font-size:0.78rem;color:var(--ink-muted);">
          Substitutes: ${e.subs.map(t=>{var n;return p(v(((n=u.players.find(a=>a.id===t))==null?void 0:n.name)||t))}).join(" · ")}
        </p>
      `:""}
    </article>
  `).join("")}</div>`:'<div class="emptyState">No Playing XI published yet.</div>'}function xs(){return u.tournaments.length>0||u.records.length>0||u.opponents.length>0?`
    <div class="stackList">
      ${u.tournaments.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">${p(v(t.status||"Tournament"))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${p(v(t.name||"Tournament"))}</h3>
          <p class="sectionSub num">${[t.season,t.position,t.venueName||t.venue].filter(Boolean).map(v).join(" · ")}</p>
          ${t.fixtures?`<p class="richText" style="margin:8px 0 0;font-size:0.82rem;color:var(--ink-secondary);">${p(t.fixtures)}</p>`:""}
        </article>
      `).join("")}
      ${u.records.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">${p(v(t.season||"Team Record"))}</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">${p(v(t.title||"Record"))}</h3>
          <p style="margin:0;font-weight:700;color:var(--brand-text);" class="num">${p(v(t.value||""))}${t.player?" · "+p(v(t.player)):""}</p>
        </article>
      `).join("")}
      ${u.opponents.map(t=>`
        <article class="surfaceCard">
          <span class="sectionKicker">Head-to-Head</span>
          <h3 style="margin:0 0 4px;font-size:1.22rem;">RDM vs ${p(v(t.name||"Opponent"))}</h3>
          <p class="sectionSub num">${Number(t.played||0)} Played · ${Number(t.won||0)} Won · ${Number(t.lost||0)} Lost</p>
        </article>
      `).join("")}
    </div>
  `:'<div class="emptyState">No tournaments or team records recorded yet.</div>'}function Ms(){return`
    <div class="honoursGrid">
      ${u.honours.map(e=>`
        <article class="honourCard">
          <button type="button" class="honourMediaBtn" data-zoom-src="${p(e.image||te())}" data-zoom-cap="${p(`${e.year} · ${e.title} — ${e.sub}`)}">
            <img src="${p(e.image||te())}" alt="${p(e.title)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'">
          </button>
          <div class="honourCardBody">
            <div class="honourCardTop">
              <span class="metaCode">${p(e.year)}</span>
              <span class="honourTapHint">Tap to view full</span>
            </div>
            <h3 class="honourCardTitle">${p(v(e.title))}</h3>
            <p class="honourCardSub">${p(v(e.sub))}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `}function Uu(){const e=["ALL","TEAM PHOTOS","MEMORIES","UPDATES"],t=u.gallery.filter(n=>{const a=String(n.album||"MEMORIES").toUpperCase();return y.galleryAlbum==="ALL"?!["MATCHES","TROPHIES"].includes(a):a===y.galleryAlbum});return`
    <div class="sectionHeader">
      <div>
        <span class="sectionKicker">Team Memories</span>
        <h2 class="sectionTitle">Team Gallery</h2>
      </div>
    </div>

    <div class="filterRow">
      ${e.map(n=>`<button type="button" class="segTab ${y.galleryAlbum===n?"active":""}" data-gallery-album="${n}">${p(v(n))}</button>`).join("")}
    </div>

    ${t.length?`
      <div class="galleryGrid">
        ${t.map((n,a)=>`
          <button type="button" class="galleryTile" data-zoom-gallery="${a}">
            <img src="${p(n.image)}" alt="${p(n.caption||"RDM Memory")}" referrerPolicy="no-referrer">
            <div class="galleryTileCaption">
              <strong>${p(v(n.album||"Memories"))}</strong>
              <span>${p(v(n.caption||"RDM Memory"))}</span>
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
    ${Ms()}
  `}function Bu(){const e=jr(),t=pa();return`
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
                <span class="sectionKicker">${t?`Signed In · ${p(he[t.id]||t.id)}`:"Squad Member"}</span>
                <h4>${t?p(v(t.name)):"Player Profile Login"}</h4>
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
                <span class="sectionKicker">${J()?"Unlocked · Live Sync":"Management"}</span>
                <h4>Admin Panel</h4>
                <p>${J()?"Manage squad roster, matches, Playing XI, gallery, honours, and APK updates.":"Unlock the team admin console to publish matches, lineups, and squad changes."}</p>
              </div>
              <div class="rowActions">
                <button type="button" class="btnSecondary btnSm" id="btnMoreAdminPortal">${J()?"Open Admin Console":"Admin Login"}</button>
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
          <p class="sectionSub">Active: ${p(Ss(y.theme))}</p>
        </div>
      </div>
      <div class="themeGrid">
        ${Ja.map(n=>`
          <button type="button" class="themeChoiceRow ${y.theme===n.id?"active":""}" data-quick-theme="${n.id}">
            <div class="themeSwatchGroup" aria-hidden="true">
              ${n.swatches.map(a=>`<span style="background:${a}"></span>`).join("")}
            </div>
            <div class="themeChoiceCopy">
              <strong>${p(n.label)}</strong>
              <span>${p(n.desc)}</span>
            </div>
            <span class="themeChoiceCheck">${y.theme===n.id?"Active":"Apply"}</span>
          </button>
        `).join("")}
      </div>
    </section>

    <section class="surfaceCard">
      <span class="sectionKicker">Connect</span>
      <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:10px;">Official Channels &amp; Contact</h3>
      <div class="linkRowWrap">
        <button type="button" class="linkActionBtn" data-ext-url="${p(R.captainContactUrl)}">WhatsApp Captain ↗</button>
        ${u.socials.filter(n=>ie(n.url)).map(n=>`
          <button type="button" class="linkActionBtn" data-ext-url="${p(ie(n.url))}">${p(v(n.displayName||n.name))} ↗</button>
        `).join("")}
      </div>
    </section>

    <section class="surfaceCard">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Official App · v${p(pn())}${u.otaBuild?` · OTA #${u.otaBuild}`:""}</span>
          <h3 class="sectionTitle" style="font-size:1.22rem;">App &amp; Sync</h3>
          <p class="sectionSub">${Dn()?`Installed Build v${p(u.nativeVersionName||le.versionName)} · Auto-Update Active`:"Sync live team data or open the Android App & Updates centre"}</p>
        </div>
        <div class="rowActions">
          <button type="button" class="btnPrimary btnSm" data-open-subpage="download">App &amp; Updates ›</button>
          <button type="button" class="btnSecondary btnSm" id="btnRefreshClub">Sync Team Data</button>
          ${e?'<button type="button" class="btnSecondary btnSm" id="btnInstallWebApp">Install Web App</button>':""}
        </div>
      </div>
    </section>
  `}function Fu(){const e=u.players.find(o=>o.id===y.detailPlayerId);if(!e)return`
      ${xe({title:"Player Profile",showBack:!0,showPublicNav:!0})}
      <div class="tabContent fullPageContent">
        <div class="emptyState">Player record not found.</div>
      </div>
      ${Tt()}
    `;const t=ft(e.image),n=u.stats.find(o=>o.playerId===e.id),a=u.availability.find(o=>o.playerId===e.id),r=he[e.id]||e.id,i=(Array.isArray(e.socials)?e.socials:[]).filter(o=>ie((o==null?void 0:o.url)||o)),s=n&&(Number(n.matches)>0||Number(n.runs)>0||Number(n.wickets)>0||Number(n.highScore)>0);return`
    ${xe({title:v(e.name),showBack:!0,showPublicNav:!0})}
    <div class="tabContent fullPageContent">
      <section class="fullProfileHero">
        <img class="fullProfileAvatar ${t.cls}" src="${p(t.src)}" alt="${p(e.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'">
        <div>
          <span class="metaCode">${p(r)} · ${p(e.id)}${e.jersey?" · #"+p(e.jersey):""}</span>
          <h1 class="fullProfileName">${p(v(e.name))}</h1>
          <div class="fullProfileRole">${p(v(e.role))}</div>
          ${e.detail?`<p class="fullProfileMeta richText" style="margin:6px auto 0;">${p(v(e.detail))}</p>`:""}
          ${e.nick?`<p class="sectionSub" style="margin-top:6px;">Nickname: ${p(v(e.nick))}</p>`:""}
          ${a!=null&&a.status?`<p class="sectionSub" style="margin-top:4px;font-weight:700;color:var(--brand-text);">Match Status: ${p(v(a.status))}</p>`:""}
        </div>
        <div class="rowActions" style="justify-content:center;">
          <button type="button" class="btnPrimary btnSm" id="btnDownloadDetailCard">Download Player Card</button>
          ${`<button type="button" class="btnSecondary btnSm" id="btnDetailPlayerPortal" data-detail-login-player="${p(e.id)}">${ut(e.id)||J()?"Edit My Profile":"Player Login"}</button>`}
        </div>
      </section>

      ${e.bio?`
        <section class="surfaceCard">
          <span class="sectionKicker">About Player</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:6px;">Player Biography</h2>
          <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.9rem;">${p(v(e.bio))}</p>
        </section>
      `:""}

      <section class="surfaceCard">
        <span class="sectionKicker">Performance</span>
        <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Verified Career Statistics</h2>
        ${s?`
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
            <span>Best: ${p(n.bestBowling||"—")}</span>
          </div>
        `:'<p class="sectionSub">No verified career statistics recorded for this player yet.</p>'}
      </section>

      ${i.length?`
        <section class="surfaceCard">
          <span class="sectionKicker">Connect</span>
          <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Official Social Links</h2>
          <div class="linkRowWrap">
            ${i.map((o,l)=>{const c=ie(typeof o=="string"?o:o.url),f=typeof o=="string"?`Social ${l+1}`:o.name||`Social ${l+1}`;return`<button type="button" class="linkActionBtn" data-ext-url="${p(c)}">${p(v(f))} ↗</button>`}).join("")}
          </div>
        </section>
      `:""}
    </div>
    ${Tt()}
  `}function Hu(){var a;const t={news:"Team News",updates:"Official Updates",records:"Team Records",tournaments:"Tournaments & H2H",xi:"Playing XI",honours:"Team Honours",socials:"Channels & Contact",about:"About RDM",download:"Get Android App"}[y.morePage]||"Team Info";let n="";if(y.morePage==="news")n=u.news.length?`<div class="stackList">${u.news.map(r=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${r.pinned?"Pinned Announcement":"Team News"}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${p(v(r.title||"Announcement"))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${p(v(r.text||""))}</p>
          </article>
        `).join("")}</div>`:'<div class="emptyState">No team news announcements posted yet.</div>';else if(y.morePage==="updates")n=u.updates.length?`<div class="stackList">${u.updates.map(r=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${p(v(r.category||"Official Update"))}${r.date?" · "+p(r.date):""}</span>
            <h3 class="sectionTitle richText" style="font-size:1.25rem;margin-bottom:6px;">${p(v(r.title||"Update"))}</h3>
            <p class="richText" style="margin:0;color:var(--ink-secondary);font-size:0.88rem;">${p(v(r.text||""))}</p>
            ${r.url&&ie(r.url)?`<div style="margin-top:12px;"><button type="button" class="btnSecondary btnSm" data-ext-url="${p(ie(r.url))}">Open Link ↗</button></div>`:""}
          </article>
        `).join("")}</div>`:'<div class="emptyState">No official updates published yet.</div>';else if(y.morePage==="xi")n=$s();else if(y.morePage==="records"){const i=Xa(u.players,u.stats,u.matches,u.achievements).bestPlayer;n=`
      <div class="surfaceCard" style="margin-bottom:12px;">
        <div class="sectionHeader" style="margin-bottom:6px;">
          <div>
            <span class="sectionKicker">Player Impact</span>
            <h3 class="sectionTitle" style="font-size:1.2rem;">MVP &amp; Player Comparison</h3>
          </div>
          <button type="button" class="btnPrimary btnSm" data-compare-players="${p(((a=i==null?void 0:i.p)==null?void 0:a.id)||"")}">Compare Players</button>
        </div>
        ${i?`<p class="sectionSub" style="margin:0;">Current All-Time Leader: <strong>${p(v(i.p.name))}</strong> · ${i.mvpPoints} MVP Pts (${i.s.runs} Runs, ${i.s.wickets} Wkts, ${i.potmCount} POTM)</p>`:'<p class="sectionSub" style="margin:0;">Compare any two squad members side-by-side.</p>'}
      </div>
    `+(u.records.length?`<div class="stackList">${u.records.map(o=>`
          <article class="surfaceCard">
            <span class="sectionKicker">${p(v(o.season||"Team Record"))}</span>
            <h3 class="sectionTitle" style="font-size:1.22rem;margin-bottom:4px;">${p(v(o.title||"Record"))}</h3>
            <p style="margin:0;font-weight:700;color:var(--brand-text);" class="num">${p(v(o.value||""))}${o.player?" · "+p(v(o.player)):""}</p>
          </article>
        `).join("")}</div>`:'<div class="emptyState">No team records recorded yet.</div>')}else if(y.morePage==="tournaments")n=xs();else if(y.morePage==="honours")n=Ms();else if(y.morePage==="socials")n=`
      <div class="surfaceCard">
        <span class="sectionKicker">Direct Contact</span>
        <h3 class="sectionTitle" style="font-size:1.3rem;margin-bottom:8px;">Team Channels &amp; Captain</h3>
        <div class="linkRowWrap">
          <button type="button" class="linkActionBtn" data-ext-url="${p(R.captainContactUrl)}">WhatsApp Captain ↗</button>
          ${u.socials.filter(r=>ie(r.url)).map(r=>`
            <button type="button" class="linkActionBtn" data-ext-url="${p(ie(r.url))}">${p(v(r.displayName||r.name))} ↗</button>
          `).join("")}
        </div>
      </div>
    `;else if(y.morePage==="about")n=`
      <div class="surfaceCard">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
          <img src="${p(te())}" alt="RDM Logo" referrerPolicy="no-referrer" style="width:68px;height:68px;border-radius:50%;background:#FFFFFF;border:1.5px solid var(--border-strong);object-fit:cover;flex-shrink:0;">
          <div>
            <span class="sectionKicker">Est. ${p(R.founded)} · ${p(R.locationLabel)}</span>
            <h3 class="sectionTitle">${p(v(R.orgName))}</h3>
            <p class="sectionSub" style="font-weight:700;color:var(--brand-text);">${p(R.motto)}</p>
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
    `;else{const r=jr(),i=hn(),s=i.otaBuild?` · OTA #${i.otaBuild}`:"";n=`
      <div class="surfaceCard">
        <span class="sectionKicker">Official Android APK · v${p(i.latestVersion)}</span>
        <h3 class="sectionTitle" style="font-size:1.35rem;margin-bottom:8px;">RDM Official Android App</h3>
        <p style="margin:0 0 12px;color:var(--ink-secondary);font-size:0.9rem;">
          ${Dn()?`You are running the native RDM Official Android App (v${p(i.currentVersion)}${p(s)}). Updates apply silently in the background or install right inside the app without uninstalling.`:"Download the latest RDM Official Android APK directly to your phone. All updates install smoothly in place while preserving your data."}
        </p>
        ${i.hasUpdate?`<div class="infoBanner" style="margin-bottom:12px;"><span>Update v${p(i.latestVersion)} ready — ${p(i.notes)}</span></div>`:""}
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;">
          <span class="metaCode">${Dn()?`Installed: v${p(i.currentVersion)}${p(s)}`:`Web Version: v${p(i.currentVersion)}`}</span>
          <span class="metaCode">Latest APK: v${p(i.latestVersion)}</span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          ${ye()?i.hasUpdate?`<button type="button" class="btnPrimary btnSm" id="btnDownloadLatestApk">Update In-Place (v${p(i.latestVersion)})</button>`:"":`<button type="button" class="btnPrimary btnSm" id="btnDownloadLatestApk">Download Latest APK (v${p(i.latestVersion)})</button>`}
          <button type="button" class="${ye()&&!i.hasUpdate?"btnPrimary":"btnSecondary"} btnSm" id="btnCheckAppUpdate">Check for Update</button>
          ${r?'<button type="button" class="btnSecondary btnSm" id="btnInstallWebApp">Install Web App</button>':""}
          <button type="button" class="btnSecondary btnSm" data-public-tab="home">Back to Home</button>
        </div>
      </div>
    `}return`
    ${xe({title:t,showBack:!0,showPublicNav:!0})}
    <div class="tabContent fullPageContent">
      <div class="sectionHeader">
        <div>
          <span class="sectionKicker">Rehan Dominators Mahuawan</span>
          <h1 class="sectionTitle">${p(t)}</h1>
        </div>
      </div>
      ${n}
    </div>
    ${Tt()}
  `}function Es(){return`
    ${xe({title:"RDM Admin Panel",showBack:!0,showPublicNav:!1,rightActionHtml:'<button type="button" class="topActionBtn" id="btnPortalPublicView">Public View</button>'})}
    <div class="loginCardWrap">
      <div class="surfaceCard">
        <div class="loginLogoBox">
          <img src="${p(te())}" alt="RDM Crest" referrerPolicy="no-referrer">
        </div>
        <h2 class="sectionTitle" style="text-align:center;">Admin Panel Unlock</h2>
        <p class="sectionSub" style="text-align:center;margin-bottom:16px;">Enter your APK Admin Password to open the Admin Console. No username required. (Website Admin uses its separate private link.)</p>
        ${y.loginError?`<div class="errorBanner" style="margin-bottom:12px;">${p(y.loginError)}</div>`:""}
        <form id="rdmPortalAuthForm" class="formStack">
          <label class="fieldBlock">
            <span>Admin Password</span>
            <div class="passwordWrap">
              <input id="loginPassword" name="password" type="password" autocomplete="current-password" placeholder="Enter admin password" required>
              <button type="button" class="togglePwBtn" id="btnTogglePw">Show</button>
            </div>
          </label>
          <button type="submit" class="btnPrimary btnFull" id="btnLoginSubmit" ${y.loginBusy?"disabled":""}>
            ${y.loginBusy?"Unlocking Admin Panel…":"Open Admin Panel"}
          </button>
        </form>
      </div>
    </div>
  `}function Cs(){const e=u.players.length?u.players:[],t=e.find(s=>s.id===y.playerAuthSelectedId)||e[0]||null,n=(t==null?void 0:t.id)||y.playerAuthSelectedId||"RDM001",a=ft(t==null?void 0:t.image),r=he[n]||n,i=y.playerAuthTab!=="firebase";return`
    ${xe({title:"Player Profile Login",showBack:!0,showPublicNav:!1,rightActionHtml:'<button type="button" class="topActionBtn" id="btnPortalPublicView">Public View</button>'})}
    <div class="loginCardWrap">
      <div class="surfaceCard">
        <div class="loginLogoBox">
          <img id="playerLoginAvatar" class="${a.cls}" src="${p(a.src)}" alt="${p((t==null?void 0:t.name)||"RDM Crest")}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'">
        </div>
        <div class="loginSelectedMeta">
          <span class="metaCode" id="playerLoginMeta">${p(r)} · ${p(n)}</span>
          <h2 class="sectionTitle" id="playerLoginTitle" style="text-align:center;">${t?p(v(t.name)):"Player Profile Login"}</h2>
          <p class="sectionSub" id="playerLoginRole" style="text-align:center;margin-top:4px;">${t?p(v(t.role)):"Sign in to manage your RDM player profile"}</p>
        </div>

        <div class="loginModeTabs" role="tablist" aria-label="Player sign in method">
          <button type="button" class="segTab ${i?"active":""}" data-player-auth-tab="password" role="tab" aria-selected="${i?"true":"false"}">Player Password</button>
          <button type="button" class="segTab ${i?"":"active"}" data-player-auth-tab="firebase" role="tab" aria-selected="${i?"false":"true"}">Firebase Account</button>
        </div>

        ${y.playerLoginError?`<div class="errorBanner" style="margin-bottom:12px;">${p(y.playerLoginError)}</div>`:""}

        ${i?`
          <form id="rdmPlayerPasswordForm" class="formStack">
            <label class="fieldBlock">
              <span>Select Your Player Profile</span>
              <select id="playerLoginSelect" name="playerId" required>
                ${e.map(s=>{const o=he[s.id]||s.id;return`<option value="${p(s.id)}" ${s.id===n?"selected":""}>${p(v(s.name))} · ${p(s.id)} (${p(o)})</option>`}).join("")}
              </select>
            </label>
            <label class="fieldBlock">
              <span>Player Password</span>
              <div class="passwordWrap">
                <input id="playerLoginPassword" name="password" type="password" autocomplete="current-password" placeholder="Enter your player password" required>
                <button type="button" class="togglePwBtn" id="btnTogglePlayerPw">Show</button>
              </div>
            </label>
            <button type="submit" class="btnPrimary btnFull" id="btnPlayerLoginSubmit" ${y.playerLoginBusy?"disabled":""}>
              ${y.playerLoginBusy?"Unlocking Player Portal…":"Open My Player Profile"}
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
            <button type="submit" class="btnPrimary btnFull" id="btnPlayerFbSubmit" ${y.playerLoginBusy?"disabled":""}>
              ${y.playerLoginBusy?"Signing In…":"Sign In & Open Portal"}
            </button>
          </form>
        `}
      </div>
    </div>
  `}function qu(){var c,f;const e=y.portalPlayerId||De();if(!e||!ut(e)&&!J())return Cs();const t=u.players.find(d=>d.id===e);if(!t)return`
      ${xe({title:"Player Portal",showBack:!0,showPublicNav:!1,rightActionHtml:'<button type="button" class="topActionBtn" id="btnPortalPublicView">Public View</button>'})}
      <div class="tabContent fullPageContent">
        <div class="emptyState">Player profile not found.</div>
      </div>
    `;const n=ft(t.image),a=u.stats.find(d=>d.playerId===t.id),r=((c=u.availability.find(d=>d.playerId===t.id))==null?void 0:c.status)||"NOT SET",i=he[t.id]||t.id,s=(Array.isArray(t.socials)?t.socials:[]).map((d,h)=>typeof d=="string"?{name:`Social ${h+1}`,url:d}:{name:(d==null?void 0:d.name)||`Social ${h+1}`,url:(d==null?void 0:d.url)||""}).filter(d=>ie(d.url)),o=ua(t.id)||Fe(),l=a&&(Number(a.matches)>0||Number(a.runs)>0||Number(a.wickets)>0||Number(a.highScore)>0);return`
    ${xe({title:`${v(t.name)} · Portal`,showBack:!0,showPublicNav:!1,rightActionHtml:'<button type="button" class="topActionBtn" id="btnPlayerLogout">Logout</button>'})}
    <div class="tabContent fullPageContent">
      <div class="infoBanner">
        <span>${o?`Cloud Sync Active (${p(((f=u.user)==null?void 0:f.email)||"Verified")}) — Edits update Website &amp; Android App live.`:`Player Session Unlocked (${p(i)}) — Edits sync live to Website &amp; Android App.`}</span>
        <div class="rowActions">
          ${o?"":'<button type="button" class="btnSecondary btnSm" id="btnPlayerPortalVerify">Connect Sync</button>'}
          <button type="button" class="btnSecondary btnSm" id="btnPortalPublicView">Public View</button>
        </div>
      </div>

      <section class="fullProfileHero">
        <img class="fullProfileAvatar ${n.cls}" src="${p(n.src)}" alt="${p(t.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'">
        <div>
          <span class="metaCode">${p(i)} · ${p(t.id)}${t.jersey?" · #"+p(t.jersey):""}</span>
          <h1 class="fullProfileName">${p(v(t.name))}</h1>
          <div class="fullProfileRole">${p(v(t.role))}</div>
          ${t.detail?`<p class="fullProfileMeta richText" style="margin:6px auto 0;">${p(v(t.detail))}</p>`:""}
          ${t.nick?`<p class="sectionSub" style="margin-top:6px;">Nickname: ${p(v(t.nick))}</p>`:""}
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
            <p class="sectionSub" style="font-weight:700;color:var(--brand-text);">Current: ${p(v(r))}</p>
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
        <p style="margin:0 0 6px;font-size:0.86rem;color:var(--ink-secondary);"><strong>Jersey:</strong> ${t.jersey?"#"+p(t.jersey):"Not set"} · <strong>Nickname:</strong> ${t.nick?p(v(t.nick)):"Not set"}</p>
        <p class="richText" style="margin:0;font-size:0.88rem;color:var(--ink-secondary);">${t.bio?p(v(t.bio)):"No bio added yet."}</p>
      </section>

      <section class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <div>
            <span class="sectionKicker">My Socials (Max 3)</span>
            <h2 class="sectionTitle" style="font-size:1.25rem;">Official Social Links</h2>
          </div>
          ${s.length<3?'<button type="button" class="btnPrimary btnSm" id="btnPortalAddSocial">+ Add Social</button>':""}
        </div>
        ${s.length?s.map((d,h)=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.88rem;">${p(v(d.name))}</strong>
              <span style="font-size:0.74rem;color:var(--ink-muted);word-break:break-all;">${p(d.url)}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-portal-ext="${p(ie(d.url))}">Open</button>
              <button type="button" class="btnDanger btnSm" data-portal-del-social="${h}">Remove</button>
            </div>
          </div>
        `).join(""):'<p class="sectionSub">No social links added yet.</p>'}
      </section>

      <section class="surfaceCard">
        <span class="sectionKicker">Verified Performance</span>
        <h2 class="sectionTitle" style="font-size:1.25rem;margin-bottom:10px;">Career Statistics</h2>
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
            <span>Best: ${p(a.bestBowling||"—")}</span>
          </div>
        `:'<p class="sectionSub">Career statistics are updated by team management after official matches.</p>'}
      </section>
    </div>
  `}function Vu(){if(!J())return Es();let e="";return y.adminTab==="overview"?e=`
      <div class="kpiStripGrid">
        <div class="factBox"><strong class="num">${u.players.length}</strong><span>Squad Players</span></div>
        <div class="factBox"><strong class="num">${u.matches.length}</strong><span>Matches</span></div>
        <div class="factBox"><strong class="num">${u.news.length+u.updates.length}</strong><span>News &amp; Updates</span></div>
        <div class="factBox"><strong class="num">${u.gallery.length}</strong><span>Gallery Photos</span></div>
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
            <span class="sectionKicker">APK Admin v${p(pn())} · ${Fe()?"Firebase Cloud Sync Live":"Local Admin Unlocked"}</span>
            <h3 class="sectionTitle" style="font-size:1.22rem;">Website, PWA &amp; Android APK Connected</h3>
            <p class="sectionSub">${Fe()?"Every change published here saves to Firebase and updates Website, PWA, and all installed Android APKs in real time.":"APK Admin unlocked with password. Connect Firebase Cloud Sync once if live cloud rules require signed-in Firebase Admin Auth."}</p>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            ${Fe()?"":'<button type="button" class="btnPrimary btnSm" id="btnAdminConnectFirebase">Connect Cloud Sync</button>'}
            <button type="button" class="btnSecondary btnSm" data-admin-action="editAppConfig">Configure APK</button>
          </div>
        </div>
      </div>
    `:y.adminTab==="squad"?e=`
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:8px;">
          <div><h3 class="sectionTitle" style="font-size:1.25rem;">Manage Squad (Add, Edit, Stats, Remove)</h3></div>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addPlayer">+ Add Player</button>
        </div>
        <div>
          ${u.players.map(t=>{var a;const n=((a=u.availability.find(r=>r.playerId===t.id))==null?void 0:a.status)||"NOT SET";return`
              <div class="listRowItem">
                <div style="min-width:0;">
                  <strong style="display:block;font-size:0.92rem;">${p(v(t.name))}</strong>
                  <span class="num" style="font-size:0.76rem;color:var(--ink-muted);">${p(t.id)} · ${p(v(n))}</span>
                </div>
                <div class="rowActions">
                  <button type="button" class="btnSecondary btnSm" data-admin-edit-player="${p(t.id)}">Edit</button>
                  <button type="button" class="btnSecondary btnSm" data-admin-edit-stats="${p(t.id)}">Stats</button>
                  <button type="button" class="btnSecondary btnSm" data-admin-avail="${p(t.id)}">Avail</button>
                  <button type="button" class="btnDanger btnSm" data-admin-remove-player="${p(t.id)}">Remove</button>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    `:y.adminTab==="matches"?e=`
      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Matches (${u.matches.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addMatch">+ Match</button>
        </div>
        ${u.matches.length?u.matches.map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">RDM vs ${p(v(t.opponent||"Opponent"))}</strong>
              <span class="num" style="font-size:0.76rem;color:var(--ink-muted);">${p(v(t.matchStatus||t.status||"Match"))} · ${p(t.date||"Date TBA")}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-match="${p(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Matches:${p(t._docId)}">Delete</button>
            </div>
          </div>
        `).join(""):'<p class="sectionSub">No matches yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Playing XI (${u.lineups.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addLineup">+ Lineup</button>
        </div>
        ${u.lineups.length?u.lineups.map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${p(v(t.title||"Playing XI"))}</strong>
              <span style="font-size:0.76rem;color:var(--ink-muted);">${p(v(t.match||""))}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-lineup="${p(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="PlayingXI:${p(t._docId)}">Delete</button>
            </div>
          </div>
        `).join(""):'<p class="sectionSub">No lineups yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Tournaments &amp; Records (${u.tournaments.length+u.records.length})</h3>
          <div style="display:flex;gap:6px;">
            <button type="button" class="btnPrimary btnSm" data-admin-action="addTournament">+ Tournament</button>
            <button type="button" class="btnSecondary btnSm" data-admin-action="addRecord">+ Record</button>
          </div>
        </div>
        ${[...u.tournaments.map(t=>({_col:"Tournaments",_docId:t._docId,title:t.name||"Tournament",sub:[t.season,t.status,t.position].filter(Boolean).join(" · ")})),...u.records.map(t=>({_col:"TeamRecords",_docId:t._docId,title:t.title||"Record",sub:[t.value,t.player,t.season].filter(Boolean).join(" · ")}))].map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${p(v(t.title))}</strong>
              <span style="font-size:0.75rem;color:var(--ink-muted);">${p(t._col)}${t.sub?" · "+p(v(t.sub)):""}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-item="${p(t._col)}:${p(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="${p(t._col)}:${p(t._docId)}">Delete</button>
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
        ${[...u.news.map(t=>({...t,_col:"News"})),...u.updates.map(t=>({...t,_col:"Updates"}))].map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.9rem;">${t.pinned?"[Pinned] ":""}${p(v(t.title||"Item"))}</strong>
              <span style="font-size:0.75rem;color:var(--ink-muted);">${p(t._col)}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-post="${p(t._col)}:${p(t._docId)}">Edit</button>
              <button type="button" class="btnSecondary btnSm" data-admin-pin="${p(t._col)}:${p(t._docId)}:${t.pinned?"0":"1"}">${t.pinned?"Unpin":"Pin"}</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="${p(t._col)}:${p(t._docId)}">Delete</button>
            </div>
          </div>
        `).join("")||'<p class="sectionSub">No news or updates yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Team Honours (${u.honours.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addHonour">+ Honour</button>
        </div>
        ${u.honours.length?u.honours.map(t=>`
          <div class="listRowItem">
            <div style="display:flex;align-items:center;gap:10px;min-width:0;">
              <img src="${p(t.image||te())}" alt="${p(t.title||"Honour")}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'" style="width:44px;height:44px;border-radius:10px;object-fit:contain;background:var(--bg-subtle);border:1px solid var(--border-hairline);padding:3px;flex-shrink:0;">
              <div style="min-width:0;">
                <strong style="display:block;font-size:0.9rem;">${p(t.year||"")} · ${p(v(t.title||"Honour"))}</strong>
                <span style="font-size:0.75rem;color:var(--ink-muted);">${p(v(t.sub||""))}</span>
              </div>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-honour="${p(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Honours:${p(t._docId)}">Delete</button>
            </div>
          </div>
        `).join(""):'<p class="sectionSub">No honours yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Gallery Photos (${u.gallery.length})</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addGallery">+ Photo</button>
        </div>
        ${u.gallery.length?u.gallery.map(t=>`
          <div class="listRowItem">
            <div style="display:flex;align-items:center;gap:10px;min-width:0;">
              <img src="${p(t.image)}" alt="" referrerPolicy="no-referrer" style="width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0;">
              <div style="min-width:0;">
                <strong style="display:block;font-size:0.86rem;">${p(v(t.caption||"Memory"))}</strong>
                <span style="font-size:0.75rem;color:var(--ink-muted);">${p(v(t.album||"MEMORIES"))}</span>
              </div>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-gallery="${p(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Gallery:${p(t._docId)}">Delete</button>
            </div>
          </div>
        `).join(""):'<p class="sectionSub">No gallery photos yet.</p>'}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:10px;">
          <h3 class="sectionTitle" style="font-size:1.25rem;">Social Channels</h3>
          <button type="button" class="btnPrimary btnSm" data-admin-action="addSocial">+ Social</button>
        </div>
        ${u.socials.map(t=>`
          <div class="listRowItem">
            <div style="min-width:0;">
              <strong style="display:block;font-size:0.88rem;">${p(v(t.displayName||t.name))}</strong>
              <span style="font-size:0.74rem;color:var(--ink-muted);word-break:break-all;">${p(t.url||"No link set")}</span>
            </div>
            <div class="rowActions">
              <button type="button" class="btnSecondary btnSm" data-admin-edit-social="${p(t._docId)}">Edit</button>
              <button type="button" class="btnDanger btnSm" data-admin-del="Socials:${p(t._docId)}">Delete</button>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="surfaceCard">
        <div class="sectionHeader" style="margin-bottom:8px;">
          <div>
            <h3 class="sectionTitle" style="font-size:1.25rem;">App &amp; APK Update Settings</h3>
            <p class="sectionSub">Latest APK: v${p(pn())} (Code ${p(String(u.appVersionCode||le.versionCode))})</p>
          </div>
          <button type="button" class="btnPrimary btnSm" data-admin-action="editAppConfig">Edit APK Update</button>
        </div>
        <p style="margin:0;font-size:0.78rem;color:var(--ink-muted);word-break:break-all;">APK URL Configured</p>
      </div>
    `,`
    ${xe({title:"Admin Console",showBack:!0,showPublicNav:!0,rightActionHtml:'<button type="button" class="topActionBtn" id="btnLogout">Logout</button>'})}

    <div class="tabContent fullPageContent">
      ${Fe()?"":`
        <div class="infoBanner">
          <span><strong>Local Admin Mode:</strong> Connect Firebase Cloud Sync once if deleting or saving records returns a permission error.</span>
          <button type="button" class="btnPrimary btnSm" id="btnAdminConnectFirebaseBanner">Connect Sync</button>
        </div>
      `}
      <div class="filterRow adminTabsRow">
        ${[["overview","Overview"],["squad","Squad & Stats"],["matches","Matches & XI"],["content","Content & Media"]].map(([t,n])=>`<button type="button" class="segTab ${y.adminTab===t?"active":""}" data-admin-tab="${t}">${n}</button>`).join("")}
      </div>
      ${e}
    </div>
    ${Tt()}
  `}function Wu(){let e="";return y.publicTab==="home"?e=Nu():y.publicTab==="squad"?e=Iu():y.publicTab==="matches"?e=Ou():y.publicTab==="gallery"?e=Uu():e=Bu(),`
    ${xe({title:"RDM Official",showBack:!1,showPublicNav:!0})}
    <div class="tabContent">${e}</div>
    ${Tt()}
    ${Ru()}
  `}function C(){const e=document.getElementById("appViewport");if(!e)return;let t="";if(y.screen==="playerDetail"?t=Fu():y.screen==="subpage"?t=Hu():y.screen==="playerPortal"?t=qu():y.screen==="playerAuth"?t=Cs():y.screen==="portalAuth"?t=Es():y.screen==="admin"?t=Vu():t=Wu(),e.innerHTML=t+Tu(),ju(),y.screen==="public"&&y.publicTab==="matches"&&y.matchesSubTab==="fixtures"){const n=document.getElementById("androidMatchTrendWrap");n&&xu(n,ys(u.matches))}}function ju(){var o,l,c,f,d,h,m,b,_,w,g,k,P,$,N,L,O,x,F,B,H,E,U,j,A,T,q,de,ve,ae;const e=S=>document.getElementById(S);(o=e("btnStepBack"))==null||o.addEventListener("click",()=>{ws()||z({screen:"public",publicTab:"home"})}),(l=e("btnOpenDrawer"))==null||l.addEventListener("click",()=>{Ce(!0)});const t=e("drawerOverlay"),n=e("drawerPanel");if(t==null||t.addEventListener("click",S=>{S.target.id==="drawerOverlay"&&Ce(!1)}),t&&n){let S=0,I=0,D=!1;n.addEventListener("touchstart",G=>{!y.drawerOpen||G.touches.length!==1||(S=G.touches[0].clientX,I=0,D=!0,t.classList.add("dragging"))},{passive:!0}),n.addEventListener("touchmove",G=>{if(!D||G.touches.length!==1)return;const X=G.touches[0].clientX-S;I=Math.min(0,X),n.style.transform=`translateX(${I}px)`},{passive:!0});const V=()=>{D&&(D=!1,t.classList.remove("dragging"),n.style.transform="",I<=-68&&Ce(!1))};n.addEventListener("touchend",V,{passive:!0}),n.addEventListener("touchcancel",V,{passive:!0})}(c=e("btnPickTheme"))==null||c.addEventListener("click",()=>{dr({currentTheme:y.theme,onSelectTheme:Wt})}),(f=e("btnDrawerTheme"))==null||f.addEventListener("click",()=>{Ce(!1),dr({currentTheme:y.theme,onSelectTheme:Wt})}),document.querySelectorAll("[data-quick-theme]").forEach(S=>{S.addEventListener("click",()=>Wt(S.dataset.quickTheme))}),(d=e("btnBrandHome"))==null||d.addEventListener("click",()=>{z({screen:"public",publicTab:"home"})}),(h=e("btnPortalPublicView"))==null||h.addEventListener("click",()=>{z({screen:"public",publicTab:"home"})});const a=(S=null)=>{var D;Ce(!1);const I=De();if(S&&(ut(S)||J())){y.portalMode="player",y.portalPlayerId=S,z({screen:"playerPortal"});return}if(!S&&I){y.portalMode="player",y.portalPlayerId=I,z({screen:"playerPortal"});return}y.playerLoginError="",y.playerAuthSelectedId=S||y.playerAuthSelectedId||((D=u.players[0])==null?void 0:D.id)||"RDM001",z({screen:"playerAuth",playerAuthSelectedId:y.playerAuthSelectedId})};(m=e("btnOpenPlayerPortal"))==null||m.addEventListener("click",()=>a()),(b=e("btnFooterPlayerPortal"))==null||b.addEventListener("click",()=>a()),(_=e("btnMorePlayerPortal"))==null||_.addEventListener("click",()=>a()),(w=e("btnDetailPlayerPortal"))==null||w.addEventListener("click",()=>{var I;const S=((I=e("btnDetailPlayerPortal"))==null?void 0:I.dataset.detailLoginPlayer)||y.detailPlayerId;a(S)});const r=()=>{Ce(!1),z({screen:J()?"admin":"portalAuth",adminTab:"overview"})};(g=e("btnOpenAdminPortal"))==null||g.addEventListener("click",r),(k=e("btnFooterAdminPortal"))==null||k.addEventListener("click",r),(P=e("btnMoreAdminPortal"))==null||P.addEventListener("click",r),($=e("btnDownloadLatestApk"))==null||$.addEventListener("click",()=>{const S=hn();if(ye()){Rs(S);return}Kr(S.apkUrl||un()),M(`Downloading RDM Official APK v${S.latestVersion}...`)}),(N=e("btnCheckAppUpdate"))==null||N.addEventListener("click",async()=>{var I;M("Checking for latest update...");const S=await Hn();if(C(),(I=S==null?void 0:S.otaResult)!=null&&I.updated){M(`App updated silently to OTA v${S.otaResult.otaVersion||""}`);return}await jt(!0)}),(L=e("btnRefreshClub"))==null||L.addEventListener("click",async()=>{M("Syncing team data..."),await oe(),C(),M("Team data synced")}),(O=e("btnRetrySync"))==null||O.addEventListener("click",async()=>{await oe(),C()}),(x=e("btnInstallWebApp"))==null||x.addEventListener("click",async()=>{await Ys()&&(C(),M("App installed"))});const i=()=>{it({title:"Confirm Player Sign Out",message:"Lock and sign out of your Player Profile on this device?",confirmLabel:"Sign Out",danger:!0,onConfirm:async()=>{await Yr(),y.drawerOpen=!1,y.portalMode="public",y.portalPlayerId=null,y.screen==="playerPortal"?z({screen:"playerAuth"},{replace:!0}):C(),M("Player profile locked")}})};(F=e("btnPlayerLogout"))==null||F.addEventListener("click",i),(B=e("btnMorePlayerLogout"))==null||B.addEventListener("click",i),(H=e("btnLogout"))==null||H.addEventListener("click",()=>{it({title:"Confirm Sign Out",message:"Sign out of Admin Cloud Sync on this device?",confirmLabel:"Sign Out",danger:!0,onConfirm:async()=>{const S=y.portalMode==="admin";await Jr(),y.drawerOpen=!1,y.portalMode="public",y.portalPlayerId=null,S?z({screen:"portalAuth"},{replace:!0}):y.screen==="admin"?z({screen:"public",publicTab:"home"},{replace:!0}):C(),M("Signed out")}})}),(E=e("btnTogglePw"))==null||E.addEventListener("click",()=>{const S=e("loginPassword"),I=e("btnTogglePw");if(!S||!I)return;const D=S.type==="password";S.type=D?"text":"password",I.textContent=D?"Hide":"Show"}),(U=e("rdmPortalAuthForm"))==null||U.addEventListener("submit",async S=>{var D;S.preventDefault();const I=((D=e("loginPassword"))==null?void 0:D.value)||"";y.loginBusy=!0,y.loginError="",C();try{const V=await ho(I);y.loginBusy=!1,M(V.cloudSynced?"Admin Panel unlocked (Cloud Sync Live)":"Admin Panel unlocked"),z({screen:"admin",adminTab:"overview"},{replace:!0})}catch(V){y.loginBusy=!1;const G=String((V==null?void 0:V.code)||(V==null?void 0:V.message)||"");G==="INVALID_ADMIN_PASSWORD"||G==="PASSWORD_REQUIRED"?y.loginError="Incorrect Admin password. Please enter the correct password.":y.loginError="Unable to unlock Admin Panel. Please try again.",C()}}),document.querySelectorAll("[data-player-auth-tab]").forEach(S=>{S.addEventListener("click",()=>{y.playerAuthTab=S.dataset.playerAuthTab==="firebase"?"firebase":"password",y.playerLoginError="",C()})}),(j=e("playerLoginSelect"))==null||j.addEventListener("change",S=>{const I=String(S.target.value||"RDM001").toUpperCase();y.playerAuthSelectedId=I,y.playerLoginError="";const D=u.players.find(V=>V.id===I);if(D){const V=ft(D.image),G=e("playerLoginAvatar");G&&(G.src=V.src,G.className=V.cls,G.alt=D.name);const X=e("playerLoginMeta");X&&(X.textContent=`${he[D.id]||D.id} · ${D.id}`);const K=e("playerLoginTitle");K&&(K.textContent=v(D.name));const re=e("playerLoginRole");re&&(re.textContent=v(D.role))}}),(A=e("btnTogglePlayerPw"))==null||A.addEventListener("click",()=>{const S=e("playerLoginPassword"),I=e("btnTogglePlayerPw");if(!S||!I)return;const D=S.type==="password";S.type=D?"text":"password",I.textContent=D?"Hide":"Show"}),(T=e("btnTogglePlayerFbPw"))==null||T.addEventListener("click",()=>{const S=e("playerFbPassword"),I=e("btnTogglePlayerFbPw");if(!S||!I)return;const D=S.type==="password";S.type=D?"text":"password",I.textContent=D?"Hide":"Show"}),(q=e("btnPlayerForgotPw"))==null||q.addEventListener("click",()=>{var I,D;const S=((D=(I=e("playerFbEmail"))==null?void 0:I.value)==null?void 0:D.trim())||"";st({title:"Reset Player Password",subtitle:"Enter your assigned Firebase email to receive a password reset link.",fields:[{name:"email",label:"Assigned Email",type:"email",value:S,required:!0}],submitLabel:"Send Reset Link",onSubmit:async V=>{await bo(V.email),M("Password reset email sent")}})}),(de=e("rdmPlayerPasswordForm"))==null||de.addEventListener("submit",async S=>{var V,G;S.preventDefault();const I=((V=e("playerLoginSelect"))==null?void 0:V.value)||y.playerAuthSelectedId||"RDM001",D=((G=e("playerLoginPassword"))==null?void 0:G.value)||"";y.playerAuthSelectedId=I,y.playerLoginBusy=!0,y.playerLoginError="",C();try{const X=await fo(I,D);y.playerLoginBusy=!1,y.portalMode="player",y.portalPlayerId=X.playerId;const K=u.players.find(re=>re.id===X.playerId);M(`${v((K==null?void 0:K.name)||X.playerId)} profile unlocked`),z({screen:"playerPortal"},{replace:!0})}catch(X){y.playerLoginBusy=!1;const K=String((X==null?void 0:X.code)||(X==null?void 0:X.message)||"");if(K==="INVALID_PLAYER_PASSWORD"||K==="PASSWORD_REQUIRED"){const re=u.players.find(Pn=>Pn.id===I);y.playerLoginError=`Incorrect password for ${v((re==null?void 0:re.name)||I)}. Please try again.`}else y.playerLoginError="Unable to unlock player profile. Please try again.";C()}}),(ve=e("rdmPlayerFirebaseForm"))==null||ve.addEventListener("submit",async S=>{var V,G,X;S.preventDefault();const I=((G=(V=e("playerFbEmail"))==null?void 0:V.value)==null?void 0:G.trim())||"",D=((X=e("playerFbPassword"))==null?void 0:X.value)||"";y.playerLoginBusy=!0,y.playerLoginError="",C();try{const K=await mo(I,D);y.playerLoginBusy=!1,y.portalMode="player",y.portalPlayerId=K.playerId;const re=u.players.find(Pn=>Pn.id===K.playerId);M(`Signed in as ${v((re==null?void 0:re.name)||K.playerId)}`),z({screen:"playerPortal"},{replace:!0})}catch(K){y.playerLoginBusy=!1;const re=String((K==null?void 0:K.message)||(K==null?void 0:K.code)||"");/wrong-password|invalid-credential|user-not-found|invalid-email/i.test(re)?y.playerLoginError="Invalid email or password. Please check your credentials.":y.playerLoginError=re||"Unable to sign in with Firebase account.",C()}}),Gu(),document.querySelectorAll("[data-public-tab]").forEach(S=>{S.addEventListener("click",()=>{z({screen:"public",publicTab:S.dataset.publicTab})})}),document.querySelectorAll("[data-open-subpage]").forEach(S=>{S.addEventListener("click",()=>{z({screen:"subpage",morePage:S.dataset.openSubpage})})}),document.querySelectorAll("[data-open-player]").forEach(S=>{S.addEventListener("click",()=>{S.dataset.openPlayer&&z({screen:"playerDetail",detailPlayerId:S.dataset.openPlayer})}),S.tagName!=="BUTTON"&&S.addEventListener("keydown",I=>{(I.key==="Enter"||I.key===" ")&&S.dataset.openPlayer&&(I.preventDefault(),z({screen:"playerDetail",detailPlayerId:S.dataset.openPlayer}))})}),document.querySelectorAll("[data-compare-players]").forEach(S=>{S.addEventListener("click",()=>{Xu(S.dataset.comparePlayers||"")})}),(ae=e("btnDownloadDetailCard"))==null||ae.addEventListener("click",async()=>{const S=u.players.find(I=>I.id===y.detailPlayerId);if(S)try{await ni({player:S,brandLogo:te()})}catch{M("Unable to export profile card")}});const s=e("squadSearchInput");s&&s.addEventListener("input",S=>{const I=S.target.selectionStart;y.squadQuery=S.target.value,C();const D=document.getElementById("squadSearchInput");if(D){D.focus();try{D.setSelectionRange(I,I)}catch{}}}),document.querySelectorAll("[data-squad-filter]").forEach(S=>{S.addEventListener("click",()=>{y.squadFilter=S.dataset.squadFilter,C()})}),document.querySelectorAll("[data-matches-sub]").forEach(S=>{S.addEventListener("click",()=>{y.matchesSubTab=S.dataset.matchesSub,C()})}),document.querySelectorAll("[data-matches-status-filter]").forEach(S=>{S.addEventListener("click",()=>{y.matchesStatusFilter=S.dataset.matchesStatusFilter||"ALL",C()})}),document.querySelectorAll("[data-gallery-album]").forEach(S=>{S.addEventListener("click",()=>{y.galleryAlbum=S.dataset.galleryAlbum,C()})}),document.querySelectorAll("[data-zoom-gallery]").forEach(S=>{S.addEventListener("click",()=>{const D=u.gallery.filter(V=>{const G=String(V.album||"MEMORIES").toUpperCase();return y.galleryAlbum==="ALL"?!["MATCHES","TROPHIES"].includes(G):G===y.galleryAlbum})[Number(S.dataset.zoomGallery)];D!=null&&D.image&&Vn(D.image,v(D.caption||"RDM Gallery"))})}),document.querySelectorAll("[data-zoom-src]").forEach(S=>{S.addEventListener("click",()=>Vn(S.dataset.zoomSrc,S.dataset.zoomCap||""))}),document.querySelectorAll("[data-ext-url]").forEach(S=>{S.addEventListener("click",()=>zr(S.dataset.extUrl))}),zu()}function Ee(e){st({title:`Connect Sync · ${v(e.name)}`,subtitle:"Sign in with your assigned Firebase sync account to publish changes live to Website & Android App.",fields:[{name:"email",label:"Email",type:"email",required:!0},{name:"password",label:"Password",type:"password",required:!0}],submitLabel:"Connect Sync",onSubmit:async t=>{const n=await ya(t.email,t.password);if(n.role!=="admin"&&n.playerId!==e.id)throw await Yr(),new Error(`This account belongs to ${n.playerId||"another user"}, not ${e.id}`);C(),M("Cloud sync connected")}})}function Gu(){var i,s,o,l,c,f,d,h;const e=y.portalPlayerId||De();if(y.screen!=="playerPortal"||!e||!ut(e)&&!J())return;const t=u.players.find(m=>m.id===e);if(!t)return;const n=m=>document.getElementById(m),a=()=>ba(t.id)?!0:(Ee(t),!1);(i=n("btnPlayerPortalVerify"))==null||i.addEventListener("click",()=>Ee(t)),(s=n("btnDownloadPortalCard"))==null||s.addEventListener("click",async()=>{try{await ni({player:t,brandLogo:te()})}catch{M("Unable to export profile card")}}),(o=n("btnPortalPhoto"))==null||o.addEventListener("click",()=>{a()&&$o({onSaveDataUrl:async m=>{try{await mt(t.id,{image:m}),C(),M("Profile photo updated live")}catch(b){if(zt(b)){Ee(t);return}throw b}}})}),(l=n("btnPortalResetPhoto"))==null||l.addEventListener("click",()=>{if(!a())return;it({title:"Use RDM Crest",message:"Reset your profile photo to the official RDM logo?",confirmLabel:"Reset Photo",onConfirm:async()=>{await mt(t.id,{image:""}),C(),M("Photo reset to RDM logo")},onPermissionDenied:()=>Ee(t)})}),(c=n("btnPortalEditProfile"))==null||c.addEventListener("click",()=>{if(!a())return;let m=null;st({title:`Edit ${v(t.name)}`,fields:[{name:"jersey",label:"Jersey Number",value:t.jersey||""},{name:"nick",label:"Nickname",value:t.nick||""},{name:"bio",label:"Bio",type:"textarea",value:t.bio||"",placeholder:"Write your cricket bio (spaces & Enter preserved)",rows:4}],onSubmit:async b=>{m={jersey:b.jersey,nick:b.nick,bio:b.bio},await mt(t.id,m),C(),M("Profile updated live")},onPermissionDenied:()=>Ee(t)})});const r=async m=>{if(a())try{await Qr(t.id,m),C(),M(`Availability: ${m}`)}catch(b){if(zt(b)){Ee(t);return}M((b==null?void 0:b.message)||"Failed to save availability")}};(f=n("btnPortalAvailYes"))==null||f.addEventListener("click",()=>r("AVAILABLE")),(d=n("btnPortalAvailNo"))==null||d.addEventListener("click",()=>r("UNAVAILABLE")),(h=n("btnPortalAddSocial"))==null||h.addEventListener("click",()=>{if(!a())return;const m=Array.isArray(t.socials)?t.socials:[];if(m.length>=3)return M("Maximum 3 social links allowed");st({title:"Add Social Link",fields:[{name:"name",label:"Platform Name",placeholder:"Instagram / YouTube",required:!0},{name:"url",label:"Profile URL",placeholder:"https://...",required:!0}],onSubmit:async b=>{const _=ie(b.url);if(!_)throw new Error("Valid https:// link required");const w=[...m,{name:b.name,url:_}].slice(0,3);await mt(t.id,{socials:w}),C(),M("Social link added live")},onPermissionDenied:()=>Ee(t)})}),document.querySelectorAll("[data-portal-ext]").forEach(m=>{m.addEventListener("click",()=>zr(m.dataset.portalExt))}),document.querySelectorAll("[data-portal-del-social]").forEach(m=>{m.addEventListener("click",()=>{if(!a())return;const b=Number(m.dataset.portalDelSocial),_=Array.isArray(t.socials)?[...t.socials]:[];_.splice(b,1),it({title:"Remove Social Link",message:"Remove this social link from your profile?",confirmLabel:"Remove",danger:!0,onConfirm:async()=>{await mt(t.id,{socials:_}),C(),M("Social link removed")},onPermissionDenied:()=>Ee(t)})})})}function zu(){var e,t;J()&&(document.querySelectorAll("[data-admin-tab]").forEach(n=>{n.addEventListener("click",()=>{z({screen:"admin",adminTab:n.dataset.adminTab},{replace:!0})})}),document.querySelectorAll("[data-admin-action]").forEach(n=>{n.addEventListener("click",()=>Ku(n.dataset.adminAction))}),document.querySelectorAll("[data-admin-edit-player]").forEach(n=>{n.addEventListener("click",()=>{const a=u.players.find(r=>r.id===n.dataset.adminEditPlayer);a&&Y({title:`Edit ${v(a.name)}`,fields:[{name:"name",label:"Player Name",value:a.name,required:!0},{name:"role",label:"Role",value:a.role,required:!0},{name:"detail",label:"Playing Detail",type:"textarea",value:a.detail,rows:3},{name:"jersey",label:"Jersey Number",value:a.jersey||""},{name:"nick",label:"Nickname",value:a.nick||""},{name:"bio",label:"Bio",type:"textarea",value:a.bio||"",rows:3},{name:"photo",label:"Replace Photo (Optional)",type:"file"}],onSubmit:async r=>{const i={...r};r.photo&&(i.image=await He(r.photo,700,.74)),await vo(a.id,i),C(),M("Player updated")}})})}),document.querySelectorAll("[data-admin-remove-player]").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.adminRemovePlayer,r=u.players.find(s=>s.id===a),i=async()=>{await Ao(a),C(),M("Player removed")};it({title:"Remove Player",message:`Remove ${v((r==null?void 0:r.name)||a)} (${a}) from the active RDM squad?`,confirmLabel:"Remove",danger:!0,onConfirm:i,onPermissionDenied:()=>Ye(i)})})}),(e=document.getElementById("btnAdminConnectFirebase"))==null||e.addEventListener("click",()=>{Ye()}),(t=document.getElementById("btnAdminConnectFirebaseBanner"))==null||t.addEventListener("click",()=>{Ye()}),document.querySelectorAll("[data-admin-edit-stats]").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.adminEditStats,r=u.players.find(s=>s.id===a),i=u.stats.find(s=>s.playerId===a)||{};Y({title:`Stats · ${v((r==null?void 0:r.name)||a)}`,fields:[{name:"matches",label:"Matches",type:"number",value:i.matches||0},{name:"runs",label:"Runs",type:"number",value:i.runs||0},{name:"highScore",label:"High Score",type:"number",value:i.highScore||0},{name:"wickets",label:"Wickets",type:"number",value:i.wickets||0},{name:"fours",label:"Fours",type:"number",value:i.fours||0},{name:"sixes",label:"Sixes",type:"number",value:i.sixes||0},{name:"fifties",label:"50s",type:"number",value:i.fifties||0},{name:"hundreds",label:"100s",type:"number",value:i.hundreds||0},{name:"strikeRate",label:"Strike Rate",type:"number",value:i.strikeRate||0},{name:"economy",label:"Economy",type:"number",value:i.economy||0},{name:"bestBowling",label:"Best Bowling",value:i.bestBowling||""},{name:"season",label:"Season",value:i.season||"2027"}],onSubmit:async s=>{const o=l=>Number(l||0)||0;await Q("PlayerStats",a,{playerId:a,matches:o(s.matches),runs:o(s.runs),highScore:o(s.highScore),wickets:o(s.wickets),fours:o(s.fours),sixes:o(s.sixes),fifties:o(s.fifties),hundreds:o(s.hundreds),strikeRate:o(s.strikeRate),economy:o(s.economy),bestBowling:String(s.bestBowling||"").trim(),season:String(s.season||"2027").trim()}),C(),M("Player stats saved")}})})}),document.querySelectorAll("[data-admin-avail]").forEach(n=>{n.addEventListener("click",()=>{var i;const a=n.dataset.adminAvail,r=((i=u.availability.find(s=>s.playerId===a))==null?void 0:i.status)||"AVAILABLE";Y({title:`Availability · ${a}`,fields:[{name:"status",label:"Status",type:"select",value:r,options:["AVAILABLE","UNAVAILABLE"]}],onSubmit:async s=>{await Qr(a,s.status),C(),M("Availability saved")}})})}),document.querySelectorAll("[data-admin-edit-match]").forEach(n=>{n.addEventListener("click",()=>{const a=u.matches.find(r=>r._docId===n.dataset.adminEditMatch);a&&Ts(a)})}),document.querySelectorAll("[data-admin-edit-lineup]").forEach(n=>{n.addEventListener("click",()=>{const a=u.lineups.find(r=>r._docId===n.dataset.adminEditLineup);a&&Y({title:"Edit Playing XI",fields:[{name:"title",label:"Title",value:a.title||"Playing XI",required:!0},{name:"match",label:"Match / Opponent",value:a.match||""},{name:"players",label:"11 Player IDs (comma separated)",type:"textarea",value:(a.players||[]).join(","),rows:3},{name:"subs",label:"Substitutes (comma separated)",value:(a.subs||[]).join(",")}],onSubmit:async r=>{const i=l=>[...new Set(String(l||"").split(",").map(c=>c.trim().toUpperCase()).filter(c=>/^RDM\d{3}$/.test(c)))],s=i(r.players).slice(0,11),o=i(r.subs).filter(l=>!s.includes(l));if(s.length!==11)throw new Error("Playing XI requires 11 valid Player IDs");await Q("PlayingXI",a._docId,{title:r.title,match:r.match,players:s,subs:o,createdMs:a.createdMs||Date.now()}),C(),M("Playing XI updated")}})})}),document.querySelectorAll("[data-admin-edit-item]").forEach(n=>{n.addEventListener("click",()=>{const a=String(n.dataset.adminEditItem||""),r=a.indexOf(":"),i=r>0?a.slice(0,r):"",s=r>0?a.slice(r+1):"";if(i==="Tournaments"){const o=u.tournaments.find(l=>l._docId===s);if(!o)return;Y({title:"Edit Tournament",fields:[{name:"name",label:"Tournament Name",value:o.name||"",required:!0},{name:"season",label:"Season / Year",value:o.season||""},{name:"status",label:"Status",type:"select",value:o.status||"UPCOMING",options:["UPCOMING","ONGOING","COMPLETED"]},{name:"position",label:"Final Position",value:o.position||""},{name:"venueName",label:"Venue",value:o.venueName||o.venue||""}],onSubmit:async l=>{await Q("Tournaments",o._docId,{name:String(l.name||"").trim(),season:String(l.season||"").trim(),status:String(l.status||"UPCOMING").trim(),position:String(l.position||"").trim(),venueName:String(l.venueName||"").trim(),venue:String(l.venueName||"").trim(),createdMs:o.createdMs||Date.now()}),C(),M("Tournament updated")}})}else if(i==="TeamRecords"){const o=u.records.find(l=>l._docId===s);if(!o)return;Y({title:"Edit Team Record",fields:[{name:"title",label:"Record Title",value:o.title||"",required:!0},{name:"value",label:"Record Value",value:o.value||"",required:!0},{name:"player",label:"Player Name (Optional)",value:o.player||""},{name:"season",label:"Season / Year",value:o.season||""}],onSubmit:async l=>{await Q("TeamRecords",o._docId,{title:String(l.title||"").trim(),value:String(l.value||"").trim(),player:String(l.player||"").trim(),season:String(l.season||"").trim(),createdMs:o.createdMs||Date.now()}),C(),M("Record updated")}})}})}),document.querySelectorAll("[data-admin-edit-post]").forEach(n=>{n.addEventListener("click",()=>{const a=String(n.dataset.adminEditPost||""),r=a.indexOf(":"),i=r>0?a.slice(0,r):"",s=r>0?a.slice(r+1):"";if(i==="News"){const o=u.news.find(l=>l._docId===s);if(!o)return;Y({title:"Edit Team News",fields:[{name:"title",label:"Title",value:o.title||"",required:!0},{name:"text",label:"Announcement",type:"textarea",value:o.text||"",rows:5,required:!0},{name:"pinned",label:"Pin announcement",type:"checkbox",checked:!!o.pinned}],onSubmit:async l=>{await Q("News",o._docId,{title:l.title,text:l.text,pinned:!!l.pinned,createdMs:o.createdMs||Date.now()}),C(),M("News updated")}})}else if(i==="Updates"){const o=u.updates.find(l=>l._docId===s);if(!o)return;Y({title:"Edit Official Update",fields:[{name:"category",label:"Category",type:"select",value:o.category||"WEBSITE",options:["WEBSITE","SOCIAL MEDIA","PLATFORM","ACCOUNT","FEATURE","OTHER"]},{name:"title",label:"Title",value:o.title||"",required:!0},{name:"text",label:"Description",type:"textarea",value:o.text||"",rows:5,required:!0},{name:"url",label:"Optional Link",value:o.url||"",placeholder:"https://..."},{name:"pinned",label:"Pin to Home",type:"checkbox",checked:!!o.pinned}],onSubmit:async l=>{await Q("Updates",o._docId,{category:l.category,title:l.title,text:l.text,url:l.url,pinned:!!l.pinned,date:o.date||new Date().toISOString().slice(0,10),createdMs:o.createdMs||Date.now()}),C(),M("Update saved")}})}})}),document.querySelectorAll("[data-admin-edit-honour]").forEach(n=>{n.addEventListener("click",()=>{const a=u.honours.find(r=>r._docId===n.dataset.adminEditHonour);a&&Y({title:"Edit Team Honour",fields:[{name:"year",label:"Year",value:a.year||"",required:!0},{name:"title",label:"Result (e.g. Winner)",value:a.title||"",required:!0},{name:"sub",label:"Tournament Name",value:a.sub||"",required:!0},{name:"photo",label:"Trophy / Honour Photo (Optional)",type:"file"}],onSubmit:async r=>{const i=r.photo?await He(r.photo,900,.78):a.image||R.logoPath;await Q("Honours",a._docId,{year:String(r.year||"").trim(),title:String(r.title||"").trim(),sub:String(r.sub||"").trim(),image:i,order:a.order||99}),C(),M("Honour updated")}})})}),document.querySelectorAll("[data-admin-edit-gallery]").forEach(n=>{n.addEventListener("click",()=>{const a=u.gallery.find(r=>r._docId===n.dataset.adminEditGallery);a&&Y({title:"Edit Gallery Photo",fields:[{name:"caption",label:"Caption",value:a.caption||"RDM Memory"},{name:"album",label:"Album",type:"select",value:String(a.album||"MEMORIES").toUpperCase(),options:["TEAM PHOTOS","MEMORIES","UPDATES"]},{name:"photo",label:"Replace Image (Optional)",type:"file"}],onSubmit:async r=>{const i=r.photo?await He(r.photo,960,.72):a.image;await Q("Gallery",a._docId,{image:i,caption:r.caption,album:r.album,createdMs:a.createdMs||Date.now()}),C(),M("Gallery photo updated")}})})}),document.querySelectorAll("[data-admin-edit-social]").forEach(n=>{n.addEventListener("click",()=>{const a=u.socials.find(r=>r._docId===n.dataset.adminEditSocial);a&&Y({title:"Edit Social Channel",fields:[{name:"name",label:"Platform",value:a.name||"",required:!0},{name:"displayName",label:"Display Title",value:a.displayName||a.name||""},{name:"url",label:"URL",value:a.url||"",placeholder:"https://..."}],onSubmit:async r=>{await Q("Socials",a._docId,{name:r.name.toUpperCase(),displayName:r.displayName||r.name,url:r.url,icon:a.icon||"↗",order:a.order||9}),C(),M("Social updated")}})})}),document.querySelectorAll("[data-admin-pin]").forEach(n=>{n.addEventListener("click",async()=>{const a=String(n.dataset.adminPin||"").split(":"),r=a[0]||"",i=a[1]||"",s=a[2]||"0";if(!r||!i)return;const o=async()=>{await ko(r,i,s==="1"),C(),M(s==="1"?"Pinned to Home":"Unpinned")};try{await o()}catch(l){if(zt(l)){Ye(o);return}M((l==null?void 0:l.message)||"Pin update failed")}})}),document.querySelectorAll("[data-admin-del]").forEach(n=>{n.addEventListener("click",()=>{const a=String(n.dataset.adminDel||""),r=a.indexOf(":"),i=r>0?a.slice(0,r):"",s=r>0?a.slice(r+1):"";if(!i||!s){M("Invalid record identifier");return}const o=async()=>{await Po(i,s),C(),M("Deleted")};it({title:"Delete Record",message:"Permanently delete this record from Firestore?",confirmLabel:"Delete",danger:!0,onConfirm:o,onPermissionDenied:()=>Ye(o)})})}))}function Ye(e){st({title:"Connect Firebase Cloud Sync",subtitle:"Sign in with your Firebase Admin account to authorize this cloud write or delete, or publish updated firestore.rules in Firebase Console.",fields:[{name:"email",label:"Firebase Admin Email",type:"email",value:"rehanalam7124517@gmail.com",required:!0},{name:"password",label:"Firebase Password",type:"password",required:!0}],submitLabel:"Connect & Retry",onSubmit:async t=>{await yo(t.email,t.password),typeof e=="function"?await e():(C(),M("Firebase Cloud Sync connected"))}})}function Y(e){let t=null;st({...e,onSubmit:async n=>(t=n,await e.onSubmit(n)),onPermissionDenied:()=>Ye(async()=>{t&&typeof e.onSubmit=="function"&&await e.onSubmit(t)})})}function Ts(e=null){Y({title:e?"Edit Match":"Add Match / Result",fields:[{name:"opponent",label:"Opponent Team",value:(e==null?void 0:e.opponent)||"",required:!0},{name:"matchStatus",label:"Status",type:"select",value:(e==null?void 0:e.matchStatus)||(e==null?void 0:e.status)||"UPCOMING",options:["UPCOMING","LIVE","COMPLETED","CANCELLED"]},{name:"date",label:"Date",type:"date",value:(e==null?void 0:e.date)||""},{name:"time",label:"Time",type:"time",value:(e==null?void 0:e.time)||""},{name:"venueName",label:"Venue / Ground",value:(e==null?void 0:e.venueName)||(e==null?void 0:e.venue)||""},{name:"ourScore",label:"RDM Score",value:(e==null?void 0:e.ourScore)||""},{name:"oppScore",label:"Opponent Score",value:(e==null?void 0:e.oppScore)||""},{name:"result",label:"Result (if completed)",value:(e==null?void 0:e.result)||""},{name:"potm",label:"Player of the Match",value:(e==null?void 0:e.potm)||""},{name:"note",label:"Match Notes",type:"textarea",value:(e==null?void 0:e.note)||"",placeholder:"Enter key match details (line breaks & spaces preserved)",rows:4}],onSubmit:async t=>{await Q("Matches",(e==null?void 0:e._docId)||null,{...t,venue:t.venueName,status:t.matchStatus==="COMPLETED"?"RESULT":t.matchStatus,createdMs:(e==null?void 0:e.createdMs)||Date.now()}),C(),M("Match saved")}})}function Ku(e){if(e==="addMatch")return Ts(null);if(e==="addNews")return Y({title:"Add Team News",fields:[{name:"title",label:"Title",required:!0},{name:"text",label:"Announcement",type:"textarea",placeholder:"Write announcement (Enter for new lines & spaces preserved)",rows:5,required:!0},{name:"pinned",label:"Pin announcement",type:"checkbox"}],onSubmit:async t=>{await Q("News",null,{title:t.title,text:t.text,pinned:!!t.pinned,createdMs:Date.now()}),C(),M("News added")}});if(e==="addUpdate")return Y({title:"Add Official Update",fields:[{name:"category",label:"Category",type:"select",options:["WEBSITE","SOCIAL MEDIA","PLATFORM","ACCOUNT","FEATURE","OTHER"]},{name:"title",label:"Title",required:!0},{name:"text",label:"Description",type:"textarea",placeholder:"Write full update (Enter for new lines & spaces preserved)",rows:5,required:!0},{name:"url",label:"Optional Link",placeholder:"https://..."},{name:"pinned",label:"Pin to Home",type:"checkbox"}],onSubmit:async t=>{await Q("Updates",null,{category:t.category,title:t.title,text:t.text,url:t.url,pinned:!!t.pinned,date:new Date().toISOString().slice(0,10),createdMs:Date.now()}),C(),M("Update saved")}});if(e==="addGallery")return Y({title:"Add Gallery Photo",fields:[{name:"photo",label:"Select Image",type:"file",required:!0},{name:"caption",label:"Caption",value:"RDM Memory"},{name:"album",label:"Album",type:"select",value:"MEMORIES",options:["TEAM PHOTOS","MEMORIES","UPDATES"]}],onSubmit:async t=>{if(!t.photo)throw new Error("Image required");const n=await He(t.photo,960,.72);await Q("Gallery",null,{image:n,caption:t.caption,album:t.album,createdMs:Date.now()}),C(),M("Photo uploaded")}});if(e==="addPlayer"){const t=u.players.map(a=>Number(String(a.id).replace(/\D/g,""))).filter(Number.isFinite),n=`RDM${String(Math.max(17,...t)+1).padStart(3,"0")}`;return Y({title:`Add Player (${n})`,fields:[{name:"name",label:"Full Name",required:!0},{name:"role",label:"Role",required:!0},{name:"detail",label:"Playing Style / Detail",type:"textarea",rows:3},{name:"jersey",label:"Jersey Number"},{name:"photo",label:"Profile Photo (Optional)",type:"file"}],onSubmit:async a=>{const r=a.photo?await He(a.photo,700,.74):"";await Q("TeamPlayers",n,{id:n,name:a.name.toUpperCase(),role:a.role.toUpperCase(),detail:a.detail.toUpperCase(),jersey:a.jersey,image:r,order:u.players.length+1,active:!0}),C(),M("Player added")}})}if(e==="addLineup")return Y({title:"Publish Playing XI",fields:[{name:"title",label:"Title",value:"Playing XI",required:!0},{name:"match",label:"Match / Opponent"},{name:"players",label:"11 Player IDs (comma separated)",type:"textarea",value:"RDM001,RDM002,RDM003,RDM004,RDM005,RDM006,RDM007,RDM008,RDM009,RDM010,RDM011",rows:3},{name:"subs",label:"Substitutes (comma separated)",value:"RDM012,RDM013,RDM014,RDM015"}],onSubmit:async t=>{const n=i=>[...new Set(String(i||"").split(",").map(s=>s.trim().toUpperCase()).filter(s=>/^RDM\d{3}$/.test(s)))],a=n(t.players).slice(0,11),r=n(t.subs).filter(i=>!a.includes(i));if(a.length!==11)throw new Error("Playing XI requires 11 valid Player IDs");await Q("PlayingXI",null,{title:t.title,match:t.match,players:a,subs:r,createdMs:Date.now()}),C(),M("Playing XI published")}});if(e==="addHonour")return Y({title:"Add Team Honour",fields:[{name:"year",label:"Year",value:String(new Date().getFullYear()),required:!0},{name:"title",label:"Result (e.g. Winner)",required:!0},{name:"sub",label:"Tournament Name",required:!0},{name:"photo",label:"Trophy / Honour Photo (Optional)",type:"file"}],onSubmit:async t=>{const n=t.photo?await He(t.photo,900,.78):R.logoPath;await Q("Honours",null,{year:String(t.year||"").trim(),title:String(t.title||"").trim(),sub:String(t.sub||"").trim(),image:n,order:u.honours.length+1}),C(),M("Honour saved")}});if(e==="addTournament")return Y({title:"Add Tournament",fields:[{name:"name",label:"Tournament Name",required:!0},{name:"season",label:"Season / Year",value:String(new Date().getFullYear())},{name:"status",label:"Status",type:"select",options:["UPCOMING","ONGOING","COMPLETED"]},{name:"position",label:"Final Position"},{name:"venueName",label:"Venue"}],onSubmit:async t=>{await Q("Tournaments",null,{name:String(t.name||"").trim(),season:String(t.season||"").trim(),status:String(t.status||"UPCOMING").trim(),position:String(t.position||"").trim(),venueName:String(t.venueName||"").trim(),venue:String(t.venueName||"").trim(),createdMs:Date.now()}),C(),M("Tournament added")}});if(e==="addRecord")return Y({title:"Add Team Record",fields:[{name:"title",label:"Record Title",placeholder:"e.g. Highest Team Score",required:!0},{name:"value",label:"Record Value",placeholder:"e.g. 214/3 (20 Ov)",required:!0},{name:"player",label:"Player Name (Optional)"},{name:"season",label:"Season / Year",value:String(new Date().getFullYear())}],onSubmit:async t=>{await Q("TeamRecords",null,{...t,createdMs:Date.now()}),C(),M("Record saved")}});if(e==="editAppConfig")return Y({title:"App & APK Update",subtitle:"Bump Version & Version Code to trigger automatic Update Popup in all older Android APKs",fields:[{name:"appVersion",label:"Latest APK Version (e.g. 1.2.0)",value:pn(),required:!0},{name:"appVersionCode",label:"Version Code (Integer, e.g. 3)",type:"number",value:String(u.appVersionCode||le.versionCode),required:!0},{name:"updateNotes",label:"What is New (Update Popup Notes)",type:"textarea",value:u.updateNotes||"",placeholder:"Describe new features or bug fixes for users",rows:3},{name:"apkDownloadUrl",label:"Direct APK Download URL",value:un(),required:!0},{name:"apkReleasesUrl",label:"Update Page URL (Optional)",value:Cu()},{name:"forceUpdate",label:"Force Update (Hide Later button)",type:"checkbox",checked:!!u.forceUpdate},{name:"logoPhoto",label:"Update Team Logo (Optional)",type:"file"}],onSubmit:async t=>{const n=t.logoPhoto?await He(t.logoPhoto,600,.8):"";await wo({appVersion:t.appVersion,appVersionCode:t.appVersionCode,updateNotes:t.updateNotes,forceUpdate:!!t.forceUpdate,apkDownloadUrl:t.apkDownloadUrl,apkReleasesUrl:t.apkReleasesUrl,logo:n}),C(),M("APK update settings synced to all devices")}});if(e==="addSocial")return Y({title:"Add Social Channel",fields:[{name:"name",label:"Platform",placeholder:"INSTAGRAM",required:!0},{name:"displayName",label:"Display Name",placeholder:"RDM Instagram"},{name:"url",label:"URL",placeholder:"https://...",required:!0}],onSubmit:async t=>{await Q("Socials",null,{name:t.name.toUpperCase(),displayName:t.displayName||t.name,url:t.url,icon:"↗",order:u.socials.length+1}),C(),M("Social channel added")}})}function Xu(e=""){const n=Xa(u.players,u.stats,u.matches,u.achievements).ranked;if(!n.length){M("No squad players available to compare");return}let a=e&&n.some(s=>s.p.id===e)?e:n[0].p.id,r=(n.find(s=>s.p.id!==a)||n[0]).p.id;const i=()=>{const s=n.find(m=>m.p.id===a)||n[0],o=n.find(m=>m.p.id===r)||n[Math.min(1,n.length-1)]||s,l=Ct(s.p.image,te()),c=Ct(o.p.image,te()),f=m=>n.map(b=>`
      <option value="${p(b.p.id)}" ${b.p.id===m?"selected":""}>${p(v(b.p.name))} (${p(he[b.p.id]||b.p.id)})</option>
    `).join(""),h=[["MVP Points",s.mvpPoints,o.mvpPoints,"high"],["Matches",s.s.matches,o.s.matches,"high"],["Runs",s.s.runs,o.s.runs,"high"],["High Score",s.s.highScore,o.s.highScore,"high"],["Wickets",s.s.wickets,o.s.wickets,"high"],["4s / 6s",`${s.s.fours}/${s.s.sixes}`,`${o.s.fours}/${o.s.sixes}`,"none",s.s.fours+s.s.sixes*2,o.s.fours+o.s.sixes*2],["50s / 100s",`${s.s.fifties}/${s.s.hundreds}`,`${o.s.fifties}/${o.s.hundreds}`,"none",s.s.fifties+s.s.hundreds*2,o.s.fifties+o.s.hundreds*2],["Strike Rate",s.s.strikeRate||0,o.s.strikeRate||0,"high"],["Economy",s.s.economy||"—",o.s.economy||"—",s.s.economy>0&&o.s.economy>0?"low":"none",s.s.economy||0,o.s.economy||0],["Best Bowling",s.s.bestBowling||"—",o.s.bestBowling||"—","none"],["POTM Awards",s.potmCount,o.potmCount,"high"]].map(([m,b,_,w,g,k])=>{const P=Number(g!==void 0?g:b),$=Number(k!==void 0?k:_);let N=!1,L=!1;return w==="high"||w==="none"&&g!==void 0?P>$?N=!0:$>P&&(L=!0):w==="low"&&P>0&&$>0&&(P<$?N=!0:$<P&&(L=!0)),`
        <div class="compareMetricRow">
          <div class="compareVal num${N?" is-leader":""}">${p(String(b))}</div>
          <div class="compareMetricLabel">${p(m)}</div>
          <div class="compareVal num${L?" is-leader":""}">${p(String(_))}</div>
        </div>
      `}).join("");return`
      <div class="comparePickerRow">
        <label class="fieldBlock">
          <span>Player A</span>
          <select id="cmpSelectA">${f(s.p.id)}</select>
        </label>
        <label class="fieldBlock">
          <span>Player B</span>
          <select id="cmpSelectB">${f(o.p.id)}</select>
        </label>
      </div>
      <div class="compareCardsRow">
        <div class="compareHeroMini">
          <div class="rdmPortraitWrap">
            <img class="compareMiniAvatar avatarCircle ${l.isCrest?"is-crest":"is-photo"}" src="${p(l.src)}" alt="${p(s.p.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'">
            ${s.potmCount>0?Et(s.potmCount,`${s.potmCount}× Player of the Match`):""}
          </div>
          <div>
            <strong>${p(v(s.p.name))}</strong>
            <span>${p(v(s.p.role))}</span>
          </div>
        </div>
        <div class="compareHeroMini">
          <div class="rdmPortraitWrap">
            <img class="compareMiniAvatar avatarCircle ${c.isCrest?"is-crest":"is-photo"}" src="${p(c.src)}" alt="${p(o.p.name)}" referrerPolicy="no-referrer" onerror="this.onerror=null;this.src='${R.logoPath}'">
            ${o.potmCount>0?Et(o.potmCount,`${o.potmCount}× Player of the Match`):""}
          </div>
          <div>
            <strong>${p(v(o.p.name))}</strong>
            <span>${p(v(o.p.role))}</span>
          </div>
        </div>
      </div>
      <div class="compareTable">${h}</div>
    `};Mo({title:"Player Comparison",subtitle:"Side-by-side verified career & MVP impact stats",wide:!0,bodyHtml:i(),onReady:s=>{const o=s.querySelector(".customSheetBody"),l=()=>{var c,f;(c=o.querySelector("#cmpSelectA"))==null||c.addEventListener("change",d=>{a=d.target.value,o.innerHTML=i(),l()}),(f=o.querySelector("#cmpSelectB"))==null||f.addEventListener("change",d=>{r=d.target.value,o.innerHTML=i(),l()})};l()}})}async function Rs(e){const t=ye(),n=t?await eo():!0;xo({currentVersion:e.currentVersion,latestVersion:e.latestVersion,notes:e.notes,forceUpdate:e.forceUpdate,isNative:t,needsInstallPermission:t&&!n,onOpenPermissionSettings:()=>to(),onSubscribeProgress:a=>ro(a),onDownload:async()=>t?await ao(e.apkUrl||un()):(Kr(e.apkUrl||un()),M(`Downloading RDM Official APK v${e.latestVersion}...`),{started:!0})})}async function jt(e=!1){const t=hn();if(!t.hasUpdate)return e&&M(`You are on the latest version (v${t.currentVersion})`),!1;if(!e&&!t.forceUpdate)try{if(sessionStorage.getItem(`rdm-dismiss-update-${t.latestVersion}`)==="1")return!1}catch{}return await Rs(t),!0}function Yu(){if(ws())return;const e=Date.now();if(e-y.lastBackPressAt<2e3){Qs();return}y.lastBackPressAt=e,M("Press back again to exit RDM Official")}async function Ju(){Wt(y.theme);try{const n=new URLSearchParams(window.location.search).get("key")||"";if(n.trim()){const a=await Ds(n);(a==null?void 0:a.role)==="admin"?(y.portalMode="admin",y.screen="portalAuth"):(a==null?void 0:a.role)==="player"&&a.playerId&&(y.portalMode="player",y.portalPlayerId=a.playerId,y.screen="playerPortal")}}catch{}const e=vs();W.length=0,W.push(e);try{window.history.replaceState({rdmIdx:0},"",at(e))}catch{}window.addEventListener("popstate",()=>{if(qn()){ei();try{window.history.pushState({rdmIdx:W.length-1},"",at(W[W.length-1]))}catch{}return}if(y.drawerOpen){Ce(!1);try{window.history.pushState({rdmIdx:W.length-1},"",at(W[W.length-1]))}catch{}return}W.length>1&&(W.pop(),Qa(W[W.length-1]))}),await Js(Yu),window.addEventListener("rdm-pwa-ready",()=>{(y.screen==="public"&&y.publicTab==="more"||y.screen==="subpage"&&y.morePage==="download")&&C()}),await oe();let t=Date.now();Hn().then(n=>{var a;(a=n==null?void 0:n.otaResult)!=null&&a.updated&&M(`Updated silently to v${n.otaResult.otaVersion||""}`),jt(!1)}).catch(()=>{}),io(()=>{const n=Date.now();n-t<3e4||(t=n,Hn().then(()=>{jt(!1)}).catch(()=>{}))}),po(()=>{const n=document.activeElement,a=n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.tagName==="SELECT");!qn()&&!a&&(C(),jt(!1))}),go(({role:n,playerId:a,verified:r})=>{if(r&&n==="player"&&a&&(y.portalPlayerId=a,y.screen==="playerAuth")){y.portalMode="player",z({screen:"playerPortal"},{replace:!0}),xn();return}y.portalMode==="admin"?r&&n==="admin"?z({screen:"admin",adminTab:"overview"},{replace:!0}):z({screen:"portalAuth"},{replace:!0}):y.screen==="portalAuth"&&r&&n==="admin"?z({screen:"admin",adminTab:"overview"},{replace:!0}):y.screen==="admin"&&!(r&&n==="admin")?z({screen:"portalAuth"},{replace:!0}):y.screen==="playerPortal"&&!(ut(y.portalPlayerId||De())||J())?z({screen:"playerAuth"},{replace:!0}):C(),xn()}),setTimeout(()=>xn(),1200)}Ju();export{oa as W};
