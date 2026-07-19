"use client";

import Image from "next/image";
import {
  Clock3,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Consultation() {
  return (
    <section className="bg-gradient-to-b from-white via-stone-50 to-white py-16 min-h-[60vh] flex items-center">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="relative h-[60vh] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/consult.png"
              alt="Beauty Consultation"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-5 backdrop-blur-md shadow-lg">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-500">
                Complimentary Consultation
              </span>

              <h2 className="mt-2 font-serif text-2xl font-semibold text-black">
                Your Beauty Journey Starts Here
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Receive personalized skincare, makeup, haircare and bodycare
                recommendations from our beauty specialists based on your
                beauty goals.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="inline-flex rounded-full border border-stone-300 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-600">
              Beauty Experts
            </span>

            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-black lg:text-4xl">
              Get Personalized Beauty Advice
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
              Not sure which skincare routine, foundation shade, hair treatment
              or beauty products are right for you? Our beauty consultants are
              here to guide you with expert recommendations tailored to your
              unique needs.
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="rounded-full bg-black p-2.5 text-white">
                  <Clock3 size={20} />
                </div>

                <div>
                  <h4 className="text-base font-semibold text-black">
                    30-Minute Session
                  </h4>

                  <p className="mt-1 text-sm leading-5 text-gray-600">
                    Dedicated one-on-one consultation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-full bg-black p-2.5 text-white">
                  <PhoneCall size={20} />
                </div>

                <div>
                  <h4 className="text-base font-semibold text-black">
                    Virtual or WhatsApp
                  </h4>

                  <p className="mt-1 text-sm leading-5 text-gray-600">
                    Chat with our specialists from anywhere.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-full bg-black p-2.5 text-white">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <h4 className="text-base font-semibold text-black">
                    Trusted Advice
                  </h4>

                  <p className="mt-1 text-sm leading-5 text-gray-600">
                    Honest recommendations tailored to your beauty goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-full bg-black p-2.5 text-white">
                  <Sparkles size={20} />
                </div>

                <div>
                  <h4 className="text-base font-semibold text-black">
                    Custom Routine
                  </h4>

                  <p className="mt-1 text-sm leading-5 text-gray-600">
                    Personalized skincare and beauty plans.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-stone-200 pt-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-black">10K+</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black">500+</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Products
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black">4.9★</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Customer Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}