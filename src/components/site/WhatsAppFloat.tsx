import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Khyaaal11 on WhatsApp"
      className="pulse-ring fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
