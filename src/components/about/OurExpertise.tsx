export default function OurExpertise() {
  return (
    <section className="section bg-pink-50">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Expertise</h2>
        </div>

        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>Guest House Solutions</h3>
            <p>
              Complete furniture solutions for guest houses with bulk rental
              options at competitive prices.
            </p>
          </div>

          <div className="expertise-card">
            <h3>Corporate Offices</h3>
            <p>
              Office furniture rental for new or temporary workspaces including
              desks, chairs, and conference tables.
            </p>
          </div>

          <div className="expertise-card">
            <h3>Events & Weddings</h3>
            <p>
              Event furniture rental for weddings, banquets, conferences, and
              special occasions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
