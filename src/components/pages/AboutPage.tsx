"use client";

import { useTranslations } from "next-intl";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";

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
              <h3 className="text-lg font-semibold text-white mb-3">
                {t(`mission_values.${key}.title`)}
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                {t(`mission_values.${key}.text`)}
              </p>
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
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          {t("history_title")}
        </h2>
        <div className="max-w-3xl">
          {t("history_text")
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
      </Section>
    </>
  );
}
