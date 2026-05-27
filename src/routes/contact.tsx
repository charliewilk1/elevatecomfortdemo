import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageSquare, MapPin, Mail } from "lucide-react";
import { site } from "@/content/site";
import { GeneralQuoteForm } from "@/components/forms/GeneralQuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Elevate Comfort AC/Heating | 347-215-1377" },
      {
        name: "description",
        content:
          "Call or text 347-215-1377, or request a quote online. Serving homeowners and businesses across the Tri-State Area.",
      },
      { property: "og:title", content: "Contact Elevate Comfort AC/Heating" },
      {
        property: "og:description",
        content: "Call or text 347-215-1377 — Tri-State Area AC, heating, mini splits.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-page py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
            Get in touch
          </div>
          <h1 className="mt-3 text-4xl font-bold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Fastest way to reach us is by phone or text. Prefer a form? Use the
            quote form below and we'll get back to you same day.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-5">
            <div className="space-y-4">
              <a
                href={site.phoneHref}
                className="card-hover flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-orange">
                    Call
                  </div>
                  <div className="mt-1 text-2xl font-bold text-navy">
                    {site.phone}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Tap to call from your phone.
                  </div>
                </div>
              </a>

              <a
                href={site.smsHref}
                className="card-hover flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-orange">
                    Text
                  </div>
                  <div className="mt-1 text-2xl font-bold text-navy">
                    {site.phone}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Send a quick text — feel free to include photos.
                  </div>
                </div>
              </a>

              <a
                href={site.emailHref}
                className="card-hover flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-orange">
                    Email
                  </div>
                  <div className="mt-1 text-base font-bold text-navy break-all">
                    {site.email}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    We'll get back to you same day.
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-orange">
                    Service area
                  </div>
                  <div className="mt-1 text-base font-semibold text-navy">
                    {site.serviceArea}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="md:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-navy">
                Request a Quote
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A few quick details so we can get you a fair price.
              </p>
              <div className="mt-6">
                <GeneralQuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
