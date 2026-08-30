import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Packages } from "@/components/site/Packages";
import { Locations } from "@/components/site/Locations";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const title = "Khyaaal11 | Luxury Arabian Horse Rides at the Giza Pyramids";
const description =
  "Private Arabian horse experiences at the Giza Pyramids and Abusir — sunrise and sunset trails, VIP photoshoots, night rides and lessons. Book on WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Packages />
      <Locations />
      <Gallery />
      <Testimonials />
      <Booking />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
