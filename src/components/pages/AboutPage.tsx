"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import StatusBadge from "@/components/ui/StatusBadge";

export default function AboutPage() {
  const t = useTranslations("about");

  const values = ["precision", "discipline", "reliability", "discretion"] as const;
  const pillars = ["intel", "coordination", "extraction"] as const;
  const reasons = ["track_record", "professionalism", "scalability", "confidentiality"] as const;

  return (
    <>
      <PageHero
        label={t("hero_label")}
        title={t("hero_title")}
        text={t("hero_text")}
        classification="restricted"
        status={{ label: "DECLASSIFIED", variant: "amber" }}
      />

      {/* Company Overview */}
      <Section>
        <SectionLabel label={t("overview_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          {t("overview_title")}
        </h2>
        <div className="max-w-3xl">
          {t("overview_text")
            .split("\n\n")
            .map((para, i) => (
              <p
                key={i}
                className="text-brand-text-muted leading-relaxed mb-4"
              >
                {para}
              </p>
            ))}
        </div>

        {/* Org Identity Block */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Founded", value: "2954" },
            { label: "Designation", value: "FLUXX PMC" },
            { label: "Classification", value: "PRIVATE MILITARY" },
            { label: "Theater", value: "STANTON SYSTEM" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-brand-dark/50 border border-white/5 p-4 corner-brackets"
            >
              <p className="text-[9px] text-brand-red/60 tracking-widest uppercase font-bold mb-1">{item.label}</p>
              <p className="text-sm text-white font-mono font-bold">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Mission & Values */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label={t("mission_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("mission_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {values.map((key, i) => (
            <Card key={key} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-brand-red/30 flex items-center justify-center shrink-0">
                  <span className="text-brand-red font-bold text-[10px] font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {t(`mission_values.${key}.title`)}
                  </h3>
                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    {t(`mission_values.${key}.text`)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Operational Doctrine */}
      <Section>
        <SectionLabel label={t("doctrine_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {t("doctrine_title")}
        </h2>
        <p className="text-brand-text-muted max-w-3xl mb-12 leading-relaxed">
          {t("doctrine_text")}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {pillars.map((key, i) => (
            <Card key={key} delay={i * 0.1}>
              <div className="w-10 h-10 border border-brand-red/30 flex items-center justify-center mb-4">
                <span className="text-brand-red font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {t(`doctrine_pillars.${key}.title`)}
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                {t(`doctrine_pillars.${key}.text`)}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why FLUXX */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label={t("why_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("why_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {reasons.map((key, i) => (
            <Card key={key} delay={i * 0.1}>
              <h3 className="text-lg font-semibold text-white mb-3">
                {t(`why_reasons.${key}.title`)}
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                {t(`why_reasons.${key}.text`)}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* History */}
      <Section>
        <SectionLabel label={t("history_label")} />
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            {t("history_title")}
          </h2>
          <StatusBadge label="DECLASSIFIED" variant="amber" />
        </div>

        <div className="max-w-3xl relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-brand-red/50 via-brand-red/20 to-transparent" />

          <div className="pl-6 space-y-6">
            {t("history_text")
              .split("\n\n")
              .map((para, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-6 top-1.5 w-2 h-2 bg-brand-red/60 transform -translate-x-1/2" />
                  <p className="text-brand-text-muted leading-relaxed">{para}</p>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Classification footer */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="text-[9px] text-brand-text-muted/30 tracking-widest font-mono">
            FLUXX-DOSSIER-001 // CLASSIFICATION: RESTRICTED // DISTRIBUTION: AUTHORIZED PERSONNEL ONLY
          </p>
        </div>
      </Section>
    </>
  );
}
