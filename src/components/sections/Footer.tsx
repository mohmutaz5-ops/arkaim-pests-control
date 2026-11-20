import { MapPin, Clock, Phone } from "lucide-react";
import { SiTiktok, SiWhatsapp, SiInstagram, SiFacebook } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { INSTAGRAM_URL } from "@/lib/contacts";

export function Footer() {
  return (
    <>
      {/* CTA Bar before footer */}
      <div className="bg-card border-t border-primary/20 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-right gap-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-black mb-3">هل أنت مستعد لبيت خالٍ من الحشرات؟</h3>
            <p className="text-muted-foreground text-lg">تواصل معنا الآن لتحصل على معاينة مجانية.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="h-14 font-bold bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl px-8">
              <a href="https://wa.me/201080808564" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="w-5 h-5 ml-2" />
                تواصل واتساب
              </a>
            </Button>
          </div>
        </div>
      </div>

      <footer className="bg-background pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <img src="/logo.webp" alt="أركيم" width={96} height={92} loading="lazy" className="h-12 w-12 rounded-full object-cover shadow-md" />
                <span className="font-black text-3xl tracking-tight border-b-4 border-primary">أركيم</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                الشركة الرائدة في مكافحة الحشرات والقوارض في مصر باستخدام التكنولوجيا الألمانية الآمنة. أمان عائلتك هو أولويتنا.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1JjtmtXLae/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors">
                  <SiFacebook className="w-5 h-5" />
                </a>
                <a href={INSTAGRAM_URL} aria-label="Instagram" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-colors">
                  <SiInstagram className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@arkem_german_" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors">
                  <SiTiktok className="w-5 h-5" />
                </a>
                <a href="https://wa.me/201080808564" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors">
                  <SiWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
              <ul className="space-y-4">
                <li><a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">الرئيسية</a></li>
                <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">خدماتنا</a></li>
                <li><a href="#why-us" className="text-muted-foreground hover:text-primary transition-colors">لماذا نحن</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">طلب معاينة</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">خدماتنا</h4>
              <ul className="space-y-4">
                <li><a href="#cockroaches" className="text-muted-foreground hover:text-primary transition-colors">مكافحة الصراصير</a></li>
                <li><a href="#termites" className="text-muted-foreground hover:text-primary transition-colors">مكافحة النمل الأبيض</a></li>
                <li><a href="#rodents" className="text-muted-foreground hover:text-primary transition-colors">مكافحة الفئران</a></li>
                <li><a href="#bed-bugs" className="text-muted-foreground hover:text-primary transition-colors">مكافحة البق</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">معلومات التواصل</h4>
              <ul className="space-y-5">
                <li className="flex gap-3 text-muted-foreground items-start">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>مصر - مدينة نصر، شارع علي أمين أمام الحديقة الدولية</span>
                </li>
                <li className="flex gap-3 text-muted-foreground items-center">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span dir="ltr">01080808564</span>
                </li>
                <li className="flex gap-3 text-muted-foreground items-center">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span>متاحون 24/7</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6" />
          <div className="text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} أركيم لمكافحة الحشرات. جميع الحقوق محفوظة.</p>
            <p>تم التصميم بكل شغف لخدمتكم</p>
          </div>
        </div>
      </footer>
    </>
  );
}
