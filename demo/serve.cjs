/**
 * SmartBill Pro — demo launcher
 *
 * Serves this folder as a plain static site (no backend, no database, no
 * npm install). The app runs entirely in the browser and keeps its demo data
 * in localStorage. Browsers refuse to run ES modules from file://, which is
 * why the demo needs to be served over HTTP instead of double-clicked.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT) || 5050;
const ROOT = __dirname;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.map': 'application/json',
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  // Resolve inside ROOT only — never serve outside this folder.
  const filePath = path.join(ROOT, path.normalize(urlPath).replace(/^([/\\])+/, ''));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // SPA fallback (hash routing means this is rarely needed)
      return fs.readFile(path.join(ROOT, 'index.html'), (e2, html) => {
        if (e2) {
          res.writeHead(404);
          return res.end('Not found');
        }
        res.writeHead(200, { 'Content-Type': TYPES['.html'] });
        res.end(html);
      });
    }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('');
  console.log('  SmartBill Pro — DEMO (no backend)');
  console.log(`  Open:  http://localhost:${PORT}`);
  console.log('  Login: admin / admin123');
  console.log('');
  console.log('  Close this window to stop the demo.');
});
