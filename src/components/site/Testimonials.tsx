import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import { SectionHeading } from "./Reveal";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i]!;
  const go = (d: number) =>
    setI((v) => (v + d + testimonials.length) % testimonials.length);

  return (
    <section className="relative border-y border-border py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <SectionHeading eyebrow="Guest Reviews" title="Told by those who rode" />

        <div className="mt-14 text-center">
          <Quote className="mx-auto h-8 w-8 text-gold/70" />
          <div className="mt-6 flex justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </div>
          <p className="font-serif mt-8 min-h-[9rem] text-xl leading-relaxed text-foreground/85 sm:text-2xl">
            “{t.quote}”
          </p>
          <p className="mt-6 text-[0.72rem] uppercase tracking-[0.24em] text-gold">
            {t.name}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            <span className="mr-2">{t.flag}</span>
            {t.country}
          </p>

          <div className="mt-11 flex items-center justify-center gap-4">
            <button
              aria-label="Previous review"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center border border-gold/50 text-gold transition-colors hover:bg-gold/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, d) => (
                <button
                  key={d}
                  aria-label={`Review ${d + 1}`}
                  onClick={() => setI(d)}
                  className={`h-1.5 transition-all ${
                    d === i ? "w-8 bg-gold" : "w-3 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next review"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center border border-gold/50 text-gold transition-colors hover:bg-gold/10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
