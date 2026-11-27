// Server statis sederhana untuk folder build/ (hasil `npm run build`).
// Semua route yang tidak menemukan file akan diarahkan ke index.html agar
// client-side routing (react-router) tetap bekerja saat di-refresh.
//
// Jalankan: node server.js  (default port 5000, ubah dengan PORT=xxxx)

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT) || 5000;
const HOST = process.env.HOST || '0.0.0.0';
const BUILD_DIR = path.join(__dirname, 'build');

// `homepage` di package.json membuat aset direferensikan dari sub-path ini.
// Server lokal mengabaikannya supaya tetap bisa diakses dari root.
const BASE_PATH = '/ETS-PBF-React-with-material-UI';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.map': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

if (!fs.existsSync(path.join(BUILD_DIR, 'index.html'))) {
  console.error('Folder build/ belum ada. Jalankan `npm run build` terlebih dahulu.');
  process.exit(1);
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const stream = fs.createReadStream(filePath);

  res.writeHead(200, {
    'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
    // File ber-hash di static/ boleh di-cache lama, selain itu jangan.
    'Cache-Control': filePath.includes(`${path.sep}static${path.sep}`) ? 'public, max-age=31536000, immutable' : 'no-cache',
  });
  stream.pipe(res);
}

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname);

  // Buang prefix sub-path GitHub Pages kalau ada, misal /ETS-.../static/app.js
  if (urlPath === BASE_PATH) urlPath = '/';
  else if (urlPath.startsWith(BASE_PATH + '/')) urlPath = urlPath.slice(BASE_PATH.length);

  const resolved = path.normalize(path.join(BUILD_DIR, urlPath));

  // Cegah path traversal keluar dari folder build.
  if (!resolved.startsWith(BUILD_DIR)) {
    res.writeHead(403, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Forbidden');
    return;
  }

  fs.stat(resolved, (err, stats) => {
    if (!err && stats.isFile()) {
      sendFile(res, resolved);
      return;
    }

    // Fallback SPA: kirim index.html untuk semua route yang bukan file statis.
    sendFile(res, path.join(BUILD_DIR, 'index.html'));
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Website berjalan di http://localhost:${PORT}`);
  console.log(`Dari perangkat lain di jaringan yang sama: http://<IP-komputer-ini>:${PORT}`);
});
