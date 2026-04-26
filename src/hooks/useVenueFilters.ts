'use client';

import { venues } from '@/data/venues';
import { filterVenues, sortVenues } from '@/lib/filters';
import { useCatalogStore } from '@/store/catalogStore';

export function useVenueFilters() {
  const category = useCatalogStore((state) => state.category);
  const city = useCatalogStore((state) => state.city);
  const guests = useCatalogStore((state) => state.guests);
  const sort = useCatalogStore((state) => state.sort);

  return sortVenues(filterVenues(venues, { category, city, guests }), sort);
}
