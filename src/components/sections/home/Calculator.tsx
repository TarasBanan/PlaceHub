'use client';

import { categories } from '@/data/categories';
import { useCalculator } from '@/hooks/useCalculator';
import { formatPrice } from '@/lib/utils';

export function Calculator() {
  const calc = useCalculator();
  return (
    <section className="py-14">
      <div className="container-shell rounded-lg border border-parchment p-6">
        <h2 className="mb-4 text-2xl font-semibold">Калькулятор аренды</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <select value={calc.category} onChange={(e) => calc.setCategory(e.target.value)} className="rounded-sm border border-parchment p-2">{categories.slice(0, 5).map((item) => <option key={item}>{item}</option>)}</select>
          <input type="number" min={1} value={calc.hours} onChange={(e) => calc.setHours(Number(e.target.value))} className="rounded-sm border border-parchment p-2" />
          <input type="number" min={1} value={calc.guests} onChange={(e) => calc.setGuests(Number(e.target.value))} className="rounded-sm border border-parchment p-2" />
        </div>
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          <label><input type="checkbox" checked={calc.equipment} onChange={(e) => calc.setEquipment(e.target.checked)} /> Техника</label>
          <label><input type="checkbox" checked={calc.catering} onChange={(e) => calc.setCatering(e.target.checked)} /> Кейтеринг</label>
          <label><input type="checkbox" checked={calc.cleaning} onChange={(e) => calc.setCleaning(e.target.checked)} /> Уборка</label>
          <label><input type="checkbox" checked={calc.admin} onChange={(e) => calc.setAdmin(e.target.checked)} /> Администратор</label>
        </div>
        <p className="mt-4 text-xl font-semibold">Итого: {formatPrice(calc.total)} ₽</p>
      </div>
    </section>
  );
}
