'use client';

import { useCatalogStore } from '@/store/catalogStore';

export function SortSelect() {
  const { sort, setSort } = useCatalogStore();
  return (
    <select value={sort} onChange={(e) => setSort(e.target.value === 'priceAsc' ? 'priceAsc' : e.target.value === 'priceDesc' ? 'priceDesc' : e.target.value === 'rating' ? 'rating' : e.target.value === 'capacity' ? 'capacity' : 'popularity')} className="rounded-sm border border-parchment p-2">
      <option value="popularity">По популярности</option>
      <option value="priceAsc">Цена: дешевле</option>
      <option value="priceDesc">Цена: дороже</option>
      <option value="rating">По рейтингу</option>
      <option value="capacity">По вместимости</option>
    </select>
  );
}
