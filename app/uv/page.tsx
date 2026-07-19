import { Suspense } from "react";
import ShopClient from "@/components/ShopClient";

export const metadata = {
  title: "Nail Products & Tools — Lion Beauty Shop",
};

export default function UvPage() {
  return (
    <Suspense
      fallback={
        <div className="container-x py-24 text-center text-navy-400">
          Loading products...
        </div>
      }
    >
      <ShopClient
        title="Nail Products & Tools"
        description="The latest additions to our collection."
        filter="new"
      />
    </Suspense>
  );
}