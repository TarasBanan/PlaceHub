import { Venue } from '@/types/venue';

export type SortKey = 'popularity' | 'priceAsc' | 'priceDesc' | 'rating' | 'capacity';

export type VenueFilters = {
  category: string;
  city: string;
  guests: number;
};

export function filterVenues(venues: Venue[], filters: VenueFilters): Venue[] {
  return venues.filter((venue) => {
    const categoryMatch = filters.category ? venue.category === filters.category : true;
    const cityMatch = filters.city ? venue.city === filters.city : true;
    const guestsMatch = filters.guests > 0 ? venue.capacity >= filters.guests : true;
    return categoryMatch && cityMatch && guestsMatch;
  });
}

export function sortVenues(venues: Venue[], sort: SortKey): Venue[] {
  return [...venues].sort((a, b) => {
    if (sort === 'priceAsc') return a.pricePerHour - b.pricePerHour;
    if (sort === 'priceDesc') return b.pricePerHour - a.pricePerHour;
    if (sort === 'rating') return b.rating - a.rating;
    if (sort === 'capacity') return b.capacity - a.capacity;
    return Number(b.isPopular) - Number(a.isPopular);
  });
}
