"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/data/mockData";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import * as Icons from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search: Icons.Search,
  ClipboardCheck: Icons.ClipboardCheck,
  Plane: Icons.Plane,
  ShieldCheck: Icons.ShieldCheck,
  FileSignature: Icons.FileSignature,
  Rocket: Icons.Rocket,
};

const Process: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-16 md:py-28 bg-anthracite">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            {t.processLabel}
          </p>
          <h2 className="text-3xl md:text-5xl text-cream mb-4">
            {t.processTitle}
          </h2>
          <p className="text-cream/40 max-w-2xl mx-auto text-sm">
            {t.processDesc}
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-white/[0.06]" />
          <motion.div
            className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 w-px bg-gradient-to-b from-gold-500/60 via-gold-500/20 to-transparent"
            style={{ height: lineHeight }}
          />

          {processSteps.map((step, idx) => {
            const IconComp = iconMap[step.icon] || Icons.Hexagon;
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={step.id}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="relative flex items-center justify-center w-[46px] h-[46px] shrink-0">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gold-500/10 border border-gold-500/20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2, type: "spring" }}
                  />
                  <motion.span
                    className="text-xs font-bold text-gold-400 z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                  >
                    {step.id}
                  </motion.span>
                </div>

                <motion.div
                  className="border border-white/[0.06] rounded-xl p-5 bg-gradient-to-b from-white/[0.02] to-transparent md:w-1/2 hover:border-gold-500/15 transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center">
                      <IconComp className="w-4 h-4 text-gold-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-cream">
                      {t[step.titleKey as keyof typeof t]}
                    </h3>
                  </div>
                  <p className="text-xs text-cream/40 leading-relaxed pl-11">
                    {t[step.descKey as keyof typeof t]}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
