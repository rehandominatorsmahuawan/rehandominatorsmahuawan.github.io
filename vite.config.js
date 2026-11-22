import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

function copyStaticFilesPlugin() {
  const staticFiles = [
    'portals.html',
    'app.js',
    'access-links.js',
    'admin-auth-email.js',
    'admin-player-manager.js',
    'enhancements.js',
    'firebase-backend.js',
    'firebase-config.js',
    'firebase-login.js',
    'forms-v6821.js',
    'gallery-v686.js',
    'rdm-global-mini.js',
    'rdm-pwa.js',
    'rdm-v6900.js',
    'rdm-v6901.js',
    'rdm-v6902.js',
    'updates.js',
    'v6.js',
    'style.css',
    'rdm-v6890-fix.css',
    'site.webmanifest',
    'sw.js',
    'pwa-192x192.png',
    'pwa-512x512.png',
    'pwa-maskable-512x512.png',
    'apple-touch-icon.png',
    'robots.txt',
    'sitemap.xml',
    'googlecd319e61dfe51dd1.html'
  ];
  const staticDirs = ['assets', 'src/assets'];

  function copyDir(src, dest) {
    if (!fs.existsSync(src)) return;
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
      const s = path.join(src, entry.name);
      const d = path.join(dest, entry.name);
      if (entry.isDirectory()) copyDir(s, d);
      else fs.copyFileSync(s, d);
    }
  }

  return {
    name: 'rdm-copy-static',
    writeBundle(options) {
      const outDir = options.dir || path.resolve(process.cwd(), 'dist');
      for (const file of staticFiles) {
        const srcPath = path.resolve(process.cwd(), file);
        if (fs.existsSync(srcPath)) {
          fs.copyFileSync(srcPath, path.join(outDir, file));
        }
      }
      for (const dir of staticDirs) {
        copyDir(path.resolve(process.cwd(), dir), path.join(outDir, dir));
      }
      const distIndex = path.join(outDir, 'index.html');
      if (fs.existsSync(distIndex)) {
        let html = fs.readFileSync(distIndex, 'utf8');
        html = html
          .replace(/(?:\.?\/)?assets\/site-[^"']+\.webmanifest(?:\?[^"']*)?/g, 'site.webmanifest?v=8000')
          .replace(/(?:\.?\/)?assets\/pwa-192x192-[^"']+\.png(?:\?[^"']*)?/g, 'pwa-192x192.png?v=7400')
          .replace(/(?:\.?\/)?assets\/apple-touch-icon-[^"']+\.png(?:\?[^"']*)?/g, 'apple-touch-icon.png?v=7400')
          .replace(/(?:\.?\/)?assets\/rdm-logo-[^"']+\.png(?:\?[^"']*)?/g, 'assets/rdm-logo.png?v=7400')
          .replace(/(?:\.?\/)?assets\/hero_cricket_stadium_[^"']+\.jpg(?:\?[^"']*)?/g, 'src/assets/images/hero_cricket_stadium_1794890926411.jpg')
          .replace(/(?:\.?\/)?assets\/club_heritage_banner_[^"']+\.jpg(?:\?[^"']*)?/g, 'src/assets/images/club_heritage_banner_1794890926814.jpg');
        if (!html.includes('style.css')) {
          html = html.replace(
            '</head>',
            '  <link rel="stylesheet" href="style.css?v=8.0.0">\n  <link rel="stylesheet" href="rdm-v6890-fix.css?v=8.0.0">\n</head>'
          );
        }
        fs.writeFileSync(distIndex, html, 'utf8');
      }
    }
  };
}

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  plugins: [copyStaticFilesPlugin()]
});
