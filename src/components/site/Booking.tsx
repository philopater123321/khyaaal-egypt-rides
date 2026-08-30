import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { waLink, PHONE } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    location: "Giza Pyramids",
    riders: "2",
  });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Khyaaal11, I would like to book a ride.
Name: ${form.name}
WhatsApp: ${form.phone}
Preferred date: ${form.date}
Stable: ${form.location}
Riders: ${form.riders}`;
    window.open(waLink(message), "_blank", "noopener");
  };

  const field =
    "w-full border border-input bg-background/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";
  const label = "block text-[0.66rem] uppercase tracking-[0.22em] text-muted-foreground";

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <Reveal>
          <p className="eyebrow">Direct Booking</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
            Reserve your <span className="text-gold-gradient">ride</span>
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-7 text-[0.95rem] leading-relaxed text-muted-foreground">
            Send your details and we will confirm horses, guide and timing on WhatsApp within
            minutes. Sunrise and sunset slots are limited and released daily.
          </p>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
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
                Full name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={set("name")}
                placeholder="Your name"
                className={`mt-2 ${field}`}
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="phone">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  required
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+00 000 000 000"
                  className={`mt-2 ${field}`}
                />
              </div>
              <div>
                <label className={label} htmlFor="date">
                  Preferred date
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
                  Stable location
                </label>
                <select
                  id="location"
                  value={form.location}
                  onChange={set("location")}
                  className={`mt-2 ${field}`}
                >
                  <option>Giza Pyramids</option>
                  <option>Abusir (Golden Hooves)</option>
                </select>
              </div>
              <div>
                <label className={label} htmlFor="riders">
                  Number of riders
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
              Send via WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
