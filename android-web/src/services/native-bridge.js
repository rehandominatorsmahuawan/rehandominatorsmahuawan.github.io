import { Capacitor } from '@capacitor/core';
import { App as CapApp } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { Keyboard } from '@capacitor/keyboard';
import { Browser } from '@capacitor/browser';

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

export async function syncStatusBarTheme(themeKey = 'azure') {
  const colorMap = {
    azure: '#F3F7FD',
    crimson: '#FCF7F7',
    daylight: '#F8FAFC',
    night: '#071224'
  };
  const color = colorMap[themeKey] || colorMap.azure;
  const meta = document.getElementById('rdmThemeMeta');
  if (meta) meta.content = color;

  if (!Capacitor.isNativePlatform()) return;
  try {
    await StatusBar.setOverlaysWebView({ overlay: false });
    await StatusBar.setBackgroundColor({ color });
    await StatusBar.setStyle({ style: themeKey === 'night' ? Style.Dark : Style.Light });
  } catch (_) {}
}

export async function initNativeShell(onBackPress) {
  const savedTheme = localStorage.getItem('rdm-app-theme') || 'azure';
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

export async function downloadApkFile(url) {
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
  a.download = 'RDM-Official.apk';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  a.remove();
  return true;
}
