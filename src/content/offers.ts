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
// Set activeSpecial to null when no promotion is running.
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

// Controls whether the mini splits page CTA points to /specials or /contact.
// Set to null to disable the special and revert to the generic quote form.
export const activeSpecial: Offer | null = currentOffer;
