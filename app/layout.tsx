import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-inter", weight: ["300","400","500","600","700"] });
const rajdhani = Rajdhani({ subsets: ["latin"], variable: "--font-orbitron", weight: ["400","500","600","700"] });

const BASE_URL = "https://battlexclash.online";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BattleXClash | Play Free Fire MAX Tournaments & Win Real Cash",
    template: "%s | BattleXClash",
  },
  description: "Join BattleXClash for daily Free Fire MAX tournaments, compete with players across India, and win real cash with instant UPI withdrawals.",
  keywords: [
    "BattleXClash", "Battle X Clash", "battlexclash", "Free Fire MAX Tournament",
    "Free Fire Tournament India", "FF Max Tournament", "Esports India", "Gaming Tournament",
    "Play and Earn", "Win Real Cash", "UPI Withdrawal", "Free Fire Custom Room",
    "Daily Tournament", "Gaming App India", "Free Fire Esports",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "BattleXClash | Play Free Fire MAX Tournaments & Win Real Cash",
    description: "Join BattleXClash for daily Free Fire MAX tournaments, compete with players across India, and win real cash with instant UPI withdrawals.",
    url: BASE_URL,
    siteName: "BattleXClash",
    images: [{ url: `${BASE_URL}/banner.jpg`, width: 1200, height: 630, alt: "BattleXClash – Free Fire MAX Tournaments" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BattleXClash | Play Free Fire MAX Tournaments & Win Real Cash",
    description: "Join BattleXClash for daily Free Fire MAX tournaments, compete with players across India, and win real cash with instant UPI withdrawals.",
    images: [`${BASE_URL}/banner.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "BattleXClash",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/favicon.png`,
      },
      "sameAs": [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "BattleXClash",
      "description": "India's Free Fire MAX esports tournament platform.",
      "publisher": { "@id": `${BASE_URL}/#organization` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": `${BASE_URL}/tournaments?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#software`,
      "name": "BattleXClash",
      "applicationCategory": "GameApplication",
      "operatingSystem": "ANDROID",
      "downloadUrl": `${BASE_URL}/download`,
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${rajdhani.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col text-white selection:bg-brand-primary selection:text-white" style={{ backgroundColor: '#080608' }}>
        {/* ── Global Background ── */}
        <div aria-hidden="true" style={{
          position: 'fixed', top: 0, left: 0,
          width: '100%', height: '100%',
          zIndex: 0, overflow: 'hidden', pointerEvents: 'none',
        }}>
          {/* Wallpaper — CSS bg is stable on mobile, no jump */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px) brightness(0.32) saturate(1.2)',
          }} />
          {/* Dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,6,8,0.50)' }} />
          {/* Brand tint */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(225,29,72,0.07) 0%, transparent 60%, rgba(147,51,234,0.07) 100%)' }} />
          {/* Bottom fade */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to top, #080608, transparent)' }} />
        </div>

        {/* Content above bg */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
