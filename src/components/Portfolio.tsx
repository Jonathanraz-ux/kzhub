"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/data/mockData";
import SafeImage from "@/components/SafeImage";
import { X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(null);

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
    <section id="portfolio" className="py-20 md:py-28 bg-anthracite">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            {t.portfolioLabel}
          </p>
          <h2 className="text-3xl md:text-5xl text-cream mb-4">
            {t.portfolioTitle}
          </h2>
          <p className="text-cream/40 max-w-2xl mx-auto text-sm">
            {t.portfolioDesc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {portfolio.map((item, idx) => {
            const isWide = item.wide;
            const isTall = item.tall;

            return (
              <motion.button
                key={item.id}
                onClick={() => setOpenId(item.id)}
                className={`group relative overflow-hidden rounded-xl border border-white/[0.06] bg-graphite text-left cursor-pointer ${
                  isWide ? "sm:col-span-2" : ""
                } ${isTall ? "sm:row-span-2" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={idx < 2}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                  <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-500" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] font-medium bg-white/10 backdrop-blur-md text-cream/70 rounded-full border border-white/10">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <motion.h3
                      className="text-base md:text-lg font-semibold text-cream mb-1"
                      initial={false}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p className="text-xs text-cream/50 leading-relaxed line-clamp-2">
                      {item.description}
                    </motion.p>
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-gold-500/90 flex items-center justify-center backdrop-blur-sm">
                      <ArrowUpRight size={14} className="text-graphite" />
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

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
              className="absolute inset-0 bg-black/80 backdrop-blur-lg"
              onClick={close}
            />

            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-graphite shadow-2xl">
                <div className="relative h-[50vh] md:h-[60vh]">
                  <SafeImage
                    src={openItem.image}
                    alt={openItem.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/20 to-transparent" />

                  <button
                    onClick={close}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-cream/70 hover:text-cream hover:bg-black/70 transition-all border border-white/10"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 text-xs font-medium bg-white/10 backdrop-blur-md text-cream/70 rounded-full border border-white/10">
                      {openItem.category}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-cream mb-2 font-serif">
                      {openItem.title}
                    </h2>
                    <p className="text-sm md:text-base text-cream/50 max-w-2xl leading-relaxed">
                      {openItem.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-8 border-t border-white/[0.06]">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-xs text-cream/30 mb-1">Category</p>
                      <p className="text-sm font-medium text-cream/70">
                        {openItem.category}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-cream/30 mb-1">Status</p>
                      <p className="text-sm font-medium text-green-400/70">
                        Active
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-cream/30 mb-1">Region</p>
                      <p className="text-sm font-medium text-cream/70">
                        Madagascar
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-cream/30 mb-1">Phase</p>
                      <p className="text-sm font-medium text-gold-400/70">
                        Advanced
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] text-cream/15 text-center mt-6 tracking-wider uppercase">
                    Demo Version &mdash; Illustrative Project
                  </p>
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
