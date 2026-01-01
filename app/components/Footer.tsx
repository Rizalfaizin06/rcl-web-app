import { contactConfig } from "@/lib/contact";
import PortfolioBadge from "./PortfolioBadge";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 justify-items-center">
                    <div className="max-w-sm">
                        <h3 className="text-white font-bold text-xl mb-4">
                            {contactConfig.company.name}
                        </h3>
                        <p className="text-gray-400 mb-4">
                            {contactConfig.company.description}
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href={contactConfig.social.facebook}
                                className="text-gray-400 hover:text-white transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-facebook text-xl"></i>
                            </a>
                            <a
                                href={contactConfig.social.twitter}
                                className="text-gray-400 hover:text-white transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a
                                href={contactConfig.social.instagram}
                                className="text-gray-400 hover:text-white transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                            <a
                                href={contactConfig.social.tiktok}
                                className="text-gray-400 hover:text-white transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-tiktok text-xl"></i>
                            </a>
                            <a
                                href={contactConfig.social.linkedin}
                                className="text-gray-400 hover:text-white transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a
                                href={contactConfig.social.youtube}
                                className="text-gray-400 hover:text-white transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-youtube text-xl"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Kontak
                        </h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400">
                                <i className="fab fa-whatsapp mr-2"></i>
                                {contactConfig.contact.phoneDisplay}
                            </li>
                            <li className="text-gray-400">
                                <i className="fas fa-envelope mr-2"></i>
                                {contactConfig.contact.email}
                            </li>
                            <li className="text-gray-400">
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                {contactConfig.contact.location}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 pb-4">
                    {/* Portfolio Badge - Centered */}
                    {contactConfig.portfolio.showPortfolio && (
                        <div className="flex justify-center mb-6">
                            <PortfolioBadge />
                        </div>
                    )}

                    <p className="text-gray-400 text-center">
                        &copy; 2018 {contactConfig.company.name}. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
