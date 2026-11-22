package com.rdm.official;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.content.pm.SigningInfo;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import androidx.core.content.FileProvider;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import org.json.JSONObject;

@CapacitorPlugin(name = "RdmUpdater")
public class RdmUpdaterPlugin extends Plugin {

    private static final String OTA_PREFS = "RdmOtaPrefs";
    private static final String KEY_OTA_BUILD = "installed_ota_build";
    private static final String KEY_OTA_VERSION = "installed_ota_version";
    private static final String CAP_PREFS = "CapWebViewSettings";
    private static final String CAP_SERVER_PATH = "serverBasePath";
    private static final String DEFAULT_OTA_MANIFEST_URL = "https://rehandominatorsmahuawan.github.io/ota/manifest.json";

    private final ExecutorService executor = Executors.newSingleThreadExecutor();
    private volatile boolean otaRunning = false;
    private volatile boolean apkRunning = false;

    @PluginMethod
    public void getVersionInfo(PluginCall call) {
        try {
            Context ctx = getContext();
            PackageInfo pkg = getSelfPackageInfo(ctx);
            long versionCode = getLongVersionCode(pkg);
            String versionName = pkg != null && pkg.versionName != null ? pkg.versionName : "1.0.0";
            SharedPreferences prefs = ctx.getSharedPreferences(OTA_PREFS, Context.MODE_PRIVATE);
            long otaBuild = prefs.getLong(KEY_OTA_BUILD, 0L);
            String otaVersion = prefs.getString(KEY_OTA_VERSION, "");
            boolean canInstall = canRequestPackageInstallsCompat(ctx);

            JSObject res = new JSObject();
            res.put("packageName", ctx.getPackageName());
            res.put("versionName", versionName);
            res.put("versionCode", versionCode);
            res.put("otaBuild", otaBuild);
            res.put("otaVersion", otaVersion);
            res.put("canInstallPackages", canInstall);
            call.resolve(res);
        } catch (Exception e) {
            call.reject("Failed to read version info: " + e.getMessage());
        }
    }

    @PluginMethod
    public void canInstallPackages(PluginCall call) {
        JSObject res = new JSObject();
        res.put("allowed", canRequestPackageInstallsCompat(getContext()));
        call.resolve(res);
    }

    @PluginMethod
    public void openInstallPermissionSettings(PluginCall call) {
        try {
            Context ctx = getContext();
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                Intent intent = new Intent(
                    Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,
                    Uri.parse("package:" + ctx.getPackageName())
                );
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                ctx.startActivity(intent);
            }
            JSObject res = new JSObject();
            res.put("opened", true);
            call.resolve(res);
        } catch (Exception e) {
            call.reject("Unable to open install permission settings: " + e.getMessage());
        }
    }

    @PluginMethod
    public void downloadAndInstallApk(PluginCall call) {
        final String urlStr = call.getString("url", "").trim();
        if (!urlStr.startsWith("https://")) {
            call.reject("HTTPS APK download URL is required.");
            return;
        }
        final Context ctx = getContext();
        if (!canRequestPackageInstallsCompat(ctx)) {
            JSObject res = new JSObject();
            res.put("started", false);
            res.put("needsPermission", true);
            call.resolve(res);
            return;
        }
        if (apkRunning) {
            call.reject("APK download already in progress.");
            return;
        }
        apkRunning = true;

        executor.execute(() -> {
            File apkFile = null;
            try {
                File updateDir = new File(ctx.getCacheDir(), "updates");
                if (!updateDir.exists()) updateDir.mkdirs();
                apkFile = new File(updateDir, "RDM-Official-update.apk");
                if (apkFile.exists()) apkFile.delete();

                downloadFileWithProgress(urlStr, apkFile, (pct, read, total) -> {
                    JSObject ev = new JSObject();
                    ev.put("percent", pct);
                    ev.put("downloadedBytes", read);
                    ev.put("totalBytes", total);
                    notifyListeners("apkDownloadProgress", ev);
                });

                PackageManager pm = ctx.getPackageManager();
                PackageInfo archiveInfo = getArchivePackageInfo(pm, apkFile.getAbsolutePath());
                if (archiveInfo == null || !ctx.getPackageName().equals(archiveInfo.packageName)) {
                    apkFile.delete();
                    call.reject("Downloaded file is not a valid RDM Official APK package.");
                    return;
                }

                List<String> installedSigs = getSignatureDigests(getSelfPackageInfo(ctx));
                List<String> archiveSigs = getSignatureDigests(archiveInfo);
                if (!installedSigs.isEmpty() && !archiveSigs.isEmpty()) {
                    boolean matches = false;
                    for (String s : archiveSigs) {
                        if (installedSigs.contains(s)) {
                            matches = true;
                            break;
                        }
                    }
                    if (!matches) {
                        apkFile.delete();
                        call.reject("Downloaded APK signature does not match this installation. Please update via official release channel.");
                        return;
                    }
                }

                Uri apkUri = FileProvider.getUriForFile(ctx, ctx.getPackageName() + ".fileprovider", apkFile);
                Intent installIntent = new Intent(Intent.ACTION_VIEW);
                installIntent.setDataAndType(apkUri, "application/vnd.android.package-archive");
                installIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_TASK);
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                    installIntent.putExtra(Intent.EXTRA_NOT_UNKNOWN_SOURCE, true);
                }

                Activity act = getActivity();
                if (act != null) {
                    act.runOnUiThread(() -> act.startActivity(installIntent));
                } else {
                    ctx.startActivity(installIntent);
                }

                JSObject res = new JSObject();
                res.put("started", true);
                res.put("needsPermission", false);
                res.put("versionName", archiveInfo.versionName != null ? archiveInfo.versionName : "");
                res.put("versionCode", getLongVersionCode(archiveInfo));
                call.resolve(res);
            } catch (Exception e) {
                if (apkFile != null && apkFile.exists()) apkFile.delete();
                call.reject("APK auto-update failed: " + e.getMessage());
            } finally {
                apkRunning = false;
            }
        });
    }

    @PluginMethod
    public void checkAndApplyOta(PluginCall call) {
        final String manifestUrl = call.getString("manifestUrl", DEFAULT_OTA_MANIFEST_URL).trim();
        if (!manifestUrl.startsWith("https://")) {
            JSObject res = new JSObject();
            res.put("updated", false);
            call.resolve(res);
            return;
        }
        if (otaRunning) {
            JSObject res = new JSObject();
            res.put("updated", false);
            res.put("busy", true);
            call.resolve(res);
            return;
        }
        otaRunning = true;

        executor.execute(() -> {
            File tmpZip = null;
            try {
                Context ctx = getContext();
                PackageInfo selfPkg = getSelfPackageInfo(ctx);
                long nativeVersionCode = getLongVersionCode(selfPkg);

                String rawJson = fetchText(manifestUrl + (manifestUrl.contains("?") ? "&" : "?") + "t=" + System.currentTimeMillis());
                JSONObject manifest = new JSONObject(rawJson);
                long remoteBuild = manifest.optLong("otaBuild", 0L);
                String remoteVersion = manifest.optString("otaVersion", "");
                long minNative = manifest.optLong("minNativeVersionCode", 1L);
                String zipUrl = manifest.optString("zipUrl", "").trim();
                String expectedSha = manifest.optString("sha256", "").trim().toLowerCase();
                String notes = manifest.optString("notes", "");

                if (remoteBuild <= 0 || !zipUrl.startsWith("https://") || nativeVersionCode < minNative) {
                    JSObject res = new JSObject();
                    res.put("updated", false);
                    call.resolve(res);
                    return;
                }

                SharedPreferences otaPrefs = ctx.getSharedPreferences(OTA_PREFS, Context.MODE_PRIVATE);
                long installedBuild = otaPrefs.getLong(KEY_OTA_BUILD, 0L);
                File otaRoot = new File(ctx.getFilesDir(), "rdm_ota");
                File targetDir = new File(otaRoot, "b_" + remoteBuild);

                SharedPreferences capPrefs = ctx.getSharedPreferences(CAP_PREFS, Context.MODE_PRIVATE);
                String activePath = capPrefs.getString(CAP_SERVER_PATH, "");
                if (remoteBuild <= installedBuild && activePath != null && activePath.equals(targetDir.getAbsolutePath()) && new File(targetDir, "index.html").exists()) {
                    JSObject res = new JSObject();
                    res.put("updated", false);
                    res.put("otaBuild", installedBuild);
                    call.resolve(res);
                    return;
                }

                if (!otaRoot.exists()) otaRoot.mkdirs();
                tmpZip = new File(ctx.getCacheDir(), "rdm_ota_" + remoteBuild + ".zip");
                if (tmpZip.exists()) tmpZip.delete();

                downloadFileWithProgress(zipUrl + (zipUrl.contains("?") ? "&" : "?") + "t=" + System.currentTimeMillis(), tmpZip, null);

                if (!expectedSha.isEmpty()) {
                    String actualSha = sha256FileHex(tmpZip);
                    if (!expectedSha.equalsIgnoreCase(actualSha)) {
                        tmpZip.delete();
                        call.reject("OTA checksum verification failed.");
                        return;
                    }
                }

                if (targetDir.exists()) deleteRecursive(targetDir);
                targetDir.mkdirs();
                unzipSafely(tmpZip, targetDir);
                tmpZip.delete();

                File indexHtml = new File(targetDir, "index.html");
                if (!indexHtml.exists()) {
                    deleteRecursive(targetDir);
                    call.reject("Invalid OTA bundle: missing index.html.");
                    return;
                }

                otaPrefs.edit()
                    .putLong(KEY_OTA_BUILD, remoteBuild)
                    .putString(KEY_OTA_VERSION, remoteVersion)
                    .apply();

                capPrefs.edit()
                    .putString(CAP_SERVER_PATH, targetDir.getAbsolutePath())
                    .apply();

                cleanupOldOtaDirs(otaRoot, targetDir.getName());

                Activity act = getActivity();
                if (act != null && getBridge() != null) {
                    act.runOnUiThread(() -> getBridge().setServerBasePath(targetDir.getAbsolutePath()));
                }

                JSObject res = new JSObject();
                res.put("updated", true);
                res.put("otaBuild", remoteBuild);
                res.put("otaVersion", remoteVersion);
                res.put("notes", notes);
                call.resolve(res);
            } catch (Exception e) {
                if (tmpZip != null && tmpZip.exists()) tmpZip.delete();
                JSObject res = new JSObject();
                res.put("updated", false);
                res.put("error", e.getMessage());
                call.resolve(res);
            } finally {
                otaRunning = false;
            }
        });
    }

    private interface ProgressListener {
        void onProgress(int percent, long readBytes, long totalBytes);
    }

    private String fetchText(String urlStr) throws Exception {
        HttpURLConnection conn = openConnectionFollowingRedirects(urlStr);
        try (InputStream in = new BufferedInputStream(conn.getInputStream());
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            byte[] buf = new byte[8192];
            int len;
            while ((len = in.read(buf)) != -1) out.write(buf, 0, len);
            return out.toString(StandardCharsets.UTF_8.name());
        } finally {
            conn.disconnect();
        }
    }

    private void downloadFileWithProgress(String urlStr, File destFile, ProgressListener listener) throws Exception {
        HttpURLConnection conn = openConnectionFollowingRedirects(urlStr);
        long total = conn.getContentLengthLong();
        try (InputStream in = new BufferedInputStream(conn.getInputStream());
             FileOutputStream fos = new FileOutputStream(destFile)) {
            byte[] buf = new byte[16384];
            long read = 0;
            int lastPct = -1;
            int len;
            while ((len = in.read(buf)) != -1) {
                fos.write(buf, 0, len);
                read += len;
                if (listener != null && total > 0) {
                    int pct = (int) Math.min(100, (read * 100L) / total);
                    if (pct != lastPct) {
                        lastPct = pct;
                        listener.onProgress(pct, read, total);
                    }
                }
            }
            fos.flush();
            if (listener != null) listener.onProgress(100, read, total > 0 ? total : read);
        } finally {
            conn.disconnect();
        }
    }

    private HttpURLConnection openConnectionFollowingRedirects(String urlStr) throws Exception {
        String current = urlStr;
        for (int i = 0; i < 6; i++) {
            HttpURLConnection conn = (HttpURLConnection) new URL(current).openConnection();
            conn.setInstanceFollowRedirects(false);
            conn.setConnectTimeout(12000);
            conn.setReadTimeout(30000);
            conn.setRequestProperty("Cache-Control", "no-cache");
            int code = conn.getResponseCode();
            if (code == HttpURLConnection.HTTP_MOVED_PERM ||
                code == HttpURLConnection.HTTP_MOVED_TEMP ||
                code == HttpURLConnection.HTTP_SEE_OTHER ||
                code == 307 || code == 308) {
                String loc = conn.getHeaderField("Location");
                conn.disconnect();
                if (loc == null || loc.trim().isEmpty()) throw new Exception("Invalid redirect");
                URL next = new URL(new URL(current), loc);
                if (!"https".equalsIgnoreCase(next.getProtocol())) {
                    throw new Exception("Blocked non-HTTPS redirect");
                }
                current = next.toString();
                continue;
            }
            if (code < 200 || code >= 300) {
                conn.disconnect();
                throw new Exception("HTTP " + code);
            }
            return conn;
        }
        throw new Exception("Too many redirects");
    }

    private void unzipSafely(File zipFile, File targetDir) throws Exception {
        String canonicalRoot = targetDir.getCanonicalPath() + File.separator;
        try (ZipInputStream zis = new ZipInputStream(new BufferedInputStream(new FileInputStream(zipFile)))) {
            ZipEntry entry;
            byte[] buf = new byte[16384];
            while ((entry = zis.getNextEntry()) != null) {
                File outFile = new File(targetDir, entry.getName());
                String canonicalOut = outFile.getCanonicalPath();
                if (!canonicalOut.startsWith(canonicalRoot)) {
                    throw new SecurityException("Blocked invalid zip entry: " + entry.getName());
                }
                if (entry.isDirectory()) {
                    if (!outFile.exists()) outFile.mkdirs();
                } else {
                    File parent = outFile.getParentFile();
                    if (parent != null && !parent.exists()) parent.mkdirs();
                    try (FileOutputStream fos = new FileOutputStream(outFile)) {
                        int len;
                        while ((len = zis.read(buf)) != -1) fos.write(buf, 0, len);
                    }
                }
                zis.closeEntry();
            }
        }
    }

    private void cleanupOldOtaDirs(File root, String keepName) {
        File[] children = root.listFiles();
        if (children == null) return;
        for (File child : children) {
            if (!child.getName().equals(keepName)) {
                deleteRecursive(child);
            }
        }
    }

    private void deleteRecursive(File file) {
        if (file == null || !file.exists()) return;
        if (file.isDirectory()) {
            File[] children = file.listFiles();
            if (children != null) {
                for (File c : children) deleteRecursive(c);
            }
        }
        file.delete();
    }

    private String sha256FileHex(File file) throws Exception {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        try (InputStream in = new BufferedInputStream(new FileInputStream(file))) {
            byte[] buf = new byte[16384];
            int len;
            while ((len = in.read(buf)) != -1) md.update(buf, 0, len);
        }
        byte[] digest = md.digest();
        StringBuilder sb = new StringBuilder();
        for (byte b : digest) sb.append(String.format("%02x", b));
        return sb.toString();
    }

    private boolean canRequestPackageInstallsCompat(Context ctx) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            return ctx.getPackageManager().canRequestPackageInstalls();
        }
        return true;
    }

    @SuppressWarnings("deprecation")
    private PackageInfo getSelfPackageInfo(Context ctx) throws Exception {
        PackageManager pm = ctx.getPackageManager();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            return pm.getPackageInfo(ctx.getPackageName(), PackageManager.GET_SIGNING_CERTIFICATES);
        }
        return pm.getPackageInfo(ctx.getPackageName(), PackageManager.GET_SIGNATURES);
    }

    @SuppressWarnings("deprecation")
    private PackageInfo getArchivePackageInfo(PackageManager pm, String apkPath) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            return pm.getPackageArchiveInfo(apkPath, PackageManager.GET_SIGNING_CERTIFICATES);
        }
        return pm.getPackageArchiveInfo(apkPath, PackageManager.GET_SIGNATURES);
    }

    private long getLongVersionCode(PackageInfo pkg) {
        if (pkg == null) return 1L;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            return pkg.getLongVersionCode();
        }
        return pkg.versionCode;
    }

    @SuppressWarnings("deprecation")
    private List<String> getSignatureDigests(PackageInfo pkg) {
        List<String> out = new ArrayList<>();
        if (pkg == null) return out;
        try {
            Signature[] sigs = null;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P && pkg.signingInfo != null) {
                sigs = pkg.signingInfo.hasMultipleSigners()
                    ? pkg.signingInfo.getApkContentsSigners()
                    : pkg.signingInfo.getSigningCertificateHistory();
            } else {
                sigs = pkg.signatures;
            }
            if (sigs != null) {
                MessageDigest md = MessageDigest.getInstance("SHA-256");
                for (Signature s : sigs) {
                    byte[] d = md.digest(s.toByteArray());
                    StringBuilder sb = new StringBuilder();
                    for (byte b : d) sb.append(String.format("%02x", b));
                    out.add(sb.toString());
                    md.reset();
                }
            }
        } catch (Exception ignored) {}
        return out;
    }
}
