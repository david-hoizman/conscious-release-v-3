import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const NewContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום%20🌿%20הגעתי%20מהאתר%20mindcenter.co.il%20ורציתי%20לשמוע%20פרטים%20על%20התהליך", "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4" dir="rtl">
      <div className="container mx-auto max-w-4xl text-center space-y-10">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            📞 בואו נדבר
          </h2>
          
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">
            אפשר להתחיל בשיחה קצרה, להבין את הצורך ולבדוק יחד התאמה.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <div className="flex items-center gap-2 text-lg text-foreground">
            <Phone className="w-5 h-5 text-sage" />
            <a href="tel:0527176000" className="hover:text-sage transition-colors">
              052-717-6000
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-lg text-foreground">
            <MapPin className="w-5 h-5 text-sage" />
            <span>כנרת 15, בני ברק</span>
          </div>
        </div>
        
        <Button
          size="lg"
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 text-lg rounded-xl shadow-lg"
        >
          💬 לחצו לשיחה בוואטסאפ
        </Button>
        
        {/* Footer */}
        <footer className="pt-12 mt-12 border-t border-border space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground">המרכז לריפוי תודעתי</h3>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-sm text-muted-foreground">
              <span>כנרת 15, בני ברק</span>
              <span className="hidden sm:inline">•</span>
              <a href="tel:0527176000" className="hover:text-sage transition-colors">
                📱 052-717-6000
              </a>
              <span className="hidden sm:inline">•</span>
              <button onClick={handleWhatsAppClick} className="hover:text-sage transition-colors">
                💬 וואטסאפ
              </button>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-3">
            <p className="font-medium max-w-3xl mx-auto">
              התוכן והשירותים באתר נועדו לתמיכה רגשית ותודעתית בלבד, ואינם מהווים טיפול רפואי או התחייבות לתוצאה.
            </p>
            <div className="flex justify-center gap-2 items-center flex-wrap">
              <Link to="/terms" className="hover:text-sage transition-colors font-medium">
                תנאי שימוש
              </Link>
              <span>•</span>
              <span>© כל הזכויות שמורות — המרכז לריפוי תודעתי 🌿</span>
              <span>•</span>
              <span className="font-medium">mindcenter.co.il</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default NewContactSection;
