"use client";

import { motion } from "framer-motion";
import { Download, Zap, Shield, Trophy, Users, ArrowRight, CheckCircle, Gamepad2, Star } from "lucide-react";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

const stagger = { animate: { transition: { staggerChildren: 0.07 } } };
const item = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const features = [
  { icon: Zap,    title: "Instant Withdrawal", desc: "Direct to UPI in minutes.",       color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { icon: Shield, title: "Safe & Fair",          desc: "Anti-cheat verified.",            color: "text-green-400",  bg: "bg-green-400/10"  },
  { icon: Trophy, title: "Daily Prizes",          desc: "Real cash every day.",           color: "text-brand-accent",bg: "bg-brand-accent/10"},
  { icon: Users,  title: "500K+ Players",         desc: "India's biggest community.",     color: "text-pink-400",   bg: "bg-pink-400/10"   },
];

const stats = [
  { label: "Players",     value: "500K+", color: "text-brand-accent"  },
  { label: "Prize Paid",  value: "₹50L+", color: "text-brand-gold"    },
  { label: "Daily Games", value: "10K+",  color: "text-brand-primary" },
  { label: "Winners/Day", value: "1000+", color: "text-green-400"     },
];

const APK = "/release.apk";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center min-h-[88vh] pt-16 pb-6 px-4 text-center">

        {/* Live pill */}
        <motion.span
          {...fadeUp(0)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 text-[10px] sm:text-xs font-semibold text-gray-300 mb-4 sm:mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Live Tournaments — Join & Win Now!
        </motion.span>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.06)}
          className="font-heading font-black leading-[1.08] tracking-tight text-white mb-3 sm:mb-4
            text-[1.9rem] xs:text-[2.2rem] sm:text-[3rem] md:text-[4.2rem] lg:text-[5.5rem]"
        >
          INDIA'S #1<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
            ESPORTS PLATFORM
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.12)}
          className="text-gray-400 leading-relaxed mb-6 sm:mb-8 mx-auto
            text-xs sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-lg"
        >
          Free Fire MAX tournaments with real cash prizes.<br className="hidden sm:block" />
          Download the app, register, and compete.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeUp(0.17)}
          className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center mb-6 sm:mb-8 w-full max-w-[260px] sm:max-w-none mx-auto"
        >
          <a href={APK} className="btn-primary px-5 py-2.5 sm:px-7 sm:py-3.5 text-sm sm:text-base">
            <Download className="w-4 h-4" /> Download Free APK
          </a>
          <Link href="/faq" className="btn-secondary px-5 py-2.5 sm:px-7 sm:py-3.5 text-sm sm:text-base">
            Learn More <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Trust row */}
        <motion.div
          {...fadeUp(0.22)}
          className="flex flex-wrap justify-center gap-3 sm:gap-5 text-[10px] sm:text-xs text-gray-500 mb-8 sm:mb-12"
        >
          {["Free Download", "Instant UPI", "Fair Play"].map((t) => (
            <span key={t} className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-green-500" /> {t}
            </span>
          ))}
        </motion.div>

        {/* ── HERO BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden
            h-[160px] sm:h-[240px] md:h-[380px]
            shadow-[0_0_50px_rgba(225,29,72,0.2)] border border-brand-primary/20"
        >
          <img
            src="/banner.jpg"
            alt="Free Fire MAX Tournament"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080608]/80 via-transparent to-transparent" />

          {/* LIVE pill only */}
          <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 flex items-center gap-1.5 bg-red-600/90 backdrop-blur-sm px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full text-white text-[9px] sm:text-xs font-bold">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> LIVE
          </div>

          {/* FREE FIRE MAX text */}
          <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
            <p className="text-[9px] sm:text-xs text-brand-accent font-bold uppercase tracking-widest mb-0.5">Featured Game</p>
            <h2 className="font-heading font-black text-base sm:text-2xl md:text-3xl text-white leading-tight drop-shadow-lg">
              FREE FIRE MAX
            </h2>
          </div>

          {/* Join Now button */}
          <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5">
            <a href={APK} className="btn-primary text-[10px] sm:text-xs px-3 py-1.5 sm:px-5 sm:py-2.5">
              Join Now <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="py-6 sm:py-8 border-y border-white/[0.05] bg-[#080608]/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={item} className="text-center">
                <div className={`font-heading font-black text-xl sm:text-2xl md:text-4xl ${s.color}`}>{s.value}</div>
                <div className="text-gray-600 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-10 sm:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-7 sm:mb-10">
            <span className="section-label"><Star className="w-3 h-3" /> Why BattleXClash</span>
            <h2 className="font-heading font-black text-xl sm:text-2xl md:text-4xl text-white mt-2">Built for Winners</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4"
          >
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} variants={item}
                  className="glass rounded-xl p-3 sm:p-5 border border-white/[0.06] card-hover"
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${f.bg} flex items-center justify-center mb-2 sm:mb-3`}>
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${f.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-xs sm:text-sm md:text-base text-white mb-0.5 sm:mb-1 leading-tight">{f.title}</h3>
                  <p className="text-gray-600 text-[10px] sm:text-xs leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 sm:py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative glass-strong rounded-2xl p-7 sm:p-10 text-center border border-brand-primary/20 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 animated-gradient" />
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-primary/15 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8 text-brand-primary mx-auto mb-3" />
              <h2 className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-white mb-2 sm:mb-3">
                Ready to Win?
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mb-6 max-w-xs mx-auto leading-relaxed">
                Download BattleXClash and play Free Fire MAX tournaments for real cash prizes.
              </p>
              <a href={APK} className="btn-primary inline-flex px-6 py-3 text-sm sm:text-base">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Download App — Free
              </a>
              <div className="mt-5 flex flex-wrap justify-center gap-3 text-[10px] sm:text-xs text-gray-600">
                {["No hidden fees", "Instant UPI", "24/7 Support"].map((t) => (
                  <span key={t} className="flex items-center gap-1">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" /> {t}
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
