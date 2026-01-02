import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: "export", // ← Enable static HTML export
    images: {
        formats: ["image/webp", "image/avif"],
        unoptimized: true, // ← Required for static export
    },
    compress: true,
    poweredByHeader: false,
    // Enable static optimization
    reactStrictMode: true,
};

export default nextConfig;
