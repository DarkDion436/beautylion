import Image from "next/image";

export const metadata = { title: "About — Noire Beauté" };

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[45vh] min-h-[320px] bg-navy-900">
        <Image
          src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600&q=80"
          alt="Noire Beauté studio"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white text-center px-4">
            Our Story
          </h1>
        </div>
      </section>

      <section className="container-x py-20 max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.25em] text-xs text-navy-500 mb-6">
          Est. Nairobi
        </p>
        <h2 className="font-serif text-2xl md:text-3xl mb-6 leading-snug">
          Beauty rooted in intention, not excess.
        </h2>
        <p className="text-navy-600 leading-relaxed mb-6">
          Noire Beauté was founded on a simple belief: that beauty routines
          should be considered, not cluttered. We curate a tight, thoughtful
          selection of skincare, haircare, makeup, and fragrance from formulas
          we trust — nothing filler, nothing rushed.
        </p>
        <p className="text-navy-600 leading-relaxed mb-6">
          Every product on our shelves is chosen for how it performs, not how
          loudly it markets itself. We work directly with our customers across
          Kenya to make premium beauty accessible, with fast delivery and
          checkout that respects your time — no accounts, no clutter, just
          what you came for.
        </p>
        <p className="text-navy-600 leading-relaxed">
          Thank you for making us part of your routine.
        </p>
      </section>

      <section className="bg-navy-50/40 py-16">
        <div className="container-x grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="font-serif text-3xl mb-2">14+</h3>
            <p className="text-sm text-navy-500 uppercase tracking-wide">Curated Products</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl mb-2">4.7</h3>
            <p className="text-sm text-navy-500 uppercase tracking-wide">Average Rating</p>
          </div>
          <div>
            <h3 className="font-serif text-3xl mb-2">47</h3>
            <p className="text-sm text-navy-500 uppercase tracking-wide">Counties Delivered To</p>
          </div>
        </div>
      </section>
    </div>
  );
}
