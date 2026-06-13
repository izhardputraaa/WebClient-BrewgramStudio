# Proyek UTS Web Client Development — Universitas Cakrawala

> ☕ **Kopi Kuliah** — *Ngopi Dulu, Tugas Kelar Kemudian.*
> Cetak biru (blueprint) website company profile sebuah kafe modern, dirancang oleh **Brewgram Studio**.

---

## Nama Kelompok: Brewgram Studio

**Anggota Kelompok:**

| No | Nama | NIM | Peran |
|----|------|-----|-------|
| 1 | Ghattan Abdul Jabbar | 25120300008 | UI/UX Designer |
| 2 | Halimah Sukmawaty | 25120300037 | UI/UX Designer |
| 3 | Haris Mauladi | 25120300015 | Frontend Developer / Git Manager |
| 4 | Izhar Rahman Dwiputra | 25120300032 | Frontend Developer / Git Manager |
| 5 | Herlangga Sapoetra | 25120300001 | Presenter / Analyst |

- **Mata Kuliah:** Web Client Development (WCD06)
- **Dosen Pengampu:** Reza Fahmi Alviandy
- **Program Studi:** Ilmu Komputer

---

## Deskripsi Proyek

**Kopi Kuliah** adalah website company profile untuk kafe lokal modern yang menyasar **mahasiswa dan pekerja kantoran**. Website ini menyajikan informasi menu, suasana, lokasi, dan jam operasional dalam tampilan yang hangat, proporsional, dan nyaman dilihat.

Sesuai instruksi UTS, kami bertindak sebagai sebuah **Web Agency** yang mempresentasikan **Rancangan Sistem (Blueprint)** kepada Client sebelum dibangun ulang menggunakan **React.js** pada tahap berikutnya (UAS). Karena itu, struktur halaman sengaja dirancang **modular dan reusable** (navbar, footer, kartu menu) agar transisi dari blueprint ke komponen React berjalan mulus.

### Lima Halaman Utama
1. **Beranda (`index.html`)** — Hero, 3 kartu sorotan, **section "Kabar Terbaru & Promo" (konten dikelola lewat CMS)**, tentang singkat, dan jam operasional.
2. **Menu (`menu.html`)** — Katalog 13 produk berfoto, dilengkapi **filter kategori** (Coffee / Non-Coffee / Pastry).
3. **Tentang (`tentang.html`)** — Cerita kafe, nilai-nilai, dan statistik.
4. **Galeri (`galeri.html`)** — Galeri foto suasana & sajian.
5. **Kontak (`kontak.html`)** — Peta lokasi, jam operasional, formulir kritik/saran (validasi HTML5), tombol WhatsApp, dan media sosial.

---

## 🔗 Tautan Penting

| Aset | Tautan |
|------|--------|
| 🌐 **Live Demo (GitHub Pages)** | https://izhardputraaa.github.io/WebClient-BrewgramStudio/ |
| 🎨 **Wireframe (Figma)** | https://www.figma.com/design/jsoKjCBeQ79BIL2tQq2WWi |
| 📊 **Slide Presentasi (Canva)** | https://www.canva.com/d/fJStJQbDMh4_WSp |
| 📄 **Deck PDF (offline)** | [docs/Kopi-Kuliah-Deck.pdf](docs/Kopi-Kuliah-Deck.pdf) |

---

## 🛠️ Teknologi

Sesuai materi yang diajarkan (tahap pra-React):

- **HTML5 Semantic** — `lang="id"`, satu `<h1>` per halaman, `<nav>`/`<main>`/`<footer>`, `<table>`/`<dl>`, form dengan ikatan `label`+`id`.
- **CSS** — penataan dengan **Flexbox** (komponen) + **CSS Grid** (kerangka menu), *Mobile-First* via media query, `box-sizing: border-box` (Reset Universal), penamaan kelas *single-class kebab-case*.
- **JavaScript ringan** — hamburger menu, filter kategori, pesan sukses form, dan render kartu "Kabar Terbaru" dari `data.js` (simulasi konten yang dikelola CMS, tanpa backend).

> Tanpa framework, bundler, atau dependensi build — murni HTML/CSS/JS agar mudah dijelaskan & dipresentasikan.

---

## 📁 Struktur Folder

```
WebClient-BrewgramStudio/
├── index.html            # Halaman Beranda (+ section CMS Kabar Terbaru)
├── menu.html             # Halaman Menu (katalog berfoto + filter)
├── tentang.html          # Halaman Tentang Kami
├── galeri.html           # Halaman Galeri foto
├── kontak.html           # Halaman Kontak (peta + form + sosial)
├── assets/
│   ├── css/
│   │   └── style.css     # Seluruh gaya (Flexbox + Grid, Mobile-First)
│   ├── js/
│   │   ├── data.js       # Data "Kabar Terbaru" (simulasi konten CMS)
│   │   └── main.js       # Interaksi (hamburger, filter, form, render Kabar)
│   └── img/              # (cadangan aset gambar)
├── docs/
│   ├── design-system.md      # Palet warna, tipografi, komponen
│   ├── wireframe-spec.md     # Spesifikasi wireframe Desktop & Mobile
│   ├── panduan-figma.md      # Cara membaca & melanjutkan file Figma
│   ├── skrip-presentasi.md   # Naskah presentasi 15 menit
│   └── Kopi-Kuliah-Deck.pdf  # Ekspor PDF deck Canva (offline)
├── .gitignore
└── README.md
```

---

## ▶️ Cara Menjalankan (Lokal)

Karena ini situs statis, cukup buka `index.html` di peramban. Untuk pengalaman terbaik (path & font), jalankan server lokal sederhana:

```bash
# Python 3
python3 -m http.server 8099
# lalu buka http://localhost:8099
```

---

## 🕰️ Konvensi Git ("Mesin Waktu")

- **Pesan commit** mengikuti *Conventional Commits*: `feat:`, `fix:`, `docs:`, `style:`, `refactor:` (subjek ≤ 50 karakter).
- **Branch fitur** dipakai untuk pengembangan terpisah lalu di-*merge* ke `main` (mendemonstrasikan alur "multiverse" Git).
- `.gitignore` menjaga repo tetap bersih (`.DS_Store`, `node_modules/`, `*.log`).

---

## 🎯 Status

**Blueprint UTS — disetujui sebagai komitmen tema kelompok.** Tahap selanjutnya (UAS): implementasi ulang menjadi komponen **React.js** mengikuti blueprint ini.

---

<sub>Dirancang & disusun oleh <strong>Brewgram Studio</strong> — UTS Web Client Development, Universitas Cakrawala © 2026.</sub>
