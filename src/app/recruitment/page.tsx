import type { Metadata } from "next";
import RecruitmentPage from "@/components/pages/RecruitmentPage";

export const metadata: Metadata = {
  title: "Recruitment | Join FLUXX PMC",
  description:
    "Join FLUXX PMC as a combat pilot, ground operator, recon specialist, or medical operator. Professional military career in the Stanton system.",
  openGraph: {
    title: "Join FLUXX PMC",
    description: "Recruitment opportunities for experienced operators",
    url: "https://fluxxpmc.com/recruitment",
    type: "website",
  },
};

export default function Page() {
  return <RecruitmentPage />;
}
