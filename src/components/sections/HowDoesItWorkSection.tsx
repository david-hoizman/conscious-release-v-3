const HowDoesItWorkSection = () => {
  const steps = [
    {
      number: "1️⃣",
      title: "זיהוי והקשבה",
      description: "הכרה בדפוסים ובתחושות שמעכבים"
    },
    {
      number: "2️⃣",
      title: "שחרור ועדינות",
      description: "ניקוי רגשי ואנרגטי מהשורש"
    },
    {
      number: "3️⃣",
      title: "איזון וחיבור פנימי",
      description: "פתיחת מקום חדש לשקט, בהירות ורוגע"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-20 px-4 bg-card" dir="rtl">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-foreground">
          💫 איך זה עובד
        </h2>
        
        <p className="text-center text-base sm:text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
          התהליך מתמקד במקור הרגשי או התודעתי של הקושי ומתרחש בשלושה שלבים:
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-8 bg-background rounded-xl border-2 border-border hover:border-sage/50 transition-all"
            >
              <div className="text-5xl mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-primary">{step.title}</h3>
              <p className="text-base text-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowDoesItWorkSection;
