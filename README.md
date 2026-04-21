# 🌱 AgriMarket — Platform E-Commerce Hasil Panen

> Platform e-commerce yang menghubungkan petani lokal langsung dengan konsumen. Lebih segar, lebih murah, tanpa perantara.

**KOM 1231 Rekayasa Perangkat Lunak · Kelompok 19 · IPB University**

---

## 👥 Anggota Kelompok

| NIM | Nama |
|-----|------|
| M0405241082 | Rachel Rehoboth Lumbantobing |
| M0405241083 | Widya Aulianti |
| M0405241084 | Cornelius Bernard Harefa |
| M0405241085 | Fildzah Wahyu Izzati |

---

## 🌐 Live Demo

👉 **[agrimarket-kelompok19.github.io](https://agrimarket-kelompok19.github.io)** *(ganti dengan link GitHub Pages kamu)*

---

## 📁 Struktur File

```
agrimarket-html/
├── index.html                    ← Beranda utama
├── css/
│   └── style.css                 ← Semua styling
├── js/
│   ├── app.js                    ← Data mock + logika keranjang
│   └── components.js             ← Navbar & footer shared
└── pages/
    ├── katalog.html              ← Halaman katalog produk
    ├── detail.html               ← Detail produk (dynamic via URL param)
    ├── keranjang.html            ← Keranjang belanja & checkout
    ├── pesanan.html              ← Riwayat pesanan
    ├── petani.html               ← Daftar semua petani mitra
    ├── profil-petani.html        ← Profil publik petani (dynamic)
    ├── tentang.html              ← Tentang AgriMarket
    ├── login.html                ← Halaman masuk
    ├── register.html             ← Halaman daftar
    ├── dashboard-petani.html     ← Dashboard petani
    └── dashboard-admin.html      ← Dashboard admin
```

---

## 🚀 Cara Menjalankan

### Opsi 1 — Langsung buka di browser
Double-click `index.html` → langsung jalan!

### Opsi 2 — Live Server (VSCode)
Install extension **Live Server** → klik kanan `index.html` → *Open with Live Server*

### Opsi 3 — GitHub Pages
1. Push ke GitHub repository
2. Settings → Pages → Source: `main` branch, folder `/` (root)
3. Akses di `https://username.github.io/agrimarket-html`

---

## ✨ Fitur

| Halaman | Fitur |
|---------|-------|
| Beranda | Hero, kategori, produk rekomendasi, cara kerja, testimoni |
| Katalog | Filter kategori, sorting (populer/terbaru/harga), pencarian |
| Detail Produk | Galeri, info petani, ulasan, tambah keranjang |
| Keranjang | Kelola item, opsi pengiriman, checkout (simulasi) |
| Petani | Daftar semua petani mitra, profil publik tiap petani |
| Tentang | Misi visi, statistik, cara kerja, daftar petani |
| Login/Register | Form autentikasi (simulasi, tanpa backend) |
| Dashboard Petani | Statistik, pesanan masuk, produk aktif |
| Dashboard Admin | Statistik, verifikasi petani, monitor transaksi |

---

## 🔑 Akun Demo

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@agrimarket.id | password |
| Petani | budi@petani.id | password |
| Konsumen | sari@konsumen.id | password |

> ⚠️ Ini versi HTML statis (frontend only). Login bersifat simulasi menggunakan localStorage. Untuk versi lengkap dengan database MySQL, lihat folder `agrimarket-php/`.

---

## 🛠️ Teknologi

- **HTML5** — Struktur halaman
- **CSS3** — Styling dengan CSS Variables + Flexbox/Grid
- **Vanilla JavaScript** — Interaktivitas, mock data, localStorage
- **Google Fonts** — Fraunces (heading) + DM Sans (body)

---

*Dibuat untuk tugas Praktikum KOM 1231 Rekayasa Perangkat Lunak, Semester Genap 2025/2026*
