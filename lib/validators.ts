/**
 * Validates Safaricom phone numbers.
 * Accepts: 07xxxxxxxx, 01xxxxxxxx, 2547xxxxxxxx, 2541xxxxxxxx, +2547xxxxxxxx
 */
export function isValidSafaricomPhone(phone: string): boolean {
  const cleaned = phone.replace(/\s|-/g, "");
  const patterns = [
    /^0[71]\d{8}$/, // 07xxxxxxxx or 01xxxxxxxx
    /^254[71]\d{8}$/, // 2547xxxxxxxx or 2541xxxxxxxx
    /^\+254[71]\d{8}$/, // +2547xxxxxxxx
  ];
  return patterns.some((p) => p.test(cleaned));
}

/**
 * Normalizes any accepted Safaricom phone format to the Daraja-required
 * 2547XXXXXXXX / 2541XXXXXXXX format.
 */
export function normalizeSafaricomPhone(phone: string): string {
  let cleaned = phone.replace(/\s|-/g, "");
  if (cleaned.startsWith("+254")) cleaned = cleaned.slice(1);
  if (cleaned.startsWith("0")) cleaned = "254" + cleaned.slice(1);
  return cleaned;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function formatKES(amount: number): string {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(amount);
}
