import { MapPin, Navigation } from "lucide-react";
import { locations } from "@/lib/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Locations() {
  return (
    <section id="locations" className="relative bg-cream py-24 text-cream-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Our Locations"
          title="Two stables, two very different horizons"
          copy="Choose the pyramid plateau or the open countryside of Abusir — or ride both across a single stay."
          tone="light"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {locations.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.12}>
              <article className="group flex h-full flex-col overflow-hidden border border-gold-deep/30 bg-white/60 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-deep hover:shadow-[var(--shadow-gold)]">
                <div className="h-64 overflow-hidden">
                  <img
                    src={l.image}
                    alt={l.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-2xl leading-snug text-cream-foreground">{l.name}</h3>
                  <p className="mt-3 flex items-start gap-2 text-sm text-cream-foreground/70">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                    {l.address}
                  </p>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-cream-foreground/75">
                    {l.feature}
                  </p>
                  <a
                    href={l.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center justify-center gap-2 border border-gold-deep px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.22em] text-gold-deep transition-all hover:bg-gold-deep hover:text-cream"
                  >
                    <Navigation className="h-4 w-4" />
                    Open in Google Maps
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
