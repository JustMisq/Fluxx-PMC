"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
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
      />

      {/* ─── SELECTION POLICY (ELITE FILTER) ─── */}
      <Section className="bg-brand-red/5 border-y-2 border-brand-red/30">
        <div className="max-w-3xl">
          <p className="text-xs text-brand-red/70 tracking-[0.2em] uppercase font-semibold mb-4">
            Selection Criteria
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Selection Policy
          </h2>
          <p className="text-brand-text-muted leading-relaxed mb-4">
            FLUXX PMC does not accept all applicants.
          </p>
          <p className="text-brand-text-muted leading-relaxed">
            Each candidate is evaluated before deployment. Only reliable and disciplined operators are accepted.
          </p>
        </div>
      </Section>

      {/* ─── RECRUITMENT PROCESS ─── */}
      <Section>
        <SectionLabel label="Workflow" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          Recruitment Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { num: "1", title: "Application", desc: "Submit your profile & documents" },
            { num: "2", title: "Screening", desc: "Initial resume & background review" },
            { num: "3", title: "Evaluation", desc: "Interview & tactical assessment" },
            { num: "4", title: "Training", desc: "Specialized operator training" },
            { num: "5", title: "Deployment", desc: "Active duty assignment" },
          ].map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-center justify-center h-14 bg-brand-red/10 border-2 border-brand-red/30 rounded-full mb-4">
                <span className="text-2xl font-black text-brand-red">{step.num}</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1 text-center">{step.title}</h3>
              <p className="text-xs text-brand-text-muted text-center">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── CAREER PATH ─── */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label="Progression" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          Career Path
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              rank: "Recruit",
              desc: "Initial deployment, basic operator role, learning curve phase",
              level: "Entry"
            },
            {
              rank: "Operator",
              desc: "Full deployment capabilities, mission-ready, full access to operations",
              level: "Active"
            },
            {
              rank: "Specialist",
              desc: "Advanced expertise, leadership responsibilities, mentoring role",
              level: "Senior"
            },
            {
              rank: "Officer",
              desc: "Command authority, strategic decision-making, full command authority",
              level: "Leadership"
            },
          ].map((path, i) => (
            <motion.div
              key={path.rank}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border-t-2 border-brand-red pt-6"
            >
              <p className="text-xs text-brand-red/70 tracking-widest uppercase font-semibold mb-2">
                {path.level}
              </p>
              <h3 className="text-lg font-bold text-white mb-3">{path.rank}</h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">{path.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── WHAT YOU GAIN ─── */}
      <Section>
        <SectionLabel label="Benefits" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          What You Gain
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            "Structured operations",
            "Organized teamplay",
            "Tactical missions",
            "Progression system"
          ].map((benefit, i) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-start gap-3 p-6 border-l-2 border-brand-red bg-brand-gray/30"
            >
              <span className="text-brand-red font-bold text-xl">•</span>
              <span className="text-brand-text-muted text-sm">{benefit}</span>
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
            Ready to Deploy
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Join the Operation
          </h2>
          <p className="text-lg text-brand-text-muted mb-10 leading-relaxed">
            Submit your application through our secure channels. FLUXX Command will evaluate your profile and contact you directly.
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
              Discord Server
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
