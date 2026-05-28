import { Link } from "@tanstack/react-router";
import img1 from "@/assets/installs/mini-split-basement.jpg";
import img2 from "@/assets/installs/mini-split-sunroom.jpg";
import img3 from "@/assets/installs/baseboard-heater.jpg";

const photos = [
  { src: img1, alt: "GREE mini split cleanly installed in a basement bedroom" },
  { src: img2, alt: "GREE mini split installation in a sunroom" },
  { src: img3, alt: "New electric baseboard heater installed in a home" },
];

export function RecentInstallations() {
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
          {photos.map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt={p.alt}
              loading="lazy"
              width={800}
              height={600}
              className="aspect-square w-full rounded-lg object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
