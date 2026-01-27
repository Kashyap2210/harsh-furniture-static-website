import SEO from "../components/SEO";
import { phoneNumber } from "../data/constants";
import AreasWeServe from "./contact/AreasWeServe";
import ContactHero from "./contact/ContactHero";
import ContactInfo from "./contact/ContactInfo";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description={`Contact Harsh Furniture Hirers for furniture rental in Mumbai, Navi Mumbai, and Thane. Call ${phoneNumber} or WhatsApp us for bulk furniture rental quotes.`}
        keywords="contact furniture rental Mumbai, furniture hire contact, Harsh Furniture Hirers contact"
      />

      <ContactHero />
      <ContactInfo />
      <AreasWeServe />
    </>
  );
}
