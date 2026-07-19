import Image from "next/image";

export const metadata = {
  title: "About Us | Lion of Judah Beauty Shop",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] bg-navy-900">
        <Image
          src="/images/storypic.png"
          alt="Lion of Judah Beauty Shop"
          fill
          priority
          className="object-cover opacity-55 blur-sm scale-80"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative flex h-full items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <p className="mb-4 uppercase tracking-[0.35em] text-sm text-white/80">
              Trusted Beauty & Wellness Store
            </p>

            <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              Discover Beauty That Inspires Confidence
            </h1>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container-x py-20 max-w-4xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-navy-600 mb-5">
          Lion of Judah Beauty Shop
        </p>

        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
          Authentic Beauty. Premium Care.
        </h2>

        <p className="text-navy-600 leading-8 mb-6">
          Lion of Judah Beauty Shop is your trusted destination for authentic
          skincare, makeup, hair care, fragrances, wellness supplements, and
          beauty essentials. We carefully source premium products from trusted
          global brands to help you look and feel your best every day.
        </p>

        <p className="text-navy-600 leading-8">
          Whether you're building a skincare routine, growing healthier hair,
          or discovering your next beauty favorite, we're committed to
          delivering quality products, exceptional customer service, and fast
          nationwide delivery across Kenya.
        </p>
      </section>

      {/* Statistics */}
      <section className="bg-navy-50 py-16">
        <div className="container-x grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          <div>
            <h3 className="font-serif text-4xl text-ink mb-2">5,000+</h3>
            <p className="text-sm uppercase tracking-wide text-navy-500">
              Happy Customers
            </p>
          </div>

          <div>
            <h3 className="font-serif text-4xl text-ink mb-2">1,000+</h3>
            <p className="text-sm uppercase tracking-wide text-navy-500">
              Premium Products
            </p>
          </div>

          <div>
            <h3 className="font-serif text-4xl text-ink mb-2">50+</h3>
            <p className="text-sm uppercase tracking-wide text-navy-500">
              Trusted Brands
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink text-white">
        <div className="container-x max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-5">
            Your Beauty Journey Starts Here
          </h2>

          <p className="text-white/80 leading-8 mb-8">
            Explore our collection of authentic beauty and wellness products
            designed to help you feel confident every day.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/shop" className="btn-primary">
              Shop Now
            </a>

            <a
              href="/contacts"
              className="btn-outline border-white text-white hover:bg-white hover:text-ink"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}