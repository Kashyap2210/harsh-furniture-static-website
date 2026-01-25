import { MessageCircle } from "lucide-react";
import { phoneNumber } from "../data/constants";

export default function MobileCTA() {
  return (
    <div className="mobile-cta">
      <a
        href={`https://wa.me/${phoneNumber}?text=Hi, I'm interested in furniture rental services`}
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
