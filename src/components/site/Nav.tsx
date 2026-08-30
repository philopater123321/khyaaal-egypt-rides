import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/site";
import { HorseMark } from "./HorseMark";

const links = [
  { label: "Home", href: "#home" },
  { label: "Experiences", href: "#experiences" },
  { label: "Our Locations", href: "#locations" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 glass-nav transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="#home" className="flex items-center gap-3">
          <HorseMark className="h-9 w-9 text-gold" />
          <span className="font-display text-base tracking-[0.3em] text-gold sm:text-lg">
            KHYAAAL 11
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[0.8rem] uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 border border-gold/60 px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-gold)] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Book Your Ride
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-gold lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mt-3 space-y-1 border-t border-border px-6 pt-4 pb-3 lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm uppercase tracking-[0.2em] text-foreground/80"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
