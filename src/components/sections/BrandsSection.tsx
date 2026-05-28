import greeLogo from "@/assets/brands/gree.png";
import daikinLogo from "@/assets/brands/daikin.png";
import mitsubishiLogo from "@/assets/brands/mitsubishi.png";
import tclLogo from "@/assets/brands/tcl.svg";

const brands = [
  { name: "GREE",               logo: greeLogo,        imgClass: "scale-[2]" },
  { name: "Daikin",             logo: daikinLogo,      imgClass: "" },
  { name: "Mitsubishi Electric", logo: mitsubishiLogo, imgClass: "scale-[2]" },
  { name: "TCL",                logo: tclLogo,         imgClass: "" },
];

export function BrandsSection() {
  return (
    <section className="border-y border-border py-10">
      <div className="container-page">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-navy/40">
          Brands We Work With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-16 sm:gap-20">
          {brands.map((b) => (
            <div key={b.name} className="flex h-14 w-36 items-center justify-center overflow-hidden sm:h-16 sm:w-44">
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                loading="lazy"
                width={240}
                height={80}
                className={`max-h-full max-w-full object-contain ${b.imgClass}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
