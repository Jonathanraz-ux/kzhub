"use client";
import React from "react";
import { motion } from "framer-motion";
import { expertTeam } from "@/data/mockData";
import SafeImage from "@/components/SafeImage";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ExpertAvatar: React.FC<{ label: string }> = ({ label }) => (
  <div
    role="img"
    aria-label={label}
    className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-gold-500/[0.06] border border-gold-500/20 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:border-gold-500/40 group-hover:bg-gold-500/10"
  >
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-14 h-14 md:w-16 md:h-16 text-gold-400/80"
      aria-hidden="true"
    >
      <circle cx="32" cy="24" r="9.5" />
      <path d="M15 54c2.8-10.4 9.6-15.5 17-15.5S46.2 43.6 49 54" />
    </svg>
  </div>
);

const ExpertTeam: React.FC = () => {
  const { t, locale } = useLanguage();

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="py-16 md:py-28 bg-background relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            {t.expertsLabel}
          </p>
          <h2
            id="team-heading"
            className="text-3xl md:text-5xl text-cream mb-4 font-serif"
          >
            {t.expertsTitle}
          </h2>
          <p className="text-cream/50 max-w-2xl mx-auto text-sm md:text-base">
            {t.expertsSubtitle}
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {expertTeam.map((member, idx) => {
            const altText =
              locale === "en" ? member.photoAlt.en : member.photoAlt.fr;
            return (
              <motion.li
                key={member.id}
                className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent hover:border-gold-500/25 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                {member.photo ? (
                  <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gold-500/30 mb-6 shrink-0">
                    <SafeImage
                      src={member.photo}
                      alt={altText}
                      fill
                      sizes="(max-width: 640px) 112px, 128px"
                      className="object-cover"
                      loading="eager"
                    />
                  </div>
                ) : (
                  <div className="mb-6">
                    <ExpertAvatar
                      label={
                        locale === "en"
                          ? `Illustrative portrait of ${member.name}`
                          : `Portrait illustratif de ${member.name}`
                      }
                    />
                  </div>
                )}

                <h3 className="text-base md:text-lg font-semibold text-cream font-serif mb-2">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm text-cream/50 leading-relaxed max-w-[26ch] mt-auto">
                  {t[member.roleKey as keyof typeof t]}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ExpertTeam;
