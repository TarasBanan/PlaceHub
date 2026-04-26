import { notFound } from 'next/navigation';
import { venues } from '@/data/venues';

export default function VenuePage({ params }: { params: { slug: string } }) {
  const venue = venues.find((item) => item.slug === params.slug);
  if (!venue) notFound();

  return (
    <section className="py-10">
      <div className="container-shell space-y-6">
        <h1 className="text-3xl font-semibold">{venue.title}</h1>
        <p className="max-w-3xl text-stone-700">{venue.description}</p>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-parchment bg-white p-4">
            <h2 className="mb-2 text-lg font-semibold">Параметры площадки</h2>
            <p>Категория: {venue.category}</p>
            <p>Адрес: {venue.address}</p>
            <p>Вместимость: до {venue.capacity} гостей</p>
            <p>Цена: от {venue.pricePerHour} ₽ / час</p>
          </article>
          <article className="rounded-lg border border-parchment bg-white p-4">
            <h2 className="mb-2 text-lg font-semibold">Удобства и правила</h2>
            <p className="mb-2">Удобства: {venue.amenities.join(', ')}</p>
            <ul className="list-disc pl-5">
              {venue.rules.map((rule) => <li key={rule}>{rule}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
