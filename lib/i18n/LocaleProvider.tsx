"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Locale } from "./locales";
import hrTranslations from "./translations/hr.json";
import enTranslations from "./translations/en.json";

const translations: Record<Locale, typeof hrTranslations> = {
  hr: hrTranslations,
  en: enTranslations,
};

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof hrTranslations;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

function detectLocaleFromCountry(): Locale {
  // Try to detect country from browser
  if (typeof window === "undefined") return "hr";

  // Check if locale is stored in localStorage
  const stored = localStorage.getItem("locale");
  if (stored === "hr" || stored === "en") {
    return stored;
  }

  // Use Intl API to detect timezone/region
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // European countries that should default to English
    const englishTimezones = [
      "Europe/London", "Europe/Berlin", "Europe/Paris", "Europe/Rome",
      "Europe/Madrid", "Europe/Amsterdam", "Europe/Brussels", "Europe/Vienna",
      "Europe/Stockholm", "Europe/Oslo", "Europe/Copenhagen", "Europe/Helsinki",
      "America/New_York", "America/Los_Angeles", "America/Chicago",
      "America/Toronto", "Australia/Sydney", "Pacific/Auckland"
    ];

    // Balkan timezones that should default to Croatian
    const balkanTimezones = [
      "Europe/Zagreb", "Europe/Belgrade", "Europe/Sarajevo",
      "Europe/Podgorica", "Europe/Skopje", "Europe/Ljubljana"
    ];

    if (balkanTimezones.some(tz => timeZone.includes(tz))) {
      return "hr";
    }

    if (englishTimezones.some(tz => timeZone.includes(tz))) {
      return "en";
    }

    // Default to Croatian for other European timezones
    if (timeZone.startsWith("Europe/")) {
      return "en"; // Most of Europe should see English
    }

    // Default for rest of the world
    return "en";
  } catch {
    return "hr";
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("hr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage first, then detect from timezone
    const stored = typeof window !== "undefined" ? localStorage.getItem("locale") as Locale | null : null;
    const detected = stored || detectLocaleFromCountry();
    setLocaleState(detected);
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
    }
  };

  // Always provide context, even before mount
  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
