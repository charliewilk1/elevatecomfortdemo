import { Check, ShieldCheck } from "lucide-react";

const items = [
  "GREE 9/12k BTU mini split system",
  "Professional installation by our team",
  "Line set up to 25 ft.",
  "Electrical connection",
  "Wall mounting & setup",
  "System test & walkthrough",
];

export function WhatsIncluded() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="rounded-2xl bg-ice/70 p-8 sm:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-2xl tracking-tight text-navy sm:text-3xl">
                What's Included in This Special
              </h2>
              <ul className="mt-6 space-y-3">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[15px] text-navy">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-sky" strokeWidth={2.5} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quality seal — matches reference */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-44 w-44">
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 h-full w-full animate-[spin_30s_linear_infinite] text-navy"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="seal-circle"
                      d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                    />
                  </defs>
                  <text
                    fill="currentColor"
                    className="text-[18px] font-bold uppercase tracking-[0.35em]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <textPath href="#seal-circle" startOffset="0%">
                      Quality Work · Peace of Mind ·
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 m-auto flex h-24 w-24 items-center justify-center rounded-full bg-navy text-white">
                  <ShieldCheck className="h-10 w-10" strokeWidth={1.75} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
