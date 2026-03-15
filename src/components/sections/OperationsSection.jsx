import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const missions = [
  {
    code: "OP-RCN",
    title: "Recon Missions",
    description:
      "Long range surveillance and intel gathering. Scout teams deploy into hostile or uncharted territory to map threats, identify assets, and report enemy force composition before main operations begin.",
    icon: "◎",
    clearance: "STANDARD",
  },
  {
    code: "OP-AST",
    title: "Assault Contracts",
    description:
      "Direct combat operations and boarding actions. Full-scale offensive deployments against fortified targets, including ship-to-ship combat, ground assaults, and orbital strike coordination.",
    icon: "⚔",
    clearance: "CLASSIFIED",
  },
  {
    code: "OP-EXT",
    title: "Extraction Operations",
    description:
      "Personnel or asset recovery in hostile environments. High-risk rescue missions behind enemy lines, including downed pilot recovery, VIP extraction, and sensitive cargo retrieval.",
    icon: "△",
    clearance: "RESTRICTED",
  },
  {
    code: "OP-LOG",
    title: "Logistics Deployments",
    description:
      "Transport, resupply, and operational support. Convoy protection, forward operating base establishment, fuel and munitions delivery across contested systems.",
    icon: "⬡",
    clearance: "STANDARD",
  },
  {
    code: "OP-BLK",
    title: "Black Operations",
    description:
      "Covert missions with no official record. Targets, methods, and outcomes are classified at the highest level. Only Onyx-cleared operatives are briefed.",
    icon: "◆",
    clearance: "ONYX",
  },
];

const clearanceColor = {
  STANDARD: "text-green-500/60 border-green-500/20",
  CLASSIFIED: "text-yellow-500/60 border-yellow-500/20",
  RESTRICTED: "text-orange-500/60 border-orange-500/20",
  ONYX: "text-red-500/60 border-red-500/20",
};

export default function OperationsSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0c0c18_0%,_#0a0a10_100%)]" />
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
            tag="Mission Doctrine"
            title="Operations"
            description="FLUXX PMC conducts specialized mission types across all theaters. Each operation follows strict doctrinal protocols and clearance requirements."
          />
        </ScrollReveal>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-[1px] md:left-1/2">
            <div className="h-full w-full bg-gradient-to-b from-[var(--color-primary)]/50 via-[var(--color-primary)]/15 to-[var(--color-primary)]/5" />
          </div>

          <div className="space-y-20">
            {missions.map((mission, i) => (
              <ScrollReveal key={mission.code} delay={i * 100}>
                <div
                  className={`relative flex flex-col gap-6 md:flex-row md:items-start ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div className="card-lift group relative border border-[var(--color-surface-border)] bg-[var(--color-background)] p-8 transition-all duration-500 hover:border-[var(--color-primary)]/30">
                      {/* Animated top accent */}
                      <div className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--color-primary)]/60 transition-all duration-700 group-hover:w-full" />
                      {/* Corner brackets */}
                      <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-[var(--color-primary)]/15 transition-all duration-500 group-hover:border-[var(--color-primary)]/50" />
                      <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[var(--color-primary)]/15 transition-all duration-500 group-hover:border-[var(--color-primary)]/50" />
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative">
                        {/* Header */}
                        <div className="mb-4 flex items-center gap-3" style={{ justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-primary)]/60">
                            {mission.code}
                          </span>
                          <span className="h-[1px] w-6 bg-[var(--color-primary)]/30" />
                          <span className={`border px-2 py-0.5 font-[family-name:var(--font-mono)] text-[8px] tracking-[0.15em] ${clearanceColor[mission.clearance]}`}>
                            {mission.clearance}
                          </span>
                        </div>

                        {/* Icon + Title */}
                        <div className="mb-1 text-xl text-[var(--color-primary)]/40 transition-colors duration-300 group-hover:text-[var(--color-primary)]/70" style={{ textAlign: i % 2 === 0 ? "right" : "left" }}>
                          {mission.icon}
                        </div>
                        <h3 className="mb-3 font-[family-name:var(--font-orbitron)] text-sm font-bold tracking-wider text-white">
                          {mission.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                          {mission.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="absolute left-8 top-8 flex h-8 w-8 -translate-x-1/2 items-center justify-center border border-[var(--color-primary)]/50 bg-[var(--color-background)] transition-all duration-300 md:left-1/2">
                    <span className="h-3 w-3 bg-[var(--color-primary)] shadow-[0_0_14px_var(--color-primary-glow)]" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Terminal node */}
          <div className="mt-10 flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="h-6 w-[1px] bg-[var(--color-primary)]/20" />
              <div className="flex h-5 w-5 items-center justify-center">
                <div className="h-2.5 w-2.5 rotate-45 border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/20" />
              </div>
              <span className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.2em] text-[var(--color-muted)]/30">
                END OF DOCTRINE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
