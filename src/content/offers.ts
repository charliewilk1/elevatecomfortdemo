export type Offer = {
  id: string;
  title: string;
  price: string;
  priceSuffix?: string;
  supporting: string;
  fineprint: string;
  ctaPath: string;
};

// Swap this object to change the homepage offer.
export const currentOffer: Offer = {
  id: "mini-split-2399",
  title: "Mini Split Special",
  price: "$2,399",
  priceSuffix: "Installed",
  supporting:
    "Stay cool this summer with a professional 9/12k BTU mini split installation.",
  fineprint: "Request a quote to confirm details and availability.",
  ctaPath: "/specials",
};
