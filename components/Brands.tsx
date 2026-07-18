"use client";

import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "CeraVe",
    logo: "/images/brands/cerave.png",
    href: "/brands/cerave",
  },
  {
    name: "The Ordinary",
    logo: "/images/brands/the-ordinary.png",
    href: "/brands/the-ordinary",
  },
  {
    name: "COSRX",
    logo: "/images/brands/cosrx.png",
    href: "/brands/cosrx",
  },
  {
    name: "Beauty of Joseon",
    logo: "/images/brands/beauty-of-joseon.png",
    href: "/brands/beauty-of-joseon",
  },
  {
    name: "La Roche-Posay",
    logo: "/images/brands/la-roche-posay.png",
    href: "/brands/la-roche-posay",
  },
  {
    name: "Cetaphil",
    logo: "/images/brands/cetaphil.png",
    href: "/brands/cetaphil",
  },
  {
    name: "Neutrogena",
    logo: "/images/brands/neutrogena.png",
    href: "/brands/neutrogena",
  },
  {
    name: "Eucerin",
    logo: "/images/brands/eucerin.png",
    href: "/brands/eucerin",
  },
  {
    name: "Simple",
    logo: "/images/brands/simple.png",
    href: "/brands/simple",
  },
  {
    name: "Nivea",
    logo: "/images/brands/nivea.png",
    href: "/brands/nivea",
  },
  {
    name: "Aveeno",
    logo: "/images/brands/aveeno.png",
    href: "/brands/aveeno",
  },
  {
    name: "Garnier",
    logo: "/images/brands/garnier.png",
    href: "/brands/garnier",
  },
  {
    name: "L'Oréal Paris",
    logo: "/images/brands/loreal.png",
    href: "/brands/loreal",
  },
  {
    name: "Maybelline",
    logo: "/images/brands/maybelline.png",
    href: "/brands/maybelline",
  },
  {
    name: "MAC Cosmetics",
    logo: "/images/brands/mac.png",
    href: "/brands/mac",
  },
  {
    name: "Fenty Beauty",
    logo: "/images/brands/fenty.png",
    href: "/brands/fenty",
  },
  {
    name: "Huda Beauty",
    logo: "/images/brands/huda.png",
    href: "/brands/huda",
  },
  {
    name: "Rare Beauty",
    logo: "/images/brands/rare-beauty.png",
    href: "/brands/rare-beauty",
  },
  {
    name: "Dove",
    logo: "/images/brands/dove.png",
    href: "/brands/dove",
  },
  {
    name: "Vaseline",
    logo: "/images/brands/vaseline.png",
    href: "/brands/vaseline",
  },
];

export default function Brands() {
  return (
    <section className="bg-white py-20">
      <div className="container-x">

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-stone-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-stone-600">
            Trusted Beauty Brands
          </span>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={brand.href}
              className="group flex h-36 items-center justify-center rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-black hover:shadow-xl"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  sizes="160px"
                  className="object-contain grayscale transition duration-300 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}

        </div>

        <div className="mt-16 text-center">

          <p className="text-gray-600">
            ✔ 100% Authentic Products &nbsp; • &nbsp;
            ✔ Trusted Global Brands &nbsp; • &nbsp;
            ✔ Fast Nationwide Delivery
          </p>

        </div>

      </div>
    </section>
  );
}