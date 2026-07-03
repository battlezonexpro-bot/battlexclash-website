"use client";

import { motion } from "framer-motion";
import TournamentCard from "@/components/TournamentCard";
import { Filter, Search } from "lucide-react";

export default function TournamentsPage() {
  
  const tournaments = [
    { id: 1, title: "BGMI Daily Brawl", game: "BGMI", prize: "5,000", entry: "50", slotsFilled: 85, totalSlots: 100, map: "Erangel", type: "Squad", status: "Upcoming" as const, timeStr: "Today, 8:00 PM", imageColor: "bg-gradient-to-r from-orange-500 to-red-600" },
    { id: 2, title: "Free Fire Max Rush", game: "Free Fire MAX", prize: "2,000", entry: "0", slotsFilled: 48, totalSlots: 48, map: "Bermuda", type: "Solo", status: "Live" as const, timeStr: "Live Now", imageColor: "bg-gradient-to-r from-yellow-400 to-orange-500" },
    { id: 3, title: "Valorant Radiant Cup", game: "Valorant", prize: "15,000", entry: "200", slotsFilled: 12, totalSlots: 32, map: "Ascent", type: "5v5", status: "Upcoming" as const, timeStr: "Tomorrow, 6:00 PM", imageColor: "bg-gradient-to-r from-red-500 to-pink-600" },
    { id: 4, title: "CODM Deathmatch", game: "CODM", prize: "1,000", entry: "10", slotsFilled: 100, totalSlots: 100, map: "Crash", type: "5v5", status: "Upcoming" as const, timeStr: "Today, 10:00 PM", imageColor: "bg-gradient-to-r from-gray-700 to-gray-900" },
    { id: 5, title: "BGMI Underdog Series", game: "BGMI", prize: "10,000", entry: "100", slotsFilled: 45, totalSlots: 100, map: "Miramar", type: "Squad", status: "Upcoming" as const, timeStr: "Sunday, 4:00 PM", imageColor: "bg-gradient-to-r from-green-500 to-emerald-700" },
    { id: 6, title: "Free Fire Clash Squad", game: "Free Fire MAX", prize: "3,000", entry: "30", slotsFilled: 16, totalSlots: 16, map: "Kalahari", type: "Squad", status: "Completed" as const, timeStr: "Yesterday", imageColor: "bg-gradient-to-r from-blue-500 to-indigo-600" },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-heading text-4xl md:text-5xl font-bold mb-4"
            >
              Tournaments
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg max-w-xl"
            >
              Join the most competitive daily tournaments. Prove your skills and win real cash rewards instantly.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 w-full md:w-auto"
          >
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search tournaments..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brand-primary transition-colors"
              />
            </div>
            <button className="bg-white/5 border border-white/10 p-2.5 rounded-xl hover:bg-white/10 transition-colors">
              <Filter className="w-5 h-5 text-gray-300" />
            </button>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {["All Games", "BGMI", "Free Fire MAX", "Valorant", "CODM"].map((filter, i) => (
            <button 
              key={filter}
              className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                i === 0 
                  ? "bg-brand-primary text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tournaments.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <TournamentCard {...t} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
