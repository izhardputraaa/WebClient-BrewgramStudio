import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Beranda from "./pages/Beranda.jsx";
import Menu from "./pages/Menu.jsx";
import Tentang from "./pages/Tentang.jsx";
import Galeri from "./pages/Galeri.jsx";
import Kontak from "./pages/Kontak.jsx";

// Komponen utama aplikasi.
// Navbar dan Footer selalu tampil, sedangkan isi tengah berganti sesuai alamat URL.
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
