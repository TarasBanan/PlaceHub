'use client';

import { useLanguage } from '@/components/i18n/LanguageProvider';

export function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-parchment py-8">
      <div className="container-shell text-sm text-stone-600">
        <p>{locale === 'ru' ? 'PlaceHub — маркетплейс городских пространств.' : 'PlaceHub — city venue marketplace.'}</p>
        <p>{locale === 'ru' ? 'hello@placehub.ru · +7 900 000-00-00' : 'hello@placehub.ru · +7 900 000-00-00'}</p>
      </div>
    </footer>
  );
}
