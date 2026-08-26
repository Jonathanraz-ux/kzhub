"use client";
import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Globe, Share2, Mail, ShieldCheck } from "lucide-react";

const Footer: React.FC = () => {
  const { t, locale } = useLanguage();

  return (
    <footer className="border-t border-white/[0.04] bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 md:py-16">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img
                src="/images/kazak-logo.png"
                alt="Kazak Mining Hub"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-cream/30 leading-relaxed max-w-xs mb-4">
              {locale === "en"
                ? "Your trusted partner for mining investment in Madagascar. We connect international investors with verified mineral projects."
                : "Votre partenaire de confiance pour l'investissement minier à Madagascar. Nous mettons en relation les investisseurs internationaux et des projets miniers vérifiés."}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-gold-400/50 border border-gold-500/15 rounded-full">
                <ShieldCheck size={10} />
                {locale === "en" ? "Verified" : "Vérifié"}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-cream/30 border border-white/[0.06] rounded-full">
                {locale === "en" ? "Local Expertise" : "Expertise locale"}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-cream/30 border border-white/[0.06] rounded-full">
                {locale === "en" ? "Responsible Mining" : "Exploitation responsable"}
              </span>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold text-cream/40 tracking-widest uppercase mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              <a href="#hero" className="text-sm text-cream/30 hover:text-gold-400 transition-colors">{t.footerHome}</a>
              <a href="#portfolio" className="text-sm text-cream/30 hover:text-gold-400 transition-colors">{t.footerOpportunities}</a>
              <a href="#services" className="text-sm text-cream/30 hover:text-gold-400 transition-colors">{t.footerServices}</a>
              <a href="#about" className="text-sm text-cream/30 hover:text-gold-400 transition-colors">{t.footerAbout}</a>
              <a href="#contact" className="text-sm text-cream/30 hover:text-gold-400 transition-colors">{t.footerContact}</a>
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-semibold text-cream/40 tracking-widest uppercase mb-4">
              {locale === "en" ? "Resources" : "Ressources"}
            </p>
            <nav className="flex flex-col gap-2.5">
              <a href="#minerals" className="text-sm text-cream/30 hover:text-gold-400 transition-colors">{t.footerResources}</a>
              <a href="#process" className="text-sm text-cream/30 hover:text-gold-400 transition-colors">
                {locale === "en" ? "Investment Process" : "Processus d'investissement"}
              </a>
              <a href="#faq" className="text-sm text-cream/30 hover:text-gold-400 transition-colors">FAQ</a>
              <a href="/legal" className="text-sm text-cream/30 hover:text-gold-400 transition-colors">{t.footerLegal}</a>
              <a href="/privacy" className="text-sm text-cream/30 hover:text-gold-400 transition-colors">{t.footerPrivacy}</a>
            </nav>
          </div>

          <div className="col-span-2 md:col-span-1">
            <p className="text-[11px] font-semibold text-cream/40 tracking-widest uppercase mb-4">
              Contact
            </p>
            <div className="space-y-2 mb-4">
              <p className="text-xs text-cream/30">3 Rue Ravoninahitriniarivo</p>
              <p className="text-xs text-cream/30">Antananarivo 101, Madagascar</p>
              <a href="mailto:contact@kazakmininghub.com" className="block text-xs text-cream/30 hover:text-gold-400 transition-colors">
                contact@kazakmininghub.com
              </a>
              <a href="tel:+261345678901" className="block text-xs text-cream/30 hover:text-gold-400 transition-colors">
                +261 34 56 789 01
              </a>
            </div>
            <div className="flex gap-2.5">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-cream/30 hover:border-gold-500/30 hover:text-gold-400 transition-all"
                aria-label="LinkedIn"
              >
                <Globe size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-cream/30 hover:border-gold-500/30 hover:text-gold-400 transition-all"
                aria-label="Twitter"
              >
                <Share2 size={14} />
              </a>
              <a
                href="mailto:contact@kazakmininghub.com"
                className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-cream/30 hover:border-gold-500/30 hover:text-gold-400 transition-all"
                aria-label="Email"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/20">
            &copy; {new Date().getFullYear()} Kazak Mining Hub. {t.footerRights}
          </p>
          <p className="text-[10px] text-cream/10">
            {locale === "en" ? (
              <>Demo Version &mdash; Mockup Design</>
            ) : (
              <>Version de démonstration &mdash; Maquette</>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
