import greeLogo from "@/assets/brands/gree.png";

// Only confirmed brands. Add more here when the business confirms them.
const brands = [{ name: "GREE", logo: greeLogo }];

export function BrandsSection() {
  return (
    <section className="py-10">
      <div className="container-page flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-10">
        <p className="text-sm font-bold uppercase tracking-widest text-navy/50">
          Official GREE Installer
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {brands.map((b) => (
            <img
              key={b.name}
              src={b.logo}
              alt={`${b.name} logo`}
              loading="lazy"
              width={240}
              height={80}
              className="h-10 w-auto object-contain opacity-80 sm:h-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
