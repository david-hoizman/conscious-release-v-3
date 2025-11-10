import { Heart, Brain, Moon, Users, Sparkles, CircleDot } from "lucide-react";

const WhoIsItForSection = () => {
  const items = [
    { icon: Brain, text: "חרדות, פחדים וחוסר שקט פנימי" },
    { icon: Heart, text: "כאבים גופניים ללא סיבה רפואית ברורה" },
    { icon: Moon, text: "עייפות, מתח כרוני או קשיי שינה" },
    { icon: Users, text: "קשיים בזוגיות או תקשורת בין־אישית" },
    { icon: Sparkles, text: "תופעות אצל ילדים – טיקים, הרטבה, רגישות רגשית" },
    { icon: CircleDot, text: "תחושת תקיעות או בלבול" }
  ];

  return (
    <section id="who-is-it-for" className="py-16 md:py-20 px-4" dir="rtl">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          🌸 למי זה מתאים
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-sage/50 transition-colors"
            >
              <item.icon className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
