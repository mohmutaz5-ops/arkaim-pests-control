import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201080808564"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 md:bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
