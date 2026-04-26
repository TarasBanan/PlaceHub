'use client';

import { create } from 'zustand';
import { SortKey } from '@/lib/filters';

type CatalogState = {
  category: string;
  city: string;
  guests: number;
  sort: SortKey;
  setCategory: (value: string) => void;
  setCity: (value: string) => void;
  setGuests: (value: number) => void;
  setSort: (value: SortKey) => void;
  reset: () => void;
};

export const useCatalogStore = create<CatalogState>((set) => ({
  category: '', city: '', guests: 0, sort: 'popularity',
  setCategory: (value) => set({ category: value }),
  setCity: (value) => set({ city: value }),
  setGuests: (value) => set({ guests: value }),
  setSort: (value) => set({ sort: value }),
  reset: () => set({ category: '', city: '', guests: 0, sort: 'popularity' })
}));
