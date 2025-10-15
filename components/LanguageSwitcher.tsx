"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n/locales";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  const handleSwitch = (newLocale: Locale) => {
    if (newLocale !== locale) {
      setLocale(newLocale);
    }
  };

  return (
    <div className="flex items-center gap-1 rounded-full bg-white/50 p-1">
      <button
        type="button"
        onClick={() => handleSwitch("hr")}
        className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
          locale === "hr"
            ? "bg-brand-gold text-white shadow-sm"
            : "text-brand-slate hover:bg-white/70"
        }`}
        aria-label="Switch to Croatian"
      >
        HR
      </button>
      <button
        type="button"
        onClick={() => handleSwitch("en")}
        className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
          locale === "en"
            ? "bg-brand-gold text-white shadow-sm"
            : "text-brand-slate hover:bg-white/70"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
