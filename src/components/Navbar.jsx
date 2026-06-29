import { useState } from "react";
import { NavLink } from "react-router-dom";

// Navbar tampil di semua halaman.
// useState dipakai untuk membuka/menutup daftar menu saat dibuka di layar HP.
function Navbar() {
  const [menuTerbuka, setMenuTerbuka] = useState(false);

  // Tutup menu setelah salah satu link diklik (biar rapi di HP).
  const tutupMenu = () => setMenuTerbuka(false);

  // NavLink otomatis memberi kelas "is-active" pada halaman yang sedang dibuka.
  const kelasLink = ({ isActive }) =>
    isActive ? "nav-link is-active" : "nav-link";

  return (
    <header className="site-header">
      <nav className="navbar-kk" aria-label="Navigasi utama">
        <NavLink to="/" className="logo" onClick={tutupMenu}>
          Kopi Kuliah
        </NavLink>

        {/* Tombol hamburger: hanya tampil di layar kecil */}
        <button
          className="nav-toggle"
          type="button"
          aria-label="Buka menu navigasi"
          aria-expanded={menuTerbuka}
          onClick={() => setMenuTerbuka(!menuTerbuka)}
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>

        <ul className={menuTerbuka ? "nav-links is-open" : "nav-links"}>
          <li>
            <NavLink to="/" className={kelasLink} onClick={tutupMenu} end>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={kelasLink} onClick={tutupMenu}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/tentang" className={kelasLink} onClick={tutupMenu}>
              Tentang
            </NavLink>
          </li>
          <li>
            <NavLink to="/galeri" className={kelasLink} onClick={tutupMenu}>
              Galeri
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontak" className={kelasLink} onClick={tutupMenu}>
              Kontak
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
