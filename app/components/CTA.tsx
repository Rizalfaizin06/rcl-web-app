"use client";

import { openWhatsApp } from "@/lib/contact";

export default function CTA() {
    return (
        <section
            id="web-studio"
            className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Siap Memulai Transformasi Digital?
                </h2>
                <p className="text-lg text-blue-100 mb-8">
                    Dapatkan website profesional untuk bisnis Anda hari ini
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => openWhatsApp()}
                        className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-300 transition text-lg font-medium inline-flex items-center justify-center cursor-pointer border-none"
                    >
                        <i className="fab fa-whatsapp mr-2"></i>
                        Chat WhatsApp
                    </button>
                    <a
                        href="#services"
                        className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition text-lg font-medium"
                    >
                        Lihat Layanan
                    </a>
                </div>
            </div>
        </section>
    );
}
