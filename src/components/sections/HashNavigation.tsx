import { useEffect } from "react";
import { currentAnchorId, isAtOrBeforeHash } from "@/lib/deferred-section";

// Wait for preceding lazy sections to obtain their real height before settling
// a hash jump. Otherwise a contact form can move several screens after a jump.
export function HashNavigation() {
  useEffect(() => {
    let pending = false;
    let frame = 0;
    const settle = () => {
      if (!pending) return;
      const id = currentAnchorId();
      if (!document.getElementById(id)) return;
      const sections = [...document.querySelectorAll("[data-deferred-section]")].filter(isAtOrBeforeHash);
      if (sections.some(section => section.getAttribute("data-section-ready") !== "true")) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!pending || currentAnchorId() !== id) return;
        document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
        pending = false;
      });
    };
    const navigate = () => {
      pending = Boolean(currentAnchorId());
      window.dispatchEvent(new Event("arkaim:reveal"));
      settle();
    };
    const cancel = () => {
      pending = false;
      cancelAnimationFrame(frame);
    };
    const repeatAnchor = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey ||
          event.metaKey || event.altKey || event.shiftKey || !(event.target instanceof Element)) return;
      const anchor = event.target.closest("a");
      if (window.location.hash && anchor?.getAttribute("href") === window.location.hash) {
        // The browser does not fire hashchange when the same link is clicked again.
        navigate();
      }
    };
    window.addEventListener("hashchange", navigate);
    document.addEventListener("click", repeatAnchor);
    window.addEventListener("arkaim:section-ready", settle);
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    navigate();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", navigate);
      document.removeEventListener("click", repeatAnchor);
      window.removeEventListener("arkaim:section-ready", settle);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
    };
  }, []);
  return null;
}
