import { Bed, Briefcase, Building2, Calendar, Home, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Services() {
  const services = [
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

  return (
    <>
      <SEO
        title="Our Services"
        description="Harsh Furniture Hirers offers comprehensive furniture rental services including beds, guest house furniture, office furniture, event furniture, home furniture, and appliances on rent in Mumbai."
        keywords="furniture rental services, beds on rent, office furniture rental, event furniture, guest house furniture, appliances on rent Mumbai"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive furniture rental solutions for every need in Mumbai,
            Navi Mumbai, and Thane
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-detail-grid">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card">
                <div className="service-detail-header">
                  <div className="service-detail-icon">{service.icon}</div>
                  <h2 className="service-detail-title">{service.title}</h2>
                </div>
                <p className="service-detail-description">
                  {service.description}
                </p>
                <ul className="service-detail-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Perfect For</h2>
          </div>
          <div className="perfect-for-grid">
            <div className="perfect-for-card">
              <h3>Guest House Owners</h3>
              <p>
                Bulk furniture rental for multiple rooms at competitive prices
              </p>
            </div>
            <div className="perfect-for-card">
              <h3>Corporate Offices</h3>
              <p>Professional office furniture for new setups and expansions</p>
            </div>
            <div className="perfect-for-card">
              <h3>Event Planners</h3>
              <p>Complete event furniture solutions with delivery and setup</p>
            </div>
            <div className="perfect-for-card">
              <h3>Wedding Planners</h3>
              <p>Elegant furniture for weddings and banquets</p>
            </div>
            <div className="perfect-for-card">
              <h3>Families</h3>
              <p>Temporary furniture for relocations and short stays</p>
            </div>
            <div className="perfect-for-card">
              <h3>Staff Accommodations</h3>
              <p>Cost-effective furniture for employee housing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Get a Quote Today</h2>
            <p className="cta-text">
              Contact us for competitive pricing and bulk rental discounts
            </p>
            <div className="cta-buttons">
              <a href="tel:+919876543210" className="button button-light">
                Call +91 98765 43210
              </a>
              <Link to="/contact" className="button button-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
