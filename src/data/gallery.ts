import ConferenceTable from "../assets/gallery/Conference_Table.jpg";
import DiningTableSet from "../assets/gallery/Dining_Table_Set.jpg";
import ExecutiveDesk from "../assets/gallery/executive_desk.jpg";
import KingSizeBed from "../assets/gallery/king_size_bed.jpg";
import LivingRoomSet from "../assets/gallery/living_room_set.jpg";
import OfficeChairs from "../assets/gallery/Office_Chairs.jpg";
import QueenSizeBed from "../assets/gallery/queen_size_bed.jpg";
import SingleBed from "../assets/gallery/single_bed.jpg";
import WardrobeStorage from "../assets/gallery/Wardrobe_Storage.jpg";

export interface IGalleryItem {
  category: string;
  title: string;
  description: string;
  importPath: string;
}

export const galleryItems: IGalleryItem[] = [
  // ===== BEDS =====
  {
    category: "beds",
    title: "Queen Size Bed",
    description: "Comfortable queen size bed with quality mattress",
    importPath: QueenSizeBed,
  },
  {
    category: "beds",
    title: "Single Beds",
    description: "Single beds perfect for guest houses",
    importPath: SingleBed,
  },
  {
    category: "beds",
    title: "King Size Bed",
    description: "Spacious king size bed with premium mattress",
    importPath: KingSizeBed,
  },

  // ===== GUEST HOUSE =====
  //   {
  //     category: "guest-house",
  //     title: "Guest Room Setup",
  //     description: "Complete guest room furniture package",
  //   },
  //   {
  //     category: "guest-house",
  //     title: "Multiple Room Furniture",
  //     description: "Bulk furniture for guest house rooms",
  //   },
  {
    category: "guest-house",
    title: "Wardrobe & Storage",
    description: "Storage solutions for guest accommodations",
    importPath: WardrobeStorage,
  },

  // ===== OFFICE =====
  {
    category: "office",
    title: "Executive Desk",
    description: "Professional office desk with storage",
    importPath: ExecutiveDesk,
  },
  {
    category: "office",
    title: "Office Chairs",
    description: "Ergonomic office chairs",
    importPath: OfficeChairs,
  },
  {
    category: "office",
    title: "Conference Table",
    description: "Large conference table for meetings",
    importPath: ConferenceTable,
  },

  // ===== EVENT =====
  //   {
  //     category: "event",
  //     title: "Banquet Chairs",
  //     description: "Elegant chairs for events and weddings",
  //   },
  //   {
  //     category: "event",
  //     title: "Dining Setup",
  //     description: "Complete dining arrangement for events",
  //   },
  //   {
  //     category: "event",
  //     title: "Lounge Furniture",
  //     description: "Comfortable seating for event spaces",
  //   },

  // ===== HOME =====
  {
    category: "home",
    title: "Living Room Set",
    description: "Complete living room furniture",
    importPath: LivingRoomSet,
  },
  {
    category: "home",
    title: "Dining Table Set",
    description: "Dining table with chairs",
    importPath: DiningTableSet,
  },
  //   {
  //     category: "home",
  //     title: "Bedroom Set",
  //     description: "Complete bedroom furniture package",
  //   },
];
