import { phoneNumber } from "../../data/constants";
import GenericButton from "../generic-components/GenericButton";

export default function HomeHero() {
  return (
    <section className="hero bg-pink-50">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title text-slate-800">
            Furniture on Rent in Mumbai
          </h1>

          <p className="hero-subtitle text-black">
            Quality beds, mattresses, office furniture, and event furniture
            available for rent across Mumbai, Navi Mumbai, and Thane.
          </p>

          <div className="hero-cta">
            <a href={`tel:${phoneNumber}`}>
              <GenericButton
                label="Call Now"
                className="button button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
              />
            </a>

            <a
              href={`https://wa.me/+91${phoneNumber}?text=Hi, I'm interested in furniture rental services`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GenericButton
                label="WhatsApp Us"
                className="button button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
