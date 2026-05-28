import { CallNowButton, QuoteButton } from "@/components/ui/cta";
import { Check } from "lucide-react";

const trust = ["Honest Pricing", "Quality Workmanship", "Friendly Local Service"];

export function FinalCta() {
  return (
    <section className="section-y bg-navy text-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl tracking-tight sm:text-4xl">
            Ready for Reliable Comfort?
          </h2>
          <p className="mt-3 text-base text-white/75">
            Most jobs scheduled within the week. Send us a message and we'll get back same day.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <CallNowButton size="lg" variant="orange" />
            <QuoteButton size="lg" variant="outline-light" />
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-white/80">
                <Check className="h-4 w-4 shrink-0 text-orange" strokeWidth={3} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
