"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  FaWarehouse,
  FaIndustry,
  FaTruckLoading,
  FaCertificate,
  FaPhoneAlt,
} from "react-icons/fa";

export default function About() {
  const { t, isRTL } = useLanguage();

  const stats = [
    { value: t.about.stat1Value, label: t.about.stat1Label },
    { value: t.about.stat2Value, label: t.about.stat2Label },
    { value: t.about.stat3Value, label: t.about.stat3Label },
    { value: t.about.stat4Value, label: t.about.stat4Label },
  ];

  const highlights = [
    {
      icon: FaWarehouse,
      title: isRTL ? "مستودع ضخم بالشارقة" : "Sharjah Central Hub",
      desc: isRTL
        ? "موقع استراتيجي بالمنطقة الصناعية 15 لتغطية فورية لأسواق دبي والشارقة والإمارات الشمالية."
        : "Strategically located in Ind. Area 15 for prompt logistics across Dubai, Sharjah & Northern Emirates.",
    },
    {
      icon: FaIndustry,
      title: isRTL ? "تثبيتات ميكانيكية متطورة" : "Mechanical Stone Cladding",
      desc: isRTL
        ? "براكيتات وزوايا ومسامير ستانلس ستيل مصممة لتحمل أوزان الواجهات الحجرية الثقيلة."
        : "Stainless steel brackets, angles, and anchor systems engineered for heavy stone facade dead loads.",
    },
    {
      icon: FaCertificate,
      title: isRTL ? "مطابقة للمواصفات القياسية" : "Certified Specifications",
      desc: isRTL
        ? "سبائك معتمدة 304 و 316 بحري وغراء عالي الالتصاق بتركيبة إيطالية أصلية."
        : "Certified 304 & 316 marine alloys paired with authentic high-adhesion Italian mastic formulas.",
    },
    {
      icon: FaTruckLoading,
      title: isRTL ? "توريد فوري للمشاريع" : "Rapid Contractor Supply",
      desc: isRTL
        ? "جاهزية تامة لتلبية طلبيات المقاولين والاستشاريين الكبرى دون تأخير زمني."
        : "Comprehensive stock ready for immediate dispatch to high-volume commercial and residential projects.",
    },
  ];

  return (
    <section id="about" className="section-pad bg-steel-50/60 border-b border-steel-200">
      <div className="container-x">
        {/* Header Tag & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">{t.about.sectionTag}</span>
          <h2 className="section-title">{t.about.sectionTitle}</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-steel-700 leading-relaxed text-base sm:text-lg">
            <p className="font-semibold text-navy-800 text-lg sm:text-xl">
              {t.about.p1}
            </p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="tel:+971505005694"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-navy-800 hover:bg-navy-900 text-white font-semibold rounded-lg text-sm shadow transition-all duration-200"
              >
                <FaPhoneAlt className="text-accent-light" />
                <span>+971 50 5005694</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white font-semibold rounded-lg text-sm transition-all duration-200"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-steel-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-navy-800/10 text-navy-800 flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-steel-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-navy-800 text-white rounded-2xl p-6 sm:p-10 shadow-xl">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-3 sm:p-4">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-accent-orange mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-steel-300 text-xs sm:text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
