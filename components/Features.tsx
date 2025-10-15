import { Binoculars, Flame, Snowflake, Sparkles, Waves } from "lucide-react";

const features = [
  {
    title: "Privatni bazen",
    description: "Osvježavajući bazen samo za vas, savršen za ljetne dane.",
    Icon: Waves,
  },
  {
    title: "Jacuzzi",
    description: "Opustite se u toplom jacuzziju uz panoramski pogled.",
    Icon: Sparkles,
  },
  {
    title: "Sauna",
    description: "Privatna sauna za potpuni wellness doživljaj.",
    Icon: Flame,
  },
  {
    title: "Panoramski pogled",
    description:
      "Smješteni na brežuljku iznad Dunava s pogledom koji oduzima dah.",
    Icon: Binoculars,
  },
  {
    title: "Klimatiziran smještaj",
    description: "Ugodna temperatura tokom cijele godine.",
    Icon: Snowflake,
  },
];

export function Features() {
  return (
    <section className="section bg-white">
      <div className="container-grid space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-forest/70">
            Šta nudimo
          </p>
          <h2 className="section-heading text-brand-charcoal">
            Sve što vam treba za opuštajući vikend
          </h2>
          <p className="mx-auto max-w-2xl text-base text-brand-slate">
            Panorama House Aljmaš spaja privatnost, udobnost i wellness sadržaje
            za savršen odmor s porodicom ili prijateljima.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {features.map(({ title, description, Icon }, index) => (
            <article
              key={title}
              className={`group rounded-2xl border border-black/5 bg-brand-sand/60 p-4 lg:p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-gold/80 hover:shadow-soft ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/20 text-brand-forest">
                <Icon aria-hidden className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-charcoal">
                {title}
              </h3>
              <p className="mt-2 text-sm text-brand-slate">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
