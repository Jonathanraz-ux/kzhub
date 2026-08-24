"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/data/mockData";
import SafeImage from "@/components/SafeImage";
import { X, ArrowUpRight, MapPin, Layers, ShieldCheck, Maximize2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type FilterType = "all" | "gold" | "lithium" | "graphite" | "surveys";

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [openId, setOpenId] = useState<number | null>(null);

  const filterTabs: { id: FilterType; labelKey: keyof typeof t }[] = [
    { id: "all", labelKey: "filterAll" },
    { id: "gold", labelKey: "filterGold" },
    { id: "lithium", labelKey: "filterLithium" },
    { id: "graphite", labelKey: "filterGraphite" },
    { id: "surveys", labelKey: "filterSurveys" },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return portfolio;
    return portfolio.filter((item) => item.filterKey === activeFilter);
  }, [activeFilter]);

  const openItem = portfolio.find((p) => p.id === openId);

  const close = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    if (openId === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openId, close]);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-anthracite relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            {t.portfolioLabel}
          </p>
          <h2 className="text-3xl md:text-5xl text-cream mb-4 font-serif">
            {t.portfolioTitle}
          </h2>
          <p className="text-cream/50 max-w-2xl mx-auto text-sm md:text-base">
            {t.portfolioDesc}
          </p>
        </motion.div>

        {/* Commodity / Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-gold-500 text-graphite font-semibold shadow-lg shadow-gold-500/20"
                    : "bg-white/[0.04] text-cream/70 hover:text-cream hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                {t[tab.labelKey]}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item, idx) => {
              const isWide = item.wide;
              const isTall = item.tall;

              return (
                <motion.button
                  key={item.id}
                  layout
                  onClick={() => setOpenId(item.id)}
                  className={`group relative overflow-hidden rounded-xl border border-white/[0.08] bg-graphite text-left cursor-pointer transition-all duration-300 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-black/50 ${
                    isWide ? "sm:col-span-2" : ""
                  } ${isTall ? "sm:row-span-2" : ""}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="relative w-full h-72 md:h-80 overflow-hidden">
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={idx < 2}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-500" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md text-gold-400 rounded-md border border-gold-500/20">
                        {item.category}
                      </span>
                      {item.permitStatus && (
                        <span className="px-2 py-1 text-[9px] font-medium bg-emerald-500/20 backdrop-blur-md text-emerald-300 rounded border border-emerald-500/30 flex items-center gap-1">
                          <ShieldCheck size={10} />
                          Vérifié
                        </span>
                      )}
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-base md:text-lg font-semibold text-cream mb-1.5 font-serif group-hover:text-gold-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Technical Spec Micro Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-2 text-[10px] text-cream/70">
                        {item.region && (
                          <span className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded text-cream/80">
                            <MapPin size={10} className="text-gold-400" />
                            {item.region}
                          </span>
                        )}
                        {item.stage && (
                          <span className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded text-cream/80">
                            <Layers size={10} className="text-gold-400" />
                            {item.stage}
                          </span>
                        )}
                        {item.concessionArea && (
                          <span className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded text-gold-300">
                            <Maximize2 size={10} />
                            {item.concessionArea}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-cream/50 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Corner CTA Arrow */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-gold-500 text-graphite flex items-center justify-center backdrop-blur-sm shadow-md">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Enriched Detailed Profile Modal */}
      <AnimatePresence>
        {openId !== null && openItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={close}
            />

            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 bg-graphite shadow-2xl">
                {/* Modal Header Image */}
                <div className="relative h-64 md:h-80">
                  <SafeImage
                    src={openItem.image}
                    alt={openItem.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/30 to-transparent" />

                  <button
                    onClick={close}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-cream/80 hover:text-cream hover:bg-black/90 transition-all border border-white/20 z-10"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-gold-500 text-graphite rounded-md shadow-md">
                      {openItem.category}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-cream mb-2 font-serif">
                      {openItem.title}
                    </h2>
                    <p className="text-sm md:text-base text-cream/70 max-w-3xl leading-relaxed">
                      {openItem.description}
                    </p>
                  </div>
                </div>

                {/* Technical Specifications Table */}
                <div className="p-6 md:p-8 border-t border-white/[0.08] space-y-6">
                  <h3 className="text-xs uppercase font-bold tracking-[0.2em] text-gold-400 mb-4">
                    Profil Technique & Géologique du Projet
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/[0.02] border border-white/10 rounded-xl p-4 md:p-6 text-xs md:text-sm">
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-cream/40">{t.tableCommodity}:</span>
                      <span className="font-semibold text-gold-300">{openItem.commodity || openItem.category}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-cream/40">{t.tableStage}:</span>
                      <span className="font-semibold text-cream/90">{openItem.stage || "Exploration"}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-cream/40">{t.tableRegion}:</span>
                      <span className="font-semibold text-cream/90">{openItem.region || "Madagascar"}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-cream/40">{t.tableArea}:</span>
                      <span className="font-semibold text-cream/90">{openItem.concessionArea || "Concession Vérifiée"}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-cream/40">{t.tablePermit}:</span>
                      <span className="font-semibold text-emerald-400">{openItem.permitStatus || "Vérifié & Conforme"}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-cream/40">{t.tableAccess}:</span>
                      <span className="font-semibold text-cream/90">{openItem.accessInfo || "Accès routier principal"}</span>
                    </div>

                    {openItem.geologyType && (
                      <div className="md:col-span-2 pt-2 text-left">
                        <span className="text-cream/40 block mb-1">{t.tableGeology}:</span>
                        <p className="text-cream/80 bg-white/[0.03] p-3 rounded-lg border border-white/5 font-mono text-xs">
                          {openItem.geologyType}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5 text-xs text-cream/50">
                    <span className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-gold-400" />
                      Dossier d&apos;acquisition & due-diligence disponible sur demande.
                    </span>
                    <a
                      href="#contact"
                      onClick={close}
                      className="px-6 py-2.5 bg-gold-500 text-graphite font-semibold rounded-md hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20"
                    >
                      Demander le dossier technique
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;

