"use client";
import React from "react";
import { motion } from "framer-motion";
import { partners } from "@/data/mockData";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const PartnerLogo: React.FC<{ name: string; index: number }> = ({
  name,
  index,
}) => {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <motion.div
      className="flex items-center justify-center px-8 py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="flex items-center gap-3 text-cream/30 group-hover:text-cream/50 transition-colors">
        <div className="w-8 h-8 rounded-full border border-cream/10 flex items-center justify-center group-hover:border-gold-500/30 transition-colors">
          <span className="text-[10px] font-bold text-cream/40 group-hover:text-gold-400 transition-colors">
            {initials.slice(0, 2)}
          </span>
        </div>
        <span className="text-sm font-medium tracking-wide whitespace-nowrap">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

const Partners: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-anthracite/50 border-y border-white/[0.03]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.p
          className="text-center text-xs text-cream/30 tracking-widest uppercase mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t.partnersTitle}
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {partners.map((p, idx) => (
            <PartnerLogo key={p.id} name={p.name} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
