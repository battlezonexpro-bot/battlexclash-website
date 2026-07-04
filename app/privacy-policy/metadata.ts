import type { Metadata } from "next";

const BASE = "https://battlexclash.online";

export const metadata: Metadata = {
  title: "Privacy Policy – BattleXClash",
  description: "Read the BattleXClash privacy policy to understand how we collect, use, and protect your personal data.",
  alternates: { canonical: `${BASE}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy – BattleXClash | BattleXClash",
    description: "Read the BattleXClash privacy policy to understand how we collect, use, and protect your personal data.",
    url: `${BASE}/privacy-policy`,
    images: [{ url: `${BASE}/banner.jpg`, width: 1200, height: 630 }],
  },
};
