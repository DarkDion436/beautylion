"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Star, Check } from "lucide-react";
import { Product } from "@/lib/types";
import { formatKES } from "@/lib/validators";
import { useCartStore } from "@/context/useCartStore";

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((s) => s.addToCart);
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  }

  return (
    <div className="group bg-white rounded-sm border border-navy-100 overflow-hidden hover:shadow-soft transition-all duration-300">
      <div className="relative aspect-[4/5] overflow-hidden bg-navy-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-navy-800 text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-white text-ink text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm border border-ink/10">
              Best Seller
            </span>
          )}
        </div>
        <button
          onClick={handleAdd}
          aria-label={`Add ${product.name} to cart`}
          className={`absolute bottom-3 right-3 h-10 w-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
            justAdded ? "bg-green-600" : "bg-ink hover:bg-navy-800"
          }`}
        >
          {justAdded ? (
            <Check size={18} className="text-white" />
          ) : (
            <Plus size={18} className="text-white" />
          )}
        </button>
      </div>

      <div className="p-4">
        <p className="text-[11px] uppercase tracking-wider text-navy-500 mb-1">
          {product.category}
        </p>
        <h3 className="font-serif text-base leading-snug mb-1.5 text-ink">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          <Star size={13} className="fill-navy-800 text-navy-800" />
          <span className="text-xs text-navy-600">{product.rating}</span>
        </div>
        <p className="font-medium text-ink">{formatKES(product.price)}</p>
      </div>
    </div>
  );
}
