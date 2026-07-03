"use client";

import { motion } from "framer-motion";
import { Download, Zap, Shield, Trophy, Users, ArrowRight, CheckCircle, Gamepad2, Star } from "lucide-react";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const stagger = { animate: { transition: { staggerChildren: 0.08 } } };
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const features = [
  { icon: Zap,    title: "Instant Withdrawal", desc: "Winnings direct to UPI in minutes.", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { icon: Shield, title: "Safe & Fair",          desc: "Anti-cheat verified matches only.",   color: "text-green-400",  bg: "bg-green-400/10"  },
  { icon: Trophy, title: "Daily Prizes",          desc: "Real cash tournaments every day.",    color: "text-brand-accent",bg: "bg-brand-accent/10"},
  { icon: Users,  title: "500K+ Players",         desc: "India's biggest gaming community.",   color: "text-pink-400",   bg: "bg-pink-400/10"   },
];

const stats = [
  { label: "Players",      value: "500K+", color: "text-brand-accent" },
  { label: "Prize Paid",   value: "₹50L+", color: "text-brand-gold"   },
  { label: "Daily Games",  value: "10K+",  color: "text-brand-primary"},
  { label: "Winners/Day",  value: "1000+", color: "text-green-400"    },
];

const APK = "https://github.com/battlezonexpro-bot/Battlezonex/releases/latest/download/app.apk";

export default function Home() {
  return (
    <>
      {/* ── BG ── */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {/* Free Fire Wallpaper — blurred, dimmed */}
        <img
          src="/bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "blur(18px) brightness(0.18) saturate(1.4)", transform: "scale(1.08)" }}
        />
        {/* Dark vignette overlay */}
        <div className="absolute inset-0 bg-[#080608]/70" />
        {/* Subtle red/purple colour tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10" />
        {/* Bottom fade to solid bg */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#080608] to-transparent" />
      </div>

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-20 pb-8 px-4 text-center overflow-hidden">
        {/* Live pill */}
        <motion.span {...fadeUp(0)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold text-gray-300 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Live Tournaments — Join & Win Now!
        </motion.span>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.06)}
          className="font-heading font-black leading-[1.08] tracking-tight text-white mb-4
            text-[clamp(2.2rem,9vw,5.5rem)]"
        >
          INDIA'S #1<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
            ESPORTS PLATFORM
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p {...fadeUp(0.12)} className="text-gray-400 leading-relaxed mb-8 max-w-md mx-auto text-sm sm:text-base md:text-lg">
          Free Fire MAX tournaments with real cash prizes. Download the app, register, and compete.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(0.18)} className="flex flex-col sm:flex-row gap-3 justify-center mb-10 w-full max-w-sm sm:max-w-none mx-auto">
          <a href={APK} className="btn-primary px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
            <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Download Free APK
          </a>
          <Link href="/faq" className="btn-secondary px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div {...fadeUp(0.24)} className="flex flex-wrap justify-center gap-4 text-xs text-gray-600 mb-12">
          {["Free to Download", "Instant UPI Payout", "Fair Play Guaranteed"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" /> {t}
            </span>
          ))}
        </motion.div>

        {/* ── HERO BANNER IMAGE ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden
            h-[180px] sm:h-[280px] md:h-[420px]
            shadow-[0_0_60px_rgba(225,29,72,0.25)] border border-brand-primary/20"
        >
          <img src="/banner.jpg" alt="Free Fire MAX Tournament" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080608]/90 via-[#080608]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-transparent" />

          {/* LIVE pill */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 bg-red-600/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-white text-[10px] sm:text-xs font-bold">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> LIVE
          </div>

          {/* Banner content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 flex flex-col sm:flex-row items-end justify-between gap-3">
            <div>
              <span className="inline-block bg-brand-accent text-[#080608] text-[9px] sm:text-xs font-black px-2 py-0.5 rounded-full uppercase tracking-wider mb-1.5">
                🔥 Registration Open
              </span>
              <h2 className="font-heading font-black text-base sm:text-2xl md:text-3xl text-white leading-tight">
                Free Fire MAX — Clash Squad Series
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Prize Pool: ₹50,000 · Today 8 PM</p>
            </div>
            <a href={APK} className="btn-primary text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 flex-shrink-0">
              Join Now <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="py-8 border-y border-white/[0.05] bg-brand-surface/40">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={item} className="text-center">
                <div className={`font-heading font-black text-2xl sm:text-3xl md:text-4xl ${s.color}`}>{s.value}</div>
                <div className="text-gray-600 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-10">
            <span className="section-label"><Star className="w-3 h-3" /> Why BattleXClash</span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white mt-2">Built for Winners</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          >
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} variants={item}
                  className="glass rounded-xl p-4 sm:p-5 border border-white/[0.06] card-hover text-center sm:text-left"
                >
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${f.bg} flex items-center justify-center mb-3 mx-auto sm:mx-0`}>
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${f.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white mb-1 leading-tight">{f.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed hidden sm:block">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative glass-strong rounded-2xl p-8 sm:p-12 text-center border border-brand-primary/20 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 animated-gradient" />
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-primary/15 rounded-full blur-[70px] pointer-events-none" />

            <div className="relative z-10">
              <Gamepad2 className="w-8 h-8 text-brand-primary mx-auto mb-4" />
              <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white mb-3">
                Ready to Win?
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-md mx-auto">
                Download the BattleXClash app and start playing Free Fire MAX tournaments for real cash prizes.
              </p>
              <a href={APK} className="btn-primary inline-flex px-8 py-3.5 text-base">
                <Download className="w-5 h-5" /> Download App — Free
              </a>
              <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-gray-600">
                {["No hidden fees", "Instant UPI", "24/7 Support"].map((t) => (
                  <span key={t} className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-500" /> {t}
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
