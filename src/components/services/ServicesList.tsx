import { servicesV2 } from "../../data/services";
import GenericIcon from "../generic-components/GenericIcon";

export default function ServicesList() {
  return (
    <section className="section bg-pink-50">
      <div className="container bg-pink-50">
        <div className="services-detail-grid">
          {servicesV2.map((service, index) => (
            <div key={index} className="service-detail-card">
              <div className="service-detail-header">
                <GenericIcon
                  icon={service.icon}
                  className="service-detail-icon icon"
                />
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
  );
}
