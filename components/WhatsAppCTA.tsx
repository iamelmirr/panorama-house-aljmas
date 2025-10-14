import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site.config";
import { cn } from "@/lib/utils";

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
  return (
    <a
      href={SITE.whatsappLink}
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
