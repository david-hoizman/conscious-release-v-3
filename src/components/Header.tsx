import { useState, useEffect } from "react";
import logoHeader from "@/assets/logo-header-dark.png";

const Header = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 100);

      // Detect which section is currently in view
      const sections = ["what-is", "how-it-works", "questionnaire", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 w-full z-50 bg-transparent"
      dir="rtl"
    >
      <img 
        src={logoHeader} 
        alt="המרכז לריפוי תודעתי" 
        className={`h-28 md:h-60 w-auto object-contain fixed z-50 transition-opacity duration-500 ${
          showLogo ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: '-1rem', right: '0rem' }}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center relative">
          <nav className="flex gap-1 md:gap-6 lg:gap-8 flex-wrap justify-center mr-28 md:mx-auto">
            {[
              { id: "what-is", label: "מה זה ריפוי תודעתי" },
              { id: "how-it-works", label: "איך זה עובד" },
              { id: "questionnaire", label: "שאלון" },
              { id: "contact", label: "יצירת קשר" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-xs md:text-xl lg:text-2xl font-medium transition-all group whitespace-nowrap px-0.5 md:px-0 ${
                  activeSection === item.id 
                    ? "text-foreground opacity-100" 
                    : "text-foreground/70 opacity-40 hover:opacity-70 hover:text-accent"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sage to-primary transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
