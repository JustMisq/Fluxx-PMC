export default function FleetCard({ name, role, manufacturer, status }) {
  return (
    <div className="card-lift group relative overflow-hidden border border-[var(--color-surface-border)] bg-[var(--color-surface)] transition-all duration-500 hover:border-[var(--color-primary)]/40 hover:shadow-[0_0_40px_rgba(196,30,58,0.08)]">
      {/* Animated border sweeps */}
      <div className="absolute top-0 left-0 h-[1px] w-0 bg-gradient-to-r from-[var(--color-primary)] to-transparent transition-all duration-700 group-hover:w-full" />
      <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-gradient-to-l from-[var(--color-primary)] to-transparent transition-all delay-100 duration-700 group-hover:w-full" />

      {/* Corner brackets */}
      <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-[var(--color-primary)]/15 transition-all duration-500 group-hover:h-6 group-hover:w-6 group-hover:border-[var(--color-primary)]/60" />
      <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-[var(--color-primary)]/15 transition-all duration-500 group-hover:h-6 group-hover:w-6 group-hover:border-[var(--color-primary)]/60" />
      <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[var(--color-primary)]/15 transition-all duration-500 group-hover:h-6 group-hover:w-6 group-hover:border-[var(--color-primary)]/60" />
      <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[var(--color-primary)]/15 transition-all duration-500 group-hover:h-6 group-hover:w-6 group-hover:border-[var(--color-primary)]/60" />

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Image placeholder */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[var(--color-surface-light)] to-[var(--color-surface)]">
        <div className="grid-bg-fine absolute inset-0 opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="font-[family-name:var(--font-orbitron)] text-3xl font-bold text-white/8 transition-all duration-500 group-hover:text-white/15 group-hover:scale-110">
              ✦
            </div>
            <div className="mt-2 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-muted)]/30">
              VESSEL PROFILE
            </div>
          </div>
        </div>
        {/* Status badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 border border-[var(--color-surface-border)] bg-[var(--color-surface)]/90 px-3 py-1 backdrop-blur-sm">
          <span className="relative">
            <span
              className={`absolute inset-0 animate-ping rounded-full opacity-40 ${
                status === "Active" ? "bg-green-500" : "bg-yellow-500"
              }`}
            />
            <span
              className={`relative block h-1.5 w-1.5 rounded-full ${
                status === "Active"
                  ? "bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]"
                  : "bg-yellow-500 shadow-[0_0_6px_rgba(234,179,8,0.6)]"
              }`}
            />
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-[var(--color-muted)]">
            {status}
          </span>
        </div>
        {/* Manufacturer tag — top left */}
        <div className="absolute top-3 left-3 font-[family-name:var(--font-mono)] text-[8px] tracking-[0.2em] text-[var(--color-muted)]/25">
          {manufacturer.split(" ")[0].toUpperCase()}
        </div>
      </div>

      {/* Info */}
      <div className="relative z-10 p-6">
        <div className="mb-1.5 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-primary)]/60 uppercase">
          {manufacturer}
        </div>
        <h3 className="mb-2 font-[family-name:var(--font-orbitron)] text-sm font-bold tracking-wider text-white transition-all duration-300 group-hover:text-glow-subtle">
          {name}
        </h3>
        <div className="mb-2 h-[1px] w-8 bg-[var(--color-primary)]/20 transition-all duration-500 group-hover:w-16 group-hover:bg-[var(--color-primary)]/50" />
        <p className="text-sm text-[var(--color-muted)]">{role}</p>
      </div>
    </div>
  );
}
