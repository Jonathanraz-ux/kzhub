"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Route,
  MapPin,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface DocumentItem {
  id: string;
  imageSrc: string;
  aspectRatio: string;
  icon: React.ElementType;
  getTitle: (t: any) => string;
  getDesc: (t: any) => string;
  getAlt: (t: any) => string;
  getLabel: (t: any) => string;
  indexNumber: string;
}

const DOCUMENTS: DocumentItem[] = [
  {
    id: "permit",
    imageSrc: "/images/documents/mining-permit-sample.jpg",
    aspectRatio: "3 / 4",
    icon: FileText,
    getTitle: (t) => t.permitDocTitle,
    getDesc: (t) => t.permitDocDesc,
    getAlt: (t) => t.permitDocAlt,
    getLabel: (t) => t.permitDocLabel,
    indexNumber: "01",
  },
  {
    id: "access-routes",
    imageSrc: "/images/documents/site-access-routes-sample.jpg",
    aspectRatio: "3 / 2",
    icon: Route,
    getTitle: (t) => t.accessRoutesTitle,
    getDesc: (t) => t.accessRoutesDesc,
    getAlt: (t) => t.accessRoutesAlt,
    getLabel: (t) => t.accessRoutesLabel,
    indexNumber: "02",
  },
  {
    id: "location-map",
    imageSrc: "/images/documents/location-map-sample.jpg",
    aspectRatio: "16 / 10",
    icon: MapPin,
    getTitle: (t) => t.locationMapTitle,
    getDesc: (t) => t.locationMapDesc,
    getAlt: (t) => t.locationMapAlt,
    getLabel: (t) => t.locationMapLabel,
    indexNumber: "03",
  },
];

const DocumentsAndLocation: React.FC = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openLightbox = (index: number) => {
    setZoomLevel(1);
    setSelectedIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    setZoomLevel(1);
  }, []);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % DOCUMENTS.length : null));
    setZoomLevel(1);
  }, []);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + DOCUMENTS.length) % DOCUMENTS.length : null
    );
    setZoomLevel(1);
  }, []);

  const zoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.3, 2.5));
  };

  const zoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.3, 0.8));
  };

  const resetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  // Keyboard navigation & scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, closeLightbox, showNext, showPrev]);

  const activeDoc = selectedIndex !== null ? DOCUMENTS[selectedIndex] : null;

  return (
    <section
      id="documents-and-location"
      className="py-16 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-medium tracking-wide mb-4">
            <FileText size={13} className="shrink-0" />
            <span>{t.docsLocationSurtitle}</span>
          </div>

          <h2 className="text-3xl md:text-5xl text-cream max-w-3xl mx-auto font-serif leading-tight">
            {t.docsLocationTitle}
          </h2>

          <p className="text-cream/70 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            {t.docsLocationDesc}
          </p>
        </motion.div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {DOCUMENTS.map((item, index) => {
            const IconComponent = item.icon;
            const title = item.getTitle(t);
            const desc = item.getDesc(t);
            const alt = item.getAlt(t);
            const label = item.getLabel(t);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col h-full"
              >
                <div
                  onClick={() => openLightbox(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`${t.docsLocationViewFull} — ${title}`}
                  className="group relative flex flex-col flex-1 rounded-2xl overflow-hidden border border-white/10 bg-graphite/40 backdrop-blur-md p-4 sm:p-5 md:p-6 shadow-xl shadow-black/40 transition-all duration-300 hover:border-gold-500/40 hover:shadow-gold-500/10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                >
                  {/* Card Header Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cream/70 text-xs font-medium">
                      <IconComponent size={13} className="text-gold-400 shrink-0" />
                      <span>{label}</span>
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-gold-400/80 uppercase">
                      {item.indexNumber}
                    </span>
                  </div>

                  {/* Document Image Frame */}
                  <div className="relative w-full rounded-xl overflow-hidden bg-[#faf9f6] border border-neutral-200/90 shadow-inner flex items-center justify-center p-2 sm:p-3 transition-transform duration-300 group-hover:bg-white">
                    {/* Overlay hint button */}
                    <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/80 hover:bg-black text-gold-300 text-xs font-medium backdrop-blur-md border border-white/20 shadow-md">
                        <Maximize2 size={12} />
                        <span>{t.docsLocationViewFull}</span>
                      </span>
                    </div>

                    {/* Image displayed strictly with contain to preserve sample watermark & avoid cropping */}
                    <div
                      className="relative w-full flex items-center justify-center"
                      style={{
                        aspectRatio: item.aspectRatio,
                        maxHeight: "360px",
                      }}
                    >
                      <img
                        src={item.imageSrc}
                        alt={alt}
                        loading="lazy"
                        className="max-h-full max-w-full w-auto h-auto object-contain rounded select-none transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Card Text Content */}
                  <div className="mt-5 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-serif text-cream font-bold leading-snug group-hover:text-gold-300 transition-colors">
                      {title}
                    </h3>
                    <p className="text-cream/70 text-xs md:text-sm leading-relaxed mt-2.5 flex-1">
                      {desc}
                    </p>

                    {/* Bottom Action Hint */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-cream/50 group-hover:text-gold-400/90 transition-colors">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <Maximize2 size={13} />
                        <span>{t.docsLocationViewFull}</span>
                      </span>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-gold-500/10 text-gold-400/90 border border-gold-500/20">
                        {t.docsLocationSampleBadge}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / High-Resolution Modal */}
      <AnimatePresence>
        {selectedIndex !== null && activeDoc && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-2 sm:p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Modal Dialog */}
            <motion.div
              className="relative w-full max-w-5xl max-h-[96vh] bg-[#121214] border border-gold-500/30 rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-black/80"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-black/70">
                <div className="flex items-center gap-2.5 text-cream text-xs sm:text-sm font-medium truncate pr-2">
                  {React.createElement(activeDoc.icon, {
                    size: 16,
                    className: "text-gold-400 shrink-0",
                  })}
                  <span className="truncate">{activeDoc.getTitle(t)}</span>
                  <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-gold-500/15 text-gold-300 border border-gold-500/30 shrink-0">
                    {t.docsLocationSampleBadge}
                  </span>
                </div>

                {/* Toolbar */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <button
                    onClick={zoomOut}
                    title={t.docsLocationZoomOut}
                    aria-label={t.docsLocationZoomOut}
                    className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 text-cream transition"
                  >
                    <ZoomOut size={16} />
                  </button>
                  <button
                    onClick={zoomIn}
                    title={t.docsLocationZoomIn}
                    aria-label={t.docsLocationZoomIn}
                    className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 text-cream transition"
                  >
                    <ZoomIn size={16} />
                  </button>
                  <button
                    onClick={resetZoom}
                    title={t.docsLocationResetZoom}
                    aria-label={t.docsLocationResetZoom}
                    className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 text-cream transition"
                  >
                    <RotateCcw size={16} />
                  </button>
                  <div className="w-px h-5 bg-white/15 mx-1" />
                  <button
                    onClick={closeLightbox}
                    title={t.docsLocationClose}
                    aria-label={t.docsLocationClose}
                    className="p-1.5 sm:p-2 rounded-lg bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 transition"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Image Area */}
              <div className="relative flex-1 overflow-auto p-3 sm:p-6 bg-[#08090a] flex items-center justify-center min-h-[320px] max-h-[72vh]">
                {/* Navigation arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  title="Previous"
                  aria-label="Previous document"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/70 hover:bg-black text-cream hover:text-gold-400 border border-white/15 transition-all shadow-lg backdrop-blur-sm"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  title="Next"
                  aria-label="Next document"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/70 hover:bg-black text-cream hover:text-gold-400 border border-white/15 transition-all shadow-lg backdrop-blur-sm"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Inner white presentation container */}
                <div
                  className="bg-[#faf9f6] p-2 sm:p-4 rounded-xl shadow-2xl border border-neutral-200/90 transition-transform duration-200 origin-center max-w-full"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <img
                    src={activeDoc.imageSrc}
                    alt={activeDoc.getAlt(t)}
                    className="max-w-full max-h-[66vh] w-auto h-auto object-contain select-none rounded"
                  />
                </div>
              </div>

              {/* Modal Bottom Caption */}
              <div className="px-4 sm:px-6 py-3 bg-black/75 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                <p className="text-xs text-cream/70 leading-relaxed max-w-3xl">
                  {activeDoc.getDesc(t)}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-gold-400/80 shrink-0">
                  <ShieldAlert size={13} />
                  <span>{t.docsLocationSampleBadge}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DocumentsAndLocation;
