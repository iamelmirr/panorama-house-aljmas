"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

type GalleryImage = {
  src: string;
  alt: string;
};

const images: GalleryImage[] = [
  {
    src: "/images/gallery-01.jpg",
    alt: "Privatni bazen Panorama House Aljmaš s pogledom na rijeku",
  },
  {
    src: "/images/gallery-02.jpg",
    alt: "Sunčana terasa uz bazen Panorama House Aljmaš",
  },
  {
    src: "/images/gallery-03.jpg",
    alt: "Jacuzzi i ležaljke na terasi Panorama House Aljmaš",
  },
  {
    src: "/images/gallery-04.jpg",
    alt: "Rustikalni detalji interijera Panorama House Aljmaš",
  },
  {
    src: "/images/gallery-05.jpg",
    alt: "Sauna s drvenim oblogama u Panorama House Aljmaš",
  },
  {
    src: "/images/gallery-06.jpg",
    alt: "Spavaća soba s bračnim krevetom i panoramskim prozorima",
  },
  {
    src: "/images/gallery-07.jpg",
    alt: "Panoramski pogled na Dunav iz dvorišta kuće",
  },
  {
    src: "/images/gallery-08.jpg",
    alt: "Udoban dnevni boravak Panorama House Aljmaš",
  },
  {
    src: "/images/gallery-09.jpg",
    alt: "Večernja atmosfera oko bazena Panorama House Aljmaš",
  },
];

const duplicatedImages = [...images, ...images];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
      if (event.key === "ArrowRight" && active !== null) {
        setActive((prev) => (prev === null ? prev : (prev + 1) % images.length));
      }
      if (event.key === "ArrowLeft" && active !== null) {
        setActive((prev) =>
          prev === null ? prev : (prev - 1 + images.length) % images.length
        );
      }
    };

    if (active !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <section id="galerija" className="section bg-brand-sand">
      <div className="container-grid space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-forest/70">
            Galerija
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="section-heading">Zavirite u Panorama House</h2>
            <p className="text-sm text-brand-slate">
              Fotografije našeg doma, wellness zone i očaravajućeg pogleda na Dunav.
            </p>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-infinite">
            {duplicatedImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                className="group relative flex-shrink-0 w-80 aspect-square overflow-hidden rounded-2xl bg-brand-charcoal/5 shadow-sm"
                onClick={() => setActive(index % images.length)}
              >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="sr-only">Otvori fotografiju: {image.alt}</span>
            </button>
          ))}
        </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 py-10 transition duration-200",
          active !== null
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        )}
        aria-hidden={active === null}
      >
        <div className="absolute inset-0" onClick={close} />

        {active !== null && (
          <figure className="relative z-10 max-w-none" role="dialog" aria-modal="true">
            <Image
              src={images[active].src}
              alt={images[active].alt}
              width={1600}
              height={1066}
              className="h-auto max-h-[80vh] w-auto max-w-full rounded-3xl object-contain shadow-soft"
              priority
            />
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {images[active].alt}
            </figcaption>
            <div className="absolute right-4 top-4 flex gap-2">
              <button
                type="button"
                className="rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                onClick={() =>
                  setActive((prev) =>
                    prev === null ? prev : (prev - 1 + images.length) % images.length
                  )
                }
                aria-label="Prethodna fotografija"
              >
                <span aria-hidden className="text-lg">‹</span>
              </button>
              <button
                type="button"
                className="rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                onClick={close}
                aria-label="Zatvori galeriju"
              >
                <XMarkIcon aria-hidden className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                onClick={() =>
                  setActive((prev) =>
                    prev === null ? prev : (prev + 1) % images.length
                  )
                }
                aria-label="Sljedeća fotografija"
              >
                <span aria-hidden className="text-lg">›</span>
              </button>
            </div>
          </figure>
        )}
      </div>
    </section>
  );
}

export default Gallery;
