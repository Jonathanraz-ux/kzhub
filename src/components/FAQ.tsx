"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const FAQ_KEYS = [
  { q: "faqQuestion1", a: "faqAnswer1" },
  { q: "faqQuestion2", a: "faqAnswer2" },
  { q: "faqQuestion3", a: "faqAnswer3" },
  { q: "faqQuestion4", a: "faqAnswer4" },
  { q: "faqQuestion5", a: "faqAnswer5" },
  { q: "faqQuestion6", a: "faqAnswer6" },
] as const;

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-28 bg-anthracite">
      <div className="mx-auto max-w-3xl px-4 md:px-8 lg:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            {t.faqLabel}
          </p>
          <h2 className="text-3xl md:text-5xl text-cream">
            {t.faqTitle}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQ_KEYS.map((item, idx) => (
            <motion.div
              key={idx}
              className="border border-white/[0.06] rounded-xl overflow-hidden bg-gradient-to-b from-white/[0.02] to-transparent"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: idx * 0.05 }}
            >
              <button
                onClick={() => setOpenId(openId === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openId === idx}
              >
                <span className="text-sm font-medium text-cream/80 pr-4">
                  {t[item.q]}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-cream/30 shrink-0 transition-transform duration-300 ${
                    openId === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openId === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-sm text-cream/40 leading-relaxed border-t border-white/[0.04] pt-4">
                      {t[item.a]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
