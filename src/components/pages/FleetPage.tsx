"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import StatusBadge from "@/components/ui/StatusBadge";
import ThreatLevel from "@/components/ui/ThreatLevel";

type ShipRole = "combat" | "support" | "recon" | "transport";

interface Ship {
  name: string;
  manufacturer: string;
  role: string;
  division: string;
  crew: string;
  status: "ACTIVE" | "RESERVE" | "MAINTENANCE";
  category: ShipRole;
  callsign: string;
  lore: string;
  specs: { label: string; value: string }[];
}

const fleet: Ship[] = [
  {
    name: "Hammerhead",
    manufacturer: "Aegis Dynamics",
    role: "Anti-Fighter Corvette",
    division: "Assault Division",
    crew: "6-8",
    status: "ACTIVE",
    category: "combat",
    callsign: "ANVIL-1",
    lore: "The backbone of FLUXX fleet superiority. When a Hammerhead drops into your AO, the fight is already decided. Our crews have logged hundreds of hours in coordinated turret engagements.",
    specs: [
      { label: "Armament", value: "4x Manned Turrets" },
      { label: "Shield", value: "Capital-Class" },
      { label: "Role", value: "Area Denial / Escort" },
    ],
  },
  {
    name: "Redeemer",
    manufacturer: "Aegis Dynamics",
    role: "Gunship",
    division: "Assault Division",
    crew: "3-5",
    status: "ACTIVE",
    category: "combat",
    callsign: "SPECTRE-2",
    lore: "Close air support platform for ground operations and contested insertions. The Redeemer is the last thing hostiles see before the assault team hits the ground.",
    specs: [
      { label: "Armament", value: "2x Remote Turrets + Pilot Weapons" },
      { label: "Shield", value: "Heavy Fighter" },
      { label: "Role", value: "Close Air Support" },
    ],
  },
  {
    name: "Vanguard Sentinel",
    manufacturer: "Aegis Dynamics",
    role: "Electronic Warfare",
    division: "Recon Division",
    crew: "2",
    status: "ACTIVE",
    category: "recon",
    callsign: "GHOST-7",
    lore: "Our primary EW platform. The Sentinel disrupts enemy comms and targeting systems before the main force engages. If you're fighting blind, GHOST-7 is why.",
    specs: [
      { label: "Armament", value: "Nose Guns + EMP" },
      { label: "Shield", value: "Heavy Fighter" },
      { label: "Role", value: "EW / Disruption" },
    ],
  },
  {
    name: "Eclipse",
    manufacturer: "Aegis Dynamics",
    role: "Stealth Bomber",
    division: "Recon Division",
    crew: "1",
    status: "ACTIVE",
    category: "combat",
    callsign: "SHADOW-1",
    lore: "Silent. Lethal. The Eclipse delivers decisive strike capability from beyond detection range. Three torpedoes. One kill. SHADOW-1 has never missed a primary target.",
    specs: [
      { label: "Armament", value: "3x Size 9 Torpedoes" },
      { label: "Shield", value: "Light Stealth" },
      { label: "Role", value: "Strike / Elimination" },
    ],
  },
  {
    name: "Cutlass Black",
    manufacturer: "Drake Interplanetary",
    role: "Multi-Role Transport",
    division: "Logistics Division",
    crew: "2-3",
    status: "ACTIVE",
    category: "transport",
    callsign: "MULE-3",
    lore: "The workhorse of FLUXX logistics. Versatile, tough, and always available. When operators need extraction or resupply in a contested zone, MULE-3 delivers.",
    specs: [
      { label: "Cargo", value: "46 SCU" },
      { label: "Shield", value: "Medium" },
      { label: "Role", value: "Transport / Dropship" },
    ],
  },
  {
    name: "Carrack",
    manufacturer: "Anvil Aerospace",
    role: "Exploration / Command Ship",
    division: "Strategic Command",
    crew: "4-6",
    status: "ACTIVE",
    category: "support",
    callsign: "CITADEL",
    lore: "Mobile command center and forward operating base. The Carrack serves as our C2 platform during extended operations. Medbay, hangar, and drone bay make it self-sufficient for weeks.",
    specs: [
      { label: "Features", value: "Medbay, Hangar, Drone Bay" },
      { label: "Shield", value: "Capital-Class" },
      { label: "Role", value: "Mobile HQ / C2 Platform" },
    ],
  },
  {
    name: "Terrapin",
    manufacturer: "Anvil Aerospace",
    role: "Pathfinder / Scanner",
    division: "Recon Division",
    crew: "1-2",
    status: "ACTIVE",
    category: "recon",
    callsign: "VIPER-4",
    lore: "Built like a tank, flies like a scout. The Terrapin's long-range scanning suite feeds intelligence to command before the first shot is fired. VIPER-4 is our eyes beyond the horizon.",
    specs: [
      { label: "Sensors", value: "Long-Range Scanner Suite" },
      { label: "Shield", value: "Heavy (for size)" },
      { label: "Role", value: "Surveillance / Intel" },
    ],
  },
  {
    name: "Cutlass Red",
    manufacturer: "Drake Interplanetary",
    role: "Medical / SAR",
    division: "Medical Division",
    crew: "2",
    status: "ACTIVE",
    category: "support",
    callsign: "LIFELINE-1",
    lore: "When operators go down, LIFELINE-1 is the difference between a casualty and a recovery. Our dedicated CASEVAC platform with three medical beds for battlefield trauma response.",
    specs: [
      { label: "Features", value: "Medical Beds x3" },
      { label: "Shield", value: "Medium" },
      { label: "Role", value: "CASEVAC / Field Medicine" },
    ],
  },
];

const categories: { key: ShipRole | "all"; label: string }[] = [
  { key: "all", label: "All Assets" },
  { key: "combat", label: "Combat" },
  { key: "recon", label: "Recon" },
  { key: "support", label: "Support" },
  { key: "transport", label: "Transport" },
];

export default function FleetPage() {
  const [filter, setFilter] = useState<ShipRole | "all">("all");
  const [selectedShip, setSelectedShip] = useState<Ship | null>(null);

  const filtered = filter === "all" ? fleet : fleet.filter((s) => s.category === filter);

  const statusColor = {
    ACTIVE: "green" as const,
    RESERVE: "amber" as const,
    MAINTENANCE: "red" as const,
  };

  return (
    <>
      <PageHero
        label="Fleet Registry"
        title="Operational Assets"
        text="FLUXX PMC operates a diversified arsenal of combat, ISR, and support platforms. Every asset is mission-configured, crew-certified, and maintained at deployment-ready status. Our fleet doesn't sit in hangars — it holds the line."
        classification="restricted"
        status={{ label: "FLEET COMBAT READY", variant: "green" }}
      />

      {/* ─── FLEET OVERVIEW STATS ─── */}
      <Section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total Assets", value: String(fleet.length), highlight: true },
            { label: "Combat Ships", value: String(fleet.filter((s) => s.category === "combat").length), highlight: false },
            { label: "Support / Recon", value: String(fleet.filter((s) => s.category === "support" || s.category === "recon").length), highlight: false },
            { label: "Fleet Status", value: "COMBAT READY", highlight: true },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`relative border p-5 corner-brackets ${
                stat.highlight ? "border-brand-red/50 bg-brand-red/5" : "border-white/5 bg-brand-gray/50"
              }`}
            >
              <p className="text-[10px] text-brand-text-muted tracking-widest uppercase font-semibold mb-2">
                {stat.label}
              </p>
              <p className={`text-xl font-black ${stat.highlight ? "text-brand-red" : "text-white"}`}>
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-5 py-3 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300 relative ${
                filter === cat.key ? "text-brand-red" : "text-brand-text-muted hover:text-white"
              }`}
            >
              {cat.label}
              {filter === cat.key && (
                <motion.div
                  layoutId="fleetTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Ship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((ship, i) => (
              <motion.div
                key={ship.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                onClick={() => setSelectedShip(ship)}
                className="relative bg-brand-gray border border-white/5 hover:border-brand-red/30 transition-all duration-300 p-6 cursor-pointer group corner-brackets"
              >
                <div className="absolute top-0 right-0 w-1 h-10 bg-gradient-to-b from-brand-red to-transparent group-hover:h-16 transition-all duration-300" />

                <div className="flex items-start justify-between mb-1">
                  <p className="text-[10px] font-mono text-brand-red/80 tracking-widest">{ship.callsign}</p>
                  <StatusBadge label={ship.status} variant={statusColor[ship.status]} pulse={ship.status === "ACTIVE"} />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-brand-red transition-colors mb-0.5">
                  {ship.name}
                </h3>
                <p className="text-[10px] text-brand-text-muted/60 tracking-wider uppercase mb-3">
                  {ship.manufacturer}
                </p>

                <p className="text-xs text-brand-red/70 font-medium tracking-wider mb-3 uppercase">
                  {ship.role}
                </p>

                <div className="pt-3 border-t border-white/5 space-y-2">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-brand-text-muted/60 tracking-wider uppercase">Division</span>
                    <span className="text-brand-text-muted">{ship.division}</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-brand-text-muted/60 tracking-wider uppercase">Crew</span>
                    <span className="text-brand-text-muted">{ship.crew}</span>
                  </div>
                </div>

                <p className="text-[9px] text-brand-text-muted/30 tracking-wider mt-4 text-right">
                  CLICK FOR DETAILS
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>

      {/* ─── FLEET DOCTRINE ─── */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label="Doctrine" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          Fleet Employment Doctrine
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Multi-Layer Formation",
              text: "Capital ships at center, fighters screen the perimeter, recon assets extend sensor range. Every formation has depth and redundancy.",
            },
            {
              title: "Role Specialization",
              text: "No ship operates outside its designated role. Assault ships assault. Recon ships scan. Logistics ships supply. Discipline in employment wins engagements.",
            },
            {
              title: "Rapid Reconfiguration",
              text: "FLUXX fleet elements can reconfigure from escort to combat posture in under 5 minutes. Modular task forces ensure adaptability against evolving threats.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative border-l-2 border-brand-red pl-6 py-4"
            >
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── SHIP DETAIL MODAL ─── */}
      <AnimatePresence>
        {selectedShip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedShip(null)}
            className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-gray border border-brand-red/30 max-w-lg w-full"
            >
              {/* Classification header */}
              <div className="bg-brand-red/10 border-b border-brand-red/30 py-2 px-6 flex items-center justify-between">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-red/80">
                  ASSET REGISTRY — RESTRICTED
                </span>
                <button
                  onClick={() => setSelectedShip(null)}
                  className="text-brand-text-muted hover:text-white transition-colors text-lg leading-none"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 lg:p-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[10px] font-mono text-brand-red/80 tracking-widest">{selectedShip.callsign}</p>
                    <StatusBadge label={selectedShip.status} variant={statusColor[selectedShip.status]} pulse={selectedShip.status === "ACTIVE"} />
                  </div>
                  <h2 className="text-2xl font-black text-white mb-1">{selectedShip.name}</h2>
                  <p className="text-[10px] text-brand-text-muted/60 tracking-wider uppercase mb-1">
                    {selectedShip.manufacturer}
                  </p>
                  <p className="text-sm text-brand-red/70 font-medium tracking-wider uppercase">
                    {selectedShip.role}
                  </p>
                </div>

                {/* Operational Lore */}
                <div className="border-l-2 border-brand-red/30 pl-4">
                  <p className="text-[9px] text-brand-red/60 tracking-widest uppercase font-bold mb-2">Operational History</p>
                  <p className="text-sm text-brand-text-muted/80 leading-relaxed italic">{selectedShip.lore}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-brand-dark/50 p-3 border border-white/5">
                    <p className="text-[9px] text-brand-red/60 tracking-widest uppercase font-bold mb-1">Division</p>
                    <p className="text-sm text-brand-text-muted">{selectedShip.division}</p>
                  </div>
                  <div className="bg-brand-dark/50 p-3 border border-white/5">
                    <p className="text-[9px] text-brand-red/60 tracking-widest uppercase font-bold mb-1">Crew</p>
                    <p className="text-sm text-brand-text-muted">{selectedShip.crew} operators</p>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <p className="text-[9px] text-brand-red/60 tracking-widest uppercase font-bold mb-3">
                    Technical Specifications
                  </p>
                  <div className="space-y-3">
                    {selectedShip.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between items-center">
                        <span className="text-[10px] text-brand-text-muted/60 tracking-wider uppercase">{spec.label}</span>
                        <span className="text-sm text-brand-text-muted font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <p className="text-[9px] text-brand-text-muted/40 tracking-wider font-mono">
                    FLUXX-FLEET-REG // {selectedShip.callsign} // {selectedShip.name.toUpperCase().replace(/ /g, "-")}-001
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
