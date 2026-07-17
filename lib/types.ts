export type Category = "Skincare" | "Haircare" | "Makeup" | "Fragrance";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number; // KES
  image: string;
  description: string;
  isNew: boolean;
  isBestSeller: boolean;
  dateAdded: string; // ISO date, used for "Newest" sort
  rating: number;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutDetails {
  fullName: string;
  email: string;
  address: string;
  phone: string;
}

export type OrderStatus = "idle" | "initiating" | "pending" | "success" | "failed";

export interface MpesaCheckoutResponse {
  success: boolean;
  checkoutRequestId?: string;
  merchantRequestId?: string;
  message: string;
}

export interface MpesaStatusResponse {
  status: "pending" | "success" | "failed";
  orderId?: string;
  resultDescription?: string;
}
