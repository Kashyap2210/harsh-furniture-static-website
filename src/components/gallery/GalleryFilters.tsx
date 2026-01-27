import { categories } from "../../data/data";
import GenericButton from "../generic-components/GenericButton";

interface GalleryFiltersProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export default function GalleryFilters({
  selectedCategory,
  onSelectCategory,
}: GalleryFiltersProps) {
  return (
    <section className="section py-3rem bg-pink-50">
      <div className="container">
        <div className="gallery-filters">
          {categories.map((category) => (
            <GenericButton
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              label={category.name}
              className={`button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition ${
                selectedCategory === category.id
                  ? "gallery-filter-btn-active"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
