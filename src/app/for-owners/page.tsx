'use client';

import { ownerPlans } from '@/data/ownerPlans';
import { ownersContent, localizeText } from '@/data/siteContent';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function ForOwnersPage() {
  const { locale } = useLanguage();

  return (
    <section className="py-10">
      <div className="container-shell space-y-6">
        <h1 className="text-3xl font-semibold">{localizeText(ownersContent.title, locale)}</h1>
        <p className="max-w-3xl text-stone-700">{localizeText(ownersContent.lead, locale)}</p>

        <div className="grid gap-4 md:grid-cols-3">
          {ownerPlans.map((plan) => (
            <article key={plan.name} className="rounded-lg border border-parchment bg-white p-4">
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="my-2">{plan.price}</p>
              <ul className="list-disc pl-5 text-sm text-stone-600">
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-parchment bg-white p-4">
            <h3 className="mb-2 text-lg font-semibold">{locale === 'ru' ? 'Как подключиться' : 'How to join'}</h3>
            <ul className="list-disc pl-5 text-sm text-stone-700">
              {ownersContent.steps[locale].map((step) => <li key={step}>{step}</li>)}
            </ul>
          </article>
          <article className="rounded-lg border border-parchment bg-white p-4">
            <h3 className="mb-2 text-lg font-semibold">{locale === 'ru' ? 'Требования к площадке' : 'Venue requirements'}</h3>
            <ul className="list-disc pl-5 text-sm text-stone-700">
              {ownersContent.requirements[locale].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
