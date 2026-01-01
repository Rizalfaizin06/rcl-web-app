export default function Services() {
    return (
        <section id="services" className="py-16 bg-white pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Layanan Kami
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Solusi digital yang dirancang untuk kebutuhan bisnis
                        Anda
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Website Development */}
                    <div className="bg-blue-50 border-2 border-blue-600 rounded-xl p-8 relative flex flex-col shadow-xl">
                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Active
                        </div>
                        <i className="fas fa-code text-blue-600 text-4xl mb-4"></i>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Website Development
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Landing page & company profile cocok untuk UMKM
                            dengan pengerjaan cepat dan hasil profesional
                        </p>
                        <ul className="space-y-2 mb-6 flex-grow">
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-blue-600 mr-2"></i>
                                Desain responsive
                            </li>
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-blue-600 mr-2"></i>
                                SEO friendly
                            </li>
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-blue-600 mr-2"></i>
                                Fast loading
                            </li>
                        </ul>
                        <a
                            href="https://web.rizalscompanylab.my.id"
                            className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                        >
                            Lihat Layanan Website
                        </a>
                    </div>

                    {/* IoT Systems */}
                    <div className="bg-blue-50 border-2 border-blue-600 rounded-xl p-8 relative flex flex-col shadow-xl">
                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Active
                        </div>
                        <i className="fas fa-microchip text-blue-600 text-4xl mb-4"></i>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            IoT Systems
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Sistem sensor dan monitoring berbasis IoT untuk
                            otomasi dan efisiensi bisnis
                        </p>
                        <ul className="space-y-2 mb-6 grow">
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-blue-600 mr-2"></i>
                                Smart monitoring
                            </li>
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-blue-600 mr-2"></i>
                                Automation system
                            </li>
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-blue-600 mr-2"></i>
                                Real-time data
                            </li>
                        </ul>
                        <a
                            href="#iot-studio"
                            className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                        >
                            Lihat Layanan IoT
                        </a>
                    </div>

                    {/* IT Infrastructure */}
                    <div className="bg-blue-50 border-2 border-blue-600 rounded-xl p-8 relative flex flex-col shadow-xl">
                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Active
                        </div>
                        <i className="fas fa-server text-blue-600 text-4xl mb-4"></i>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            IT Infrastructure
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Solusi jaringan, server, dan sistem IT untuk
                            mendukung operasional bisnis Anda
                        </p>
                        <ul className="space-y-2 mb-6 grow">
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-blue-600 mr-2"></i>
                                Network setup
                            </li>
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-blue-600 mr-2"></i>
                                Server management
                            </li>
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-blue-600 mr-2"></i>
                                Security system
                            </li>
                        </ul>
                        <a
                            href="#iot-studio"
                            className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                        >
                            Lihat Layanan Infrastructure
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
