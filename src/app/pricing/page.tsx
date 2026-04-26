import { pricingRows } from '@/data/pricing';

export default function PricingPage() {
  return (
    <section className="py-10">
      <div className="container-shell">
        <h1 className="mb-6 text-3xl font-semibold">Цены</h1>
        <div className="overflow-hidden rounded-lg border border-parchment">
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
      </div>
    </section>
  );
}
