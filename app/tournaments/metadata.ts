import type { Metadata } from "next";

const BASE = "https://battlexclash.online";

export const metadata: Metadata = {
  title: "Tournaments – Free Fire MAX Custom Rooms",
  description: "Browse and join daily Free Fire MAX custom room tournaments on BattleXClash. Compete, win, and withdraw instantly via UPI.",
  alternates: { canonical: `${BASE}/tournaments` },
  openGraph: {
    title: "Tournaments | BattleXClash",
    description: "Join Free Fire MAX custom room tournaments and win real cash daily.",
    url: `${BASE}/tournaments`,
    images: [{ url: `${BASE}/banner.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tournaments | BattleXClash",
    description: "Join Free Fire MAX custom room tournaments and win real cash daily.",
    images: [`${BASE}/banner.jpg`],
  },
};
