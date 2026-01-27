import { areas } from "../../data/data";
import GenericButton from "../generic-components/GenericButton";

export default function AreasWeServe() {
  return (
    <section className="section section-alt bg-pink-50">
      <div className="container flex flex-col justify-center items-center">
        <h2 className="section-title">Areas We Serve</h2>
        <p className="section-subtitle">
          Furniture rental and delivery across Mumbai region
        </p>

        <div className="areas-grid mt-4">
          {areas.map((area, index) => (
            <GenericButton
              key={index}
              label={area}
              className="button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
              onClick={() => console.log(`Clicked on ${area}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
