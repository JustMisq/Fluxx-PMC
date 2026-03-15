import SectionHeading from "../../components/ui/SectionHeading";
import DivisionCard from "../../components/ui/DivisionCard";

export const metadata = {
  title: "Divisions — FLUXX PMC",
  description: "Explore the specialized divisions of FLUXX PMC.",
};

const divisions = [
  {
    name: "ASSAULT",
    description:
      "Frontline combat and boarding specialists. Our assault teams are trained for direct engagement across all environments — from zero-G station breaches to planetary surface operations. First in, last out.",
    icon: "⚔",
  },
  {
    name: "RECON",
    description:
      "Long-range surveillance and intelligence gathering. Recon operatives deploy ahead of main forces to provide critical battlefield awareness, target acquisition, and threat assessment before any engagement begins.",
    icon: "◎",
  },
  {
    name: "LOGISTICS",
    description:
      "Fleet support and transport operations. The backbone of every successful deployment. Our logistics division ensures supplies, equipment, and personnel reach their destination safely and on schedule.",
    icon: "⬡",
  },
  {
    name: "EMS / MEDICAL",
    description:
      "Battlefield rescue and casualty evacuation. Operating under fire, our medical teams extract wounded operatives, provide field treatment, and coordinate medical evacuations to safe zones.",
    icon: "✚",
  },
  {
    name: "BLACK OPS",
    description:
      "Highly classified special operations division. Mission details are restricted to authorized personnel with ONYX clearance level or above. Specializes in covert insertion, sabotage, and high-value target elimination.",
    icon: "◆",
  },
];

export default function DivisionsPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative overflow-hidden py-24">
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/5 blur-[80px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            tag="Organizational Structure"
            title="Our Divisions"
            description="FLUXX PMC is composed of five specialized divisions, each with distinct roles and capabilities. Together, they form a versatile and lethal military force."
          />
        </div>
      </section>

      {/* Cards */}
      <section className="border-t border-[var(--color-surface-border)] bg-[var(--color-surface)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
            {divisions.map((div) => (
              <DivisionCard
                key={div.name}
                name={div.name}
                description={div.description}
                icon={div.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Doctrine */}
      <section className="border-t border-[var(--color-surface-border)] py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-bold tracking-wider text-white">
            Combined Arms Doctrine
          </h3>
          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
            Our divisions don&apos;t operate in isolation. Every mission leverages
            inter-divisional coordination — assault teams supported by recon
            intelligence, medical teams embedded with frontline units, and
            logistics ensuring sustained operations. This integrated approach is
            what sets FLUXX apart.
          </p>
        </div>
      </section>
    </div>
  );
}
