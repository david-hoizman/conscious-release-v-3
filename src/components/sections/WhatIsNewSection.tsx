const WhatIsNewSection = () => {
  return (
    <section id="what-is" className="py-16 md:py-20 px-4 bg-card" dir="rtl">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-foreground">
          🌱 מהו ריפוי תודעתי
        </h2>
        
        <div className="space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
          <p>
            החיים משאירים בנו חוויות, טראומות ודפוסים – חלקם מודעים, חלקם נצרבים בתת־המודע.
          </p>
          <p>
            <span className="text-primary font-semibold">ריפוי תודעתי</span> מאפשר לזהות את המקור, לשחרר את המטען הרגשי וליצור חיבור מחודש אל השורש הפנימי.
          </p>
          <p className="text-muted-foreground italic border-r-4 border-sage pr-4">
            התהליך אינו רפואי ואינו תחליף לטיפול רפואי, אך מהווה תהליך תומך ומחזק לגוף ולנפש.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsNewSection;
