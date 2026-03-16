"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import StepCard from "@/components/ui/StepCard";
import Tabs from "@/components/ui/Tabs";
import { EXTERNAL_LINKS } from "@/config/external-links";

const divisions = ["pilots_logistics", "assault", "recon"] as const;

export default function RecruitmentPage() {
  const t = useTranslations("recruitment");

  const requirementKeys = ["r1", "r2", "r3", "r4", "r5", "r6"] as const;
  const applySteps = [
    "apply_step1",
    "apply_step2",
    "apply_step3",
    "apply_step4",
    "apply_step5",
  ] as const;

  return (
    <>
      <PageHero
        label={t("hero_label")}
        title={t("hero_title")}
        text={t("hero_text")}
      />

      {/* Divisions with Tabs */}
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
      <Section>
        <SectionLabel label={t("requirements_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
          {t("requirements_title")}
        </h2>
        <div className="max-w-2xl space-y-3">
          {requirementKeys.map((key, i) => (
            <div key={key} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 shrink-0" />
              <p className="text-sm text-brand-text-muted leading-relaxed">
                {t(`requirements_list.${key}`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* How to Apply */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label={t("apply_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {t("apply_title")}
        </h2>
        <p className="text-brand-text-muted max-w-3xl mb-12 leading-relaxed">
          {t("apply_text")}
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-12">
          {applySteps.map((key, i) => (
            <StepCard
              key={key}
              number={String(i + 1).padStart(2, "0")}
              title={`Step ${i + 1}`}
              text={t(key)}
              delay={i * 0.08}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href={EXTERNAL_LINKS.discord} external>
            {t("apply_discord")}
          </Button>
          <Button href={EXTERNAL_LINKS.rsiOrg} variant="secondary" external>
            {t("apply_org")}
          </Button>
        </div>
      </Section>
    </>
  );
}
