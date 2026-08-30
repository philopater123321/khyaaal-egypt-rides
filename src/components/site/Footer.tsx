import { Instagram, Youtube, Facebook, Music2, Phone } from "lucide-react";
import { socials, PHONE, WHATSAPP } from "@/lib/site";
import { HorseMark } from "./HorseMark";

const socialIcon: Record<string, typeof Instagram> = {
  Instagram,
  TikTok: Music2,
  Facebook,
  YouTube: Youtube,
};

const quick = [
  { label: "Experiences", href: "#experiences" },
  { label: "Our Locations", href: "#locations" },
  { label: "Gallery", href: "#gallery" },
  { label: "Booking", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <HorseMark className="h-10 w-10 text-gold" />
            <span className="font-display tracking-[0.3em] text-gold">KHYAAAL 11</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Elite Arabian horse experiences at the Giza Pyramids and the Abusir countryside.
          </p>
        </div>

        <div>
          <p className="eyebrow">Quick Links</p>
          <ul className="mt-5 space-y-3">
            {quick.map((q) => (
              <li key={q.href}>
                <a
                  href={q.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {q.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-3 text-sm text-gold"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
          <div className="mt-7 flex gap-3">
            {socials.map((s) => {
              const Icon = socialIcon[s.name] ?? Instagram;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center border border-gold/40 text-gold transition-all hover:bg-gold hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-[0.7rem] tracking-[0.14em] text-muted-foreground">
        © Khyaaal11 Equestrian Experience. All Rights Reserved.
      </div>
    </footer>
  );
}
