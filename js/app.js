// ============================================================
//  AgriMarket — Main JavaScript (Static Version)
//  Mock data + UI interactions
// ============================================================

// ── MOCK DATA ────────────────────────────────────────────────
const DATA = {
  kategoris: [
    { id:1, nama:'Sayuran',     icon:'🥦', slug:'sayuran' },
    { id:2, nama:'Buah-buahan', icon:'🍎', slug:'buah' },
    { id:3, nama:'Rempah',      icon:'🌿', slug:'rempah' },
    { id:4, nama:'Umbi-umbian', icon:'🥕', slug:'umbi' },
    { id:5, nama:'Biji-bijian', icon:'🌽', slug:'biji' },
    { id:6, nama:'Jamur',       icon:'🍄', slug:'jamur' },
  ],

  petanis: [
    { id:1, nama:'Pak Budi Santoso', toko:'Kebun Pak Budi', lokasi:'Magelang, Jawa Tengah', rating:4.8, ulasan:120, produk:4, bergabung:'Jan 2024', deskripsi:'Sayuran organik segar dari dataran tinggi Magelang. Sudah 20 tahun berkebun dengan metode organik.' },
    { id:2, nama:'Bu Siti Rahayu',   toko:'Kebun Bu Siti',  lokasi:'Bandung, Jawa Barat',   rating:4.7, ulasan:85,  produk:3, bergabung:'Mar 2024', deskripsi:'Spesialis sayuran hijau dan buah tropis pilihan dari Bandung.' },
    { id:3, nama:'Pak Joko Widodo',  toko:'Ladang Joko',    lokasi:'Kediri, Jawa Timur',    rating:4.9, ulasan:210, produk:5, bergabung:'Feb 2024', deskripsi:'Petani cabai dan rempah terbaik dari dataran rendah Kediri.' },
  ],

  produk: [
    { id:1, petani_id:1, kat_id:1, nama:'Wortel Segar Premium',  icon:'🥕', harga:8000,  satuan:'kg',    stok:25, organik:true,  rating:4.8, terjual:580, desk:'Wortel organik dipanen pagi hari dari kebun Magelang. Segar, manis, bebas pestisida. Cocok untuk sup, jus, dan camilan sehat.' },
    { id:2, petani_id:1, kat_id:1, nama:'Paket Sayur Sup',       icon:'🥬', harga:22000, satuan:'paket', stok:30, organik:true,  rating:4.7, terjual:210, desk:'Paket lengkap sayuran sup berisi wortel, buncis, kentang, dan kol. Cukup untuk 4-5 porsi sup.' },
    { id:3, petani_id:3, kat_id:3, nama:'Cabai Merah Keriting',  icon:'🌶️', harga:35000, satuan:'kg',    stok:15, organik:false, rating:4.9, terjual:320, desk:'Cabai merah keriting segar dari Kediri. Kepedasan sedang-tinggi. Cocok untuk sambal dan masakan pedas.' },
    { id:4, petani_id:2, kat_id:1, nama:'Kangkung Organik',      icon:'🌿', harga:7000,  satuan:'ikat',  stok:40, organik:true,  rating:4.6, terjual:150, desk:'Kangkung hidroponik organik, dipanen setiap pagi. Daun lebar dan batang renyah.' },
    { id:5, petani_id:2, kat_id:2, nama:'Tomat Cherry Organik',  icon:'🍅', harga:18000, satuan:'kg',    stok:20, organik:true,  rating:4.6, terjual:95,  desk:'Tomat cherry manis dari kebun organik Bandung. Cocok untuk salad dan camilan sehat.' },
    { id:6, petani_id:1, kat_id:4, nama:'Wortel Baby Organik',   icon:'🥕', harga:12000, satuan:'kg',    stok:18, organik:true,  rating:4.7, terjual:75,  desk:'Wortel baby berukuran kecil, manis dan renyah. Ideal untuk snack anak dan salad.' },
    { id:7, petani_id:3, kat_id:3, nama:'Jahe Emprit Segar',     icon:'🫚', harga:15000, satuan:'kg',    stok:22, organik:false, rating:4.8, terjual:130, desk:'Jahe emprit segar ukuran kecil berasa tajam. Cocok untuk minuman kesehatan dan bumbu masak.' },
    { id:8, petani_id:2, kat_id:1, nama:'Bayam Merah Organik',   icon:'🌱', harga:6000,  satuan:'ikat',  stok:35, organik:true,  rating:4.5, terjual:60,  desk:'Bayam merah organik kaya antioksidan. Dipanen segar setiap pagi langsung dari kebun.' },
  ],

  ulasan: [
    { produk_id:1, user:'Sari D.',    rating:5, komentar:'Wortelnya segar banget! Tiba sebelum jam 9. Sangat recommended! 🥕' },
    { produk_id:1, user:'Budi S.',    rating:4, komentar:'Kualitas bagus, ukuran besar-besar. Pengiriman tepat waktu.' },
    { produk_id:2, user:'Dewi L.',    rating:5, komentar:'Paket lengkap banget! Hemat dan segar. Langsung masak sup.' },
    { produk_id:3, user:'Ahmad F.',   rating:5, komentar:'Pedesnya pas, segar banget. Sudah langganan tiap minggu.' },
    { produk_id:5, user:'Rina M.',    rating:5, komentar:'Tomat cherrynya manis, ga asem. Cocok buat salad anak.' },
  ],
};

// ── CART ────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('agrimarket_cart') || '[]');

function saveCart() {
  localStorage.setItem('agrimarket_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.jumlah, 0);
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

function addToCart(produkId, jumlah = 1) {
  const produk = DATA.produk.find(p => p.id === produkId);
  if (!produk) return;
  const existing = cart.find(i => i.id === produkId);
  if (existing) {
    existing.jumlah += jumlah;
  } else {
    cart.push({ id: produkId, nama: produk.nama, harga: produk.harga, satuan: produk.satuan, icon: produk.icon, jumlah });
  }
  saveCart();
  showToast(`${produk.nama} ditambahkan ke keranjang! 🛒`);
}

function removeFromCart(produkId) {
  cart = cart.filter(i => i.id !== produkId);
  saveCart();
  renderCart();
}

function updateQty(produkId, delta) {
  const item = cart.find(i => i.id === produkId);
  if (!item) return;
  item.jumlah = Math.max(1, item.jumlah + delta);
  saveCart();
  renderCart();
}

// ── TOAST ────────────────────────────────────────────────────
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#1a3a1a;color:#fff;padding:12px 20px;border-radius:10px;font-size:13px;font-weight:600;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,.25);opacity:0;transform:translateY(8px);transition:all .25s;font-family:var(--font-body)';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1'; t.style.transform = 'translateY(0)';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(8px)'; }, 2800);
}

// ── FORMAT ───────────────────────────────────────────────────
function rupiah(n) { return 'Rp ' + n.toLocaleString('id-ID'); }
function bintang(r) { return '★'.repeat(Math.floor(r)) + '☆'.repeat(5 - Math.ceil(r)); }

// ── RENDER HELPERS ───────────────────────────────────────────
function produkCard(p) {
  const petani = DATA.petanis.find(pt => pt.id === p.petani_id);
  return `
    <div class="prod-card fade-up">
      <a href="pages/detail.html?id=${p.id}">
        <div class="prod-img">
          ${p.icon}
          ${p.organik ? '<span class="prod-badge">🌿 Organik</span>' : ''}
        </div>
      </a>
      <div class="prod-body">
        <a href="pages/detail.html?id=${p.id}">
          <div class="prod-name">${p.nama}</div>
        </a>
        <div class="prod-seller">👨‍🌾 ${petani ? petani.toko : ''}</div>
        <div class="prod-rating">${bintang(p.rating)} ${p.rating.toFixed(1)} <span class="text-muted">(${p.terjual} terjual)</span></div>
        <div class="prod-footer">
          <div class="prod-price">${rupiah(p.harga)}<span>/${p.satuan}</span></div>
          <button class="btn-add" onclick="addToCart(${p.id})">+ Keranjang</button>
        </div>
      </div>
    </div>`;
}

// ── RENDER CART ──────────────────────────────────────────────
function renderCart() {
  const wrap = document.getElementById('cart-items');
  if (!wrap) return;

  if (cart.length === 0) {
    wrap.innerHTML = `<div class="empty-state"><div class="icon">🛒</div><p style="margin-bottom:16px">Keranjangmu masih kosong.</p><a href="../pages/katalog.html" class="btn btn-green">Mulai Belanja</a></div>`;
    updateSummary();
    return;
  }

  wrap.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="ci-img">${item.icon}</div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:600;margin-bottom:3px">${item.nama}</div>
        <div class="text-muted text-sm mb-8">${rupiah(item.harga)} / ${item.satuan}</div>
        <div class="qty-row">
          <button class="qty-btn" onclick="updateQty(${item.id},-1)">−</button>
          <span class="qty-val">${item.jumlah}</span>
          <button class="qty-btn" onclick="updateQty(${item.id},1)">+</button>
          <span class="text-muted text-sm">${item.satuan}</span>
        </div>
      </div>
      <div style="text-align:right">
        <div style="font-size:16px;font-weight:700;color:var(--g700);margin-bottom:8px">${rupiah(item.harga * item.jumlah)}</div>
        <button onclick="removeFromCart(${item.id})" class="btn btn-sm" style="background:#FFEBEE;color:var(--red);border:none">🗑 Hapus</button>
      </div>
    </div>`).join('');

  updateSummary();
}

function updateSummary() {
  const sub   = cart.reduce((s,i) => s + i.harga * i.jumlah, 0);
  const ongkir= 15000;
  const total = sub + ongkir;
  const el = id => document.getElementById(id);
  if (el('sum-sub'))    el('sum-sub').textContent    = rupiah(sub);
  if (el('sum-ongkir')) el('sum-ongkir').textContent = rupiah(ongkir);
  if (el('sum-total'))  el('sum-total').textContent  = rupiah(total);
}

function updateOngkir(val) {
  const sub   = cart.reduce((s,i) => s + i.harga * i.jumlah, 0);
  document.getElementById('sum-ongkir').textContent = rupiah(val);
  document.getElementById('sum-total').textContent  = rupiah(sub + val);
  document.querySelectorAll('.ship-opt-label').forEach(l => {
    const r = l.querySelector('input[name=pengiriman]');
    l.style.borderColor = r.checked ? 'var(--g700)' : 'var(--border)';
    l.style.background  = r.checked ? 'var(--g50)'  : '';
  });
}

// ── CHECKOUT ─────────────────────────────────────────────────
function checkout(e) {
  e.preventDefault();
  if (cart.length === 0) { showToast('Keranjang kosong!'); return; }
  const kode = 'AGR-' + new Date().toISOString().slice(0,10).replace(/-/g,'') + '-' + Math.random().toString(36).slice(2,7).toUpperCase();
  cart = [];
  saveCart();
  showToast(`Pesanan ${kode} berhasil dibuat! ✅`);
  setTimeout(() => { window.location.href = 'pesanan.html'; }, 1500);
}

// ── SEARCH / FILTER ──────────────────────────────────────────
function getSearchQuery() {
  return new URLSearchParams(window.location.search).get('q') || '';
}
function getKatFilter() {
  return new URLSearchParams(window.location.search).get('kat') || '';
}

function filterProduk(q = '', kat = '', sort = 'populer') {
  let hasil = [...DATA.produk];
  if (q)   hasil = hasil.filter(p => p.nama.toLowerCase().includes(q.toLowerCase()));
  if (kat) hasil = hasil.filter(p => {
    const k = DATA.kategoris.find(k => k.id === p.kat_id);
    return k && k.slug === kat;
  });
  if (sort === 'harga_asc')  hasil.sort((a,b) => a.harga - b.harga);
  if (sort === 'harga_desc') hasil.sort((a,b) => b.harga - a.harga);
  if (sort === 'terbaru')    hasil.sort((a,b) => b.id - a.id);
  if (sort === 'populer')    hasil.sort((a,b) => b.terjual - a.terjual);
  return hasil;
}

// ── NAV ACTIVE ───────────────────────────────────────────────
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') && path.endsWith(a.getAttribute('href').replace('../', '').replace('./', '')));
  });
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  setActiveNav();

  // Search form
  document.querySelectorAll('.search-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const q = form.querySelector('input[name=q]').value.trim();
      const base = form.dataset.base || 'pages/katalog.html';
      window.location.href = base + (q ? `?q=${encodeURIComponent(q)}` : '');
    });
  });
});
