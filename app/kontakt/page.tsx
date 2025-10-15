"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site.config";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function ContactPage() {
  const { t } = useLocale();

  const contactItems = [
    {
      label: t.contact.labels.phone,
      value: SITE.phone,
      href: `tel:${SITE.phone.replace(/\s+/g, "")}`,
      Icon: Phone,
    },
    {
      label: t.contact.labels.email,
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      Icon: Mail,
    },
    {
      label: t.contact.labels.address,
      value: SITE.address,
      href: "https://maps.google.com/?q=Rudina%20Perinac%201,%20Aljma%C5%A1,%20Hrvatska",
      Icon: MapPin,
      external: true,
    },
  ];

  return (
    <div className="space-y-8">
      <section className="py-8 md:py-13">
        <div className="container-grid grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-forest/70 text-center md:text-left">
              {t.contact.label}
            </p>
            <h1 className="section-heading text-brand-charcoal text-center md:text-left">
              {t.contact.title}
            </h1>
            <p className="text-base text-brand-slate text-center md:text-left">
              {t.contact.description}
            </p>
            <div className="space-y-4">
              {contactItems.map(({ label, value, href, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm text-brand-charcoal shadow-sm transition hover:border-brand-gold/60 hover:shadow-soft"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  <Icon aria-hidden className="h-5 w-5 text-brand-forest" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-slate/80">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-brand-slate justify-center md:justify-start">
              <Link
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-brand-sand px-4 py-2 transition hover:bg-brand-gold/20"
              >
                <Instagram className="h-4 w-4" aria-hidden />
                {SITE.instagram.replace("https://instagram.com/", "@")}
              </Link>
              <Link
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-brand-sand px-4 py-2 transition hover:bg-brand-gold/20"
              >
                <Facebook className="h-4 w-4" aria-hidden />
                Facebook
              </Link>
            </div>
            <div className="text-center md:text-left">
              <WhatsAppCTA label={t.contact.whatsappCta} />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="py-8 md:py-13 bg-white">
        <div className="container-grid space-y-6">
          <h2 className="section-heading text-brand-charcoal text-center md:text-left">{t.contact.howToReach}</h2>
          <p className="max-w-2xl text-base text-brand-slate text-center md:text-left">
            {t.contact.locationDescription}
          </p>
          <MapEmbed />
        </div>
      </section>
    </div>
  );
}
