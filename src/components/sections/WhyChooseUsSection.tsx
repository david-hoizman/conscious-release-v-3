import { Check } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    "טיפול עדין, מכיל ומכבד",
    "מותאם אישית – בזום או בקליניקה",
    "תוצאות משמעותיות לאורך זמן",
    "דיסקרטיות מלאה",
    "מומלץ על־ידי אנשי מקצוע בתחום הנפש והבריאות",
    "וברכות התקבלו גם מרבנים ויועצים רוחניים"
  ];

  return (
    <section id="why-here" className="py-16 md:py-20 px-4 bg-card" dir="rtl">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          🕊️ למה לבחור בנו
        </h2>
        
        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-5 bg-background rounded-lg border border-border hover:border-sage/50 transition-colors"
            >
              <Check className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" />
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
