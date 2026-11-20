import type { ReactNode } from "react";
import { Suspense, startTransition, useEffect, useRef, useState } from "react";
import { isLowEndDevice } from "@/lib/device-mode";
import { isAtOrBeforeHash } from "@/lib/deferred-section";

function SectionReady({ id }: { id?: string }) {
  useEffect(() => {
    const element = document.querySelector(`[data-deferred-section="${id}"]`);
    element?.setAttribute("data-section-ready", "true");
    window.dispatchEvent(new Event("arkaim:section-ready"));
  }, [id]);
  return null;
}

type LazySectionProps = {
  children: ReactNode;
  id?: string;
  minHeight?: number;
  prerender?: boolean;
};

export function LazySection({ children, id, minHeight = 320, prerender = false }: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(prerender);
  const [forceLayout, setForceLayout] = useState(false);
  useEffect(() => {
    const reveal = () => {
      if (ref.current && isAtOrBeforeHash(ref.current)) {
        startTransition(() => {
          setForceLayout(true);
          setVisible(true);
        });
      }
    };
    window.addEventListener("hashchange", reveal);
    window.addEventListener("arkaim:reveal", reveal);
    reveal();
    return () => {
      window.removeEventListener("hashchange", reveal);
      window.removeEventListener("arkaim:reveal", reveal);
    };
  }, []);
  useEffect(() => {
    if (visible || !ref.current) return;
    if (!("IntersectionObserver" in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: isLowEndDevice() ? "0px" : "250px" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible]);
  return (
    <div
      ref={ref}
      id={id}
      data-section-id={id}
      data-deferred-section={id}
      style={{ contentVisibility: forceLayout ? "visible" : "auto", containIntrinsicSize: `auto ${minHeight}px` }}
    >
      {visible ? <Suspense fallback={<div style={{ minHeight }} aria-busy="true" />}>
        {children}
        <SectionReady id={id} />
      </Suspense> : <div style={{ minHeight }} aria-hidden="true" />}
    </div>
  );
}