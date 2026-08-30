"use client";
import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { contactInfo } from "@/data/mockData";
import { LegalShell } from "@/components/LegalShell";

type Section = { heading: string; paras?: string[]; bullets?: string[] };
type Content = { title: string; updated: string; sections: Section[] };

const CONTENT: Record<"en" | "fr", Content> = {
  en: {
    title: "Legal Notice",
    updated: "August 24, 2026",
    sections: [
      {
        heading: "Publisher",
        paras: [
          "This website is published by Kazak Ltd., a business development company operating in Madagascar, through its specialized division Kazak Mining Hub.",
          `Address: 3 Rue Ravoninahitriniarivo, Antananarivo 101, Madagascar\nEmail: ${contactInfo.email}\nPhone / WhatsApp: ${contactInfo.phoneMadagascarDisplay} (Madagascar) — ${contactInfo.phoneIntlDisplay} (International)`,
          "Company registration details (NIF, STAT, RCS): to be completed.",
        ],
      },
      {
        heading: "Publication Director",
        paras: [
          "Hery Zo ANDRIAMIARANA — CEO & Founder, Kazak Ltd. & Kazak Mining Hub. Contact details as above.",
        ],
      },
      {
        heading: "Hosting",
        paras: [
          "This website is hosted by Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, United States — www.netlify.com.",
        ],
      },
      {
        heading: "Intellectual Property",
        paras: [
          "All content on this website (texts, images, logos, videos, data), unless otherwise stated, is the property of Kazak Ltd. Any reproduction, distribution or use without prior written authorization is prohibited.",
        ],
      },
      {
        heading: "Disclaimer",
        paras: [
          "Information presented on this website, including project listings, permit statuses and geological descriptions, is provided for general guidance only and does not constitute an offer, a legal warranty or investment advice. Investors remain responsible for conducting their own due diligence. Kazak Ltd. shall not be held liable for any decision made based on the content of this website.",
        ],
      },
      {
        heading: "Governing Law",
        paras: [
          "This website and its legal notices are governed by the laws of the Republic of Madagascar. Any dispute shall be submitted to the competent courts of Antananarivo.",
        ],
      },
    ],
  },
  fr: {
    title: "Mentions légales",
    updated: "24 août 2026",
    sections: [
      {
        heading: "Éditeur",
        paras: [
          "Le présent site est édité par Kazak Ltd., société de développement commercial opérant à Madagascar, à travers sa division spécialisée Kazak Mining Hub.",
          `Adresse : 3 Rue Ravoninahitriniarivo, Antananarivo 101, Madagascar\nE-mail : ${contactInfo.email}\nTéléphone / WhatsApp : ${contactInfo.phoneMadagascarDisplay} (Madagascar) — ${contactInfo.phoneIntlDisplay} (International)`,
          "Numéros d'immatriculation de la société (NIF, STAT, RCS) : à compléter.",
        ],
      },
      {
        heading: "Directeur de la publication",
        paras: [
          "Hery Zo ANDRIAMIARANA — CEO & Founder, Kazak Ltd. & Kazak Mining Hub. Coordonnées ci-dessus.",
        ],
      },
      {
        heading: "Hébergement",
        paras: [
          "Ce site est hébergé par Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis — www.netlify.com.",
        ],
      },
      {
        heading: "Propriété intellectuelle",
        paras: [
          "L'ensemble des contenus de ce site (textes, images, logos, vidéos, données), sauf mention contraire, est la propriété de Kazak Ltd. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.",
        ],
      },
      {
        heading: "Avertissement",
        paras: [
          "Les informations présentées sur ce site, y compris les listes de projets, les statuts de permis et les descriptions géologiques, sont fournies à titre indicatif et ne constituent ni une offre, ni une garantie juridique, ni un conseil en investissement. Les investisseurs restent responsables de leur propre due diligence. Kazak Ltd. ne saurait être tenue responsable des décisions prises sur la base du contenu de ce site.",
        ],
      },
      {
        heading: "Droit applicable",
        paras: [
          "Le présent site et ses mentions légales sont régis par le droit de la République de Madagascar. Tout litige sera soumis aux tribunaux compétents d'Antananarivo.",
        ],
      },
    ],
  },
};

const LegalNoticeContent: React.FC = () => {
  const { locale } = useLanguage();
  const c = CONTENT[locale];
  return (
    <LegalShell title={c.title} updated={c.updated}>
      {c.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.paras?.map((p, i) => (
            <p key={i} className="whitespace-pre-line">
              {p}
            </p>
          ))}
        </section>
      ))}
    </LegalShell>
  );
};

export default LegalNoticeContent;
