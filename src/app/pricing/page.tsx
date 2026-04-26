import { pricingRows } from '@/data/pricing';
import { pricingContent } from '@/data/siteContent';

export default function PricingPage() {
  return (
    <section className="py-10">
      <div className="container-shell space-y-6">
        <h1 className="text-3xl font-semibold">{pricingContent.title}</h1>
        <p className="max-w-3xl text-stone-700">{pricingContent.description}</p>
        <div className="overflow-hidden rounded-lg border border-parchment bg-white">
          <table className="w-full text-left">
            <tbody>
              {pricingRows.map(([name, price]) => (
                <tr key={name} className="border-b border-parchment last:border-none">
                  <td className="p-3">{name}</td>
                  <td className="p-3">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-hidden rounded-lg border border-parchment bg-white">
          <h2 className="border-b border-parchment p-3 text-xl font-semibold">Дополнительные услуги</h2>
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
      </div>
    </section>
  );
}
