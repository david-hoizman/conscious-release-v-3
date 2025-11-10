import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoHeader from "@/assets/logo-header-dark.png";

const Header = () => {
  const [showLogo, setShowLogo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border/30 h-16 md:h-20"
      dir="rtl"
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="flex items-center justify-between relative w-full">
          {/* Logo */}
          <img 
            src={logoHeader} 
            alt="המרכז לריפוי תודעתי" 
            className={`h-[5.46875rem] md:h-[7.03125rem] w-auto object-contain transition-opacity duration-500 max-h-full ${
              showLogo ? "opacity-100" : "opacity-0"
            }`}
          />
          
          {/* Navigation Tabs */}
          <nav className="flex gap-2 md:gap-4 justify-center flex-1 max-w-md md:max-w-none mx-auto">
            {[
              { path: "/", label: "עמוד ראשי" },
              { path: "/questionnaire", label: "שאלון" },
              { path: "/faq", label: "שאלות נפוצות" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm md:text-base lg:text-lg transition-all group whitespace-nowrap px-3 md:px-4 py-2 rounded-lg ${
                  location.pathname === item.path
                    ? "text-foreground bg-sage/10 font-bold" 
                    : "text-foreground/70 hover:text-foreground hover:bg-accent/5 font-medium"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sage to-primary transition-all duration-300 ${
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
