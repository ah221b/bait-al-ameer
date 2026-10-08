"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaFileInvoice,
} from "react-icons/fa";

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.catalog, href: "#catalog" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-navy-950 text-white border-t border-white/10">
      {/* Upper CTA Strip */}
      <div className="bg-navy-900 border-b border-white/10 py-10">
        <div className="container-x px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {isRTL
                ? "هل تبحث عن توريد معتمد لمشروعك القادم؟"
                : "Looking for certified materials for your next project?"}
            </h3>
            <p className="text-steel-400 text-sm mt-1">
              {isRTL
                ? "فريقنا متواجد لخدمتك وتقديم أفضل الأسعار التنافسية."
                : "Our technical sales team is ready to provide instant quotations."}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/971505005694"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <FaWhatsapp className="text-lg" />
              <span>{t.nav.getQuote}</span>
            </a>
            <a
              href="tel:+971505005694"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg text-sm border border-white/20 transition-colors"
            >
              <FaPhoneAlt className="text-accent" />
              <span dir="ltr">+971 50 5005694</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Footer Content */}
      <div className="container-x px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Profile */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              {!logoError ? (
                <div className="bg-white p-1.5 px-2.5 rounded-lg shadow-sm border border-white/20 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Bait Al Ameer Logo"
                    width={160}
                    height={44}
                    className="h-9 sm:h-10 w-auto object-contain"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <div className="bg-white p-1.5 px-2.5 rounded-lg shadow-sm border border-white/20 flex items-center justify-center">
                  <span className="text-navy-900 font-extrabold text-base tracking-wider">BA</span>
                </div>
              )}
              <div className="flex flex-col justify-center">
                <p className="font-extrabold text-base tracking-tight leading-tight">
                  {isRTL ? "بيت الأمير" : "BAIT AL AMEER"}
                </p>
                <p className="text-steel-400 text-xs mt-0.5 font-medium">
                  {isRTL ? "لتجارة أدوات البناء ذ.م.م" : "Bldg. Tools Tr. L.L.C"}
                </p>
              </div>
            </div>

            <p className="text-steel-400 text-sm leading-relaxed max-w-md">
              {t.footer.tagline}
            </p>

            {/* Official TRN Verification Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-white/5 border border-white/15 rounded-xl text-xs font-mono text-steel-200">
              <FaFileInvoice className="text-accent text-sm shrink-0" />
              <span>{t.footer.trn}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent-light mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-steel-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-accent text-xs">▸</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent-light mb-4">
              {t.footer.contactInfo}
            </h4>

            <div className="flex items-start gap-3 text-sm text-steel-300">
              <FaMapMarkerAlt className="text-accent shrink-0 mt-1" />
              <div>
                <p>{t.contact.address}</p>
                <p className="text-steel-500 text-xs">{t.contact.poBox}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-steel-300">
              <FaPhoneAlt className="text-accent shrink-0" />
              <div className="space-x-3" dir="ltr">
                <a
                  href="tel:+971505005694"
                  className="hover:text-white transition-colors"
                >
                  +971 50 5005694
                </a>
                <span>/</span>
                <a
                  href="tel:+971504670299"
                  className="hover:text-white transition-colors"
                >
                  +971 50 4670299
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-steel-300">
              <FaWhatsapp className="text-[#25d366] shrink-0 text-base" />
              <a
                href="https://wa.me/971505005694"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                dir="ltr"
              >
                +971 50 5005694 (WhatsApp)
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-steel-300">
              <FaEnvelope className="text-accent shrink-0" />
              <a
                href="mailto:baitalameer0@gmail.com"
                className="hover:text-white transition-colors"
              >
                baitalameer0@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="border-t border-white/10 bg-navy-950/80 py-6">
        <div className="container-x px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel-400">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-2 text-steel-400">
            <FaShieldAlt className="text-accent text-xs" />
            <span>Industrial Area 15, Sharjah, United Arab Emirates</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
