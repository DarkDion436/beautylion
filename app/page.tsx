import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

const categoryImages: Record<string, string> = {
  Skincare: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
  Haircare: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  Makeup: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
  Fragrance: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
};

export default function HomePage() {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative container-x py-28 md:py-40">
          <div className="max-w-xl animate-slideUp">
            <p className="uppercase tracking-[0.25em] text-xs text-navy-200 mb-5">
              New Season Collection
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
              Beauty, considered.
            </h1>
            <p className="text-navy-100 text-base md:text-lg mb-9 leading-relaxed">
              Curated skincare, haircare, makeup, and fragrance — thoughtfully
              sourced, delivered to your door across Kenya. Pay simply with
              M-Pesa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="bg-white text-ink px-7 py-3.5 rounded-sm font-medium tracking-wide hover:bg-navy-100 transition-colors flex items-center gap-2">
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link href="/new-arrivals" className="border border-white/40 px-7 py-3.5 rounded-sm font-medium tracking-wide hover:bg-white/10 transition-colors">
                New Arrivals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container-x py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="section-heading">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/shop?category=${encodeURIComponent(cat)}`}
              className="group relative aspect-[3/4] rounded-sm overflow-hidden"
            >
              <Image
                src={categoryImages[cat]}
                alt={cat}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="text-white font-serif text-xl">{cat}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers Preview */}
      <section className="container-x py-16 bg-navy-50/40 rounded-sm">
        <div className="flex items-end justify-between mb-10 px-2 pt-8">
          <h2 className="section-heading">Best Sellers</h2>
          <Link href="/best-sellers" className="text-sm font-medium text-navy-700 hover:text-ink flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 px-2 pb-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="container-x py-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="font-serif text-lg mb-2">Guest Checkout</h3>
          <p className="text-sm text-navy-500">No account needed. Order in under a minute.</p>
        </div>
        <div>
          <h3 className="font-serif text-lg mb-2">Pay via M-Pesa</h3>
          <p className="text-sm text-navy-500">Secure STK Push straight to your phone.</p>
        </div>
        <div>
          <h3 className="font-serif text-lg mb-2">Nationwide Delivery</h3>
          <p className="text-sm text-navy-500">Fast, tracked delivery across Kenya.</p>
        </div>
      </section>
    </div>
  );
}
