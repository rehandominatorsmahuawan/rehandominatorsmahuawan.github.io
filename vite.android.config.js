import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

function copyAndroidPublicAssetsPlugin() {
  const safeStaticFiles = [
    'firebase-config.js'
  ];
  const safeStaticDirs = [
    'assets',
    'src/assets'
  ];

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

  const mimeTypes = {
    '.js': 'application/javascript; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml'
  };

  function resolveSafeAsset(urlPath) {
    const cleanPath = decodeURIComponent((urlPath || '').split('?')[0]).replace(/^\/+/, '');
    if (!cleanPath || cleanPath.includes('..')) return null;
    const isSafeFile = safeStaticFiles.includes(cleanPath);
    const isSafeDir = safeStaticDirs.some((dir) => cleanPath.startsWith(`${dir}/`));
    if (!isSafeFile && !isSafeDir) return null;
    const absPath = path.resolve(process.cwd(), cleanPath);
    if (!absPath.startsWith(process.cwd()) || !fs.existsSync(absPath)) return null;
    if (!fs.statSync(absPath).isFile()) return null;
    return absPath;
  }

  return {
    name: 'rdm-android-copy-public-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const assetPath = resolveSafeAsset(req.url);
        if (!assetPath) return next();
        const ext = path.extname(assetPath).toLowerCase();
        res.statusCode = 200;
        res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
        fs.createReadStream(assetPath).pipe(res);
      });
    },
    writeBundle(options) {
      const outDir = options.dir || path.resolve(process.cwd(), 'dist-android');
      for (const file of safeStaticFiles) {
        const srcPath = path.resolve(process.cwd(), file);
        if (fs.existsSync(srcPath)) {
          fs.copyFileSync(srcPath, path.join(outDir, file));
        }
      }
      for (const dir of safeStaticDirs) {
        const srcDir = path.resolve(process.cwd(), dir);
        copyDir(srcDir, path.join(outDir, dir));
      }
    }
  };
}

function rdmAndroidPortalStubPlugin() {
  const virtualId = 'virtual:rdm-portal';
  const resolvedId = '\0' + virtualId;
  return {
    name: 'rdm-android-portal-stub',
    resolveId(id) {
      if (id === virtualId) return resolvedId;
    },
    load(id) {
      if (id !== resolvedId) return null;
      return `
        export const ADMIN_CONSOLE_ENABLED = true;
        export const PORTAL_ENABLED = true;
        export async function resolvePortalKey() { return null; }
      `;
    }
  };
}

export default defineConfig({
  root: path.resolve(process.cwd(), 'android-web'),
  base: './',
  server: {
    port: 3001,
    host: '0.0.0.0',
    allowedHosts: true
  },
  build: {
    outDir: path.resolve(process.cwd(), 'dist-android'),
    emptyOutDir: true
  },
  plugins: [rdmAndroidPortalStubPlugin(), copyAndroidPublicAssetsPlugin()]
});
