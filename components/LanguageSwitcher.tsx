"use client";

import type { Locale } from "@/lib/i18n/locales";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const localeCycle: Locale[] = ["hr", "en", "de"];
const localeFlags: Record<Locale, string> = {
  hr: "🇭🇷",
  en: "🇬🇧",
  de: "🇩🇪",
};
const localeLabels: Record<Locale, string> = {
  hr: "HR",
  en: "EN",
  de: "DE",
};
const localeNames: Record<Locale, string> = {
  hr: "Hrvatski",
  en: "English",
  de: "Deutsch",
};

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  const currentIndex = localeCycle.indexOf(locale);
  const nextLocale = localeCycle[(currentIndex + 1) % localeCycle.length];

  const switchLanguage = () => {
    setLocale(nextLocale);
  };

  return (
    <button
      type="button"
      onClick={switchLanguage}
      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-brand-slate transition-all duration-200 hover:bg-white/60 hover:text-brand-forest"
      aria-label={`Switch to ${localeNames[nextLocale]}`}
      title={`Switch to ${localeNames[nextLocale]}`}
    >
      <span className="text-base leading-none">{localeFlags[nextLocale]}</span>
      <span>{localeLabels[nextLocale]}</span>
    </button>
  );
}
