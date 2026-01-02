import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://rizalscompanylab.com"),
    title: {
        default:
            "RIZAL FAIZIN FIRDAUS - Rizal Company Lab | Jasa Pembuatan Website, IoT, Server & Jaringan",
        template: "%s | Rizal Company Lab",
    },
    description:
        "Rizal Faizin Firdaus - Rizal Company Lab menyediakan jasa pembuatan website, jasa setting jaringan, jasa pasang internet, jasa buat server, jasa buat aplikasi, jasa membuat alat otomatis, dan jasa IoT terpercaya di Indonesia.",
    keywords: [
        "RIZAL FAIZIN FIRDAUS",
        "RIZAL COMPANY",
        "RIZAL LAB",
        "RIZAL FAIZIN",
        "RIZAL",
        "JASA PEMBUATAN WEB",
        "JASA WEBSITE",
        "JASA SETTING JARINGAN",
        "JASA PASANG INTERNET",
        "JASA BUAT SERVER",
        "JASA BUAT APLIKASI",
        "JASA MEMBUAT ALAT",
        "JASA ALAT OTOMATIS",
        "JASA IOT",
        "jasa web developer",
        "jasa pembuatan website murah",
        "jasa website company profile",
        "jasa website toko online",
        "jasa IT Indonesia",
        "jasa teknologi informasi",
        "konsultan IT",
        "web development Indonesia",
        "jasa cloud computing",
        "jasa infrastruktur IT",
        "automation service",
        "smart device",
        "internet of things Indonesia",
        "network engineer",
        "server administrator",
        "jasa maintenance website",
        "jasa redesign website",
    ],
    authors: [{ name: "Rizal Faizin Firdaus" }],
    creator: "Rizal Faizin Firdaus",
    publisher: "Rizal Company Lab",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "id_ID",
        url: "https://rizalscompanylab.com",
        siteName: "Rizal Company Lab",
        title: "RIZAL FAIZIN FIRDAUS - Rizal Company Lab | Jasa Pembuatan Website, IoT, Server & Jaringan",
        description:
            "Jasa pembuatan website, setting jaringan, pasang internet, buat server, buat aplikasi, membuat alat otomatis, dan IoT terpercaya di Indonesia oleh Rizal Faizin Firdaus.",
        images: [
            {
                url: "/images/logo/rcl-logo.png",
                width: 1200,
                height: 630,
                alt: "Rizal Company Lab Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "RIZAL FAIZIN FIRDAUS - Rizal Company Lab | Jasa IT Terpercaya",
        description:
            "Jasa pembuatan website, IoT, server, aplikasi, dan alat otomatis terpercaya di Indonesia.",
        images: ["/images/logo/rcl-logo.png"],
        creator: "@rizalcompanylab",
    },
    verification: {
        google: "your-google-verification-code",
        // yandex: 'your-yandex-verification-code',
        // bing: 'your-bing-verification-code',
    },
    alternates: {
        canonical: "https://rizalscompanylab.com",
    },
    category: "technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Rizal Company Lab",
        alternateName: ["Rizal Lab", "RCL", "Rizal's Company Lab"],
        url: "https://rizalscompanylab.com",
        logo: "https://rizalscompanylab.com/images/logo/rcl-logo.png",
        description:
            "Rizal Faizin Firdaus - Rizal Company Lab menyediakan jasa pembuatan website, setting jaringan, pasang internet, buat server, aplikasi, alat otomatis, dan IoT",
        founder: {
            "@type": "Person",
            name: "Rizal Faizin Firdaus",
            jobTitle: "Founder & CEO",
            sameAs: [
                "https://www.linkedin.com/in/rizalfaizin",
                "https://github.com/rizalfaizin",
            ],
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email: "info@rizalscompanylab.com",
        },
        address: {
            "@type": "PostalAddress",
            addressCountry: "ID",
            addressLocality: "Indonesia",
        },
        sameAs: [
            "https://www.instagram.com/rizalscompanylab",
            "https://www.facebook.com/rizalscompanylab",
            "https://twitter.com/rizalcompanylab",
        ],
        areaServed: "ID",
        serviceType: [
            "Jasa Pembuatan Website",
            "Jasa Setting Jaringan",
            "Jasa Pasang Internet",
            "Jasa Buat Server",
            "Jasa Buat Aplikasi",
            "Jasa Membuat Alat Otomatis",
            "Jasa IoT",
        ],
    };

    return (
        <html lang="id" className="scroll-smooth">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            </head>
            <body className={`${inter.variable} antialiased`}>{children}</body>
        </html>
    );
}
