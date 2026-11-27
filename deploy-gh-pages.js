// Deploy folder build/ ke branch `gh-pages` di GitHub.
// Branch itu yang dipakai GitHub Pages untuk menyajikan website.
//
// Pemakaian:
//   npm run deploy
//
// Script ini memakai kredensial git yang sudah tersimpan di komputer
// (GitHub Desktop / Credential Manager). Kalau ternyata ditolak, jalankan
// dengan token:  $env:GH_TOKEN="ghp_..."; npm run deploy

const {execSync} = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const BUILD_DIR = path.join(__dirname, 'build');
const BRANCH = 'gh-pages';

function run(cmd, cwd = __dirname) {
  return execSync(cmd, {cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe']}).trim();
}

function runInherit(cmd, cwd) {
  execSync(cmd, {cwd, stdio: 'inherit'});
}

if (!fs.existsSync(path.join(BUILD_DIR, 'index.html'))) {
  console.error('Folder build/ belum ada. Jalankan `npm run build` lebih dulu.');
  process.exit(1);
}

const remote = run('git remote get-url origin');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'pbf-pages-'));

try {
  // Cegah GitHub Pages memproses folder dengan Jekyll (file berawalan underscore).
  fs.writeFileSync(path.join(BUILD_DIR, '.nojekyll'), '');

  console.log(`Menyalin build/ ke ${BRANCH} ...`);
  for (const name of fs.readdirSync(BUILD_DIR)) {
    fs.cpSync(path.join(BUILD_DIR, name), path.join(tmp, name), {recursive: true});
  }

  run('git init -q', tmp);
  run(`git checkout -q -b ${BRANCH}`, tmp);
  run('git config user.name "deploy"', tmp);
  run('git config user.email "deploy@local"', tmp);
  run('git config http.postBuffer 524288000', tmp);
  run('git config http.version HTTP/1.1', tmp);
  run('git add -A', tmp);
  run(`git commit -qm "Deploy ${new Date().toISOString()}"`, tmp);

  console.log(`Push ke ${remote} (${BRANCH}) ...`);
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      runInherit(`git push -f "${remote}" ${BRANCH}:${BRANCH}`, tmp);
      lastError = null;
      break;
    } catch (err) {
      lastError = err;
      console.warn(`Push percobaan ${attempt} gagal, mencoba lagi...`);
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 3000 * attempt);
    }
  }
  if (lastError) throw lastError;

  console.log('');
  console.log('Deploy selesai.');
  console.log('URL: https://ibrahimzahiddm.github.io/ETS-PBF-React-with-material-UI/');
  console.log('Pertama kali deploy: aktifkan GitHub Pages di Settings > Pages > Source: gh-pages.');
} finally {
  fs.rmSync(tmp, {recursive: true, force: true});
}
