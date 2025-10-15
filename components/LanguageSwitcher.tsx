"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  const switchLanguage = () => {
    setLocale(locale === "hr" ? "en" : "hr");
  };

  return (
    <button
      type="button"
      onClick={switchLanguage}
      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-brand-slate transition-all duration-200 hover:bg-white/60 hover:text-brand-forest"
      aria-label={locale === "hr" ? "Switch to English" : "Prebaci na Hrvatski"}
      title={locale === "hr" ? "Switch to English" : "Prebaci na Hrvatski"}
    >
      <span className="text-base leading-none">{locale === "hr" ? "🇬🇧" : "🇭🇷"}</span>
      <span>{locale === "hr" ? "EN" : "HR"}</span>
    </button>
  );
}
