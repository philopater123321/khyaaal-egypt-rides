import { Crown, Route, Sparkles } from "lucide-react";
import { img } from "@/lib/site";
import { Reveal } from "./Reveal";

const values = [
  {
    icon: Crown,
    title: "Purebred Arabian Lineage",
    copy: "Our herd is bred and kept to show standard — sound, schooled and cared for daily by farriers, vets and grooms who know each horse by name.",
  },
  {
    icon: Route,
    title: "Breathtaking Iconic Routes",
    copy: "From the Giza plateau's pyramid skyline to the quiet dunes and palm groves of Abusir, every trail is chosen for beauty and safe footing.",
  },
  {
    icon: Sparkles,
    title: "VIP White-Glove Service",
    copy: "Private guides, hotel transfers on request, briefed safety protocol and photography support — arranged before you arrive.",
  },
];

export function About() {
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
            <div className="absolute -bottom-6 -right-4 hidden border border-gold/50 bg-background/90 px-7 py-5 backdrop-blur-sm sm:block">
              <p className="font-display text-3xl text-gold">11+</p>
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                Years in the saddle
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
              A stable built on <span className="text-gold-gradient">bloodline</span> and
              hospitality
            </h2>
            <div className="gold-rule mt-6" />
            <p className="mt-7 text-[0.95rem] leading-relaxed text-muted-foreground">
              Khyaaal11 was founded by horsemen raised beside the pyramids, on the belief that a
              ride in Egypt should feel as considered as a five-star suite. Our Arabians descend
              from royal desert lines — light, willing and famously kind under saddle.
            </p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              Every guest is matched to a horse and a guide, briefed on safety, and accompanied
              from mounting block to final photograph. Beginners are welcome; seasoned riders are
              genuinely challenged.
            </p>
          </Reveal>

          <div className="mt-12 space-y-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="luxe-card group flex gap-5 p-6">
                  <v.icon className="h-6 w-6 shrink-0 text-gold transition-transform group-hover:scale-110" />
                  <div>
                    <h3 className="text-lg tracking-wide">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
