"use client";

import { useEffect, useRef, useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import type { Locale } from "@/lib/i18n/locales";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const locales: Locale[] = ["hr", "en", "de"];
const localeMetadata: Record<Locale, { flag: string; label: string }> = {
  hr: { flag: "🇭🇷", label: "Hrvatski" },
  en: { flag: "🇬🇧", label: "English" },
  de: { flag: "🇩🇪", label: "Deutsch" },
};

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!open) return;
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const handleSelect = (newLocale: Locale) => {
    setLocale(newLocale);
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm font-medium text-brand-charcoal shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Choose language"
      >
        <GlobeAltIcon className="h-5 w-5" aria-hidden />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px] sm:hidden" aria-hidden onClick={() => setOpen(false)} />
          <div
            role="dialog"
            aria-modal="true"
            className="absolute right-0 z-50 mt-3 w-48 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl"
          >
            <div className="border-t border-black/5">
              {locales.map((code) => {
                const { flag, label } = localeMetadata[code];
                const isActive = locale === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => handleSelect(code)}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition ${
                      isActive
                        ? "bg-black/5 text-brand-charcoal"
                        : "hover:bg-brand-sand/40 text-brand-slate"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="text-lg" aria-hidden>{flag}</span>
                    <span className="font-medium">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
