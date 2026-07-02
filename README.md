# Kopi Kuliah - Web Client Development (UAS)

Aplikasi web company profile untuk kafe **Kopi Kuliah**, dibuat oleh kelompok **Brewgram Studio** sebagai proyek akhir (UAS) mata kuliah Web Client Development, Program Studi Ilmu Komputer, Universitas Cakrawala.

Proyek ini adalah realisasi dari blueprint (wireframe dan desain) yang disetujui saat UTS, kini dibangun menjadi aplikasi React yang berjalan langsung di browser.

## Tim Brewgram Studio (Kelompok 3)

| Nama | NIM | Peran |
|------|-----|-------|
| Ghattan Abdul Jabbar | 25120300008 | UI/UX Designer |
| Halimah Sukmawaty | 25120300037 | UI/UX Designer |
| Haris Mauladi | 25120300015 | Frontend Developer / Git Manager |
| Izhar Rahman Dwiputra | 25120300032 | Frontend Developer / Git Manager |
| Herlangga Sapoetra | 25120300001 | Presenter / Analyst |

## Teknologi

- **React** (dengan Vite) - membangun antarmuka dari komponen.
- **React Router** - navigasi 5 halaman tanpa reload.
- **Bootstrap 5** - grid dan komponen responsif (Desktop dan Mobile).
- **Public API** - data kopi ditarik dari [Coffee API](https://api.sampleapis.com/coffee/hot).

## Fitur

- 5 halaman: Beranda, Menu, Tentang, Galeri, dan Kontak.
- Filter menu per kategori (Semua, Coffee, Non-Coffee, Pastry) memakai `useState`.
- Bagian "Kopi Spesial Dunia" menarik data dari Public API memakai `useEffect`.
- Form kritik dan saran dengan pesan konfirmasi.
- Tampilan responsif untuk layar HP maupun desktop.

## Struktur Folder

```
src/
  components/   Navbar, Footer, MenuCard (dipakai berulang)
  pages/        Beranda, Menu, Tentang, Galeri, Kontak
  data/         daftar menu dan kabar (data lokal)
  styles/       kopi-kuliah.css (warna dan font brand)
  App.jsx       pengatur rute halaman
  main.jsx      titik masuk aplikasi
```

## Cara Menjalankan

```bash
npm install      # pasang dependensi
npm run dev      # jalankan server pengembangan
npm run build    # build untuk produksi
```

## Demo Live

Aplikasi dapat diakses secara live di Vercel: _(tautan menyusul setelah deploy)_.
