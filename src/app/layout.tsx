import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  const locale = await getLocale();

  return {
    title: {
      default: t("title"),
      template: "%s | FLUXX PMC",
    },
    description: t("description"),
    keywords: [
      "FLUXX PMC",
      "Star Citizen",
      "PMC",
      "Private Military Corporation",
      "Star Citizen org",
      "Star Citizen organization",
      "Stanton system",
      "military escort",
      "combat operations",
      "security contractor",
      "Star Citizen security",
      "Star Citizen escort",
      "Star Citizen combat",
      "Star Citizen recruitment",
    ],
    authors: [{ name: "FLUXX PMC" }],
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://fluxxpmc.com",
      siteName: "FLUXX PMC",
      type: "website",
      locale: locale === "fr" ? "fr_FR" : locale === "es" ? "es_ES" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      languages: {
        en: "https://fluxxpmc.com",
        fr: "https://fluxxpmc.com",
        es: "https://fluxxpmc.com",
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
