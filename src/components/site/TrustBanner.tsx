import { Star } from "lucide-react";

export function TrustBanner() {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,oklch(0.71_0.19_41),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 grid md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-2">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight">
            Your Trusted Partner for Handyman &amp; Home Repair Solutions
          </h2>
          <p className="mt-4 text-primary-foreground/85 text-lg max-w-2xl">
            Bogdan has helped hundreds of homeowners across Harrow and surrounding areas keep
            their homes in perfect condition.
          </p>
        </div>
        <div className="md:justify-self-end">
          <div className="rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur p-6 text-center">
            <div className="flex items-center justify-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-accent" />
              ))}
            </div>
            <div className="mt-2 font-display text-3xl font-bold">4.9 / 5</div>
            <div className="text-sm text-primary-foreground/80">from 150+ reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
