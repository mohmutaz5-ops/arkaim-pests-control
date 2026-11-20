import { Button } from "@/components/ui/button";
import { CalendarCheck, Clock, Users, ShieldCheck } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const PARTICLES = [
  { top: "15%", right: "10%", size: 6, duration: 7, delay: 0 },
  { top: "55%", right: "25%", size: 4, duration: 9, delay: 1.5 },
  { top: "75%", right: "55%", size: 3, duration: 10, delay: 1 },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Fixed dark background — independent of theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0b1610]" />
        {/* Subtle mesh grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(186,80%,35%) 1px, transparent 1px), linear-gradient(90deg, hsl(186,80%,35%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Green glow orb */}
         <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
         <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[72px] pointer-events-none" />
        {/* Worker silhouette — left side, dark & semi-transparent */}
        <div className="absolute bottom-0 left-0 h-full w-1/2 pointer-events-none select-none hidden md:flex items-end justify-start">
          <img
             src="/hero-worker.webp"
            alt=""
            aria-hidden="true"
             loading="lazy"
             decoding="async"
             width={1024}
             height={1024}
            className="h-[85%] w-auto object-contain object-bottom"
            style={{
              opacity: 0.45,
              filter: "grayscale(60%) brightness(0.6) contrast(1.1)",
            }}
          />
          {/* Fade edges */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0b1610]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1610] via-transparent to-transparent" />
        </div>
      </div>

      {/* Static particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary/60 pointer-events-none z-0"
          style={{
            top: p.top,
            right: p.right,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="container mx-auto px-6 pt-24 pb-16 z-10 flex flex-col items-end text-right max-w-4xl mr-auto ml-0 md:ml-auto md:mr-auto">
        <div className="hero-content flex flex-col gap-7 w-full">
          {/* Badge */}
          <div className="flex justify-end">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              تقنية ألمانية 100% — خبرة تزيد عن 10 سنوات
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.25] tracking-tight">
            الأمان الحقيقي يبدأ
            <br />
            من بيت{" "}
            <span className="text-primary relative">
              خالٍ من الحشرات
              <span className="absolute -bottom-1 right-0 left-0 h-0.5 bg-primary/40 rounded-full" />
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            أركيم الألمانية — خبراء مكافحة الحشرات والقوارض في مصر. مواد آمنة على عائلتك، ضمان حقيقي لعدم العودة، وفريق متاح على مدار الساعة.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
             <Button asChild
              size="lg"
              className="h-14 px-8 text-base font-bold rounded-xl shadow-lg shadow-primary/30"
              data-testid="button-hero-call"
            >
               <a href="https://wa.me/201080808564" target="_blank" rel="noopener noreferrer">
              <SiWhatsapp className="w-5 h-5 ml-2" />
              تواصل واتساب
               </a>
            </Button>
             <Button asChild
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base font-bold rounded-xl border-white/20 text-white hover:bg-white/5"
              data-testid="button-hero-consult"
            >
               <a href="#quick-form">
              <CalendarCheck className="w-5 h-5 ml-2" />
              طلب معاينة مجانية
               </a>
            </Button>
          </div>

          {/* Inline stats */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 border-t border-white/10">
            {[
              { icon: ShieldCheck, label: "+10 سنوات خبرة" },
              { icon: Users, label: "+5000 عميل راضٍ" },
              { icon: Clock, label: "خدمة 24/7" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <Icon className="w-4 h-4 text-primary shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
