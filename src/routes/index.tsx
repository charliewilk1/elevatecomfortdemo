import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { OfferModule } from "@/components/sections/OfferModule";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { RecentInstallations } from "@/components/sections/RecentInstallations";
import { WhatsIncluded } from "@/components/sections/WhatsIncluded";
import { MiniSplitBenefits } from "@/components/sections/MiniSplitBenefits";
import { SimpleStartToFinish } from "@/components/sections/SimpleStartToFinish";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { FinalCta } from "@/components/sections/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elevate Comfort AC/Heating — Mini Split, AC & Heating in the Tri-State Area" },
      {
        name: "description",
        content:
          "Professional AC, heating, and mini split service across the Tri-State Area. Honest pricing and quality work. Call/text 347-215-1377.",
      },
      { property: "og:title", content: "Elevate Comfort AC/Heating" },
      {
        property: "og:description",
        content: "Tri-State Area HVAC — AC, heating, and mini split specialists.",
      },
    ],
  }),
  component: Home,
});

// Reorder, comment out, or remove any of these to change the homepage layout.
function Home() {
  return (
    <>
      <Hero />
      <OfferModule />
      <ServicesPreview />
      <RecentInstallations />
      <WhatsIncluded />
      <MiniSplitBenefits />
      <SimpleStartToFinish />
      <BrandsSection />
      <Testimonials />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
