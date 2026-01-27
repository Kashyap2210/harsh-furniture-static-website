import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="cta-section bg-pink-50">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title text-black">Let's Work Together</h2>
          <p className="cta-text">
            Contact us to discuss your furniture rental requirements
          </p>

          <div className="cta-buttons">
            <Link
              to="/contact"
              className="button bg-rose-700 button-light text-white"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="button button-light text-white bg-rose-700"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
