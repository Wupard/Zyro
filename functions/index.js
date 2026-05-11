const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const NOTIFY_EMAIL = "wupard@gmail.com";

/**
 * Yorum oluşturulunca wupard@gmail.com adresine özet e-postası gönderir.
 * SMTP için: firebase functions:config:set smtp.host="smtp.gmail.com" smtp.port="465" smtp.user="..." smtp.pass="uygulama sifresi"
 */
exports.onCommentCreatedEmail = functions.firestore
  .document("comments/{commentId}")
  .onCreate(async (snap) => {
    const d = snap.data() || {};
    const author = d.displayName || d.userId || "Bilinmeyen";
    const text = (d.text || "").slice(0, 2000);
    const subject = `[Zyro] Yeni yorum — ${author}`;
    const html = `
      <p><b>Yazar:</b> ${escapeHtml(author)} (${escapeHtml(d.userId || "")})</p>
      <p><b>Yorum:</b></p>
      <pre style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(text)}</pre>
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
      text: `${author}: ${text}`,
      html,
    });
    return null;
  });

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
