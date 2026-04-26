import { addons, baseRates } from '@/data/calculator';

export type CalcParams = {
  category: string;
  hours: number;
  guests: number;
  equipment: boolean;
  catering: boolean;
  cleaning: boolean;
  admin: boolean;
};

export function calculatePrice(params: CalcParams): number {
  const pricePerHour = baseRates[params.category] ?? 1200;
  const base = pricePerHour * params.hours;
  const equipment = params.equipment ? addons.equipment : 0;
  const catering = params.catering ? addons.cateringPerGuest * params.guests : 0;
  const cleaning = params.cleaning ? addons.cleaning : 0;
  const admin = params.admin ? addons.adminPerHour * params.hours : 0;
  return base + equipment + catering + cleaning + admin;
}
