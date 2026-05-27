import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Check } from "lucide-react";
import { currentOffer } from "@/content/offers";
import { CallNowButton } from "@/components/ui/cta";
import { FinalCta } from "@/components/sections/FinalCta";
import { MiniSplitQuoteForm } from "@/components/forms/MiniSplitQuoteForm";

export const Route = createFileRoute("/specials")({
  head: () => ({
    meta: [
      { title: "Mini Split Special — $2,399 Installed | Elevate Comfort AC/Heating" },
      {
        name: "description",
        content:
          "Limited-time mini split special: 9/12k BTU professionally installed for $2,399. Request a quote to confirm details.",
      },
      { property: "og:title", content: "Mini Split Special — $2,399 Installed" },
      {
        property: "og:description",
        content: "9/12k BTU mini split, professionally installed. Tri-State Area.",
      },
    ],
  }),
  component: SpecialsPage,
});

const goodFor = [
  "Bedrooms that don't cool well",
  "Home offices and additions",
  "Garages, basements, attic spaces",
  "Small commercial spaces",
];

function SpecialsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange/20 blur-3xl" />
        <div className="container-page relative py-20 sm:py-28">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange">
            <Sparkles className="h-3.5 w-3.5" />
            Current Special
          </div>
          <h1 className="mt-5 text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
            {currentOffer.title}
            <br />
            <span className="text-orange">
              {currentOffer.price} {currentOffer.priceSuffix}
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            {currentOffer.supporting}
          </p>
          <p className="mt-2 text-sm text-white/60">{currentOffer.fineprint}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange px-7 text-base font-bold uppercase tracking-wide text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-orange/90"
            >
              Request a Quote
            </a>
            <CallNowButton size="lg" variant="outline-light" />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">What's Included</h2>
            <ul className="mt-6 space-y-3">
              {[
                "GREE 9/12k BTU mini split system",
                "Professional installation by our team",
                "Line set up to 25 ft.",
                "Electrical connection",
                "Wall mounting & setup",
                "System test & walkthrough",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-navy">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange">
              <span className="h-px w-6 bg-orange" />
              Who it's good for
            </div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Spaces this works well in
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              A 9/12k BTU mini split is ideal for single-zone comfort where
              ductwork doesn't make sense.
            </p>
            <ul className="mt-5 space-y-3">
              {goodFor.map((g) => (
                <li key={g} className="flex items-start gap-3 text-[15px] text-navy">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange" strokeWidth={2.5} />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="quote" className="section-y bg-navy text-white scroll-mt-20">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange">
              <span className="h-px w-6 bg-orange" />
              Lock it in
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Get your mini split quote
            </h2>
            <p className="mt-4 text-base text-white/70">
              Tell us a bit about the space and we'll confirm pricing,
              timing, and any details specific to your install.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <MiniSplitQuoteForm />
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
