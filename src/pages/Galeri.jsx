// Halaman Galeri: kumpulan foto suasana Kopi Kuliah.
// Daftar foto disimpan di array lalu dirender dengan .map().
const daftarFoto = [
  { gambar: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=600&q=70", alt: "Barista menyeduh kopi", caption: "Seduhan manual tiap pagi" },
  { gambar: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=70", alt: "Sudut meja kerja", caption: "Spot nugas favorit" },
  { gambar: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=70", alt: "Suasana interior kafe", caption: "Hangatnya ruang utama" },
  { gambar: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=600&q=70", alt: "Secangkir kopi di meja kayu", caption: "Teman setia begadang" },
  { gambar: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=70", alt: "Mahasiswa mengerjakan tugas", caption: "Fokus tanpa terburu" },
  { gambar: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=70", alt: "Latte art di cangkir", caption: "Detail di tiap cangkir" },
  { gambar: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=70", alt: "Biji kopi dan cangkir", caption: "Biji pilihan setiap hari" },
  { gambar: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=70", alt: "Cangkir kopi hangat", caption: "Hangat dari pagi sampai sore" },
  { gambar: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=70", alt: "Kopi dan buku di meja", caption: "Ngopi sambil membaca" },
];

function Galeri() {
  return (
    <section className="section container">
      <header className="section-head">
        <h1 className="section-title">Galeri Kopi Kuliah</h1>
        <p className="section-subtitle">
          Sudut-sudut hangat tempat ide dan tugas bertemu kopi.
        </p>
      </header>

      <div className="row g-4">
        {daftarFoto.map((foto) => (
          <div className="col-12 col-sm-6 col-lg-4" key={foto.gambar}>
            <figure className="gallery-item">
              <img src={foto.gambar} alt={foto.alt} loading="lazy" />
              <figcaption>{foto.caption}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galeri;
