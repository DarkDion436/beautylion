"use client";

import { useEffect, useRef, useState } from "react";
import { Smartphone, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { OrderStatus } from "@/lib/types";
import { formatKES } from "@/lib/validators";

interface PaymentModalProps {
  status: OrderStatus;
  amount: number;
  phone: string;
  orderId?: string;
  errorMessage?: string;
  onClose: () => void;
  onRetry: () => void;
}

const POLL_INTERVAL_MS = 2500;
const MAX_POLL_ATTEMPTS = 16; // ~40 seconds before giving up

export default function PaymentModal({
  status,
  amount,
  phone,
  orderId,
  errorMessage,
  onClose,
  onRetry,
}: PaymentModalProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4 animate-fadeIn">
      <div className="bg-white rounded-sm max-w-sm w-full p-8 text-center shadow-2xl">
        {(status === "initiating" || status === "pending") && (
          <>
            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-navy-50 flex items-center justify-center relative">
              <Smartphone size={28} className="text-navy-800" />
              <Loader2 size={64} className="absolute animate-spin text-navy-200" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl mb-2">
              {status === "initiating" ? "Sending payment request..." : "Check your phone"}
            </h3>
            <p className="text-sm text-navy-500 leading-relaxed mb-4">
              Please check your phone for the M-Pesa PIN prompt...
            </p>
            <div className="bg-navy-50 rounded-sm p-4 text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-navy-500">Amount</span>
                <span className="font-medium text-ink">{formatKES(amount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-500">Phone</span>
                <span className="font-medium text-ink">{phone}</span>
              </div>
            </div>
            <p className="text-xs text-navy-400 mt-5">
              Enter your M-Pesa PIN on your phone to complete payment. This may take up to 30 seconds.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle2 size={32} className="text-green-600" />
            </div>
            <h3 className="font-serif text-xl mb-2">Payment Successful!</h3>
            <p className="text-sm text-navy-600 mb-1">
              Order <span className="font-semibold text-ink">#{orderId}</span> Confirmed
            </p>
            <p className="text-sm text-navy-500 mb-6">
              A confirmation has been sent to your email. Thank you for shopping with Lion of Judah.
            </p>
            <button onClick={onClose} className="btn-primary w-full">
              Continue Shopping
            </button>
          </>
        )}

        {status === "failed" && (
          <>
            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-red-50 flex items-center justify-center">
              <XCircle size={32} className="text-red-600" />
            </div>
            <h3 className="font-serif text-xl mb-2">Payment Failed</h3>
            <p className="text-sm text-navy-500 leading-relaxed mb-6">
              {errorMessage || "The M-Pesa request was cancelled or timed out. No charges were made."}
            </p>
            <div className="flex gap-3">
              <button onClick={onClose} className="btn-outline flex-1">
                Cancel
              </button>
              <button onClick={onRetry} className="btn-primary flex-1">
                Try Again
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
