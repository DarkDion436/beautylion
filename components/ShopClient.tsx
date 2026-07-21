"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import ProductCard from "@/components/ProductCard";
import Filters, { SortOption } from "@/components/Filters";
import Pagination from "@/components/Pagination";

import { products } from "@/lib/products";
import { Category } from "@/lib/types";

interface ShopClientProps {
  title: string;
  description?: string;
  filter?: "new" | "best-seller" | "uv";
  showFilters?: boolean;
}

const MAX_PRICE = Math.max(...products.map((p) => p.price));
const PRODUCTS_PER_PAGE = 20;

export default function ShopClient({
  title,
  description,
  filter,
  showFilters = true,
}: ShopClientProps) {
  const searchParams = useSearchParams();

  const categoryFromUrl = searchParams.get("category") as Category | null;

  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    categoryFromUrl ? [categoryFromUrl] : []
  );

  const [priceRange, setPriceRange] = useState(MAX_PRICE);
  const [sort, setSort] = useState<SortOption>("newest");

  const [currentPage, setCurrentPage] = useState(1);

  // NEW SEARCH STATE
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategories([categoryFromUrl]);
    }
  }, [categoryFromUrl]);

  function toggleCategory(cat: Category) {
    setSelectedCategories((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  }

  // Reset page whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategories, priceRange, sort, filter]);

  const filtered = useMemo(() => {
    let list = [...products];

    // Page Filters
    if (filter === "new") {
      list = list.filter((p) => p.isNew);
    }

    if (filter === "best-seller") {
      list = list.filter((p) => p.isBestSeller);
    }

    if (filter === "uv") {
      list = list.filter((p) => p.category === "Fragrance");
    }

    // Category Filter
    if (selectedCategories.length > 0) {
      list = list.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    // SEARCH FILTER
    if (search.trim() !== "") {
      const query = search.toLowerCase();

      list = list.filter((product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.subcategory.toLowerCase().includes(query) ||
        product.concerns.some((concern) =>
          concern.toLowerCase().includes(query)
        )
      );
    }

    // Price Filter
    list = list.filter((p) => p.price <= priceRange);

    // Sorting
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;

      default:
        list.sort(
          (a, b) =>
            new Date(b.dateAdded).getTime() -
            new Date(a.dateAdded).getTime()
        );
    }

    return list;
  }, [filter, selectedCategories, priceRange, sort, search]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;

    return filtered.slice(start, end);
  }, [filtered, currentPage]);

  return (
    <div className="container-x py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="section-heading mb-3">{title}</h1>

        {description && (
          <p className="max-w-2xl text-navy-500">
            {description}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Sidebar */}
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

        {/* Products */}
        <div className="flex-1">
          {/* Search */}
          <div className="relative mb-8">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search products, brands, categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-12 pr-4 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>

          {filtered.length === 0 ? (
            <div className="py-24 text-center text-navy-400">
              No products match your search or filters.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}