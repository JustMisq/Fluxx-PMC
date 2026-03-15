import SectionHeading from "../ui/SectionHeading";
import DivisionCard from "../ui/DivisionCard";
import ScrollReveal from "../ui/ScrollReveal";

const divisions = [
  {
    name: "ASSAULT",
    description:
      "Frontline combat and boarding specialists. First in, last out. Our assault teams are trained for direct engagement across all environments.",
    icon: "⚔",
    code: "DIV-A",
  },
  {
    name: "RECON",
    description:
      "Long-range surveillance and intelligence gathering. Recon operatives provide critical battlefield awareness before any engagement.",
    icon: "◎",
    code: "DIV-R",
  },
  {
    name: "LOGISTICS",
    description:
      "Fleet support and transport operations. The backbone of every deployment, ensuring supplies and personnel reach their destination.",
    icon: "⬡",
    code: "DIV-L",
  },
  {
    name: "EMS / MEDICAL",
    description:
      "Battlefield rescue and casualty evacuation. Our medical teams operate under fire to extract and treat wounded operatives.",
    icon: "✚",
    code: "DIV-M",
  },
  {
    name: "BLACK OPS",
    description:
      "Highly classified special operations. Details restricted to authorized personnel only. Clearance level: ONYX required.",
    icon: "◆",
    code: "DIV-X",
  },
];

export default function DivisionsSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] py-32">
      <div className="grid-bg-fine absolute inset-0 opacity-40" />

      {/* Side label */}
      <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 -rotate-90 lg:block">
        <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.4em] text-[var(--color-muted)]/15 uppercase">
          Divisions
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionHeading
            tag="Organizational Structure"
            title="Divisions"
            description="FLUXX PMC operates through specialized divisions, each trained for specific operational roles. Together, they form a complete tactical force."
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((div, i) => (
            <ScrollReveal key={div.name} delay={80 + i * 80}>
              <DivisionCard
                name={div.name}
                description={div.description}
                icon={div.icon}
                code={div.code}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
