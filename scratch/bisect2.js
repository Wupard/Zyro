const fs = require('fs');
const { execSync } = require('child_process');

const original = fs.readFileSync('index.html', 'utf8');

function testWith(content, label) {
  fs.writeFileSync('test-lh.html', content);
  const cmd = `npx lighthouse http://localhost:5000/test-lh.html --output=json --output-path=scratch/lh-test2.json --only-categories=performance --view=false --chrome-flags="--headless=new --no-sandbox --disable-gpu"`;
  try {
    console.log('Testing', label, '...');
    execSync(cmd, { stdio: 'pipe' });
    const r = JSON.parse(fs.readFileSync('scratch/lh-test2.json'));
    console.log(label, 'SUCCESS! Score:', r.categories.performance.score * 100);
    return true;
  } catch (e) {
    console.log(label, 'FAILED / CRASHED');
    return false;
  }
}

// Test A: No stylesheets at all
testWith(original.replace(/<link[^>]*stylesheet[^>]*>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, ''), 'No CSS and No Scripts');

// Test B: Only fonts CSS
testWith(original.replace(/<link[^>]*styles\.css[^>]*>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, ''), 'Without styles.css');
