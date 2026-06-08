# Spesifikasi Wireframe — Kopi Kuliah

Blueprint tata letak **Mid-Fidelity** untuk 3 halaman, dalam 2 versi: **Desktop (1440px)** & **Mobile (390px)**. Mendemonstrasikan kelayakan *responsive design* (rubrik UI/UX 40%). File Figma: lihat [panduan-figma.md](panduan-figma.md).

---

## 🗺️ Sitemap & Alur Pengguna

`Beranda → Menu → Kontak` — tiga halaman, satu alur: **tertarik → memilih → datang**.

| Halaman | File | Tujuan (Page Purpose) |
|---------|------|-----------------------|
| Beranda | `index.html` | Menyambut & meyakinkan dalam 1 layar, arahkan ke "Lihat Menu" |
| Menu | `menu.html` | Katalog 13 produk berkategori + harga jelas |
| Kontak | `kontak.html` | Lokasi, form kritik/saran, tautan sosial (titik konversi) |

---

## 📐 Susunan Section per Halaman

### Beranda
| Section | Desktop | Mobile |
|---------|---------|--------|
| Navbar | Logo kiri + link horizontal kanan (sticky) | Logo + hamburger; link jadi panel vertikal |
| Hero | 2 kolom (teks 55% \| gambar 45%) | 1 kolom; teks lalu gambar; CTA full-width |
| 3 Highlight | 3 kartu sejajar | 1 kolom bertumpuk |
| Tentang + Jam | 2 kolom (tentang \| tabel jam) | 1 kolom bertumpuk |
| Footer | 3 kolom | 1 kolom bertumpuk |

### Menu
| Section | Desktop | Mobile |
|---------|---------|--------|
| Navbar | (sama, link "Menu" aktif) | (sama) |
| Header + Filter | H1 + baris pill filter di tengah | H1 + filter wrap/scroll |
| Grid menu | 3 kolom | 1 kolom |
| Footer | 3 kolom | 1 kolom |

### Kontak
| Section | Desktop | Mobile |
|---------|---------|--------|
| Navbar | (sama, link "Kontak" aktif) | (sama) |
| Peta + Info | 2 kolom (peta \| info lokasi) | 1 kolom; peta lalu info |
| Form | 1 kolom terpusat (max 560px) | full-width |
| Sosial | Baris terpusat | Wrap terpusat |
| Footer | 3 kolom | 1 kolom |

---

## 📱 Breakpoint (Mobile-First)

| Nama | Rentang | Kolom | Navigasi |
|------|---------|-------|----------|
| Mobile | `< 600px` | 1 kolom (base) | Hamburger |
| Tablet | `600–1024px` | 2 kolom | Transisi |
| Desktop | `> 1024px` | 3 kolom | Navbar horizontal penuh |

---

## 🔴 Anotasi Handoff ("The Red Pen")

Nilai konkret agar developer tidak menebak:
- Padding kartu **16px**, gap grid **24px** (desktop) / **16px** (mobile).
- Radius kartu **12px**, area sentuh tombol **min 44px**.
- **UI States** `filter-button`: Normal (outline) · Hover (karamel) · Active (terracotta) · Focus-visible (outline 3px).
- **UI States** `form-field`: Normal · Focus (border terracotta) · Error (validasi HTML5) · Empty (placeholder).
- *Empty state* grid menu: "Belum ada menu di kategori ini."

---

## ✅ Evaluasi (Framework 5 Pertanyaan)

1. **Goals** — menjawab kebutuhan cari menu/harga/jam/lokasi. ✔
2. **Page Purpose** — tiap halaman punya 1 tujuan jelas. ✔
3. **Navigation** — navbar konsisten, tanpa jalan buntu. ✔
4. **Content** — dikelompokkan logis (chunking per kategori). ✔
5. **CTA** — satu CTA primary per layar. ✔
