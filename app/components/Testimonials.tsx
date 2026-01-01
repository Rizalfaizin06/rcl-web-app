export default function Testimonials() {
    const testimonials = [
        {
            stars: 5,
            text: '"Pengerjaan sangat cepat dan hasilnya sesuai ekspektasi. Tim sangat responsif dalam menanggapi setiap permintaan revisi."',
            name: "Budi Santoso",
            title: "Owner Toko Online",
        },
        {
            stars: 5,
            text: '"Desainnya rapi dan modern. Yang paling saya suka adalah komunikasi yang mudah langsung dengan developernya."',
            name: "Siti Nurhaliza",
            title: "Founder Startup F&B",
        },
        {
            stars: 5,
            text: '"Harga terjangkau untuk kualitas premium. Website kami sekarang terlihat lebih profesional dan meningkatkan kredibilitas bisnis."',
            name: "Ahmad Rizki",
            title: "Direktur PT. Maju Jaya",
        },
    ];

    return (
        <section id="testimonials" className="py-16 bg-gray-50 pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Testimoni Klien
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Apa kata mereka tentang layanan kami
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm text-center md:text-left flex flex-col"
                        >
                            <div className="flex items-center mb-4 justify-center md:justify-start">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <i
                                        key={i}
                                        className="fas fa-star text-yellow-400"
                                    ></i>
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4 flex-grow">
                                {testimonial.text}
                            </p>
                            <div className="flex items-center flex-col md:flex-row">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-0 md:mr-3 mb-3 md:mb-0">
                                    <i className="fas fa-user text-blue-600"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-gray-500 text-sm">
                                        {testimonial.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
