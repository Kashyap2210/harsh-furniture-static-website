import { phoneNumber } from "../../data/constants";
import GenericButton from "../generic-components/GenericButton";

export default function GalleryCTA() {
  return (
    <section className="section section-alt bg-pink-50 pt-8 pb-16">
      <div className="container">
        <div className="gallery-note">
          <h2>Want to See More?</h2>
          <p>
            Contact us to schedule a visit to our showroom or request specific
            furniture images. We have a large inventory of furniture available
            for immediate rental.
          </p>

          <div className="gallery-note-cta">
            <a
              href={`https://wa.me/+91${phoneNumber}?text=Hi, I'm interested in furniture rental services`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GenericButton
                className="button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
                label="Whatsapp"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
