import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { initializeApp, getApps, getApp } from 'firebase-admin/app';
import { getAuth, type DecodedIdToken } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const FIREBASE_PROJECT_ID = 'rdm-official-website';
const LOCKED_TARGET_UID = 'eNgwkyptLJVOk82PFgL5lmovqxp2';
function resolvePort(): number {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--port' && args[i + 1]) {
      const p = Number(args[i + 1]);
      if (Number.isFinite(p) && p > 0) return p;
    } else if (args[i].startsWith('--port=')) {
      const p = Number(args[i].slice('--port='.length));
      if (Number.isFinite(p) && p > 0) return p;
    }
  }
  const envPort = Number(process.env.PORT);
  const nginxPort = Number(process.env.NGINX_PORT);
  const defaultAppPort = Number(process.env.DEFAULT_APP_PORT || 3000);
  if (process.env.NODE_ENV === 'development' && nginxPort && envPort === nginxPort) {
    return defaultAppPort;
  }
  return (Number.isFinite(envPort) && envPort > 0) ? envPort : defaultAppPort;
}

const PORT = resolvePort();
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const adminApp = getApps().length
  ? getApp()
  : initializeApp({ projectId: FIREBASE_PROJECT_ID });

const adminAuth = getAuth(adminApp);
const adminDb = getFirestore(adminApp);

interface AdminRequest extends Request {
  adminUser?: {
    uid: string;
    email: string | null;
    token: DecodedIdToken;
  };
}

function formatAdminSdkError(err: unknown): { status: number; message: string } {
  const code = String((err as { code?: unknown })?.code || '');
  const rawMessage = String((err as { message?: unknown })?.message || 'Firebase Admin error');

  if (
    code === 'auth/id-token-expired' ||
    code === 'auth/id-token-revoked' ||
    code === 'auth/argument-error' ||
    code.startsWith('auth/invalid-id-token')
  ) {
    return { status: 401, message: 'Unauthorized: invalid, expired, or revoked Firebase ID token.' };
  }

  if (
    code === '7' ||
    code === 'permission-denied' ||
    code === 'auth/insufficient-permission' ||
    /PERMISSION_DENIED|insufficient permission|Could not load the default credentials/i.test(rawMessage)
  ) {
    return {
      status: 403,
      message:
        'Server IAM permission missing for Firebase Admin SDK on rdm-official-website. Ensure the runtime service account has roles/firebaseauth.admin and roles/datastore.viewer.'
    };
  }

  if (code === 'auth/user-not-found') {
    return { status: 404, message: `Target user UID ${LOCKED_TARGET_UID} was not found.` };
  }

  if (code === 'auth/email-already-exists') {
    return { status: 409, message: 'That email address is already in use by another Firebase Authentication user.' };
  }

  if (code === 'auth/invalid-email') {
    return { status: 400, message: 'Invalid email address format.' };
  }

  return { status: 500, message: rawMessage };
}

async function requireFirebaseAdmin(req: AdminRequest, res: Response, next: NextFunction): Promise<void> {
  try {
    const authHeader = String(req.headers.authorization || '');
    const match = /^Bearer\s+(.+)$/i.exec(authHeader.trim());
    if (!match || !match[1]) {
      res.status(401).json({ ok: false, error: 'Missing Authorization: Bearer <Firebase ID Token> header.' });
      return;
    }

    const decoded = await adminAuth.verifyIdToken(match[1].trim(), true);
    const accountSnap = await adminDb.collection('Accounts').doc(decoded.uid).get();
    const accountData = accountSnap.exists ? accountSnap.data() : null;

    if (!accountSnap.exists || accountData?.role !== 'admin' || accountData?.active !== true) {
      res.status(403).json({
        ok: false,
        error: 'Forbidden: signed-in Firebase account is not an active admin in Accounts/{uid}.'
      });
      return;
    }

    req.adminUser = {
      uid: decoded.uid,
      email: decoded.email || null,
      token: decoded
    };
    next();
  } catch (err) {
    const mapped = formatAdminSdkError(err);
    res.status(mapped.status).json({ ok: false, error: mapped.message });
  }
}

function validateEmailAddress(input: unknown): string | null {
  if (typeof input !== 'string') return null;
  const trimmed = input.trim();
  if (!trimmed || trimmed.length > 254) return null;
  if (/[\r\n\t\0]/.test(trimmed)) return null;
  if (!EMAIL_REGEX.test(trimmed)) return null;
  return trimmed;
}

async function startServer(): Promise<void> {
  const app = express();
  app.disable('x-powered-by');
  app.use(express.json({ limit: '16kb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ ok: true, service: 'rdm-server' });
  });

  app.get('/api/admin/target-user-status', requireFirebaseAdmin, async (_req: AdminRequest, res: Response) => {
    try {
      const userRecord = await adminAuth.getUser(LOCKED_TARGET_UID);
      res.json({
        ok: true,
        uid: userRecord.uid,
        currentEmail: userRecord.email || null,
        emailVerified: Boolean(userRecord.emailVerified),
        disabled: Boolean(userRecord.disabled),
        providers: userRecord.providerData.map(p => p.providerId)
      });
    } catch (err) {
      const mapped = formatAdminSdkError(err);
      res.status(mapped.status).json({ ok: false, error: mapped.message });
    }
  });

  app.post('/api/admin/update-user-email', requireFirebaseAdmin, async (req: AdminRequest, res: Response) => {
    try {
      const requestedUid = req.body?.uid !== undefined ? String(req.body.uid).trim() : LOCKED_TARGET_UID;
      if (requestedUid !== LOCKED_TARGET_UID) {
        res.status(403).json({
          ok: false,
          error: `Target UID mismatch. This endpoint is strictly locked to ${LOCKED_TARGET_UID}.`
        });
        return;
      }

      const newEmail = validateEmailAddress(req.body?.newEmail);
      if (!newEmail) {
        res.status(400).json({ ok: false, error: 'Please provide a valid newEmail address.' });
        return;
      }

      const existingUser = await adminAuth.getUser(LOCKED_TARGET_UID);
      if (existingUser.email && existingUser.email.toLowerCase() === newEmail.toLowerCase()) {
        res.status(400).json({
          ok: false,
          error: `User ${LOCKED_TARGET_UID} already has email ${existingUser.email}.`
        });
        return;
      }

      const updatedUser = await adminAuth.updateUser(LOCKED_TARGET_UID, { email: newEmail });
      if (updatedUser.uid !== LOCKED_TARGET_UID) {
        throw new Error('Unexpected UID mismatch after updateUser');
      }

      res.json({
        ok: true,
        uid: updatedUser.uid,
        previousEmail: existingUser.email || null,
        email: updatedUser.email || newEmail,
        updatedByAdminUid: req.adminUser?.uid || null,
        message: 'Existing user email updated in place via Firebase Admin SDK without changing UID.'
      });
    } catch (err) {
      const mapped = formatAdminSdkError(err);
      res.status(mapped.status).json({ ok: false, error: mapped.message });
    }
  });

  const distDir = path.resolve(process.cwd(), 'dist');
  const distIndex = path.join(distDir, 'index.html');
  const isDevMode = process.env.NODE_ENV === 'development' || !fs.existsSync(distIndex);

  if (isDevMode) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
        ws: false,
        watch: {
          ignored: [
            '**/android/**',
            '**/android-web/**',
            '**/dist/**',
            '**/dist-android/**',
            '**/.rdm-backup/**',
            '**/ota/**'
          ]
        }
      },
      appType: 'mpa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(distDir, { index: 'index.html' }));
    app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.method !== 'GET' || req.path.startsWith('/api/')) return next();
      res.sendFile(distIndex);
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`RDM server listening on http://0.0.0.0:${PORT} (${isDevMode ? 'dev' : 'prod'})`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
