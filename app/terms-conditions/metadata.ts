import type { Metadata } from "next";

const BASE = "https://battlexclash.online";

export const metadata: Metadata = {
  title: "Terms & Conditions – BattleXClash",
  description: "Review the BattleXClash terms and conditions governing the use of our esports tournament platform.",
  alternates: { canonical: `${BASE}/terms-conditions` },
  openGraph: {
    title: "Terms & Conditions – BattleXClash | BattleXClash",
    description: "Review the BattleXClash terms and conditions governing the use of our esports tournament platform.",
    url: `${BASE}/terms-conditions`,
    images: [{ url: `${BASE}/banner.jpg`, width: 1200, height: 630 }],
  },
};
