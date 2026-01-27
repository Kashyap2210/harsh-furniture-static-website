import { galleryItems } from "../../data/gallery";

interface GalleryGridProps {
  selectedCategory: string;
}

export default function GalleryGrid({ selectedCategory }: GalleryGridProps) {
  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="section py-3rem bg-pink-50">
      <div className="container">
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div key={index} className="gallery-item">
              {item.importPath ? (
                <img
                  src={item.importPath}
                  alt={item.title}
                  className="image-cover"
                />
              ) : (
                <div className="gallery-image-placeholder">
                  <div className="gallery-image-icon">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                </div>
              )}

              <div className="gallery-item-content">
                <h3 className="gallery-item-title">{item.title}</h3>
                <p className="gallery-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
