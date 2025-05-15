
import React, { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import HowItWorksSection from "../components/HowItWorksSection";
import AdvantagesSection from "../components/AdvantagesSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

const Index = () => {
  // Set the document title and language on component mount
  useEffect(() => {
    document.title = "LOOPMIND.PRO — AI-агентство нового поколения | PropTech SaaS";
    document.documentElement.lang = "ru-RU";
  }, []);

  return (
    <div className="bg-[#0E0E10] min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <AdvantagesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
