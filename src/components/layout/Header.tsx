import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo/logo-horizontal-white-orange.png";
import { site } from "@/content/site";
import { CallNowButton } from "@/components/ui/cta";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 w-full bg-navy">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center" aria-label={site.name}>
          <img
            src={logo}
            alt={site.name}
            className="h-12 w-auto sm:h-14"
            width={520}
            height={160}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold transition-colors",
                  active ? "text-white" : "text-white/60 hover:text-white",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-orange" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <CallNowButton size="default" variant="orange" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-white/80 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3">
              <CallNowButton variant="orange" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
