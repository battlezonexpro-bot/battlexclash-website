import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-inter", weight: ["300","400","500","600","700"] });
const rajdhani = Rajdhani({ subsets: ["latin"], variable: "--font-orbitron", weight: ["400","500","600","700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://battlexclash.online"),
  title: "BattleXClash | Play Free Fire MAX Tournaments & Win Real Cash",
  description: "Join BattleXClash for daily Free Fire MAX esports tournaments. India's biggest competitive gaming platform. Play games, win real cash with instant UPI withdrawals, and fair play guaranteed.",
  keywords: [
    "Free Fire MAX", "Esports", "Tournaments", "Play and Earn", "BattleXClash", 
    "FF Max Tournament", "Win Real Cash", "Gaming App India",
    // Common spelling mistakes / Hindi variations
    "batlexclash", "battle x clash", "betlexclash", "betal x clash", "battleclash",
    "frefire", "freefire max", "free fire max apk", "tournment", "turnament",
    "esport", "e-sport", "khelo aur jeeto", "ff max money", "battlezone",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "BattleXClash - Play Free Fire MAX & Earn Real Cash",
    description: "India's #1 Competitive Esports Tournament Platform. Join daily matches and win instant UPI cash.",
    url: "https://battlexclash.online",
    siteName: "BattleXClash",
    images: [{ url: "https://battlexclash.online/banner.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${rajdhani.variable} antialiased`}>
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
