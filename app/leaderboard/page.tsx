"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Flame, Crosshair } from "lucide-react";

export default function LeaderboardPage() {
  
  const players = [
    { rank: 1, name: "Mortal", id: "BXC-9982", earnings: "₹4,50,000", kills: 1240, matches: 340 },
    { rank: 2, name: "ScoutOP", id: "BXC-4412", earnings: "₹3,80,000", kills: 1105, matches: 310 },
    { rank: 3, name: "Jonathan", id: "BXC-1123", earnings: "₹3,50,000", kills: 1450, matches: 290 },
    { rank: 4, name: "Snax", id: "BXC-5541", earnings: "₹1,20,000", kills: 890, matches: 210 },
    { rank: 5, name: "Viper", id: "BXC-7789", earnings: "₹95,000", kills: 720, matches: 195 },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
          >
            Global <span className="text-brand-accent">Leaderboard</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Top players across all games. Climb the ranks and build your reputation.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-10">
          <button className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-[0_0_15px_rgba(124,58,237,0.4)]">Players</button>
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">Teams</button>
        </div>

        {/* Top 3 Podium (Visual only) */}
        <div className="hidden md:flex justify-center items-end gap-6 mb-16 h-64">
          {/* Rank 2 */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="w-48 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-300 border-4 border-gray-400 flex items-center justify-center font-bold text-xl text-black mb-4">S</div>
            <div className="bg-gradient-to-t from-gray-700 to-gray-500 w-full h-32 rounded-t-lg border-t-4 border-gray-300 flex flex-col items-center justify-start pt-4 shadow-xl">
              <span className="font-bold text-white text-lg">ScoutOP</span>
              <span className="text-sm text-gray-200">₹3.8L</span>
            </div>
          </motion.div>

          {/* Rank 1 */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="w-56 flex flex-col items-center">
            <Trophy className="w-10 h-10 text-yellow-400 mb-2 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
            <div className="w-20 h-20 rounded-full bg-yellow-400 border-4 border-yellow-500 flex items-center justify-center font-bold text-2xl text-black mb-4 shadow-[0_0_20px_rgba(250,204,21,0.5)]">M</div>
            <div className="bg-gradient-to-t from-yellow-700 to-yellow-500 w-full h-40 rounded-t-lg border-t-4 border-yellow-300 flex flex-col items-center justify-start pt-4 shadow-xl">
              <span className="font-bold text-white text-xl">Mortal</span>
              <span className="text-sm text-yellow-100 font-bold">₹4.5L</span>
            </div>
          </motion.div>

          {/* Rank 3 */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="w-48 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-orange-300 border-4 border-orange-400 flex items-center justify-center font-bold text-xl text-black mb-4">J</div>
            <div className="bg-gradient-to-t from-orange-800 to-orange-600 w-full h-24 rounded-t-lg border-t-4 border-orange-400 flex flex-col items-center justify-start pt-4 shadow-xl">
              <span className="font-bold text-white text-lg">Jonathan</span>
              <span className="text-sm text-orange-200">₹3.5L</span>
            </div>
          </motion.div>
        </div>

        {/* Table */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 text-gray-400 text-sm uppercase tracking-wider">
                  <th className="p-4 font-semibold text-center w-16">Rank</th>
                  <th className="p-4 font-semibold">Player</th>
                  <th className="p-4 font-semibold text-right">Matches</th>
                  <th className="p-4 font-semibold text-right">Total Kills</th>
                  <th className="p-4 font-semibold text-right">Earnings</th>
                </tr>
              </thead>
              <tbody>
                {players.map((p, i) => (
                  <motion.tr 
                    key={p.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-4 text-center">
                      {p.rank === 1 ? <Medal className="w-6 h-6 text-yellow-400 mx-auto" /> :
                       p.rank === 2 ? <Medal className="w-6 h-6 text-gray-400 mx-auto" /> :
                       p.rank === 3 ? <Medal className="w-6 h-6 text-orange-400 mx-auto" /> :
                       <span className="font-bold text-gray-500">#{p.rank}</span>}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-brand-accent">
                          {p.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-white text-base">{p.name}</div>
                          <div className="text-xs text-gray-500">{p.id}</div>
                        </div>
                        {p.rank === 1 && <span className="ml-2 bg-brand-primary/20 text-brand-primary text-xs px-2 py-0.5 rounded border border-brand-primary/30">MVP</span>}
                      </div>
                    </td>
                    <td className="p-4 text-right font-medium text-gray-300">{p.matches}</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end items-center gap-1 font-medium text-gray-300">
                        {p.kills} <Crosshair className="w-4 h-4 text-red-400" />
                      </div>
                    </td>
                    <td className="p-4 text-right font-bold text-brand-accent">{p.earnings}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
