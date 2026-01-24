import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { areas, trustPoints } from "../data/data";
import { homeServices } from "../data/services";

export default function Home() {
  return (
    <>
      <SEO
        title="Furniture on Rent in Mumbai"
        description="Harsh Furniture Hirers offers quality furniture rental services in Mumbai, Navi Mumbai, and Thane. Beds, mattresses, office furniture, and event furniture available for rent at competitive prices."
        keywords="furniture on rent Mumbai, furniture rental Mumbai, beds on rent, guest house furniture, office furniture rental, event furniture Mumbai"
      />

      <section className="hero bg-pink-50">
        <div className="container ">
          <div className="hero-content">
            <h1 className="hero-title text-black">
              Furniture on Rent in Mumbai
            </h1>
            <p className="hero-subtitle  text-black">
              Quality beds, mattresses, office furniture, and event furniture
              available for rent. Perfect for guest houses, corporates, and
              temporary accommodation needs across Mumbai, Navi Mumbai, and
              Thane.
            </p>
            <div className="hero-cta">
              <a href="tel:+919876543210" className="button button-primary">
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi, I'm interested in furniture rental services"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Why Choose Harsh Furniture Hirers?
            </h2>
            <p className="section-subtitle">
              Your trusted partner for furniture rental in Mumbai
            </p>
          </div>
          <div className="trust-grid">
            {trustPoints.map((point, index) => (
              <div key={index} className="trust-card">
                <h3>{point}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive furniture rental solutions for every need
            </p>
          </div>
          <div className="services-grid">
            {homeServices.map((service, index) => (
              <div key={index} className="service-card cursor-pointer">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="button button-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Areas We Serve</h2>
            <p className="section-subtitle">
              Furniture rental services across Mumbai, Navi Mumbai, and Thane
            </p>
          </div>
          <div className="areas-grid">
            {areas.map((area, index) => (
              <div key={index} className="area-tag">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Rent Furniture?</h2>
            <p className="cta-text">
              Contact us today for competitive pricing and bulk availability
            </p>
            <div className="cta-buttons">
              <a href="tel:+919876543210" className="button button-light">
                Call +91 98765 43210
              </a>
              <Link to="/contact" className="button button-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
