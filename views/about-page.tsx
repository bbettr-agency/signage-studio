import PremiumNavbar from "@/components/navbars/premium-navbar";
import PageHero from "@/components/sections/page-hero";
import AboutStory from "@/components/sections/about-story";
import StatsBand from "@/components/sections/stats-band";
import Values from "@/components/sections/values";
import WhyUs from "@/components/sections/why-us";
import ProcessSteps from "@/components/sections/process-steps";
import GoogleReviews from "@/components/sections/google-reviews";
import FinalCta from "@/components/sections/final-cta";
import PremiumFooter from "@/components/Footers/premium-footer";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-brand-ink text-white">
      <PremiumNavbar />
      <PageHero
        eyebrow="About The Studio"
        title={
          <>
            We build brands that
            <br />
            <span className="text-white/40">refuse to blend in.</span>
          </>
        }
        description="A decade of vehicle wraps, building signage and installations across South Africa — engineered in-house, installed by our own certified crews."
        image="/projects/lightboxes/lightboxes-3.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <AboutStory />
      <StatsBand />
      <Values />
      <WhyUs />
      <ProcessSteps />
      <GoogleReviews />
      <FinalCta />
      <PremiumFooter />
    </main>
  );
}
