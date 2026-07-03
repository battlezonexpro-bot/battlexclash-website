"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle2, ShieldCheck, Zap, ArrowRight, Github } from "lucide-react";

export default function DownloadPage() {
  const versionInfo = {
    version: "v2.1.0",
    date: "July 2026",
    size: "45 MB",
    link: "/release.apk",
  };

  const changelog = [
    "Added new Free Fire tournament formats",
    "Improved wallet withdrawal speeds",
    "Fixed minor UI bugs in the leaderboard",
    "Enhanced anti-cheat integration",
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-6"
          >
            Download <span className="text-brand-accent">BattleXClash</span> App
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Experience the ultimate competitive gaming platform directly on your Android device. Play anytime, anywhere.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Download Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 md:p-12 border border-brand-primary/30 neon-box relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <ShieldCheck className="w-48 h-48" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-brand-primary/20 text-brand-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                Latest Release: {versionInfo.version}
              </div>

              <h2 className="text-3xl font-bold mb-2">Android APK</h2>
              <p className="text-gray-400 mb-8">Compatible with Android 8.0 and above.</p>

              <div className="grid grid-cols-3 gap-4 mb-8 bg-black/20 p-4 rounded-xl border border-white/5">
                <div>
                  <div className="text-gray-500 text-sm">Version</div>
                  <div className="font-semibold text-white">{versionInfo.version}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Size</div>
                  <div className="font-semibold text-white">{versionInfo.size}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Updated</div>
                  <div className="font-semibold text-white">{versionInfo.date}</div>
                </div>
              </div>

              <a 
                href={versionInfo.link}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white py-5 rounded-xl font-bold text-xl shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-transform hover:-translate-y-1"
              >
                <Download className="w-6 h-6" />
                Download APK Now
              </a>

              <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
                <Github className="w-4 h-4" /> Download directly from GitHub Releases
              </p>
            </div>
          </motion.div>

          {/* Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Features */}
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-xl mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" /> Key Features
              </h3>
              <ul className="space-y-3">
                {["Instant match updates", "Seamless wallet integration", "Live chat support", "Anti-cheat protection"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Changelog */}
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-xl mb-4">What's New in {versionInfo.version}</h3>
              <ul className="space-y-3">
                {changelog.map((log, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <ArrowRight className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    {log}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Install Guide */}
            <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-brand-accent">
              <h3 className="font-heading font-semibold text-lg mb-2">How to install?</h3>
              <ol className="list-decimal list-inside text-gray-400 text-sm space-y-2">
                <li>Download the APK file.</li>
                <li>Go to Settings {'>'} Security on your phone.</li>
                <li>Enable <strong>"Install from Unknown Sources"</strong>.</li>
                <li>Open the APK and tap Install.</li>
              </ol>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
