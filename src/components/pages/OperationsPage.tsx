"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import StepCard from "@/components/ui/StepCard";
import StatusBadge from "@/components/ui/StatusBadge";
import ThreatLevel from "@/components/ui/ThreatLevel";

export default function OperationsPage() {
  const t = useTranslations("operations");

  return (
    <>
      <PageHero
        label={t("hero_label")}
        title={t("hero_title")}
        text={t("hero_text")}
        classification="operational"
        status={{ label: "OPS ACTIVE", variant: "green" }}
      />

      {/* ─── THREAT ASSESSMENT BAR ─── */}
      <div className="bg-brand-gray border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[9px] text-brand-text-muted/60 tracking-widest uppercase font-bold">Current Threat Assessment</span>
            <ThreatLevel level="medium" />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-brand-text-muted/60 tracking-widest uppercase">Theater</span>
              <span className="text-xs text-white font-mono">STANTON</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-brand-text-muted/60 tracking-widest uppercase">DEFCON</span>
              <span className="text-xs text-amber-400 font-mono font-bold">3</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-brand-text-muted/60 tracking-widest uppercase">Force Posture</span>
              <StatusBadge label="READY" variant="green" pulse />
            </div>
          </div>
        </div>
      </div>

      {/* ─── MISSION PROFILES ─── */}
      <Section>
        <SectionLabel label={t("missions_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("missions_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {(["security", "combat", "recon", "escort"] as const).map((key, i) => {
            const missionData = t.raw(`missions.${key}`) as any;
            const threat: Record<string, { level: "low" | "medium" | "high" | "critical"; label: string }> = {
              security: { level: "medium", label: "LOW-MED" },
              combat: { level: "high", label: "HIGH" },
              recon: { level: "medium", label: "MODERATE" },
              escort: { level: "medium", label: "MODERATE" },
            };
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-brand-gray border border-white/5 hover:border-brand-red/30 transition-colors p-6 group corner-brackets"
              >
                <div className="absolute top-0 right-0 w-1 h-12 bg-gradient-to-b from-brand-red to-transparent group-hover:h-16 transition-all duration-300" />

                <div className="flex items-center justify-between mb-3">
                  <p className="text-[9px] font-mono text-brand-red/60 tracking-widest uppercase">
                    MIS-{String(i + 1).padStart(3, "0")}
                  </p>
                  <span className="text-[9px] text-amber-400/70 tracking-widest font-bold">
                    THREAT: {threat[key].label}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-2">
                  {missionData?.title}
                </h3>
                <p className="text-xs text-brand-text-muted leading-relaxed mb-3">
                  {missionData?.short_desc}
                </p>

                <ThreatLevel level={threat[key].level} />
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ─── OPERATIONAL DOCTRINE ─── */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label={t("doctrine_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("doctrine_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["precision", "discipline", "speed", "mission"].map((key, i) => {
            const doctrine = t.raw(`doctrine.${key}`) as any;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative border-l-2 border-brand-red pl-6 py-4"
              >
                <h3 className="text-lg font-bold text-brand-red mb-2">
                  {doctrine?.title}
                </h3>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  {doctrine?.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ─── DEPLOYMENT PROCESS ─── */}
      <Section>
        <SectionLabel label={t("process_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("process_title")}
        </h2>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["step1", "step2", "step3", "step4", "step5", "step6"].map((key, i) => (
              <StepCard
                key={key}
                number={String(i + 1).padStart(2, "0")}
                title={t(`process_steps.${key}.title`)}
                text={t(`process_steps.${key}.text`)}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* ─── COMMAND STRUCTURE ─── */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label="Organization" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          Command Hierarchy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              level: "TIER 1",
              clearance: "ALPHA",
              title: "Strategic Command",
              desc: "Senior leadership & corporate strategy. Force allocation, contract oversight, and cross-theater coordination.",
            },
            {
              level: "TIER 2",
              clearance: "BRAVO",
              title: "Field Operations",
              desc: "Mission planning & coordination. Real-time tactical oversight during deployment. Direct comms with Strategic Command.",
            },
            {
              level: "TIER 3",
              clearance: "CHARLIE",
              title: "Operational Units",
              desc: "Division leads & squad commanders. Direct execution, team management, and after-action reporting.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border-t-2 border-brand-red pt-6"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-brand-red/70 tracking-wider uppercase font-semibold">
                  {item.level}
                </p>
                <span className="text-[9px] font-mono text-brand-text-muted/50 tracking-widest">CLEARANCE: {item.clearance}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── OPERATIONAL STATUS DASHBOARD ─── */}
      <Section>
        <SectionLabel label="Real-Time" />
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Operational Status
          </h2>
          <StatusBadge label="LIVE" variant="green" pulse />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: "Force Status", value: "ACTIVE", highlight: true },
            { label: "QRF Response", value: "< 15 min", highlight: false },
            { label: "AO", value: "Stanton", highlight: false },
            { label: "Combat Ready", value: "18", highlight: true },
            { label: "Active Ops", value: "3", highlight: false },
            { label: "Mission Success", value: "98%", highlight: true },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`relative border p-4 corner-brackets ${
                stat.highlight
                  ? "border-brand-red/50 bg-brand-red/5"
                  : "border-white/5 bg-brand-gray/50"
              }`}
            >
              <p className="text-[9px] text-brand-text-muted tracking-widest uppercase font-semibold mb-2">
                {stat.label}
              </p>
              <p className={`text-lg font-black ${stat.highlight ? "text-brand-red" : "text-white"}`}>
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── OPERATIONAL STRUCTURE (existing) ─── */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label={t("structure_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {t("structure_title")}
        </h2>
        <p className="text-brand-text-muted max-w-3xl mb-12 leading-relaxed">
          {t("structure_text")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {["command", "operations", "division", "squad"].map((key, i) => (
            <Card key={key} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-brand-red/30 flex items-center justify-center shrink-0">
                  <span className="text-brand-red font-bold text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t(`structure_hierarchy.${key}.title`)}
                  </h3>
                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    {t(`structure_hierarchy.${key}.text`)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
