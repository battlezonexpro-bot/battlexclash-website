import type { Metadata } from "next";

const BASE = "https://battlexclash.online";

export const metadata: Metadata = {
  title: "FAQ – Frequently Asked Questions",
  description:
    "Got questions about BattleXClash? Find answers about Free Fire MAX tournaments, UPI withdrawals, entry fees, fair play, and account setup.",
  alternates: { canonical: `${BASE}/faq` },
  openGraph: {
    title: "FAQ – Frequently Asked Questions | BattleXClash",
    description:
      "Everything you need to know about BattleXClash – tournaments, prizes, withdrawals, and more.",
    url: `${BASE}/faq`,
    siteName: "BattleXClash",
    images: [{ url: `${BASE}/banner.jpg`, width: 1200, height: 630, alt: "BattleXClash FAQ" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ – Frequently Asked Questions | BattleXClash",
    description: "Everything you need to know about BattleXClash esports tournaments.",
    images: [`${BASE}/banner.jpg`],
  },
};
