import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl ${
          tone === "light" ? "text-cream-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      <div className="gold-rule mx-auto mt-6" />
      {copy && (
        <p
          className={`mt-6 text-[0.95rem] leading-relaxed ${
            tone === "light" ? "text-cream-foreground/70" : "text-muted-foreground"
          }`}
        >
          {copy}
        </p>
      )}
    </Reveal>
  );
}
