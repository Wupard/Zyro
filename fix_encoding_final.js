const fs = require('fs');

let str = fs.readFileSync('index.html', 'utf-8');

// Each entry: [badHex, goodChar]
// Bad chars are written as unicode escapes to avoid encoding issues in the script itself
// The garbled patterns are Latin-1 bytes of UTF-8 emoji, re-encoded in UTF-8
// Pattern: \u011f\u0178 = "ğŸ" prefix for most emoji garbling

const map = [
  // fire 🔥 = F0 9F 94 A5 -> garbled: ğŸ"¥
  ['\u011f\u0178\u201d\u00a5', '\uD83D\uDD25'],
  // camera 📸 = F0 9F 93 B8 -> garbled: ğŸ""
  ['\u011f\u0178\u201d\u201c', '\uD83D\uDCF8'],
  // camera 📷 = F0 9F 93 B7 -> garbled: ğŸ"·
  ['\u011f\u0178\u201d\u00b7', '\uD83D\uDCF7'],
  // sunrise 🌅 = F0 9F 8C 85 -> garbled: ğŸŒ…
  ['\u011f\u0178\u0152\u2026', '\uD83C\uDF05'],
  // moon 🌙 = F0 9F 8C 99 -> garbled: ğŸŒ™
  ['\u011f\u0178\u0152\u2122', '\uD83C\uDF19'],
  // popcorn 🍿 = F0 9F 8D BF -> garbled: ğŸ¿
  ['\u011f\u0178\u008d\u00bf', '\uD83C\uDF7F'],
  // cup 🥤 = F0 9F A5 A4 -> garbled: ğŸ¥¤
  ['\u011f\u0178\u00a5\u00a4', '\uD83E\uDD64'],
  // box 📦 = F0 9F 93 A6 -> garbled: ğŸ"¦
  ['\u011f\u0178\u201d\u00a6', '\uD83D\uDCE6'],
  // salad 🥗 = F0 9F A5 97 -> garbled: ğŸ¥—
  ['\u011f\u0178\u00a5\u2014', '\uD83E\uDD57'],
  // sleeping 😴 = F0 9F 98 B4 -> garbled: ğŸ˜´
  ['\u011f\u0178\u02dc\u00b4', '\uD83D\uDE34'],
  // meat 🥩 = F0 9F A5 A9 -> garbled: ğŸ¥©
  ['\u011f\u0178\u00a5\u00a9', '\uD83E\uDD69'],
  // avocado 🥑 = F0 9F A5 91 -> garbled: ğŸ¥' (right single quote U+2019)
  ['\u011f\u0178\u00a5\u2019', '\uD83E\uDD51'],
  // floppy 💾 = F0 9F 92 BE -> garbled: ğŸ'¾
  ['\u011f\u0178\u2019\u00be', '\uD83D\uDCBE'],
  // crown 👑 = F0 9F 91 91 -> garbled: ğŸ''
  ['\u011f\u0178\u2019\u2019', '\uD83D\uDC51'],
  // globe 🌍 = F0 9F 8C 8D -> garbled: ğŸŒ
  ['\u011f\u0178\u0152\u008d', '\uD83C\uDF0D'],
  // person 👤 = F0 9F 91 A4 -> garbled: ğŸ'¤
  ['\u011f\u0178\u2019\u00a4', '\uD83D\uDC64'],
  // wrench 🔧 = F0 9F 94 A7 -> garbled: ğŸ"§
  ['\u011f\u0178\u201d\u00a7', '\uD83D\uDD27'],
  // megaphone 📢 = F0 9F 93 A2 -> garbled: ğŸ"¢
  ['\u011f\u0178\u201d\u00a2', '\uD83D\uDCE2'],
  // hammer 🔨 = F0 9F 94 A8 -> garbled: ğŸ"¨
  ['\u011f\u0178\u201d\u00a8', '\uD83D\uDD28'],
  // calendar 📅 = F0 9F 93 85 -> garbled: ğŸ"…
  ['\u011f\u0178\u201d\u2026', '\uD83D\uDCC5'],
  // muscle 💪 = F0 9F 92 AA -> garbled: ğŸ'ª
  ['\u011f\u0178\u2019\u00aa', '\uD83D\uDCAA'],
  // palette 🎨 = F0 9F 8E A8 -> garbled: ğŸ¨
  ['\u011f\u0178\u008e\u00a8', '\uD83C\uDFA8'],
  // magnify 🔍 = F0 9F 94 8D -> garbled: ğŸ"
  ['\u011f\u0178\u201d\u008d', '\uD83D\uDD0D'],
  // rocket 🚀 = F0 9F 9A 80 -> garbled: ğŸš€
  ['\u011f\u0178\u0161\u20ac', '\uD83D\uDE80'],
  // trophy 🏆 = F0 9F 8F 86 -> garbled: ğŸ†
  ['\u011f\u0178\u008f\u2020', '\uD83C\uDFC6'],
  // apple 🍎 = F0 9F 8D 8E -> garbled: ğŸ
  ['\u011f\u0178\u008d\u008e', '\uD83C\uDF4E'],
  // bread 🍞 = F0 9F 8D 9E -> garbled: ğŸ
  ['\u011f\u0178\u008d\u009e', '\uD83C\uDF5E'],
  // snack 🍱 (maybe)
  // drink 🥤 (already covered above)
  
  // Special chars
  // em dash — = E2 80 94 -> garbled: â€"
  ['\u00e2\u20ac\u201d', '\u2014'],
  // single right angle › = E2 80 BA -> garbled: â€º
  ['\u00e2\u20ac\u00ba', '\u203a'],
  // bullet • = E2 80 A2 -> garbled: â€¢
  ['\u00e2\u20ac\u00a2', '\u2022'],
  // four-pointed star ✦ = E2 9C A6 -> garbled: âœ¦
  ['\u00e2\u009c\u00a6', '\u2726'],
  // heavy check ✔ = E2 9C 94 -> garbled: âœ"
  ['\u00e2\u009c\u201d', '\u2714'],
  // cross ✕ = E2 9C 95 -> garbled: âœ•
  ['\u00e2\u009c\u2022', '\u2715'],
  // sparkles ✨ = E2 9C A8 -> garbled: âœ¨
  ['\u00e2\u009c\u00a8', '\u2728'],
  // pencil ✏ = E2 9C 8F -> garbled: âœ (then maybe FE0F follows)
  ['\u00e2\u009c\u008f\ufeff', '\u270f\ufe0f'],
  ['\u00e2\u009c\u008f', '\u270f'],
  // multiplication × = C3 97 -> garbled: Ã—
  ['\u00c3\u00d7', '\u00d7'],
  // right arrow → = E2 86 92 -> garbled: â†'
  ['\u00e2\u2020\u2019', '\u2192'],
];

let total = 0;
for (const [bad, good] of map) {
  if (str.includes(bad)) {
    const count = str.split(bad).length - 1;
    str = str.split(bad).join(good);
    console.log('Fixed ' + count + 'x: [' + [...bad].map(c => 'U+' + c.codePointAt(0).toString(16).toUpperCase()).join('') + '] -> [' + good + ']');
    total += count;
  }
}

fs.writeFileSync('index.html', str, 'utf-8');
console.log('\nTotal: ' + total + ' replacements. File saved!');
