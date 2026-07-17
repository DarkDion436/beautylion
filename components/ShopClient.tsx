"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import Filters, { SortOption } from "@/components/Filters";
import { products } from "@/lib/products";
import { Category } from "@/lib/types";

interface ShopClientProps {
  title: string;
  description?: string;
  /** Pre-filter applied before user filters, e.g. only best sellers or new arrivals */
  baseFilter?: (p: (typeof products)[number]) => boolean;
  /** Hide the filter sidebar entirely (used for simpler landing grids) */
  showFilters?: boolean;
}

const MAX_PRICE = Math.max(...products.map((p) => p.price));

export default function ShopClient({
  title,
  description,
  baseFilter,
  showFilters = true,
}: ShopClientProps) {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category") as Category | null;

  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    categoryFromUrl ? [categoryFromUrl] : []
  );
  const [priceRange, setPriceRange] = useState<number>(MAX_PRICE);
  const [sort, setSort] = useState<SortOption>("newest");

  useEffect(() => {
    if (categoryFromUrl) setSelectedCategories([categoryFromUrl]);
  }, [categoryFromUrl]);

  function toggleCategory(cat: Category) {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  const filtered = useMemo(() => {
    let list = baseFilter ? products.filter(baseFilter) : [...products];

    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }

    list = list.filter((p) => p.price <= priceRange);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "newest":
      default:
        list.sort(
          (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
        break;
    }

    return list;
  }, [baseFilter, selectedCategories, priceRange, sort]);

  return (
    <div className="container-x py-12">
      <div className="mb-10">
        <h1 className="section-heading mb-2">{title}</h1>
        {description && <p className="text-navy-500 max-w-2xl">{description}</p>}
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {showFilters && (
          <Filters
            selectedCategories={selectedCategories}
            onToggleCategory={toggleCategory}
            maxPrice={MAX_PRICE}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            sort={sort}
            onSortChange={setSort}
            resultCount={filtered.length}
          />
        )}

        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-navy-400">
              <p>No products match your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
