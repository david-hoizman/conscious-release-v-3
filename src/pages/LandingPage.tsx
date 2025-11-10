import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, ArrowLeft } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useMagnetic } from "@/hooks/use-magnetic";
import landingBg from "@/assets/landing-background.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { ref, isVisible } = useScrollAnimation({ variant: "fade-up", threshold: 0.1 });
  const magneticCTA = useMagnetic({ strength: 0.3, tolerance: 120 });

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום, אשמח לשמוע עוד על שיטת שלושת המימדים", "_blank");
  };

  const benefits = [
    "טיפול ממוקד בשורש האמיתי של הבעיה",
    "שיטה מקיפה שמטפלת בגוף, נפש ורוח",
    "תוצאות מהירות ומשמעותיות",
    "ליווי אישי ומותאם אישית",
    "גישה עדינה ובטוחה ללא תרופות"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" dir="rtl">
      {/* Background with 20% opacity */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${landingBg})`,
          opacity: 0.2,
          zIndex: -1
        }}
      />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" style={{ zIndex: -1 }} />

      {/* Header with back link */}
      <header className="absolute top-0 left-0 right-0 p-6 z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span>חזרה לאתר</span>
        </Link>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-20 md:py-32 max-w-4xl">
        <div ref={ref} className={`space-y-12 section-slide-up ${isVisible ? 'visible' : ''}`}>
          
          {/* Hero section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-shimmer leading-tight font-varela">
              שיטת שלושת המימדים
            </h1>
            
            <div className="h-1 w-32 bg-gradient-to-r from-sage via-peach to-sage mx-auto rounded-full"></div>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto">
              גישה ייחודית לריפוי גוף, נפש ורוח
            </p>
          </div>

          {/* What is it */}
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-border/50 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              מה זה בעצם?
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-center">
              שיטת שלושת המימדים היא גישה טיפולית מקיפה המבוססת על הבינה שכל בעיה פיזית, רגשית או נפשית 
              קשורה לשלושה מימדים: <span className="font-bold text-sage">הגוף, הנפש והרוח</span>. 
              הטיפול מאתר את השורש האמיתי של הבעיה ומטפל בה ברמה העמוקה ביותר.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
              למה זה עובד?
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:border-sage/50 transition-all group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-7 w-7 text-sage flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 pt-8">
            <p className="text-xl md:text-2xl text-foreground/70 font-medium">
              מוכנים להתחיל את המסע שלכם?
            </p>
            <Button
              ref={magneticCTA as any}
              onClick={handleWhatsAppClick}
              size="lg"
              className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white px-12 py-8 text-xl md:text-2xl font-semibold rounded-2xl shadow-2xl hover:shadow-[#25D366]/30 transition-all overflow-hidden"
              style={{ transition: 'transform 0.2s ease-out' }}
            >
              <MessageCircle className="ml-3 h-7 w-7 transition-all" />
              דברו איתנו בוואטסאפ
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
          </div>

          {/* Footer info */}
          <div className="text-center pt-12 border-t border-border/30 space-y-4">
            <p className="text-lg font-semibold text-primary">המרכז לריפוי תודעתי</p>
            <div className="text-base text-foreground/60 space-y-1">
              <p>כנרת 15, בני ברק</p>
              <p>📱 052-717-6000</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
