import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site.config";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  title: `${SITE.name} – O nama`,
  description:
    "Panorama House Aljmaš je obiteljski objekt koji spaja udobnost, prirodu i mir uz privatni bazen, jacuzzi i saunu.",
};

const highlights = [
  "Klimatiziran smještaj za 5+2 gostiju",
  "Privatni bazen, jacuzzi i sauna",
  "Panoramski pogled na Dunav",
  "Mirno okruženje idealno za odmor",
  "Blizina kulturnih i prirodnih atrakcija Aljmaša",
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="section bg-white">
        <div className="container-grid grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-forest/70">
              Naša priča
            </p>
            <h1 className="section-heading text-brand-charcoal">
              Panorama House Aljmaš – dom stvoren za odmor i uživanje
            </h1>
            <p className="text-base leading-relaxed text-brand-slate">
              Panorama House Aljmaš je obiteljski objekt koji spaja udobnost, prirodu i mir. Smješten na brežuljku iznad Dunava, naš dom nudi jedinstveni panoramski pogled koji oduzima dah. Uživajte u privatnom bazenu, jacuzziju i sauni te doživite seoski turizam s daškom luksuza.
            </p>
            <p className="text-base leading-relaxed text-brand-slate">
              Uz klimatizirani smještaj za 5+2 gostiju, Panorama House je idealno mjesto za porodični odmor ili bijeg s prijateljima. Prostrane sobe, moderno opremljena kuhinja i cozy dnevni boravak stvaraju savršenu atmosferu za druženje i opuštanje.
            </p>
            <ul className="grid gap-2 text-sm text-brand-charcoal/90">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-lg bg-brand-sand/70 px-4 py-2"
                >
                  <span aria-hidden className="text-brand-forest">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <WhatsAppCTA />
              <Link href="/kontakt" className="btn btn-ghost">
                Kontakt informacije
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl shadow-soft">
              <Image
                src="/images/gallery-03.jpg"
                alt="Jacuzzi i terasa Panorama House Aljmaš"
                width={640}
                height={760}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-soft">
              <Image
                src="/images/gallery-02.jpg"
                alt="Sunčana terasa s pogledom na Dunav"
                width={640}
                height={760}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand-sand/70">
        <div className="container-grid grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-brand-charcoal">
              Iskustvo boravka
            </h2>
            <p className="text-base text-brand-slate">
              Svaki boravak u Panorama Houseu osmišljen je kako bi bio bezbrižan. Dočekat će vas uredan prostor, svježa posteljina i pažljivo pripremljeni detalji koji naglašavaju toplinu domaće atmosfere.
            </p>
            <p className="text-base text-brand-slate">
              Naša lokacija omogućava brz pristup Dunavu, lokalnoj gastronomiji i kulturnim znamenitostima Aljmaša. Bilo da tražite aktivan odmor ili potpuni mir, Panorama House pruža savršenu ravnotežu.
            </p>
          </div>
          <MapEmbed />
        </div>
      </section>
    </div>
  );
}
