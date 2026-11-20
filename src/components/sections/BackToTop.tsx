import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-36 md:bottom-20 left-6 z-50 w-11 h-11 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 hover:scale-110 transition-[opacity,transform] duration-200 flex items-center justify-center ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      }`}
      aria-label="العودة للأعلى"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
