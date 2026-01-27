import CallNow from "../CallNow";
import WhatsAppButton from "../Whatsapp";

export default function HomeHero() {
  return (
    <section className="hero bg-pink-50">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title text-slate-800">
            Furniture on Rent in Mumbai
          </h1>

          <p className="hero-subtitle text-black">
            Quality beds, mattresses, office furniture, and event furniture
            available for rent across Mumbai, Navi Mumbai, and Thane.
          </p>

          <div className="hero-cta">
            <CallNow className="button button-light bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition" />

            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
}
