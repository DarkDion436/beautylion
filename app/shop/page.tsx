import { Suspense } from "react";
import ShopClient from "@/components/ShopClient";


export const metadata = { title: "Shop — Noire Beauté" };

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container-x py-24 text-center text-navy-400">Loading products...</div>}>
      <ShopClient
        title="Shop All"
        description="Browse our full collection of skincare, haircare, makeup, and fragrance."
      />
    </Suspense>
  );
}
