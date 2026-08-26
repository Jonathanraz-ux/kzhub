"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

interface MapMarker {
  id: number;
  symbol: string;
  name: string;
  cx: number;
  cy: number;
  r: number;
  region: string;
  depositType: string;
}

const MAP_MARKERS: MapMarker[] = [
  { id: 1, symbol: "Au", name: "Gold", cx: 130, cy: 90, r: 7, region: "Eastern Metamorphic Belt", depositType: "Hard-rock & Alluvial Shear Veins" },
  { id: 2, symbol: "Li", name: "Lithium", cx: 155, cy: 140, r: 6, region: "Sahatany Valley", depositType: "Spodumene Pegmatite Field" },
  { id: 3, symbol: "Gr", name: "Graphite", cx: 120, cy: 180, r: 6.5, region: "Toamasina Hinterland", depositType: "Flake Graphite Schist" },
  { id: 6, symbol: "REE", name: "Rare Earths", cx: 145, cy: 220, r: 5.5, region: "Ambatofinandrahana", depositType: "Monazite & Bastnäsite Carbonatite" },
  { id: 4, symbol: "Ni", name: "Nickel", cx: 125, cy: 260, r: 6, region: "Ambatovy Corridor", depositType: "Lateritic Nickel Ore" },
  { id: 5, symbol: "Co", name: "Cobalt", cx: 150, cy: 310, r: 5.5, region: "Eastern Belt Central", depositType: "Cobalt-bearing Laterites" },
  { id: 7, symbol: "V", name: "Vanadium", cx: 160, cy: 360, r: 5, region: "Green Giant Trend", depositType: "Vanadiferous Titanomagnetite" },
];

const InteractiveMadagascarMap: React.FC<{
  hoveredId: number | null;
  onHoverMarker: (id: number | null) => void;
}> = ({ hoveredId, onHoverMarker }) => (
  <svg viewBox="0 0 280 520" className="w-full h-auto drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mg-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#c5a880" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#c5a880" stopOpacity="0.08" />
      </linearGradient>

      <radialGradient id="marker-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#c5a880" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#c5a880" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Island Boundary */}
    <motion.path
      d="M140 30 C115 45 92 70 85 95 C76 125 65 155 62 185 C58 210 54 235 57 260 C60 280 66 300 72 315 C78 330 86 345 95 360 C104 375 112 390 120 405 C128 420 135 435 140 450 C145 435 152 420 160 405 C168 390 176 375 184 360 C193 345 201 330 207 315 C213 300 219 280 222 260 C225 235 221 210 217 185 C214 155 203 125 194 95 C187 70 165 45 140 30Z"
      fill="url(#mg-grad)"
      stroke="#c5a880"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />

    {/* Inner Contour */}
    <path
      d="M140 30 C115 45 92 70 85 95 C76 125 65 155 62 185 C58 210 54 235 57 260 C60 280 66 300 72 315 C78 330 86 345 95 360 C104 375 112 390 120 405 C128 420 135 435 140 450 C145 435 152 420 160 405 C168 390 176 375 184 360 C193 345 201 330 207 315 C213 300 219 280 222 260 C225 235 221 210 217 185 C214 155 203 125 194 95 C187 70 165 45 140 30Z"
      fill="none"
      stroke="#c5a880"
      strokeWidth="0.5"
      strokeOpacity="0.2"
    />

    {/* Central Fault Corridor Axis */}
    <motion.line
      x1="140" y1="35" x2="140" y2="445" stroke="#c5a880" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    />

    {/* Deposit Markers */}
    {MAP_MARKERS.map((marker) => {
      const isSelected = hoveredId === marker.id;

      return (
        <g
          key={marker.id}
          className="cursor-pointer group"
          onMouseEnter={() => onHoverMarker(marker.id)}
          onMouseLeave={() => onHoverMarker(null)}
          onClick={() => onHoverMarker(isSelected ? null : marker.id)}
        >
          {isSelected && (
            <motion.circle
              cx={marker.cx}
              cy={marker.cy}
              r={marker.r * 2.5}
              fill="url(#marker-glow)"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.4, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}

          <motion.circle
            cx={marker.cx}
            cy={marker.cy}
            r={isSelected ? marker.r * 1.4 : marker.r}
            fill={isSelected ? "#f59e0b" : "#c5a880"}
            opacity={isSelected ? 1 : 0.75}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />

          <text
            x={marker.cx}
            y={marker.cy - marker.r - 4}
            textAnchor="middle"
            fill={isSelected ? "#fef3c7" : "#c5a880"}
            fontSize={isSelected ? "9" : "7.5"}
            fontWeight={isSelected ? "700" : "600"}
            opacity={isSelected ? 1 : 0.65}
          >
            {marker.symbol}
          </text>
        </g>
      );
    })}
  </svg>
);

const WhyMadagascar: React.FC = () => {
  const { t, locale } = useLanguage();
  const [hoveredMineralId, setHoveredMineralId] = useState<number | null>(null);

  const activeMarker = MAP_MARKERS.find((m) => m.id === hoveredMineralId);
  const activeMarkerMineral = activeMarker
    ? minerals.find((m) => m.id === activeMarker.id)
    : undefined;
  const activeMarkerName = activeMarker
    ? (activeMarkerMineral &&
        t[activeMarkerMineral.nameKey as keyof typeof t]) ||
      activeMarker.name
    : "";

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
          <h2 className="text-3xl md:text-5xl text-cream mb-4 font-serif">
            {t.mineralsTitle}
          </h2>
          <p className="text-cream/50 max-w-2xl mx-auto text-sm md:text-base">
            {t.mineralsDesc}
          </p>
          <p className="text-xs text-gold-400/80 mt-3 flex items-center justify-center gap-1">
            <Icons.Sparkles size={13} />
            {t.mapHoverHint}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Interactive Map Column */}
          <motion.div
            className="lg:col-span-2 flex flex-col items-center justify-center pt-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-52 md:w-64 relative">
              <InteractiveMadagascarMap
                hoveredId={hoveredMineralId}
                onHoverMarker={setHoveredMineralId}
              />
              <p className="text-center text-[10px] text-cream/20 tracking-[0.2em] mt-3 uppercase font-semibold">
                {locale === "en"
                  ? "Concessions & Deposits Map • Madagascar"
                  : "Carte des concessions et gisements • Madagascar"}
              </p>
            </div>

            {/* Deposit Detail Tooltip Box */}
            <div className="w-full max-w-xs mt-6 min-h-[90px]">
              <AnimatePresence mode="wait">
                {activeMarker ? (
                  <motion.div
                    key={activeMarker.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl border border-gold-500/30 bg-graphite/90 backdrop-blur-md shadow-xl text-left"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                        {activeMarkerName} ({activeMarker.symbol})
                      </span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                        {locale === "en" ? "Identified Deposit" : "Gisement identifié"}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-cream/90">{activeMarker.region}</p>
                    <p className="text-[11px] text-cream/50 mt-1">{activeMarker.depositType}</p>
                  </motion.div>
                ) : (
                  <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center text-xs text-cream/30 flex items-center justify-center h-full">
                    {t.mapHoverHint}
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Minerals Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {minerals.map((mineral, idx) => {
              const IconComp = iconMap[mineral.icon] || Icons.Hexagon;
              const isHovered = hoveredMineralId === mineral.id;

              return (
                <motion.div
                  key={mineral.id}
                  onMouseEnter={() => setHoveredMineralId(mineral.id)}
                  onMouseLeave={() => setHoveredMineralId(null)}
                  className={`group border rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                    isHovered
                      ? "border-gold-500/40 bg-gold-500/10 shadow-lg shadow-gold-500/10 scale-[1.02]"
                      : "border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent hover:border-gold-500/20"
                  }`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: idx * 0.04, duration: 0.4 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isHovered ? "bg-gold-500/20 text-gold-400" : "bg-white/[0.03] group-hover:bg-gold-500/10"
                    }`}>
                      <IconComp
                        className={`w-4 h-4 ${mineral.color} ${isHovered ? "opacity-100 scale-110" : "opacity-70"}`}
                      />
                    </div>
                    <h3 className={`text-sm font-semibold transition-colors ${isHovered ? "text-gold-300" : "text-cream"}`}>
                      {t[mineral.nameKey as keyof typeof t] || mineral.name}
                    </h3>
                  </div>
                  <p className="text-xs text-cream/50 leading-relaxed pl-12">
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

