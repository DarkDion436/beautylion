"use client";

import Image from "next/image";

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
  },
  {
    title: "Healthy Hair Starts Here",
    subtitle: "Luxury Haircare",
    discount: "SAVE 30%",
    description:
      "Discover nourishing shampoos, conditioners, hair oils, masks and growth treatments formulated to strengthen, repair and restore healthy, beautiful hair.",
    image: "/images/hairbg.png",
  },
  {
    title: "Beauty That Defines You",
    subtitle: "Professional Makeup",
    discount: "BUY 2 GET 1",
    description:
      "Explore premium foundations, concealers, lipsticks, palettes, mascaras and beauty essentials that help you create flawless looks for every occasion.",
    image: "/images/makeuppic.png",
  },
  {
    title: "Love The Skin You're In",
    subtitle: "Luxury Body Care",
    discount: "25% OFF",
    description:
      "Pamper yourself with luxurious body lotions, nourishing oils, exfoliating scrubs, body washes and fragrances for irresistibly soft, healthy skin.",
    image: "/images/bodylotions.png",
  },
  {
    title: "Glow From Within",
    subtitle: "Beauty Wellness",
    discount: "FREE SHIPPING",
    description:
      "Support healthy skin, stronger hair and beautiful nails with premium wellness supplements, collagen products and beauty gummies.",
    image: "/images/delivery.png",
  },
  {
    title: "New Beauty Arrivals",
    subtitle: "Just Landed",
    discount: "NEW COLLECTION",
    description:
      "Shop the newest skincare, makeup, body care and haircare products from trusted international beauty brands loved by professionals.",
    image: "/images/storypic.png",
  },
];

export default function DiscountBanner() {
  return (
    <section className="bg-white">
      <div className="container-x">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={900}
          loop
          className="overflow-hidden border border-slate-200 shadow-xl"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className="grid h-[70vh] min-h-[420px] lg:grid-cols-2">

                {/* Content */}
                <div className="flex flex-col justify-center bg-white px-8 sm:px-12 lg:px-20">

                  <span className="mb-4 w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-900">
                    {slide.subtitle}
                  </span>

                  <h2 className="font-serif text-3xl font-semibold leading-tight text-black md:text-5xl">
                    {slide.title}
                  </h2>



                  <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
                    {slide.description}
                  </p>

                  <span className="mt-6 w-fit rounded-full bg-blue-950 px-6 py-3 text-lg font-semibold text-white">
                    {slide.discount}
                  </span>

                </div>


                {/* Image */}
                <div className="relative h-full overflow-hidden">

                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}