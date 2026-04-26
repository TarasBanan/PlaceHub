'use client';

import { useLanguage } from '@/components/i18n/LanguageProvider';
import { aboutContent, localizeText } from '@/data/siteContent';

export default function AboutPage() {
  const { locale } = useLanguage();

  return (
    <section className="py-10">
      <div className="container-shell space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">{localizeText(aboutContent.title, locale)}</h1>
          <p className="max-w-3xl text-lg text-stone-700">{localizeText(aboutContent.mission, locale)}</p>
        </div>

        <section className="rounded-lg border border-parchment bg-white p-5">
          <h2 className="mb-4 text-2xl font-semibold">{locale === 'ru' ? 'Наши принципы' : 'Our principles'}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {aboutContent.values[locale].map((value) => (
              <article key={value.title} className="rounded-sm border border-parchment p-4">
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-stone-700">{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-parchment bg-white p-5">
          <h2 className="mb-4 text-2xl font-semibold">{locale === 'ru' ? 'Ключевые показатели' : 'Key metrics'}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {aboutContent.stats[locale].map((item) => (
              <article key={item} className="rounded-sm border border-parchment p-4 text-sm">
                {item}
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-parchment bg-white p-5">
          <h2 className="mb-4 text-2xl font-semibold">{locale === 'ru' ? 'Как развивался сервис' : 'Service timeline'}</h2>
          <ul className="space-y-3 text-sm text-stone-700">
            {aboutContent.timeline[locale].map((item) => (
              <li key={item} className="rounded-sm border border-parchment p-3">{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
