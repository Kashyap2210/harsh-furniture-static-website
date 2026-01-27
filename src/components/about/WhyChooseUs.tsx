import { CheckCircle2 } from "lucide-react";
import { values } from "../../data/data";

export default function WhyChooseUs() {
  return (
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
  );
}
