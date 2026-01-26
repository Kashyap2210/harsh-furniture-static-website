

export const trustPoints = [
  "Bulk Availability",
  "Competitive Pricing",
  "On-Time Delivery",
  "Quality Furniture",
  "Flexible Rental Terms",
  "Professional Service",
];

export const areas = [
  "Mumbai",
  "Navi Mumbai",
  "Thane",
  "Andheri",
  "Powai",
  "Vashi",
  "Kharghar",
  "Panvel",
  "Borivali",
  "Mulund",
  "Ghatkopar",
  "Kurla",
];

export interface ICategory {
  id: string;
  name: string;
}

export const categories: ICategory[] = [
  { id: "all", name: "All" },
  { id: "beds", name: "Beds & Mattresses" },
  { id: "guest-house", name: "Guest House" },
  { id: "office", name: "Office" },
  { id: "event", name: "Events" },
  { id: "home", name: "Home" },
];


export interface INavLink {
  name: string;
  path: string;
}

export const navLinks: INavLink[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export interface IPerfectFor {
  title: string;
  description: string;
}

export const perfectData: IPerfectFor[] = [
  {
    title: "Guest House Owners",
    description:
      "Bulk furniture rental for multiple rooms at competitive prices",
  },
  {
    title: "Corporate Offices",
    description: "Professional office furniture for new setups and expansions",
  },
  {
    title: "Event Planners",
    description: "Complete event furniture solutions with delivery and setup",
  },
  {
    title: "Wedding Planners",
    description: "Elegant furniture for weddings and banquets",
  },
  {
    title: "Families",
    description: "Temporary furniture for relocations and short stays",
  },
  {
    title: "Staff Accommodations",
    description: "Cost-effective furniture for employee housing",
  },
];

export const values = [
  "Quality furniture in bulk quantities",
  "Competitive and transparent pricing",
  "On-time delivery and pickup",
  "Reliable customer service",
  "Flexible rental periods",
  "Well-maintained inventory",
];
