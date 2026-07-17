import { Suspense } from "react";
import ShopClient from "@/components/ShopClient";

export const metadata = { title: "Best Sellers — Noire Beauté" };

export default function BestSellersPage() {
  return (
    <Suspense fallback={<div className="container-x py-24 text-center text-navy-400">Loading products...</div>}>
      <ShopClient
        title="Best Sellers"
        description="Our top-performing products, loved by customers across Kenya."
        baseFilter={(p) => p.isBestSeller}
      />
    </Suspense>
  );
}
