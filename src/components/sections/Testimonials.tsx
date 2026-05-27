import { testimonials } from "@/content/testimonials";

// Replace placeholder content with real customer quotes when available.
export function Testimonials() {
  return (
    <section className="section-y border-y border-border">
      <div className="container-page">
        <p className="mb-10 text-[11px] font-bold uppercase tracking-[0.2em] text-navy/40">
          What Customers Say
        </p>

        <div className="grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="md:px-10 first:md:pl-0 last:md:pr-0"
            >
              <blockquote className="text-[15px] leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-5 text-sm font-semibold text-navy">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
