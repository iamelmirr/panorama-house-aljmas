"use client";

import { MapPin } from "lucide-react";
import MapEmbed from "@/components/MapEmbed";
import { SITE } from "@/lib/site.config";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function LocationSection() {
  const { t } = useLocale();

  return (
    <section className="section bg-white" id="lokacija">
      <div className="container-grid grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="space-y-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-forest/70">
            {t.location.label}
          </p>
          <h2 className="section-heading">{t.location.title}</h2>
          <p className="text-base leading-relaxed text-brand-slate">
            {t.location.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-brand-sand/80 p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/20 text-brand-forest">
              <MapPin aria-hidden className="h-6 w-6" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-brand-charcoal">{t.contact.labels.address}</p>
              <p className="text-sm text-brand-slate">{SITE.address}</p>
            </div>
          </div>
        </div>
        <MapEmbed className="h-full" />
      </div>
    </section>
  );
}

export default LocationSection;
