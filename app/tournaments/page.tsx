"use client";

import { motion } from "framer-motion";
import { Trophy, IndianRupee, Users, Clock, ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const tournaments = [
  { id: 1, title: "Free Fire Daily Brawl", game: "Free Fire MAX", prize: "5,000", entry: "50", slotsFilled: 85, totalSlots: 100, map: "Bermuda", type: "Squad", status: "Upcoming" as const, timeStr: "Today, 8:00 PM", gradient: "from-orange-500 to-red-600" },
  { id: 2, title: "Free Fire Rush Solo", game: "Free Fire MAX", prize: "2,000", entry: "0", slotsFilled: 48, totalSlots: 48, map: "Kalahari", type: "Solo", status: "Live" as const, timeStr: "Live Now", gradient: "from-yellow-400 to-orange-500" },
  { id: 3, title: "Valorant Radiant Cup", game: "Valorant", prize: "15,000", entry: "200", slotsFilled: 12, totalSlots: 32, map: "Ascent", type: "5v5", status: "Upcoming" as const, timeStr: "Tomorrow, 6:00 PM", gradient: "from-rose-500 to-pink-600" },
  { id: 4, title: "CODM Deathmatch", game: "CODM", prize: "1,000", entry: "10", slotsFilled: 100, totalSlots: 100, map: "Crash", type: "5v5", status: "Upcoming" as const, timeStr: "Today, 10:00 PM", gradient: "from-slate-600 to-slate-800" },
  { id: 5, title: "FF Clash Squad Series", game: "Free Fire MAX", prize: "10,000", entry: "100", slotsFilled: 45, totalSlots: 100, map: "Purgatory", type: "Squad", status: "Upcoming" as const, timeStr: "Sunday, 4:00 PM", gradient: "from-green-500 to-emerald-600" },
  { id: 6, title: "Free Fire Solo King", game: "Free Fire MAX", prize: "3,000", entry: "30", slotsFilled: 16, totalSlots: 16, map: "Alpine", type: "Solo", status: "Completed" as const, timeStr: "Yesterday", gradient: "from-indigo-500 to-blue-600" },
];

const filters = ["All Games", "Free Fire MAX", "Clash Squad", "Valorant", "CODM"];

const cardVariant = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function TournamentsPage() {
  const [activeFilter, setActiveFilter] = useState("All Games");
  const [search, setSearch] = useState("");

  const filtered = tournaments.filter((t) => {
    const matchGame = activeFilter === "All Games" || t.game === activeFilter;
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase());
    return matchGame && matchSearch;
  });

  const fill = (t: typeof tournaments[0]) => Math.round((t.slotsFilled / t.totalSlots) * 100);

  return (
    <div className="pt-28 pb-24 min-h-screen px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label inline-flex mb-4"><Trophy className="w-3.5 h-3.5" /> Tournaments</span>
            <h1 className="font-heading font-black text-4xl md:text-6xl text-white leading-tight">
              Compete &<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">Win Real Cash</span>
            </h1>
            <p className="text-gray-500 text-lg mt-4 max-w-xl">
              Daily tournaments with real prize pools. Register, play, and withdraw instantly.
            </p>
          </motion.div>

          {/* Search + Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-3 mt-8"
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tournaments..."
                className="w-full glass rounded-xl pl-10 pr-4 py-3 text-sm text-white border border-white/[0.07] focus:outline-none focus:border-brand-primary/50 placeholder:text-gray-600 transition-colors"
              />
            </div>
            <button className="glass border border-white/[0.07] rounded-xl px-4 py-3 flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:border-brand-primary/40 transition-all">
              <SlidersHorizontal className="w-4 h-4" /> Filter
            </button>
          </motion.div>
        </div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                activeFilter === f
                  ? "bg-brand-primary text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                  : "glass border border-white/[0.07] text-gray-400 hover:text-white hover:border-brand-primary/30"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((t) => {
            const pct = fill(t);
            return (
              <motion.div
                key={t.id}
                variants={cardVariant}
                className="glass rounded-2xl overflow-hidden border border-white/[0.07] card-hover group relative"
              >
                {/* Banner */}
                <div className={`h-36 bg-gradient-to-br ${t.gradient} relative flex items-end p-5`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06070F]/70 via-transparent to-transparent" />
                  <h3 className="relative font-heading font-black text-xl text-white z-10 leading-tight">{t.title}</h3>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                      {t.game}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      t.status === "Live" ? "bg-red-500 text-white animate-pulse" :
                      t.status === "Upcoming" ? "bg-brand-accent text-[#06070F]" :
                      "bg-gray-700 text-gray-300"
                    }`}>
                      {t.status === "Live" ? "● LIVE" : t.status}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  {/* Prize + Entry */}
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <p className="text-xs text-gray-600 uppercase tracking-wider mb-0.5">Prize Pool</p>
                      <p className="font-heading font-bold text-2xl text-brand-gold">₹{t.prize}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600 uppercase tracking-wider mb-0.5">Entry Fee</p>
                      <p className="font-heading font-bold text-xl text-brand-accent">
                        {t.entry === "0" ? "FREE" : `₹${t.entry}`}
                      </p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{t.timeStr}</span>
                    <span className="mx-1 text-gray-700">·</span>
                    <Users className="w-3.5 h-3.5" />
                    <span>{t.type}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-5">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-gray-600">Slots filled</span>
                      <span className={pct >= 100 ? "text-red-400 font-bold" : "text-white font-semibold"}>
                        {t.slotsFilled}/{t.totalSlots}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className={`h-full rounded-full ${pct >= 100 ? "bg-red-500" : "bg-gradient-to-r from-brand-primary to-brand-accent"}`}
                      />
                    </div>
                  </div>

                  {/* Button */}
                  <a
                    href="https://github.com/battlezonexpro-bot/battlexclash.github.io/releases/download/v1.0/app-debug.apk"
                    className={`w-full py-3 rounded-xl font-bold text-sm text-center block transition-all ${
                      t.status === "Live"
                        ? "bg-red-500/15 text-red-400 border border-red-500/25 hover:bg-red-500/25"
                        : pct >= 100
                        ? "bg-white/5 text-gray-600 cursor-not-allowed"
                        : "btn-primary"
                    }`}
                  >
                    {t.status === "Live" ? "Watch Live" : pct >= 100 ? "Slots Full" : "Register Now →"}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-gray-600">
            <p className="text-xl font-semibold">No tournaments found</p>
            <p className="text-sm mt-2">Try a different filter or search term</p>
          </div>
        )}
      </div>
    </div>
  );
}
