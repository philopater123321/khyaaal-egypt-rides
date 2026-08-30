import { Globe } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";

const options: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ar", label: "عربى" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`inline-flex items-center gap-1 border border-gold/60 px-2 py-1.5 ${className}`}
    >
      <Globe className="me-0.5 h-3.5 w-3.5 text-gold/70" aria-hidden />
      {options.map((o, i) => (
        <span key={o.code} className="flex items-center">
          {i > 0 && <span className="mx-1 text-gold/40">|</span>}
          <button
            type="button"
            onClick={() => setLang(o.code)}
            aria-pressed={lang === o.code}
            className={`px-1.5 text-[0.72rem] tracking-[0.14em] transition-colors ${
              lang === o.code
                ? "text-gold font-semibold"
                : "text-foreground/55 hover:text-gold/80"
            }`}
          >
            {o.label}
          </button>
        </span>
      ))}
    </div>
  );
}
