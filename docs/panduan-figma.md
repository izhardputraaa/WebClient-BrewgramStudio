# Panduan Wireframe Figma — Kopi Kuliah

🎨 **File Figma:** https://www.figma.com/design/jsoKjCBeQ79BIL2tQq2WWi

Berisi **6 frame** — Desktop (1440px) & Mobile (390px) untuk Beranda, Menu, dan Kontak — dalam gaya **Mid-Fidelity greyscale** (struktur dulu, warna kemudian), sesuai prinsip *"Wireframe is a communication tool, not a final product"*.

---

## Isi File

```
Halaman "Wireframe — Kopi Kuliah"
├── Beranda — Desktop (1440)     ├── Beranda — Mobile (390)
├── Menu — Desktop (1440)         ├── Menu — Mobile (390)
└── Kontak — Desktop (1440)       └── Kontak — Mobile (390)
```

Setiap section digambar sebagai kotak abu berlabel (NAVBAR, HERO, GRID MENU, dst.) dengan anotasi nilai (padding, gap, breakpoint, UI states). Tanda **"NOT FINAL — Mid-Fi"** ditempel di tiap frame.

---

## Cara Membaca

1. Buka tautan di atas (mode View cukup untuk presentasi).
2. Bandingkan kolom **Desktop vs Mobile** untuk tiap halaman → bukti *responsive design*.
3. Baca anotasi di samping elemen untuk memahami keputusan tata letak.

---

## Melanjutkan ke High-Fidelity (opsional, pasca-approval)

Setelah struktur greyscale disetujui, naikkan ke Hi-Fi dengan menerapkan token dari [design-system.md](design-system.md): krem latte 60%, putih+teks 30%, terracotta **hanya** untuk CTA & badge (10%), font Playfair Display + Source Sans 3.

### Import dari website hidup (html.to.design)
Karena website-nya sudah jadi, kalian bisa meng-import tampilan asli ke Figma:
1. Pastikan situs sudah live di GitHub Pages (lihat README → Live Demo).
2. Di Figma: **Plugins → cari "html.to.design" → tab URL**.
3. Tempel URL tiap halaman (`/`, `/menu.html`, `/kontak.html`).
4. Set viewport **390** untuk versi Mobile, ulangi **1440** untuk Desktop.
5. Hasil import bisa disandingkan dengan wireframe Mid-Fi sebagai bukti *"blueprint → build"*.

---

## Catatan untuk Review (format "I Like / I Wish / What If")

Gunakan bahasa generatif saat critique internal, mis.:
- *I Like* — alur 3 halaman jelas dan navbar konsisten.
- *I Wish* — badge promo lebih menonjol di mobile.
- *What If* — kita tambah testimoni mahasiswa dekat CTA?
