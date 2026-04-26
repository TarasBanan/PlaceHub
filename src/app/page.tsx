'use client';

import Link from 'next/link';
import { Hero } from '@/components/sections/home/Hero';
import { Calculator } from '@/components/sections/home/Calculator';
import { VenueGrid } from '@/components/catalog/VenueGrid';
import { faq } from '@/data/faq';
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
          <div className="grid gap-4 rounded-lg border border-parchment bg-white p-5 md:grid-cols-2">
            {homeContent.howItWorks[locale].map((step) => (
              <p key={step} className="text-sm text-stone-700">{step}</p>
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
        <div className="container-shell grid gap-4 md:grid-cols-[0.85fr,1.15fr]">
          <article className="rounded-lg border border-parchment bg-white p-4">
            <h3 className="mb-2 text-lg font-semibold">{t.home.reviewsTitle}</h3>
            <ul className="space-y-2 text-sm">
              {reviews.map((review) => (
                <li key={review.name + review.venue} className="text-sm text-stone-700">
                  <strong>{review.name}</strong> ({review.role}) — «{review.text}»
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-lg border border-parchment bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{t.home.faqTitle}</h3>
              <Link href="/faq" className="text-sm text-mysteria underline">{t.home.openFaqPage}</Link>
            </div>
            <ul className="space-y-3 text-sm text-stone-700">
              {faq.map((item) => (
                <li key={item.slug}>
                  <p>{item.question[locale]}</p>
                  <Link href="/faq" className="text-mysteria underline">{t.home.openAnswer}</Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
