import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-inter", weight: ["300","400","500","600","700"] });
const rajdhani = Rajdhani({ subsets: ["latin"], variable: "--font-orbitron", weight: ["400","500","600","700"] });

export const metadata: Metadata = {
  title: "BattleXClash - India's Competitive Esports Tournament Platform",
  description: "Join BattleXClash for daily Free Fire MAX, Valorant, and CODM tournaments. Instant withdrawals, fair play, and massive prize pools.",
  openGraph: {
    title: "BattleXClash - Play & Earn",
    description: "India's Competitive Esports Tournament Platform",
    url: "https://battlexclash.com",
    siteName: "BattleXClash",
    images: [{ url: "https://battlexclash.com/og.jpg", width: 1200, height: 630 }],
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
        {/* ── Global Blurred Background ── */}
        <div aria-hidden="true" style={{
          position: 'fixed', inset: 0, zIndex: 0,
          overflow: 'hidden', pointerEvents: 'none',
        }}>
          {/* Wallpaper */}
          <img
            src="/bg.jpg"
            alt=""
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              filter: 'blur(20px) brightness(0.15) saturate(1.3)',
              transform: 'scale(1.1)',
            }}
          />
          {/* Dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,6,8,0.65)' }} />
          {/* Brand colour tint */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(225,29,72,0.08) 0%, transparent 50%, rgba(147,51,234,0.08) 100%)' }} />
          {/* Bottom fade */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to top, #080608, transparent)' }} />
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
