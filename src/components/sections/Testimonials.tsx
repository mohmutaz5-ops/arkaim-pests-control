import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const reviews = [
    {
      name: "أحمد محمود",
      location: "مدينة نصر",
      date: "منذ شهر",
      text: "بصراحة شركة محترمة جداً. كان عندي مشكلة كبيرة مع الصراصير في المطبخ، وبعد زيارتهم المشكلة اتحلت تماماً والمواد فعلاً بدون ريحة."
    },
    {
      name: "سارة حسن",
      location: "التجمع الخامس",
      date: "منذ شهرين",
      text: "فريق عمل قمة في الاحترافية والمواعيد مضبوطة. عملوا مكافحة للفيلا بالكامل قبل الصيف والنتيجة ممتازة."
    },
    {
      name: "محمد طارق",
      location: "الساحل الشمالي",
      date: "منذ 3 أشهر",
      text: "اتصلت بيهم بخصوص الشاليه في الساحل، جم في نفس اليوم وخلصوني من النمل الأبيض. ضمانهم حقيقي وخدمتهم ممتازة."
    },
    {
      name: "منى علي",
      location: "مصر الجديدة",
      date: "منذ 3 أشهر",
      text: "أهم حاجة عجبتني إن المواد آمنة عشان عندي أطفال. مفيش أي ريحة مزعجة والبيت بقى نضيف تماماً. شكراً أركيم."
    },
    {
      name: "كريم سعيد",
      location: "المعادي",
      date: "منذ 4 أشهر",
      text: "خدمة رائعة وسريعة. كانوا دقيقين جداً في البحث عن أماكن الفئران وسدوا كل الفتحات. ارتحت من المشكلة دي أخيراً."
    },
    {
      name: "ياسمين جمال",
      location: "المهندسين",
      date: "منذ 5 أشهر",
      text: "نصحني بيهم جاري بعد معاناتي مع البق. تعاملهم راقي والمواد قوية جداً من أول جلسة حسيت بالفرق. بنصح بيهم جداً."
    }
  ];

  return (
    <section className="py-28 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <div className="text-primary text-sm font-bold uppercase tracking-wider mb-3">— آراء العملاء —</div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">ماذا يقول <span className="text-primary">عملاؤنا؟</span></h2>
          <p className="text-muted-foreground text-lg">
            نفخر بثقة أكثر من 5000 عميل في كافة أنحاء مصر.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="h-full"
            >
              <Card className="bg-card/50 backdrop-blur border-border h-full relative rounded-2xl">
                <div className="absolute top-6 left-6 font-serif text-primary/10 text-8xl leading-none select-none">"</div>
                
                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground">
                      Google
                    </div>
                  </div>
                  
                  <p className="text-lg text-foreground mb-10 leading-relaxed flex-1">{review.text}</p>
                  
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xl ring-1 ring-primary/40">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">{review.name}</h4>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap">
                      {review.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
