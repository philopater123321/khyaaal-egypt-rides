import { Crown, Route, Sparkles } from "lucide-react";
import { img } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const icons = [Crown, Route, Sparkles];

export function About() {
  const { t } = useI18n();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <div className="relative">
            <img
              src={img.rearing}
              alt="Grey Arabian stallion rearing with a rider in the Egyptian desert"
              className="h-[30rem] w-full border border-border object-cover shadow-[var(--shadow-deep)] sm:h-[36rem]"
            />
            <div className="absolute -bottom-6 -end-4 hidden border border-gold/50 bg-background/90 px-7 py-5 backdrop-blur-sm sm:block">
              <p className="font-display text-3xl text-gold">11+</p>
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                {t.about.years}
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
              {t.about.titleA}{" "}
              <span className="text-gold-gradient">{t.about.titleHighlight}</span>{" "}
              {t.about.titleB}
            </h2>
            <div className="gold-rule mt-6" />
            <p className="mt-7 text-[0.95rem] leading-relaxed text-muted-foreground">
              {t.about.p1}
            </p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              {t.about.p2}
            </p>
          </Reveal>

          <div className="mt-12 space-y-5">
            {t.about.values.map((v, i) => {
              const Icon = icons[i] ?? Crown;
              return (
                <Reveal key={v.title} delay={i * 0.1}>
                  <div className="luxe-card group flex gap-5 p-6">
                    <Icon className="h-6 w-6 shrink-0 text-gold transition-transform group-hover:scale-110" />
                    <div>
                      <h3 className="text-lg tracking-wide">{v.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {v.copy}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
