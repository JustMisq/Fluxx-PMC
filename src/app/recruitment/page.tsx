import type { Metadata } from "next";
import RecruitmentPage from "@/components/pages/RecruitmentPage";

export const metadata: Metadata = {
  title: "Selection & Evaluation — Join FLUXX PMC",
  description:
    "Apply to FLUXX PMC: combat pilots, ground warfare specialists, recon operators, and logistics personnel. Rigorous evaluation pipeline for elite operators in the Stanton system.",
  openGraph: {
    title: "FLUXX PMC — Selection & Evaluation",
    description: "Elite operator recruitment. Discipline. Proficiency. Zero exceptions.",
    url: "https://fluxxpmc.com/recruitment",
    type: "website",
  },
};

export default function Page() {
  return <RecruitmentPage />;
}
