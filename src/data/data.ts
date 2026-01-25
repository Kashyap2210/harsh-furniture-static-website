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

export interface IGalleryItem {
  category: string;
  title: string;
  description: string;
}

export const galleryItems: IGalleryItem[] = [
  {
    category: "beds",
    title: "Queen Size Bed",
    description: "Comfortable queen size bed with quality mattress",
  },
  {
    category: "beds",
    title: "Single Beds",
    description: "Single beds perfect for guest houses",
  },
  {
    category: "beds",
    title: "King Size Bed",
    description: "Spacious king size bed with premium mattress",
  },
  {
    category: "guest-house",
    title: "Guest Room Setup",
    description: "Complete guest room furniture package",
  },
  {
    category: "guest-house",
    title: "Multiple Room Furniture",
    description: "Bulk furniture for guest house rooms",
  },
  {
    category: "guest-house",
    title: "Wardrobe & Storage",
    description: "Storage solutions for guest accommodations",
  },
  {
    category: "office",
    title: "Executive Desk",
    description: "Professional office desk with storage",
  },
  {
    category: "office",
    title: "Office Chairs",
    description: "Ergonomic office chairs",
  },
  {
    category: "office",
    title: "Conference Table",
    description: "Large conference table for meetings",
  },
  {
    category: "event",
    title: "Banquet Chairs",
    description: "Elegant chairs for events and weddings",
  },
  {
    category: "event",
    title: "Dining Setup",
    description: "Complete dining arrangement for events",
  },
  {
    category: "event",
    title: "Lounge Furniture",
    description: "Comfortable seating for event spaces",
  },
  {
    category: "home",
    title: "Living Room Set",
    description: "Complete living room furniture",
  },
  {
    category: "home",
    title: "Dining Table Set",
    description: "Dining table with chairs",
  },
  {
    category: "home",
    title: "Bedroom Set",
    description: "Complete bedroom furniture package",
  },
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
