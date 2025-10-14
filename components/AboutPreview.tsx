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
          <h2 className="section-heading text-brand-charcoal">
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
            <Link href="#galerija" className="btn btn-ghost">
              Pogledaj galeriju
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
