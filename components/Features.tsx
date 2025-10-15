"use client";

import { Binoculars, Flame, Snowflake, Sparkles, Waves, Wifi } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Features() {
  const { t } = useLocale();

  const features = [
    {
      title: t.features.items.pool.title,
      description: t.features.items.pool.description,
      Icon: Waves,
    },
    {
      title: t.features.items.sauna.title,
      description: t.features.items.sauna.description,
      Icon: Flame,
    },
    {
      title: t.features.items.view.title,
      description: t.features.items.view.description,
      Icon: Binoculars,
    },
    {
      title: t.features.items.grill.title,
      description: t.features.items.grill.description,
      Icon: Sparkles,
    },
    {
      title: t.features.items.wifi.title,
      description: t.features.items.wifi.description,
      Icon: Wifi,
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-grid space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-forest/70">
            {t.features.label}
          </p>
          <h2 className="section-heading text-brand-charcoal">
            {t.features.title}
          </h2>
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
