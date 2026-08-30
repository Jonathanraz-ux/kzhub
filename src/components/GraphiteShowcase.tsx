"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Diamond } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const GRAPHITE_IMAGE = "/images/resources/high-carbon-graphite.jpg";

const GraphiteShowcase: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="graphite-showcase"
      className="relative overflow-hidden bg-[#060608]"
    >
      {/* Full-width dramatic layout */}
      <div className="relative min-h-[85vh] md:min-h-[90vh] flex items-center">
        {/* Background image — full bleed with dramatic overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={GRAPHITE_IMAGE}
            alt={t.graphiteAlt}
            loading="lazy"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Dramatic gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />
          {/* Subtle gold tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-emerald-500/3" />
        </div>

        {/* Ambient decorative glows */}
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-gold-500/8 rounded-full blur-[180px] pointer-events-none z-[1]" />
        <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-white/3 rounded-full blur-[140px] pointer-events-none z-[1]" />

        {/* Content layer */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12 w-full py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Text Content */}
            <motion.div
              className="order-2 lg:order-1 space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Surtitle badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-400 text-xs font-semibold tracking-widest uppercase"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Sparkles size={14} className="shrink-0" />
                <span>{t.graphiteSurtitle}</span>
              </motion.div>

              {/* Main title — dramatic */}
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-cream font-bold leading-[1.08] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {t.graphiteTitle}
              </motion.h2>

              {/* Highlight badge — the "High Carbon Rate" emphasis */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gold-500/30 rounded-xl blur-md" />
                  <div className="relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-graphite font-bold text-lg sm:text-xl tracking-wide shadow-lg shadow-gold-500/30">
                    <Diamond size={18} className="inline mr-2 -mt-0.5" />
                    {t.graphiteHighlight}
                  </div>
                </div>
                <span className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-md bg-white/5 border border-white/15 text-cream/70 font-medium">
                  {t.graphiteBadge}
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-cream/75 text-base sm:text-lg leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                {t.graphiteDesc}
              </motion.p>

              {/* CTA button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.65 }}
              >
                <a
                  href="#minerals"
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gold-500/15 border border-gold-500/40 text-gold-400 text-sm font-semibold tracking-wide hover:bg-gold-500/25 hover:border-gold-500/60 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-gold-500/10"
                >
                  <span>{t.graphiteCta}</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
            </motion.div>

            {/* Right — Floating image card with glow */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative group">
                {/* Outer glow ring */}
                <div className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-br from-gold-500/20 via-gold-500/5 to-transparent blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Image frame */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/60 bg-white/[0.03] backdrop-blur-sm group-hover:border-gold-500/30 transition-all duration-500 max-w-[500px]">
                  <div className="p-3 sm:p-4 bg-white/[0.02]">
                    <div className="rounded-xl overflow-hidden bg-[#f5f4f0]">
                      <img
                        src={GRAPHITE_IMAGE}
                        alt={t.graphiteAlt}
                        loading="lazy"
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                        style={{ aspectRatio: "4 / 3" }}
                      />
                    </div>
                  </div>

                  {/* Bottom label bar */}
                  <div className="px-4 py-3 bg-black/40 border-t border-white/10 flex items-center justify-between">
                    <span className="text-cream/80 text-xs sm:text-sm font-medium tracking-wide">
                      {t.graphiteHighlight}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded bg-gold-500/15 text-gold-400 border border-gold-500/25 font-semibold">
                      {t.graphiteBadge}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5]" />
      </div>
    </section>
  );
};

export default GraphiteShowcase;
