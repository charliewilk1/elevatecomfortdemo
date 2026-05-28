import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/content/services";
import { FinalCta } from "@/components/sections/FinalCta";
import { SimpleStartToFinish } from "@/components/sections/SimpleStartToFinish";
import { CtaAnchor } from "@/components/ui/cta";
import miniSplitImg    from "@/assets/installs/picsforwebsite/IMG_1310.jpeg";
import sunroomImg      from "@/assets/installs/picsforwebsite/IMG_0778.jpeg";
import baseboardImg    from "@/assets/installs/picsforwebsite/Image 6.jpeg";
import electricImg     from "@/assets/installs/picsforwebsite/IMG_1002.jpeg";
import stackedImg      from "@/assets/installs/client-units-stacked.jpg";
import buildingImg     from "@/assets/installs/client-building.jpg";
import heroImg         from "@/assets/hero-image.jpg";

const photoMap: Record<string, string> = {
  "mini-splits":        miniSplitImg,   // ✓ real — basement GREE install
  "central-ac":         buildingImg,    // ✓ real — building exterior multi-unit
  "furnace":            stackedImg,     // placeholder — replace when photo arrives
  "electric-heating":   electricImg,    // ✓ real — electric wall unit
  "baseboard-heating":  baseboardImg,   // ✓ real — baseboard install
  "wall-unit-removal":  sunroomImg,     // placeholder — replace when removal photo arrives
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
                  {s.slug === "mini-splits" && (
                    <p className="mt-3 text-sm">
                      <Link
                        to="/mini-splits"
                        className="font-bold text-navy underline underline-offset-4 hover:text-orange transition-colors"
                      >
                        What is a mini split? →
                      </Link>
                    </p>
                  )}
                  <div className="mt-6">
                    <CtaAnchor
                      href={`/contact?service=${s.slug}`}
                      variant="outline"
                      size="sm"
                    >
                      Get a Quote →
                    </CtaAnchor>
                  </div>
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
