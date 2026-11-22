export const APP_BUILD_INFO = {
  versionName: '1.3.0',
  versionCode: 5
};

export const REMOTE_VERSION_JSON_URL = 'https://rehandominatorsmahuawan.github.io/version.json';
export const REMOTE_OTA_MANIFEST_URL = 'https://rehandominatorsmahuawan.github.io/ota/manifest.json';

export const APK_ADMIN_EMAILS = [
  'rehahalam7124517@gmail.com',
  'rehanalam7124517@gmail.com',
  'admin@rdm-official.in'
];

export const ADMIN_USERNAME_ALIASES = {
  'rdm.admin': 'admin@rdm-official.in',
  'rdm-admin': 'admin@rdm-official.in',
  admin: 'admin@rdm-official.in'
};

export function resolveLoginIdentifier(input = '') {
  const clean = String(input || '').trim();
  if (!clean) return '';
  const lower = clean.toLowerCase();
  if (Object.prototype.hasOwnProperty.call(ADMIN_USERNAME_ALIASES, lower)) {
    return ADMIN_USERNAME_ALIASES[lower];
  }
  return clean;
}

export function compareVersions(a = '0.0.0', b = '0.0.0') {
  const parse = v => String(v || '').replace(/^v/i, '').split(/[^0-9]+/).filter(Boolean).map(Number);
  const pa = parse(a);
  const pb = parse(b);
  const len = Math.max(pa.length, pb.length, 3);
  for (let i = 0; i < len; i++) {
    const na = pa[i] || 0;
    const nb = pb[i] || 0;
    if (na < nb) return -1;
    if (na > nb) return 1;
  }
  return 0;
}

export const CLUB_INFO = {
  appName: 'RDM Official',
  orgName: 'REHAN DOMINATORS MAHUAWAN',
  shortName: 'RDM',
  location: 'MAHUAWAN • GOPALGANJ • BIHAR',
  locationLabel: 'Mahuawan, Gopalganj, Bihar',
  founded: '2024',
  motto: 'ONE TEAM • ONE DREAM • ONE DOMINATION',
  tagline: 'YOUR TEAM. YOUR PRIDE. YOUR GAME.',
  subtitle: 'THE HOME OF REHAN DOMINATORS MAHUAWAN',
  captainContactUrl: 'https://wa.me/918521254605',
  captainPhoneDisplay: '+91 85212 54605',
  appVersion: APP_BUILD_INFO.versionName,
  apkDownloadUrl: 'https://github.com/RehanDominatorsMahuawan/RehanDominatorsMahuawan.github.io/releases/latest/download/RDM-Official.apk',
  apkReleasesUrl: 'https://github.com/RehanDominatorsMahuawan/RehanDominatorsMahuawan.github.io/releases/latest',
  websiteUrl: 'https://rehandominatorsmahuawan.github.io/',
  logoPath: 'assets/rdm-logo.png',
  heroImagePath: 'src/assets/images/hero_cricket_pavilion_1795338170696.jpg',
  heritageImagePath: 'src/assets/images/cricket_craft_edition_1795338169416.jpg'
};

export const PLAYER_CODES = {
  RDM001: 'RA08',
  RDM003: 'SA-V',
  RDM006: 'SO-WK',
  RDM004: 'AKA',
  RDM002: 'ASI',
  RDM007: 'WSM',
  RDM008: 'JBD',
  RDM010: 'GLM',
  RDM011: 'SHA57',
  RDM005: 'SAL02',
  RDM012: 'LKY',
  RDM016: 'KLF',
  RDM009: 'SKH',
  RDM013: 'ABS',
  RDM014: 'SBA',
  RDM015: 'ZSN',
  RDM017: 'JVD'
};

export const PLAYER_DEFAULTS = {
  RDM001: { nick: 'The Skipper', bio: 'Captain and all-rounder who leads from the front with discipline, confidence and team-first cricket.' },
  RDM002: { nick: 'The Anchor', bio: 'A reliable top-order batsman who values a solid start, smart shot selection and steady runs.' },
  RDM003: { nick: 'The Game Changer', bio: 'Vice-captain and all-rounder who brings flexibility, energy and impact through every phase of the game.' },
  RDM004: { nick: 'The Attacker', bio: 'An aggressive strike opener and fast-bowling all-rounder built to set the tempo and deliver under pressure.' },
  RDM005: { nick: 'The Finisher', bio: 'A calm middle-order batsman who backs his shots and looks to finish innings with confidence.' },
  RDM006: { nick: 'The Gloveman', bio: 'The team main wicket-keeper and a versatile batsman who adds energy, awareness and balance to the team.' },
  RDM007: { nick: 'The Complete Package', bio: 'A top-order all-rounder who can contribute with bat and ball across every phase of the match.' },
  RDM008: { nick: 'The Middle Rock', bio: 'A dependable middle-order batsman focused on building partnerships and keeping the innings moving.' },
  RDM009: { nick: 'The Closer', bio: 'A finisher who enjoys pressure moments and looks to give the team a strong end to the innings.' },
  RDM010: { nick: 'The Impact Player', bio: 'A useful all-rounder and finisher who can change momentum with quick runs and emergency bowling.' },
  RDM011: { nick: 'The Middle Order Maestro', bio: 'A right-handed middle-order batsman who adds stability and depth to the batting line-up.' },
  RDM012: { nick: 'The All-Rounder', bio: 'A versatile all-rounder who can contribute with bat or ball when the team needs him.' },
  RDM013: { nick: 'The Utility Ace', bio: 'A flexible all-rounder who can finish with the bat and handle important middle or death overs.' },
  RDM014: { nick: 'The Power Finisher', bio: 'A batsman with a finisher role who looks to add quick runs and impact.' },
  RDM015: { nick: 'The Last-Over Hitter', bio: 'A finisher who plays with intent in high-pressure batting moments.' },
  RDM016: { nick: 'The Lefty', bio: 'A left-handed middle-order batsman who adds variety and balance to the batting line-up.' },
  RDM017: { nick: 'The Finisher', bio: 'A right-handed batsman who specialises in the finisher role and looks to close innings strongly.' }
};

export const SEED_PLAYERS = [
  ['RDM001', 'Rehan Akhtar', 'Captain • All-Rounder', 'Right-Handed • Right-Arm Fast • Middle Order • Middle Overs', '08'],
  ['RDM003', 'Saif Ali', 'Vice-Captain • All-Rounder', 'Both-Handed • Fast • Non-Striker Opener • All Phases', ''],
  ['RDM006', 'Soaib Akhtar', 'Wicket-Keeper • Batsman', 'Right-Handed • Left-Arm Fast • Top Order • Finisher', ''],
  ['RDM004', 'Akib Ansari', 'All-Rounder', 'Right-Handed • Fast • Striker Opener • Middle + Death', ''],
  ['RDM002', 'Asif Ali', 'Batsman', 'Right-Handed • Top Order', ''],
  ['RDM007', 'Wasim', 'All-Rounder', 'Right-Handed • Fast • Top Order • All Phases', ''],
  ['RDM008', 'Jubed', 'Batsman', 'Right-Handed • Middle Order', ''],
  ['RDM010', 'Gulam', 'All-Rounder', 'Right-Handed • Fast • Finisher • Emergency Bowling', ''],
  ['RDM011', 'Sahil Ansari', 'Batsman', 'Right-Handed • Middle Order', '57'],
  ['RDM005', 'Sahil Ali', 'Batsman', 'Right-Handed • Middle Order • Finisher', '02'],
  ['RDM012', 'Lucky', 'All-Rounder', 'Right-Handed • Fast • Middle Order • Middle Overs', ''],
  ['RDM016', 'Kaif Lefty', 'Batsman', 'Left-Handed • Middle Order', ''],
  ['RDM009', 'SK. Hanif', 'Batsman', 'Right-Handed • Finisher', ''],
  ['RDM013', 'Abushad', 'All-Rounder', 'Right-Handed • Fast • Middle Order + Finisher • Middle + Death', ''],
  ['RDM014', 'Sabre Alam', 'Batsman', 'Right-Handed • Finisher', ''],
  ['RDM015', 'Zishan', 'Batsman', 'Right-Handed • Finisher', ''],
  ['RDM017', 'Javed', 'Batsman', 'Right-Handed • Finisher', '']
].map((x, idx) => ({
  id: x[0],
  name: x[1],
  role: x[2],
  detail: x[3],
  jersey: x[4],
  image: '',
  nick: PLAYER_DEFAULTS[x[0]]?.nick || '',
  bio: PLAYER_DEFAULTS[x[0]]?.bio || '',
  socials: [],
  order: idx + 1,
  _docId: x[0]
}));

export const SEED_HONOURS = [
  { _docId: 'h01', year: '2024', title: 'Winner', sub: 'Mahuawan Premier League 1', image: 'assets/trophy-2024.png', order: 1 },
  { _docId: 'h02', year: '2025', title: 'Winner', sub: 'Mahuawan Premier League 2', image: 'assets/trophy-2025.png', order: 2 },
  { _docId: 'h03', year: '2026', title: 'Runner-Up', sub: 'Tournament Name • To Be Added', image: 'assets/trophy-2026.png', order: 3 }
];

export const DEFAULT_SOCIALS = [
  { _docId: 'youtube', name: 'YOUTUBE', displayName: 'RDM YouTube', url: 'https://www.youtube.com/@rehan_dominators_mahuawan', icon: '▶', order: 1 },
  { _docId: 'telegram', name: 'TELEGRAM', displayName: 'RDM Telegram', url: 'https://t.me/rehandominatorsmahuawan', icon: '✈', order: 2 },
  { _docId: 'whatsapp', name: 'WHATSAPP', displayName: 'RDM WhatsApp Channel', url: 'https://whatsapp.com/channel/0029Vb8icRM3WHTQGQtM4G3j', icon: '◉', order: 3 },
  { _docId: 'instagram', name: 'INSTAGRAM', displayName: 'RDM Instagram', url: '', icon: 'IG', order: 4 },
  { _docId: 'facebook', name: 'FACEBOOK', displayName: 'RDM Facebook', url: '', icon: 'f', order: 5 }
];

export function formatTextCase(input = '') {
  const str = String(input ?? '').replace(/\r\n?/g, '\n').replace(/^\n+|\s+$/g, '');
  if (!str) return '';
  const smallCaps = { 'ᴀ':'A','ʙ':'B','ᴄ':'C','ᴅ':'D','ᴇ':'E','ꜰ':'F','ɢ':'G','ʜ':'H','ɪ':'I','ᴊ':'J','ᴋ':'K','ʟ':'L','ᴍ':'M','ɴ':'N','ᴏ':'O','ᴘ':'P','ǫ':'Q','ʀ':'R','ꜱ':'S','ᴛ':'T','ᴜ':'U','ᴠ':'V','ᴡ':'W','ʏ':'Y','ᴢ':'Z' };
  const ascii = str.replace(/[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡʏᴢ]/g, ch => smallCaps[ch] || ch);
  if (/^(RDM\d+|RA\d+|SA-V|SO-WK|AKA|ASI|WSM|JBD|GLM|SHA\d+|SAL\d+|LKY|KLF|SKH|ABS|SBA|ZSN|JVD)$/i.test(ascii)) {
    return ascii.toUpperCase();
  }
  if (ascii === ascii.toUpperCase() && /[A-Z]{2,}/.test(ascii) && ascii.length > 4) {
    const out = ascii.toLowerCase().replace(/\b([a-z])/g, (m, c, idx, full) => {
      const w = full.slice(idx).match(/^[a-z]+/i)?.[0] || '';
      if (idx > 0 && full[idx - 1] !== '\n' && ['and','or','of','the','in','on','to','for','at','by','vs','is'].includes(w.toLowerCase())) {
        return w.toLowerCase().charAt(0);
      }
      return c.toUpperCase();
    });
    return out.replace(/\b(Rdm|Xi|H2h|Mpl|Potm|Nr)\b/gi, m => m.toUpperCase()).replace(/\bSk\./gi, 'SK.');
  }
  return ascii;
}

export function escHtml(str = '') {
  return String(str ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[ch]));
}

export function safeExternalUrl(url = '') {
  const s = String(url || '').trim();
  return /^https?:\/\//i.test(s) ? s : '';
}

export function isLegacyBrokenImage(src = '') {
  const s = String(src || '').trim();
  if (!s || /^data:image\/svg\+xml/i.test(s)) return true;
  if (/(?:logo\.jpg|CRICKET_YOUR_TAGLINE_HERE|rdm_crest_emblem|^assets\/(?:rehan\.png|players\/))/i.test(s)) return true;
  return false;
}

export function resolvePlayerImage(img, brandLogo = '') {
  const s = String(img || '').trim();
  if (!isLegacyBrokenImage(s)) return s;
  if (brandLogo && !isLegacyBrokenImage(brandLogo)) return brandLogo;
  return CLUB_INFO.logoPath;
}
