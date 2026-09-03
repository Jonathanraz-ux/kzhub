"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "@/data/mockData";
import { Mail, Phone, MapPin, MessageCircle, Send, Building2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact: React.FC = () => {
  const { t, locale } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const phoneLines = [
    {
      display: contactInfo.phoneMadagascarDisplay,
      href: contactInfo.phoneMadagascarTel,
      aria: `${contactInfo.phoneMadagascarDisplay} — Madagascar`,
    },
    {
      display: contactInfo.phoneIntlDisplay,
      href: contactInfo.phoneIntlTel,
      aria: `${contactInfo.phoneIntlDisplay} — International`,
    },
  ];

  const whatsappLines = [
    {
      display: contactInfo.phoneMadagascarDisplay,
      href: contactInfo.phoneMadagascarWa,
    },
    {
      display: contactInfo.phoneIntlDisplay,
      href: contactInfo.phoneIntlWa,
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) {
      setErrorMessage(locale === "fr" ? "Veuillez saisir votre nom." : "Please enter your name.");
      return;
    }
    if (!email || !EMAIL_RE.test(email)) {
      setErrorMessage(locale === "fr" ? "Veuillez saisir une adresse e-mail valide." : "Please enter a valid email address.");
      return;
    }
    if (!interest) {
      setErrorMessage(locale === "fr" ? "Veuillez sélectionner un domaine d\u2019intérêt." : "Please select an area of interest.");
      return;
    }
    if (!message) {
      setErrorMessage(locale === "fr" ? "Veuillez saisir votre message." : "Please enter your message.");
      return;
    }

    setLoading(true);

    try {
      const payload = new URLSearchParams();
      payload.append("form-name", "kazak-contact");
      payload.append("name", name);
      payload.append("email", email);
      payload.append("company", company);
      payload.append("interest", interest);
      payload.append("message", message);

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setSubmitted(true);
      form.reset();
    } catch {
      setErrorMessage(t.formErrorDesc);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            {t.contactLabel}
          </p>
          <h2 className="text-3xl md:text-5xl text-cream mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-cream/40 max-w-xl mx-auto text-sm">
            {t.contactDesc}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="border border-white/[0.06] rounded-xl p-5 bg-gradient-to-b from-white/[0.02] to-transparent">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-cream mb-1">{t.officeLabel}</p>
                  <p className="text-sm text-cream/40">{contactInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="border border-white/[0.06] rounded-xl p-5 bg-gradient-to-b from-white/[0.02] to-transparent">
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-cream mb-1">{t.emailLabel}</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm text-cream/40 hover:text-gold-400 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-white/[0.06] rounded-xl p-5 bg-gradient-to-b from-white/[0.02] to-transparent">
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-cream mb-1">{t.phoneLabel}</p>
                  <div className="space-y-1">
                    {phoneLines.map((line) => (
                      <a
                        key={line.href}
                        href={line.href}
                        aria-label={line.aria}
                        className="block text-sm text-cream/40 hover:text-gold-400 transition-colors break-words"
                      >
                        {line.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-white/[0.06] rounded-xl p-5 bg-gradient-to-b from-white/[0.02] to-transparent">
              <div className="flex items-start gap-4">
                <MessageCircle size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-cream mb-1">{t.whatsappLabel}</p>
                  <div className="space-y-1">
                    {whatsappLines.map((line) => (
                      <a
                        key={line.href}
                        href={line.href}
                        className="block text-sm text-cream/40 hover:text-gold-400 transition-colors break-words"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {line.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-white/[0.06] rounded-xl p-5 bg-gradient-to-b from-white/[0.02] to-transparent">
              <div className="flex items-start gap-4">
                <Building2 size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-cream mb-2">{t.legalInfoTitle}</p>
                  <div className="space-y-1">
                    <p className="text-sm text-cream/40">
                      <span className="font-medium text-cream/60">Kazak Ltd</span>
                    </p>
                    <p className="text-sm text-cream/40">
                      {t.legalFormLabel}: <span className="text-cream/60">S.A.R.L.</span>
                    </p>
                    <p className="text-sm text-cream/40">
                      {t.legalNifLabel}: <span className="text-cream/60">5011843954</span>
                    </p>
                    <p className="text-sm text-cream/40">
                      {t.legalRcsLabel}: <span className="text-cream/60">Antananarivo 2022 B 00685</span>
                    </p>
                    <p className="text-sm text-cream/40">
                      {t.legalStatLabel}: <span className="text-cream/60">66122 11 2022 0 10703</span>
                    </p>
                    <p className="text-sm text-cream/40">
                      {t.legalSiegeLabel}: <span className="text-cream/60">ASI 341 Bis Ambodifasina</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="border border-white/[0.06] rounded-xl p-6 md:p-8 bg-gradient-to-b from-white/[0.02] to-transparent"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center mb-5">
                  <Send size={24} className="text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">
                  {t.formSuccessTitle}
                </h3>
                <p className="text-sm text-cream/40">
                  {t.formSuccessDesc}
                </p>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                name="kazak-contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                noValidate
              >
                <input type="hidden" name="form-name" value="kazak-contact" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">{t.formName}</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder={t.formName}
                      required
                      maxLength={100}
                      autoComplete="name"
                      className="w-full rounded-lg px-4 py-3 bg-black/20 border border-white/[0.08] text-cream text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold-500/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">{t.formEmail}</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder={t.formEmail}
                      required
                      maxLength={254}
                      autoComplete="email"
                      className="w-full rounded-lg px-4 py-3 bg-black/20 border border-white/[0.08] text-cream text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold-500/40 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-company" className="sr-only">{t.formCompany}</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    placeholder={t.formCompany}
                    maxLength={150}
                    autoComplete="organization"
                    className="w-full rounded-lg px-4 py-3 bg-black/20 border border-white/[0.08] text-cream text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold-500/40 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-interest" className="sr-only">{t.formInterest}</label>
                  <select
                    id="contact-interest"
                    name="interest"
                    required
                    defaultValue=""
                    className="w-full rounded-lg px-4 py-3 bg-black/20 border border-white/[0.08] text-cream text-sm focus:outline-none focus:border-gold-500/40 transition-colors"
                  >
                    <option value="" disabled className="bg-anthracite">
                      {t.formInterest}
                    </option>
                    <option value="buy-site" className="bg-anthracite">{t.formInterestInvestment}</option>
                    <option value="joint-venture" className="bg-anthracite">{t.formInterestPartnership}</option>
                    <option value="expand-portfolio" className="bg-anthracite">{t.formInterestPortfolio}</option>
                    <option value="due-diligence" className="bg-anthracite">{t.formInterestDueDiligence}</option>
                    <option value="other" className="bg-anthracite">{t.formInterestOther}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">{t.formMessage}</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder={t.formMessage}
                    required
                    rows={4}
                    maxLength={2000}
                    className="w-full rounded-lg px-4 py-3 bg-black/20 border border-white/[0.08] text-cream text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold-500/40 transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <p className="text-sm text-red-400" role="alert">
                    {errorMessage}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 bg-gold-500 text-graphite font-semibold text-sm rounded-lg hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? t.formSending : t.formSubmit}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
