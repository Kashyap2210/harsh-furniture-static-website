import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import aboutUs from "../../assets/gallery/AboutUs.jpeg";
import { values } from "../../data/data";
import SEO from "../SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Harsh Furniture Hirers is a trusted furniture rental company in Mumbai. We specialize in bulk furniture rental for guest houses, offices, events, and homes."
        keywords="furniture rental Mumbai, about Harsh Furniture Hirers, furniture hire company"
      />

      <section className="page-hero bg-pink-50">
        <div className="container">
          <h1 className="page-title">About Harsh Furniture Hirers</h1>
          <p className="page-subtitle">
            Your trusted partner for quality furniture rental in Mumbai, Navi
            Mumbai, and Thane
          </p>
        </div>
      </section>

      <section className="section bg-pink-50">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="content-heading text-black">Who We Are</h2>
              <p className="content-paragraph text-gray-800">
                Harsh Furniture Hirers is a professional furniture rental
                company serving Mumbai, Navi Mumbai, and Thane. We specialize in
                providing quality furniture on rent for guest houses, corporate
                offices, events, and temporary accommodation needs.
              </p>
              <p className="content-paragraph">
                With years of experience in the furniture rental industry, we
                understand the importance of reliability, quality, and
                competitive pricing. Our extensive inventory includes beds,
                mattresses, office furniture, event furniture, and household
                appliances, all available for rent in bulk quantities.
              </p>
              <p className="content-paragraph">
                We have successfully served numerous guest house owners,
                corporate offices, event planners, and families across Mumbai.
                Our commitment to on-time delivery and professional service has
                made us a trusted name in the furniture rental business.
              </p>
            </div>
            <div className="content-image">
              <div className="image-placeholder">
                <img src={aboutUs} alt="" className="border rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt bg-pink-50">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Our commitment to quality and service excellence
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-item">
                <CheckCircle2 size={24} className="value-icon" />
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-pink-50">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Expertise</h2>
          </div>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Guest House Solutions</h3>
              <p>
                We provide complete furniture solutions for guest houses,
                including beds, mattresses, wardrobes, and dining furniture. Our
                bulk rental options make it easy to furnish multiple rooms at
                competitive prices.
              </p>
            </div>
            <div className="expertise-card">
              <h3>Corporate Offices</h3>
              <p>
                Professional office furniture rental for corporates setting up
                new offices or temporary workspaces. We offer desks, chairs,
                conference tables, and storage solutions suitable for modern
                office environments.
              </p>
            </div>
            <div className="expertise-card">
              <h3>Events & Weddings</h3>
              <p>
                Event furniture rental for weddings, banquets, conferences, and
                special occasions. Our inventory includes chairs, tables, sofas,
                and other furniture needed to create comfortable event spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section bg-pink-50">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title text-black">Let's Work Together</h2>
            <p className="cta-text ">
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
    </>
  );
}
