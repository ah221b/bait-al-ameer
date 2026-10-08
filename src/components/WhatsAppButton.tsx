"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const { isRTL } = useLanguage();

  return (
    <aside aria-label="WhatsApp quick contact">
      <a
        href="https://wa.me/971505005694"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 ${
          isRTL ? "left-6" : "right-6"
        } z-40 group flex items-center gap-3 wa-float`}
        aria-label="Direct WhatsApp Contact"
      >
        <span
          className="hidden sm:inline-block px-3.5 py-1.5 bg-navy-900/90 text-white text-xs font-semibold rounded-full shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none backdrop-blur-sm"
        >
          {isRTL ? "تواصل واتساب" : "WhatsApp Sales"}
        </span>
        <div className="w-14 h-14 bg-[#25d366] hover:bg-[#1da851] rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform group-hover:scale-110">
          <FaWhatsapp size={32} />
        </div>
      </a>
    </aside>
  );
}
