import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout";
import Preloader from "@/components/Preloader";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import LangUpdater from "@/components/LangUpdater";
import { siteUrl, siteName, siteDescription } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kazak Mining Hub — Your Trusted Partner for Mining Investment in Madagascar",
    template: "%s | Kazak Mining Hub",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Kazak Mining Hub",
    "Madagascar mining",
    "mining investment",
    "strategic minerals",
    "gold mining Madagascar",
    "lithium Madagascar",
    "graphite Madagascar",
    "rare earth elements",
    "due diligence mining",
  ],
  authors: [{ name: "Kazak Mining Hub" }],
  creator: "Kazak Mining Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Kazak Mining Hub",
    title: "Kazak Mining Hub — Your Trusted Partner for Mining Investment in Madagascar",
    description:
      "Buy Verified Mining Sites. Invest with Confidence. Comprehensive investment support in Madagascar.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kazak Mining Hub — Madagascar Mining Investment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kazak Mining Hub — Your Trusted Partner for Mining Investment in Madagascar",
    description:
      "Buy Verified Mining Sites. Invest with Confidence. Comprehensive investment support in Madagascar.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerif.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteName,
              url: siteUrl,
              logo: `${siteUrl}/images/kazak-logo.png`,
              description: siteDescription,
              areaServed: {
                "@type": "Country",
                name: "Madagascar",
              },
              sameAs: [],
            }),
          }}
        />
        <LanguageProvider>
          <LangUpdater />
          <Preloader />
          <form
            name="kazak-contact"
            netlify-honeypot="bot-field"
            data-netlify="true"
            hidden
          >
            <input type="hidden" name="form-name" value="kazak-contact" />
            <input name="bot-field" />
            <input name="name" />
            <input name="email" />
            <input name="company" />
            <input name="interest" />
            <textarea name="message" />
          </form>
          <Layout>{children}</Layout>
        </LanguageProvider>
      </body>
    </html>
  );
}
