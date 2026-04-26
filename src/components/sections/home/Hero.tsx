'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-mysteria py-16 text-white">
      <div className="container-shell space-y-6">
        <h1 className="max-w-3xl text-4xl font-semibold md:text-6xl">{t.hero.title}</h1>
        <p className="max-w-2xl text-white/80">{t.hero.text}</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/catalog" className="rounded-sm bg-cream px-4 py-2 text-charcoal">{t.hero.find}</Link>
          <Link href="/for-owners" className="rounded-sm border border-white/30 px-4 py-2">{t.hero.addVenue}</Link>
        </div>
      </div>
    </section>
  );
}
