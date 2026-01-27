import WhatsAppButton from "../Whatsapp";

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
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
}
