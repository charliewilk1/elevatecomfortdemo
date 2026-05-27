import { Link } from "@tanstack/react-router";
import { services } from "@/content/services";
import miniSplitImg from "@/assets/installs/mini-split-wall.jpg";
import acImg from "@/assets/installs/outdoor-condenser.jpg";
import heatingImg from "@/assets/installs/bedroom-install.jpg";
import heroImg from "@/assets/hero-image.jpg";

const photoMap: Record<string, string> = {
  "mini-splits": miniSplitImg,
  "air-conditioning": acImg,
  "heating": heatingImg,
  "maintenance": heroImg,
  "repairs": acImg,
};

export function ServicesPreview() {
  const [featured, ...rest] = services;

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

        {/* Featured card full-width on mobile/tablet, spans 2 cols on desktop */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard service={featured} className="sm:col-span-2 lg:col-span-2 lg:row-span-2" tall />
          {rest.map((s) => (
            <ServiceCard key={s.slug} service={s} />
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
}: {
  service: (typeof services)[number];
  className?: string;
  tall?: boolean;
}) {
  const photo = photoMap[service.slug] ?? heroImg;

  return (
    <Link
      to="/contact"
      className={`group relative overflow-hidden rounded-xl ${tall ? "aspect-[4/3] lg:aspect-auto lg:min-h-[28rem]" : "aspect-[4/3]"} ${className}`}
      aria-label={`Request a quote for ${service.title}`}
    >
      {/* Photo */}
      <img
        src={photo}
        alt={service.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <h3 className={`font-bold text-white ${tall ? "text-2xl sm:text-3xl" : "text-lg"}`}>
          {service.title}
        </h3>
        <p className={`mt-1 text-white/70 ${tall ? "text-base" : "text-sm"}`}>
          {service.short}
        </p>
        <p className="mt-3 text-xs font-bold uppercase tracking-wider text-orange opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Request a Quote →
        </p>
      </div>
    </Link>
  );
}
