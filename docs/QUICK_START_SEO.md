# 🚀 Quick Start Guide - SEO Implementation

## Langkah Cepat (5-10 Menit)

### 1. Update Domain & URL

```bash
# Copy file environment
cp .env.local.example .env.local

# Edit .env.local dan ganti dengan domain Anda
NEXT_PUBLIC_SITE_URL=https://domain-anda.com
```

### 2. Update Metadata

Buka `app/layout.tsx` dan ganti:

-   Line 13: `metadataBase: new URL('https://domain-anda.com')`
-   Line 60-65: URL social media yang sebenarnya
-   Line 84: Verification code setelah daftar Google Search Console

### 3. Build & Deploy

```bash
npm run build
npm run start
```

### 4. Test SEO

Buka: https://search.google.com/test/rich-results
Masukkan URL website Anda dan test.

---

## Checklist Penting ✅

### Sebelum Deploy

-   [ ] Update domain di `.env.local`
-   [ ] Update domain di `app/layout.tsx`
-   [ ] Upload logo di `/public/images/logo/rcl-logo.png`
-   [ ] Test build: `npm run build`

### Setelah Deploy

-   [ ] Daftar Google Search Console
-   [ ] Submit sitemap: `https://your-domain.com/sitemap.xml`
-   [ ] Daftar Google Analytics
-   [ ] Buat Google Business Profile
-   [ ] Test di Google Rich Results

### Dalam 1 Minggu

-   [ ] Buat konten blog pertama
-   [ ] Upload portfolio/case studies
-   [ ] Tambahkan testimoni klien
-   [ ] Share di social media

---

## Testing SEO

### Test 1: Rich Results

```
https://search.google.com/test/rich-results
```

### Test 2: Mobile-Friendly

```
https://search.google.com/test/mobile-friendly
```

### Test 3: PageSpeed

```
https://pagespeed.web.dev/
```

### Test 4: Schema Validation

```
https://validator.schema.org/
```

---

## Monitoring

### Daily (Opsional)

-   Check website aktif & running

### Weekly

-   Google Search Console - check impressions & clicks
-   Add new content (blog/portfolio)

### Monthly

-   Review analytics
-   Update keywords jika perlu
-   Check competitor rankings

---

## Tools Setup

### Google Search Console

1. Buka: https://search.google.com/search-console
2. Add property: masukkan domain
3. Verify ownership (pilih metode HTML tag)
4. Copy verification code
5. Paste di `app/layout.tsx` pada `verification.google`
6. Deploy ulang
7. Klik verify
8. Submit sitemap: `https://your-domain.com/sitemap.xml`

### Google Analytics

1. Buka: https://analytics.google.com
2. Create account & property
3. Copy GA ID (format: G-XXXXXXXXXX)
4. Install package:

```bash
npm install @next/third-parties
```

5. Add to `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from "@next/third-parties/google";

// Di dalam <body>:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />;
```

---

## Quick Wins 🎯

### 1. Content Optimization (2-3 jam)

-   Tulis 3 artikel blog tentang layanan Anda
-   Tambahkan minimal 5 portfolio items
-   Update About page dengan lebih detail

### 2. Image Optimization (1 jam)

-   Convert semua gambar ke WebP
-   Resize sesuai ukuran display
-   Tambahkan alt text

### 3. Social Proof (1 jam)

-   Kumpulkan 5+ testimoni
-   Screenshot project sukses
-   Add client logos (dengan izin)

### 4. Speed Optimization (30 menit)

```bash
# Jalankan test
npm run build
npm run start

# Test speed
lighthouse https://your-domain.com --view
```

Target: All scores 90+

---

## Common Issues & Solutions

### Issue: Sitemap 404

**Solution**: Pastikan `app/sitemap.ts` sudah ada dan rebuild

```bash
npm run build
```

### Issue: Metadata tidak muncul

**Solution**: Check di browser view source, pastikan meta tags ada

### Issue: Google tidak index

**Solution**:

1. Submit sitemap di Search Console
2. Request indexing manual
3. Tunggu 1-2 minggu

### Issue: Slow loading

**Solution**:

1. Optimize images (WebP, lazy loading)
2. Enable compression di hosting
3. Use CDN

---

## Resources

-   [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
-   [Google Search Central](https://developers.google.com/search)
-   [Schema.org Documentation](https://schema.org/)
-   [Web.dev - SEO](https://web.dev/learn-seo/)

---

**Need help? Open issue or contact support.**
