"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

/**
 * Google Maps embed URL for Ambodilazana mining site.
 * Replace with the exact embed URL once coordinates are confirmed.
 */
const AMBODILAZANA_MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d49.05!3d-18.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU3JzAwLjAiUyA0OcKwMDMnMDAuMCJF!5e1!3m2!1sfr!2smg!4v1";

/**
 * Google Maps link to open in a new tab.
 * Replace with the exact link once coordinates are confirmed.
 */
const AMBODILAZANA_MAP_URL =
  "https://www.google.com/maps/place/Ambodilazana,+Madagascar";

const OurSite: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="our-site"
      className="py-16 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            {t.siteLabel}
          </p>
          <h2 className="text-3xl md:text-5xl text-cream max-w-3xl mx-auto font-serif leading-tight">
            {t.siteTitle}
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          {/* Text Column */}
          <div className="space-y-6 text-left order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-medium tracking-wide">
              <MapPin size={13} className="shrink-0" />
              <span>{t.siteSurtitle}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif text-cream font-bold leading-snug">
              {t.siteHeading}
            </h3>

            <p className="text-cream/70 text-sm md:text-base leading-relaxed">
              {t.siteDesc}
            </p>

            <a
              href={AMBODILAZANA_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-500/15 border border-gold-500/30 text-gold-400 text-sm font-medium tracking-wide hover:bg-gold-500/25 hover:border-gold-500/50 transition-all duration-300 group"
            >
              <ExternalLink
                size={15}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
              />
              <span>{t.siteMapBtn}</span>
            </a>
          </div>

          {/* Map Column */}
          <div className="order-2">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-black/30 bg-white/[0.02]">
              <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
                <iframe
                  src={AMBODILAZANA_MAP_EMBED_URL}
                  title={
                    t.siteHeading
                  }
                  className="absolute inset-0 w-full h-full min-h-[300px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Location caption */}
            <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-cream/50 tracking-wide">
              <MapPin size={11} className="shrink-0 text-gold-400/60" />
              <span>Ambodilazana, Madagascar</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurSite;
