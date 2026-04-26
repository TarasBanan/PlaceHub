import { notFound } from 'next/navigation';
import { collections } from '@/data/collections';

export default function CollectionDetailsPage({ params }: { params: { slug: string } }) {
  const collection = collections.find((item) => item.slug === params.slug);
  if (!collection) notFound();

  return (
    <section className="py-10">
      <div className="container-shell">
        <h1 className="text-3xl font-semibold">{collection.title}</h1>
        <p>{collection.description}</p>
      </div>
    </section>
  );
}
