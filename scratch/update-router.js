const fs = require('fs');
let app = fs.readFileSync('app.js', 'utf8');

app = app.replace(
  "else if(page==='calculators'){setTimeout(init1RMCalculator,50);}",
  "else if(page==='calculators'){setTimeout(initCalculators,50);}"
);

// Also when language updates, make sure renderNotes() and renderCalculators() are called if active
const applyLangIdx = app.indexOf('function applyLanguage(');
if (applyLangIdx !== -1) {
  const closeBrace = app.indexOf('}', applyLangIdx);
  app = app.substring(0, closeBrace) + '\n  renderNotes();\n  renderCalculators();\n' + app.substring(closeBrace);
}

fs.writeFileSync('app.js', app, 'utf8');
console.log('Router & applyLanguage updated successfully');
