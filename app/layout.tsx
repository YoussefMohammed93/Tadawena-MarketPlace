import "./globals.css";

import type { Metadata } from "next";

import { Open_Sans } from "next/font/google";
import { MobileNav } from "@/components/mobile-nav";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tadawena Market Place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${openSans.variable} font-sans antialiased h-full`}>
        <main className="h-full">
          {children}
          <MobileNav />
        </main>
      </body>
    </html>
  );
}
