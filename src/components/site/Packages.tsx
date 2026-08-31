import { MessageCircle } from "lucide-react";
import { catalog, waLink, type CatalogGroup } from "@/lib/site";
import { useI18n, usePrice } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

const groups: CatalogGroup[] = ["vip", "offers", "training"];

export function Packages() {
  const { t, lang } = useI18n();
  const s = t.catalogSection;
  const price = usePrice();

  return (
    <section id="experiences" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} copy={s.copy} />

        <div className="mt-16 space-y-16">
          {groups.map((group) => (
            <div key={group}>
              <div className="flex items-center gap-4">
                <h3 className="text-xl text-gold sm:text-2xl">{s.groups[group]}</h3>
                <span className="h-px flex-1 bg-[linear-gradient(to_right,var(--color-gold),transparent)]" />
              </div>

              <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {catalog
                  .filter((c) => c.group === group)
                  .map((item, i) => {
                    const c = item[lang];
                    const priceLabel = price(item.price);
                    return (
                      <Reveal key={item.id} delay={(i % 3) * 0.1}>
                        <article className="luxe-card group flex h-full flex-col overflow-hidden">
                          <div className="relative h-56 overflow-hidden">
                            <img
                              src={item.image}
                              alt={c.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.16_0.008_260/0.9),transparent_60%)]" />
                          </div>

                          <div className="flex flex-1 flex-col p-7">
                            <h4 className="text-lg leading-snug sm:text-xl">{c.title}</h4>
                            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                              {c.copy}
                            </p>

                            <div className="mt-6 flex flex-wrap items-baseline gap-3">
                              <span className="text-2xl text-gold">{priceLabel}</span>
                              {item.oldPrice ? (
                                <span className="text-sm text-muted-foreground line-through decoration-burgundy/80">
                                  {price(item.oldPrice)}
                                </span>
                              ) : null}
                            </div>

                            <a
                              href={waLink(s.waMessage(c.title, priceLabel))}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-6 inline-flex items-center justify-center gap-2 border border-gold/60 px-6 py-3 text-[0.68rem] uppercase tracking-[0.22em] text-gold transition-all hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-gold)]"
                            >
                              <MessageCircle className="h-3.5 w-3.5" />
                              {s.bookNow}
                            </a>
                          </div>
                        </article>
                      </Reveal>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
