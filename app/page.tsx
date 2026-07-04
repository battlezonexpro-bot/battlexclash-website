"use client";

import { motion } from "framer-motion";
import { Download, Zap, Shield, Trophy, Users, ArrowRight, CheckCircle, Gamepad2, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ─── Animation helpers ─────────────────────────────────────────────────────
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

// ─── Static data ───────────────────────────────────────────────────────────
const features = [
  { icon: Zap,    title: "Instant Withdrawal", desc: "Direct to UPI in minutes.",         color: "text-yellow-400",    bg: "bg-yellow-400/10"    },
  { icon: Shield, title: "Safe & Fair",          desc: "Anti-cheat verified.",              color: "text-green-400",     bg: "bg-green-400/10"     },
  { icon: Trophy, title: "Daily Prizes",          desc: "Real cash every day.",             color: "text-brand-accent",  bg: "bg-brand-accent/10"  },
  { icon: Users,  title: "Active Players",        desc: "India's biggest community.",       color: "text-pink-400",      bg: "bg-pink-400/10"      },
] as const;

const stats = [
  { label: "Players",     value: "500K+", color: "text-brand-accent"  },
  { label: "Prize Paid",  value: "₹50L+", color: "text-brand-gold"    },
  { label: "Daily Games", value: "10K+",  color: "text-brand-primary" },
  { label: "Winners/Day", value: "1000+", color: "text-green-400"     },
] as const;

const APK = "/battlexclash.apk";

// ─── Page Component ────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[88vh] pt-16 pb-6 px-4 text-center"
        aria-label="Hero section"
      >
        {/* Live pill */}
        <motion.span
          {...fadeUp(0)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 text-[10px] sm:text-xs font-semibold text-gray-300 mb-4 sm:mb-6"
          role="status"
          aria-live="polite"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
          Live Tournaments — Join &amp; Win Now!
        </motion.span>

        {/* H1 – only one per page */}
        <motion.h1
          {...fadeUp(0.06)}
          className="font-heading font-black leading-[1.08] tracking-tight text-white mb-3 sm:mb-4
            text-[1.9rem] xs:text-[2.2rem] sm:text-[3rem] md:text-[4.2rem] lg:text-[5.5rem]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808]">
            INDIA&apos;S
          </span>{" "}
          #1
          <br />
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
          Free Fire MAX tournaments with real cash prizes.
          <br className="hidden sm:block" />
          Download the app, register, and compete.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.17)}
          className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center mb-6 sm:mb-8 w-full max-w-[260px] sm:max-w-none mx-auto"
        >
          <a
            href={APK}
            className="btn-primary px-5 py-2.5 sm:px-7 sm:py-3.5 text-sm sm:text-base"
            aria-label="Download BattleXClash APK"
          >
            <Download className="w-4 h-4" aria-hidden="true" /> Download
          </a>
          <Link
            href="/faq"
            className="btn-secondary px-5 py-2.5 sm:px-7 sm:py-3.5 text-sm sm:text-base"
            aria-label="Learn more about BattleXClash"
          >
            Learn More <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Trust row */}
        <motion.div
          {...fadeUp(0.22)}
          className="flex flex-wrap justify-center gap-3 sm:gap-5 text-[10px] sm:text-xs text-gray-500 mb-8 sm:mb-12"
          role="list"
          aria-label="Platform highlights"
        >
          {["Free Download", "Instant UPI", "Fair Play"].map((t) => (
            <span key={t} className="flex items-center gap-1" role="listitem">
              <CheckCircle className="w-3 h-3 text-green-500" aria-hidden="true" /> {t}
            </span>
          ))}
        </motion.div>

        {/* ── HERO BANNER (next/image for LCP) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden
            h-[160px] sm:h-[240px] md:h-[380px]
            shadow-[0_0_50px_rgba(225,29,72,0.2)] border border-brand-primary/20"
        >
          {/* LCP image – priority=true so it is preloaded */}
          <Image
            src="/banner.jpg"
            alt="Free Fire MAX Tournament – BattleXClash esports arena"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080608]/80 via-transparent to-transparent" />

          {/* LIVE badge */}
          <div
            className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 flex items-center gap-1.5 bg-red-600/90 backdrop-blur-sm px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full text-white text-[9px] sm:text-xs font-bold"
            role="status"
            aria-label="Live tournaments active"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" aria-hidden="true" /> LIVE
          </div>

          {/* Game title */}
          <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
            <p className="text-[9px] sm:text-xs text-brand-accent font-bold uppercase tracking-widest mb-0.5">
              Featured Game
            </p>
            <h2 className="font-heading font-black text-base sm:text-2xl md:text-3xl text-white leading-tight drop-shadow-lg">
              FREE FIRE MAX
            </h2>
          </div>

          <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5">
            <a href={APK} className="btn-primary text-[10px] sm:text-xs px-3 py-1.5 sm:px-5 sm:py-2.5" aria-label="Download and join Free Fire MAX tournament">
              Join Now <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── STATS (lazy-loaded via whileInView) ── */}
      <section
        className="py-6 sm:py-8 border-y border-white/[0.05] bg-[#080608]/60 backdrop-blur-sm"
        aria-label="Platform statistics"
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.dl
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={item} className="text-center">
                <dt className="text-gray-600 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider mt-0.5 order-2">
                  {s.label}
                </dt>
                <dd className={`font-heading font-black text-xl sm:text-2xl md:text-4xl ${s.color}`}>
                  {s.value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* ── FEATURES (lazy-loaded) ── */}
      <section className="py-10 sm:py-14 px-4" aria-label="Platform features">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-7 sm:mb-10">
            <span className="section-label">
              <Star className="w-3 h-3" aria-hidden="true" /> Why BattleXClash
            </span>
            <h2 className="font-heading font-black text-xl sm:text-2xl md:text-4xl text-white mt-2">
              Built for Winners
            </h2>
          </motion.div>

          <motion.ul
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 list-none p-0"
          >
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <motion.li
                  key={f.title}
                  variants={item}
                  className="glass rounded-xl p-3 sm:p-5 border border-white/[0.06] card-hover"
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${f.bg} flex items-center justify-center mb-2 sm:mb-3`}
                    aria-hidden="true"
                  >
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${f.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-xs sm:text-sm md:text-base text-white mb-0.5 sm:mb-1 leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-[10px] sm:text-xs leading-relaxed">{f.desc}</p>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 sm:py-14 px-4" aria-label="Call to action">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="relative glass-strong rounded-2xl p-7 sm:p-10 text-center border border-brand-primary/20 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 animated-gradient" aria-hidden="true" />
            <div
              className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-primary/15 rounded-full blur-[60px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8 text-brand-primary mx-auto mb-3" aria-hidden="true" />
              <h2 className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-white mb-2 sm:mb-3">
                Ready to Win?
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mb-6 max-w-xs mx-auto leading-relaxed">
                Download BattleXClash and play Free Fire MAX tournaments for real cash prizes.
              </p>
              <a
                href={APK}
                className="btn-primary inline-flex px-6 py-3 text-sm sm:text-base"
                aria-label="Download BattleXClash app for Free Fire MAX tournaments"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" /> Download
              </a>
              <div className="mt-5 flex flex-wrap justify-center gap-3 text-[10px] sm:text-xs text-gray-600">
                {["No hidden fees", "Instant UPI", "24/7 Support"].map((t) => (
                  <span key={t} className="flex items-center gap-1">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" aria-hidden="true" /> {t}
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
