import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('ru-RU').format(value);
}
