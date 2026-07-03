"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Download, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#080608]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_2px_40px_rgba(0,0,0,0.7)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-[70px] flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-brand-primary/50 shadow-[0_0_15px_rgba(225,29,72,0.5)] group-hover:shadow-[0_0_25px_rgba(225,29,72,0.8)] transition-all duration-300">
              <Image src="/logo.png" alt="BattleXClash" fill className="object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-xl tracking-widest text-white uppercase">
                Battle<span className="text-brand-primary">X</span>Clash
              </span>
              <span className="text-[9px] text-brand-accent/70 font-semibold tracking-[0.2em] uppercase">Esports Platform</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 tracking-wide relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary rounded-full group-hover:w-4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Download CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/release.apk"
              className="btn-primary text-sm px-5 py-2.5"
            >
              <Download className="w-4 h-4" />
              Download App
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileMenuOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[70px] left-0 right-0 z-40 bg-[#080608]/98 backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all font-semibold text-base tracking-wide"
                  >
                    {link.name}
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 border-t border-white/[0.06] mt-2">
                <a
                  href="/release.apk"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full text-base py-4"
                >
                  <Download className="w-5 h-5" />
                  Download App — Free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
