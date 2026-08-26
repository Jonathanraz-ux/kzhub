"use client";
import React from "react";
import { motion } from "framer-motion";
import { responsible } from "@/data/mockData";
import { Icon } from "@/components/Icon";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Responsible: React.FC = () => {
  const { t, locale } = useLanguage();

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
            {t.responsibleLabel}
          </p>
          <h2 className="text-3xl md:text-5xl text-cream mb-4">
            {t.responsibleTitle}
          </h2>
          <p className="text-cream/40 max-w-2xl mx-auto text-sm">
            {t.responsibleDesc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {responsible.map((item, idx) => (
            <motion.div
              key={item.id}
              className="group border border-white/[0.06] rounded-xl p-6 bg-gradient-to-b from-white/[0.02] to-transparent text-center hover:border-gold-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                <Icon
                  name={item.icon as never}
                  className="w-6 h-6 text-green-400"
                />
              </div>
              <h3 className="text-sm font-semibold text-cream mb-2">
                {t[item.titleKey as keyof typeof t]}
              </h3>
              <p className="text-xs text-cream/40 leading-relaxed">
                {t[item.descKey as keyof typeof t]}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 max-w-3xl mx-auto border border-white/[0.06] rounded-xl p-8 bg-gradient-to-b from-white/[0.02] to-transparent text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm text-cream/40 leading-relaxed italic">
            {locale === "en" ? (
              <>
                &ldquo;We believe that responsible mining is not just an obligation — it is the foundation of lasting value creation for investors, communities and the environment.&rdquo;
              </>
            ) : (
              <>
                {"«\u00A0Une exploitation minière responsable n'est pas seulement une obligation\u00A0: elle est le fondement d'une création de valeur durable pour les investisseurs, les communautés et l'environnement.\u00A0»"}
              </>
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Responsible;
