import Navbar from "@/components/Navbar";
import JourneyIndicator from "@/components/JourneyIndicator";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import CampusSection from "@/components/sections/CampusSection";
import StudentLifeSection from "@/components/sections/StudentLifeSection";
import AdmissionsSection from "@/components/sections/AdmissionsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <JourneyIndicator />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <CampusSection />
      <StudentLifeSection />
      <AdmissionsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
