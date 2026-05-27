import { testimonials } from "@/content/testimonials";
import { Star } from "lucide-react";

// Replace placeholder quotes with real customer reviews when available.
export function Testimonials() {
  return (
    <section className="section-y bg-ice/40">
      <div className="container-page">
        <h2 className="mb-10 text-center text-2xl font-bold text-navy sm:text-3xl">
          What Customers Say
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-border"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <figcaption className="mt-5 border-t border-border pt-4 text-sm font-semibold text-navy">
                {t.name}
                {t.location && (
                  <span className="ml-1 font-normal text-muted-foreground">
                    · {t.location}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
