import { Wrench, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.04_260)] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="size-10 rounded-xl bg-accent text-accent-foreground grid place-items-center">
              <Wrench className="size-5" />
            </span>
            <span className="font-display font-bold text-lg">Bogdan Handyman</span>
          </div>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            Your trusted local handyman in Harrow. Honest pricing, quality workmanship, on time —
            every time.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="size-9 rounded-lg bg-white/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-base mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {[
              ["Home", "#home"],
              ["Services", "#services"],
              ["About", "#about"],
              ["Testimonials", "#testimonials"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="hover:text-accent transition">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-base mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5">
              <Phone className="size-4 mt-0.5 text-accent" />
              <a href="tel:+447354248180" className="hover:text-accent">
                +44 7354 248180
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="size-4 mt-0.5 text-accent" />
              <a href="mailto:Bogdanvlad014@gmail.com" className="hover:text-accent break-all">
                Bogdanvlad014@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 mt-0.5 text-accent" />
              <span>43 Greenhill Road, HA1 1LD, Harrow, England, UK</span>
            </li>
            <li className="pt-1 text-white/60">
              Mon–Fri: 8am–6pm · Sat: 9am–2pm
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-base mb-4">Stay Updated</h4>
          <p className="text-sm text-white/70">Tips, seasonal offers and maintenance reminders.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 rounded-lg bg-white/10 ring-1 ring-white/15 px-3.5 py-2.5 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="rounded-lg bg-accent text-accent-foreground px-4 py-2.5 text-sm font-semibold hover:brightness-110">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 text-xs text-white/60 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Bogdan Handyman. All rights reserved.</span>
          <span>Serving Harrow & surrounding areas.</span>
        </div>
      </div>
    </footer>
  );
}
