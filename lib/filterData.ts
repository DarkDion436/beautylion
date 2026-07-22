// lib/filterData.ts

import {
  Brand,
  Category,
  Collection,
  Concern,
  SubCategory,
} from "./types";

export interface CategoryGroup {
  category: Category;
  subCategories: SubCategory[];
}

/* ==========================================
   CATEGORY → SUBCATEGORY HIERARCHY
========================================== */

export const categoryGroups: CategoryGroup[] = [
  {
    category: "Skincare",
    subCategories: [
      "Cleansers",
      "Face Wash",
      "Cleansing Balms",
      "Cleansing Oils",
      "Toners",
      "Essences",
      "Serums",
      "Ampoules",
      "Face Creams",
      "Moisturizers",
      "Eye Creams",
      "Face Oils",
      "Sunscreen",
      "Face Masks",
      "Sheet Masks",
      "Clay Masks",
      "Overnight Masks",
      "Exfoliators",
      "Face Scrubs",
      "Chemical Exfoliants",
      "Lip Care",
      "Acne Treatments",
      "Dark Spot Correctors",
      "Anti-Aging",
      "Brightening Products",
      "Sensitive Skin Care",
      "Men's Skincare",
    ],
  },
  {
    category: "Makeup",
    subCategories: [
      "Foundation",
      "Concealer",
      "Primer",
      "Powder",
      "Setting Spray",
      "Blush",
      "Bronzer",
      "Contour",
      "Highlighter",
      "Eyeshadow",
      "Eyeliner",
      "Mascara",
      "Eyebrow Pencil",
      "Brow Gel",
      "False Eyelashes",
      "Lipstick",
      "Lip Gloss",
      "Lip Liner",
      "Lip Balm",
      "Lip Tint",
      "Makeup Brushes",
      "Beauty Sponges",
      "Brush Cleaners",
      "Makeup Bags",
      "Mirrors",
    ],
  },
  {
    category: "Haircare",
    subCategories: [
      "Shampoo",
      "Anti-Dandruff",
      "Moisturizing Shampoo",
      "Hair Growth Shampoo",
      "Color Protection",
      "Conditioner",
      "Leave-In Conditioner",
      "Deep Conditioner",
      "Hair Masks",
      "Hair Serums",
      "Hair Oils",
      "Hair Growth Treatments",
      "Hair Gel",
      "Hair Wax",
      "Hair Spray",
      "Curl Cream",
      "Heat Protectant",
      "Combs",
      "Brushes",
      "Hair Bonnets",
      "Satin Scarves",
      "Hair Clips",
    ],
  },
  {
    category: "Body Care",
    subCategories: [
      "Body Lotions",
      "Body Creams",
      "Body Butter",
      "Body Oils",
      "Body Wash",
      "Shower Gel",
      "Bar Soap",
      "Body Scrubs",
      "Exfoliating Gloves",
      "Hand Cream",
      "Foot Cream",
      "Deodorants",
    ],
  },
  {
    category: "Fragrance",
    subCategories: [
      "Women's Perfumes",
      "Eau de Parfum",
      "Eau de Toilette",
      "Body Mists",
      "Men's Cologne",
      "Unisex Fragrances",
      "Gift Sets",
    ],
  },
  {
    category: "Wellness",
    subCategories: [
      "Apple Cider Vinegar Gummies",
      "Collagen Gummies",
      "Hair Gummies",
      "Sleep Gummies",
      "Detox Gummies",
      "Multivitamin Gummies",
      "Weight Management",
      "Detox",
      "Immune Support",
      "Collagen",
      "Biotin",
      "Women's Health",
      "Men's Health",
    ],
  },
  {
    category: "Essential Oils",
    subCategories: [
      "Tea Tree Oil",
      "Rosemary Oil",
      "Batana Oil",
      "Castor Oil",
      "Argan Oil",
      "Jojoba Oil",
      "Coconut Oil",
      "Peppermint Oil",
      "Lavender Oil",
    ],
  },
  {
    category: "Nails",
    subCategories: [
      "Nail Polish",
      "Gel Polish",
      "Nail Treatments",
      "Nail Files",
      "Nail Clippers",
      "Cuticle Oil",
      "Nail Glue",
      "Press-On Nails",
    ],
  },
  {
    category: "Beauty Tools",
    subCategories: [
      "Facial Rollers",
      "Gua Sha",
      "Facial Cleansing Brushes",
      "Blackhead Removers",
      "LED Face Masks",
      "Hair Dryers",
      "Hair Straighteners",
      "Curling Irons",
      "Trimmers",
    ],
  },
  {
    category: "Baby Care",
    subCategories: [
      "Baby Lotion",
      "Baby Oil",
      "Baby Shampoo",
      "Baby Soap",
      "Baby Powder",
    ],
  },
  {
    category: "Men's Grooming",
    subCategories: [
      "Beard Oil",
      "Beard Balm",
      "Beard Wash",
      "Shaving Cream",
      "Aftershave",
      "Men's Face Wash",
      "Men's Moisturizers",
      "Hair Styling",
    ],
  },
  {
    category: "Gift Shop",
    subCategories: [
      "Gift Sets",
      "Beauty Bundles",
      "Holiday Gifts",
      "Birthday Gifts",
      "Self-Care Kits",
    ],
  },
];

/* ==========================================
   MAIN CATEGORIES
========================================== */

export const categories: Category[] = categoryGroups.map(
  (group) => group.category
);

/* ==========================================
   BRANDS
========================================== */

export const brands: Brand[] = [
  "COSRX",
  "Dr. Rashel",
  "Simple",
  "The Ordinary",
  "CeraVe",
  "La Roche-Posay",
  "Neutrogena",
  "Cetaphil",
  "Eucerin",
  "Nivea",
  "Dove",
  "Vaseline",
  "Garnier",
  "L'Oréal Paris",
  "Maybelline",
  "NYX",
  "Revlon",
  "Black Opal",
  "Palmer's",
  "Bio-Oil",
  "Aveeno",
];

/* ==========================================
   SHOP BY CONCERN
========================================== */

export const concerns: Concern[] = [
  "Acne",
  "Dark Spots",
  "Hyperpigmentation",
  "Dry Skin",
  "Oily Skin",
  "Sensitive Skin",
  "Aging Skin",
  "Fine Lines",
  "Wrinkles",
  "Dull Skin",
  "Hair Loss",
  "Hair Growth",
  "Damaged Hair",
  "Frizzy Hair",
  "Curly Hair",
  "Weight Management",
  "Detox",
  "Glow & Brightening",
];

/* ==========================================
   FEATURED COLLECTIONS
========================================== */

export const collections: Collection[] = [
  "Best Sellers",
  "New Arrivals",
  "Trending Now",
  "Editor's Picks",
  "Under KSh 1,000",
  "Under KSh 2,500",
  "Luxury Beauty",
  "K-Beauty",
  "Organic & Natural",
  "Vegan Beauty",
  "Cruelty-Free",
  "Limited Offers",
  "Clearance Sale",
];

/* ==========================================
   HELPERS
========================================== */

export function getSubCategories(category: Category): SubCategory[] {
  return (
    categoryGroups.find((g) => g.category === category)?.subCategories ?? []
  );
}

export function getCategoryFromSubCategory(
  subCategory: SubCategory
): Category | undefined {
  return categoryGroups.find((group) =>
    group.subCategories.includes(subCategory)
  )?.category;
}

export const allSubCategories: SubCategory[] = categoryGroups.flatMap(
  (group) => group.subCategories
);