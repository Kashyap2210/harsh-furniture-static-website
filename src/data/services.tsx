import {
  Bed,
  Briefcase,
  Building2,
  Calendar,
  Home,
  Sofa,
  Sparkles,
  Zap,
} from "lucide-react";

export interface IHomeService {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const homeServices: IHomeService[] = [
  {
    icon: <Bed size={40} />,
    title: "Beds & Mattresses",
    description:
      "Quality beds and mattresses available for rent in bulk quantities",
  },
  {
    icon: <Building2 size={40} />,
    title: "Guest House Furniture",
    description:
      "Complete furniture solutions for guest houses and accommodations",
  },
  {
    icon: <Briefcase size={40} />,
    title: "Office Furniture",
    description: "Professional office furniture rental for corporates",
  },
  {
    icon: <Calendar size={40} />,
    title: "Event Furniture",
    description: "Furniture rental for weddings, events, and banquets",
  },
  {
    icon: <Sofa size={40} />,
    title: "Home Furniture",
    description: "Temporary furniture solutions for homes and families",
  },
  {
    icon: <Sparkles size={40} />,
    title: "Appliances",
    description: "Washing machines, coolers, and other appliances on rent",
  },
];

export interface IService extends IHomeService {
  features: string[];
}

export const servicesV2: IService[] = [
  {
    icon: <Bed size={48} />,
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
    icon: <Building2 size={48} />,
    title: "Guest House Furniture on Rent",
    description:
      "Complete furniture solutions for guest houses and paying guest accommodations. We provide everything needed to furnish multiple rooms, from beds and wardrobes to dining furniture and living room sets.",
    features: [
      "Complete room furniture packages",
      "Beds, mattresses, and wardrobes",
      "Dining tables and chairs",
      "Living room furniture",
      "Bulk rental discounts available",
    ],
  },
  {
    icon: <Briefcase size={48} />,
    title: "Office Furniture on Rent",
    description:
      "Professional office furniture rental for corporate offices, startups, and temporary workspaces. Our inventory includes desks, chairs, conference tables, and storage solutions suitable for modern office environments.",
    features: [
      "Executive desks and workstations",
      "Ergonomic office chairs",
      "Conference and meeting tables",
      "Storage cabinets and shelves",
      "Reception area furniture",
    ],
  },
  {
    icon: <Calendar size={48} />,
    title: "Event & Banquet Furniture on Rent",
    description:
      "Furniture rental for weddings, events, conferences, and banquets. We provide chairs, tables, sofas, and decorative furniture to create comfortable and elegant event spaces for any occasion.",
    features: [
      "Banquet chairs and tables",
      "Sofa sets and lounge furniture",
      "Stage and backdrop furniture",
      "Dining arrangements",
      "Delivery, setup, and pickup included",
    ],
  },
  {
    icon: <Home size={48} />,
    title: "Home Furniture on Rent",
    description:
      "Temporary furniture solutions for homes and families. Whether you are relocating, waiting for your permanent furniture, or need furniture for a short stay, we offer complete home furniture packages.",
    features: [
      "Living room furniture sets",
      "Bedroom furniture packages",
      "Dining table and chairs",
      "Kitchen essentials",
      "Short and long-term rental options",
    ],
  },
  {
    icon: <Zap size={48} />,
    title: "Appliances on Rent",
    description:
      "Household appliances available for rent, including washing machines, air coolers, refrigerators, and more. Ideal for temporary accommodations, guest houses, and rental properties.",
    features: [
      "Washing machines - semi and fully automatic",
      "Air coolers and desert coolers",
      "Refrigerators",
      "Water purifiers",
      "Well-maintained and serviced regularly",
    ],
  },
];
