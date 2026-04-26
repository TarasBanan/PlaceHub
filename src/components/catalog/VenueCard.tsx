'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Venue } from '@/types/venue';
import { formatPrice } from '@/lib/utils';
import { useFavourites } from '@/hooks/useFavourites';
import { useLanguage } from '@/components/i18n/LanguageProvider';

const gradients = [
  'from-slate-300 via-slate-100 to-slate-400',
  'from-stone-300 via-stone-100 to-zinc-300',
  'from-gray-300 via-gray-100 to-slate-300',
  'from-zinc-300 via-slate-100 to-gray-300'
];

function PlaceholderImage({ index }: { index: number }) {
  const gradient = gradients[index % gradients.length];

  return (
    <div className={`relative h-full w-full overflow-hidden rounded-sm bg-gradient-to-br ${gradient}`}>
      <div className="absolute -left-8 top-6 h-24 w-24 rounded-full bg-white/40" />
      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-slate-500/40 to-transparent" />
      <div className="absolute right-6 top-8 h-12 w-16 rotate-12 rounded-md bg-white/45" />
      <div className="absolute bottom-8 right-8 h-8 w-20 rounded-full border-2 border-white/50" />
    </div>
  );
}

export function VenueCard({ venue }: { venue: Venue }) {
  const { favourites, toggle } = useFavourites();
  const { t, locale } = useLanguage();
  const [imageBroken, setImageBroken] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isFav = favourites.includes(venue.id);
  const placeholderIndex = useMemo(() => venue.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0), [venue.id]);

  return (
    <article className="rounded-lg border border-parchment bg-white p-3">
      <div className="relative mb-3 h-44 overflow-hidden rounded-sm bg-slate-100">
        <PlaceholderImage index={placeholderIndex} />
        {!imageBroken ? (
          <img
            src={venue.images[0]}
            alt={venue.title}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onError={() => setImageBroken(true)}
            onLoad={() => setImageLoaded(true)}
          />
        ) : null}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-3 text-white">
          <p className="text-xs font-semibold">{venue.title}</p>
        </div>
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
