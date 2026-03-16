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

      {/* Why Hire FLUXX */}
      <Section>
        <SectionLabel label={t("why_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {t("why_title")}
        </h2>
        <p className="text-brand-text-muted max-w-3xl leading-relaxed">
          {t("why_text")}
        </p>
      </Section>

      {/* Contract Types - Detailed + Pricing */}
      <Section className="bg-brand-gray/30">
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
                <div className="space-y-6">
                  <div>
                    <p className="text-xs text-brand-red/70 tracking-[0.15em] uppercase font-medium mb-2">
                      {contract.description}
                    </p>
                    <p className="text-brand-text-muted leading-relaxed">
                      {contract.text}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-brand-gray/30 p-4 border border-white/5">
                      <p className="text-xs text-brand-red/70 tracking-[0.1em] uppercase font-medium mb-2">
                        Scope
                      </p>
                      <p className="text-sm text-brand-text-muted">
                        {contract.scope}
                      </p>
                    </div>
                    <div className="bg-brand-gray/30 p-4 border border-white/5">
                      <p className="text-xs text-brand-red/70 tracking-[0.1em] uppercase font-medium mb-2">
                        Duration
                      </p>
                      <p className="text-sm text-brand-text-muted">
                        {contract.duration}
                      </p>
                    </div>
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
                        SLA
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

      {/* Contract Request Form */}
      <Section className="bg-brand-gray/30">
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
