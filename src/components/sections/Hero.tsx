import { CallNowButton, QuoteButton } from "@/components/ui/cta";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-ice/70 via-ice/30 to-white">
      <div className="container-page grid items-center gap-10 py-12 md:grid-cols-2 md:gap-12 md:py-20">
        {/* Left: copy */}
        <div className="order-2 md:order-1">
          <h1 className="text-[2.6rem] leading-[1.02] tracking-tight text-navy sm:text-5xl md:text-[3.5rem]">
            Comfort You Can
            <br />
            <span className="text-sky">Enjoy.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Your home shouldn't be a sauna in July or a freezer in January. We
            install and service mini splits, AC, and heating across the
            Tri-State Area.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <CallNowButton size="lg" variant="navy" />
            <QuoteButton size="lg" />
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative order-1 md:order-2">
          <img
            src={heroImage}
            alt="GREE mini split system installed at a Tri-State Area home"
            width={1600}
            height={1200}
            fetchPriority="high"
            className="w-full rounded-2xl object-cover shadow-[0_20px_60px_-20px_rgba(15,30,80,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
