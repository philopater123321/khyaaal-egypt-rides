import { useState } from "react";
import { Instagram, Youtube, Facebook, Music2 } from "lucide-react";
import { gallery, socials } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

const tabs = ["All", "Pyramid Rides", "Saqqara Trails", "Photoshoots"] as const;

const socialIcon: Record<string, typeof Instagram> = {
  Instagram,
  TikTok: Music2,
  Facebook,
  YouTube: Youtube,
};

export function Gallery() {
  const { t } = useI18n();
  const s = t.gallerySection;
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const items = tab === "All" ? gallery : gallery.filter((g) => g.category === tab);

  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} copy={s.copy} />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tabs.map((tb) => (
            <button
              key={tb}
              onClick={() => setTab(tb)}
              className={`border px-6 py-2.5 text-[0.68rem] uppercase tracking-[0.2em] transition-all ${
                tab === tb
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold"
              }`}
            >
              {s.tabs[tb]}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {items.map((g, i) => (
            <Reveal key={g.src + i} delay={(i % 3) * 0.08}>
              <figure className="group relative overflow-hidden border border-border">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-[linear-gradient(to_top,oklch(0.14_0.008_260/0.94),transparent)] px-5 pt-10 pb-5 text-[0.68rem] uppercase tracking-[0.2em] text-gold transition-transform duration-500 group-hover:translate-y-0">
                  {s.tabs[g.category]}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="flex flex-col items-center gap-7 border border-border bg-card px-8 py-12 text-center">
            <p className="eyebrow">{s.followEyebrow}</p>
            <h3 className="max-w-xl text-2xl leading-snug sm:text-3xl">{s.followTitle}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socials.map((so) => {
                const Icon = socialIcon[so.name] ?? Instagram;
                return (
                  <a
                    key={so.name}
                    href={so.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={so.name}
                    className="flex h-12 w-12 items-center justify-center border border-gold/50 text-gold transition-all hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-gold)]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
