import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Phone, Mail, MapPin, Clock } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[0-9+()\-\s]+$/, "Only digits, spaces and + ( ) - allowed"),
  email: z.string().trim().email("Invalid email address").max(120),
  service: z.enum(["Plumbing", "Electrical", "Carpentry", "General Repair", "Bathroom", "Kitchen", "Other"]),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Errors = {};
      for (const issue of result.error.issues) {
        errs[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-[var(--color-surface)] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Get in touch
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold">
              Ready to Fix Your Home?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Tell us what needs doing and we'll get back to you with a free, honest quote.
            </p>
          </div>

          <ul className="space-y-4">
            <InfoRow icon={Phone} label="Phone" value="+44 7354 248180" href="tel:+447354248180" />
            <InfoRow icon={Mail} label="Email" value="Bogdanvlad014@gmail.com" href="mailto:Bogdanvlad014@gmail.com" />
            <InfoRow icon={MapPin} label="Address" value="43 Greenhill Road, HA1 1LD, Harrow, UK" />
            <InfoRow icon={Clock} label="Hours" value="Mon–Fri 8am–6pm · Sat 9am–2pm" />
          </ul>

          <div className="rounded-2xl overflow-hidden ring-1 ring-border shadow-sm">
            <iframe
              title="Bogdan Handyman location"
              src="https://www.google.com/maps?q=43+Greenhill+Road+HA1+1LD+Harrow&output=embed"
              loading="lazy"
              className="w-full h-64"
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="lg:col-span-3 rounded-2xl bg-card p-6 md:p-8 ring-1 ring-border shadow-sm"
        >
          {sent && (
            <div className="mb-6 flex items-start gap-3 rounded-lg bg-primary/5 ring-1 ring-primary/20 p-4 text-primary">
              <CheckCircle2 className="size-5 mt-0.5" />
              <div>
                <div className="font-semibold">Thanks — we got your message.</div>
                <div className="text-sm text-foreground/70">Bogdan will be in touch shortly.</div>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" name="name" error={errors.name} />
            <Field label="Phone Number" name="phone" type="tel" placeholder="+44 7…" error={errors.phone} />
            <Field label="Email" name="email" type="email" error={errors.email} className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold mb-1.5">Service Type</label>
              <select
                name="service"
                defaultValue="Plumbing"
                className="w-full rounded-lg border border-input bg-background px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {["Plumbing", "Electrical", "Carpentry", "General Repair", "Bathroom", "Kitchen", "Other"].map(
                  (s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ),
                )}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold mb-1.5">Message / Details</label>
              <textarea
                name="message"
                rows={5}
                className="w-full rounded-lg border border-input bg-background px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Briefly describe the job, location and timing…"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-accent text-accent-foreground px-6 py-3.5 text-base font-semibold shadow-[var(--shadow-cta)] hover:brightness-110 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <span className="size-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
        <Icon className="size-5" />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <li>
      <a href={href} className="block hover:text-primary transition">
        {inner}
      </a>
    </li>
  ) : (
    <li>{inner}</li>
  );
}
