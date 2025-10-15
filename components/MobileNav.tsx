"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NAV_LINKS, SITE } from "@/lib/site.config";
import { cn } from "@/lib/utils";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { useMobileNav } from "@/contexts/MobileNavContext";

export function MobileNav() {
  const { isOpen, closeNav } = useMobileNav();
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeNav();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeNav]);

  const handleNavClick = (href: string) => {
    // Close modal after navigation starts
    setTimeout(() => {
      closeNav();
    }, 100);
    router.push(href);
  };

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-50 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="absolute inset-0 bg-[#f5f1e8] opacity-100" style={{ backgroundColor: '#f5f1e8' }} />

      {/* Menu panel - full screen */}
      <div
        className={cn(
          "relative z-10 flex h-full w-full flex-col justify-between bg-[#f5f1e8] px-6 py-8 transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ backgroundColor: '#f5f1e8' }}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-brand-charcoal">
            Navigacija
          </span>
          <button
            type="button"
            onClick={closeNav}
            className="rounded-full p-2 text-brand-charcoal hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label="Zatvori meni"
          >
            <XMarkIcon aria-hidden className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-6">
          <nav className="flex flex-col gap-4 text-base font-medium text-brand-slate">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
                className="rounded-xl px-6 py-4 text-center text-lg transition hover:bg-white/70 hover:text-brand-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                {label}
              </Link>
            ))}
          </nav>

          <WhatsAppCTA
            label="Rezerviši putem WhatsAppa"
            onClick={closeNav}
          />
        </div>

        <div className="text-center text-sm text-brand-slate/80">
          <p className="font-semibold text-brand-charcoal">Kontakt</p>
          <p className="mt-2">{SITE.phone}</p>
          <p>{SITE.email}</p>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
