export type Lang = "en" | "ar";

export type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>;
};

const currentYear = new Date().getFullYear();

export const translations = {
  en: {
    dir: "ltr",
    // Navigation
    nav: {
      home: "Home",
      about: "About Us",
      catalog: "Catalog",
      whyUs: "Why Choose Us",
      contact: "Contact",
      getQuote: "Get a Quote",
      langSwitch: "العربية",
    },
    // Hero
    hero: {
      title: "Delivering Quality Construction Materials & Mechanical Marble Fixing Solutions",
      subtitle:
        "Trusted supplier of stainless steel stone-cladding fixings, Italian-formula marble adhesives, and industrial cutting discs from Industrial Area 15, Sharjah.",
      badge1: "High Tensile UAE-Manufactured Fixings",
      badge2: "Italian Formula Mastic",
      badge3: "Certified UAE TRN Supplier",
      cta1: "Explore Catalog",
      cta2: "WhatsApp Sales",
    },
    // About
    about: {
      sectionTag: "About Us",
      sectionTitle: "Your Trusted Building Materials Partner in Sharjah",
      p1: "BAIT AL AMEER Bldg. Tools Tr. L.L.C is a leading trading company headquartered in Industrial Area 15, Sharjah, United Arab Emirates. We specialize in supplying premium construction tools, mechanical marble fixing solutions, and stone-cladding accessories.",
      p2: "With a strong inventory and deep industry expertise, we serve major contractors, facade companies, and stone suppliers across the UAE and GCC. Our product range spans certified AMR 304 & AMR 316 stainless steel anchors, high-quality Italian-formula marble adhesives, industrial-grade cutting and grinding discs, and waterproofing solutions.",
      p3: "Every product we stock is rigorously selected for performance, durability, and compliance with UAE building standards. Our commitment to fast delivery, competitive pricing, and expert technical advice has made us the go-to partner for construction professionals in the region.",
      stat1Value: "15+",
      stat1Label: "Years in the Industry",
      stat2Value: "500+",
      stat2Label: "Products Stocked",
      stat3Value: "2,000+",
      stat3Label: "Projects Supplied",
      stat4Value: "50+",
      stat4Label: "Brand Partners",
    },
    // Catalog
    catalog: {
      sectionTag: "Product Catalog",
      sectionTitle: "Our Products",
      sectionSubtitle: "Browse our comprehensive range of premium construction materials and tools.",
      filterAll: "All Products",
      filterAdhesives: "Marble & Granite Adhesives",
      filterFixings: "Stainless Steel Fixings",
      filterDiscs: "Cutting & Grinding Discs",
      filterWaterproofing: "Waterproofing & Bitumen",
      inquire: "Inquire via WhatsApp",
      close: "Close",
    },
    // Why Choose Us
    whyUs: {
      sectionTag: "Why Choose Us",
      sectionTitle: "Built on Trust, Delivered with Excellence",
      sectionSubtitle: "We are committed to quality, compliance, and rapid supply across the UAE.",
      badge1Title: "Official UAE TRN Registered",
      badge1Desc: "Fully licensed and tax-registered under TRN: 104368215000003, ensuring compliant and transparent business transactions.",
      badge2Title: "AMR 304 & 316 Certified Alloys",
      badge2Desc: "Our stainless steel fixings use certified AMR 304 and marine-grade AMR 316 alloys for maximum corrosion resistance and structural integrity.",
      badge3Title: "Immediate Supply from Sharjah",
      badge3Desc: "Large inventory maintained at our Industrial Area 15 warehouse, enabling same-day dispatch and rapid delivery across the UAE and GCC.",
      badge4Title: "Expert Technical Support",
      badge4Desc: "Our experienced team provides on-site guidance, product recommendations, and after-sales support for every project.",
    },
    // Contact
    contact: {
      sectionTag: "Get In Touch",
      sectionTitle: "Contact Us",
      sectionSubtitle: "Ready to discuss your project requirements? Reach out to our sales team today.",
      callUs: "Call Us",
      whatsappUs: "WhatsApp Us",
      emailUs: "Email Us",
      visitUs: "Visit Us",
      address: "Industrial Area 15, Sharjah, UAE",
      poBox: "P.O. Box: 26271",
      mapPlaceholder: "Industrial Area 15, Sharjah",
    },
    // Footer
    footer: {
      tagline: "Your trusted partner for premium construction tools, marble fixings, and stone-cladding accessories in the UAE.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      legal: "Legal",
      trn: "TRN: 104368215000003",
      copyright: `© ${currentYear} BAIT AL AMEER Bldg. Tools Tr. L.L.C — All Rights Reserved.`,
    },
  },

  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      catalog: "المنتجات",
      whyUs: "لماذا نحن",
      contact: "اتصل بنا",
      getQuote: "طلب تسعيرة",
      langSwitch: "English",
    },
    hero: {
      title: "حلول متكاملة لتجارة مواد وأدوات البناء وتثبيت الرخام والواجهات",
      subtitle:
        "مورد موثوق لتثبيتات الرخام والواجهات من الستانلس ستيل، لواصق الرخام بتركيبة إيطالية، وأقراص القطع الصناعية من المنطقة الصناعية 15، الشارقة.",
      badge1: "تثبيتات عالية الشد - صنع إماراتي",
      badge2: "ماستيك بتركيبة إيطالية",
      badge3: "مورد مسجل بالرقم الضريبي الإماراتي",
      cta1: "تصفح المنتجات",
      cta2: "مبيعات واتساب",
    },
    about: {
      sectionTag: "من نحن",
      sectionTitle: "شريكك الموثوق لمواد البناء في الشارقة",
      p1: "بيت الأمير لتجارة أدوات البناء ذ.م.م شركة تجارية رائدة مقرها المنطقة الصناعية 15، الشارقة، الإمارات العربية المتحدة. نتخصص في توريد أدوات البناء الممتازة، حلول تثبيت الرخام الميكانيكية، وإكسسوارات كسوة الحجر.",
      p2: "بمخزون قوي وخبرة عميقة في الصناعة، نخدم كبرى شركات المقاولات وشركات الواجهات وموردي الحجر في جميع أنحاء الإمارات والخليج. تشمل منتجاتنا مثبتات ستانلس ستيل معتمدة AMR 304 و AMR 316، لواصق رخام عالية الجودة بتركيبة إيطالية، أقراص قطع وجلخ صناعية، وحلول عزل مائي.",
      p3: "كل منتج نوفره يتم اختياره بدقة من حيث الأداء والمتانة والامتثال لمعايير البناء الإماراتية. التزامنا بالتوصيل السريع والأسعار التنافسية والمشورة الفنية المتخصصة جعلنا الشريك المفضل لمحترفي البناء في المنطقة.",
      stat1Value: "+15",
      stat1Label: "عاماً في المجال",
      stat2Value: "+500",
      stat2Label: "منتج متوفر",
      stat3Value: "+2,000",
      stat3Label: "مشروع تم تموينه",
      stat4Value: "+50",
      stat4Label: "شريك تجاري",
    },
    catalog: {
      sectionTag: "كتالوج المنتجات",
      sectionTitle: "منتجاتنا",
      sectionSubtitle: "تصفح مجموعتنا الشاملة من مواد وأدوات البناء عالية الجودة.",
      filterAll: "جميع المنتجات",
      filterAdhesives: "غراء ولاصق الرخام والجرانيت",
      filterFixings: "إكسسوارات وزوايا التثبيت ستانلس ستيل",
      filterDiscs: "أسطوانات وأقراص القص والجلي",
      filterWaterproofing: "مواد العزل والبيتومين",
      inquire: "استفسر عبر واتساب",
      close: "إغلاق",
    },
    whyUs: {
      sectionTag: "لماذا نحن",
      sectionTitle: "مبنية على الثقة، تُسلّم بامتياز",
      sectionSubtitle: "ملتزمون بالجودة والامتثال والتوريد السريع في جميع أنحاء الإمارات.",
      badge1Title: "شركة مسجلة بالرقم الضريبي الإماراتي",
      badge1Desc: "مرخصة بالكامل ومسجلة ضريبياً تحت الرقم: 104368215000003، لضمان معاملات تجارية شفافة ومتوافقة.",
      badge2Title: "سبائك ستانلس ستيل AMR 304 و 316 معتمدة",
      badge2Desc: "تثبيتاتنا مصنوعة من سبائك AMR 304 المعتمدة وسبائك AMR 316 البحرية لأقصى مقاومة للتآكل وسلامة هيكلية.",
      badge3Title: "توريد فوري من الشارقة",
      badge3Desc: "مخزون كبير في مستودعنا بالمنطقة الصناعية 15، يتيح الشحن في نفس اليوم والتوصيل السريع في الإمارات والخليج.",
      badge4Title: "دعم فني متخصص",
      badge4Desc: "فريقنا ذو الخبرة يقدم إرشادات ميدانية وتوصيات بالمنتجات ودعم ما بعد البيع لكل مشروع.",
    },
    contact: {
      sectionTag: "تواصل معنا",
      sectionTitle: "اتصل بنا",
      sectionSubtitle: "مستعد لمناقشة متطلبات مشروعك؟ تواصل مع فريق المبيعات اليوم.",
      callUs: "اتصل بنا",
      whatsappUs: "واتساب",
      emailUs: "راسلنا",
      visitUs: "زرنا",
      address: "المنطقة الصناعية 15، الشارقة، الإمارات",
      poBox: "صندوق بريد: 26271",
      mapPlaceholder: "المنطقة الصناعية 15، الشارقة",
    },
    footer: {
      tagline: "شريكك الموثوق لأدوات البناء الممتازة وتثبيتات الرخام وإكسسوارات كسوة الحجر في الإمارات.",
      quickLinks: "روابط سريعة",
      contactInfo: "معلومات الاتصال",
      legal: "قانوني",
      trn: "الرقم الضريبي: 104368215000003",
      copyright: `© ${currentYear} بيت الأمير لتجارة أدوات البناء ذ.م.م — جميع الحقوق محفوظة.`,
    },
  },
} as const;

export type Translations = DeepStringify<(typeof translations)["en"]>;
