const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// --- auth-card: arka plani, border, shadow kaldir ---
css = css.replace(
  /\.auth-card\{[\s\S]*?animation:authCardIn[^;]+;\s*\}/,
  '.auth-card{\n  text-align:center;max-width:400px;padding:52px 40px;\n  background:transparent;\n  border:none;\n  box-shadow:none;\n  position:relative;z-index:1;\n  animation:authCardIn .6s ease both;\n}'
);

// --- auth-logo-img: 190px, temiz, fade-in animasyonu ---
css = css.replace(
  /\/\* ={4,}[^*]*Auth[^*]*\*\/\s*\.auth-logo-img \{[\s\S]*?\}[\s\S]*?@keyframes authLogoPulse \{[\s\S]*?\}/,
  [
    '/* ====== LOGO - Auth Ekrani Logosu ======',
    '*/',
    '.auth-logo-img {',
    '  width: 190px;',
    '  height: 190px;',
    '  object-fit: contain;',
    '  display: block;',
    '  margin: 0 auto 16px;',
    '  background: none;',
    '  border: none;',
    '  box-shadow: none;',
    '  outline: none;',
    '  animation: authLogoIn 0.7s cubic-bezier(0.22,0.8,0.24,1) both;',
    '}',
    '@keyframes authLogoIn {',
    '  from { opacity: 0; transform: scale(0.90); }',
    '  to   { opacity: 1; transform: scale(1); }',
    '}',
    '@media (prefers-reduced-motion: reduce) {',
    '  .auth-logo-img { animation: none; opacity: 1; }',
    '}'
  ].join('\n')
);

// --- sidebar-logo: temizle ---
css = css.replace(
  /\/\* ={4,}[^*]*Sidebar[^*]*\*\/\s*\.sidebar-logo \{[\s\S]*?\}\s*body\.sidebar-collapsed \.sidebar-logo \{[\s\S]*?\}/,
  [
    '/* ====== LOGO - Sidebar Logosu ======',
    '*/',
    '.sidebar-logo {',
    '  width: 32px;',
    '  height: 32px;',
    '  object-fit: contain;',
    '  flex-shrink: 0;',
    '  background: none;',
    '  border: none;',
    '  box-shadow: none;',
    '  transition: width 0.2s, height 0.2s;',
    '}',
    'body.sidebar-collapsed .sidebar-logo {',
    '  width: 34px;',
    '  height: 34px;',
    '}'
  ].join('\n')
);

fs.writeFileSync('styles.css', css, 'utf8');
console.log('CSS guncellendi');

// Dogrula
const lines = css.split('\n');
const idx = lines.findIndex(l => l.includes('.auth-logo-img'));
console.log('--- auth-logo-img context ---');
console.log(lines.slice(idx, idx+8).join('\n'));

const idx2 = lines.findIndex(l => l.includes('.auth-card{'));
console.log('--- auth-card context ---');
console.log(lines.slice(idx2, idx2+6).join('\n'));
