import { Check } from "lucide-react";
import about from "@/assets/about-bogdan.jpg";

const benefits = [
  "20+ years hands-on experience",
  "Local to Harrow & surrounding areas",
  "Honest, transparent pricing",
  "Fully insured & reliable",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-2" />
          <div className="absolute -inset-4 bg-accent/10 rounded-3xl -rotate-2" />
          <img
            src={about}
            alt="Bogdan, your local Harrow handyman"
            width={1200}
            height={1400}
            loading="lazy"
            className="relative rounded-2xl shadow-xl object-cover w-full h-full"
          />
        </div>

        <div>
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Your Local Handyman Expert
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold">
            Why Bogdan Handyman?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            With over 20 years of hands-on experience, Bogdan brings expertise and reliability
            to every job. Based in Harrow and serving the surrounding areas, we take pride in
            providing honest, high-quality repairs at fair prices. Whether it's a leaky tap or a
            complete renovation, we treat your home like our own.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 size-6 rounded-full bg-primary text-primary-foreground grid place-items-center shrink-0">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-6 py-3.5 text-base font-semibold hover:bg-primary/90 transition"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
