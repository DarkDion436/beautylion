"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Reveal Naturally Radiant Skin",
    subtitle: "Premium Skincare Collection",
    discount: "UP TO 40% OFF",
    description:
      "Transform your skincare routine with dermatologist-loved cleansers, brightening serums, hydrating moisturizers and targeted treatments designed to leave your skin glowing every day.",
    image: "/images/trial.png",
    href: "/categories/skincare",
  },
  {
    title: "Healthy Hair Starts Here",
    subtitle: "Luxury Haircare",
    discount: "SAVE 30%",
    description:
      "Discover nourishing shampoos, conditioners, hair oils, masks and growth treatments formulated to strengthen, repair and restore healthy, beautiful hair.",
    image: "/images/hairbg.png",
    href: "/categories/haircare",
  },
  {
    title: "Beauty That Defines You",
    subtitle: "Professional Makeup",
    discount: "BUY 2 GET 1",
    description:
      "Explore premium foundations, concealers, lipsticks, palettes, mascaras and beauty essentials that help you create flawless looks for every occasion.",
    image: "/images/makeuppic.png",
    href: "/categories/makeup",
  },
  {
    title: "Love The Skin You're In",
    subtitle: "Luxury Body Care",
    discount: "25% OFF",
    description:
      "Pamper yourself with luxurious body lotions, nourishing oils, exfoliating scrubs, body washes and fragrances for irresistibly soft, healthy skin.",
    image: "/images/bodylotions.png",
    href: "/categories/bodycare",
  },
  {
    title: "Glow From Within",
    subtitle: "Beauty Wellness",
    discount: "FREE SHIPPING",
    description:
      "Support healthy skin, stronger hair and beautiful nails with premium wellness supplements, collagen products and beauty gummies.",
    image: "/images/delivery.png",
    href: "/categories/wellness",
  },
  {
    title: "New Beauty Arrivals",
    subtitle: "Just Landed",
    discount: "NEW COLLECTION",
    description:
      "Shop the newest skincare, makeup, body care and haircare products from trusted international beauty brands loved by professionals.",
    image: "/images/banner/new-arrivals.jpg",
    href: "/new-arrivals",
  },
];

export default function DiscountBanner() {
  return (
    <section className="bg-gradient-to-b from-stone-50 via-white to-stone-100 py-12">
      <div className="container-x">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={900}
          loop
          className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className="grid min-h-[620px] items-center lg:grid-cols-[1.05fr_0.95fr]">

                {/* Left Content */}

                <div className="flex h-full flex-col justify-center bg-gradient-to-br from-white via-stone-50 to-white px-8 py-12 sm:px-12 lg:px-20">

                  <span className="mb-4 inline-flex w-fit rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
                    {slide.subtitle}
                  </span>

                  <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h2>

                  <div className="mt-8">
                    <span className="inline-flex rounded-full bg-black px-6 py-3 text-lg font-semibold tracking-wide text-white shadow-lg">
                      {slide.discount}
                    </span>
                  </div>

                  <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
                    {slide.description}
                  </p>

                  {/* Features */}

                  <div className="mt-10 grid grid-cols-2 gap-5 text-sm text-gray-700">

                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-black" />
                      Premium Quality
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-black" />
                      Trusted Brands
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-black" />
                      Fast Delivery
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-black" />
                      Secure Checkout
                    </div>

                  </div>

                  <div className="mt-12 flex flex-wrap gap-5">

                    <Link
                      href={slide.href}
                      className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-stone-900"
                    >
                      Shop Collection
                      <ArrowRight size={20} />
                    </Link>

                    <Link
                      href="/products"
                      className="inline-flex items-center gap-3 rounded-full border border-black px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
                    >
                      Explore Products
                    </Link>

                  </div>

                </div>

                {/* Right Image */}

                <div className="relative h-[420px] overflow-hidden lg:h-full">

                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority
                    sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,45vw"
                    className="object-contain transition-transform duration-700 hover:scale-105"
                  />

                  {/* Dark Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating Card */}

                  <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur">

                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                      Exclusive Offer
                    </p>

                    <h3 className="mt-2 font-serif text-2xl font-semibold text-black">
                      Beauty Essentials
                    </h3>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600">
                      Premium skincare, haircare, makeup and body care products
                      carefully selected to elevate your beauty routine.
                    </p>

                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}