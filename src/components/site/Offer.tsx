import { Sparkles } from "lucide-react";

export function Offer() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 text-center">
          <div className="absolute -top-16 -right-16 size-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 size-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-3 py-1.5 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="size-3.5" /> Limited time
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl font-extrabold">
              Special Limited Time Offer
            </h2>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              First-time customers get <span className="text-accent font-bold">10% off</span> any
              service over £100. Call or book online to redeem.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-accent text-accent-foreground px-6 py-3.5 text-base font-semibold shadow-[var(--shadow-cta)] hover:brightness-110 transition"
            >
              Get Discount
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
