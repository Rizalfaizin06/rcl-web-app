"use client";

import { contactConfig } from "@/lib/contact";
import { useState } from "react";

export default function FloatingPortfolio() {
    const [isHovered, setIsHovered] = useState(false);

    if (!contactConfig.portfolio.showPortfolio) return null;

    return (
        <a
            href={contactConfig.portfolio.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-6 right-6 z-40 group"
        >
            <div className="relative">
                {/* Tooltip */}
                <div
                    className={`absolute bottom-full right-0 mb-2 whitespace-nowrap transition-all duration-300 ${
                        isHovered
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                >
                    <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                        <div className="flex items-center gap-2">
                            <i className="fas fa-briefcase"></i>
                            <span>
                                Hire {contactConfig.portfolio.developerName} -
                                View Portfolio
                            </span>
                        </div>
                        <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                    </div>
                </div>

                {/* Badge */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110">
                    <div className="relative">
                        {/* Pulse animation */}
                        <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></div>

                        {/* Content */}
                        <div className="relative px-5 py-3 flex items-center gap-2">
                            <i className="fas fa-user-tie text-lg"></i>
                            <span className="font-semibold text-sm hidden sm:inline">
                                Portfolio
                            </span>
                            <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}
