"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Maximize2, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const MAP_IMAGE_SRC = "/images/projects/carte-localisation-pe-36409.png";

const ProjectPerimeter: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openLightbox = () => {
    setZoomLevel(1);
    setIsOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    setZoomLevel(1);
  }, []);

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.3, 2.5));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.3, 0.8));
  const resetZoom = () => setZoomLevel(1);

  // Close lightbox on Escape key & manage scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeLightbox]);

  return (
    <section
      id="project-perimeter"
      className="py-16 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-medium tracking-wide mb-4">
            <Compass size={13} className="shrink-0" />
            <span>{t.perimeterSurtitle}</span>
          </div>

          <h2 className="text-3xl md:text-5xl text-cream max-w-3xl mx-auto font-serif leading-tight">
            {t.perimeterTitle}
          </h2>

          <p className="text-cream/70 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            {t.perimeterDesc}
          </p>
        </motion.div>

        {/* Map Container Centered */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div
            onClick={openLightbox}
            className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/15 bg-white p-3 md:p-6 shadow-2xl shadow-black/50 transition-all duration-300 hover:border-gold-500/40 hover:shadow-gold-500/10"
          >
            {/* Overlay hint button */}
            <div className="absolute top-5 right-5 z-20 opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 hover:bg-black/90 text-gold-300 text-xs font-medium backdrop-blur-md border border-white/20 shadow-md">
                <Maximize2 size={13} />
                <span>{t.perimeterViewFull}</span>
              </span>
            </div>

            {/* Main technical map image */}
            <div className="relative w-full flex items-center justify-center bg-white rounded-xl overflow-hidden">
              <img
                src={MAP_IMAGE_SRC}
                alt={t.perimeterAlt}
                loading="lazy"
                className="w-full h-auto max-h-[700px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* Location & Coordinate System Caption */}
          <p className="text-center text-xs md:text-sm text-cream/55 mt-4 tracking-wide">
            {t.perimeterCaption}
          </p>
        </motion.div>
      </div>

      {/* Lightbox / Modal Modal for High-Resolution Inspection */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-6xl max-h-[95vh] bg-[#121212] border border-gold-500/30 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/60">
                <div className="flex items-center gap-2 text-cream text-xs md:text-sm font-medium">
                  <Compass size={15} className="text-gold-400 shrink-0" />
                  <span className="truncate">{t.perimeterTitle}</span>
                </div>

                {/* Toolbar */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={zoomOut}
                    title="Zoom Out"
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-cream transition"
                  >
                    <ZoomOut size={16} />
                  </button>
                  <button
                    onClick={zoomIn}
                    title="Zoom In"
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-cream transition"
                  >
                    <ZoomIn size={16} />
                  </button>
                  <button
                    onClick={resetZoom}
                    title="Reset Zoom"
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-cream transition"
                  >
                    <RotateCcw size={16} />
                  </button>
                  <div className="w-px h-5 bg-white/15 mx-1" />
                  <button
                    onClick={closeLightbox}
                    title="Close"
                    className="p-1.5 rounded-lg bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 transition"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Image Area */}
              <div className="flex-1 overflow-auto p-4 md:p-6 bg-[#0a0a0a] flex items-center justify-center min-h-[300px]">
                <div
                  className="bg-white p-2 md:p-4 rounded-xl shadow-lg transition-transform duration-200 origin-center max-w-full"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <img
                    src={MAP_IMAGE_SRC}
                    alt={t.perimeterAlt}
                    className="max-w-full max-h-[75vh] w-auto h-auto object-contain select-none"
                  />
                </div>
              </div>

              {/* Modal Bottom Caption */}
              <div className="px-4 py-2.5 bg-black/60 border-t border-white/10 text-center text-xs text-cream/60">
                {t.perimeterCaption}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectPerimeter;
