import { MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

const locations = [
  { name: "مدينة نصر",      color: "from-teal-800 to-teal-600" },
  { name: "التجمع الخامس",  color: "from-emerald-800 to-emerald-600" },
  { name: "مصر الجديدة",    color: "from-teal-700 to-cyan-600" },
  { name: "المعادي",         color: "from-emerald-900 to-teal-700" },
  { name: "المهندسين",       color: "from-teal-900 to-teal-700" },
  { name: "مدينتي",          color: "from-cyan-800 to-teal-700" },
  { name: "الرحاب",          color: "from-teal-800 to-emerald-700" },
  { name: "الساحل الشمالي", color: "from-sky-800 to-teal-700" },
  { name: "مارينا",          color: "from-cyan-900 to-sky-700" },
  { name: "الغردقة",         color: "from-teal-700 to-emerald-800" },
  { name: "الإسكندرية",     color: "from-sky-900 to-teal-800" },
  { name: "عين شمس",        color: "from-emerald-800 to-teal-900" },
];

export function CoverageAreas() {
  return (
    <section className="py-28 bg-card/40 border-y border-border">
      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-primary text-sm font-bold uppercase tracking-wider mb-3">— مناطق التغطية —</div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            مناطق <span className="text-primary">تغطيتنا</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            نصل إليك في كل مكان في مصر لتقديم خدماتنا بأساليب سريعة وفعالة.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className={`relative h-36 rounded-2xl overflow-hidden group cursor-default bg-gradient-to-br ${loc.color}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <MapPin className="w-16 h-16 text-white" />
              </div>
              <div className="absolute bottom-0 right-0 left-0 p-3 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-white/80 shrink-0" />
                <span className="text-white font-bold text-sm leading-tight">{loc.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <MapPin className="w-10 h-10 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">هل منطقتك غير مذكورة؟</h3>
          <p className="text-muted-foreground mb-8">
            تواصل معنا لمعرفة إمكانية التغطية في منطقتك وترتيب زيارة خاصة.
          </p>
          <Button
            asChild size="lg"
            className="h-14 px-8 font-bold text-base bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl"
          >
            <a href="https://wa.me/201080808564" target="_blank" rel="noopener noreferrer">
              <SiWhatsapp className="w-5 h-5 ml-2" />
              تواصل واتساب
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
