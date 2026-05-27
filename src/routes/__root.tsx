import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { CtaLink, CtaButton } from "@/components/ui/cta";

import appCss from "../styles.css?url";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <CtaLink to="/">Go home</CtaLink>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-navy">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <CtaButton
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </CtaButton>
          <a
            href="/"
            className="rounded-full border-2 border-navy px-5 py-2.5 text-sm font-bold uppercase text-navy hover:bg-navy hover:text-white"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Elevate Comfort AC/Heating — Tri-State Area Mini Split, AC & Heating" },
      {
        name: "description",
        content:
          "Mini split, AC, and heating installation and service for homeowners and businesses across the Tri-State Area. Call/text 347-215-1377.",
      },
      { property: "og:title", content: "Elevate Comfort AC/Heating — Tri-State Area Mini Split, AC & Heating" },
      {
        property: "og:description",
        content:
          "Reliable AC, heating, and mini split service in the Tri-State Area.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Elevate Comfort AC/Heating — Tri-State Area Mini Split, AC & Heating" },
      { name: "description", content: "Elevate Comfort AC/Heating offers professional HVAC services, specializing in mini split installations and repairs for the Tri-State Area." },
      { property: "og:description", content: "Elevate Comfort AC/Heating offers professional HVAC services, specializing in mini split installations and repairs for the Tri-State Area." },
      { name: "twitter:description", content: "Elevate Comfort AC/Heating offers professional HVAC services, specializing in mini split installations and repairs for the Tri-State Area." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/JecLuu6XCzVsazuFxKCVmEhZtqr2/social-images/social-1779853424671-6EE8AADC-1630-43E4-8A84-ECDC65DA7C28.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/JecLuu6XCzVsazuFxKCVmEhZtqr2/social-images/social-1779853424671-6EE8AADC-1630-43E4-8A84-ECDC65DA7C28.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout />
      <Toaster />
    </QueryClientProvider>
  );
}
