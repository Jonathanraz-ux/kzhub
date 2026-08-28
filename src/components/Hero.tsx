"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SafeImage from "@/components/SafeImage";
import AnimatedCounter from "@/components/AnimatedCounter";
import { hero, stats } from "@/data/mockData";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const statKeys = [
  "statOpportunities",
  "statMinerals",
  "statExperience",
  "statConnections",
] as const;

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <SafeImage
          src={hero.backgroundImage}
          alt="Madagascar mining landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/80 via-graphite/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,168,128,0.08)_0%,_transparent_70%)]"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }}
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-12 pt-28 md:pt-40 pb-20 md:pb-32 text-center overflow-x-clip"
        style={{ y: contentY }}
      >
        <motion.div
          className="w-full min-w-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm md:text-base text-gold-400 font-medium tracking-[0.2em] uppercase mb-5 md:mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            {t.heroBrand}
          </motion.p>

          <motion.h1
            className="text-[clamp(1.9rem,2.4rem+2vw,4.5rem)] sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] max-w-5xl mx-auto mb-5 md:mb-6 font-serif break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-cream/60 max-w-2xl mx-auto mb-6 leading-relaxed break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            {t.heroSubtitle}
          </motion.p>

          {/* Corporate Spotlight / Specs Bar */}
          <motion.div
            className="relative inline-flex items-start sm:items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] border border-gold-500/20 backdrop-blur-md mb-8 md:mb-10 text-xs text-cream/80 w-full sm:w-fit sm:max-w-3xl mx-auto shadow-lg overflow-hidden text-left sm:text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0 mt-1 sm:mt-0" />
            <span
              className="min-w-0 flex-1 whitespace-normal sm:whitespace-nowrap sm:truncate"
              title={t.heroSpecsTicker}
            >
              {t.heroSpecsTicker}
            </span>
          </motion.div>

          <motion.div
            className="flex w-full min-w-0 flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="#portfolio"
              className="group relative inline-flex min-w-0 w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-graphite font-semibold rounded-md hover:bg-gold-400 transition-all text-sm overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 min-w-0">
                {t.heroCtaPrimary}
                <ArrowRight
                  size={16}
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                />
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex min-w-0 w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 border border-cream/20 text-cream font-semibold rounded-md hover:border-gold-500/50 hover:text-gold-400 transition-all text-sm"
            >
              {t.heroCtaSecondary}
              <Download
                size={16}
                className="shrink-0 transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <p className="text-xs md:text-sm text-cream/30 tracking-wide whitespace-normal break-words">
              {t.heroTrustLine}
            </p>
            
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <span className="text-[10px] md:text-[11px] text-cream/50 tracking-wider uppercase font-medium">
                {t.affiliationsBadge}
              </span>
              <span className="w-1 h-1 rounded-full bg-gold-400/50" />
              <div className="px-2 py-0.5 bg-white rounded flex items-center justify-center shadow-sm">
                <img
                  src="/images/affiliations/njcc-logo.png"
                  alt="New Jersey Chamber of Commerce"
                  className="h-3.5 md:h-4 w-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-20 grid grid-cols-1 [@media(min-width:340px)]:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto w-full min-w-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              className="relative min-w-0 border border-white/[0.06] rounded-lg px-3 py-5 md:px-4 md:py-6 text-center bg-white/[0.02] backdrop-blur-sm hover:border-gold-500/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
            >
              <AnimatedCounter value={stat.value} />
              <span className="block text-xs text-cream/40 mt-1.5 uppercase tracking-wider break-words">
                {t[statKeys[idx]]}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="w-6 h-10 border-2 border-cream/15 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2.5 bg-gold-400/60 rounded-full"
            animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
