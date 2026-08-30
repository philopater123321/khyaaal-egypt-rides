import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function WhatsAppFloat() {
  const { t } = useI18n();

  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      title={t.whatsapp}
      aria-label={t.whatsapp}
      className="pulse-ring fixed end-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105 sm:end-8 sm:bottom-8"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
