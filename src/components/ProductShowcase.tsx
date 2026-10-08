"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { products, type Product } from "@/data/products";
import {
  FaWhatsapp,
  FaSearchPlus,
  FaTimes,
  FaLayerGroup,
  FaCheck,
} from "react-icons/fa";

type FilterCategory = "all" | Product["category"];

export default function ProductShowcase() {
  const { t, lang, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  const filters: { key: FilterCategory; label: string }[] = [
    { key: "all", label: t.catalog.filterAll },
    { key: "adhesives", label: t.catalog.filterAdhesives },
    { key: "fixings", label: t.catalog.filterFixings },
    { key: "discs", label: t.catalog.filterDiscs },
    { key: "waterproofing", label: t.catalog.filterWaterproofing },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const getCategoryLabel = (category: Product["category"]) => {
    switch (category) {
      case "adhesives":
        return lang === "ar" ? "غراء ولاصق الرخام" : "Marble Adhesives";
      case "fixings":
        return lang === "ar" ? "تثبيتات ستانلس ستيل" : "SS Fixings";
      case "discs":
        return lang === "ar" ? "أقراص قص وجلي" : "Cutting & Grinding Discs";
      case "waterproofing":
        return lang === "ar" ? "عزل وبيتومين" : "Waterproofing";
    }
  };

  return (
    <section id="catalog" className="section-pad bg-white">
      <div className="container-x">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-tag">{t.catalog.sectionTag}</span>
          <h2 className="section-title">{t.catalog.sectionTitle}</h2>
          <p className="section-subtitle">{t.catalog.sectionSubtitle}</p>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
          {filters.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={isActive ? "filter-pill-active" : "filter-pill"}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product) => {
            const name = lang === "ar" ? product.nameAr : product.nameEn;
            const desc = lang === "ar" ? product.descAr : product.descEn;
            const categoryLabel = getCategoryLabel(product.category);

            const whatsappMessage = encodeURIComponent(
              lang === "ar"
                ? `مرحباً بيت الأمير، أود الاستفسار عن المنتج: ${product.nameAr}`
                : `Hello Bait Al Ameer, I would like to inquire about: ${product.nameEn}`
            );

            return (
              <div
                key={product.id}
                className="card-product group flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Container with Lightbox Trigger */}
                  <div
                    onClick={() => setSelectedProduct(product)}
                    className="relative h-60 w-full bg-steel-100 overflow-hidden cursor-pointer"
                  >
                    <ImageCard
                      src={product.image}
                      alt={name}
                      fallbackText={name}
                    />

                    {/* Category Pill on Image */}
                    <span
                      className={`absolute top-3 ${
                        isRTL ? "right-3" : "left-3"
                      } bg-navy-900/85 text-white text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full backdrop-blur-sm shadow z-10`}
                    >
                      {categoryLabel}
                    </span>

                    {/* Hover Overlay with Lightbox Icon */}
                    <div className="absolute inset-0 bg-navy-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <span className="p-3 bg-white/90 text-navy-900 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <FaSearchPlus size={18} />
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5">
                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-bold text-navy-900 text-base leading-snug mb-2 cursor-pointer hover:text-accent transition-colors line-clamp-2"
                    >
                      {name}
                    </h3>
                    <p className="text-steel-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {desc}
                    </p>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="p-5 pt-0">
                  <a
                    href={`https://wa.me/971505005694?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center !py-2.5"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>{t.catalog.inquire}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Responsive Lightbox Modal ──────────────────────── */}
      {selectedProduct && (
        <div
          className="lightbox-backdrop p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-steel-200 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className={`absolute top-4 ${
                isRTL ? "left-4" : "right-4"
              } z-20 w-10 h-10 rounded-full bg-navy-900/80 hover:bg-navy-900 text-white flex items-center justify-center transition-colors shadow-lg`}
              aria-label="Close dialog"
            >
              <FaTimes size={16} />
            </button>

            {/* Modal Image Area */}
            <div className="relative h-72 sm:h-96 w-full bg-steel-100">
              <ImageCard
                src={selectedProduct.image}
                alt={
                  lang === "ar"
                    ? selectedProduct.nameAr
                    : selectedProduct.nameEn
                }
                fallbackText={
                  lang === "ar"
                    ? selectedProduct.nameAr
                    : selectedProduct.nameEn
                }
              />
              <span
                className={`absolute bottom-4 ${
                  isRTL ? "right-4" : "left-4"
                } bg-navy-900 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md`}
              >
                {getCategoryLabel(selectedProduct.category)}
              </span>
            </div>

            {/* Modal Details Area */}
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                {lang === "ar"
                  ? selectedProduct.nameAr
                  : selectedProduct.nameEn}
              </h3>
              <p className="text-steel-600 text-sm sm:text-base leading-relaxed mb-6">
                {lang === "ar"
                  ? selectedProduct.descAr
                  : selectedProduct.descEn}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/971505005694?text=${encodeURIComponent(
                    lang === "ar"
                      ? `مرحباً بيت الأمير، أود الاستفسار وطلب تسعيرة لـ: ${selectedProduct.nameAr}`
                      : `Hello Bait Al Ameer, I would like to request a quote for: ${selectedProduct.nameEn}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full sm:w-auto flex-1 justify-center py-3"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>{t.catalog.inquire}</span>
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full sm:w-auto px-6 py-3 border border-steel-300 text-steel-700 hover:bg-steel-100 font-semibold rounded-lg text-sm transition-colors"
                >
                  {t.catalog.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ImageCard({
  src,
  alt,
  fallbackText,
}: {
  src: string;
  alt: string;
  fallbackText: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-navy-900/10 via-steel-100 to-navy-900/5 p-6 text-center select-none">
        <div className="w-14 h-14 rounded-xl bg-navy-800/10 flex items-center justify-center text-navy-700 mb-3">
          <FaLayerGroup size={24} />
        </div>
        <p className="text-xs sm:text-sm font-semibold text-navy-900/80 line-clamp-2">
          {fallbackText}
        </p>
        <span className="text-[11px] text-steel-500 mt-1 font-mono">
          {src.replace("/images/", "")}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover img-zoom"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      onError={() => setError(true)}
    />
  );
}
