import type { Metadata } from "next";

const BASE = "https://battlexclash.online";

export const metadata: Metadata = {
  title: "Leaderboard – Top Free Fire MAX Players",
  description: "See the top-ranked Free Fire MAX players on BattleXClash. Climb the leaderboard and win exclusive cash prizes.",
  alternates: { canonical: `${BASE}/leaderboard` },
  openGraph: {
    title: "Leaderboard | BattleXClash",
    description: "Top Free Fire MAX players ranked by earnings on BattleXClash.",
    url: `${BASE}/leaderboard`,
    images: [{ url: `${BASE}/banner.jpg`, width: 1200, height: 630 }],
  },
};
