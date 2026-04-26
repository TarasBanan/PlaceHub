'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { AuthModal } from '@/components/auth/AuthModal';

const links = [
  { href: '/', label: 'Главная' },
  { href: '/catalog', label: 'Каталог' },
  { href: '/collections', label: 'Подборки' },
  { href: '/pricing', label: 'Цены' },
  { href: '/for-owners', label: 'Для владельцев' },
  { href: '/about', label: 'О сервисе' },
  { href: '/contacts', label: 'Контакты' }
];

export function Header() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-parchment bg-white/95 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold">PlaceHub</Link>
        <nav className="hidden gap-5 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-charcoal hover:text-mysteria">{link.label}</Link>
          ))}
        </nav>
        <Button onClick={() => setAuthOpen(true)}>Войти</Button>
      </div>
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </header>
  );
}
