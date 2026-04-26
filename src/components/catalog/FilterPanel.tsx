'use client';

import { categories } from '@/data/categories';
import { useCatalogStore } from '@/store/catalogStore';

export function FilterPanel() {
  const { category, city, guests, setCategory, setCity, setGuests, reset } = useCatalogStore();

  return (
    <aside className="space-y-3 rounded-lg border border-parchment bg-white p-4">
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded-sm border border-parchment p-2">
        <option value="">Все категории</option>
        {categories.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Город" className="w-full rounded-sm border border-parchment p-2" />
      <input type="number" value={guests} onChange={(e) => setGuests(Number(e.target.value))} placeholder="Гостей" className="w-full rounded-sm border border-parchment p-2" />
      <button className="text-sm underline" onClick={reset}>Сбросить фильтры</button>
    </aside>
  );
}
