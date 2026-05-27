import greeLogo from "@/assets/brands/gree.png";

// Only confirmed brands. Add more here when the business confirms them.
const brands = [{ name: "GREE", logo: greeLogo }];

export function BrandsSection() {
  return (
    <section className="section-y border-y border-border bg-ice/40">
      <div className="container-page">
        <p className="text-center text-base font-semibold text-navy">
          Featuring reliable mini split systems from trusted brands.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-10">
          {brands.map((b) => (
            <img
              key={b.name}
              src={b.logo}
              alt={`${b.name} logo`}
              loading="lazy"
              width={240}
              height={80}
              className="h-12 w-auto object-contain sm:h-14 [mix-blend-mode:multiply]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
