import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Harsh Furniture Hirers</h3>
            <p className="footer-text">
              Your trusted partner for bulk furniture rental in Mumbai, Navi
              Mumbai, and Thane. Quality furniture for guest houses, offices,
              events, and homes.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>Beds & Mattresses on Rent</li>
              <li>Guest House Furniture</li>
              <li>Office Furniture Rental</li>
              <li>Event Furniture</li>
              <li>Appliances on Rent</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={18} />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:info@harshfurniturehirers.com">
                  info@harshfurniturehirers.com
                </a>
              </li>
              <li>
                <MapPin size={18} />
                <span>Mumbai, Navi Mumbai, Thane</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Harsh Furniture Hirers. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
