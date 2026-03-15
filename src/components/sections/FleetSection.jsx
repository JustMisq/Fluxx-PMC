import SectionHeading from "../ui/SectionHeading";
import FleetCard from "../ui/FleetCard";
import ScrollReveal from "../ui/ScrollReveal";

const ships = [
  {
    name: "Hammerhead",
    role: "Anti-fighter corvette",
    manufacturer: "Aegis Dynamics",
    status: "Active",
  },
  {
    name: "Carrack",
    role: "Exploration & pathfinder",
    manufacturer: "Anvil Aerospace",
    status: "Active",
  },
  {
    name: "Vanguard Sentinel",
    role: "Electronic warfare",
    manufacturer: "Aegis Dynamics",
    status: "Active",
  },
  {
    name: "Cutlass Black",
    role: "Multi-role transport",
    manufacturer: "Drake Interplanetary",
    status: "Active",
  },
  {
    name: "Retaliator Bomber",
    role: "Heavy torpedo bomber",
    manufacturer: "Aegis Dynamics",
    status: "Reserve",
  },
  {
    name: "Mercury Star Runner",
    role: "Data & cargo runner",
    manufacturer: "Crusader Industries",
    status: "Active",
  },
];

export default function FleetSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)]/30 via-transparent to-[var(--color-surface)]/30" />
      <div className="grid-bg-fine absolute inset-0 opacity-20" />

      {/* Side label */}
      <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 -rotate-90 lg:block">
        <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.4em] text-[var(--color-muted)]/15 uppercase">
          Fleet Registry
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionHeading
            tag="Asset Registry"
            title="Fleet Overview"
            description="FLUXX PMC maintains a diverse fleet of vessels for every operational requirement — from frontline combat to deep-space exploration."
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ships.map((ship, i) => (
            <ScrollReveal key={ship.name} delay={80 + i * 80}>
              <FleetCard {...ship} />
            </ScrollReveal>
          ))}
        </div>

        {/* Fleet count badge */}
        <ScrollReveal delay={600}>
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-3 border border-[var(--color-surface-border)] bg-[var(--color-surface)]/60 px-6 py-2.5 backdrop-blur-sm">
              <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-muted)]/60">
                TOTAL REGISTERED ASSETS: 24+
              </span>
              <span className="h-1 w-1 rounded-full bg-green-500/60" />
              <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-green-500/50">
                FLEET OPERATIONAL
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
