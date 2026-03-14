import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { href: "/method", label: "Method" },
  { href: "/syllabus", label: "Syllabus" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 py-10 sm:py-14">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <Link href="/" className="inline-flex">
          <Image
            src="/logo.png"
            alt="IMAT Prep Logo"
            width={150}
            height={150}
            className="logo-breathe object-contain"
          />
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
