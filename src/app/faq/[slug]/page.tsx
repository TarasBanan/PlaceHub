'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { faq } from '@/data/faq';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function FaqAnswerPage({ params }: { params: { slug: string } }) {
  const { locale } = useLanguage();
  const item = faq.find((entry) => entry.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <section className="py-10">
      <div className="container-shell max-w-3xl space-y-4 rounded-lg border border-parchment bg-white p-6">
        <h1 className="text-3xl font-semibold">{item.question[locale]}</h1>
        <p className="text-stone-700">{item.answer[locale]}</p>
        <Link href="/" className="text-mysteria underline">{locale === 'ru' ? 'Вернуться на главную' : 'Back to homepage'}</Link>
      </div>
    </section>
  );
}
