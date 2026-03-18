import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Secure Communications — Contact Command",
  description:
    "Contact FLUXX PMC command staff for contract inquiries, enlistment applications, strategic partnerships, or general intelligence. Encrypted communication channels.",
  openGraph: {
    title: "FLUXX PMC — Secure Communications",
    description: "Contact command via encrypted channels",
    url: "https://fluxxpmc.com/contact",
    type: "website",
  },
};

export default function Page() {
  return <ContactPage />;
}
