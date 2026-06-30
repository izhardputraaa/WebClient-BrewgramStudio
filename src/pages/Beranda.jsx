import { Link } from "react-router-dom";
import daftarKabar from "../data/kabar.js";

// Halaman Beranda: hero, sorotan, kabar terbaru, dan tentang singkat.
function Beranda() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 hero-text">
              <h1 className="hero-title">Ngopi Dulu, Tugas Kelar Kemudian.</h1>
              <p className="hero-subtext">
                Ruang hangat untuk mahasiswa dan pekerja yang butuh fokus. Kopi{" "}
                <em>specialty</em>, colokan di tiap sudut, dan WiFi kencang - semua
                siap menemani harimu di Kopi Kuliah.
              </p>
              <div className="hero-actions">
                <Link to="/menu" className="btn btn-primary">Lihat Menu</Link>
                <Link to="/kontak" className="btn btn-ghost">Cari Lokasi Kami</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hero-image"
                role="img"
                aria-label="Suasana hangat di dalam Kopi Kuliah"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3 KARTU SOROTAN ===== */}
      <section className="section container">
        <header className="section-head">
          <h2 className="section-title">Sorotan Minggu Ini</h2>
          <p className="section-subtitle">
            Tiga alasan kenapa Kopi Kuliah jadi tempat nugas favorit.
          </p>
        </header>

        <div className="row g-4">
          <div className="col-md-4">
            <article className="card-highlight h-100">
              <img
                className="card-media"
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=70"
                alt="Mahasiswa nugas di kafe"
                loading="lazy"
              />
              <h3 className="card-title">Promo Mahasiswa</h3>
              <p>
                Tunjukkan KTM dan dapatkan potongan <strong>15%</strong> untuk semua
                minuman, setiap hari Senin sampai Jumat.
              </p>
            </article>
          </div>

          <div className="col-md-4">
            <article className="card-highlight h-100">
              <img
                className="card-media"
                src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=70"
                alt="Segelas es kopi susu"
                loading="lazy"
              />
              <h3 className="card-title">Menu Terlaris Minggu Ini</h3>
              <p>
                Es Kopi Susu Skripsi jadi favorit semua orang - manis gula aren yang
                pas untuk teman nugas.
              </p>
            </article>
          </div>

          <div className="col-md-4">
            <article className="card-highlight h-100">
              <img
                className="card-media"
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=70"
                alt="Sudut meja kerja yang nyaman"
                loading="lazy"
              />
              <h3 className="card-title">Spot Nugas Nyaman</h3>
              <p>
                WiFi kencang, colokan di tiap meja, dan suasana tenang yang bikin
                betah fokus dari pagi sampai sore.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== KABAR TERBARU (dirender dengan .map dari data) ===== */}
      <section className="section container">
        <header className="section-head">
          <h2 className="section-title">Kabar Terbaru &amp; Promo</h2>
          <p className="section-subtitle">Info promo dan acara terbaru di Kopi Kuliah.</p>
        </header>

        <div className="row g-4">
          {daftarKabar.map((kabar) => (
            <div className="col-md-4" key={kabar.judul}>
              <article className="news-card h-100">
                <img
                  className="news-photo"
                  src={kabar.gambar}
                  alt={kabar.judul}
                  loading="lazy"
                />
                <div className="news-body">
                  <span className="news-date">{kabar.tanggal}</span>
                  <h3 className="news-title">{kabar.judul}</h3>
                  <p>{kabar.ringkasan}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TENTANG SINGKAT + JAM ===== */}
      <section className="section container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-7 about-text">
            <h2 className="section-title">Tentang Kopi Kuliah</h2>
            <p>
              Kopi Kuliah lahir dari satu kebiasaan sederhana: ngopi sambil
              mengerjakan tugas. Kami percaya tempat ngopi yang baik bukan cuma soal
              rasa, tapi soal ruang yang membuatmu betah berlama-lama, fokus, dan
              pulang dengan tugas yang kelar.
            </p>
            <ul className="stats">
              <li className="stat">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Rating Pelanggan</span>
              </li>
              <li className="stat">
                <span className="stat-number">120+</span>
                <span className="stat-label">Pilihan Menu</span>
              </li>
              <li className="stat">
                <span className="stat-number">2019</span>
                <span className="stat-label">Tahun Berdiri</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-5">
            <div className="hours-card">
              <h3 className="hours-title">Jam Operasional</h3>
              <table className="hours-table">
                <caption className="visually-hidden">
                  Jam buka Kopi Kuliah setiap hari
                </caption>
                <tbody>
                  <tr><th scope="row">Senin</th><td>08.00 - 22.00</td></tr>
                  <tr><th scope="row">Selasa</th><td>08.00 - 22.00</td></tr>
                  <tr><th scope="row">Rabu</th><td>08.00 - 22.00</td></tr>
                  <tr><th scope="row">Kamis</th><td>08.00 - 22.00</td></tr>
                  <tr><th scope="row">Jumat</th><td>08.00 - 23.00</td></tr>
                  <tr><th scope="row">Sabtu</th><td>09.00 - 23.00</td></tr>
                  <tr><th scope="row">Minggu</th><td>09.00 - 21.00</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Beranda;
