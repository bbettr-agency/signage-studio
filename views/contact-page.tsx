import PremiumNavbar from "@/components/navbars/premium-navbar";
import PageHero from "@/components/sections/page-hero";
import ContactForm from "@/components/sections/contact-form";
import Faq from "@/components/sections/faq";
import PremiumFooter from "@/components/Footers/premium-footer";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-brand-ink text-white">
      <PremiumNavbar />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's get your
            <br />
            <span className="text-white/40">quote moving.</span>
          </>
        }
        description="Tell us about your vehicle, building or signage brief. We respond within one business day with a detailed, no-obligation quote."
        image="/projects/pylon-signs/pylon-signs-2.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactForm />
      <Faq />
      <PremiumFooter />
    </main>
  );
}
