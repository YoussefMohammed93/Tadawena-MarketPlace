"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, ShoppingCart, User, Home } from "lucide-react";

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-muted p-3 lg:hidden">
      {/* Home */}
      <Link
        href="/"
        className={`flex flex-col w-1/4 py-2.5 rounded-xl items-center gap-1 transition-colors ${
          pathname === "/"
            ? "bg-primary/10 text-primary"
            : "text-foreground hover:bg-primary/5 hover:text-primary"
        }`}
      >
        <Home className="size-6" />
      </Link>

      {/* Wishlist */}
      <Link
        href="/wishlist"
        className={`flex flex-col w-1/4 py-2.5 rounded-xl items-center gap-1 transition-colors ${
          pathname === "/wishlist"
            ? "bg-primary/10 text-primary"
            : "text-foreground hover:bg-primary/5 hover:text-primary"
        }`}
      >
        <Heart className="size-6" />
      </Link>

      {/* Cart */}
      <Link
        href="/cart"
        className={`flex flex-col w-1/4 py-2.5 rounded-xl items-center gap-1 transition-colors relative ${
          pathname === "/cart"
            ? "bg-primary/10 text-primary"
            : "text-foreground hover:bg-primary/5 hover:text-primary"
        }`}
      >
        <ShoppingCart className="size-6" />
      </Link>

      {/* Account */}
      <Link
        href="/login"
        className={`flex flex-col w-1/4 py-2.5 rounded-xl items-center gap-1 transition-colors ${
          pathname === "/login"
            ? "bg-primary/10 text-primary"
            : "text-foreground hover:bg-primary/5 hover:text-primary"
        }`}
      >
        <User className="size-6" />
      </Link>
    </nav>
  );
};
