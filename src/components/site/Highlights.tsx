import { HardHat, Clock3, BadgePoundSterling } from "lucide-react";

const items = [
  {
    icon: HardHat,
    title: "Experienced Professionals",
    desc: "20+ years of hands-on expertise across home repairs, maintenance and renovations.",
  },
  {
    icon: Clock3,
    title: "Quick & Reliable",
    desc: "Same-day or next-day service available. We arrive on time and respect your home.",
  },
  {
    icon: BadgePoundSterling,
    title: "Transparent Pricing",
    desc: "Upfront quotes, no hidden fees. You'll always know the cost before we start.",
  },
];

export function Highlights() {
  return (
    <section className="bg-[var(--color-surface)] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all"
            >
              <div className="size-14 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="size-7" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
