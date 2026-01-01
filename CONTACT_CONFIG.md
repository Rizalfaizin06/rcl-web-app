# RCL Web App - Contact Configuration

## Environment Variables

Semua data kontak di website ini menggunakan environment variables untuk memudahkan konfigurasi tanpa perlu mengubah kode.

### Setup

1. Copy file `.env.example` menjadi `.env.local`:

    ```bash
    cp .env.example .env.local
    ```

2. Edit `.env.local` sesuai dengan data kontak Anda

### Available Variables

#### Company Information

-   `NEXT_PUBLIC_COMPANY_NAME` - Nama perusahaan
-   `NEXT_PUBLIC_COMPANY_TAGLINE` - Tagline perusahaan
-   `NEXT_PUBLIC_COMPANY_DESCRIPTION` - Deskripsi perusahaan

#### Contact Details

-   `NEXT_PUBLIC_PHONE` - Nomor WhatsApp (format: +628...)
-   `NEXT_PUBLIC_PHONE_DISPLAY` - Nomor telepon untuk ditampilkan (format: +62 899-418-3032)
-   `NEXT_PUBLIC_EMAIL` - Email utama
-   `NEXT_PUBLIC_EMAIL_FOOTER` - Email alternatif untuk footer
-   `NEXT_PUBLIC_LOCATION` - Lokasi/alamat
-   `NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE` - Pesan default WhatsApp

#### Social Media

-   `NEXT_PUBLIC_FACEBOOK_URL` - URL Facebook
-   `NEXT_PUBLIC_TWITTER_URL` - URL Twitter
-   `NEXT_PUBLIC_INSTAGRAM_URL` - URL Instagram
-   `NEXT_PUBLIC_TIKTOK_URL` - URL TikTok
-   `NEXT_PUBLIC_LINKEDIN_URL` - URL LinkedIn
-   `NEXT_PUBLIC_YOUTUBE_URL` - URL YouTube

#### Developer Portfolio

-   `NEXT_PUBLIC_PORTFOLIO_URL` - URL portfolio developer (default: https://portfolio.rcl.my.id)
-   `NEXT_PUBLIC_DEVELOPER_NAME` - Nama developer (default: Rizal)
-   `NEXT_PUBLIC_SHOW_PORTFOLIO` - Tampilkan badge portfolio (true/false)

#### Service URLs

-   `NEXT_PUBLIC_WEB_SERVICE_URL` - URL layanan web development
-   `NEXT_PUBLIC_IOT_SERVICE_URL` - URL layanan IoT systems
-   `NEXT_PUBLIC_INFRA_SERVICE_URL` - URL layanan IT infrastructure

### Usage in Code

Import konfigurasi di komponen Anda:

```typescript
import { contactConfig, openWhatsApp } from "@/lib/contact";

// Menggunakan data kontak
const companyName = contactConfig.company.name;
const phone = contactConfig.contact.phone;
const portfolioUrl = contactConfig.portfolio.url;

// Menggunakan service URLs
const webServiceUrl = contactConfig.services.web;
const iotServiceUrl = contactConfig.services.iot;
const infraServiceUrl = contactConfig.services.infra;

// Membuka WhatsApp
openWhatsApp(); // Menggunakan default phone & message
openWhatsApp("+628123456789", "Custom message"); // Custom phone & message
```

### Portfolio Badge Features

Website ini dilengkapi dengan 3 cara untuk menampilkan portfolio developer:

1. **Badge di About Section** - Muncul setelah deskripsi layanan
2. **Badge di Footer** - Muncul di atas copyright
3. **Floating Badge** - Badge yang melayang di pojok kanan bawah (dengan animasi pulse & tooltip)

Semua badge dapat dinonaktifkan dengan mengatur `NEXT_PUBLIC_SHOW_PORTFOLIO=false` di `.env.local`

### File Structure

```
├── .env.local          # File environment variables (tidak di-commit ke git)
├── .env.example        # Template environment variables
├── lib/
│   └── contact.ts      # Konfigurasi kontak (membaca dari env)
└── app/
    └── components/
        ├── Header.tsx
        ├── Hero.tsx
        ├── About.tsx
        ├── Contact.tsx
        ├── CTA.tsx
        ├── Footer.tsx
        ├── PortfolioBadge.tsx      # Badge portfolio (reusable)
        └── FloatingPortfolio.tsx   # Floating badge dengan animasi
```

### Notes

-   File `.env.local` sudah ada di `.gitignore` sehingga tidak akan ter-commit ke repository
-   Semua environment variables menggunakan prefix `NEXT_PUBLIC_` agar dapat diakses di client-side
-   Jika environment variable tidak ditemukan, akan menggunakan nilai default yang ada di `lib/contact.ts`
