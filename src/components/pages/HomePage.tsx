"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import DivisionCard from "@/components/ui/DivisionCard";
import Button from "@/components/ui/Button";

/* ─── Contract Types Section ─── */
function ContractTypesSection({ t, contractTypes }: any) {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const selectedData = selectedType 
    ? t.raw(`contract_preview_types.${selectedType}`) as any
    : null;

  return (
    <>
      <Section>
        <SectionLabel label={t("contract_preview_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("contract_preview_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {contractTypes.map((key: string, i: number) => {
            const typeData = t.raw(`contract_preview_types.${key}`) as any;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setSelectedType(key)}
                className="relative bg-brand-gray border border-white/5 hover:border-brand-red/30 transition-colors duration-300 p-6 lg:p-8 cursor-pointer group"
              >
                <div className="absolute top-0 right-0 w-1 h-12 bg-gradient-to-b from-brand-red to-transparent group-hover:h-16 transition-all duration-300" />

                <h3 className="text-lg font-semibold text-white mb-2">
                  {typeData?.title}
                </h3>
                <p className="text-xs text-brand-red/70 tracking-wider mb-4 font-medium">
                  {typeData?.description}
                </p>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-[10px] text-brand-text-muted tracking-widest uppercase">
                    Threat Level: <span className="text-brand-red font-semibold ml-1">{typeData?.threat}</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contracts">View All Contract Types</Button>
        </div>
      </Section>

      {/* Contract Details Modal */}
      <AnimatePresence>
        {selectedType && selectedData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedType(null)}
            className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-gray border border-brand-red/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                      {selectedData.title}
                    </h2>
                    <p className="text-sm text-brand-red/70">{selectedData.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedType(null)}
                    className="text-brand-text-muted hover:text-white transition-colors text-2xl leading-none"
                  >
                    ✕
                  </button>
                </div>

                <div className="border-t border-white/10 pt-6 mb-6">
                  <p className="text-sm text-brand-text-muted leading-relaxed mb-6">
                    {selectedData.fullDescription}
                  </p>

                  {/* Key Details Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-brand-dark/50 p-4 border border-white/5">
                      <p className="text-[10px] text-brand-red/60 tracking-widest uppercase font-semibold mb-2">Duration</p>
                      <p className="text-sm text-brand-text-muted">{selectedData.duration}</p>
                    </div>
                    <div className="bg-brand-dark/50 p-4 border border-white/5">
                      <p className="text-[10px] text-brand-red/60 tracking-widest uppercase font-semibold mb-2">Team Size</p>
                      <p className="text-sm text-brand-text-muted">{selectedData.team_size}</p>
                    </div>
                    <div className="bg-brand-dark/50 p-4 border border-white/5">
                      <p className="text-[10px] text-brand-red/60 tracking-widest uppercase font-semibold mb-2">Deployment</p>
                      <p className="text-sm text-brand-text-muted">{selectedData.deployment_time}</p>
                    </div>
                    <div className="bg-brand-dark/50 p-4 border border-white/5">
                      <p className="text-[10px] text-brand-red/60 tracking-widest uppercase font-semibold mb-2">Threat Level</p>
                      <p className="text-sm text-brand-red font-semibold">{selectedData.threat}</p>
                    </div>
                  </div>

                  {/* Capabilities */}
                  {selectedData.capabilities && (
                    <div>
                      <p className="text-[10px] text-brand-red/60 tracking-widest uppercase font-semibold mb-3">Key Capabilities</p>
                      <ul className="space-y-2">
                        {selectedData.capabilities.map((cap: string, idx: number) => (
                          <li key={idx} className="text-sm text-brand-text-muted flex items-start gap-3">
                            <span className="text-brand-red mt-1 flex-shrink-0">▪</span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="border-t border-white/10 pt-6">
                  <Button href="/contracts" className="w-full">
                    Request This Contract Type
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Icon components ─── */
function ShieldIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}
function CrosshairIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.364-5.364l-2.828 2.828M9.464 14.536l-2.828 2.828m11.728 0l-2.828-2.828M9.464 9.464L6.636 6.636" />
    </svg>
  );
}
function TruckIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h4.875c.621 0 1.125-.504 1.125-1.125V4.5A1.125 1.125 0 008.25 3.375H3.375A1.125 1.125 0 002.25 4.5v8.625c0 .621.504 1.125 1.125 1.125zm13.5 0h2.625c.621 0 1.125-.504 1.125-1.125V8.25a1.125 1.125 0 00-1.125-1.125h-2.625a1.125 1.125 0 00-1.125 1.125v4.875c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default function HomePage() {
  const t = useTranslations("home");
  const hero = useTranslations("hero");

  const divisionKeys = ["assault", "recon", "logistics", "medical"] as const;
  const divisionIcons = [
    <CrosshairIcon key="assault" />,
    <EyeIcon key="recon" />,
    <TruckIcon key="logistics" />,
    <HeartIcon key="medical" />,
  ];
  const contractTypes = ["security", "combat", "escort", "recon"] as const;
  const trustStats = t.raw("trust_stats") as Array<{ number: string; label: string }>;
  const differentiators = t.raw("differentiators") as Array<{ title: string; text: string }>;

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic background */}
        <div className="absolute inset-0 bg-brand-dark">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-3xl" />
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />
        </div>

        <div className="relative text-center px-4 max-w-4xl mx-auto z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4">
              {hero("title")}
            </h1>

            <p className="text-lg sm:text-xl text-brand-text-muted mb-3 tracking-wide">
              {hero("subtitle")}
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-sm text-brand-red tracking-[0.3em] uppercase font-medium mb-12"
            >
              {hero("tagline")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button href="/contracts">{hero("cta_contract")}</Button>
              <Button href="/recruitment" variant="secondary">
                {hero("cta_join")}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-8 bg-gradient-to-b from-brand-red/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── TRUST/TRACK RECORD ─── */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label={t("trust_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          {t("trust_title")}
        </h2>
        <p className="text-brand-text-muted max-w-3xl mb-12 leading-relaxed">
          {t("trust_text")}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {trustStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-brand-gray border border-white/5 p-6 text-center hover:border-brand-red/20 transition-colors"
            >
              <p className="text-3xl lg:text-4xl font-black text-brand-red mb-2">
                {stat.number}
              </p>
              <p className="text-xs text-brand-text-muted tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── CONTRACT TYPES PREVIEW ─── */}
      <ContractTypesSection t={t} contractTypes={contractTypes} />


      {/* ─── WHY CHOOSE FLUXX ─── */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label={t("differentiators_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("differentiators_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {differentiators.map((item, i) => (
            <Card key={i} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-brand-red/30 flex items-center justify-center shrink-0 group-hover:border-brand-red transition-colors">
                  <span className="text-brand-red font-bold text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── OPERATIONAL OVERVIEW ─── */}
      <Section>
        <SectionLabel label={t("overview_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {t("overview_title")}
        </h2>
        <p className="text-brand-text-muted max-w-3xl mb-12 leading-relaxed">
          {t("overview_text")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {["security", "tactical", "escort", "recon"].map((key, i) => (
            <Card key={key} delay={i * 0.1}>
              <h3 className="text-lg font-semibold text-white mb-3">
                {t(`overview_cards.${key}.title`)}
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed mb-4">
                {t(`overview_cards.${key}.text`)}
              </p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-brand-red/70 font-medium tracking-wide">
                  {t(`overview_cards.${key}.highlight`)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── OPERATIONAL DIVISIONS ─── */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label={t("divisions_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("divisions_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {divisionKeys.map((key, i) => (
            <DivisionCard
              key={key}
              icon={divisionIcons[i]}
              title={t(`divisions.${key}.title`)}
              text={t(`divisions.${key}.text`)}
              specialties={t(`divisions.${key}.specialties`)}
              strength={t(`divisions.${key}.strength`)}
              status={t(`divisions.${key}.status`)}
              delay={i * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* ─── JOIN CTA ─── */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t("join_title")}
          </h2>
          <p className="text-brand-text-muted leading-relaxed mb-8">
            {t("join_text")}
          </p>
          <Button href="/recruitment">{t("join_cta")}</Button>
        </div>
      </Section>
    </>
  );
}
