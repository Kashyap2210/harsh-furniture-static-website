import { Mail, MapPin, Phone } from "lucide-react";
import { emailId, phoneNumber } from "../../data/constants";
import FooterSocials from "./FooterSocials";

export default function FooterContact() {
  return (
    <div className="footer-section">
      <h4 className="footer-heading">Contact Us</h4>
      <ul className="footer-contact">
        <li>
          <Phone size={18} />
          <a href={`tel:+91-${phoneNumber}`}>{`+91-${phoneNumber}`}</a>
        </li>

        <li>
          <Mail size={18} />
          <a href={`mailto:${emailId}`}>{emailId}</a>
        </li>

        <li>
          <MapPin size={18} />
          <span>Mumbai, Navi Mumbai, Thane</span>
        </li>
        <li>
          <FooterSocials />
        </li>
      </ul>
    </div>
  );
}
