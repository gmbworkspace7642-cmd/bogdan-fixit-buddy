import { useState, useEffect } from "react";
import { Menu, X, Wrench, Phone } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-background/80 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="size-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-md">
            <Wrench className="size-5" />
          </span>
          <span className="font-display font-bold text-lg md:text-xl tracking-tight">
            Bogdan <span className="text-primary">Handyman</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+447354248180"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary"
          >
            <Phone className="size-4" />
            +44 7354 248180
          </a>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-accent text-accent-foreground px-4 py-2.5 text-sm font-semibold shadow-[var(--shadow-cta)] hover:brightness-110 transition"
          >
            Book Now
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden size-10 grid place-items-center rounded-lg border border-border"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="px-4 py-3 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium border-b border-border last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-accent text-accent-foreground px-4 py-3 text-sm font-semibold"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
