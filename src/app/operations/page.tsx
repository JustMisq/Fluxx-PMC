import type { Metadata } from "next";
import OperationsPage from "@/components/pages/OperationsPage";

export const metadata: Metadata = {
  title: "Operations | FLUXX PMC",
  description:
    "Explore FLUXX PMC's operational capabilities. Security operations, combat deployments, reconnaissance missions, and escort operations.",
  openGraph: {
    title: "Operations",
    description: "Our operational capabilities and mission types",
    url: "https://fluxxpmc.com/operations",
    type: "website",
  },
};

export default function Page() {
  return <OperationsPage />;
}
