import { CallNowButton, QuoteButton } from "@/components/ui/cta";
import { ShieldCheck } from "lucide-react";
import sunroomImg from "@/assets/installs/mini-split-sunroom.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      {/* Full-bleed background photo */}
      <img
        src={sunroomImg}
        alt="GREE mini split installed in a sunroom"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
      />

      {/* Gradient overlay: dark left → transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/15" />
      {/* Bottom fade for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative container-page py-20 md:py-28">
        <div className="max-w-xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-4 py-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-orange" />
            <span className="text-xs font-bold uppercase tracking-wider text-orange">
              Official GREE Installer — Tri-State Area
            </span>
          </div>

          <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-[4.5rem]">
            Comfort You Can
            <br />
            <span className="text-sky">Enjoy.</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
            Your home shouldn't be a sauna in July or a freezer in January. We
            install and service mini splits, AC, and heating across the
            Tri-State Area.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <CallNowButton size="lg" variant="orange" />
            <QuoteButton size="lg" variant="outline-light" />
          </div>

          <p className="mt-6 text-sm text-white/50">
            Single-zone installs from{" "}
            <span className="font-bold text-white/90">$2,399</span>{" "}
            · Most jobs scheduled within the week
          </p>
        </div>
      </div>
    </section>
  );
}
