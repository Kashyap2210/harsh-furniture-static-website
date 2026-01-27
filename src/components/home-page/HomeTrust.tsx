import { trustPoints } from "../../data/data";

export default function HomeTrust() {
  return (
    <section className="section bg-pink-50">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Harsh Furniture Hirers?</h2>
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
  );
}
