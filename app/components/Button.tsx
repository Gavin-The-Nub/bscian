"use client";

import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ButtonVariant = "primary" | "secondary" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  inverse?: boolean;
  children: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-6 text-[10px]",
  md: "h-12 px-8 text-xs",
  lg: "h-14 px-10 text-xs",
};

export default function Button({
  variant = "primary",
  size = "md",
  inverse = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center font-body font-medium uppercase tracking-[0.2em] transition-all duration-500 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-text-main disabled:opacity-50 disabled:pointer-events-none";

  if (variant === "link") {
    return (
      <button
        className={cn(
          "font-body text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500 cursor-pointer focus-visible:outline-none",
          inverse ? "text-bg-main hover:text-accent" : "text-text-main hover:text-accent",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        className={cn(
          baseClasses,
          sizeClasses[size],
          inverse
            ? "border border-bg-main bg-transparent text-bg-main hover:bg-bg-main hover:text-text-main"
            : "border border-text-main bg-transparent text-text-main hover:bg-text-main hover:text-bg-main",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  // Primary — with accent slide animation
  return (
    <button
      className={cn(
        "group overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] bg-accent text-bg-main",
        inverse && "hover:text-text-main",
        baseClasses,
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {/* Accent overlay slides from left */}
      <span
        className={cn(
          "absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
          inverse ? "bg-bg-main" : "bg-text-main"
        )}
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

