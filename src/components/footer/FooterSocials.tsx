import { Linkedin } from "lucide-react";
import InstagramIcon from "../../assets/gallery/Instagram_Glyph_White.png";
import YoutubeIcon from "../../assets/gallery/youtube_icon.png";
import { instagram, linkedIn, youtube } from "../../data/socials";
import SocialIcon from "../generic-components/GenericSocialIcon";

export default function FooterSocials() {
  return (
    <div className="flex items-center justify-between w-full">
      <SocialIcon
        href={linkedIn}
        ariaLabel="LinkedIn"
        icon={Linkedin}
        size={24}
        className="text-white"
      />

      <SocialIcon
        href={instagram}
        ariaLabel="Instagram"
        imgSrc={InstagramIcon}
        size={24}
      />

      <SocialIcon
        href={youtube}
        ariaLabel="YouTube"
        imgSrc={YoutubeIcon}
        size={40}
      />
    </div>
  );
}
