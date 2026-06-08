# Naskah Presentasi (15 Menit) — Kopi Kuliah

**Brewgram Studio** mempresentasikan *blueprint* kepada Client.
Slide deck final ada di Canva (lihat README). Naskah ini = pegangan tim.

> Filosofi pembuka: *"Developer tidak menulis satu baris kode pun sebelum arsitektur & desain disetujui Client."*

---

## Pembagian Peran

| Slide | Pembicara | Peran |
|-------|-----------|-------|
| 1, 3, 4, 6, 14 + Q&A | **Herlangga Sapoetra** | Presenter / Analyst (memimpin) |
| 5, 7 | **Ghattan Abdul Jabbar** | UI/UX Designer |
| 8, 9 | **Halimah Sukmawaty** | UI/UX Designer |
| 10 | **Haris Mauladi** | Frontend / Git |
| 11, 12, 13 | **Izhar Rahman Dwiputra** | Frontend / Git |

---

## Alur Slide

1. **Cover** — Kopi Kuliah: Blueprint Website Company Profile, oleh Brewgram Studio. Tagline *"Ngopi Dulu, Tugas Kelar Kemudian."* Persetujuan Client = lampu hijau membangun.
2. **Siapa Kami** — web agency mahasiswa, *UX-first*; 5 peran jelas; output: blueprint, design system, repo terversi.
3. **Masalah & Peluang** — mahasiswa/pekerja butuh *third place* untuk fokus; kafe yang cuma andalkan Instagram sulit ditemukan saat dicari serius (menu, harga, jam, lokasi).
4. **Solusi** — company profile yang menjawab 4 pertanyaan kunci dalam 1 layar; posisikan sebagai *spot nugas* (WiFi, colokan); Promo Mahasiswa 15% sebagai pemicu; mobile-first.
5. **Konsep & Tema** — "specialty coffee sore hari"; palet espresso–karamel–terracotta di atas krem; **disiplin 60-30-10**; gaya Sage Minimal; Playfair Display + Source Sans 3.
6. **Sitemap & Alur** — Beranda → Menu → Kontak; navbar konsisten; satu CTA primary per layar; tanpa jalan buntu.
7. **Sorot Beranda** — hero (slogan + subteks + CTA), 3 highlight, section Tentang dengan stats (4.9★, 120+ menu, sejak 2019).
8. **Sorot Menu** — 13 item, 3 kategori, **filter**; anatomi kartu (emoji, nama, deskripsi, harga badge); badge Terlaris/Baru/Promo; grid responsif.
9. **Sorot Kontak** — alamat Margonda + caption, tombol WhatsApp langsung, tabel jam 7 hari, tautan sosial, peta.
10. **Bukti Responsif** — mobile-first; <600px grid jadi 1 kolom; navbar menyusut; area sentuh 44px; konten identik, tata letak menyesuaikan.
11. **Design System** — palet, skala spasi 4-8-…-64, tipografi, dan komponen reusable terdokumentasi & konsisten di semua halaman; aksesibilitas WCAG AA (4.53); state hover & focus wajib.
12. **Infrastruktur GitHub ("Mesin Waktu")** — repo terpusat; riwayat commit bisa kembali ke versi mana pun; **branch fitur lalu `git merge` ke main**; kolaborasi paralel tanpa saling menimpa; transparan untuk Client.
13. **Roadmap ke React** — Fase 1 (kini): HTML/CSS/JS; Fase 2: komponenisasi kartu menu; Fase 3: data dari satu sumber (JSON/API); Fase 4: fitur dinamis. Struktur hari ini = fondasi React.
14. **Penutup** — blueprint lengkap; persetujuan = sinyal mulai; "hangat di tampilan, rapi di belakang layar"; terima kasih + Q&A.

---

## Catatan Pembicara (inti)

- **Herlangga (1):** "Hari ini kami tidak menjual janji, kami menunjukkan rencana konkret yang bisa dievaluasi."
- **Ghattan (5):** Jelaskan **kenapa** krem dominan & terracotta hemat → mata tidak lelah saat nugas berjam-jam. Aksen tidak boleh jadi latar blok besar.
- **Halimah (8–9):** Tekankan *chunking* (kategori menu) untuk turunkan beban kognitif, dan tombol WhatsApp memangkas friksi "dari layar ke kursi kafe".
- **Haris (10):** "Versi mobile bukan versi yang dipotong — kontennya sama persis, tata letaknya yang menyesuaikan." HTML5 semantic + Flexbox/Grid = ringan & SEO-friendly.
- **Izhar (11–13):** Konsistensi datang dari **palet & token yang terdokumentasi** (design-system.md), bukan tebak-tebakan. GitHub = mesin waktu; branch + merge menjaga `main` selalu stabil. Design system hari ini terpakai utuh saat migrasi React.

---

## Antisipasi Q&A Client

**Q: Kenapa harus setuju desain dulu, bukankah memperlambat?**
A: Justru mempercepat. Ubah kotak di wireframe butuh 5 menit; ubah setelah ratusan baris kode butuh berhari-hari + risiko bug. "Ukur dua kali, potong sekali."

**Q: Belum pakai React, apakah sia-sia?**
A: Tidak. HTML/CSS modern lebih ringan, cepat, SEO-friendly. Struktur & design system jadi fondasi langsung untuk React — kartu menu jadi komponen, palet terbawa utuh.

**Q: Kalau ada kode rusak/hilang?**
A: GitHub mencatat tiap perubahan sebagai commit — mesin waktu, bisa balik ke versi mana pun. Branch + merge menjaga `main` selalu stabil; riwayat tersimpan permanen.

**Q: Pelanggan kebanyakan buka dari HP?**
A: Kami mobile-first — mulai dari layar terkecil, bukan memadatkan desktop. Grid jatuh 1 kolom, tombol 44px, konten identik.

**Q: Kenapa terracotta dipakai sedikit?**
A: Disiplin 60-30-10. Kalau semua mencolok, tidak ada yang menonjol. Aksen hemat = mata tertuju ke CTA penting.

**Q: Apakah kami terkunci dengan kalian?**
A: Tidak. Repo bisa diserahkan penuh; teknologi terbuka (HTML/CSS/JS/React) bisa dilanjutkan tim mana pun. Kami ingin dipilih karena hasil, bukan keterpaksaan.
