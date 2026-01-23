import { useState } from "react";
import SEO from "../components/SEO";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "beds", name: "Beds & Mattresses" },
    { id: "guest-house", name: "Guest House" },
    { id: "office", name: "Office" },
    { id: "event", name: "Events" },
    { id: "home", name: "Home" },
  ];

  const galleryItems = [
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

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Furniture Gallery</h1>
          <p className="page-subtitle">
            Explore our wide range of quality furniture available for rent
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`gallery-filter-btn ${
                  selectedCategory === category.id
                    ? "gallery-filter-btn-active"
                    : ""
                }`}
              >
                {category.name}
              </button>
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

      <section className="section section-alt">
        <div className="container">
          <div className="gallery-note">
            <h2>Want to See More?</h2>
            <p>
              Contact us to schedule a visit to our showroom or request specific
              furniture images. We have a large inventory of furniture available
              for immediate rental.
            </p>
            <div className="gallery-note-cta">
              <a href="tel:+919876543210" className="button button-primary">
                Call Us
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi, I'd like to see more furniture options"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
