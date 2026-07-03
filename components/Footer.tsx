import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, MessageSquare, Twitter, Youtube, Instagram, Phone, Gamepad2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-brand-surface/80 mt-auto">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-14">

          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-primary/50 shadow-[0_0_12px_rgba(124,58,237,0.4)]">
                <Image src="/logo.png" alt="BattleXClash" fill className="object-cover" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-heading font-black text-lg text-white">Battle<span className="text-brand-accent">X</span>Clash</span>
                <span className="text-[10px] text-gray-500 tracking-widest uppercase">Esports Platform</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              India's most trusted competitive esports platform. Play daily tournaments, compete with pros, and win real cash rewards.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: MessageSquare, href: "#", label: "Discord" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass border border-white/[0.07] flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent/30 hover:shadow-[0_0_12px_rgba(0,229,255,0.2)] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-white mb-5 uppercase tracking-widest">Platform</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Tournaments", path: "/tournaments" },
                { name: "Leaderboard", path: "/leaderboard" },
                { name: "Winners", path: "/winners" },
                { name: "Download App", path: "https://github.com/battlezonexpro-bot/Battlezonex/releases/latest/download/app.apk", external: true },
              ].map((l) => (
                <li key={l.name}>
                  {l.external ? (
                    <a href={l.path} className="text-gray-500 hover:text-brand-accent text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                      <span className="w-1 h-1 bg-brand-primary/50 rounded-full group-hover:bg-brand-accent transition-colors" />
                      {l.name}
                    </a>
                  ) : (
                    <Link href={l.path} className="text-gray-500 hover:text-brand-accent text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                      <span className="w-1 h-1 bg-brand-primary/50 rounded-full group-hover:bg-brand-accent transition-colors" />
                      {l.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-white mb-5 uppercase tracking-widest">Support</h3>
            <ul className="space-y-3">
              {[
                { name: "FAQ & Help Center", path: "/faq" },
                { name: "Contact Us", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "/terms-conditions" },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.path} className="text-gray-500 hover:text-brand-accent text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <span className="w-1 h-1 bg-brand-primary/50 rounded-full group-hover:bg-brand-accent transition-colors" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-white mb-5 uppercase tracking-widest">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-gray-500 text-sm">support@battlexclash.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-gray-500 text-sm">New Delhi, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Gamepad2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-gray-500 text-sm">Available 24/7 for gamers</span>
              </li>
            </ul>

            {/* App Download Button */}
            <a
              href="https://github.com/battlezonexpro-bot/Battlezonex/releases/latest/download/app.apk"
              className="mt-6 btn-primary inline-flex text-sm px-4 py-2.5 w-full justify-center"
            >
              📱 Download App
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            © {year} BattleXClash. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            Made with <span className="text-red-500 text-base">❤️</span> for Gamers in India
          </div>
        </div>
      </div>
    </footer>
  );
}
