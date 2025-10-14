import { MapPin } from "lucide-react";
import MapEmbed from "@/components/MapEmbed";
import { SITE } from "@/lib/site.config";

export function LocationSection() {
  return (
    <section className="section bg-white" id="lokacija">
      <div className="container-grid grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-forest/70">
            Lokacija
          </p>
          <h2 className="section-heading">U srcu Aljmaša</h2>
          <p className="text-base leading-relaxed text-brand-slate">
            Nalazimo se na adresi <strong>{SITE.address}</strong>. Panorama House
            je smješten na brežuljku koji pruža jedinstveni pogled na Dunav i
            okolnu prirodu. Uživajte u miru sela uz brz pristup svim sadržajima.
          </p>
          <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-brand-sand/80 p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/20 text-brand-forest">
              <MapPin aria-hidden className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-charcoal">Adresa</p>
              <p className="text-sm text-brand-slate">{SITE.address}</p>
            </div>
          </div>
        </div>
        <MapEmbed className="h-full" />
      </div>
    </section>
  );
}

export default LocationSection;
