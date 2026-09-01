/* RDM V6.8.27 — remaining profile add/edit prompts -> same custom full-screen editor */
(()=>{
 const stamp=()=>typeof rdmStamp==='function'?rdmStamp():new Date().toISOString();
 const safe=u=>typeof safeUrl==='function'?safeUrl(u):/^https?:\/\//i.test(String(u||''));
 const player=()=>typeof rdmPlayer==='function'?rdmPlayer():null;
 const write=async p=>{if(typeof rdmProfileWrite==='function')await rdmProfileWrite(p);if(typeof rdmRefresh==='function')rdmRefresh();};
 if(typeof window.v62Modal==='function'){
  window.selfEdit=async function(k){const p=player();if(!p)return;
   if(k==='pass')return v62Modal('',[{k:'old',label:'CURRENT PASSWORD',type:'password'},{k:'nw',label:'NEW PASSWORD • MINIMUM 6 CHARACTERS',type:'password'}],{},async d=>{if(!d.old||!d.nw||d.nw.length<6){toast('MINIMUM 6 CHARACTERS');throw Error('required')}const u=rdmAuth.currentUser,cred=firebase.auth.EmailAuthProvider.credential(u.email,d.old);await u.reauthenticateWithCredential(cred);await u.updatePassword(d.nw);toast('PASSWORD CHANGED')});
   const cfg={jersey:['JERSEY NUMBER','text'],nick:['NICKNAME','text'],bio:['BIO','textarea']}[k];if(!cfg)return;
   v62Modal('',[{k:'value',label:cfg[0],type:cfg[1],full:true}],{value:p[k]||''},async d=>{p[k]=d.value.trim();await write(p);toast('SAVED ONLINE')});
  };
  window.addOwnSocial=function(){const p=player();if(!p)return;if((p.socials||[]).length>=3)return toast('MAX 3 SOCIALS');v62Modal('',[{k:'name',label:'SOCIAL NAME'},{k:'url',label:'SOCIAL LINK',full:true}],{},async d=>{if(!d.name||!safe(d.url)){toast('VALID LINK REQUIRED');throw Error('required')}p.socials=[...(p.socials||[]),{name:d.name.trim(),url:d.url.trim()}].slice(0,3);await write(p);toast('SOCIAL ADDED')})};
  window.editOwnSocial=function(i){const p=player();if(!p)return;const raw=p.socials?.[i];const s=typeof raw==='string'?{name:'SOCIAL '+(i+1),url:raw}:raw;if(!s)return;v62Modal('',[{k:'name',label:'SOCIAL NAME'},{k:'url',label:'SOCIAL LINK',full:true}],s,async d=>{if(!safe(d.url)){toast('VALID LINK REQUIRED');throw Error('required')}p.socials[i]={name:d.name.trim()||('SOCIAL '+(i+1)),url:d.url.trim()};await write(p);toast('SOCIAL UPDATED')})};
 }
 // Ensure legacy main editor has no title in add/edit mode.
 const oldOpen=window.openEdit;if(typeof oldOpen==='function')window.openEdit=function(...a){oldOpen(...a);const t=document.getElementById('editTitle');if(t)t.hidden=true;};
})();
