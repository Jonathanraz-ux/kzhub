"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { siteName } from "@/lib/site";

export const LegalShell: React.FC<{
  title: string;
  updated: string;
  children: React.ReactNode;
}> = ({ title, updated, children }) => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-3xl px-4 md:px-8 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/kazak-logo.png"
              alt={siteName}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-cream/50 hover:text-gold-400 transition-colors"
          >
            &larr; {t.legalBackHome}
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 md:px-8 py-14 md:py-20">
        <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-3">
          {siteName}
        </p>
        <h1 className="text-3xl md:text-4xl text-cream mb-2">{title}</h1>
        <p className="text-xs text-cream/30 mb-10">
          {t.legalLastUpdated} {updated}
        </p>
        <div className="space-y-8 [&_h2]:text-lg [&_h2]:text-cream [&_h2]:font-semibold [&_h2]:mb-3 [&_p]:text-sm [&_p]:text-cream/40 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_li]:text-sm [&_li]:text-cream/40 [&_li]:leading-relaxed [&_a]:text-gold-400 [&_a:hover]:underline">
          {children}
        </div>
      </main>
      <footer className="border-t border-white/[0.04] mt-12">
        <div className="mx-auto max-w-3xl px-4 md:px-8 py-6">
          <p className="text-xs text-cream/25">
            &copy; {new Date().getFullYear()} Kazak Ltd. {t.footerRights}
          </p>
        </div>
      </footer>
    </div>
  );
};
