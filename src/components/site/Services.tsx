import plumbing from "@/assets/service-plumbing.jpg";
import electrical from "@/assets/service-electrical.jpg";
import carpentry from "@/assets/service-carpentry.jpg";
import general from "@/assets/service-general.jpg";
import bathroom from "@/assets/service-bathroom.jpg";
import kitchen from "@/assets/service-kitchen.jpg";

const services = [
  { img: plumbing, name: "Plumbing Repairs", desc: "Leaks, taps, pipes & boilers." },
  { img: electrical, name: "Electrical Work", desc: "Sockets, lighting & safe wiring." },
  { img: carpentry, name: "Carpentry & Woodwork", desc: "Doors, shelving & bespoke fittings." },
  { img: general, name: "General Repairs", desc: "Odd jobs done properly, first time." },
  { img: bathroom, name: "Bathroom Renovation", desc: "Tiling, fixtures & full refits." },
  { img: kitchen, name: "Kitchen Repairs", desc: "Cabinets, worktops & appliances." },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            What we do
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold">Our Services</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From quick fixes to full renovations — one trusted handyman for the whole home.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <a
              href="#contact"
              key={s.name}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-border bg-card shadow-sm hover:shadow-[var(--shadow-card)] transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="size-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="font-display text-xl font-bold">{s.name}</h3>
                <p className="text-sm text-white/85">{s.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
