import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import DivisionsSection from "../components/sections/DivisionsSection";
import FleetSection from "../components/sections/FleetSection";
import OperationsSection from "../components/sections/OperationsSection";
import JoinSection from "../components/sections/JoinSection";
import SectionDivider from "../components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <DivisionsSection />
      <SectionDivider />
      <FleetSection />
      <SectionDivider />
      <OperationsSection />
      <SectionDivider />
      <JoinSection />
    </>
  );
}
