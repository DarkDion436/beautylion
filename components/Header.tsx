"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/context/useCartStore";
import PromoBanner from "./PromoBanner";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Best Sellers", href: "/best-sellers" },
  { label: "About", href: "/about" },
  { label: "Contacts", href: "/contacts" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const itemCount = useCartStore((s) => s.itemCount());
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => setMounted(true), []);
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-navy-100 shadow-sm">
      <PromoBanner />
      <div className="container-x">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-serif text-2xl sm:text-3xl tracking-wide text-ink">
              NOIRE&nbsp;BEAUTÉ
            </span>
            <span className="text-[10px] tracking-[0.3em] text-navy-600 uppercase mt-0.5">
              Nairobi
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 relative pb-1 ${
                    active ? "text-ink" : "text-navy-600 hover:text-ink"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-ink" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side: cart + mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative p-2 hover:bg-navy-50 rounded-full transition-colors"
            >
              <ShoppingBag size={22} className="text-ink" strokeWidth={1.5} />
              {mounted && itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-navy-800 text-white text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </button>

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-navy-100 animate-slideUp">
          <div className="container-x py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 text-sm font-medium uppercase tracking-wide border-b border-navy-50 last:border-0 ${
                  pathname === link.href ? "text-ink" : "text-navy-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
