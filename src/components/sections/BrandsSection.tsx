import greeLogo from "@/assets/brands/gree.png";
import daikinLogo from "@/assets/brands/daikin.png";
import mitsubishiLogo from "@/assets/brands/mitsubishi.png";
import tclLogo from "@/assets/brands/tcl.svg";

const brands = [
  { name: "GREE",              logo: greeLogo,        size: "h-28 w-[22rem] sm:h-32 sm:w-[26rem]" },
  { name: "Daikin",            logo: daikinLogo,      size: "h-12 w-36 sm:h-14 sm:w-44" },
  { name: "Mitsubishi Electric", logo: mitsubishiLogo, size: "h-28 w-[22rem] sm:h-32 sm:w-[26rem]" },
  { name: "TCL",               logo: tclLogo,         size: "h-12 w-36 sm:h-14 sm:w-44" },
];

export function BrandsSection() {
  return (
    <section className="border-y border-border py-10">
      <div className="container-page">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-navy/40">
          Brands We Work With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
          {brands.map((b) => (
            <div key={b.name} className={`flex items-center justify-center ${b.size}`}>
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                loading="lazy"
                width={240}
                height={80}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
