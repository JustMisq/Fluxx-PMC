import SectionHeading from "../../components/ui/SectionHeading";

export const metadata = {
  title: "Operations — FLUXX PMC",
  description: "FLUXX PMC operational doctrine and mission framework.",
};

const phases = [
  {
    step: "01",
    title: "Contract Acquisition",
    description:
      "Operations begin with contract intake. Leadership evaluates strategic value, risk assessment, and resource allocation before approval.",
  },
  {
    step: "02",
    title: "Intelligence & Planning",
    description:
      "Recon teams gather field intelligence. Command staff develops operational plans including objectives, timelines, and contingencies.",
  },
  {
    step: "03",
    title: "Force Assembly",
    description:
      "Division leads mobilize personnel and assets. Teams are briefed, equipped, and staged at the designated rally point.",
  },
  {
    step: "04",
    title: "Deployment & Execution",
    description:
      "Operatives execute the mission plan with precision coordination. Real-time comms ensure adaptive response to changing conditions.",
  },
  {
    step: "05",
    title: "Extraction & Debrief",
    description:
      "Post-operation extraction followed by thorough debriefing. After-action reports are filed and lessons integrated into doctrine.",
  },
];

const opTypes = [
  {
    name: "COMBAT OPERATIONS",
    description: "Direct action engagements including ship-to-ship combat, ground assault, and station boarding.",
    clearance: "STANDARD",
  },
  {
    name: "RECON MISSIONS",
    description: "Surveillance, intelligence gathering, and pathfinding in contested or unexplored systems.",
    clearance: "STANDARD",
  },
  {
    name: "LOGISTICS RUNS",
    description: "Secure transport of cargo, personnel, and equipment across multiple systems.",
    clearance: "STANDARD",
  },
  {
    name: "ESCORT CONTRACTS",
    description: "Convoy protection, VIP transport, and high-value asset security operations.",
    clearance: "ELEVATED",
  },
  {
    name: "CLASSIFIED OPS",
    description: "Mission details restricted. Clearance level ONYX required for access.",
    clearance: "ONYX",
  },
];

export default function OperationsPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative overflow-hidden py-24">
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/5 blur-[80px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            tag="Operational Doctrine"
            title="Operations"
            description="Every FLUXX PMC deployment follows a structured operational framework designed for maximum efficiency and mission success."
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-[var(--color-surface-border)] bg-[var(--color-surface)] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h3 className="mb-12 text-center font-[family-name:var(--font-orbitron)] text-lg font-bold tracking-wider text-white">
            Mission Lifecycle
          </h3>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--color-primary)]/40 via-[var(--color-primary)]/20 to-transparent md:left-1/2" />

            <div className="space-y-12">
              {phases.map((phase, i) => (
                <div
                  key={phase.step}
                  className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div className="group border border-[var(--color-surface-border)] bg-[var(--color-background)] p-6 transition-all duration-500 hover:border-[var(--color-primary)]/30">
                      <div className="mb-2 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] text-[var(--color-primary)]/70">
                        PHASE {phase.step}
                      </div>
                      <h3 className="mb-3 font-[family-name:var(--font-orbitron)] text-sm font-bold tracking-wider text-white">
                        {phase.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                        {phase.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-8 top-6 flex h-6 w-6 -translate-x-1/2 items-center justify-center border border-[var(--color-primary)] bg-[var(--color-background)] md:left-1/2">
                    <span className="h-2 w-2 bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary-glow)]" />
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operation Types */}
      <section className="border-t border-[var(--color-surface-border)] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h3 className="mb-12 text-center font-[family-name:var(--font-orbitron)] text-lg font-bold tracking-wider text-white">
            Operation Types
          </h3>

          <div className="space-y-4">
            {opTypes.map((op) => (
              <div
                key={op.name}
                className="group flex flex-col gap-4 border border-[var(--color-surface-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-primary)]/30 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h4 className="font-[family-name:var(--font-orbitron)] text-sm font-bold tracking-wider text-white">
                    {op.name}
                  </h4>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {op.description}
                  </p>
                </div>
                <div
                  className={`shrink-0 border px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] ${
                    op.clearance === "ONYX"
                      ? "border-[var(--color-primary)]/50 text-[var(--color-primary)]"
                      : op.clearance === "ELEVATED"
                      ? "border-yellow-500/30 text-yellow-500/80"
                      : "border-[var(--color-surface-border)] text-[var(--color-muted)]"
                  }`}
                >
                  {op.clearance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
