"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/context/useCartStore";
import { formatKES } from "@/lib/validators";

export default function CartDrawer() {
  const isCartOpen = useCartStore((s) => s.isCartOpen);
  const closeCart = useCartStore((s) => s.closeCart);
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const subtotal = useCartStore((s) => s.subtotal());

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black/40 animate-fadeIn"
        onClick={closeCart}
      />
      <div className="relative w-full max-w-md bg-white h-full flex flex-col shadow-2xl animate-slideInRight">
        <div className="flex items-center justify-between p-5 border-b border-navy-100">
          <h2 className="font-serif text-xl flex items-center gap-2">
            <ShoppingBag size={20} /> Your Bag ({items.reduce((s, i) => s + i.quantity, 0)})
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1 hover:bg-navy-50 rounded-full">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-navy-500 px-6 text-center">
            <ShoppingBag size={40} className="text-navy-200" />
            <p>Your bag is empty.</p>
            <Link
              href="/shop"
              onClick={closeCart}
              className="btn-primary mt-2 text-sm"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-4">
                  <div className="relative h-24 w-20 flex-shrink-0 rounded-sm overflow-hidden bg-navy-50">
                    <Image src={product.image} alt={product.name} fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm leading-snug truncate">{product.name}</h4>
                    <p className="text-xs text-navy-500 mt-0.5">{product.category}</p>
                    <p className="text-sm font-medium mt-1">{formatKES(product.price)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-navy-200 rounded-sm">
                        <button
                          className="p-1.5 hover:bg-navy-50"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-3 text-sm w-8 text-center">{quantity}</span>
                        <button
                          className="p-1.5 hover:bg-navy-50"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-navy-400 hover:text-red-600"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-navy-100 p-5 space-y-4">
              <div className="flex justify-between text-sm text-navy-600">
                <span>Subtotal</span>
                <span className="font-medium text-ink">{formatKES(subtotal)}</span>
              </div>
              <p className="text-xs text-navy-400">
                Shipping and taxes calculated at checkout.
              </p>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="btn-primary w-full flex items-center justify-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
