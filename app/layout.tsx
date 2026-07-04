import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});
const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
});

const BASE_URL = "https://battlexclash.online";

const TITLE = "BattleXClash | Free Fire MAX Tournaments, Esports & Win Real Cash";
const DESCRIPTION =
  "Join BattleXClash to play daily Free Fire MAX tournaments, compete with players across India, win real cash, enjoy instant UPI withdrawals, secure esports matches, and fair competitive gaming.";
const KEYWORDS = [
  "BattleXClash", "Battle X Clash", "Battle Clash", "Battle Clash X", "Battle X",
  "BattleX", "BattleX App", "BattleXClash App", "BattleXClash Tournament",
  "BattleXClash Esports", "BattleXClash India", "BattleXClash Gaming",
  "BattleXClash Free Fire", "BattleXClash Free Fire MAX", "BattleXClash Download",
  "BattleXClash APK", "BattleXClash Cash Tournament",
  "Free Fire", "Free Fire MAX", "Free Fire Tournament", "Free Fire Tournament India",
  "Free Fire MAX Tournament", "Free Fire Cash Tournament", "Free Fire Custom Room",
  "Free Fire Room Match", "Free Fire Daily Tournament", "Free Fire Online Tournament",
  "Free Fire Solo Tournament", "Free Fire Duo Tournament", "Free Fire Squad Tournament",
  "FF Max", "FF MAX Tournament", "FF Tournament", "FF Cash Tournament",
  "Esports", "Esports India", "Gaming Tournament", "Tournament App", "Online Tournament",
  "Battle Royale Tournament", "Play and Earn", "Win Real Cash", "Cash Prize Tournament",
  "Gaming App India", "Instant UPI Withdrawal", "Custom Room", "Daily Tournament",
  "Online Gaming Platform", "Esports Platform", "Mobile Esports", "Competitive Gaming",
];
const OG_IMAGE = `${BASE_URL}/banner.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE,
    template: "%s | BattleXClash",
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
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
    title: TITLE,
    description: DESCRIPTION,
    url: BASE_URL,
    siteName: "BattleXClash",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "BattleXClash – Free Fire MAX Esports Tournaments" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
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
        "width": 192,
        "height": 192,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "BattleXClash",
      "description": DESCRIPTION,
      "publisher": { "@id": `${BASE_URL}/#organization` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE_URL}/tournaments?q={search_term_string}`,
        },
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
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1000",
      },
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
      <body
        className="min-h-screen flex flex-col text-white selection:bg-brand-primary selection:text-white"
        style={{ backgroundColor: "#080608" }}
      >
        {/* ── Global Background ── */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(3px) brightness(0.32) saturate(1.2)",
            }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(8,6,8,0.50)" }} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(225,29,72,0.07) 0%, transparent 60%, rgba(147,51,234,0.07) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "180px",
              background: "linear-gradient(to top, #080608, transparent)",
            }}
          />
        </div>

        {/* Content above bg */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
