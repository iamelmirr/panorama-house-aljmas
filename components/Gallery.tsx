"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type GalleryImage = {
  src: string;
  altKey: keyof typeof import("@/lib/i18n/translations/hr.json").gallery.images;
};

export function Gallery() {
  const { t } = useLocale();

  const images: GalleryImage[] = [
    { src: "/images/gallery-01.jpg", altKey: "gallery01" },
    { src: "/images/gallery-02.jpg", altKey: "gallery02" },
    { src: "/images/gallery-03.jpg", altKey: "gallery03" },
    { src: "/images/gallery-04.jpg", altKey: "gallery04" },
    { src: "/images/gallery-05.jpg", altKey: "gallery05" },
    { src: "/images/gallery-06.jpg", altKey: "gallery06" },
    { src: "/images/gallery-07.jpg", altKey: "gallery07" },
    { src: "/images/gallery-08.jpg", altKey: "gallery08" },
    { src: "/images/gallery-09.jpg", altKey: "gallery09" },
  ];

  const duplicatedImages = [...images, ...images];
  
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
            {t.gallery.label}
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="section-heading">{t.gallery.title}</h2>
            <p className="text-sm text-brand-slate">
              {t.gallery.subtitle}
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
                alt={t.gallery.images[image.altKey]}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="sr-only">Otvori fotografiju: {t.gallery.images[image.altKey]}</span>
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
              alt={t.gallery.images[images[active].altKey]}
              width={1600}
              height={1066}
              className="h-auto max-h-[80vh] w-auto max-w-full rounded-3xl object-contain shadow-soft"
              priority
            />
            
            {/* Navigation buttons */}
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
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
              className="absolute top-4 right-4 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              onClick={close}
              aria-label="Zatvori galeriju"
            >
              <XMarkIcon aria-hidden className="h-5 w-5" />
            </button>
            
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              onClick={() =>
                setActive((prev) =>
                  prev === null ? prev : (prev + 1) % images.length
                )
              }
              aria-label="Sljedeća fotografija"
            >
              <span aria-hidden className="text-lg">›</span>
            </button>
          </figure>
        )}
      </div>
    </section>
  );
}

export default Gallery;
