function ContactUs() {
  return (
    <div className="contact-form-wrapper">
      <h2 className="contact-form-heading">Send Us a Message</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="service">Service Required</label>
          <select id="service" name="service" required>
            <option value="">Select a service</option>
            <option value="beds">Beds & Mattresses</option>
            <option value="guest-house">Guest House Furniture</option>
            <option value="office">Office Furniture</option>
            <option value="event">Event Furniture</option>
            <option value="home">Home Furniture</option>
            <option value="appliances">Appliances</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your furniture requirements"
            required
          ></textarea>
        </div>

        <button type="submit" className="button button-primary form-submit">
          Send Message
        </button>
      </form>

      <p className="form-note">
        For immediate assistance, please call or WhatsApp us directly.
      </p>
    </div>
  );
}

export default ContactUs;
