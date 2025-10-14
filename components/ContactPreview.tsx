import Link from "next/link";
import { SITE } from "@/lib/site.config";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export function ContactPreview() {
  return (
    <section className="section">
      <div className="container-grid grid gap-6 rounded-3xl bg-brand-charcoal px-6 py-12 text-brand-sand shadow-soft md:flex md:items-center md:justify-between md:px-12 md:py-16">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
            Rezervacije
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Spremni za odmor u Panorama Houseu?
          </h2>
          <p className="text-base text-brand-sand/85">
            Javite nam se putem WhatsAppa ili pošaljite upit preko kontakt forme.
            Odgovaramo u najkraćem roku.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <WhatsAppCTA fullWidth label="Kontaktiraj nas na WhatsApp" />
          <Link
            href="/kontakt"
            className="btn btn-ghost border-brand-sand text-brand-sand hover:bg-white/10"
          >
            Kontakt forma
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactPreview;
