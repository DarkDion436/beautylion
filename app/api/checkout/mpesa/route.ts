import { NextRequest, NextResponse } from "next/server";
import { createMockOrder, resolveMockOrder } from "@/lib/mpesaStore";
import { normalizeSafaricomPhone } from "@/lib/validators";

/**
 * ---------------------------------------------------------------------------
 * MOCK Safaricom Daraja M-Pesa STK Push integration.
 *
 * A real implementation would:
 *   1. POST to https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials
 *      (Basic Auth with Consumer Key/Secret) to get a bearer access token.
 *   2. POST to https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest
 *      with the Password (base64 of Shortcode+Passkey+Timestamp), BusinessShortCode,
 *      Amount, PartyA (customer phone), PartyB (shortcode), PhoneNumber, CallBackURL,
 *      AccountReference, and TransactionDesc.
 *   3. Safaricom responds immediately with a CheckoutRequestID + MerchantRequestID.
 *   4. Safaricom later calls YOUR CallBackURL (webhook) with the final result —
 *      this cannot be polled directly from Safaricom, so apps store the result
 *      from the callback and let the frontend poll YOUR OWN /status endpoint.
 *
 * Below, steps 1-3 are simulated, and step 4 (the callback) is simulated with
 * a delayed resolution so the /status endpoint has something to report.
 * ---------------------------------------------------------------------------
 */

interface CheckoutRequestBody {
  phone: string;
  amount: number;
  fullName: string;
  email: string;
  address: string;
}

function generateMockToken(): string {
  // Simulates: POST /oauth/v1/generate?grant_type=client_credentials
  return `mock_access_token_${Math.random().toString(36).slice(2)}`;
}

function generateId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`.toUpperCase();
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequestBody = await request.json();
    const { phone, amount, fullName, email, address } = body;

    if (!phone || !amount || !fullName || !email || !address) {
      return NextResponse.json(
        { success: false, message: "Missing required checkout fields." },
        { status: 400 }
      );
    }

    const normalizedPhone = normalizeSafaricomPhone(phone);

    // Step 1 (mocked): OAuth token generation
    const accessToken = generateMockToken();
    void accessToken; // would be used as Bearer token in the real Daraja call

    // Step 2-3 (mocked): STK Push / processrequest call
    const checkoutRequestId = generateId("ws_CO");
    const merchantRequestId = generateId("MR");
    const orderId = generateId("ORD");

    createMockOrder({
      checkoutRequestId,
      merchantRequestId,
      orderId,
      phone: normalizedPhone,
      amount,
      status: "pending",
      createdAt: Date.now(),
    });

    // Step 4 (mocked): simulate Safaricom's async callback arriving after a
    // realistic delay (STK prompts typically resolve in 5-20 seconds).
    const delayMs = 6000 + Math.floor(Math.random() * 5000);
    setTimeout(() => resolveMockOrder(checkoutRequestId), delayMs);

    return NextResponse.json({
      success: true,
      checkoutRequestId,
      merchantRequestId,
      message: "STK Push sent. Please check your phone for the M-Pesa PIN prompt.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to initiate M-Pesa STK Push." },
      { status: 500 }
    );
  }
}
