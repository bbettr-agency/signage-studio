import Link from "next/link";
import { cn } from "@/utils/cn";
import { siteConfig } from "@/config/site-config";

type LogoProps = {
  href?: string;
  className?: string;
  imgClassName?: string;
  onClick?: () => void;
};

/**
 * Official Signage Studio logo.
 * The SVG ships white icon marks + teal (#008896) wordmark,
 * so it is designed for dark surfaces.
 */
export default function Logo({
  href = "/",
  className,
  imgClassName,
  onClick,
}: LogoProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label={`${siteConfig.businessName} — home`}
      className={cn(
        "inline-flex items-center transition-opacity duration-300 hover:opacity-80",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt={siteConfig.businessName}
        width={150}
        height={52}
        className={cn("w-auto", imgClassName ?? "h-10 md:h-11")}
      />
    </Link>
  );
}
