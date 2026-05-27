import { CallNowButton, QuoteButton } from "@/components/ui/cta";
import familyImg from "@/assets/family-cta.jpg";
import { Check } from "lucide-react";

const trust = ["Honest Pricing", "Quality Workmanship", "Friendly Local Service"];

export function FinalCta() {
  return (
    <section className="section-y bg-navy text-white">
      <div className="container-page">
        <div className="grid gap-0 md:grid-cols-[1fr_1.4fr] overflow-hidden rounded-2xl">
          <div className="relative h-56 md:h-auto">
            <img
              src={familyImg}
              alt="Comfortable family at home"
              loading="lazy"
              width={1200}
              height={900}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="p-8 sm:p-10">
            <h2 className="text-2xl tracking-tight sm:text-3xl">
              Ready for Reliable Comfort?
            </h2>
            <p className="mt-2 text-white/80">
              Most jobs scheduled within the week. Send us a message and we'll get back same day.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <CallNowButton size="lg" variant="orange" />
              <QuoteButton size="lg" variant="outline-light" />
            </div>

            <ul className="mt-6 grid gap-2 sm:grid-cols-3">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-white/90">
                  <Check className="h-4 w-4 text-orange" strokeWidth={3} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
