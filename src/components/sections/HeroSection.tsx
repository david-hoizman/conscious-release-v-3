import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-main.png";
import { Sparkles, ArrowLeft } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden px-4 pt-16 pb-2 md:pt-18 md:pb-3" dir="rtl">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-sage/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl text-center space-y-2 md:space-y-3 relative z-10">
        {/* Logo */}
        <div className="animate-scale-in">
          <img 
            src={logo} 
            alt="המרכז לריפוי תודעתי" 
            className="h-auto w-24 sm:w-32 md:w-40 max-w-full mx-auto object-contain drop-shadow-lg" 
          />
        </div>
        
        {/* Main heading */}
        <div className="space-y-1 md:space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="text-sage h-4 w-4 md:h-5 md:w-5" />
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
              להשתחרר. להתחבר. להתרפא.
            </h1>
            <Sparkles className="text-sage h-4 w-4 md:h-5 md:w-5" />
          </div>
          
          <p className="text-sm md:text-base text-foreground/80 max-w-2xl mx-auto leading-snug">
            תהליך עדין של ריפוי תודעתי שמסייע לשחרר עומסים רגשיים
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
