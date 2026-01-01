// Contact configuration from environment variables
export const contactConfig = {
    company: {
        name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Rizal's Company Lab",
        tagline:
            process.env.NEXT_PUBLIC_COMPANY_TAGLINE ||
            "Technology & Creative Solutions",
        description:
            process.env.NEXT_PUBLIC_COMPANY_DESCRIPTION ||
            "Perusahaan teknologi yang fokus pada solusi digital praktis untuk bisnis lokal. Transformasi digital dimulai dari sini.",
    },
    contact: {
        phone: process.env.NEXT_PUBLIC_PHONE || "+628994183032",
        phoneDisplay:
            process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+62 899-418-3032",
        email: process.env.NEXT_PUBLIC_EMAIL || "info@rizalscompanylab.com",
        emailFooter:
            process.env.NEXT_PUBLIC_EMAIL_FOOTER ||
            "hello@rizalscompanylab.my.id",
        location: process.env.NEXT_PUBLIC_LOCATION || "Jakarta, Indonesia",
        whatsappDefaultMessage:
            process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE ||
            "Halo, Saya ingin berkonsultasi tentang layanan Rizal's Company Lab.",
    },
    social: {
        facebook:
            process.env.NEXT_PUBLIC_FACEBOOK_URL ||
            "https://facebook.com/rizalscompanylab",
        twitter:
            process.env.NEXT_PUBLIC_TWITTER_URL ||
            "https://twitter.com/rizalscompanylab",
        instagram:
            process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
            "https://instagram.com/rizalscompanylab",
        tiktok:
            process.env.NEXT_PUBLIC_TIKTOK_URL ||
            "https://tiktok.com/@rizalscompanylab",
        linkedin:
            process.env.NEXT_PUBLIC_LINKEDIN_URL ||
            "https://linkedin.com/company/rizalscompanylab",
        youtube:
            process.env.NEXT_PUBLIC_YOUTUBE_URL ||
            "https://youtube.com/c/rizalscompanylab",
    },
};

// Helper function to open WhatsApp
export const openWhatsApp = (phone?: string, message?: string) => {
    const phoneNumber = phone || contactConfig.contact.phone;
    const whatsappMessage =
        message || contactConfig.contact.whatsappDefaultMessage;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
};
