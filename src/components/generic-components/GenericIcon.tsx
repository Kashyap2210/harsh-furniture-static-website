import type { LucideIcon } from "lucide-react";

type GenericIconProps = {
  icon: LucideIcon;
  size?: number;
  className?: string;
};

export default function GenericIcon({
  icon: Icon,
  size = 24,
  className = "",
}: GenericIconProps) {
  return <Icon size={size} className={`icon ${className}`} />;
}
