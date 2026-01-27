import SEO from "../SEO";
import ServicesCTA from "./ServicesCTA";
import ServicesHero from "./ServicesHero";
import ServicesList from "./ServicesList";
import ServicesPerfectFor from "./ServicesPerfectFor";

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Harsh Furniture Hirers offers comprehensive furniture rental services including beds, guest house furniture, office furniture, event furniture, home furniture, and appliances on rent in Mumbai."
        keywords="furniture rental services, beds on rent, office furniture rental, event furniture, guest house furniture, appliances on rent Mumbai"
      />

      <ServicesHero />
      <ServicesList />
      <ServicesPerfectFor />
      <ServicesCTA />
    </>
  );
}
