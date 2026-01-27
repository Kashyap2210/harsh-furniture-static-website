import { useState } from "react";
import SEO from "../SEO";
import GalleryCTA from "./GalleryCTA";
import GalleryFilters from "./GalleryFilters";
import GalleryGrid from "./GalleryGrid";
import GalleryHero from "./GalleryHero";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <SEO
        title="Gallery"
        description="View our extensive collection of furniture available for rent in Mumbai. Browse beds, office furniture, event furniture, and more."
        keywords="furniture gallery, rental furniture Mumbai, beds on rent, office furniture images"
      />

      <GalleryHero />
      <GalleryFilters
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <GalleryGrid selectedCategory={selectedCategory} />
      <GalleryCTA />
    </>
  );
}
