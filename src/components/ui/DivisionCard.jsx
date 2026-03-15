export default function DivisionCard({ name, description, icon, code }) {
  return (
    <div className="card-lift group relative overflow-hidden border border-[var(--color-surface-border)] bg-[var(--color-surface)] transition-all duration-500 hover:border-[var(--color-primary)]/50 hover:shadow-[0_0_50px_rgba(196,30,58,0.12)]">
      {/* Animated border sweep — top */}
      <div className="absolute top-0 left-0 h-[1px] w-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/60 to-transparent transition-all duration-700 group-hover:w-full" />
      {/* Animated border sweep — bottom (reverse) */}
      <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-gradient-to-l from-[var(--color-primary)] via-[var(--color-primary)]/60 to-transparent transition-all delay-100 duration-700 group-hover:w-full" />
      {/* Animated border sweep — left */}
      <div className="absolute top-0 left-0 h-0 w-[1px] bg-gradient-to-b from-[var(--color-primary)]/60 to-transparent transition-all delay-75 duration-600 group-hover:h-full" />
      {/* Animated border sweep — right */}
      <div className="absolute bottom-0 right-0 h-0 w-[1px] bg-gradient-to-t from-[var(--color-primary)]/60 to-transparent transition-all delay-150 duration-600 group-hover:h-full" />

      {/* Corner brackets */}
      <div className="absolute top-0 left-0 h-5 w-5 border-t border-l border-[var(--color-primary)]/20 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-[var(--color-primary)]/80" />
      <div className="absolute top-0 right-0 h-5 w-5 border-t border-r border-[var(--color-primary)]/20 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-[var(--color-primary)]/80" />
      <div className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-[var(--color-primary)]/20 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-[var(--color-primary)]/80" />
      <div className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-[var(--color-primary)]/20 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-[var(--color-primary)]/80" />

      {/* Hover glow wash — stronger */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/[0.06] via-transparent to-[var(--color-primary)]/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 p-8">
        {/* Header row: icon + code */}
        <div className="mb-6 flex items-start justify-between">
          <div className="relative flex h-14 w-14 items-center justify-center border border-[var(--color-surface-border)] bg-[var(--color-surface-light)] text-2xl transition-all duration-300 group-hover:border-[var(--color-primary)]/50 group-hover:bg-[var(--color-primary)]/10 group-hover:shadow-[0_0_25px_var(--color-primary-glow)]">
            <span className="transition-transform duration-300 group-hover:scale-110">
              {icon}
            </span>
            {/* Mini corner ticks on icon */}
            <div className="absolute -top-[2px] -left-[2px] h-1.5 w-1.5 border-t border-l border-[var(--color-primary)]/0 transition-all duration-300 group-hover:border-[var(--color-primary)]/60" />
            <div className="absolute -bottom-[2px] -right-[2px] h-1.5 w-1.5 border-b border-r border-[var(--color-primary)]/0 transition-all duration-300 group-hover:border-[var(--color-primary)]/60" />
          </div>
          {code && (
            <div className="flex flex-col items-end gap-1">
              <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.2em] text-[var(--color-muted)]/30 transition-colors duration-300 group-hover:text-[var(--color-primary)]/60">
                {code}
              </span>
              <div className="h-[1px] w-4 bg-[var(--color-surface-border)] transition-all duration-300 group-hover:w-6 group-hover:bg-[var(--color-primary)]/30" />
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-3 font-[family-name:var(--font-orbitron)] text-base font-bold tracking-[0.15em] text-white transition-all duration-300 group-hover:text-glow-subtle">
          {name}
        </h3>

        {/* Divider */}
        <div className="mb-4 h-[1px] w-10 bg-[var(--color-primary)]/30 transition-all duration-500 group-hover:w-24 group-hover:bg-[var(--color-primary)]/70" />

        {/* Description */}
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>

        {/* Bottom status line */}
        <div className="mt-5 flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-green-500/50 shadow-[0_0_4px_rgba(34,197,94,0.4)]" />
          <span className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.2em] text-[var(--color-muted)]/30">
            DIVISION ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
}
