import { Suspense } from "react";
import ShopClient from "@/components/ShopClient";

export const metadata = { title: "New Arrivals — Noire Beauté" };

export default function NewArrivalsPage() {
  return (
    <Suspense fallback={<div className="container-x py-24 text-center text-navy-400">Loading products...</div>}>
      <ShopClient
        title="New Arrivals"
        description="The latest additions to our collection."
        baseFilter={(p) => p.isNew}
      />
    </Suspense>
  );
}
