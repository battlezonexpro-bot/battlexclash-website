import type { Metadata } from "next";

const BASE = "https://battlexclash.online";

export const metadata: Metadata = {
  title: "Winners – Real Cash Prize Winners",
  description: "Check out the latest Free Fire MAX tournament winners on BattleXClash who won real cash prizes.",
  alternates: { canonical: `${BASE}/winners` },
  openGraph: {
    title: "Winners – Real Cash Prize Winners | BattleXClash",
    description: "Check out the latest Free Fire MAX tournament winners on BattleXClash who won real cash prizes.",
    url: `${BASE}/winners`,
    images: [{ url: `${BASE}/banner.jpg`, width: 1200, height: 630 }],
  },
};
