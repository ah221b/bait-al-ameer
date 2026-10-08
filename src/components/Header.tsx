"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FaWhatsapp, FaBars, FaTimes, FaGlobe } from "react-icons/fa";

export default function Header() {
  const { t, toggleLang, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.catalog, href: "#catalog" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-900/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/10"
          : "bg-navy-950/70 backdrop-blur-sm py-5 border-b border-white/5"
      }`}
    >
      <div className="container-x flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3.5 group shrink-0">
          <div className="relative w-11 h-11 bg-accent rounded-lg flex items-center justify-center overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-200">
            {!logoError ? (
              <Image
                src="/images/logo.png"
                alt="Bait Al Ameer Logo"
                fill
                className="object-contain p-1"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="text-white font-extrabold text-xl tracking-wider">BA</span>
            )}
          </div>
          <div>
            <p className="text-white font-bold text-base sm:text-lg leading-tight tracking-tight">
              {isRTL ? "بيت الأمير" : "BAIT AL AMEER"}
            </p>
            <p className="text-steel-400 text-xs sm:text-[13px] leading-tight font-medium">
              {isRTL ? "لتجارة أدوات البناء ذ.م.م" : "Bldg. Tools Tr. L.L.C"}
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white font-medium text-sm tracking-wide
                         transition-colors duration-200 relative py-1 after:content-['']
                         after:absolute after:bottom-0 after:left-0 after:w-0
                         after:h-[2px] after:bg-accent after:transition-all
                         after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full
                       border border-white/20 bg-white/5 hover:bg-white/10 text-white/90 hover:text-white
                       hover:border-white/40 transition-all duration-200 text-xs sm:text-sm font-medium"
            aria-label="Switch language"
          >
            <FaGlobe className="text-accent-light" />
            <span>{t.nav.langSwitch}</span>
          </button>

          {/* WhatsApp "Get a Quote" CTA */}
          <a
            href="https://wa.me/971505005694"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex btn-whatsapp"
          >
            <FaWhatsapp className="text-lg" />
            <span>{t.nav.getQuote}</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-navy-950/95 backdrop-blur-md border-t border-white/10 px-6 py-5 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2.5 text-white/85 hover:text-white font-medium
                         border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="https://wa.me/971505005694"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              <FaWhatsapp className="text-lg" />
              <span>{t.nav.getQuote}</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
