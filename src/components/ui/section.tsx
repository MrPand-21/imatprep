import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  containerClassName?: string;
  children: ReactNode;
};

export function Section({
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-8 sm:py-8", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

type SurfaceProps = HTMLAttributes<HTMLDivElement>;

export function Surface({ className, ...props }: SurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-8 shadow-[0_16px_50px_-38px_rgba(17,33,22,0.35)] sm:p-6",
        className,
      )}
      {...props}
    />
  );
}
