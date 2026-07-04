import type { Metadata } from "next";

const BASE = "https://battlexclash.online";

export const metadata: Metadata = {
  title: "FAQ – Frequently Asked Questions",
  description: "Got questions about BattleXClash? Find answers about tournaments, withdrawals, rules, and how to join.",
  alternates: { canonical: `${BASE}/faq` },
  openGraph: {
    title: "FAQ – Frequently Asked Questions | BattleXClash",
    description: "Got questions about BattleXClash? Find answers about tournaments, withdrawals, rules, and how to join.",
    url: `${BASE}/faq`,
    images: [{ url: `${BASE}/banner.jpg`, width: 1200, height: 630 }],
  },
};
