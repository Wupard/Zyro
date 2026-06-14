const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const NOTIFY_EMAIL = "wupard@gmail.com";

async function sendCommentEmail(snap, author, text, sourceLabel) {
  const t = (text || "").slice(0, 2000);
  const subject = `[Zyro${sourceLabel ? " " + sourceLabel : ""}] Yeni yorum — ${author}`;
  const html = `
      <p><b>Yazar:</b> ${escapeHtml(author)}</p>
      <p><b>Yorum:</b></p>
      <pre style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(t)}</pre>
      <p><small>Yorum ID: ${escapeHtml(snap.id)}</small></p>
    `;

  const cfg = functions.config().smtp || {};
  if (!cfg.user || !cfg.pass) {
    functions.logger.warn(
      "SMTP ayarlı değil (smtp.user / smtp.pass). E-posta atlanıyor. Ayar için: firebase functions:config:set smtp.user=... smtp.pass=..."
    );
    return null;
  }

  const transporter = nodemailer.createTransport({
    host: cfg.host || "smtp.gmail.com",
    port: Number(cfg.port || 465),
    secure: String(cfg.secure || "true") !== "false",
    auth: { user: cfg.user, pass: cfg.pass },
  });

  await transporter.sendMail({
    from: cfg.from || cfg.user,
    to: NOTIFY_EMAIL,
    subject,
    text: `${author}: ${t}`,
    html,
  });
  return null;
}

/**
 * Android / Firestore `comments` koleksiyonu
 */
exports.onCommentCreatedEmail = functions.firestore
  .document("comments/{commentId}")
  .onCreate(async (snap) => {
    const d = snap.data() || {};
    const author = d.displayName || d.userId || "Bilinmeyen";
    const text = d.text || "";
    return sendCommentEmail(snap, author, text, "app");
  });

/**
 * Web sitesi `public_comments` koleksiyonu (Email + FCM)
 */
exports.onPublicCommentCreatedEmail = functions.firestore
  .document("public_comments/{commentId}")
  .onCreate(async (snap) => {
    const d = snap.data() || {};
    const author = d.userName || d.userEmail || d.userId || "Bilinmeyen";
    const text = d.text || "";
    
    // Email gönder
    const emailPromise = sendCommentEmail(snap, author, text, "web");

    // Yorum yanıtı ise FCM bildirim gönder
    const fcmPromise = (async () => {
      try {
        if (d.parentId) {
          const parentSnap = await admin.firestore().collection("public_comments").doc(d.parentId).get();
          if (parentSnap.exists) {
            const parentData = parentSnap.data();
            const parentUserId = parentData.userId;
            
            if (parentUserId && parentUserId !== d.userId) {
              const userSnap = await admin.firestore().collection("users").doc(parentUserId).get();
              if (userSnap.exists) {
                const userData = userSnap.data();
                const fcmToken = userData?.data?.profile?.fcmToken;
                
                if (fcmToken) {
                  const payload = {
                    notification: {
                      title: `${author} yorumuna yanıt verdi`,
                      body: text.length > 100 ? text.substring(0, 97) + '...' : text,
                    },
                    data: {
                      link: '/community' // Adjust link depending on client routing
                    },
                    token: fcmToken
                  };
                  await admin.messaging().send(payload);
                  console.log(`Push notification sent to ${parentUserId} for comment reply.`);
                }
              }
            }
          }
        }
      } catch (err) {
        console.error("FCM Comment Reply Error:", err);
      }
    })();

    await Promise.all([emailPromise, fcmPromise]);
    return null;
  });

/**
 * Admin Duyuruları (Broadcast) FCM Bildirimi
 */
exports.onBroadcastNotificationCreated = functions.firestore
  .document("notifications/{notifId}")
  .onCreate(async (snap) => {
    const data = snap.data() || {};
    if (data.type !== 'broadcast') return null;
    
    const title = data.title || "Yeni Duyuru";
    const message = data.body || data.message || "Admin'den yeni bir mesajınız var.";
    
    try {
      const usersSnap = await admin.firestore().collection("users").get();
      const tokens = [];
      
      usersSnap.forEach(doc => {
        const u = doc.data();
        const fcmToken = u?.data?.profile?.fcmToken;
        if (fcmToken) {
          tokens.push(fcmToken);
        }
      });
      
      if (tokens.length > 0) {
        const uniqueTokens = [...new Set(tokens)];
        const multicastMessage = {
          notification: {
            title: title,
            body: message,
          },
          data: {
            link: '/dashboard'
          },
          tokens: uniqueTokens
        };
        const response = await admin.messaging().sendEachForMulticast(multicastMessage);
        console.log(`Push notification broadcast sent. Success: ${response.successCount}, Failure: ${response.failureCount}`);
      }
    } catch (err) {
      console.error("FCM Broadcast Error:", err);
    }
    
    return null;
  });

/**
 * Kişisel Bildirimler (FCM)
 */
exports.onPersonalNotificationCreated = functions.firestore
  .document("users/{userId}/notifications/{notifId}")
  .onCreate(async (snap, context) => {
    const data = snap.data() || {};
    const userId = context.params.userId;
    const title = data.title || "Yeni Bildirim";
    const message = data.body || data.message || "Size özel yeni bir bildiriminiz var.";
    
    try {
      const userSnap = await admin.firestore().collection("users").doc(userId).get();
      if (userSnap.exists) {
        const u = userSnap.data();
        const fcmToken = u?.data?.profile?.fcmToken;
        if (fcmToken) {
          const personalMessage = {
            notification: {
              title: title,
              body: message,
            },
            data: {
              link: '/dashboard'
            },
            token: fcmToken
          };
          await admin.messaging().send(personalMessage);
          console.log(`Push notification sent to user ${userId}.`);
        }
      }
    } catch (err) {
      console.error("FCM Personal Notification Error:", err);
    }
    
    return null;
  });

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
