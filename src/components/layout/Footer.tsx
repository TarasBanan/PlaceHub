'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-parchment py-8">
      <div className="container-shell space-y-2 text-sm text-stone-600">
        <p>{locale === 'ru' ? 'PlaceHub — маркетплейс городских пространств.' : 'PlaceHub — city venue marketplace.'}</p>
        <div className="flex flex-wrap items-center gap-3">
          <span>hello@placehub.ru · +7 900 000-00-00</span>
          <Link href="/faq" className="rounded-sm border border-parchment bg-white px-2 py-1 text-xs font-semibold text-charcoal hover:bg-stone-50">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
}
