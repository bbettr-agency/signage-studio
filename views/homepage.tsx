import PremiumNavbar from "@/components/navbars/premium-navbar";
import CinematicHero from "@/components/heroes/cinematic-hero";
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
 *   hero(ink, includes trusted-by strip) → services(ink) → whyus(cream) →
 *   projects(graphite) → process(cream) → stats(charcoal) → reviews(cream) →
 *   faq(charcoal) → cta(ink) → footer(ink handled inside footer)
 *
 * The old standalone TrustedBy section is now folded into the hero as a
 * compact client-logo strip so trust lands before the first scroll.
 */
export default function Homepage() {
  return (
    <main className="overflow-hidden bg-brand-ink text-white">
      <PremiumNavbar />
      <CinematicHero />
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
