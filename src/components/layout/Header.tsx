'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { AuthModal } from '@/components/auth/AuthModal';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export function Header() {
  const [authOpen, setAuthOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/catalog', label: t.nav.catalog },
    { href: '/collections', label: t.nav.collections },
    { href: '/pricing', label: t.nav.pricing },
    { href: '/for-owners', label: t.nav.owners },
    { href: '/about', label: t.nav.about },
    { href: '/contacts', label: t.nav.contacts }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-parchment bg-white/95 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-semibold">PlaceHub</Link>
        <nav className="hidden gap-5 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-charcoal hover:text-mysteria">{link.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <select
            value={locale}
            onChange={(event) => setLocale(event.target.value === 'en' ? 'en' : 'ru')}
            className="rounded-sm border border-parchment bg-white px-2 py-2 text-sm"
            aria-label={t.common.language}
          >
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <Button onClick={() => setAuthOpen(true)}>{t.nav.login}</Button>
        </div>
      </div>
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </header>
  );
}
