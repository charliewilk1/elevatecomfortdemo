import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import img1 from "@/assets/installs/mini-split-basement.jpg";
import img2 from "@/assets/installs/central-ac-outdoor.jpg";
import img3 from "@/assets/installs/electric-wall-unit.jpg";
import img4 from "@/assets/installs/central-ac-lennox.jpg";
import img5 from "@/assets/installs/mini-split-sunroom.jpg";
import img6 from "@/assets/installs/baseboard-heater.jpg";
import img7 from "@/assets/installs/client-units-stacked.jpg";
import img8 from "@/assets/installs/client-building.jpg";

// Pool order: first 3 are the initial slots — kept diverse by install type.
// central-ac-lennox (img4) is included — note: Lennox logo is visible in that photo.
const photos = [
  { src: img1, alt: "GREE mini split installed in a basement bedroom" },
  { src: img2, alt: "Central AC outdoor condensers installed" },
  { src: img3, alt: "Electric wall unit installation" },
  { src: img4, alt: "Central AC condenser units outside a home" },
  { src: img5, alt: "GREE mini split installation in a sunroom" },
  { src: img6, alt: "Baseboard heater installation" },
  { src: img7, alt: "Stacked HVAC units" },
  { src: img8, alt: "Multi-unit building with AC installation" },
];

const SLOTS    = 3;
const INTERVAL = 3400;
const FADE_MS  = 950;

export function RecentInstallations() {
  const [current,  setCurrent]  = useState([0, 1, 2]);
  const [incoming, setIncoming] = useState<(number | null)[]>([null, null, null]);
  const [visible,  setVisible]  = useState([false, false, false]);

  const poolRef  = useRef(SLOTS); // starts after the 3 initial photos
  const lastSlot = useRef(-1);

  useEffect(() => {
    if (photos.length <= SLOTS) return;

    const id = setInterval(() => {
      let slot: number;
      do { slot = Math.floor(Math.random() * SLOTS); }
      while (slot === lastSlot.current);
      lastSlot.current = slot;

      const nextIdx = poolRef.current % photos.length;
      poolRef.current = nextIdx + 1;

      setIncoming(prev => { const n = [...prev]; n[slot] = nextIdx; return n; });
      setVisible(prev  => { const v = [...prev]; v[slot] = false;   return v; });

      setTimeout(() => {
        setVisible(prev => { const v = [...prev]; v[slot] = true; return v; });
      }, 30);

      setTimeout(() => {
        setCurrent(prev  => { const c = [...prev]; c[slot] = nextIdx; return c; });
        setIncoming(prev => { const n = [...prev]; n[slot] = null;    return n; });
      }, FADE_MS + 60);
    }, INTERVAL);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="section-y border-y border-border bg-ice/50">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl tracking-tight text-navy sm:text-3xl">
              Recent Installations
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              A quick look at recent AC and mini split work.
            </p>
            <Link
              to="/services"
              className="mt-2 inline-block text-sm font-semibold text-sky underline-offset-4 hover:underline"
            >
              See all our services →
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {Array.from({ length: SLOTS }).map((_, slotIdx) => (
            <div key={slotIdx} className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={photos[current[slotIdx]].src}
                alt={photos[current[slotIdx]].alt}
                loading={slotIdx === 0 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {incoming[slotIdx] !== null && (
                <img
                  key={incoming[slotIdx]}
                  src={photos[incoming[slotIdx]!].src}
                  alt={photos[incoming[slotIdx]!].alt}
                  style={{ transitionDuration: `${FADE_MS}ms` }}
                  className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] ease-in-out ${
                    visible[slotIdx] ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
