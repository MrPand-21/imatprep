import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const baseButtonClass =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold tracking-[0.01em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variantClass = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_14px_34px_-18px_rgba(20,47,34,0.75)] hover:-translate-y-0.5 hover:scale-[1.01] active:translate-y-0 active:scale-[0.99]",
  ghost:
    "border border-border bg-surface text-foreground hover:-translate-y-0.5 hover:bg-surface-strong hover:border-secondary/55",
};

type Variant = keyof typeof variantClass;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseButtonClass, variantClass[variant], className)}
      {...props}
    >
      <span className="absolute inset-y-0 -left-10 w-12 -skew-x-12 bg-white/20 blur-md transition-all duration-500 group-hover:left-[105%]" />
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className={cn(
          "relative z-10 h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:translate-x-0.5",
          variant === "primary" ? "bg-accent" : "bg-secondary",
        )}
      />
    </button>
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

export function ButtonLink({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(baseButtonClass, variantClass[variant], className)}
      {...props}
    >
      <span className="absolute inset-y-0 -left-10 w-12 -skew-x-12 bg-white/20 blur-md transition-all duration-500 group-hover:left-[105%]" />
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className={cn(
          "relative z-10 h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:translate-x-0.5",
          variant === "primary" ? "bg-accent" : "bg-secondary",
        )}
      />
    </a>
  );
}
