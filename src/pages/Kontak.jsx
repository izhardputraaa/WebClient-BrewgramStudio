import { useState } from "react";

// Halaman Kontak: lokasi, info, form kritik/saran, dan media sosial.
// useState dipakai untuk menampilkan pesan sukses setelah form dikirim.
function Kontak() {
  const [terkirim, setTerkirim] = useState(false);

  // Saat form dikirim, cegah reload halaman lalu tampilkan pesan terima kasih.
  const kirimForm = (e) => {
    e.preventDefault();
    setTerkirim(true);
    e.target.reset(); // kosongkan kolom input setelah pesan terkirim
  };

  return (
    <>
      {/* ===== LOKASI + INFO ===== */}
      <section className="section container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div
              className="map-placeholder"
              role="img"
              aria-label="Peta lokasi Kopi Kuliah di Jl. Margonda Raya No. 88"
            >
              <p className="map-label">Peta - Jl. Margonda Raya No. 88</p>
              <a
                className="map-link"
                href="https://maps.google.com/?q=Jl.+Margonda+Raya+No.+88+Depok"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>

          <div className="col-lg-6 location-info">
            <h1 className="section-title">Mampir ke Kopi Kuliah</h1>
            <p>
              Ada pertanyaan, mau pesan tempat untuk kerja kelompok, atau sekadar
              ingin tahu promo hari ini? Hubungi kami atau langsung mampir - pintu
              kami selalu terbuka hangat untukmu.
            </p>
            <dl className="info-list">
              <dt>Alamat</dt>
              <dd>Jl. Margonda Raya No. 88, Pondok Cina, Beji, Depok, Jawa Barat 16424</dd>
              <dt>Telepon</dt>
              <dd><a href="tel:+6281234567890">+62 812-3456-7890</a></dd>
              <dt>Email</dt>
              <dd><a href="mailto:halo@kopikuliah.id">halo@kopikuliah.id</a></dd>
            </dl>
            <a
              href="https://wa.me/6281234567890"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== FORM KRITIK / SARAN ===== */}
      <section className="section container">
        <header className="section-head">
          <h2 className="section-title">Kirim Kritik &amp; Saran</h2>
          <p className="section-subtitle">
            Masukanmu membantu kami menyajikan ruang nugas yang lebih nyaman.
          </p>
        </header>

        <form className="contact-form" onSubmit={kirimForm}>
          <div className="form-field">
            <label htmlFor="nama">Nama</label>
            <input type="text" id="nama" name="nama" placeholder="Nama lengkapmu" required minLength={3} />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="nama@email.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="pesan">Pesan</label>
            <textarea id="pesan" name="pesan" rows={5} placeholder="Tulis kritik atau saranmu di sini..." required minLength={10}></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Kirim Pesan</button>

          {/* Pesan sukses hanya tampil setelah form dikirim (state terkirim = true) */}
          {terkirim && (
            <p className="form-success">Terima kasih! Pesanmu sudah kami terima.</p>
          )}
        </form>
      </section>

      {/* ===== MEDIA SOSIAL ===== */}
      <section className="section container social-section">
        <h2 className="section-title">Sapa Kami di Media Sosial</h2>
        <ul className="social-links social-links-lg">
          <li><a href="https://instagram.com/kopikuliah.id" target="_blank" rel="noopener noreferrer">Instagram - @kopikuliah.id</a></li>
          <li><a href="https://tiktok.com/@kopikuliah" target="_blank" rel="noopener noreferrer">TikTok - @kopikuliah</a></li>
          <li><a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">WhatsApp - +62 812-3456-7890</a></li>
        </ul>
      </section>
    </>
  );
}

export default Kontak;
