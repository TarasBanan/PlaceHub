import { notFound } from 'next/navigation';
import { venues } from '@/data/venues';
import { Calculator } from '@/components/sections/home/Calculator';

export default function VenuePage({ params }: { params: { slug: string } }) {
  const venue = venues.find((item) => item.slug === params.slug);
  if (!venue) notFound();

  return (
    <section className="py-10">
      <div className="container-shell space-y-5">
        <h1 className="text-3xl font-semibold">{venue.title}</h1>
        <p>{venue.description}</p>
        <p>{venue.address} · до {venue.capacity} гостей</p>
        <Calculator />
      </div>
    </section>
  );
}
