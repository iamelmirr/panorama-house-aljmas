import Link from "next/link";
import { SITE } from "@/lib/site.config";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export function ContactPreview() {
  return (
    <section className="section">
      <div className="container-grid grid gap-8 rounded-3xl bg-brand-charcoal text-brand-sand shadow-soft text-center md:flex md:items-center md:justify-between md:text-left">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
            Rezervacije
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Spremni za odmor u Aljmašu?
          </h2>
          <p className="text-base text-brand-sand/85">
            Javite nam se putem WhatsAppa ili pošaljite upit preko kontakt forme.
            Odgovaramo u najkraćem roku.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <WhatsAppCTA fullWidth label="Kontaktiraj nas na WhatsApp" className="text-center" />
          <Link
            href="/kontakt"
            className="btn btn-ghost border-brand-sand text-brand-sand hover:bg-white/10 px-6 py-4 w-full"
          >
            Kontakt forma
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactPreview;
