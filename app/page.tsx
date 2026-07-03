"use client";

import { motion } from "framer-motion";
import {
  Download, ChevronRight, Trophy, Users, Zap, Shield,
  Star, Gamepad2, ArrowRight, Play, Clock, IndianRupee,
  Flame, Target, Crown, CheckCircle
} from "lucide-react";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { label: "Active Players", value: "500K+", icon: Users, color: "text-brand-accent" },
  { label: "Prize Pool Paid", value: "₹50L+", icon: IndianRupee, color: "text-brand-gold" },
  { label: "Daily Matches", value: "10K+", icon: Target, color: "text-brand-primary" },
  { label: "Daily Winners", value: "1,000+", icon: Crown, color: "text-green-400" },
];

const features = [
  { icon: Zap, title: "Instant Withdrawals", desc: "Winnings credited directly to UPI within minutes.", color: "from-yellow-400/20 to-orange-500/20", iconColor: "text-yellow-400" },
  { icon: Shield, title: "100% Safe & Fair", desc: "Advanced anti-cheat systems and human verification.", color: "from-green-400/20 to-emerald-500/20", iconColor: "text-green-400" },
  { icon: Trophy, title: "Daily Tournaments", desc: "Multiple prize pools running every single day.", color: "from-brand-primary/20 to-brand-secondary/20", iconColor: "text-brand-accent" },
  { icon: Users, title: "Massive Community", desc: "500K+ players across Free Fire, CODM & Valorant.", color: "from-pink-400/20 to-rose-500/20", iconColor: "text-pink-400" },
];

const games = [
  { name: "Free Fire MAX", tag: "Most Popular", active: true, bg: "from-orange-500 to-red-600" },
  { name: "Clash Squad", tag: "Daily Slots", active: true, bg: "from-yellow-400 to-orange-500" },
  { name: "CODM", tag: "Coming Soon", active: false, bg: "from-gray-600 to-gray-800" },
  { name: "Valorant", tag: "Coming Soon", active: false, bg: "from-rose-500 to-pink-700" },
];

const liveMatches = [
  { title: "FF Solo Rush", prize: "₹2,000", slots: "48/48", status: "live", time: "Live Now", game: "Free Fire MAX" },
  { title: "Clash Squad Open", prize: "₹5,000", slots: "65/100", status: "upcoming", time: "8:00 PM", game: "Free Fire MAX" },
  { title: "FF Max Showdown", prize: "₹10,000", slots: "30/100", status: "upcoming", time: "10:00 PM", game: "Free Fire MAX" },
];

export default function Home() {
  return (
    <>
      {/* ─── BACKGROUND ─────────────────────────────── */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-brand-primary/10 blur-[140px]" />
        <div className="absolute top-[50%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-secondary/10 blur-[140px]" />
        <div className="absolute top-[30%] left-[50%] w-[30vw] h-[30vw] rounded-full bg-brand-accent/5 blur-[100px]" />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(124,58,237,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
        <div className="max-w-7xl w-full mx-auto">

          {/* Live Badge */}
          <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm font-semibold text-gray-300">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
              Live Tournaments Running Now — Join & Win!
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div {...fadeUp(0.08)} className="text-center mb-6">
            <h1 className="font-heading font-black tracking-tight leading-[1.05] text-[clamp(2.5rem,8vw,5.5rem)] text-white">
              INDIA'S #1<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-primary to-brand-secondary">
                ESPORTS PLATFORM
              </span>
            </h1>
          </motion.div>

          {/* Sub */}
          <motion.p {...fadeUp(0.14)} className="text-center text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Play Free Fire MAX, CODM & Valorant tournaments. Win real cash daily. Compete with the best.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://github.com/battlezonexpro-bot/Battlezonex/releases/latest/download/app.apk"
              className="btn-primary text-base px-8 py-4"
            >
              <Download className="w-5 h-5" />
              Download Free APK
            </a>
            <Link href="/tournaments" className="btn-secondary text-base px-8 py-4">
              View Tournaments
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* ─── HERO BANNER ─── */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden h-[240px] sm:h-[360px] md:h-[520px] shadow-[0_0_80px_rgba(124,58,237,0.35)] border border-brand-primary/20"
          >
            {/* image */}
            <img
              src="/banner.jpg"
              alt="Free Fire Tournament Banner"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Overlay layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06070F] via-[#06070F]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/25 via-transparent to-brand-secondary/10" />

            {/* Live badge on banner */}
            <div className="absolute top-5 right-5 flex items-center gap-2 bg-red-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs font-bold shadow-lg">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              LIVE NOW
            </div>

            {/* Banner bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 flex flex-col sm:flex-row items-end justify-between gap-4">
              <div>
                <span className="btn-accent text-xs px-3 py-1 mb-3 rounded-full inline-block font-bold tracking-widest uppercase">
                  🔥 Registration Open
                </span>
                <h2 className="font-heading font-black text-2xl md:text-4xl text-white drop-shadow-2xl leading-tight">
                  FREE FIRE MAX<br className="hidden md:block" /> CLASH SQUAD SERIES
                </h2>
                <p className="text-gray-300 text-sm md:text-base mt-2">Prize Pool: ₹50,000 · Today 8 PM</p>
              </div>
              <a
                href="https://github.com/battlezonexpro-bot/Battlezonex/releases/latest/download/app.apk"
                className="btn-primary flex-shrink-0 text-sm px-6 py-3"
              >
                Join Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS STRIP ─────────────────────────────── */}
      <section className="py-10 border-y border-white/[0.06] bg-brand-surface/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
          >
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.label} variants={cardVariant} className="flex flex-col items-center text-center gap-2">
                  <div className={`w-10 h-10 rounded-2xl glass flex items-center justify-center mb-1`}>
                    <Icon className={`w-5 h-5 ${s.color}`} />
                  </div>
                  <div className={`font-heading text-3xl md:text-4xl font-black ${s.color}`}>{s.value}</div>
                  <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{s.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── LIVE MATCHES TICKER ─────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-12 text-center">
            <span className="section-label"><Flame className="w-3.5 h-3.5 text-brand-primary" /> Live & Upcoming</span>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-white mt-2">Active Tournaments</h2>
            <p className="text-gray-500 mt-3 text-base">Real-time slots — join before they fill up</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {liveMatches.map((m, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                className="glass rounded-2xl p-5 border border-white/[0.07] card-hover cursor-pointer relative overflow-hidden group"
              >
                {m.status === "live" && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 animated-gradient" />
                )}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">{m.game}</p>
                    <h3 className="font-heading font-bold text-lg text-white">{m.title}</h3>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold flex-shrink-0 ${
                    m.status === "live"
                      ? "bg-red-500/20 text-red-400 border border-red-500/30"
                      : "bg-brand-accent/10 text-brand-accent border border-brand-accent/20"
                  }`}>
                    {m.status === "live" ? "● LIVE" : m.time}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-gray-500">Prize Pool</span>
                    <span className="font-heading font-bold text-xl text-brand-gold">{m.prize}</span>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="text-xs text-gray-500">Slots</span>
                    <span className={`font-bold text-sm ${m.status === "live" ? "text-red-400" : "text-white"}`}>{m.slots}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="https://github.com/battlezonexpro-bot/Battlezonex/releases/latest/download/app.apk"
                    className={`w-full py-2.5 rounded-xl font-bold text-sm text-center block transition-all ${
                      m.status === "live"
                        ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
                        : "btn-primary"
                    }`}
                  >
                    {m.status === "live" ? "Watch Live" : "Register Now"}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="mt-8 text-center">
            <Link href="/tournaments" className="btn-secondary inline-flex text-sm px-6 py-3">
              View All Tournaments <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── GAMES ───────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-12 text-center">
            <span className="section-label"><Gamepad2 className="w-3.5 h-3.5 text-brand-primary" /> Supported Games</span>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-white mt-2">Choose Your Game</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {games.map((g, i) => (
              <motion.div
                key={g.name}
                variants={cardVariant}
                whileHover={g.active ? { y: -8, scale: 1.02 } : {}}
                className={`relative glass rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                  g.active
                    ? "border-white/10 hover:border-brand-primary/50"
                    : "border-white/5 opacity-60"
                }`}
              >
                <div className={`h-28 bg-gradient-to-br ${g.bg} relative`}>
                  <div className="absolute inset-0 bg-[#06070F]/30" />
                  <Gamepad2 className="absolute bottom-3 right-3 w-8 h-8 text-white/30" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-base text-white mb-1">{g.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    g.active
                      ? "bg-green-500/15 text-green-400"
                      : "bg-white/5 text-gray-500"
                  }`}>
                    {g.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── WHY US ──────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-12 text-center">
            <span className="section-label"><Star className="w-3.5 h-3.5 text-brand-primary" /> Why BattleXClash</span>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-white mt-2">Built for Winners</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Everything you need in one platform — fair, fast, and fun.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  variants={cardVariant}
                  className="glass rounded-2xl p-6 border border-white/[0.07] card-hover group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${f.iconColor}`} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative glass-strong rounded-3xl p-10 md:p-16 text-center overflow-hidden border border-brand-primary/20"
          >
            {/* BG glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-brand-primary/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-0.5 animated-gradient" />

            <div className="relative z-10">
              <span className="section-label mb-6"><Trophy className="w-3.5 h-3.5" /> Start Winning Today</span>
              <h2 className="font-heading font-black text-3xl md:text-5xl text-white mb-5">
                Ready to Prove<br />Your Skills?
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Join 500K+ players competing daily. Download the app, register free, and start your esports journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/battlezonexpro-bot/Battlezonex/releases/latest/download/app.apk"
                  className="btn-primary text-base px-8 py-4"
                >
                  <Download className="w-5 h-5" />
                  Download Free APK
                </a>
                <Link href="/tournaments" className="btn-secondary text-base px-8 py-4">
                  Browse Tournaments
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                {["No hidden fees", "Instant UPI withdrawal", "24/7 Support"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-green-500" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
