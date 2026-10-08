"use client";

import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

function FontApplier({ children }: { children: React.ReactNode }) {
  const { isRTL } = useLanguage();
  return (
    <div className={isRTL ? "font-arabic" : "font-sans"}>
      {children}
    </div>
  );
}

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <FontApplier>{children}</FontApplier>
    </LanguageProvider>
  );
}
