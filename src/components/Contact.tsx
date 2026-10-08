"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-x">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">{t.contact.sectionTag}</span>
          <h2 className="section-title">{t.contact.sectionTitle}</h2>
          <p className="section-subtitle">{t.contact.sectionSubtitle}</p>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone Call Card */}
          <div className="bg-steel-50 rounded-2xl p-6 border border-steel-200 hover:border-navy-800 transition-all duration-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-navy-800 text-white flex items-center justify-center mb-5 text-xl">
                <FaPhoneAlt />
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-2">
                {t.contact.callUs}
              </h3>
              <p className="text-steel-600 text-xs sm:text-sm mb-4">
                {isRTL
                  ? "تواصل مباشرة مع مسؤولي المبيعات"
                  : "Direct line for orders & inquiries"}
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-steel-200/60">
              <a
                href="tel:+971505005694"
                className="block text-sm sm:text-base font-bold text-navy-800 hover:text-accent transition-colors"
                dir="ltr"
              >
                +971 50 5005694
              </a>
              <a
                href="tel:+971504670299"
                className="block text-sm sm:text-base font-bold text-navy-800 hover:text-accent transition-colors"
                dir="ltr"
              >
                +971 50 4670299
              </a>
            </div>
          </div>

          {/* WhatsApp Direct Card */}
          <div className="bg-[#25d366]/5 rounded-2xl p-6 border border-[#25d366]/30 hover:border-[#25d366] transition-all duration-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#25d366] text-white flex items-center justify-center mb-5 text-2xl shadow-md">
                <FaWhatsapp />
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-2">
                {t.contact.whatsappUs}
              </h3>
              <p className="text-steel-600 text-xs sm:text-sm mb-4">
                {isRTL
                  ? "رد فوري وعروض أسعار سريعة"
                  : "Instant response & fast price quotation"}
              </p>
            </div>
            <div className="pt-2 border-t border-[#25d366]/20">
              <a
                href="https://wa.me/971505005694"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center !py-2.5"
              >
                <FaWhatsapp className="text-lg" />
                <span>{t.nav.getQuote}</span>
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-steel-50 rounded-2xl p-6 border border-steel-200 hover:border-navy-800 transition-all duration-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-5 text-xl">
                <FaEnvelope />
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-2">
                {t.contact.emailUs}
              </h3>
              <p className="text-steel-600 text-xs sm:text-sm mb-4">
                {isRTL
                  ? "لطلبات المشاريع والمناقصات"
                  : "Send RFQs & tender inquiries"}
              </p>
            </div>
            <div className="pt-2 border-t border-steel-200/60">
              <a
                href="mailto:baitalameer0@gmail.com"
                className="text-xs sm:text-sm font-bold text-navy-800 hover:text-accent transition-colors break-all"
              >
                baitalameer0@gmail.com
              </a>
            </div>
          </div>

          {/* Location & Warehouse Card */}
          <div className="bg-steel-50 rounded-2xl p-6 border border-steel-200 hover:border-navy-800 transition-all duration-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-navy-800 text-white flex items-center justify-center mb-5 text-xl">
                <FaMapMarkerAlt />
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-2">
                {t.contact.visitUs}
              </h3>
              <p className="text-steel-600 text-xs sm:text-sm leading-relaxed mb-1 font-medium">
                {t.contact.address}
              </p>
              <p className="text-steel-500 text-xs">{t.contact.poBox}</p>
            </div>
            <div className="pt-2 border-t border-steel-200/60 flex items-center gap-2 text-xs text-steel-600">
              <FaClock className="text-accent shrink-0" />
              <span>
                {isRTL
                  ? "السبت - الخميس: 8:00 ص - 8:00 م"
                  : "Sat - Thu: 8:00 AM - 8:00 PM"}
              </span>
            </div>
          </div>
        </div>

        {/* Map & Facility Location Block */}
        <div className="rounded-2xl overflow-hidden border border-steel-200 shadow-lg bg-steel-100">
          <div className="p-4 sm:p-6 bg-navy-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-accent-light font-bold mb-1">
                {isRTL ? "الموقع الجغرافي" : "Facility Location"}
              </p>
              <h4 className="text-lg sm:text-xl font-bold">
                {isRTL
                  ? "الشارقة — المنطقة الصناعية 15"
                  : "Sharjah — Industrial Area 15"}
              </h4>
            </div>
            <a
              href="https://maps.google.com/?q=Industrial+Area+15+Sharjah+UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-lg border border-white/20 transition-colors"
            >
              <FaMapMarkerAlt className="text-accent" />
              <span>{isRTL ? "فتح في خرائط جوجل" : "Open in Google Maps"}</span>
            </a>
          </div>

          {/* Interactive Google Maps Embed */}
          <div className="relative w-full h-[360px] sm:h-[420px]">
            <iframe
              title="Bait Al Ameer Location - Industrial Area 15 Sharjah"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14435.845892546416!2d55.42672685!3d25.3055458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f464010a307%3A0xe54e176bfe467f51!2sIndustrial%20Area%2015%20-%20Sharjah!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
