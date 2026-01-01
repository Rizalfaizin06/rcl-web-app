"use client";

import { contactConfig, openWhatsApp } from "@/lib/contact";

export default function Contact() {
    return (
        <section id="contact" className="py-16 bg-white pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Hubungi Kami
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Mari wujudkan transformasi digital bisnis Anda
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fab fa-whatsapp text-blue-600 text-xl"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">
                                    WhatsApp
                                </h4>
                                <button
                                    onClick={() => openWhatsApp()}
                                    className="text-blue-600 hover:underline"
                                >
                                    {contactConfig.contact.phoneDisplay}
                                </button>
                                <p className="text-gray-500 text-sm mt-1">
                                    Respon cepat, chat langsung
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fas fa-envelope text-blue-600 text-xl"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">
                                    Email
                                </h4>
                                <a
                                    href={`mailto:${contactConfig.contact.email}`}
                                    className="text-blue-600 hover:underline"
                                >
                                    {contactConfig.contact.email}
                                </a>
                                <p className="text-gray-500 text-sm mt-1">
                                    Untuk inquiry detail
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fas fa-map-marker-alt text-blue-600 text-xl"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">
                                    Lokasi
                                </h4>
                                <p className="text-gray-600">
                                    {contactConfig.contact.location}
                                </p>
                                <p className="text-gray-500 text-sm mt-1">
                                    Melayani seluruh Indonesia
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl mt-8">
                            <h4 className="font-semibold text-gray-900 mb-3">
                                Jam Operasional
                            </h4>
                            <p className="text-gray-600">
                                Senin - Jumat: 09.00 - 17.00 WIB
                            </p>
                            <p className="text-gray-600">
                                Sabtu: 09.00 - 14.00 WIB
                            </p>
                            <p className="text-gray-500 text-sm mt-2">
                                *WhatsApp 24/7 untuk urgent
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Kirim Pesan
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                    placeholder="Rizal ..."
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                    placeholder="rizal@gmail.com"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    No. WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                    placeholder="0812-xxxx-xxxx"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Pesan
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                    placeholder="Ceritakan kebutuhan bisnis Anda..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
