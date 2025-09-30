"use client";

import {
  X,
  Search,
  Heart,
  User,
  Phone,
  Mail,
  Check,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Info Bar - Hidden on mobile */}
      <div className="hidden lg:block w-full bg-primary py-2 text-white text-sm">
        <div className="max-w-7xl mx-auto px-5">
          <div className="w-full flex items-center gap-8 xl:gap-16 pb-2 border-border/30 border-b">
            <Link
              href="tel:+201212331300"
              className="flex items-center gap-1 hover:text-background/70 transition-colors"
            >
              <Phone className="size-4" />
              <span className="hidden xl:inline">+20 1212331300</span>
              <span className="xl:hidden">Call Us</span>
            </Link>
            <Link
              href="mailto:info@tadawena.com"
              className="flex items-center gap-1 hover:text-background/70 transition-colors"
            >
              <Mail className="size-4" />
              <span className="hidden xl:inline">info@tadawena.com</span>
              <span className="xl:hidden">Email</span>
            </Link>
            <div className="flex items-center gap-4 xl:gap-6">
              <div className="flex items-center gap-1">
                <Check className="size-4" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="size-4" />
                <span>Safe Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-primary py-3 md:pt-1 md:pb-4">
        <div className="max-w-7xl mx-auto px-4 md:px-5">
          {/* Mobile & Tablet Layout (< 1024px) */}
          <div className="lg:hidden">
            {/* Logo and Search Button */}
            <div
              className={`flex items-center justify-between gap-3 ${isSearchOpen ? "mb-4" : ""}`}
            >
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Tadawena Logo"
                  width={169}
                  height={55}
                  priority
                  className="h-14 w-auto"
                />
              </Link>

              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="cursor-pointer text-background border-2 rounded-full hover:text-background/70 hover:border-background/70 transition-colors p-2"
                aria-label="Search"
              >
                {isSearchOpen ? (
                  <X className="size-6" />
                ) : (
                  <Search className="size-6" />
                )}
              </button>
            </div>

            {/* Mobile Search Bar - Expandable */}
            {isSearchOpen && (
              <div className="mb-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="relative flex items-center bg-background rounded-full">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-primary" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full hover:bg-[#EDEBFF] focus:bg-[#EDEBFF] text-primary transition-all duration-300   pl-10 pr-4 py-3 border-0 outline-none rounded-full text-sm"
                    />
                    <Button
                      variant="default"
                      className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full mr-1 font-semibold !px-4 !py-2 text-sm"
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Layout (>= 1024px) */}
          <div className="hidden lg:flex items-center justify-between gap-4 xl:gap-6">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.svg"
                alt="Tadawena Logo"
                width={169}
                height={55}
                priority
                className="h-10 xl:h-14 w-auto"
              />
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative flex items-center bg-background rounded-full">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 xl:size-6 text-primary" />
                  <input
                    type="text"
                    placeholder="Search everything at Tadawena store..."
                    className="w-full hover:bg-[#EDEBFF] focus:bg-[#EDEBFF] text-primary transition-all duration-300 pl-10 xl:pl-12 pr-4 py-3 border-0 outline-none rounded-full text-sm xl:text-base"
                  />
                  <Button
                    variant="default"
                    className="absolute right-[3.5px] xl:right-2 top-1/2 -translate-y-1/2 rounded-full font-semibold !px-4 xl:!px-6 !py-2.5 xl:!py-4 text-sm xl:text-base"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Desktop Icons */}
            <div className="flex items-center gap-3 xl:gap-4 shrink-0">
              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="text-background border-2 rounded-full hover:text-background/70 hover:border-background/70 transition-colors p-1.5"
                aria-label="Wishlist"
              >
                <Heart className="size-5 xl:size-6" />
              </Link>

              {/* Account */}
              <Link href="/login" className="group flex items-center gap-2">
                <div className="border-2 text-background group-hover:border-background/70 group-hover:text-background/70 transition-colors rounded-full p-1.5">
                  <User className="size-5 xl:size-6" />
                </div>
                <div className="hidden xl:flex flex-col items-start text-muted-foreground">
                  <span className="text-sm font-medium">Sign In</span>
                  <span className="text-xs font-medium">Account</span>
                </div>
              </Link>

              {/* Cart */}
              <Link href="/cart" className="group flex items-center gap-2">
                <div className="bg-[#5A5858] border-2 border-transparent text-background group-hover:text-background/70 transition-colors rounded-full p-1.5">
                  <ShoppingCart className="size-6" />
                </div>
                <div className="hidden xl:flex flex-col items-start text-muted-foreground">
                  <span className="text-sm text-background font-semibold">
                    0.00 EGP
                  </span>
                  <span className="text-xs font-medium">Cart Total</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
