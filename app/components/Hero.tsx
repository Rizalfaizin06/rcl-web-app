"use client";

import { openWhatsApp } from "@/lib/contact";

export default function Hero() {
    return (
        <section className="min-h-screen pt-40 pb-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex justify-center items-center">
                    <div className="fade-in text-center">
                        <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Transformasi Digital
                            <span className="gradient-text block mt-5 text-blue-600">
                                Dimulai dari Sini
                            </span>
                        </h2>

                        <p className="mt-12 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Solusi teknologi inovatif untuk website,
                            infrastruktur, IoT, cloud, dan layanan IT. Dari
                            landing page hingga ekosistem digital lengkap.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 justify-center">
                            <button
                                onClick={() => openWhatsApp()}
                                className="px-8 py-4 gradient-bg text-white bg-blue-600 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all cursor-pointer"
                            >
                                Konsultasi Gratis
                            </button>
                            <a
                                href="#services"
                                className="px-8 py-4 bg-white border-2 border-blue-200 text-blue-600 rounded-xl font-semibold hover:border-blue-400 transition-all"
                            >
                                Jelajahi Layanan
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
