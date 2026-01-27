import SEO from "../SEO";
import HomeAreas from "./HomeAreas";
import HomeCTA from "./HomeCTA";
import HomeHero from "./HomeHero";
import HomeServices from "./HomeServices";
import HomeTrust from "./HomeTrust";

export default function Home() {
  return (
    <>
      <SEO
        title="Furniture on Rent in Mumbai"
        description="Harsh Furniture Hirers offers quality furniture rental services in Mumbai, Navi Mumbai, and Thane. Beds, mattresses, office furniture, and event furniture available for rent at competitive prices."
        keywords="furniture on rent Mumbai, furniture rental Mumbai, beds on rent, guest house furniture, office furniture rental, event furniture Mumbai"
      />
      <HomeHero />
      <HomeTrust />
      <HomeServices />
      <HomeAreas />
      <HomeCTA />
    </>
  );
}
