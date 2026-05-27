import { currentOffer, type Offer } from "@/content/offers";
import { CallNowButton, QuoteButton } from "@/components/ui/cta";

export function OfferModule({ offer = currentOffer }: { offer?: Offer }) {
  return (
    <section className="section-y border-y border-border bg-ice/40">
      <div className="container-page">
        <div className="grid items-center gap-10 md:grid-cols-[1.5fr_1fr] md:gap-16">
          <div>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              {offer.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {offer.supporting}
            </p>
            <p className="mt-2 text-xs text-muted-foreground/60">
              {offer.fineprint}
            </p>
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-[4.5rem] font-extrabold leading-none text-navy sm:text-[5.5rem]">
                {offer.price}
              </span>
              <span className="text-xl font-bold text-orange">
                {offer.priceSuffix}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <QuoteButton size="lg" />
              <CallNowButton size="lg" variant="navy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
