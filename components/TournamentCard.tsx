"use client";

import { Users, Map as MapIcon, Crosshair, Trophy, IndianRupee, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TournamentCardProps {
  title: string;
  game: string;
  prize: string;
  entry: string;
  slotsFilled: number;
  totalSlots: number;
  map: string;
  type: string; // Solo, Duo, Squad
  status: "Upcoming" | "Live" | "Completed";
  timeStr: string;
  imageColor: string; // Just for placeholder visuals
}

export default function TournamentCard({
  title, game, prize, entry, slotsFilled, totalSlots, map, type, status, timeStr, imageColor
}: TournamentCardProps) {
  
  const fillPercentage = (slotsFilled / totalSlots) * 100;
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-brand-primary/50 transition-colors flex flex-col h-full"
    >
      {/* Banner Placeholder */}
      <div className={`h-40 w-full ${imageColor} relative flex items-center justify-center p-4`}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent opacity-80" />
        <h3 className="relative z-10 font-heading font-black text-2xl text-white tracking-wider text-center">{title}</h3>
        
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            status === "Live" ? "bg-red-500 text-white animate-pulse" : 
            status === "Upcoming" ? "bg-brand-accent text-[#050816]" : 
            "bg-gray-600 text-white"
          }`}>
            {status}
          </span>
        </div>
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/50 text-white backdrop-blur-md border border-white/10">
            {game}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        {/* Key Info */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Prize Pool</div>
              <div className="font-bold text-lg text-white">₹{prize}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-right">
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Entry</div>
              <div className="font-bold text-lg text-brand-accent">{entry === "0" ? "FREE" : `₹${entry}`}</div>
            </div>
            <IndianRupee className="w-5 h-5 text-brand-accent" />
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6 bg-white/5 rounded-xl p-3 border border-white/5">
          <div className="flex flex-col items-center justify-center gap-1">
            <MapIcon className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-medium">{map}</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 border-x border-white/10">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-medium">{type}</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-medium">{timeStr}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 mt-auto">
          <div className="flex justify-between text-xs font-medium mb-2">
            <span className="text-gray-400">Slots Filled</span>
            <span className={fillPercentage >= 100 ? "text-red-400" : "text-brand-accent"}>
              {slotsFilled}/{totalSlots}
            </span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${fillPercentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-full rounded-full ${fillPercentage >= 100 ? "bg-red-500" : "bg-gradient-to-r from-brand-primary to-brand-accent"}`}
            />
          </div>
        </div>

        {/* Action Button */}
        <button 
          disabled={status !== "Upcoming" || fillPercentage >= 100}
          className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
            status === "Upcoming" && fillPercentage < 100
              ? "bg-brand-primary hover:bg-brand-secondary text-white shadow-lg hover:shadow-brand-primary/50" 
              : "bg-white/10 text-gray-500 cursor-not-allowed"
          }`}
        >
          {status === "Live" ? "Watch Live" : fillPercentage >= 100 ? "Registration Closed" : "Register Now"}
          {status === "Upcoming" && fillPercentage < 100 && <ChevronRight className="w-4 h-4" />}
        </button>
      </div>
    </motion.div>
  );
}
