import { useState, useEffect } from "react";
import daftarMenu from "../data/menu.js";
import MenuCard from "../components/MenuCard.jsx";

// Halaman Menu.
// - useState dipakai untuk fitur interaktif: menyaring menu per kategori.
// - useEffect dipakai untuk menarik data kopi dari Public API saat halaman dibuka.
function Menu() {
  // ===== 1. FITUR FILTER (useState) =====
  // "kategori" menyimpan pilihan tombol yang sedang aktif.
  const [kategori, setKategori] = useState("all");

  // Kalau "all", tampilkan semua. Kalau tidak, saring sesuai kategori.
  const menuTampil =
    kategori === "all"
      ? daftarMenu
      : daftarMenu.filter((item) => item.kategori === kategori);

  // Daftar tombol filter (dibuat array supaya tidak menulis tombol berulang).
  const tombolFilter = [
    { nilai: "all", label: "Semua" },
    { nilai: "coffee", label: "Coffee" },
    { nilai: "non-coffee", label: "Non-Coffee" },
    { nilai: "pastry", label: "Pastry" },
  ];

  // ===== 2. DATA DARI API (useEffect) =====
  // State untuk menampung hasil fetch, status memuat, dan status gagal.
  const [kopiDunia, setKopiDunia] = useState([]);
  const [memuat, setMemuat] = useState(true);
  const [gagal, setGagal] = useState(false);

  // useEffect dengan array kosong [] berarti jalan sekali saat halaman pertama dibuka.
  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((res) => res.json())
      .then((data) => {
        // Ambil 6 kopi pertama saja supaya tampilan tidak terlalu panjang.
        setKopiDunia(data.slice(0, 6));
        setMemuat(false);
      })
      .catch(() => {
        setGagal(true);
        setMemuat(false);
      });
  }, []);

  return (
    <>
      {/* ===== JUDUL + FILTER ===== */}
      <section className="section container">
        <header className="section-head">
          <h1 className="section-title">Menu Kopi Kuliah</h1>
          <p className="section-subtitle">
            Diracik hangat untuk menemani nugas. Harga sudah termasuk satu tempat
            ternyaman di kota.
          </p>
        </header>

        <div className="filter-bar" role="group" aria-label="Saring menu per kategori">
          {tombolFilter.map((tombol) => (
            <button
              key={tombol.nilai}
              type="button"
              className={
                kategori === tombol.nilai
                  ? "filter-button is-active"
                  : "filter-button"
              }
              onClick={() => setKategori(tombol.nilai)}
            >
              {tombol.label}
            </button>
          ))}
        </div>
      </section>

      {/* ===== GRID MENU (dari data lokal, disaring useState) ===== */}
      <section className="section container">
        <div className="row g-4">
          {/* key pakai nama menu karena unik; penting sebab daftar berubah saat difilter */}
          {menuTampil.map((item) => (
            <MenuCard item={item} key={item.nama} />
          ))}
        </div>
        {menuTampil.length === 0 && (
          <p className="menu-empty">Belum ada menu di kategori ini.</p>
        )}
      </section>

      {/* ===== KOPI SPESIAL DUNIA (dari Public API, ditarik useEffect) ===== */}
      <section className="section container">
        <header className="section-head">
          <h2 className="section-title">Kopi Spesial Dunia</h2>
          <p className="section-subtitle">
            Inspirasi racikan kopi panas dari seluruh dunia, ditarik langsung dari
            data terbuka (Public API).
          </p>
        </header>

        {memuat && <p className="menu-empty">Sedang memuat data kopi...</p>}
        {gagal && (
          <p className="menu-empty">Maaf, data kopi gagal dimuat. Coba lagi nanti.</p>
        )}

        <div className="row g-4">
          {kopiDunia.map((kopi) => (
            <div className="col-12 col-sm-6 col-lg-4" key={kopi.id}>
              <article className="menu-card h-100">
                <div className="menu-thumb">
                  <img
                    className="menu-photo"
                    src={kopi.image}
                    alt={kopi.title}
                    loading="lazy"
                  />
                </div>
                <div className="menu-body">
                  <h3 className="menu-name">{kopi.title}</h3>
                  {/* Deskripsi asli API berbahasa asing, jadi kami tampilkan
                      daftar bahannya saja supaya tetap nyambung dengan situs. */}
                  <p className="menu-desc">
                    Bahan: {kopi.ingredients ? kopi.ingredients.join(", ") : "-"}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Menu;
