import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Phone, FileText } from "lucide-react";
import { site } from "@/content/site";

type Variant = "orange" | "navy" | "outline" | "outline-light";
type Size = "default" | "lg" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky";

const variants: Record<Variant, string> = {
  orange:
    "bg-orange text-white shadow-sm hover:bg-orange/90 hover:shadow-md",
  navy: "bg-navy text-white shadow-sm hover:bg-navy-soft hover:shadow-md",
  outline:
    "border border-navy text-navy bg-transparent hover:bg-navy hover:text-white",
  "outline-light":
    "border border-white/80 text-white bg-transparent hover:bg-white hover:text-navy",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  default: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type Props = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function CtaLink({
  to,
  variant = "orange",
  size = "default",
  className,
  children,
}: Props & { to: string }) {
  return (
    <Link to={to} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}

export function CtaAnchor({
  href,
  variant = "orange",
  size = "default",
  className,
  children,
  "aria-label": ariaLabel,
}: Props & { href: string; "aria-label"?: string }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </a>
  );
}

export function CallNowButton({
  size = "default",
  className,
  variant = "navy",
}: {
  size?: Size;
  className?: string;
  variant?: Variant;
}) {
  return (
    <CtaAnchor
      href={site.phoneHref}
      variant={variant}
      size={size}
      className={className}
      aria-label={`Call ${site.phone}`}
    >
      <Phone className="h-4 w-4" />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-medium opacity-80">Call/Text Now</span>
        <span className="text-sm font-bold">{site.phone}</span>
      </span>
    </CtaAnchor>
  );
}

export function QuoteButton({
  size = "default",
  className,
  variant = "outline",
}: {
  size?: Size;
  className?: string;
  variant?: Variant;
}) {
  return (
    <CtaLink to="/contact" variant={variant} size={size} className={className}>
      <FileText className="h-4 w-4" />
      Request a Quote
    </CtaLink>
  );
}
