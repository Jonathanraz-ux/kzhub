"use client";
import React from "react";
import { motion } from "framer-motion";
import { values } from "@/data/mockData";
import { Icon } from "@/components/Icon";
import SafeImage from "@/components/SafeImage";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const About: React.FC = () => {
  const { t, locale } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background ambient gold glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            {t.aboutLabel}
          </p>
          <h2 className="text-3xl md:text-5xl text-cream max-w-3xl mx-auto font-serif leading-tight">
            {t.aboutTitle}
          </h2>
          <p className="text-cream/60 mt-4 max-w-2xl mx-auto text-base">
            {t.aboutDesc}
          </p>
        </motion.div>

        {/* Executive Biography Showcase featuring Client Headshots */}
        <motion.div
          className="mb-24 border border-gold-500/20 rounded-2xl p-6 md:p-10 lg:p-12 bg-gradient-to-br from-white/[0.04] via-black/40 to-gold-950/10 backdrop-blur-md shadow-2xl relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Client Portrait */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4 relative">
              <motion.div
                className="relative rounded-xl overflow-hidden border-2 border-gold-500/30 shadow-xl group aspect-[3/4]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <SafeImage
                  src="/images/client/client-portrait-1.jpg"
                  alt={locale === "en" ? "Client Leadership Portrait 1" : "Portrait dirigeant 1"}
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block mb-0.5">
                    Kazak Ltd.
                  </span>
                  <p className="text-xs font-semibold text-cream">
                    {locale === "en" ? "Executive Leadership" : "Direction exécutive"}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Biography Text & Company Overview */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                {t.bioLabel}
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-cream font-bold leading-snug">
                {t.bioTitle}
              </h3>

              <p className="text-gold-200/90 font-medium text-sm md:text-base border-l-2 border-gold-400 pl-4 py-1">
                {t.bioSubtitle}
              </p>

              <p className="text-cream/70 text-sm md:text-base leading-relaxed">
                {t.bioDesc1}
              </p>

              <p className="text-cream/70 text-sm md:text-base leading-relaxed">
                {t.bioDesc2}
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 border-t border-white/10 text-xs md:text-sm text-cream/80">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{locale === "en" ? "Verified Mining Sites" : "Sites miniers vérifiés"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{locale === "en" ? "End-to-End Support" : "Accompagnement de bout en bout"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{locale === "en" ? "Local Expertise & Network" : "Expertise locale et réseau"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{locale === "en" ? "Sustainable Operations & ESG" : "Exploitation durable et ESG"}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Corporate & Strategic Investment Pillars Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-serif text-cream mb-2 font-semibold">
              {t.pillarsTitle}
            </h3>
            <div className="w-16 h-0.5 bg-gold-500/50 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-gold-500/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4 text-gold-400 font-bold">
                01
              </div>
              <h4 className="text-base font-semibold text-cream mb-2 font-serif">
                {t.pillar1Title}
              </h4>
              <p className="text-xs text-cream/60 leading-relaxed">
                {t.pillar1Desc}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-gold-500/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4 text-gold-400 font-bold">
                02
              </div>
              <h4 className="text-base font-semibold text-cream mb-2 font-serif">
                {t.pillar2Title}
              </h4>
              <p className="text-xs text-cream/60 leading-relaxed">
                {t.pillar2Desc}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-gold-500/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4 text-gold-400 font-bold">
                03
              </div>
              <h4 className="text-base font-semibold text-cream mb-2 font-serif">
                {t.pillar3Title}
              </h4>
              <p className="text-xs text-cream/60 leading-relaxed">
                {t.pillar3Desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <motion.div
            className="relative border border-white/[0.06] rounded-xl p-8 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-gold-500/20 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center mb-4">
              <span className="w-4 h-0.5 bg-gold-400" />
            </div>
            <h3 className="text-lg font-semibold text-gold-400 mb-3 font-serif">
              {t.missionTitle}
            </h3>
            <p className="text-cream/70 leading-relaxed text-sm">
              {t.missionText}
            </p>
          </motion.div>
          <motion.div
            className="relative border border-white/[0.06] rounded-xl p-8 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-gold-500/20 transition-colors"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center mb-4">
              <div className="w-4 h-4 rounded-full border border-gold-400" />
            </div>
            <h3 className="text-lg font-semibold text-gold-400 mb-3 font-serif">
              {t.visionTitle}
            </h3>
            <p className="text-cream/70 leading-relaxed text-sm">
              {t.visionText}
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-cream/40 tracking-widest uppercase mb-2">
            {t.valuesTitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 max-w-4xl mx-auto">
          {values.map((val) => (
            <motion.div
              key={val.id}
              className="border border-white/[0.06] rounded-xl p-6 bg-gradient-to-b from-white/[0.02] to-transparent text-center hover:border-gold-500/15 transition-colors"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: val.id * 0.08, duration: 0.5 }}
            >
              <Icon
                name={val.icon as never}
                className="w-8 h-8 text-gold-400 mx-auto mb-3"
              />
              <h4 className="text-sm font-semibold text-cream mb-1.5">
                {t[val.titleKey as keyof typeof t]}
              </h4>
              <p className="text-xs text-cream/50 leading-relaxed">
                {t[val.descKey as keyof typeof t]}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
