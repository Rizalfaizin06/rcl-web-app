"use client";

import { useState } from "react";
import Image from "next/image";
import { contactConfig, openWhatsApp } from "@/lib/contact";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 glass shadow-lg bg-white/70 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="flex items-center gap-3 group">
                        <Image
                            src="/images/logo/logo-white.png"
                            alt="Rizal's Company Lab"
                            width={44}
                            height={44}
                            className="w-11 h-11 rounded-xl shadow-lg group-hover:scale-105 transition-transform"
                        />
                        <div>
                            <h1 className="text-lg font-bold text-gray-900">
                                {contactConfig.company.name}
                            </h1>
                            <p className="text-xs text-gray-500">
                                {contactConfig.company.tagline}
                            </p>
                        </div>
                    </a>

                    <nav className="hidden lg:flex items-center gap-8">
                        <a
                            href="#services"
                            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Layanan
                        </a>
                        <a
                            href="#why"
                            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Keunggulan
                        </a>
                        <a
                            href="#about"
                            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Tentang
                        </a>
                        <a
                            href="#testimonials"
                            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Testimoni
                        </a>
                        <a
                            href="#contact"
                            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Kontak
                        </a>
                        <button
                            onClick={() => openWhatsApp()}
                            className="px-5 py-2.5 text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all bg-blue-600 hover:bg-blue-800 cursor-pointer border-none"
                        >
                            Konsultasi Gratis
                        </button>
                    </nav>

                    <button
                        id="btn-menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`${
                        mobileMenuOpen ? "block" : "hidden"
                    } lg:hidden mt-4 pb-4 space-y-3`}
                >
                    <a
                        href="#services"
                        className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Layanan
                    </a>
                    <a
                        href="#about"
                        className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Tentang
                    </a>
                    <a
                        href="#why"
                        className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Keunggulan
                    </a>
                    <a
                        href="#testimonials"
                        className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Testimoni
                    </a>
                    <a
                        href="#contact"
                        className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Kontak
                    </a>
                </div>
            </div>
        </header>
    );
}
