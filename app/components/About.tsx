export default function About() {
    return (
        <section id="about" className="py-16 bg-white pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center md:text-start">
                            Tentang Kami
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 text-center md:text-start">
                            Rizal&apos;s Company Lab adalah perusahaan teknologi
                            yang fokus pada solusi digital praktis untuk bisnis
                            lokal. Kami memahami tantangan yang dihadapi UMKM
                            dan perusahaan kecil-menengah dalam transformasi
                            digital.
                        </p>
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-start md:text-start text-center">
                                <i className="fas fa-globe text-blue-600 text-xl md:mt-1 md:mr-3 mr-0 mb-3 md:mb-0 md:flex-shrink-0"></i>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Website Development
                                    </h4>
                                    <p className="text-gray-600">
                                        Solusi web profesional untuk kehadiran
                                        digital bisnis Anda
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-start md:text-start text-center">
                                <i className="fas fa-network-wired text-blue-600 text-xl md:mt-1 md:mr-3 mr-0 mb-3 md:mb-0 md:flex-shrink-0"></i>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Infrastruktur IT
                                    </h4>
                                    <p className="text-gray-600">
                                        Sistem IT yang reliable untuk mendukung
                                        operasional
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-start md:text-start text-center">
                                <i className="fas fa-wifi text-blue-600 text-xl md:mt-1 md:mr-3 mr-0 mb-3 md:mb-0 md:flex-shrink-0"></i>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        IoT & Sistem Digital
                                    </h4>
                                    <p className="text-gray-600">
                                        Teknologi otomasi untuk efisiensi bisnis
                                        modern
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-12 text-center">
                        <i className="fas fa-laptop-code text-blue-600 text-8xl mb-6"></i>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Solusi Digital Terpercaya
                        </h3>
                        <p className="text-gray-600">
                            Untuk UMKM & Perusahaan Kecil-Menengah
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
