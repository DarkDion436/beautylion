"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Eye, Star, Check } from "lucide-react";

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
    <div className="group overflow-hidden rounded-xl border border-navy-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative aspect-[4/5] overflow-hidden bg-navy-50">

        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width:768px) 50vw,25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />


        {/* Product Labels */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">

          {product.isNew && (
            <span className="rounded-full bg-navy-800 px-3 py-1 text-[10px] uppercase tracking-wider text-white">
              New
            </span>
          )}

          {product.isBestSeller && (
            <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] uppercase tracking-wider text-black">
              Best Seller
            </span>
          )}

        </div>


        {/* Action Buttons */}
        <div className="absolute bottom-3 right-3 flex gap-2">

          {/* View Details */}
          <Link
            href={`/products/${product.id}`}
            aria-label={`View ${product.name}`}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full bg-white text-black
              shadow-md transition-all duration-300
              hover:bg-navy-800 hover:text-white
            "
          >
            <Eye size={18} />
          </Link>


          {/* Add To Cart */}
          <button
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
            className={`
              flex h-10 w-10 items-center justify-center
              rounded-full shadow-md transition-all duration-300
              ${
                justAdded
                  ? "bg-green-600"
                  : "bg-black hover:bg-navy-800"
              }
            `}
          >
            {justAdded ? (
              <Check size={18} className="text-white" />
            ) : (
              <ShoppingCart size={18} className="text-white" />
            )}
          </button>

        </div>

      </div>


      {/* Product Info */}
      <div className="p-4">

        <p className="mb-1 text-[11px] uppercase tracking-wider text-navy-500">
          {product.category}
        </p>


        <h3 className="mb-2 font-serif text-base leading-snug text-ink">
          {product.name}
        </h3>


        <div className="mb-2 flex items-center gap-1">
          <Star
            size={13}
            className="fill-navy-800 text-navy-800"
          />

          <span className="text-xs text-navy-600">
            {product.rating}
          </span>
        </div>


        <p className="font-semibold text-ink">
          {formatKES(product.price)}
        </p>

      </div>

    </div>
  );
}