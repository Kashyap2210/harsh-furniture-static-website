import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { phoneNumber } from "../data/constants";
import { areas, trustPoints } from "../data/data";
import { homeServices } from "../data/services";
import GenericButton from "./generic-components/GenericButton";
import GenericIcon from "./generic-components/GenericIcon";

export default function Home() {
  return (
    <>
      <SEO
        title="Furniture on Rent in Mumbai"
        description="Harsh Furniture Hirers offers quality furniture rental services in Mumbai, Navi Mumbai, and Thane. Beds, mattresses, office furniture, and event furniture available for rent at competitive prices."
        keywords="furniture on rent Mumbai, furniture rental Mumbai, beds on rent, guest house furniture, office furniture rental, event furniture Mumbai"
      />

      <section className="hero bg-pink-50">
        <div className="container ">
          <div className="hero-content">
            <h1 className="hero-title text-slate-800">
              Furniture on Rent in Mumbai
            </h1>
            <p className="hero-subtitle  text-black">
              Quality beds, mattresses, office furniture, and event furniture
              available for rent. Perfect for guest houses, corporates, and
              temporary accommodation needs across Mumbai, Navi Mumbai, and
              Thane.
            </p>
            <div className="hero-cta">
              <a href={`tel:${phoneNumber}`}>
                <GenericButton
                  label={"Call Now"}
                  className="button button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
                  // onClick={() => {
                  //   console.log(phoneNumber);
                  // }}
                ></GenericButton>
              </a>
              <a
                href={`https://wa.me/+91${phoneNumber}?text=Hi, I'm interested in furniture rental services`}
                target="_blank"
                rel="noopener noreferrer"
                // className="button button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
              >
                <GenericButton
                  label={"WhatsApp Us"}
                  className="button button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
                  // onClick={() => {
                  //   console.log(phoneNumber);
                  // }}
                ></GenericButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-pink-50">
        <div className="container bg-pink-50">
          <div className="section-header">
            <h2 className="section-title">
              Why Choose Harsh Furniture Hirers?
            </h2>
            <p className="section-subtitle">
              Your trusted partner for furniture rental in Mumbai
            </p>
          </div>
          <div className="trust-grid">
            {trustPoints.map((point, index) => (
              <div key={index} className="trust-card">
                <h3>{point}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                <GenericIcon
                  icon={service.icon}
                  className=" service-icon icon"
                ></GenericIcon>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services">
              <GenericButton
                className="button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
                label="View All Services"
              ></GenericButton>
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-pink-50">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Areas We Serve</h2>
            <p className="section-subtitle">
              Furniture rental services across Mumbai, Navi Mumbai, and Thane
            </p>
          </div>
          <div className="areas-grid">
            {areas.map((area, index) => (
              <GenericButton
                key={index}
                className="button button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
                label={area}
              ></GenericButton>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-700 to-rose-800 text-white py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Rent Furniture?
            </h2>

            <p className="text-pink-100 text-lg mb-8">
              Contact us today for competitive pricing and bulk availability
            </p>
            <div className="cta-buttons">
              <a href={`tel:${phoneNumber}`}>
                <GenericButton
                  className="button button-light bg-gray-50 text-rose-700 font-semibold px-6 py-3 rounded-xl transition"
                  label={`Call Now`}
                ></GenericButton>
              </a>
              <Link to="/contact">
                <GenericButton
                  className="button button-light bg-gray-50 text-rose-700 font-semibold px-6 py-3 rounded-xl transition"
                  label="Get in Touch"
                ></GenericButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
