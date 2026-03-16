"use client";

import { useTranslations } from "next-intl";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { EXTERNAL_LINKS } from "@/config/external-links";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <PageHero
        label={t("hero_label")}
        title={t("hero_title")}
        text={t("hero_text")}
      />

      {/* What Can We Help With */}
      <Section>
        <SectionLabel label={t("inquiry_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("inquiry_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {[0, 1, 2, 3].map((i) => {
            const inquiry = t.raw(`inquiries.${i}`);
            return (
              <Card key={i} delay={i * 0.1}>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {inquiry?.title || ""}
                </h3>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  {inquiry?.description || ""}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Communication Channels */}
      <Section className="bg-brand-gray/30">
        <SectionLabel label={t("channels_label")} />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          {t("channels_title")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card delay={0}>
            <h3 className="text-lg font-semibold text-white mb-3">
              {t("channels.discord.title")}
            </h3>
            <p className="text-sm text-brand-text-muted leading-relaxed mb-6">
              {t("channels.discord.text")}
            </p>
            <Button href={EXTERNAL_LINKS.discord} external>
              Join Discord
            </Button>
          </Card>

          <Card delay={0.1}>
            <h3 className="text-lg font-semibold text-white mb-3">
              {t("channels.org.title")}
            </h3>
            <p className="text-sm text-brand-text-muted leading-relaxed mb-6">
              {t("channels.org.text")}
            </p>
            <Button href={EXTERNAL_LINKS.rsiOrg} external>
              View Organization
            </Button>
          </Card>
        </div>
      </Section>
    </>
  );
}
