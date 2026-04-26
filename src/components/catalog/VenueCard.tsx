'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Venue } from '@/types/venue';
import { formatPrice } from '@/lib/utils';
import { useFavourites } from '@/hooks/useFavourites';

export function VenueCard({ venue }: { venue: Venue }) {
  const { favourites, toggle } = useFavourites();
  const isFav = favourites.includes(venue.id);

  return (
    <article className="rounded-lg border border-parchment bg-white p-3">
      <div className="relative mb-3 h-44 overflow-hidden rounded-sm">
        <Image src={venue.images[0]} alt={venue.title} fill className="object-cover" />
      </div>
      <h3 className="text-lg font-semibold">{venue.title}</h3>
      <p className="text-sm text-stone-600">{venue.district} · до {venue.capacity} гостей</p>
      <p className="mt-1">от {formatPrice(venue.pricePerHour)} ₽ / час</p>
      <div className="mt-3 flex gap-2">
        <Link href={`/catalog/${venue.slug}`} className="rounded-sm bg-charcoal px-3 py-2 text-sm text-white">Подробнее</Link>
        <button onClick={() => toggle(venue.id)} className="rounded-sm border border-parchment px-3 py-2 text-sm">
          {isFav ? 'В избранном' : 'В избранное'}
        </button>
      </div>
    </article>
  );
}
