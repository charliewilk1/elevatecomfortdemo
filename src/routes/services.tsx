import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/content/services";
import { FinalCta } from "@/components/sections/FinalCta";
import { SimpleStartToFinish } from "@/components/sections/SimpleStartToFinish";
import miniSplitImg from "@/assets/installs/mini-split-wall.jpg";
import acImg from "@/assets/installs/outdoor-condenser.jpg";
import heatingImg from "@/assets/installs/bedroom-install.jpg";
import heroImg from "@/assets/hero-image.jpg";

// Placeholder mapping — replace values with real photos when available
const photoMap: Record<string, string> = {
  "mini-splits":        miniSplitImg,   // ✓ real photo
  "central-ac":         acImg,          // ✓ real photo
  "furnace":            heatingImg,     // ⚠ placeholder
  "electric-heating":   heroImg,        // ⚠ placeholder
  "baseboard-heating":  heatingImg,     // ⚠ placeholder
  "wall-unit-removal":  acImg,          // ⚠ placeholder
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Elevate Comfort AC/Heating" },
      {
        name: "description",
        content:
          "Mini split installation, central AC, furnace, electric heating, baseboard heating, and through-wall unit removal across the Tri-State Area.",
      },
      { property: "og:title", content: "Services — Elevate Comfort AC/Heating" },
      {
        property: "og:description",
        content: "Full HVAC service — mini splits, AC, heating, and wall restoration in the Tri-State Area.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-ice/30 py-12 sm:py-16">
        <div className="container-page">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-eyebrow">
            What we do
          </div>
          <h1 className="mt-3 text-4xl font-bold uppercase leading-[1.02] tracking-tight text-navy sm:text-5xl md:text-6xl">
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Mini splits are our main thing — but we handle the full range of
            residential and light commercial HVAC.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page divide-y divide-border">
          {services.map((s, i) => {
            const photo = photoMap[s.slug] ?? heroImg;
            const imageRight = i % 2 !== 0;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="scroll-mt-20 grid gap-8 py-12 first:pt-0 last:pb-0 md:grid-cols-2 md:gap-16 md:items-center"
              >
                <div className={imageRight ? "md:order-2" : ""}>
                  <img
                    src={photo}
                    alt={s.title}
                    loading="lazy"
                    className="w-full rounded-2xl object-cover aspect-[4/3] shadow-sm"
                  />
                </div>
                <div className={imageRight ? "md:order-1" : ""}>
                  <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {s.long}
                  </p>
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
