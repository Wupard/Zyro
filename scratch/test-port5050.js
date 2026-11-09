const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let p = req.url.split('?')[0];
  if (p === '/') p = '/index.html';
  const filePath = path.join(__dirname, '..', p.replace(/^\//, ''));
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(5050, () => {
  console.log('Test server running at http://localhost:5050/');
  process.env.CHROME_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const outJson = path.join(__dirname, 'lh-port5050.json');
  const cmd = `npx lighthouse http://localhost:5050/ --output=json --output-path="${outJson}" --only-categories=performance --view=false --chrome-flags="--headless=old --no-sandbox"`;
  try {
    console.log('Running Lighthouse on http://localhost:5050/ ...');
    execSync(cmd, { stdio: 'inherit' });
    const r = JSON.parse(fs.readFileSync(outJson));
    console.log('==============================================');
    console.log('LIGHTHOUSE SCORE ON PORT 5050:', r.categories.performance.score * 100);
    console.log('==============================================');
  } catch (e) {
    console.error('Lighthouse on 5050 error:', e.message);
  } finally {
    server.close();
    process.exit(0);
  }
});
