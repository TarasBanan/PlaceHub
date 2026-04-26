'use client';

import Link from 'next/link';
import { Hero } from '@/components/sections/home/Hero';
import { Calculator } from '@/components/sections/home/Calculator';
import { VenueGrid } from '@/components/catalog/VenueGrid';
import { reviews } from '@/data/reviews';
import { venues } from '@/data/venues';
import { homeContent, localizeText } from '@/data/siteContent';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function HomePage() {
  const { locale, t } = useLanguage();

  return (
    <>
      <Hero />
      <section className="py-10">
        <div className="container-shell space-y-5">
          <h2 className="text-2xl font-semibold">{localizeText(homeContent.aboutTitle, locale)}</h2>
          <p className="max-w-4xl text-stone-700">{localizeText(homeContent.aboutText, locale)}</p>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {homeContent.howItWorks[locale].map((step) => (
              <article key={step.title} className="rounded-lg border border-parchment bg-white p-4">
                <h3 className="mb-1 text-base font-semibold">{step.title}</h3>
                <p className="text-sm text-stone-700">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container-shell">
          <h2 className="mb-4 text-2xl font-semibold">{localizeText(homeContent.popularTitle, locale)}</h2>
          <VenueGrid items={venues.slice(0, 6)} />
        </div>
      </section>
      <Calculator />
      <section className="py-10">
        <div className="container-shell grid gap-4 md:grid-cols-[1fr,auto]">
          <article className="max-w-2xl rounded-lg border border-parchment bg-white p-4">
            <h3 className="mb-2 text-base font-semibold">{t.home.reviewsTitle}</h3>
            <ul className="space-y-2 text-sm">
              {reviews.map((review) => (
                <li key={review.name + review.venue} className="text-stone-700">
                  <strong>{review.name}</strong> ({review.role}) — «{review.text}»
                </li>
              ))}
            </ul>
          </article>
          <div className="flex items-start md:justify-end">
            <Link href="/faq" className="rounded-sm border border-parchment bg-white px-3 py-2 text-sm font-semibold text-charcoal hover:bg-stone-50">
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
