import { MetadataRoute } from "next";

export const dynamic = "force-static"; // Required for static export

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Rizal Company Lab - Jasa IT Terpercaya",
        short_name: "RCL",
        description:
            "Rizal Faizin Firdaus - Jasa pembuatan website, setting jaringan, pasang internet, buat server, aplikasi, alat otomatis, dan IoT",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#3b82f6",
        icons: [
            {
                src: "/icon.png",
                sizes: "any",
                type: "image/png",
            },
        ],
    };
}
