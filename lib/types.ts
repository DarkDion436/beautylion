// lib/types.ts

export type Category =
  | "Skincare"
  | "Haircare"
  | "Makeup"
  | "Fragrance"
  | "Body Care"
  | "Wellness"
  | "Essential Oils"
  | "Nails"
  | "Beauty Tools"
  | "Baby Care"
  | "Men's Grooming"
  | "Gift Shop";

export type SubCategory = string;
export type Brand = string;
export type Concern = string;
export type Collection = string;

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  subcategory: string;
  concerns: string[];
  description: string;
  image: string;
  price: number;
  rating: number;
  stock: number;
  isNew: boolean;
  isBestSeller: boolean;
  dateAdded: string;
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