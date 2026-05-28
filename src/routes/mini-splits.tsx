import { createFileRoute } from "@tanstack/react-router";
import { FinalCta } from "@/components/sections/FinalCta";
import { CtaLink } from "@/components/ui/cta";
import { activeSpecial } from "@/content/offers";
import { track } from "@/lib/analytics";
import {
  Thermometer,
  Zap,
  Wind,
  BarChart3,
  CheckCircle2,
  ArrowRightLeft,
  Snowflake,
  Flame,
  Wifi,
  Volume2,
  Award,
  MapPin,
} from "lucide-react";
import bedroomImg from "@/assets/installs/picsforwebsite/IMG_1310.jpeg";
import stackedImg from "@/assets/installs/client-units-stacked.jpg";

export const Route = createFileRoute("/mini-splits")({
  head: () => ({
    meta: [
      { title: "What Is a Mini Split? — Elevate Comfort AC/Heating" },
      {
        name: "description",
        content:
          "Learn how ductless mini split systems work, why they're more efficient than central AC, how they heat and cool, and what a real install costs in the Tri-State Area.",
      },
      {
        property: "og:title",
        content: "What Is a Mini Split? — Elevate Comfort AC/Heating",
      },
      {
        property: "og:description",
        content:
          "Everything you need to know about mini split systems — how they work, energy savings, and real installed pricing.",
      },
    ],
  }),
  component: MiniSplitsPage,
});

function MiniSplitsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-ice/30 py-12 sm:py-16">
        <div className="container-page">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-eyebrow">
            Mini Split Guide
          </div>
          <h1 className="mt-3 text-4xl font-bold uppercase leading-[1.02] tracking-tight text-navy sm:text-5xl md:text-6xl">
            What Is a
            <br />
            <span className="text-orange">Mini Split?</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Ductless heating and cooling — how the technology works, why it's
            more efficient than traditional HVAC, and what a real install costs
            in the Tri-State Area.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CtaLink to={activeSpecial ? activeSpecial.ctaPath : "/contact?service=mini-splits"} variant="orange" size="lg">
              {activeSpecial ? "See Current Special" : "Get a Free Quote"}
            </CtaLink>
            <CtaLink to="/services#mini-splits" variant="outline" size="lg">
              See Our Services
            </CtaLink>
          </div>
        </div>
      </section>

      {/* ── What is a mini split ──────────────────────────────── */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                The basics
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                A mini split — also called a <strong>ductless mini split</strong> or{" "}
                <strong>ductless heat pump</strong> — is a two-part heating and
                cooling system: an indoor air handler mounted on your wall and an
                outdoor compressor unit. The two connect through a small 3-inch
                hole in the wall via a refrigerant line set. No ductwork needed.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Each indoor unit conditions one zone independently, giving you
                room-by-room temperature control. One outdoor unit can power
                multiple indoor units (a <strong>multi-zone system</strong>), making
                mini splits ideal for single-room additions or whole-home comfort.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Heats AND cools — no separate systems needed",
                  "No ductwork — installs anywhere",
                  "One outdoor unit can run 2–5 indoor zones",
                  "Works in temperatures as low as -13°F",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src={bedroomImg}
                alt="GREE mini split installed in bedroom"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="border border-t-0 border-border rounded-b-2xl bg-card px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-eyebrow">
                  Real client install
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  GREE WiFi mini split — bedroom, Tri-State Area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="section-y bg-ice/30">
        <div className="container-page">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              How it works
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-base text-muted-foreground">
              A mini split moves heat — it doesn't generate it. That's the
              secret to its efficiency.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Cooling */}
            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-sky/10 px-3 py-1.5">
                <Snowflake className="h-4 w-4 text-sky" />
                <span className="text-xs font-bold uppercase tracking-wider text-sky">
                  Cooling Mode
                </span>
              </div>
              <ol className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Absorbs indoor heat",
                    desc: "Refrigerant in the indoor unit evaporates and absorbs heat from your room — the coil gets cold, air blows across it.",
                  },
                  {
                    step: "2",
                    title: "Travels outside",
                    desc: "The warm refrigerant flows through the line set to the outdoor compressor unit.",
                  },
                  {
                    step: "3",
                    title: "Rejects heat outside",
                    desc: "The compressor pressurizes the refrigerant, releasing the absorbed heat into the outdoor air.",
                  },
                  {
                    step: "4",
                    title: "Cycles back cold",
                    desc: "Cooled refrigerant returns to the indoor unit and the cycle repeats.",
                  },
                ].map((s) => (
                  <li key={s.step} className="flex gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky/15 text-xs font-bold text-sky">
                      {s.step}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-navy">{s.title}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Heating */}
            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-orange/10 px-3 py-1.5">
                <Flame className="h-4 w-4 text-orange" />
                <span className="text-xs font-bold uppercase tracking-wider text-orange">
                  Heating Mode (Heat Pump)
                </span>
              </div>
              <ol className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Extracts outdoor heat",
                    desc: "Even cold air contains heat energy. The outdoor unit absorbs it using refrigerant — this works down to -13°F.",
                  },
                  {
                    step: "2",
                    title: "Compresses and amplifies",
                    desc: "The compressor pressurizes the refrigerant, raising its temperature significantly.",
                  },
                  {
                    step: "3",
                    title: "Releases heat indoors",
                    desc: "Hot refrigerant flows to the indoor unit, which blows warm air into your room.",
                  },
                  {
                    step: "4",
                    title: "Returns outside to repeat",
                    desc: "Cooled refrigerant flows back outside to collect more heat energy.",
                  },
                ].map((s) => (
                  <li key={s.step} className="flex gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/15 text-xs font-bold text-orange">
                      {s.step}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-navy">{s.title}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <ArrowRightLeft className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <div>
                <p className="text-sm font-bold text-navy">
                  One system, two seasons
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  The same unit that cools your home in July heats it in
                  January — just by reversing the refrigerant flow direction.
                  No separate furnace or boiler required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Inverter technology ──────────────────────────────── */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                Inverter technology
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Traditional HVAC systems run at full speed or shut off completely
                — like a car stuck in first gear. Mini splits use{" "}
                <strong>inverter-driven compressors</strong> that modulate speed
                continuously, producing exactly the output the room needs at that
                moment.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: Thermometer,
                    title: "Steadier temperatures",
                    desc: "No hot/cold swings from cycling on and off. The room stays within 1°F of your set temperature.",
                  },
                  {
                    icon: Zap,
                    title: "Less energy used",
                    desc: "Running at partial capacity most of the time consumes dramatically less electricity than constant full-blast cycling.",
                  },
                  {
                    icon: Volume2,
                    title: "Quieter operation",
                    desc: "Indoor units run as low as 19 dB — quieter than a whisper. No banging, clanking, or sudden blasts of air.",
                  },
                  {
                    icon: Award,
                    title: "Longer lifespan",
                    desc: "Fewer hard starts and stops means less mechanical stress. Modern mini splits typically last 15–20 years.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                      <Icon className="h-4 w-4 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy">{title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src={stackedImg}
                alt="GREE outdoor compressor units installed on brick wall"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="border border-t-0 border-border rounded-b-2xl bg-card px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-eyebrow">
                  Real client install
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Dual GREE inverter compressors — multi-zone system
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Energy savings ───────────────────────────────────── */}
      <section className="section-y bg-navy text-white">
        <div className="container-page">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
              Efficiency by the numbers
            </div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Real energy savings
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-base text-white/70">
              Mini splits are among the most efficient HVAC systems available.
              Here's what the numbers actually mean.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                stat: "38",
                unit: "SEER2",
                label: "Max efficiency rating",
                sub: "vs. 14–18 SEER2 for typical central AC",
                icon: BarChart3,
              },
              {
                stat: "300%",
                unit: "COP",
                label: "Heating efficiency",
                sub: "3 kWh of heat from every 1 kWh of electricity",
                icon: Flame,
              },
              {
                stat: "0%",
                unit: "Duct loss",
                label: "No duct energy waste",
                sub: "Central systems lose 20–30% through leaky ducts",
                icon: Wind,
              },
              {
                stat: "~40%",
                unit: "Savings",
                label: "vs. traditional AC",
                sub: "Typical cooling season energy savings",
                icon: Zap,
              },
            ].map(({ stat, unit, label, sub, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <Icon className="h-5 w-5 text-orange" />
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-extrabold leading-none text-white">
                    {stat}
                  </span>
                  <span className="mb-0.5 text-sm font-bold text-orange">{unit}</span>
                </div>
                <p className="mt-2 text-sm font-bold text-white">{label}</p>
                <p className="mt-1 text-xs text-white/55">{sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-7">
            <h3 className="text-lg font-bold text-white">
              Why heat pumps beat furnaces
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              A gas furnace converts fuel into heat — the best ones reach ~98%
              efficiency. A heat pump doesn't generate heat, it{" "}
              <em>moves</em> it. By extracting thermal energy from outdoor air,
              a mini split delivers 2–3 units of heat for every 1 unit of
              electricity consumed. That's 200–300% efficiency — something no
              combustion system can match. In heating-heavy climates, that
              translates directly to lower utility bills.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                Competitive pricing
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Mini split installs vary widely. The industry average for a
                single-zone system runs $3,000–$5,000 installed. We keep our
                overhead lean and pass the savings to you.
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-ice/40">
                      <th className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-widest text-navy">
                        System type
                      </th>
                      <th className="px-5 py-3.5 text-right text-xs font-bold uppercase tracking-widest text-navy">
                        Industry avg.
                      </th>
                      <th className="px-5 py-3.5 text-right text-xs font-bold uppercase tracking-widest text-orange">
                        Elevate Comfort
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "Single-zone (1 room)",
                        industry: "$3,000–$5,000",
                        ours: "From $2,399",
                      },
                      {
                        type: "Dual-zone (2 rooms)",
                        industry: "$5,500–$9,000",
                        ours: "From $4,400",
                      },
                      {
                        type: "Tri-zone (3 rooms)",
                        industry: "$9,000–$14,000",
                        ours: "From $6,200",
                      },
                      {
                        type: "Quad-zone (4 rooms)",
                        industry: "$13,000–$20,000",
                        ours: "From $8,000",
                      },
                    ].map((row, i) => (
                      <tr
                        key={row.type}
                        className={i % 2 === 0 ? "bg-card" : "bg-ice/20"}
                      >
                        <td className="px-5 py-4 font-medium text-navy">
                          {row.type}
                        </td>
                        <td className="px-5 py-4 text-right text-muted-foreground">
                          {row.industry}
                        </td>
                        <td className="px-5 py-4 text-right font-bold text-orange">
                          {row.ours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                * Prices include equipment and labor. Final pricing depends on
                system size, BTU rating, and install complexity. Get a free
                no-obligation quote.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-xl font-bold text-navy">
                What's included
              </h3>
              {[
                {
                  icon: Wind,
                  title: "Full equipment supply",
                  desc: "We supply and install GREE inverter systems — one of the highest-rated brands in the industry.",
                },
                {
                  icon: Zap,
                  title: "Electrical connection",
                  desc: "Dedicated circuit wiring and breaker installation included in our standard install.",
                },
                {
                  icon: Wifi,
                  title: "WiFi & controls setup",
                  desc: "We configure smart controls and walk you through the app before we leave.",
                },
                {
                  icon: CheckCircle2,
                  title: "Clean line set & patch",
                  desc: "Tidy wall penetration, insulated line set, and proper weatherproofing on the exterior.",
                },
                {
                  icon: Award,
                  title: "Manufacturer warranty",
                  desc: "GREE systems come with a manufacturer warranty. We stand behind our installation work.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange/10">
                    <Icon className="h-4 w-4 text-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">{title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-6 pt-2">
                <CtaLink
                  to={activeSpecial ? activeSpecial.ctaPath : "/contact?service=mini-splits"}
                  variant="orange"
                  size="lg"
                >
                  {activeSpecial ? "See Current Special" : "Get a Free Quote"}
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Is it right for you ──────────────────────────────── */}
      <section className="section-y bg-ice/30">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Is a mini split right for you?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Mini splits work well in many situations — here are the most common
            ones we see in the Tri-State Area.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "No ductwork in the building",
                desc: "Apartments, older homes, and additions without existing ducts are ideal. Mini splits require nothing but a 3-inch wall penetration.",
              },
              {
                title: "One room running hot or cold",
                desc: "A bedroom that's always uncomfortable, a home office that overheats, or a garage conversion — single-zone mini splits fix this exactly.",
              },
              {
                title: "Replacing window or wall units",
                desc: "Window AC units are inefficient and a security risk. A mini split installed in the same room runs quieter, uses less power, and looks cleaner.",
              },
              {
                title: "Adding comfort to a new addition",
                desc: "Finished basements, attic conversions, and garage apartments are perfect candidates — no new ductwork to run.",
              },
              {
                title: "Want to stop paying high heating bills",
                desc: "Switching from electric baseboard heat to a heat pump mini split can cut heating costs by 50–70% in a typical season.",
              },
              {
                title: "Want zone control throughout the home",
                desc: "A multi-zone system lets each room set its own temperature. No more fighting over the thermostat or heating empty rooms.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <CheckCircle2 className="h-5 w-5 text-orange" />
                <h3 className="mt-3 text-base font-bold text-navy">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service area map ─────────────────────────────────── */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-eyebrow">
                Where we work
              </div>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
                Tri-State Area
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We install and service mini splits across New York, New Jersey,
                and Connecticut — including the five boroughs, Long Island,
                Westchester, and surrounding areas.
              </p>
              <div className="mt-6 space-y-2">
                {[
                  "New York City (all 5 boroughs)",
                  "Long Island (Nassau & Suffolk)",
                  "Westchester County",
                  "Northern New Jersey",
                  "Fairfield County, CT",
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm text-foreground">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-orange" />
                    {area}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Not sure if we cover your area?{" "}
                <a
                  href="tel:+13472151377"
                  onClick={() => track("phone_click", "/mini-splits")}
                  className="font-bold text-orange hover:underline"
                >
                  Call or text 347-215-1377
                </a>{" "}
                — we'll let you know right away.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              {/* Replace this src with your Google Maps embed URL:
                  Google Maps → Share → Embed a map → copy iframe src */}
              <iframe
                title="Elevate Comfort service area — Tri-State Area"
                src="https://maps.google.com/maps?q=New+York+City,+NY&output=embed&z=9"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Sources ──────────────────────────────────────────── */}
      <section className="border-t border-border py-10">
        <div className="container-page">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Sources & references
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
            <li>
              U.S. Department of Energy — Heat Pump Basics &amp; Energy Efficiency Ratings
              {" "}
              <a
                href="https://www.energy.gov/energysaver/heat-pump-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy/60 underline underline-offset-2 hover:text-navy"
              >
                energy.gov
              </a>
            </li>
            <li>
              ENERGY STAR — Most Efficient Certified Ductless Mini-Split Air Conditioners &amp; Heat Pumps
              {" "}
              <a
                href="https://www.energystar.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy/60 underline underline-offset-2 hover:text-navy"
              >
                energystar.gov
              </a>
            </li>
            <li>
              ASHRAE — Fundamentals of HVAC Systems and Refrigeration Cycles (ASHRAE Handbook)
            </li>
            <li>
              GREE Electric Appliances — Product Specifications &amp; SEER2 Ratings
              {" "}
              <a
                href="https://greeus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy/60 underline underline-offset-2 hover:text-navy"
              >
                greeus.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
