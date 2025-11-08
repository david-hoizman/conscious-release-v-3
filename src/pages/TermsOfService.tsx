import { Link } from "react-router-dom";
import { ArrowRight, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-soft" dir="rtl">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowRight className="h-4 w-4" />
              חזרה לדף הבית
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl border-2 border-border/50 shadow-2xl p-8 md:p-12 space-y-8">
          {/* Title */}
          <div className="text-center space-y-4 pb-8 border-b border-border/30">
            <div className="inline-flex items-center justify-center gap-3 bg-accent/10 px-6 py-3 rounded-full">
              <Scale className="h-6 w-6 text-accent" />
              <span className="text-accent font-semibold text-lg">תנאי שימוש</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
              ⚖️ תנאי שימוש והצהרת אחריות
            </h1>
            <p className="text-lg text-foreground/70">
              המרכז לריפוי תודעתי
              <br />
              עודכן לאחרונה: נובמבר 2025
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8 text-foreground/90 leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">1. כללי</h2>
              <div className="space-y-3 pr-4">
                <p><strong>1.1.</strong> אתר זה, שכתובתו mindcenter.co.il (להלן: "האתר"), מופעל ומנוהל על־ידי המרכז לריפוי תודעתי (להלן: "המרכז").</p>
                <p><strong>1.2.</strong> השימוש באתר ובכל תוכן או שירות הניתנים במסגרתו כפופים לתנאי שימוש אלה ("התנאים").</p>
                <p><strong>1.3.</strong> גלישה באתר, הרשמה לטיפול, שליחת פניה, או שימוש בכל מידע או שירות הניתנים על־ידי המרכז, מהווים הסכמה מלאה, מדעת וללא סייג לתנאים אלה.</p>
                <p><strong>1.4.</strong> המרכז שומר לעצמו את הזכות לשנות תנאים אלה בכל עת, לפי שיקול דעתו הבלעדי, ללא הודעה מוקדמת. האחריות להתעדכן בתנאים חלה על המשתמש בלבד.</p>
                <p><strong>1.5.</strong> אם אינך מסכים לאחד או יותר מהתנאים – אל תעשה שימוש באתר או בשירותי המרכז.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">2. מטרת האתר ומהות השירותים</h2>
              <div className="space-y-3 pr-4">
                <p><strong>2.1.</strong> האתר נועד להציג מידע כללי אודות המרכז לריפוי תודעתי, פעילותו, תפיסת עולמו ושירותיו, וכן לאפשר יצירת קשר עם המרכז לצורך קבלת מידע נוסף או קביעת מפגש.</p>
                <p><strong>2.2.</strong> השירותים הניתנים במרכז הינם תהליכים אישיים, הוליסטיים, תודעתיים ורגשיים, שמטרתם תמיכה והנחיה בתהליכי צמיחה, איזון וחיבור פנימי.</p>
                <p><strong>2.3.</strong> השירותים עשויים לכלול: תהליכים אנרגטיים, רגשיים, דמיון מודרך, עבודה עם תת־המודע, שיח מודע, שחרור רגשי, עיבוד חוויות עבר, תרגילי נשימה, מדיטציה, וכלים נוספים מתחום ההתפתחות האישית.</p>
                <p><strong>2.4.</strong> השירותים ניתנים בקליניקה פיזית ו/או באופן מקוון (Zoom), בהתאם להחלטת הלקוח והמטפל.</p>
                <p><strong>2.5.</strong> השירותים והמידע באתר אינם מהווים טיפול רפואי, פסיכולוגי, פסיכיאטרי, פיזיותרפי, או תרופתי, ואינם מהווים תחליף לאבחון, ייעוץ, או טיפול מקצועי אחר המוענקים על־ידי גורמים רפואיים מוסמכים.</p>
                <p><strong>2.6.</strong> מטרת השירותים היא לספק תמיכה תודעתית, רגשית ואנרגטית בלבד, ולא להעניק מענה רפואי או פסיכולוגי מוסדר.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">3. היעדר ייעוץ רפואי או מקצועי</h2>
              <div className="space-y-3 pr-4">
                <p><strong>3.1.</strong> כל התוכן באתר, לרבות מאמרים, טקסטים, סרטונים, המלצות, או הסברים – מסופקים לצורך העשרה כללית בלבד, ואינם מהווים ייעוץ רפואי, חוות דעת מקצועית או המלצה לטיפול מכל סוג שהוא.</p>
                <p><strong>3.2.</strong> אין להסתמך על מידע זה לצורך קבלת החלטות הקשורות לבריאות, לרפואה, לפסיכולוגיה או לכל תחום מקצועי אחר.</p>
                <p><strong>3.3.</strong> בכל מקרה של בעיה רפואית, גופנית או נפשית – יש לפנות לרופא, פסיכולוג, פסיכיאטר, או גורם מוסמך אחר.</p>
                <p><strong>3.4.</strong> המשתמש באתר מצהיר כי הוא מודע לכך שהתהליך התודעתי אינו רפואי, ואינו מבוצע על־ידי רופאים, פסיכולוגים או גורמים בעלי רישיון טיפולי על־פי חוק.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">4. היעדר התחייבות לתוצאות</h2>
              <div className="space-y-3 pr-4">
                <p><strong>4.1.</strong> המרכז לריפוי תודעתי, עובדיו, מנהליו או מטפליו אינם מתחייבים לתוצאה כלשהי, לשיפור במצב בריאותי, רגשי או פיזי, או לשינוי ספציפי באיכות חיי הלקוח.</p>
                <p><strong>4.2.</strong> תוצאות התהליך תלויות במשתנים רבים שאינם בשליטת המרכז, לרבות מוכנותו הפנימית של המטופל, מחויבותו האישית, פתיחותו, נסיבות חייו ומצבו הרגשי.</p>
                <p><strong>4.3.</strong> אין לראות בתהליך התחייבות לריפוי, הקלה, שינוי או השגת יעד כלשהו.</p>
                <p><strong>4.4.</strong> כל אדם מגיב לתהליך באופן שונה, ועל כן אין באפשרות המרכז להבטיח תוצאה אחידה או מובטחת.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">5. הגבלת אחריות</h2>
              <div className="space-y-3 pr-4">
                <p><strong>5.1.</strong> המרכז, עובדיו, נציגיו, מטפליו ובעליו לא יישאו באחריות לכל נזק ישיר, עקיף, מקרי, תוצאתי, כספי, רגשי או אחר, הנובע מהשימוש באתר, מהסתמכות על תוכנו, או מהשתתפות בתהליך טיפולי או רגשי כלשהו.</p>
                <p><strong>5.2.</strong> המשתמש נושא באחריות מלאה ובלעדית לכל פעולה, החלטה או שימוש שהוא עושה במידע או בשירותי המרכז.</p>
                <p><strong>5.3.</strong> המרכז אינו אחראי לכל פגיעה, עוגמת נפש, אי־שביעות רצון או נזק מכל סוג שנגרמו, במישרין או בעקיפין, כתוצאה מהשירותים או מהמידע באתר.</p>
                <p><strong>5.4.</strong> המרכז שומר לעצמו את הזכות לשנות, לעדכן או להפסיק כל שירות, תוכן או פעילות בכל עת, לפי שיקול דעתו הבלעדי, ללא צורך בהודעה מוקדמת.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">6. זכויות יוצרים וקניין רוחני</h2>
              <div className="space-y-3 pr-4">
                <p><strong>6.1.</strong> כל התכנים באתר, לרבות טקסטים, עיצובים, תמונות, גרפיקה, קטעי וידאו, סמלים, סימנים מסחריים, לוגו, עמודים ותוכן מילולי – מוגנים על־פי דיני זכויות היוצרים בישראל ובין־לאומיים.</p>
                <p><strong>6.2.</strong> אין להעתיק, להפיץ, לפרסם, לשדר, לתרגם, או לעשות שימוש מסחרי כלשהו בתכני האתר או בשירותי המרכז ללא קבלת אישור בכתב מהנהלת המרכז.</p>
                <p><strong>6.3.</strong> כל שימוש מפר ייחשב כהפרת זכויות יוצרים, ויהווה עילה לנקיטת הליכים משפטיים.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">7. שמירה על פרטיות</h2>
              <div className="space-y-3 pr-4">
                <p><strong>7.1.</strong> המרכז מכבד את פרטיות המשתמשים ופועל לפי עקרונות שמירה על סודיות ואתיקה טיפולית.</p>
                <p><strong>7.2.</strong> כל מידע אישי שנמסר למרכז (למשל שם, טלפון או הודעה בטופס יצירת קשר) נשמר בסודיות מלאה, ומשמש לצורך יצירת קשר בלבד.</p>
                <p><strong>7.3.</strong> המידע לא יועבר לצד שלישי אלא אם נדרש על־פי חוק, צו שיפוטי, או אם המשתמש נתן לכך הסכמה מפורשת.</p>
                <p><strong>7.4.</strong> המרכז רשאי להשתמש במידע סטטיסטי אנונימי לשם שיפור השירותים, ובלבד שלא ניתן לזהות באמצעותו את המשתמשים.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">8. קישורים חיצוניים</h2>
              <div className="space-y-3 pr-4">
                <p><strong>8.1.</strong> האתר עשוי לכלול קישורים ("לינקים") לאתרים חיצוניים שאינם בשליטת המרכז.</p>
                <p><strong>8.2.</strong> המרכז אינו אחראי לתוכן, לאמינות או למדיניות הפרטיות של אתרים אלה, ואינו ממליץ או מאשר את תוכנם.</p>
                <p><strong>8.3.</strong> כל כניסה לאתרים חיצוניים היא באחריות המשתמש בלבד.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">9. קבלת אחריות אישית של המשתמש</h2>
              <div className="space-y-3 pr-4">
                <p><strong>9.1.</strong> המשתמש מצהיר כי הוא מבין ומסכים שכל השימוש באתר ובשירותי המרכז נעשה על אחריותו האישית והבלעדית בלבד.</p>
                <p><strong>9.2.</strong> המשתמש מצהיר כי הוא במצב בריאותי ונפשי המאפשר לו להשתתף בתהליך רגשי ותודעתי, וכי במידת הצורך ייוועץ באנשי מקצוע מוסמכים.</p>
                <p><strong>9.3.</strong> המשתמש משחרר בזאת את המרכז מכל אחריות, תביעה או דרישה הנובעת מהשימוש באתר או בשירותים.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">10. שירותים מקוונים ומדיניות תקשורת</h2>
              <div className="space-y-3 pr-4">
                <p><strong>10.1.</strong> מפגשים המתבצעים באמצעות פלטפורמות דיגיטליות (כגון Zoom, WhatsApp או דואר אלקטרוני) ניתנים באותה מדיניות אחריות וזהירות כמו מפגש פרונטלי.</p>
                <p><strong>10.2.</strong> המרכז אינו אחראי לתקלות טכניות, שיבושים, ניתוקים או בעיות רשת העלולות להשפיע על איכות המפגש או חוויית המשתמש.</p>
                <p><strong>10.3.</strong> כל תקשורת דיגיטלית עם המרכז הינה חסויה, אולם אין בכך ערובה מלאה מפני חדירה או פריצה למידע מצדדים שלישיים.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">11. שיפוי</h2>
              <div className="space-y-3 pr-4">
                <p>המשתמש מתחייב לשפות את המרכז, עובדיו, מנהליו ומי מטעמו בגין כל נזק, הוצאה, תביעה או דרישה, לרבות הוצאות משפטיות, שינבעו מהפרת תנאי שימוש אלה או משימוש בלתי מורשה באתר או בשירותים.</p>
              </div>
            </section>

            {/* Section 12 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">12. דין וסמכות שיפוט</h2>
              <div className="space-y-3 pr-4">
                <p><strong>12.1.</strong> על השימוש באתר יחולו אך ורק דיני מדינת ישראל.</p>
                <p><strong>12.2.</strong> סמכות השיפוט הבלעדית בכל מחלוקת הנוגעת לשירותים או לתנאים אלה תהא נתונה לבית המשפט המוסמך במחוז תל אביב-יפו בלבד.</p>
              </div>
            </section>

            {/* Section 13 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">13. יצירת קשר</h2>
              <div className="space-y-3 pr-4">
                <p>לכל שאלה, הבהרה או בירור, ניתן ליצור קשר עם המרכז לריפוי תודעתי באמצעות וואטסאפ במספר 052-7176000, או דרך טופס יצירת הקשר באתר.</p>
              </div>
            </section>
          </div>

          {/* Back to home button */}
          <div className="pt-8 border-t border-border/30 text-center">
            <Link to="/">
              <Button size="lg" className="gap-2">
                <ArrowRight className="h-5 w-5" />
                חזרה לדף הבית
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
