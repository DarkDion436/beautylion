"use client";

import { Category } from "@/lib/types";
import { categories } from "@/lib/products";
import { formatKES } from "@/lib/validators";

export type SortOption = "newest" | "price-asc" | "price-desc";

interface FiltersProps {
  selectedCategories: Category[];
  onToggleCategory: (cat: Category) => void;
  maxPrice: number;
  priceRange: number;
  onPriceChange: (value: number) => void;
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
  resultCount: number;
}

export default function Filters({
  selectedCategories,
  onToggleCategory,
  maxPrice,
  priceRange,
  onPriceChange,
  sort,
  onSortChange,
  resultCount,
}: FiltersProps) {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="lg:sticky lg:top-28 space-y-8">
        {/* Sort - shown at top for mobile convenience too */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-navy-500 mb-3">Sort By</h3>
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="w-full border border-navy-200 rounded-sm px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-navy-800"
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Category filter */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-navy-500 mb-3">Category</h3>
          <div className="space-y-2.5">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => onToggleCategory(cat)}
                  className="h-4 w-4 rounded-sm border-navy-300 accent-navy-800 cursor-pointer"
                />
                <span className="text-sm text-navy-700 group-hover:text-ink transition-colors">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price range */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-navy-500 mb-3">Max Price</h3>
          <input
            type="range"
            min={0}
            max={maxPrice}
            step={100}
            value={priceRange}
            onChange={(e) => onPriceChange(Number(e.target.value))}
            className="w-full accent-navy-800 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-navy-500 mt-1">
            <span>KSh 0</span>
            <span className="font-medium text-ink">{formatKES(priceRange)}</span>
          </div>
        </div>

        <p className="text-xs text-navy-400 pt-2 border-t border-navy-100">
          {resultCount} {resultCount === 1 ? "product" : "products"} found
        </p>
      </div>
    </aside>
  );
}
