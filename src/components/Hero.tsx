"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FaWhatsapp, FaArrowDown, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  const { t, isRTL } = useLanguage();
  const [bgError, setBgError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const valueProps = [
    { title: t.hero.badge1 },
    { title: t.hero.badge2 },
    { title: t.hero.badge3 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center hero-bg overflow-hidden pt-28 pb-16"
    >
      {/* Background Image Layer with Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {!bgError ? (
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover opacity-20 mix-blend-luminosity"
            onError={() => setBgError(true)}
          />
        ) : null}
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Radial highlight */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="container-x px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-5xl mx-auto">
        {/* Prominent Company Hero Logo */}
        {!logoError ? (
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logo.png"
              alt="Bait Al Ameer Official Logo"
              width={350}
              height={112}
              priority
              className="h-24 md:h-28 w-auto mx-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
              onError={() => setLogoError(true)}
            />
          </div>
        ) : (
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl mb-6 shadow-xl">
            <span className="text-white font-black text-2xl md:text-3xl tracking-widest text-accent-light">BA</span>
          </div>
        )}

        {/* Top Location Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm font-medium mb-8">
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
          <span>
            {isRTL
              ? "الشارقة — المنطقة الصناعية 15 — ص.ب: 26271"
              : "Sharjah — Industrial Area 15 — P.O. Box: 26271"}
          </span>
        </div>

        {/* High-Impact Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] tracking-tight mb-6 max-w-4xl mx-auto">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-steel-200/90 leading-relaxed max-w-3xl mx-auto mb-10">
          {t.hero.subtitle}
        </p>

        {/* Value Proposition Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {valueProps.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-900/80 border border-white/15 backdrop-blur-sm text-white/90 text-xs sm:text-sm font-semibold shadow-md"
            >
              <FaCheckCircle className="text-accent text-sm shrink-0" />
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        {/* Primary Call-to-Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#catalog" className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base">
            <FaArrowDown className="text-sm" />
            <span>{t.hero.cta1}</span>
          </a>
          <a
            href="https://wa.me/971505005694"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto px-8 py-3.5 text-base"
          >
            <FaWhatsapp className="text-xl" />
            <span>{t.hero.cta2}</span>
          </a>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
