export default function FleetCard({ name, role, manufacturer, status }) {
  return (
    <div className="group relative overflow-hidden border border-[var(--color-surface-border)] bg-[var(--color-surface)] transition-all duration-500 hover:border-[var(--color-primary)]/40">
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-[var(--color-surface-light)] to-[var(--color-surface)] overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="font-[family-name:var(--font-orbitron)] text-3xl font-bold text-white/10 transition-all duration-300 group-hover:text-white/20">
              ✦
            </div>
            <div className="mt-2 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-muted)]/40">
              VESSEL PROFILE
            </div>
          </div>
        </div>
        {/* Status badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 border border-[var(--color-surface-border)] bg-[var(--color-surface)]/90 px-3 py-1 backdrop-blur-sm">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              status === "Active"
                ? "bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]"
                : "bg-yellow-500 shadow-[0_0_6px_rgba(234,179,8,0.6)]"
            }`}
          />
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-[var(--color-muted)]">
            {status}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="mb-1 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-primary)]/70 uppercase">
          {manufacturer}
        </div>
        <h3 className="mb-2 font-[family-name:var(--font-orbitron)] text-sm font-bold tracking-wider text-white">
          {name}
        </h3>
        <p className="text-sm text-[var(--color-muted)]">{role}</p>
      </div>

      {/* Bottom line */}
      <div className="h-[2px] w-0 bg-gradient-to-r from-[var(--color-primary)] to-transparent transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
