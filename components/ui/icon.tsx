import {
  AppWindow,
  Award,
  Building2,
  Car,
  Flag,
  Lightbulb,
  Shield,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  AppWindow,
  Award,
  Building2,
  Car,
  Flag,
  Lightbulb,
  Shield,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
};

type IconProps = {
  name: string;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  const Component = iconMap[name] ?? Sparkles;
  return <Component className={className} aria-hidden />;
}
