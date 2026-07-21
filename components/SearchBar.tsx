"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products, brands, concerns..."
        className="
          w-full
          rounded-lg
          border
          border-gray-200
          bg-white
          py-3
          pl-11
          pr-4
          text-sm
          focus:border-brand
          focus:outline-none
          focus:ring-2
          focus:ring-brand/20
        "
      />
    </div>
  );
}