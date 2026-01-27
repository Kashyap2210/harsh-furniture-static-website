import { phoneNumber } from "../data/constants";
import GenericButton from "./generic-components/GenericButton";

export default function CallNow({ className }: { className: string }) {
  return (
    <div className="cta-buttons">
      <a href={`tel:${phoneNumber}`}>
        <GenericButton label="Call Now" className={`${className} `} />
      </a>
    </div>
  );
}
