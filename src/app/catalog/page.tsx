'use client';

import { FilterPanel } from '@/components/catalog/FilterPanel';
import { SortSelect } from '@/components/catalog/SortSelect';
import { VenueGrid } from '@/components/catalog/VenueGrid';
import { useVenueFilters } from '@/hooks/useVenueFilters';
import { catalogContent } from '@/data/siteContent';

export default function CatalogPage() {
  const items = useVenueFilters();

  return (
    <section className="py-10">
      <div className="container-shell grid grid-cols-1 gap-6 lg:grid-cols-[280px,1fr]">
        <FilterPanel />
        <div>
          <div className="mb-4 space-y-2">
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-3xl font-semibold">{catalogContent.title}</h1>
              <SortSelect />
            </div>
            <p className="text-sm text-stone-600">{catalogContent.subtitle}</p>
          </div>
          <VenueGrid items={items} />
        </div>
      </div>
    </section>
  );
}
