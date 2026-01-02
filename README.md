# Rizal's Company Lab - Website

Welcome to Rizal's Company Lab official website. This is a modern, SEO-optimized Next.js application showcasing our technology and creative solutions.

## 🚀 Features

-   ✅ **SEO Optimized** - Complete meta tags, structured data, sitemap
-   ✅ **Responsive Design** - Mobile-first approach
-   ✅ **Performance** - Optimized for speed and Core Web Vitals
-   ✅ **Modern Stack** - Next.js 15, TypeScript, Tailwind CSS
-   ✅ **PWA Ready** - Web manifest included
-   ✅ **Analytics Ready** - Google Analytics integration

## 📋 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Edit .env.local with your actual values
# Update: NEXT_PUBLIC_SITE_URL, GA_ID, etc.
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📊 SEO Implementation

This website includes comprehensive SEO optimization:

### ✅ What's Included:

-   **Meta Tags**: Title, description, keywords (30+ targeted keywords)
-   **Open Graph**: Facebook, LinkedIn sharing optimization
-   **Twitter Cards**: Twitter sharing optimization
-   **Structured Data**: JSON-LD for Organization & Person
-   **Sitemap**: Auto-generated dynamic sitemap
-   **Robots.txt**: Search engine crawling rules
-   **Web Manifest**: PWA configuration
-   **Performance**: Optimized images, compression, caching

### 🎯 Target Keywords:

-   RIZAL FAIZIN FIRDAUS
-   RIZAL COMPANY
-   RIZAL LAB
-   JASA PEMBUATAN WEB
-   JASA WEBSITE
-   JASA SETTING JARINGAN
-   JASA PASANG INTERNET
-   JASA BUAT SERVER
-   JASA BUAT APLIKASI
-   JASA IOT
-   And 20+ more related keywords

### 📚 SEO Documentation:

-   [SEO_GUIDE.md](./SEO_GUIDE.md) - Complete SEO implementation guide
-   [QUICK_START_SEO.md](./QUICK_START_SEO.md) - Quick setup instructions
-   [KEYWORD_STRATEGY.md](./KEYWORD_STRATEGY.md) - Keyword research & content plan

## 🔧 Configuration

### Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
NEXT_PUBLIC_CONTACT_EMAIL=info@your-domain.com
```

### Update Domain

1. Edit `app/layout.tsx`:

    - Update `metadataBase` URL
    - Update social media links
    - Update verification codes

2. Edit `app/sitemap.ts`:

    - Update `baseUrl`

3. Edit `public/robots.txt`:
    - Update sitemap URL

## 📁 Project Structure

```
rcl-web-app/
├── app/
│   ├── components/      # React components
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Home page
│   ├── sitemap.ts       # Dynamic sitemap
│   └── manifest.ts      # PWA manifest
├── public/
│   ├── images/          # Static images
│   └── robots.txt       # Search engine rules
├── lib/                 # Utilities
└── SEO Documentation    # SEO guides

```

## 🎨 Tech Stack

-   **Framework**: Next.js 15 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Font**: Inter (Google Fonts)
-   **Icons**: Font Awesome 6
-   **Deployment**: Vercel (recommended)

## 📈 SEO Checklist

### Before Deploy:

-   [ ] Update all URLs in `layout.tsx`
-   [ ] Add your logo at `/public/images/logo/rcl-logo.png`
-   [ ] Configure `.env.local`
-   [ ] Test build: `npm run build`

### After Deploy:

-   [ ] Setup Google Search Console
-   [ ] Submit sitemap
-   [ ] Setup Google Analytics
-   [ ] Create Google Business Profile
-   [ ] Test with Google Rich Results

### Ongoing:

-   [ ] Publish blog content regularly
-   [ ] Monitor Search Console
-   [ ] Track rankings
-   [ ] Build quality backlinks

## 🧪 Testing

### SEO Testing Tools:

-   [Google Rich Results Test](https://search.google.com/test/rich-results)
-   [PageSpeed Insights](https://pagespeed.web.dev/)
-   [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
-   [Schema Markup Validator](https://validator.schema.org/)

### Performance Testing:

```bash
npm run build
npm run start

# Use Lighthouse
lighthouse http://localhost:3000 --view
```

Target Scores:

-   Performance: 90+
-   Accessibility: 90+
-   Best Practices: 90+
-   SEO: 100 ✅

## 📞 Support & Contact

For questions or support, please refer to:

-   [SEO_GUIDE.md](./SEO_GUIDE.md) - Comprehensive SEO guide
-   [QUICK_START_SEO.md](./QUICK_START_SEO.md) - Quick implementation steps

## 📄 License

© 2025 Rizal's Company Lab. All rights reserved.

---

## Learn More About Next.js

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Learn Next.js](https://nextjs.org/learn)
-   [Next.js GitHub](https://github.com/vercel/next.js)

## Deploy on Vercel

The easiest way to deploy is using [Vercel Platform](https://vercel.com/new).

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for details.
