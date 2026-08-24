"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Preloader: React.FC = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-graphite"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Ambient gold glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,168,128,0.12)_0%,_transparent_60%)]" />

          {/* Logo reveal */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.82, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.div
              className="absolute -inset-8 bg-gold-400/15 blur-3xl rounded-full"
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <img
              src="/images/kazak-logo.png"
              alt="Kazak Mining Hub"
              className="relative h-24 md:h-32 w-auto object-contain drop-shadow-[0_0_30px_rgba(197,168,128,0.35)]"
            />
          </motion.div>

          {/* Brand line */}
          <motion.p
            className="relative z-10 mt-6 text-[11px] md:text-xs uppercase tracking-[0.5em] text-gold-400 font-medium"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Kazak Mining Hub
          </motion.p>

          {/* Gold progress line */}
          <div className="relative z-10 mt-8 h-px w-44 md:w-56 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          {/* Caption */}
          <motion.p
            className="relative z-10 mt-5 text-[10px] uppercase tracking-[0.35em] text-cream/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Madagascar · Strategic Minerals
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
