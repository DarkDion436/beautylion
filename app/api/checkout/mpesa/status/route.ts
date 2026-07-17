import { NextRequest, NextResponse } from "next/server";
import { getMockOrder } from "@/lib/mpesaStore";

/**
 * The frontend polls THIS endpoint (not Safaricom directly) to check whether
 * the async M-Pesa callback has landed yet. In production this reads the
 * latest status your CallBackURL webhook wrote to your database.
 */
export async function GET(request: NextRequest) {
  const checkoutRequestId = request.nextUrl.searchParams.get("checkoutRequestId");

  if (!checkoutRequestId) {
    return NextResponse.json(
      { status: "failed", resultDescription: "Missing checkoutRequestId." },
      { status: 400 }
    );
  }

  const order = getMockOrder(checkoutRequestId);

  if (!order) {
    return NextResponse.json(
      { status: "failed", resultDescription: "Order not found." },
      { status: 404 }
    );
  }

  return NextResponse.json({
    status: order.status,
    orderId: order.status === "success" ? order.orderId : undefined,
    resultDescription: order.resultDescription,
  });
}
