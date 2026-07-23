import PremiumNavbar from "@/components/navbars/premium-navbar";
import CinematicHero from "@/components/heroes/cinematic-hero";
import TrustedBy from "@/components/sections/trusted-by";
import ServicesGrid from "@/components/sections/services-grid";
import WhyUs from "@/components/sections/why-us";
import ProjectsPreview from "@/components/sections/projects-preview";
import ProcessSteps from "@/components/sections/process-steps";
import GoogleReviews from "@/components/sections/google-reviews";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";
import PremiumFooter from "@/components/Footers/premium-footer";

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
      <GoogleReviews />
      <Faq />
      <FinalCta />
      <PremiumFooter />
    </main>
  );
}
