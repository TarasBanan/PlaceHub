'use client';

import { categories } from '@/data/categories';
import { useCatalogStore } from '@/store/catalogStore';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export function FilterPanel() {
  const { category, city, guests, setCategory, setCity, setGuests, reset } = useCatalogStore();
  const { locale } = useLanguage();

  return (
    <aside className="h-fit self-start space-y-3 rounded-lg border border-parchment bg-white p-4 lg:sticky lg:top-24">
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded-sm border border-parchment p-2">
        <option value="">{locale === 'ru' ? 'Все категории' : 'All categories'}</option>
        {categories.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder={locale === 'ru' ? 'Город' : 'City'} className="w-full rounded-sm border border-parchment p-2" />
      <input type="number" value={guests} onChange={(e) => setGuests(Number(e.target.value))} placeholder={locale === 'ru' ? 'Гостей' : 'Guests'} className="w-full rounded-sm border border-parchment p-2" />
      <button className="text-sm underline" onClick={reset}>{locale === 'ru' ? 'Сбросить фильтры' : 'Reset filters'}</button>
    </aside>
  );
}
