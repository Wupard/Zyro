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
 * Web sitesi `public_comments` koleksiyonu
 */
exports.onPublicCommentCreatedEmail = functions.firestore
  .document("public_comments/{commentId}")
  .onCreate(async (snap) => {
    const d = snap.data() || {};
    const author = d.userName || d.userEmail || d.userId || "Bilinmeyen";
    const text = d.text || "";
    return sendCommentEmail(snap, author, text, "web");
  });

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
