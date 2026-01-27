import { phoneNumber } from "../data/constants";
import GenericButton from "./generic-components/GenericButton";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/+91${phoneNumber}?text=Hi, I'm interested in furniture rental services`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GenericButton
        label="WhatsApp Us"
        className="button button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
      />
    </a>
  );
}
