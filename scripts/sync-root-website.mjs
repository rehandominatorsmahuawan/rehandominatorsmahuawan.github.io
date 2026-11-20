import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const distAssetsDir = path.join(distDir, 'assets');
const webAppDir = path.join(rootDir, 'web-app');

if (!fs.existsSync(distAssetsDir)) {
  console.error('dist/assets not found. Run vite build first.');
  process.exit(1);
}

fs.rmSync(webAppDir, { recursive: true, force: true });
fs.mkdirSync(webAppDir, { recursive: true });

const assetFiles = fs.readdirSync(distAssetsDir);
let entryJs = '';
let entryCss = '';

for (const file of assetFiles) {
  const srcFile = path.join(distAssetsDir, file);
  if (!fs.statSync(srcFile).isFile()) continue;
  fs.copyFileSync(srcFile, path.join(webAppDir, file));
  if (/^index-.*\.js$/i.test(file)) entryJs = file;
  if (/^index-.*\.css$/i.test(file)) entryCss = file;
}

if (!entryJs || !entryCss) {
  console.error('Could not locate compiled index-*.js or index-*.css in dist/assets');
  process.exit(1);
}

const rootHtml = `<!doctype html>
<html lang="en" data-web-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#FFFFFF" id="rdmThemeMeta">
  <title>RDM Official | Rehan Dominators Mahuawan (RDM) — Cricket Team, Gopalganj Bihar</title>
  <meta name="description" content="Official cricket club website for Rehan Dominators Mahuawan (RDM), Gopalganj, Bihar — featuring the squad, match centre, team records, tournaments, playing XI, honours, gallery, and updates.">
  <meta name="keywords" content="Rehan Dominators Mahuawan, RDM Mahuawan, RDM Cricket Team, Rehan Dominators, Mahuawan Cricket Team, Gopalganj Cricket Team, Bihar Cricket Team, Rehan Akhtar, RDM Official">
  <meta name="author" content="Rehan Dominators Mahuawan">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="googlebot" content="index, follow, max-image-preview:large">

  <link rel="canonical" href="https://rehandominatorsmahuawan.github.io/">
  <link rel="icon" type="image/png" sizes="192x192" href="pwa-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="RDM Official">
  <link rel="manifest" href="site.webmanifest">

  <meta property="og:type" content="website">
  <meta property="og:title" content="RDM Official | Rehan Dominators Mahuawan (RDM)">
  <meta property="og:description" content="Official cricket club website for Rehan Dominators Mahuawan (RDM) · Mahuawan · Gopalganj · Bihar">
  <meta property="og:url" content="https://rehandominatorsmahuawan.github.io/">
  <meta property="og:image" content="assets/rdm-logo.png">
  <meta property="og:site_name" content="Rehan Dominators Mahuawan">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="RDM Official | Rehan Dominators Mahuawan (RDM)">
  <meta name="twitter:description" content="Official Cricket Club · Mahuawan · Gopalganj · Bihar">
  <meta name="twitter:image" content="assets/rdm-logo.png">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rehan Dominators Mahuawan",
    "alternateName": ["RDM", "RDM Official", "RDM Mahuawan", "RDM Cricket Team", "Rehan Dominators", "Mahuawan Cricket Team"],
    "url": "https://rehandominatorsmahuawan.github.io/"
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    "name": "Rehan Dominators Mahuawan",
    "sport": "Cricket",
    "description": "Official cricket club from Mahuawan, Gopalganj, Bihar.",
    "location": { "@type": "Place", "name": "Mahuawan, Gopalganj, Bihar, India" },
    "url": "https://rehandominatorsmahuawan.github.io/",
    "logo": "assets/rdm-logo.png"
  }
  </script>
  <script>
    (function(){
      try {
        var t = localStorage.getItem('rdm-web-theme') || 'light';
        if (!/^(light|dark)$/.test(t)) t = 'light';
        document.documentElement.setAttribute('data-web-theme', t);
        var meta = document.getElementById('rdmThemeMeta');
        if (meta) meta.content = t === 'dark' ? '#0B0E14' : '#FFFFFF';
      } catch (e) {}
    })();
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=JetBrains+Mono:wght@500;600;700&family=Outfit:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" crossorigin href="./web-app/${entryCss}">
</head>
<body>
  <div id="rdmSiteRoot" class="siteShell">
    <main id="siteViewport" class="siteViewport" aria-live="polite"></main>
  </div>

  <div id="rdmToast" class="rdmToast" role="status" aria-live="polite"></div>

  <script src="https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.12.5/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore-compat.js"></script>
  <script src="firebase-config.js"></script>
  <script type="module" crossorigin src="./web-app/${entryJs}"></script>
  <script>
    if ('serviceWorker' in navigator && !/^(localhost|127\\.0\\.0\\.1)$/.test(location.hostname) && !location.hostname.endsWith('.run.app')) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' })
          .then(function (reg) { if (reg && reg.update) reg.update().catch(function () {}); })
          .catch(function () {});
      });
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(rootDir, 'index.html'), rootHtml, 'utf8');
console.log(`Synced root index.html -> ./web-app/${entryJs} & ./web-app/${entryCss}`);
