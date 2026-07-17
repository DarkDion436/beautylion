/**
 * In-memory mock of what would normally be a database table tracking
 * M-Pesa STK Push requests and their Daraja callback results.
 *
 * In production, replace this with a real database (Postgres, etc.),
 * since serverless function instances do not share memory reliably.
 */

export type MockOrderStatus = "pending" | "success" | "failed";

export interface MockOrder {
  checkoutRequestId: string;
  merchantRequestId: string;
  orderId: string;
  phone: string;
  amount: number;
  status: MockOrderStatus;
  createdAt: number;
  resultDescription?: string;
}

declare global {
  // eslint-disable-next-line no-var
  var __mpesaOrders: Map<string, MockOrder> | undefined;
}

const store: Map<string, MockOrder> =
  global.__mpesaOrders ?? new Map<string, MockOrder>();
global.__mpesaOrders = store;

export function createMockOrder(order: MockOrder) {
  store.set(order.checkoutRequestId, order);
}

export function getMockOrder(checkoutRequestId: string): MockOrder | undefined {
  return store.get(checkoutRequestId);
}

export function resolveMockOrder(checkoutRequestId: string) {
  const order = store.get(checkoutRequestId);
  if (!order || order.status !== "pending") return;

  // Simulate Daraja outcome: ~90% success rate, like a real STK push.
  const isSuccess = Math.random() < 0.9;
  order.status = isSuccess ? "success" : "failed";
  order.resultDescription = isSuccess
    ? "The service request is processed successfully."
    : "Request cancelled by user or timed out.";
  store.set(checkoutRequestId, order);
}
