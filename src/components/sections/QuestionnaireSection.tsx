import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { ClipboardCheck, Sparkles } from "lucide-react";

const QuestionnaireSection = () => {
  const [answers, setAnswers] = useState<boolean[]>([false, false, false, false]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    "האם אתם חווים עומס רגשי, מחשבות בלתי פוסקות או מתח בגוף?",
    "האם יש כאבים גופניים שחוזרים שוב ושוב, בלי סיבה רפואית ברורה?",
    "האם אתם מרגישים שמגיע לכם יותר שקט, חופש ואיזון?",
    "האם אתם רוצים להבין את עצמכם לעומק וליצור שינוי אמיתי מבפנים?",
  ];

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const newAnswers = [...answers];
    newAnswers[index] = checked;
    setAnswers(newAnswers);
    setShowResult(false);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const countYes = answers.filter(Boolean).length;
  const isMatch = countYes >= 2;

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000", "_blank");
  };

  return (
    <section id="questionnaire" className="py-24 bg-gradient-soft relative overflow-hidden" dir="rtl">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-peach/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center space-y-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
            <ClipboardCheck className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold">זה בשבילכם?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-tight px-4">
            שאלון עצמי — האם זה הזמן לטפל בעצמכם?
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            ענו לעצמכם בכנות:
          </p>
          
          <div className="h-1 w-32 bg-gradient-to-r from-accent via-peach to-accent mx-auto rounded-full"></div>
          
          <Card className="p-6 md:p-10 space-y-6 md:space-y-8 text-right bg-card/80 backdrop-blur-sm shadow-2xl rounded-3xl border-2 border-border/50">
            {questions.map((question, index) => (
              <div
                key={index}
                className="group flex items-start gap-3 md:gap-4 p-4 md:p-6 hover:bg-accent/5 rounded-2xl transition-all duration-300 border border-transparent hover:border-accent/20"
              >
                <Checkbox
                  id={`question-${index}`}
                  checked={answers[index]}
                  onCheckedChange={(checked) => handleCheckboxChange(index, checked as boolean)}
                  className="mt-1 data-[state=checked]:bg-accent data-[state=checked]:border-accent flex-shrink-0"
                />
                <label
                  htmlFor={`question-${index}`}
                  className="text-base md:text-lg lg:text-xl text-foreground/80 group-hover:text-foreground cursor-pointer flex-1 leading-relaxed transition-colors"
                >
                  {question}
                </label>
              </div>
            ))}
            
            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground py-5 md:py-7 text-lg md:text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="ml-2 h-5 w-5" />
              הצג תוצאה
            </Button>
            
            {showResult && (
              <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-accent/10 to-peach/10 rounded-3xl border-2 border-accent/30 shadow-xl animate-scale-in">
                <div className="text-center space-y-4 md:space-y-6">
                  <div className="inline-flex items-center gap-2 bg-accent/20 px-6 py-3 rounded-full">
                    <Sparkles className="h-5 w-5 text-accent" />
                  </div>
                  
                  <p className="text-xl md:text-2xl font-bold text-primary">
                    {isMatch
                      ? "אם עניתם \"כן\" על יותר משתי שאלות – זה סימן שהגיע הזמן להקשיב פנימה."
                      : "תודה שמילאתם את השאלון."}
                  </p>
                  <p className="text-base md:text-lg text-foreground/70">
                    {isMatch 
                      ? "במרכז לריפוי תודעתי תגלו גישה אחרת: רכה, לא שיפוטית, שמאפשרת שינוי עמוק ויציב מבפנים."
                      : "זה לא אבחון – זו הזמנה להקשבה פנימה."}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4">
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 md:px-10 py-5 md:py-6 text-base md:text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      שיחה אישית בוואטסאפ
                    </Button>
                    <Button
                      onClick={scrollToContact}
                      variant="outline"
                      className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 md:px-10 py-5 md:py-6 text-base md:text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      השאירו פרטים ונחזור אליכם
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuestionnaireSection;
