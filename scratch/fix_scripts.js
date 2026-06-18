const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace <script src="..."> with <script src="..." defer> if it doesn't already have defer
html = html.replace(/<script\s+src="([^"]+)"(?!.*?defer)><\/script>/g, '<script src="$1" defer></script>');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Scripts deferred.');
