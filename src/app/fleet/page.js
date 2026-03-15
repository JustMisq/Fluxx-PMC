import SectionHeading from "../../components/ui/SectionHeading";
import FleetCard from "../../components/ui/FleetCard";

export const metadata = {
  title: "Fleet — FLUXX PMC",
  description: "The FLUXX PMC fleet registry — vessels for every operational requirement.",
};

const fleet = [
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
  {
    name: "Constellation Andromeda",
    role: "Multi-role gunship",
    manufacturer: "Roberts Space Industries",
    status: "Active",
  },
  {
    name: "Gladius",
    role: "Light fighter",
    manufacturer: "Aegis Dynamics",
    status: "Active",
  },
  {
    name: "Valkyrie",
    role: "Dropship / transport",
    manufacturer: "Anvil Aerospace",
    status: "Active",
  },
];

export default function FleetPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative overflow-hidden py-24">
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/5 blur-[80px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            tag="Asset Registry"
            title="Fleet Manifest"
            description="A comprehensive overview of FLUXX PMC's operational fleet. Each vessel serves a strategic role in our combined-arms doctrine."
          />
        </div>
      </section>

      {/* Fleet grid */}
      <section className="border-t border-[var(--color-surface-border)] bg-[var(--color-surface)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
            {fleet.map((ship) => (
              <FleetCard key={ship.name} {...ship} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-t border-[var(--color-surface-border)] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: "Active Vessels", value: "24+" },
              { label: "Combat Ready", value: "87%" },
              { label: "Manufacturers", value: "6" },
              { label: "Fleet Value", value: "Classified" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.15em] text-[var(--color-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
