"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const VIDEO_SRC = "/videos/kazak-showcase.mp4";

const VideoShowcase: React.FC = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.25 });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) {
      v.play().catch(() => setIsPlaying(false));
    } else {
      v.pause();
    }
  }, [inView]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/[0.05] rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            {t.videoLabel}
          </p>
          <h2 className="text-3xl md:text-5xl text-cream max-w-3xl mx-auto font-serif leading-tight">
            {t.videoTitle}
          </h2>
          <p className="text-cream/60 mt-4 max-w-2xl mx-auto text-base">
            {t.videoDesc}
          </p>
        </motion.div>

        {/* Cinematic Frame */}
        <motion.div
          className="relative mx-auto max-w-5xl group cursor-pointer select-none"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onClick={togglePlay}
        >
          {/* Glow halo behind frame */}
          <div
            aria-hidden
            className="absolute -inset-3 bg-gradient-to-r from-gold-500/25 via-gold-400/10 to-gold-500/25 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          />

          <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] ring-1 ring-black/60">
            {/* Corner accents */}
            <span
              aria-hidden
              className="absolute top-0 left-0 z-20 w-16 h-16 border-t-2 border-l-2 border-gold-400/70 rounded-tl-2xl pointer-events-none"
            />
            <span
              aria-hidden
              className="absolute bottom-0 right-0 z-20 w-16 h-16 border-b-2 border-r-2 border-gold-400/70 rounded-br-2xl pointer-events-none"
            />

            <video
              ref={videoRef}
              src={VIDEO_SRC}
              className="w-full aspect-video object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Cinematic vignette overlays */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-graphite/90 via-graphite/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.45)] pointer-events-none" />

            {/* Play / Pause overlay */}
            <div
              className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying
                  ? "opacity-0 group-hover:opacity-100"
                  : "opacity-100"
              }`}
            >
              <div className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-md border border-gold-400/60 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                {isPlaying ? (
                  <Pause size={28} className="text-gold-400 fill-gold-400" />
                ) : (
                  <Play
                    size={30}
                    className="text-gold-400 fill-gold-400 translate-x-0.5"
                  />
                )}
              </div>
            </div>

            {/* Caption bar */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between gap-3 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs text-cream/90 tracking-wide">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                {t.videoCaption}
              </div>
              <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-gold-500/25 text-[10px] uppercase tracking-widest text-gold-300">
                4K · Madagascar
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
