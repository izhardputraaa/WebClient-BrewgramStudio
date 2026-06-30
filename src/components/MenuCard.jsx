// Kartu satu item menu. Menerima data lewat props "item".
// Dipakai berulang oleh halaman Menu dengan .map().
function MenuCard({ item }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <article className="menu-card h-100">
        <div className="menu-thumb">
          <img
            className="menu-photo"
            src={item.gambar}
            alt={item.nama}
            loading="lazy"
          />
          {/* Badge status hanya muncul kalau item punya status (mis. Terlaris) */}
          {item.status && <span className="badge-status">{item.status}</span>}
        </div>
        <div className="menu-body">
          <div className="menu-card-head">
            <h3 className="menu-name">{item.nama}</h3>
            <span className="badge-price">{item.harga}</span>
          </div>
          <p className="menu-desc">{item.deskripsi}</p>
        </div>
      </article>
    </div>
  );
}

export default MenuCard;
