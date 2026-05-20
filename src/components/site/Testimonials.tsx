import { Star, Quote } from "lucide-react";

const items = [
  {
    quote:
      "Bogdan fixed my kitchen pipes in less than an hour. Professional, efficient, and honest pricing. Highly recommend!",
    name: "Sarah M.",
    role: "Harrow",
  },
  {
    quote:
      "Best handyman in Harrow. He arrived on time, completed the job perfectly, and charged fairly. Will definitely call again.",
    name: "John P.",
    role: "Wealdstone",
  },
  {
    quote:
      "Bogdan's team repaired our bathroom fixtures beautifully. Great attention to detail and friendly service.",
    name: "Emma T.",
    role: "Pinner",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--color-surface)] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Reviews
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold">
            Real Testimonials from Satisfied Customers
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl bg-card p-7 ring-1 ring-border shadow-sm flex flex-col"
            >
              <Quote className="size-8 text-primary/20 absolute top-5 right-5" />
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent" />
                ))}
              </div>
              <blockquote className="mt-4 italic text-foreground/85 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
