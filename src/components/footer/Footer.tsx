import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";

export default function Footer() {
  return (
    <footer className="footer bg-slate-900 text-slate-200">
      <div className="footer-container">
        <div className="footer-grid">
          <FooterBrand />
          <FooterLinks />
          <FooterServices />
          <FooterContact />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
