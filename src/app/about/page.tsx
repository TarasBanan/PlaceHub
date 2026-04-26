'use client';

import { useLanguage } from '@/components/i18n/LanguageProvider';
import { aboutContent, localizeText } from '@/data/siteContent';

export default function AboutPage() {
  const { locale } = useLanguage();

  return (
    <section className="py-10">
      <div className="container-shell space-y-6">
        <h1 className="text-3xl font-semibold">{localizeText(aboutContent.title, locale)}</h1>
        <p className="max-w-3xl text-stone-700">{localizeText(aboutContent.mission, locale)}</p>
        <div className="grid gap-4 rounded-lg border border-parchment bg-white p-5 md:grid-cols-2 lg:grid-cols-3">
          {aboutContent.stats[locale].map((item) => (
            <article key={item} className="rounded-sm border border-parchment p-4 text-sm">
              {item}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
