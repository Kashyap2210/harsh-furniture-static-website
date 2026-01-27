import aboutUs from "../../assets/gallery/AboutUs.jpeg";

export default function WhoWeAre() {
  return (
    <section className="section bg-pink-50">
      <div className="container">
        <div className="content-grid">
          <div className="content-text">
            <h2 className="content-heading text-black">Who We Are</h2>
            <p className="content-paragraph text-gray-800">
              Harsh Furniture Hirers is a professional furniture rental company
              serving Mumbai, Navi Mumbai, and Thane. We specialize in providing
              quality furniture on rent for guest houses, corporate offices,
              events, and temporary accommodation needs.
            </p>
            <p className="content-paragraph">
              With years of experience in the furniture rental industry, we
              understand the importance of reliability, quality, and competitive
              pricing.
            </p>
            <p className="content-paragraph">
              Our commitment to on-time delivery and professional service has
              made us a trusted name in the furniture rental business.
            </p>
          </div>

          <div className="content-image">
            <img
              src={aboutUs}
              alt="About us"
              className="border rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
