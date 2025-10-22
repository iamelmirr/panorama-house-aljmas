"use client";

import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { SITE } from "@/lib/site.config";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { useMobileNav } from "@/contexts/MobileNavContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Header() {
  const { openNav } = useMobileNav();
  const { t } = useLocale();

  const NAV_LINKS = [
    { href: "/", label: t.nav.home },
    { href: "/o-nama", label: t.nav.about },
    { href: "/#galerija", label: t.nav.gallery },
    { href: "/#lokacija", label: t.nav.location },
    { href: "/kontakt", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-brand-sand/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo - Fixed left */}
        <Link
          href="/"
          className="flex items-center gap-3 flex-shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Panorama House Aljmaš logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-contain shadow-soft"
            priority
          />
          <span className="hidden text-left text-base font-semibold text-brand-charcoal sm:block sm:text-lg lg:text-xl">
            {SITE.name}
          </span>
        </Link>

        {/* Centered Navigation - Desktop */}
        <nav className="hidden absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium lg:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-brand-slate transition-colors duration-200 hover:text-brand-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-sand"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side - Language switcher + WhatsApp */}
        <div className="hidden items-center gap-4 lg:flex flex-shrink-0">
          <WhatsAppCTA label={t.nav.whatsapp} />
          <LanguageSwitcher />
        </div>

        {/* Mobile - Language switcher + Menu */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="flex items-center justify-center rounded-full p-2 text-brand-charcoal transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label="Otvori navigaciju"
            onClick={openNav}
          >
            <Bars3Icon aria-hidden className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
