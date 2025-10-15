"use client";

import Image from "next/image";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden bg-brand-charcoal text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Panorama House Aljmaš s pogledom na Dunav"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/65 to-black/20" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-screen-xl flex-col justify-center gap-16 px-4 py-24 text-center sm:min-h-[70vh] sm:gap-12 sm:px-6 lg:px-8">
        <div className="inline-flex items-center justify-center gap-2 self-center rounded-full bg-black/35 px-5 py-2 text-sm font-medium uppercase tracking-[0.3em] text-white/80 backdrop-blur">
          {t.hero.label}
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            
            <h1 className="text-4xl font-semibold leading-tight !text-white drop-shadow-2xl md:text-5xl lg:text-6xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_60%)]">
              {t.site.name}
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-white/85 drop-shadow-lg">
            {t.hero.subtitle}
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <WhatsAppCTA label={t.hero.cta.secondary} />
          <Link
            href="/kontakt"
            className="btn border-2 border-white/90 bg-white/80 text-brand-charcoal backdrop-blur hover:bg-white"
          >
            {t.hero.cta.primary}
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 text-center text-sm text-white/40">
          <span>{t.hero.highlights.home}</span>
          <span>•</span>
          <span>{t.hero.highlights.pool}</span>
          <span>•</span>
          <span>{t.hero.highlights.wellness}</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
