import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Currency formatting utility
export function formatCurrency(amount: number | string | undefined | null): string {
  if (amount === undefined || amount === null) return "£0";
  
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  
  if (isNaN(numAmount)) return "£0";
  
  return `£${numAmount.toLocaleString('en-GB')}`;
}
