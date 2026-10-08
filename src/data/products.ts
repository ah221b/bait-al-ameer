export interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  image: string;
  category: "adhesives" | "fixings" | "discs" | "waterproofing";
}

export const products: Product[] = [
  // ── A. Marble & Granite Adhesives ──────────────────────────
  {
    id: "fox-1100",
    nameEn: "FOX 1100 Super Stone Mastic Glue",
    nameAr: "غراء فوكس 1100 للرخام والجرانيت",
    descEn: "High quality solid beige mastic glue for heavy stone and granite bonding.",
    descAr: "غراء ماستيك بيج عالي الجودة للصق الأحجار والجرانيت الثقيلة.",
    image: "/images/fox-1100.jpg",
    category: "adhesives",
  },
  {
    id: "ameer-plus",
    nameEn: "Ameer Plus High Level Marble & Granite Glue",
    nameAr: "غراء بيت الأمير بلس رخامي",
    descEn: "Premium anti-vibration high adhesion formulation for granite & marble installation.",
    descAr: "تركيبة ممتازة مضادة للاهتزاز عالية الالتصاق لتركيب الجرانيت والرخام.",
    image: "/images/ameer-plus.jpg",
    category: "adhesives",
  },
  {
    id: "ruby",
    nameEn: "Ruby Italian Formula Mastic",
    nameAr: "غراء روبي إيطالي أصلي",
    descEn: "Made in Italy high-durability mastice per marmo e granito.",
    descAr: "صنع في إيطاليا — ماستيك عالي المتانة للرخام والجرانيت.",
    image: "/images/ruby.jpg",
    category: "adhesives",
  },

  // ── B. Stainless Steel Fixings & Cladding ──────────────────
  {
    id: "ss-bolt-304",
    nameEn: "AMR 304 Stainless Steel Bolt & Anchor",
    nameAr: "مسمار وفيشر تثبيت ستانلس ستيل 304",
    descEn: "Precision-threaded AMR 304 anchor bolt designed for stone cladding stability.",
    descAr: "مسمار تثبيت AMR 304 مسنن بدقة مصمم لاستقرار كسوة الحجر.",
    image: "/images/ss-bolt-304.jpg",
    category: "fixings",
  },
  {
    id: "ss-bolt-316",
    nameEn: "AMR 316 Marine Grade SS Bolt & Anchor",
    nameAr: "مسمار وفيشر ستانلس ستيل بحري 316",
    descEn: "Extreme corrosion-resistant AMR 316 stainless steel bolt for demanding facade environments.",
    descAr: "مسمار ستانلس ستيل AMR 316 مقاوم للتآكل الشديد لبيئات الواجهات القاسية.",
    image: "/images/ss-bolt-316.jpg",
    category: "fixings",
  },
  {
    id: "ss-angle-316",
    nameEn: "AMR 316 Marble Fixing Angle — Made in UAE",
    nameAr: "زاوية تثبيت رخام ستانلس ستيل 316 — صنع في الإمارات",
    descEn: "Heavy-duty certified AMR 316 stainless steel angle manufactured locally in the UAE.",
    descAr: "زاوية ستانلس ستيل AMR 316 معتمدة شديدة التحمل مصنعة محلياً في الإمارات.",
    image: "/images/ss-angle-316.jpg",
    category: "fixings",
  },
  {
    id: "ss-bracket-angle",
    nameEn: "Heavy Duty Marble Cladding Bracket",
    nameAr: "براكيت وزوايا تعليق وتثبيت واجهات الحجر والرخام",
    descEn: "Structural stainless steel U-profile bracket system for mechanical facade installation.",
    descAr: "نظام براكيت هيكلي من الستانلس ستيل بشكل U لتركيب الواجهات الميكانيكية.",
    image: "/images/ss-bracket-angle.jpg",
    category: "fixings",
  },

  // ── C. Cutting & Grinding Discs ────────────────────────────
  {
    id: "blade-fox-115",
    nameEn: "FOX 115mm Stone Cutting Blade",
    nameAr: "أسطوانة قص حجر ورخام فوكس 115 مم",
    descEn: "High performance 115mm blade for clean granite and marble edge cutting.",
    descAr: "شفرة 115 مم عالية الأداء لقص حواف الجرانيت والرخام بنظافة.",
    image: "/images/blade-fox-115.jpg",
    category: "discs",
  },
  {
    id: "disc-blue-segment",
    nameEn: "Blue Segmented Granite & Marble Disc",
    nameAr: "ديسك قص وتفريغ مسنن للجرانيت والرخام",
    descEn: "Heavy-duty segmented rim blade for aggressive, fast cutting.",
    descAr: "شفرة حافة مسننة شديدة التحمل للقص السريع والقوي.",
    image: "/images/disc-blue-segment.jpg",
    category: "discs",
  },
  {
    id: "disc-pink-turbo",
    nameEn: "Ultra-Thin Pink Turbo Porcelain Blade",
    nameAr: "أسطوانة توربو رفيعة فائقة الدقة",
    descEn: "Continuous thin turbo rim with cooling holes for smooth chip-free tile and marble cutting.",
    descAr: "حافة توربو رفيعة مستمرة مع فتحات تبريد لقص البلاط والرخام بسلاسة بدون تشقق.",
    image: "/images/disc-pink-turbo.jpg",
    category: "discs",
  },
  {
    id: "disc-purple-grind",
    nameEn: "Vacuum Brazed Grinding Disc — Purple",
    nameAr: "قرص تسوية وتخشين فاكيوم بنفسجي",
    descEn: "Multi-hole electroplated diamond disc for aggressive surface grinding and leveling.",
    descAr: "قرص ألماسي مطلي كهربائياً متعدد الثقوب لتخشين وتسوية الأسطح.",
    image: "/images/disc-purple-grind.jpg",
    category: "discs",
  },
  {
    id: "disc-green-grind",
    nameEn: "Fine Green Finishing & Polishing Disc",
    nameAr: "قرص صنفرة وتنعيم أخضر للرخام",
    descEn: "High-density diamond abrasive disc for smooth marble surface finishing.",
    descAr: "قرص كاشط ألماسي عالي الكثافة لتنعيم سطح الرخام.",
    image: "/images/disc-green-grind.jpg",
    category: "discs",
  },
  {
    id: "disc-silver-mesh",
    nameEn: "Patterned Diamond Cutting Blade",
    nameAr: "أسطوانة دياموند بنقش هندسي دقيق",
    descEn: "Triangular pattern matrix blade for specialized clean marble cutting.",
    descAr: "شفرة بنمط مثلثي للقص النظيف والمتخصص للرخام.",
    image: "/images/disc-silver-mesh.jpg",
    category: "discs",
  },
  {
    id: "disc-silver-curved",
    nameEn: "Curved-Slot Diamond Stone Disc",
    nameAr: "قرص دياموند بفتحات تبريد منحنية",
    descEn: "Slotted diamond blade ensuring optimal cooling and debris evacuation during dry/wet cuts.",
    descAr: "شفرة ألماسية ذات فتحات لضمان تبريد مثالي وإخراج الحطام أثناء القص الجاف والرطب.",
    image: "/images/disc-silver-curved.jpg",
    category: "discs",
  },
  {
    id: "disc-silver-electro",
    nameEn: "Continuous Rim Diamond Saw Blade",
    nameAr: "قرص دياموند مصمت دقيق للرخام",
    descEn: "Electroplated vacuum continuous rim blade for high precision finish.",
    descAr: "شفرة حافة مستمرة مطلية بالتفريغ الكهربائي لتشطيب عالي الدقة.",
    image: "/images/disc-silver-electro.jpg",
    category: "discs",
  },

  // ── D. Waterproofing & Bitumen ─────────────────────────────
  {
    id: "bitumen-drum",
    nameEn: "Bitumen Coat Drum 140kg / 200kg",
    nameAr: "براميل عازل بيتومين للأساسات والمباني",
    descEn: "Premium protective bitumen coating for substructure waterproofing.",
    descAr: "طلاء بيتومين واقي ممتاز لعزل الأساسات والتركيبات التحتية.",
    image: "/images/bitumen-drum.jpg",
    category: "waterproofing",
  },
];
