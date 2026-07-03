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
      <body className="min-h-screen flex flex-col bg-brand-bg text-white selection:bg-brand-primary selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
