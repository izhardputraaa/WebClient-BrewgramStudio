// Daftar menu Kopi Kuliah.
// Data ditulis manual di sini supaya harga dan nama khas kami tetap tampil.
// (Halaman Menu juga menarik data kopi dari API publik lewat useEffect.)
const daftarMenu = [
  // ---- Coffee ----
  {
    nama: "Es Kopi Susu Skripsi",
    kategori: "coffee",
    harga: "Rp 22.000",
    status: "Terlaris",
    gambar: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=70",
    deskripsi: "Espresso, susu segar, dan gula aren yang manisnya pas untuk menemani revisi bab demi bab.",
  },
  {
    nama: "Americano Begadang",
    kategori: "coffee",
    harga: "Rp 20.000",
    status: "",
    gambar: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=70",
    deskripsi: "Dua shot espresso pekat dengan air dingin, teman setia menembus deadline tengah malam.",
  },
  {
    nama: "Cappuccino Cum Laude",
    kategori: "coffee",
    harga: "Rp 26.000",
    status: "",
    gambar: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=70",
    deskripsi: "Espresso seimbang dengan foam susu lembut bertabur cokelat, senikmat IPK sempurna.",
  },
  {
    nama: "Latte Asistensi",
    kategori: "coffee",
    harga: "Rp 27.000",
    status: "Promo",
    gambar: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=70",
    deskripsi: "Espresso halus berpadu susu creamy, tenang menemani sesi bimbingan yang panjang.",
  },
  {
    nama: "Caramel Macchiato Magang",
    kategori: "coffee",
    harga: "Rp 30.000",
    status: "",
    gambar: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=70",
    deskripsi: "Lapisan karamel manis di atas espresso dan susu, manjakan diri usai shift magang.",
  },
  // ---- Non-Coffee ----
  {
    nama: "Matcha Latte Mahasiswa",
    kategori: "non-coffee",
    harga: "Rp 28.000",
    status: "Terlaris",
    gambar: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=70",
    deskripsi: "Matcha premium dengan susu lembut, hijau menyegarkan untuk otak yang butuh fokus.",
  },
  {
    nama: "Cokelat Panas Kos-Kosan",
    kategori: "non-coffee",
    harga: "Rp 24.000",
    status: "",
    gambar: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=70",
    deskripsi: "Cokelat hangat kental yang memeluk hangat di sore hujan saat rindu rumah.",
  },
  {
    nama: "Red Velvet Wisuda",
    kategori: "non-coffee",
    harga: "Rp 26.000",
    status: "Baru",
    gambar: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=70",
    deskripsi: "Susu red velvet creamy yang manisnya pantas merayakan momen-momen spesialmu.",
  },
  {
    nama: "Lemon Tea Semester",
    kategori: "non-coffee",
    harga: "Rp 18.000",
    status: "",
    gambar: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=600&q=70",
    deskripsi: "Teh dingin segar berpadu lemon, ringan menyegarkan di antara dua jam kuliah.",
  },
  // ---- Pastry ----
  {
    nama: "Croissant Presentasi",
    kategori: "pastry",
    harga: "Rp 23.000",
    status: "Terlaris",
    gambar: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=70",
    deskripsi: "Croissant butter renyah berlapis-lapis, gurih mengganjal perut sebelum tampil di depan kelas.",
  },
  {
    nama: "Banana Bread Begadang",
    kategori: "pastry",
    harga: "Rp 21.000",
    status: "",
    gambar: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=600&q=70",
    deskripsi: "Roti pisang lembut moist yang manisnya pas sebagai bekal lembur sampai pagi.",
  },
  {
    nama: "Cinnamon Roll Kelompok",
    kategori: "pastry",
    harga: "Rp 25.000",
    status: "Baru",
    gambar: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=70",
    deskripsi: "Gulungan kayu manis hangat berlapis glaze, paling enak dibagi saat kerja kelompok.",
  },
  {
    nama: "Brownies Beasiswa",
    kategori: "pastry",
    harga: "Rp 22.000",
    status: "",
    gambar: "https://images.unsplash.com/photo-1432107294469-414527cb5c65?auto=format&fit=crop&w=600&q=70",
    deskripsi: "Brownies cokelat fudgy padat yang memuaskan, hadiah kecil untuk usaha kerasmu.",
  },
];

export default daftarMenu;
