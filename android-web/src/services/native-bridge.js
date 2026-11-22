import { Capacitor, registerPlugin } from '@capacitor/core';
import { App as CapApp } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { Keyboard } from '@capacitor/keyboard';
import { Browser } from '@capacitor/browser';

const RdmUpdater = Capacitor.isNativePlatform() ? registerPlugin('RdmUpdater') : null;

let backHandlerBound = false;
let deferredInstallPrompt = null;

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredInstallPrompt = e;
    window.dispatchEvent(new CustomEvent('rdm-pwa-ready'));
  });
}

export function isNativeAndroid() {
  return Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android';
}

export function isNativePlatform() {
  return Capacitor.isNativePlatform();
}

export function canInstallWebPwa() {
  return !Capacitor.isNativePlatform() && Boolean(deferredInstallPrompt);
}

export async function triggerWebPwaInstall() {
  if (!deferredInstallPrompt) return false;
  try {
    await deferredInstallPrompt.prompt();
    const res = await deferredInstallPrompt.userChoice;
    if (res?.outcome === 'accepted') {
      deferredInstallPrompt = null;
      return true;
    }
  } catch (_) {}
  return false;
}

export async function syncStatusBarTheme(themeKey = 'royal') {
  const normalized =
    themeKey === 'night' || themeKey === 'carbon' || themeKey === 'floodlight' ? 'floodlight' :
    themeKey === 'emerald' ? 'emerald' :
    themeKey === 'copper' || themeKey === 'crimson' ? 'crimson' : 'royal';

  const colorMap = {
    royal: '#F5F7FB',
    floodlight: '#070C18',
    emerald: '#F6F9F7',
    crimson: '#FAF7F6'
  };
  const color = colorMap[normalized] || colorMap.royal;
  const meta = document.getElementById('rdmThemeMeta');
  if (meta) meta.content = color;

  if (!Capacitor.isNativePlatform()) return;
  try {
    await StatusBar.setOverlaysWebView({ overlay: false });
    await StatusBar.setBackgroundColor({ color });
    await StatusBar.setStyle({ style: normalized === 'floodlight' ? Style.Dark : Style.Light });
  } catch (_) {}
}

export async function initNativeShell(onBackPress) {
  const savedTheme = localStorage.getItem('rdm-app-theme') || 'royal';
  await syncStatusBarTheme(savedTheme);

  if (Capacitor.isNativePlatform()) {
    try {
      Keyboard.addListener('keyboardWillShow', () => {
        document.body.classList.add('keyboard-open');
        const active = document.activeElement;
        if (active && typeof active.scrollIntoView === 'function') {
          setTimeout(() => {
            try { active.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (_) {}
          }, 120);
        }
      });
      Keyboard.addListener('keyboardWillHide', () => {
        document.body.classList.remove('keyboard-open');
      });
    } catch (_) {}

    if (!backHandlerBound && typeof onBackPress === 'function') {
      backHandlerBound = true;
      try {
        CapApp.addListener('backButton', ({ canGoBack }) => {
          onBackPress({ canGoBack });
        });
      } catch (_) {}
    }
  }
}

export async function hideNativeSplash() {
  if (!Capacitor.isNativePlatform()) return;
  try {
    await SplashScreen.hide({ fadeOutDuration: 220 });
  } catch (_) {}
}

export async function exitNativeApp() {
  if (!Capacitor.isNativePlatform()) return;
  try {
    await CapApp.exitApp();
  } catch (_) {}
}

export async function openExternalUrl(url) {
  const safe = String(url || '').trim();
  if (!/^https?:\/\//i.test(safe)) return false;

  if (Capacitor.isNativePlatform()) {
    try {
      await Browser.open({ url: safe, presentationStyle: 'popover' });
      return true;
    } catch (_) {}
  }

  const a = document.createElement('a');
  a.href = safe;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  a.remove();
  return true;
}

export async function getNativeAppVersionInfo() {
  if (!isNativeAndroid() || !RdmUpdater) return null;
  try {
    return await RdmUpdater.getVersionInfo();
  } catch (_) {
    return null;
  }
}

export async function canInstallNativeApk() {
  if (!isNativeAndroid() || !RdmUpdater) return false;
  try {
    const res = await RdmUpdater.canInstallPackages();
    return Boolean(res?.allowed);
  } catch (_) {
    return false;
  }
}

export async function openApkInstallPermissionSettings() {
  if (!isNativeAndroid() || !RdmUpdater) return false;
  try {
    const res = await RdmUpdater.openInstallPermissionSettings();
    return Boolean(res?.opened);
  } catch (_) {
    return false;
  }
}

export async function checkAndApplyOtaUpdate(manifestUrl) {
  if (!isNativeAndroid() || !RdmUpdater) return { updated: false };
  try {
    return await RdmUpdater.checkAndApplyOta({ manifestUrl });
  } catch (err) {
    return { updated: false, error: err?.message || 'OTA check failed' };
  }
}

export async function downloadAndInstallNativeApk(url) {
  const safe = String(url || '').trim();
  if (!/^https:\/\//i.test(safe)) {
    throw new Error('HTTPS APK download URL is required.');
  }
  if (!isNativeAndroid() || !RdmUpdater) {
    throw new Error('Native APK updater is only available inside the Android app.');
  }
  return await RdmUpdater.downloadAndInstallApk({ url: safe });
}

export function onApkDownloadProgress(callback) {
  if (!isNativeAndroid() || !RdmUpdater || typeof callback !== 'function') {
    return () => {};
  }
  let listenerHandle = null;
  let cancelled = false;
  try {
    const promiseOrHandle = RdmUpdater.addListener('apkDownloadProgress', payload => {
      if (!cancelled) callback(payload || {});
    });
    Promise.resolve(promiseOrHandle).then(h => {
      if (cancelled) {
        try { h?.remove?.(); } catch (_) {}
      } else {
        listenerHandle = h;
      }
    }).catch(() => {});
  } catch (_) {}

  return () => {
    cancelled = true;
    try { listenerHandle?.remove?.(); } catch (_) {}
  };
}

export function subscribeAppResume(callback) {
  if (!Capacitor.isNativePlatform() || typeof callback !== 'function') {
    return () => {};
  }
  let listenerHandle = null;
  let cancelled = false;
  try {
    const p = CapApp.addListener('appStateChange', ({ isActive }) => {
      if (isActive && !cancelled) callback();
    });
    Promise.resolve(p).then(h => {
      if (cancelled) {
        try { h?.remove?.(); } catch (_) {}
      } else {
        listenerHandle = h;
      }
    }).catch(() => {});
  } catch (_) {}

  return () => {
    cancelled = true;
    try { listenerHandle?.remove?.(); } catch (_) {}
  };
}

export async function downloadApkFile(url) {
  const safe = String(url || '').trim();
  if (!/^https?:\/\//i.test(safe)) return false;

  if (isNativeAndroid() && RdmUpdater) {
    return await RdmUpdater.downloadAndInstallApk({ url: safe });
  }

  if (Capacitor.isNativePlatform()) {
    try {
      await Browser.open({ url: safe, presentationStyle: 'popover' });
      return true;
    } catch (_) {}
  }

  const a = document.createElement('a');
  a.href = safe;
  a.download = 'RDM-Official.apk';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  a.remove();
  return true;
}
