'use client';

import Link from 'next/link';
import { collections } from '@/data/collections';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function CollectionsPage() {
  const { locale } = useLanguage();

  return (
    <section className="py-10">
      <div className="container-shell space-y-6">
        <h1 className="text-3xl font-semibold">{locale === 'ru' ? 'Подборки площадок' : 'Venue collections'}</h1>
        <p className="max-w-3xl text-stone-700">{locale === 'ru' ? 'Готовые сценарии под задачи: деловые встречи, лекции, съёмки, pop-up форматы и корпоративные события.' : 'Ready-made sets for business meetings, lectures, shooting, pop-up formats and corporate events.'}</p>
        <div className="grid gap-4 md:grid-cols-2">
          {collections.map((item) => (
            <article key={item.slug} className="rounded-lg border border-parchment bg-white p-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mb-2 text-stone-600">{item.description}</p>
              <p className="text-sm text-stone-500">{item.venueCount} {locale === 'ru' ? 'площадок' : 'venues'} · {item.averagePrice}</p>
              <Link className="mt-3 inline-block underline" href={`/collections/${item.slug}`}>{locale === 'ru' ? 'Открыть подборку' : 'Open collection'}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
