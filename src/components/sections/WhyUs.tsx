import { Shield, Leaf, Wind, Baby } from "lucide-react";

export function WhyUs() {
  const reasons = [
    { title: "خبرة ألمانية", desc: "نعتمد على مواد وطرق مكافحة ألمانية أصلية 100% فعالة." },
    { title: "مواد آمنة للأطفال", desc: "نستخدم مبيدات مصرح بها عالمياً لا تسبب روائح أو أضرار." },
    { title: "ضمان 5 سنوات", desc: "نقدم ضماناً حقيقياً يصل إلى 5 سنوات على جميع خدماتنا." },
    { title: "خدمة 24/7", desc: "فريقنا مستعد لتلبية طلباتك في أي وقت على مدار الساعة." },
  ];

  return (
    <section className="py-28 bg-card/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="text-primary text-sm font-bold uppercase tracking-wider mb-3">— لماذا أركيم —</div>
            <h2 className="text-3xl md:text-5xl font-black mb-6">لماذا تختار <span className="text-primary">أركيم؟</span></h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              لأننا لا نقدم مجرد خدمة رش حشرات، بل نقدم حماية متكاملة لمنزلك وعائلتك. نحن نجمع بين التكنولوجيا الألمانية، الخبرة الطويلة، والالتزام بأعلى معايير السلامة.
            </p>
            
            <div className="space-y-6 mb-10">
              {reasons.map((reason, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">{reason.title}</h4>
                    <p className="text-muted-foreground leading-snug">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          
          <div className="relative h-[600px] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 mix-blend-overlay" />
            <img
              src="/why-us.webp"
              srcSet="/why-us-small.webp 520w, /why-us.webp 768w"
              sizes="(min-width: 1024px) 45vw, calc(100vw - 32px)"
              alt="أمن على عائلتك - أركيم لمكافحة الحشرات"
              loading="lazy"
              width={768}
              height={960}
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Badges row */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-12 border-t border-border">
          <div className="flex items-center gap-3 bg-card border border-border/50 px-5 py-3 rounded-xl">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-bold text-sm">مواد معتمدة</span>
          </div>
          <div className="flex items-center gap-3 bg-card border border-border/50 px-5 py-3 rounded-xl">
            <Baby className="w-5 h-5 text-primary" />
            <span className="font-bold text-sm">آمن للأطفال</span>
          </div>
          <div className="flex items-center gap-3 bg-card border border-border/50 px-5 py-3 rounded-xl">
            <Wind className="w-5 h-5 text-primary" />
            <span className="font-bold text-sm">بدون روائح</span>
          </div>
          <div className="flex items-center gap-3 bg-card border border-border/50 px-5 py-3 rounded-xl">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="font-bold text-sm">صديق للبيئة</span>
          </div>
        </div>

      </div>
    </section>
  );
}
