"use client";

import {
  Truck,
  Headset,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Countrywide Fast Delivery",
    description:
      "Enjoy fast, secure and reliable delivery to every county across Kenya.",
  },
  {
    icon: Headset,
    title: "24/7 Help Desk",
    description:
      "Our friendly beauty specialists are available to assist with orders and product recommendations.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Pay safely using trusted and encrypted payment methods for complete peace of mind.",
  },
  {
    icon: BadgeCheck,
    title: "100% Authentic Products",
    description:
      "Shop genuine skincare, haircare, makeup and bodycare products from trusted global brands.",
  },
];

export default function FeaturesBanner() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 divide-y divide-stone-200 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex items-start gap-5 p-8 transition-all duration-300 hover:bg-stone-50"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600">
                  <Icon size={26} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-black transition-colors duration-300 group-hover:text-red-600">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}