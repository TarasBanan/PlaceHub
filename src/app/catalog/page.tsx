'use client';

import { FilterPanel } from '@/components/catalog/FilterPanel';
import { SortSelect } from '@/components/catalog/SortSelect';
import { VenueGrid } from '@/components/catalog/VenueGrid';
import { useVenueFilters } from '@/hooks/useVenueFilters';

export default function CatalogPage() {
  const items = useVenueFilters();

  return (
    <section className="py-10">
      <div className="container-shell grid grid-cols-1 gap-6 lg:grid-cols-[280px,1fr]">
        <FilterPanel />
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Каталог площадок</h1>
            <SortSelect />
          </div>
          <VenueGrid items={items} />
        </div>
      </div>
    </section>
  );
}
