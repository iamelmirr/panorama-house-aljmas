import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site.config";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="md:mt-16 bg-brand-charcoal text-brand-sand">
      <div className="container-grid grid gap-12 py-14 md:grid-cols-3 md:items-start">
        <div className="space-y-5 text-center">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/logo.png"
              alt="Panorama House Aljmaš logo"
              width={52}
              height={52}
              className="h-12 w-12 rounded-full object-contain"
            />
            <div>
              <p className="text-lg font-semibold text-brand-charcoal">{SITE.name}</p>
              <p className="text-sm text-gray-500">{SITE.tagline}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
            Kontakt
          </h3>
          <ul className="space-y-3 text-sm text-brand-sand/80">
            <li className="flex items-center justify-center gap-3">
              <Phone className="h-4 w-4" aria-hidden />
              <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center justify-center gap-3">
              <Mail className="h-4 w-4" aria-hidden />
              <a
                href={`mailto:${SITE.email}`}
                className="break-all hover:text-white"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center justify-center gap-3">
              <MapPin className="h-4 w-4" aria-hidden />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
            Društvene mreže
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-brand-sand/80">
            <Link
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <Instagram className="h-4 w-4" aria-hidden />
              Instagram
            </Link>
            <Link
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <Facebook className="h-4 w-4" aria-hidden />
              Facebook
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-grid flex flex-col gap-2 py-6 text-sm text-brand-sand/70 justify-center text-center md:flex-row md:items-center">
          <p>© {year} {SITE.name}. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
