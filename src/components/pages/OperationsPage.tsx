"use client";

import { useTranslations } from "next-intl";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import StepCard from "@/components/ui/StepCard";
import Tabs from "@/components/ui/Tabs";

export default function OperationsPage() {
  const t = useTranslations("operations");

  const missions = ["security", "combat", "recon", "escort"] as const;
  const steps = ["step1", "step2", "step3", "step4", "step5", "step6"] as const;
  const hierarchy = ["command", "operations", "division", "squad"] as const;

  return (
    <>
      <PageHero
        label={t("hero_label")}
        title={t("hero_title")}
        text={t("hero_text")}
      />

      {/* Mission Types with Tabs */}
      <Section>
        <SectionLabel label={t("missions_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("missions_title")}
        </h2>
        <Tabs
          items={missions.map((key) => ({
            id: key,
            label: t(`missions.${key}.title`),
            content: (
              <div className="space-y-6">
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  {t(`missions.${key}.text`)}
                </p>
                <div className="border-l-2 border-brand-red/30 pl-6">
                  <p className="text-xs text-brand-text-muted leading-relaxed font-medium">
                    {t(`missions.${key}.detail`)}
                  </p>
                </div>
              </div>
            ),
          }))}
        />
      </Section>

      {/* Deployment Process */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label={t("process_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("process_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {steps.map((key, i) => (
            <StepCard
              key={key}
              number={String(i + 1).padStart(2, "0")}
              title={t(`process_steps.${key}.title`)}
              text={t(`process_steps.${key}.text`)}
              delay={i * 0.08}
            />
          ))}
        </div>
      </Section>

      {/* Operational Structure */}
      <Section>
        <SectionLabel label={t("structure_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {t("structure_title")}
        </h2>
        <p className="text-brand-text-muted max-w-3xl mb-12 leading-relaxed">
          {t("structure_text")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {hierarchy.map((key, i) => (
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
