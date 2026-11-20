import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-2xl flex">
      <a
        href="tel:01080808564"
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-black text-base py-4 transition-opacity hover:opacity-90"
      >
        <Phone className="w-5 h-5" />
        اتصل الآن
      </a>
      <a
        href="https://wa.me/201080808564"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-black text-base py-4 transition-opacity hover:opacity-90"
      >
        <SiWhatsapp className="w-5 h-5" />
        واتساب
      </a>
    </div>
  );
}
