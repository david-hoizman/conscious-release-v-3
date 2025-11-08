import { useState } from "react";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "what-is", label: "מה זה ריפוי תודעתי" },
    { id: "how-it-works", label: "איך זה עובד" },
    { id: "questionnaire", label: "שאלון" },
    { id: "contact", label: "יצירת קשר" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-[60] p-2 rounded-full bg-card/95 backdrop-blur-lg shadow-lg border border-border/50 hover:bg-accent/10 transition-all"
        aria-label="תפריט"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-foreground" />
        )}
      </button>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[55] bg-background/98 backdrop-blur-xl transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        dir="rtl"
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6 px-8">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-2xl font-bold text-foreground hover:text-accent transition-all duration-300 transform hover:scale-110 ${
                isOpen ? "animate-slide-in-right" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
