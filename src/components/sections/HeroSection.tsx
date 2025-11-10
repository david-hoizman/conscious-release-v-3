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
    <section className="relative min-h-[75vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden px-4 pt-20 pb-6 md:pt-24 md:pb-12" dir="rtl">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-sage/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl text-center space-y-4 md:space-y-6 relative z-10">
        {/* Logo */}
        <div className="animate-scale-in">
          <img 
            src={logo} 
            alt="המרכז לריפוי תודעתי" 
            className="h-auto w-32 sm:w-40 md:w-56 max-w-full mx-auto object-contain drop-shadow-lg" 
          />
        </div>
        
        {/* Main heading */}
        <div className="space-y-2 md:space-y-3">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="text-sage h-4 w-4 md:h-5 md:w-5" />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              להשתחרר. להתחבר. להתרפא.
            </h1>
            <Sparkles className="text-sage h-4 w-4 md:h-5 md:w-5" />
          </div>
          
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto leading-snug">
            תהליך עדין של ריפוי תודעתי שמסייע לשחרר עומסים רגשיים
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center pt-2 md:pt-4">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="w-full sm:w-auto bg-sage hover:bg-sage/90 text-white px-8 py-5 md:py-6 text-base md:text-lg rounded-xl shadow-lg group"
          >
            בואו נדבר
            <ArrowLeft className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:-translate-x-1 transition-transform" />
          </Button>
          
          <Link to="/questionnaire" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full border-2 border-sage text-sage hover:bg-sage hover:text-white px-8 py-5 md:py-6 text-base md:text-lg rounded-xl"
            >
              שאלון התאמה
            </Button>
          </Link>
        </div>

        {/* Quick stats */}
        <div className="pt-4 md:pt-6 flex flex-wrap justify-center gap-4 md:gap-6 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-sage">15+</div>
            <div className="text-xs md:text-sm text-foreground/60">שנות ניסיון</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-sage">500+</div>
            <div className="text-xs md:text-sm text-foreground/60">לקוחות מרוצים</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-sage">95%</div>
            <div className="text-xs md:text-sm text-foreground/60">שביעות רצון</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
