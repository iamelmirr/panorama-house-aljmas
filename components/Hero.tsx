import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site.config";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Panorama House Aljmaš s pogledom na Dunav"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/65 to-black/20" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-screen-xl flex-col justify-center gap-8 px-4 py-24 text-center sm:px-6 lg:px-8 lg:text-left">
        <div className="inline-flex items-center justify-center gap-2 self-center rounded-full bg-black/35 px-5 py-2 text-sm font-medium uppercase tracking-[0.3em] text-white/80 backdrop-blur lg:self-start">
          Seoski turizam • Aljmaš
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            
            <h1 className="text-4xl font-semibold leading-tight !text-white drop-shadow-2xl md:text-5xl lg:text-6xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_60%)]">
              Panorama House Aljmaš
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-white/85 drop-shadow-lg lg:mx-0">
            Doživite mir, prirodu i privatnost u našem domu na brežuljku iznad Dunava.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <WhatsAppCTA label="Rezerviši svoj boravak" />
          <Link
            href="/kontakt"
            className="btn border-2 border-white/90 bg-white/80 text-brand-charcoal backdrop-blur hover:bg-white"
          >
            Kontakt forma
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 text-center text-sm text-white/40 lg:justify-start lg:text-left">
          <span>Topli dom</span>
          <span>•</span>
          <span>Privatni bazen</span>
          <span>•</span>
          <span>Jacuzzi & Sauna</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
