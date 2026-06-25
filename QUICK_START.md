# 🚀 SETUP CEPAT - AureDecor Website

Panduan singkat untuk mulai menggunakan website AureDecor. Ikuti langkah-langkah di bawah ini untuk customization dasar.

## ⚡ 5 Menit Setup

### Langkah 1: Update Kontak WhatsApp
**File:** `index.html`
**Find & Replace:**
```
Dari: https://wa.me/62812345678
Ke:   https://wa.me/628XXXXXXXXX
```
*(Ganti dengan nomor WhatsApp Anda. Format: 62 + nomor tanpa 0)*

**Tempat yang perlu diganti:**
1. Navigation bar "Pesan Sekarang"
2. Hero section buttons
3. Package cards CTA
4. Footer contact
5. CTA section buttons
*(Total ~15 tempat)*

### Langkah 2: Update Nomor Telepon
**File:** `index.html`
**Find & Replace:**
```
Dari: +62 812 345 678
Ke:   +62 XXX XXXX XXXX
```
**Tempat yang perlu diganti:**
- Footer: CTA section
- Footer: Contact info
- Anchor tag: `<a href="tel:+62812345678">`

### Langkah 3: Update Email
**File:** `index.html`
**Find & Replace:**
```
Dari: info@auredecor.id
Ke:   email@perusahaan-anda.id
```
**Tempat:**
- Footer: Contact section

### Langkah 4: Update Alamat Lokasi
**File:** `index.html`
**Find & Replace:**
```
Dari: Jakarta, Tangerang, Bekasi
Ke:   Kota Anda
```
**Tempat:**
- Hero section (3 tempat)
- CTA section
- Footer contact

### Langkah 5: Update Social Media
**File:** `index.html`
Di section footer, update semua link social media:
```html
<div class="social-links">
    <a href="https://instagram.com/auredecor">
    <a href="https://facebook.com/auredecor">
    <a href="https://tiktok.com/@auredecor">
    <a href="https://youtube.com/@auredecor">
</div>
```

---

## 🎨 Customization Warna Brand (Opsional)

**File:** `styles.css` (Baris pertama)

```css
:root {
    --primary-color: #d4a574;      /* UBAH INI - Warna utama Anda */
    --secondary-color: #2c2415;    /* UBAH INI - Warna teks gelap */
    --accent-color: #e8b89b;       /* UBAH INI - Warna highlight */
    --light-bg: #f8f6f0;           /* UBAH INI - Background terang */
}
```

**Pilih warna menggunakan:**
- Website: https://coolors.co/
- Website: https://color.adobe.com/
- Gunakan color picker browser Anda

---

## 🖼️ Ganti Gambar

### Carousel Hero (4 gambar)
Buka `index.html`, cari `.image-carousel` section:
```html
<img src="https://images.unsplash.com/..." alt="...">
```

**Pilihan:**
1. Gunakan gambar sendiri: Letakkan file di folder `images/` lalu ubah path
2. Gunakan URL gambar online
3. Gunakan Unsplash, Pexels, atau Pixabay (gratis)

Rekomendasi ukuran: 600x600px (untuk performa optimal)

### Galeri Portfolio (8 gambar)
Sama seperti carousel, cari bagian `.gallery-grid`

Rekomendasi ukuran: 400x400px atau 600x600px

---

## 📝 Teks yang Paling Penting untuk Disesuaikan

### 1. Nama Perusahaan
Find: `AureDecor`
Replace: Nama bisnis Anda
Tempat: 
- Navigation brand
- Hero section
- Footer section title
- Page title: `<title>` tag

### 2. Judul Hero
Find: `Ciptakan Momen Istimewa Dengan Dekorasi Impian Anda`
Replace: Tagline Anda sendiri

### 3. Deskripsi Layanan
Edit deskripsi untuk setiap service card agar sesuai dengan layanan real Anda

### 4. Harga Paket
Update harga paket sesuai positioning bisnis Anda:
- Paket Basic
- Paket Premium (featured)
- Paket Eksklusif

### 5. Testimonial
Ganti dengan testimonial real dari klien Anda (nama, profesi, pesan)

---

## 🔗 Testing Sebelum Go Live

**Checklist:**
- [ ] Semua link WhatsApp/Telepon berfungsi
- [ ] Gambar tampil dengan sempurna
- [ ] Website responsive di mobile
- [ ] Font & warna tampil benar
- [ ] Tidak ada typo di text
- [ ] Social media links benar
- [ ] CTA buttons jelas dan menonjol

**Testing Tools:**
- Mobile: Buka di HP Anda
- Desktop: Test di Chrome, Firefox, Safari, Edge
- Responsive: Gunakan DevTools (F12 → Toggle Device Toolbar)

---

## 📤 Cara Upload ke Hosting

### Menggunakan cPanel:
1. Compress folder `AureDecor` → `auredecor.zip`
2. Login ke cPanel hosting Anda
3. Buka File Manager → public_html
4. Upload file zip
5. Extract file
6. Akses via domain Anda

### Menggunakan FTP:
1. Download FTP Client (FileZilla)
2. Connect dengan FTP credentials
3. Upload ketiga file (index.html, styles.css, script.js)
4. Upload folder images/ jika ada
5. Done!

### GitHub Pages (Gratis):
1. Buat repo di GitHub
2. Push ketiga file
3. Aktifkan GitHub Pages di settings
4. Akses via username.github.io/auredecor

---

## 🎯 Quick Wins untuk SEO

Sebelum launch, tambahkan:

1. **Meta Description** (index.html dalam `<head>`):
```html
<meta name="description" content="AureDecor - Jasa dekorasi event profesional di Jakarta. Pernikahan, ulang tahun, corporate event. Konsultasi gratis, harga kompetitif.">
```

2. **Google Analytics** (sebelum `</body>`):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

3. **Favicon** (di `<head>`):
```html
<link rel="icon" href="images/favicon.ico" type="image/x-icon">
```

---

## 📱 Mobile Optimization Checklist

Website sudah responsive, tapi untuk pengalaman terbaik:
- [ ] Test di iPhone (Safari)
- [ ] Test di Android (Chrome)
- [ ] Pastikan buttons mudah diklik (min 44px)
- [ ] Teks readable tanpa zoom
- [ ] Images load cepat

---

## 🆘 Bantuan Cepat

### Gambar tidak muncul
→ Check path file gambar
→ Pastikan format: jpg, png, webp
→ Ukuran file < 500KB ideal

### Website lambat
→ Compress gambar dengan https://tinypng.com/
→ Use .webp format untuk gambar
→ Enable caching di hosting

### WhatsApp link error di mobile
→ Pastikan nomor format benar (62 bukan 0)
→ Test buka: https://wa.me/628XXXXXXXXX di browser
→ Update WhatsApp app di device

### CSS/JS tidak loading
→ Clear browser cache: Ctrl+Shift+Del
→ Hard refresh: Ctrl+F5
→ Check file permissions di hosting

---

## 💡 Saran Next Step

Setelah launch dasar, pertimbangkan:

1. **Booking System** - Tambahkan form booking/reservasi
2. **Blog** - Tulis artikel tips dekorasi
3. **Video** - Buat video portfolio di YouTube/Instagram
4. **Email Marketing** - Collect email untuk promo
5. **Chatbot** - Tambahkan live chat widget
6. **Analytics** - Monitor visitor & behavior
7. **SEO** - Optimize untuk ranking Google
8. **Schema Markup** - Tambahkan structured data

---

## 📧 Questions atau Issues?

Referensi lengkap ada di **README.md**

Good luck! 🎉

*Last updated: June 2024*
