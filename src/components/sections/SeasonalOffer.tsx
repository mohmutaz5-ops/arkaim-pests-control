import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

export function SeasonalOffer() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-card border border-border border-t-4 border-t-primary rounded-3xl overflow-hidden shadow-sm">
          <div className="flex flex-col lg:flex-row items-stretch">

            {/* Text side */}
            <div className="p-12 md:p-20 flex flex-col justify-center lg:w-1/2 shrink-0">
              <div className="text-primary text-sm font-bold uppercase tracking-wider mb-6">— عرض خاص —</div>
              <div className="inline-flex items-center gap-2 text-primary font-bold mb-6 bg-primary/10 w-fit px-4 py-2 rounded-full">
                <Sun className="w-5 h-5" /> عرض الصيف الحصري
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                احمِ شاليهك في <span className="text-primary">الساحل الشمالي</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                استمتع بإجازة صيفية خالية من الإزعاج. فريق أركيم الآن متواجد في الساحل الشمالي لتقديم خدمات المكافحة الفورية للشاليهات والفلل بأفضل الأسعار.
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-fit text-lg font-bold h-14 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl"
              >
                <a href="#contact">احجز موعدك الآن</a>
              </Button>
            </div>

            {/* Image side — full image, no crop */}
            <div className="lg:w-1/2 shrink-0">
              <img
                src="/seasonal-offer.webp"
                srcSet="/seasonal-offer-small.webp 640w, /seasonal-offer.webp 964w"
                sizes="(min-width: 1024px) 48vw, calc(100vw - 32px)"
                alt="عرض الساحل الشمالي"
                loading="lazy"
                width={964}
                height={1280}
                decoding="async"
                className="w-full h-auto block"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
