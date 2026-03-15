import Link from "next/link";

export default function Button({ href, children, variant = "primary", className = "" }) {
  const base =
    "group/btn relative inline-flex items-center justify-center px-8 py-3 font-[family-name:var(--font-rajdhani)] text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer overflow-hidden";

  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white border border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:shadow-[0_0_30px_var(--color-primary-glow),_0_0_60px_rgba(196,30,58,0.15)] hover:scale-[1.03] active:scale-95",
    outline:
      "bg-transparent text-[var(--color-muted)] border border-[var(--color-surface-border)] hover:border-[var(--color-primary)] hover:text-white hover:shadow-[0_0_25px_var(--color-primary-glow)] hover:scale-[1.03] active:scale-95",
    ghost:
      "bg-transparent text-[var(--color-muted)] border border-transparent hover:text-white hover:bg-white/5 hover:scale-[1.03] active:scale-95",
  };

  const shimmer = (
    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {shimmer}
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button className={classes}>
      {shimmer}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
