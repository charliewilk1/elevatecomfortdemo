export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
};

export const services: Service[] = [
  {
    slug: "mini-splits",
    title: "Mini Split Installation & Service",
    short: "Ductless comfort for any room — installed clean, working quiet.",
    long: "Mini splits are our main thing. Whether you need one zone in a hot bedroom or multiple zones throughout the home, we handle the full install — unit, line set, electrical connection, and walkthrough. We also service and repair existing systems of any brand.",
  },
  {
    slug: "central-ac",
    title: "Central Air Conditioning",
    short: "Central AC installation, repair, and seasonal service.",
    long: "We install and service central AC systems for whole-home cooling. That includes sizing the system correctly for your space, replacing aging units, and diagnosing and repairing systems that aren't keeping up.",
  },
  {
    slug: "furnace",
    title: "Furnace Installation & Service",
    short: "Gas and oil furnace installs, tune-ups, and repairs.",
    long: "A properly installed furnace runs efficiently and lasts. We handle new furnace installations, annual tune-ups before heating season, and diagnostics and repairs when something isn't right.",
  },
  {
    slug: "electric-heating",
    title: "Electric Central Heating",
    short: "Electric central heating systems installed and serviced.",
    long: "For homes without gas, electric central heating is a reliable option. We install and service electric air handlers and heating systems, keeping your home warm through the winter without relying on fuel delivery.",
  },
  {
    slug: "baseboard-heating",
    title: "Baseboard Heating",
    short: "Electric baseboard heater installation and service.",
    long: "Baseboard heaters are simple, zone-based, and reliable when installed correctly. We install new units, replace aging ones, and troubleshoot systems that aren't heating evenly.",
  },
  {
    slug: "wall-unit-removal",
    title: "Through-Wall Unit Removal & Restoration",
    short: "Old sleeve units removed — wall patched, insulated, and finished.",
    long: "Old through-wall AC sleeve units leave a hole in your exterior wall. We remove the unit and sleeve, properly insulate the cavity, and restore the wall on both sides — sheetrocking and patching the interior, and patching or installing new siding on the exterior. Clean finish, no trace it was there.",
  },
];
