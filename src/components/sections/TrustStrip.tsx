import { Award, Users, Shield, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { isLowEndDevice } from "@/lib/device-mode";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (isLowEndDevice() || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const update = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      setValue(Math.floor(from + (to - from) * progress));
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [from, to, duration, inView]);

  return <span ref={ref}>{value}</span>;
}

export function TrustStrip() {
  const stats = [
    { label: "خبرة", value: 10, suffix: " سنوات", icon: Award },
    { label: "عميل راضٍ", value: 5000, prefix: "+", icon: Users },
    { label: "جودة", value: 100, suffix: "% ضمان", icon: Shield },
    { label: "احترافية", value: 50, prefix: "+", suffix: " فني معتمد", icon: Star },
  ];

  return (
    <section className="relative bg-primary text-primary-foreground py-12 border-t-2 border-white/30 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-row md:flex-row items-center w-full md:w-1/4">
              <div className="flex flex-col items-center justify-center text-center w-full px-4">
                <stat.icon className="w-8 h-8 mb-4 opacity-90" />
                <div className="text-5xl font-black mb-2 flex items-center justify-center gap-1" dir="ltr">
                  {stat.prefix}
                  <Counter from={0} to={stat.value} duration={2} />
                  {stat.suffix && <span className="text-2xl mr-1">{stat.suffix}</span>}
                </div>
                <div className="text-xs uppercase tracking-widest opacity-70 font-semibold">{stat.label}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-white/20 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
