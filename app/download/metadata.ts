import type { Metadata } from "next";

const BASE = "https://battlexclash.online";

export const metadata: Metadata = {
  title: "Download BattleXClash – Free Fire MAX Tournament App",
  description: "Download BattleXClash APK for Android. Join Free Fire MAX tournaments, win real cash, and withdraw instantly via UPI.",
  alternates: { canonical: `${BASE}/download` },
  openGraph: {
    title: "Download BattleXClash App",
    description: "Download the BattleXClash app to join Free Fire MAX tournaments and win real cash.",
    url: `${BASE}/download`,
    images: [{ url: `${BASE}/banner.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download BattleXClash App",
    description: "Download the BattleXClash app to join Free Fire MAX tournaments and win real cash.",
    images: [`${BASE}/banner.jpg`],
  },
};
