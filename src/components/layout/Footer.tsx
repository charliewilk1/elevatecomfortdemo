import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import logo from "@/assets/logo/logo-stacked.png";
import { site } from "@/content/site";
import { services } from "@/content/services";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-navy text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <img
            src={logo}
            alt={site.name}
            className="h-24 w-auto [filter:brightness(0)_invert(1)]"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
            {site.serviceArea}
          </p>
          <a
            href={site.phoneHref}
            className="mt-5 inline-flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-orange"
          >
            <Phone className="h-5 w-5 text-orange" />
            {site.phone}
          </a>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-orange">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <h3 className="text-sm font-bold uppercase tracking-widest text-orange">
            Services
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-white/80 hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
