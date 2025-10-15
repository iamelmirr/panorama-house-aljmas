"use client";

import Image from "next/image";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="section">
      <div className="container-grid grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative order-2 overflow-hidden rounded-3xl bg-brand-charcoal/5 shadow-soft lg:order-1">
          <Image
            src="/images/gallery-04.jpg"
            alt="Panorama House Aljmaš s panoramskim pogledom na Dunav"
            width={880}
            height={640}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" aria-hidden />
          <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-brand-charcoal shadow-sm">
            Spavaća soba s pogledom na Dunav
          </div>
        </div>

        <div className="order-1 space-y-6 text-center lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-forest/70">
            O smještaju
          </p>
          <h2 className="section-heading text-brand-charcoal lg:leading-snug">
            Udobnost, wellness i priroda na jednom mjestu
          </h2>
          <p className="text-base leading-relaxed text-brand-slate">
            Panorama House nalazi se u Aljmašu i nudi klimatiziran smještaj sa
            5+2 ležaja, privatnim bazenom, jacuzzijem i saunom. Idealno mjesto
            za odmor s obitelji ili prijateljima, uz predivan panoramski pogled
            na Dunav.
          </p>
          <p className="text-base leading-relaxed text-brand-slate">
            Naš dom je pažljivo uređen kako bi pružio vrhunski doživljaj
            seoskog turizma s notom luksuza. Otkrijte našu priču i pogodnosti
            koje nudimo.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/o-nama" className="btn btn-primary">
              Saznaj više
            </Link>
            <button className="btn btn-ghost" onClick={() => {
              const target = document.getElementById('galerija');
              if (target) {
                const targetPosition = target.offsetTop;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1200; // 2 seconds for slower scroll
                let start: number | null = null;
                const step = (timestamp: number) => {
                  if (!start) start = timestamp;
                  const progress = timestamp - start;
                  const percentage = Math.min(progress / duration, 1);
                  const easeInOutCubic = percentage < 0.5 ? 4 * percentage * percentage * percentage : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
                  window.scrollTo(0, startPosition + distance * easeInOutCubic);
                  if (progress < duration) {
                    requestAnimationFrame(step);
                  }
                };
                requestAnimationFrame(step);
              }
            }}>
              Pogledaj galeriju
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
