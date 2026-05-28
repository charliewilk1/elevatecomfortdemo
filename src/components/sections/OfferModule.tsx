import { currentOffer, type Offer } from "@/content/offers";
import { CallNowButton, QuoteButton } from "@/components/ui/cta";
import { Check } from "lucide-react";

const included = [
  "GREE 9/12k BTU mini split system",
  "Professional installation by our team",
  "Line set up to 25 ft.",
  "Electrical connection",
  "Wall mounting & setup",
  "System test & walkthrough",
];

export function OfferModule({ offer = currentOffer }: { offer?: Offer }) {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="grid items-center gap-10 rounded-2xl border border-border bg-ice/40 p-8 md:grid-cols-2 md:gap-16 sm:p-12">
          {/* Left: offer details + price + CTAs */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-eyebrow">
              {offer.title}
            </p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
              {offer.supporting}
            </p>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-[3rem] font-bold leading-none tracking-tight text-navy [font-family:'Barlow_Condensed',sans-serif] sm:text-[4rem] md:text-[5rem]">
                {offer.price}
              </span>
              <span className="text-2xl font-bold text-orange">
                {offer.priceSuffix}
              </span>
            </div>
            <p className="mt-2 text-xs text-navy/40">{offer.fineprint}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <QuoteButton size="lg" variant="navy" />
              <CallNowButton size="lg" />
            </div>
          </div>

          {/* Right: checklist */}
          <ul className="space-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-navy">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange" strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
