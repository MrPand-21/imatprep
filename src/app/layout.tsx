import type { Metadata } from "next";
import { Aladin, Lexend } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Lexend({ subsets: ["latin"], variable: "--font-sans" });

const serif = Aladin({
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "IMAT Prep — Study Medicine in Italy",
  description:
    "Premium IMAT preparation for ambitious students pursuing medicine in Italy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className={`${inter.variable} ${serif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
