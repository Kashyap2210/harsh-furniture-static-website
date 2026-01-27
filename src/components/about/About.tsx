import SEO from "../SEO";
import AboutCTA from "./AboutCTA";
import AboutHero from "./AboutHero";
import OurExpertise from "./OurExpertise";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Harsh Furniture Hirers is a trusted furniture rental company in Mumbai. We specialize in bulk furniture rental for guest houses, offices, events, and homes."
        keywords="furniture rental Mumbai, about Harsh Furniture Hirers, furniture hire company"
      />

      <AboutHero />
      <WhoWeAre />
      <WhyChooseUs />
      <OurExpertise />
      <AboutCTA />
    </>
  );
}
