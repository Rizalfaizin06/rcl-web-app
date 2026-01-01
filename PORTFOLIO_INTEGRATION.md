# Portfolio Integration Guide

## Overview

Website RCL telah dilengkapi dengan sistem portfolio yang profesional dan tidak mengganggu tampilan utama. Portfolio muncul di 3 tempat strategis:

## 📍 Portfolio Display Locations

### 1. About Section Badge

-   **Lokasi**: Di bawah deskripsi layanan di section "Tentang Kami"
-   **Tampilan**: Badge horizontal dengan gradient purple-blue
-   **Text**: "View Developer Portfolio" dengan icon
-   **Responsive**: Centered di mobile, aligned left di desktop

### 2. Footer Badge

-   **Lokasi**: Di atas copyright, setelah contact information
-   **Tampilan**: Badge horizontal centered
-   **Visibility**: Muncul di semua halaman

### 3. Floating Badge (Recommended!)

-   **Lokasi**: Fixed position di pojok kanan bawah
-   **Features**:
    -   ✨ Animasi pulse yang menarik perhatian
    -   💬 Tooltip muncul saat hover: "Hire [Name] - View Portfolio"
    -   📱 Responsive: Hanya text "Portfolio" di mobile
    -   🎨 Gradient purple-blue yang eye-catching
    -   🔄 Smooth hover animations

## 🎛️ Configuration

### Setup via Environment Variables

Edit file `.env.local`:

```bash
# Developer Portfolio
NEXT_PUBLIC_PORTFOLIO_URL=https://portfolio.rcl.my.id
NEXT_PUBLIC_DEVELOPER_NAME=Rizal
NEXT_PUBLIC_SHOW_PORTFOLIO=true  # Set false untuk menyembunyikan semua badge
```

### Available Options

| Variable                     | Description                     | Default                     |
| ---------------------------- | ------------------------------- | --------------------------- |
| `NEXT_PUBLIC_PORTFOLIO_URL`  | URL portfolio Anda              | https://portfolio.rcl.my.id |
| `NEXT_PUBLIC_DEVELOPER_NAME` | Nama yang muncul di tooltip     | Rizal                       |
| `NEXT_PUBLIC_SHOW_PORTFOLIO` | Show/hide semua portfolio badge | true                        |

## 💡 Best Practices

### 1. Positioning Strategy

-   **Floating Badge** adalah yang paling efektif untuk visibility
-   Tidak mengganggu UX karena posisinya di pojok
-   Animasi pulse menarik perhatian tanpa terlalu agresif

### 2. Professional Approach

-   Badge menggunakan warna purple-blue yang berbeda dari brand blue perusahaan
-   Ini membedakan "personal portfolio" dari "company services"
-   Tooltip menjelaskan dengan jelas: "Hire [Name]"

### 3. Mobile Optimization

-   Di mobile, floating badge menampilkan hanya icon dan "Portfolio"
-   Tooltip tetap muncul saat tap
-   Semua badge fully responsive

## 🎨 Customization

### Mengubah Warna Badge

Edit file `app/components/PortfolioBadge.tsx` dan `FloatingPortfolio.tsx`:

```typescript
// Ubah dari purple-blue ke warna lain
className = "bg-gradient-to-r from-purple-600 to-blue-600";
// Contoh: Green gradient
className = "bg-gradient-to-r from-green-600 to-teal-600";
```

### Mengubah Posisi Floating Badge

Edit `app/components/FloatingPortfolio.tsx`:

```typescript
// Default: bottom-6 right-6
className = "fixed bottom-6 right-6";
// Ke kiri bawah:
className = "fixed bottom-6 left-6";
```

### Menonaktifkan Badge Tertentu

Jika hanya ingin floating badge saja:

1. **Hapus dari About.tsx**: Comment atau hapus `<PortfolioBadge />`
2. **Hapus dari Footer.tsx**: Comment section portfolio badge
3. **Floating tetap aktif**: Akan tetap muncul di pojok

## 🎯 Use Case Scenarios

### Scenario 1: Job Hunting Mode (Active)

```bash
NEXT_PUBLIC_SHOW_PORTFOLIO=true
```

-   Semua badge muncul
-   Maximum visibility untuk recruiter/client

### Scenario 2: Professional Only Mode

```bash
NEXT_PUBLIC_SHOW_PORTFOLIO=true
# Tapi hapus PortfolioBadge dari About & Footer
# Hanya tampilkan FloatingPortfolio
```

-   Subtle, tidak terlalu agresif
-   Portfolio tetap accessible via floating badge

### Scenario 3: Hidden Mode

```bash
NEXT_PUBLIC_SHOW_PORTFOLIO=false
```

-   Semua portfolio badge disembunyikan
-   Pure company website

## 📊 Analytics Tracking (Optional)

Untuk track berapa banyak visitor yang click portfolio badge, tambahkan tracking:

```typescript
// Di PortfolioBadge.tsx atau FloatingPortfolio.tsx
onClick={() => {
  // Google Analytics
  gtag('event', 'portfolio_click', {
    'event_category': 'engagement',
    'event_label': 'portfolio_badge'
  });

  // atau tracking lainnya
}}
```

## 🚀 Tips untuk Meningkatkan Portfolio Visibility

1. **Pastikan portfolio URL aktif** - Test link sebelum deploy
2. **Update portfolio.rcl.my.id** - Keep it fresh dengan latest projects
3. **Add CTA di portfolio** - "Let's work together" atau "Hire me"
4. **Gunakan floating badge** - Paling efektif untuk visibility
5. **A/B Test** - Coba berbagai warna dan positioning

## 📝 Notes

-   Semua badge open in new tab (`target="_blank"`)
-   Menggunakan `rel="noopener noreferrer"` untuk security
-   Fully accessible dengan semantic HTML
-   SEO friendly
