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

### Usage in Code

Import konfigurasi di komponen Anda:

```typescript
import { contactConfig, openWhatsApp } from "@/lib/contact";

// Menggunakan data kontak
const companyName = contactConfig.company.name;
const phone = contactConfig.contact.phone;

// Membuka WhatsApp
openWhatsApp(); // Menggunakan default phone & message
openWhatsApp("+628123456789", "Custom message"); // Custom phone & message
```

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
        ├── Contact.tsx
        ├── CTA.tsx
        └── Footer.tsx
```

### Notes

-   File `.env.local` sudah ada di `.gitignore` sehingga tidak akan ter-commit ke repository
-   Semua environment variables menggunakan prefix `NEXT_PUBLIC_` agar dapat diakses di client-side
-   Jika environment variable tidak ditemukan, akan menggunakan nilai default yang ada di `lib/contact.ts`
