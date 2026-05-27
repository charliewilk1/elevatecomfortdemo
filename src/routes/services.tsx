import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/content/services";
import { CallNowButton, QuoteButton } from "@/components/ui/cta";
import { FinalCta } from "@/components/sections/FinalCta";
import { SimpleStartToFinish } from "@/components/sections/SimpleStartToFinish";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Elevate Comfort AC/Heating" },
      {
        name: "description",
        content:
          "Mini split installation, AC installation, AC repair, heating service, and maintenance across the Tri-State Area.",
      },
      { property: "og:title", content: "Services — Elevate Comfort AC/Heating" },
      {
        property: "og:description",
        content: "Mini split installs, AC and heating service in the Tri-State Area.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-page py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
            What we do
          </div>
          <h1 className="mt-3 text-4xl font-bold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl">
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Mini split, AC, and heating service done cleanly and without the fluff.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page divide-y divide-border">
          {services.map((s) => (
            <article
              key={s.slug}
              className="grid gap-6 py-10 first:pt-0 last:pb-0 md:grid-cols-[1fr_auto] md:gap-16"
            >
              <div>
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {s.long}
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col md:w-44">
                <QuoteButton />
                <CallNowButton />
              </div>
            </article>
          ))}
        </div>
      </section>

      <SimpleStartToFinish />
      <FinalCta />
    </>
  );
}
