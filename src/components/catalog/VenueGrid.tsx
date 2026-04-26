import { Venue } from '@/types/venue';
import { VenueCard } from '@/components/catalog/VenueCard';

export function VenueGrid({ items }: { items: Venue[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => <VenueCard key={item.id} venue={item} />)}
    </div>
  );
}
