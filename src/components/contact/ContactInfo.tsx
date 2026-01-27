import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { emailId, phoneNumber } from "../../data/constants";
import GenericIcon from "../generic-components/GenericIcon";

export default function ContactInfo() {
  return (
    <section className="section bg-pink-50">
      <div className="container">
        <div className="contact-info">
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-method-icon">
                <GenericIcon icon={Phone} size={24} />
              </div>
              <div className="contact-method-content">
                <h3>Phone</h3>
                <a href={`tel:+91${phoneNumber}`}>+91-{phoneNumber}</a>
                <p>Call us for immediate assistance</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-method-icon">
                <GenericIcon icon={MessageCircle} size={24} />
              </div>
              <div className="contact-method-content">
                <h3>WhatsApp</h3>
                <a
                  href={`https://wa.me/+91${phoneNumber}?text=Hi, I'm interested in furniture rental services`}
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
      </div>
    </section>
  );
}
