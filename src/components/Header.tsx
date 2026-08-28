"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const NAV_ITEMS = [
  { key: "navHome", href: "#hero" },
  { key: "navOpportunities", href: "#portfolio" },
  { key: "navServices", href: "#services" },
  { key: "navResources", href: "#minerals" },
  { key: "navAbout", href: "#about" },
  { key: "navContact", href: "#contact" },
] as const;

const Header: React.FC = () => {
  const { t, locale, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    const ids = ["hero", "services", "minerals", "portfolio", "about", "contact"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-graphite/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-3 group shrink-0">
          <img
            src="/images/kazak-logo.png"
            alt="Kazak Mining Hub"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-gold-400"
                    : "text-cream/60 hover:text-cream/90"
                }`}
              >
                {t[item.key]}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gold-500/10 rounded-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <div className="w-px h-5 bg-white/10 mx-3" />
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cream/50 border border-white/10 rounded-md hover:border-gold-500/30 hover:text-gold-400 transition-colors"
            aria-label={`Switch language to ${locale === "en" ? "French" : "English"}`}
          >
            <Globe size={14} />
            {locale === "en" ? "FR" : "EN"}
          </button>
          <a
            href="#contact"
            className="ml-3 px-5 py-2 text-sm font-semibold bg-gold-500 text-graphite rounded-md hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold-500/20"
          >
            {locale === "en" ? "Contact Us" : "Nous contacter"}
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-cream/50 border border-white/10 rounded-md hover:border-gold-500/30 hover:text-gold-400 transition-colors"
            aria-label={`Switch language to ${locale === "en" ? "French" : "English"}`}
          >
            <Globe size={14} />
            {locale === "en" ? "FR" : "EN"}
          </button>
          <button
            className="text-cream p-2.5 hover:text-gold-400 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-graphite/95 backdrop-blur-xl border-t border-white/5 overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-3 gap-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNav}
                    className={`flex items-center justify-between py-3.5 px-2 rounded-lg text-base font-medium border-b border-white/5 transition-colors ${
                      isActive
                        ? "text-gold-400"
                        : "text-cream/70 hover:text-gold-400"
                    }`}
                  >
                    {t[item.key]}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={handleNav}
                className="mt-4 mb-2 px-5 py-3.5 text-sm font-semibold bg-gold-500 text-graphite rounded-md text-center hover:bg-gold-400 transition-colors"
              >
                {t.investorPortal}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
