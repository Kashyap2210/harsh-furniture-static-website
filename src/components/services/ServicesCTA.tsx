import { Link } from "react-router-dom";
import GenericButton from "../generic-components/GenericButton";

export default function ServicesCTA() {
  return (
    <section className="cta-section bg-pink-50">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Get a Quote Today</h2>
          <p className="cta-text">
            Contact us for competitive pricing and bulk rental discounts
          </p>

          <Link to="/contact">
            <GenericButton
              label="Contact Us"
              className="button button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
