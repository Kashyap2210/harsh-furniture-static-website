import { areas } from "../../data/data";
import GenericButton from "../generic-components/GenericButton";

export default function HomeAreas() {
  return (
    <section className="section bg-pink-50">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Areas We Serve</h2>
          <p className="section-subtitle">
            Furniture rental services across Mumbai, Navi Mumbai, and Thane
          </p>
        </div>

        <div className="areas-grid">
          {areas.map((area, index) => (
            <GenericButton
              key={index}
              label={area}
              className="button button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
