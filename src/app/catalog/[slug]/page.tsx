'use client';

import { notFound } from 'next/navigation';
import { venues } from '@/data/venues';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function VenuePage({ params }: { params: { slug: string } }) {
  const { locale } = useLanguage();
  const venue = venues.find((item) => item.slug === params.slug);
  if (!venue) notFound();

  return (
    <section className="py-10">
      <div className="container-shell space-y-6">
        <h1 className="text-3xl font-semibold">{venue.title}</h1>
        <p className="max-w-3xl text-stone-700">{venue.description}</p>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-parchment bg-white p-4">
            <h2 className="mb-2 text-lg font-semibold">{locale === 'ru' ? 'Параметры площадки' : 'Venue parameters'}</h2>
            <p>{locale === 'ru' ? 'Категория' : 'Category'}: {venue.category}</p>
            <p>{locale === 'ru' ? 'Адрес' : 'Address'}: {venue.address}</p>
            <p>{locale === 'ru' ? 'Вместимость' : 'Capacity'}: {locale === 'ru' ? 'до' : 'up to'} {venue.capacity} {locale === 'ru' ? 'гостей' : 'guests'}</p>
            <p>{locale === 'ru' ? 'Цена' : 'Price'}: {locale === 'ru' ? 'от' : 'from'} {venue.pricePerHour} {locale === 'ru' ? '₽ / час' : 'RUB / hour'}</p>
          </article>
          <article className="rounded-lg border border-parchment bg-white p-4">
            <h2 className="mb-2 text-lg font-semibold">{locale === 'ru' ? 'Удобства и правила' : 'Amenities and rules'}</h2>
            <p className="mb-2">{locale === 'ru' ? 'Удобства' : 'Amenities'}: {venue.amenities.join(', ')}</p>
            <ul className="list-disc pl-5">
              {venue.rules.map((rule) => <li key={rule}>{rule}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
