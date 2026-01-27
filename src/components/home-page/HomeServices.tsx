import { Link } from "react-router-dom";
import { homeServices } from "../../data/services";
import GenericButton from "../generic-components/GenericButton";
import GenericIcon from "../generic-components/GenericIcon";

export default function HomeServices() {
  return (
    <section className="section section-alt bg-pink-50">
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
              <GenericIcon icon={service.icon} className="service-icon icon" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/services">
            <GenericButton
              label="View All Services"
              className="button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
