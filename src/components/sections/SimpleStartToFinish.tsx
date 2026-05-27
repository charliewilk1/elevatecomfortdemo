import { CalendarCheck, Wrench, Home } from "lucide-react";

const steps = [
  {
    n: 1,
    icon: CalendarCheck,
    title: "Request a Quote",
    desc: "Tell us what you need and where. We'll send a quote fast.",
  },
  {
    n: 2,
    icon: Wrench,
    title: "Confirm the Details",
    desc: "We walk through pricing, timing, and anything specific to your install.",
  },
  {
    n: 3,
    icon: Home,
    title: "Get Installed",
    desc: "We show up on time, install cleanly, and walk you through the system.",
  },
];

export function SimpleStartToFinish() {
  return (
    <section className="section-y">
      <div className="container-page">
        <h2 className="text-center text-3xl tracking-tight text-navy sm:text-4xl">
          Simple Start-to-Finish Service
        </h2>

        <div className="relative mt-12 grid gap-10 md:grid-cols-3">
          {/* dashed connector */}
          <div
            aria-hidden
            className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px border-t-2 border-dashed border-navy/20 md:block"
          />
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-[0_8px_20px_-6px_rgba(15,30,80,0.4)]">
                  <span className="font-display text-lg font-extrabold">{s.n}</span>
                </div>
                <Icon className="mt-5 h-7 w-7 text-navy" strokeWidth={1.75} />
                <h3 className="mt-3 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-1.5 max-w-[14rem] text-sm leading-snug text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
