import { Link } from "@tanstack/react-router";
import { services } from "@/content/services";

export function ServicesPreview() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="flex items-end justify-between border-b border-border pb-5">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">Services</h2>
          <Link
            to="/services"
            className="hidden text-sm font-semibold text-navy/50 transition-colors hover:text-navy sm:inline"
          >
            All services →
          </Link>
        </div>

        <ul className="divide-y divide-border">
          {services.map((s, i) => (
            <li
              key={s.slug}
              className="group flex items-center gap-5 py-5 md:gap-8"
            >
              <span className="w-7 shrink-0 text-sm font-bold tabular-nums text-orange/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-navy md:text-lg">{s.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{s.short}</p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 text-sm font-semibold text-navy/30 transition-colors group-hover:text-navy"
                aria-label={`Request a quote for ${s.title}`}
              >
                Quote&nbsp;→
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-5 sm:hidden">
          <Link
            to="/services"
            className="text-sm font-semibold text-navy/50 hover:text-navy"
          >
            All services →
          </Link>
        </div>
      </div>
    </section>
  );
}
