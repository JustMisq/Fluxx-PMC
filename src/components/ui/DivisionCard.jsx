export default function DivisionCard({ name, description, icon, code }) {
  return (
    <div className="card-lift group relative overflow-hidden border border-[var(--color-surface-border)] bg-[var(--color-surface)] transition-all duration-500 hover:border-[var(--color-primary)]/50 hover:shadow-[0_0_40px_rgba(196,30,58,0.08)]">
      {/* Top accent line */}
      <div className="h-[1px] w-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/60 to-transparent transition-all duration-700 group-hover:w-full" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 h-5 w-5 border-t border-l border-[var(--color-primary)]/20 transition-all duration-500 group-hover:h-7 group-hover:w-7 group-hover:border-[var(--color-primary)]/80" />
      <div className="absolute top-0 right-0 h-5 w-5 border-t border-r border-[var(--color-primary)]/20 transition-all duration-500 group-hover:h-7 group-hover:w-7 group-hover:border-[var(--color-primary)]/80" />
      <div className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-[var(--color-primary)]/20 transition-all duration-500 group-hover:h-7 group-hover:w-7 group-hover:border-[var(--color-primary)]/80" />
      <div className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-[var(--color-primary)]/20 transition-all duration-500 group-hover:h-7 group-hover:w-7 group-hover:border-[var(--color-primary)]/80" />

      {/* Hover glow wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 p-8">
        {/* Header row: icon + code */}
        <div className="mb-6 flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center border border-[var(--color-surface-border)] bg-[var(--color-surface-light)] text-2xl transition-all duration-300 group-hover:border-[var(--color-primary)]/40 group-hover:bg-[var(--color-primary)]/10 group-hover:shadow-[0_0_20px_var(--color-primary-glow)]">
            <span className="transition-transform duration-300 group-hover:scale-110">
              {icon}
            </span>
          </div>
          {code && (
            <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.2em] text-[var(--color-muted)]/30 transition-colors duration-300 group-hover:text-[var(--color-primary)]/50">
              {code}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-3 font-[family-name:var(--font-orbitron)] text-base font-bold tracking-[0.15em] text-white">
          {name}
        </h3>

        {/* Divider */}
        <div className="mb-4 h-[1px] w-10 bg-[var(--color-primary)]/30 transition-all duration-500 group-hover:w-20 group-hover:bg-[var(--color-primary)]/70" />

        {/* Description */}
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>
      </div>
    </div>
  );
}
