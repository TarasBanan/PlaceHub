'use client';

import Link from 'next/link';
import { Venue } from '@/types/venue';
import { formatPrice } from '@/lib/utils';
import { useFavourites } from '@/hooks/useFavourites';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export function VenueCard({ venue }: { venue: Venue }) {
  const { favourites, toggle } = useFavourites();
  const { t, locale } = useLanguage();
  const isFav = favourites.includes(venue.id);

  return (
    <article className="rounded-lg border border-parchment bg-white p-3">
      <div className="mb-3 h-44 overflow-hidden rounded-sm bg-stone-100">
        <img src={venue.images[0]} alt={venue.title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <h3 className="text-lg font-semibold">{venue.title}</h3>
      <p className="text-sm text-stone-600">{venue.district} · {locale === 'ru' ? 'до' : 'up to'} {venue.capacity} {locale === 'ru' ? 'гостей' : 'guests'}</p>
      <p className="mt-1">{t.common.priceFrom} {formatPrice(venue.pricePerHour)} {locale === 'ru' ? '₽' : 'RUB'} {t.common.perHour}</p>
      <div className="mt-3 flex gap-2">
        <Link href={`/catalog/${venue.slug}`} className="rounded-sm bg-charcoal px-3 py-2 text-sm text-white">{t.common.details}</Link>
        <button onClick={() => toggle(venue.id)} className="rounded-sm border border-parchment px-3 py-2 text-sm">
          {isFav ? t.common.inFavourites : t.common.toFavourites}
        </button>
      </div>
    </article>
  );
}
