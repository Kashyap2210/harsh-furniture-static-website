import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { servicesV2 } from "../data/services";

export default function Services() {
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
            {servicesV2.map((service, index) => (
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
