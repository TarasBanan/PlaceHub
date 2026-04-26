'use client';

import { notFound } from 'next/navigation';
import { collections } from '@/data/collections';
import { venues } from '@/data/venues';
import { VenueGrid } from '@/components/catalog/VenueGrid';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function CollectionDetailsPage({ params }: { params: { slug: string } }) {
  const { locale } = useLanguage();
  const collection = collections.find((item) => item.slug === params.slug);
  if (!collection) notFound();

  return (
    <section className="py-10">
      <div className="container-shell space-y-6">
        <h1 className="text-3xl font-semibold">{collection.title}</h1>
        <p className="max-w-3xl text-stone-700">{collection.description}</p>
        <p className="text-sm text-stone-500">{collection.venueCount} {locale === 'ru' ? 'площадок' : 'venues'} · {locale === 'ru' ? 'Средняя цена' : 'Average price'} {collection.averagePrice}</p>
        <VenueGrid items={venues.slice(0, 4)} />
      </div>
    </section>
  );
}
