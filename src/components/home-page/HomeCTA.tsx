import { Link } from "react-router-dom";
import CallNow from "../CallNow";
import GenericButton from "../generic-components/GenericButton";

export default function HomeCTA() {
  return (
    <section className="bg-gradient-to-r from-pink-700 to-rose-800 text-white py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Rent Furniture?
          </h2>

          <p className="text-pink-100 text-lg mb-8">
            Contact us today for competitive pricing and bulk availability
          </p>

          <div className="cta-buttons">
            <CallNow className="button button-light bg-gray-50 text-rose-700 font-semibold px-6 py-3 rounded-xl transition" />

            <Link to="/contact">
              <GenericButton
                label="Get in Touch"
                className="button button-light bg-gray-50 text-rose-700 font-semibold px-6 py-3 rounded-xl transition"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
