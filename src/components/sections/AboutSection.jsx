"use client";
import ScrollReveal from "../ui/ScrollReveal";
import HudFrame from "../ui/HudFrame";

const values = [
  {
    icon: "⬡",
    title: "Precision",
    description:
      "Every operation is calculated and executed with surgical accuracy. We leave nothing to chance.",
  },
  {
    icon: "◈",
    title: "Discipline",
    description:
      "A strict chain of command and code of conduct ensures efficiency at every level of operations.",
  },
  {
    icon: "△",
    title: "Loyalty",
    description:
      "FLUXX operatives stand by the contract and by each other. Trust is the foundation of our effectiveness.",
  },
  {
    icon: "◇",
    title: "Adaptability",
    description:
      "From deep-space recon to planetary siege, our teams adapt to any theater of operations.",
  },
];

const stats = [
  { value: "50+", label: "Active Operatives" },
  { value: "200+", label: "Missions Completed" },
  { value: "5", label: "Divisions" },
  { value: "99.2%", label: "Mission Success Rate" },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] via-[var(--color-surface)]/50 to-[var(--color-background)]" />
      <div className="hex-bg absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section label */}
        <ScrollReveal>
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[var(--color-primary)]/40" />
            <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[var(--color-primary)]/60 uppercase">
              Intelligence Briefing
            </span>
          </div>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left — Large title + description */}
          <div>
            <ScrollReveal delay={100}>
              <h2 className="font-[family-name:var(--font-orbitron)] text-4xl font-bold tracking-wider text-white md:text-5xl lg:text-6xl">
                Who
                <br />
                <span className="text-glow-subtle text-[var(--color-primary)]">We Are</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-8 text-lg font-light leading-relaxed text-[var(--color-muted-light)]">
                FLUXX PMC is a private military organization operating across
                the Star Citizen universe. Founded on principles of precision
                and discipline, we execute contracts ranging from reconnaissance
                missions to full-scale military operations.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                Where jurisdictions end, the instrument begins. We don&apos;t
                pick sides — we execute the contract. Every operative is held to
                the highest standard of professionalism.
              </p>
            </ScrollReveal>

            {/* Decorative quote */}
            <ScrollReveal delay={400}>
              <div className="mt-8 border-l-2 border-[var(--color-primary)]/30 pl-6">
                <p className="font-[family-name:var(--font-mono)] text-sm italic text-[var(--color-muted)]/70 leading-relaxed">
                  &ldquo;Precision is not a goal — it is a requirement. Every
                  round counts, every decision matters, every operative is
                  essential.&rdquo;
                </p>
                <p className="mt-2 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-primary)]/40">
                  — FLUXX COMMAND
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Value cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={150 + i * 100}>
                <HudFrame className="card-lift group h-full border border-[var(--color-surface-border)] bg-[var(--color-surface)] p-7 transition-all duration-500 hover:border-[var(--color-primary)]/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center border border-[var(--color-surface-border)] text-lg text-[var(--color-primary)] transition-all duration-300 group-hover:border-[var(--color-primary)]/40 group-hover:shadow-[0_0_15px_var(--color-primary-glow)]">
                      {value.icon}
                    </div>
                    <h3 className="mb-2 font-[family-name:var(--font-orbitron)] text-xs font-bold tracking-[0.15em] text-white">
                      {value.title}
                    </h3>
                    <div className="mb-3 h-[1px] w-8 bg-[var(--color-primary)]/30 transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--color-primary)]/60" />
                    <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                      {value.description}
                    </p>
                  </div>
                </HudFrame>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <ScrollReveal delay={200}>
          <div className="mt-24 border border-[var(--color-surface-border)] bg-[var(--color-surface)]/60 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`group p-8 text-center transition-colors hover:bg-[var(--color-primary)]/[0.03] ${
                    i < stats.length - 1 ? "border-r border-[var(--color-surface-border)]" : ""
                  } ${i < 2 ? "border-b border-[var(--color-surface-border)] md:border-b-0" : ""}`}
                >
                  <div className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white transition-all group-hover:text-glow-subtle md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
