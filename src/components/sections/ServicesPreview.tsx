import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { services } from "@/content/services";
import miniSplitImg    from "@/assets/installs/mini-split-basement.jpg";
import sunroomImg      from "@/assets/installs/mini-split-sunroom.jpg";
import baseboardImg    from "@/assets/installs/baseboard-heater.jpg";
import electricImg     from "@/assets/installs/electric-wall-unit.jpg";
import centralAcImg    from "@/assets/installs/central-ac-outdoor.jpg";
import stackedImg      from "@/assets/installs/client-units-stacked.jpg";
import heroImg         from "@/assets/hero-image.jpg";

const photoMap: Record<string, string> = {
  "mini-splits":        miniSplitImg,   // ✓ real — basement GREE install
  "central-ac":         centralAcImg,   // ✓ real — outdoor AC condensers
  "furnace":            stackedImg,     // placeholder — replace when photo arrives
  "electric-heating":   electricImg,    // ✓ real — electric wall unit
  "baseboard-heating":  baseboardImg,   // ✓ real — baseboard install
  "wall-unit-removal":  sunroomImg,     // placeholder — replace when removal photo arrives
};

const ROTATE_INTERVAL = 3500; // ms between swaps
const FADE_DURATION   = 500;  // ms

export function ServicesPreview() {
  const [featured, ...rest] = services;

  const initialSlots = rest.slice(0, 4).map((_, i) => i);
  const [slots, setSlots] = useState<number[]>(initialSlots);
  const [fadingSlot, setFadingSlot] = useState<number | null>(null);

  const hiddenIdxRef = useRef(4);
  const lastSlotRef  = useRef(-1);

  useEffect(() => {
    if (rest.length <= 4) return;

    const id = setInterval(() => {
      let pos: number;
      do {
        pos = Math.floor(Math.random() * 4);
      } while (pos === lastSlotRef.current);
      lastSlotRef.current = pos;

      setFadingSlot(pos);

      setTimeout(() => {
        setSlots((prev) => {
          const next = [...prev];
          const outgoing = next[pos];
          next[pos] = hiddenIdxRef.current;
          hiddenIdxRef.current = outgoing;
          return next;
        });
        setFadingSlot(null);
      }, FADE_DURATION);
    }, ROTATE_INTERVAL);

    return () => clearInterval(id);
  }, [rest.length]);

  return (
    <section className="section-y">
      <div className="container-page">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">Services</h2>
          <Link
            to="/services"
            className="hidden text-sm font-semibold text-navy/50 transition-colors hover:text-navy sm:inline"
          >
            All services →
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {/* Featured card — always mini-splits, self-sizing */}
          <ServiceCard
            service={featured}
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
            tall
          />

          {/* Rotating secondary cards.
              The wrapper div IS the grid item and owns the aspect-ratio + shape.
              ServiceCard fills it with absolute inset-0 so there's no size conflict. */}
          {slots.map((serviceIdx, slotIdx) => (
            <div
              key={slotIdx}
              style={{ transitionDuration: `${FADE_DURATION}ms` }}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl transition-opacity ${
                fadingSlot === slotIdx ? "opacity-0" : "opacity-100"
              }`}
            >
              <ServiceCard service={rest[serviceIdx]} fill />
            </div>
          ))}
        </div>

        <div className="mt-5 sm:hidden">
          <Link to="/services" className="text-sm font-semibold text-navy/50 hover:text-navy">
            All services →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  className = "",
  tall = false,
  fill = false,
}: {
  service: (typeof services)[number];
  className?: string;
  tall?: boolean;
  fill?: boolean; // fills a positioned parent instead of self-sizing
}) {
  const photo = photoMap[service.slug] ?? heroImg;

  // fill mode: <a> fills the wrapper div (which owns the dimensions)
  // normal mode: <a> is self-sizing via aspect-ratio
  const sizeClass = fill
    ? "absolute inset-0"
    : tall
    ? "relative overflow-hidden rounded-xl aspect-[4/3] lg:aspect-auto lg:min-h-[28rem]"
    : "relative overflow-hidden rounded-xl aspect-[4/3]";

  return (
    <a
      href={`/services#${service.slug}`}
      className={`group ${sizeClass} ${className}`}
      aria-label={service.title}
    >
      <img
        src={photo}
        alt={service.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <h3 className={`font-bold text-white ${tall ? "text-2xl sm:text-3xl" : "text-lg"}`}>
          {service.title}
        </h3>
        <p className={`mt-1 text-white/70 ${tall ? "text-base" : "text-sm"}`}>
          {service.short}
        </p>
        <p className="mt-3 text-xs font-bold uppercase tracking-wider text-orange opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Learn more →
        </p>
      </div>
    </a>
  );
}
