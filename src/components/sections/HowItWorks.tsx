import { PhoneCall, ClipboardCheck, ShieldCheck } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  const steps = [
    {
      icon: PhoneCall,
      title: "1. اتصل بنا",
      desc: "تواصل معنا عبر الهاتف أو الواتساب، وسيقوم فريق خدمة العملاء بالرد عليك فوراً لتحديد المشكلة.",
      badge: "فوري"
    },
    {
      icon: ClipboardCheck,
      title: "2. المعاينة المجانية",
      desc: "نرسل خبيراً متخصصاً لمعاينة المكان مجاناً وتحديد نوع الإصابة واختيار العلاج المناسب.",
      badge: "خلال 24 ساعة"
    },
    {
      icon: ShieldCheck,
      title: "3. التطبيق والضمان",
      desc: "يتم تطبيق المكافحة بمواد ألمانية آمنة، ونمنحك شهادة ضمان حقيقية لضمان عدم عودة الحشرات.",
      badge: "ضمان فوري"
    }
  ];

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="text-primary text-sm font-bold uppercase tracking-wider mb-3">— آلية العمل —</div>
        <h2 className="text-3xl md:text-5xl font-black mb-20">كيف <span className="text-primary">نعمل؟</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-px border-t-2 border-dashed border-primary/30 -z-10" />
          
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-card p-8 pt-12 rounded-2xl border border-border relative transition-colors"
            >
              <div className="absolute -top-8 bg-background w-16 h-16 rounded-full flex items-center justify-center ring-2 ring-primary ring-offset-2 ring-offset-background text-primary">
                <step.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 mt-2">{step.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{step.desc}</p>
              
              <div className="mt-auto bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold">
                {step.badge}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div 
          className="mt-20 bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-sm"
        >
          <div className="text-center md:text-right mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-black mb-4">جاهز للبدء؟</h3>
            <p className="text-primary-foreground/90 text-lg">فريقنا مستعد لتلبية طلبك الآن بأفضل الأسعار</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-3xl font-black" dir="ltr">01080808564</div>
            <Button asChild size="lg" className="h-14 bg-background text-primary hover:bg-background/90 text-lg font-bold px-8 rounded-xl">
              <a href="https://wa.me/201080808564" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="w-5 h-5 ml-2" />
                تواصل واتساب
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
