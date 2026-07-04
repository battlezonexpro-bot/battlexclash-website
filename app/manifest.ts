import type { MetadataRoute } from "next";

// Next.js generates /manifest.webmanifest from this file.
// site.webmanifest in /public is served separately for maximum compatibility.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BattleXClash",
    short_name: "BattleXClash",
    description:
      "India's Free Fire MAX esports tournament platform. Play daily tournaments and win real cash via UPI.",
    start_url: "/",
    display: "standalone",
    background_color: "#080608",
    theme_color: "#080608",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
