const fs = require('fs');

const appJsPath = 'app.js';
let content = fs.readFileSync(appJsPath, 'utf-8');

const dbLogic = fs.readFileSync('db_logic.js', 'utf-8');
const prgLogic = fs.readFileSync('prg_logic.js', 'utf-8');

fs.writeFileSync(appJsPath, content + '\n\n' + dbLogic + '\n\n' + prgLogic);
console.log("Success! Appended components to app.js");
