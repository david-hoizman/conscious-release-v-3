import { MessageCircle } from "lucide-react";
import { useMagnetic } from "@/hooks/use-magnetic";

const WhatsAppButton = () => {
  const magneticWhatsApp = useMagnetic({ strength: 0.5, tolerance: 150 });
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000", "_blank");
  };

  return (
    <button
      ref={magneticWhatsApp as any}
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 group bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 md:p-5 shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 animate-glow-pulse"
      style={{ transition: 'transform 0.2s ease-out' }}
      aria-label="שיחה בוואטסאפ"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7 group-hover:rotate-12 transition-transform" />
      
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </button>
  );
};

export default WhatsAppButton;
