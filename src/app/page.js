import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import LoreSection from "../components/sections/LoreSection";
import TheaterSection from "../components/sections/TheaterSection";
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
      <LoreSection />
      <SectionDivider />
      <TheaterSection />
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
