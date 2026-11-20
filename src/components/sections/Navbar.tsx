import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { SiTiktok, SiWhatsapp, SiInstagram, SiFacebook } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { INSTAGRAM_URL } from "@/lib/contacts";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const scrollFrame = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollFrame.current !== null) return;
      scrollFrame.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 60);
        scrollFrame.current = null;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollFrame.current !== null) cancelAnimationFrame(scrollFrame.current);
    };
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id || entry.target.getAttribute("data-section-id") || "hero");
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
     const sections = document.querySelectorAll("section[id], [data-section-id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "hero" },
    { name: "خدماتنا", href: "services" },
    { name: "من نحن", href: "why-us" },
    { name: "تواصل معنا", href: "contact" },
  ];

  const socialLinks = [
    { icon: SiTiktok, href: "https://www.tiktok.com/@arkem_german_", label: "TikTok" },
    { icon: SiWhatsapp, href: "https://wa.me/201080808564", label: "WhatsApp" },
    { icon: SiInstagram, href: INSTAGRAM_URL, label: "Instagram" },
    { icon: SiFacebook, href: "https://www.facebook.com/share/1JjtmtXLae/", label: "Facebook" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    setIsMobileMenuOpen(false);
    if (e.currentTarget.tagName === "BUTTON") {
      e.preventDefault();
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById(id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    }
  };

  const onDark = !isScrolled;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-border/30 py-2"
          : "bg-gradient-to-b from-black/40 to-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">

        {/* Left: phone CTA (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {isScrolled && (
            <a
              href="https://wa.me/201080808564"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-primary text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-primary/90 transition-colors shadow-sm"
            >
              <SiWhatsapp className="w-3.5 h-3.5" />
              واتساب
            </a>
          )}
          <div className={`flex items-center gap-2 ${isScrolled ? "" : "hidden"}`}>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-testid={`link-social-${label.toLowerCase()}`}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-white transition-all duration-200 text-sm"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              data-testid={`link-nav-${link.href}`}
              className={`text-sm font-bold transition-all duration-200 pb-0.5 border-b-2 ${
                activeSection === link.href
                  ? "text-primary border-primary"
                  : onDark
                  ? "text-white/90 hover:text-white border-transparent"
                  : "text-foreground/70 hover:text-foreground border-transparent"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Logo */}
        <button
          className="flex items-center gap-2 cursor-pointer shrink-0 focus:outline-none"
          onClick={(e) => scrollToSection(e, "hero")}
          data-testid="link-logo"
        >
          <img
             src="/logo.webp"
             width={96}
             height={92}
             fetchPriority="high"
            alt="ARKAIM Pest Control"
            className="h-11 w-11 rounded-full object-cover shadow-md"
          />
          {isScrolled && (
            <span className="hidden lg:block text-sm font-black text-foreground leading-tight text-right">
              أركيم<br />
              <span className="text-primary text-xs font-bold">لمكافحة الحشرات</span>
            </span>
          )}
        </button>

        {/* Mobile: hamburger */}
        <button
          className={`md:hidden p-2 rounded-md ${onDark ? "text-white" : "text-foreground"}`}
          data-testid="button-mobile-menu"
          aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border absolute w-full left-0 top-full shadow-xl">
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-base font-bold transition-colors p-3 rounded-lg ${
                  activeSection === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-border mt-2 flex flex-col gap-2">
              <Button
                asChild
                className="w-full font-bold h-12 text-base"
              >
                <a href="https://wa.me/201080808564" target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="w-4 h-4 ml-2" />
                  واتساب: 010 8080 8564
                </a>
              </Button>
              <div className="flex items-center justify-center gap-3 pt-1">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
