"use client";
import React from "react";
import { motion } from "framer-motion";
import { about, values, team } from "@/data/mockData";
import { Icon } from "@/components/Icon";
import SafeImage from "@/components/SafeImage";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
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
          <h2 className="text-3xl md:text-5xl text-cream max-w-3xl mx-auto">
            {t.aboutTitle}
          </h2>
        </motion.div>

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
            <p className="text-cream/60 leading-relaxed text-sm">
              {about.mission}
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
            <p className="text-cream/60 leading-relaxed text-sm">
              {about.vision}
            </p>
          </motion.div>
        </div>

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
              <p className="text-xs text-cream/40 leading-relaxed">
                {t[val.descKey as keyof typeof t]}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-cream/40 tracking-widest uppercase mb-2">
            {t.teamTitle}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/[0.06] mx-auto mb-4 transition-all group-hover:border-gold-500/30">
                <SafeImage
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <h4 className="text-sm font-semibold text-cream">
                {member.name}
              </h4>
              <p className="text-xs text-cream/40 mt-0.5">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
