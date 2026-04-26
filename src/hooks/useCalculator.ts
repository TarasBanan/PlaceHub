'use client';

import { useMemo, useState } from 'react';
import { calculatePrice } from '@/lib/calculatePrice';

export function useCalculator() {
  const [category, setCategory] = useState('Коворкинги');
  const [hours, setHours] = useState(2);
  const [guests, setGuests] = useState(10);
  const [equipment, setEquipment] = useState(false);
  const [catering, setCatering] = useState(false);
  const [cleaning, setCleaning] = useState(false);
  const [admin, setAdmin] = useState(false);

  const total = useMemo(
    () => calculatePrice({ category, hours, guests, equipment, catering, cleaning, admin }),
    [category, hours, guests, equipment, catering, cleaning, admin]
  );

  return {
    category, setCategory,
    hours, setHours,
    guests, setGuests,
    equipment, setEquipment,
    catering, setCatering,
    cleaning, setCleaning,
    admin, setAdmin,
    total
  };
}
