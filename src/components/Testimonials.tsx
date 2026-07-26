"use client";
import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/mockData";
import SafeImage from "@/components/SafeImage";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            {t.testimonialsLabel}
          </p>
          <h2 className="text-3xl md:text-5xl text-cream">
            {t.testimonialsTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              className="border border-white/[0.06] rounded-xl p-6 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-gold-500/15 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-cream">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-cream/30">{item.role}</p>
                </div>
              </div>
              <p className="text-sm text-cream/50 leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
