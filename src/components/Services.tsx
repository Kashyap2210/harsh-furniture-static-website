import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { perfectData } from "../data/data";
import { servicesV2 } from "../data/services";
import GenericButton from "./Button";

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Harsh Furniture Hirers offers comprehensive furniture rental services including beds, guest house furniture, office furniture, event furniture, home furniture, and appliances on rent in Mumbai."
        keywords="furniture rental services, beds on rent, office furniture rental, event furniture, guest house furniture, appliances on rent Mumbai"
      />

      <section className="page-hero bg-pink-50">
        <div className="container  bg-pink-50">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive furniture rental solutions for every need in Mumbai,
            Navi Mumbai, and Thane
          </p>
        </div>
      </section>

      <section className="section bg-pink-50">
        <div className="container bg-pink-50">
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

      <section className="section section-alt bg-pink-50">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Perfect For</h2>
          </div>

          <div className="perfect-for-grid">
            {perfectData.map((item) => (
              <div key={item.title} className="perfect-for-card cursor-pointer">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section  bg-pink-50">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Get a Quote Today</h2>
            <p className="cta-text">
              Contact us for competitive pricing and bulk rental discounts
            </p>
            <Link to="/contact">
              <GenericButton
                className="button button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
                label="Contact Us"
              ></GenericButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
