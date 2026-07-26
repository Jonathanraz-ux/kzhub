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
        className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-32 md:py-40 text-center"
        style={{ y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-gold-400 text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            {t.heroBrand}
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl text-cream leading-[1.1] max-w-5xl mx-auto mb-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-cream/60 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            {t.heroSubtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="#resources"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-graphite font-semibold rounded-md hover:bg-gold-400 transition-all text-sm overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.heroCtaPrimary}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
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
              className="group inline-flex items-center gap-2 px-8 py-4 border border-cream/20 text-cream font-semibold rounded-md hover:border-gold-500/50 hover:text-gold-400 transition-all text-sm"
            >
              {t.heroCtaSecondary}
              <Download
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>

          <motion.p
            className="text-xs md:text-sm text-cream/30 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            {t.heroTrustLine}
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              className="relative border border-white/[0.06] rounded-lg px-4 py-6 text-center bg-white/[0.02] backdrop-blur-sm hover:border-gold-500/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
            >
              <AnimatedCounter value={stat.value} />
              <span className="block text-xs text-cream/40 mt-1.5 uppercase tracking-wider">
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
