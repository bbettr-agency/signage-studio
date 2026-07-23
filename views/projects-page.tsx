import PremiumNavbar from "@/components/navbars/premium-navbar";
import PageHero from "@/components/sections/page-hero";
import ProjectsGallery from "@/components/sections/projects-gallery";
import StatsBand from "@/components/sections/stats-band";
import GoogleReviews from "@/components/sections/google-reviews";
import FinalCta from "@/components/sections/final-cta";
import PremiumFooter from "@/components/Footers/premium-footer";

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden bg-brand-ink text-white">
      <PremiumNavbar />
      <PageHero
        eyebrow="Our Projects"
        title={
          <>
            Work that earns
            <br />
            <span className="text-white/40">a second look.</span>
          </>
        }
        description="Real signage installed across South Africa — fabrication, illuminated signs, pylons, window branding and more. Filter by discipline below."
        image="/projects/neon-rope/neon-rope-1.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Projects" }]}
      />
      <ProjectsGallery />
      <StatsBand />
      <GoogleReviews />
      <FinalCta />
      <PremiumFooter />
    </main>
  );
}
