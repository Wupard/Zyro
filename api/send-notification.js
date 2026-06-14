// api/send-notification.js — Vercel Serverless Function
// Admin bildirim gönderince bu endpoint çağrılır.
// Firebase Admin SDK ile tüm FCM token sahiplerine push gönderir.
// Vercel'de FIREBASE_SERVICE_ACCOUNT environment variable'ı olmalı.

const admin = require('firebase-admin');

// Firebase Admin'i başlat (sadece bir kez)
if (!admin.apps.length) {
  let serviceAccount;
  try {
    // Vercel Environment Variable olarak JSON string bekliyoruz
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');
  } catch (e) {
    serviceAccount = {};
  }

  if (serviceAccount.project_id) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } else {
    // Service account yoksa Application Default Credentials dene
    admin.initializeApp({ projectId: 'zyro-d98d6' });
  }
}

const db = admin.firestore();

module.exports = async function handler(req, res) {
  // CORS başlıkları
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Basit güvenlik: admin secret token kontrolü
  const authHeader = req.headers['authorization'] || '';
  const adminSecret = process.env.ADMIN_NOTIFY_SECRET || '';
  if (adminSecret && authHeader !== `Bearer ${adminSecret}`) {
    return res.status(403).json({ error: 'Yetkisiz erişim' });
  }

  const { title, body, link = '/', recipientType = 'all', targetUid = '' } = req.body || {};

  if (!title || !body) {
    return res.status(400).json({ error: 'title ve body zorunludur' });
  }

  try {
    let successCount = 0;
    let failureCount = 0;

    if (recipientType === 'all') {
      // Tüm kullanıcılara gönder
      const usersSnap = await db.collection('users').get();
      const tokens = [];

      usersSnap.forEach(doc => {
        const u = doc.data();
        const token = u?.data?.profile?.fcmToken;
        if (token) tokens.push(token);
      });

      if (tokens.length > 0) {
        const uniqueTokens = [...new Set(tokens)];
        // 500'lük gruplara böl (FCM limiti)
        const chunks = [];
        for (let i = 0; i < uniqueTokens.length; i += 500) {
          chunks.push(uniqueTokens.slice(i, i + 500));
        }

        for (const chunk of chunks) {
          const response = await admin.messaging().sendEachForMulticast({
            notification: { title, body },
            data: { link },
            tokens: chunk,
          });
          successCount += response.successCount;
          failureCount += response.failureCount;
        }
      }
    } else if (recipientType === 'specific' && targetUid) {
      // Belirli kullanıcıya gönder
      const userSnap = await db.collection('users').doc(targetUid).get();
      if (userSnap.exists) {
        const token = userSnap.data()?.data?.profile?.fcmToken;
        if (token) {
          await admin.messaging().send({
            notification: { title, body },
            data: { link },
            token,
          });
          successCount = 1;
        }
      }
    }

    return res.status(200).json({
      ok: true,
      successCount,
      failureCount,
      message: `${successCount} cihaza bildirim gönderildi.`,
    });
  } catch (err) {
    console.error('FCM Error:', err);
    return res.status(500).json({ error: err.message });
  }
};
