"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site.config";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type WhatsAppCTAProps = {
  label?: string;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
};

export function WhatsAppCTA({
  label = "Rezerviši putem WhatsAppa",
  className,
  fullWidth = false,
  onClick,
}: WhatsAppCTAProps) {
  const { t } = useLocale();
  const whatsappUrl = `https://wa.me/${SITE.phone.replace(/[\s+]/g, "")}?text=${encodeURIComponent(t.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cn(
        "btn btn-primary gap-2 shadow-soft",
        fullWidth && "w-full justify-center",
        className
      )}
    >
      <MessageCircle aria-hidden className="h-5 w-5" />
      <span>{label}</span>
    </a>
  );
}

export default WhatsAppCTA;
