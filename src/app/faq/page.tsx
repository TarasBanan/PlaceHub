'use client';

import { useState } from 'react';
import { faq } from '@/data/faq';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function FaqPage() {
  const { locale, t } = useLanguage();
  const [openSlug, setOpenSlug] = useState<string>('');

  return (
    <section className="py-10">
      <div className="container-shell max-w-4xl space-y-4">
        <h1 className="text-3xl font-semibold">{t.common.faq}</h1>
        <p className="text-stone-600">{locale === 'ru' ? 'Нажмите на вопрос, чтобы увидеть ответ.' : 'Click a question to reveal the answer.'}</p>
        <div className="space-y-3">
          {faq.map((item) => {
            const isOpen = openSlug === item.slug;

            return (
              <article key={item.slug} className="rounded-lg border border-parchment bg-white">
                <button
                  className="flex w-full items-center justify-between px-4 py-4 text-left font-semibold"
                  onClick={() => setOpenSlug(isOpen ? '' : item.slug)}
                >
                  <span>{item.question[locale]}</span>
                  <span>{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="border-t border-parchment px-4 py-3 text-stone-700">
                    {item.answer[locale]}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
