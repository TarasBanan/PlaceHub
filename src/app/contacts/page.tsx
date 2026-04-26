'use client';

import { useLanguage } from '@/components/i18n/LanguageProvider';
import { contactsContent, localizeText } from '@/data/siteContent';

export default function ContactsPage() {
  const { locale } = useLanguage();

  return (
    <section className="py-10">
      <div className="container-shell space-y-6">
        <h1 className="text-3xl font-semibold">{localizeText(contactsContent.title, locale)}</h1>
        <p className="max-w-3xl text-stone-700">{localizeText(contactsContent.description, locale)}</p>
        <article className="rounded-lg border border-parchment bg-white p-5">
          <ul className="space-y-3 text-lg">
            {contactsContent.details[locale].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="rounded-lg border border-parchment bg-white p-5">
          <h2 className="mb-2 text-xl font-semibold">Social</h2>
          <ul className="space-y-2 text-sm text-stone-700">
            {contactsContent.socials[locale].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </div>
    </section>
  );
}
