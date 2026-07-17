# Noire Beauté — Beauty E-Commerce Storefront

A friction-free, account-free beauty e-commerce site built with Next.js 14
(App Router), TypeScript, Tailwind CSS, Zustand, and Lucide React.

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Project Structure

```
app/
  layout.tsx              Root layout (Header, Footer, Cart Drawer, Floating Cart)
  page.tsx                 Home (hero, categories, best sellers preview)
  shop/page.tsx             Full catalog with filters/sort
  new-arrivals/page.tsx     New arrivals grid
  best-sellers/page.tsx     Best sellers grid
  about/page.tsx            Brand story
  contacts/page.tsx         Contact form + operational info
  checkout/page.tsx         Guest checkout + M-Pesa flow
  api/checkout/mpesa/route.ts          Mock STK Push initiation endpoint
  api/checkout/mpesa/status/route.ts   Mock status polling endpoint

components/
  Header.tsx, Footer.tsx, PromoBanner.tsx
  ProductCard.tsx, Filters.tsx, ShopClient.tsx
  CartDrawer.tsx, FloatingCartButton.tsx
  PaymentModal.tsx

context/
  useCartStore.ts          Zustand cart store (persisted to localStorage)

lib/
  types.ts, products.ts (mock catalog), validators.ts, mpesaStore.ts
```

## M-Pesa Integration (Mocked)

`app/api/checkout/mpesa/route.ts` simulates the three real Daraja steps:

1. **OAuth token** — `POST /oauth/v1/generate?grant_type=client_credentials`
2. **STK Push** — `POST /mpesa/stkpush/v1/processrequest`
3. **Async callback** — Safaricom calls your `CallBackURL` webhook once the
   customer enters their PIN (or cancels/times out).

Since there's no real Daraja sandbox wired up, step 3 is simulated with a
`setTimeout` that resolves the mock order 6–11 seconds after initiation, with
a ~90% simulated success rate. The frontend never polls Safaricom directly —
it polls **your own** `/api/checkout/mpesa/status` endpoint, exactly as it
would in production (where that endpoint would read whatever your webhook
last wrote to your database).

### Going to production

Replace the mocked logic in `app/api/checkout/mpesa/route.ts` with real calls to:

- `https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials`
- `https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest`

and implement a `app/api/checkout/mpesa/callback/route.ts` webhook that
Safaricom calls, writing the result to a real database (the in-memory
`lib/mpesaStore.ts` Map is for demo purposes only and will not persist or
scale across serverless instances).

## Notes

- No sign-in/account system anywhere — cart persists via `localStorage` only,
  checkout is a single guest form.
- Phone validation accepts `07xxxxxxxx`, `01xxxxxxxx`, `2547xxxxxxxx`,
  `2541xxxxxxxx`, and `+2547xxxxxxxx` formats.
- Product images are pulled from Unsplash for demo purposes — swap in your
  own product photography before launch.
