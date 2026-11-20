import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import { useLowEndDevice } from "@/lib/device-mode";
import { currentAnchorId, serviceAnchors } from "@/lib/deferred-section";

type Category = "الكل" | "حشرات" | "قوارض" | "شاملة";

const services: { title: string; description: string; image: string; category: Category }[] = [
  { title: "مكافحة الصراصير",          category: "حشرات",  image: "/pests/cockroach.webp",  description: "إبادة تامة بجل ألماني متطور. لا يحتاج تفريغ المكان. ضمان حقيقي لعدم العودة." },
  { title: "مكافحة النمل الأبيض",      category: "حشرات",  image: "/pests/termite.webp",    description: "حماية أساسات منزلك وأثاثك. حقن مباشر في الأرضيات والجدران للوصول للمستعمرات." },
  { title: "مكافحة الفئران والقوارض", category: "قوارض", image: "/pests/rat.webp",         description: "طعوم آمنة ومصائد ذكية. فحص شامل للشقوق وسدها لمنع العودة نهائياً." },
  { title: "مكافحة البق",              category: "حشرات",  image: "/pests/bedbug.webp",     description: "معالجة حرارية ومواد معتمدة تقضي على الحشرة والبيض. سرية تامة وخدمة سريعة." },
  { title: "مكافحة الذباب",            category: "حشرات",  image: "/pests/fly.webp",        description: "رش دوري بمبيدات آمنة معتمدة. حلول وقائية للمطاعم والمنازل والمحلات." },
  { title: "مكافحة البعوض والناموس",  category: "حشرات",  image: "/pests/mosquito.webp",   description: "ضبابية ورش موسمي للقضاء على البعوض. حماية من الأمراض في الحدائق والأسطح." },
  { title: "مكافحة النمل",             category: "حشرات",  image: "/pests/ant.webp",        description: "إبادة مستعمرات النمل من الجذر. علاج خطوط المداخل والشقوق بمواد طاردة دائمة." },
  { title: "مكافحة العقارب والزواحف", category: "حشرات",  image: "/pests/scorpion.webp",   description: "تأمين المنازل والأسطح من العقارب والحشرات الخطرة. حل نهائي وشامل." },
  { title: "مكافحة الأبراص والسحالي", category: "حشرات",  image: "/pests/gecko.webp",      description: "طرد وإبادة الأبراص من الجدران والأسقف. مواد آمنة طاردة طويلة المفعول." },
  { title: "مكافحة السمكة الفضية",    category: "حشرات",  image: "/pests/silverfish.webp", description: "القضاء على السمكة الفضية في المكتبات والملابس والحمامات بمواد متخصصة." },
  { title: "مكافحة البراغيث",          category: "حشرات",  image: "/pests/flea.webp",       description: "إبادة البراغيث من المفروشات والسجاد والحيوانات الأليفة بمعالجة شاملة وآمنة." },
  { title: "مكافحة الدبابير والزنابير",category: "حشرات",  image: "/pests/wasp.webp",       description: "إزالة أعشاش الدبابير والزنابير من الأسطح والحدائق بأمان تام وبدون مخاطر." },
  { title: "مكافحة عث الملابس",        category: "حشرات",  image: "/pests/moth.webp",       description: "حماية الملابس والمنسوجات من العث بمعالجة حرارية وكيميائية متخصصة." },
  { title: "مكافحة سوس الحبوب",        category: "حشرات",  image: "/pests/weevil.webp",     description: "تطهير المخازن والمطابخ من سوس الحبوب والأرزاق بمواد آمنة للغذاء." },
  { title: "مكافحة ذبابة الرمال",      category: "حشرات",  image: "/pests/sandfly.webp",    description: "مكافحة ذبابة الرمال الناقلة للأمراض برش دوري فعّال للمناطق المكشوفة." },
  { title: "مكافحة الجراد",             category: "حشرات",  image: "/pests/locust.webp",     description: "مكافحة أسراب الجراد والحشرات الزاحفة بمبيدات زراعية معتمدة وآمنة على المحاصيل." },
  { title: "مكافحة العناكب",            category: "حشرات",  image: "/pests/spider.webp",     description: "إزالة بيوت العناكب والقضاء عليها من الأركان والمخازن بمواد طويلة المفعول." },
  { title: "مكافحة حشرة الخشب",        category: "حشرات",  image: "/pests/woodborer.webp",  description: "حماية الأثاث والأبواب من حشرة الخشب بحقن مباشر وطلاءات واقية متخصصة." },
  { title: "مكافحة جميع الحشرات",      category: "شاملة",  image: "/pests/general.webp",    description: "برامج شاملة للوقاية الدورية. عروض خاصة للشركات والمصانع والفلل." },
];

const categories: Category[] = ["الكل", "حشرات", "قوارض", "شاملة"];

const categoryEmoji: Record<Category, string> = {
  "الكل":   "🔍",
  "حشرات":  "🪲",
  "قوارض":  "🐀",
  "شاملة":  "🛡️",
};

export function Services() {
  const lowEnd = useLowEndDevice();
  const [active, setActive] = useState<Category>("الكل");
  useEffect(() => {
    const revealService = () => {
      if (serviceAnchors.includes(currentAnchorId())) {
        setActive("الكل");
      }
    };
    window.addEventListener("hashchange", revealService);
    window.addEventListener("arkaim:reveal", revealService);
    revealService();
    return () => {
      window.removeEventListener("hashchange", revealService);
      window.removeEventListener("arkaim:reveal", revealService);
    };
  }, []);
  useEffect(() => {
    // A hash destination may have been restored by clearing the category filter.
    window.dispatchEvent(new Event("arkaim:section-ready"));
  }, [active]);

  const filtered = active === "الكل" ? services : services.filter((s) => s.category === active);

  const waLink = (title: string) =>
    `https://wa.me/201080808564?text=${encodeURIComponent(`مرحباً أركيم، أريد الاستفسار عن خدمة: ${title}`)}`;

  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-primary text-sm font-bold uppercase tracking-wider mb-3">— خدماتنا الاحترافية —</div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            خدمات <span className="text-primary">مكافحة الحشرات</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            نقدم حلولاً متكاملة للقضاء على كافة أنواع الحشرات والقوارض باستخدام أحدث التقنيات الألمانية الآمنة.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border ${
                active === cat
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/30 scale-105"
                  : "bg-card text-foreground/70 border-border hover:border-primary/50 hover:text-primary"
              }`}
            >
              <span>{categoryEmoji[cat]}</span>
              {cat}
              {cat !== "الكل" && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${active === cat ? "bg-white/20" : "bg-muted"}`}>
                  {services.filter((s) => s.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((service) => (
              <div key={service.title} id={serviceAnchors[services.indexOf(service)]}>
                <div className="group bg-card border border-border hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 rounded-xl overflow-hidden h-full flex flex-col cursor-pointer shadow-sm">
                  <div className="relative h-32 overflow-hidden bg-muted">
                    <img
                      src={service.image.replace("/pests/", "/pests/small/")}
                      srcSet={lowEnd ? undefined : `${service.image.replace("/pests/", "/pests/small/")} 320w, ${service.image} 640w`}
                      sizes="(max-width: 639px) calc((100vw - 48px) / 2), (max-width: 1023px) calc((100vw - 64px) / 3), (max-width: 1279px) calc((100vw - 80px) / 4), 230px"
                      width={640}
                      height={640}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    <span className={`absolute top-2 right-2 text-[10px] font-black px-2 py-0.5 rounded-full ${
                      service.category === "قوارض" ? "bg-orange-500/90 text-white" :
                      service.category === "شاملة" ? "bg-primary/90 text-white" :
                      "bg-emerald-600/90 text-white"
                    }`}>
                      {service.category}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-sm font-bold mb-2 leading-snug group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed flex-1">{service.description}</p>
                    <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
                      <a
                        href={waLink(service.title)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-[#25D366] text-xs font-bold hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <SiWhatsapp className="w-3 h-3" />
                        اطلب الآن
                      </a>
                      <ArrowRight className="w-3 h-3 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16">
          <div className="bg-card border-y border-border border-x-4 border-x-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold mb-2">لا تجد خدمتك؟</h3>
              <p className="text-muted-foreground">نحن نعالج جميع أنواع الآفات والحشرات بأساليب متطورة.</p>
            </div>
            <Button
              asChild size="lg"
              className="h-14 px-8 font-bold bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl shrink-0"
            >
              <a href="https://wa.me/201080808564" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="w-5 h-5 ml-2" />
                تواصل معنا الآن
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
