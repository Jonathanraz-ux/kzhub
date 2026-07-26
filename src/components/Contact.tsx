"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "@/data/mockData";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
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
                <div>
                  <p className="text-sm font-medium text-cream mb-1">{t.phoneLabel}</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-sm text-cream/40 hover:text-gold-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-white/[0.06] rounded-xl p-5 bg-gradient-to-b from-white/[0.02] to-transparent">
              <div className="flex items-start gap-4">
                <MessageCircle size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-cream mb-1">{t.whatsappLabel}</p>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, "")}`}
                    className="text-sm text-cream/40 hover:text-gold-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactInfo.whatsapp}
                  </a>
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
                <p className="text-[10px] text-cream/20 mt-6 uppercase tracking-wider">
                  Demo Version &mdash; Mockup
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder={t.formName}
                    required
                    className="rounded-lg px-4 py-3 bg-black/20 border border-white/[0.08] text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold-500/40 transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t.formEmail}
                    required
                    className="rounded-lg px-4 py-3 bg-black/20 border border-white/[0.08] text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold-500/40 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  name="company"
                  placeholder={t.formCompany}
                  className="rounded-lg px-4 py-3 bg-black/20 border border-white/[0.08] text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold-500/40 transition-colors"
                />
                <select
                  name="interest"
                  className="rounded-lg px-4 py-3 bg-black/20 border border-white/[0.08] text-cream text-sm focus:outline-none focus:border-gold-500/40 transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-anthracite">
                    {t.formInterest}
                  </option>
                  <option value="buy-site" className="bg-anthracite">Buy Verified Mining Site</option>
                  <option value="joint-venture" className="bg-anthracite">Establish Joint Venture</option>
                  <option value="expand-portfolio" className="bg-anthracite">Expand Mining Portfolio</option>
                  <option value="due-diligence" className="bg-anthracite">Due Diligence & Permits Support</option>
                  <option value="other" className="bg-anthracite">{t.formInterestOther}</option>
                </select>
                <textarea
                  name="message"
                  placeholder={t.formMessage}
                  required
                  rows={4}
                  className="rounded-lg px-4 py-3 bg-black/20 border border-white/[0.08] text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold-500/40 transition-colors resize-none"
                />
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gold-500 text-graphite font-semibold text-sm rounded-lg hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold-500/20"
                  >
                    {t.formSubmit}
                  </button>
                  <span className="text-[10px] text-cream/15 uppercase tracking-wider">
                    Demo
                  </span>
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
