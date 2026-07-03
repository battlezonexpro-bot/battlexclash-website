import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, MessageSquare, Twitter, Youtube, Instagram, Gamepad2, Download } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#060408] mt-auto">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

          {/* Brand */}
          <div className="space-y-5 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-brand-primary/50 shadow-[0_0_12px_rgba(225,29,72,0.4)]">
                <Image src="/logo.png" alt="BattleXClash" fill className="object-cover" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-xl tracking-widest text-white uppercase">
                  Battle<span className="text-brand-primary">X</span>Clash
                </span>
                <span className="text-[9px] text-brand-accent/70 font-semibold tracking-[0.2em] uppercase">Esports Platform</span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              India's most trusted competitive esports platform. Play daily Free Fire MAX tournaments, win real cash, and build your gaming legacy.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: MessageSquare, href: "#", label: "Discord" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-xl glass border border-white/[0.07] flex items-center justify-center text-gray-500 hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xs text-white mb-5 uppercase tracking-[0.15em]">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Download App", path: "/release.apk", ext: true },
                { name: "FAQ & Help", path: "/faq" },
                { name: "Contact Us", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "/terms-conditions" },
              ].map((l) => (
                <li key={l.name}>
                  {l.ext ? (
                    <a href={l.path} className="text-gray-600 hover:text-brand-accent text-sm transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-brand-primary/40 rounded-full group-hover:bg-brand-accent transition-colors" />
                      {l.name}
                    </a>
                  ) : (
                    <Link href={l.path} className="text-gray-600 hover:text-brand-accent text-sm transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-brand-primary/40 rounded-full group-hover:bg-brand-accent transition-colors" />
                      {l.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-xs text-white mb-5 uppercase tracking-[0.15em]">Contact</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">battlexclash@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">West Bengal, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Gamepad2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">24/7 Gaming Support</span>
              </li>
            </ul>
            <a
              href="/release.apk"
              className="btn-primary text-xs px-4 py-2.5 w-full justify-center"
            >
              <Download className="w-3.5 h-3.5" /> Download App
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-xs">© {year} BattleXClash. All rights reserved.</p>
          <p className="text-gray-700 text-xs flex items-center gap-1">Made with <span className="text-brand-primary">♥</span> for Gamers in India</p>
        </div>
      </div>
    </footer>
  );
}
