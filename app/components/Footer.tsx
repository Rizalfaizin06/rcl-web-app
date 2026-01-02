// import { contactConfig } from "@/lib/contact";
// import PortfolioBadge from "./PortfolioBadge";

// export default function Footer() {
//     return (
//         <footer className="bg-gray-900 text-gray-300 pt-12 pb-5">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 justify-items-center">
//                     <div className="max-w-sm">
//                         <h3 className="text-white font-bold text-xl mb-4">
//                             {contactConfig.company.name}
//                         </h3>
//                         <p className="text-gray-400 mb-4">
//                             {contactConfig.company.description}
//                         </p>
//                         <div className="flex space-x-4">
//                             <a
//                                 href={contactConfig.social.facebook}
//                                 className="text-gray-400 hover:text-white transition"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <i className="fab fa-facebook text-xl"></i>
//                             </a>
//                             <a
//                                 href={contactConfig.social.twitter}
//                                 className="text-gray-400 hover:text-white transition"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <i className="fab fa-twitter text-xl"></i>
//                             </a>
//                             <a
//                                 href={contactConfig.social.instagram}
//                                 className="text-gray-400 hover:text-white transition"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <i className="fab fa-instagram text-xl"></i>
//                             </a>
//                             <a
//                                 href={contactConfig.social.tiktok}
//                                 className="text-gray-400 hover:text-white transition"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <i className="fab fa-tiktok text-xl"></i>
//                             </a>
//                             <a
//                                 href={contactConfig.social.linkedin}
//                                 className="text-gray-400 hover:text-white transition"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <i className="fab fa-linkedin text-xl"></i>
//                             </a>
//                             <a
//                                 href={contactConfig.social.youtube}
//                                 className="text-gray-400 hover:text-white transition"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <i className="fab fa-youtube text-xl"></i>
//                             </a>
//                         </div>
//                     </div>

//                     <div>
//                         <h4 className="text-white font-semibold mb-4">
//                             Kontak
//                         </h4>
//                         <ul className="space-y-2">
//                             <li className="text-gray-400">
//                                 <i className="fab fa-whatsapp mr-2"></i>
//                                 {contactConfig.contact.phoneDisplay}
//                             </li>
//                             <li className="text-gray-400">
//                                 <i className="fas fa-envelope mr-2"></i>
//                                 {contactConfig.contact.email}
//                             </li>
//                             <li className="text-gray-400">
//                                 <i className="fas fa-map-marker-alt mr-2"></i>
//                                 {contactConfig.contact.location}
//                             </li>
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="border-t border-gray-800 pt-8 pb-4">
//                     {/* Portfolio Badge - Centered */}
//                     {/* {contactConfig.portfolio.showPortfolio && (
//                         <div className="flex justify-center mb-6">
//                             <PortfolioBadge />
//                         </div>
//                     )} */}

//                     <p className="text-gray-400 text-center">
//                         &copy; 2018 {contactConfig.company.name}. All rights
//                         reserved.
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// }

"use client";

import { contactConfig, openWhatsApp } from "@/lib/contact";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-4">
                            {contactConfig.company.name}
                        </h3>
                        <p className="text-sm mb-4">
                            {contactConfig.company.description}
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={contactConfig.social.facebook}
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook text-xl"></i>
                            </a>
                            <a
                                href={contactConfig.social.instagram}
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                            {/* <a
                                href={contactConfig.social.linkedin}
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin text-xl"></i>
                            </a> */}
                            <a
                                href={contactConfig.social.youtube}
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                            >
                                <i className="fab fa-youtube text-xl"></i>
                            </a>
                            <a
                                href={contactConfig.social.twitter}
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a
                                href={contactConfig.social.tiktok}
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-black transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                            >
                                <i className="fab fa-tiktok text-xl"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Layanan
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#services"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Website Development
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    IoT Systems
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    IT Infrastructure
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Paket & Harga
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Perusahaan
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Tentang Kami
                                </a>
                            </li>
                            <li>
                                <a
                                    href={contactConfig.portfolio.url}
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#testimonials"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Testimoni
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#why"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    Keunggulan
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Hubungi Kami
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <button
                                    onClick={() => openWhatsApp()}
                                    className="flex items-center hover:text-blue-400 transition-colors group text-left"
                                >
                                    <i className="fab fa-whatsapp mr-2 text-green-500 group-hover:text-green-400"></i>
                                    {contactConfig.contact.phoneDisplay}
                                </button>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${contactConfig.contact.email}`}
                                    className="flex items-center hover:text-blue-400 transition-colors"
                                >
                                    <i className="fas fa-envelope mr-2"></i>
                                    {contactConfig.contact.email}
                                </a>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                                <span>{contactConfig.contact.location}</span>
                            </li>
                            <li>
                                <button
                                    onClick={() => openWhatsApp()}
                                    className="inline-block mt-2 bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                                >
                                    Konsultasi Gratis
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    <p className="text-gray-400">
                        © 2018–{currentYear} {contactConfig.company.name}. All
                        rights reserved.
                    </p>
                    <p className="text-gray-500 mt-2 text-xs">
                        Made with ❤️ in {contactConfig.contact.location}
                    </p>
                </div>
            </div>
        </footer>
    );
}
