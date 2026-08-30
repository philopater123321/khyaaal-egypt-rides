import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./Reveal";

export function Testimonials() {
  const { t: tr, dir } = useI18n();
  const s = tr.testimonialsSection;
  const [i, setI] = useState(0);
  const item = s.items[i] ?? s.items[0]!;
  const flag = testimonials[i]?.flag ?? "";
  const go = (d: number) => setI((v) => (v + d + s.items.length) % s.items.length);

  const Prev = dir === "rtl" ? ChevronRight : ChevronLeft;
  const Next = dir === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <section className="relative border-y border-border py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} />

        <div className="mt-14 text-center">
          <Quote className="mx-auto h-8 w-8 text-gold/70" />
          <div className="mt-6 flex justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, st) => (
              <Star key={st} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </div>
          <p className="font-serif mt-8 min-h-[9rem] text-xl leading-relaxed text-foreground/85 sm:text-2xl">
            “{item.quote}”
          </p>
          <p className="mt-6 text-[0.72rem] uppercase tracking-[0.24em] text-gold">{item.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            <span className="me-2">{flag}</span>
            {item.country}
          </p>

          <div className="mt-11 flex items-center justify-center gap-4">
            <button
              aria-label={s.prev}
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center border border-gold/50 text-gold transition-colors hover:bg-gold/10"
            >
              <Prev className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {s.items.map((_, d) => (
                <button
                  key={d}
                  aria-label={s.review(d + 1)}
                  onClick={() => setI(d)}
                  className={`h-1.5 transition-all ${d === i ? "w-8 bg-gold" : "w-3 bg-border"}`}
                />
              ))}
            </div>
            <button
              aria-label={s.next}
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center border border-gold/50 text-gold transition-colors hover:bg-gold/10"
            >
              <Next className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
