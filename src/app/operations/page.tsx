import type { Metadata } from "next";
import OperationsPage from "@/components/pages/OperationsPage";

export const metadata: Metadata = {
  title: "Operations Center — Mission Profiles & Doctrine",
  description:
    "FLUXX PMC operational capabilities: security operations, combat deployments, ISR missions, and armed escort formations. Doctrine-driven execution with real-time command oversight.",
  openGraph: {
    title: "FLUXX PMC Operations Center",
    description: "Mission profiles, deployment pipeline, and operational status",
    url: "https://fluxxpmc.com/operations",
    type: "website",
  },
};

export default function Page() {
  return <OperationsPage />;
}
