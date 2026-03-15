"use client";
import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const systems = [
  {
    name: "STANTON",
    x: 38,
    y: 35,
    status: "PRIMARY",
    type: "Controlled",
    planets: "Hurston, Crusader, ArcCorp, microTech",
    threat: "LOW",
    description: "Main area of operations. Full logistical infrastructure deployed.",
  },
  {
    name: "PYRO",
    x: 68,
    y: 28,
    status: "ACTIVE",
    type: "Lawless",
    planets: "Pyro I–VI",
    threat: "HIGH",
    description: "Hostile frontier system. Active combat and extraction operations.",
  },
  {
    name: "NEMO",
    x: 22,
    y: 62,
    status: "RECON",
    type: "Developing",
    planets: "Ergo, Nemo III",
    threat: "MEDIUM",
    description: "Forward reconnaissance deployments. Intelligence gathering in progress.",
  },
  {
    name: "CASTRA",
    x: 78,
    y: 58,
    status: "STANDBY",
    type: "UEE Military",
    planets: "Castra I–II",
    threat: "LOW",
    description: "Strategic military staging. Awaiting operational clearance.",
  },
  {
    name: "TERRA",
    x: 52,
    y: 72,
    status: "LIAISON",
    type: "Core World",
    planets: "Terra, Pike, Gen",
    threat: "MINIMAL",
    description: "Diplomatic and contract negotiation hub. Non-combat operations.",
  },
];

const statusColors = {
  PRIMARY: "bg-[var(--color-primary)] shadow-[0_0_12px_var(--color-primary-glow)]",
  ACTIVE: "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.5)]",
  RECON: "bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent-glow)]",
  STANDBY: "bg-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.5)]",
  LIAISON: "bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.5)]",
};

const threatColors = {
  MINIMAL: "text-green-500/70",
  LOW: "text-green-400/70",
  MEDIUM: "text-yellow-500/70",
  HIGH: "text-red-400/70",
};

export default function TheaterSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] py-32">
      {/* Star grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0c0c18_0%,_#0a0a10_100%)]" />
      <div className="grid-bg absolute inset-0 opacity-25" />

      {/* Decorative side label */}
      <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 -rotate-90 lg:block">
        <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.4em] text-[var(--color-muted)]/15 uppercase">
          Theater
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionHeading
            tag="Strategic Command"
            title="Operational Theater"
            description="FLUXX PMC maintains presence across multiple star systems. Each zone is classified by operational status and threat assessment."
          />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative mx-auto max-w-5xl">
            {/* Star map container */}
            <div className="relative aspect-[16/9] overflow-hidden border border-[var(--color-surface-border)]/50 bg-[#06060e]">
              {/* Inner frame corners */}
              <div className="absolute top-0 left-0 h-6 w-6 border-t border-l border-[var(--color-primary)]/30" />
              <div className="absolute top-0 right-0 h-6 w-6 border-t border-r border-[var(--color-primary)]/30" />
              <div className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-[var(--color-primary)]/30" />
              <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-[var(--color-primary)]/30" />

              {/* Grid lines */}
              <div className="grid-bg-fine absolute inset-0 opacity-30" />

              {/* Radar sweep effect */}
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-0 rounded-full border border-[var(--color-primary)]/[0.06]" />
                <div className="absolute inset-[25%] rounded-full border border-[var(--color-primary)]/[0.04]" />
                <div className="absolute inset-[50%] rounded-full border border-dashed border-[var(--color-primary)]/[0.03]" />
              </div>

              {/* Connection lines between systems */}
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <line x1="38%" y1="35%" x2="68%" y2="28%" stroke="rgba(196,30,58,0.08)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="38%" y1="35%" x2="22%" y2="62%" stroke="rgba(196,30,58,0.06)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="68%" y1="28%" x2="78%" y2="58%" stroke="rgba(196,30,58,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="22%" y1="62%" x2="52%" y2="72%" stroke="rgba(196,30,58,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="38%" y1="35%" x2="52%" y2="72%" stroke="rgba(196,30,58,0.04)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* System markers */}
              {systems.map((sys) => (
                <div
                  key={sys.name}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: `${sys.x}%`, top: `${sys.y}%` }}
                  onMouseEnter={() => setActive(sys.name)}
                  onMouseLeave={() => setActive(null)}
                >
                  {/* Ping ring */}
                  <div className={`absolute inset-[-8px] animate-ping rounded-full ${statusColors[sys.status]} opacity-20`} />
                  {/* Core dot */}
                  <div className={`relative h-3 w-3 rounded-full ${statusColors[sys.status]} transition-transform duration-300 ${active === sys.name ? "scale-150" : ""}`} />
                  {/* Label */}
                  <div className={`absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-[family-name:var(--font-mono)] text-[9px] tracking-[0.2em] transition-all duration-300 ${active === sys.name ? "text-white" : "text-[var(--color-muted)]/50"}`}>
                    {sys.name}
                  </div>

                  {/* Tooltip */}
                  {active === sys.name && (
                    <div className="absolute bottom-8 left-1/2 z-20 w-56 -translate-x-1/2 border border-[var(--color-surface-border)] bg-[var(--color-surface)]/95 p-4 text-left backdrop-blur-md">
                      <div className="absolute -bottom-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b border-r border-[var(--color-surface-border)] bg-[var(--color-surface)]/95" />
                      <div className="flex items-center justify-between">
                        <span className="font-[family-name:var(--font-orbitron)] text-[11px] font-bold tracking-wider text-white">
                          {sys.name}
                        </span>
                        <span className={`font-[family-name:var(--font-mono)] text-[8px] tracking-wider ${threatColors[sys.threat]}`}>
                          THREAT: {sys.threat}
                        </span>
                      </div>
                      <div className="mt-1 font-[family-name:var(--font-mono)] text-[9px] tracking-wider text-[var(--color-primary)]/60">
                        STATUS: {sys.status} — {sys.type}
                      </div>
                      <div className="mt-2 text-[11px] leading-relaxed text-[var(--color-muted)]">
                        {sys.description}
                      </div>
                      <div className="mt-2 font-[family-name:var(--font-mono)] text-[8px] text-[var(--color-muted)]/40">
                        BODIES: {sys.planets}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Map header label */}
              <div className="absolute top-3 left-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[var(--color-primary)]/60" />
                <span className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.25em] text-[var(--color-muted)]/40">
                  TACTICAL MAP — CLASSIFIED
                </span>
              </div>
              <div className="absolute top-3 right-4 font-[family-name:var(--font-mono)] text-[8px] tracking-[0.2em] text-[var(--color-muted)]/30">
                UEE SECTOR VIEW
              </div>

              {/* Bottom status bar */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-[var(--color-surface-border)]/30 bg-[var(--color-surface)]/60 px-4 py-1.5 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  {[
                    { color: "bg-[var(--color-primary)]", label: "PRIMARY" },
                    { color: "bg-red-500", label: "COMBAT" },
                    { color: "bg-[var(--color-accent)]", label: "RECON" },
                    { color: "bg-yellow-500", label: "STANDBY" },
                    { color: "bg-green-500", label: "LIAISON" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5">
                      <div className={`h-1.5 w-1.5 rounded-full ${item.color}`} />
                      <span className="font-[family-name:var(--font-mono)] text-[7px] tracking-[0.15em] text-[var(--color-muted)]/40">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="font-[family-name:var(--font-mono)] text-[7px] tracking-[0.15em] text-[var(--color-muted)]/30">
                  {systems.length} SYSTEMS TRACKED
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
