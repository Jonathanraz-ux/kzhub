"use client";
import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LangUpdater() {
  const { locale } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
