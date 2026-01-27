import { perfectData } from "../../data/data";

export default function ServicesPerfectFor() {
  return (
    <section className="section section-alt bg-pink-50">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Perfect For</h2>
        </div>

        <div className="perfect-for-grid">
          {perfectData.map((item) => (
            <div key={item.title} className="perfect-for-card cursor-pointer">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
