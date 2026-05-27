import { Snowflake, Flame, Wind, Wrench, ShieldCheck } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: typeof Snowflake;
};

export const services: Service[] = [
  {
    slug: "air-conditioning",
    title: "Air Conditioning",
    short: "Installation, repair, and maintenance to keep you cool all summer.",
    long: "We install, service, and repair central AC and ductless systems sized correctly for your space — no upsells you don't need.",
    icon: Snowflake,
  },
  {
    slug: "heating",
    title: "Heating",
    short: "Reliable heating service to keep your home warm in winter.",
    long: "Heat pump and heating tune-ups, repairs, and installs that keep your system running through the coldest months.",
    icon: Flame,
  },
  {
    slug: "mini-splits",
    title: "Mini Splits",
    short: "Ductless comfort with flexible, efficient installation options.",
    long: "Single-room and whole-home ductless mini split installs for bedrooms, additions, garages, and offices.",
    icon: Wind,
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    short: "Tune-ups that keep your system efficient and extend its life.",
    long: "Routine cleanings, filter changes, refrigerant checks, and a written summary of anything that needs attention.",
    icon: Wrench,
  },
  {
    slug: "repairs",
    title: "Repairs",
    short: "Honest diagnostics and repairs when your system isn't keeping up.",
    long: "We diagnose the issue, walk you through your options, and only do the work you approve.",
    icon: ShieldCheck,
  },
];
