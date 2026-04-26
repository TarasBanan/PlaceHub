import Link from 'next/link';
import { collections } from '@/data/collections';

export default function CollectionsPage() {
  return (
    <section className="py-10">
      <div className="container-shell">
        <h1 className="mb-6 text-3xl font-semibold">Подборки</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {collections.map((item) => (
            <article key={item.slug} className="rounded-lg border border-parchment p-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mb-3 text-stone-600">{item.description}</p>
              <Link className="underline" href={`/collections/${item.slug}`}>Открыть подборку</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
