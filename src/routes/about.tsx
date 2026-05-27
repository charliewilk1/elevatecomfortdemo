import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Sparkles, Wrench, MapPin } from "lucide-react";
import { FinalCta } from "@/components/sections/FinalCta";
import { site } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Elevate Comfort AC/Heating" },
      {
        name: "description",
        content:
          "Elevate Comfort AC/Heating helps homeowners and businesses across the Tri-State Area with reliable AC, heating, and mini split service.",
      },
      { property: "og:title", content: "About Elevate Comfort AC/Heating" },
      {
        property: "og:description",
        content: "Reliable AC, heating, and mini split service for the Tri-State Area.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Wrench, title: "Professional Service", desc: "Trained, on time, and respectful of your home or space." },
  { icon: MessageSquare, title: "Clear Communication", desc: "Straight answers — no upsells, no surprises." },
  { icon: Sparkles, title: "Clean Installation", desc: "Tidy line sets, secure mounting, no mess left behind." },
  { icon: MapPin, title: "Local Service Feel", desc: "Small local outfit serving the Tri-State Area." },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-ice/60">
        <div className="container-page py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
            About us
          </div>
          <h1 className="mt-3 text-4xl font-bold uppercase text-navy sm:text-5xl md:text-6xl">
            Reliable comfort,
            <br />
            <span className="text-orange">handled right.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Elevate Comfort AC/Heating helps homeowners and businesses across
            the Tri-State Area with reliable AC, heating, and mini split service.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-5 sm:grid-cols-2">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="card-hover rounded-2xl border border-border bg-card p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-bold uppercase text-navy">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-y bg-navy text-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-bold uppercase sm:text-4xl">
            Our approach
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            We focus on doing the basics well: showing up when we say we will,
            installing systems cleanly, and giving honest recommendations.
            Whether it's a single mini split for a hot bedroom or a full
            heating and cooling job, we treat the work the same way — like
            it's going in our own home.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            If you've got questions before booking, just call or text{" "}
            <a href={site.phoneHref} className="font-bold text-orange hover:underline">
              {site.phone}
            </a>
            . Real person, real answer.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
