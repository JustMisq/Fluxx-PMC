import ScrollReveal from "../ui/ScrollReveal";

const timeline = [
  { year: "2947", event: "FLUXX PMC founded in response to escalating instability across the Stanton system." },
  { year: "2948", event: "First contracts executed. Reputation established through high-success-rate extraction operations." },
  { year: "2949", event: "Division structure formalized: Assault, Recon, Logistics, Medical, and Black Ops." },
  { year: "2950", event: "Expansion into Pyro system frontier. First deep-space deployments conducted." },
  { year: "2951", event: "Full operational status across multiple systems. 50+ active operatives on roster." },
];

export default function LoreSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Contrasting background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] via-[#08081a] to-[var(--color-background)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(196,30,58,0.04)_0%,_transparent_60%)]" />
      <div className="hex-bg absolute inset-0 opacity-20" />

      {/* Side label */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">
        <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.4em] text-[var(--color-muted)]/15 uppercase">
          Dossier
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[var(--color-primary)]/40" />
            <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[var(--color-primary)]/60 uppercase">
              Classified Dossier
            </span>
          </div>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left — Narrative */}
          <div>
            <ScrollReveal delay={100}>
              <h2 className="font-[family-name:var(--font-orbitron)] text-4xl font-bold tracking-wider text-white md:text-5xl">
                Origins of
                <br />
                <span className="text-glow-subtle text-[var(--color-primary)]">FLUXX PMC</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-8 text-lg font-light leading-relaxed text-[var(--color-muted-light)]">
                Founded after the growing instability across the Stanton system,
                FLUXX PMC was established as an independent private military
                contractor specializing in high-risk operations and strategic
                deployments.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)]">
                Operating across multiple systems, the organization provides
                reconnaissance, assault, logistics and tactical response
                capabilities for clients requiring elite operational support.
                What began as a small unit of combat veterans has grown into a
                multi-division force with assets deployed across the frontier.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)]">
                FLUXX maintains strict operational neutrality — we execute
                contracts, not politics. Every operative is selected for skill,
                discipline, and the ability to perform under extreme conditions.
                Our record speaks for itself.
              </p>
            </ScrollReveal>

            {/* Founding quote */}
            <ScrollReveal delay={500}>
              <div className="mt-10 border-l-2 border-[var(--color-primary)]/30 pl-6">
                <p className="font-[family-name:var(--font-mono)] text-sm italic leading-relaxed text-[var(--color-muted)]/70">
                  &ldquo;We don&apos;t choose sides. We fulfill contracts. That&apos;s what
                  separates professionals from mercenaries.&rdquo;
                </p>
                <p className="mt-2 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-primary)]/40">
                  — FOUNDING CHARTER, ARTICLE I
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Organization Timeline */}
          <div>
            <ScrollReveal delay={200}>
              <div className="mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[var(--color-primary)]/60" />
                <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.25em] text-[var(--color-muted)]/50 uppercase">
                  Organization Timeline
                </span>
              </div>
            </ScrollReveal>

            <div className="relative border-l border-[var(--color-surface-border)]/50 pl-8">
              {timeline.map((entry, i) => (
                <ScrollReveal key={entry.year} delay={250 + i * 80}>
                  <div className={`relative pb-10 ${i === timeline.length - 1 ? "pb-0" : ""}`}>
                    {/* Node */}
                    <div className="absolute -left-8 top-0.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
                      <div className="h-2 w-2 bg-[var(--color-primary)]/60 shadow-[0_0_8px_var(--color-primary-glow)]" />
                    </div>
                    {/* Year */}
                    <div className="mb-1.5 font-[family-name:var(--font-orbitron)] text-sm font-bold tracking-[0.15em] text-[var(--color-primary)]">
                      {entry.year}
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                      {entry.event}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Classification footer */}
            <ScrollReveal delay={700}>
              <div className="mt-8 border border-[var(--color-surface-border)]/40 bg-[var(--color-surface)]/40 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-yellow-500/60" />
                  <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.2em] text-yellow-500/50">
                    PARTIAL DECLASSIFICATION
                  </span>
                </div>
                <p className="mt-2 font-[family-name:var(--font-mono)] text-[10px] leading-relaxed text-[var(--color-muted)]/40">
                  This dossier represents publicly available information only.
                  Full organizational history requires ONYX clearance level.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
