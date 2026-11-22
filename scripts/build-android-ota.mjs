import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import crypto from 'node:crypto';

const rootDir = process.cwd();
const distAndroidDir = path.join(rootDir, 'dist-android');
const otaDir = path.join(rootDir, 'ota');
const zipPath = path.join(otaDir, 'android-ota.zip');
const manifestPath = path.join(otaDir, 'manifest.json');
const versionJsonPath = path.join(rootDir, 'version.json');

if (!fs.existsSync(path.join(distAndroidDir, 'index.html'))) {
  console.error('dist-android/index.html not found. Run `npm run android:build` first.');
  process.exit(1);
}

function makeCrc32Table() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }
  return table;
}
const CRC_TABLE = makeCrc32Table();

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = CRC_TABLE[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function collectFiles(dir, base = '') {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...collectFiles(abs, rel));
    } else if (entry.isFile()) {
      out.push({ rel: rel.replace(/\\/g, '/'), abs });
    }
  }
  return out.sort((a, b) => a.rel.localeCompare(b.rel));
}

function buildZipBuffer(entries) {
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  for (const entry of entries) {
    const raw = fs.readFileSync(entry.abs);
    const compressed = zlib.deflateRawSync(raw, { level: 9 });
    const useDeflate = compressed.length < raw.length;
    const data = useDeflate ? compressed : raw;
    const method = useDeflate ? 8 : 0;
    const crc = crc32(raw);
    const nameBuf = Buffer.from(entry.rel, 'utf8');

    const localHeader = Buffer.alloc(30);
    localHeader.writeUInt32LE(0x04034b50, 0);
    localHeader.writeUInt16LE(20, 4);
    localHeader.writeUInt16LE(0x0800, 6);
    localHeader.writeUInt16LE(method, 8);
    localHeader.writeUInt16LE(0, 10);
    localHeader.writeUInt16LE(0, 12);
    localHeader.writeUInt32LE(crc, 14);
    localHeader.writeUInt32LE(data.length, 18);
    localHeader.writeUInt32LE(raw.length, 22);
    localHeader.writeUInt16LE(nameBuf.length, 26);
    localHeader.writeUInt16LE(0, 28);

    localParts.push(localHeader, nameBuf, data);

    const centralHeader = Buffer.alloc(46);
    centralHeader.writeUInt32LE(0x02014b50, 0);
    centralHeader.writeUInt16LE(20, 4);
    centralHeader.writeUInt16LE(20, 6);
    centralHeader.writeUInt16LE(0x0800, 8);
    centralHeader.writeUInt16LE(method, 10);
    centralHeader.writeUInt16LE(0, 12);
    centralHeader.writeUInt16LE(0, 14);
    centralHeader.writeUInt32LE(crc, 16);
    centralHeader.writeUInt32LE(data.length, 20);
    centralHeader.writeUInt32LE(raw.length, 24);
    centralHeader.writeUInt16LE(nameBuf.length, 28);
    centralHeader.writeUInt16LE(0, 30);
    centralHeader.writeUInt16LE(0, 32);
    centralHeader.writeUInt16LE(0, 34);
    centralHeader.writeUInt16LE(0, 36);
    centralHeader.writeUInt32LE(0, 38);
    centralHeader.writeUInt32LE(offset, 42);

    centralParts.push(centralHeader, nameBuf);
    offset += localHeader.length + nameBuf.length + data.length;
  }

  const centralSize = centralParts.reduce((s, b) => s + b.length, 0);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(entries.length, 8);
  eocd.writeUInt16LE(entries.length, 10);
  eocd.writeUInt32LE(centralSize, 12);
  eocd.writeUInt32LE(offset, 16);
  eocd.writeUInt16LE(0, 20);

  return Buffer.concat([...localParts, ...centralParts, eocd]);
}

let versionMeta = { versionName: '1.3.0', versionCode: 5, notes: 'Automatic OTA & in-app APK updater' };
try {
  if (fs.existsSync(versionJsonPath)) {
    versionMeta = { ...versionMeta, ...JSON.parse(fs.readFileSync(versionJsonPath, 'utf8')) };
  }
} catch {}

const files = collectFiles(distAndroidDir);
const zipBuffer = buildZipBuffer(files);
const zipSha = crypto.createHash('sha256').update(zipBuffer).digest('hex');

let prevManifest = null;
try {
  if (fs.existsSync(manifestPath)) prevManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
} catch {}

const otaBuild = prevManifest && prevManifest.sha256 === zipSha && prevManifest.otaBuild
  ? prevManifest.otaBuild
  : Math.max(Number(versionMeta.versionCode || 5) * 100, (prevManifest?.otaBuild || 0) + 1);

fs.mkdirSync(otaDir, { recursive: true });
fs.writeFileSync(zipPath, zipBuffer);

const manifest = {
  otaBuild,
  otaVersion: String(versionMeta.versionName || '1.3.0'),
  minNativeVersionCode: Number(versionMeta.versionCode || 5),
  sha256: zipSha,
  zipUrl: 'https://rehandominatorsmahuawan.github.io/ota/android-ota.zip',
  notes: String(versionMeta.notes || '')
};
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
console.log(`Built Android OTA bundle: otaBuild=${otaBuild} (${files.length} files, ${(zipBuffer.length / 1024).toFixed(1)} KB, sha256=${zipSha.slice(0, 12)}...)`);
