import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollProgressDots from "@/components/ScrollProgressDots";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingWhatsAppCTA from "@/components/FloatingWhatsAppCTA";
import FloatingBubbles from "@/components/FloatingBubbles";
import LogoIntro from "@/components/LogoIntro";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import ScrollToTop from "@/components/ScrollToTop";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  useSmoothScroll();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  
  return (
    <div className="min-h-screen snap-container">
      <LogoIntro showIntro={showIntro} />
      <div className={`transition-all duration-500 ${showIntro ? 'invisible pointer-events-none' : 'visible pointer-events-auto'}`}>
        <FloatingBubbles />
        <ScrollProgressBar />
        <ScrollProgressDots />
        <Header />
        <MobileMenu />
        <StickyCTA />
        <WhatsAppButton />
        <FloatingWhatsAppCTA />
        <ScrollToTop />
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
