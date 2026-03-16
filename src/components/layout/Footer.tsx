import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/FLUXX-Logo.png"
                alt="FLUXX PMC Logo"
                width={32}
                height={32}
              />
              <span className="text-white font-bold tracking-[0.3em] text-sm">
                FLUXX<span className="text-brand-red ml-1">PMC</span>
              </span>
            </div>
            <p className="text-brand-text-muted text-sm leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">
              {t("nav_title")}
            </h4>
            <div className="space-y-2">
              {(["home", "about", "operations"] as const).map(
                (key) => (
                  <Link
                    key={key}
                    href={key === "home" ? "/" : `/${key}`}
                    className="block text-sm text-brand-text-muted hover:text-brand-red transition-colors"
                  >
                    {nav(key)}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Operations */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">
              {t("operations_title")}
            </h4>
            <div className="space-y-2">
              {(["contracts", "recruitment", "contact"] as const).map(
                (key) => (
                  <Link
                    key={key}
                    href={`/${key}`}
                    className="block text-sm text-brand-text-muted hover:text-brand-red transition-colors"
                  >
                    {nav(key)}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">
              {t("connect_title")}
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-brand-text-muted hover:text-brand-red transition-colors"
              >
                {t("discord")}
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-brand-text-muted hover:text-brand-red transition-colors"
              >
                {t("org_page")}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-text-muted">
            {t("copyright", { year })}
          </p>
          <p className="text-xs text-brand-text-muted/60">
            {t("disclaimer")}
          </p>
        </div>
      </div>
    </footer>
  );
}
