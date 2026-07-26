"use client";
import React, { createContext, useContext, useState, useCallback } from "react";
import { en, fr } from "@/lib/i18n";
import type { Locale, TranslationKeys } from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  t: TranslationKeys;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const dictionaries = { en, fr } as const;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggle = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "fr" : "en"));
  }, []);

  const value: LanguageContextValue = {
    locale,
    t: dictionaries[locale],
    toggle,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
