import { Phone, ArrowRight, Star } from "lucide-react";
import hero from "@/assets/hero-handyman.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-16 md:pt-20">
      <div className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img
          src={hero}
          alt="Bogdan, professional handyman, performing a home repair in Harrow"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_30%,oklch(0.488_0.187_263/0.45),transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full grid lg:grid-cols-12 gap-10 py-20">
          <div className="lg:col-span-8 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-semibold tracking-wide ring-1 ring-white/20">
              <Star className="size-3.5 fill-accent text-accent" />
              4.9/5 · 150+ five-star reviews
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Reliable Home Repairs <br className="hidden sm:block" />
              <span className="text-accent">You Can Trust</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Expert handyman services across Harrow for all your home maintenance and
              repair needs — fixed right the first time, at honest prices.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent text-accent-foreground px-6 py-3.5 text-base font-semibold shadow-[var(--shadow-cta)] hover:brightness-110 transition"
              >
                Book Your Repair
                <ArrowRight className="size-4" />
              </a>
              <a
                href="tel:+447354248180"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white px-6 py-3.5 text-base font-semibold ring-1 ring-white/30 backdrop-blur hover:bg-white/15 transition"
              >
                <Phone className="size-4" />
                Call Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:self-end">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 p-6 text-white">
              <p className="text-xs uppercase tracking-widest text-white/70">Speak to Bogdan</p>
              <a href="tel:+447354248180" className="block mt-2 text-3xl font-display font-bold">
                +44 7354 248180
              </a>
              <p className="mt-3 text-sm text-white/80">
                Same-day &amp; next-day appointments available. Free quotes — no surprises.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <Stat label="Years" value="20+" />
                <Stat label="Jobs" value="2k+" />
                <Stat label="Rating" value="4.9★" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-xl font-bold text-accent">{value}</div>
      <div className="text-[11px] uppercase tracking-wider text-white/70">{label}</div>
    </div>
  );
}
