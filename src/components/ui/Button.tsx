import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  external?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  type = "button",
  onClick,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300";
  const variants = {
    primary:
      "bg-brand-red text-white hover:bg-brand-red-light border border-brand-red hover:border-brand-red-light",
    secondary:
      "bg-transparent text-white border border-white/20 hover:border-brand-red hover:text-brand-red",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
