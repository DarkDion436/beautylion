"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface SearchBarProps {
  defaultValue?: string;
}

export default function SearchBar({
  defaultValue = "",
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);

  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);

    if (query.trim()) {
      params.set("search", query.trim());
    } else {
      params.delete("search");
    }

    router.push(`/shop?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-2xl overflow-hidden rounded-full border border-stone-300 bg-white shadow-sm"
    >
      <input
        type="text"
        placeholder="Search skincare, makeup, haircare..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-6 py-4 text-sm outline-none"
      />

      <button
        type="submit"
        className="flex items-center gap-2 bg-black px-8 text-white transition hover:bg-red-600"
      >
        <Search size={18} />
        Search
      </button>
    </form>
  );
}