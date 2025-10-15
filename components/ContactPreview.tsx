"use client";

import Link from "next/link";
import { SITE } from "@/lib/site.config";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function ContactPreview() {
  const { t } = useLocale();
  
  return (
    <section className="section">
      <div className="container-grid grid gap-8 rounded-3xl bg-brand-charcoal text-brand-sand shadow-soft text-center md:flex md:items-center md:justify-between md:text-left">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
            {t.contact.preview.label}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t.contact.preview.title}
          </h2>
          <p className="text-base text-brand-sand/85">
            {t.contact.preview.description}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <WhatsAppCTA fullWidth label={t.contact.preview.whatsappCta} className="text-center" />
          <Link
            href="/kontakt"
            className="btn btn-ghost border-brand-sand text-brand-sand hover:bg-white/10 px-6 py-4 w-full"
          >
            {t.contact.preview.formCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactPreview;
