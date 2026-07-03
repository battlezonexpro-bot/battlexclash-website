"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight, CheckCircle2, Star, Trophy, Users, ShieldAlert, Zap, Gamepad2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-primary/20 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-secondary/20 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-brand-accent/20 blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Live Tournaments Available</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6"
            >
              DOMINATE THE <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-primary to-brand-secondary">
                BATTLEGROUND
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl"
            >
              India's premier competitive esports platform. Play Free Fire MAX, CODM, and Valorant tournaments. Compete with pros, win real cash, and build your legacy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
            >
              <Link
                href="/download"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                Download App
              </Link>
              <Link
                href="/tournaments"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                View Tournaments
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Players", value: "500K+" },
              { label: "Total Prize Pool", value: "₹50L+" },
              { label: "Matches Played", value: "10K+" },
              { label: "Daily Winners", value: "1000+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Supported Games</h2>
            <p className="text-gray-400">Compete in the most popular esports titles</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {["Free Fire MAX", "Clash Squad", "CODM", "Valorant"].map((game, i) => (
              <motion.div
                key={game}
                whileHover={{ y: -5 }}
                className="glass-panel px-8 py-6 rounded-2xl flex items-center gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center">
                  <Gamepad2 className="text-brand-accent w-6 h-6" />
                </div>
                <span className="font-heading font-bold text-xl">{game}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/10 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto border border-brand-primary/20 neon-box">
            <h2 className="font-heading text-4xl font-bold mb-6">Ready to Prove Your Skills?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of players competing daily. Download the BattleXClash app and start your esports journey today.
            </p>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download APK Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
