import { useState, useEffect } from "react";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import LogoIntro from "@/components/LogoIntro";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import NewHeroSection from "@/components/sections/NewHeroSection";
import WhatIsNewSection from "@/components/sections/WhatIsNewSection";
import WhoIsItForSection from "@/components/sections/WhoIsItForSection";
import HowDoesItWorkSection from "@/components/sections/HowDoesItWorkSection";
import NewTestimonialsSection from "@/components/sections/NewTestimonialsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import NewContactSection from "@/components/sections/NewContactSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  
  return (
    <div className="min-h-screen">
      <LogoIntro showIntro={showIntro} />
      <div className={`transition-all duration-500 ${showIntro ? 'invisible pointer-events-none' : 'visible pointer-events-auto'}`}>
        <Header />
        <WhatsAppButton />
        <NewHeroSection />
        <WhatIsNewSection />
        <WhoIsItForSection />
        <HowDoesItWorkSection />
        <NewTestimonialsSection />
        <WhyChooseUsSection />
        <NewContactSection />
      </div>
    </div>
  );
};

export default Index;
