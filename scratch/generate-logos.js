/**
 * generate-logos.js v2
 * Kaynak logoları:
 *   - Arkaplansız.png: şeffaf arka plan, siyah Z (açık tema için)
 *   - Siyah.png:       siyah arka plan + beyaz Z (koyu tema için)
 *
 * Üretilen varlıklar:
 *   assets/logo-white.png        → şeffaf bg, beyaz Z (koyu tema site-içi)
 *   assets/logo-black.png        → şeffaf bg, siyah Z (açık tema site-içi)
 *   assets/icon-192.png          → 192x192, beyaz bg, siyah Z (PWA any)
 *   assets/icon-512.png          → 512x512, beyaz bg, siyah Z (PWA any)
 *   assets/icon-512-maskable.png → 512x512, beyaz bg, siyah Z %60 (PWA maskable)
 *   assets/apple-touch-icon.png  → 180x180, beyaz bg, siyah Z
 *   assets/favicon-32.png        → 32x32, beyaz bg, siyah Z
 *   favicon.svg                  → embedded PNG favicon
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname, '..');
// Şeffaf arka planlı siyah Z → logo-black + PWA ikonları (siyah Z + beyaz bg)
const LOGO_TRANSPARENT_BLACK = path.join(BASE, 'Logo', 'Zyro Logo - Arkaplansız.png');
// Siyah bg + beyaz Z → logo-white üretmek için
const LOGO_DARK_BG_WHITE_Z   = path.join(BASE, 'Logo', 'Zyro Logo - Siyah.png');
const ASSETS = path.join(BASE, 'assets');

/**
 * logo-white: siyah bg + beyaz Z kaynağından, arka planı siyah pikselleri şeffaf yap,
 * beyaz Z'yi koru (beyaz pikseller opak beyaz kalır)
 */
async function makeLogoWhite() {
  const { data, info } = await sharp(LOGO_DARK_BG_WHITE_Z)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    // lum: parlak piksel = beyaz Z, koyu piksel = siyah arka plan
    const lum = (r * 299 + g * 587 + b * 114) / 1000;
    // Alpha: parlak piksel = yüksek alpha (Z görünsün), karanlık = şeffaf (bg kaybolsun)
    const alpha = Math.round(Math.min(255, lum * 1.1)); // hafif boost
    out[i * 4 + 0] = 255; // beyaz Z
    out[i * 4 + 1] = 255;
    out[i * 4 + 2] = 255;
    out[i * 4 + 3] = alpha;
  }

  const outputPath = path.join(ASSETS, 'logo-white.png');
  await sharp(out, { raw: { width, height, channels: 4 } }).png().toFile(outputPath);
  console.log(`✓ logo-white.png (şeffaf bg, beyaz Z)`);
}

/**
 * logo-black: Arkaplansız.png zaten şeffaf + siyah Z, direkt kopyala/renk-pekiştir
 * Z rengini #111111 olarak normalize et
 */
async function makeLogoBlack() {
  const { data, info } = await sharp(LOGO_TRANSPARENT_BLACK)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const a = data[i * 4 + 3];
    out[i * 4 + 0] = 0x11; // #111111
    out[i * 4 + 1] = 0x11;
    out[i * 4 + 2] = 0x11;
    out[i * 4 + 3] = a; // orijinal alpha kanalını koru
  }

  const outputPath = path.join(ASSETS, 'logo-black.png');
  await sharp(out, { raw: { width, height, channels: 4 } }).png().toFile(outputPath);
  console.log(`✓ logo-black.png (şeffaf bg, #111111 siyah Z)`);
}

/**
 * PWA ikonu: beyaz dolu arka plan + siyah Z (Arkaplansız.png kaynağından)
 * scaleFactor: logo'nun canvas'a göre oranı (maskable için 0.60, diğerleri 0.72)
 */
async function makePwaIcon(size, outputPath, scaleFactor = 0.72) {
  const logoSize = Math.round(size * scaleFactor);
  const offset   = Math.round((size - logoSize) / 2);

  // Siyah Z'yi logoSize'a yeniden boyutlandır (şeffaf arka planlı)
  const logoResized = await sharp(LOGO_TRANSPARENT_BLACK)
    .resize(logoSize, logoSize, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .ensureAlpha()
    .toBuffer();

  // Beyaz arka plan üzerine yapıştır
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 255 }
    }
  })
    .composite([{ input: logoResized, top: offset, left: offset }])
    .png()
    .toFile(outputPath);

  console.log(`✓ ${path.basename(outputPath)} (${size}x${size}, scale=${scaleFactor})`);
}

async function main() {
  // ── Site içi logolar ──────────────────────────────────────
  await makeLogoWhite();   // koyu tema: şeffaf bg, beyaz Z
  await makeLogoBlack();   // açık tema: şeffaf bg, #111111 Z

  // ── PWA / mobil ikonlar ───────────────────────────────────
  await makePwaIcon(192,  path.join(ASSETS, 'icon-192.png'),           0.72);
  await makePwaIcon(512,  path.join(ASSETS, 'icon-512.png'),           0.72);
  await makePwaIcon(512,  path.join(ASSETS, 'icon-512-maskable.png'),  0.60);
  await makePwaIcon(180,  path.join(ASSETS, 'apple-touch-icon.png'),   0.72);
  await makePwaIcon(32,   path.join(ASSETS, 'favicon-32.png'),         0.72);

  // ── SVG favicon (embedded PNG) ────────────────────────────
  const favicon32Buf = fs.readFileSync(path.join(ASSETS, 'favicon-32.png'));
  const b64 = favicon32Buf.toString('base64');
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="4" fill="#ffffff"/>
  <image href="data:image/png;base64,${b64}" width="32" height="32"/>
</svg>`;
  fs.writeFileSync(path.join(BASE, 'favicon.svg'), faviconSvg);
  console.log(`✓ favicon.svg`);

  console.log('\n✅ Tüm varlıklar üretildi!');
}

main().catch(err => {
  console.error('❌ Hata:', err);
  process.exit(1);
});
