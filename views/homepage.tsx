import PremiumNavbar from "@/components/navbars/premium-navbar";
import CinematicHero from "@/components/heroes/cinematic-hero";
import TrustedBy from "@/components/sections/trusted-by";
import ServicesGrid from "@/components/sections/services-grid";
import WhyUs from "@/components/sections/why-us";
import ProjectsPreview from "@/components/sections/projects-preview";
import ProcessSteps from "@/components/sections/process-steps";
import StatsBand from "@/components/sections/stats-band";
import GoogleReviews from "@/components/sections/google-reviews";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";
import PremiumFooter from "@/components/Footers/premium-footer";

/**
 * Surface rhythm (OS Design Language §4 — no two adjacent sections share a tone):
 *
 *   hero(ink) → marquee(charcoal) → services(ink) → whyus(cream) →
 *   projects(graphite) → process(cream) → stats(charcoal) → reviews(cream) →
 *   faq(charcoal) → cta(ink) → footer(ink handled inside footer)
 *
 * Cream sections separated by a dark break each time; the stats band is the
 * factual proof beat between "how we work" and "what our clients say".
 */
export default function Homepage() {
  return (
    <main className="overflow-hidden bg-brand-ink text-white">
      <PremiumNavbar />
      <CinematicHero />
      <TrustedBy />
      <ServicesGrid />
      <WhyUs />
      <ProjectsPreview />
      <ProcessSteps />
      <StatsBand />
      <GoogleReviews />
      <Faq />
      <FinalCta />
      <PremiumFooter />
    </main>
  );
}
