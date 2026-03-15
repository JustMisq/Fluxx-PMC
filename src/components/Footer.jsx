import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-surface-border)] bg-[#050507]">
      {/* Top accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-14 pb-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/5 font-[family-name:var(--font-orbitron)] text-[10px] font-bold text-[var(--color-primary)]">
                F
              </div>
              <div className="font-[family-name:var(--font-orbitron)] text-sm font-bold tracking-[0.2em] text-white">
                FLUXX
              </div>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-muted)]/70">
              Private Military Company operating across multiple planetary
              systems. Precision. Discipline. Efficiency.
            </p>
            <div className="mt-5 font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-[var(--color-muted)]/30">
              EST. 2947 — STANTON SECTOR
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 flex items-center gap-2 font-[family-name:var(--font-orbitron)] text-[10px] font-semibold tracking-[0.2em] text-white/60 uppercase">
              <span className="h-[1px] w-4 bg-[var(--color-primary)]/30" />
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/divisions", label: "Divisions" },
                { href: "/fleet", label: "Fleet" },
                { href: "/operations", label: "Operations" },
                { href: "/join", label: "Enlist" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-[13px] text-[var(--color-muted)]/60 transition-all duration-200 hover:text-white"
                >
                  <span className="h-[1px] w-0 bg-[var(--color-primary)] transition-all duration-200 group-hover:w-3" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="mb-5 flex items-center gap-2 font-[family-name:var(--font-orbitron)] text-[10px] font-semibold tracking-[0.2em] text-white/60 uppercase">
              <span className="h-[1px] w-4 bg-[var(--color-primary)]/30" />
              Divisions
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { code: "DIV-A", label: "Assault" },
                { code: "DIV-R", label: "Recon" },
                { code: "DIV-L", label: "Logistics" },
                { code: "DIV-M", label: "Medical" },
                { code: "DIV-X", label: "Spec Ops" },
              ].map((div) => (
                <div key={div.code} className="flex items-center gap-3 text-[13px] text-[var(--color-muted)]/60">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-primary)]/40">
                    {div.code}
                  </span>
                  {div.label}
                </div>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <h4 className="mb-5 flex items-center gap-2 font-[family-name:var(--font-orbitron)] text-[10px] font-semibold tracking-[0.2em] text-white/60 uppercase">
              <span className="h-[1px] w-4 bg-[var(--color-primary)]/30" />
              System
            </h4>
            <div className="flex items-center gap-2">
              <span className="relative h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]">
                <span className="absolute inset-0 animate-ping rounded-full bg-green-500/40" />
              </span>
              <span className="text-[13px] text-[var(--color-muted)]/70">
                All Systems Operational
              </span>
            </div>
            <div className="mt-4 space-y-1.5 border-l border-[var(--color-surface-border)] pl-3 font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-[var(--color-muted)]/30">
              <div>NODE: <span className="text-green-500/60">ACTIVE</span></div>
              <div>ENCRYPTION: AES-256</div>
              <div>CLEARANCE: PUBLIC</div>
              <div>UPTIME: 99.97%</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-surface-border)]/30 pt-6 md:flex-row">
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-[var(--color-muted)]/30">
            © {new Date().getFullYear()} FLUXX PMC — ALL RIGHTS RESERVED
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-[var(--color-muted)]/20">
            STAR CITIZEN® IS A REGISTERED TRADEMARK OF CLOUD IMPERIUM GAMES
          </p>
        </div>
      </div>
    </footer>
  );
}
