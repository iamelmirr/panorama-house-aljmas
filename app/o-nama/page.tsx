"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site.config";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import MapEmbed from "@/components/MapEmbed";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <div className="space-y-8">
      <section className="py-8 md:py-12 bg-white">
        <div className="container-grid grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-forest/70 text-center md:text-left">
              {t.about.storyLabel}
            </p>
            <h1 className="section-heading text-brand-charcoal text-center md:text-left">
               {t.about.title}
            </h1>
            <p className="text-base leading-relaxed text-brand-slate text-center md:text-left">
              {t.about.description}
            </p>
            <div className="lg:hidden">
              <Image
                src="/images/gallery-08.jpg"
                alt="Panorama House Aljmaš - naš dom"
                width={1280}
                height={720}
                className="h-full w-full object-cover rounded-3xl shadow-soft"
              />
            </div>
            <p className="text-base leading-relaxed text-brand-slate text-center md:text-left">
              {t.about.description2}
            </p>
            <ul className="grid gap-1 text-sm text-brand-charcoal/90">
              {t.about.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-lg bg-brand-sand/70 px-3 py-1.5"
                >
                  <span aria-hidden className="text-brand-forest">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <WhatsAppCTA label={t.contact.whatsappCta} />
              <Link href="/kontakt" className="btn btn-ghost">
                {t.about.contactCta}
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-soft hidden lg:block">
            <Image
              src="/images/gallery-08.jpg"
              alt="Panorama House Aljmaš - naš dom"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-brand-sand/70">
        <div className="container-grid grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-brand-charcoal text-center md:text-left">
              {t.about.experienceTitle}
            </h2>
            <p className="text-base text-brand-slate text-center md:text-left">
              {t.about.experienceText1}
            </p>
            <p className="text-base text-brand-slate text-center md:text-left">
              {t.about.experienceText2}
            </p>
          </div>
          <MapEmbed />
        </div>
      </section>
    </div>
  );
}
