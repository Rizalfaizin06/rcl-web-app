import { contactConfig } from "@/lib/contact";

export default function PortfolioBadge() {
    if (!contactConfig.portfolio.showPortfolio) return null;

    return (
        <a
            href={contactConfig.portfolio.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all group"
        >
            <i className="fas fa-user-tie"></i>
            <span>View Developer Portfolio</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
        </a>
    );
}
