# Design System — Kopi Kuliah

Acuan visual tunggal agar seluruh halaman konsisten. Nilai di bawah ditulis **langsung (literal)** di `style.css` sesuai level materi (tanpa CSS custom properties), dan dokumen ini menjadi rujukannya.

> Tema: **"Specialty Coffee Sore Hari"** — hangat, dewasa, membumi.
> Voice: santai-sopan, memihak mahasiswa & pekerja yang butuh ruang fokus.

---

## 🎨 Palet Warna

| Peran | Nama | HEX | Catatan |
|-------|------|-----|---------|
| Primary | Espresso Sangrai | `#5B3A29` | Navbar, footer, tombol gelap |
| Primary Hover | Espresso Tua | `#4A2F21` | State `:hover` tombol |
| Secondary | Karamel Kayu | `#A9744F` | Dekoratif & ikon (bukan blok besar) |
| **Accent** | **Terracotta Roast** | `#C8763A` | **HANYA CTA & badge harga (10%)** |
| Teks di atas accent | Cokelat Pekat | `#2E211B` | Kontras WCAG AA 4.53 |
| Background | Krem Latte | `#FBF6EF` | Dominan 60% |
| Surface | Foam Putih | `#FFFFFF` | Kartu |
| Teks | Cokelat Pekat | `#2E211B` | Teks utama |
| Muted | Abu Biji Kopi | `#6B5B4F` | Teks sekunder |
| Border | Garis Krem | `#E7DCCF` | Garis kartu & pemisah |

**Disiplin 60-30-10:** Krem Latte 60% · Putih + teks 30% · Terracotta **hanya 10%** (CTA & badge). Aksen dilarang jadi latar blok besar agar mata tidak lelah saat nugas berjam-jam.

---

## ✍️ Tipografi

- **Judul (H1/H2):** `'Playfair Display', Georgia, serif` — elegan, untuk hero & judul section.
- **Isi & H3:** `'Source Sans 3', system-ui, sans-serif` — jernih, untuk paragraf, harga, label.

| Token | Mobile | Desktop | Penggunaan |
|-------|--------|---------|------------|
| H1 | 30px | 40px | Slogan hero / judul halaman |
| H2 | 24px | 28px | Judul section |
| H3 | ~18px | ~18px | Judul kartu (font isi, bold) |
| Body | 16px | 18px | Paragraf & deskripsi |
| Small | 14px | 14px | Caption, label, badge |

---

## 📏 Skala Spasi

Ritme jarak konsisten: **4 · 8 · 12 · 16 · 24 · 32 · 48 · 64** (px).

## 🔘 Radius & Bayangan

- Radius: kecil `8px` (badge/input) · kartu `12px` · besar `20px` (hero) · pill `999px` (tombol).
- Bayangan: tipis `0 4px 14px rgba(46,33,27,.08)` · elevasi hover `0 10px 30px rgba(46,33,27,.12)`.

---

## 🧩 Komponen Reusable

| Komponen | Kelas | Catatan |
|----------|-------|---------|
| Navbar | `.navbar` `.nav-links` | Sticky, identik di 3 halaman; link aktif = `.is-active` |
| Hamburger | `.nav-toggle` | Tampil < 1024px, toggle via JS |
| Tombol | `.btn` `.btn-primary` `.btn-ghost` | Min-height 44px; 1 CTA primary per layar |
| Kartu sorotan | `.card-highlight` | Ikon + judul + deskripsi |
| Kartu menu | `.menu-card` | Emoji, badge harga (accent), badge status |
| Tombol filter | `.filter-button` | Pill; aktif = accent |
| Field form | `.form-field` | `label`+`input` berpasangan, validasi HTML5 |
| Footer | `.site-footer` | 3 kolom, identik di 3 halaman |

---

## ♿ Aksesibilitas (level dasar)

- `lang="id"`, satu `<h1>` per halaman, hierarki heading runtut.
- Setiap `<label for>` dipasangkan `id` input yang cocok.
- Kontras teks lolos **WCAG AA** (4.53 untuk teks di atas terracotta).
- State `:hover` lebih gelap & `:focus-visible` outline terracotta 3px.
- Area sentuh tombol minimal **44px**.

---

## 🪄 5 Prinsip Desain

1. **Disiplin 60-30-10** — accent hemat agar fokus & nyaman.
2. **Satu CTA primary per layar** — keputusan pengguna ringan.
3. **Aksesibilitas dulu** — kontras, fokus, area sentuh.
4. **Kartu lapang (Sage Minimal)** — white space = kesan premium.
5. **Mobile-first & hangat** — mulai dari layar terkecil.
