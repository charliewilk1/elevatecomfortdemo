import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/content/services";
import { CallNowButton, QuoteButton } from "@/components/ui/cta";
import { FinalCta } from "@/components/sections/FinalCta";
import { SimpleStartToFinish } from "@/components/sections/SimpleStartToFinish";
import { site } from "@/content/site";

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
      <section className="border-b border-border bg-ice/60">
        <div className="container-page py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
            What we do
          </div>
          <h1 className="mt-3 text-4xl font-bold uppercase text-navy sm:text-5xl md:text-6xl">
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Mini split, AC, and heating service done cleanly and without the fluff.
            {" "}{site.serviceArea}
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page space-y-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.slug}
                className="card-hover grid gap-6 rounded-2xl border border-border bg-card p-7 md:grid-cols-12 md:p-10"
              >
                <div className="md:col-span-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="md:col-span-7">
                  <h2 className="text-2xl font-bold uppercase text-navy sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {s.long}
                  </p>
                </div>
                <div className="flex flex-col gap-2 md:col-span-3">
                  <QuoteButton />
                  <CallNowButton />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <SimpleStartToFinish />
      <FinalCta />
    </>
  );
}
