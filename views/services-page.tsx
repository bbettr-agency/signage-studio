import PremiumNavbar from "@/components/navbars/premium-navbar";
import PageHero from "@/components/sections/page-hero";
import ServicesGrid from "@/components/sections/services-grid";
import ServiceDetail from "@/components/sections/service-detail";
import ProcessSteps from "@/components/sections/process-steps";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";
import PremiumFooter from "@/components/Footers/premium-footer";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-brand-ink text-white">
      <PremiumNavbar />
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Every signage discipline,
            <br />
            <span className="text-white/40">under one roof.</span>
          </>
        }
        description="Vehicle branding, building signage, light boxes, banners, window graphics, Chromadek and bespoke fabrication — designed, printed and installed in-house."
        image="/projects/window-branding/window-branding-3.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesGrid />
      <ServiceDetail />
      <ProcessSteps />
      <Faq />
      <FinalCta />
      <PremiumFooter />
    </main>
  );
}
