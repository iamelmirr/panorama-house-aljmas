"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NAV_LINKS, SITE } from "@/lib/site.config";
import { cn } from "@/lib/utils";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, closeMenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-brand-sand/90 backdrop-blur">
      <div className="container-grid flex h-16 items-center justify-between gap-3 sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={closeMenu}
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

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-brand-slate transition-colors duration-200 hover:text-brand-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-sand"
            >
              {label}
            </Link>
          ))}
          <WhatsAppCTA label="Rezerviši putem WhatsAppa" />
        </nav>

        <button
          type="button"
          className="flex items-center justify-center rounded-full p-2 text-brand-charcoal transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((state) => !state)}
        >
          {open ? (
            <XMarkIcon aria-hidden className="h-6 w-6" />
          ) : (
            <Bars3Icon aria-hidden className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 flex md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={closeMenu}
        />

        <div
          role="dialog"
          aria-modal="true"
          className={cn(
            "ml-auto flex h-full w-4/5 max-w-xs flex-col gap-8 bg-brand-sand px-6 py-8 shadow-soft transition-transform duration-200",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-brand-charcoal">
              Navigacija
            </span>
            <button
              type="button"
              onClick={closeMenu}
              className="rounded-full p-2 text-brand-charcoal hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <XMarkIcon aria-hidden className="h-5 w-5" />
              <span className="sr-only">Zatvori meni</span>
            </button>
          </div>
          <nav className="flex flex-col gap-4 text-base font-medium text-brand-slate">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-md px-2 py-2 transition hover:bg-white/70 hover:text-brand-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                {label}
              </Link>
            ))}
          </nav>
          <WhatsAppCTA
            fullWidth
            label="Rezerviši putem WhatsAppa"
            onClick={closeMenu}
          />
          <div className="text-sm text-brand-slate/80">
            <p className="font-semibold text-brand-charcoal">Kontakt</p>
            <p>{SITE.phone}</p>
            <p>{SITE.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
