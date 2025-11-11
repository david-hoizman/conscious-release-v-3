import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background"
      dir="rtl"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-l from-sage via-primary to-accent bg-clip-text text-transparent">
              אודות המרכז לריפוי תודעתי
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-foreground/90">
            <p>
              המרכז לריפוי תודעתי נולד מתוך אמונה עמוקה שכל ריפוי אמיתי מתחיל בתודעה.
              כשאנחנו לומדים לזהות, להבין ולשחרר את הדפוסים, האמונות והרגשות שמגבילים אותנו —
              נפתח מקום חדש בתוכנו של חופש, בהירות וחיבור פנימי.
            </p>

            <p>
              במרכז אנחנו משלבים ידע וניסיון של שנים בגישות תודעתיות, רגשיות ואנרגטיות,
              וביניהן שיטת שלושת המימדים – גישה עדינה ומדויקת העובדת ישירות עם תת־המודע,
              ומאפשרת שחרור עמוק של מטענים רגשיים ואנרגטיים.
            </p>

            <p>
              הטיפול מתבצע באווירה רגועה, אישית ומכילה – בקליניקה או במפגש מקוון (Zoom),
              ומאפשר לכל אדם לעבור תהליך מעצים, מרפא ומדויק לקצב שלו.
            </p>

            <p>
              המרכז מתאים למבוגרים, נוער וילדים, ומתמקד בתהליכים של שינוי וריפוי במגוון תחומים:
              חרדות, עומסים רגשיים, קשיים בזוגיות, כאבים פיזיים ללא רקע רפואי, בעיות שינה, טיקים, הרטבה, חוסר איזון הורמונלי ועוד.
            </p>

            <p>
              הדרך שלנו היא לא רק לטפל – אלא ללמד את האדם להקשיב לעצמו מחדש,
              להתחבר לשורש הפנימי שממנו נובעים השקט, האיזון והחיוניות.
            </p>

            {/* Values Section */}
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border/20 mt-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-sage flex items-center gap-3">
                <span className="text-3xl">💫</span>
                הערכים שלנו
              </h3>
              <div className="space-y-4 text-base md:text-lg">
                <p><strong className="text-primary">רגישות ואמפתיה</strong> – הקשבה אמיתית לכל אדם ולמסע האישי שלו.</p>
                <p><strong className="text-primary">דיוק וענווה</strong> – גישה מבוססת תובנות תודעתיות עמוקות ולא מתיימרת.</p>
                <p><strong className="text-primary">צניעות ודיסקרטיות</strong> – כל מפגש נשמר באמון מלא ובכבוד הדדי.</p>
                <p><strong className="text-primary">שילוב בין תודעה לגוף</strong> – מתוך הבנה שריפוי אמיתי כולל את שניהם.</p>
              </div>
            </div>

            {/* Personal Note */}
            <div className="bg-gradient-to-br from-sage/10 via-primary/5 to-accent/10 rounded-2xl p-8 md:p-10 border border-sage/20 mt-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-sage flex items-center gap-3">
                <span className="text-3xl">🕊️</span>
                מילה אישית
              </h3>
              <p className="text-base md:text-lg">
                בכל יום אנחנו זוכים לראות איך שינוי קטן בתודעה יוצר שינוי גדול בחיים.
                אנחנו מזמינים אתכם לגלות דרך חדשה להקשיב, לשחרר ולהתרפא — מבפנים החוצה.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
