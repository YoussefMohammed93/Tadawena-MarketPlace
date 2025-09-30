"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [homeOpen, setHomeOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <nav className="hidden lg:block w-full bg-background border-b">
      <div className="max-w-7xl mx-auto px-5">
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
