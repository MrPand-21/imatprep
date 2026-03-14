import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/method", label: "Method" },
  { href: "/syllabus", label: "Syllabus" },
  { href: "/pricing", label: "Pricing" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 pt-3 sm:pt-4">
      <Container className="max-w-300!">
        <div className="relative flex h-20 items-center justify-between gap-4 rounded-3xl border border-white/45 bg-surface/58 px-4 shadow-[0_10px_40px_-26px_rgba(10,21,14,0.45)] backdrop-blur-xl sm:px-5">
          <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent via-white/80 to-transparent" />

          <Link href="/" className="inline-flex items-center gap-3">
            <div className="group relative flex h-14 w-14 items-center justify-center isolate">
              <span className="logo-glow absolute inset-1 rounded-full" />
              <Image
                src="/logo.png"
                alt="IMAT Prep Logo"
                width={100}
                height={100}
                priority
                className="logo-breathe relative z-10 h-[84%] w-[84%] object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1.5 md:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm text-foreground/75 transition-colors duration-300 hover:bg-white/46 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ButtonLink
            href="/#contact"
            className="hidden border-white/40 bg-white text-foreground hover:bg-white/50 sm:inline-flex"
            variant="ghost"
          >
            Join Waitlist
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
