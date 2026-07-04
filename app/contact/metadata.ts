import type { Metadata } from "next";

const BASE = "https://battlexclash.online";

export const metadata: Metadata = {
  title: "Contact Us – BattleXClash Support",
  description: "Reach out to the BattleXClash support team for help with tournaments, payments, or technical issues.",
  alternates: { canonical: `${BASE}/contact` },
  openGraph: {
    title: "Contact Us – BattleXClash Support | BattleXClash",
    description: "Reach out to the BattleXClash support team for help with tournaments, payments, or technical issues.",
    url: `${BASE}/contact`,
    images: [{ url: `${BASE}/banner.jpg`, width: 1200, height: 630 }],
  },
};
