import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledHalfway = currentScrollY > window.innerHeight / 2;
      
      setIsVisible(scrolledHalfway);
      setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-[90] transition-all duration-300 md:hidden ${
        isVisible && !isScrollingDown
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <Button
        onClick={scrollToContact}
        size="lg"
        className="rounded-full shadow-2xl hover:shadow-accent/40 animate-glow-pulse group"
      >
        <Phone className="h-5 w-5 ml-2 group-hover:rotate-12 transition-transform" />
        <span className="font-semibold">קבעו פגישה</span>
      </Button>
    </div>
  );
};

export default StickyCTA;
