import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import logo from "@/assets/logo/logo-horizontal-transparent.png";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { track } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-page grid gap-12 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <img
            src={logo}
            alt={site.name}
            className="h-10 w-auto sm:h-12"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.serviceArea}
          </p>
          <a
            href={site.phoneHref}
            onClick={() => track("phone_click", window.location.pathname, { source: "footer" })}
            className="mt-5 inline-flex items-center gap-2 text-lg font-bold text-navy transition-colors hover:text-orange"
          >
            <Phone className="h-5 w-5 text-orange" />
            {site.phone}
          </a>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-eyebrow">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-navy/60 hover:text-navy transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <h3 className="text-sm font-bold uppercase tracking-widest text-eyebrow">
            Services
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-navy/60 hover:text-navy transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
