"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 80 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 py-3 bg-gold-500 text-graphite font-semibold text-sm rounded-full shadow-2xl shadow-gold-500/25 hover:bg-gold-400 transition-all hover:shadow-gold-500/40 hover:scale-105"
        >
          <Calendar size={16} />
          Book a Call
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
