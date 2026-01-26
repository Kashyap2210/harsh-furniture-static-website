import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SEO from "../components/SEO";
import { emailId, phoneNumber } from "../data/constants";
import { areas } from "../data/data";
import GenericButton from "./GenericButton";
import GenericIcon from "./GenericIcon";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description={`Contact Harsh Furniture Hirers for furniture rental in Mumbai, Navi Mumbai, and Thane. Call ${phoneNumber} or WhatsApp us for bulk furniture rental quotes.`}
        keywords="contact furniture rental Mumbai, furniture hire contact, Harsh Furniture Hirers contact"
      />

      <section className="page-hero  bg-pink-50">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch for furniture rental inquiries and bulk quotes
          </p>
        </div>
      </section>

      <section className="section  bg-pink-50">
        <div className="container">
          {/* <div className="contact-grid"> */}
          <div className="contact-info">
            {/* <h2 className="contact-heading">Harsh Furniture Hirers</h2> */}
            {/* <p className="contact-intro text-center">
              We are here to help with all your furniture rental needs. Contact
              us today for competitive pricing, bulk availability, and flexible
              rental terms.
            </p> */}

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">
                  <GenericIcon icon={Phone} size={24} />
                </div>
                <div className="contact-method-content">
                  <h3>Phone</h3>
                  <a href={`tel:+91${phoneNumber}`}>{`+91-${phoneNumber}`}</a>
                  <p>Call us for immediate assistance</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <GenericIcon
                    icon={MessageCircle}
                    size={24}
                    className="text-rose-700"
                  />
                </div>
                <div className="contact-method-content">
                  <h3>WhatsApp</h3>
                  <a
                    href={`https://wa.me/+91${phoneNumber}?text=Hi, I'm interested in furniture rental services`}
                    // href={`https://wa.me/+91${phoneNumber}?text=Hi, I'm interested in furniture rental services`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {phoneNumber}
                  </a>
                  <p>Quick response on WhatsApp</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <GenericIcon icon={Mail} size={24} />
                </div>
                <div className="contact-method-content">
                  <h3>Email</h3>
                  <a href={`mailto:${emailId}`}>{emailId}</a>
                  <p>Send us your requirements</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <GenericIcon icon={MapPin} size={24} />
                </div>
                <div className="contact-method-content">
                  <h3>Service Areas</h3>
                  <p>Mumbai, Navi Mumbai, Thane</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <GenericIcon icon={Clock} size={24} />
                </div>
                <div className="contact-method-content">
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <GenericIcon icon={MapPin} size={24} />
                </div>
                <div className="contact-method-content">
                  <h3>Find Us</h3>
                  <a
                    href="https://maps.app.goo.gl/gi7rzFXzL7aaeYWc6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-700 underline"
                  >
                    Serving Mumbai, Navi Mumbai, and Thane
                  </a>
                  <p>Click above to view our location on Google Maps</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="contact-form-wrapper">
              <h2 className="contact-form-heading">Send Us a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Required</label>
                  <select id="service" name="service" required>
                    <option value="">Select a service</option>
                    <option value="beds">Beds & Mattresses</option>
                    <option value="guest-house">Guest House Furniture</option>
                    <option value="office">Office Furniture</option>
                    <option value="event">Event Furniture</option>
                    <option value="home">Home Furniture</option>
                    <option value="appliances">Appliances</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your furniture requirements"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="button button-primary form-submit"
                >
                  Send Message
                </button>
              </form>

              <p className="form-note">
                For immediate assistance, please call or WhatsApp us directly.
              </p>
            </div> */}
        </div>
        {/* </div> */}
      </section>

      <section className="section section-alt bg-pink-50">
        <div className="container flex flex-col justify-center items-center">
          <h2 className="section-title">Areas We Serve</h2>
          <p className="section-subtitle">
            Furniture rental and delivery across Mumbai region
          </p>
          <div className="areas-grid mt-4">
            <div className="areas-grid mt-4">
              {areas.map((area, index) => (
                <GenericButton
                  key={index}
                  label={area}
                  className="button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
                  onClick={() => {
                    console.log(`Clicked on ${area}`);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
