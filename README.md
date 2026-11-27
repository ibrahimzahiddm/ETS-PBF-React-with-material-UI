# Ibrahim Zahid — Portfolio (React + Material UI)

Website portofolio pribadi yang dibangun dengan React 19, React Router 7, dan Material UI 9.

**Link publik:** https://ibrahimzahiddm.github.io/ETS-PBF-React-with-material-UI/

## Halaman

| Route     | Isi                                                         |
| --------- | ----------------------------------------------------------- |
| `/#/`       | Perkenalan singkat, foto profil, tombol ke proyek dan kontak |
| `/#/about`  | Tentang saya dan profil pendidikan                          |
| `/#/project`| Daftar repository publik, diambil langsung dari GitHub API  |
| `/#/contact`| Email, Instagram, GitHub, dan WhatsApp                      |
| `*`         | Halaman 404 untuk alamat yang tidak dikenal                 |

## Deploy ke GitHub Pages

Website sudah online di GitHub Pages dan tidak perlu komputer menyala untuk diakses.

```bash
npm run deploy     # build ulang, lalu push ke branch gh-pages
```

Setelah ~1 menit, perubahan muncul di link publik. Cek status build di
**Settings → Pages** pada repository.

Pertama kali menyiapkan repo baru:

1. Branch `gh-pages` harus ada (dibuat otomatis oleh `npm run deploy`).
2. Buka **Settings → Pages**, pilih **Source: Deploy from a branch**, branch `gh-pages`, folder `/ (root)`.
3. Sesuaikan `homepage` di `package.json` dengan URL repo yang dipakai.

## Menjalankan di lokal

```bash
npm install
npm start          # http://localhost:3000
```

## Menjalankan versi production di lokal

```bash
npm run build      # hasil build ada di folder build/
npm run serve      # http://localhost:5000
```

`server.js` mengirim `index.html` untuk semua route yang bukan file statis, dan
mengabaikan prefix sub-path GitHub Pages, sehingga bisa dibuka dari root lokal.

## Struktur

```
public/                   aset statis (favicon, manifest)
src/
  App.js                  daftar route (HashRouter)
  theme.js                tema Material UI
  Componen/
    PageLayout.jsx        kerangka umum: header + isi + footer
    PageHeader.jsx        app bar + drawer navigasi mobile
    FooterPage.jsx        footer
  hooks/
    useGitHubRepos.js     ambil repository dari GitHub API
  Pages/
    Home.jsx  About.jsx  Project.jsx  Contact.jsx  NotFound.jsx
server.js                 server statis untuk folder build/
deploy-gh-pages.js        deploy folder build/ ke branch gh-pages
```

## Test

```bash
npm test
```
