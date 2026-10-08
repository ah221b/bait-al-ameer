import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BAIT AL AMEER | بيت الأمير — Construction Tools & Marble Accessories",
  description:
    "Leading supplier of marble adhesives, stainless steel fixings, cutting discs, and waterproofing solutions in Sharjah, UAE. Premium construction tools for contractors and builders.",
  keywords: [
    "construction tools",
    "marble adhesive",
    "stainless steel fixings",
    "cutting discs",
    "waterproofing",
    "Sharjah",
    "UAE",
    "building materials",
    "أدوات البناء",
    "لاصق رخام",
    "الشارقة",
  ],
  openGraph: {
    title: "BAIT AL AMEER — Construction Tools & Marble Accessories",
    description:
      "Premium construction tools and marble accessories supplier in Sharjah, UAE.",
    type: "website",
    locale: "en_AE",
    alternateLocale: "ar_AE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable} font-sans`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
