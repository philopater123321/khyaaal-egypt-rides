import { Clock, MessageCircle } from "lucide-react";
import { packages, waLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Packages() {
  const { t } = useI18n();
  const s = t.packagesSection;

  return (
    <section id="experiences" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} copy={s.copy} />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => {
            const c = s.items[i] ?? {
              title: p.title,
              copy: p.copy,
              duration: p.duration,
              badge: p.badge,
            };
            return (
              <Reveal key={p.title} delay={(i % 3) * 0.1}>
                <article className="luxe-card group flex h-full flex-col overflow-hidden">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={p.image}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.16_0.008_260/0.9),transparent_60%)]" />
                    <span className="absolute top-4 start-4 border border-gold/60 bg-background/70 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                      {c.badge}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      {c.duration}
                    </div>
                    <h3 className="mt-4 text-xl leading-snug">{c.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {c.copy}
                    </p>
                    <a
                      href={waLink(s.waMessage(c.title))}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center gap-2 self-start border-b border-gold/50 pb-1 text-[0.7rem] uppercase tracking-[0.22em] text-gold transition-colors hover:border-gold"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      {s.quickBook}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
