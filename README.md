# 📚 Website Dinas Pendidikan

Website resmi Dinas Pendidikan — dibangun dengan HTML, CSS, dan JavaScript murni.

## 🚀 Deploy Online

### Opsi 1: Netlify (Gratis & Paling Mudah)

1. Buat akun di [netlify.com](https://netlify.com)
2. Klik **"Add new site"** → **"Import an existing project"**
3. Hubungkan repository GitHub/GitLab Anda
4. Klik **Deploy** — selesai!

Atau drag & drop folder proyek ini ke [app.netlify.com/drop](https://app.netlify.com/drop)

### Opsi 2: Vercel (Gratis)

1. Buat akun di [vercel.com](https://vercel.com)
2. Klik **"New Project"** → import dari GitHub
3. Klik **Deploy**

### Opsi 3: GitHub Pages (Gratis)

1. Push proyek ke repository GitHub
2. Buka **Settings** → **Pages**
3. Pilih branch `main` dan folder `/ (root)`
4. Klik **Save** — website live dalam beberapa menit

### Opsi 4: VPS / Hosting Tradisional

Upload semua file ke folder `public_html` melalui cPanel atau FTP.

## 📁 Struktur Proyek

```
├── index.html          # Halaman utama
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── main.js         # JavaScript interaktif
├── assets/
│   └── images/         # Gambar (tambahkan di sini)
├── netlify.toml        # Konfigurasi Netlify
├── vercel.json         # Konfigurasi Vercel
└── package.json        # Metadata proyek
```

## 💻 Menjalankan Lokal

Buka `index.html` langsung di browser, atau gunakan server lokal:

```bash
npx serve . -p 3000
```

Lalu buka http://localhost:3000

## 🔧 Kustomisasi

- **Warna**: Edit variabel CSS di `:root` dalam `css/style.css`
- **Konten**: Edit teks langsung di `index.html`
- **Gambar**: Tambahkan ke folder `assets/images/` dan update `src` di HTML
- **Domain**: Setelah deploy, hubungkan domain kustom (misal disdik.go.id) melalui panel hosting

## 📝 Lisensi

© 2026 Dinas Pendidikan. Hak Cipta Dilindungi.
