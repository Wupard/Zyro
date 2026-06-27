const fs = require('fs');

const appJsPath = 'app.js';
let content = fs.readFileSync(appJsPath, 'utf-8');

const prgInitStr = 'window.prgInit = function() {';
const prgInitIdx = content.indexOf(prgInitStr);

if (prgInitIdx === -1) {
    console.error("prgInit not found!");
    process.exit(1);
}

content = content.slice(0, prgInitIdx);

const prgLogic = fs.readFileSync('prg_logic.js', 'utf-8');

fs.writeFileSync(appJsPath, content + prgLogic);
console.log("Success! Replaced app.js end.");
