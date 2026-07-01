// Halaman Tentang: cerita singkat, statistik, dan nilai-nilai Kopi Kuliah.
function Tentang() {
  return (
    <>
      {/* ===== CERITA + FOTO ===== */}
      <section className="section container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6 about-text">
            <h1 className="section-title">Tentang Kopi Kuliah</h1>
            <p>
              Kopi Kuliah lahir dari satu kebiasaan sederhana: ngopi sambil
              mengerjakan tugas. Kami percaya tempat ngopi yang baik bukan cuma soal
              rasa, tapi soal ruang yang membuatmu betah berlama-lama, fokus, dan
              pulang dengan tugas yang kelar.
            </p>
            <p>
              Sejak 2019, kami menyajikan kopi <em>specialty</em> dengan biji pilihan,
              diracik hangat ala sore hari. Dari mahasiswa yang mengejar deadline
              sampai pekerja yang butuh jeda, semua punya kursi di sini. Datang sebagai
              tamu, pulang sebagai langganan.
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

          <div className="col-lg-6">
            <img
              className="about-photo"
              src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=900&q=70"
              alt="Barista meracik kopi di Kopi Kuliah"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== NILAI KAMI ===== */}
      <section className="section container">
        <header className="section-head">
          <h2 className="section-title">Yang Kami Pegang</h2>
          <p className="section-subtitle">
            Tiga hal yang membuat Kopi Kuliah terasa seperti rumah kedua.
          </p>
        </header>

        <div className="row g-4">
          <div className="col-md-4">
            <article className="card-highlight h-100">
              <img
                className="card-media"
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=70"
                alt="Biji kopi pilihan"
                loading="lazy"
              />
              <h3 className="card-title">Biji Pilihan</h3>
              <p>
                Kopi <em>specialty</em> yang diseduh konsisten setiap hari - rasa yang
                bisa kamu andalkan.
              </p>
            </article>
          </div>

          <div className="col-md-4">
            <article className="card-highlight h-100">
              <img
                className="card-media"
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=70"
                alt="Ruang kerja yang tenang"
                loading="lazy"
              />
              <h3 className="card-title">Ruang untuk Fokus</h3>
              <p>
                WiFi kencang, colokan di tiap meja, dan suasana tenang yang bikin betah
                nugas berjam-jam.
              </p>
            </article>
          </div>

          <div className="col-md-4">
            <article className="card-highlight h-100">
              <img
                className="card-media"
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=70"
                alt="Mahasiswa menikmati kopi"
                loading="lazy"
              />
              <h3 className="card-title">Ramah Mahasiswa</h3>
              <p>
                Harga bersahabat dan Promo Mahasiswa 15% - karena ngopi enak tak harus
                mahal.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tentang;
