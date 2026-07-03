"use client";

import { motion } from "framer-motion";
import { Trophy, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WinnersPage() {
  const recentWinners = [
    { title: "BGMI Weekly Showdown", team: "Team Soul", prize: "₹50,000", mvp: "Goblin", date: "July 2, 2026", color: "from-blue-500 to-purple-600" },
    { title: "Free Fire Clash", team: "Total Gaming", prize: "₹30,000", mvp: "Ajjubhai", date: "July 1, 2026", color: "from-orange-500 to-red-600" },
    { title: "Valorant Invitational", team: "Global Esports", prize: "₹1,00,000", mvp: "SkRossi", date: "June 28, 2026", color: "from-pink-500 to-rose-600" },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
          >
            Hall of <span className="text-brand-accent">Champions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Celebrating the victors of our recent major tournaments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentWinners.map((winner, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${winner.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative z-10">
                <Trophy className="w-10 h-10 text-yellow-400 mb-4 drop-shadow-md" />
                <div className="text-sm font-semibold text-brand-accent mb-1">{winner.date}</div>
                <h3 className="font-heading font-bold text-xl mb-4 text-white leading-tight">{winner.title}</h3>
                
                <div className="space-y-3 bg-black/20 p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Champion Team</span>
                    <span className="font-bold text-white">{winner.team}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Prize Won</span>
                    <span className="font-bold text-green-400">{winner.prize}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-white/10 pt-3">
                    <span className="text-sm flex items-center gap-1 text-gray-400"><Star className="w-3 h-3 text-yellow-400"/> MVP</span>
                    <span className="font-semibold text-white text-sm">{winner.mvp}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/tournaments" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-xl transition-colors font-medium text-white">
            Compete and add your name <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
