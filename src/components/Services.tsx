"use client";
import React from "react";
import { motion } from "framer-motion";
import { services } from "@/data/mockData";
import { Icon } from "@/components/Icon";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-28 bg-anthracite">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            {t.servicesLabel}
          </p>
          <h2 className="text-3xl md:text-5xl text-cream mb-4">
            {t.servicesTitle}
          </h2>
          <p className="text-cream/40 max-w-2xl mx-auto text-sm">
            {t.servicesDesc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              className="group relative border border-white/[0.06] rounded-xl p-7 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-gold-500/20 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
                <Icon
                  name={service.icon as never}
                  className="w-6 h-6 text-gold-400"
                />
              </div>
              <h3 className="text-base font-semibold text-cream mb-3">
                {t[service.titleKey as keyof typeof t]}
              </h3>
              <p className="text-sm text-cream/40 leading-relaxed">
                {t[service.descKey as keyof typeof t]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
