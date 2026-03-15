import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const phases = [
  {
    step: "01",
    title: "Contract Acquisition",
    description:
      "Operations begin with contract intake. Leadership evaluates strategic value, risk assessment, and resource allocation before approval.",
    accent: "border-[var(--color-primary)]",
  },
  {
    step: "02",
    title: "Intelligence & Planning",
    description:
      "Recon teams gather field intelligence. Command staff develops operational plans including objectives, timelines, and contingencies.",
    accent: "border-[var(--color-primary)]",
  },
  {
    step: "03",
    title: "Force Assembly",
    description:
      "Division leads mobilize personnel and assets. Teams are briefed, equipped, and staged at the designated rally point.",
    accent: "border-[var(--color-primary)]",
  },
  {
    step: "04",
    title: "Deployment & Execution",
    description:
      "Operatives execute the mission plan with precision coordination. Real-time comms ensure adaptive response to changing conditions.",
    accent: "border-[var(--color-accent)]",
  },
  {
    step: "05",
    title: "Extraction & Debrief",
    description:
      "Post-operation extraction followed by thorough debriefing. After-action reports are filed and lessons integrated into doctrine.",
    accent: "border-[var(--color-primary)]",
  },
];

export default function OperationsSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] py-32">
      <div className="grid-bg absolute inset-0 opacity-15" />

      {/* Decorative side label */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">
        <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.4em] text-[var(--color-muted)]/15 uppercase">
          Operations
        </span>
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading
            tag="Operational Doctrine"
            title="How We Operate"
            description="Every FLUXX PMC deployment follows a structured operational framework designed for maximum efficiency and mission success."
          />
        </ScrollReveal>

        <div className="relative">
          {/* Vertical timeline line — pulsing gradient */}
          <div className="absolute left-8 top-0 bottom-0 w-[1px] md:left-1/2">
            <div className="h-full w-full bg-gradient-to-b from-[var(--color-primary)]/50 via-[var(--color-primary)]/20 to-[var(--color-primary)]/5" />
          </div>

          <div className="space-y-16">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.step} delay={i * 100} direction={i % 2 === 0 ? "up" : "up"}>
                <div
                  className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div className="card-lift group relative border border-[var(--color-surface-border)] bg-[var(--color-background)] p-7 transition-all duration-500 hover:border-[var(--color-primary)]/30">
                      {/* Top accent line */}
                      <div className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--color-primary)]/60 transition-all duration-700 group-hover:w-full" />

                      <div className="mb-2 flex items-center gap-3" style={{ justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                        <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-primary)]/60">
                          PHASE {phase.step}
                        </span>
                        <span className="h-[1px] w-6 bg-[var(--color-primary)]/30" />
                      </div>
                      <h3 className="mb-3 font-[family-name:var(--font-orbitron)] text-sm font-bold tracking-wider text-white">
                        {phase.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                        {phase.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="absolute left-8 top-7 flex h-7 w-7 -translate-x-1/2 items-center justify-center border border-[var(--color-primary)]/60 bg-[var(--color-background)] transition-all duration-300 md:left-1/2">
                    <span className="h-2.5 w-2.5 bg-[var(--color-primary)] shadow-[0_0_12px_var(--color-primary-glow)]" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Terminal node at bottom */}
          <div className="mt-8 flex justify-center md:justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="h-4 w-[1px] bg-[var(--color-primary)]/20" />
              <div className="flex h-4 w-4 items-center justify-center">
                <div className="h-2 w-2 rotate-45 border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/20" />
              </div>
              <span className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.2em] text-[var(--color-muted)]/30">
                CYCLE COMPLETE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
