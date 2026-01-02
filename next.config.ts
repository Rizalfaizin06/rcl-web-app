import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        formats: ["image/webp", "image/avif"],
    },
    compress: true,
    poweredByHeader: false,
    // Enable static optimization
    reactStrictMode: true,
};

export default nextConfig;
