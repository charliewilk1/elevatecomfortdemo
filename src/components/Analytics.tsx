/**
 * Mounts once in SiteLayout. Fires a pageview event on every route change.
 */
import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { track } from "@/lib/analytics";

export function Analytics() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    // Skip duplicate fires (StrictMode double-invoke, etc.)
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;
    track("pageview", pathname);
  }, [pathname]);

  return null;
}
