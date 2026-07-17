"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { useCartStore } from "@/context/useCartStore";
import { formatKES, isValidEmail, isValidSafaricomPhone } from "@/lib/validators";
import { OrderStatus, CheckoutDetails } from "@/lib/types";
import PaymentModal from "@/components/PaymentModal";

const DELIVERY_FEE = 300;
const POLL_INTERVAL_MS = 2500;
const MAX_POLL_ATTEMPTS = 16;

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal());
  const clearCart = useCartStore((s) => s.clearCart);

  const [form, setForm] = useState<CheckoutDetails>({
    fullName: "",
    email: "",
    address: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutDetails, string>>>({});
  const [status, setStatus] = useState<OrderStatus>("idle");
  const [orderId, setOrderId] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const pollAttempts = useRef(0);
  const checkoutRequestId = useRef<string | null>(null);

  const total = subtotal + (items.length > 0 ? DELIVERY_FEE : 0);

  useEffect(() => {
    return () => {
      // no-op cleanup placeholder; interval is cleared inline where started
    };
  }, []);

  function validate(): boolean {
    const newErrors: Partial<Record<keyof CheckoutDetails, string>> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!isValidEmail(form.email)) newErrors.email = "Enter a valid email address.";
    if (!form.address.trim()) newErrors.address = "Delivery address is required.";
    if (!isValidSafaricomPhone(form.phone))
      newErrors.phone = "Enter a valid Safaricom number, e.g. 0712345678.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function pollStatus(reqId: string) {
    pollAttempts.current += 1;

    try {
      const res = await fetch(`/api/checkout/mpesa/status?checkoutRequestId=${reqId}`);
      const data = await res.json();

      if (data.status === "success") {
        setStatus("success");
        setOrderId(data.orderId);
        clearCart();
        return;
      }

      if (data.status === "failed") {
        setStatus("failed");
        setErrorMessage(data.resultDescription);
        return;
      }

      // still pending
      if (pollAttempts.current >= MAX_POLL_ATTEMPTS) {
        setStatus("failed");
        setErrorMessage("We didn't receive a response in time. Please try again.");
        return;
      }

      setTimeout(() => pollStatus(reqId), POLL_INTERVAL_MS);
    } catch {
      setStatus("failed");
      setErrorMessage("Something went wrong while confirming payment.");
    }
  }

  async function handlePlaceOrder() {
    if (!validate()) return;

    setStatus("initiating");
    setErrorMessage(undefined);
    pollAttempts.current = 0;

    try {
      const res = await fetch("/api/checkout/mpesa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: form.phone,
          amount: total,
          fullName: form.fullName,
          email: form.email,
          address: form.address,
        }),
      });
      const data = await res.json();

      if (!data.success) {
        setStatus("failed");
        setErrorMessage(data.message);
        return;
      }

      checkoutRequestId.current = data.checkoutRequestId;
      setStatus("pending");
      setTimeout(() => pollStatus(data.checkoutRequestId), POLL_INTERVAL_MS);
    } catch {
      setStatus("failed");
      setErrorMessage("Could not reach the payment server. Please try again.");
    }
  }

  function handleRetry() {
    handlePlaceOrder();
  }

  function handleCloseModal() {
    if (status === "success") {
      router.push("/shop");
    }
    setStatus("idle");
  }

  if (items.length === 0 && status !== "success") {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="section-heading mb-4">Your bag is empty</h1>
        <p className="text-navy-500 mb-8">Add some products before checking out.</p>
        <Link href="/shop" className="btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container-x py-14">
      <h1 className="section-heading mb-10">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Form */}
        <div className="lg:col-span-3">
          <h2 className="text-sm uppercase tracking-wider text-navy-500 mb-5">
            Delivery & Contact Details
          </h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1.5">Full Name</label>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className={`w-full border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 ${
                  errors.fullName ? "border-red-400 focus:ring-red-400" : "border-navy-200 focus:ring-navy-800"
                }`}
                placeholder="Jane Wanjiru"
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 ${
                  errors.email ? "border-red-400 focus:ring-red-400" : "border-navy-200 focus:ring-navy-800"
                }`}
                placeholder="jane@email.com"
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Delivery Location / Address</label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className={`w-full border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 ${
                  errors.address ? "border-red-400 focus:ring-red-400" : "border-navy-200 focus:ring-navy-800"
                }`}
                placeholder="e.g. Kilimani, Nairobi — Apartment 4B, Argwings Kodhek Rd"
              />
              {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Safaricom Phone Number</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={`w-full border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 ${
                  errors.phone ? "border-red-400 focus:ring-red-400" : "border-navy-200 focus:ring-navy-800"
                }`}
                placeholder="0712345678"
              />
              {errors.phone ? (
                <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
              ) : (
                <p className="text-xs text-navy-400 mt-1">
                  The M-Pesa PIN prompt will be sent to this number.
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-8 text-xs text-navy-500">
            <ShieldCheck size={16} className="text-navy-700" />
            No account needed — your details are used only for this order.
          </div>
        </div>

        {/* Order summary */}
        <div className="lg:col-span-2">
          <div className="bg-navy-50/50 border border-navy-100 rounded-sm p-6 lg:sticky lg:top-28">
            <h2 className="text-sm uppercase tracking-wider text-navy-500 mb-5">Order Summary</h2>
            <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3">
                  <div className="relative h-16 w-14 flex-shrink-0 rounded-sm overflow-hidden bg-white">
                    <Image src={product.image} alt={product.name} fill className="object-cover" sizes="56px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-serif truncate">{product.name}</p>
                    <p className="text-xs text-navy-500">Qty {quantity}</p>
                  </div>
                  <p className="text-sm font-medium">{formatKES(product.price * quantity)}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-navy-200 mt-5 pt-5 space-y-2 text-sm">
              <div className="flex justify-between text-navy-600">
                <span>Subtotal</span>
                <span>{formatKES(subtotal)}</span>
              </div>
              <div className="flex justify-between text-navy-600">
                <span>Delivery</span>
                <span>{formatKES(DELIVERY_FEE)}</span>
              </div>
              <div className="flex justify-between font-medium text-base text-ink pt-2 border-t border-navy-200">
                <span>Total</span>
                <span>{formatKES(total)}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={status === "initiating" || status === "pending"}
              className="btn-primary w-full mt-6"
            >
              Place Order &amp; Pay via M-Pesa
            </button>
          </div>
        </div>
      </div>

      {status !== "idle" && (
        <PaymentModal
          status={status}
          amount={total}
          phone={form.phone}
          orderId={orderId}
          errorMessage={errorMessage}
          onClose={handleCloseModal}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
}
