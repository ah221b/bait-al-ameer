"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  FaIdCard,
  FaShieldAlt,
  FaBoxes,
  FaUserTie,
  FaCheckDouble,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const { t, isRTL } = useLanguage();

  const trustBadges = [
    {
      icon: FaIdCard,
      title: t.whyUs.badge1Title,
      desc: t.whyUs.badge1Desc,
      highlight: "TRN: 104368215000003",
      accentBg: "bg-blue-600/10 text-blue-700",
      borderColor: "border-blue-200",
    },
    {
      icon: FaShieldAlt,
      title: t.whyUs.badge2Title,
      desc: t.whyUs.badge2Desc,
      highlight: "AMR 304 / AMR 316 Marine Grade",
      accentBg: "bg-red-600/10 text-accent",
      borderColor: "border-red-200",
    },
    {
      icon: FaBoxes,
      title: t.whyUs.badge3Title,
      desc: t.whyUs.badge3Desc,
      highlight: isRTL ? "مستودع المنطقة 15 — الشارقة" : "Sharjah Ind. Area 15 Hub",
      accentBg: "bg-amber-600/10 text-amber-700",
      borderColor: "border-amber-200",
    },
    {
      icon: FaUserTie,
      title: t.whyUs.badge4Title,
      desc: t.whyUs.badge4Desc,
      highlight: isRTL ? "استشارات هندسية وفنية" : "Technical Consultation",
      accentBg: "bg-emerald-600/10 text-emerald-700",
      borderColor: "border-emerald-200",
    },
  ];

  return (
    <section id="why-us" className="section-pad bg-steel-100/70 border-b border-steel-200">
      <div className="container-x">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">{t.whyUs.sectionTag}</span>
          <h2 className="section-title">{t.whyUs.sectionTitle}</h2>
          <p className="section-subtitle">{t.whyUs.sectionSubtitle}</p>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        {/* 4 Trust Badges Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-7 border ${badge.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-xl ${badge.accentBg} flex items-center justify-center mb-6 text-2xl shadow-sm`}
                >
                  <badge.icon />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3 leading-snug">
                  {badge.title}
                </h3>
                <p className="text-steel-600 text-sm leading-relaxed mb-6">
                  {badge.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-steel-100 flex items-center gap-2 text-xs font-semibold text-navy-800">
                <FaCheckDouble className="text-accent text-sm shrink-0" />
                <span className="tracking-wide font-mono">{badge.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
