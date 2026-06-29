import { Link } from "react-router-dom";

// Footer tampil di semua halaman: brand, navigasi, dan kontak.
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <p className="footer-logo">Kopi Kuliah</p>
            <p className="footer-tagline">Ngopi Dulu, Tugas Kelar Kemudian.</p>
          </div>

          <nav className="col-md-4 footer-nav" aria-label="Navigasi footer">
            <h2 className="footer-heading">Jelajahi</h2>
            <ul>
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/tentang">Tentang</Link></li>
              <li><Link to="/galeri">Galeri</Link></li>
              <li><Link to="/kontak">Kontak</Link></li>
            </ul>
          </nav>

          <div className="col-md-4 footer-contact">
            <h2 className="footer-heading">Kontak</h2>
            <address className="footer-address">
              Jl. Margonda Raya No. 88,<br />
              Pondok Cina, Beji, Depok 16424<br />
              <a href="tel:+6281234567890">+62 812-3456-7890</a><br />
              <a href="mailto:halo@kopikuliah.id">halo@kopikuliah.id</a>
            </address>
            <ul className="social-links">
              <li><a href="https://instagram.com/kopikuliah.id" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://tiktok.com/@kopikuliah" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Kopi Kuliah - Brewgram Studio.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
