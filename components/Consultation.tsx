"use client";

import Image from "next/image";
import {
  Clock3,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Consultation() {
  return (
    <section className="bg-gradient-to-b from-white via-stone-50 to-white py-24">
      <div className="container-x">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT IMAGE */}

          <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

            <Image
              src="/images/consult.png"
              alt="Beauty Consultation"
              width={700}
              height={900}
              priority
              className="object-contain h-full w-full  transition duration-700 hover:scale-105"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Floating Card */}

            <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/95 p-6 backdrop-blur">

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
                Complimentary Beauty Consultation
              </span>

              <h2 className="mt-3 font-serif text-3xl text-black">
                Your Beauty Journey Starts Here
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Receive personalized skincare, makeup, haircare and bodycare
                recommendations from our beauty specialists based on your
                unique goals and lifestyle.
              </p>

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <span className="inline-flex rounded-full border border-stone-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-600">
              Beauty Experts
            </span>

            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-black lg:text-5xl">
              Get Personalized Beauty Advice
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Not sure which skincare routine, foundation shade, hair treatment
              or beauty products are right for you? Our beauty consultants are
              here to guide you with expert recommendations tailored to your
              individual needs.
            </p>

            {/* Features */}

            <div className="mt-12 grid gap-8 sm:grid-cols-2">

              <div className="flex gap-4">

                <div className="rounded-full bg-black p-3 text-white">
                  <Clock3 size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-black">
                    30-Minute Session
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Dedicated one-on-one beauty consultation.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="rounded-full bg-black p-3 text-white">
                  <PhoneCall size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-black">
                    Virtual or WhatsApp
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Chat with our specialists from anywhere.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="rounded-full bg-black p-3 text-white">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-black">
                    Trusted Recommendations
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Honest advice based on your beauty goals.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="rounded-full bg-black p-3 text-white">
                  <Sparkles size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-black">
                    Tailored Beauty Routine
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Personalized skincare and beauty plan.
                  </p>
                </div>

              </div>

            </div>

            {/* FORM */}

            <div className="mt-14 rounded-3xl border border-stone-200 bg-white p-8 shadow-xl">

              <form className="space-y-6">

                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="rounded-xl border border-stone-300 px-5 py-4 outline-none transition focus:border-black"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="rounded-xl border border-stone-300 px-5 py-4 outline-none transition focus:border-black"
                  />

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-xl border border-stone-300 px-5 py-4 outline-none transition focus:border-black"
                  />

                  <select className="rounded-xl border border-stone-300 px-5 py-4 outline-none transition focus:border-black">

                    <option>Consultation Type</option>

                    <option>Skincare Consultation</option>

                    <option>Haircare Consultation</option>

                    <option>Makeup Consultation</option>

                    <option>Body Care Consultation</option>

                    <option>Beauty Routine Advice</option>

                    <option>Product Recommendation</option>

                  </select>

                </div>

                <textarea
                  rows={5}
                  placeholder="Tell us about your beauty concerns or goals..."
                  className="w-full rounded-xl border border-stone-300 px-5 py-4 outline-none transition focus:border-black"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-black py-4 font-semibold text-white transition duration-300 hover:bg-stone-900"
                >
                  Book Your Free Consultation
                  <ArrowRight size={18} />
                </button>

              </form>

            </div>

            {/* Trust Stats */}

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8 text-center">

              <div>
                <h3 className="text-3xl font-bold text-black">10K+</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-black">500+</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Premium Products
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-black">4.9★</h3>
                <p className="mt-2 text-sm text-gray-600">
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