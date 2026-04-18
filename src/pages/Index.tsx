import Navbar from "@/components/Navbar";
import JourneyIndicator from "@/components/JourneyIndicator";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import CampusSection from "@/components/sections/CampusSection";
import StudentLifeSection from "@/components/sections/StudentLifeSection";
import AdmissionsSection from "@/components/sections/AdmissionsSection";
import ContactSection from "@/components/sections/ContactSection";
import BackgroundScene from "@/components/three/BackgroundScene";

const Index = () => {
  return (
    <main className="relative">
      {/* Global animated 3D university backdrop */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <BackgroundScene />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/80" />
      </div>

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
