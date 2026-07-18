"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+254793692936"; // Replace with your WhatsApp number
const MESSAGE =
  "Hello Lion Of Judah, I'm interested in your products and would like to place an order.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    MESSAGE
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm text-white shadow-lg group-hover:block">
        Chat with us on WhatsApp
      </div>

      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_20px_45px_rgba(37,211,102,0.45)] active:scale-95"
      >
        <MessageCircle size={30} strokeWidth={2.3} />
      </Link>

      {/* Pulse */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40"></span>

    </div>
  );
}