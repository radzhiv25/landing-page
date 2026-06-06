import { AboutSection } from "@/components/sections/about";
import { ConnectivitySection } from "@/components/sections/connectivity";
import { CtaSection } from "@/components/sections/cta";
import { FacilitiesSection } from "@/components/sections/facilities";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
import { ProfessionalsSection } from "@/components/sections/professionals";
import { ProgramsSection } from "@/components/sections/programs";
import { QuoteSection } from "@/components/sections/quote";

export function Sections() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <FeaturesSection />
      <ProgramsSection />
      <ConnectivitySection />
      <ProfessionalsSection />
      <FacilitiesSection />
      <CtaSection />
    </>
  );
}
