// ============================================================
//  AgriMarket — Shared Components (Navbar + Footer)
//  Dipanggil di setiap halaman dengan: initComponents(basePath)
// ============================================================

function initComponents(base = '') {
  const navbarEl = document.getElementById('navbar');
  const footerEl = document.getElementById('footer');

  if (navbarEl) {
    navbarEl.innerHTML = `
    <nav class="navbar">
      <div class="nav-inner">
        <a href="${base}index.html" class="nav-logo">
          <div class="dot"></div>AgriMarket
        </a>
        <div class="nav-links">
          <a href="${base}index.html"         class="nav-link" data-page="beranda">Beranda</a>
          <a href="${base}pages/katalog.html" class="nav-link" data-page="katalog">Katalog</a>
          <a href="${base}pages/petani.html"  class="nav-link" data-page="petani">Petani</a>
          <a href="${base}pages/tentang.html" class="nav-link" data-page="tentang">Tentang</a>
        </div>
        <div class="nav-spacer"></div>
        <form class="nav-search search-form" data-base="${base}pages/katalog.html">
          <span class="nav-search-icon">🔍</span>
          <input type="text" name="q" placeholder="Cari produk segar...">
        </form>
        <div class="nav-right">
          <a href="${base}pages/keranjang.html" class="nav-cart">
            🛒<span class="cart-badge" style="display:none">0</span>
          </a>
          <a href="${base}pages/login.html"    class="btn-nav btn-nav-ghost">Masuk</a>
          <a href="${base}pages/register.html" class="btn-nav btn-nav-solid">Daftar</a>
        </div>
      </div>
    </nav>`;
  }

  if (footerEl) {
    footerEl.innerHTML = `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-logo"><div class="dot" style="width:10px;height:10px;border-radius:50%;background:var(--g300)"></div> AgriMarket</div>
          <p>Platform e-commerce hasil panen yang menghubungkan petani lokal langsung dengan konsumen. Lebih segar, lebih murah, tanpa perantara.</p>
        </div>
        <div class="footer-col">
          <h4>Konsumen</h4>
          <a href="${base}pages/katalog.html">Katalog Produk</a>
          <a href="${base}pages/keranjang.html">Keranjang</a>
          <a href="${base}pages/pesanan.html">Pesanan Saya</a>
        </div>
        <div class="footer-col">
          <h4>Petani</h4>
          <a href="${base}pages/register.html?role=petani">Daftar Jadi Mitra</a>
          <a href="${base}pages/petani.html">Daftar Petani</a>
          <a href="${base}pages/dashboard-petani.html">Dashboard Petani</a>
        </div>
        <div class="footer-col">
          <h4>Informasi</h4>
          <a href="${base}pages/tentang.html">Tentang Kami</a>
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Syarat & Ketentuan</a>
        </div>
      </div>
      <div class="footer-bottom">
        © ${new Date().getFullYear()} AgriMarket — Kelompok 19 · KOM 1231 Rekayasa Perangkat Lunak · IPB University
      </div>
    </footer>`;
  }

  // Re-run after insert
  updateCartBadge();
  setActiveNav();

  // Re-attach search forms
  document.querySelectorAll('.search-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const q = form.querySelector('input[name=q]').value.trim();
      const b = form.dataset.base || `${base}pages/katalog.html`;
      window.location.href = b + (q ? `?q=${encodeURIComponent(q)}` : '');
    });
  });
}
