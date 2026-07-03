import Link from "next/link";
import Image from "next/image";
import { Gamepad2, Mail, MapPin, MessageSquare, Twitter, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#02040A] mt-auto">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-brand-primary/50 shadow-[0_0_10px_rgba(124,58,237,0.5)]">
                <Image src="/logo.png" alt="BattleXClash Logo" fill className="object-cover" />
              </div>
              <span className="font-heading font-bold text-xl tracking-wide">
                Battle<span className="text-brand-accent">X</span>Clash
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              India's most trusted competitive esports platform. Play daily tournaments, compete with pros, and win real cash rewards instantly.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#5865F2] transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Platform</h3>
            <ul className="space-y-3">
              <li><Link href="/tournaments" className="text-gray-400 hover:text-brand-accent transition-colors">Tournaments</Link></li>
              <li><Link href="/leaderboard" className="text-gray-400 hover:text-brand-accent transition-colors">Leaderboard</Link></li>
              <li><Link href="/winners" className="text-gray-400 hover:text-brand-accent transition-colors">Past Winners</Link></li>
              <li><Link href="/download" className="text-gray-400 hover:text-brand-accent transition-colors">Download App</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/faq" className="text-gray-400 hover:text-brand-accent transition-colors">FAQ & Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-brand-accent transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="text-gray-400 hover:text-brand-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-gray-400">support@battlexclash.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-gray-400">New Delhi, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Gamepad2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-gray-400">Available 24/7 for gamers</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BattleXClash. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            Made with <span className="text-red-500">❤️</span> for Gamers
          </div>
        </div>
      </div>
    </footer>
  );
}
