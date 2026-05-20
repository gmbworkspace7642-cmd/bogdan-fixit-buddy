import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Highlights } from "@/components/site/Highlights";
import { TrustBanner } from "@/components/site/TrustBanner";
import { Services } from "@/components/site/Services";
import { Offer } from "@/components/site/Offer";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bogdan Handyman — Reliable Home Repairs in Harrow" },
      {
        name: "description",
        content:
          "Expert handyman services in Harrow & surrounding areas. Plumbing, electrical, carpentry, bathroom & kitchen repairs. 20+ years experience. Book your free quote today.",
      },
      { property: "og:title", content: "Bogdan Handyman — Reliable Home Repairs in Harrow" },
      {
        property: "og:description",
        content:
          "Trusted local handyman in Harrow. Honest pricing, quality workmanship, same-day service available.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <TrustBanner />
        <Services />
        <Offer />
        <Testimonials />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
