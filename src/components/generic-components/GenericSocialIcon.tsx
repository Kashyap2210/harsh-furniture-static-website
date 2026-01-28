import type { LucideIcon } from "lucide-react";

type SocialIconProps =
  | {
      href: string;
      ariaLabel: string;
      size?: number;
      icon: LucideIcon;
      imgSrc?: never;
      className?: string;
    }
  | {
      href: string;
      ariaLabel: string;
      size?: number;
      imgSrc: string;
      icon?: never;
      className?: string;
    };

export default function SocialIcon({
  href,
  ariaLabel,
  size = 24,
  icon: Icon,
  imgSrc,
  className,
}: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${className} inline-flex items-center justify-center hover:opacity-80 transition`}
    >
      {Icon ? (
        <Icon size={size} className={className} />
      ) : (
        <img
          src={imgSrc}
          alt={ariaLabel}
          style={{ width: size, height: size }}
        />
      )}
    </a>
  );
}
