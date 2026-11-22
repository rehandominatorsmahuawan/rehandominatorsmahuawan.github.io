/* RDM Premium Typography Normalizer — decodes legacy Unicode small-caps into crisp standard text */
(function(){
  'use strict';
  const REVERSE = {
    'ᴀ':'A','ʙ':'B','ᴄ':'C','ᴅ':'D','ᴇ':'E','ꜰ':'F','ɢ':'G','ʜ':'H','ɪ':'I',
    'ᴊ':'J','ᴋ':'K','ʟ':'L','ᴍ':'M','ɴ':'N','ᴏ':'O','ᴘ':'P','ǫ':'Q','ʀ':'R',
    'ꜱ':'S','ᴛ':'T','ᴜ':'U','ᴠ':'V','ᴡ':'W','ʏ':'Y','ᴢ':'Z'
  };
  const SMALL_CAPS_RE = /[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡʏᴢ]/;
  const SMALL_CAPS_GLOBAL = /[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡʏᴢ]/g;
  const UPPER_KEEP = /\b(RDM|XI|H2H|MPL|POTM|NR|ID|PWA|OK|IG|VS|RA08|SA-V|SO-WK|AKA|ASI|WSM|JBD|GLM|SHA57|SAL02|LKY|KLF|SKH|ABS|SBA|ZSN|JVD|SK)\b/g;

  function toReadableCase(str){
    const decoded = String(str ?? '').replace(SMALL_CAPS_GLOBAL, ch => REVERSE[ch] || ch);
    if (!SMALL_CAPS_RE.test(String(str ?? ''))) return decoded;
    // Preserve clean title/sentence casing when converting legacy all-caps Unicode small caps
    let out = decoded.toLowerCase().replace(/(^|[.!?•·\n]\s*|^\s*)([a-z])/g, (_, p, c) => p + c.toUpperCase());
    out = out.replace(/\b([a-z])/g, (m, c, idx, full) => {
      // Title-case short UI labels/names/headings nicely
      const prev = full.slice(Math.max(0, idx - 2), idx);
      if (idx === 0 || /[\s•·/\-(]/.test(prev.slice(-1))) {
        const word = full.slice(idx).match(/^[a-z]+/i)?.[0] || '';
        if (['and','or','of','the','in','on','to','for','at','by','vs','is','are','was','be'].includes(word.toLowerCase()) && idx > 0) {
          return word.toLowerCase().charAt(0);
        }
        return c.toUpperCase();
      }
      return c;
    });
    out = out.replace(new RegExp(UPPER_KEEP.source, 'gi'), m => m.toUpperCase());
    out = out.replace(/\bRdm(\d+)/gi, (_, n) => 'RDM' + n);
    return out;
  }

  const SKIP = new Set(['SCRIPT','STYLE','NOSCRIPT','IFRAME','SVG','PATH','CODE','PRE']);

  function textNode(n){
    const p = n.parentElement;
    if (!p || SKIP.has(p.tagName) || p.closest('[data-rdm-no-mini]')) return;
    const v = n.nodeValue || '';
    if (SMALL_CAPS_RE.test(v)) n.nodeValue = toReadableCase(v);
  }

  function control(el){
    if (el.closest?.('[data-rdm-no-mini]')) return;
    if (el.placeholder && SMALL_CAPS_RE.test(el.placeholder)) el.placeholder = toReadableCase(el.placeholder);
    if (el.tagName === 'SELECT') {
      el.querySelectorAll('option').forEach(o => {
        if (!o.dataset.rdmValueSaved) {
          o.dataset.rdmValueSaved = '1';
          if (!o.hasAttribute('value')) o.value = toReadableCase(o.textContent).toUpperCase();
        }
        if (SMALL_CAPS_RE.test(o.textContent)) o.textContent = toReadableCase(o.textContent);
      });
    }
  }

  function scan(root = document){
    if (root.nodeType === 3) { textNode(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 9) return;
    if (root.nodeType === 1 && SKIP.has(root.tagName)) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) textNode(n);
    if (root.matches?.('input,textarea,select')) control(root);
    root.querySelectorAll?.('input,textarea,select').forEach(control);
  }

  let busy = false;
  const obs = new MutationObserver(ms => {
    if (busy) return;
    busy = true;
    try { ms.forEach(m => m.addedNodes.forEach(scan)); } finally { busy = false; }
  });

  function start(){
    scan(document);
    obs.observe(document.documentElement, { subtree: true, childList: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();

  window.rdmGlobalMini = toReadableCase;
})();

/* Classify Edit / Delete / Pin buttons across dynamically rendered sections */
(function(){
  const classify = b => {
    if (!b || b.nodeType !== 1) return;
    const raw = b.textContent || '';
    const t = (typeof window.rdmGlobalMini === 'function' ? window.rdmGlobalMini(raw) : raw).toLowerCase().replace(/\s+/g, ' ');
    b.classList.remove('rdmDeleteAction', 'rdmEditAction', 'rdmPinAction');
    if (t.includes('delete') || t.includes('remove')) b.classList.add('rdmDeleteAction');
    else if (t.includes('unpin') || /(^|\s)pin(\s|$)/.test(t)) b.classList.add('rdmPinAction');
    else if (t.includes('edit')) b.classList.add('rdmEditAction');
  };
  const scan = r => { if (r.matches?.('button')) classify(r); r.querySelectorAll?.('button').forEach(classify); };
  const go = () => {
    scan(document);
    new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => { if (n.nodeType === 1) scan(n); }))).observe(document.body, { childList: true, subtree: true });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go, { once: true });
  else go();
})();
