"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I participate in a tournament?",
    a: "First, download our Android APK from the Download section. Create an account, add your game ID, and navigate to the Tournaments tab to register for upcoming matches.",
  },
  {
    q: "How are the prize pools distributed?",
    a: "Prizes are distributed automatically to your BattleXClash wallet immediately after the match results are verified. You can withdraw the amount to your UPI or Bank Account.",
  },
  {
    q: "Is there any entry fee?",
    a: "We host both free entry tournaments and paid entry tournaments. Free tournaments are great for practice, while paid tournaments offer much larger prize pools.",
  },
  {
    q: "How do you ensure fair play?",
    a: "We have a strict zero-tolerance policy for hackers. Our app integrates advanced anti-cheat systems, and all match recordings/results are manually reviewed by admins.",
  },
];

// FAQPage JSON-LD schema
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": a,
    },
  })),
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24 pb-20">
      {/* FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container mx-auto px-6 max-w-3xl">
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked{" "}
            <span className="text-brand-accent">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Everything you need to know about the platform.
          </motion.p>
        </header>

        {/* Accessible accordion */}
        <dl className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel border border-white/10 rounded-2xl overflow-hidden"
              >
                <dt>
                  <button
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-2xl"
                  >
                    <span className="font-semibold text-lg text-white">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-accent transition-transform duration-300 shrink-0 ml-3 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </dt>
                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </dd>
              </motion.div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
