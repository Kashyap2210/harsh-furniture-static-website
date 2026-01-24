import { MessageCircle } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="mobile-cta">
      {/* <a href="tel:+919876543210" className="mobile-cta-button mobile-cta-call">
        <Phone size={20} />
        <span>Call Now</span>
      </a> */}
      <a
        href="https://wa.me/919876543210?text=Hi, I'm interested in furniture rental services"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-cta-button mobile-cta-whatsapp"
      >
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
