import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-main.png";

const NewHeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום%20🌿%20הגעתי%20מהאתר%20mindcenter.co.il%20ורציתי%20לשמוע%20פרטים%20על%20התהליך", "_blank");
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-20" dir="rtl">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <img 
          src={logo} 
          alt="המרכז לריפוי תודעתי" 
          className="h-auto w-48 sm:w-56 md:w-64 mx-auto object-contain mb-6" 
        />
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
          להשתחרר. להתחבר. להתרפא.
        </h1>
        
        <div className="space-y-4 text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          <p className="font-medium text-sage text-xl sm:text-2xl">
            🩵 ריפוי תודעתי – שינוי מבפנים
          </p>
          <p>
            כל תהליך של ריפוי אמיתי מתחיל בתודעה.
          </p>
          <p>
            כאן נוצר <span className="text-primary font-semibold">מרחב רגוע, מכיל ולא שיפוטי</span> – מקום שבו ניתן לשחרר עומסים רגשיים, דפוסים מעכבים ומטענים מהעבר, וליצור איזון בין הגוף, הרגש והתודעה.
          </p>
          <p className="text-muted-foreground">
            הטיפול מתקיים בקליניקה או בזום, בגישה עדינה ומדויקת, המשלבת עבודה תודעתית, רגשית ופיזית.
          </p>
        </div>
        
        <Button
          size="lg"
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 text-lg rounded-xl shadow-lg"
        >
          💬 שיחה בוואטסאפ
        </Button>
      </div>
    </section>
  );
};

export default NewHeroSection;
