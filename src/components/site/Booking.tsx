import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { waLink, PHONE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Booking() {
  const { t, lang } = useI18n();
  const b = t.booking;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    location: "giza" as "giza" | "saqqara",
    riders: "2",
  });

  useEffect(() => {
    // keep the selected stable consistent when the language changes
    setForm((f) => ({ ...f }));
  }, [lang]);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = b.message({
      name: form.name,
      phone: form.phone,
      date: form.date,
      location: form.location === "giza" ? b.giza : b.saqqara,
      riders: form.riders,
    });
    window.open(waLink(message), "_blank", "noopener");
  };

  const field =
    "w-full border border-input bg-background/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";
  const label = "block text-[0.66rem] uppercase tracking-[0.22em] text-muted-foreground";

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <Reveal>
          <p className="eyebrow">{b.eyebrow}</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
            {b.titleA} <span className="text-gold-gradient">{b.titleHighlight}</span>
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-7 text-[0.95rem] leading-relaxed text-muted-foreground">{b.copy}</p>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            dir="ltr"
            className="mt-9 inline-flex items-center gap-3 text-sm tracking-[0.12em] text-gold"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={submit}
            className="luxe-card space-y-5 p-8 sm:p-10"
            style={{ transform: "none" }}
          >
            <div>
              <label className={label} htmlFor="name">
                {b.name}
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={set("name")}
                placeholder={b.namePlaceholder}
                className={`mt-2 ${field}`}
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="phone">
                  {b.phone}
                </label>
                <input
                  id="phone"
                  required
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder={b.phonePlaceholder}
                  className={`mt-2 ${field}`}
                />
              </div>
              <div>
                <label className={label} htmlFor="date">
                  {b.date}
                </label>
                <input
                  id="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={set("date")}
                  className={`mt-2 ${field}`}
                />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="location">
                  {b.location}
                </label>
                <select
                  id="location"
                  value={form.location}
                  onChange={set("location")}
                  className={`mt-2 ${field}`}
                >
                  <option value="giza">{b.giza}</option>
                  <option value="saqqara">{b.saqqara}</option>
                </select>
              </div>
              <div>
                <label className={label} htmlFor="riders">
                  {b.riders}
                </label>
                <input
                  id="riders"
                  type="number"
                  min="1"
                  max="30"
                  value={form.riders}
                  onChange={set("riders")}
                  className={`mt-2 ${field}`}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center gap-3 bg-[image:var(--gradient-gold)] px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              {b.submit}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
