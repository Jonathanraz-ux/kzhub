"use client";
import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { contactInfo } from "@/data/mockData";
import { LegalShell } from "@/components/LegalShell";

type Section = { heading: string; paras?: string[]; bullets?: string[] };
type Content = { title: string; updated: string; sections: Section[] };

const CONTENT: Record<"en" | "fr", Content> = {
  en: {
    title: "Privacy Policy",
    updated: "August 24, 2026",
    sections: [
      {
        heading: "Overview",
        paras: [
          'Kazak Mining Hub, a division of Kazak Ltd. ("we"), respects your privacy. This policy explains what personal data is collected through this website and how it is used.',
        ],
      },
      {
        heading: "Data We Collect",
        paras: [
          "The contact form on this website collects the information you choose to provide: full name, email address, company/organization, area of interest and message.",
          "When you submit the form, your message is transmitted through WhatsApp to our team. It is not stored on the website's servers.",
        ],
      },
      {
        heading: "How We Use Your Data",
        bullets: [
          "To respond to your inquiries and requests.",
          "To provide information about mining investment opportunities.",
          "We do not sell, rent or share your personal data with third parties for marketing purposes.",
        ],
      },
      {
        heading: "Cookies & Analytics",
        paras: [
          "This website does not currently set advertising cookies. A Google Analytics 4 integration is prepared but disabled; if activated in the future, anonymous usage statistics may be collected and this policy will be updated accordingly.",
        ],
      },
      {
        heading: "Third-Party Services",
        paras: [
          "This website embeds content from third parties that may process data under their own privacy policies:",
        ],
        bullets: [
          "WhatsApp (Meta Platforms) — contact form transmission;",
          "Google Maps — office location display;",
          "Image hosting providers (e.g., Unsplash) for illustrative media.",
        ],
      },
      {
        heading: "Your Rights",
        paras: [
          `You may request access to, rectification or deletion of the personal data you have shared with us by writing to ${contactInfo.email}.`,
        ],
      },
      {
        heading: "Changes to This Policy",
        paras: [
          "We may update this policy from time to time. Any changes will be published on this page with an updated revision date.",
        ],
      },
    ],
  },
  fr: {
    title: "Politique de Confidentialité",
    updated: "24 août 2026",
    sections: [
      {
        heading: "Aperçu",
        paras: [
          'Kazak Mining Hub, division de Kazak Ltd. (« nous »), respecte votre vie privée. La présente politique explique quelles données personnelles sont collectées via ce site et comment elles sont utilisées.',
        ],
      },
      {
        heading: "Données Collectées",
        paras: [
          "Le formulaire de contact de ce site collecte les informations que vous choisissez de fournir : nom complet, adresse e-mail, entreprise/organisation, domaine d'intérêt et message.",
          "Lorsque vous soumettez le formulaire, votre message est transmis via WhatsApp à notre équipe. Il n'est pas stocké sur les serveurs du site.",
        ],
      },
      {
        heading: "Utilisation de Vos Données",
        bullets: [
          "Répondre à vos demandes et questions.",
          "Fournir des informations sur les opportunités d'investissement minier.",
          "Nous ne vendons, ne louons et ne partageons pas vos données personnelles avec des tiers à des fins commerciales.",
        ],
      },
      {
        heading: "Cookies & Analytique",
        paras: [
          "Ce site ne dépose actuellement pas de cookies publicitaires. Une intégration Google Analytics 4 est préparée mais désactivée ; si elle est activée à l'avenir, des statistiques d'utilisation anonymes pourront être collectées et la présente politique sera mise à jour en conséquence.",
        ],
      },
      {
        heading: "Services Tiers",
        paras: [
          "Ce site intègre des contenus de tiers susceptibles de traiter des données selon leurs propres politiques de confidentialité :",
        ],
        bullets: [
          "WhatsApp (Meta Platforms) — transmission du formulaire de contact ;",
          "Google Maps — affichage de la localisation du bureau ;",
          "Hébergeurs d'images (ex. Unsplash) pour les médias illustratifs.",
        ],
      },
      {
        heading: "Vos Droits",
        paras: [
          `Vous pouvez demander l'accès aux données personnelles que vous avez partagées avec nous, leur rectification ou leur suppression en écrivant à ${contactInfo.email}.`,
        ],
      },
      {
        heading: "Modifications de Cette Politique",
        paras: [
          "Nous pouvons mettre à jour cette politique de temps à autre. Toute modification sera publiée sur cette page avec une date de révision mise à jour.",
        ],
      },
    ],
  },
};

const PrivacyContent: React.FC = () => {
  const { locale } = useLanguage();
  const c = CONTENT[locale];
  return (
    <LegalShell title={c.title} updated={c.updated}>
      {c.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.paras?.map((p, i) => (
            <p key={`p${i}`}>{renderEmailLink(p)}</p>
          ))}
          {s.bullets && (
            <ul>
              {s.bullets.map((b, i) => (
                <li key={`b${i}`}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </LegalShell>
  );
};

function renderEmailLink(text: string): React.ReactNode {
  const parts = text.split(contactInfo.email);
  if (parts.length === 1) return text;
  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [
          part,
          <a key={`m${i}`} href={`mailto:${contactInfo.email}`}>
            {contactInfo.email}
          </a>,
        ]
      : [part]
  );
}

export default PrivacyContent;
