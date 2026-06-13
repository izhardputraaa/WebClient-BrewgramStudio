/* =========================================================
   KOPI KULIAH — main.js  (JavaScript ringan)
   1. Toggle menu hamburger (mobile)
   2. Filter menu per kategori
   3. Validasi & pesan sukses form kontak
   Catatan: tiap fitur dijaga pengecekan elemen agar satu file
   ini aman dipakai di ketiga halaman.
   ========================================================= */

// ===== 1. HAMBURGER MENU =====
var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', function () {
    var terbuka = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', terbuka); // animasi ikon jadi X
    // Perbarui status aksesibilitas tombol
    navToggle.setAttribute('aria-expanded', terbuka ? 'true' : 'false');
  });
}

// ===== 2. FILTER MENU =====
var filterButtons = document.querySelectorAll('.filter-button');
var menuCards = document.querySelectorAll('.menu-card');
var menuEmpty = document.getElementById('menuEmpty');

if (filterButtons.length > 0) {
  filterButtons.forEach(function (tombol) {
    tombol.addEventListener('click', function () {
      // Tandai tombol yang sedang aktif
      filterButtons.forEach(function (b) { b.classList.remove('is-active'); });
      tombol.classList.add('is-active');

      var kategori = tombol.dataset.filter;
      var terlihat = 0;

      // Tampilkan / sembunyikan kartu sesuai kategori
      menuCards.forEach(function (kartu) {
        var tampil = (kategori === 'all') || (kartu.dataset.category === kategori);
        kartu.classList.toggle('is-hidden', !tampil);
        if (tampil) { terlihat = terlihat + 1; }
      });

      // Tampilkan pesan bila kategori kosong
      if (menuEmpty) { menuEmpty.hidden = (terlihat !== 0); }
    });
  });
}

// ===== 3. FORM KONTAK =====
var contactForm = document.getElementById('contactForm');
var formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Manfaatkan validasi bawaan HTML5 (required, type=email, minlength)
    if (contactForm.checkValidity()) {
      if (formSuccess) { formSuccess.hidden = false; }
      contactForm.reset();
    } else {
      // Munculkan pesan error bawaan peramban
      contactForm.reportValidity();
    }
  });
}

// ===== 4. KABAR TERBARU (render kartu dari data "CMS") =====
var newsGrid = document.getElementById('newsGrid');
if (newsGrid && typeof KABAR_TERBARU !== 'undefined') {
  var html = '';
  KABAR_TERBARU.forEach(function (item) {
    html += '<article class="news-card">'
      + '<div class="news-thumb"><img src="' + item.gambar + '" alt="' + item.judul + '" loading="lazy" onerror="this.remove()"></div>'
      + '<div class="news-body">'
      + '<time class="news-date">' + item.tanggal + '</time>'
      + '<h3 class="news-title">' + item.judul + '</h3>'
      + '<p class="news-text">' + item.ringkasan + '</p>'
      + '</div></article>';
  });
  newsGrid.innerHTML = html;
}
