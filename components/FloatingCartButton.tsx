"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/context/useCartStore";

export default function FloatingCartButton() {
  const itemCount = useCartStore((s) => s.itemCount());
  const openCart = useCartStore((s) => s.openCart);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || itemCount === 0) return null;

  return (
    <button
      onClick={openCart}
      aria-label="Open cart"
      className="fixed bottom-6 right-6 z-30 h-14 w-14 rounded-full bg-ink text-white shadow-xl flex items-center justify-center hover:bg-navy-800 transition-all duration-300 hover:scale-105"
    >
      <ShoppingBag size={22} />
      <span className="absolute -top-1.5 -right-1.5 bg-white text-ink text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-ink">
        {itemCount > 9 ? "9+" : itemCount}
      </span>
    </button>
  );
}
