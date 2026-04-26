'use client';

import { pricingContent } from '@/data/siteContent';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function PricingPage() {
  const { t } = useLanguage();

  return (
    <section className="py-10">
      <div className="container-shell space-y-6">
        <h1 className="text-3xl font-semibold">{t.pricing.title}</h1>
        <p className="max-w-3xl text-stone-700">{t.pricing.description}</p>
        <div className="overflow-hidden rounded-lg border border-parchment bg-white">
          <h2 className="border-b border-parchment p-3 text-xl font-semibold">{t.pricing.addonsTitle}</h2>
          <table className="w-full text-left">
            <tbody>
              {pricingContent.addons.map(([name, price]) => (
                <tr key={name} className="border-b border-parchment last:border-none">
                  <td className="p-3">{name}</td>
                  <td className="p-3">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="rounded-lg border border-parchment bg-white p-4 text-sm text-stone-600">{t.pricing.customNote}</p>
      </div>
    </section>
  );
}
