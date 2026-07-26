"use client";
import React from "react";
import { motion } from "framer-motion";
import { minerals } from "@/data/mockData";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import * as Icons from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CircleDot: Icons.CircleDot,
  Battery: Icons.Battery,
  Hexagon: Icons.Hexagon,
  Zap: Icons.Zap,
  Radio: Icons.Radio,
  Diamond: Icons.Diamond,
  Fuel: Icons.Fuel,
  Gem: Icons.Gem,
  Building2: Icons.Building2,
};

const MadagascarMap: React.FC = () => (
  <svg viewBox="0 0 280 520" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mg-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#c5a880" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#c5a880" stopOpacity="0.05" />
      </linearGradient>
    </defs>

    <path
      d="M140 30 C115 45 92 70 85 95 C76 125 65 155 62 185 C58 210 54 235 57 260 C60 280 66 300 72 315 C78 330 86 345 95 360 C104 375 112 390 120 405 C128 420 135 435 140 450 C145 435 152 420 160 405 C168 390 176 375 184 360 C193 345 201 330 207 315 C213 300 219 280 222 260 C225 235 221 210 217 185 C214 155 203 125 194 95 C187 70 165 45 140 30Z"
      fill="url(#mg-grad)"
      stroke="#c5a880"
      strokeWidth="1.5"
      strokeOpacity="0.3"
    />

    <path
      d="M140 30 C115 45 92 70 85 95 C76 125 65 155 62 185 C58 210 54 235 57 260 C60 280 66 300 72 315 C78 330 86 345 95 360 C104 375 112 390 120 405 C128 420 135 435 140 450 C145 435 152 420 160 405 C168 390 176 375 184 360 C193 345 201 330 207 315 C213 300 219 280 222 260 C225 235 221 210 217 185 C214 155 203 125 194 95 C187 70 165 45 140 30Z"
      fill="none"
      stroke="#c5a880"
      strokeWidth="0.5"
      strokeOpacity="0.15"
    />

    <motion.circle
      cx="130" cy="90" r="6" fill="#c5a880" opacity="0.8"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    />
    <text x="130" y="78" textAnchor="middle" fill="#c5a880" fontSize="8" fontWeight="600" opacity="0.6">Au</text>

    <motion.circle
      cx="155" cy="140" r="5" fill="#c5a880" opacity="0.7"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    />
    <text x="155" y="128" textAnchor="middle" fill="#c5a880" fontSize="7" fontWeight="600" opacity="0.5">Li</text>

    <motion.circle
      cx="120" cy="180" r="5.5" fill="#c5a880" opacity="0.75"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    />
    <text x="120" y="168" textAnchor="middle" fill="#c5a880" fontSize="7" fontWeight="600" opacity="0.5">Gr</text>

    <motion.circle
      cx="145" cy="220" r="4" fill="#c5a880" opacity="0.6"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    />
    <text x="145" y="210" textAnchor="middle" fill="#c5a880" fontSize="7" fontWeight="600" opacity="0.5">REE</text>

    <motion.circle
      cx="125" cy="260" r="5" fill="#c5a880" opacity="0.7"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
    />
    <text x="125" y="250" textAnchor="middle" fill="#c5a880" fontSize="7" fontWeight="600" opacity="0.5">Ni</text>

    <motion.circle
      cx="150" cy="310" r="4.5" fill="#c5a880" opacity="0.65"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7 }}
    />
    <text x="150" y="300" textAnchor="middle" fill="#c5a880" fontSize="7" fontWeight="600" opacity="0.5">Co</text>

    <motion.circle
      cx="160" cy="360" r="4" fill="#c5a880" opacity="0.55"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
    />
    <text x="160" y="350" textAnchor="middle" fill="#c5a880" fontSize="7" fontWeight="600" opacity="0.5">V</text>

    <motion.line
      x1="140" y1="35" x2="140" y2="445" stroke="#c5a880" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    />
  </svg>
);

const WhyMadagascar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="minerals" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/[0.02] rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            {t.mineralsLabel}
          </p>
          <h2 className="text-3xl md:text-5xl text-cream mb-4">
            {t.mineralsTitle}
          </h2>
          <p className="text-cream/40 max-w-2xl mx-auto text-sm">
            {t.mineralsDesc}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            className="lg:col-span-1 hidden lg:flex justify-center pt-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-44">
              <MadagascarMap />
              <p className="text-center text-[10px] text-cream/15 tracking-wider mt-2 uppercase">
                Madagascar
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {minerals.map((mineral, idx) => {
              const IconComp = iconMap[mineral.icon] || Icons.Hexagon;
              return (
                <motion.div
                  key={mineral.id}
                  className="group border border-white/[0.06] rounded-xl p-5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-gold-500/15 transition-all duration-300"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.03] flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
                      <IconComp
                        className={`w-4 h-4 ${mineral.color} opacity-70`}
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-cream">
                      {t[mineral.nameKey as keyof typeof t] || mineral.name}
                    </h3>
                  </div>
                  <p className="text-xs text-cream/40 leading-relaxed pl-12">
                    {t[mineral.descKey as keyof typeof t] || mineral.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMadagascar;
