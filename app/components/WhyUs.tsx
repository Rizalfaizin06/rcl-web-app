export default function WhyUs() {
    return (
        <section id="why" className="py-16 bg-gray-50 pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Keunggulan Kami
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Mengapa memilih Rizal&apos;s Company Lab?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-2xl text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-tachometer-alt text-blue-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Pengerjaan Cepat
                        </h3>
                        <p className="text-gray-600">
                            Proses development yang efisien tanpa mengorbankan
                            kualitas hasil
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-2xl text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-puzzle-piece text-blue-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Desain Sesuai Kebutuhan
                        </h3>
                        <p className="text-gray-600">
                            Solusi yang disesuaikan dengan karakteristik dan
                            target bisnis Anda
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-2xl text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-comments text-blue-600 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Komunikasi Langsung
                        </h3>
                        <p className="text-gray-600">
                            Akses langsung ke developer untuk diskusi dan revisi
                            yang lebih cepat
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
