"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import StatusBadge from "@/components/ui/StatusBadge";
import Tabs from "@/components/ui/Tabs";
import { EXTERNAL_LINKS } from "@/config/external-links";

const divisions = ["pilots_logistics", "assault", "recon"] as const;

export default function RecruitmentPage() {
  const t = useTranslations("recruitment");

  const requirementKeys = ["r1", "r2", "r3", "r4", "r5", "r6"] as const;

  return (
    <>
      <PageHero
        label={t("hero_label")}
        title={t("hero_title")}
        text={t("hero_text")}
        classification="restricted"
        status={{ label: "RECRUITING", variant: "green" }}
      />

      {/* ─── SELECTION POLICY (ELITE FILTER) ─── */}
      <Section className="bg-brand-red/5 border-y-2 border-brand-red/30">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <StatusBadge label="ADVISORY" variant="amber" />
            <span className="text-[10px] text-brand-text-muted/50 tracking-wider font-mono">
              FLUXX-HR-PROTOCOL-7
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Selection Policy
          </h2>
          <p className="text-brand-text-muted leading-relaxed mb-4">
            FLUXX PMC does not accept all applicants. We are not a casual gaming group. We are not a &quot;community.&quot; We are a structured military organization operating under strict operational doctrine with zero room for passengers.
          </p>
          <p className="text-brand-text-muted leading-relaxed mb-6">
            Each candidate undergoes a multi-phase evaluation pipeline. Only operators who demonstrate discipline, reliability, tactical competence, and the ability to perform under pressure are granted operational clearance.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="bg-brand-dark/50 border border-brand-red/20 p-4 flex-1">
              <p className="text-[10px] text-brand-red/70 tracking-[0.2em] uppercase font-bold mb-2">
                CURRENT ACCEPTANCE RATE
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-brand-red">72%</span>
                <span className="text-xs text-brand-text-muted">of candidates cleared for service</span>
              </div>
            </div>
            <div className="bg-brand-dark/50 border border-white/10 p-4 flex-1">
              <p className="text-[10px] text-brand-text-muted/60 tracking-[0.2em] uppercase font-bold mb-2">
                EVALUATION PIPELINE
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-white">5</span>
                <span className="text-xs text-brand-text-muted">phase selection process</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── RECRUITMENT PROCESS ─── */}
      <Section>
        <SectionLabel label="Evaluation Pipeline" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          Selection Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { num: "01", title: "Intake", desc: "Submit RSI handle via Discord recruitment intake. Incomplete submissions are discarded.", status: "OPEN" },
            { num: "02", title: "Screening", desc: "Background verification & profile analysis. Combat history and organizational record reviewed.", status: "AUTOMATED" },
            { num: "03", title: "Assessment", desc: "Live tactical evaluation with command staff. Performance under pressure is the only metric.", status: "SCHEDULED" },
            { num: "04", title: "Probation", desc: "30-day operational trial. Monitored deployments with assigned fire team. No second chances.", status: "MONITORED" },
            { num: "05", title: "Clearance", desc: "Full operational clearance and division assignment. You are now FLUXX.", status: "AUTHORIZED" },
          ].map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative bg-brand-gray/30 border border-white/5 hover:border-brand-red/20 transition-colors p-5"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-red to-transparent" />
              <span className="text-4xl font-black text-brand-red/20 absolute top-2 right-3">{step.num}</span>
              <h3 className="text-sm font-bold text-white mb-2 mt-6">{step.title}</h3>
              <p className="text-xs text-brand-text-muted leading-relaxed mb-3">{step.desc}</p>
              <p className="text-[8px] text-brand-red/50 tracking-[0.2em] uppercase font-bold">{step.status}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── CAREER PATH ─── */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label="Rank Structure" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          Operator Progression Tiers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              rank: "Recruit",
              code: "RCT",
              desc: "Probationary deployment. Basic operational clearance. Assigned to training cadre under direct supervision.",
              level: "TIER 1 — ENTRY",
              clearance: "RESTRICTED",
            },
            {
              rank: "Operator",
              code: "OPR",
              desc: "Mission-ready status. Full deployment authorization. Access to all standard operations and division assignments.",
              level: "TIER 2 — ACTIVE",
              clearance: "CONFIDENTIAL",
            },
            {
              rank: "Specialist",
              code: "SPC",
              desc: "Advanced operational authority. Mentoring responsibilities. Eligible for squad lead and specialized mission roles.",
              level: "TIER 3 — SENIOR",
              clearance: "SECRET",
            },
            {
              rank: "Officer",
              code: "OFF",
              desc: "Full command authority. Strategic planning access. Division leadership and contract oversight responsibilities.",
              level: "TIER 4 — COMMAND",
              clearance: "TOP SECRET",
            },
          ].map((path, i) => (
            <motion.div
              key={path.rank}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-brand-gray border border-white/5 hover:border-brand-red/20 transition-colors p-6 corner-brackets"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-red to-transparent" />
              <div className="flex items-center justify-between mb-4">
                <p className="text-[9px] text-brand-red/70 tracking-[0.2em] uppercase font-bold">
                  {path.level}
                </p>
                <span className="text-[10px] font-mono font-bold text-brand-red/50 bg-brand-red/5 px-2 py-0.5 border border-brand-red/20">
                  {path.code}
                </span>
              </div>
              <h3 className="text-xl font-black text-white mb-3">{path.rank}</h3>
              <p className="text-xs text-brand-text-muted leading-relaxed mb-4">{path.desc}</p>
              <div className="pt-3 border-t border-white/5">
                <p className="text-[9px] text-brand-text-muted/50 tracking-wider">
                  CLEARANCE: <span className="text-brand-red/70 font-semibold">{path.clearance}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── AFTER CLEARANCE ─── */}
      <Section>
        <SectionLabel label="Post-Evaluation" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          What Operational Deployment Provides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Structured Command Operations", desc: "Every mission runs through established protocols with clear objectives, chain of command, and rules of engagement. No improvisation. No chaos." },
            { title: "Coordinated Combined Arms", desc: "Operate alongside trained units with defined roles, callsigns, and real-time tactical coordination across multiple domains." },
            { title: "High-Threat Tactical Missions", desc: "From escort formations to full-scale assaults — experience organized military operations at their most intense." },
            { title: "Merit-Based Advancement", desc: "Rank is earned through demonstrated performance in the field. Prove yourself under fire and advance through the command structure." },
          ].map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-start gap-4 p-6 border-l-2 border-brand-red bg-brand-gray/30"
            >
              <span className="text-brand-red font-bold text-lg mt-0.5">▪</span>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{benefit.title}</h4>
                <p className="text-xs text-brand-text-muted leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      {/* ─── OPERATIONAL ROLES ─── */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label={t("divisions_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("divisions_title")}
        </h2>
        <Tabs
          items={divisions.map((key) => {
            const division = t.raw(`divisions.${key}`);
            
            return {
              id: key,
              label: division.title || key,
              content: (
                <div className="space-y-8">
                  <div>
                    <p className="text-brand-text-muted leading-relaxed">
                      {division.description}
                    </p>
                  </div>

                  {/* Roles (for Pilots & Logistics) */}
                  {key === "pilots_logistics" && division.roles && (
                    <div>
                      <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-4">
                        Specialized Roles
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(division.roles).map(([roleKey, role]: [string, any]) => (
                          <div key={roleKey} className="bg-brand-gray/30 p-4 border border-white/5">
                            <p className="font-semibold text-white text-sm mb-2">
                              {role.title}
                            </p>
                            <p className="text-xs text-brand-text-muted leading-relaxed">
                              {role.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Units/Cells */}
                  {division.units && (
                    <div>
                      <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-4">
                        Operational Units
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {division.units.map((unit: any) => (
                          <div
                            key={unit.name}
                            className="bg-brand-gray/30 p-3 border border-white/5 hover:border-brand-red/20 transition-colors"
                          >
                            <p className="font-semibold text-white text-sm mb-1">
                              {unit.name}
                            </p>
                            <p className="text-xs text-brand-text-muted">
                              {unit.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Operational Cells (for Recon) */}
                  {division.operational_cells && (
                    <div>
                      <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-4">
                        Operational Cells
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {division.operational_cells.map((cell: any) => (
                          <div
                            key={cell.name}
                            className="bg-brand-gray/30 p-3 border border-white/5 hover:border-brand-red/20 transition-colors"
                          >
                            <p className="font-semibold text-white text-sm mb-1">
                              {cell.name}
                            </p>
                            <p className="text-xs text-brand-text-muted">
                              {cell.role}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Operational Units (for Assault) */}
                  {division.operational_units && (
                    <div>
                      <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-4">
                        Operational Units
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {division.operational_units.map((unit: any) => (
                          <div
                            key={unit.name}
                            className="bg-brand-gray/30 p-3 border border-white/5 hover:border-brand-red/20 transition-colors"
                          >
                            <p className="font-semibold text-white text-sm mb-1">
                              {unit.name}
                            </p>
                            <p className="text-xs text-brand-text-muted">
                              {unit.role}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Division-Specific Qualifications */}
                  {division.qualifications && (
                    <div>
                      <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-4">
                        Role Qualifications
                      </p>
                      <div className="space-y-2">
                        {division.qualifications.map((qual: string, i: number) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 shrink-0" />
                            <p className="text-sm text-brand-text-muted">
                              {qual}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ),
            };
          })}
        />
      </Section>

      {/* Requirements */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label={t("requirements_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("requirements_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {requirementKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
              className="flex items-start gap-3 p-4 border-l-2 border-brand-red bg-brand-gray/50"
            >
              <span className="text-brand-red font-bold text-lg">•</span>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                {t(`requirements_list.${key}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── CTA SECTION ─── */}
      <Section className="relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-2xl mx-auto"
        >
          <p className="text-xs text-brand-red/70 tracking-[0.2em] uppercase font-semibold mb-4">
            Initiate Evaluation
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Start Your Evaluation
          </h2>
          <p className="text-lg text-brand-text-muted mb-10 leading-relaxed">
            Submit your candidacy through our secure channels. FLUXX Command will assess your profile and initiate the evaluation pipeline. There are no shortcuts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={EXTERNAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-12 py-4 text-sm font-semibold tracking-[0.2em] uppercase bg-brand-red text-white border border-brand-red hover:bg-transparent hover:text-brand-red transition-all duration-300"
            >
              Start Evaluation →
            </motion.a>
            <motion.a
              href={EXTERNAL_LINKS.rsiOrg}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-12 py-4 text-sm font-semibold tracking-[0.2em] uppercase bg-transparent text-brand-red border-2 border-brand-red hover:bg-brand-red hover:text-white transition-all duration-300"
            >
              RSI Organization
            </motion.a>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
