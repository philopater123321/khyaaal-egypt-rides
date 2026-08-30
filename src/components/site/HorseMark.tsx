export function HorseMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path
        d="M17 34c-.8-4.4.3-7.9 3.3-10.6 1.6-1.4 2.4-2.7 2.4-4.4 0-1.3-.5-2.4-1.6-3.4l-2.6-2.4c-.6-.5-.3-1.5.5-1.6l3.6-.5c.5-.1.9-.4 1.1-.9l.8-2.1c.3-.8 1.4-.8 1.7 0l1.5 4c.2.5.6.9 1.1 1l2.9.7c2.9.7 4.8 3.2 4.8 6.1 0 2.1-1 4-2.7 5.2l-1.6 1.1c-1.5 1-2.4 2.7-2.4 4.5V34"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="28.6" cy="17.6" r="1" fill="currentColor" />
    </svg>
  );
}
