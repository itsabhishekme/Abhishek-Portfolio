import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Delay helper
 */
export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Format date
 */
export function formatDate(
  date: Date | string,
  locale: string = "en-IN"
): string {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Format month/year
 */
export function formatMonthYear(
  date: Date | string
): string {
  return new Intl.DateTimeFormat("en-IN", {
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Capitalize first letter
 */
export function capitalize(
  text: string
): string {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Truncate text
 */
export function truncate(
  text: string,
  length: number = 100
): string {
  if (text.length <= length) return text;

  return `${text.slice(0, length)}...`;
}

/**
 * Generate slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Copy text
 */
export async function copyToClipboard(
  text: string
): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Email validation
 */
export function isValidEmail(
  email: string
): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * URL validation
 */
export function isValidUrl(
  url: string
): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Random integer
 */
export function randomNumber(
  min: number,
  max: number
): number {
  return Math.floor(
    Math.random() * (max - min + 1)
  ) + min;
}

/**
 * Clamp number
 */
export function clamp(
  value: number,
  min: number,
  max: number
): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Scroll to element
 */
export function scrollToSection(
  id: string
): void {
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/**
 * Scroll to top
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/**
 * Debounce
 */
export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay = 300
) {
  let timer: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

/**
 * Throttle
 */
export function throttle<T extends (...args: any[]) => void>(
  callback: T,
  delay = 300
) {
  let waiting = false;

  return (...args: Parameters<T>) => {
    if (waiting) return;

    callback(...args);

    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}

/**
 * Generate random ID
 */
export function generateId(
  length = 12
): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return result;
}

/**
 * Calculate reading time
 */
export function readingTime(
  text: string
): number {
  const words = text.trim().split(/\s+/).length;

  return Math.ceil(words / 200);
}

/**
 * Format bytes
 */
export function formatBytes(
  bytes: number,
  decimals = 2
): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;

  const dm = decimals < 0 ? 0 : decimals;

  const sizes = [
    "Bytes",
    "KB",
    "MB",
    "GB",
    "TB",
  ];

  const i = Math.floor(
    Math.log(bytes) / Math.log(k)
  );

  return (
    parseFloat(
      (bytes / Math.pow(k, i)).toFixed(dm)
    ) +
    " " +
    sizes[i]
  );
}

/**
 * Percentage
 */
export function percentage(
  value: number,
  total: number
): number {
  if (total === 0) return 0;

  return Math.round((value / total) * 100);
}

/**
 * Format number
 */
export function formatNumber(
  number: number
): string {
  return new Intl.NumberFormat("en-IN").format(
    number
  );
}

/**
 * Open external URL
 */
export function openExternal(
  url: string
): void {
  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}

/**
 * Get current year
 */
export function currentYear(): number {
  return new Date().getFullYear();
}