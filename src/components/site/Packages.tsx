import { Clock, MessageCircle } from "lucide-react";
import { packages, waLink } from "@/lib/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Packages() {
  return (
    <section id="experiences" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Packages & Experiences"
          title="Curated rides across the sands of Giza"
          copy="Every experience is private by default and tailored to your level, your timing and your camera."
        />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1}>
              <article className="luxe-card group flex h-full flex-col overflow-hidden">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.16_0.008_260/0.9),transparent_60%)]" />
                  <span className="absolute top-4 left-4 border border-gold/60 bg-background/70 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                    {p.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-gold" />
                    {p.duration}
                  </div>
                  <h3 className="mt-4 text-xl leading-snug">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.copy}
                  </p>
                  <a
                    href={waLink(
                      `Hello Khyaaal11, I would like to book the "${p.title}" experience. Could you share availability and pricing?`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 self-start border-b border-gold/50 pb-1 text-[0.7rem] uppercase tracking-[0.22em] text-gold transition-colors hover:border-gold"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Quick Book
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
