import {
  Bed,
  Briefcase,
  Building2,
  Calendar,
  Home,
  Sofa,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface IHomeService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const homeServices: IHomeService[] = [
  {
    icon: Bed,
    title: "Beds & Mattresses",
    description:
      "Quality beds and mattresses available for rent in bulk quantities",
  },
  {
    icon: Building2,
    title: "Guest House Furniture",
    description:
      "Complete furniture solutions for guest houses and accommodations",
  },
  {
    icon: Briefcase,
    title: "Office Furniture",
    description: "Professional office furniture rental for corporates",
  },
  {
    icon: Calendar,
    title: "Event Furniture",
    description: "Furniture rental for weddings, events, and banquets",
  },
  {
    icon: Sofa,
    title: "Home Furniture",
    description: "Temporary furniture solutions for homes and families",
  },
  {
    icon: Sparkles,
    title: "Appliances",
    description: "Washing machines, coolers, and other appliances on rent",
  },
];

export interface IService extends IHomeService {
  features: string[];
}

export const servicesV2: IService[] = [
  {
    icon: Bed,
    title: "Beds & Mattresses on Rent",
    description:
      "High-quality beds and mattresses available for rent in bulk quantities. Perfect for guest houses, hostels, and staff accommodations. We offer single beds, double beds, queen size, and king size options with comfortable mattresses.",
    features: [
      "Single, double, queen, and king size beds",
      "Comfortable mattresses with quality foam",
      "Bulk availability for guest houses",
      "Flexible rental periods",
      "Clean and well-maintained",
    ],
  },
  {
    icon: Building2,
    title: "Guest House Furniture on Rent",
    description:
      "Complete furniture solutions for guest houses and paying guest accommodations.",
    features: [
      "Complete room furniture packages",
      "Beds, mattresses, and wardrobes",
      "Dining tables and chairs",
      "Living room furniture",
      "Bulk rental discounts available",
    ],
  },
  {
    icon: Briefcase,
    title: "Office Furniture on Rent",
    description:
      "Professional office furniture rental for corporate offices and startups.",
    features: [
      "Executive desks and workstations",
      "Ergonomic office chairs",
      "Conference and meeting tables",
      "Storage cabinets and shelves",
      "Reception area furniture",
    ],
  },
  {
    icon: Calendar,
    title: "Event & Banquet Furniture on Rent",
    description:
      "Furniture rental for weddings, events, conferences, and banquets.",
    features: [
      "Banquet chairs and tables",
      "Sofa sets and lounge furniture",
      "Stage and backdrop furniture",
      "Dining arrangements",
      "Delivery, setup, and pickup included",
    ],
  },
  {
    icon: Home,
    title: "Home Furniture on Rent",
    description: "Temporary furniture solutions for homes and families.",
    features: [
      "Living room furniture sets",
      "Bedroom furniture packages",
      "Dining table and chairs",
      "Kitchen essentials",
      "Short and long-term rental options",
    ],
  },
  {
    icon: Zap,
    title: "Appliances on Rent",
    description: "Household appliances available for rent.",
    features: [
      "Washing machines",
      "Air coolers",
      "Refrigerators",
      "Water purifiers",
      "Well-maintained and serviced regularly",
    ],
  },
];
