import { useState } from "react";
import SEO from "../components/SEO";
import { phoneNumber } from "../data/constants";
import { categories, galleryItems } from "../data/data";
import GenericButton from "./generic-components/GenericButton";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <SEO
        title="Gallery"
        description="View our extensive collection of furniture available for rent in Mumbai. Browse beds, office furniture, event furniture, and more."
        keywords="furniture gallery, rental furniture Mumbai, beds on rent, office furniture images"
      />

      <section className="page-hero bg-pink-50">
        <div className="container">
          <h1 className="page-title">Our Furniture Gallery</h1>
          <p className="page-subtitle">
            Explore our wide range of quality furniture available for rent
          </p>
        </div>
      </section>

      <section className="section py-3rem bg-pink-50">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((category) => (
              <GenericButton
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                label={category.name}
                className={`button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition ${
                  selectedCategory === category.id
                    ? "gallery-filter-btn-active"
                    : ""
                }`}
              />
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div key={index} className="gallery-item">
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
                <div className="gallery-item-content">
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt bg-pink-50 pt-8 pb-16">
        <div className="container">
          <div className="gallery-note">
            <h2>Want to See More?</h2>
            <p>
              Contact us to schedule a visit to our showroom or request specific
              furniture images. We have a large inventory of furniture available
              for immediate rental.
            </p>
            <div className="gallery-note-cta">
              <a
                href={`https://wa.me/${phoneNumber}?text=Hi, I'm interested in furniture rental services`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GenericButton
                  className="button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
                  label="Whatsapp"
                ></GenericButton>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
