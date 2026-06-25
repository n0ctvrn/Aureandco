# AureDecor - Website Jasa Dekorasi Event

Selamat datang di **AureDecor** - Website profesional untuk jasa dekorasi event yang modern dan responsif.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Struktur File](#struktur-file)
- [Instalasi & Setup](#instalasi--setup)
- [Customization](#customization)
- [Panduan Penggunaan](#panduan-penggunaan)
- [Kontak & Support](#kontak--support)

## ✨ Fitur Utama

✅ **Desain Modern & Responsif** - Tampilan sempurna di desktop, tablet, dan mobile
✅ **Navigation Bar Profesional** - Menu yang intuitif dan mudah digunakan
✅ **Hero Section Menarik** - Dengan carousel gambar dan call-to-action
✅ **Showcase Layanan** - 6 jenis layanan dekorasi dengan deskripsi lengkap
✅ **Galeri Portofolio** - Grid galeri dengan overlay effect
✅ **Paket Harga** - 3 tier paket dengan fitur lengkap
✅ **Testimonial Klien** - Showcase kepuasan pelanggan
✅ **Why Us Section** - 6 keunggulan layanan
✅ **Footer Lengkap** - Dengan informasi kontak dan social media
✅ **CTA (Call-to-Action)** - Multiple conversion points untuk WhatsApp & Telepon

## 📁 Struktur File

```
AureDecor/
├── index.html          # File HTML utama
├── styles.css          # Stylesheet CSS
├── script.js           # JavaScript untuk interaktivitas
└── README.md           # File dokumentasi ini
```

## 🚀 Instalasi & Setup

### 1. Persyaratan Minimal
- Browser modern (Chrome, Firefox, Safari, Edge)
- Text Editor (VS Code, Sublime, dll)
- Internet connection (untuk loading Font Awesome & gambar)

### 2. Cara Membuka Website

**Opsi A: Buka langsung di browser**
```
1. Buka File Explorer
2. Navigate ke folder AureDecor
3. Double-click file index.html
4. Website akan membuka di browser default Anda
```

**Opsi B: Menggunakan Live Server (Recommended)**
```
1. Install VS Code Extension "Live Server"
2. Buka folder AureDecor di VS Code
3. Klik kanan pada index.html → "Open with Live Server"
4. Website akan membuka di browser dengan auto-refresh
```

**Opsi C: Upload ke Web Hosting**
```
1. Compress folder AureDecor menjadi ZIP
2. Upload ke hosting Anda (cPanel, Cpanel, dll)
3. Extract file
4. Akses melalui domain Anda
```

## 🎨 Customization

### 1. Mengganti Warna Brand

Buka file `styles.css` dan cari bagian berikut:

```css
:root {
    --primary-color: #d4a574;      /* Warna utama (emas) */
    --secondary-color: #2c2415;    /* Warna sekunder (coklat gelap) */
    --accent-color: #e8b89b;       /* Warna accent */
    --light-bg: #f8f6f0;           /* Background terang */
}
```

Ganti nilai hex colors sesuai preferensi Anda:
- `#d4a574` → Warna utama brand Anda
- `#2c2415` → Warna teks/footer
- `#e8b89b` → Warna highlight
- `#f8f6f0` → Warna background

### 2. Mengganti Nama Perusahaan

**Di HTML (index.html):**
```html
<!-- Ganti "AureDecor" dengan nama bisnis Anda -->
<a href="#" class="logo">
    <span>AureDecor</span>  <!-- Ganti di sini -->
</a>
```

**Di Footer:**
```html
<h4>AureDecor</h4>  <!-- Ganti di sini -->
```

### 3. Mengganti Kontak & WhatsApp

Cari dan ganti semua link WhatsApp:
```html
<!-- Dari: -->
<a href="https://wa.me/62812345678">

<!-- Menjadi: -->
<a href="https://wa.me/628XXXXXXXXX">  <!-- Ganti dengan nomor Anda -->
```

Begitu juga dengan nomor telepon dan email:
```html
<!-- Nomor Telepon -->
<li><i class="fas fa-phone"></i> +62 812 345 678</li>

<!-- Email -->
<li><i class="fas fa-envelope"></i> info@auredecor.id</li>

<!-- Alamat -->
<li><i class="fas fa-map-marker-alt"></i> Jakarta, Indonesia</li>
```

### 4. Mengganti Gambar

Website menggunakan gambar dari Unsplash (placeholder). Untuk menggunakan gambar sendiri:

**Carousel Hero:**
```html
<div class="carousel-item active">
    <img src="https://images.unsplash.com/..." alt="...">
</div>
```

Ganti URL dengan path file lokal Anda:
```html
<img src="images/dekorasi-1.jpg" alt="Dekorasi Pernikahan">
```

**Galeri:**
```html
<div class="gallery-item" style="background-image: url('https://images.unsplash.com/...')">
```

Ganti dengan:
```html
<div class="gallery-item" style="background-image: url('images/gallery-1.jpg')">
```

### 5. Mengedit Teks & Konten

Semua teks dapat diedit langsung di file `index.html`. Contoh:

```html
<!-- Hero Title -->
<h1 class="hero-title">Ciptakan Momen Istimewa Dengan Dekorasi Impian Anda</h1>

<!-- Layanan -->
<h3>Dekorasi Pernikahan</h3>
<p>Deskripsi layanan...</p>

<!-- Paket -->
<h3>Paket Premium</h3>
<p class="package-price"><span class="currency">Rp</span><span class="amount">15</span><span class="unit">JT+</span></p>
```

### 6. Menambah/Menghapus Bagian

**Menambah Service Card baru:**
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Nama Layanan</h3>
    <p>Deskripsi layanan...</p>
    <ul class="service-list">
        <li>Fitur 1</li>
        <li>Fitur 2</li>
    </ul>
</div>
```

**Menambah Gallery Item:**
```html
<div class="gallery-item" style="background-image: url('path/to/image.jpg')">
    <div class="gallery-overlay">
        <h4>Judul Proyek</h4>
        <p>Lokasi & Tahun</p>
    </div>
</div>
```

## 📱 Panduan Penggunaan

### Mobile Responsiveness
Website sudah fully responsive dengan breakpoints:
- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** 480px - 767px
- **Small Mobile:** < 480px

Test di berbagai device untuk memastikan tampilan sempurna.

### Navigation
- **Home** - Ke halaman utama
- **Layanan** - Scroll ke services section
- **Galeri** - Scroll ke gallery section
- **Paket** - Scroll ke packages section
- **Pesan Sekarang** - Link ke WhatsApp

### Carousel Kontrol
- Klik tombol prev/next untuk navigasi
- Carousel auto-rotate setiap 5 detik
- Mobile: Touch/swipe untuk navigasi (fitur tambahan)

### Performance Tips
1. Optimize gambar (compress sebelum upload)
2. Use CDN untuk Font Awesome
3. Minify CSS/JS untuk production (opsional)
4. Enable gzip compression di hosting

## 🔧 Troubleshooting

**Gambar tidak muncul?**
- Periksa path file gambar
- Pastikan file ada di folder yang benar
- Use absolute path atau relative path dengan benar

**Styling tidak loading?**
- Clear browser cache (Ctrl+Shift+Del)
- Pastikan link CSS di head tag benar
- Check console untuk error messages

**WhatsApp link tidak bekerja?**
- Pastikan format nomor benar (62 bukan 0)
- Test di different browsers
- Cek apakah WhatsApp terinstall di device

**Mobile menu tidak berfungsi?**
- Clear cache
- Check JavaScript error di console
- Pastikan script.js terload dengan benar

## 📊 SEO Tips

Untuk meningkatkan SEO website:

1. **Meta Tags:** Edit di head section
```html
<meta name="description" content="...">
<meta name="keywords" content="dekorasi, event, pernikahan">
```

2. **Sitemap:** Tambahkan sitemap.xml
3. **Mobile Friendly:** Pastikan responsive (✓ sudah)
4. **Page Speed:** Optimize images & minimize CSS/JS
5. **Backlinks:** Dapatkan link dari direktori lokal

## 💡 Fitur Tambahan (Optional)

Anda bisa menambahkan:
- Contact Form dengan email integration
- Online Booking System
- Blog section untuk tips dekorasi
- Team member profiles
- Video portfolio
- Chat widget
- Analytics (Google Analytics)

## 📞 Kontak & Support

Untuk bantuan lebih lanjut:
- 📧 Email: support@auredecor.id
- 📱 WhatsApp: +62 812 345 678
- 🌐 Website: www.auredecor.id

---

## 📝 License & Credits

- Design inspired by: cooma.id
- Icons: Font Awesome
- Images: Unsplash
- Font: Google Fonts (Segoe UI)

---

**Terima kasih telah menggunakan AureDecor Website Template!** 🎉

Semoga website ini membantu bisnis dekorasi Anda berkembang pesat. Jangan ragu untuk customize sesuai kebutuhan Anda!

Happy decorating! 🎨✨
# Aureandco
