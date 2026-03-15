import Link from "next/link";

export default function Button({ href, children, variant = "primary", className = "" }) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 font-[family-name:var(--font-rajdhani)] text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white border border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:shadow-[0_0_30px_var(--color-primary-glow)] active:scale-95",
    outline:
      "bg-transparent text-[var(--color-muted)] border border-[var(--color-surface-border)] hover:border-[var(--color-primary)] hover:text-white hover:shadow-[0_0_20px_var(--color-primary-glow)] active:scale-95",
    ghost:
      "bg-transparent text-[var(--color-muted)] border border-transparent hover:text-white hover:bg-white/5 active:scale-95",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
