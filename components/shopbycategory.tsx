"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Skincare",
    image: "/images/skincare1.jpg",
    href: "/shop?category=Skincare",
  },
  {
    id: 2,
    name: "Haircare",
    image: "/images/haircare.jpg",
    href: "/shop?category=Haircare",
  },
  {
    id: 3,
    name: "Makeup",
    image: "/images/makeupt.jpg",
    href: "/shop?category=Makeup",
  },
  {
    id: 5,
    name: "Body Care",
    image: "/images/bodycare.jpg",
    href: "/shop?category=Body Care",
  },
  {
    id: 6,
    name: "Wellness",
    image: "/images/wellness.jpg",
    href: "/shop?category=Wellness",
  },
  
];

export default function ShopByCategory() {
  return (
    <section className="container-x py-20">
      {/* Header */}
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="mb-2 uppercase tracking-[0.3em] text-sm text-navy-700">
            Browse Collections
          </p>

          <h2 className="section-heading">
            Shop by Category
          </h2>

          <p className="mt-3 max-w-2xl text-navy-500 leading-7">
            Explore our carefully curated beauty collections featuring
            premium skincare, haircare, makeup, fragrances, and wellness
            essentials.
          </p>
        </div>

        <Link
          href="/shop"
          className="hidden md:flex items-center gap-2 text-sm font-medium text-navy-700 transition-colors hover:text-ink"
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Categories */}
      <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="group relative min-w-[180px] sm:min-w-[200px] lg:min-w-[220px] flex-shrink-0 overflow-hidden rounded-sm"
          >
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                fill
                priority
                sizes="220px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
            </div>

            {/* Text */}
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-serif text-xl text-white">
                {category.name}
              </h3>

              <div className="mt-2 flex items-center text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Button */}
      <div className="mt-10 text-center md:hidden">
        <Link href="/shop" className="btn-primary">
          View All Categories
        </Link>
      </div>
    </section>
  );
}