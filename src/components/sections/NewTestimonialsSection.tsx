const NewTestimonialsSection = () => {
  const testimonials = [
    {
      name: "א.ש., בת 35",
      issue: "אלרגיות קלות",
      text: "לא האמנתי שאלרגיות ייעלמו בלי תרופות. אחרי כמה טיפולים – הגוף נרגע באמת."
    },
    {
      name: "מ.ד., בן 11",
      issue: "טיקים",
      text: "ארבעה מפגשים, והפנים חזרו לשקט. סוף־סוף שלווה גם בבית."
    },
    {
      name: "ד.צ., בן 41",
      issue: "קשיי שינה",
      text: "שלושה מפגשים הספיקו כדי להחזיר לי לילות רגועים."
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-20 px-4" dir="rtl">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          💬 סיפורי ריפוי אמיתיים
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border-2 border-border shadow-sm space-y-4"
            >
              <div className="text-right">
                <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                <p className="text-sm text-sage font-medium">{testimonial.issue}</p>
              </div>
              <p className="text-base text-foreground/80 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewTestimonialsSection;
