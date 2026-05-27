import { CallNowButton, QuoteButton } from "@/components/ui/cta";
import { site } from "@/content/site";
import { currentOffer } from "@/content/offers";
import heroImage from "@/assets/hero-image.jpg";
import { MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-background">
      <div className="container-page grid items-center gap-10 py-10 md:grid-cols-2 md:gap-12 md:py-16">
        {/* Left: copy */}
        <div className="order-2 md:order-1">
          <h1 className="text-[2.6rem] leading-[1.02] tracking-tight text-navy sm:text-5xl md:text-[3.5rem]">
            Comfort You Can
            <br />
            <span className="text-orange">Count On.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Your home shouldn't be a sauna in July or a freezer in January. We
            install and service mini splits, AC, and heating across the
            Tri-State Area.
          </p>

          <div className="mt-5 flex items-start gap-2 text-sm text-navy">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
            <span>{site.serviceArea}</span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <CallNowButton size="lg" variant="navy" />
            <QuoteButton size="lg" />
          </div>
        </div>

        {/* Right: photo with price card */}
        <div className="relative order-1 md:order-2">
          <img
            src={heroImage}
            alt="GREE mini split system installed at a Tri-State Area home"
            width={1600}
            height={1200}
            fetchPriority="high"
            className="w-full rounded-2xl object-cover shadow-[0_20px_60px_-20px_rgba(15,30,80,0.35)]"
          />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/95 px-4 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[18rem] sm:px-5 sm:py-4">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange">
                {currentOffer.title}
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-navy">
                  {currentOffer.price}
                </span>
                <span className="text-sm font-semibold text-navy/70">
                  {currentOffer.priceSuffix}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
