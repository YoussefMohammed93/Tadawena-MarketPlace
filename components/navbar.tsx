"use client";

import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const mobileNavItems = [
  { href: "/best-sellers", label: "Best seller products" },
  { href: "/discounts", label: "Super discounts" },
  { href: "/reviews", label: "Customer reviews" },
  { href: "/categories/vitamin-d3", label: "Vitamin D3 Supplements" },
  { href: "/categories/mothers-infants", label: "Mothers & Infants" },
  { href: "/categories/general-health", label: "General Health" },
  { href: "/vitamin-d", label: "Vitamin D" },
  { href: "/order-tracking", label: "Order Tracking" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [homeOpen, setHomeOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if at the very top
      setIsAtTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - only show if at top
        setIsVisible(currentScrollY === 0);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full bg-background border-b sticky top-0 z-30 transition-transform duration-300 ${
        isAtTop && isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Mobile Horizontal Scrollable Nav */}
      <div className="lg:hidden w-full overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-4 px-4 py-3 min-w-max">
          {mobileNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop Nav with Dropdowns */}
      <div className="hidden lg:block max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-14">
          {/* Left Navigation */}
          <div className="flex items-center gap-8">
            {/* Home Dropdown */}
            <DropdownMenu open={homeOpen} onOpenChange={setHomeOpen}>
              <DropdownMenuTrigger className="cursor-pointer flex items-center gap-1 text-base text-black/80 hover:text-primary transition-colors outline-none">
                Home
                <ChevronDown
                  className={`size-5 transition-transform duration-300 ${
                    homeOpen ? "rotate-180" : ""
                  }`}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-44">
                <DropdownMenuItem asChild>
                  <Link href="/best-sellers" className="cursor-pointer">
                    Best seller products
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/discounts" className="cursor-pointer">
                    Super discounts
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/reviews" className="cursor-pointer">
                    Customer reviews
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Categories Dropdown */}
            <DropdownMenu
              open={categoriesOpen}
              onOpenChange={setCategoriesOpen}
            >
              <DropdownMenuTrigger className="cursor-pointer flex items-center gap-1 text-base text-black/80 hover:text-primary transition-colors outline-none">
                Categories
                <ChevronDown
                  className={`size-5 transition-transform duration-300 ${
                    categoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-52">
                <DropdownMenuItem asChild>
                  <Link
                    href="/categories/vitamin-d3"
                    className="cursor-pointer"
                  >
                    Vitamin D3 Supplements
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/categories/mothers-infants"
                    className="cursor-pointer"
                  >
                    Mothers & Infants
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/categories/general-health"
                    className="cursor-pointer"
                  >
                    General Health
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Static Links */}
            <Link
              href="/vitamin-d"
              className="text-base text-primary transition-colors"
            >
              Vitamin D
            </Link>
            <Link
              href="/contact"
              className="text-base text-secondary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-6">
            <Link
              href="/order-tracking"
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
            >
              <Image
                src="/box.svg"
                alt="Order Tracking"
                width={20}
                height={20}
              />
              Order Tracking
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
            >
              <Image src="/location-pin.svg" alt="FAQ" width={20} height={20} />
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
