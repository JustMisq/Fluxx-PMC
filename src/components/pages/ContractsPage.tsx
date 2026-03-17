"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import StepCard from "@/components/ui/StepCard";
import Tabs from "@/components/ui/Tabs";
import { EXTERNAL_LINKS } from "@/config/external-links";

const contractTypes = ["security", "escort", "combat", "recon"] as const;

export default function ContractsPage() {
  const t = useTranslations("contracts");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    organization: "",
    contact: "",
    type: "",
    duration: "",
    location: "",
    threatLevel: "",
    teamSize: "",
    budget: "",
    assets: "",
    description: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contract-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit contract request");
      }

      setSubmitted(true);
      setFormData({
        organization: "",
        contact: "",
        type: "",
        duration: "",
        location: "",
        threatLevel: "",
        teamSize: "",
        budget: "",
        assets: "",
        description: "",
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero
        label={t("hero_label")}
        title={t("hero_title")}
        text={t("hero_text")}
      />

      {/* ─── INTRODUCTION SECTION ─── */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Contract Services
          </h2>
          <p className="text-lg text-brand-text-muted leading-relaxed mb-6">
            FLUXX PMC provides tactical security, combat deployment and reconnaissance services for corporations operating in high-risk environments.
          </p>
          <p className="text-brand-text-muted leading-relaxed">
            Submit a contract request to deploy operational units across the Stanton system.
          </p>
        </div>
      </Section>

      {/* ─── OPERATIONAL STATUS (LIVE DASHBOARD) ─── */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label="Real-Time" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          Operational Status
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Status", value: "ACTIVE", highlight: true },
            { label: "Active Contracts", value: "3", highlight: true },
            { label: "Deployment Zone", value: "Stanton System", highlight: false },
            { label: "Response Time", value: "< 15 min", highlight: false },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`relative border p-6 ${
                stat.highlight
                  ? "border-brand-red/50 bg-brand-red/5"
                  : "border-white/5 bg-brand-gray/50"
              } hover:border-brand-red/70 transition-all duration-300`}
            >
              <p className="text-[10px] text-brand-text-muted tracking-widest uppercase font-semibold mb-3">
                {stat.label}
              </p>
              <p className={`text-2xl font-black ${stat.highlight ? "text-brand-red" : "text-white"}`}>
                {stat.value}
              </p>
              {stat.highlight && (
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-brand-red to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── WHY HIRE FLUXX ─── */}
      <Section>
        <SectionLabel label="Advantages" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          Why Hire FLUXX
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            "Rapid deployment units",
            "Experienced operators",
            "Multi-role fleet capability",
            "Mission-first doctrine"
          ].map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-3 p-6 border-l-2 border-brand-red"
            >
              <span className="text-brand-red font-bold text-lg">•</span>
              <span className="text-brand-text-muted leading-relaxed">{reason}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── CONTRACT APPROVAL ─── */}
      <Section className="bg-brand-red/5 border-y-2 border-brand-red/30">
        <SectionLabel label="Validation" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Contract Approval
        </h2>

        <div className="max-w-3xl">
          <p className="text-brand-text-muted leading-relaxed mb-4">
            All contracts are reviewed by FLUXX Command.
          </p>
          <p className="text-brand-text-muted leading-relaxed">
            Deployment is subject to operational availability and threat evaluation.
          </p>
        </div>
      </Section>

      {/* ─── OPERATIONAL CONDITIONS ─── */}
      <Section>
        <SectionLabel label="Requirements" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          Operational Conditions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Client must provide mission details",
            "Payment terms defined before deployment",
            "Extraction not guaranteed in extreme conditions",
          ].map((condition, i) => (
            <motion.div
              key={condition}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-3 p-6 border-l-2 border-brand-red bg-brand-gray/30"
            >
              <span className="text-brand-red font-bold text-xl mt-1">•</span>
              <span className="text-brand-text-muted">{condition}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── OPERATIONAL COMMITMENT ─── */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label="Pledge" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
          Operational Commitment
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-l-4 border-brand-red pl-8 py-4"
        >
          <p className="text-lg text-brand-text-muted leading-relaxed">
            FLUXX PMC ensures mission execution with maximum efficiency, adaptability and tactical superiority.
          </p>
        </motion.div>
      </Section>

      {/* ─── CONTRACT PROCESS ─── */}
      <Section>
        <SectionLabel label="Workflow" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          Contract Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { num: "1", title: "Request Submission", desc: "Submit operational requirements" },
            { num: "2", title: "Operational Assessment", desc: "Command evaluates feasibility" },
            { num: "3", title: "Resource Allocation", desc: "Units assigned to contract" },
            { num: "4", title: "Deployment", desc: "Mission execution begins" },
          ].map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-center justify-center h-16 bg-brand-red/10 border-2 border-brand-red/30 rounded-full mb-4">
                <span className="text-3xl font-black text-brand-red">{step.num}</span>
              </div>
              <h3 className="font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-brand-text-muted">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── CONTRACT TYPES OVERVIEW ─── */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label="Quick Reference" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          Contract Types
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Security Contracts", desc: "Static & mobile site protection" },
            { name: "Escort Operations", desc: "Convoy & asset protection" },
            { name: "Combat Deployment", desc: "Offensive tactical operations" },
            { name: "Strategic Recon", desc: "Intelligence & surveillance" }
          ].map((type, i) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border border-white/5 hover:border-brand-red/30 transition-colors p-5 group cursor-default"
            >
              <h3 className="text-sm font-semibold text-white mb-2">
                {type.name}
              </h3>
              <p className="text-xs text-brand-text-muted">
                {type.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contract Types - Detailed + Pricing */}
      <Section>
        <SectionLabel label={t("types_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("types_title")}
        </h2>
        <Tabs
          items={contractTypes.map((key, i) => {
            const contract = {
              title: t(`types.${key}.title`),
              description: t(`types.${key}.description`),
              text: t(`types.${key}.text`),
              scope: t(`types.${key}.scope`),
              duration: t(`types.${key}.duration`),
              team_size: t(`types.${key}.team_size`),
              sla: t(`types.${key}.sla`),
            };
            
            // Check if contract has extended fields (recon, combat, security, escort)
            let missionTypes: string[] = [];
            let operationTypes: string[] = [];
            let serviceTypes: string[] = [];
            let formationTypes: string[] = [];
            let availableAssets: Array<{ name: string; role: string }> = [];
            let availableDivisions: Array<{ name: string; role: string }> = [];
            let deploymentAreas: string[] = [];
            let insertionMethods: string[] = [];
            let extractionMethods: string[] = [];
            let threatRating = "";
            let rulesOfEngagement = "";
            
            try {
              const raw = t.raw(`types.${key}`);
              if (raw && typeof raw === 'object') {
                if (Array.isArray(raw.mission_types)) {
                  missionTypes = raw.mission_types;
                }
                if (Array.isArray(raw.operation_types)) {
                  operationTypes = raw.operation_types;
                }
                if (Array.isArray(raw.service_types)) {
                  serviceTypes = raw.service_types;
                }
                if (Array.isArray(raw.formation_types)) {
                  formationTypes = raw.formation_types;
                }
                if (Array.isArray(raw.available_assets)) {
                  availableAssets = raw.available_assets;
                }
                if (Array.isArray(raw.available_divisions)) {
                  availableDivisions = raw.available_divisions;
                }
                if (Array.isArray(raw.deployment_areas)) {
                  deploymentAreas = raw.deployment_areas;
                }
                if (Array.isArray(raw.insertion_methods)) {
                  insertionMethods = raw.insertion_methods;
                }
                if (Array.isArray(raw.extraction_methods)) {
                  extractionMethods = raw.extraction_methods;
                }
                if (raw.threat_rating) {
                  threatRating = raw.threat_rating;
                }
                if (raw.rules_of_engagement) {
                  rulesOfEngagement = raw.rules_of_engagement;
                }
              }
            } catch (e) {
              // No extended fields for this contract type
            }
            
            const pricing = {
              tier: t(`pricing.${i}.tier`),
              price: t(`pricing.${i}.price`),
              details: t(`pricing.${i}.details`),
            };

            return {
              id: key,
              label: contract.title,
              content: (
                <div className="space-y-8">
                  {/* QUICK OVERVIEW */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-6 bg-brand-red/5 border-2 border-brand-red/30">
                    <div>
                      <p className="text-xs text-brand-red/70 tracking-widest uppercase font-semibold mb-2">Type</p>
                      <p className="text-sm font-bold text-white">{contract.title}</p>
                    </div>
                    <div>
                      <p className="text-xs text-brand-red/70 tracking-widest uppercase font-semibold mb-2">Operators</p>
                      <p className="text-sm font-bold text-white">{contract.team_size?.split(/\d+-/)[1]?.split(" ")[0] || "Variable"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-brand-red/70 tracking-widest uppercase font-semibold mb-2">Response</p>
                      <p className="text-sm font-bold text-white">&lt;15 min</p>
                    </div>
                    <div>
                      <p className="text-xs text-brand-red/70 tracking-widest uppercase font-semibold mb-2">Threat Level</p>
                      <p className="text-sm font-bold text-white">{threatRating?.split("(")[0]?.trim() || "Variable"}</p>
                    </div>
                  </div>

                  {/* MAIN DESCRIPTION */}
                  <div>
                    <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-3">
                      {contract.description}
                    </p>
                    <p className="text-base text-brand-text-muted leading-relaxed">
                      {contract.text}
                    </p>
                  </div>

                  {/* PRIMARY INFO - SCOPE & DURATION */}
                  <div className="border-l-4 border-brand-red pl-6 py-4 space-y-4">
                    <div>
                      <p className="text-xs text-brand-red/70 tracking-[0.1em] uppercase font-medium mb-2">
                        Scope of Operations
                      </p>
                      <p className="text-sm text-brand-text-muted leading-relaxed">
                        {contract.scope}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-brand-red/70 tracking-[0.1em] uppercase font-medium mb-2">
                        Duration
                      </p>
                      <p className="text-sm text-brand-text-muted">
                        {contract.duration}
                      </p>
                    </div>
                  </div>

                  {/* SECONDARY INFO GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-brand-gray/30 p-4 border border-white/5">
                      <p className="text-xs text-brand-red/70 tracking-[0.1em] uppercase font-medium mb-2">
                        Team Size
                      </p>
                      <p className="text-sm text-brand-text-muted">
                        {contract.team_size}
                      </p>
                    </div>
                    <div className="bg-brand-gray/30 p-4 border border-white/5">
                      <p className="text-xs text-brand-red/70 tracking-[0.1em] uppercase font-medium mb-2">
                        Service Level Agreement
                      </p>
                      <p className="text-sm text-brand-text-muted">
                        {contract.sla}
                      </p>
                    </div>
                  </div>

                  {/* Extended fields for all contract types */}
                  {(missionTypes.length > 0 || operationTypes.length > 0 || serviceTypes.length > 0 || formationTypes.length > 0 || availableAssets.length > 0 || availableDivisions.length > 0) && (
                    <>
                      {missionTypes.length > 0 && (
                        <div className="border-t border-white/5 pt-4">
                          <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-3">
                            Mission Types
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {missionTypes.map((type) => (
                              <span
                                key={type}
                                className="px-3 py-1 bg-brand-red/10 border border-brand-red/30 text-xs text-brand-red rounded"
                              >
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {operationTypes.length > 0 && (
                        <div className="border-t border-white/5 pt-4">
                          <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-3">
                            Operation Types
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {operationTypes.map((type) => (
                              <span
                                key={type}
                                className="px-3 py-1 bg-brand-red/10 border border-brand-red/30 text-xs text-brand-red rounded"
                              >
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {serviceTypes.length > 0 && (
                        <div className="border-t border-white/5 pt-4">
                          <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-3">
                            Service Types
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {serviceTypes.map((type) => (
                              <span
                                key={type}
                                className="px-3 py-1 bg-brand-red/10 border border-brand-red/30 text-xs text-brand-red rounded"
                              >
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {formationTypes.length > 0 && (
                        <div className="border-t border-white/5 pt-4">
                          <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-3">
                            Formation Types
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {formationTypes.map((type) => (
                              <span
                                key={type}
                                className="px-3 py-1 bg-brand-red/10 border border-brand-red/30 text-xs text-brand-red rounded"
                              >
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {availableAssets.length > 0 && (
                        <div>
                          <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-3">
                            Available Assets
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {availableAssets.map((asset) => (
                              <div
                                key={asset.name}
                                className="bg-brand-gray/30 p-3 border border-white/5 hover:border-brand-red/20 transition-colors"
                              >
                                <p className="font-semibold text-white text-sm mb-1">
                                  {asset.name}
                                </p>
                                <p className="text-xs text-brand-text-muted">
                                  {asset.role}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {availableDivisions.length > 0 && (
                        <div>
                          <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-3">
                            Available Divisions
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {availableDivisions.map((division) => (
                              <div
                                key={division.name}
                                className="bg-brand-gray/30 p-3 border border-white/5 hover:border-brand-red/20 transition-colors"
                              >
                                <p className="font-semibold text-white text-sm mb-1">
                                  {division.name}
                                </p>
                                <p className="text-xs text-brand-text-muted">
                                  {division.role}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {deploymentAreas.length > 0 && (
                        <div className="border-t border-white/5 pt-4">
                          <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-3">
                            Deployment Areas
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {deploymentAreas.map((area) => (
                              <span
                                key={area}
                                className="px-3 py-1 bg-brand-red/10 border border-brand-red/30 text-xs text-brand-red rounded"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {(threatRating || insertionMethods.length > 0 || extractionMethods.length > 0 || rulesOfEngagement) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {threatRating && (
                            <div className="bg-brand-gray/30 p-4 border border-white/5">
                              <p className="text-xs text-brand-red/70 tracking-[0.1em] uppercase font-medium mb-2">
                                Threat Rating
                              </p>
                              <p className="text-sm text-brand-text-muted">
                                {threatRating}
                              </p>
                            </div>
                          )}
                          {insertionMethods.length > 0 && (
                            <div className="bg-brand-gray/30 p-4 border border-white/5">
                              <p className="text-xs text-brand-red/70 tracking-[0.1em] uppercase font-medium mb-2">
                                Insertion Methods
                              </p>
                              <ul className="text-sm text-brand-text-muted space-y-1">
                                {insertionMethods.map((method) => (
                                  <li key={method}>• {method}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {extractionMethods.length > 0 && (
                            <div className="bg-brand-gray/30 p-4 border border-white/5">
                              <p className="text-xs text-brand-red/70 tracking-[0.1em] uppercase font-medium mb-2">
                                Extraction Methods
                              </p>
                              <ul className="text-sm text-brand-text-muted space-y-1">
                                {extractionMethods.map((method) => (
                                  <li key={method}>• {method}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {rulesOfEngagement && (
                            <div className="bg-brand-gray/30 p-4 border border-white/5 md:col-span-2">
                              <p className="text-xs text-brand-red/70 tracking-[0.1em] uppercase font-medium mb-2">
                                Rules of Engagement
                              </p>
                              <p className="text-sm text-brand-text-muted">
                                {rulesOfEngagement}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}

                  <div className="border-t border-white/5 pt-4">
                    <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-2">
                      Pricing
                    </p>
                    <div className="bg-brand-red/5 border border-brand-red/20 p-4">
                      <p className="text-lg font-bold text-brand-red mb-2">
                        {pricing.price}
                      </p>
                      <p className="text-sm text-brand-text-muted">
                        {pricing.details}
                      </p>
                    </div>
                  </div>
                </div>
              ),
            };
          })}
        />
      </Section>

      {/* Contract Process */}
      <Section>
        <SectionLabel label={t("process_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("process_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const step = {
              step: t(`process.${i}.step`),
              title: t(`process.${i}.title`),
              text: t(`process.${i}.text`),
            };
            return (
              <StepCard
                key={step.step}
                number={step.step}
                title={step.title}
                text={step.text}
                delay={i * 0.08}
              />
            );
          })}
        </div>
      </Section>

      {/* Terms & Commitments */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label={t("terms_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("terms_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card delay={0}>
            <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-3">
              {t("terms.0.title")}
            </p>
            <p className="text-sm text-brand-text-muted leading-relaxed">
              {t("terms.0.text")}
            </p>
          </Card>
          <Card delay={0.1}>
            <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-3">
              {t("terms.1.title")}
            </p>
            <p className="text-sm text-brand-text-muted leading-relaxed">
              {t("terms.1.text")}
            </p>
          </Card>
          <Card delay={0.2}>
            <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-3">
              {t("terms.2.title")}
            </p>
            <p className="text-sm text-brand-text-muted leading-relaxed">
              {t("terms.2.text")}
            </p>
          </Card>
          <Card delay={0.3}>
            <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-3">
              {t("terms.3.title")}
            </p>
            <p className="text-sm text-brand-text-muted leading-relaxed">
              {t("terms.3.text")}
            </p>
          </Card>
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
            Submit Operational Request
          </h2>
          <p className="text-lg text-brand-text-muted mb-8 leading-relaxed">
            Send your mission parameters and our command staff will evaluate and deploy the appropriate units.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("contract-form")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center px-12 py-4 text-sm font-semibold tracking-[0.2em] uppercase bg-brand-red text-white border border-brand-red hover:bg-transparent hover:text-brand-red transition-all duration-300"
          >
            Submit Request
          </motion.button>
        </motion.div>
      </Section>

      {/* Contract Request Form */}
      <Section className="bg-brand-gray/30" id="contract-form">
        <SectionLabel label={t("form_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("form_title")}
        </h2>

        <div className="max-w-3xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="bg-brand-gray border border-brand-red/30 p-8 space-y-6">
                <div>
                  <p className="text-brand-text-muted leading-relaxed mb-4">
                    {t("form_success")}
                  </p>
                  <p className="text-sm text-brand-text-muted/80">
                    Your request has been logged and forwarded to our Operations Command. You'll receive updates on Discord.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-4">
                    Join the Community
                  </p>
                  <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
                    The fastest way to stay updated on your contract and coordinate with FLUXX command is through our Discord server. Join now to get real-time updates, direct communication with our operators, and mission briefings.
                  </p>
                  <a
                    href={EXTERNAL_LINKS.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 text-xs font-semibold tracking-[0.2em] uppercase bg-brand-red text-white border border-brand-red hover:bg-brand-red-light hover:border-brand-red-light transition-all duration-300"
                  >
                  Join Discord Server
                </a>
                </div>
              </div>
            </motion.div>
          ) : (
            <>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-950/30 border border-red-500/30 p-4 mb-6 rounded"
                >
                  <p className="text-red-300 text-sm">
                    {error}
                  </p>
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-brand-text-muted mb-2">
                    {t("form_name")}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-brand-text-muted mb-2">
                    {t("form_contact")}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red/50 transition-colors"
                    placeholder="Discord / Email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-brand-text-muted mb-2">
                    {t("form_type")}
                  </label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red/50 transition-colors appearance-none"
                  >
                    <option value="">Select a type</option>
                    {["security", "escort", "combat", "recon", "other"].map((opt) => (
                      <option key={opt} value={opt}>
                        {t(`form_type_options.${opt}`)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-brand-text-muted mb-2">
                    {t("form_duration")}
                  </label>
                  <select
                    required
                    value={formData.duration}
                    onChange={(e) =>
                      setFormData({ ...formData, duration: e.target.value })
                    }
                    className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red/50 transition-colors appearance-none"
                  >
                    <option value="">Select duration</option>
                    {["one_time", "week", "month", "quarter", "annual", "ongoing"].map((opt) => (
                      <option key={opt} value={opt}>
                        {t(`form_duration_options.${opt}`)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-brand-text-muted mb-2">
                  {t("form_location")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="e.g. Stanton System, Orison, Levski route"
                  className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red/50 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-brand-text-muted mb-2">
                    {t("form_threat_level")}
                  </label>
                  <select
                    required
                    value={formData.threatLevel}
                    onChange={(e) =>
                      setFormData({ ...formData, threatLevel: e.target.value })
                    }
                    className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red/50 transition-colors appearance-none"
                  >
                    <option value="">Select threat level</option>
                    {["low", "medium", "high", "extreme"].map((opt) => (
                      <option key={opt} value={opt}>
                        {t(`form_threat_options.${opt}`)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-brand-text-muted mb-2">
                    {t("form_team_size")}
                  </label>
                  <select
                    required
                    value={formData.teamSize}
                    onChange={(e) =>
                      setFormData({ ...formData, teamSize: e.target.value })
                    }
                    className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red/50 transition-colors appearance-none"
                  >
                    <option value="">Select team size</option>
                    {["small", "medium", "large", "full_division"].map((opt) => (
                      <option key={opt} value={opt}>
                        {t(`form_team_size_options.${opt}`)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-brand-text-muted mb-2">
                  {t("form_budget")}
                </label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  placeholder="e.g. 50,000 UEC"
                  className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-brand-text-muted mb-2">
                  {t("form_assets")}
                </label>
                <input
                  type="text"
                  value={formData.assets}
                  onChange={(e) =>
                    setFormData({ ...formData, assets: e.target.value })
                  }
                  placeholder="e.g. Combat ship, medical frigate, ground team"
                  className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-brand-text-muted mb-2">
                  {t("form_description")}
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red/50 transition-colors resize-none"
                  placeholder="Detailed description of mission requirements, objectives, threats, and any special conditions..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center px-8 py-3 text-xs font-semibold tracking-[0.2em] uppercase bg-brand-red text-white border border-brand-red hover:bg-brand-red-light hover:border-brand-red-light transition-all duration-300 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : t("form_submit")}
              </button>

              <p className="text-xs text-brand-text-muted/60 leading-relaxed">
                {t("form_disclaimer")}
              </p>
              </form>
            </>
          )}
        </div>
      </Section>
    </>
  );
}
